// JavaScript Document




url = location.href;
breakURL = url.split('/');
section = breakURL[3];
checkHome2 = url.indexOf('.com/index')
if(checkHome2 != '-1') {section = 'home'}     
		if(section == 'home') {directory = ''}
		else {
		directory = breakURL[4];   
		checkDir = directory.indexOf('.html');
		if(checkDir != '-1') {directory = directory.substring(0,checkDir);} 
		if(breakURL.length <= 5) { page = ''}
		else {
		page = breakURL[5];  
		checkPage = page.indexOf('.html');
		if(checkPage != '-1') {page = page.substring(0,checkPage);}  
		}
		}
checkOrderform = url.indexOf('order_form');
if(checkOrderform != '-1') {section = 'order_form'}
checkTab = url.indexOf('tab=');
if(checkTab != '-1') {tab = url.substr(checkTab+4);} 
else {tab=0}

 
brow = navigator.userAgent;
x = brow.lastIndexOf('6.0');
if(x != '-1') { browser = 'IE6'}
else{ browser = 'realBrowser';}
 
state = getState();  
  
 
brow = navigator.userAgent;
x = brow.lastIndexOf('6.0');
if(x != '-1') { browser = 'IE6'}
else{ browser = 'realBrowser';}
 
state = getState();  

 

function renderTopNav(){
	document.write('	<ul id="top-nav">');
	document.write(' <li><a href="http://espanol.att.com/help/contact_us.html?id=' + state + '" title="Cont&aacute;ctanos">Contáctanos</a></li>');
	document.write(' <li><a href="http://att.com/gen/landing-pages?pid=3308" title="AT&amp;T en ingl&eacute;s">AT&T en inglés</a></li>');
    document.write(' <li><a href="http://world.att.com" class="nb" title="">Otros Idiomas</a></li>');
	document.write(' <div class="clear"></div>');
	document.write(' </ul>');
	document.write(' <div class="clear"></div>');
}

function renderSearchNav() {
	document.write('<div id="searchNav">');
	document.write('<ul>');
	document.write('<li><a href="http://att.com/gen/landing-pages?pid=3308" title="Explorar">Explorar</a></li>');
	document.write('<li class="last"><a href="http://localization.att.com/loc/controller?cdvn=landinglocalization&pid=1080&cookieResetted=true&ltype=contactus" title="Contact AT&amp;T" class="pipe">Contáctenos</a></li>');
	document.write('<li id="searchLink">');
	document.write('<form method="get" id="searchForm" name="searchForm" action="http://www.att.com/global-search/search.jsp">');
	document.write('<fieldset>');
	document.write('<legend>Search AT&T</legend>');
	document.write('<label for="search">Search</label>');
	document.write ("<input type=\"text\" value=\"Buscar\" name=\"q\" id=\"search\" title=\"Enter search keywords\" />");
	document.write('<label for="searchSubmit">Go</label>');
	document.write('<input type="image" src="/mlcomm/_images/template/btn_go.gif" value="Go" alt="Submit search" class="btnGo" id="searchSubmit" />');
	document.write('</fieldset>');
	document.write('</form>');
	document.write('</li>');
	document.write('</ul>');
	document.write('</div>');
}


/* ******************************************************************************************************************************************************************************************  */
/* Please make any updates to the IN SITE navigation in this function to the function directly below this one that renders the navigation on the EXTERNAL ORDER FORM found at https://www.att.com/Common/espanol/order_form.html.  */
/* ******************************************************************************************************************************************************************************************  */
function renderGlobalNav() {  
 
	document.write('<div id="global-nav">');
	document.write('<ul>');
	document.write('<li class="logo">');
	if(state == 'nostate') {document.write('<a  href="javascript: stateSelectInitialize(\'home\')" title="P&aacute;gina principal de AT&amp;T"><img src="/mlcomm/_images/template/global_nav/global_logo.jpg" alt="Portada" /></a></li>') } 
	else {document.write('<a href="/index.html?id=' + state + '" title="P&aacute;gina principal de AT&amp;T"><img src="/mlcomm/_images/template/global_nav/global_logo.jpg" alt="Portada" /></a></li>');}
	
	if(state == 'nostate') {document.write('<li><a  href="javascript: stateSelectInitialize(\'comprar\')" title="Ordena paquetes y servicios para Internet, tel&eacute;fono m&oacute;vil y televisi&oacute;n digital"><img src="/mlcomm/_images/template/global_nav/global_comprar');}
	else {document.write('<li><a href="/residential_customers/index.html?id=' + state + '" title="Ordena paquetes y servicios para Internet, tel&eacute;fono m&oacute;vil y televisi&oacute;n digital"><img src="/mlcomm/_images/template/global_nav/global_comprar');}
	if(section == 'residential_customers' || directory == 'disclaimers' || section == '25oferta') {
	document.write('_on');
	}
	document.write('.jpg"  alt="Comprar" /></a>');
	document.write('</li>');
	if(state == 'nostate') {document.write('<li><a  href="javascript: stateSelectInitialize(\'help\')" title="Servicio de ayuda al cliente "><img src="/mlcomm/_images/template/global_nav/global_ayuda');}
	else {document.write('<li><a href="/help/index.html?id=' + state + '" title="Servicio de ayuda al cliente "><img src="/mlcomm/_images/template/global_nav/global_ayuda');}
	if(section == 'help' || section == 'privacy_policy') {
	document.write('_on');
	}
	document.write('.jpg" alt="Ayuda" /></a>') 
	document.write('</li>');
	if(state == 'nostate') {document.write('<li><a  href="javascript: stateSelectInitialize(\'newsroom\')"  title="Paquetes para medios, comunicados de prensa, y archivo de noticias"><img src="/mlcomm/_images/template/global_nav/global_noticias')}
	else {	document.write('<li><a href="/newsroom/index.html?id=' + state + '" title="Paquetes para medios, comunicados de prensa, y archivo de noticias"><img src="/mlcomm/_images/template/global_nav/global_noticias');}
	if(section == 'newsroom') {
	document.write('_on');
	}
	document.write('.jpg"  alt="Noticias" /></a>'); 
	document.write('</li>');
	if(state == 'nostate') {document.write('<li><a  href="/about_att/index.html" title="Informaci&oacute;n corporativa sobre AT&amp;T"> <img src="/mlcomm/_images/template/global_nav/global_acerca');}
	else {	
	document.write('<li><a href="/about_att/index.html?id=' + state + '" title="Informaci&oacute;n corporativa sobre AT&amp;T"> <img src="/mlcomm/_images/template/global_nav/global_acerca');
	}
	if(section == 'about_att') {
	document.write('_on');
	}
	document.write('.jpg"  alt="Acerca de AT&amp;T" /></a>'); 
	document.write('</ul>');
	document.write('<div class="clear"></div>');	 
	if(directory == 'att_uverse') {
	document.write('<div id="uverse-availability">')
	document.write('<h3>Busca U-verse en tu área</h3>')
	document.write('<p><a href="http://www.att.com/u-verse/availability/index.jsp?source=IC00ya000000001U&fbid=SbQysdjdyMM" title="Busca U-verse en tu &aacute;rea" target="_blank">Más información >></a></p>')
	document.write('</div>')
	}
	
	if(section == 'residential_customers'  || directory == 'disclaimers' || section == '25oferta') {
	document.write('<div  id="snav-comprar" class="secondary-menu" >');
	document.write('<ul> ');
	document.write('<li><a id="tlink-internet" ');
	if(directory == 'att_internet' || page == 'att_internet') { document.write('  class="current" ');}
	document.write(' href="/residential_customers/att_internet/index.html?id=' + state + '" title="DSL, Wi-Fi, y servicio de internet de alta velocidad">Internet</a>');
	document.write('</li>');
	document.write('<li><a id="tlink-advancedtv" ');
	if(directory == 'att_advanced_tv' || page == 'att_advanced_tv') { document.write('  class="current" ');}
	document.write(' href="/residential_customers/att_advanced_tv/index.html?id=' + state + '" title="Opciones en televisi&oacute;n digital">Televisión digital</a></li>');
	document.write('<li><a id="tlink-homephone" '); 
	if(directory == 'att_home_phone' || page == 'att_home_phone') { document.write('  class="current" ');}
	document.write(' href="/residential_customers/att_home_phone/index.html?id=' + state + '" title="Servicio telef&oacute;nico residencial">Teléfono residencial</a></li>');
	document.write('<li><a id="tlink-uverse" ');
	if(directory == 'att_uverse' || page == 'att_uverse' || section == '25oferta') { document.write('  class="current" ');}
	document.write(' href="/residential_customers/att_uverse/index.html?id=' + state + '" title="AT&amp;T U-verse TV">U-verse</a></li>');
	document.write('<li><a id="tlink-wireless" class="nosub" href="http://www.wireless.att.com/cell-phone-service/welcome/index.jsp?locale=es_US" title="Móvil">M&oacute;vil</a></li>');
	document.write('<li><a " ');
	if(directory == 'att_bundles') { document.write('  class="current" ');}
	document.write(' href="/residential_customers/att_bundles/index.html?id=' + state + '" title="Paquetes y servicios de AT&amp;T">Paquetes</a></li>'); 
	
	document.write('<div class="tertiary-menu" id="tmenu-internet">');
	document.write('<ul>');
	document.write('<li><a href="/residential_customers/att_internet/high_speed_internet.html?id=' + state + '" title="DSL con servicio telef&oacute;nico fijo">DSL con servicio telefónico fijo</a></li>');
	document.write('<li><a href="/residential_customers/att_internet/wifi.html?id=' + state + '" title="Wi-Fi de AT&amp;T">Wi-Fi de AT&T</a></li>');
	document.write('<li><a href="/residential_customers/att_internet/dsl_direct.html?id=' + state + '" title="DSL sin servicio telef&oacute;nico">DSL sin servicio telefónico</a></li>'); 
	document.write('<li><a href="/residential_customers/att_uverse/uverse_internet/index.html?id=' + state + '" title="Internet de Alta Velocidad de AT&amp;T U-verse">Internet de Alta Velocidad de AT&T U-verse</a></li>'); 
	document.write('</ul>');
	document.write('</div>');
	
	document.write('<div class="tertiary-menu" id="tmenu-advancedtv">');
	document.write('<ul>');
	document.write('<li><a href="/residential_customers/att_uverse/uverse_tv/index.html?id=' + state + '" title="AT&amp;T U-verse TV">AT&T U-verse TV</a></li>');
	document.write('<li><a href="/residential_customers/att_advanced_tv/directv.html?id=' + state + '" title="AT&amp;T|DIRECTV">AT&T | DIRECTV</a></li>');
	document.write('</ul>');
	document.write('</div>');
	
	document.write('<div class="tertiary-menu" id="tmenu-homephone">');
	document.write('<ul>');
	document.write('<li><a href="/residential_customers/att_home_phone/home_phone.html?id=' + state + '" title="Servicio local">Servicio local</a></li>');
	document.write('<li><a href="/residential_customers/att_home_phone/long_distance.html?id=' + state + '" title="Larga distancia domestica">Larga distancia domestica e internacional</a></li>');
	document.write('</ul>');
	document.write('</div>');
	
	document.write('<div class="tertiary-menu" id="tmenu-uverse">');
	document.write('<ul>'); 
	document.write('<li><a href="/residential_customers/att_uverse/uverse_tv/index.html?id=' + state + '" title="AT&amp;T U-verse TV">AT&T U-verse TV</a></li>');
	document.write('<li class="short"><a href="/residential_customers/att_uverse/uverse_offers/total_home_dvr.html?id=' + state + '" title="U-verse Total Home  DVR">U-verse Total Home  DVR</a></li>');
	document.write('<li><a href="/residential_customers/att_uverse/uverse_help/index.html?id=' + state + '" title="Servicio de tel&eacute;fono digital de AT&amp;T U-verse">Ayuda técnica  y solución de problemas</a></li>'); 
	document.write('<li><a href="/residential_customers/att_uverse/uverse_internet/index.html?id=' + state + '" title="Internet de alta velocidad de AT&amp;T U-verse">Internet de alta velocidad de AT&T U-verse</a></li>');
	document.write('<li class="short"><a href="/residential_customers/att_uverse/uverse_offers/index.html?id=' + state + '" title="Compara nuestras ofertas">Compara nuestras ofertas</a></li>');   
	document.write('<li><a href="https://www.att.com/olam/dashboardAction.olamexecute" title="Mi Cuenta (en ingl&eacute;s)" target="_blank">Mi Cuenta (en inglés)</a></li>');
	document.write('<li><a href="/residential_customers/att_uverse/uverse_voice/index.html?id=' + state + '" title="Servicio de tel&eacute;fono digital de AT&amp;T U-verse">Servicio de teléfono digital de AT&T U-verse</a></li>'); 
	document.write('<li class="short"><a href="/residential_customers/att_uverse/uverse_services/index.html?id=' + state + '" title="Servicios &uacute;nicos de AT&amp;T U-verse">Servicios únicos de AT&T U-verse</a></li>');   
	document.write('<li><a href="http://www.att.com/u-verse/availability/index.jsp?source=IC00ya000000001U" target="_blank" title="Disponibilidad en mi &aacute;rea">Disponibilidad en mi área</a></li>');   
	document.write('<li><a href="/residential_customers/att_uverse/uverse_wireless/index.html?id=' + state + '" title="Receptor inalámbrico de TV de AT&T U-verse<sup>&reg;</sup>">Receptor inalámbrico de TV de AT&T U-verse </a></li>');
	document.write('</ul>');
	document.write('</div>');
	
	
	document.write('</ul>    ');   
	document.write('</div>');
	} 
	
	if(section == 'help' || section == 'privacy_policy') { 
	document.write('<div  id="snav-ayuda" class="secondary-menu" >');
	document.write('<ul> ');
	document.write('<li><a ');
	if(directory == 'faqs') { document.write('  class="current" ');}
	document.write(' href="/help/faqs/index.html?id=' + state + '" title="Preguntas frecuentes ">Preguntas frecuentes </a></li>');
	document.write('<li><a href="/smartlimits/index.html" target="_blank" title="Controles parentales">Controles parentales</a></li>');
	document.write('<li><a ');
	if(directory == 'att_move' || directory == 'home_technology') { document.write('  class="current" ');}
	document.write(' href="/help/att_move/index.html?id=' + state + '" title="AT&amp;T Facilita Toda Tu Mudanza">AT&T Facilita Toda Tu Mudanza</a></li>'); 
	document.write('<li><a ');
	if(directory == 'conectada') { document.write('  class="current" ');}
	if(state == 'nostate') {document.write(' href="/help/conectada/index.html" title="La Casa Conectada">La Casa Conectada</a></li>');}
	else {document.write(' href="/help/conectada/index.html?id=' + state + '" title="La Casa Conectada">La Casa Conectada</a></li>');}
	
	document.write('</ul>    ');   
	document.write('</div>');
	}
 
	if(section == 'newsroom') { 
	document.write('<div  id="snav-noticias" class="secondary-menu" >');
	document.write('<ul> ');
	document.write('<li><a ');
	if(directory == 'news_archive' || directory == 'news_releases') { document.write('  class="current" ');}
	document.write(' href="/newsroom/news_archive.html?id=' + state +'" title="Comunicados de prensa">Comunicados de prensa</a></li>');
	document.write('<li><a ');
	if(directory == 'media_kits') { document.write('  class="current" ');}
	document.write(' href="/newsroom/media_kits/index.html?id=' + state + '" title="Paquetes para medios">Paquetes para medios</a></li>'); 
	document.write('<li><a ');
	if(directory == 'useful_information') { document.write('  class="current" ');}
	document.write(' href="/newsroom/useful_information.html?id=' + state + '" title="Informaci&oacute;n de inter&eacute;s">Información de interés</a></li>');
	document.write('<li><a ');
	if(directory == 'social_media') { document.write('  class="current" ');}
	document.write(' href="/newsroom/social_media.html?id=' + state + '" title="Redes sociales">Redes sociales</a></li>');
	document.write('</ul>    ');   
	document.write('</div>');
	}
	
	if(section == 'about_att') {
	document.write('<div  id="snav-aboutus" class="secondary-menu" >');
	document.write('<ul> ');
	document.write('<li><a ');
	if(directory == 'corporate_information') { document.write('  class="current" ');}
	if(state == 'nostate') {document.write(' href="/about_att/corporate_information.html" title="Informaci&oacute;n Corporativa">Información Corporativa</a></li>');}
	else {document.write(' href="/about_att/corporate_information.html?id=' + state + '" title="Informaci&oacute;n Corporativa">Información Corporativa</a></li>');}
	
	document.write('<li><a ');
	if(directory == 'community') { document.write('  class="current" ');}
	if(state == 'nostate') {document.write(' href="/about_att/community.html" title="Comunidad">Comunidad</a></li>');}
	else {document.write(' href="/about_att/community.html?id=' + state + '" title="Comunidad">Comunidad</a></li>');}
	
	document.write('<li><a ');
	if(directory == 'volunteerism') { document.write('  class="current" ');}
	if(state == 'nostate') {document.write(' href="/about_att/volunteerism.html" title="Voluntarios">Voluntarios</a></li>');}
	else {document.write(' href="/about_att/volunteerism.html?id=' + state + '" title="Voluntarios">Voluntarios</a></li>');}
	
	document.write('<li><a ');
	if(directory == 'diversity') { document.write('  class="current" ');}
	if(state == 'nostate') {document.write(' href="/about_att/diversity.html" title="Diversidad">Diversidad</a></li>'); }
	else {document.write(' href="/about_att/diversity.html?id=' + state + '" title="Diversidad">Diversidad</a></li>'); }
	
	document.write('<li><a ');
	if(directory == 'awards') { document.write('  class="current" ');}
	if(state == 'nostate') {document.write(' href="/about_att/awards.html" title="Premios">Premios</a></li>');}
	else {document.write(' href="/about_att/awards.html?id=' + state + '" title="Premios">Premios</a></li>');}
	
	document.write('</ul>    ');   
	document.write('</div>');
	}
	 
	document.write('</div>'); 
}


/* ******************************************************************************************************************************************************************************************  */
/*  This function renders the site navigation for the EXTERNAL ORDER FORM found  at https://www.att.com/Common/espanol/order_form.html.  Please make any updates to the IN SITE navigation in this function, as well*/
/* ******************************************************************************************************************************************************************************************  */
function renderGlobalNavOrderForm() { 
 
 url = location.href;
 checkRSS = url.indexOf('feedsesp');
 
 
document.write('<div id="global-nav">');
				document.write('<ul>');
				document.write('<li class="logo">');
				document.write('<a href="http://espanol.att.com/index.html?id=' + state + '" title="PORTADA"><img src="https://www.att.com/Common/world_att/sp/mlcomm/_images/template/global_nav/global_logo.jpg" alt="Portada" /></a></li>'); 
				document.write('<li><a href="http://espanol.att.com/residential_customers/index.html?id=' + state + '" title="COMPRAR"><img src="https://www.att.com/Common/world_att/sp/mlcomm/_images/template/global_nav/global_comprar.jpg"  alt="Comprar" /></a>');
				document.write('</li>');
				document.write('<li><a href="http://espanol.att.com/help/index.html?id=' + state + '" title="AYUDA"><img src="https://www.att.com/Common/world_att/sp/mlcomm/_images/template/global_nav/global_ayuda.jpg" alt="Ayuda" /></a>') 
				document.write('</li>');
				document.write('<li><a href="/newsroom/index.html?id=' + state + '" title="NOTICIAS"><img src="https://www.att.com/Common/world_att/sp/mlcomm/_images/template/global_nav/global_noticias');
				if(checkRSS != '-1') {
				document.write('_on');
				}
				document.write('.jpg"  alt="Noticias" /></a>'); 
				document.write('</li>');
				document.write('<li><a href="http://espanol.att.com/about_att/index.html?id=' + state + '" title="ACERCA DE AT&amp;T"> <img src="https://www.att.com/Common/world_att/sp/mlcomm/_images/template/global_nav/global_acerca.jpg"  alt="Acerca de AT&amp;T" /></a>'); 
				document.write('</ul>');
				document.write('<div class="clear"></div>');	 


	 
	document.write('</div>'); 
}
 
function renderStateSelect(whichPage) {  
	if(directory == 'thank_you.html')  {}
	else {
	document.write('<div  id="state-select"><ul>');
 if($('body').is('#home') || $('body').is('#page-404') || state == 'nostate'){
		if(state == 'nostate') {document.write('<li id="state-display nb"></li>'); 
		document.write('<li id="chooseState" class="' + whichPage + '" >Selecciona Tu Estado</li>')
		}
		else {	document.write('<li id="state-display"><strong>' + stateselect + '</strong></li>');
		document.write('<li id="chooseState" class="' + whichPage + '" >Selecciona Otro Estado</li> ');
		}
 	}
 else {
		if(state == 'nostate') {document.write('<li id="state-display"><strong> </strong></li>');
		}
		else {	document.write('<li id="state-display"><strong>' + stateselect + '</strong></li>');
		}
	document.write('<li id="chooseState" class="' + whichPage + '" >Selecciona Otro Estado</li> ');
 }
	document.write('</ul></div>    ');
}
}
 
function showStateSelect () {
	 $(document).ready(function() {
 $("#chooseState").trigger('click');
 });


}
function stateSelectInitialize(targetPage) { 
	$('#chooseState').removeClass().addClass(targetPage); 
 $("#chooseState").trigger('click');
	
	
}

function getQueryString() {
	var querystring = location.href;
	qPos = querystring.lastIndexOf('?');
	if(qPos != '-1') {
	querystring = querystring.split('?');
	querystring = querystring[1]; 
	}
	else querystring = 'noquery'
	return querystring;
}


function getState() {
	query = getQueryString();
	if(query == 'noquery') {state = 'nostate'} 
	else {
	idPos = query.lastIndexOf('id');
	idAnd = query.lastIndexOf('&');
	idAnc = query.lastIndexOf('&');
	if(idPos != '-1' && idAnd == '-1') {
		 state = query.split('=');
		 state = state[1];
	}
	else {
		 state = query.split('&');
		 state = state[0];
		 state = state.split('=');
		 state = state[1]; 
	}
	}
	isAnc = state.lastIndexOf('#');
	if(isAnc != '-1') {
	state = state.substr(0, isAnc);	
	}
	return state;
}


function displayState(stateID) {
	if(stateID == 'northcarolina') {capState = 'Carolina del Norte'}
	else if(stateID == 'southcarolina') {capState = 'Carolina del Sur'}
	else {
	initCap = stateID.charAt(0)
	initCap = initCap.toUpperCase()
	endState = stateID.substr(1,100);
	capState = initCap + endState;
	}
	 
	return capState;
	 
}




function renderSocialMediaAnimation() { 
var bodyURL = location.href;
checkURL = bodyURL.indexOf('?id=')
if(checkURL != '-1') {bodyURL  = bodyURL.substring(0,checkURL);}

 
document.write('<div id="social-media-sidebar">');

document.write('<div id="social-media-anilink"><img alt="social media" id="social-media-btn" src="/mlcomm/_images/template/social_media_ani_tab.gif" /></div>');
document.write('</div>');
document.write('<div id="social-media-anibox">'); 
document.write('<div id="inner-media">');
document.write('<p id="media-facebook"><a href="http://www.facebook.com/attlatino?v=app_4949752878" title="AT&amp;T Latino on Facebook" target="_blank">S&iacute;guenos en Facebook</a></p>');
document.write('<p id="media-youtube"><a href="http://www.youtube.com/attlatino" title="AT&amp;T Latino on YouTube" target="_blank">Suscr&iacute;bete a nosotros</a></p>'); 
document.write('<p id="media-share"><a href="mailto:?subject=PIENSA SIN LIMITES &body=Hola. Acabo de encontrar datos interesantes sobre una variedad de productos y servicios que ofrece AT%26T.%0D' + bodyURL + '" title="Share AT&amp;T Espanol">Comparte</a></p>');
document.write('<p id="anibox-more"><strong><a href="/newsroom/social_media.html?id=' + state +'" title="Aprende m&aacute;s">Aprende más >></a></strong></p>');
document.write('</div>');

document.write('</div>');
}


function renderQuickLinks() {
	document.write('<div id="quick-links">');
document.write('        		<div id="quick-links-box-01" class="quick-links-box">');
document.write('                <h6>Enlaces...</h6>');
document.write('                <ul>');
document.write('                <li><a href="javascript: stateSelectInitialize(\'home\')" title="Selecciona tu estado">Selecciona tu estado</a></li>'); 
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'awards\')"') } else {document.write(' href="/about_att/awards.html?id=' + state  + '" ');}
												document.write(' title="Premios por recomendaciones">Premios por recomendaciones</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'help_billing\')"') } else {document.write(' href="/help/faqs/billing.html?id=' + state + '" ');}
												document.write(' title="Opciones de facturaci&oacute;n y pago">Opciones de facturación y pago</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'move_att\')"') } else {document.write(' href="/help/att_move/index.html?id=' + state  + '" ');}
												document.write(' title="AT&amp;T facilita toda tu mudanza">AT&T facilita toda tu mudanza</a></li>');
document.write('                <li><a href="http://elportal.att.net/" title="Mi Portal &ndash; entretenimiento y m&aacute;s">Mi Portal – entretenimiento y más</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'legal_home\')"') } else {document.write(' href="/legal_terms/index.html?id=' + state  + '" ');}
												document.write(' title="T&eacute;rminos y condiciones">Términos y condiciones</a></li>');
document.write('                </ul>');
 document.write('               </div>');
                
document.write('        		<div id="quick-links-box-02" class="quick-links-box">');
document.write('                <h6>Internet...</h6>');
document.write('                <ul>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'internet_home\')"') } else {document.write(' href="/residential_customers/att_internet/high_speed_internet.html?id=' + state + '&tab=1" ');}
												document.write('  title="B&aacute;sico">Básico</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'internet_home\')"') } else {document.write(' href="/residential_customers/att_internet/high_speed_internet.html?id=' + state + '&tab=2" ');}
												document.write(' title="Express">Express</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'internet_home\')"') } else {document.write(' href="/residential_customers/att_internet/high_speed_internet.html?id=' + state + '&tab=3" ');}
												document.write(' title="Pro">Pro</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'internet_home\')"') } else {document.write(' href="/residential_customers/att_internet/high_speed_internet.html?id=' + state + '&tab=4" ');}
												document.write(' title="Elite">Elite</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'dsl_direct\')"') } else {document.write(' href="/residential_customers/att_internet/dsl_direct.html?id=' + state + '" ');}
												document.write(' title="Internet sin tel&eacute;fono">Internet sin teléfono</a></li> ');
document.write('                </ul>');
document.write('                </div>');
                
document.write('        		<div id="quick-links-box-03" class="quick-links-box">');
document.write('                <h6>Servicio telefónico...</h6>');
document.write('                <ul>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'phone_landing\')"') } else {document.write(' href="/residential_customers/att_home_phone/home_phone.html?id=' + state + '" ');}
												document.write(' title="Servicio local">Servicio local</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'long_distance\')"') } else {document.write(' href="/residential_customers/att_home_phone/long_distance.html?id=' + state + '" ');}
												document.write(' title="Larga distancia nacional">Larga distancia nacional</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'long_distance\')"') } else {document.write(' href="/residential_customers/att_home_phone/long_distance.html?id=' + state + '" ');}
												document.write(' title="Larga distancia internacional">Larga distancia internacional</a></li>');
document.write('                <li><a href="http://www.wireless.att.com/cell-phone-service/?locale=es_US" title="Servicio m&oacute;vil">Servicio móvil</a></li>');
document.write('                </ul>');
document.write('                </div>');
                
document.write('        		<div id="quick-links-box-04" class="quick-links-box">');
document.write('                <h6>AT&T U-verse...</h6>');
document.write('                <ul>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'uverse_tv\')"') } else {document.write(' href="/residential_customers/att_uverse/uverse_tv/index.html?id=' + state + '" ');}
												document.write(' title="U200 Latino">U200 Latino</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'uverse_tv\')"') } else {document.write(' href="/residential_customers/att_uverse/uverse_tv/index.html?id=' + state + '" ');}
												document.write(' title="Canales en espa&ntilde;ol">Canales en español</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'uverse_services\')"') } else {document.write(' href="/residential_customers/att_uverse/uverse_services/index.html?id=' + state + '" ');}
												document.write(' title="Servicios &uacute;nicos">Servicios únicos</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'uverse_ofertas\')"') } else {document.write(' href="/residential_customers/att_uverse/uverse_offers/index.html?id=' + state + '" ');}
												document.write(' title="Ofertas">Ofertas</a></li>');
document.write('                </ul>');
document.write('                </div>');
                
document.write('        		<div id="quick-links-box-05" class="quick-links-box last">');
document.write('                <h6>Televisión digital de AT&T...</h6>');
document.write('                <ul>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'directv\')"') } else {document.write(' href="/residential_customers/att_advanced_tv/directv.html?id=' + state + '" ');}
												document.write(' title="AT&amp;T | DIRECTV">AT&T | DIRECTV</a></li>');
document.write('                <li><a ');
		if(state == 'nostate') {document.write(' href="javascript: stateSelectInitialize(\'uverse_home\')"') } else {document.write(' href="/residential_customers/att_uverse/index.html?id=' + state + '" ');}
												document.write(' title="U-verse">AT&T U-verse</a></li>');
document.write('                </ul>');
document.write('                </div>');
                
document.write('        </div>');
}


function renderNewsroomBox() {
	

	
	
document.write(' <div id="alerts-box" class="section">');
document.write(' <h6>Alertas de Noticias</h6>');
document.write(' <p>Alertas de noticias actualizadas por medio de RSS</p>');
document.write(' <ul>');
document.write(' <li>');
document.write(' <ul id="rss-menu">');
document.write(' <li><a href="http://att.centralcast.net/rssespanol/" target="_blank" title="RSS">RSS</a></li>');
document.write(' <li class="nb"><a href="http://att.centralcast.net/rssespanol/" target="_blank" title="&iquest;Qu&eacute; es RSS?">¿Qué es RSS?</a></li>');
document.write(' </ul>');
document.write(' <div class="clear"></div>');
document.write(' </li>');
document.write(' <li><a href="#contact" id="contact-news" title="Contactos para medios de comunicaci&oacute;n">Contactos para medios<br />de comunicación</a></li>');
document.write(' <li><a href="http://www.att.com/newsroom" title="English News Room">English News Room</a></li>');
document.write(' </ul>');
document.write(' </div>'); 
document.write(' <div id="conectada-box" class="section '); 
if(directory == 'media_kits' || directory == 'useful_information' ) {} else if (section == 'newsroom' && directory == 'index') {} else {document.write(' nbb');}
document.write(' ">');
document.write(' <h6>La Casa Conectada</h6>');
document.write('<p><a href="/help/conectada/index.html?id=' + state + '" title="La Casa Conectada">Columna con información relevante a tus necesidades, consejos y preguntas más comunes.</a></p>');
document.write(' </div>     ');
}

function renderLatestReleases() {
document.write('<div class="section nbb">');
document.write('<h6>Titulares</h6>');  

document.write('<div class="rc-release-box">');
document.write('<p>17 del noviembre del 2011<br />');
document.write('<a href="/newsroom/news_releases/black_friday_11-17-11.html?id=' + state + '" title="AT&amp;T Lo Hace de Nuevo: Viernes de Ofertas y Lunes de Ofertas por Internet con Precios Insuperables">AT&amp;T Lo Hace de Nuevo: Viernes de Ofertas y Lunes de Ofertas por Internet con Precios Insuperables</a></p>');
document.write('</div>');

document.write('<div class="rc-release-box">');
document.write('<p>16 del noviembre del 2011<br />');
document.write('<a href="/newsroom/news_releases/puerto_rico_LTE_11-1611.html?id=' + state + '" title="Disponible 4G LTE de AT&amp;T en San Juan, Puerto Rico el 20 de Noviembre">Disponible 4G LTE de AT&amp;T en San Juan, Puerto Rico el 20 de Noviembre</a></p>');
document.write('</div>');

document.write('<div class="rc-release-box">');
document.write('<p>31 de octubre del 2011<br />');
document.write('<a href="/newsroom/news_releases/samsung_galaxy_s_II_10-31-11.html?id=' + state + '" title="Primeros Equipos Smartphone con LTE para Clientes de AT&amp;T Ingresar&aacute;n al Mercado el 6 de Noviembre">Primeros Equipos Smartphone con LTE para Clientes de AT&amp;T Ingresar&aacute;n al Mercado el 6 de Noviembre</a></p>');
document.write('</div>');

document.write('<div class="rc-release-box">');
document.write('<p>25 de octubre del 2011<br />');
document.write('<a href="/newsroom/news_releases/uverse_wireless_receptor_10-25-11.html?id=' + state + '" title="Primer Receptor Inal&aacute;mbrico Integrado de la Industria Da a Clientes de U-verse TV M&aacute;s Libertad Para Ver Televisi&oacute;n desde Cualquier Lugar de la Casa, en Cualquier Habitaci&oacute;n">Primer Receptor Inal&aacute;mbrico Integrado de la Industria Da a Clientes de U-verse TV M&aacute;s Libertad Para Ver Televisi&oacute;n desde Cualquier Lugar de la Casa, en Cualquier Habitaci&oacute;n</a></p>');
document.write('</div>');

document.write('<div class="rc-release-box">');
document.write('<p>11 del octubre del 2011<br />');
document.write('<a href="/newsroom/news_releases/att_uverse_espanol_10_11_2011.html?id=' + state + '" title="AT&amp;T U-verse TV Ofrece Nueva Programaci&oacute;n en Espanol por el Mes de la Hispanidad">AT&amp;T U-verse TV Ofrece Nueva Programaci&oacute;n en Espanol por el Mes de la Hispanidad</a></p>');
document.write('</div>');

document.write('<div class="rc-release-box">');
document.write('<p>11 del octubre del 2011<br />');
document.write('<a href="/newsroom/news_releases/impulse_4g_con_gloria_estefan_10_11_2011.html?id=' + state + '" title="Comercial de TV del smartphone Impulse 4G con Gloria Estefan">Comercial de TV del smartphone Impulse 4G con Gloria Estefan</a></p>');
document.write('</div>');
 

document.write('<div class="rc-release-box">');
document.write('<p class="arrow"> <a href="/newsroom/news_archive.html?id=' + state + '" title="Ver archivos">Ver archivos</a></p>');
document.write('</div>');

document.write('</div>');
}

function shareThis() {
	document.write('<div class="share-this"><scr' + 'ipt type="text/javasc' + 'ript" src="http://w.sharethis.com/button' + '/sharethis.js#publisher=f627f4e4-ac1c-41c0-8a6f-a3358d73fa59&type=website&buttonText=Compartir"></sc' + 'ript></div>');
}





function renderAyudaRightCol() { 
						document.write('<div id="premios-box" class="section">'); 
						document.write('<p><a href="https://referral.wireless.att.com/postpaid/es/home/landing.do " title="Recomienda a tus familiares y amigos">Recomienda a tus<br />familiares y amigos y<br />gana hasta $599<br /> al año.</a></p>');
						document.write('</div>');
		 

						
						document.write('<div class="section nbb">');
 						document.write('<h6>Facturación y Pago</h6>');
						document.write('<p><a href="/help/faqs/billing.html?id=' + state + '" title="Informaci&oacute;n sobre opciones de facturaci&oacute;n y pago">Información sobre opciones de facturación y pago</a>.</p>');
 						document.write('<h6>Nuevo Servicio Telefónico</h6>');
						document.write('<p><a href="https://www.att.com/Common/espanol/order_form.html?id=' + state + '&prod=new_phone_service" title="&iquest;Cliente nuevo? Suscr&iacute;bete aqu&iacute;.">¿Cliente nuevo? Suscríbete aquí</a>.</p>');
 						document.write('<h6>AT&T facilita toda tu mudanza</h6>');
						document.write('<p><a href="/help/att_move/index.html?id=' + state + '" title="&iquest;Te est&aacute;s mudando? Con AT&amp;T facilita toda tu mudanza, encontrar&aacute;s todo lo necesario para mudarte a tu nueva casa.">¿Te estás mudando? Con AT&T Facilita Toda Tu Mudanza, encontrarás todo lo necesario para mudarte a tu nueva casa.</a>.</p>');
 						document.write('<h6>La Casa Conectada</h6>');
						document.write('<p><a href="/help/conectada/index.html?id=' + state + '" title="Columna con informaci&oacute;n relevante a tus necesidades, consejos y preguntas m&aacute;s comunes.">Columna con información relevante a tus necesidades, consejos y preguntas más comunes</a>.</p>');
						document.write('</div>');
}


function renderMoveRightCol() {
						document.write('<div class="section nbb">');
						document.write('<h6>Recursos Adicionales</h6>');
						document.write('<p>Guía de mudanza para negocios<br /><a href="/help/att_move/moving_tips.html?id=' + state + '" title="Gu&iacute;a de mudanza para negocios"  >Más Información >> </a> </p>');
						document.write('<p>Guía de mudanza para negocios<br /><a href="/mlcomm/documents/att_moving_guide.pdf"  title="Gu&iacute;a de mudanza para negocios PDF " target="_blank">Descargar el PDF >>  </a></p>');
						document.write('</div>');
}






















function renderFooter() {
	document.write('<div class="clear"></div>');
	document.write('<div id="inner-footer">');
	document.write('<ul id="footerNav">');
	document.write('    	<li><a href="/index.html?id=' + state + '" title="Portada">Portada</a></li>');
	document.write('    	<li><a href="/about_att/index.html?id=' + state + '" title="Acerca de AT&amp;T">Acerca de AT&T </a></li>');
	document.write('    	<li><a href="http://www.att.com/gen/careers?pid=1" title="Empleos">Empleos</a></li>');
	document.write('    	<li><a href="http://www.wireless.att.com/find-a-store/" title="Buscar tienda">Buscar tienda</a></li>');
	document.write('    	<li><a href="/help/contact_us.html?id=' + state + '" title="Cont&aacute;ctanos">Contáctanos</a></li>');
	document.write('    	<li><a href="/privacy_policy/index.html?id=' + state + '" title="Pol&iacute;tica de privacidad">Política de privacidad</a></li>');
	document.write('    	<li><a href="/privacy_policy/privacy_terms_of_use.html?id=' + state + '" title="T&eacute;rminos de uso">T&eacute;rminos de uso</a></li>');
	document.write('    	<li><a href="/residential_customers/att_internet/index.html?id=' + state + '" class="nb" title="Broadband Management">Broadband Management</a></li>');
	document.write('    </ul>');
	document.write('    <div class="clear"></div>');
	document.write('    <p><a href="http://www.att.com/gen/privacy-policy?pid=2587" class="nb" title="AT&amp;T Intellectual Property">&copy; 2003-2011 AT&T Intellectual Property.</a>  Todos los derechos reservados. <a href="http://www.yellowpages.com" class="nb">YELLOWPAGES.COM</a></p>');
	document.write('</div>');
	
	document.write('<div id="pop"> </div>');
}


function renderFooterOrderForm() {
	document.write('<div class="clear"></div>');
	document.write('<div id="inner-footer">');
	document.write('<ul id="footerNav">');
	document.write('    	<li><a href="http://espanol.att.com/index.html?id=' + state + '" title="Portada">Portada</a></li>');
	document.write('    	<li><a href="http://espanol.att.com/about_att/index.html?id=' + state + '" title="Acerca de AT&amp;T">Acerca de AT&T </a></li>');
	document.write('    	<li><a href="http://www.att.com/gen/careers?pid=1" title="Empleos">Empleos</a></li>');
	document.write('    	<li><a href="http://www.wireless.att.com/find-a-store/" title="Buscar Tienda">Buscar Tienda</a></li>');
	document.write('    	<li><a href="http://espanol.att.com/help/contact_us.html?id=' + state + '" title="Cont&aacute;ctanos">Contáctanos</a></li>');
	document.write('    	<li><a href="/privacy_policy/index.html?id=' + state + '" title="Pol&iacute;tica de Privacidad">Política de Privacidad</a></li>');
	document.write('    	<li><a href="/privacy_policy/privacy_terms_of_use.html?id=' + state + '" title="T&eacute;rminos de uso">T&eacute;rminos de uso</a></li>');
	document.write('    	<li><a href="/residential_customers/att_internet/index.html?id=' + state + '" class="nb" title="Broadband Management">Broadband Management</a></li>');
	document.write('    </ul>');
	document.write('    <div class="clear"></div>');
	document.write('    <p><a href="http://www.att.com/gen/privacy-policy?pid=2587" class="nb" title="AT&amp;T Intellectual Property">© 2003-2010 AT&T Intellectual Property.</a>  Todos los derechos reservados. <a href="http://www.yellowpages.com" class="nb">YELLOWPAGES.COM</a></p>');
	document.write('</div>');
	
	document.write('<div id="pop"> </div>');
}
 


function renderUverseProductMenu() {
	document.write('<div class="section">');
	document.write('<h6>Servicios AT&T U-verse<sup>&reg;</sup></h6>');
	document.write('<ul id="uverse-products-menu">');
	document.write('<li id="bundles"><a href="/residential_customers/att_uverse/uverse_offers/index.html?id=' + state + '" title="Paquetes AT&amp;T U-verse&reg; Choice">Paquetes AT&T U-verse<sup>&reg;</sup> Choice</a></li>');
	document.write('<li id="tv"><a href="/residential_customers/att_uverse/uverse_tv/index.html?id=' + state + '" title="AT&amp;T U-verse&reg; TV">AT&T U-verse<sup>&reg;</sup>  TV</a></li>');
	document.write('<li id="internet"><a href="/residential_customers/att_uverse/uverse_internet/index.html?id=' + state + '" title="Servicio de Internet de Alta Velocidad AT&amp;T U-verse<sup>&reg;</sup>">Servicio de Internet de Alta Velocidad AT&T U-verse<sup>&reg;</sup></a></li>');
	document.write('<li id="dvr"><a href="/residential_customers/att_uverse/uverse_offers/total_home_dvr.html?id=' + state + '" title="Total Home DVR">Total Home DVR</a></li>');
	document.write('<li id="phone"><a href="/residential_customers/att_uverse/uverse_voice/index.html?id=' + state + '" title="Servicio Tel&eacute;fono Digital AT&amp;T U-verse<sup>&reg;</sup>">Servicio Teléfono Digital AT&T U-verse<sup>&reg;</sup></a></li>');
	document.write('<li id="wireless"><a href="/residential_customers/att_uverse/uverse_wireless/index.html?id=' + state + '" title="Receptor inal&aacute;mbrico de TV de AT&amp;T U-verse<sup>&reg;</sup>">Receptor inal&aacute;mbrico de TV de AT&amp;T U-verse<sup>&reg;</sup></a></li>');
	document.write('</ul>');
	document.write('</div>');
                    
	document.write('<div class="section ">');
	document.write('<h6>Guía de Canales</h6>');
	document.write('<p id="channel-guide"><a href="#canales" onclick="open(\'http://www.udigtv.com/urock/lineup/urd5.aspx?urockz\',\'\',\'width=775,height=750\')"  title="Ver los Canales">Ver los Canales</a><br />(en inglés)</p>');
            
	document.write('</div>');
                    
	document.write('<div class="section nbb">'); 
	document.write('<p class="arrow"><a href="/legal_terms/disclaimers/att_uverse.html?id=' + state +'" title="Informaci&oacute;n importante sobre las ofertas">Información importante</a> sobre las ofertas</p>');
            
	document.write('</div>');
}


function renderLandingPageBottom() {
	document.write('<div id="all-products-box" class="content-box-half"> ');
	document.write('<h6>¿Tienes una pregunta con respecto a los productos y servicios de AT&T?</h6>');
	document.write('<p><a href="/help/index.html?id=' + state + '" title="M&aacute;s informaci&oacute;n">Más información >></a></p>');
	document.write('</div>');
                
	document.write('<div id="move-att-box" class="content-box-half last"> ');
	document.write('<h6><em>¿Te estás mudando?</em> AT&T facilita toda tu mudanza</h6>');
	document.write('<p><a href="/help/att_move/index.html?id=' + state + '" title="M&aacute;s informaci&oacute;n">Más información >></a></p>');
	document.write('</div>');
}





function renderAnalyticsCode() {
document.write("<script>");
document.write(" url = location.href; ");
document.write("checkLive = url.indexOf(\'espanol.att.com\');  ");  
document.write(" if(checkLive != \'-1\') { ");
document.write(" var _gaq = _gaq || []; ");  
document.write("  _gaq.push(['_setAccount', 'UA-273710-15']); ");  
document.write("  _gaq.push(['_setDomainName', '.att.com']); ");  
document.write("  _gaq.push(['_setAllowHash', false]);"); 
document.write("  _gaq.push(['_trackPageview']); "); 

document.write(" (function() {"); 
document.write("    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"); 
document.write("    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"); 
document.write("    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"); 
document.write("  })();"); 
document.write("}  "); 
document.write("</script>"); 
}


function renderAnalyticsCodeOrderForm() {
document.write("<script>"); 
document.write(" var _gaq = _gaq || []; ");  
document.write("  _gaq.push(['_setAccount', 'UA-273710-15']); ");  
document.write("  _gaq.push(['_setDomainName', '.att.com']); ");  
document.write("  _gaq.push(['_setAllowHash', false]);"); 
document.write("  _gaq.push(['_trackPageview']); "); 

document.write(" (function() {"); 
document.write("    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"); 
document.write("    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"); 
document.write("    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"); 
document.write("  })();");  
document.write("</script>"); 
}