"use strict";(self.webpackChunkDare_Oduwole=self.webpackChunkDare_Oduwole||[]).push([[792],{865:(t,e,r)=>{var n=r(692),o=r.n(n);function i(t,e){return Object.assign({},e,t)}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),l=new G(n||[]);return o(a,"_invoke",{value:R(t,r,l)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",y="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function x(){}var S={};s(S,c,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(N([])));_&&_!==r&&n.call(_,c)&&(S=_);var E=x.prototype=w.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,l,c){var u=p(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==a(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,l,c)}),(function(t){r("throw",t,l,c)})):e.resolve(s).then((function(t){f.value=t,l(f)}),(function(t){return r("throw",t,l,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function R(e,r,n){var o=v;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var l=n.delegate;if(l){var c=j(l,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?g:y,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function j(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(a(e)+" is not iterable")}return b.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},k(O.prototype),s(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),s(E,f,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function c(t,e,r,n,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,l,"next",t)}function l(t){c(i,n,o,a,l,"throw",t)}a(void 0)}))}}var f,s=function(){var t=u(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.e(983).then(r.bind(r,983));case 3:e=t.sent,(0,e.default)(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=u(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.e(808).then(r.bind(r,808));case 3:e=t.sent,(0,e.default)(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=u(l().mark((function t(){var e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([r.e(96),r.e(361)]).then(r.bind(r,361));case 3:e=t.sent,(0,e.default)(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();o()('a[href^="#"]').on("click",(function(t){var e=o()(this.getAttribute("href"));e.length&&(t.preventDefault(),o()("html, body").stop().animate({scrollTop:e.offset().top},1e3))})),f={easing:"cubic-bezier(0.5, 0, 0, 1)",distance:"30px",duration:1e3,desktop:!0,mobile:!0},ScrollReveal().reveal(".section-title",i({delay:300,distance:"0px",origin:"bottom"},f)),ScrollReveal().reveal(".hero-title",i({delay:800,origin:"bottom"},f)),ScrollReveal().reveal(".puzzle-leftgrp1",i({delay:500,distance:"50px",origin:"left"},f)),ScrollReveal().reveal(".puzzle-leftgrp2",i({delay:600,distance:"80px",origin:"left"},f)),ScrollReveal().reveal(".puzzle-rightgrp2",i({delay:600,distance:"80px",origin:"right"},f)),ScrollReveal().reveal(".puzzle-leftgrp3",i({delay:700,distance:"160px",origin:"left"},f)),ScrollReveal().reveal(".puzzle-leftgrp4",i({delay:800,distance:"300px",origin:"left"},f)),ScrollReveal().reveal(".puzzle-rightgrp4",i({delay:800,distance:"300px",origin:"right"},f)),ScrollReveal().reveal(".pivot",i({delay:800,distance:"300px",origin:"top"},f)),ScrollReveal().reveal(".hero-cta",i({delay:800,distance:"120px",origin:"bottom"},f)),ScrollReveal().reveal(".about-wrapper__image",i({delay:600,origin:"bottom"},f)),ScrollReveal().reveal(".about-tabs",i({delay:1e3,origin:"bottom"},f)),ScrollReveal().reveal(".about-wrapper__info",i({delay:1e3,origin:window.innerWidth>768?"left":"bottom"},f)),ScrollReveal().reveal(".frontend-left",i({delay:1e3,origin:window.innerWidth>768?"bottom":"left"},f)),ScrollReveal().reveal(".frontend-right",i({delay:1e3,origin:window.innerWidth>768?"bottom":"right"},f)),ScrollReveal().reveal(".project-wrapper__text",i({delay:500,origin:window.innerWidth>768?"left":"bottom"},f)),ScrollReveal().reveal(".project-wrapper__image",i({delay:1e3,origin:window.innerWidth>768?"right":"bottom"},f)),ScrollReveal().reveal(".contact-wrapper",i({delay:800,origin:"bottom"},f)),p(),s(),h()}},t=>{t.O(0,[96],(()=>{return e=865,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=main.b82c8707de953ee99500.js.map