(function(){
var g=this;function h(b,a,c){return b.call.apply(b.bind,arguments)}function i(b,a,c){var d=a||g;if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(a,e);return b.apply(d,a)}}else return function(){return b.apply(d,arguments)}}function j(b,a,c){j=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:i;return j.apply(null,arguments)}
Function.prototype.bind=Function.prototype.bind||function(b,a){if(arguments.length>1){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,b);return j.apply(null,c)}else return j(this,b)};function k(b){this.a=b||{};this.pathname=window.location.pathname;this.c=!0;if(this.a.tracklinks===!1)this.c=!1;if(this.a.trackQueryParams)this.i=!0;this.d=this.a.cookiePath||/^(.*\/)/.exec(this.pathname)[0];this.prefix=this.a.prefix||"";this.f=this.a.defaultEventName;this.e=this.a.defaultAction;this.g=this.a.defaultLabel;var b=this.a.profile,a=this.prefix+this.pathname;this.i&&(a+=window.location.search);window._gaq=window._gaq||[];window._gaq.push(["_setAccount",b]);window._gaq.push(["_setCookiePath",
this.d]);window._gaq.push(["_setAllowAnchor",!0]);window._gaq.push(["_trackPageview",a]);window._gaq.push(["_trackPageLoadTime"]);if(!window._gat)b=document.createElement("script"),b.type="text/javascript",b.async=!0,b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(b,a);l(this,this.h,this);this.a.trackUnload&&m(window,"unload",this.j,this)}
k.prototype.h=function(){if(this.c){for(var b=["a"],a=[],c=0,d=b.length;c<d;c++){var e=document.getElementsByTagName(b[c]);if(e){a.push(e);for(var f=0,d=e.length;f<d;f++)n(this,e[f])}}this.anchors=a}this.a.heatMapper&&o(this)};k.prototype.j=function(){this.b("AutoTrack: Navigation","Unload",window.location.href)};function o(b){m(document,"click",function(a){this.b("AutoTrack: Heatmap","Click",a.clientX+","+a.clientY)},b)}
k.prototype.b=function(b,a,c){window._gaq&&(this.prefix&&(c=this.prefix+c),window._gaq.push(["_trackEvent",b,a,c]))};
function p(b,a,c){function d(a){if(typeof a=="string")return a;else if(typeof a=="function")return a(c)}if(a=="eventname")return c.getAttribute("data-g-event")||d(b.f)||(c.tagName.toLowerCase()=="a"?c.hostname==window.location.hostname?"AutoTrack: Link Click":"AutoTrack: Outbound Click":"AutoTrack: Element Click");else if(a=="action")return c.getAttribute("data-g-action")||d(b.e)||c.getAttribute("href")||"AutoTrack: Element Click";else if(a=="label")return c.getAttribute("data-g-label")||d(b.g)||
b.pathname}function n(b,a){m(a,"click",function(){var b=p(this,"eventname",a),d=p(this,"action",a),e=p(this,"label",a);this.b(b,d,e)},b)}function m(b,a,c,d){d&&(c=j(c,d));b.addEventListener?b.addEventListener(a,c,!1):b.attachEvent&&b.attachEvent("on"+a,c)}
function l(b,a,c){c&&(a=j(a,c));if(document.addEventListener)try{m(document,"DOMContentLoaded",a,b)}catch(d){m(window,"load",a,b)}else if(!document.uniqueID&&document.expando)var e=document.createElement("tempnode"),f=window.setInterval(function(){try{e.doScroll("left")}catch(b){return}window.clearInterval(f);f=e=null;c&&(a=j(a,c));a()},50);else"readyState"in document?f=window.setInterval(function(){/loaded|complete/.test(document.readyState)&&(window.clearInterval(f),f=null,c&&(a=j(a,c)),a())},50):
m(window,"load",a,b)}var q="gweb.analytics.AutoTrack".split("."),r=g;!(q[0]in r)&&r.execScript&&r.execScript("var "+q[0]);for(var s;q.length&&(s=q.shift());)!q.length&&k!==void 0?r[s]=k:r=r[s]?r[s]:r[s]={};k.prototype.trackEvent=k.prototype.b;
})()