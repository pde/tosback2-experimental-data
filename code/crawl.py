#!/usr/bin/env python

import subprocess
import random
import git
import time
import os,os.path,shutil
import re
import sys
from lxml import etree

# TODO(dta) use multiprocessing module
# at some point in the future

# parse command line args
xml_test = False
dry_run = False
keep_failed = False
force_data_branch = False
if "--xml_test" in sys.argv: xml_test = True
if "--dry_run" in sys.argv: dry_run = True
if "--keep_failed" in sys.argv: keep_failed = True
if "--force_data_branch" in sys.argv: force_data_branch = True

FILELENGTH_MAX = 127
GLOBAL_UAS = ["Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.1.3) Gecko/20090824 Firefox/3.5.3 (.NET CLR 3.5.30729)"]
CODE_PATH = os.path.dirname(sys.argv[0])

class TOSCrawler(object):
    """Class to process xml files sequentially"""
    def __init__(self, xml_file_name=None):
        if xml_file_name:
            self.read(xml_file_name)

    def sanitize(self, filename):
        return re.sub(r'\W+', '-', filename)

    def read(self, file_name):
        """Parses XML file."""
        # TODO(dta) test on many-to-one urls
        xmlData = etree.parse(os.path.join(CODE_PATH, "..", "rules", file_name))
        data = {}
        for node in xmlData.iter():
        	data[str(node.tag)] = node.attrib['name']
        return data

    def read2(self, file_name):
	"""Parses XML file."""
	# EDIT CJR for multiple docnames within a sitename
	xmlData = etree.parse(os.path.join(CODE_PATH, "..", "rules", file_name))
	dataLst = []
	for node in xmlData.iter("sitename"):
		sname = node.attrib['name']
		break
	for doc in xmlData.iter("docname"):
		data = {}
		data['docname'] = doc.attrib['name']
		data['sitename'] = sname
		for child in doc.iter():
			data[str(child.tag)] = child.attrib['name']
		dataLst.append(data)
	return dataLst

    def process(self, data):
        # 0. Determine parameters for this crawl
        assert "sitename" in data, "Every rule needs a sitename"
        sitename = data["sitename"]
        assert "docname" in data, "Every rule needs a docname"
        docname = self.sanitize(data["docname"])
        assert "url" in data, "Every rule needs a url"
        url = data["url"]

        recurse = "norecurse" not in data
        xpath = "xpath" not in data

        if 'UAs' in data:
            UAs = data['UAs']
        else:
            UAs = GLOBAL_UAS

        # 1. Prepare a directory for the crawl results
        target = os.path.join(CODE_PATH,"..","crawls",sitename,docname)
        rawtarget = os.path.join(CODE_PATH,"..","crawls",sitename,docname,"raw")
        reltarget = os.path.join("crawls", sitename, docname)
        if os.path.isdir(target):
            # rm -rf the previous crawl state
            shutil.rmtree(target)
        os.makedirs(rawtarget)

        # 2. Do wget lookup
        print "Crawling %s" % url
        args = [
            'wget', 
            # Obtain images, CSS, etc, even from other domains
            '--page-requisites',
            '--span-hosts',
            # Obtain the Terms of Service, even if j.random crawler is blocked
            '--execute', 'robots=off', 
            '--user-agent', random.choice(UAs), 
            # Put results in the right place
            '--directory-prefix', rawtarget,
            # '--output-file', '%s_wget.log' % url,   # URLs are not safe filenames
            '--output-file=' + os.path.join(target,"wget.log"),
            # Format things for historical/offline browsing
            '--convert-links',
            '--adjust-extension',
            # Sensible timeout/retries
            '--timeout', '15',
            '--tries', '3',
            url]
        if recurse:
            args[-1:-1] = ['--recursive', '--level', '1']
        print "calling ", args
        subprocess.call(args)
        return reltarget

def max_filename_length(root_dir):
	my_max = (0,"")
	names = os.listdir(root_dir)
	for name in names:
		full_name = os.path.join(root_dir,name)
		if len(name) > my_max[0]:
			my_max = (len(name),name)
		if os.path.isdir(full_name):
			m = max_filename_length(full_name)
			if m[0] > my_max[0]:
				my_max = m
	return my_max

def main():
    # 1. make a git branch to work in
    branchname = "crawl-" + time.strftime("%Y-%m-%d-%H-%M-%S")
    repopath=os.path.join(CODE_PATH,"..")
    gitrepo = git.Repo(repopath)
    committed = False
    original_branch = gitrepo.active_branch
    if force_data_branch and str(original_branch) != "data":
        print "In '%s' branch, but must be in 'data' branch. Aborting!" % original_branch
        return
    try:
        gitrepo.create_head(branchname)
        gitrepo.branches[branchname].checkout()

        # 2. initialize TOSCrawler
        t = TOSCrawler()

        # 3. Traverse
        crawl_paths = []
        parsed_xml_files = []
        for fi in os.listdir(os.path.join(CODE_PATH,"..","rules")):
		if fi[-4:]!=".xml": continue
		print "Reading in XML file %s" % fi
		for i in t.read2(fi):
		    parsed_xml_files.append(i)

        if xml_test:
            print "XML test only. Exiting"
            return

        for data in parsed_xml_files:
            path = t.process(data)
            crawl_paths.append(path)

        # 4. commit results
	crawls_dir = os.path.join(CODE_PATH,"..","crawls")
        (maxlen, maxfname) = max_filename_length(crawls_dir)
	if maxlen > FILELENGTH_MAX:
		print "The longest filename you crawled is too long. Use our version of wget."
		return

        if dry_run:
            print "Dry run. Not commiting results"
            return

        print "Committing results..."
        gitrepo.index.add(crawl_paths)
        commit_msg = "Crawl completed at " + time.strftime("%Y-%m-%d-%H-%M-%S")
        os.environ["GIT_AUTHOR_NAME"]="Robbie Robot"
        os.environ["GIT_AUTHOR_EMAIL"]="robots@dev.null"
        committed = gitrepo.index.commit(commit_msg)


    finally:
        original_branch.checkout()

        if not committed and not keep_failed:
            # We didn't finish the crawl; unless the user asked for it we
            # won't keep the result. PS -- who on earth designed this API
            gitrepo.branches[branchname].delete(gitrepo,branchname)
            if branchname in gitrepo.branches:
                print "Failed to delete crawl branch %s for mysterious reasons" % branchname
            # rm rf
            crawls_dir = os.path.join(CODE_PATH,"..","crawls")
            shutil.rmtree(crawls_dir)
            if not os.path.isdir(crawls_dir):
                os.makedirs(crawls_dir)
            # todo think about whether "git reset --hard" makes sense

main()
