!function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={0:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([137,1]),o()}({137:function(e,t,o){o(138),e.exports=o(343)},340:function(e,t){},341:function(e,t){for(var o=document.querySelectorAll(".accordion-box"),n=document.querySelectorAll(".accordion-box-head"),r=0;r<n.length;r++)n[r].addEventListener("click",a,!1);function a(){var e=this.parentNode.className;console.log(e);for(var t=0;t<o.length;t++)o[t].className="accordion-box close";"accordion-box close"===e&&(this.parentNode.className="accordion-box open")}},342:function(e,t){var o=document.querySelector("#input-name"),n=document.querySelector("#input-phone");n.addEventListener("input",(function(e){var t=e.target.value.replace(/\D/g,"").match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);e.target.value=t[2]?"("+t[1]+") "+t[2]+(t[3]?" "+t[3]:"")+" "+t[4]:+t[1],e.target.value.replace(/\s/g,"").replace(/[{()}]/g,"").length>=9&&n.classList.add("success")})),o.addEventListener("input",(function(e){/^\d+$/g.test(e.target.value)?o.classList.add("error"):(o.classList.remove("error"),o.classList.add("success"))}))},343:function(e,t,o){"use strict";o.r(t);o(340);var n=o(4),r=o(70),a=o(1),i=o(136),c=o(98);var s=o(69),l=o.n(s);function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var p,f=document.querySelectorAll(".cleaners-box"),m=f.length-1;function v(){var e,t={};if(t=window.innerWidth>1200?{type:"fade",rewind:!0,speed:0,arrows:!1,pagination:!0,autoplay:!0,interval:5e3,resetProgress:!0,pauseOnHover:!1,pauseOnFocus:!1}:{type:"loop",rewind:!0,perPage:1,autoWidth:!0,arrows:!1,speed:1e3,autoplay:!0,interval:5e3,resetProgress:!0,pauseOnHover:!1,pauseOnFocus:!1},!document.querySelector(".cleaners").classList.contains("is-active")&&((e=new l.a("#cleaners",function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){d(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},t)).mount()).on("move",(function(e){for(var t=e<m?e+1:0,o=e>0?e-1:m,n=0;n<f.length;n++)f[n].classList.remove("center","prev","next");f[e].classList.add("center"),f[o].classList.add("prev"),f[t].classList.add("next")})),window.innerWidth>1200)){e.go(1);for(var o=0;o<f.length;o++)f[o].addEventListener("click",(function(){e.go(parseInt(this.getAttribute("data-slide")))}))}}var y=document.querySelectorAll(".hobbies-item");function g(){var e=-1,t=0;p=setInterval((function(){!function(){e>=y.length-1?(e=0,t=y.length-1):(t=e,e+=1);y[e].classList.add("show"),-1!==t&&y[t].classList.remove("show")}()}),1e3)}var h=o(25),b=o.n(h),w=function(){var e=document.querySelector("#how-it-works"),t=document.querySelectorAll(".card-box-illustration"),o=document.querySelectorAll(".card");if(!e.classList.contains("active")){b.a.loadAnimation({container:e,renderer:"canvas",loop:!0,autoplay:!0,path:"lottie/How-it-works.json",rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}}).addEventListener("data_ready",(function(){n.a.fromTo(e,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.5})})),e.classList.add("active");for(var r=function(e){var n=b.a.loadAnimation({container:t[e],renderer:"canvas",loop:!1,autoplay:!1,path:"lottie/Illustration_step_".concat(e+1,".json"),rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}});o[e].addEventListener("mouseenter",(function(){return n.play()})),o[e].addEventListener("mouseleave",(function(){return n.stop()}))},a=0;a<t.length;a++)r(a)}},S=function(){var e=document.querySelector("#cta"),t=document.querySelector("#cta-bg"),o=document.querySelector("#cta-tail"),n=document.querySelector("#cta-cat");if(!e.classList.contains("active")){if(window.innerWidth>1200){b.a.loadAnimation({container:t,renderer:"canvas",loop:!0,autoplay:!0,path:"lottie/Illustration-CTA-BG.json",rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}});var r=b.a.loadAnimation({container:o,renderer:"canvas",loop:!0,autoplay:!1,path:"lottie/Illustration-CTA-tail.json",rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}});b.a.loadAnimation({container:n,renderer:"canvas",loop:!0,autoplay:!0,path:"lottie/Illustration-CTA-cat.json",rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}}),e.addEventListener("mouseenter",(function(){return r.play()})),e.addEventListener("mouseleave",(function(){return r.stop()}))}else b.a.loadAnimation({container:e,renderer:"canvas",loop:!0,autoplay:!0,path:"lottie/Mobile-Tablet Illustration-CTA.json",rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}});e.classList.add("active")}},L=function(){document.querySelector("#footer-stars").classList.contains("active")},q=document.querySelectorAll(".chart-message"),A=document.querySelector(".chart-status");function O(e,t){return window.innerWidth>1200?(c.a.on(),a.A.to(window,{duration:1,scrollTo:{y:e},ease:a.c.easeOut,onComplete:function(){c.a.off(),T(e)}})):T(e),document.querySelectorAll(".section").forEach((function(e){e.classList.remove("in-viewport")})),e.classList.add("in-viewport"),t&&t.restart(),!0}function T(e){var t;!function(e){var t=getComputedStyle(e.querySelector(".section-box")),o=document.querySelector(".logo-star"),n=document.querySelectorAll(".nav .nav-link"),r=document.querySelector('[data-anchor="'+e.getAttribute("id")+'"]');"section-0"===e.getAttribute("id")?o.style.fill="#FFFFFF":o.style.fill=t.backgroundColor;for(var a=0;a<n.length;a++)n[a].classList.remove("active");r&&r.classList.add("active")}(e),"section-0"===e.getAttribute("id")&&((t=document.querySelector("#hero-animation")).classList.contains("active")||(b.a.loadAnimation({container:t,renderer:"canvas",loop:!0,autoplay:!0,path:"lottie/Illustration-main.json",rendererSettings:{progressiveLoad:!0,hideOnTransparent:!0}}).addEventListener("data_ready",(function(){n.a.fromTo(t,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.5})})),t.classList.add("active"))),"section-1"===e.getAttribute("id")?n.a.fromTo(q,{position:"absolute",opacity:0},{delay:2,position:"relative",opacity:1,duration:1,stagger:1.5,onComplete:function(){A.classList.remove("active")}}):A.classList.add("active"),"section-2"===e.getAttribute("id")&&w(),"section-3"===e.getAttribute("id")&&!document.querySelector(".prices").classList.contains("is-active")&&window.innerWidth<=600&&new l.a("#prices",{type:"loop",rewind:!0,perPage:1,autoWidth:!0,arrows:!1,speed:600}).mount(),"section-4"===e.getAttribute("id")?g():function(){clearInterval(p);for(var e=0;e<y.length;e++)y[e].classList.remove("show")}(),"section-5"===e.getAttribute("id")&&v(),"section-7"===e.getAttribute("id")&&S(),"section-8"===e.getAttribute("id")&&L()}function j(e,t){var o=document.querySelector(".header");"down"===e&&0!==window.scrollY?o.classList.add("hidden"):o.classList.remove("hidden"),"section-0"===t.getAttribute("id")?o.classList.remove("smart"):o.classList.add("smart")}a.A.registerPlugin(i.a);var k=document.querySelector(".burger"),E=document.querySelector(".header"),C=document.querySelector(".header-panel-nav"),x=document.querySelectorAll(".nav .nav-link"),P=document.querySelector(".nav");function _(){n.a.fromTo(x,{opacity:1,y:0},{duration:.5,opacity:0,y:30,stagger:.1,onComplete:function(){n.a.to(C,{duration:.2,opacity:0,onComplete:function(){P.classList.remove("shadows"),n.a.to(P,{duration:.2,width:0,height:0}),C.style.display="none",k.classList.remove("active"),E.classList.remove("is-open-menu")}})}})}k.addEventListener("click",(function(){this.classList.contains("active")?_():(console.log("open"),k.classList.add("active"),E.classList.add("is-open-menu"),n.a.to(C,{duration:.1,display:"block",onComplete:function(){C.style.opacity=1,n.a.to(P,{duration:1,width:window.innerWidth-20,height:window.innerHeight-20,onComplete:function(){P.classList.add("shadows"),n.a.fromTo(x,{opacity:0,y:30},{duration:1,opacity:1,y:0,stagger:.1,ease:a.a.easeOut})}})}}))})),n.a.registerPlugin(r.a);var I=!0;document.querySelectorAll(".anchor-scroll").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=document.getElementById(e.getAttribute("data-anchor")),n=o.getBoundingClientRect().top+window.scrollY;I=!1,window.scrollTo(0,n),setTimeout((function(){I=!0}),100),window.innerWidth<=1200?_():("section-2"===o.getAttribute("id")&&w(),"section-7"===o.getAttribute("id")&&S(),"section-8"===o.getAttribute("id")&&L())}))}));var W=document.querySelector("#eco-time"),M={score:96};function D(){W.innerHTML=M.score}var F=document.querySelector("#time");function H(e,t){parseInt(F.textContent)!==e&&(F.innerHTML=e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",t={add:"+",sub:"-"};a.g.to(M,1,{score:"".concat(t[e],"=13"),roundProps:"score",ease:a.d.easeOut,onUpdate:D})}(t),function(e){var t=document.querySelector(".clock-hour"),o=document.querySelector(".clock-minute"),r={add:{hour:480,minute:720},sub:{hour:-240,minute:-720}};n.a.fromTo(t,{rotate:120},{duration:1.5,rotate:r[e].hour,ease:a.e.easeOut}),n.a.fromTo(o,{rotate:0},{duration:1.5,rotate:r[e].minute,ease:a.e.easeOut})}(t))}document.querySelector(".timer-calculator-btn.__minus").addEventListener("click",(function(){H(Math.max(1,parseInt(F.textContent)-1),"sub")})),document.querySelector(".timer-calculator-btn.__plus").addEventListener("click",(function(){H(Math.min(99,parseInt(F.textContent)+1),"add")}));o(341);document.querySelector("#order-form").addEventListener("submit",(function(e){e.preventDefault(),n.a.fromTo(B,{opacity:1},{duration:.5,opacity:0,onComplete:function(){B.style.display="none",n.a.fromTo(N,{opacity:0,display:"none"},{duration:0,opacity:0,display:"block",onComplete:function(){N.style.opacity=1}})}})}));var B=document.querySelector(".modal-form"),N=document.querySelector(".modal-success");for(var Y=document.querySelectorAll(".close"),J=document.querySelector(".modal"),G=(document.querySelector(".modal-form"),document.querySelector(".modal-success"),0);G<Y.length;G++)Y[G].addEventListener("click",(function(){a.A.to(J,{duration:.5,opacity:0,onComplete:function(){J.style.display="none",n.a.to(N,{display:"none",onComplete:function(){n.a.to(B,{opacity:1,display:"block"})}})}})}));for(var R=document.querySelectorAll(".link-btn.default"),U=function(e){R[e].addEventListener("click",(function(t){t.preventDefault();var o=this.getAttribute("data-modal"),r=this.getAttribute("href"),i=this.getAttribute("target"),c=document.createElement("div");c.classList.add("link-btn-circle"),R[e].querySelector(".link-btn-bg").appendChild(c),n.a.set(c,{x:t.offsetX,y:t.offsetY,scale:0}),n.a.to(c,{duration:.3,scale:12,onComplete:function(){n.a.to(c,{duration:.1,opacity:0,onComplete:function(){c.remove()}})}}),o&&setTimeout((function(){!function(e){console.log("open modal - ",e);var t=document.getElementById(e);a.A.to(t,{display:"block",onComplete:function(){a.A.to(t,{duration:.2,opacity:1})}})}(o)}),100),!!r!=!!i&&setTimeout((function(){window.location.href=r}),300),!0==!!r&&!0==!!i&&setTimeout((function(){window.open(r,"_blank")}),300)}))},X=0;X<R.length;X++)U(X);o(342);window.scroll(0,0),document.querySelectorAll(".section").forEach((function(e){r.a.create({trigger:e,onEnter:function(){I&&O(e);var t=e.previousSibling.previousSibling;t&&function(e){if(window.innerWidth>1200){var t=e.querySelector(".section-box");n.a.to(t,{duration:1,opacity:0,scale:.9,y:window.innerHeight/1.3,ease:a.c.easeOut,onComplete:function(e){t.style.opacity=0}})}}(t),j("down",e)}}),r.a.create({trigger:e,start:"bottom bottom",onEnterBack:function(){I&&O(e),function(e){if(window.innerWidth>1200){var t=e.querySelector(".section-box");n.a.to(t,{duration:1,opacity:1,scale:1,y:0,ease:a.c.easeOut})}}(e),j("up",e)}})}))}});