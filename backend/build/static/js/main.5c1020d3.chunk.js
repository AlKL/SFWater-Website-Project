(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{166:function(e,n,t){},193:function(e,n,t){},194:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(56),a=t.n(r),l=(t(166),t(9)),o=function(){return Object(l.jsx)("h1",{className:"title",children:"Sparkling Fresh Water"})},s=t(124),i=t.n(s),d=t(144),j=t(118),u=t(145),b=t.n(u),m=t(208),O=t(206),h=t(210),x=t(209),p=t(38),f=t(150),v=t(205),C=function(e){var n=e.field,t=e.label,c=e.placeholder;return Object(l.jsxs)(v.a.Field,{children:[Object(l.jsxs)("label",{children:[t,": "]}),Object(l.jsx)(p.b,Object(f.a)({placeholder:c},n)),Object(l.jsx)("div",{style:{color:"red"},children:Object(l.jsx)(p.a,{name:n.name})})]})},S={name:"",email:"",comment:""},y=function(e){var n=e.onSubmit,t=e.onCancel;return Object(l.jsx)(p.d,{initialValues:S,onSubmit:n,validate:function(e){var n="Field is required",t={};return e.name||(t.name=n),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email=n,e.comment||(t.comment=n),t},children:function(e){var n=e.isValid,c=e.dirty;return Object(l.jsxs)(p.c,{className:"form ui",children:[Object(l.jsx)(p.b,{label:"Name",placeholder:"Name",name:"name",component:C}),Object(l.jsx)(p.b,{label:"Email",placeholder:"E-Mail Address",name:"email",component:C}),Object(l.jsx)(p.b,{label:"Comment",placeholder:"Leave a comment",name:"comment",component:C}),Object(l.jsxs)(x.a,{children:[Object(l.jsx)(x.a.Column,{floated:"left",width:5,children:Object(l.jsx)(m.a,{type:"button",onClick:t,color:"red",children:"Cancel"})}),Object(l.jsx)(x.a.Column,{floated:"right",width:5,children:Object(l.jsx)(m.a,{type:"submit",floated:"right",color:"green",disabled:!c||!n,children:"Add"})})]})]})}})},k=function(e){var n=e.modalOpen,t=e.onClose,c=e.onSubmit,r=e.error,a=e.success;return Object(l.jsxs)(O.a,{open:n,onClose:t,centered:!1,closeIcon:!0,children:[Object(l.jsx)(O.a.Header,{children:"Contact us:"}),a,Object(l.jsxs)(O.a.Content,{children:[r&&Object(l.jsx)(h.a,{inverted:!0,color:"red",children:"Error: ".concat(r)}),Object(l.jsx)(y,{onSubmit:c,onCancel:t})]})]})},g=function(){var e=Object(c.useState)(!1),n=Object(j.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(null),o=Object(j.a)(a,2),s=o[0],u=o[1],O=Object(c.useState)(null),h=Object(j.a)(O,2),x=h[0],p=h[1],f=function(){var e=Object(d.a)(i.a.mark((function e(n,t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.resetForm,e.prev=1,u(null),p(null),c({}),e.next=7,b.a.post("/api/comments",n);case 7:p("Comment submitted successfully!"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.response.data),u("Please try again");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n,t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)(k,{modalOpen:t,onSubmit:f,error:s,onClose:function(){r(!1),p(null),u(null)},success:x}),Object(l.jsx)(m.a,{onClick:function(){return r(!0)},children:"Contact Us!"})]})},w=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)(g,{})]})};t(193);a.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.5c1020d3.chunk.js.map