!function(e){function t(t){for(var n,a,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={0:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;c.push([136,1]),o()}({136:function(e,t,o){o(137),e.exports=o(342)},339:function(e,t){},340:function(e,t){for(var o=document.querySelectorAll(".accordion-box"),n=document.querySelectorAll(".accordion-box-head"),r=0;r<n.length;r++)n[r].addEventListener("click",c,!1);function c(){var e=this.parentNode.className;console.log(e);for(var t=0;t<o.length;t++)o[t].className="accordion-box close";"accordion-box close"===e&&(this.parentNode.className="accordion-box open")}},341:function(e,t){var o=document.querySelector("#input-name"),n=document.querySelector("#input-phone");n.addEventListener("input",(function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);e.target.value=t[2]?"("+t[1]+") "+t[2]+(t[3]?" "+t[3]:"")+" "+t[4]:+t[1],e.target.value.replace(/\s/g,"").replace(/[{()}]/g,"").length>=9&&n.classList.add("success")})),o.addEventListener("input",(function(e){/^[a-zA-Z]*$/g.test(e.target.value)?(o.classList.remove("error"),o.classList.add("success")):o.classList.add("error")}))},342:function(e,t,o){"use strict";o.r(t);o(339);var n=o(11),r=o(68),c=o(1),a=o(135),i=o(96);var u=o(134),l=o.n(u);function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var f,p=document.querySelectorAll(".cleaners-box"),m=p.length-1;function y(){var e,t={};if(t=window.innerWidth>1200?{type:"fade",rewind:!0,speed:0,arrows:!1,pagination:!0,interval:5e3,resetProgress:!0,pauseOnHover:!1,pauseOnFocus:!1}:{type:"loop",rewind:!0,perPage:1,autoWidth:!0,arrows:!1,speed:600},!document.querySelector(".cleaners").classList.contains("is-active")&&((e=new l.a("#cleaners",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t)).mount()).on("move",(function(e){for(var t=e<m?e+1:0,o=e>0?e-1:m,n=0;n<p.length;n++)p[n].classList.remove("center","prev","next");p[e].classList.add("center"),p[o].classList.add("prev"),p[t].classList.add("next")})),window.innerWidth>1200)){e.go(1);for(var o=0;o<p.length;o++)p[o].addEventListener("click",(function(){e.go(parseInt(this.getAttribute("data-slide")))}))}}var v=document.querySelectorAll(".hobbies-item");function b(){var e=-1,t=0;f=setInterval((function(){!function(){e>=v.length-1?(e=0,t=v.length-1):(t=e,e+=1);v[e].classList.add("show"),-1!==t&&v[t].classList.remove("show")}()}),1e3)}function g(e,t){return i.a.on(),c.z.to(window,{duration:1,scrollTo:{y:e},ease:c.b.easeOut,onComplete:function(){!function(e){var t=getComputedStyle(e.querySelector(".section-box")),o=document.querySelector(".logo-star");"section-0"===e.getAttribute("id")?o.style.fill="#FFFFFF":o.style.fill=t.backgroundColor}(e),i.a.off(),"section-5"===e.getAttribute("id")&&y(),"section-4"===e.getAttribute("id")?b():function(){clearInterval(f);for(var e=0;e<v.length;e++)v[e].classList.remove("show")}()}}),document.querySelectorAll(".section").forEach((function(e){e.classList.remove("in-viewport")})),e.classList.add("in-viewport"),t&&t.restart(),!0}function h(e,t){var o=document.querySelector(".header");"down"===e&&0!==window.scrollY?o.classList.add("hidden"):o.classList.remove("hidden"),"section-0"===t.getAttribute("id")?o.classList.remove("smart"):o.classList.add("smart")}c.z.registerPlugin(a.a),n.a.registerPlugin(r.a);var w=!0;document.querySelectorAll(".anchor-scroll").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=document.getElementById(e.getAttribute("data-anchor")).getBoundingClientRect().top+window.scrollY;w=!1,window.scrollTo(0,o),setTimeout((function(){w=!0}),100)}))}));var S=document.querySelector("#eco-time"),O={score:96};function L(){S.innerHTML=O.score}var q=document.querySelector("#time");function x(e,t){parseInt(q.textContent)!==e&&(q.innerHTML=e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",t={add:"+",sub:"-"};c.f.to(O,1,{score:"".concat(t[e],"=13"),roundProps:"score",ease:c.c.easeOut,onUpdate:L})}(t),function(e){var t=document.querySelector(".clock-hour"),o=document.querySelector(".clock-minute"),r={add:{hour:480,minute:720},sub:{hour:-240,minute:-720}};n.a.fromTo(t,{rotate:120},{duration:1.5,rotate:r[e].hour,ease:c.d.easeOut}),n.a.fromTo(o,{rotate:0},{duration:1.5,rotate:r[e].minute,ease:c.d.easeOut})}(t))}document.querySelector(".timer-calculator-btn.__minus").addEventListener("click",(function(){x(Math.max(1,parseInt(q.textContent)-1),"sub")})),document.querySelector(".timer-calculator-btn.__plus").addEventListener("click",(function(){x(Math.min(99,parseInt(q.textContent)+1),"add")}));o(340);document.querySelector("#order-form").addEventListener("submit",(function(e){e.preventDefault(),n.a.fromTo(j,{opacity:1},{duration:.5,opacity:0,onComplete:function(){j.style.display="none",n.a.fromTo(k,{opacity:0,display:"none"},{duration:0,opacity:0,display:"block",onComplete:function(){k.style.opacity=1}})}})}));var j=document.querySelector(".modal-form"),k=document.querySelector(".modal-success");for(var P=document.querySelectorAll(".close"),E=document.querySelector(".modal"),A=(document.querySelector(".modal-form"),document.querySelector(".modal-success"),0);A<P.length;A++)P[A].addEventListener("click",(function(){c.z.to(E,{duration:.5,opacity:0,onComplete:function(){E.style.display="none",n.a.to(k,{display:"none",onComplete:function(){n.a.to(j,{opacity:1,display:"block"})}})}})}));for(var C=document.querySelectorAll(".link-btn.default"),T=function(e){C[e].addEventListener("click",(function(t){t.preventDefault();var o=this.getAttribute("data-modal"),r=this.getAttribute("href"),a=this.getAttribute("target"),i=document.createElement("div");i.classList.add("link-btn-circle"),C[e].querySelector(".link-btn-bg").appendChild(i),n.a.set(i,{x:t.offsetX,y:t.offsetY,scale:0}),n.a.to(i,{duration:.3,scale:12,onComplete:function(){n.a.to(i,{duration:.1,opacity:0,onComplete:function(){i.remove()}})}}),o&&setTimeout((function(){!function(e){console.log("open modal - ",e);var t=document.getElementById(e);c.z.to(t,{display:"block",onComplete:function(){c.z.to(t,{duration:.2,opacity:1})}})}(o)}),100),!!r!=!!a&&setTimeout((function(){window.location.href=r}),300),!0==!!r&&!0==!!a&&setTimeout((function(){window.open(r,"_blank")}),300)}))},_=0;_<C.length;_++)T(_);o(341);window.scroll(0,0),document.querySelectorAll(".section").forEach((function(e){r.a.create({trigger:e,onEnter:function(){w&&g(e);var t=e.previousSibling.previousSibling;t&&function(e){var t=e.querySelector(".section-box");n.a.to(t,{duration:1,opacity:0,scale:.9,y:window.innerHeight/1.3,ease:c.b.easeOut,onComplete:function(e){t.style.opacity=0}})}(t),h("down",e)}}),r.a.create({trigger:e,start:"bottom bottom",onEnterBack:function(){w&&g(e),function(e){var t=e.querySelector(".section-box");n.a.to(t,{duration:1,opacity:1,scale:1,y:0,ease:c.b.easeOut})}(e),h("up",e)}})}))}});