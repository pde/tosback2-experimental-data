var FSR = {
    'version': '5.1.0',
    'date': '8/21/2009',
    'enabled': true,
    'files': '/foresee/',
    'id': 'R9RRtJoQ98EENQoRBJ0Mhg==',
    'sites': [{
        path: 'wcstg.comcast.com',
        cookie: 's',
        domain: 'wcstg.comcast.com'
    }, {
        path: 'comcast.com',
        cookie: 's',
        domain: 'comcast.com'
    }, {
        path: '.',
        cookie: 's',
        domain: 'default'
}]
};/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
function fsr$setAlive(){var A=new Date().getTime();document.cookie="fsr.a="+A+";path=/"+((FSR.site.domain)?";domain="+FSR.site.domain+";":";")
}(function(){if(window!=window.top){return }var F=FSR.sites;for(var D=0,C=F.length;D<C;D++){var B;
if(B=document.location.href.match(F[D].path)){FSR.siteid=D;FSR.site=FSR.sites[FSR.siteid];if(!FSR.site.domain){FSR.site.domain=B[0]
}else{if(FSR.site.domain=="default"){FSR.site.domain=false}}if(!FSR.site.name){FSR.site.name=B[0]
}var E=["files","js_files","image_files","html_files"];for(var D=0,A=E.length;D<A;D++){if(FSR.site[E[D]]){FSR[E[D]]=FSR.site[E[D]]
}}break}}if(!window["fsr$timer"]){fsr$setAlive();window["fsr$timer"]=setInterval(fsr$setAlive,1000)
}})();fsr$dbug={log:function(){}};FSR.Native=function(J){J=J||{};var F=J.afterImplement||function(){};
var G=J.generics;G=(G!==false);var H=J.legacy;var E=J.initialize;var B=J.protect;var A=J.name;var C=E||H;
C.xconstructor=FSR.Native;C.fsr$family={name:"native"};if(H&&E){C.prototype=H.prototype}C.prototype.xconstructor=C;
if(A){var D=A.toLowerCase();C.prototype.fsr$family={name:D}}var I=function(M,K,N,L){if(!B||L||!M.prototype[K]){M.prototype[K]=N
}if(G){FSR.Native.genericize(M,K,B)}F.call(M,K,N);return M};C.fsr$implement=function(L,K,N){if(typeof L=="string"){return I(this,L,K,N)
}for(var M in L){I(this,M,L[M],K)}return this};C.fsr$alias=function(M,K,N){if(typeof M=="string"){M=this.prototype[M];
if(M){I(this,K,M,N)}}else{for(var L in M){this.fsr$alias(L,M[L],K)}}return this};return C};FSR.Native.fsr$implement=function(D,C){for(var B=0,A=D.length;
B<A;B++){D[B].fsr$implement(C)}};FSR.Native.genericize=function(B,C,A){if((!A||!B[C])&&typeof B.prototype[C]=="function"){B[C]=function(){var D=Array.prototype.slice.call(arguments);
return B.prototype[C].apply(D.shift(),D)}}};FSR.Native.fsr$alias=function(E,B,A,F){for(var D=0,C=E.length;
D<C;D++){E[D].fsr$alias(B,A,F)}};(function(B){for(var A in B){new FSR.Native({name:A,initialize:B[A],protect:true,generics:true})
}})({String:String,Function:Function,Number:Number,RegExp:RegExp,Date:Date});FSR.$chk=function(A){return !!(A||A===0)
};FSR.$clear=function(A){clearTimeout(A);clearInterval(A);return null};FSR.$defined=function(A){return(A!=undefined)
};FSR.$empty=function(){};FSR.$arguments=function(A){return function(){return arguments[A]}};FSR.$lambda=function(A){return(typeof A=="function")?A:function(){return A
}};FSR.$extend=function(C,A){for(var B in (A||{})){C[B]=A[B]}return C};FSR.$unlink=function(C){var B;
switch(FSR.$type(C)){case"object":B={};for(var E in C){B[E]=FSR.$unlink(C[E])}break;case"hash":B=FSR.$unlink(C.getClean());
break;case"array":B=[];for(var D=0,A=C.length;D<A;D++){B[D]=FSR.$unlink(C[D])}break;default:return C
}return B};FSR.$merge=function(){var E={};for(var D=0,A=arguments.length;D<A;D++){var B=arguments[D];
if(FSR.$type(B)!="object"){continue}for(var C in B){var G=B[C],F=E[C];E[C]=(F&&FSR.$type(G)=="object"&&FSR.$type(F)=="object")?FSR.$merge(F,G):FSR.$unlink(G)
}}return E};FSR.$pick=function(){for(var B=0,A=arguments.length;B<A;B++){if(arguments[B]!=undefined){return arguments[B]
}}return null};FSR.$random=function(B,A){return(Math.random()*(A-B))+B};FSR.$splat=function(B){var A=FSR.$type(B);
return(A)?((A!="array"&&A!="arguments")?[B]:B):[]};FSR.$time=Date.now||function(){return new Date().getTime()
};FSR.$try=function(){for(var B=0,A=arguments.length;B<A;B++){try{return arguments[B]()}catch(C){}}return null
};FSR.$type=function(A){if(A==undefined){return false}if(A.fsr$family){return(A.fsr$family.name=="number"&&!isFinite(A))?false:A.fsr$family.name
}if(A.nodeName){switch(A.nodeType){case 1:return"element";case 3:return(/\S/).test(A.nodeValue)?"textnode":"whitespace"
}}else{if(typeof A.length=="number"){if(A.callee){return"arguments"}else{if(A.item){return"collection"
}}}}if(FSR.isArray(A)){return"array"}return typeof A};FSR.isArray=function(B){if(typeof B=="object"){var A=B.constructor.toString().match(/array/i);
return(A!=null)}return false};FSR.Hash=new FSR.Native({name:"Hash",initialize:function(A){if(FSR.$type(A)=="hash"){A=FSR.$unlink(A.getClean())
}for(var B in A){this[B]=A[B]}return this}});FSR.Hash.fsr$implement({getLength:function(){var B=0;
for(var A in this){if(this.hasOwnProperty(A)){B++}}return B},forEach:function(B,C){for(var A in this){if(this.hasOwnProperty(A)){B.call(C,this[A],A,this)
}}},getClean:function(){var B={};for(var A in this){if(this.hasOwnProperty(A)){B[A]=this[A]}}return B
},empty:function(){FSR.Hash.each(this,function(B,A){delete this[A]},this);return this}});FSR.Hash.fsr$alias("forEach","each");
FSR.$H=function(A){return new FSR.Hash(A)};FSR.$each=function(C,B,D){var A=FSR.$type(C);(A=="arguments"||A=="collection"||A=="array")?FSR.Array.each(C,B,D):FSR.Hash.each(C,B,D)
};FSR.Browser=new FSR.Hash({Type:{name:"unknown",version:""},Engine:{name:"unknown",version:""},Platform:{name:(navigator.platform.match(/mac|win32|linux/i)||["other"])[0].toLowerCase(),os:"unknown"},Features:{xpath:!!(document.evaluate),air:!!(window.runtime)},Plugins:{},searchString:function(D){for(var A=0;
A<D.length;A++){var B=D[A].s;var C=D[A].p;this.versionSearchString=D[A].v||D[A].i;if(B){if(B.indexOf(D[A].b)!=-1){return D[A].i
}}else{if(C){return D[A].i}}}},searchVersion:function(B){var A=B.indexOf(this.versionSearchString);
if(A==-1){return }return parseFloat(B.substring(A+this.versionSearchString.length+1))},dataBrowser:[{s:navigator.userAgent,b:"Chrome",i:"Chrome"},{s:navigator.vendor,b:"Apple",i:"Safari",v:"Version"},{p:window.opera,i:"Opera"},{s:navigator.userAgent,b:"Firefox",i:"Firefox"},{s:navigator.userAgent,b:"Netscape",i:"Netscape"},{s:navigator.userAgent,b:"MSIE",i:"Explorer",v:"MSIE"},{s:navigator.userAgent,b:"Gecko",i:"Mozilla",v:"rv"}],dataOS:[{s:navigator.platform,b:"Win",i:"Windows"},{s:navigator.platform,b:"Mac",i:"Mac"},{s:navigator.platform,b:"Linux",i:"Linux"}]});
if(window.opera){FSR.Browser.Engine={name:"presto",version:(document.getElementsByClassName)?950:925}
}else{if(window.ActiveXObject){FSR.Browser.Engine={name:"trident",version:(window.XMLHttpRequest)?5:4}
}else{if(!navigator.taintEnabled){FSR.Browser.Engine={name:"webkit",version:(FSR.Browser.Features.xpath)?420:419}
}else{if(document.getBoxObjectFor!=null){FSR.Browser.Engine={name:"gecko",version:(document.getElementsByClassName)?19:18}
}}}}FSR.Browser.Engine[FSR.Browser.Engine.name]=FSR.Browser.Engine[FSR.Browser.Engine.name+FSR.Browser.Engine.version]=true;
if(window.orientation!=undefined){FSR.Browser.Platform.name="ipod"}FSR.Browser.Platform[FSR.Browser.Platform.name]=true;
FSR.Browser.Plugins.Flash=(function(){var A=(FSR.$try(function(){return navigator.plugins["Shockwave Flash"].description
},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")})||"0 r0").match(/\d+/g);
return{version:parseInt(A[0]||0+"."+A[1]||0),build:parseInt(A[2]||0)}})();FSR.Browser.Type.name=FSR.Browser.searchString(FSR.Browser.dataBrowser)||"unknown";
FSR.Browser.Type.version=FSR.Browser.searchVersion(navigator.userAgent)||FSR.Browser.searchVersion(navigator.appVersion)||"unknown";
FSR.Browser.Platform.os=FSR.Browser.searchString(FSR.Browser.dataOS)||"unknown";FSR.$exec=function(B){if(!B){return B
}if(window.execScript){window.execScript(B)}else{var A=document.createElement("script");A.setAttribute("type","text/javascript");
A.text=B;document.fsr$head.appendChild(A);document.fsr$head.removeChild(A)}return B};FSR.Native.UID=1;
FSR.$uid=(FSR.Browser.Engine.trident)?function(A){return(A.fsr$uid||(A.fsr$uid=[FSR.Native.UID++]))[0]
}:function(A){return A.fsr$uid||(A.fsr$uid=FSR.Native.UID++)};FSR.Window=new FSR.Native({name:"Window",initialize:function(A){FSR.$uid(A);
if(!A.Element){A.Element=FSR.$empty;if(FSR.Browser.Engine.webkit){A.document.createElement("iframe")
}A.Element.prototype=(FSR.Browser.Engine.webkit)?window["[[DOMElement.prototype]]"]:{}}return FSR.$extend(A,FSR.Window.Prototype)
},afterImplement:function(B,A){window[B]=A;FSR.Window.Prototype[B]=A}});FSR.Window.Prototype={fsr$family:{name:"window"}};
new FSR.Window(window);FSR.Document=new FSR.Native({name:"Document",initialize:function(A){FSR.$uid(A);
A.fsr$head=A.getElementsByTagName("head")[0];A.fsr$html=A.getElementsByTagName("html")[0];A.fsr$window=A.defaultView||A.parentWindow;
if(FSR.Browser.Engine.trident4){FSR.$try(function(){A.execCommand("BackgroundImageCache",false,true)
})}return FSR.$extend(A,FSR.Document.Prototype)},afterImplement:function(B,A){document[B]=A;FSR.Document.Prototype[B]=A
}});FSR.Document.Prototype={fsr$family:{name:"document"}};new FSR.Document(document);FSR.Array={indexOf:function(B,D,E){var A=B.length;
for(var C=(E<0)?Math.max(0,A+E):E||0;C<A;C++){if(B[C]===D){return C}}return -1},map:function(B,E,F){var D=[];
for(var C=0,A=B.length;C<A;C++){D[C]=E.call(F,B[C],C,B)}return D},associate:function(A,D){var E={},C=Math.min(A.length,D.length);
for(var B=0;B<C;B++){E[D[B]]=A[B]}return E},contains:function(A,B,C){return FSR.Array.indexOf(A,B,C)!=-1
},extend:function(A,D){for(var C=0,B=D.length;C<B;C++){A.push(D[C])}return A},include:function(A,B){if(!FSR.Array.contains(A,B)){A.push(B)
}return A},flatten:function(B){var E=[];for(var C=0,A=B.length;C<A;C++){var D=FSR.$type(B[C]);if(!D){continue
}E=E.concat((D=="array"||D=="collection"||D=="arguments")?FSR.Array.flatten(B[C]):B[C])}return E},slice:function(){var A=Array.prototype.slice.call(arguments);
return Array.prototype.slice.apply(A.shift(),A)},forEach:function(B,D,E){for(var C=0,A=B.length;C<A;
C++){D.call(E,B[C],C,B)}},each:function(B,D,E){for(var C=0,A=B.length;C<A;C++){D.call(E,B[C],C,B)
}},toJSON:function(A){return FSR.JSON.encode(A)}};FSR.$A=function(C){if(C.item){var D=[];for(var B=0,A=C.length;
B<A;B++){D[B]=C[B]}return D}return Array.prototype.slice.call(C)};Function.fsr$implement({fsr$extend:function(A){for(var B in A){this[B]=A[B]
}return this},fsr$create:function(B){var A=this;B=B||{};return function(D){var C=B.arguments;C=(C!=undefined)?FSR.$splat(C):FSR.Array.slice(arguments,(B.event)?1:0);
if(B.event){C=FSR.Array([D||window.event],C)}var E=function(){return A.apply(B.bind||null,C)};if(B.delay){return setTimeout(E,B.delay)
}if(B.periodical){return setInterval(E,B.periodical)}if(B.attempt){return FSR.$try(E)}return E()}
},fsr$pass:function(A,B){return this.fsr$create({arguments:A,bind:B})},fsr$attempt:function(A,B){return this.fsr$create({arguments:A,bind:B,attempt:true})()
},fsr$bind:function(B,A){return this.fsr$create({bind:B,arguments:A})},fsr$bindWithEvent:function(B,A){return this.fsr$create({bind:B,event:true,arguments:A})
},fsr$delay:function(B,C,A){return this.fsr$create({delay:B,bind:C,arguments:A})()},fsr$periodical:function(A,C,B){return this.fsr$create({periodical:A,bind:C,arguments:B})()
},fsr$run:function(A,B){return this.apply(B,FSR.$splat(A))}});Number.fsr$implement({fsr$toInt:function(A){return parseInt(this,A||10)
}});String.fsr$implement({fsr$test:function(A,B){return((typeof A=="string")?new RegExp(A,B):A).test(this)
},fsr$contains:function(A,B){return(B)?(B+this+B).indexOf(B+A+B)>-1:this.indexOf(A)>-1},fsr$trim:function(){return this.replace(/^\s+|\s+$/g,"")
},fsr$clean:function(){return this.replace(/\s+/g," ").fsr$trim()},fsr$camelCase:function(){return this.replace(/-\D/g,function(A){return A.charAt(1).toUpperCase()
})},fsr$hyphenate:function(){return this.replace(/[A-Z]/g,function(A){return("-"+A.charAt(0).toLowerCase())
})},fsr$capitalize:function(){return this.replace(/\b[a-z]/g,function(A){return A.toUpperCase()})
},fsr$escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},fsr$toInt:function(A){return parseInt(this,A||10)
},fsr$stripScripts:function(B){var A="";var C=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){A+=arguments[1]+"\n";
return""});if(B===true){FSR.$exec(A)}else{if(FSR.$type(B)=="function"){B(A,C)}}return C},fsr$substitute:function(A,B){return this.replace(B||(/\\?\{([^}]+)\}/g),function(D,C){if(D.charAt(0)=="\\"){return D.slice(1)
}return(A[C]!=undefined)?A[C]:""})}});FSR.Hash.fsr$implement({has:Object.prototype.hasOwnProperty,keyOf:function(B){for(var A in this){if(this.hasOwnProperty(A)&&this[A]===B){return A
}}return null},extend:function(A){FSR.Hash.each(A,function(C,B){FSR.Hash.set(this,B,C)},this);return this
},combine:function(A){FSR.Hash.each(A,function(C,B){FSR.Hash.include(this,B,C)},this);return this
},erase:function(A){if(this.hasOwnProperty(A)){delete this[A]}return this},get:function(A){return(this.hasOwnProperty(A))?this[A]:null
},set:function(A,B){if(!this[A]||this.hasOwnProperty(A)){this[A]=B}return this},include:function(B,C){var A=this[B];
if(A==undefined){this[B]=C}return this},toQueryString:function(A){var B=[];FSR.Hash.each(this,function(F,E){if(A){E=A+"["+E+"]"
}var D;switch(FSR.$type(F)){case"object":D=FSR.Hash.toQueryString(F,E);break;case"array":var C={};
FSR.Array.each(F,function(H,G){C[G]=H});D=FSR.Hash.toQueryString(C,E);break;default:D=E+"="+encodeURIComponent(F)
}if(F!=undefined){B.push(D)}});return B.join("&")}});FSR.Hash.fsr$alias({keyOf:"indexOf",hasValue:"contains"});
FSR.Event=new FSR.Native({name:"Event",initialize:function(A,F){F=F||window;var K=F.document;A=A||F.event;
if(A.fsr$extended){return A}this.fsr$extended=true;var J=A.type;var G=A.target||A.srcElement;while(G&&G.nodeType==3){G=G.parentNode
}if(J.fsr$test(/key/)){var B=A.which||A.keyCode;var M=FSR.Event.Keys.keyOf(B);if(J=="keydown"){var D=B-111;
if(D>0&&D<13){M="f"+D}}M=M||String.fromCharCode(B).toLowerCase()}else{if(J.match(/(click|mouse|menu)/i)){K=(!K.compatMode||K.compatMode=="CSS1Compat")?K.getElementsByTagName("html")[0]:K.body;
var I={x:A.pageX||A.clientX+K.scrollLeft,y:A.pageY||A.clientY+K.scrollTop};var C={x:(A.pageX)?A.pageX-F.pageXOffset:A.clientX,y:(A.pageY)?A.pageY-F.pageYOffset:A.clientY};
if(J.match(/DOMMouseScroll|mousewheel/)){var H=(A.wheelDelta)?A.wheelDelta/120:-(A.detail||0)/3}var E=(A.which==3)||(A.button==2);
var L=null;if(J.match(/over|out/)){switch(J){case"mouseover":L=A.relatedTarget||A.fromElement;break;
case"mouseout":L=A.relatedTarget||A.toElement}if(!(function(){while(L&&L.nodeType==3){L=L.parentNode
}return true}).fsr$create({attempt:FSR.Browser.Engine.gecko})()){L=false}}}}return FSR.$extend(this,{event:A,type:J,page:I,client:C,rightClick:E,wheel:H,relatedTarget:L,target:G,code:B,key:M,shift:A.shiftKey,control:A.ctrlKey,alt:A.altKey,meta:A.metaKey})
}});FSR.Event.Keys=new FSR.Hash({enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46});
FSR.Class=new FSR.Native({name:"Class",initialize:function(B){B=B||{};var A=function(E){for(var D in this){this[D]=FSR.$unlink(this[D])
}for(var F in FSR.Class.Mutators){if(F=="extend"){continue}if(!this[F]){continue}FSR.Class.Mutators[F](this,this[F]);
delete this[F]}this.constructor=A;if(E===FSR.$empty){return this}var C=(this.initialize)?this.initialize.apply(this,arguments):this;
if(this.options&&this.options.initialize){this.options.initialize.call(this)}return C};FSR.$extend(A,this);
A.constructor=FSR.Class;A.prototype=B;return A}});FSR.Class.fsr$implement({fsr$implement:function(){FSR.Class.Mutators.Implements(this.prototype,FSR.Array.slice(arguments));
return this}});FSR.Class.Mutators={Implements:function(A,B){FSR.Array.each(FSR.$splat(B),function(C){FSR.$extend(A,(FSR.$type(C)=="class")?new C(FSR.$empty):C)
})},Extends:function(self,klass){var instance=new klass(FSR.$empty);delete instance.parent;delete instance.parentOf;
for(var key in instance){var current=self[key],previous=instance[key];if(current==undefined){self[key]=previous;
continue}var ctype=FSR.$type(current),ptype=FSR.$type(previous);if(ctype!=ptype){continue}switch(ctype){case"function":if(!arguments.callee.caller){self[key]=eval("("+String(current).replace(/\bthis\.parent\(\s*(\))?/g,function(full,close){return"arguments.callee._parent_.call(this"+(close||", ")
})+")")}self[key]._parent_=previous;break;case"object":self[key]=FSR.$merge(previous,current)}}self.parent=function(){return arguments.callee.caller._parent_.apply(this,arguments)
};self.parentOf=function(descendant){return descendant._parent_.apply(this,FSR.Array.slice(arguments,1))
}}};FSR.Events=new FSR.Class({fsr$addEvent:function(C,B,A){C=FSR.Events.removeOn(C);if(B!=FSR.$empty){this.$events=this.$events||{};
this.$events[C]=this.$events[C]||[];FSR.Array.include(this.$events[C],B);if(A){B.internal=true}}return this
},fsr$addEvents:function(A){for(var B in A){this.fsr$addEvent(B,A[B])}return this},fsr$fireEvent:function(C,B,A){C=FSR.Events.removeOn(C);
if(!this.$events||!this.$events[C]){return this}FSR.Array.each(this.$events[C],function(D){D.fsr$create({bind:this,delay:A,"arguments":B})()
},this);return this},fsr$removeEvent:function(B,A){B=FSR.Events.removeOn(B);if(!this.$events||!this.$events[B]){return this
}if(!A.internal){this.$events[B].erase(A)}return this},fsr$removeEvents:function(C){for(var D in this.$events){if(C&&C!=D){continue
}var B=this.$events[D];for(var A=B.length;A--;A){this.fsr$removeEvent(D,B[A])}}return this}});FSR.Events.removeOn=function(A){return A.replace(/^on([A-Z])/,function(B,C){return C.toLowerCase()
})};FSR.Options=new FSR.Class({setOptions:function(){this.options=FSR.$merge.fsr$run(FSR.Array.extend([this.options],arguments));
if(!this.fsr$addEvent){return this}for(var A in this.options){if(FSR.$type(this.options[A])!="function"||!(/^on[A-Z]/).test(A)){continue
}this.fsr$addEvent(A,this.options[A]);delete this.options[A]}return this}});FSR.Document.fsr$implement({fsr$newElement:function(A,B){if(FSR.Browser.Engine.trident&&B){FSR.Array.each(["name","type","checked"],function(C){if(!B[C]){return 
}A+=" "+C+'="'+B[C]+'"';if(C!="checked"){delete B[C]}});A="<"+A+">"}return $fsr.element(this.createElement(A)).fsr$set(B)
},fsr$newTextNode:function(A){return this.createTextNode(A)},fsr$getDocument:function(){return this
},fsr$getWindow:function(){return this.defaultView||this.parentWindow},fsr$purge:function(){var C=this.getElementsByTagName("*");
for(var B=0,A=C.length;B<A;B++){FSR.Browser.freeMem(C[B])}for(var D in FSR.Document.Prototype){document[D]=null
}document.fsr$uid=null;for(var D in FSR.Window.Prototype){window[D]=null}window.fsr$uid=null;document.fsr$head=null;
document.fsr$html=null;document.fsr$window=null;FSR.Element.Storage=null}});FSR.Element=new FSR.Native({name:"Element",initialize:function(A,B){var C=FSR.Element.Constructors.get(A);
if(C){return C(B)}if(typeof A=="string"){return document.fsr$newElement(A,B)}return $fsr(A).fsr$set(B)
},afterImplement:function(A,B){if(!Array[A]){FSR.Elements.fsr$implement(A,FSR.Elements.fsr$multi(A))
}FSR.Element.Prototype[A]=B}});FSR.Element.Prototype={fsr$family:{name:"element"}};FSR.Element.Constructors=new FSR.Hash;
FSR.Elements=new FSR.Native({initialize:function(F,B){B=FSR.$extend({ddup:true,cash:true},B);F=F||[];
if(B.ddup||B.cash){var G={},E=[];for(var C=0,A=F.length;C<A;C++){var D=$fsr.element(F[C],!B.cash);
if(B.ddup){if(G[D.fsr$uid]){continue}G[D.fsr$uid]=true}E.push(D)}F=E}return(B.cash)?FSR.$extend(F,this):F
}});FSR.Elements.fsr$implement({fsr$filter:function(A,B){if(!A){return this}return new FSR.Elements(FSR.Array.filter(this,(typeof A=="string")?function(C){return C.match(A)
}:A,B))}});FSR.Elements.fsr$multi=function(A){return function(){var B=[];var F=true;for(var D=0,C=this.length;
D<C;D++){var E=this[D][A].apply(this[D],arguments);B.push(E);if(F){F=(FSR.$type(E)=="element")}}return(F)?new FSR.Elements(B):B
}};FSR.Window.fsr$implement({$fsr:function(B,C){if(B&&B.fsr$family&&B.fsr$uid){return B}var A=FSR.$type(B);
return($fsr[A])?$fsr[A](B,C,this.document):null},$$fsr:function(A){if(arguments.length==1&&typeof A=="string"){return this.document.fsr$getElements(A)
}var F=[];var C=FSR.Array.flatten(arguments);for(var D=0,B=C.length;D<B;D++){var E=C[D];switch(FSR.$type(E)){case"element":E=[E];
break;case"string":E=this.document.fsr$getElements(E,true);break;default:E=false}if(E){FSR.Array.extend(F,E)
}}return new FSR.Elements(F)},fsr$getDocument:function(){return this.document},fsr$getWindow:function(){return this
}});$fsr.string=function(C,B,A){C=A.getElementById(C);return(C)?$fsr.element(C,B):null};$fsr.element=function(A,D){FSR.$uid(A);
if(!D&&!A.fsr$family&&!(/^object|embed$/i).test(A.tagName)){var B=FSR.Element.Prototype;for(var C in B){A[C]=B[C]
}}return A};$fsr.object=function(B,C,A){if(B.toElement){return $fsr.element(B.toElement(A),C)}return null
};$fsr.textnode=$fsr.whitespace=$fsr.window=$fsr.document=FSR.$arguments(0);FSR.Native.fsr$implement([FSR.Element,FSR.Document],{fsr$getElement:function(A,B){return $fsr(this.fsr$getElements(A,true)[0]||null,B)
},fsr$getElements:function(A,D){A=A.split(",");var C=[];var B=(A.length>1);FSR.Array.each(A,function(E){var F=this.getElementsByTagName(E.fsr$trim());
(B)?FSR.Array.extend(C,F):C=F},this);return new FSR.Elements(C,{ddup:B,cash:!D})}});FSR.Element.Storage={get:function(A){return(this[A]||(this[A]={}))
}};FSR.Element.Inserters=new FSR.Hash({after:function(B,A){if(!A.parentNode){return }var C=A.nextSibling;
(C)?A.parentNode.insertBefore(B,C):A.parentNode.appendChild(B)},bottom:function(B,A){A.appendChild(B)
}});FSR.Element.Inserters.inside=FSR.Element.Inserters.bottom;FSR.Element.fsr$implement({fsr$getDocument:function(){return this.ownerDocument
},fsr$getWindow:function(){return this.ownerDocument.fsr$getWindow()},fsr$set:function(D,B){switch(FSR.$type(D)){case"object":for(var C in D){this.fsr$set(C,D[C])
}break;case"string":var A=FSR.Element.Properties.get(D);if(A&&A.set){A.set.apply(this,FSR.Array.slice(arguments,1))
}else{this.fsr$setProperty(D,B)}}return this},fsr$inject:function(B,A){FSR.Element.Inserters.get(A||"bottom")(this,$fsr(B,true));
return this},fsr$dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this
},fsr$setProperty:function(D,E){var C=FSR.Element.Attributes,B=C.Props[D],A=FSR.$defined(E);if(B&&C.Bools[D]){E=(E||!A)?true:false
}else{if(!A){return this.removeProperty(D)}}(B)?this[B]=E:this.setAttribute(D,E);return this},fsr$setProperties:function(A){for(var B in A){this.fsr$setProperty(B,A[B])
}return this}});FSR.Element.Properties=new FSR.Hash;FSR.Element.Properties.html={set:function(){return this.innerHTML=FSR.Array.flatten(arguments).join("")
}};FSR.Native.fsr$implement([FSR.Element,FSR.Window,FSR.Document],{fsr$addListener:function(B,A){if(this.addEventListener){this.addEventListener(B,A,false)
}else{this.attachEvent("on"+B,A)}return this},fsr$removeListener:function(B,A){if(this.removeEventListener){this.removeEventListener(B,A,false)
}else{this.detachEvent("on"+B,A)}return this},fsr$retrieve:function(B,A){var D=FSR.Element.Storage.get(this.fsr$uid);
var C=D[B];if(FSR.$defined(A)&&!FSR.$defined(C)){C=D[B]=A}return FSR.$pick(C)},fsr$store:function(B,A){var C=FSR.Element.Storage.get(this.fsr$uid);
C[B]=A;return this},fsr$eliminate:function(A){var B=FSR.Element.Storage.get(this.fsr$uid);delete B[A];
return this}});FSR.Element.Attributes=new FSR.Hash({Props:{html:"innerHTML","class":"className","for":"htmlFor",text:(FSR.Browser.Engine.trident)?"innerText":"textContent"},Bools:["compact","nowrap","ismap","declare","noshade","checked","disabled","readonly","multiple","selected","noresize","defer"],Camels:["value","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"]});
FSR.Browser.freeMem=function(A){if(!A){return }if(FSR.Browser.Engine.trident&&(/object/i).test(A.tagName)){for(var B in A){if(typeof A[B]=="function"){A[B]=FSR.$empty
}}FSR.Element.fsr$dispose(A)}if(A.fsr$uid&&A.fsr$removeEvents){A.fsr$removeEvents()}if(A.fsr$uid){A.fsr$uid=null
}};(function(A){var C=A.Bools,B=A.Camels;A.Bools=C=FSR.Array.associate(C,C);FSR.Hash.extend(FSR.Hash.combine(A.Props,C),FSR.Array.associate(B,FSR.Array.map(B,function(D){return D.toLowerCase()
})));A.erase("Camels")})(FSR.Element.Attributes);window.fsr$addListener("unload",function(){window.fsr$removeListener("unload",arguments.callee);
window.fsr$fireEvent("unload");document.fsr$purge();if(window.CollectGarbage){CollectGarbage()}});
FSR.Element.Properties.events={set:function(A){this.fsr$addEvents(A)}};FSR.Native.fsr$implement([FSR.Element,FSR.Window,FSR.Document],{fsr$addEvent:function(E,G){var H=this.fsr$retrieve("events",{});
H[E]=H[E]||{keys:[],values:[]};if(FSR.Array.contains(H[E].keys,G)){return this}H[E].keys.push(G);
var F=E,A=FSR.Element.Events.get(E),C=G,I=this;if(A){if(A.onAdd){A.onAdd.call(this,G)}if(A.condition){C=function(J){if(A.condition.call(this,J)){return G.call(this,J)
}return false}}F=A.base||F}var D=function(){return G.call(I)};var B=FSR.Element.NativeEvents[F]||0;
if(B){if(B==2){D=function(J){J=new FSR.Event(J,I.fsr$getWindow());if(C.call(I,J)===false){J.stop()
}}}if(F!="unload"){this.fsr$addListener(F,D)}}H[E].values.push(D);return this},fsr$removeEvent:function(D,C){var B=this.fsr$retrieve("events");
if(!B||!B[D]){return this}var G=FSR.Array.indexOf(B[D].keys,C);if(G==-1){return this}var A=B[D].keys.splice(G,1)[0];
var F=B[D].values.splice(G,1)[0];var E=FSR.Element.Events.get(D);if(E){if(E.onRemove){E.onRemove.call(this,C)
}D=E.base||D}return(FSR.Element.NativeEvents[D])?this.fsr$removeListener(D,F):this},fsr$addEvents:function(A){for(var B in A){if(A.hasOwnProperty(B)){this.fsr$addEvent(B,A[B])
}}return this},fsr$removeEvents:function(B){var A=this.fsr$retrieve("events");if(!A){return this}if(!B){for(var C in A){if(A.hasOwnProperty(C)){this.fsr$removeEvents(C)
}}A=null}else{if(A[B]){while(A[B].keys[0]){this.fsr$removeEvent(B,A[B].keys[0])}A[B]=null}}return this
},fsr$fireEvent:function(D,B,A){var C=this.fsr$retrieve("events");if(!C||!C[D]){return this}FSR.Array.each(C[D].keys,function(E){E.fsr$create({bind:this,delay:A,"arguments":B})()
},this);return this}});FSR.Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:1,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
(function(){FSR.$check=function(A){var B=A.relatedTarget;if(B==undefined){return true}if(B===false){return false
}return(FSR.$type(this)!="document"&&B!=this&&B.prefix!="xul"&&!this.fsr$hasChild(B))};FSR.Element.Events=new FSR.Hash({mouseenter:{base:"mouseover",condition:FSR.$check},mouseleave:{base:"mouseout",condition:FSR.$check},mousewheel:{base:(FSR.Browser.Engine.gecko)?"DOMMouseScroll":"mousewheel"}})
})();FSR.Element.fsr$implement({fsr$hasChild:function(A){A=$fsr(A,true);return(!!A&&FSR.Array.contains(FSR.$A(this.getElementsByTagName(A.tagName)),A))
}});(function(){FSR.Native.fsr$implement([FSR.Document,FSR.Window],{fsr$getSize:function(){var C=this.fsr$getWindow();
if(FSR.Browser.Engine.presto||FSR.Browser.Engine.webkit){return{x:C.innerWidth,y:C.innerHeight}}var B=A(this);
return{x:B.clientWidth,y:B.clientHeight}},fsr$getScroll:function(){var C=this.fsr$getWindow();var B=A(this);
return{x:C.pageXOffset||B.scrollLeft,y:C.pageYOffset||B.scrollTop}},fsr$getScrollSize:function(){var C=A(this);
var B=this.fsr$getSize();return{x:Math.max(C.scrollWidth,B.x),y:Math.max(C.scrollHeight,B.y)}}});
function A(B){var C=B.fsr$getDocument();return(!C.compatMode||C.compatMode=="CSS1Compat")?C.getElementsByTagName("html")[0]:C.body
}})();FSR.Element.Events.domready={onAdd:function(A){if(FSR.Browser.loaded){A.call(this)}}};(function(){var A=function(){if(FSR.Browser.loaded){return 
}FSR.Browser.loaded=true;window.fsr$fireEvent("domready");document.fsr$fireEvent("domready")};switch(FSR.Browser.Engine.name){case"webkit":(function(){(FSR.Array.contains(["loaded","complete"],document.readyState))?A():arguments.callee.fsr$delay(50)
})();break;case"trident":var B=document.createElement("div");(function(){(FSR.$try(function(){B.doScroll("left");
return $fsr(B).fsr$inject(document.body).fsr$set("html","temp").fsr$dispose()}))?A():arguments.callee.fsr$delay(50)
})();break;default:window.fsr$addEvent("load",A);document.fsr$addEvent("DOMContentLoaded",A)}})();
FSR.JSON=new FSR.Hash({encode:function(B){switch(FSR.$type(B)){case"string":return'"'+B.replace(/[\x00-\x1f\\"\\;]/g,FSR.JSON.$replaceChars)+'"';
case"array":return"["+String(FSR.Array.map(B,FSR.JSON.encode).fsr$filter(FSR.$defined))+"]";case"object":case"hash":var A=[];
FSR.Hash.each(B,function(E,D){var C=FSR.JSON.encode(E);if(C){A.push(FSR.JSON.encode(D)+":"+C)}});
return"{"+A+"}";case"number":case"boolean":return String(B);case false:return"null"}return null},$specialChars:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},$replaceChars:function(A){return FSR.JSON.$specialChars[A]||"\\u00"+Math.floor(A.charCodeAt()/16).toString(16)+(A.charCodeAt()%16).toString(16)
},decode:function(string,secure){if(FSR.$type(string)!="string"||!string.length){return null}if(secure&&!(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(string.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""))){return null
}return eval("("+string+")")}});FSR.Native.fsr$implement([FSR.Hash,Number],{fsr$toJSON:function(){return FSR.JSON.encode(this)
}});FSR.Cookie=new FSR.Class({Implements:FSR.Options,options:{path:false,domain:false,duration:false,secure:false,document:document},initialize:function(B,A){this.key=B;
this.setOptions(A)},write:function(B){if(this.options.domain){B+="; domain="+this.options.domain}if(this.options.path){B+="; path="+this.options.path
}if(this.options.duration){var A=new Date();A.setTime(A.getTime()+this.options.duration*24*60*60*1000);
B+="; expires="+A.toGMTString()}if(this.options.secure){B+="; secure"}this.options.document.cookie=this.key+"="+B;
return this},read:function(){var A=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.fsr$escapeRegExp()+"=([^;]*)");
return(A)?A[1]:null},dispose:function(){new FSR.Cookie(this.key,FSR.$merge(this.options,{duration:-1})).write("");
return this}});FSR.Cookie.write=function(B,C,A){return new FSR.Cookie(B,A).write(C)};FSR.Cookie.read=function(A){return new FSR.Cookie(A).read()
};FSR.Cookie.dispose=function(B,A){return new FSR.Cookie(B,A).dispose()};FSR.Hash.Cookie=new FSR.Class({Extends:FSR.Cookie,options:{autoSave:true},initialize:function(B,A){this.parent(B,A);
this.load()},save:function(){var A=FSR.JSON.encode(this.hash);if(!A||A.length>4096){return false}if(A=="{}"){this.dispose()
}else{this.write(A)}return true},load:function(){this.hash=new FSR.Hash(FSR.JSON.decode(this.read(),true));
return this}});FSR.Hash.Cookie.fsr$implement({get:function(A){return this.hash.get(A)},set:function(A,B){this.hash.set(A,B);
this.save();return this},erase:function(A){this.hash.erase(A);this.save();return this},empty:function(){this.hash.empty();
this.save();return this}});FSR.Asset=new FSR.Hash({src:function(A){var B=A;if(A.substring(0,2)=="//"){B=document.location.protocol+B
}return B},javascript:function(F,D){D=FSR.$extend({onload:FSR.$empty,document:document,check:FSR.$lambda(true)},D);
var B=new FSR.Element("script",{src:FSR.Asset.src(F),type:"text/javascript"});var E=D.onload.fsr$bind(B),A=D.check,G=D.document;
delete D.onload;delete D.check;delete D.document;B.fsr$addEvents({load:E,readystatechange:function(){if(FSR.Browser.Engine.trident&&FSR.Array.contains(["loaded","complete"],this.readyState)){E()
}}}).fsr$setProperties(D);if(FSR.Browser.Engine.webkit419){var C=(function(){if(!FSR.$try(A)){return 
}FSR.$clear(C);E()}).fsr$periodical(50)}return B.fsr$inject(document.getElementsByTagName("head")[0])
},image:function(C,B){B=FSR.$merge({onload:FSR.$empty,onabort:FSR.$empty,onerror:FSR.$empty},B);var D=new Image();
var A=$fsr(D)||new FSR.Element("img");FSR.Array.each(["load","abort","error"],function(E){var F="on"+E;
var G=B[F];delete B[F];D[F]=function(){if(!D){return }if(!A.parentNode){A.width=D.width;A.height=D.height
}D=D.onload=D.onabort=D.onerror=null;G.fsr$delay(1,A,A);A.fsr$fireEvent(E,A,1)}});D.src=FSR.Asset.src(C);
if(A.src!=D.src){A.src=D.src}if(D&&D.complete){D.onload.fsr$delay(1)}return A.fsr$setProperties(B)
},css:function(B,A){return new FSR.Element("link",FSR.$merge({rel:"stylesheet",media:"screen",type:"text/css",href:FSR.Asset.src(B)},A)).fsr$inject(document.getElementsByTagName("head")[0])
}});FSR.Browser.set("Popup",new FSR.Class({Implements:[FSR.Options,FSR.Events],options:{width:500,height:300,x:50,y:50,toolbar:0,location:0,directories:0,status:0,scrollbars:"auto",resizable:1,name:"popup",blur:false,menubar:1},initialize:function(B,A){this.url=B||false;
this.setOptions(A);if(this.url){this.openWin()}},openWin:function(B){B=B||this.url;var A="toolbar="+this.options.toolbar+",location="+this.options.location+",directories="+this.options.directories+",status="+this.options.status+",scrollbars="+this.options.scrollbars+",resizable="+this.options.resizable+",width="+this.options.width+",height="+this.options.height+",top="+this.options.y+",left="+this.options.x+",menubar="+this.options.menubar;
this.window=window.open(B,this.options.name,A);if(!this.window){this.window=window.open("",this.options.name,A);
this.window.location.href=B}if(!this.options.blur){this.focus.fsr$delay(100,this)}else{this.window.blur()
}return this},focus:function(){if(this.window){this.window.focus()}else{if(this.focusTries<10){this.focus.delay(100,this)
}else{this.blocked=true;this.fsr$fireEvent("onBlock")}}return this},focusTries:0,blocked:null,close:function(){this.window.close();
return this}}));FSR.RemoteEvent=new FSR.Class({Implements:[FSR.Events,FSR.Options],options:{host:"",path:"",url:""},initialize:function(B,A){this.setOptions(A);
this.event=B},onStateChange:function(A){if(!this.running){return }this.running=false;this.status=0;
FSR.$try(function(){this.status=A}.fsr$bind(this));if(this.isSuccess()){this.success()}else{this.failure()
}},isSuccess:function(){return(this.status==1)},success:function(){this.onSuccess()},onSuccess:function(){this.fsr$fireEvent("success")
},failure:function(){this.onFailure()},onFailure:function(){this.fsr$fireEvent("failure")},send:function(B){this.running=true;
var A=this;var D=FSR.Hash.toQueryString(B);var C=document.location.protocol+"//"+this.options.host+this.options.path+this.options.url+"?event="+this.event+"&"+D+"&uid="+FSR.$time();
new FSR.Asset.image(C,{onload:function(E){A.onStateChange(1)},onerror:function(){A.onStateChange(0)
},onabort:function(){A.onStateChange(0)}});return this}});FSR.CPPS=new FSR.Hash({set:function(B,C){var A=FSR.c().get("cp")||{};
A[B]=C;FSR.c().set("cp",A)},get:function(B){var A=FSR.c().get("cp")||{};return A[B]},erase:function(B){var A=FSR.c().get("cp")||{};
delete A[B];FSR.c().set("cp",A)},append:function(B,C){var A=FSR.c().get("cp")||{};A[B]=A[B]?A[B]+","+C:C;
FSR.c().set("cp",A)},toQueryString:function(){var I=FSR.c();var G=FSR.surveydefs[I.get("sd")];var D=I.get("browser");
var A=FSR.Cookie.read("UserID",{path:"/"});var B={browser:FSR.Browser.Type.name+" "+FSR.Browser.Type.version,os:FSR.Browser.Platform.os,pv:I.get("pv"),url:I.get("c")||"",ref_url:I.get("ru")||"",locale:I.get("l")||"",site:FSR.site.name||"",section:G.section||"",referrer:I.get("r")||"",terms:I.get("st")||"",sessionid:I.get("rid")||"",replay_id:I.get("mid")||"",flash:FSR.Browser.Plugins.Flash.version,CustomerID:A};
var E=I.get("cp")||{};var C=new FSR.Hash(E);var F=B||{};for(k in F){C.set(k,F[k])}var H=C.toQueryString("cpp");
return H}});FSR.Service=new FSR.Class({Implements:[FSR.Events,FSR.Options],options:{},initialize:function(A){this.setOptions(A)
},onStateChange:function(A){if(!this.running){return }this.running=false;this.status=0;FSR.$try(function(){this.status=A
}.fsr$bind(this));if(this.status==1){this.success()}else{if(this.status==0){this.failure()}else{if(this.status==-1){this.error()
}}}},success:function(){this.onSuccess()},onSuccess:function(){this.fsr$fireEvent("complete").fsr$fireEvent("success")
},failure:function(){this.onFailure()},onFailure:function(){this.fsr$fireEvent("complete").fsr$fireEvent("failure")
},error:function(){this.onError()},onError:function(){this.fsr$fireEvent("complete").fsr$fireEvent("error")
},ping:function(){this.running=true;var B=this;var D=this.options.params||{};D.protocol=document.location.protocol;
D.uid=FSR.$time();var A=FSR.Hash.toQueryString(D);var C=document.location.protocol+"//"+this.options.host+this.options.path+this.options.url+"?"+A;
new FSR.Asset.image(C,{onload:function(E){if(E.width==B.options.success){B.onStateChange(1)}else{B.onStateChange(0)
}},onerror:function(){B.onStateChange(-1)},onabort:function(){B.onStateChange(0)}});return this},cancel:function(){if(!this.running){return this
}this.running=false;this.fsr$fireEvent("cancel");return this}});FSR.RR=new FSR.Hash({hasRR:function(){if(typeof robotreplay!="undefined"){return true
}return false},setOKTransmit:function(){if(this.hasRR()){var A=robotreplay.Session.rr_group_session_id;
robotreplay.Log.setOKTransmit();FSR.c().set("mid",A)}},recordEvent:function(A,B){if(this.hasRR()){robotreplay.Log.push(A,B)
}},cancelRecord:function(){if(this.hasRR()){robotreplay.Log.cancelRecord()}},getPosition:function(A){if(this.hasRR()){return robotreplay.Dom.getAbsoluteCoords(document.getElementById(A))
}else{return{position:false}}}});FSR.services={survey:{host:"survey.foreseeresults.com",path:"/survey",url:"/display"},check:{host:"controller2.foreseeresults.com",path:"/fsrSurvey",url:"/OTCImg",success:3},event:{host:"events.foreseeresults.com",path:"/rec",url:"/process"},domain:{host:"survey.foreseeresults.com",path:"/survey",url:"/FSRImg",success:3}};
FSR.UnsupportedBrowsers={Explorer:5.5,Safari:2,Firefox:1.4};FSR.SupportedPlatforms={win32:true,mac:true,linux:true,iphone:false,blackberry:false,wince:false,other:false};
FSR.$P=function(){return FSR.properties};FSR.c=function(){return new FSR.Hash.Cookie("fsr."+FSR.site.cookie,{path:"/",domain:FSR.site.domain||false})
};FSR.log=function(C,B){if(!FSR.$P().events.enabled){return }var D=FSR.c();var A=FSR.surveydefs[D.get("sd")];
new FSR.RemoteEvent("logit",{host:FSR.services.event.host,path:FSR.services.event.path,url:FSR.services.event.url}).send({cid:FSR.id,rid:D.get("rid")||"",cat:A.name,sec:A.section||"",type:D.get("q")||"",site:D.get("site")||"",lang:D.get("l")||FSR.locale||"",msg:C,param:B,tmz:new Date().getTimezoneOffset()*60000})
};FSR.popNow=function(A){FSR.pop(A,"now")};FSR.popLater=function(A){FSR.pop(A,"later")};FSR.popImmediate=function(){FSR.pop(100,"now")
};FSR.popFeedback=function(){FSR.controller.popFeedback()};FSR.pop=function(D,A){var C=D;if(!C){C=FSR.controller.sd.criteria.sp
}var B=A;if(!B){B=FSR.controller.sd.pop.when}var E=FSR.controller.sd.sv;if(!(E<=C)){return }if(B=="now"){if(!(FSR.controller.surveyShown()&&C<100)){FSR.controller.popImmediate()
}}else{if(B=="later"){if(!FSR.controller.trackerRunning()){FSR.controller.popTracker()}}}};FSR.close=function(){FSR.controller.cancelTracker()
};FSR.run=function(){FSR.controller.run(false)};var ForeSee={CPPS:{fsr$set:function(A,B){FSR.CPPS.set(A,B)
}}};FSR.generateid=function(){var A="";A=((new Date())-0)+"_"+Math.round(Math.random()*1000000);return A
};FSR.accepted=function(A){FSR.language(A);FSR.controller.accepted();FSR.idhtml.hide()};FSR.declined=function(A){FSR.language(A);
FSR.controller.declined();FSR.idhtml.hide()};FSR.qualified=function(){FSR.controller.qualified();
FSR.idhtml.hide()};FSR.language=function(A){if(!A){return }FSR.locale=A;FSR.c().set("l",A)};FSR.qualify=function(A){FSR.canceled=false;
if(A){FSR.qid=A;FSR.c().set("q",A)}};FSR.cancel=function(){FSR.canceled=true};FSR.canceled=false;
FSR.SurveyController=new FSR.Class({Implements:FSR.Options,options:{},initialize:function(A){this.setOptions(A);
FSR.controller=this},load:function(){if(!FSR.enabled){return }if(window!=window.top){return }FSR.pool=true;
if(FSR.Cookie.read("fsr.o",{path:"/",domain:FSR.site.domain||false})){FSR.pool=false;this.cancelAlive();
fsr$dbug.log("Exit: Not in pool.");return }var A=this;new FSR.Asset.javascript((FSR.js_files||FSR.files)+"foresee-surveydef.js",{id:"foresee-surveydef",onload:function(){fsr$dbug.log("Survey Definitions Loaded.");
A.def_loaded=true;A.run(true)}})},run:function(B){if(!this.def_loaded){return }if(B){if(!this.init()){FSR.RR.cancelRecord();
return }}if(!this.setup()){return }this.cpp();var A;this.sd=this.pd;this.sdi=this.pdi;A=this.process();
if(A){return }this.sd=this.cd;this.sdi=this.cdi;A=this.process()},process:function(){if(!this.sd){return false
}var B=this.sd;if(B.type=="current"){FSR.c().set("sd",B.idx)}if(this.processTracker()){var A=this;
(function(){A.launch("tracker")}).fsr$delay(1);return true}if(this.processInvite()){var A=this;A.processAlt();
(function(){A.launch("invite")}).fsr$delay(1);return true}if(B.type=="current"){if(this.inviteAccepted()&&!this.surveyShown()){this.setupLinks("pop",this.popLink);
this.setupLinks("cancel",this.cancelTracker)}if(!this.inviteAccepted()){this.setupLinks("attach",this.popAttach)
}if(this.trackerRunning()){this.setupLinks("pause",this.pause)}}return false},processTracker:function(){if(!this.shouldTrack()){return false
}if(!this.trackerRunning()){return false}return true},shouldTrack:function(){var A=this.sd;if(!A.ls){return false
}if(A.type=="previous"){if(!(A.pop.when=="later")||!(A.pop.after=="leaving-section")){return false
}}else{if(A.type=="current"){if(!(A.pop.when=="now")){return false}}}return true},trackerRunning:function(){if(FSR.$defined(FSR.c().get("t"))){return true
}return false},processInvite:function(){if(this.inviteShown()){return false}if(!this.shouldInvite()){return false
}return true},shouldInvite:function(){var D=this.sd;if(D.invite===false){return false}if(D.exclude){var C=false;
if(!C){C=this.checkExclude(D.exclude.local||[],document.location.href)}if(!C){C=this.checkExclude(D.exclude.referer||[],document.referrer)
}if(C){var E=FSR.c();var B=E.get("lc");D.ec=B["d"+D.idx].e=(B["d"+D.idx].e||0)+1;E.set("lc",B);return false
}}var A=(D.type=="previous")?"onexit":"onentry";if(D.invite&&D.invite.when!=A){return false}if(!D.ls){return false
}if(!(D.sv>0&&D.sv<=D.criteria.sp)){return false}return true},processAlt:function(){var G=this.sd;
if(G.alt){var F;var C=FSR.$random(0,100);var E=0;var B=G.alt;for(var D=0,A=B.length;D<A;D++){E+=B[D].sp;
if(C<=E){if(B[D].url){G.pop.what="url";G.pop.url=B[D].url}else{if(B[D].script){G.pop.what="script";
G.pop.script=B[D].script}}delete G.invite;break}}}},inviteShown:function(){if(FSR.$defined(FSR.c().get("i"))){return true
}return false},inviteAccepted:function(){if(FSR.c().get("i")==1){return true}return false},surveyShown:function(){if(FSR.$defined(FSR.c().get("s"))){return true
}return false},launch:function(A){if(A=="invite"){this.attemptInvite()}else{if(A=="tracker"){this.popImmediate()
}}},checkExclude:function(C,B){for(var A=0,D=C.length;A<D;A++){if(B.match(C[A])){return true}}return false
},attemptInvite:function(){var A=this;var B="invite";if(FSR.$P().mode=="hybrid"){B="checkDomain"}new FSR.Service({host:FSR.services.check.host,path:FSR.services.check.path,url:FSR.services.check.url,success:FSR.services.check.success,onSuccess:function(){A[B]()
},onFailure:function(){},onError:function(){A[B]()}}).ping()},checkDomain:function(){var A=this;var B="invite";
new FSR.Service({host:FSR.services.domain.host,path:FSR.services.domain.path,url:FSR.services.domain.url,params:{"do":0},success:FSR.services.check.success,onSuccess:function(){A[B]()
},onFailure:function(){}}).ping()},setupLinks:function(F,E){if(!this.sd.links){return }var G=0;var C=this.sd.links[F]||[];
for(var D=0,B=C.length;D<B;D++){var A=this.link(C[D].tag,C[D].attribute,C[D].patterns||[],C[D].qualifier,E,{sp:C[D].sp,when:C[D].when});
G=G+A}fsr$dbug.log("linked ("+F+"): "+G)},link:function(A,F,E,D,C,G){var B=this;var H=0;FSR.Array.each($$fsr(A),function(K){for(var J=0,I=E.length;
J<I;J++){if(K[F]&&(K[F]+"").match(E[J])){H++;K.fsr$addEvents({click:function(){if(D){FSR.qualify(D)
}C.call(B,G)}});break}}});return H},init:function(){fsr$dbug.log("======INIT=======");this.ralive=true;
var F=FSR.Cookie.read("fsr.a",{path:"/",domain:FSR.site.domain||false});if(!this.trackerRunning()){this.cancelAlive()
}if(!F){fsr$dbug.log("Exit: Cookies are not enabled.");return false}var D=FSR.Browser;fsr$dbug.log("browser: "+D.Type.name+" "+D.Type.version+" on "+D.Platform.os);
if(!FSR.SupportedPlatforms[D.Platform.name]){fsr$dbug.log("Exit: Platform not surpported.");return false
}if(FSR.UnsupportedBrowsers[D.Type.name]){if(D.Type.version<=FSR.UnsupportedBrowsers[D.Type.name]){fsr$dbug.log("Exit: Browser not surpported.");
return false}}if(this.validateIP()==0){fsr$dbug.log("Exit: Invalid IP Address.");return false}var G=FSR.c();
if(!G.get("v")){var J=FSR.$random(0,100);if(!(J<=this.pool())){FSR.pool=false;FSR.Cookie.write("fsr.o",Math.round(J),{path:"/",domain:FSR.site.domain||false});
fsr$dbug.log("Exit: Not in pool.");return false}var M;if(M=FSR.Cookie.read("fsr.r",{path:"/",domain:FSR.site.domain||false})){fsr$dbug.log("Exit: Persistent Cookie Found: "+M);
return false}G.set("v",1);var L=this;this.dhtml_win=1;new FSR.Asset.javascript((FSR.js_files||FSR.files)+"foresee-dhtml-popup.js",{id:"foresee-dhtml-popup",onload:function(){fsr$dbug.log("DHTML popup script loaded (1).");
L.dhtml_win=2}});this.dhtml_css=1;new FSR.Asset.css((FSR.image_files||FSR.files)+FSR.$P().invite.css);
if(FSR.$P().qualifier.css&&(FSR.$P().qualifier.css!=FSR.$P().invite.css)){new FSR.Asset.css((FSR.image_files||FSR.files)+FSR.$P().qualifier.css)
}this.dhtml_css=2;if(FSR.$P().events.enabled&&FSR.$P().events.id){G.set("rid",FSR.generateid())}if(document.referrer&&document.referrer!=""){if(FSR.$P().meta.ref_url){G.set("ru",document.referrer)
}var C=document.referrer.match(/^(\w+\:\/\/)?(((\w+-?\w+\.?))+)\//);var I="";if(C&&C.length>=3){I=C[2]
}if(FSR.$P().meta.referer){G.set("r",I)}fsr$dbug.log("referrer: "+I);var B=this.decodeReferrer(document.referrer)||"";
if(FSR.$P().meta.terms){G.set("st",B)}fsr$dbug.log("search terms: "+B)}}var K=G.get("pv")?G.get("pv")+1:1;
G.set("pv",K);fsr$dbug.log("pv: "+K);var H=FSR.$P().tracker.timeout;if(FSR.$P().tracker.adjust&&FSR.$defined(G.get("f"))){var E=G.get("to");
var A=((FSR.$time()-G.get("f"))/1000);fsr$dbug.log("ptimeout: "+E);fsr$dbug.log("loadtime: "+A);H=(0.9*E)+(0.1*(A*2));
H=Math.round(H*10)/10;if(H<2){H=2}else{if(H>5){H=5}}}if(FSR.$P().tracker.adjust){G.set("to",H)}fsr$dbug.log("timeout: "+H);
fsr$dbug.log("invite: "+(FSR.$pick(G.get("i"),"")));fsr$dbug.log("tracker: "+(FSR.$pick(G.get("t")||"")));
return true},setup:function(){fsr$dbug.log("======SETUP=======");var K=FSR.c();FSR.sv=FSR.$random(0,100);
this.sp=new FSR.Hash.Cookie("fsr.sp",{path:"/",domain:FSR.site.domain||false});var L,F,A,G,N;if(K.get("sd")){N=K.get("sd")
}FSR.cs=document.location.href;if(!FSR.$P().meta.url_params){FSR.cs=FSR.cs.replace(/(.*?)(\?.*)/g,"$1")
}if(FSR.$P().meta.url){K.set("c",FSR.cs)}this.language();fsr$dbug.log("language: "+FSR.locale||"");
fsr$dbug.log("site: "+FSR.site.name||"");var E=K.get("lc")||{};L=this.match(document.location.href);
if(L.length!=0){fsr$dbug.log("===CURRENT====");for(var I=0,H=L.length;I<H;I++){var J=FSR.surveydefs[L[I]];
J.idx=L[I];var C="d"+J.idx;this.criteria(J.criteria);if(!E[C]){E[C]={v:0,s:false}}J.lc=E[C].v=E[C].v+1;
J.ec=E[C].e||0;J.type="current";this.configLoyalty(J);var B=this.loyaltyDef(J);var M=this.checkLoyalty(B,J.lc,J.ec);
if(M>-1){J.ls=E[C].s=true;if(FSR.$type(J.criteria.lf)=="array"){J.criteria.lf=J.criteria.lf[M];J.criteria.sp=J.criteria.sp[M];
J.pop.when=J.pop.when[M];if(FSR.$type(J.invite.content)=="array"){J.invite.content=J.invite.content[M]
}}if(J.pin){var D=K.get("pn")||{};D[C]=1;K.set("pn",D)}}else{J.ls=E[C].s=false;if(FSR.$type(J.criteria.lf)=="array"){J.criteria.lf=J.criteria.lf[0];
J.criteria.sp=J.criteria.sp[0];J.pop.when=J.pop.when[0];if(FSR.$type(J.invite.content)=="array"){J.invite.content=J.invite.content[0]
}}}this.configure(J);this.cd=J;F=J.idx;break}K.set("lc",E)}if(FSR.$defined(N)&&(N!=F)){fsr$dbug.log("===PREVIOUS===");
var J=FSR.surveydefs[N];J.idx=N;this.criteria(J);J.lc=E[C].v||0;J.ls=E[C].s||false;J.type="previous";
this.configLoyalty(J);this.configure(J);this.pd=J}if(!this.cd&&!this.pd){return false}return true
},configLoyalty:function(A){if(FSR.$type(A.criteria.lf)=="number"){A.criteria.lf={v:A.criteria.lf,o:">="}
}},loyaltyDef:function(B){var A=B.criteria.lf;if(FSR.$type(B.criteria.lf)=="object"){A=[B.criteria.lf]
}return A},checkLoyalty:function(E,F,C){var B=-1;for(var D=0,A=E.length;D<A;D++){if(E[D].o==">="){if(F>=E[D].v){B=D
}}else{if(E[D].o=="="){if((F-C)==E[D].v){B=D}}else{if(E[D].o==">"){if(F>E[D].v){B=D}}}}}return B},validateIP:function(D){var A=1;
var C=FSR.$P().ipexclude;if(!C){return A}var D;if(C.src=="cookie"){if(C.type&&C.type=="client"){D=FSR.Cookie.read(C.name,{path:"/",domain:FSR.site.domain||false})
}else{D=FSR.c().get("ip")}}else{if(C.src=="variable"){if(C.type&&C.type=="client"){D=window[C.name]
}else{D=FSR[C.name]}}}D=D||"";for(var B=0;B<C.ips.length;B++){if(D.match(C.ips[B])){A=0;break}}return A
},configure:function(D){var F=FSR.c();fsr$dbug.log("sid: "+D.name);fsr$dbug.log("lc: "+D.lc);fsr$dbug.log("lf: "+D.criteria.lf.v+" ("+D.criteria.lf.o+") ");
D.sv=FSR.sv;fsr$dbug.log("sv: "+D.sv);if(FSR.$type(D.criteria.sp)=="array"){D.criteria.sp=D.criteria.sp[(new Date()).getDay()]
}var B=(!D.section)?D.name:D.name+"-"+D.section;var A=(!FSR.locale)?B:B+"-"+FSR.locale;D.criteria.sp=this.sp.get(B)||this.sp.get(A)||D.criteria.sp;
fsr$dbug.log("sp: "+D.criteria.sp);if(D.invite){D.invite=FSR.$merge(FSR.$P().invite,D.invite)}D.tracker=FSR.$merge(FSR.$P().tracker,D.tracker);
D.survey=FSR.$merge(FSR.$P().survey,D.survey);D.qualifier=FSR.$merge(FSR.$P().qualifier,D.qualifier);
D.cancel=FSR.$merge(FSR.$P().cancel,D.cancel);D.pop=FSR.$merge(FSR.$P().pop,D.pop);D.repeatdays=FSR.$pick(FSR.$P().repeatdays,D.repeatdays);
if(FSR.$type(D.repeatdays)!="array"){D.repeatdays=[D.repeatdays,D.repeatdays]}var C=FSR.Array.extend([],FSR.$P().exclude.local);
if(D.exclude&&D.exclude.local){D.exclude.local=FSR.Array.extend(C,D.exclude.local)}else{if(D.exclude){D.exclude.local=C
}else{D.exclude={local:C}}}var E=FSR.Array.extend([],FSR.$P().exclude.referer);if(D.exclude&&D.exclude.referer){D.exclude.referer=FSR.Array.extend(E,D.exclude.referer)
}else{if(D.exclude){D.exclude.referer=E}else{D.exclude={referer:E}}}},unload:function(){if(!FSR.enabled){return 
}if(!this.runload&&this.ralive){this.runload=true;this.uninit()}return },uninit:function(){if(!FSR.pool){return 
}var A=FSR.c();if(FSR.$P().previous){A.set("p",FSR.cs)}if(FSR.$P().tracker.adjust){A.set("f",FSR.$time())
}},match:function(source){if(!source){return }var m=[];var d=FSR.surveydefs;var pin=FSR.c().get("pn")||{};
for(var i=0,p,l=d.length,k=0;i<l;i++){if(d[i].site&&d[i].site!=FSR.site.name){continue}var pk=k;p=d[i].include.urls||[];
for(var j=0,n=p.length;j<n;j++){if(source.match(p[j])){m[k++]=i;break}}if(k!=pk){break}p=d[i].include.cookies||[];
for(var j=0,n=p.length;j<n;j++){var value;if(value=FSR.Cookie.read(p[j].name,{path:p[j].path||false,domain:p[j].domain||false})){if(value.match(p[j].value||".")){m[k++]=i;
break}}}if(k!=pk){break}p=d[i].include.variables||[];for(var j=0,n=p.length;j<n;j++){var name=p[j].name;
var value=p[j].value;if(FSR.$type(name)!="array"){name=[name];value=[value]}var v,z=true;for(var x=0,y=name.length;
x<y;x++){try{v=eval(name[x])}catch(err){v=""}if(v||v===""){if(!v.match(value[x])){z=false;break}}}if(z){m[k++]=i;
break}}if(k!=pk){break}if(pin[d[i].name]){m[k++]=i}if(k!=pk){break}}return m},pool:function(){var C=new Date().getHours();
var B=FSR.$P().pool||100;if(FSR.$type(B)!="array"){B=[{h:0,p:B}]}var D=100;for(var A=0,E=B.length;
A<E;A++){if(C>=B[A].h){D=B[A].p}}return D},invite:function(){var B=this.sd;FSR.invite=0;if(FSR.locale){FSR.c().set("l",FSR.locale)
}var A=this;if(B.invite){(function(){FSR.log(100,FSR.cs);A.prepareDHTML("invite","accepted","declined","closed")
}).fsr$delay((B.invite.delay||0)*1000);if(B.invite.timeout){(function(){FSR.idhtml.hide()}).fsr$delay(B.invite.timeout*1000)
}}else{(function(){A.accepted();A.closed()}).fsr$delay(0)}},prepareDHTML:function(E,F,C,B){var A=this;
if(!FSR.$defined(this.dhtml_css)){this.dhtml_css=1;new FSR.Asset.css((FSR.image_files||FSR.files)+this.sd[E].css);
this.dhtml_css=2}if(!FSR.$defined(this.dhtml_win)){this.dhtml_win=1;new FSR.Asset.javascript((FSR.js_files||FSR.files)+"foresee-dhtml-popup.js",{id:"foresee-dhtml-popup",onload:function(){fsr$dbug.log("DHTML popup script loaded (2).");
A.dhtml_win=2;A.showDHTML(E,F,C,B)}})}else{if(this.dhtml_win==1){var D=(function(){if(A.dhtml_win==1){return 
}FSR.$clear(D);A.showDHTML(E,F,C,B)}).fsr$periodical(50)}else{if(this.dhtml_win==2){(function(){A.showDHTML(E,F,C,B)
}).fsr$delay(1)}}}},showDHTML:function(G,C,I,E){var J=this;var H=this.sd[G];this.page(H);var F=[];
if(H.buttons){var A=0;if(H.buttons.accept){F[A]={properties:{id:"accept"},style:"fsr_button fsr_accept",text:H.buttons.accept,onClick:function(){J[C]()
},onMouseover:function(){this.className="fsr_closeSticky fsr_button fsr_mouseover_accept"},onMouseout:function(){this.className="fsr_closeSticky fsr_button fsr_accept"
}};A++}if(H.buttons.decline){F[A]={properties:{id:"decline"},style:"fsr_button fsr_decline",text:H.buttons.decline,onClick:function(){J[I]()
},onMouseover:function(){this.className="fsr_closeSticky fsr_button fsr_mouseover_decline"},onMouseout:function(){this.className="fsr_closeSticky fsr_button fsr_decline"
}};A++}}var L={position:{x:H.x,y:H.y},wrapWithUi:true,uiOptions:{width:H.width+"px",baseHref:(FSR.image_files||FSR.files),buttons:F},modalOptions:{modalStyle:{"background-color":H.bgcolor,opacity:H.opacity},hideOnClick:H.hideOnClick},requestOptions:{evalScripts:true}};
FSR[G]=0;var K;if(H.content){L.content=H.content;K=new FSR.StickyWinModal(L)}else{L.url=(FSR.html_files||FSR.files)+(H.url.dhtml||H.url);
K=new FSR.StickyWinModal.Ajax(L)}if(E){K.fsr$addEvent("onClose",function(){J[E]()})}if(FSR.Browser.Type.name!="Explorer"){var B=this.sd.invite.hide;
for(var A=0,D=B.length;A<D;A++){if($fsr(B[A])){$fsr(B[A]).fsr$setStyle("visibility","hidden")}}}if(H.content){K.show()
}else{K.update()}FSR.idhtml=K},accepted:function(){FSR.invite=1;FSR.log(101);FSR.c().set("i",FSR.invite);
this.setRepeatdays(0);if(FSR.$P().mode=="hybrid"){new FSR.Service({host:FSR.services.domain.host,path:FSR.services.domain.path,url:FSR.services.domain.url,params:{"do":1,rw:this.sd.repeatdays[0]*24*60}}).ping()
}FSR.RR.setOKTransmit();var A=this;A.processAccept()},declined:function(){FSR.invite=-1;FSR.log(102);
FSR.c().set("i",FSR.invite);this.setRepeatdays(1);FSR.RR.cancelRecord()},closed:function(){if(FSR.Browser.Type.name!="Explorer"){var C=this.sd.invite.hide;
for(var B=0,A=C.length;B<A;B++){if($fsr(C[B])){$fsr(C[B]).fsr$setStyle("visibility","visible")}}}},qualified:function(){FSR.qualifier=1;
FSR.log(301);var A=this;A.processQualifier()},processAccept:function(){var A=this.sd;if(A.pop.when=="later"){if(A.pop.tracker){this.popTracker()
}this.setupLinks("pop",this.popLink);this.setupLinks("cancel",this.cancelTracker);this.setupLinks("pause",this.pause)
}else{if(A.pop.when=="now"){FSR.c().set("s",1);if(A.pop.what=="survey"){this.popSurvey()}else{if(A.pop.what=="qualifier"){this.popQualifier()
}else{if(A.pop.what=="url"){this.popUrl()}else{if(A.pop.what=="script"){this.popScript()}else{if(A.pop.what=="movie"){}}}}}}else{if(A.pop.when=="both"){this.popTracker();
this.popSurvey()}}}},processQualifier:function(){if(!FSR.canceled){this.popSurvey()}else{this.popCancel()
}},popImmediate:function(){var B=this.sd;var A=this;var C=FSR.c();if(this.trackerRunning()){if(FSR.Browser.Type.name!="Firefox"||!B.qualifier.content){C.set("fo",1)
}else{this.cancelTracker();(function(){FSR.log(300,FSR.cs);A.prepareDHTML("qualifier","qualified")
}).fsr$delay((B.qualifier.delay||0)*1000)}}else{FSR.c().set("s",1);if(B.pop.what=="survey"){this.popSurvey()
}else{if(B.pop.what=="qualifier"){this.popQualifier()}else{if(B.pop.what=="url"){this.popUrl()}else{if(B.pop.what=="script"){this.popScript()
}else{if(B.pop.what=="movie"){}}}}}}},popSurvey:function(){var B=this.sd.survey;var A=this.sd.pop;
this.popMain(this.sid(),B.width,B.height,A.pu,B.loading,"400")},popFeedback:function(){var C=FSR.$P();
var B="feedback";var A=FSR.locale;if(A){B=B+"-"+A}this.popMain(B,C.survey.width,C.survey.height,false,C.survey.loading,"600")
},popMain:function(D,C,M,N,E,K){var H=FSR.services.survey;var J=FSR.c();var B=J.get("rid")||FSR.generateid();
var L=this.hash(B);var I=FSR.cs;var F=new FSR.Hash({sid:D,cid:FSR.id,pattern:I,a:B,b:L,c:24*60*60*1000,version:FSR.version}).toQueryString();
var G=FSR.CPPS.toQueryString();var A=document.location.protocol+"//"+H.host+H.path+H.url+"?"+F+"&"+G;
if(E){this.page(FSR.$P().loading);A=(FSR.html_files||FSR.files)+FSR.$P().loading.url+"?url="+A}this.pop("fsr"+K,A,(window.screen.width-C)/2,(window.screen.height-M)/2,C,M,N);
FSR.log(K,FSR.cs)},popTracker:function(){fsr$timer=setInterval(fsr$setAlive,1000);this.popOther(this.sd.tracker,true,"200")
},popQualifier:function(){this.popOther(this.sd.qualifier,this.sd.pop.pu,"300",this.sd.pop.now)},popCancel:function(){this.popOther(this.sd.cancel,false,"500")
},popLink:function(){if(!this.surveyShown()){this.popImmediate()}},cancelTracker:function(){if(this.trackerRunning()){var A=window.open("","fsr200");
if(A){A.close()}}},popOther:function(E,I,G,F){this.page(E);var C=(window.screen.width-E.width)/2;
var H=(window.screen.height-E.height)/2;var A=(FSR.html_files||FSR.files)+(E.url.pop||E.url);var B={siteid:FSR.siteid,name:FSR.site.name,domain:FSR.site.domain};
if(F){B.when=F}var D=new FSR.Hash(B).toQueryString();A=A+"?"+D;this.pop("fsr"+G,A,C,H,E.width,E.height,I);
FSR.log(G,FSR.cs)},popAttach:function(B){var C=this.sd;var A=this;if(B.sp){C.criteria.sp=B.sp}if(B.when){C.pop.when=B.when
}if(!(C.sv>0&&C.sv<=C.criteria.sp)){return }if(FSR.locale){FSR.c().set("l",FSR.locale)}(function(){A.accepted();
A.closed()}).fsr$delay(0)},popUrl:function(){var B=FSR.$P().survey.width;var A=FSR.$P().survey.height;
this.pop("fsrOther",this.sd.pop.url,(window.screen.width-B)/2,(window.screen.height-A)/2,B,A)},popScript:function(){new FSR.Asset.javascript(this.sd.pop.script)
},pause:function(){var A=FSR.c();A.set("pa","1")},sid:function(){var G=this.sd;var H=FSR.c();var B=G.name;
var C=G.site;if(C){B=B+"-"+C}var E=G.section;if(E){B=B+"-"+E}var A=G.pop.now;if(A){B=B+"-"+A}var D=H.get("q");
if(D){B=B+"-"+D}var F=H.get("l");if(F){B=B+"-"+F}return B},pop:function(D,C,H,G,F,A,E,B){(function(){new FSR.Browser.Popup(C,{name:D,toolbar:0,location:0,directories:0,status:0,scrollbars:1,resizable:1,width:F,height:A,x:H,y:G,blur:E,menubar:0})
}).fsr$delay(B||0)},language:function(){var F=FSR.$P().language;if(!F){return }var B=F.locale;var E;
if(F.src=="location"){E=document.location.href}else{if(F.src=="cookie"){if(F.type&&F.type=="client"){E=FSR.Cookie.read(F.name,{path:"/",domain:FSR.site.domain||false})
}else{E=FSR.c().get("lang")}}else{if(F.src=="variable"){if(F.type&&F.type=="client"){E=window[F.name]
}else{E=FSR[F.name]}}}}E=E||"";var C=F.locales||[];for(var D=0,A=C.length;D<A;D++){if(E.match(C[D].match)){B=C[D].locale;
break}}FSR.locale=B},page:function(E){var B=FSR.c().get("l");if(!B){return }var D=E.locales||[];for(var C=0,A=D.length;
C<A;C++){if(D[C].locale==B){if(D[C].url){E.url=D[C].url}if(D[C].content){E.content=D[C].content}if(D[C].buttons){E.buttons={accept:"",decline:""};
if(D[C].buttons.accept){E.buttons.accept=D[C].buttons.accept}if(D[C].buttons.decline){E.buttons.decline=D[C].buttons.decline
}}if(D[C].width){E.width=D[C].width}if(D[C].height){E.height=D[C].height}break}}},criteria:function(E){var B=FSR.locale;
if(!B){return }var D=E.locales||[];for(var C=0,A=D.length;C<A;C++){if(D[C].locale==B){E.sp=D[C].sp;
E.lf=D[C].lf;break}}},decodeReferrer:function(A){A=decodeURIComponent(A);var C;var B=document.referrer.match(/[?&]q=([^&]*)/)||document.referrer.match(/[?&]p=([^&]*)/)||document.referrer.match(/[?&]query=([^&]*)/);
if(!B){return C}var C=unescape(B[1]);if(C){C=C.replace(/\+/g," ")}return C},setRepeatdays:function(A){if(this.sd.repeatdays[A]){FSR.Cookie.write("fsr.r",this.sd.repeatdays[A],{path:"/",domain:FSR.site.domain||false,duration:this.sd.repeatdays[A]})
}},hash:function(B){var A=B.split("_");return((A[0]*3)+1357)+""+((A[1]*9)+58)},cpp:function(){var cpps=FSR.$P().cpps;
if(!cpps){return }for(var name in cpps){if(!cpps.hasOwnProperty(name)){continue}var cpp=cpps[name];
var value="";if(cpp.source=="url"){var p=cpp.patterns||[];for(var j=0,n=p.length;j<n;j++){if(document.location.href.match(p[j].regex)){value=p[j].value;
break}}}if(cpp.source=="parameter"){value=this.parameter(cpp.name)}if(cpp.source=="cookie"){value=FSR.Cookie.read(cpp.name,{path:cpp.path||false,domain:cpp.domain||false})
}if(cpp.source=="variable"){try{value=eval(cpp.name)}catch(err){value=false}}if(value&&value!=""){if(cpp.mode&&cpp.mode=="append"){FSR.CPPS.append(name,value)
}else{FSR.CPPS.set(name,value)}}}},parameter:function(B){B=B.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var A="[\\?&]"+B+"=([^&#]*)";var D=new RegExp(A);var C=D.exec(window.location.href);if(C==null){return false
}else{return C[1]}},cancelAlive:function(){clearInterval(fsr$timer);FSR.Cookie.dispose("fsr.a",{path:"/",domain:FSR.site.domain||false})
}});new FSR.SurveyController({});window.fsr$addEvent("domready",function(){(function(){FSR.controller.load()
}).fsr$delay(1)});window.fsr$addEvent("unload",function(){FSR.controller.unload()});