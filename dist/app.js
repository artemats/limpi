!function(e){function t(t){for(var r,c,a=t[0],u=t[1],l=t[2],f=0,d=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,a=1;a<o.length;a++){var u=o[a];0!==n[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={0:0},i=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;i.push([135,1]),o()}({135:function(e,t,o){o(136),e.exports=o(339)},338:function(e,t){},339:function(e,t,o){"use strict";o.r(t);o(338);var r=o(48),n=o(68),i=o(1),c=o(134),a=o(96);function u(e,t){a.a.on(),i.w.to(window,{duration:1,scrollTo:{y:e},ease:i.b.easeOut,onComplete:function(){a.a.off(),function(e){var t=getComputedStyle(e.querySelector(".section-box")),o=document.querySelector(".logo-star");"section-0"===e.getAttribute("id")?o.style.fill="#FFFFFF":o.style.fill=t.backgroundColor}(e)}}),document.querySelectorAll(".section").forEach((function(e){e.classList.remove("in-viewport")})),e.classList.add("in-viewport"),t&&t.restart()}function l(e,t){var o=document.querySelector(".header");"down"===e&&0!==window.scrollY?o.classList.add("hidden"):o.classList.remove("hidden"),"section-7"===t.getAttribute("id")&&o.classList.remove("hidden"),window.addEventListener("scroll",(function(){window.scrollY<=0?o.classList.remove("smart"):o.classList.add("smart")}))}i.w.registerPlugin(c.a),r.a.registerPlugin(n.a);document.querySelectorAll(".section").forEach((function(e){n.a.create({trigger:e,onEnter:function(){u(e);var t=e.previousSibling.previousSibling;t&&function(e){var t=e.querySelector(".section-box");r.a.to(t,{duration:1,opacity:.5,scale:.7,y:"90vh",ease:i.b.easeOut,onComplete:function(e){t.style.opacity=0}})}(t),l("down",e)}}),n.a.create({trigger:e,start:"bottom bottom",onEnterBack:function(){u(e),function(e){var t=e.querySelector(".section-box");r.a.to(t,{duration:1,opacity:1,scale:1,y:0,ease:i.b.easeOut})}(e),l("up",e)}})}))}});