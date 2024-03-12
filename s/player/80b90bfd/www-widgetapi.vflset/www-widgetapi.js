(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)fa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ha});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function qa(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.O=this.i=null}
function ta(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
qa.prototype.K=function(a){this.h=a};
function ua(a,b){a.i={mc:b,xc:!0};a.g=a.o||a.u}
qa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
qa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.mc;a.i=null;return b}
function xa(a){var b=a.O.splice(0)[0];(b=a.i=a.i||b)?b.xc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new qa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,ua(a.g,g),Ba(a)}a.g.l=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.xc)throw b.mc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l.next,b,a.g.K):(a.g.K(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l["throw"],b,a.g.K):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new ya(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.cb),reject:g(this.o)}};
b.prototype.cb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.sb(h,g):this.u(g)};
b.prototype.o=function(g){this.K(2,g)};
b.prototype.u=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.eb();this.O()};
b.prototype.eb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.G)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.O=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.fb=function(g){var h=this.l();g.wb(h.resolve,h.reject)};
b.prototype.sb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){n(u)}}:p}
var l,n,m=new b(function(q,p){l=q;n=p});
this.wb(k(g,l),k(h,n));return m};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.wb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).wb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function m(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).wb(m(q.length-1),n),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(m){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&fa(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&fa(k,g)&&fa(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&fa(k,g)&&fa(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&fa(h[0],l))for(h=0;h<n.length;h++){var m=n[h];if(k!==k&&m.key!==m.key||k===m.key)return{id:l,list:n,index:h,entry:m}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(m){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||pa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;function Ja(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(){return Date.now()}
function F(a,b){a=a.split(".");var c=D;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function pb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=pb(a[c]);return b}
var qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qb.length;f++)c=qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var sb;function tb(){if(void 0===sb){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){D.console&&D.console.error(c.message)}sb=a}else sb=a}return sb}
;function ub(a,b){this.g=a===vb&&b||""}
ub.prototype.toString=function(){return this.g};
function wb(a){return new ub(vb,a)}
var vb={};wb("");function xb(a){this.g=a}
xb.prototype.toString=function(){return this.g+""};
var yb={};var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a){this.g=a}
Hb.prototype.toString=function(){return this.g.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb=Ja(610401301,!1),Lb=Ja(572417392,!0);function Mb(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=D.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Kb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function G(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Kb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:G("Trident")||G("MSIE")}
function Sb(){return Qb()?Pb("Chromium"):(G("Chrome")||G("CriOS"))&&!(Qb()?0:G("Edge"))||G("Silk")}
;function Yb(a){this.g=a}
Yb.prototype.toString=function(){return this.g.toString()};function Zb(a){Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return a}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a){return ac(a.match($b)[3]||null)}
function cc(a){var b=a.match($b);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function dc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ec(a){var b=[],c;for(c in a)dc(c,a[c],b);return b.join("&")}
var fc=/#|$/;function gc(a,b){var c=a.search(fc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function hc(a){D.setTimeout(function(){throw a;},0)}
;function ic(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function jc(a){jc[" "](a);return a}
jc[" "]=function(){};var kc=Qb()?!1:G("Opera"),lc=Rb(),mc=G("Edge"),nc=G("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),oc=-1!=Mb().toLowerCase().indexOf("webkit")&&!G("Edge");function pc(){var a=D.document;return a?a.documentMode:void 0}
var qc;a:{var rc="",sc=function(){var a=Mb();if(nc)return/rv:([^\);]+)(\)|;)/.exec(a);if(mc)return/Edge\/([\d\.]+)/.exec(a);if(lc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(oc)return/WebKit\/(\S+)/.exec(a);if(kc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
sc&&(rc=sc?sc[1]:"");if(lc){var tc=pc();if(null!=tc&&tc>parseFloat(rc)){qc=String(tc);break a}}qc=rc}var uc=qc,vc;if(D.document&&lc){var wc=pc();vc=wc?wc:parseInt(uc,10)||void 0}else vc=void 0;var xc=vc;var yc=ic()||G("iPod"),Dc=G("iPad");!G("Android")||Sb();Sb();var Ec=G("Safari")&&!(Sb()||(Qb()?0:G("Coast"))||(Qb()?0:G("Opera"))||(Qb()?0:G("Edge"))||(Qb()?Pb("Microsoft Edge"):G("Edg/"))||(Qb()?Pb("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(ic()||G("iPad")||G("iPod"));var Fc={},Gc=null;
function Hc(a,b){Na(a);void 0===b&&(b=0);if(!Gc){Gc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Fc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Gc[h]&&(Gc[h]=g)}}}b=Fc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ic="undefined"!==typeof Uint8Array,Jc=!lc&&"function"===typeof btoa;function Kc(){return"function"===typeof BigInt}
var Lc=!Lb,Mc=!Lb;var Nc=0,Oc=0;function Pc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Qc(c,a)),b=c.next().value,a=c.next().value,c=b);Nc=c>>>0;Oc=a>>>0}
function Rc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Kc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Sc(c)+Sc(a));return c}
function Sc(a){a=String(a);return"0000000".slice(a.length)+a}
function Tc(){var a=Nc,b=Oc;b&2147483648?Kc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Qc(a,b)),a=b.next().value,b=b.next().value,a="-"+Rc(a,b)):a=Rc(a,b);return a}
function Qc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Uc(a){return Array.prototype.slice.call(a)}
;var Vc;Vc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Pd:64,ge:128,Wd:256,Vd:512,ae:1024,Td:2048,fe:4096,Ud:8192})));var Wc=Vc?function(a,b){a[Vc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Xc(a){var b=Yc(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Uc(a)),H(a,b|1))}
var Zc=Vc?function(a,b){a[Vc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function $c(a,b,c){return c?a|b:a&~b}
var Yc=Vc?function(a){return a[Vc]|0}:function(a){return a.ga|0},ad=Vc?function(a){return a[Vc]}:function(a){return a.ga},H=Vc?function(a,b){a[Vc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function bd(){var a=[];Wc(a,1);return a}
function cd(a,b){H(b,(a|0)&-14591)}
function dd(a,b){H(b,(a|34)&-14557)}
function ed(a){a=a>>14&1023;return 0===a?536870912:a}
;var fd={},gd={};function hd(a){return!(!a||"object"!==typeof a||a.te!==gd)}
function id(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var jd,kd=!Lb;function ld(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Yc(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;H(a,d|1);return!0}
var md,nd=[];H(nd,55);md=Object.freeze(nd);function od(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});function pd(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function qd(a){a=Error(a);pd(a,"warning");return a}
;function rd(a){return a.displayName||a.name||"unknown type name"}
function wd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return a}
var xd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function yd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:xd.test(a)}
function zd(a,b){b=!!b;if(!yd(a))throw qd("int64");if("string"===typeof a)if(yd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),!Ad(a)){if(16>a.length)Pc(Number(a));else if(Kc())a=BigInt(a),Nc=Number(a&BigInt(4294967295))>>>0,Oc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Oc=Nc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Oc*=1E6,Nc=1E6*Nc+d,4294967296<=Nc&&(Oc+=Math.trunc(Nc/4294967296),
Oc>>>=0,Nc>>>=0);b&&(b=w(Qc(Nc,Oc)),a=b.next().value,b=b.next().value,Nc=a,Oc=b)}a=Tc()}}else if(b)yd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Ad(b)?a=b:(Pc(a),a=Tc()));else if(yd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Pc(a);b=Nc;c=Oc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Bd(a){return null==a?a:zd(a)}
function Ad(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Cd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Dd(a){return null==a||"string"===typeof a?a:void 0}
function Ed(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+rd(b)+" but got "+(a&&rd(a.constructor)));return a}
function Fd(a,b,c){if(null!=a&&"object"===typeof a&&a.Tb===fd)return a;if(Array.isArray(a)){var d=Yc(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&H(a,e);return new b(a)}}
;var Gd;function I(a,b,c){null==a&&(a=Gd);Gd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Yc(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(id(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}H(a,d);return a}
;function Hd(a,b){return Id(b)}
function Id(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return kd||!ld(a,void 0,9999)?a:void 0;if(Ic&&null!=a&&a instanceof Uint8Array){if(Jc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Hc(a);return a}}}return a}
;function Jd(a,b,c){a=Uc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Kd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Yc(a)&1?void 0:f&&Yc(a)&2?a:Ld(a,b,c,void 0!==d,e,f);else if(id(a)){var g={},h;for(h in a)g[h]=Kd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Ld(a,b,c,d,e,f){var g=d||c?Yc(a):0;d=d?!!(g&32):void 0;a=Uc(a);for(var h=0;h<a.length;h++)a[h]=Kd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Md(a){return a.Tb===fd?a.toJSON():Id(a)}
;function Nd(a,b,c){c=void 0===c?dd:c;if(null!=a){if(Ic&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Yc(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(H(a,(d|34)&-12293),a):Ld(a,Nd,d&4?dd:c,!0,!1,!0)}a.Tb===fd&&(c=a.s,d=ad(c),a=d&2?a:Od(a,c,d,!0));return a}}
function Od(a,b,c,d){a=a.constructor;b=Pd(b,c,d);Yc(b);Gd=b;b=new a(b);Gd=void 0;return b}
function Pd(a,b,c){var d=c||b&2?dd:cd,e=!!(b&32);a=Jd(a,b,function(f){return Nd(f,e,d)});
Wc(a,32|(c?2:0));return a}
function Qd(a){var b=a.s,c=ad(b);return c&2?Od(a,b,c,!1):a}
;function Rd(a,b){a=a.s;return Sd(a,ad(a),b)}
function Sd(a,b,c,d){if(-1===c)return null;if(c>=ed(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Td(a,b,c){var d=a.s,e=ad(d);od(e);Ud(d,e,b,c);return a}
function Ud(a,b,c,d,e){id(d);var f=ed(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&H(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Vd(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Wd(a,b,c,d){a=a.s;var e=ad(a);od(e);(c=Xd(a,e,c))&&c!==b&&null!=d&&(e=Ud(a,e,c));Ud(a,e,b,d)}
function Yd(a,b,c){a=a.s;return Xd(a,ad(a),b)===c?c:-1}
function Xd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Sd(a,b,f)&&(0!==d&&(b=Ud(a,b,d)),d=f)}return d}
function Zd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=ad(e),g=Sd(e,f,c,d);b=Fd(g,b,f);b!==g&&null!=b&&Ud(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=ad(a);f&2||(g=Qd(e),g!==e&&(e=g,Ud(a,f,c,e,d)));return e}
function J(a,b,c,d){null!=d?Ed(d,b):d=void 0;return Td(a,c,d)}
function $d(a,b,c,d,e){null!=e?Ed(e,b):e=void 0;Wd(a,c,d,e)}
function ae(a,b){var c=!0;a=$c(a,2,!!(2&b));a=$c(a,32,!!(32&b)&&c);return a=$c(a,2048,!1)}
function be(a,b,c,d){a=a.s;var e=ad(a);od(e);var f,g=!!(2&e),h=g?1:2,k=1===h;h=2===h;f&&(f=!g);g=Sd(a,e,b);g=Array.isArray(g)?g:md;var l=Yc(g),n=!!(4&l);if(!n){var m=l;0===m&&(m=ae(m,e));m=$c(m,1,!0);l=g;var q=e,p=!!(2&m);p&&(q=$c(q,2,!0));for(var t=!p,u=!0,z=0,C=0;z<l.length;z++){var P=Fd(l[z],c,q);if(P instanceof c){if(!p){var U=!!(Yc(P.s)&2);t&&(t=!U);u&&(u=U)}l[C++]=P}}C<z&&(l.length=C);m=$c(m,4,!0);m=$c(m,16,u);m=$c(m,8,t);H(l,m);p&&Object.freeze(l);l=m}m=!!(8&l)||k&&!g.length;if(f&&!m){Vd(l)&&
(g=Uc(g),l=ae(l,e),e=Ud(a,e,b,g));f=g;for(m=0;m<f.length;m++)q=f[m],p=Qd(q),q!==p&&(f[m]=p);l=$c(l,8,!0);l=$c(l,16,!f.length);H(f,l)}Vd(l)||(f=l,k&&(l=$c(l,!g.length||16&l&&(!n||32&l)?2:2048,!0)),l!==f&&H(g,l),k&&Object.freeze(g));h&&Vd(l)&&(g=Uc(g),l=ae(l,e),H(g,l),Ud(a,e,b,g));b=g;c=null!=d?Ed(d,c):new c;b.push(c);Yc(c.s)&2?Zc(b,8):Zc(b,16)}
function ce(a,b){var c=void 0===c?"":c;a=Dd(Rd(a,b));return null!=a?a:c}
function de(a,b){b=Yd(a,ee,b);return Dd(Rd(a,b))}
function fe(a,b,c){if(null!=c){if("number"!==typeof c)throw qd("int32");if(!Number.isFinite(c))throw qd("int32");c|=0}Td(a,b,c)}
function K(a,b,c){return Td(a,b,Cd(c))}
function ge(a,b,c){if(null!=c){if(!Number.isFinite(c))throw qd("enum");c|=0}return Td(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(jd)var a=he(this,this.s,!1);else a=Ld(this.s,Md,void 0,void 0,!1,!1),a=he(this,a,!0);return a};
function ie(a){jd=!0;try{return JSON.stringify(a.toJSON(),Hd)}finally{jd=!1}}
L.prototype.clone=function(){var a=this.s;return Od(this,a,ad(a),!1)};
L.prototype.Tb=fd;L.prototype.toString=function(){return he(this,this.s,!1).toString()};
function he(a,b,c){var d=a.constructor.ma,e=ad(c?a.s:b),f=ed(e),g=!1;if(d&&kd){if(!c){b=Uc(b);var h;if(b.length&&id(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=ad(a.s);a=ed(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var m=f[l];null==m?f[l]=c?md:bd():c&&m!==md&&Xc(m)}else k||(m=void 0,f.length&&id(m=f[f.length-1])?k=m:f.push(k={})),m=k[l],null==k[l]?k[l]=c?md:bd():c&&m!==md&&Xc(m)}k=b.length;if(!k)return b;var q;
if(id(f=b[k-1])){a:{var p=f;c={};a=!1;for(var t in p){h=p[t];if(Array.isArray(h)){n=h;if(!Mc&&ld(h,d,+t)||!Lc&&hd(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[t]=h:a=!0}if(a){for(var u in c){p=c;break a}p=null}}p!=f&&(q=!0);k--}for(e=+!!(e&512)-1;0<k;k--){t=k-1;f=b[t];if(!(null==f||!Mc&&ld(f,d,t-e)||!Lc&&hd(f)&&0===f.size))break;var z=!0}if(!q&&!z)return b;var C;g?C=b:C=Array.prototype.slice.call(b,0,k);b=C;g&&(b.length=k);p&&b.push(p);return b}
;var je=window;wb("csi.gstatic.com");wb("googleads.g.doubleclick.net");wb("partner.googleadservices.com");wb("pubads.g.doubleclick.net");wb("securepubads.g.doubleclick.net");wb("tpc.googlesyndication.com");function ke(a,b){this.width=a;this.height=b}
r=ke.prototype;r.clone=function(){return new ke(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Nb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function le(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function me(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ne(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=oe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,pe[c])c=pe[c];else{c=String(c);if(!pe[c]){var f=/function\s+([^\(]+)/m.exec(c);pe[c]=f?f[1]:"[Anonymous]"}c=pe[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function oe(a,b){b||(b={});b[qe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[qe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=oe(a,b));return c}
function qe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var pe={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function re(a){this.nd=a}
function se(a){return new re(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var te=[se("data"),se("http"),se("https"),se("mailto"),se("ftp"),new re(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function ue(a,b){b=void 0===b?te:b;if(a instanceof Hb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof re&&d.nd(a))return new Hb(a,Ib)}}
function ve(a){var b=void 0===b?te:b;return ue(a,b)||Jb}
var we="function"===typeof URL;function xe(){throw Error("unknown trace type");}
;var ye={Sd:0,Xd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function ze(a,b){b=Error.call(this,a+" cannot be used with intent "+ye[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(ze,Error);
function Ae(a,b){a.removeAttribute("srcdoc");if(b instanceof xb)throw new ze("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(we){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Be(a){var b=Ce;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function De(){var a=[];Be(function(b){a.push(b)});
return a}
var Ce={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},Ee=bb(function(){return De()});
function Fe(){var a=Ge(),b={};db(Ee(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ge(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var He=(new Date).getTime();function Ie(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Je(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(m){for(var q=g,p=0;64>p;p+=4)q[p/4]=m[p]<<24|m[p+1]<<16|m[p+2]<<8|m[p+3];for(p=16;80>p;p++)m=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(m<<1|m>>>31)&4294967295;m=e[0];var t=e[1],u=e[2],z=e[3],C=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var U=1518500249}else P=t^u^z,U=1859775393;else 60>p?(P=t&u|z&(t|u),U=2400959708):(P=t^u^z,U=3395469782);P=((m<<5|m>>>27)&4294967295)+P+C+U+q[p]&4294967295;C=z;z=u;u=(t<<30|t>>>2)&4294967295;t=m;m=P}e[0]=e[0]+m&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+C&4294967295}
function c(m,q){if("string"===typeof m){m=unescape(encodeURIComponent(m));for(var p=[],t=0,u=m.length;t<u;++t)p.push(m.charCodeAt(t));m=p}q||(q=m.length);p=0;if(0==l)for(;p+64<q;)b(m.slice(p,p+64)),p+=64,n+=64;for(;p<q;)if(f[l++]=m[p++],n++,64==l)for(l=0,b(f);p+64<q;)b(m.slice(p,p+64)),p+=64,n+=64}
function d(){var m=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)m[q++]=e[p]>>t&255;return m}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Wc:function(){for(var m=d(),q="",p=0;p<m.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(m[p]/16))+"0123456789ABCDEF".charAt(m[p]%16);return q}}}
;function Ke(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Le(Ie(d),a,c||null)].join(" "):null}
function Le(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Me(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Me(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Me(a){var b=Je();b.update(a);return b.Wc().toLowerCase()}
;var Ne={};function Oe(a){this.g=a||{cookie:""}}
r=Oe.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(!this.Nb())return!0;this.set("TESTCOOKIESENABLED","1",{Qb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ye;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qb:0,path:b,domain:c});return d};
r.Nb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Pe=new Oe("undefined"==typeof document?null:document);function Qe(a){return!!Ne.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Re(a,b,c,d){(a=D[a])||"undefined"===typeof document||(a=(new Oe(document)).get(b));return a?Ke(a,c,d):null}
function Se(a){var b=void 0===b?!1:b;var c=Ie(String(D.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;Qe(e)&&(f=f||D.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Oe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Qe(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
D.__SAPISID:D.__APISID,e||"undefined"===typeof document||(e=new Oe(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ke(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Qe(b)&&((b=Re("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Re("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Te(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Xe(){this.Aa=this.Aa;this.l=this.l}
Xe.prototype.Aa=!1;Xe.prototype.dispose=function(){this.Aa||(this.Aa=!0,this.sa())};
Xe.prototype.addOnDisposeCallback=function(a,b){this.Aa?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Va(a,b):a))};
Xe.prototype.sa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Ye(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Ye.prototype.stopPropagation=function(){this.i=!0};
Ye.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ze=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function $e(a,b){Ye.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Xa($e,Ye);var af={2:"touch",3:"pen",4:"mouse"};
$e.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(nc){a:{try{jc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:af[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&$e.na.preventDefault.call(this)};
$e.prototype.stopPropagation=function(){$e.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
$e.prototype.preventDefault=function(){$e.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var bf="closure_listenable_"+(1E6*Math.random()|0);var cf=0;function df(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ab=e;this.key=++cf;this.pb=this.vb=!1}
function ef(a){a.pb=!0;a.listener=null;a.proxy=null;a.src=null;a.Ab=null}
;function ff(a){this.src=a;this.listeners={};this.g=0}
ff.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=gf(a,b,d,e);-1<g?(b=a[g],c||(b.vb=!1)):(b=new df(b,this.src,f,!!d,e),b.vb=c,a.push(b));return b};
ff.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=gf(e,b,c,d);return-1<b?(ef(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function hf(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(ef(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function gf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.pb&&f.listener==b&&f.capture==!!c&&f.Ab==d)return e}return-1}
;var jf="closure_lm_"+(1E6*Math.random()|0),kf={},lf=0;function mf(a,b,c,d,e){if(d&&d.once)nf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)mf(a,b[f],c,d,e);else c=of(c),a&&a[bf]?a.Ka(b,c,Oa(d)?!!d.capture:!!d,e):pf(a,b,c,!1,d,e)}
function pf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=qf(a);h||(a[jf]=h=new ff(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=rf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ze||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(sf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");lf++}}
function rf(){function a(c){return b.call(a.src,a.listener,c)}
var b=tf;return a}
function nf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nf(a,b[f],c,d,e);else c=of(c),a&&a[bf]?a.g.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):pf(a,b,c,!0,d,e)}
function uf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)uf(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=of(c),a&&a[bf])?a.g.remove(String(b),c,d,e):a&&(a=qf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=gf(b,c,d,e)),(c=-1<a?b[a]:null)&&vf(c))}
function vf(a){if("number"!==typeof a&&a&&!a.pb){var b=a.src;if(b&&b[bf])hf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(sf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);lf--;(c=qf(b))?(hf(c,a),0==c.g&&(c.src=null,b[jf]=null)):ef(a)}}}
function sf(a){return a in kf?kf[a]:kf[a]="on"+a}
function tf(a,b){if(a.pb)a=!0;else{b=new $e(b,this);var c=a.listener,d=a.Ab||a.src;a.vb&&vf(a);a=c.call(d,b)}return a}
function qf(a){a=a[jf];return a instanceof ff?a:null}
var wf="__closure_events_fn_"+(1E9*Math.random()>>>0);function of(a){if("function"===typeof a)return a;a[wf]||(a[wf]=function(b){return a.handleEvent(b)});
return a[wf]}
;function xf(){Xe.call(this);this.g=new ff(this);this.O=this;this.G=null}
Xa(xf,Xe);xf.prototype[bf]=!0;xf.prototype.addEventListener=function(a,b,c,d){mf(this,a,b,c,d)};
xf.prototype.removeEventListener=function(a,b,c,d){uf(this,a,b,c,d)};
function yf(a,b){var c=a.G;if(c){var d=[];for(var e=1;c;c=c.G)d.push(c),++e}a=a.O;c=b.type||b;"string"===typeof b?b=new Ye(b,a):b instanceof Ye?b.target=b.target||a:(e=b,b=new Ye(c,a),rb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=zf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=zf(g,c,!0,b)&&e,b.i||(e=zf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=zf(g,c,!1,b)&&e}
xf.prototype.sa=function(){xf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ef(d[e]);delete a.listeners[c];a.g--}}this.G=null};
xf.prototype.Ka=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function zf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.pb&&g.capture==c){var h=g.listener,k=g.Ab||g.src;g.vb&&hf(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Af(a){xf.call(this);var b=this;this.K=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,Bf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.K||Cf(this)}
y(Af,xf);function Df(){var a=Ef;Af.g||(Af.g=new Af(a));return Af.g}
Af.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.ha.ba(this.K);delete Af.g};
Af.prototype.ca=function(){return this.h};
function Cf(a){a.K=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,Bf(a),3):A(c,Bf(a),3);Cf(a);c.g=0})},3E4)}
function Bf(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.O=[h.i];h.o=0;h.u=0;a.u=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?yf(a,"networkstatus-online"):yf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function Ff(){this.data=[];this.g=-1}
Ff.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Ff.prototype.get=function(a){return!!this.data[a]};
function Gf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Hf(a){this.s=I(a)}
y(Hf,L);function If(a){this.s=I(a)}
y(If,L);function Jf(a,b){return K(a,2,b)}
function Kf(a,b){return K(a,3,b)}
function Lf(a,b){return K(a,4,b)}
function Mf(a,b){return K(a,5,b)}
function Nf(a,b){return K(a,9,b)}
function Of(a,b){var c=a.s,d=ad(c);od(d);if(null==b)Ud(c,d,10);else{if(!Array.isArray(b)){var e=Error();pd(e,"incident");hc(e)}var f=e=Yc(b),g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,n=!0,m=0;m<b.length;m++){var q=b[m];Ed(q,Hf);g||(q=!!(Yc(q.s)&2),l&&(l=!q),n&&(n=q))}g||(e=$c(e,5,!0),e=$c(e,8,l),e=$c(e,16,n));if(k||h&&e!==f)b=Uc(b),f=0,e=ae(e,d);e!==f&&H(b,e);Ud(c,d,10,b)}return a}
function Pf(a,b){return Td(a,11,null==b?b:wd(b))}
function Qf(a,b){return K(a,1,b)}
function Rf(a,b){return Td(a,7,null==b?b:wd(b))}
If.ma=[10,6];var Sf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Tf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Uf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Vf(){var a=window;if(!Uf(a))return null;var b=Tf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Sf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Wf(a){var b;return Pf(Of(Mf(Jf(Qf(Lf(Rf(Nf(Kf(new If,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Hf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Xf(){var a,b;return null!=(b=null==(a=Vf())?void 0:a.then(function(c){return Wf(c)}))?b:null}
;function Yf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Yf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Zf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var $f;function ag(){var a=D.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=le();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jc;c.jc=null;e()}};
return function(e){d.next={jc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function bg(){this.h=this.g=null}
bg.prototype.add=function(a,b){var c=cg.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
bg.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var cg=new Yf(function(){return new dg},function(a){return a.reset()});
function dg(){this.next=this.scope=this.g=null}
dg.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
dg.prototype.reset=function(){this.next=this.scope=this.g=null};var eg,fg=!1,gg=new bg;function hg(a,b){eg||ig();fg||(eg(),fg=!0);gg.add(a,b)}
function ig(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);eg=function(){a.then(jg)}}else eg=function(){var b=jg;
"function"!==typeof D.setImmediate||D.Window&&D.Window.prototype&&(Qb()||!G("Edge"))&&D.Window.prototype.setImmediate==D.setImmediate?($f||($f=ag()),$f(b)):D.setImmediate(b)}}
function jg(){for(var a;a=gg.remove();){try{a.g.call(a.scope)}catch(b){hc(b)}Zf(cg,a)}fg=!1}
;function kg(a,b){this.g=a[D.Symbol.iterator]();this.h=b}
kg.prototype[Symbol.iterator]=function(){return this};
kg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function lg(a,b){return new kg(a,b)}
;function mg(){this.blockSize=-1}
;function ng(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Xa(ng,mg);ng.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function og(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
ng.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)og(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){og(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){og(this,e);f=0;break}}this.h=f;this.l+=b}};
ng.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;og(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function pg(){}
pg.prototype.next=function(){return qg};
var qg={done:!0,value:void 0};function rg(a){return{value:a,done:!1}}
pg.prototype.ia=function(){return this};function sg(a){if(a instanceof tg||a instanceof ug||a instanceof vg)return a;if("function"==typeof a.next)return new tg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new tg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new tg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function tg(a){this.h=a}
tg.prototype.ia=function(){return new ug(this.h())};
tg.prototype[Symbol.iterator]=function(){return new vg(this.h())};
tg.prototype.g=function(){return new vg(this.h())};
function ug(a){this.h=a}
y(ug,pg);ug.prototype.next=function(){return this.h.next()};
ug.prototype[Symbol.iterator]=function(){return new vg(this.h)};
ug.prototype.g=function(){return new vg(this.h)};
function vg(a){tg.call(this,function(){return a});
this.i=a}
y(vg,tg);vg.prototype.next=function(){return this.i.next()};function wg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof wg)for(c=xg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function xg(a){yg(a);return a.g.concat()}
r=wg.prototype;r.has=function(a){return zg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ag;yg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ag(a,b){return a===b}
r.Nb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return zg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&yg(this),!0):!1};
function yg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];zg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],zg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return zg(this.h,a)?this.h[a]:b};
r.set=function(a,b){zg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=xg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new wg(this)};
r.keys=function(){return sg(this.ia(!0)).g()};
r.values=function(){return sg(this.ia(!1)).g()};
r.entries=function(){var a=this;return lg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){yg(this);var b=0,c=this.i,d=this,e=new pg;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return qg;var f=d.g[b++];return rg(a?f:d.h[f])};
return e};
function zg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Bg=D.JSON.stringify;function Cg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Dg(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.o=this.u=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Eg(b,2,c)},function(c){Eg(b,3,c)})}catch(c){Eg(this,3,c)}}
function Fg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Fg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Gg=new Yf(function(){return new Fg},function(a){a.reset()});
function Hg(a,b,c){var d=Gg.get();d.i=a;d.h=b;d.context=c;return d}
Dg.prototype.then=function(a,b,c){return Ig(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Dg.prototype.$goog_Thenable=!0;Dg.prototype.cancel=function(a){if(0==this.g){var b=new Jg(a);hg(function(){Kg(this,b)},this)}};
function Kg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Kg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Lg(c),Mg(c,e,3,b)))}a.i=null}else Eg(a,3,b)}
function Ng(a,b){a.h||2!=a.g&&3!=a.g||Og(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Ig(a,b,c,d){var e=Hg(null,null,null);e.g=new Dg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Jg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Ng(a,e);return e.g}
Dg.prototype.O=function(a){this.g=0;Eg(this,2,a)};
Dg.prototype.oa=function(a){this.g=0;Eg(this,3,a)};
function Eg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.O,f=a.oa;if(d instanceof Dg){Ng(d,Hg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){Pg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,Og(a),3!=b||c instanceof Jg||Qg(a,c))}}
function Pg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Og(a){a.u||(a.u=!0,hg(a.K,a))}
function Lg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Dg.prototype.K=function(){for(var a;a=Lg(this);)Mg(this,a,this.g,this.G);this.u=!1};
function Mg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Rg(b,c,d);else try{b.l?b.i.call(b.context):Rg(b,c,d)}catch(e){Sg.call(null,e)}Zf(Gg,b)}
function Rg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Qg(a,b){a.o=!0;hg(function(){a.o&&Sg.call(null,b)})}
var Sg=hc;function Jg(a){Za.call(this,a)}
Xa(Jg,Za);Jg.prototype.name="cancel";function M(a){Xe.call(this);this.u=1;this.i=[];this.o=0;this.g=[];this.h={};this.G=!!a}
Xa(M,Xe);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Tg(a,b,c){var d=Ug;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.rb(a)}}
r.rb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.ab=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var g=c[e];Vg(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Aa;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.rb(c)}}return 0!=e}return!1};
function Vg(a,b,c){hg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.rb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Wg(a){this.g=a}
Wg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Bg(b))};
Wg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wg.prototype.remove=function(a){this.g.remove(a)};function Xg(a){this.g=a}
Xa(Xg,Wg);function Yg(a){this.data=a}
function Zg(a){return void 0===a||a instanceof Yg?a:new Yg(a)}
Xg.prototype.set=function(a,b){Xg.na.set.call(this,a,Zg(b))};
Xg.prototype.h=function(a){a=Xg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $g(a){this.g=a}
Xa($g,Xg);$g.prototype.set=function(a,b,c){if(b=Zg(b)){if(c){if(c<Wa()){$g.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}$g.na.set.call(this,a,b)};
$g.prototype.h=function(a){var b=$g.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())$g.prototype.remove.call(this,a);else return b}};function ah(){}
;function bh(){}
Xa(bh,ah);bh.prototype[Symbol.iterator]=function(){return sg(this.ia(!0)).g()};
bh.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ch(a){this.g=a;this.h=null}
Xa(ch,bh);r=ch.prototype;r.set=function(a,b){dh(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){dh(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){dh(this);this.g.removeItem(a)};
r.ia=function(a){dh(this);var b=0,c=this.g,d=new pg;d.next=function(){if(b>=c.length)return qg;var e=c.key(b++);if(a)return rg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return rg(e)};
return d};
r.clear=function(){dh(this);this.g.clear()};
r.key=function(a){dh(this);return this.g.key(a)};
function dh(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.h)?b:a.h=eh(a.g))||hc(Error("Storage mechanism: Storage unavailable"))}
function eh(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function fh(){var a=null;try{a=D.localStorage||null}catch(b){}ch.call(this,a)}
Xa(fh,ch);function gh(a,b){this.h=a;this.g=null;var c;if(c=lc)c=!(9<=Number(xc));if(c){hh||(hh=new wg);this.g=hh.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),hh.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Xa(gh,bh);var ih={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},hh=null;function jh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ih[b]})}
r=gh.prototype;r.set=function(a,b){this.g.setAttribute(jh(a),b);kh(this)};
r.get=function(a){a=this.g.getAttribute(jh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(jh(a));kh(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new pg;d.next=function(){if(b>=c.length)return qg;var e=c[b++];if(a)return rg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return rg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kh(this)};
function kh(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function lh(a,b){this.h=a;this.g=b+"::"}
Xa(lh,bh);lh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
lh.prototype.get=function(a){return this.h.get(this.g+a)};
lh.prototype.remove=function(a){this.h.remove(this.g+a)};
lh.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new pg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return rg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},mh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var nh={Qa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},oh={Qa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){return[].concat.apply([],a)}};
N.xd=function(){mh?(N.Pa=Uint8Array,N.pa=Uint16Array,N.Lc=Int32Array,N.assign(N,nh)):(N.Pa=Array,N.pa=Array,N.Lc=Array,N.assign(N,oh))};
N.xd();var ph=!0;try{new Uint8Array(1)}catch(a){ph=!1}
function qh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Pa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var rh={};rh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var sh={},th,uh=[],vh=0;256>vh;vh++){th=vh;for(var wh=0;8>wh;wh++)th=th&1?3988292384^th>>>1:th>>>1;uh[vh]=th}sh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^uh[(a^b[d])&255];return a^-1};var xh={};xh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function yh(a){for(var b=a.length;0<=--b;)a[b]=0}
var zh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ah=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Bh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ch=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Dh=Array(576);yh(Dh);var Eh=Array(60);yh(Eh);var Fh=Array(512);yh(Fh);var Gh=Array(256);yh(Gh);var Hh=Array(29);yh(Hh);var Ih=Array(30);yh(Ih);function Jh(a,b,c,d,e){this.Hc=a;this.ad=b;this.Zc=c;this.Xc=d;this.rd=e;this.qc=a&&a.length}
var Kh,Lh,Mh;function Nh(a,b){this.lc=a;this.Xa=0;this.Da=b}
function Oh(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function Ph(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Oh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Qh(a,b,c){Ph(a,c[2*b],c[2*b+1])}
function oi(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function pi(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=oi(d[e]++,e))}
function qi(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.X[512]=1;a.xa=a.bb=0;a.da=a.matches=0}
function ri(a){8<a.P?Oh(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function si(a,b,c){ri(a);Oh(a,c);Oh(a,~c);N.Qa(a.L,a.window,b,c,a.pending);a.pending+=c}
function ti(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ui(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.wa;){e<a.wa&&ti(b,a.M[e+1],a.M[e],a.depth)&&e++;if(ti(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function vi(a,b,c){var d=0;if(0!==a.da){do{var e=a.L[a.jb+2*d]<<8|a.L[a.jb+2*d+1];var f=a.L[a.Pb+d];d++;if(0===e)Qh(a,f,b);else{var g=Gh[f];Qh(a,g+256+1,b);var h=zh[g];0!==h&&(f-=Hh[g],Ph(a,f,h));e--;g=256>e?Fh[e]:Fh[256+(e>>>7)];Qh(a,g,c);h=Ah[g];0!==h&&(e-=Ih[g],Ph(a,e,h))}}while(d<a.da)}Qh(a,256,b)}
function wi(a,b){var c=b.lc,d=b.Da.Hc,e=b.Da.qc,f=b.Da.Xc,g,h=-1;a.wa=0;a.Ta=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.M[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.bb-=d[2*k+1])}b.Xa=h;for(g=a.wa>>1;1<=g;g--)ui(a,c,g);k=f;do g=a.M[1],a.M[1]=a.M[a.wa--],ui(a,c,1),d=a.M[1],a.M[--a.Ta]=g,a.M[--a.Ta]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.M[1]=k++,ui(a,c,1);while(2<=a.wa);a.M[--a.Ta]=
a.M[1];g=b.lc;k=b.Xa;d=b.Da.Hc;e=b.Da.qc;f=b.Da.ad;var l=b.Da.Zc,n=b.Da.rd,m,q=0;for(m=0;15>=m;m++)a.ra[m]=0;g[2*a.M[a.Ta]+1]=0;for(b=a.Ta+1;573>b;b++){var p=a.M[b];m=g[2*g[2*p+1]+1]+1;m>n&&(m=n,q++);g[2*p+1]=m;if(!(p>k)){a.ra[m]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(m+t);e&&(a.bb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(m=n-1;0===a.ra[m];)m--;a.ra[m]--;a.ra[m+1]+=2;a.ra[n]--;q-=2}while(0<q);for(m=n;0!==m;m--)for(p=a.ra[m];0!==p;)d=a.M[--b],d>k||(g[2*d+1]!==m&&(a.xa+=(m-g[2*d+1])*g[2*d],g[2*
d+1]=m),p--)}pi(c,h,a.ra)}
function xi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.S[2*l]+=g:0!==l?(l!==e&&a.S[2*l]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function yi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Qh(a,l,a.S);while(0!==--g)}else 0!==l?(l!==e&&(Qh(a,l,a.S),g--),Qh(a,16,a.S),Ph(a,g-3,2)):10>=g?(Qh(a,17,a.S),Ph(a,g-3,3)):(Qh(a,18,a.S),Ph(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function zi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var Ai=!1;function Bi(a,b,c){a.L[a.jb+2*a.da]=b>>>8&255;a.L[a.jb+2*a.da+1]=b&255;a.L[a.Pb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(Gh[c]+256+1)]++,a.Ia[2*(256>b?Fh[b]:Fh[256+(b>>>7)])]++);return a.da===a.nb-1}
;function Ci(a,b){a.msg=xh[b];return b}
function Di(a){for(var b=a.length;0<=--b;)a[b]=0}
function Ei(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Qa(a.output,b.L,b.ob,c,a.Ya),a.Ya+=c,b.ob+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.ob=0))}
function Fi(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.C.Kb&&(a.C.Kb=zi(a));wi(a,a.Cb);wi(a,a.yb);xi(a,a.X,a.Cb.Xa);xi(a,a.Ia,a.yb.Xa);wi(a,a.hc);for(e=18;3<=e&&0===a.S[2*Ch[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Ph(a,b?1:0,3),si(a,c,d);else if(4===a.strategy||g===f)Ph(a,2+(b?1:0),3),vi(a,Dh,Eh);else{Ph(a,4+(b?1:0),3);c=a.Cb.Xa+1;d=a.yb.Xa+1;e+=1;Ph(a,c-257,5);Ph(a,d-1,5);Ph(a,e-4,4);for(f=0;f<e;f++)Ph(a,a.S[2*Ch[f]+
1],3);yi(a,a.X,c-1);yi(a,a.Ia,d-1);vi(a,a.X,a.Ia)}qi(a);b&&ri(a);a.Z=a.j;Ei(a.C)}
function Q(a,b){a.L[a.pending++]=b}
function Gi(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function Hi(a,b){var c=a.yc,d=a.j,e=a.aa,f=a.zc,g=a.j>a.T-262?a.j-(a.T-262):0,h=a.window,k=a.Fa,l=a.la,n=a.j+258,m=h[d+e-1],q=h[d+e];a.aa>=a.pc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===m&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<n;);p=258-(n-d);d=n-258;if(p>e){a.Wa=b;e=p;if(p>=f)break;m=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Ii(a){var b=a.T,c;do{var d=a.Jc-a.m-a.j;if(a.j>=b+(b-262)){N.Qa(a.window,a.window,b,b,0);a.Wa-=b;a.j-=b;a.Z-=b;var e=c=a.Bb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.j+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Qa(c,e.input,e.Na,g,f),1===e.state.wrap?e.A=rh(e.A,c,g,f):2===e.state.wrap&&(e.A=sh(e.A,c,g,f)),e.Na+=g,e.Oa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Fa]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function Ji(a,b){for(var c;;){if(262>a.m){Ii(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);0!==c&&a.j-c<=a.T-262&&(a.H=Hi(a,c));if(3<=a.H)if(c=Bi(a,a.j-a.Wa,a.H-3),a.m-=a.H,a.H<=a.Rb&&3<=a.m){a.H--;do a.j++,a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j;while(0!==--a.H);a.j++}else a.j+=a.H,a.H=0,a.D=a.window[a.j],a.D=(a.D<<a.va^a.window[a.j+1])&a.ta;else c=Bi(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(Fi(a,!1),0===a.C.F))return 1}a.Y=2>a.j?a.j:2;return 4===b?(Fi(a,!0),0===a.C.F?3:4):a.da&&(Fi(a,!1),0===a.C.F)?1:2}
function Ki(a,b){for(var c,d;;){if(262>a.m){Ii(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);a.aa=a.H;a.Cc=a.Wa;a.H=2;0!==c&&a.aa<a.Rb&&a.j-c<=a.T-262&&(a.H=Hi(a,c),5>=a.H&&(1===a.strategy||3===a.H&&4096<a.j-a.Wa)&&(a.H=2));if(3<=a.aa&&a.H<=a.aa){d=a.j+a.m-3;c=Bi(a,a.j-1-a.Cc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);while(0!==
--a.aa);a.La=0;a.H=2;a.j++;if(c&&(Fi(a,!1),0===a.C.F))return 1}else if(a.La){if((c=Bi(a,0,a.window[a.j-1]))&&Fi(a,!1),a.j++,a.m--,0===a.C.F)return 1}else a.La=1,a.j++,a.m--}a.La&&(Bi(a,0,a.window[a.j-1]),a.La=0);a.Y=2>a.j?a.j:2;return 4===b?(Fi(a,!0),0===a.C.F?3:4):a.da&&(Fi(a,!1),0===a.C.F)?1:2}
function Li(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Ii(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.H=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.H=258-(e-d);a.H>a.m&&(a.H=a.m)}3<=a.H?(c=Bi(a,1,a.H-3),a.m-=a.H,a.j+=a.H,a.H=0):(c=Bi(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(Fi(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Fi(a,!0),0===a.C.F?3:4):
a.da&&(Fi(a,!1),0===a.C.F)?1:2}
function Mi(a,b){for(var c;;){if(0===a.m&&(Ii(a),0===a.m)){if(0===b)return 1;break}a.H=0;c=Bi(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(Fi(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Fi(a,!0),0===a.C.F?3:4):a.da&&(Fi(a,!1),0===a.C.F)?1:2}
function Ni(a,b,c,d,e){this.dd=a;this.qd=b;this.td=c;this.pd=d;this.bd=e}
var Oi;Oi=[new Ni(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){Ii(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,Fi(a,!1),0===a.C.F)return 1;if(a.j-a.Z>=a.T-262&&(Fi(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return Fi(a,!0),0===a.C.F?3:4;a.j>a.Z&&Fi(a,!1);return 1}),
new Ni(4,4,8,4,Ji),new Ni(4,5,16,8,Ji),new Ni(4,6,32,32,Ji),new Ni(4,4,16,16,Ki),new Ni(8,16,32,32,Ki),new Ni(8,16,128,128,Ki),new Ni(8,32,128,256,Ki),new Ni(32,128,258,1024,Ki),new Ni(32,258,258,4096,Ki)];
function Pi(){this.C=null;this.status=0;this.L=null;this.wrap=this.pending=this.ob=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Ua=-1;this.Fa=this.dc=this.T=0;this.window=null;this.Jc=0;this.head=this.la=null;this.zc=this.pc=this.strategy=this.level=this.Rb=this.yc=this.aa=this.m=this.Wa=this.j=this.La=this.Cc=this.H=this.Z=this.va=this.ta=this.Lb=this.Bb=this.D=0;this.X=new N.pa(1146);this.Ia=new N.pa(122);this.S=new N.pa(78);Di(this.X);Di(this.Ia);Di(this.S);this.hc=this.yb=this.Cb=null;this.ra=
new N.pa(16);this.M=new N.pa(573);Di(this.M);this.Ta=this.wa=0;this.depth=new N.pa(573);Di(this.depth);this.P=this.V=this.Y=this.matches=this.bb=this.xa=this.jb=this.da=this.nb=this.Pb=0}
function Qi(a,b){if(!a||!a.state||5<b||0>b)return a?Ci(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return Ci(a,0===a.F?-5:-2);c.C=a;var d=c.Ua;c.Ua=b;if(42===c.status)if(2===c.wrap)a.A=0,Q(c,31),Q(c,139),Q(c,8),c.v?(Q(c,(c.v.text?1:0)+(c.v.Ba?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),Q(c,c.v.time&255),Q(c,c.v.time>>8&255),Q(c,c.v.time>>16&255),Q(c,c.v.time>>24&255),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,c.v.xe&255),c.v.extra&&c.v.extra.length&&
(Q(c,c.v.extra.length&255),Q(c,c.v.extra.length>>8&255)),c.v.Ba&&(a.A=sh(a.A,c.L,c.pending,0)),c.fa=0,c.status=69):(Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,3),c.status=113);else{var e=8+(c.dc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Gi(c,e+(31-e%31));0!==c.j&&(Gi(c,a.A>>>16),Gi(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Ba&&c.pending>e&&(a.A=sh(a.A,c.L,c.pending-e,e)),Ei(a),e=c.pending,c.pending!==c.ea));)Q(c,c.v.extra[c.fa]&255),c.fa++;c.v.Ba&&c.pending>e&&(a.A=sh(a.A,c.L,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=sh(a.A,c.L,c.pending-e,e)),Ei(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>
e&&(a.A=sh(a.A,c.L,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=sh(a.A,c.L,c.pending-e,e)),Ei(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>e&&(a.A=sh(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ba?(c.pending+2>c.ea&&Ei(a),c.pending+2<=c.ea&&(Q(c,a.A&
255),Q(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(Ei(a),0===a.F)return c.Ua=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Ci(a,-5);if(666===c.status&&0!==a.U)return Ci(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Mi(c,b):3===c.strategy?Li(c,b):Oi[c.level].bd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ua=-1),0;if(2===d&&(1===b?(Ph(c,2,3),Qh(c,256,Dh),16===c.P?(Oh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=
c.V&255,c.V>>=8,c.P-=8)):5!==b&&(Ph(c,0,3),si(c,0,0),3===b&&(Di(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),Ei(a),0===a.F))return c.Ua=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Q(c,a.A&255),Q(c,a.A>>8&255),Q(c,a.A>>16&255),Q(c,a.A>>24&255),Q(c,a.Oa&255),Q(c,a.Oa>>8&255),Q(c,a.Oa>>16&255),Q(c,a.Oa>>24&255)):(Gi(c,a.A>>>16),Gi(c,a.A&65535));Ei(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ri={};Ri=function(){this.input=null;this.Oa=this.U=this.Na=0;this.output=null;this.cc=this.F=this.Ya=0;this.msg="";this.state=null;this.Kb=2;this.A=0};var Si=Object.prototype.toString;
function Ti(a){if(!(this instanceof Ti))return new Ti(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Ga:15,sd:8,strategy:0,Ea:""},a||{});a.raw&&0<a.Ga?a.Ga=-a.Ga:a.ed&&0<a.Ga&&16>a.Ga&&(a.Ga+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Ri;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ga,f=a.sd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Ci(b,-2);else{8===e&&(e=9);var k=new Pi;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.dc=e;k.T=1<<k.dc;k.Fa=k.T-1;k.Lb=f+7;k.Bb=1<<k.Lb;k.ta=k.Bb-1;k.va=~~((k.Lb+3-1)/3);k.window=new N.Pa(2*k.T);k.head=new N.pa(k.Bb);k.la=new N.pa(k.T);k.nb=1<<f+6;k.ea=4*k.nb;k.L=new N.Pa(k.ea);k.jb=1*k.nb;k.Pb=3*k.nb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Oa=b.cc=0;b.Kb=2;c=b.state;c.pending=0;c.ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ua=0;if(!Ai){d=Array(16);for(f=g=0;28>f;f++)for(Hh[f]=g,e=0;e<1<<zh[f];e++)Gh[g++]=
f;Gh[g-1]=f;for(f=g=0;16>f;f++)for(Ih[f]=g,e=0;e<1<<Ah[f];e++)Fh[g++]=f;for(g>>=7;30>f;f++)for(Ih[f]=g<<7,e=0;e<1<<Ah[f]-7;e++)Fh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Dh[2*e+1]=8,e++,d[8]++;for(;255>=e;)Dh[2*e+1]=9,e++,d[9]++;for(;279>=e;)Dh[2*e+1]=7,e++,d[7]++;for(;287>=e;)Dh[2*e+1]=8,e++,d[8]++;pi(Dh,287,d);for(e=0;30>e;e++)Eh[2*e+1]=5,Eh[2*e]=oi(e,5);Kh=new Jh(Dh,zh,257,286,15);Lh=new Jh(Eh,Ah,0,30,15);Mh=new Jh([],Bh,0,19,7);Ai=!0}c.Cb=new Nh(c.X,Kh);c.yb=new Nh(c.Ia,Lh);c.hc=new Nh(c.S,
Mh);c.V=0;c.P=0;qi(c);c=0}else c=Ci(b,-2);0===c&&(b=b.state,b.Jc=2*b.T,Di(b.head),b.Rb=Oi[b.level].qd,b.pc=Oi[b.level].dd,b.zc=Oi[b.level].td,b.yc=Oi[b.level].pd,b.j=0,b.Z=0,b.m=0,b.Y=0,b.H=b.aa=2,b.La=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(xh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.kb){var l;"string"===typeof a.kb?l=qh(a.kb):"[object ArrayBuffer]"===Si.call(a.kb)?l=new Uint8Array(a.kb):l=a.kb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=rh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(Di(l.head),l.j=0,l.Z=0,l.Y=0),c=new N.Pa(l.T),N.Qa(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Na;e=a.input;a.U=g;a.Na=0;a.input=f;for(Ii(l);3<=l.m;){f=l.j;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Fa]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.j=f;l.m=2;Ii(l)}l.j+=l.m;l.Z=l.j;l.Y=l.m;l.m=0;l.H=l.aa=2;l.La=0;a.Na=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(xh[b]);this.me=!0}}
Ti.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=qh(a):"[object ArrayBuffer]"===Si.call(a)?c.input=new Uint8Array(a):c.input=a;c.Na=0;c.U=c.input.length;do{0===c.F&&(c.output=new N.Pa(d),c.Ya=0,c.F=d);a=Qi(c,e);if(1!==a&&0!==a)return Ui(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Ea){var f=N.ac(c.output,c.Ya);b=f;f=f.length;if(65537>f&&(b.subarray&&ph||!b.subarray))b=
String.fromCharCode.apply(null,N.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.ac(c.output,c.Ya),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Ci(c,-2):(c.state=null,a=113===d?Ci(c,-3):0)):a=-2,Ui(this,a),this.ended=!0,0===a;2===e&&(Ui(this,0),c.F=0);return!0};
function Ui(a,b){0===b&&(a.result="string"===a.options.Ea?a.chunks.join(""):N.nc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Vi(a){this.name=a}
;var Wi=new Vi("rawColdConfigGroup");var Xi=new Vi("rawHotConfigGroup");function Yi(a){this.s=I(a)}
y(Yi,L);Yi.prototype.g=function(a){K(this,5,a)};function Zi(a){this.s=I(a)}
y(Zi,L);function $i(a){this.s=I(a)}
y($i,L);$i.ma=[2];function aj(a){this.s=I(a)}
y(aj,L);aj.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Rd(this,36);b=null==b?b:Number.isFinite(b)?b|0:void 0;return null!=b?b:a};
aj.prototype.setHomeGroupInfo=function(a){return J(this,$i,81,a)};
aj.ma=[9,66,32,86,100,101];function bj(a){this.s=I(a)}
y(bj,L);bj.prototype.getKey=function(){return ce(this,1)};
bj.prototype.ja=function(){return ce(this,Yd(this,cj,2))};
var cj=[2,3,4,5,6];function dj(a){this.s=I(a)}
y(dj,L);dj.ma=[15,26,28];function ej(a){this.s=I(a)}
y(ej,L);ej.ma=[5];function fj(a){this.s=I(a)}
y(fj,L);function gj(a){this.s=I(a)}
y(gj,L);gj.prototype.setSafetyMode=function(a){return ge(this,5,a)};
gj.ma=[12];function hj(a){this.s=I(a)}
y(hj,L);hj.ma=[12];var ij={le:"WEB_DISPLAY_MODE_UNKNOWN",he:"WEB_DISPLAY_MODE_BROWSER",je:"WEB_DISPLAY_MODE_MINIMAL_UI",ke:"WEB_DISPLAY_MODE_STANDALONE",ie:"WEB_DISPLAY_MODE_FULLSCREEN"};function jj(a){this.s=I(a)}
y(jj,L);jj.prototype.getKey=function(){return ce(this,1)};
jj.prototype.ja=function(){return ce(this,2)};function kj(a){this.s=I(a)}
y(kj,L);kj.ma=[4,5];function lj(a){this.s=I(a)}
y(lj,L);function mj(a){this.s=I(a)}
y(mj,L);var nj=[2,3,4,5];function oj(a){this.s=I(a)}
y(oj,L);function pj(a){this.s=I(a)}
y(pj,L);function qj(a){this.s=I(a)}
y(qj,L);function rj(a){this.s=I(a)}
y(rj,L);rj.ma=[10,17];function sj(a){this.s=I(a)}
y(sj,L);function tj(a){this.s=I(a)}
y(tj,L);function uj(a){this.s=I(a)}
y(uj,L);function vj(a){this.s=I(a,496)}
y(vj,L);
var wj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495];function xj(a){this.s=I(a)}
y(xj,L);function yj(a){this.s=I(a)}
y(yj,L);yj.prototype.getPlaylistId=function(){return de(this,2)};
var ee=[1,2];function zj(a){this.s=I(a)}
y(zj,L);zj.ma=[3];var Aj=D.window,Bj,Cj,Dj=(null==Aj?void 0:null==(Bj=Aj.yt)?void 0:Bj.config_)||(null==Aj?void 0:null==(Cj=Aj.ytcfg)?void 0:Cj.data_)||{};F("yt.config_",Dj);function Ej(){var a=arguments;1<a.length?Dj[a[0]]=a[1]:1===a.length&&Object.assign(Dj,a[0])}
function R(a,b){return a in Dj?Dj[a]:b}
function Fj(){return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Gj(){var a=Dj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Hj=[];function Ij(a){Hj.forEach(function(b){return b(a)})}
function Jj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Kj(b)}}:a}
function Kj(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ej("ERRORS",b));Ij(a)}
function Lj(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ej("ERRORS",f))}
;function S(a){a=Mj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=Mj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Mj(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Nj(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Oj=0;F("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Oj});var Pj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Qj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Pj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Qj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Qj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Qj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",nb);var Rj=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Rj);
function Sj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Tj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Uj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
var Uj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Vj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Sj(a,b,c,d);if(!e){e=++Rj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Qj(h);if(!me(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Qj(h);
h.currentTarget=a;return c.call(a,h)};
g=Jj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Uj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d]}}}
;function Wj(a,b){"function"===typeof a&&(a=Jj(a));return window.setTimeout(a,b)}
function Xj(a){"function"===typeof a&&(a=Jj(a));return window.setInterval(a,250)}
;var Yj=/^[\w.]*$/,Zj={q:!0,search_query:!0};function ak(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=bk(f[0]||""),h=bk(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?kb(k,h):c[g]=[k,h]}else c[g]=h}catch(q){var l=q,n=f[0],m=String(ak);l.args=[{key:n,value:f[1],query:a,method:ck===m?"unchanged":m}];Zj.hasOwnProperty(n)||Lj(l)}}return c}
var ck=String(ak);function dk(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function ek(a){"?"===a.charAt(0)&&(a=a.substring(1));return ak(a,"&")}
function fk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ek(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=ec(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function gk(a){if(!b)var b=window.location.href;var c=a.match($b)[1]||null,d=bc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?bc(b)===d&&(Number(b.match($b)[4]||null)||null)===(Number(a.match($b)[4]||null)||null):!0;return a}
function bk(a){return a&&a.match(Yj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hk(a){var b=ik;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=He;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ia){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?je:g;try{var h=g.history.length}catch(ia){h=0}e.u_his=h;var k;e.u_h=null==(k=je.screen)?void 0:k.height;var l;e.u_w=null==(l=je.screen)?void 0:l.width;var n;e.u_ah=null==(n=je.screen)?void 0:n.availHeight;var m;e.u_aw=
null==(m=je.screen)?void 0:m.availWidth;var q;e.u_cd=null==(q=je.screen)?void 0:q.colorDepth}catch(ia){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ia){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ia){}try{var C=h.innerWidth;var P=h.innerHeight}catch(ia){}try{var U=h.screenLeft;var Y=h.screenTop}catch(ia){}try{C=h.innerWidth,P=h.innerHeight}catch(ia){}try{var La=h.screen.availWidth;var Ca=h.screen.availTop}catch(ia){}p=[U,Y,p,t,La,Ca,u,z,C,P];t=b.g.top;try{var Ma=(t||window).document,ja=
"CSS1Compat"==Ma.compatMode?Ma.documentElement:Ma.body;var ra=(new ke(ja.clientWidth,ja.clientHeight)).round()}catch(ia){ra=new ke(-12245933,-12245933)}Ma=ra;ra={};var sa=void 0===sa?D:sa;ja=new Ff;"SVGElement"in sa&&"createElementNS"in sa.document&&ja.set(0);t=Fe();t["allow-top-navigation-by-user-activation"]&&ja.set(1);t["allow-popups-to-escape-sandbox"]&&ja.set(2);sa.crypto&&sa.crypto.subtle&&ja.set(3);"TextDecoder"in sa&&"TextEncoder"in sa&&ja.set(4);sa=Gf(ja);ra.bc=sa;ra.bih=Ma.height;ra.biw=
Ma.width;ra.brdim=p.join();b=b.h;b=(ra.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ra.wgl=!!je.WebGLRenderingContext,ra);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ik=new function(){var a=window.document;this.g=window;this.h=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return dk(hk(a))});Wa();var jk="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function kk(){if(!jk)return null;var a=jk();return"open"in a?a:null}
;var lk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(lk);var mk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},nk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(lk)),ok=!1;
function pk(a,b){b=void 0===b?{}:b;var c=gk(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in mk){var f=R(mk[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&bc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&R("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!bc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());
if(c||!bc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&bc(a)||(b["X-YouTube-Ad-Signals"]=dk(hk()));return b}
function qk(a){var b=window.location.search,c=bc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&gk(a)&&(c=document.location.hostname);var d=ac(a.match($b)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ek(b),f={};db(nk,function(g){e[g]&&(f[g]=e[g])});
return fk(a,f||{},!1)}
function rk(a,b){var c=b.format||"JSON";a=sk(a,b);var d=tk(a,b),e=!1,f=uk(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,m=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||m||q)n=vk(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};m=b.context||D;l?b.onSuccess&&b.onSuccess.call(m,k,n):b.onError&&b.onError.call(m,k,n);b.onFinish&&b.onFinish.call(m,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Wj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function sk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=fk(a,b||{},!0);return a}
function tk(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||bc(a)&&!b.withCredentials&&bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ek(e),rb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):ec(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!ok&&a&&"POST"!=b.method&&(ok=!0,Kj(Error("AJAX request with postData should use POST")));return e}
function vk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Lj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wk(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=xk(g)})}d&&yk(e);
return e}
function yk(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=tb();d=e?e.createHTML(d):d;a[c]=new Yb(d)}else yk(a[b])}}
function wk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xk(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function zk(a,b){b.method="POST";b.postParams||(b.postParams={});return rk(a,b)}
function uk(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Jj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=kk();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=qk(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=pk(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Ak=[{Sb:function(a){return"Cannot read property '"+a.key+"'"},
Db:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sb:function(a){return"Cannot call '"+a.key+"'"},
Db:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sb:function(a){return a.key+" is not defined"},
Db:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ck={Ca:[],za:[{ib:Bk,weight:500}]};function Bk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Dk(){this.za=[];this.Ca=[]}
var Ek;function Fk(){if(!Ek){var a=Ek=new Dk;a.Ca.length=0;a.za.length=0;Ck.Ca&&a.Ca.push.apply(a.Ca,Ck.Ca);Ck.za&&a.za.push.apply(a.za,Ck.za)}return Ek}
;var Gk=new M;function Hk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ik(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ik(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ik(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ik(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Jk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Kk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Hk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Kk(f+".ve",g,h,k):0;d+=f;d+=Kk(e,a[e],b,c);if(500<d)break}}else c[b]=Lk(a),d+=c[b].length;else c[b]=Lk(a),d+=c[b].length;return d}
function Kk(a,b,c,d){c+="."+a;a=Lk(b);d[c]=a;return c.length+a.length}
function Lk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Mk(){}
;function Nk(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Ok(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var Pk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Qk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Rk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Sk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Tk(){var a=D.navigator;return a?a.connection:void 0}
;function Uk(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Uk,Error);function Vk(){try{return Wk(),!0}catch(a){return!1}}
function Wk(){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new Uk("Datasync ID not set","unknown");}
;function Xk(){}
function Yk(a,b){return Ef.Ha(a,0,b)}
Xk.prototype.qa=function(a,b){return this.Ha(a,1,b)};
Xk.prototype.gb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Zk=T("web_emulated_idle_callback_delay",300),$k=1E3/60-3,al=[8,5,4,3,2,1,0];
function bl(a){a=void 0===a?{}:a;Xe.call(this);this.h=[];this.i={};this.eb=this.g=0;this.cb=this.u=!1;this.O=[];this.oa=this.fb=!1;for(var b=w(al),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.o=0;this.Qc=a.timeout||1;this.K=$k;this.G=0;this.sb=this.ud.bind(this);this.Pc=this.zd.bind(this);this.Mc=this.Rc.bind(this);this.Nc=this.fd.bind(this);this.Oc=this.vd.bind(this);this.ec=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.sb)}
y(bl,Xe);r=bl.prototype;r.gb=function(a){var b=Wa();cl(a);a=Wa()-b;this.u||(this.K-=a)};
r.Ha=function(a,b,c){++this.eb;if(10===b)return this.gb(a),this.eb;var d=this.eb;this.i[d]=a;this.u&&!c?this.O.push({id:d,priority:b}):(this.h[b].push(d),this.cb||this.u||(0!==this.g&&dl(this)!==this.G&&el(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function fl(a){a.O.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};el(a)}
function dl(a){if(a.h[8].length){if(a.oa)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.o;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function gl(a){var b=E("yt.logging.errors.log");b&&b(a)}
function cl(a){try{a()}catch(b){gl(b)}}
function hl(a){for(var b=w(al),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.fd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fb=!0;il(this,b);this.fb=!1};
r.zd=function(){il(this)};
r.Rc=function(){jl(this)};
r.vd=function(a){this.oa=!0;var b=dl(this);4===b&&b!==this.G&&(el(this),this.start());il(this,void 0,a);this.oa=!1};
r.ud=function(){document.hidden||jl(this);this.g&&(el(this),this.start())};
function jl(a){el(a);a.u=!0;for(var b=Wa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&cl(e)}kl(a);a.u=!1;hl(a)&&a.start();b=Wa()-b;a.K-=b}
function kl(a){for(var b=0,c=a.O.length;b<c;b++){var d=a.O[b];a.h[d.priority].push(d.id)}a.O.length=0}
function il(a,b,c){a.oa&&4===a.G&&a.g||el(a);a.u=!0;b=Wa()+(b||a.K);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){gl(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&cl(e);d=a.fb?0:1;d=a.o>d?a.o:d;if(!(Wa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&cl(c)}while(c&&Wa()<b)}a.u=!1;kl(a);a.K=$k;hl(a)&&a.start()}
r.start=function(){this.cb=!1;if(0===this.g)switch(this.G=dl(this),this.G){case 1:var a=this.Nc;this.g=this.ec?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Zk);break;case 2:this.g=window.setTimeout(this.Pc,this.Qc);break;case 3:this.g=window.requestAnimationFrame(this.Oc);break;case 4:this.g=window.setTimeout(this.Mc,0)}};
function el(a){if(a.g){switch(a.G){case 1:var b=a.g;a.ec?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){fl(this);el(this);this.ya&&document.removeEventListener("visibilitychange",this.sb);Xe.prototype.sa.call(this)};var ll=E("yt.scheduler.instance.timerIdMap_")||{},ml=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),nl=0,ol=0;function pl(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Aa)a=new bl(R("scheduler")||{}),F("ytglobal.schedulerInstanceInstance_",a);return a}
function ql(){rl();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Te(a),F("ytglobal.schedulerInstanceInstance_",null))}
function rl(){fl(pl());for(var a in ll)ll.hasOwnProperty(a)&&delete ll[Number(a)]}
function sl(a,b,c){if(!c)return c=void 0===c,-pl().Ha(a,b,c);var d=window.setTimeout(function(){var e=pl().Ha(a,b);ll[d]=e},c);
return d}
function tl(a){pl().gb(a)}
function ul(a){var b=pl();if(0>a)b.ba(-a);else{var c=ll[a];c?(b.ba(c),delete ll[a]):window.clearTimeout(a)}}
function vl(){wl()}
function wl(){window.clearTimeout(nl);pl().start()}
function xl(){var a=pl();el(a);a.cb=!0;window.clearTimeout(nl);nl=window.setTimeout(vl,ml)}
function yl(){window.clearTimeout(ol);ol=window.setTimeout(function(){zl(0)},ml)}
function zl(a){yl();var b=pl();b.o=a;b.start()}
function Al(a){yl();var b=pl();b.o>a&&(b.o=a,b.start())}
function Bl(){window.clearTimeout(ol);var a=pl();a.o=0;a.start()}
;function Cl(){Xk.apply(this,arguments)}
y(Cl,Xk);function Dl(){Cl.g||(Cl.g=new Cl);return Cl.g}
Cl.prototype.Ha=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Wj(a,c||0)};
Cl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Cl.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
var Ef=Dl();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",ql),F("yt.scheduler.instance.addJob",sl),F("yt.scheduler.instance.addImmediateJob",tl),F("yt.scheduler.instance.cancelJob",ul),F("yt.scheduler.instance.cancelAllJobs",rl),F("yt.scheduler.instance.start",wl),F("yt.scheduler.instance.pause",xl),F("yt.scheduler.instance.setPriorityThreshold",zl),F("yt.scheduler.instance.enablePriorityThreshold",Al),F("yt.scheduler.instance.clearPriorityThreshold",Bl),F("yt.scheduler.initialized",
!0));function El(a){var b=new fh;(b=(b.h=eh(b.g))?a?new lh(b,a):b:null)||(a=new gh(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new $g(a):null;this.h=document.domain||window.location.hostname}
El.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Bg(b))}catch(f){return}else e=escape(b);b=this.h;Pe.set(""+a,e,{Qb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
El.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Pe.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
El.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Pe.remove(""+a,"/",void 0===b?"youtube.com":b)};var Fl=function(){var a;return function(){a||(a=new El("ytidb"));return a}}();
function Gl(){var a;return null==(a=Fl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Hl=[],Il=!1;function Jl(a){Il||(Hl.push({type:"ERROR",payload:a}),10<Hl.length&&Hl.shift())}
function Kl(a,b){Il||(Hl.push({type:"EVENT",eventType:a,payload:b}),10<Hl.length&&Hl.shift())}
;function Ll(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ml(a){return a.substr(0,a.indexOf(":"))||a}
;var Nl=yc||Dc;var Ol={},Pl=(Ol.AUTH_INVALID="No user identifier specified.",Ol.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ol.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ol.MISSING_INDEX="Index not created.",Ol.MISSING_OBJECT_STORES="Object stores not created.",Ol.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ol.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ol.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ol.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ol.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ol.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ol.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ol),Ql={},Rl=(Ql.AUTH_INVALID="ERROR",Ql.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ql.EXPLICIT_ABORT="IGNORED",Ql.IDB_NOT_SUPPORTED="ERROR",Ql.MISSING_INDEX=
"WARNING",Ql.MISSING_OBJECT_STORES="ERROR",Ql.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ql.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ql.QUOTA_EXCEEDED="WARNING",Ql.QUOTA_MAYBE_EXCEEDED="WARNING",Ql.UNKNOWN_ABORT="WARNING",Ql.INCOMPATIBLE_DB_VERSION="WARNING",Ql),Sl={},Tl=(Sl.AUTH_INVALID=!1,Sl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Sl.EXPLICIT_ABORT=!1,Sl.IDB_NOT_SUPPORTED=!1,Sl.MISSING_INDEX=!1,Sl.MISSING_OBJECT_STORES=!1,Sl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Sl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Sl.QUOTA_EXCEEDED=!1,Sl.QUOTA_MAYBE_EXCEEDED=!0,Sl.UNKNOWN_ABORT=!0,Sl.INCOMPATIBLE_DB_VERSION=!1,Sl);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Pl[a]:c;d=void 0===d?Rl[a]:d;e=void 0===e?Tl[a]:e;Uk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,V.prototype)}
y(V,Uk);function Ul(a,b){V.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Pl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ul.prototype)}
y(Ul,V);function Vl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Vl.prototype)}
y(Vl,Error);var Wl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Xl(a,b,c,d){b=Ml(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof V)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new V("QUOTA_EXCEEDED",a);if(Ec&&"UnknownError"===e.name)return new V("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Vl)return new V("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Wl.some(function(f){return e.message.includes(f)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new V("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",we:e.name})];e.level="WARNING";return e}
function Yl(a,b,c){var d=Gl();return new V("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Zl(a){if(!a)throw Error();throw a;}
function $l(a){return a}
function am(a){this.g=a}
function bm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
bm.resolve=function(a){return new bm(new am(function(b,c){a instanceof bm?a.then(b,c):b(a)}))};
bm.reject=function(a){return new bm(new am(function(b,c){c(a)}))};
bm.prototype.then=function(a,b){var c=this,d=null!=a?a:$l,e=null!=b?b:Zl;return new bm(new am(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){cm(c,c,d,f,g)}),c.h.push(function(){dm(c,c,e,f,g)})):"FULFILLED"===c.state.status?cm(c,c,d,f,g):"REJECTED"===c.state.status&&dm(c,c,e,f,g)}))};
function em(a,b){a.then(void 0,b)}
function cm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof bm?fm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof bm?fm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof bm?fm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function gm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function hm(a){return new Promise(function(b,c){gm(a,b,c)})}
function im(a){return new bm(new am(function(b,c){gm(a,b,c)}))}
;function jm(a,b){return new bm(new am(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var km=window,X=km.ytcsi&&km.ytcsi.now?km.ytcsi.now:km.performance&&km.performance.timing&&km.performance.now&&km.performance.timing.navigationStart?function(){return km.performance.timing.navigationStart+km.performance.now()}:function(){return(new Date).getTime()};function lm(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(X());this.h=!1}
r=lm.prototype;r.add=function(a,b,c){return mm(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return mm(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function nm(a,b,c){a=a.g.createObjectStore(b,c);return new om(a)}
r.delete=function(a,b){return mm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return mm(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function pm(a,b,c){return mm(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return im(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function mm(a,b,c,d){var e,f,g,h,k,l,n,m,q,p,t,u;return B(function(z){switch(z.g){case 1:var C={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?C.mode=c:Object.assign(C,c);e=C;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(X());va(z,5);l=a.g.transaction(b,e.mode);C=new qm(l);C=rm(C,d);return A(z,C,7);case 7:return n=z.h,m=Math.round(X()),sm(a,k,m,g,void 0,b.join(),e),z.return(n);case 5:q=wa(z);p=Math.round(X());t=Xl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof V&&!t.g)||g>=f)sm(a,k,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function sm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Kl("QUOTA_EXCEEDED",{dbName:Ml(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Kl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),tm(a,!1,d,f,b,g.tag),Jl(e)):tm(a,!0,d,f,b,g.tag)}
function tm(a,b,c,d,e,f){Kl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function om(a){this.g=a}
r=om.prototype;r.add=function(a,b){return im(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return im(this.g.clear()).then(function(){})};
function um(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function vm(a,b){return wm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?vm(this,a):im(this.g.delete(a))};
r.get=function(a){return im(this.g.get(a))};
r.index=function(a){try{return new xm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Vl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function wm(a,b,c){a=a.g.openCursor(b.query,b.direction);return ym(a).then(function(d){return jm(d,c)})}
function qm(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=V;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function rm(a,b){var c=new Promise(function(d,e){try{em(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
qm.prototype.abort=function(){this.g.abort();this.h=!0;throw new V("EXPLICIT_ABORT");};
qm.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new om(a),this.i.set(a,b));return b};
function xm(a){this.g=a}
r=xm.prototype;r.delete=function(a){return zm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return im(this.g.get(a))};
r.getKey=function(a){return im(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function zm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ym(a).then(function(d){return jm(d,c)})}
function Am(a,b){this.request=a;this.cursor=b}
function ym(a){return im(a).then(function(b){return b?new Am(a,b):null})}
r=Am.prototype;r.advance=function(a){this.cursor.advance(a);return ym(this.request)};
r.continue=function(a){this.cursor.continue(a);return ym(this.request)};
r.delete=function(){return im(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return im(this.cursor.update(a))};function Bm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new lm(g.result,{closed:m}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Tc,k=c.Uc,l=c.yd,n=c.upgrade,m=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Kl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Ml(a)});var t=f(),u=new qm(g.transaction);n&&
n(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Kl("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ml(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Cm(a,b,c){c=void 0===c?{}:c;return Bm(a,b,c)}
function Dm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Tc)&&c.addEventListener("blocked",function(){e()}),A(g,hm(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),Xl(f,a,"",-1);})}
;function Em(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.l=0}
Em.prototype.h=function(a,b,c){c=void 0===c?{}:c;return Cm(a,b,c)};
Em.prototype.delete=function(a){a=void 0===a?{}:a;return Dm(this.name,a)};
function Fm(a,b){return new V("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Gm(a,b){if(!b)throw Yl("openWithToken",Ml(a.name));return Hm(a)}
function Hm(a){function b(){var f,g,h,k,l,n,m,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:for(var z=h=u.h,C=a.options,P=[],U=w(Object.keys(C.Za)),Y=U.next();!Y.done;Y=U.next()){Y=Y.value;var La=C.Za[Y],Ca=void 0===La.wd?Number.MAX_VALUE:La.wd;!(z.g.version>=La.hb)||z.g.version>=Ca||z.g.objectStoreNames.contains(Y)||P.push(Y)}k=P;if(0===k.length){u.B(5);break}l=Object.keys(a.options.Za);n=h.objectStoreNames();
if(a.o<T("ytidb_reopen_db_retries",0))return a.o++,h.close(),Jl(new V("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:n})),u.return(b());if(!(a.l<T("ytidb_remake_db_retries",1))){u.B(6);break}a.l++;return A(u,a.delete(),7);case 7:return Jl(new V("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:n})),u.return(b());case 6:throw new Ul(n,l);case 5:return u.return(h);case 2:m=wa(u);if(m instanceof DOMException?
"VersionError"!==m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"!==m.name:!(m instanceof Object&&"message"in m)||"An attempt was made to open a database using a lower version than the existing version."!==m.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,Fm(a,p);return u.return(q);case 8:throw c(),m instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(m.stack=m.stack+"\n"+g.substring(g.indexOf("\n")+1)),Xl(m,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Fm(a);if(a.g)return a.g;var d={Uc:function(f){f.close()},
closed:c,yd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Im=new Em("YtIdbMeta",{Za:{databases:{hb:1}},upgrade:function(a,b){b(1)&&nm(a,"databases",{keyPath:"actualName"})}});
function Jm(a,b){var c;return B(function(d){if(1==d.g)return A(d,Gm(Im,b),2);c=d.h;return d.return(mm(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return im(f.g.put(a,void 0)).then(function(){})})}))})}
function Km(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Gm(Im,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Lm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Gm(Im,b),2)):3!=e.g?(d=e.h,A(e,mm(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return wm(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function Mm(a){return Lm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Nm,Om=new function(){}(new function(){});
function Pm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Gl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Nl)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||mc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Jm(d,Om),4);case 4:return A(e,Km("yt-idb-test-do-not-use",Om),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Qm(){if(void 0!==Nm)return Nm;Il=!0;return Nm=Pm().then(function(a){Il=!1;var b;if(null!=(b=Fl())&&b.g){var c;b={hasSucceededOnce:(null==(c=Gl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Fl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Rm(){return E("ytglobal.idbToken_")||void 0}
function Sm(){var a=Rm();return a?Promise.resolve(a):Qm().then(function(b){(b=b?Om:void 0)&&F("ytglobal.idbToken_",b);return b})}
;new Cg;function Tm(a){if(!Vk())throw a=new V("AUTH_INVALID",{dbName:a}),Jl(a),a;var b=Wk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Um(a,b,c,d){var e,f,g,h,k,l;return B(function(n){switch(n.g){case 1:return f=null!=(e=Error().stack)?e:"",A(n,Sm(),2);case 2:g=n.h;if(!g)throw h=Yl("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Jl(h),h;Ll(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Tm(a);va(n,3);return A(n,Jm(k,g),5);case 5:return A(n,Cm(k.actualName,b,d),6);case 6:return n.return(n.h);case 3:return l=wa(n),va(n,7),A(n,Km(k.actualName,g),9);case 9:n.g=
8;n.o=0;break;case 7:wa(n);case 8:throw l;}})}
function Vm(a,b,c){c=void 0===c?{}:c;return Um(a,b,!1,c)}
function Wm(a,b,c){c=void 0===c?{}:c;return Um(a,b,!0,c)}
function Xm(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Sm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Ll(a);d=Tm(a);return A(e,Dm(d.actualName,b),3)}return A(e,Km(d.actualName,c),0)})}
function Kn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,Dm(d.actualName,b),2):A(e,Km(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ln(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Sm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Ll("LogsDatabaseV2");return A(d,Mm(b),3)}c=d.h;return A(d,Kn(c,a,b),0)})}
function Mn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Sm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Ll(a);return A(d,Dm(a,b),3)}return A(d,Km(a,c),0)})}
;function Nn(a,b){Em.call(this,a,b);this.options=b;Ll(a)}
y(Nn,Em);function On(a,b){var c;return function(){c||(c=new Nn(a,b));return c}}
Nn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Jb?Wm:Vm)(a,b,Object.assign({},c))};
Nn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Jb?Mn:Xm)(this.name,a)};
function Pn(a,b){return On(a,b)}
;var Qn={},Rn=Pn("ytGcfConfig",{Za:(Qn.coldConfigStore={hb:1},Qn.hotConfigStore={hb:1},Qn),Jb:!1,upgrade:function(a,b){b(1)&&(um(nm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),um(nm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Sn(a){return Gm(Rn(),a)}
function Tn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:X()},A(g,Sn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,pm(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Un(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},A(h,Sn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,pm(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Vn(a){var b,c;return B(function(d){return 1==d.g?A(d,Sn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,mm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return zm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Wn(a){var b,c;return B(function(d){return 1==d.g?A(d,Sn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,mm(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return zm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Xn(){Xe.call(this);this.h=[];this.g=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],F("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Xn,Xe);Xn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Xe.prototype.sa.call(this)};function Yn(){this.h=0;this.i=new Xn}
function Zn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!S("start_client_gcf")){g.B(0);break}c&&(a.l=c,F("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=Rm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Wn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,Tn(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function $n(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!S("start_client_gcf"))return h.B(0);a.coldHashData=b;F("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Rm())?c?h.B(4):A(h,Vn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Un(c,b,g,d),0)})}
Yn.prototype.g=function(a){this.hotHashData=a;F("yt.gcf.config.hotHashData",this.hotHashData||null)};function ao(){return"INNERTUBE_API_KEY"in Dj&&"INNERTUBE_API_VERSION"in Dj}
function bo(){return{gd:R("INNERTUBE_API_KEY"),hd:R("INNERTUBE_API_VERSION"),Mb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sc:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jd:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),uc:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),wc:R("INNERTUBE_CONTEXT_HL"),vc:R("INNERTUBE_CONTEXT_GL"),kd:R("INNERTUBE_HOST_OVERRIDE")||"",md:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ld:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function co(a){var b={client:{hl:a.wc,gl:a.vc,clientName:a.sc,clientVersion:a.uc,configInfo:a.Mb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Nj();0<c.length&&(b.request={internalExperimentFlags:c});eo(a,void 0,b);fo(void 0,b);go(void 0,b);ho(a,void 0,b);io(void 0,b);S("start_client_gcf")&&jo(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&
(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(ek(R("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function eo(a,b,c){a=a.sc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Zd(b,Zi,96)||new Zi;var d=Nk();d=Object.keys(ij).indexOf(d);d=-1===d?null:d;null!==d&&ge(c,3,d);J(b,Zi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Nk())}
function fo(a,b){var c=E("yt.embedded_player.embed_url");c&&(a?(b=Zd(a,ej,7)||new ej,K(b,4,c),J(a,ej,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function go(a,b){var c;if(S("web_log_memory_total_kbytes")&&(null==(c=D.navigator)?0:c.deviceMemory)){var d;c=null==(d=D.navigator)?void 0:d.deviceMemory;a?Td(a,95,Bd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function ho(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Zd(b,Yi,62))?d:new Yi;K(c,6,a.appInstallData);J(b,Yi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function io(a,b){a:{var c=Tk();if(c){var d=Pk[c.type||"unknown"]||"CONN_UNKNOWN";c=Pk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?ge(a,61,Qk[d]):b&&(b.client.connectionType=d));S("web_log_effective_connection_type")&&(d=Tk(),d=null!=d&&d.effectiveType?Sk.hasOwnProperty(d.effectiveType)?Sk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?ge(a,94,Rk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function ko(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.oe||R("AUTHORIZATION");if(!b)if(a)b="Bearer "+E("gapi.auth.getToken")().ne;else{Mk.g||(Mk.g=new Mk);a={};if(c=Se([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Dj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Dj&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));S("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function jo(a,b){if(!Yn.g){var c=new Yn;Yn.g=c}c=Yn.g;var d=X()-c.h;if(0!==c.h&&d<T("send_config_hash_timer"))c=void 0;else{d=E("yt.gcf.config.coldConfigData");var e=E("yt.gcf.config.hotHashData"),f=E("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=X());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Zd(a,Yi,62))?g:new Yi;K(b,1,c);K(b,3,d);b.g(e);J(a,Yi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var lo="undefined"!==typeof TextEncoder?new TextEncoder:null,mo=lo?function(a){return lo.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var no=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.rb;M.prototype.publish=M.prototype.ab;M.prototype.clear=M.prototype.clear;F("ytPubsub2Pubsub2Instance",no);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function oo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ce:a,Be:b},(b=E("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var po=void 0,qo=void 0;function ro(){if(!qo){var a=R("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=tb();a=b?b.createScriptURL(a):a;a=new xb(a,yb)}else a=null;qo=a}else qo=null}return qo||void 0}
function so(){var a=ro();if(!po&&void 0!==a){var b=Worker;a instanceof xb&&a.constructor===xb?a=a.g:(Ka(a),a="type_error:TrustedResourceUrl");po=new b(a,void 0)}return po}
;var to=T("max_body_size_to_compress",5E5),uo=T("min_body_size_to_compress",500),vo=!0,wo=0,xo=0,yo=T("compression_performance_threshold_lr",250),zo=T("slow_compressions_before_abandon_count",4),Ao=!1,Bo=new Map,Co=1,Do=!0;function Eo(){if("function"===typeof Worker&&ro()&&!Ao){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Bo.get(c.key);d&&(Fo(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Bo.delete(c.key))}},b=so();
b&&(b.addEventListener("message",a),b.onerror=function(){Bo.clear()},Ao=!0)}}
function Go(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:X(),ticks:{},infos:{}};if(vo)try{try{var g=(new Blob(b.split(""))).size}catch(n){Lj(n),g=null}if(null!=g&&(g>to||g<uo))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Do||!S("initial_gzip_use_main_thread"))){Ao||Eo();var h=so();if(h&&!e){Bo.set(Co,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Co});Co++;return}}var k=mo(b);b=(b=void 0,{});b.ed=!0;var l=new Ti(b);
l.push(k,!0);if(l.err)throw l.msg||xh[l.err];Fo(l.result,f,a,c,d)}}catch(n){Lj(n),d(a,c)}else d(a,c)}
function Fo(a,b,c,d,e){Do=!1;var f=X();b.ticks.gelc=f;xo++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=yo&&(wo++,S("abandon_compression_after_N_slow_zips")?xo===T("compression_disable_point")&&wo>zo&&(vo=!1):vo=!1);S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||oo("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Ho(a){a=Object.assign({},a);delete a.Authorization;var b=Se();if(b){var c=new ng;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Hc(c.digest(),3)}return a}
;var Io;function Jo(){Io||(Io=new El("yt.innertube"));return Io}
function Ko(a,b,c,d){if(d)return null;d=Jo().get("nextId",!0)||1;var e=Jo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ho(c),requestTime:Math.round(X())};Jo().set("nextId",d+1,86400,!0);Jo().set("requests",e,86400,!0);return d}
function Lo(a){var b=Jo().get("requests",!0)||{};delete b[a];Jo().set("requests",b,86400,!0)}
function Mo(a){var b=Jo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=Ho(ko(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),No(a,d.method,e,{}));delete b[c]}}Jo().set("requests",b,86400,!0)}}
;function Oo(a){this.ub=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Sa=function(){};
this.now=Date.now;this.lb=!1;var b;this.Ic=null!=(b=a.Ic)?b:100;var c;this.Gc=null!=(c=a.Gc)?c:1;var d;this.Ec=null!=(d=a.Ec)?d:2592E6;var e;this.Dc=null!=(e=a.Dc)?e:12E4;var f;this.Fc=null!=(f=a.Fc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.zb=!!a.zb;var h;this.xb=null!=(h=a.xb)?h:.1;var k;this.Fb=null!=(k=a.Fb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Sa&&(this.Sa=a.Sa);a.lb&&(this.lb=a.lb);a.ub&&(this.ub=a.ub);this.J=a.J;this.ha=a.ha;this.N=a.N;this.R=a.R;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Vb=a.Vb;Po(this)&&(!this.J||this.J("networkless_logging"))&&Qo(this)}
function Qo(a){Po(a)&&!a.lb&&(a.g=!0,a.zb&&Math.random()<=a.xb&&a.N.Vc(a.I),Ro(a),a.R.ca()&&a.qb(),a.R.Ka(a.Yb,a.qb.bind(a)),a.R.Ka(a.Vb,a.ic.bind(a)))}
r=Oo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Po(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&So(c,d)}).catch(function(e){So(c,d);
To(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Po(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){To(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
To(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Po(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ra(d.id,c.I):e=!0;c.R.Ma&&c.J&&c.J("vss_network_hint")&&c.R.Ma(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ra(d.id,c.I)}).catch(function(g){To(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.qb=function(){var a=this;if(!Po(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.oc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,So(a,b),3):(a.ic(),c.return());a.h&&(a.h=0,a.qb());c.g=0})},this.Ic))};
r.ic=function(){this.ha.ba(this.h);this.h=0};
function So(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Po(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.od(b.id,a.I),3);case 3:(c=d.h)||a.Sa(Error("The request cannot be found in the database."));case 2:if(Uo(a,b,a.Ec)){d.B(4);break}a.Sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Ra(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=Vo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Ra(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Vo(a,b){if(!Po(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(n){switch(n.g){case 1:g=Wo(f);(h=Xo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Fb)){n.B(2);break}if(!a.R.Ib){n.B(3);break}return A(n,a.R.Ib(),3);case 3:if(a.R.ca()){n.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return A(n,a.N.Zb(b.id,a.I,!1),6);case 6:return n.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Fb)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Gc?A(n,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(n,a.N.Ra(b.id,a.I),8);case 12:a.ha.qa(function(){a.R.ca()&&a.qb()},a.Fc);
case 8:c(e,f),n.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Ra(b.id,a.I),2);a.R.Ma&&a.J&&a.J("vss_network_hint")&&a.R.Ma(!0);d(e,f);h.g=0})};
return b}
function Uo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ro(a){if(!Po(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.oc("QUEUED",a.I).then(function(b){b&&!Uo(a,b,a.Dc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);Ro(a);c.g=0})}):a.R.ca()&&a.qb()})}
function To(a,b){a.Kc&&!a.R.ca()?a.Kc(b):a.handleError(b)}
function Po(a){return!!a.I||a.ub}
function Wo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Xo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Yo;
function Zo(){if(Yo)return Yo();var a={};Yo=Pn("LogsDatabaseV2",{Za:(a.LogsRequestsStore={hb:2},a),Jb:!1,upgrade:function(b,c,d){c(2)&&nm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),um(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Yo()}
;function $o(a){return Gm(Zo(),a)}
function ap(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,$o(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,pm(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=X();bp(c);return g.return(f)})}
function cp(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,$o(b),2);if(3!=l.g)return d=l.h,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,mm(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(n){return zm(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(m){m.ja()&&(k=m.ja(),"NEW"===a&&(k.status="QUEUED",
m.update(k)))})}),3);
c.ticks.tc=X();bp(c);return l.return(k)})}
function dp(a,b){var c;return B(function(d){if(1==d.g)return A(d,$o(b),2);c=d.h;return d.return(mm(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",im(f.g.put(g,void 0)).then(function(){return g})})}))})}
function ep(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,$o(b),2);e=f.h;return f.return(mm(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),im(h.g.put(k,void 0)).then(function(){return k})):bm.resolve(void 0)})}))})}
function fp(a,b){var c;return B(function(d){if(1==d.g)return A(d,$o(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function gp(a){var b,c;return B(function(d){if(1==d.g)return A(d,$o(a),2);b=d.h;c=X()-2592E6;return A(d,mm(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return wm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function hp(){B(function(a){return A(a,Ln(),0)})}
function bp(a){S("nwl_csi_killswitch")||oo("networkless_performance",a,{sampleRate:1})}
;var ip={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495};var jp={},kp=Pn("ServiceWorkerLogsDatabase",{Za:(jp.SWHealthLog={hb:1},jp),Jb:!0,upgrade:function(a,b){b(1)&&um(nm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function lp(a){return Gm(kp(),a)}
function mp(a){var b,c;B(function(d){if(1==d.g)return A(d,lp(a),2);b=d.h;c=X()-2592E6;return A(d,mm(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return wm(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function np(a){var b;return B(function(c){if(1==c.g)return A(c,lp(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var op={},pp=0;function qp(a){var b=new Image,c=""+pp++;op[c]=b;b.onload=b.onerror=function(){delete op[c]};
b.src=a}
;function rp(){this.g=new Map;this.h=!1}
function sp(){if(!rp.g){var a=E("yt.networkRequestMonitor.instance")||new rp;F("yt.networkRequestMonitor.instance",a);rp.g=a}return rp.g}
rp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
rp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
rp.prototype.removeParams=function(a){return a.split("?")[0]};
rp.prototype.removeParams=rp.prototype.removeParams;rp.prototype.isEndpointCFR=rp.prototype.isEndpointCFR;rp.prototype.requestComplete=rp.prototype.requestComplete;rp.getInstance=sp;var tp;function up(){tp||(tp=new El("yt.offline"));return tp}
function vp(a){if(S("offline_error_handling")){var b=up().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);up().set("errors",b,2592E3,!0)}}
;function Z(){xf.call(this);var a=this;this.i=!1;this.h=Df();this.h.Ka("networkstatus-online",function(){if(a.i&&S("offline_error_handling")){var b=up().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Uk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Kj(d)}up().set("errors",{},2592E3,!0)}}})}
y(Z,xf);function wp(){if(!Z.g){var a=E("yt.networkStatusManager.instance")||new Z;F("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Ma=function(a){this.h.h=a};
r.cd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Yc=function(){this.i=!0};
r.Ka=function(a,b){return this.h.Ka(a,b)};
r.Ib=function(a){a=Bf(this.h,a);a.then(function(b){S("use_cfr_monitor")&&sp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ib;Z.prototype.listen=Z.prototype.Ka;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Ma;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=wp;function xp(a){a=void 0===a?{}:a;xf.call(this);var b=this;this.h=this.u=0;this.i=wp();var c=E("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Hb?(this.Hb=a.Hb,c("networkstatus-online",function(){yp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){yf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yf(b,"publicytnetworkstatus-offline")})))}
y(xp,xf);xp.prototype.ca=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
xp.prototype.Ma=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
xp.prototype.Ib=function(a){var b=this,c;return B(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return S("skip_network_check_if_cfr")&&sp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ma((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function yp(a,b){a.Hb?a.h?(Ef.ba(a.u),a.u=Ef.qa(function(){a.o!==b&&(yf(a,b),a.o=b,a.h=X())},a.Hb-(X()-a.h))):(yf(a,b),a.o=b,a.h=X()):yf(a,b)}
;var zp;function Ap(){var a=Oo.call;zp||(zp=new xp({se:!0,re:!0}));a.call(Oo,this,{N:{Vc:gp,Ra:fp,oc:cp,od:dp,Zb:ep,set:ap},R:zp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Lj(new Uk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Kj(b)},
Sa:Lj,sendFn:Bp,now:X,Kc:vp,ha:Dl(),Yb:"publicytnetworkstatus-online",Vb:"publicytnetworkstatus-offline",zb:!0,xb:.1,Fb:T("potential_esf_error_limit",10),J:S,lb:!(Vk()&&"www.youtube-nocookie.com"!==bc(document.location.toString()))});this.i=new Cg;S("networkless_immediately_drop_all_requests")&&hp();Mn("LogsDatabaseV2")}
y(Ap,Oo);function Cp(){var a=E("yt.networklessRequestController.instance");a||(a=new Ap,F("yt.networklessRequestController.instance",a),S("networkless_logging")&&Sm().then(function(b){a.I=b;Qo(a);a.i.resolve();a.zb&&Math.random()<=a.xb&&a.I&&mp(a.I);S("networkless_immediately_drop_sw_health_store")&&Dp(a)}));
return a}
Ap.prototype.writeThenSend=function(a,b){b||(b={});Vk()||(this.g=!1);Oo.prototype.writeThenSend.call(this,a,b)};
Ap.prototype.sendThenWrite=function(a,b,c){b||(b={});Vk()||(this.g=!1);Oo.prototype.sendThenWrite.call(this,a,b,c)};
Ap.prototype.sendAndWrite=function(a,b){b||(b={});Vk()||(this.g=!1);Oo.prototype.sendAndWrite.call(this,a,b)};
Ap.prototype.awaitInitialization=function(){return this.i.promise};
function Dp(a){var b;B(function(c){if(!a.I)throw b=Yl("clearSWHealthLogsDb"),b;return c.return(np(a.I).catch(function(d){a.handleError(d)}))})}
function Bp(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Ep(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)uk(a,void 0,"POST",f);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)uk(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.i&&k.h||k.l){var l=ac(a.match($b)[5]||null);var n=!(!l||!l.endsWith("/aclk")||"1"!==gc(a,"ri"));break b}}catch(q){}n=!1}if(n){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var m=!0;break b}}catch(q){}m=!1}c=m?!0:!1}else c=!1;c||qp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Go(a,b.postBody,b,rk,d)):Go(a,JSON.stringify(b.postParams),
b,zk,d):rk(a,b)}
function Ep(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){sp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){sp().requestComplete(a,!0);d(e,f)}}
;var Fp=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",Fp);function Gp(a){var b=this;this.config_=null;a?this.config_=a:ao()&&(this.config_=bo());Yk(function(){Mo(b)},5E3)}
Gp.prototype.isReady=function(){!this.config_&&ao()&&(this.config_=bo());return!!this.config_};
function No(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Ko(b,c,l,k)),u)){var z=g.onSuccess,C=g.onFetchSuccess;g.onSuccess=function(Y,La){Lo(u);z(Y,La)};
c.onFetchSuccess=function(Y,La){Lo(u);C(Y,La)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Cp().writeThenSend(p,g):Cp().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));Go(p,U,g,rk,P)}else Go(p,JSON.stringify(g.postParams),g,zk,P)}else S("web_all_payloads_via_jspb")?rk(p,g):zk(p,g)}catch(Y){if("InvalidAccessError"==Y.name)u&&(Lo(u),u=0),Lj(Error("An extension is blocking network request."));else throw Y;}u&&Yk(function(){Mo(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Lj(new Uk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Uk("innertube xhrclient not ready",b,c,d);Kj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.kd)&&(h=f);var k=a.config_.md||!1,l=ko(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.hd+"/"+b,m={alt:"json"},q=a.config_.ld&&f;q=q&&f.startsWith("Bearer");q||(m.key=a.config_.gd);var p=fk(""+h+n,m||{},!0);E("ytNetworklessLoggingInitializationOptions")&&
Fp.isNwlInitialized?Qm().then(function(t){e(t)}):e(!1)}
;function Hp(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ip=D.ytPubsubPubsubInstance||new M,Jp=D.ytPubsubPubsubSubscribedKeys||{},Kp=D.ytPubsubPubsubTopicToKeys||{},Lp=D.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.rb;M.prototype.publish=M.prototype.ab;M.prototype.clear=M.prototype.clear;F("ytPubsubPubsubInstance",Ip);F("ytPubsubPubsubTopicToKeys",Kp);F("ytPubsubPubsubIsSynchronous",Lp);F("ytPubsubPubsubSubscribedKeys",Jp);var Mp=Symbol("injectionDeps");function Np(){this.key=Yn}
function Op(){this.h=new Map;this.g=new Map}
Op.prototype.resolve=function(a){return a instanceof Np?Pp(this,a.key,[],!0):Pp(this,a,[])};
function Pp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Cd)var e=d.Cd;else if(d.Bd)e=d[Mp]?Qp(a,d[Mp],c):[],e=d.Bd.apply(d,x(e));else if(d.Ad){e=d.Ad;var f=e[Mp]?Qp(a,e[Mp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ae||a.g.set(b,e);return e}
function Qp(a,b,c){return b?b.map(function(d){return d instanceof Np?Pp(a,d.key,c,!0):Pp(a,d,c)}):[]}
;var Rp;function Sp(){Rp||(Rp=new Op);return Rp}
;var Tp=window;function Up(){var a,b;return"h5vcc"in Tp&&(null==(a=Tp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Tp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Tp&&Tp.performance.mark&&Tp.performance.measure?2:0}
function Vp(a){switch(Up()){case 1:Tp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Tp.performance.mark(a+"-start");break;case 0:break;default:xe()}}
function Wp(a){switch(Up()){case 1:Tp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Tp.performance.mark(c);Tp.performance.measure(a,b,c);break;case 0:break;default:xe()}}
;var Xp=S("web_enable_lifecycle_monitoring")&&0!==Up(),Yp=S("web_enable_lifecycle_monitoring");function Zp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Dl():d;this.l=c;this.h=d;this.i=new Cg;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={Eb:void 0,Ja:a.Ja},a.Ja++)a.Eb=this.g[a.Ja],c=function(e){return function(){e.Eb.Ob();b.g[e.Ja].Gb=!0;b.g.every(function(f){return!0===f.Gb})&&b.i.resolve()}}(a),d=this.h.Ha(c,$p(this,a.Eb)),this.g[a.Ja]=Object.assign({},a.Eb,{Ob:c,
jobId:d})}
function aq(a){var b=Array.from(a.g.keys()).sort(function(d,e){return $p(a,a.g[e])-$p(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Gb||(a.h.ba(c.jobId),a.h.Ha(c.Ob,10))}
Zp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Gb||this.h.ba(b.jobId),b.Gb=!0;this.i.resolve()};
function $p(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function bq(a){this.state=a;this.i=[];this.o=void 0;this.G={};Xp&&Vp(this.state)}
bq.prototype.install=function(a){this.i.push(a);return this};
function cq(a){Xp&&Wp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Ea}):d.from===a.state&&"none"===d.Ea});
if(b){a.h&&(aq(a.h),a.h=void 0);Yp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Xp&&Vp(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(dq(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function dq(a,b){var c=b.filter(function(e){return 10===eq(a,e)}),d=b.filter(function(e){return 10!==eq(a,e)});
return a.G.ze?function(){var e=Ga.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ga.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
bq.prototype.ya=function(a){for(var b=Ga.apply(1,arguments),c=Dl(),d=w(a),e=d.next(),f={};!e.done;f={mb:void 0},e=d.next())f.mb=e.value,c.gb(function(g){return function(){fq(g.mb.name);g.mb.ib.apply(g.mb,x(b));gq(g.mb.name)}}(f))};
bq.prototype.oa=function(a){var b=Ga.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=Dl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Va=e.value;f.tb=void 0;g=function(k){return function(){fq(k.Va.name);var l=k.Va.ib.apply(k.Va,x(b));"function"===typeof(null==l?void 0:l.then)?k.tb=l.then(function(){gq(k.Va.name)}):gq(k.Va.name)}}(f);
c.gb(g);return f.tb?A(h,f.tb,3):h.B(3)}f={Va:void 0,tb:void 0};e=d.next();return h.B(2)})};
bq.prototype.u=function(a){var b=Ga.apply(1,arguments),c=this,d=a.map(function(e){return{Ob:function(){fq(e.name);e.ib.apply(e,x(b));gq(e.name)},
priority:eq(c,e)}});
d.length&&(this.h=new Zp(d))};
function eq(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function fq(a){Xp&&a&&Vp(a)}
function gq(a){Xp&&a&&Wp(a)}
da.Object.defineProperties(bq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function hq(a){bq.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ea:"application_navigating",action:this.K},{from:"application_navigating",Ea:"none",action:this.O},{from:"application_navigating",Ea:"application_navigating",action:function(){}},
{from:"none",Ea:"none",action:function(){}}]}
var iq;y(hq,bq);hq.prototype.K=function(a,b){var c=this;this.g=Yk(function(){"application_navigating"===c.l&&cq(c)},5E3);
a(null==b?void 0:b.event)};
hq.prototype.O=function(a,b){this.g&&(Ef.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function jq(){iq||(iq=new hq);return iq}
;var kq=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return kq});function lq(){this.store={};this.g={}}
lq.prototype.storePayload=function(a,b){a=mq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
lq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=nq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
lq.prototype.extractMatchingEntries=function(a){a=nq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
lq.prototype.getSequenceCount=function(a){a=nq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function nq(a,b){var c=mq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&mq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(oq(b.auth,g[0])){var h=b.isJspb;oq(void 0===h?"undefined":h?"true":"false",g[1])&&oq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),oq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function oq(a,b){return void 0===a||"undefined"===a?!0:a===b}
lq.prototype.getSequenceCount=lq.prototype.getSequenceCount;lq.prototype.extractMatchingEntries=lq.prototype.extractMatchingEntries;lq.prototype.smartExtractMatchingEntries=lq.prototype.smartExtractMatchingEntries;lq.prototype.storePayload=lq.prototype.storePayload;function mq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var pq=T("initial_gel_batch_timeout",2E3),qq=T("gel_queue_timeout_max_ms",6E4),rq=Math.pow(2,16)-1,sq=T("gel_min_batch_size",5),tq=void 0;function uq(){this.l=this.g=this.h=0;this.i=!1}
var vq=new uq,wq=new uq,xq=new uq,yq=new uq,zq,Aq=!0,Bq=1,Cq=new Map,Dq=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",Dq);var Eq=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",Eq);var Fq={};function Gq(){var a=E("yt.logging.ims");a||(a=new lq,F("yt.logging.ims",a));return a}
function Hq(a,b){if("log_event"===a.endpoint){Iq(a);var c=Jq(a),d=Kq(a.payload)||"",e=Lq(d),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Mq(e.tier);if(400===f){Nq(a,b);return}}Fq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Gq().storePayload(e,a.payload);Oq(b,c,!1,e,Pq(d))}}
function Qq(a,b,c){if("log_event"===b.endpoint){Iq(void 0,b);var d=Jq(b,!0),e=Lq(a),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Mq(e.tier);if(400===f){Rq(a,b,c);return}}Fq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Gq().storePayload(e,b.payload.toJSON());Oq(c,d,!0,e,Pq(a))}}
function Oq(a,b,c,d,e){function f(){Sq({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(tq=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=X(),h=Tq(c,d.tier),k=h.l;e&&(h.i=!0);e=0;d&&(e=Gq().getSequenceCount(d));1E3<=e?f():e>=a?zq||(zq=Uq(function(){f();zq=void 0},0)):10<=g-k&&(Vq(c,d.tier),h.l=g)}
function Nq(a,b){if("log_event"===a.endpoint){Iq(a);var c=Jq(a),d=new Map;d.set(c,[a.payload]);var e=Kq(a.payload)||"";b&&(tq=new b);return new Dg(function(f,g){tq&&tq.isReady()?Wq(d,tq,f,g,{bypassNetworkless:!0},!0,Pq(e)):f()})}}
function Rq(a,b,c){if("log_event"===b.endpoint){Iq(void 0,b);var d=Jq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(tq=new c);return new Dg(function(f){tq&&tq.isReady()?Xq(e,tq,f,{bypassNetworkless:!0},!0,Pq(a)):f()})}}
function Jq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new yj;c.videoId?Wd(d,1,ee,Cd(c.videoId)):c.playlistId&&Wd(d,2,ee,Cd(c.playlistId));Eq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Dq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Sq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Dg(function(e,f){var g=Tq(c,d),h=g.i;g.i=!1;Yq(g.h);Yq(g.g);g.g=0;tq&&tq.isReady()?void 0===d&&S("enable_web_tiered_gel")?Zq(e,f,a,b,c,300,h):Zq(e,f,a,b,c,d,h):(Vq(c,d),e())})}
function Zq(a,b,c,d,e,f,g){var h=tq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,n={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[n,m],sizeLimit:1E3}):Gq().extractMatchingEntries(m),k.set(d,b),Xq(k,h,a,c,!1,g)):(k=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[n,m],sizeLimit:1E3}):Gq().extractMatchingEntries(m),l.set(d,k),Wq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Fq));for(d=b.next();!d.done;d=b.next())l=d.value,f=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[n,m],sizeLimit:1E3}):Gq().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Fq[l];Xq(k,h,a,c,!1,g)}else{k=w(Object.keys(Fq));for(d=k.next();!d.done;d=k.next())n=d.value,m=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:n,tier:f},{isJspb:!1,cttAuthInfo:n}],sizeLimit:1E3}):Gq().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),0<m.length&&l.set(n,m),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Fq[n];Wq(l,h,a,b,c,!1,g)}}
function Vq(a,b){function c(){Sq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Tq(a,b),e=d===yq||d===xq?5E3:qq;S("web_gel_timeout_cap")&&!d.g&&(e=Uq(function(){c()},e),d.g=e);
Yq(d.h);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Aq&&(e=pq);e=Uq(function(){0<T("gel_min_batch_size")?Gq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=sq&&c():c()},e);
d.h=e}
function Wq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(X()),k=a.size,l=$q(g);a=w(a);var n=a.next();for(g={};!n.done;g={Ub:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Xb:void 0,Wb:void 0},n=a.next()){var m=w(n.value);n=m.next().value;m=m.next().value;g.batchRequest=pb({context:co(b.config_||bo())});if(!Na(m)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=m;(m=Dq[n])&&ar(g.batchRequest,n,m);delete Dq[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
n;br(g.batchRequest,h,g.dangerousLogToVisitorSession);cr(e);g.Xb=function(q){S("start_client_gcf")&&Ef.qa(function(){return B(function(p){return A(p,dr(q),0)})});
k--;k||c()};
g.Ub=0;g.Wb=function(q){return function(){q.Ub++;if(e.bypassNetworkless&&1===q.Ub)try{No(b,l,q.batchRequest,er({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Xb,q.Wb,f)),Aq=!1}catch(p){Kj(p),d()}k--;k||c()}}(g);
try{No(b,l,g.batchRequest,er(e,g.dangerousLogToVisitorSession,g.Xb,g.Wb,f)),Aq=!1}catch(q){Kj(q),d()}}}
function Xq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(X()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var n=w(l.value).next().value,m=a.get(n);l=new zj;var q=b.config_||bo(),p=new hj,t=new aj;K(t,1,q.wc);K(t,2,q.vc);ge(t,16,q.jd);K(t,17,q.uc);if(q.Mb){var u=q.Mb,z=new Yi;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Yi,62,z)}if((u=D.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Td(t,65,u)}u=R("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=Nj();if(0<u.length){z=new dj;for(var C=0;C<u.length;C++){var P=new bj;K(P,1,u[C].key);Wd(P,2,cj,Cd(u[C].value));be(z,15,bj,P)}J(p,dj,5,z)}eo(q,t);fo(p);go(t);ho(q,t);io(t);S("start_client_gcf")&&jo(t);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(q=new gj,K(q,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&
(u=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=Zd(p,gj,3)||new gj,q=p,u=K(z,18,u),J(q,gj,3,u));q=t;u=w(Object.entries(ek(R("DEVICE",""))));for(z=u.next();!z.done;z=u.next())C=w(z.value),z=C.next().value,C=C.next().value,"cbrand"===z?K(q,12,C):"cmodel"===z?K(q,13,C):"cbr"===z?K(q,87,C):"cbrver"===z?K(q,88,C):"cos"===z?K(q,18,C):"cosver"===z?K(q,19,C):"cplatform"===z&&ge(q,42,Ok(C));J(p,aj,1,t);J(l,hj,1,p);if(t=Eq[n])a:{if(de(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,yj,
4,t);t=Zd(l,hj,1)||new hj;q=Zd(t,gj,3)||new gj;u=new fj;K(u,2,n);ge(u,1,p);be(q,12,fj,u);J(t,gj,3,q)}delete Eq[n];n="visitorOnlyApprovedKey"===n;fr()||Td(l,2,Bd(g));!n&&(p=R("EVENT_ID"))&&(t=gr(),q=new xj,K(q,1,p),Td(q,2,Bd(t)),J(l,xj,5,q));cr(d);if(S("jspb_serialize_with_worker")&&(p=so())&&d.writeThenSend){Cq.set(Bq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:n,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),
clientEvents:m,key:Bq});Bq++;break}if(m){p=[];for(t=0;t<m.length;t++)try{p.push(new vj(m[t]))}catch(U){Kj(new Uk("Transport failed to deserialize "+String(m[t])))}m=p}else m=[];m=w(m);for(p=m.next();!p.done;p=m.next())be(l,3,vj,p.value);m={startTime:X(),ticks:{},infos:{}};l=ie(l);m.ticks.geljspc=X();S("log_jspb_serialize_latency")&&oo("gel_jspb_serialize",m,{sampleRate:.1});hr(l,b,c,d,e,f,n,h)}}
function hr(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=$q(f);d=er(d,g,function(k){S("start_client_gcf")&&Ef.qa(function(){return B(function(l){return A(l,dr(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;No(b,f,"",d);Aq=!1}
function cr(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function er(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,qe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};fr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function br(a,b,c){fr()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=gr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function gr(){var a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*rq/2));a++;a>rq&&(a=1);Ej("BATCH_CLIENT_COUNTER",a);return a}
function ar(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Iq(a,b){if(!E("yt.logging.transport.enableScrapingForTest")){var c=Mj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))kq=[],F("yt.logging.transport.enableScrapingForTest",!0),F("yt.logging.transport.scrapedPayloadsForTesting",kq),F("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),F("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
F("yt.logging.transport.scrapeClientEvent",!0);else return}c=E("yt.logging.transport.scrapedPayloadsForTesting");var d=E("yt.logging.transport.payloadToScrape");b&&(b=E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=E("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}F("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function fr(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Uq(a,b){return!1===S("embeds_transport_use_scheduler")?Wj(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Yk(function(){if("none"===jq().l)a();else{var c={};jq().install((c.none={ib:a},c))}},b):Yk(a,b)}
function Yq(a){S("transport_use_scheduler")?Ef.ba(a):window.clearTimeout(a)}
function dr(a){var b,c,d,e,f,g,h,k,l,n;return B(function(m){if(1==m.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Xi.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Wi.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(n=Sp().resolve(new Np))?g?e?A(m,Zn(n,g,e),2):A(m,Zn(n,g),2):m.B(2):m.return()}return l?h?A(m,$n(n,l,h),0):A(m,$n(n,l),0):m.B(0)})}
function Tq(a,b){b=void 0===b?200:b;return a?300===b?yq:wq:300===b?xq:vq}
function Lq(a){if(S("enable_web_tiered_gel")){a=ip[a||""];var b,c;if(null==Sp().resolve(new Np))var d=void 0;else{var e=null!=(d=E("yt.gcf.config.hotConfigGroup"))?d:R("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Kq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ip[b])return b}
function Mq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Pq(a){return"gelDebuggingEvent"===a}
function $q(a){return(void 0===a?0:a)&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var ir=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",ir);
function jr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Hp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:kr(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ir[d.sequenceGroup]);(d.sendIsolatedPayload?Nq:Hq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function lr(a){Sq(void 0,void 0,void 0===a?!1:a)}
function kr(a){ir[a]=a in ir?ir[a]+1:0;return ir[a]}
;var mr=[];function nr(a,b,c){c=void 0===c?{}:c;var d=Gp;R("ytLoggingEventsDefaultDisabled",!1)&&Gp===Gp&&(d=null);S("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Hp(),c.timestamp=X()),mr.push({Ac:a,payload:b,options:c})):jr(a,b,d,c)}
;var or=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",or);function pr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;R("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Gp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||X());Td(b,1,Bd(e<Number.MAX_SAFE_INTEGER?e:0));e=new uj;if(c.lact)Td(e,1,Bd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)Td(e,1,Bd(-1));else{var f=Hp();Td(e,1,Bd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!S("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=kr(f),h=new tj;Td(h,2,Bd(g));K(h,1,f);J(e,tj,3,h);c.endOfSequence&&delete or[c.sequenceGroup]}J(b,
uj,33,e);(c.sendIsolatedPayload?Rq:Qq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var qr=new Set,rr=0,sr=0,tr=0,ur=[],vr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function wr(a){try{qr.add(a.message)}catch(b){}rr++}
function xr(){for(var a=w(vr),b=a.next();!b.done;b=a.next()){var c=Mb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function yr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}rk(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function zr(){var a;return B(function(b){return(a=Xf())?b.return(a.then(function(c){c=ie(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Hc(d,3)})):b.return(Promise.resolve(null))})}
;var Ar={};function Br(a){return Ar[a]||(Ar[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cr={},Dr=[],Ug=new M,Er={};function Fr(){for(var a=w(Dr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Gr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Br(b)]:a.getAttribute("data-"+b):null;return c}
function Hr(a){Ug.ab.apply(Ug,arguments)}
;function Ir(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Jr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Kr(a,b,c){Lr||(Lr={},Mr=new Set,Vj(window,"message",function(d){a:if(Mr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Lr[e.id];f&&d.origin===f.Sc&&(d=f.Dd,d.G=!0,d.G&&(db(d.u,d.sendMessage,d),d.u.length=0),d.fc(e))}}));
a=String(Jr(a,"host"));Lr[c]={Dd:b,Sc:a};Mr.add(a)}
var Lr=null,Mr=null;var Nr=window;
function Or(a,b,c){this.o=this.g=this.h=null;this.i=0;this.G=!1;this.u=[];this.l=null;this.O={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.K=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?cc(a.src):"https://www.youtube.com"),this.h=new Ir(b),c||(b=Pr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Cr[this.g.id]=this,window.postMessage){this.l=
new M;Qr(this);b=Jr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Er)Er.hasOwnProperty(e)&&Rr(this,e)}}
r=Or.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.fc=function(a){Sr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Tr(this,a);return this};
function Rr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.K===b[0]&&Tr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(Cr[this.g.id]=null);Te(this.l);if(this.o){var a=this.o,b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Lr&&(Lr[this.id]=null);this.h=null;a=this.g;for(var d in nb)nb[d][0]==a&&Tj(d);this.o=this.g=null};
r.kc=function(){return{}};
function Ur(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.u.push(b)}
function Sr(a,b,c){a.l.Aa||(c={target:a,data:c},a.l.ab(b,c),Hr(a.K+"."+b,c))}
function Pr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Jr(a.h,"title"));(b=Jr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Jr(a.h,"height"))&&
c.setAttribute("height",b.toString());Nr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.kc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=gc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Jr(a.h,"host")+("/embed/"+Jr(a.h,"videoId"))+"?"+ec(g);Nr.yt_embedsEnableUaChProbe?zr().then(function(k){var l=new URL(h),n=Number(l.searchParams.get("reloads"));isNaN(n)&&(n=0);l.searchParams.set("reloads",(n+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=ue(l.href).toString();Ae(c,ve(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Nr.yt_embedsEnableIframeSrcWithIntent?(Ae(c,ve(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Bc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Qr(a){Kr(a.h,a,a.id);a.i=Xj(a.Bc.bind(a));Vj(a.g,"load",function(){window.clearInterval(a.i);a.i=Xj(a.Bc.bind(a))})}
function Tr(a,b){a.O[b]||(a.O[b]=!0,Ur(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[cc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(zc){if(zc.name&&"SyntaxError"===zc.name){if(!(zc.message&&0<zc.message.indexOf("target origin ''"))){var e=void 0,f=zc;e=void 0===e?{}:e;e.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(S("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=rr)){var n=void 0,m=void 0,q=f,p=e,t=ne(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",C=t.stack||q.h||"Not available";if(C.startsWith(z+": "+u)){var P=C.split("\n");P.shift();C=P.join("\n")}var U=t.lineNumber||"Not available",Y=t.fileName||"Not available",La=C,Ca=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ma=0;Ma<q.args.length&&!(Ca=Jk(q.args[Ma],"params."+Ma,p,Ca),500<=Ca);Ma++);else if(q.hasOwnProperty("params")&&q.params){var ja=q.params;if("object"===typeof q.params)for(m in ja){if(ja[m]){var ra="params."+m,sa=Lk(ja[m]);p[ra]=sa;Ca+=ra.length+
sa.length;if(500<Ca)break}}else p.params=Lk(ja)}if(ur.length)for(var ia=0;ia<ur.length&&!(Ca=Jk(ur[ia],"params.context."+ia,p,Ca),500<=Ca);ia++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:U,fileName:Y,stack:La,params:p,sampleWeight:1},Ym=Number(q.columnNumber);isNaN(Ym)||(W.lineNumber=W.lineNumber+":"+Ym);if("IGNORED"===q.level)n=0;else a:{for(var Zm=Fk(),$m=w(Zm.Ca),Rh=$m.next();!Rh.done;Rh=$m.next()){var an=Rh.value;if(W.message&&
W.message.match(an.ue)){n=an.weight;break a}}for(var bn=w(Zm.za),Sh=bn.next();!Sh.done;Sh=bn.next()){var cn=Sh.value;if(cn.ib(W)){n=cn.weight;break a}}n=1}W.sampleWeight=n;for(var dn=w(Ak),Th=dn.next();!Th.done;Th=dn.next()){var Uh=Th.value;if(Uh.Db[W.name])for(var en=w(Uh.Db[W.name]),Vh=en.next();!Vh.done;Vh=en.next()){var fn=Vh.value,Ue=W.message.match(fn.regexp);if(Ue){W.params["params.error.original"]=Ue[0];for(var Wh=fn.groups,gn={},Ac=0;Ac<Wh.length;Ac++)gn[Wh[Ac]]=Ue[Ac+1],W.params["params.error."+
Wh[Ac]]=Ue[Ac+1];W.message=Uh.Sb(gn);break}}}W.params||(W.params={});var hn=Fk();W.params["params.errorServiceSignature"]="msg="+hn.Ca.length+"&cb="+hn.za.length;W.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));wb("sample").constructor!==ub&&(W.params["params.fconst"]="true");var sd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(sd);if(0!==sd.sampleWeight&&
!qr.has(sd.message))if(h&&S("web_enable_error_204")){var jn=sd;yr(void 0===g?"ERROR":g,jn);wr(jn)}else{var Xh=void 0,Yh=void 0,kn=void 0,ln=void 0,Zh=void 0,O=sd,Tb=g;Tb=void 0===Tb?"ERROR":Tb;if("ERROR"===Tb){Gk.ab("handleError",O);if(S("record_app_crashed_web")&&0===tr&&1===O.sampleWeight)if(tr++,S("errors_via_jspb")){var $r=new sj;Zh=ge($r,1,1);if(!S("report_client_error_with_app_crash_ks")){var as=new rj,bs=new qj,cs=new pj,ds=new oj;var es=K(ds,1,O.message);var fs=J(cs,oj,3,es);ln=J(bs,pj,5,
fs);kn=J(as,qj,9,ln);J(Zh,rj,4,kn)}var mn=S("jspb_sparse_encoded_pivot")?new vj([{}]):new vj;$d(mn,sj,20,wj,Zh);pr("appCrashed",mn)}else{var nn={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(nn.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});nr("appCrashed",nn)}sr++}else"WARNING"===Tb&&Gk.ab("handleWarning",O);if(S("kevlar_gel_error_routing"))a:{var td=Tb;if(S("errors_via_jspb")){if(xr())Yh=void 0;else{var Bc=new lj;K(Bc,1,O.stack);O.fileName&&
K(Bc,4,O.fileName);var hb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==hb.length&&(1!==hb.length||isNaN(Number(hb[0]))?2!==hb.length||isNaN(Number(hb[0]))||isNaN(Number(hb[1]))||(fe(Bc,2,Number(hb[0])),fe(Bc,3,Number(hb[1]))):fe(Bc,2,Number(hb[0])));var Ub=new oj;K(Ub,1,O.message);K(Ub,3,O.name);fe(Ub,6,O.sampleWeight);"ERROR"===td?ge(Ub,2,2):"WARNING"===td?ge(Ub,2,1):ge(Ub,2,0);var $h=new mj;Td($h,1,wd(!0));$d($h,lj,3,nj,Bc);var Vb=new kj;K(Vb,3,window.location.href);for(var on=
R("FEXP_EXPERIMENTS",[]),ai=0;ai<on.length;ai++){var bi=void 0,ci=Vb.s,di=on[ai],ud=ad(ci);od(ud);var pn=ud&2,Fa=Sd(ci,ud,5);Array.isArray(Fa)||(Fa=md);var qn=!!(ud&32),ib=Yc(Fa);0===ib&&qn&&!pn?(ib|=33,H(Fa,ib)):ib&1||(ib|=1,H(Fa,ib));if(pn)ib&2||Wc(Fa,34),Object.freeze(Fa);else if(2&ib||2048&ib){Fa=Uc(Fa);var rn=1;qn&&(rn|=32);H(Fa,rn);Ud(ci,ud,5,Fa)}bi=Fa;var sn=Yc(bi);di=zd(di,!!(4&sn)&&!!(4096&sn));bi.push(di)}var ei=Fj();if(!Gj()&&ei)for(var tn=w(Object.keys(ei)),Wb=tn.next();!Wb.done;Wb=tn.next()){var un=
Wb.value,fi=new jj;K(fi,1,un);K(fi,2,String(ei[un]));be(Vb,4,jj,fi)}var gi=O.params;if(gi){var vn=w(Object.keys(gi));for(Wb=vn.next();!Wb.done;Wb=vn.next()){var wn=Wb.value,hi=new jj;K(hi,1,"client."+wn);K(hi,2,String(gi[wn]));be(Vb,4,jj,hi)}}var xn=R("SERVER_NAME"),yn=R("SERVER_VERSION");if(xn&&yn){var ii=new jj;K(ii,1,"server.name");K(ii,2,xn);be(Vb,4,jj,ii);var ji=new jj;K(ji,1,"server.version");K(ji,2,yn);be(Vb,4,jj,ji)}var Ve=new pj;J(Ve,kj,1,Vb);J(Ve,mj,2,$h);J(Ve,oj,3,Ub);Yh=Ve}var zn=Yh;if(!zn)break a;
var An=S("jspb_sparse_encoded_pivot")?new vj([{}]):new vj;$d(An,pj,163,wj,zn);pr("clientError",An)}else{var Pa=void 0;Pa=void 0===Pa?{}:Pa;if(xr())Xh=void 0;else{var vd={stackTrace:O.stack};O.fileName&&(vd.filename=O.fileName);var jb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==jb.length&&(1!==jb.length||isNaN(Number(jb[0]))?2!==jb.length||isNaN(Number(jb[0]))||isNaN(Number(jb[1]))||(vd.lineNumber=Number(jb[0]),vd.columnNumber=Number(jb[1])):vd.lineNumber=Number(jb[0]));var ki=
{level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===td?ki.level="ERROR_LEVEL_ERROR":"WARNING"===td&&(ki.level="ERROR_LEVEL_WARNNING");var gs={isObfuscated:!0,browserStackInfo:vd};Pa.pageUrl=window.location.href;Pa.kvPairs=[];R("FEXP_EXPERIMENTS")&&(Pa.experimentIds=R("FEXP_EXPERIMENTS"));var li=Fj();if(!Gj()&&li)for(var Bn=w(Object.keys(li)),Xb=Bn.next();!Xb.done;Xb=Bn.next()){var Cn=Xb.value;Pa.kvPairs.push({key:Cn,value:String(li[Cn])})}var mi=
O.params;if(mi){var Dn=w(Object.keys(mi));for(Xb=Dn.next();!Xb.done;Xb=Dn.next()){var En=Xb.value;Pa.kvPairs.push({key:"client."+En,value:String(mi[En])})}}var Fn=R("SERVER_NAME"),Gn=R("SERVER_VERSION");Fn&&Gn&&(Pa.kvPairs.push({key:"server.name",value:Fn}),Pa.kvPairs.push({key:"server.version",value:Gn}));Xh={errorMetadata:Pa,stackTrace:gs,logMessage:ki}}var Hn=Xh;if(!Hn)break a;nr("clientError",Hn)}if("ERROR"===td||S("errors_flush_gel_always_killswitch"))b:{if(S("web_fp_via_jspb")){var We=!0;We=
void 0===We?!1:We;var In=mr;mr=[];if(In)for(var Jn=w(In),ni=Jn.next();!ni.done;ni=Jn.next()){var Cc=ni.value;We?jr(Cc.Ac,Cc.payload,Gp,Cc.options):nr(Cc.Ac,Cc.payload,Cc.options)}lr(!0);if(!S("web_fp_via_jspb_and_json"))break b}lr()}}S("suppress_error_204_logging")||yr(Tb,O);wr(O)}}}}}else throw zc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Vr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wr(a){return 0===a.search("get")||0===a.search("is")}
;function Xr(a,b){Or.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Xr,Or);r=Xr.prototype;r.kc=function(){var a=Jr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Jr(this.h,"embedConfig")){if(Oa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.fc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Oa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":Yr(this,a);break;case "initialDelivery":Oa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},Zr(this,a.apiInterface),Yr(this,a));break;default:Sr(this,b,a)}};
function Yr(a,b){if(Oa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Jr(a.h,"title"))))}}
function Zr(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Vr(c)?this[c]=function(){this.playerInfo={};
this.ka={};Ur(this,c,arguments);return this}:Wr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Ur(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Jr(this.h,"host")+("/embed/"+Jr(this.h,"videoId")),b=Number(Jr(this.h,"width")),c=Number(Jr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Zb(a);d=Zb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function hs(a){if("iframe"!==a.tagName.toLowerCase()){var b=Gr(a,"videoid");b&&(b={videoId:b,width:Gr(a,"width"),height:Gr(a,"height")},new Xr(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Cr[a]});
F("YT.scan",Fr);F("YT.subscribe",function(a,b,c){Ug.subscribe(a,b,c);Er[a]=!0;for(var d in Cr)Cr.hasOwnProperty(d)&&Rr(Cr[d],a)});
F("YT.unsubscribe",function(a,b,c){Tg(a,b,c)});
F("YT.Player",Xr);Or.prototype.destroy=Or.prototype.destroy;Or.prototype.setSize=Or.prototype.setSize;Or.prototype.getIframe=Or.prototype.getIframe;Or.prototype.addEventListener=Or.prototype.addEventListener;Xr.prototype.getVideoEmbedCode=Xr.prototype.getVideoEmbedCode;Xr.prototype.getOptions=Xr.prototype.getOptions;Xr.prototype.getOption=Xr.prototype.getOption;
Dr.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);db(fb(a,b),hs)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Fr();var is=D.onYTReady;is&&is();var js=D.onYouTubeIframeAPIReady;js&&js();var ks=D.onYouTubePlayerAPIReady;ks&&ks();}).call(this);
