// Date last modified =  20091209
// Modified by =  DS

var lpMTagConfig = {
	'lpServer' : 'sales.liveperson.net',
	'lpNumber' : '11390142',
	'lpProtocol' : (document.location.toString().indexOf('https:')==0) ? 'https' : 'http',
	'lpTagLoaded' : false,
	'lpTagSrv' : 'sr2.liveperson.net',
	'pageStartTime' : (new Date()).getTime(), //pageStartTime is set with a timestamp as soon as the page starts loading
	'deploymentID' : '1'	
};

lpMTagConfig.deploymentConfigPath = lpMTagConfig.lpServer+'/visitor/addons/deploy.asp';

lpMTagConfig.lpLoadScripts = function(){
	lpAddMonitorTag(lpMTagConfig.lpProtocol + '://' + lpMTagConfig.deploymentConfigPath + '?site=' + lpMTagConfig.lpNumber + '&d_id=' + lpMTagConfig.deploymentID);
}

function lpAddMonitorTag(src) { 
	if (!lpMTagConfig.lpTagLoaded) {if (typeof(src) == 'undefined' || typeof(src) == 'object') {if (lpMTagConfig.lpMTagSrc) {src = lpMTagConfig.lpMTagSrc;}else {if (lpMTagConfig.lpTagSrv) {src = lpMTagConfig.lpProtocol + '://' +lpMTagConfig.lpTagSrv + '/hcp/html/mTag.js';}else {src = '/hcp/html/mTag.js';};};};if (src.indexOf('http') != 0) {src = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpServer + src + '?site=' + lpMTagConfig.lpNumber;} else {if (src.indexOf('site=') < 0) {if (src.indexOf('?') < 0) {src = src + '?';} else{src = src + '&';} src = src + 'site=' + lpMTagConfig.lpNumber;  };};var s = document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'iso-8859-1');s.setAttribute('src', src);document.getElementsByTagName('head').item(0).appendChild(s);}
}
		
//The code below send a PAGEVAR to LP with the time [in seconds] it took the page to load. Code is executed in the onload event
lpMTagConfig.calculateSentPageTime = function () {
	var t = (new Date()).getTime() - lpMTagConfig.pageStartTime;
	lpAddVars('page','pageLoadTime', Math.round(t/1000)+' sec');
};

//Variables Arrays - By Scope
if (typeof(lpMTagConfig.pageVar)=='undefined') { lpMTagConfig.pageVar = []; }
if (typeof(lpMTagConfig.sessionVar)=='undefined') { lpMTagConfig.sessionVar = []; }
if (typeof(lpMTagConfig.visitorVar)=='undefined') { lpMTagConfig.visitorVar = []; }
//Extra actions to be taken once the code executes
if (typeof(lpMTagConfig.onLoadCode)=='undefined') { lpMTagConfig.onLoadCode = []; }
//Dynamic Buttons Array
if(typeof(lpMTagConfig.dynButton)=='undefined') { lpMTagConfig.dynButton = []; }
// This need to be add to afterStartPage will work
if(typeof(lpMTagConfig.ifVisitorCode)=='undefined') {lpMTagConfig.ifVisitorCode = []; }


// Function that sends variables to LP - By Scope
function lpAddVars(scope,name,value) {
	if (name.indexOf('OrderTotal')!=-1 || name.indexOf('OrderNumber')!=-1){
		if  (value=='' || value==0) return; // pass 0 value to all but OrderTotal
		else lpMTagConfig.sendCookies = false
	}	
	value=lpTrimSpaces(value.toString());
//Remove cut long variables names and values. Trims suffix of the variable name above the 25th character onwards
	if (name.length>50) { 
		name=name.substr(0,50);
	}
    if (value.length>200) { // Trims suffix of the variable value above the 200th character onwards
		value=value.substr(0,200);
	}
	switch (scope){
		case 'page': lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name)+'='+escape(value); break;
		case 'session': lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length] = escape(name)+'='+escape(value); break;
		case 'visitor': lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length] = escape(name)+'='+escape(value); break;
	}	
}

// Preventing long cookie transfer for IE based browsers.
function onloadEMT() { 
	var LPcookieLengthTest=document.cookie;
	if (lpMTag.lpBrowser == 'IE' && LPcookieLengthTest.length>1000){
		lpMTagConfig.sendCookies=false;
	}
}

//The Trim function returns a text value with the leading and trailing spaces removed
function lpTrimSpaces(stringToTrim) {
	return stringToTrim.replace(/^\s+|\s+$/g,'');
}

// Immediate Data submission function
function lpSendData(varscope,varname,varvalue) {
	if(typeof(lpMTag)!='undefined' && typeof(lpMTag.lpSendData)!='undefined')
		lpMTag.lpSendData(varscope.toUpperCase() +'VAR!'+ varname + '=' + varvalue, true);
}


// The unit variable purpose is to route the chat or call to the designated skill. <LOB> should be replaced with the skill name, i.e. : sales
try{
	if (typeof(lpUnit)=='undefined') { var lpUnit='drock'; }
	if(typeof(lpAddVars)!='undefined') { lpAddVars('page','unit',lpUnit); }
	
	if (typeof(lpLanguage)=='undefined') { var lpLanguage='english'; }
	if(typeof(lpAddVars)!='undefined') { lpAddVars('session','language',lpLanguage); }
	
	lpMTagConfig.defaultInvite = 'chat-' + lpUnit + '-' + lpLanguage;
}catch(e){}

lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = onloadEMT;

//Scan dynButton and removes buttons which doesnt have Div on the page
lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = function () {
	if(typeof(lpMTagConfig.dynButton)!='undefined') {
		for (i=0;i<lpMTagConfig.dynButton.length;i++){
			if (typeof(lpMTagConfig.dynButton[i].pid)!='undefined' && document.getElementById(lpMTagConfig.dynButton[i].pid) == null) {
				lpMTagConfig.dynButton.splice(i,1);
				i--;
			}
		}
	}
};

//The folowing functions will be load after the page will finish loading
lpMTagConfig.onLoadAll = function () {
	lpMTagConfig.calculateSentPageTime();
	lpMTagConfig.lpLoadScripts();
};

if (window.attachEvent) { 
	window.attachEvent('onload',lpMTagConfig.onLoadAll); 
} else {
	window.addEventListener('load',lpMTagConfig.onLoadAll,false);
}

//disable sending the cookies - JSESSIONID
lpMTagConfig.GetPageCookies = function () {
var cookies = document.cookie;
if ((typeof(cookies) == "undefined") || (cookies == null)) {
	cookies = "";
}
cookies = cookies.replace(/JSESSIONID=[a-zA-Z0-9\-!]*;?/,"");
return cookies;
};


if (typeof(lpMTagConfig.db1)=='undefined') {
    lpMTagConfig.db1 = new Object(); 
}

// LP Button Code
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name':'chat-'+lpUnit+'-'+lpLanguage,'pid':'lpbutton-DIV','afterStartPage': true,'ovr':'lpMTagConfig.db1'};