!function(e){function t(t){for(var o,i,a=t[0],u=t[1],l=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;c.push([135,1]),n()}({135:function(e,t,n){n(136),e.exports=n(344)},338:function(e,t){},339:function(e,t){document.querySelectorAll(".anchor-scroll").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=document.getElementById(e.getAttribute("data-anchor")).getBoundingClientRect().top+window.scrollY;window.scrollTo(0,n)}))}))},341:function(e,t){for(var n=document.querySelectorAll(".accordion-box"),o=document.querySelectorAll(".accordion-box-head"),r=0;r<o.length;r++)o[r].addEventListener("click",c,!1);function c(){var e=this.parentNode.className;console.log(e);for(var t=0;t<n.length;t++)n[t].className="accordion-box close";"accordion-box close"===e&&(this.parentNode.className="accordion-box open")}},342:function(e,t){document.querySelector(".link-btn").addEventListener("click",(function(e){e.preventDefault(),console.log("click")}))},343:function(e,t){document.querySelector("#input-name");document.querySelector("#input-phone").addEventListener("input",(function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);e.target.value=t[2]?"("+t[1]+") "+t[2]+(t[3]?" "+t[3]:"")+" "+t[4]:+t[1]}))},344:function(e,t,n){"use strict";n.r(t);n(338);var o=n(28),r=n(69),c=n(54),i=n(1),a=n(134);function u(e,t){return c.a.on(),i.z.to(window,{duration:1,scrollTo:{y:e},ease:i.b.easeOut,onComplete:function(){!function(e){var t=getComputedStyle(e.querySelector(".section-box")),n=document.querySelector(".logo-star");"section-0"===e.getAttribute("id")?n.style.fill="#FFFFFF":n.style.fill=t.backgroundColor}(e),c.a.off()}}),document.querySelectorAll(".section").forEach((function(e){e.classList.remove("in-viewport")})),e.classList.add("in-viewport"),t&&t.restart(),!0}function l(e,t){var n=document.querySelector(".header");"down"===e&&0!==window.scrollY?n.classList.add("hidden"):n.classList.remove("hidden"),"section-7"===t.getAttribute("id")&&n.classList.remove("hidden"),"section-0"===t.getAttribute("id")?n.classList.remove("smart"):n.classList.add("smart")}i.z.registerPlugin(a.a),o.a.registerPlugin(r.a);n(339);var s=document.querySelector("#eco-time"),d={score:96};function f(){s.innerHTML=d.score}var p=document.querySelector("#time");function m(e,t){parseInt(p.textContent)!==e&&(p.innerHTML=e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",t={add:"+",sub:"-"};i.f.to(d,1,{score:"".concat(t[e],"=13"),roundProps:"score",ease:i.c.easeOut,onUpdate:f})}(t),function(e){var t=document.querySelector(".clock-hour"),n=document.querySelector(".clock-minute"),r={add:{hour:480,minute:720},sub:{hour:-240,minute:-720}};o.a.fromTo(t,{rotate:120},{duration:1.5,rotate:r[e].hour,ease:i.d.easeOut}),o.a.fromTo(n,{rotate:0},{duration:1.5,rotate:r[e].minute,ease:i.d.easeOut})}(t))}document.querySelector(".timer-calculator-btn.__minus").addEventListener("click",(function(){m(Math.max(1,parseInt(p.textContent)-1),"sub")})),document.querySelector(".timer-calculator-btn.__plus").addEventListener("click",(function(){m(Math.min(99,parseInt(p.textContent)+1),"add")}));n(340);var v=document.querySelectorAll(".cleaners-box");function g(e,t,n){for(var o=0;o<v.length;o++)v[o].classList.remove("center"),v[o].classList.remove("prev"),v[o].classList.remove("next");v[e].classList.add("center"),v[t].classList.add("prev"),v[n].classList.add("next")}var b,y,h,S;n(341),n(342),n(343);c.a.on(),document.querySelectorAll(".section").forEach((function(e){r.a.create({trigger:e,onEnter:function(){u(e),l("down",e),e.previousSibling.previousSibling}}),r.a.create({trigger:e,start:"bottom bottom",onEnterBack:function(){u(e),l("up",e)}})})),b=v.length-1,g(y=0,h=b,S=1),document.querySelector(".go").addEventListener("click",(function(){h=(y+=1)-1,S=y+1,0===y&&(h=b,S=1),y<0&&(y=b,h=b-1,S=0),y===b&&(S=0),y>b&&(y=0,S=1,h=b),g(y,h,S)}))}});