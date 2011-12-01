jQuery.noConflict();
// JavaScript Document

jQuery(document).ready(function() {


    /* false nav || no secondary nav */
    if (jQuery('a').is('#about_us_false_nav')) {
        jQuery('div#mainNavigation').addClass('falseNav');
    }
    if (jQuery('div').is('.falseNavSeparator')) {
        jQuery('div#mainNavigation').addClass('falseNav');
        if (jQuery.browser.msie) {
            jQuery('div#mainNavigation').css('height', '100px').css('background', 'url(/Common/global/images/about_us/ie-bkg-mainnavigation_falsenav.png) left top no-repeat !important');
            jQuery('div#content').css('padding', '0 0 10px 10px');
        }
        jQuery('div#mainNavigation').append('<ul id="PrimaryNav"> '
			 + '<li class="logo"><a href="http://www.att.com/"><img width="40" height="40" title="AT&amp;T" alt="AT&amp;T" src="/Common/indc/images/new/att_logo_for_nav.gif"></a></li>	<li class="selected"><a href="/gen/landing-pages?pid=3309" title="About Us" id="about_us_false_nav"> About Us </a></li>'
			 + '<li class="search">'
			 + '<form method="get" id="searchForm" name="searchForm" action="http://www.att.com/global-search/search.jsp">'
			 + '<fieldset>'
			 + '<input type="text" value="Search" name="q" id="search" title="Enter search keywords" onClick="if (this.value == \'Search\') { this.value=\'\' }" onFocus="if (this.value == \'Search\') { this.value=\'\' }" />'
			 + '<label for="searchSubmit">Go</label>'
			 + '<input type="image" src="/Common/indc/images/new/btn_search.png" value="Search" alt="Submit search" class="btnGo" id="searchSubmit" />'
			 + '</fieldset>'
			 + '</form>'
			 + '</li></ul><ul id="noimg_PrimaryNav">'
			 + '<style type="text/css">'
			 + '#wrapper #PrimaryNav {margin:0;*overflow:hidden;}'
			 + '#wrapper #PrimaryNav li.search {float:right;margin-right:20px;line-height:1;}'
			 + '#wrapper #mainNavigation {height:55px !important; *margin-top:0;}'
			 + '</style>'
			 + ' </ul>');
        jQuery('div.falseNavSeparator').hide();

    }


    /* tertiary nav */
    jQuery('.tertiaryNav').hide();

    /*TERTIARY GLOBAL MENUS*************************************** */
    //TERTIARY INTERNET


    jQuery(".secondaryNav li").hover(
			function() {
			    jQuery(this).children(".tertiaryNav").show();
			    if (jQuery(this).children(".tertiaryNav").length != '0') {
			        jQuery(this).addClass("showTray");
			    }
			}, function() {
			    jQuery(this).children(".tertiaryNav").hide();
			    jQuery(this).removeClass("showTray");
			}); //hover 

    /* for IE top tabs */
    if (jQuery.browser.msie) {
        jQuery('.topLeftTabs li#biz').hover(
				function() {
				    jQuery(this).children("ul").show();
				    jQuery(this).addClass("showMenu");
				}, function() {
				    jQuery(this).children("ul").hide();
				    jQuery(this).removeClass("showMenu");
				});
    }

    /* tabs */



    if (jQuery('#contentDiv div.tabs').length == '0' || jQuery('#contentDiv div.tabs').length == '1') {
        /* these are faux tabs, leave alone */
    } else {

        jQuery('#contentDiv div.tabs').addClass('menu-box');
        jQuery('#navContainer > li').addClass('menu-item');
        jQuery('#tabContainer').addClass('jmenu');

        jQuery("#navContainer > li").attr('id', function(i, val) {
            return 'item' + (jQuery(this).index() + 1);

        });
        currentTab = location.href;
        trimTab = currentTab.indexOf('#tab');
        if (trimTab != '-1') {
            currentTab = currentTab.substr(trimTab + 4);
            checkAnc = currentTab.indexOf('#')
            if (checkAnc != "-1") {
                currentTab = currentTab.substring(0, checkAnc);
            }
            if (currentTab == '0') {
                tab = '0'
            }
            /*		if (currentTab.length == 1) {
            currentTab = '0' + currentTab;
            }
            alert(currentTab);*/
            jQuery('.menu-box').hide();
            currentItem = '#item' + currentTab;
            currentTab = jQuery(currentItem).children().attr('href');
            jQuery('.menu-item').removeClass('active');
            jQuery(currentItem).addClass('active');
            jQuery(currentTab).show();
        }
        else {
            if (jQuery('div').is('.jmenu')) {
                jQuery('.menu-box').hide();
                jQuery('.jmenu ul:first-child li:first-child').addClass('active');
                findItem = jQuery('.jmenu ul:first-child li:first-child');
                findItemID = jQuery(findItem).attr('id');
                firstBox = jQuery(findItem).children().attr('href');
                jQuery(firstBox).show();
            }
        }
    }
    //change tabs  
    jQuery('.menu-item').click(function() {
        //alert();
        //this.addClass('hi');
        jQuery('.menu-box').hide();
        jQuery('.menu-item').removeClass('active');
        var current = jQuery(this).attr('id');
        current = current.substr(4);
        current = '#tab' + current;
        jQuery(this).addClass('active');
        jQuery(current).show();
        return false;
    });
    jQuery('.gototab').click(function() {
        //alert();
        jQuery('.menu-box').hide();
        jQuery('.menu-item').removeClass('active');
        var newBox = jQuery(this).attr('href');
        var newNavItem = '#item' + newBox.substr(4);
        jQuery(newNavItem).addClass('active');
        jQuery(newBox).show();
        return false;
    });

});



/* trays */

var site = '';

thomson = location.href;
thomson = thomson.indexOf('phx.corporate');
//alert (thomson);

if (location.href.indexOf('historic_att_stock') == '27') {
    pid = 'historicattstock';
    site = 'http://www.att.com';
}
//alert(pid);

rss = location.href;
rss = rss.indexOf('rss');
//alert('RSS:' + rss);
if (rss != '-1') {
    pid = 'rss';
    site = 'http://www.att.com';
}

attexecutivenews = location.href;
attexecutivenews = attexecutivenews.indexOf('executivenews');
//alert(attexecutivenews);
if (attexecutivenews != '-1') {
    pid = 'attexecutivenews';
    site = 'http://www.att.com';
}

if (thomson != '-1') {
    pid = 'thomson';
    site = 'http://www.att.com';
    var thomsonID = location.href;
    checkURL = thomsonID.indexOf('p=');
    if (checkURL != '-1') {
        thomsonID = thomsonID.substr(checkURL + 2);
        checkAnd = thomsonID.indexOf('&');
        if (checkAnd != '-1') { thomsonID = thomsonID.split('&'); thomsonID = thomsonID[0]; }
        checkAnc = thomsonID.indexOf('#');
        if (checkAnc != '-1') { thomsonID = thomsonID.split('#'); thomsonID = thomsonID[0]; }
        //alert(thomsonID);
        pid = thomsonID;
        //alert(thomsonID);
    }
    pid = pid.toLowerCase();
}
if (location.href.indexOf('historic_att_stock') != '-1') {
    pid = 'historicattstock';
    site = 'http://www.att.com';
}


function au_corporate_profile_nav() {
    document.write('<ul class="tertiaryNav cols4" id="au_corporate_profile_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_corp_profile.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Key Corporate Facts</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5711" title="Company Overview">Company Overview</a></li>'
				 + '<li><a href="' + site + '/gen/general?pid=20344" title="Corporate Awards">Corporate Awards</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Leadership Profiles</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=7811" title="AT&amp;T Senior Executives">AT&amp;T Senior Executives</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5629" title="AT&amp;T Directors">AT&amp;T Directors</a></li>'
				 + '<li><a href="' + site + '/gen/general?pid=18600" title="Meet the Senior Leaders">Meet the Senior Leaders</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>In the Community</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17722" title="Community Impact">Community Impact</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17723" title="Making Ourselves Culturally Relevant">Making Ourselves Culturally Relevant</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17724" title="Commitment to Supplier Diversity">Commitment to Supplier Diversity</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2760" title="Disability Services Promise">Disability Services Promise</a></li>'
				 + '<li><a href="' + site + '/gen/landing-pages?pid=7735" title="In the Community">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>In Our Company</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=7738" title="Diversity Management">Diversity Management</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17725" title="Workforce Inclusion">Workforce Inclusion</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2684" title="Our People">Our People</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17721" title="Diversity Awards and Recognition">Diversity Awards and Recognition</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function au_sustainability_nav() {
    document.write('<ul class="tertiaryNav cols4" id="au_sustainability_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_sustainability.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>People and Communities</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=12307" title="Community Giving and Support">Community Giving and Support</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17890" title="Diversity Management">Diversity Management</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17888" title="Workforce">Workforce</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17893" title="Sustainability Governance">Sustainability Governance</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Environment</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17895" title="GHG Emissions">GHG Emissions</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17896" title="Energy and Water">Energy and Water</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17902" title="Waste Management">Waste Management</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17914" title="Product Stewardship">Product Stewardship</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Technology</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17909" title="ICT Solutions">ICT Solutions</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17915" title="Privacy, Safety and Accessibility">Privacy, Safety and Accessibility</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17918" title="Disaster Relief">Disaster Relief</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=8511" title="Innovation">Innovation</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>Additional Information</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/landing-pages?pid=6425" title="Awards and Honors">Awards and Honors</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17196" title="Frequently Requested Information">Frequently Requested Information</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function au_innovation_nav() {
    document.write('<ul class="tertiaryNav cols2" id="au_innovation_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_innovation.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Innovation in the Works</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.attinnovationspace.com/" title="Get the News - Innovation Space Blog">Get the News - Innovation Space Blog</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=14188" title="Creating in the AT&amp;T Labs">Creating in the AT&amp;T Labs</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=14189" title="Innovation in Action">Innovation in Action</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Innovation For All</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=5882" title="Innovating life - Intellectual Property">Innovating life - Intellectual Property</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2949" title="Collaboration - AT&amp;T Foundry">Collaboration - AT&amp;T Foundry</a></li>'
				 + '<li><a href="http://www.att.com/rethinkpossible/" title="Rethink Possible">Rethink Possible</a></li>' + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function au_doing_business_nav() {
    document.write('<ul class="tertiaryNav cols2" id="au_doing_business_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_doing_business.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Supplier Partnerships</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17724" title="Commitment to Supplier Diversity">Commitment to Supplier Diversity</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Our Customer Guarantee</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=11366" title="Delivering Great Customer Service">Delivering Great Customer Service</a></li>'
				 + '<li><a href="' + site + '/gen/privacy-policy?pid=2506" title="Privacy Commitment and Policy">Privacy Commitment and Policy</a></li>'
				 + '<li><a href="' + site + '/gen/public-affairs?pid=9700" title="Service Terms and Descriptions">Service Terms and Descriptions</a></li>' + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function au_diversity_mgmt_nav() {
    document.write('<ul class="tertiaryNav cols2" id="au_diversity_mgmt_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_diversity_mgmt.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>In the Community</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17722" title="Community Impact">Community Impact</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17723" title="Making Ourselves Culturally Relevant">Making Ourselves Culturally Relevant</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17724" title="Commitment to Supplier Diversity">Commitment to Supplier Diversity</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2760" title="Disability Services Promise">Disability Services Promise</a></li>'
				 + '<li><a href="' + site + '/gen/landing-pages?pid=7735" title="In the Community">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>In Our Company</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17725" title="Workforce Inclusion">Workforce Inclusion</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2684" title="Our People">Our People</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=17721" title="Diversity Awards and Recognition">Diversity Awards and Recognition</a></li>' + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function au_careers_nav() {
    document.write('<ul class="tertiaryNav cols2" id="au_careers_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_careers.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Careers With Us</strong>'
				 + '<ul>'
				 + '<li><a href="http://att.jobs/" title="Search and Apply for Jobs">Search and Apply for Jobs</a></li>'
				 + '<li><a href="http://twitter.com/ATTJobs" target="_blank" title="Job Leads on the go @ATTJobs">Job Leads on the go @ATTJobs</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Learn About Us</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2684" title="Our People">Our People</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5711" title="Corporate Profile">Corporate Profile</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=7738" title="Our Diversity Commitment">Our Diversity Commitment</a></li>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=7770" title="Investing in our People">Investing in our People</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function au_media_resources_nav() {
    document.write('<ul class="tertiaryNav cols2" id="mn_recent_releases_nav">'
				 + '<li class="image" style="background-image:url(/Common/global/images/about_us/tray/bkg_tray_products_services.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>News Sources</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/Common/about_us/news.html" title="Recent Releases">Recent Releases</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9880" title="Search Release Archives">Search Release Archives</a></li>'
				 + '<li><a href="http://att.centralcast.net/rss/display/default.aspx" title="RSS Feeds">RSS Feeds</a></li>'
				 + '<li><a href="http://espanol.att.com" title="AT&amp;T en Espa&ntilde;ol">AT&amp;T en Espa&ntilde;ol</a></li>'
				 + '<li><a href="http://world.att.com/" title="AT&amp;T World">AT&amp;T World</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Media Resources</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5834" title="Media Kits">Media Kits</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=6209" title="Multimedia Gallery">Multimedia Gallery</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1916" title="Media Inquiries">Media Inquiries</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9201" title="Events Calendar">Events Calendar</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function mn_recent_releases_nav() {
    document.write('<ul class="tertiaryNav cols3" id="mn_recent_releases_nav">'
				 + '<li class="image" style="background-image:url(/Common/global/images/about_us/tray/bkg_tray_products_services.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>News Sources</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/Common/about_us/news.html" title="Recent Releases">Recent Releases</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9880" title="Search Release Archives">Search Release Archives</a></li>'
				 + '<li><a href="http://att.centralcast.net/rss/display/default.aspx" title="RSS Feeds">RSS Feeds</a></li>'
				 + '<li><a href="http://espanol.att.com" title="AT&amp;T en Espa&ntilde;ol">AT&amp;T en Espa&ntilde;ol</a></li>'
				 + '<li><a href="http://world.att.com/" title="AT&amp;T World">AT&amp;T World</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Media Resources</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5834" title="Media Kits">Media Kits</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=6209" title="Multimedia Gallery">Multimedia Gallery</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1916" title="Media Inquiries">Media Inquiries</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>IR News</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9880" title="Search IR News Release Archives">Search IR News Release Archives</a></li>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&p=irol-alerts" title="Receive E-mail Alerts">Receive E-mail Alerts</a></li>'
				 + '<li><a href="http://att.centralcast.net/rss/default.aspx" title="Subscribe to our RSS">Subscribe to our RSS</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function mn_media_kits_nav() {
    document.write('<ul class="tertiaryNav cols4" id="mn_media_kits_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_media_kits.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Consumer Goods</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1841" title="Mobile Phones">Mobile Phones</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=13434" title="Emerging Devices">Emerging Devices</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5838" title="U-verse">U-verse</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1941" title="Wireless Networks">Wireless Networks</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5834" title="More">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Growing Small Businesses</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=17789" title="Small Business Mobility">Small Business Mobility</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2936" title="Small Business Overview">Small Business Overview</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2810" title="Tech Support 360">Tech Support 360</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=12201" title="Business Customer News">Business Customer News</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5834" title="More">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Business Basics</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=18708" title="AT&amp;T ForHealth">AT&amp;T ForHealth</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2820" title="Telepresence">Telepresence</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9607" title="Mobility Solutions">Mobility Solutions</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2941" title="Enterprise Security">Enterprise Security</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5834" title="More">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>In the Community</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/general?pid=1325" title="Disaster Response">Disaster Response</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2613" title="Cell Phone Recycling">Cell Phone Recycling</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=7930" title="Support for the Troops">Support for the Troops</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2644" title="Sustainability">Sustainability</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=5834" title="More">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function mn_social_media_nav() {
    document.write('<ul class="tertiaryNav cols4" id="mn_social_media_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_social_media.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Interact on Twitter</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.twitter.com/att" title="@ATT">@ATT</a></li>'
				 + '<li><a href="http://www.twitter.com/shareatt" title="@ShareATT">@ShareATT</a></li>'
				 + '<li><a href="http://www.twitter.com/attcustomercare" title="@ATTCustomerCare">@ATTCustomerCare</a></li>'
				 + '<li><a href="http://www.twitter.com/attbusiness" title="@ATTBusiness">@ATTBusiness</a></li>'
				 + '<li><a href="http://www.twitter.com/attsmallbiz" title="@ATTSmallBiz">@ATTSmallBiz</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Chat</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.facebook.com/ATT?ref=ts" title="AT&amp;T on Facebook">AT&amp;T on Facebook</a></li>'
				 + '<li><a href="http://www.facebook.com/uverse" title="AT&amp;T U-verse">AT&amp;T U-verse</a></li>'
				 + '<li><a href="http://www.linkedin.com/company/at&amp;t" title="AT&amp;T on LinkedIn">AT&amp;T on LinkedIn</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Learn</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.attinnovationspace.com/" title="AT&amp;T Innovation Space Blog">AT&amp;T Innovation Space Blog</a></li>'
				 + '<li><a href="http://attpublicpolicy.com/" title="Public Policy Blog">Public Policy Blog</a></li>'
				 + '<li><a href="http://networkingexchangeblog.att.com/" title="AT&amp;T Networking Exchange Blog">AT&amp;T Networking Exchange Blog</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>Visualize</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.youtube.com/user/ShareATT" title="ShareATT YouTube">ShareATT YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/ATTSmallBusiness" title="AT&amp;T Small Business YouTube">AT&amp;T Small Business YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/user/ATTEnterprise" title="AT&amp;T Business YouTube">AT&amp;T Business YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/attcustomercare" title="AT&amp;T Customer Care YouTube">AT&amp;T Customer Care YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/attlatino" title="ATT Latino YouTube">ATT Latino YouTube</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function w_wireless_innovation_nav() {
    document.write('<ul class="tertiaryNav cols4" id="mn_media_kits_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_media_kits.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Devices</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1841" title="Mobile Phones">Mobile Phones</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=13434" title="Emerging Devices">Emerging Devices</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1574" title="iPhone">iPhone</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2638" title="GoPhone">GoPhone</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Texting</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2805" title="Text Messaging">Text Messaging</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2964" title="Dangers of Texting and Driving">Dangers of Texting and Driving</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Wireless Options</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2535" title="International Service Plans">International Service Plans</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2575" title="Wireless Choice">Wireless Choice</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2899" title="Apps">Apps</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>Wireless for Business</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=17789" title="Small Business Mobility Overview">Small Business Mobility Overview</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9607" title="Enterprise Mobility Solutions">Enterprise Mobility Solutions</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function cs_social_media_nav() {
    document.write('<ul class="tertiaryNav cols4" id="cs_social_media_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_social_media.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Interact on Twitter</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.twitter.com/att" title="@ATT">@ATT</a></li>'
				 + '<li><a href="http://www.twitter.com/shareatt" title="@ShareATT">@ShareATT</a></li>'
				 + '<li><a href="http://www.twitter.com/attcustomercare" title="@ATTCustomerCare">@ATTCustomerCare</a></li>'
				 + '<li><a href="http://www.twitter.com/attbusiness" title="@ATTBusiness">@ATTBusiness</a></li>'
				 + '<li><a href="http://www.twitter.com/attsmallbiz" title="@ATTSmallBiz">@ATTSmallBiz</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Chat</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.facebook.com/ATT?ref=ts" title="AT&amp;T on Facebook">AT&amp;T on Facebook</a></li>'
				 + '<li><a href="http://www.facebook.com/uverse" title="AT&amp;T U-verse">AT&amp;T U-verse</a></li>'
				 + '<li><a href="http://www.linkedin.com/company/at&amp;t" title="AT&amp;T on LinkedIn">AT&amp;T on LinkedIn</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Learn</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.attinnovationspace.com/" title="AT&amp;T Innovation Space Blog">AT&amp;T Innovation Space Blog</a></li>'
				 + '<li><a href="http://attpublicpolicy.com/" title="Public Policy Blog">Public Policy Blog</a></li>'
				 + '<li><a href="http://networkingexchangeblog.att.com/" title="AT&amp;T Networking Exchange Blog">AT&amp;T Networking Exchange Blog</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>Visualize</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.youtube.com/user/ShareATT" title="ShareATT YouTube">ShareATT YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/ATTSmallBusiness" title="AT&amp;T Small Business YouTube">AT&amp;T Small Business YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/user/ATTEnterprise" title="AT&amp;T Business YouTube">AT&amp;T Business YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/attcustomercare" title="AT&amp;T Customer Care YouTube">AT&amp;T Customer Care YouTube</a></li>'
				 + '<li><a href="http://www.youtube.com/attlatino" title="ATT Latino YouTube">ATT Latino YouTube</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function cs_products_nav() {
    document.write('<ul class="tertiaryNav cols4" id="cs_products_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_products_services.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Devices for All</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1574" title="iPhone 4">iPhone 4</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1841" title="Mobile Phones">Mobile Phones</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=13434" title="Emerging Devices">Emerging Devices</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Wirelessly Connected</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.att.com/networknews" title="Network News">Network News</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=17541" title="Wi-Fi">Wi-Fi</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2535" title="International Service Plans">International Service Plans</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2899" title="Applications">Applications</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1941" title="Wireless Networks">Wireless Networks</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Growing Small Businesses</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=17789" title="Small Business Mobility Overview">Small Business Mobility Overview</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2936" title="Small Business Overview">Small Business Overview</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2810" title="Tech Support 360">Tech Support 360</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2545" title="Small Business Tech Poll">Small Business Tech Poll</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=12201" title="Business Customer News">Business Customer News</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>Participating in the Community</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2613" title="Cell Phone Recycling">Cell Phone Recycling</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2964" title="Texting Can Wait">Texting Can Wait</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2760" title="Disability Services">Disability Services</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=7930" title="Support for the Troops">Support for the Troops</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function cs_innovation_nav() {
    document.write('<ul class="tertiaryNav cols2" id="cs_innovation_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_innovation.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Fresh Ideas</strong>'
				 + '<ul>'
				 + '<li><a href="http://www.attinnovationspace.com/" title="Innovation Space Blog">Innovation Space Blog</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=14188" title="From the AT&amp;T Labs">From the AT&amp;T Labs</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=14189" title="Our Innovation in Action">Our Innovation in Action</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Continual Innovation</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/corporate-citizenship?pid=5882" title="Our Intellectual Property">Our Intellectual Property</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=14209" title="Innovation Multimedia">Innovation Multimedia</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2949" title="Collaboration - AT&amp;T Foundry">Collaboration - AT&amp;T Foundry</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function cs_in_community_nav() {
    document.write('<ul class="tertiaryNav cols3" id="cs_in_community_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_in_community.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Sustaining our Future</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2613" title="Cell Phone Recycling">Cell Phone Recycling</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2644" title="Environmental Sustainability">Environmental Sustainability</a></li>'
				 + '<li><a href="' + site + '/gen/landing-pages?pid=7735" title="Our Citizenship">Our Citizenship</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2644" title="Protect the Planet">Protect the Planet</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Giving Back</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2631" title="AT&amp;T Aspire">AT&amp;T Aspire</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=7930" title="Support for the Troops">Support for the Troops</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Safety First</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2932" title="Home Base">Home Base</a></li>'
				 + '<li><a href="' + site + '/gen/general?pid=1325" title="Disaster Response">Disaster Response</a></li>'
				 + '<li><a href="http://www.att.net/smartcontrols" title="AT&amp;T Smart Controls">AT&amp;T Smart Controls</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2964" title="Texting and Driving">Texting and Driving</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function bn_enterprise_solutions_nav() {
    document.write('<ul class="tertiaryNav cols4" id="bn_enterprise_solutions_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_enterprise_security.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Hosting and Cloud Services</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2776" title="Synaptic Hosting">Synaptic Hosting</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=14349" title="Synaptic Compute as a Service">Synaptic Compute as a Service</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9343" title="Enterprise Hosting Services">Enterprise Hosting Services</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2885" title="Remote Infrastructure">Remote Infrastructure</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Network and Security</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9659" title="IP VPN">IP VPN</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2941" title="Enterprise Security">Enterprise Security</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9389" title="BusinessDirect">BusinessDirect</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=17839" title="Business Continuity Study">Business Continuity Study</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Innovative Solutions</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=18769" title="AT&amp;T Smart Grid">AT&amp;T Smart Grid</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2820" title="Telepresence">Telepresence</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=1655" title="Application Acceleration">Application Acceleration</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9607" title="Mobility Solutions">Mobility Solutions</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col4"><strong>What\'s New</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=18708" title="AT&amp;T ForHealth">AT&amp;T ForHealth</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=12201" title="Business Customer News">Business Customer News</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function bn_small_business_nav() {
    document.write('<ul class="tertiaryNav cols1" id="bn_small_business_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_small_business.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Small Business Media Kits</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2936" title="Small Business Basics">Small Business Basics</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=12201" title="Business Customer News">Business Customer News</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=17789" title="Small Business Mobility Overview">Small Business Mobility Overview</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=2810" title="Tech Support 360">Tech Support 360</a></li>'
				 + '<li><a href="' + site + '/gen/press-room?pid=18687" title="Small Business Technology Poll">Small Business Technology Poll 2011</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function bn_doing_business_nav() {
    document.write('<ul class="tertiaryNav cols3" id="bn_doing_business_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_doing_business.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Our Collaborators</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/general?pid=7512" title="Supplier Partnerships">Supplier Partnerships</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Our Business Basics</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5711" title="Company Information">Company Information</a></li>'
				 + '<li><a href="' + site + '/gen/privacy-policy?pid=2506" title="AT&amp;T Privacy Policy">AT&amp;T Privacy Policy</a></li>'
				 + '<li><a href="http://www.att.com/csr" title="Citizenship and Sustainability">Citizenship and Sustainability</a></li>'
				 + '<li><a href="http://www.att.com/networknews" title="Network News">Network News</a></li>'
				 + '<li><a href="' + site + '/gen/general?pid=18600" title="Meet the Senior Leaders">Meet the Senior Leaders</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Talk With Us</strong>'
				 + '<ul>'
				 + '<li><a href="http://twitter.com/ATTSmallBiz" title="@ATT Small Biz">@ATT Small Biz</a></li>'
				 + '<li><a href="http://www.facebook.com/ATTSmallBiz" title="AT&amp;T Small Biz Facebook">AT&amp;T Small Biz Facebook</a></li>'
				 + '<li><a href="http://www.youtube.com/ATTSmallBusiness" title="AT&amp;T Small Business YouTube">AT&amp;T Small Business YouTube</a></li>'
				 + '<li><a href="http://twitter.com/ATTBusiness" title="@ATT Business">@ATT Business</a></li>'
				 + '<li><a href="http://www.youtube.com/user/ATTEnterprise" title="ATT Enterprise YouTube">ATT Enterprise YouTube</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function bn_other_markets_nav() {
    document.write('<ul class="tertiaryNav cols1" id="ir_investor_news_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_products_services.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>AT&amp;T Vertical Markets</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=18708" title="AT&amp;T ForHealth">AT&amp;T ForHealth</a></li>'
				 + '<li><a href="' + site + '/gen/general?pid=7786" title="AT&amp;T Business Customer News">AT&amp;T Business Customer News</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function ir_corporate_governance_nav() {
    document.write('<ul class="tertiaryNav cols3" id="ir_corporate_governance_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_corp_governance.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Our Direction</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5609" title="Corporate Governance Overview">Corporate Governance Overview</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5609" title="Board of Directors Committee Charters">Board of Directors Committee Charters</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5609" title="Governance Principles">Governance Principles</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Our Leadership</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5629" title="AT&amp;T Directors">AT&amp;T Directors</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=7811" title="AT&amp;T Senior Executives">AT&amp;T Senior Executives</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Get In Contact</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5598" title="Contact Headquarters">Contact Headquarters</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5596" title="Contact Board of Directors">Contact Board of Directors</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5621" title="Report Governance Complaints and Concerns">Report Governance Complaints and Concerns</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function ir_financial_reporting_nav() {
    document.write('<ul class="tertiaryNav cols3" id="ir_financial_reporting_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_financial_reporting.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Financial Information</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=18777" title="Financial Reporting  Overview">Financial Reporting Overview</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=9531" title="Debt Information">Debt Information</a></li>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&amp;p=irol-sec" title="SEC Filings">SEC Filings</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=18777" title="Financial Information">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Quarterly Earnings</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=290" title="3Q 2011">3Q 2011</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=282" title="2Q 2011">2Q 2011</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=268" title="1Q 2011">1Q 2011</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=262" title="4Q 2010">4Q 2010</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=290" title="Quarterly Earnings">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Annual Reports</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=19234" title="2010 Annual Report">2010 Annual Report</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=17393" title="2009 Annual Report">2009 Annual Report</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=13106" title="2008 Annual Report">2008 Annual Report</a></li>'
				 + '<li><a href="http://www.att.com/Investor/ATT_Annual/2007/" title="2007 Annual Report">2007 Annual Report</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=9186" title="Annual Reports">More</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function ir_stock_info_nav() {
    document.write('<ul class="tertiaryNav cols3" id="ir_stock_info_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_stock_information.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Stock Information</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=18759" title="Stock Information Overview">Stock Information Overview</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>Market Information</strong>'
				 + '<ul>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&amp;p=irol-stockQuote" title="Current Market Quote">Current Market Quote</a></li>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&amp;p=irol-stockChart" title="Interactive Stock Price Graph">Interactive Stock Price Graph</a></li>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&amp;p=irol-analysts" title="Analyst Coverage">Analyst Coverage</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col3"><strong>Historical AT&amp;T Information</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5675" title="Historical Dividends">Historical Dividends</a></li>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&amp;p=irol-stocklookup" title="Historical Quote">Historical Quote</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5673" title="Historical Stock Splits">Historical Stock Splits</a><strong></strong></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function ir_stockholder_services_nav() {
    document.write('<ul class="tertiaryNav cols2" id="ir_stockholder_services_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_stockholder_services.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>Stockholder Resources</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=9533" title="Stockholder Services Overview">Stockholder Services Overview</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5677" title="Cost Basis Guide">Cost Basis Guide</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5659" title="Stockholder Information">Stockholder Information</a></li>'
				 + '<li><a href="https://www-us.computershare.com/investor/default.asp?bhjs=1&amp;fla=1&amp;landing=y&amp;issuerid=scusatt&amp;showinvestorcontact=y&amp;ilpt=regplan" title="On-line Account Access">On-line Account Access</a></li>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5654" title="Stockholder Services Contact Information">Stockholder Services Contact Information</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '<li class="col2"><strong>AT&amp;T Annual Meeting</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/investor-relations?pid=5626" title="Our Annual Meeting">Our Annual Meeting</a></li>'
				 + '<li><a href="http://www.att.com/Common/about_us/annual_report/pdfs/ATT2011_ProxyStatement.pdf" title="AT&amp;T Proxy Statement">AT&amp;T Proxy Statement</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}

function ir_investor_news_nav() {
    document.write('<ul class="tertiaryNav cols1" id="ir_investor_news_nav">'
				 + '<li class="image" style="background-image:url(' + site + '/Common/global/images/about_us/tray/bkg_tray_investor_news.jpg) !important;">&nbsp;</li>'
				 + '<li class="col1"><strong>AT&amp;T IR News</strong>'
				 + '<ul>'
				 + '<li><a href="' + site + '/gen/press-room?pid=9880" title="Search News Release Archives">Search News Release Archives</a></li>'
				 + '<li><a href="http://phx.corporate-ir.net/phoenix.zhtml?c=113088&amp;p=irol-alerts" title="Receive E-mail Alerts">Receive E-mail Alerts</a></li>'
				 + '<li><a href="http://att.centralcast.net/rss/default.aspx" title="Subscribe to our RSS">Subscribe to our RSS</a></li>'
				 + '</ul>'
				 + '</li>'
				 + '</ul>');
}