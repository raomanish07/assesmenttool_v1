(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[39],{159:function(e,t,a){"use strict";a.r(t);var n=a(3),s=(a(0),a(269)),r=a(6);t.default=function(e){return Object(r.jsx)(s.a,Object(n.a)({elevation:6,variant:"filled"},e))}},182:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(37),r=a(0),c=a(19),i=a(197),l=a(282),o=a(283),d=a(199),j=a(306),u=a(275),h=a(303),b=a(276),p=a(219),O=a(267),g=a.n(O),v=a(268),w=a.n(v),x=a(43),m=a(159),f=a(63),y=a(195),N=Object(y.a)({root:{flexGrow:1,height:window.innerHeight-60},card:{width:500,height:360},label:{width:120,height:30,paddingTop:10,display:"inline-block"},input:{height:30,width:400,display:"inline-block"},content:{padding:40},btnHolder:{marginTop:30,textAlign:"center"},btn:{width:200}}),S=a(6);t.default=Object(c.b)((function(e){return{serverError:e.auth.serverError,secretQuestions:e.default.secretQuestions,passwordReset:e.auth.passwordReset}}),{FPassword:x.a,ShowPage:f.f})((function(e){var t=e.secretQuestions,a=e.passwordReset,c=e.serverError,O=e.FPassword,v=e.ShowPage,x=N(),f=Object(r.useState)(""),y=Object(s.a)(f,2),k=y[0],C=y[1],P=Object(r.useState)(""),T=Object(s.a)(P,2),E=T[0],R=T[1],Q=Object(r.useState)(""),q=Object(s.a)(Q,2),A=q[0],F=q[1],H=Object(r.useState)({value:"",show:!1}),L=Object(s.a)(H,2),D=L[0],I=L[1],J=Object(r.useState)(""),G=Object(s.a)(J,2),M=G[0],W=G[1];return Object(S.jsxs)(i.a,{container:!0,className:x.root,direction:"column",justify:"center",alignItems:"center",children:[Object(S.jsx)(l.a,{className:x.card,children:Object(S.jsx)(o.a,{className:x.content,children:a?Object(S.jsxs)(i.a,{container:!0,alignItems:"center",justify:"center",direction:"column",style:{marginTop:75},children:[Object(S.jsx)("h4",{children:"Password Reset Successfull."}),Object(S.jsxs)("div",{style:{marginTop:10},children:["please ",Object(S.jsx)(d.a,{onClick:function(){return v("Login")},variant:"contained",color:"primary",children:"Login"})," to continue."]})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{className:x.label,children:"Email Address:"}),Object(S.jsx)("input",{className:x.input,name:"email",value:M,type:"text",onChange:function(e){return W(e.target.value)},placeholder:"please enter valid email"})]}),Object(S.jsxs)("div",{style:{paddingTop:40},children:[Object(S.jsxs)(j.a,{style:{width:200},className:x.select,value:E,displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange:function(e){return R(e.target.value)},input:Object(S.jsx)(u.a,{}),children:[Object(S.jsxs)(h.a,{value:"",children:[" ",Object(S.jsx)("em",{children:"Select a question"})," "]}),t.map((function(e){return Object(S.jsx)(h.a,{value:e,children:e},e)}))]}),Object(S.jsx)(u.a,{style:{marginLeft:20},value:A,placeholder:"your answer here",onChange:function(e){return F(e.target.value)}})]}),Object(S.jsx)("div",{style:{paddingTop:40},children:Object(S.jsx)(u.a,{style:{width:"100%"},type:D.show?"text":"password",value:D.value,onChange:function(e){return I(Object(n.a)(Object(n.a)({},D),{},{value:e.target.value}))},endAdornment:Object(S.jsx)(b.a,{position:"end",children:Object(S.jsx)(p.a,{"aria-label":"toggle password visibility",onClick:function(){return I(Object(n.a)(Object(n.a)({},D),{},{show:!D.show}))},onMouseDown:function(e){return e.preventDefault()},children:D.show?Object(S.jsx)(g.a,{}):Object(S.jsx)(w.a,{})})})})}),Object(S.jsx)("div",{className:x.btnHolder,children:Object(S.jsx)(d.a,{className:x.btn,variant:"contained",color:"primary",onClick:function(){var e="";-1==M.search("@")||M.length<=4||-1==M.search(".")?e="please enter valid email address":D.length<6?e="please enter valid password":(A.length<=2||E.length<=2)&&(e="please select question and answer"),e.length<=0?O({email:M,password:D,secretQst:{qst:E,answer:A}}):C(e)},children:"Reset"})})]})})}),(k.length>=5||c.length>=5)&&Object(S.jsx)(m.default,{className:x.alert,severity:"error",children:k.length>=4&&k||c})]})}))}}]);
//# sourceMappingURL=39.2302d522.chunk.js.map