!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var i={form:document.querySelector(".js-search-form"),list:document.querySelector(".js-gallery"),backdroap:document.querySelector("[data-load]"),spinner:document.querySelector(".js-spinner")},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){var n=l.default(e,t,"get");return u.default(e,n)};var l=c(o("1UHsN")),u=c(o("ffZzF"));function c(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){p.default(e,t),t.set(e,n)};var f,p=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){var r=v.default(e,t,"set");return g.default(e,r,n),n};var v=y(o("1UHsN")),g=y(o("jdVyQ"));function y(e){return e&&e.__esModule?e:{default:e}}var m={};function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,n){t&&b(e.prototype,t);n&&b(e,n);return e};var w=new WeakMap,_=new WeakMap,x=new WeakMap,M=new WeakMap,P=new WeakMap,j=new WeakMap,k=function(){"use strict";function t(){e(a)(this,t),e(d)(this,w,{writable:!0,value:"https://api.unsplash.com/search/photos"}),e(d)(this,_,{writable:!0,value:"LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc"}),e(d)(this,x,{writable:!0,value:""}),e(d)(this,M,{writable:!0,value:1}),e(d)(this,P,{writable:!0,value:15}),e(d)(this,j,{writable:!0,value:0})}return e(m)(t,[{key:"getPhotos",value:function(){return fetch("".concat(e(s)(this,w),"?client_id=").concat(e(s)(this,_),"&page=").concat(e(s)(this,M),"&query=").concat(e(s)(this,x),"&per_page=").concat(e(s)(this,P),"&color=black_and_white&orientation=landscape")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}},{key:"setTotalPhotos",value:function(t){e(h)(this,j,t)}},{key:"hasMorePhotos",value:function(){return e(s)(this,M)<Math.ceil(e(s)(this,j)/e(s)(this,P))}},{key:"incrementPage",value:function(){e(h)(this,M,e(s)(this,M)+1)}},{key:"resetPage",value:function(){e(h)(this,M,1)}},{key:"query",get:function(){return e(s)(this,x)},set:function(t){e(h)(this,x,t)}}]),t}();function O(e){return e.map((function(e){var t=e.urls,n=e.alt_description;return'<li class="gallery__item"><img src="'.concat(t.small,'" alt="').concat(n,'" class="gallery-img" /></li>')})).join("")}var q,T,E,N,C={};q=C,T="Spinner",E=function(){return S},N=function(e){return S=e},Object.defineProperty(q,T,{get:E,set:N,enumerable:!0,configurable:!0});var I=function(){return I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},I.apply(this,arguments)},z={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},S=function(){function e(e){void 0===e&&(e={}),this.opts=I(I({},z),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),L(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",r="none";!0===t.shadow?r="0 2px 4px #000":"string"==typeof t.shadow&&(r=t.shadow);for(var o=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],r=0,o=e.split(",");r<o.length;r++){var i=o[r].match(t);if(null!==i){var a=+i[2],s=+i[5],l=i[4],u=i[7];0!==a||l||(l=u),0!==s||u||(u=l),l===u&&n.push({prefix:i[1]||"",x:a,y:s,xUnits:l,yUnits:u,end:i[8]})}}return n}(r),i=0;i<t.lines;i++){var a=~~(360/t.lines*i+t.rotate),s=L(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:U(t.fadeColor,i),borderRadius:n,transformOrigin:"left",transform:"rotate("+a+"deg) translateX("+t.radius+"px)"}),l=i*t.direction/t.lines/t.speed;l-=1/t.speed;var u=L(document.createElement("div"),{width:"100%",height:"100%",background:U(t.color,i),borderRadius:n,boxShadow:A(o,a),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});s.appendChild(u),e.appendChild(s)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function L(e,t){for(var n in t)e.style[n]=t[n];return e}function U(e,t){return"string"==typeof e?e:e[t%e.length]}function A(e,t){for(var n=[],r=0,o=e;r<o.length;r++){var i=o[r],a=W(i.x,i.y,t);n.push(i.prefix+a[0]+i.xUnits+" "+a[1]+i.yUnits+i.end)}return n.join(", ")}function W(e,t,n){var r=n*Math.PI/180,o=Math.sin(r),i=Math.cos(r);return[Math.round(1e3*(e*i+t*o))/1e3,Math.round(1e3*(-e*o+t*i))/1e3]}var Z=new(0,C.Spinner)({lines:8,length:16,width:52,radius:0,scale:2.45,corners:1,speed:.7,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}),F=function(){Z.spin(i.spinner),i.backdroap.classList.remove("is-hidden")},H=function(){Z.stop(),i.backdroap.classList.add("is-hidden")},R=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(console.log(e.target),t.unobserve(e.target),V.incrementPage(),F(),V.getPhotos().then((function(e){var n=O(e.results);if(i.list.insertAdjacentHTML("beforeend",n),V.hasMorePhotos()){var r=document.querySelector(".gallery__item:last-child");t.observe(r)}})).catch((function(e){return console.log(e)})).finally((function(){H()})))}))}),{root:null,rootMargin:"100px",threshold:1});i.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.query.value;if(console.log(t),!t)return alert("input any data");i.list.innerHTML="",V.resetPage(),V.query=t,F(),V.getPhotos().then((function(e){var t=e.results,n=e.total;if(0===t.length)return alert("enter normal value");var r=O(t);if(i.list.insertAdjacentHTML("beforeend",r),V.setTotalPhotos(n),V.hasMorePhotos()){var o=document.querySelector(".gallery__item:last-child");R.observe(o)}})).catch((function(e){return console.log(e)})).finally((function(){H()}))}));var V=new k}();
//# sourceMappingURL=infifnite-scroll.026cb0ea.js.map