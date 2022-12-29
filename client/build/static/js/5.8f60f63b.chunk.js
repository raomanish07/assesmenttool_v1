/*! For license information please see 5.8f60f63b.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5,43],{146:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(62),c=n(37),i=n(0),o=n.n(i),l=n(19),u=n(65),s=n(216),d=n(4),f=n.n(d),b=n(8),p=n(68),j=n(69),g=n(74),h=n(70),m=n(72),O=n(54),v=n(67);var y=n(73);function w(e,t,n){return(w=Object(y.a)()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&Object(v.a)(a,n.prototype),a}).apply(null,arguments)}function x(e){var t="function"===typeof Map?new Map:void 0;return(x=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return w(e,arguments,Object(O.a)(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Object(v.a)(r,e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=new Map,S=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e,r){var a;Object(p.a)(this,n);var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";a=t.call(this),k(Object(g.a)(a),"args",void 0),k(Object(g.a)(a),"code",void 0),k(Object(g.a)(a),"url",void 0);var i=new URL("https://developer.grammarly.com/docs/error-explainer");return i.searchParams.set("code",e.toString()),r.forEach((function(e){return i.searchParams.append("args",function(e){if(e instanceof Error)return e.message+"\n"+String(e.stack);if(null==e)return"null";if("object"==typeof e)try{return Object.prototype.toString.call(e)}catch(e){}return String(e)}(e))})),null!=a.stack&&i.searchParams.set("trace",a.stack),a.message="".concat(c,"Minified error #").concat(e,": See ").concat(i.toString()," for details."),a.args=r,a.code=e,a.url=i.toString(),a}return Object(j.a)(n,[{key:"toUserMessage",value:function(){var e=E.get("".concat(this.code));if(null==e)return[this];var t=new Map(this.args.map((function(e,t){return["${".concat(t,"}"),e]})));return e.split(/(\${\d+})/).filter((function(e){return""!==e})).map((function(e){var n;return null!==(n=t.get(e))&&void 0!==n?n:e}))}}],[{key:"setMessages",value:function(e){E=e}},{key:"create",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0;null!=a&&t.push(a);var c=new n(e,t,r);return c.stack=null==a?void 0:a.stack,c}}]),n}(x(Error)),C=new WeakMap;function H(e,t,n,r){return I.apply(this,arguments)}function I(){return(I=Object(b.a)(f.a.mark((function e(t,n,r,a){var c,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof window||void 0!==a){e.next=2;break}throw new S(21,[]);case 2:return"null"===(c=function(e){return"null"!==e.location.origin?e.location.origin:"null"!==e.origin?e.origin:"null"}(null!=a?a:window))&&(null!=a?a:window).top!==(null!=a?a:window)&&console.warn("Grammarly is not supported in IFrames with `null` origin. Consider adding `sandbox='allow-same-origin allow-scripts'` to <iframe> element."),i=new URL("https://js.grammarly.com/grammarly-editor-sdk@2.2",c),null!=n&&i.searchParams.set("clientId",n),i.searchParams.set("packageName",t),e.next=8,function(){var e=Object(b.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(r=C.get(t))){e.next=5;break}return e.next=4,r;case 4:return e.abrupt("return",e.sent);case 5:return function(e){null==e.Grammarly&&(e.Grammarly={})}(t),a=new Promise((function(e,r){try{var a=function(e,t){return e.document.querySelectorAll('script[src^="'.concat(t.replace(/\?.*$/,""),'"]'))[0]}(t,n);null!=a?c():((a=function(e,t){var n=e.document.createElement("script");return n.src=t,e.document.head.appendChild(n),n}(t,n)).addEventListener("load",c),a.addEventListener("error",(function(){try{throw new S(23,[])}catch(t){r(t)}})))}catch(t){return r(t)}function c(){try{if(null==t.Grammarly||"function"!=typeof t.Grammarly.EditorSDK)throw new S(22,[]);e(t.Grammarly)}catch(t){r(t)}}})),C.set(t,a),e.next=10,a;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()(null!=a?a:window,i.toString());case 8:if(o=e.sent,null==n){e.next=11;break}return e.abrupt("return",new o.EditorSDK(n,r));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N={onBeforeSuggestionCardOpen:"before-suggestion-card-open",onSuggestionCardOpen:"suggestion-card-open",onSuggestionCardClose:"suggestion-card-close",onPluginTurnedOff:"plugin-turned-off",onPluginError:"plugin-error",onDocumentStats:"document-stats",onSessionStats:"session-stats"},P=o.a.createContext({});function M(e,t,n){var r=Object(i.useCallback)((function(t){return null==e?void 0:e(new CustomEvent("plugin-error",{detail:t}))}),[e]);Object(i.useEffect)((function(){var e;"undefined"!=typeof navigator&&(null!=t&&null!=(null===(e=null==n?void 0:n.current)||void 0===e?void 0:e.ownerDocument.defaultView)&&window!==n.current.ownerDocument.defaultView?H("@grammarly/editor-sdk-react",t,void 0,n.current.ownerDocument.defaultView).catch(r):H("@grammarly/editor-sdk-react").catch(r))}),null!=n&&null!=t?[n,t]:[])}function R(e){return"function"==typeof e}var A=function(e){var t=function(e){var t={},n=Object(r.a)({},e);return Object.keys(N).forEach((function(r){t[r]=e[r],r in n&&delete n[r]})),[t,n]}(e),n=Object(c.a)(t,2),l=n[0],d=n[1],f=d.clientId,b=d.config,p=d.children,j=d.className,g=Object(s.a)(d,["clientId","config","children","className"]),h=Object(i.useContext)(P),m=Object(i.useRef)(),O=Object(i.useRef)(),v=Object(i.useRef)(),y=Object(i.useCallback)((function(e){m.current=e,x()}),[]),w=function(e){var t=Object(i.useState)({}),n=Object(c.a)(t,2),a=n[0],o=n[1],l=Object(i.useCallback)((function(){customElements.whenDefined(e).then((function(){return o((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(u.a)({},e,!0))}))})).catch((function(){}))}),[e]);return Object(i.useEffect)(l,[l]),!!a[e]}("grammarly-editor-plugin"),x=Object(i.useCallback)((function(){var e;null!=m.current&&null!=O.current&&w&&m.current.connect(O.current,null!==(e=v.current)&&void 0!==e?e:void 0)}),[w]),k=Object(i.useMemo)((function(){return Object(r.a)(Object(r.a)({},h.config),b)}),[h.config,b]);return Object(i.useEffect)((function(){m.current&&(m.current.config=k)}),[m,k]),Object(i.useEffect)((function(){if(null!=m.current){var e=m.current,t=[];return Object.keys(N).forEach((function(n){var r=l[n],a=N[n];null!=r&&(e.addEventListener(a,r),t.push((function(){return e.removeEventListener(a,r)})))})),function(){return t.forEach((function(e){return e()}))}}}),[].concat(Object(a.a)(Object.values(l)),[w,m.current])),M(e.onPluginError,null!=f?f:h.clientId,m),o.a.createElement("grammarly-editor-plugin",Object(r.a)(Object(r.a)({},g),{},{ref:y,clientId:null!=f?f:h.clientId,autodetect:R(p)?"off":"on",class:j}),R(p)?p({setEditor:function(e){O.current=e,x()},setViewport:function(e){v.current=e,x()}}):p)},L=n(197),z=n(274),D=n(149),F=n(215),G=n(224),T=n.n(G),V=n(6);t.default=Object(l.b)((function(e){return{page:e.default.page.toLowerCase()}}),null)((function(e){var t=Object(F.a)(),n=Object(i.useState)(e.data),o=Object(c.a)(n,2),l=o[0],u=o[1];Object(i.useEffect)((function(){l!==e.data&&u(e.data)}),[e.data]);var s=function(t,n){return!!e.prevFeedback&&(e.lastItem?e.prevFeedback.feedback.length>=2:e.prevFeedback.performance[t][n].length>=2)};return Object(V.jsxs)(L.a,{className:t.root,container:!0,direction:"column",onMouseUp:function(t){e.textSelected({text:document.getSelection().toString(),x:t.clientX,y:t.clientY})},children:[Object(V.jsxs)(L.a,{className:t.heading,container:!0,direction:"row",justify:"space-between",style:{backgroundColor:e.prevFeedback&&-1!==e.prevFeedback.rating&&"#fff8ad"},children:[Object(V.jsx)("label",{children:l.key}),Object(V.jsxs)("div",{style:{display:"flex",width:"180px",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:["Rating",Object(V.jsxs)(z.a,{style:{marginLeft:"15px"},disabled:!e.enabled,value:l.rating,name:"rating_"+l.id,onChange:function(t){u(Object(r.a)(Object(r.a)({},l),{},{rating:Number(t.target.value)})),e.changeHandler(Object(r.a)(Object(r.a)({},l),{},{rating:Number(t.target.value)}))},inputProps:{"aria-label":"age"},children:[Object(V.jsx)("option",{value:"NaN",disabled:!0,children:"Select Rating"}),Object(V.jsx)("option",{value:1,children:"New to the job or is developing and need frequent guidance"}),Object(V.jsx)("option",{value:2,children:"Good, but still has room to grow"}),Object(V.jsx)("option",{value:3,children:"Excellent and completely satisfied with performance"}),Object(V.jsx)("option",{value:4,children:"Outstanding and far exceeds performance"})]})]})]}),Object(V.jsxs)(L.a,{className:t.subHeading,container:!0,direction:"row",justify:"space-between",style:{height:e.lastItem&&e.extraFeedback?window.innerHeight-690:window.innerHeight-440},children:[console.log(l),Object(V.jsx)(L.a,{container:!0,className:t.col1,children:l.performance.map((function(n,c){var i=Object.keys(n)[0],o=Object.keys(n)[1];return Object(V.jsxs)(L.a,{container:!0,direction:"row",className:t.row,justify:"space-between",children:[Object(V.jsx)("h4",{className:t.label,style:{maxWidth:e.lastItem&&"33%"},children:i}),"/"!==n[i]&&Object(V.jsx)(D.default,{enabled:e.enabled,bgclr:s(c,i),data:n[i],options:n[o],changeHandler:function(t){return function(t,n){var c=Object(a.a)(l.performance),i=Object(r.a)({},c[n]);i[Object.keys(i)[0]]=t.join("|"),c[n]=i,u(Object(r.a)(Object(r.a)({},l),{},{performance:c})),e.changeHandler(Object(r.a)(Object(r.a)({},l),{},{performance:c}))}(t,c)}},c),Object(V.jsxs)("div",{className:t.textAreaHolder,style:{marginTop:e.enabled&&"-23px"},children:["feedback"!==e.page&&e.enabled&&Object(V.jsx)("div",{style:{textAlign:"right",cursor:"pointer",visibility:"hidden"},onClick:function(){return e.showModel(!0,c)},children:Object(V.jsx)(T.a,{color:"secondary",fontSize:"small"})}),Object(V.jsx)(A,{clientId:"client_1iDmSv24oo7QTCDva7AApM",children:Object(V.jsx)("textarea",{disabled:!e.enabled,name:"feedback_"+c,className:t.textArea,onChange:function(t){return function(t,n){if(e.lastItem)u(Object(r.a)(Object(r.a)({},l),{},{feedback:t.target.value})),e.changeHandler(Object(r.a)(Object(r.a)({},l),{},{feedback:t.target.value}));else{var c=Object(a.a)(l.performance),i=Object(r.a)({},c[Number(t.target.name.split("_")[1])]);i.feedback=t.target.value,c[Number(t.target.name.split("_")[1])]=i,u(Object(r.a)(Object(r.a)({},l),{},{performance:c})),e.changeHandler(Object(r.a)(Object(r.a)({},l),{},{performance:c}))}e.textSelected({text:""})}(t)},value:e.lastItem?l.feedback.length<2?"a. HIGHLIGHTS:\n\nb. CONSTRUCTIVE AREAS:\n\nc. PROGRESSIVE AREAS:":l.feedback:l.performance[c].feedback,placeholder:"your feedback here",style:{resize:"vertical",backgroundColor:s(c,"feedback")&&"yellow"},row:"1"})})]})]},c)}))})]})]})}))},149:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(3),c=n(0),i=n(13),o=n(305),l=n(306),u=n(303),s=n(255),d=n(50),f=n(215),b=n(6),p=Object(i.a)({root:{color:d.a[400],"&$checked":{color:d.a[600]}},checked:{}})((function(e){return Object(b.jsx)(o.a,Object(a.a)({color:"default"},e))}));t.default=function(e){var t=Object(f.a)(),n=Object(c.useState)([]),a=Object(r.a)(n,2),i=a[0],o=a[1];Object(c.useEffect)((function(){o(e.data.split("|"))}),[e.data]);return Object(b.jsxs)("div",{className:t.inputList,children:[Object(b.jsx)(l.a,{value:i,displayEmpty:!0,inputProps:{"aria-label":"Without label"},multiple:!0,renderValue:function(e){return e.join("- ")},style:{background:e.bgclr&&"yellow",width:"100%"},onChange:function(t){e.enabled&&(e.changeHandler(t.target.value),o(t.target.value))},children:e.options.map((function(t,n){return Object(b.jsxs)(u.a,{value:t,children:[e.enabled&&Object(b.jsx)(p,{checked:i.indexOf(t)>-1}),Object(b.jsx)(s.a,{primary:t})]},n)}))}),i.map((function(e,t){return e.length>=2&&Object(b.jsx)("li",{style:{marginTop:"5px"},children:e},t)}))]})}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(195),a=Object(r.a)({root:{paddingBottom:20},col1:{width:"100%",alignItems:"flex-start"},label:{height:30,minWidth:"13%",maxWidth:"15%",display:"inline-block"},input:{width:"30%",height:30,display:"inline-block",fontSize:"14px"},inputList:{width:"30%",display:"inline-block",fontSize:"14px",height:"auto"},textAreaHolder:{minWidth:"50%",minHeight:"90px",fontSize:"14px"},textArea:{width:"98%",minHeight:"70%"},heading:{background:"#EEEEEE",color:"black",padding:5},subHeading:{overflowY:"auto",paddingTop:10},row:{marginTop:20,fontSize:"14px"}})},216:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},224:function(e,t,n){"use strict";var r=n(204),a=n(205);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),i=(0,r(n(206)).default)(c.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.default=i}}]);
//# sourceMappingURL=5.8f60f63b.chunk.js.map