(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{nI0H:function(e,s,r){"use strict";r.r(s),r.d(s,"ion_spinner",(function(){return a}));var t=r("A36C"),n=r("Zgba"),i=r("74mu"),o=r("h3R7");const a=class{constructor(e){Object(t.o)(this,e),this.paused=!1}getName(){const e=this.name||n.c.get("spinner"),s=Object(n.b)(this);return e||("ios"===s?"lines":"circular")}render(){const e=Object(n.b)(this),s=this.getName(),r=o.a[s]||o.a.lines,a="number"==typeof this.duration&&this.duration>10?this.duration:r.dur,p=[];if(void 0!==r.circles)for(let t=0;t<r.circles;t++)p.push(l(r,a,t,r.circles));else if(void 0!==r.lines)for(let t=0;t<r.lines;t++)p.push(c(r,a,t,r.lines));return Object(t.j)(t.c,{class:Object(i.a)(this.color,{[e]:!0,["spinner-"+s]:!0,"spinner-paused":!!this.paused||n.c.getBoolean("_testing")}),role:"progressbar",style:r.elmDuration?{animationDuration:a+"ms"}:{}},p)}},l=(e,s,r,n)=>{const i=e.fn(s,r,n);return i.style["animation-duration"]=s+"ms",Object(t.j)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(t.j)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:s+"ms"}:{}}))},c=(e,s,r,n)=>{const i=e.fn(s,r,n);return i.style["animation-duration"]=s+"ms",Object(t.j)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(t.j)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};a.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;transform-origin:center;position:absolute;width:100%;height:100%;transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-circular){animation:spinner-circular linear infinite}:host(.spinner-circular) circle{animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"}}]);