(this["webpackJsonphooks-news"]=this["webpackJsonphooks-news"]||[]).push([[0],{25:function(n,e,t){n.exports=t(48)},48:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=t(6),u=t.n(i),l=t(19),s=t(4),f=t(20),d=t.n(f),b=t(1),m=t(2);function g(){var n=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transform: rotate(",");\n\n  &::before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #fff;\n    border-radius: 100%;\n    animation: "," 1.2s infinite ease-in-out both;\n    animation-delay: ",";\n  }\n"]);return g=function(){return n},n}function p(){var n=Object(b.a)(["\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return p=function(){return n},n}function h(){var n=Object(b.a)(["\n  0%, 80%, 100% { transform: scale(0); }\n  40% { transform: scale(1); }\n"]);return h=function(){return n},n}var v=Object(m.c)(h()),x=m.b.div(p()),E=m.b.div(g(),(function(n){var e=n.angle;return"".concat(e,"deg")}),v,(function(n){var e=n.delay;return"".concat(e,"s")})),y=function(){return a.a.createElement(x,null,a.a.createElement(E,{angle:0,delay:0}),a.a.createElement(E,{angle:360,delay:-1.1}),a.a.createElement(E,{angle:60,delay:-1}),a.a.createElement(E,{angle:90,delay:-.9}),a.a.createElement(E,{angle:120,delay:-.8}),a.a.createElement(E,{angle:150,delay:-.7}),a.a.createElement(E,{angle:180,delay:-.6}),a.a.createElement(E,{angle:210,delay:-.5}),a.a.createElement(E,{angle:240,delay:-.4}),a.a.createElement(E,{angle:270,delay:-.3}),a.a.createElement(E,{angle:300,delay:-.2}),a.a.createElement(E,{angle:330,delay:-.1}))};function j(){var n=Object(b.a)(["\n  color: #999EFF;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 60px;\n"]);return j=function(){return n},n}function O(){var n=Object(b.a)(["\n  width: 50%;\n"]);return O=function(){return n},n}function w(){var n=Object(b.a)(["\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return w=function(){return n},n}var k=m.b.div(w()),F=m.b.img(O()),S=m.b.div(j()),C=function(n){return a.a.createElement(k,null,a.a.createElement(F,{src:"https://i.imgur.com/A040Lxr.png/360",alt:"Error image"}),a.a.createElement(S,null,"Sorry, something went wrong...",a.a.createElement("div",{style:{marginTop:20}},a.a.createElement("em",null,n.error,"."))))};function z(){var n=Object(b.a)(["\n  padding: 15px;\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 5px;\n"]);return z=function(){return n},n}function D(){var n=Object(b.a)(["\n  margin: 2px 0;\n  border-radius: 5px;\n  transition: background .2s ease;\n  background: rgba(0, 0, 0, 0);\n\n  &:nth-child(odd) {\n    background: #8086FF30;\n  }\n\n  &:nth-child(even) {\n    background: #999EFF50;\n  }\n\n  &:hover {\n    background: #6C72D9;\n  }\n"]);return D=function(){return n},n}function B(){var n=Object(b.a)(["\n  list-style: none;\n  margin-top: 40px;\n  box-shadow: 2px 2px rgba(0, 0, 0, .2);\n  border-radius: 10px;\n"]);return B=function(){return n},n}function A(){var n=Object(b.a)(["\n  min-width: 100px;\n  padding: 10px;\n  margin-right: 5px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: none;\n  background: ",";\n"]);return A=function(){return n},n}function I(){var n=Object(b.a)(["\n  padding: 10px;\n  margin-right: 10px;\n  border-radius: 5px;\n  border: none;\n  font-size: 16px;\n  outline: 2px solid rgba(0, 0, 0, 0);\n  transition: outline .2s ease;\n  background: #ccc;\n\n  &:focus {\n    outline: 2px solid #F29F05;\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(b.a)(["\n  text-align: left;\n  position: absolute;\n  left: 0%;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return J=function(){return n},n}function L(){var n=Object(b.a)(["\n  position: relative;\n  text-align: center;\n"]);return L=function(){return n},n}function M(){var n=Object(b.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    height: 100vh;\n    padding: 30px;\n    display: flex;\n    background: #1D1C40;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  #root {\n    width: 50vw;\n    margin: 0 auto;\n  }\n"]);return M=function(){return n},n}var R=Object(m.a)(M()),W=m.b.form(L()),Y=m.b.img(J()),q=m.b.input(I()),T=m.b.input(A(),(function(n){return n.light?"#F4BA4E":"#F29F05"})),$=m.b.ul(B()),G=m.b.li(D()),H=m.b.a(z());var K=Object(r.memo)((function(n){var e=n.results;return a.a.createElement($,null,e.map((function(n){return n.url&&a.a.createElement(G,{key:n.objectID},a.a.createElement(H,{href:n.url},n.title))})))})),N=function(){var n=Object(r.useState)([]),e=Object(s.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)("react hooks"),i=Object(s.a)(c,2),f=i[0],b=i[1],m=Object(r.useState)(!1),g=Object(s.a)(m,2),p=g[0],h=g[1],v=Object(r.useState)(null),x=Object(s.a)(v,2),E=x[0],j=x[1],O=Object(r.useRef)(),w=function(){var n=Object(l.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,e="http://hn.algolia.com/api/v1/search?query=".concat(f),n.next=5,d.a.get(e);case 5:t=n.sent,o(t.data.hits),O.current.focus(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),j(n.t0);case 13:h(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}(),k=Object(r.useCallback)(w,[]);return Object(r.useEffect)((function(){k()}),[k]),a.a.createElement(a.a.Fragment,null,a.a.createElement(W,{onSubmit:function(n){n.preventDefault(),w()}},a.a.createElement(Y,{src:"https://icon.now.sh/react/48/00d8ff",alt:"React Logo"}),a.a.createElement(q,{type:"text",onChange:function(n){return b(n.target.value)},value:f,ref:O,autoFocus:!0}),a.a.createElement(T,{type:"submit",value:"Search"}),a.a.createElement(T,{light:!0,type:"button",value:"Clear",onClick:function(){b(""),O.current.focus()}})),p?a.a.createElement(y,null):a.a.createElement(K,{results:t}),E&&a.a.createElement(C,{error:E.message}),a.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.11d997ff.chunk.js.map