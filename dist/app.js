!function(e){function t(t){for(var n,a,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},r={0:0},c=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;c.push([136,1]),o()}({136:function(e,t,o){o(137),e.exports=o(342)},339:function(e,t){},340:function(e,t){for(var o=document.querySelectorAll(".accordion-box"),n=document.querySelectorAll(".accordion-box-head"),r=0;r<n.length;r++)n[r].addEventListener("click",c,!1);function c(){var e=this.parentNode.className;console.log(e);for(var t=0;t<o.length;t++)o[t].className="accordion-box close";"accordion-box close"===e&&(this.parentNode.className="accordion-box open")}},341:function(e,t){var o=document.querySelector("#input-name"),n=document.querySelector("#input-phone");n.addEventListener("input",(function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);e.target.value=t[2]?"("+t[1]+") "+t[2]+(t[3]?" "+t[3]:"")+" "+t[4]:+t[1],e.target.value.replace(/\s/g,"").replace(/[{()}]/g,"").length>=9&&n.classList.add("success")})),o.addEventListener("input",(function(e){/^[a-zA-Z]*$/g.test(e.target.value)?(o.classList.remove("error"),o.classList.add("success")):o.classList.add("error")}))},342:function(e,t,o){"use strict";o.r(t);o(339);var n=o(11),r=o(68),c=o(1),a=o(135),i=o(96);var u,l=o(134),s=o.n(l),d=document.querySelectorAll(".cleaners-box"),f=d.length-1;var p=document.querySelectorAll(".hobbies-item");function m(){var e=-1,t=0;u=setInterval((function(){!function(){e>=p.length-1?(e=0,t=p.length-1):(t=e,e+=1);p[e].classList.add("show"),-1!==t&&p[t].classList.remove("show")}()}),1e3)}function v(e,t){return i.a.on(),c.z.to(window,{duration:1,scrollTo:{y:e},ease:c.b.easeOut,onComplete:function(){!function(e){var t=getComputedStyle(e.querySelector(".section-box")),o=document.querySelector(".logo-star");"section-0"===e.getAttribute("id")?o.style.fill="#FFFFFF":o.style.fill=t.backgroundColor}(e),i.a.off(),"section-5"===e.getAttribute("id")&&function(){var e;if(!document.querySelector(".cleaners").classList.contains("is-active")){(e=new s.a("#cleaners",{type:"fade",rewind:!0,speed:0,arrows:!1,pagination:!0,interval:5e3,resetProgress:!0,pauseOnHover:!1,pauseOnFocus:!1}).mount()).on("move",(function(e){for(var t=e<f?e+1:0,o=e>0?e-1:f,n=0;n<d.length;n++)d[n].classList.remove("center","prev","next");d[e].classList.add("center"),d[o].classList.add("prev"),d[t].classList.add("next")})),e.go(1);for(var t=0;t<d.length;t++)d[t].addEventListener("click",(function(){e.go(parseInt(this.getAttribute("data-slide")))}))}}(),"section-4"===e.getAttribute("id")?m():function(){clearInterval(u);for(var e=0;e<p.length;e++)p[e].classList.remove("show")}()}}),document.querySelectorAll(".section").forEach((function(e){e.classList.remove("in-viewport")})),e.classList.add("in-viewport"),t&&t.restart(),!0}function y(e,t){var o=document.querySelector(".header");"down"===e&&0!==window.scrollY?o.classList.add("hidden"):o.classList.remove("hidden"),"section-0"===t.getAttribute("id")?o.classList.remove("smart"):o.classList.add("smart")}c.z.registerPlugin(a.a),n.a.registerPlugin(r.a);var g=!0;document.querySelectorAll(".anchor-scroll").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=document.getElementById(e.getAttribute("data-anchor")).getBoundingClientRect().top+window.scrollY;g=!1,window.scrollTo(0,o),setTimeout((function(){g=!0}),100)}))}));var b=document.querySelector("#eco-time"),h={score:96};function S(){b.innerHTML=h.score}var w=document.querySelector("#time");function L(e,t){parseInt(w.textContent)!==e&&(w.innerHTML=e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",t={add:"+",sub:"-"};c.f.to(h,1,{score:"".concat(t[e],"=13"),roundProps:"score",ease:c.c.easeOut,onUpdate:S})}(t),function(e){var t=document.querySelector(".clock-hour"),o=document.querySelector(".clock-minute"),r={add:{hour:480,minute:720},sub:{hour:-240,minute:-720}};n.a.fromTo(t,{rotate:120},{duration:1.5,rotate:r[e].hour,ease:c.d.easeOut}),n.a.fromTo(o,{rotate:0},{duration:1.5,rotate:r[e].minute,ease:c.d.easeOut})}(t))}document.querySelector(".timer-calculator-btn.__minus").addEventListener("click",(function(){L(Math.max(1,parseInt(w.textContent)-1),"sub")})),document.querySelector(".timer-calculator-btn.__plus").addEventListener("click",(function(){L(Math.min(99,parseInt(w.textContent)+1),"add")}));o(340);document.querySelector("#order-form").addEventListener("submit",(function(e){e.preventDefault(),n.a.fromTo(q,{opacity:1},{duration:.5,opacity:0,onComplete:function(){q.style.display="none",n.a.fromTo(x,{opacity:0,display:"none"},{duration:0,opacity:0,display:"block",onComplete:function(){x.style.opacity=1}})}})}));var q=document.querySelector(".modal-form"),x=document.querySelector(".modal-success");for(var k=document.querySelectorAll(".close"),A=document.querySelector(".modal"),O=(document.querySelector(".modal-form"),document.querySelector(".modal-success"),0);O<k.length;O++)k[O].addEventListener("click",(function(){c.z.to(A,{duration:.5,opacity:0,onComplete:function(){A.style.display="none",n.a.to(x,{display:"none",onComplete:function(){n.a.to(q,{opacity:1,display:"block"})}})}})}));for(var E=document.querySelectorAll(".link-btn.default"),C=function(e){E[e].addEventListener("click",(function(t){t.preventDefault();var o=this.getAttribute("data-modal"),r=this.getAttribute("href"),a=this.getAttribute("target"),i=document.createElement("div");i.classList.add("link-btn-circle"),E[e].querySelector(".link-btn-bg").appendChild(i),n.a.set(i,{x:t.offsetX,y:t.offsetY,scale:0}),n.a.to(i,{duration:.3,scale:12,onComplete:function(){n.a.to(i,{duration:.1,opacity:0,onComplete:function(){i.remove()}})}}),o&&setTimeout((function(){!function(e){console.log("open modal - ",e);var t=document.getElementById(e);c.z.to(t,{display:"block",onComplete:function(){c.z.to(t,{duration:.2,opacity:1})}})}(o)}),200),!!r!=!!a&&setTimeout((function(){window.location.href=r}),300),!0==!!r&&!0==!!a&&setTimeout((function(){window.open(r,"_blank")}),300)}))},T=0;T<E.length;T++)C(T);o(341);window.scroll(0,0),document.querySelectorAll(".section").forEach((function(e){r.a.create({trigger:e,onEnter:function(){g&&v(e);var t=e.previousSibling.previousSibling;t&&function(e){var t=e.querySelector(".section-box");n.a.to(t,{duration:1,opacity:0,scale:.9,y:window.innerHeight/1.3,ease:c.b.easeOut,onComplete:function(e){t.style.opacity=0}})}(t),y("down",e)}}),r.a.create({trigger:e,start:"bottom bottom",onEnterBack:function(){g&&v(e),function(e){var t=e.querySelector(".section-box");n.a.to(t,{duration:1,opacity:1,scale:1,y:0,ease:c.b.easeOut})}(e),y("up",e)}})}))}});