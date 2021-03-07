(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{523:function(e,c,t){},524:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(46),i=t.n(a),r=t(201),n=t.n(r),l=t(276),d=t(109),j=t(277),b=t.n(j),o=t(538),h=t(536),m=t(540),O=t(539),p=t(51),x=t(285),u=t(535),v=t(2),N=function(e){var c=e.field,t=e.label,s=e.placeholder;return Object(v.jsxs)(u.a.Field,{children:[Object(v.jsxs)("label",{children:[t,": "]}),Object(v.jsx)(p.b,Object(x.a)({placeholder:s},c)),Object(v.jsx)("div",{style:{color:"red"},children:Object(v.jsx)(p.a,{name:c.name})})]})},g={name:"",email:"",comment:""},f=function(e){var c=e.onSubmit,t=e.onCancel;return Object(v.jsx)(p.d,{initialValues:g,onSubmit:c,validate:function(e){var c="Field is required",t={};return e.name||(t.name=c),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email=c,e.comment||(t.comment=c),t},children:function(e){var c=e.isValid,s=e.dirty;return Object(v.jsxs)(p.c,{className:"form ui",children:[Object(v.jsx)(p.b,{label:"Name",placeholder:"Name",name:"name",component:N}),Object(v.jsx)(p.b,{label:"Email",placeholder:"E-Mail Address",name:"email",component:N}),Object(v.jsx)(p.b,{label:"Comment",placeholder:"Leave a comment",name:"comment",component:N}),Object(v.jsxs)(O.a,{children:[Object(v.jsx)(O.a.Column,{floated:"left",width:5,children:Object(v.jsx)(o.a,{type:"button",onClick:t,color:"red",children:"Cancel"})}),Object(v.jsx)(O.a.Column,{floated:"right",width:5,children:Object(v.jsx)(o.a,{type:"submit",floated:"right",color:"green",disabled:!s||!c,children:"Submit"})})]})]})}})},C=function(e){var c=e.modalOpen,t=e.onClose,s=e.onSubmit,a=e.error,i=e.success;return Object(v.jsxs)(h.a,{open:c,onClose:t,centered:!1,closeIcon:!0,children:[Object(v.jsxs)(h.a.Header,{children:["Contact us: ",Object(v.jsx)("span",{className:"successSpan",children:i})]}),Object(v.jsxs)(h.a.Content,{children:[a&&Object(v.jsx)(m.a,{inverted:!0,color:"red",children:"".concat(a)}),Object(v.jsx)(f,{onSubmit:s,onCancel:t})]})]})},y=function(){var e=Object(s.useState)(!1),c=Object(d.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)(null),r=Object(d.a)(i,2),j=r[0],h=r[1],m=Object(s.useState)(null),O=Object(d.a)(m,2),p=O[0],x=O[1],u=function(){var e=Object(l.a)(n.a.mark((function e(c,t){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.resetForm,e.prev=1,h(null),x(null),s({}),e.next=7,b.a.post("/api/comments",c);case 7:x("Comment submitted successfully!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(c,t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"buttonContainer",children:[Object(v.jsx)(C,{modalOpen:t,onSubmit:u,error:j,onClose:function(){a(!1),x(null),h(null)},success:p}),Object(v.jsx)("div",{children:Object(v.jsx)(o.a,{onClick:function(){return a(!0)},className:"contactButton",id:"contactButton",children:"Got A Question?"})})]})},w=t.p+"static/media/yBottle.fa0c368b.png",S=t(119),k=function(){var e=Object(S.withScriptjs)(Object(S.withGoogleMap)((function(){return Object(v.jsx)(S.GoogleMap,{defaultZoom:16,defaultCenter:{lat:43.70403,lng:-79.5044},children:Object(v.jsx)(S.Marker,{position:{lat:43.70403,lng:-79.5044}})})})));return Object(v.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(v.jsx)(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKtFzWMXrTO4d7OB6HyaRu1b21eexoSrc",loadingElement:Object(v.jsx)("div",{style:{height:"100%"}}),containerElement:Object(v.jsx)("div",{style:{height:"100%"}}),mapElement:Object(v.jsx)("div",{style:{height:"100%"}})})})},W=t.p+"static/media/cooler.dd560fbf.png",A=t.p+"static/media/refill.be5a2356.png",B=t.p+"static/media/water-drop.67a00904.png",E=t.p+"static/media/pumpDiagonal.8be9a4d5.jpg",I=t.p+"static/media/pumpBack.ad7d9981.jpg",F=t.p+"static/media/cupsDiagonal.1372a684.jpg",M=t.p+"static/media/cupsBack.5588e8f0.jpg",$=t.p+"static/media/dispenserDiagonal.88295ee4.jpg",D=t.p+"static/media/dispenserBack.b059acd7.jpg",L=t(283),R=t.n(L),T=function(e){var c=e.image,t=e.backImage,a=e.desc,i=e.price,r=Object(s.useState)(!1),n=Object(d.a)(r,2),l=n[0],j=n[1],b=function(){j(!l)};return Object(v.jsxs)(R.a,{isFlipped:l,flipDirection:"vertical",children:[Object(v.jsx)("div",{className:"flip-card",children:Object(v.jsxs)("div",{onClick:b,className:"flip-btn",children:[Object(v.jsx)("div",{className:"card-img",children:Object(v.jsx)("img",{src:c})}),Object(v.jsx)("div",{className:"card-text",children:Object(v.jsx)("p",{children:a})}),Object(v.jsx)("div",{className:"card-price",children:Object(v.jsx)("p",{children:i})})]})}),Object(v.jsx)("div",{className:"flip-card",children:Object(v.jsx)("div",{children:Object(v.jsxs)("div",{onClick:b,className:"flip-btn",children:[Object(v.jsx)("div",{className:"card-img",children:Object(v.jsx)("img",{src:t})}),Object(v.jsx)("div",{className:"card-text",children:Object(v.jsx)("p",{children:a})}),Object(v.jsx)("div",{className:"card-price",children:Object(v.jsx)("p",{children:i})})]})})})]})},G=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"headerWrapper",children:[Object(v.jsx)("div",{className:"bannerContainer",children:Object(v.jsx)("h1",{children:"SPARKLING FRESH WATER"})}),Object(v.jsx)("div",{className:"contactContainer",children:Object(v.jsx)("div",{className:"phoneContainer",children:Object(v.jsx)("h2",{children:"Call Us: (416) 241-7866"})})})]})}),Object(v.jsx)("div",{className:"hero",children:Object(v.jsxs)("div",{className:"hero-wrapper",children:[Object(v.jsxs)("div",{className:"hero-about",children:[Object(v.jsx)("h2",{children:"Our Water"}),Object(v.jsxs)("h3",{children:["Local. Affordable. Water You Can ",Object(v.jsx)("u",{children:"Trust"}),"."]}),Object(v.jsx)("p",{children:Object(v.jsx)("i",{children:"Pure drinking water filtered by reverse osmosis"})}),Object(v.jsx)("p",{children:Object(v.jsx)("i",{children:"Total dissolved solids less than 10 parts per million"})})]}),Object(v.jsx)("div",{className:"bottle-container",children:Object(v.jsx)("img",{src:W,alt:"Splash of water"})})]})}),Object(v.jsxs)("div",{className:"prices",children:[Object(v.jsxs)("div",{className:"price-container",children:[Object(v.jsx)("div",{className:"price-title",children:Object(v.jsx)("h3",{children:Object(v.jsx)("u",{children:"Refill"})})}),Object(v.jsxs)("div",{className:"price-desc",children:[Object(v.jsx)("div",{className:"price-desc-text",children:Object(v.jsx)("p",{children:"$3.5"})}),Object(v.jsx)("div",{className:"price-desc-img refill",children:Object(v.jsx)("img",{src:B,alt:"Water droplets"})})]})]}),Object(v.jsxs)("div",{className:"price-container",children:[Object(v.jsx)("div",{className:"price-title",children:Object(v.jsx)("h3",{children:Object(v.jsx)("u",{children:"Empty Bottle"})})}),Object(v.jsxs)("div",{className:"price-desc",children:[Object(v.jsx)("div",{className:"price-desc-text",children:Object(v.jsx)("p",{children:"$10"})}),Object(v.jsx)("div",{className:"price-desc-img",children:Object(v.jsx)("img",{src:w,alt:"5 gallon water bottle"})})]})]}),Object(v.jsxs)("div",{className:"price-container",children:[Object(v.jsx)("div",{className:"price-title",children:Object(v.jsx)("h3",{children:Object(v.jsx)("u",{children:"Bottle & Water"})})}),Object(v.jsxs)("div",{className:"price-desc",children:[Object(v.jsx)("div",{className:"price-desc-text",children:Object(v.jsx)("p",{children:"$13.5"})}),Object(v.jsx)("div",{className:"price-desc-img bottleWater",children:Object(v.jsx)("img",{src:A,alt:"refill icon"})})]})]})]}),Object(v.jsxs)("div",{className:"location",children:[Object(v.jsx)("div",{className:"location-head",children:Object(v.jsxs)("div",{className:"location-wrapper",children:[Object(v.jsx)("h2",{children:"Where Are We Located?"}),Object(v.jsx)("h2",{children:Object(v.jsxs)("span",{className:"location-span",children:[Object(v.jsx)("u",{children:"1722 Jane Street"})," at Jane & Lawrence"]})})]})}),Object(v.jsx)("div",{className:"location-map",children:Object(v.jsx)("div",{className:"location-wrapper map-wrapper",children:Object(v.jsx)("div",{className:"map-container",children:Object(v.jsx)(k,{})})})})]}),Object(v.jsxs)("div",{className:"other-products",children:[Object(v.jsx)("div",{className:"other-wrapper",children:Object(v.jsx)("h2",{children:"Our Other Products"})}),Object(v.jsxs)("div",{className:"product-list",children:[Object(v.jsx)("div",{className:"product-card",children:Object(v.jsx)(T,{image:E,backImage:I,desc:"Drinking Water Pump",price:"$16"})}),Object(v.jsx)("div",{className:"product-card",children:Object(v.jsx)(T,{image:F,backImage:M,desc:"Cone Water Cups",price:"$7"})}),Object(v.jsx)("div",{className:"product-card product-card-3",children:Object(v.jsx)(T,{image:$,backImage:D,desc:"Water Cooler Cup Dispenser",price:"$28"})})]})]}),Object(v.jsx)("footer",{children:Object(v.jsxs)("div",{className:"footer-wrapper",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"When Are We Open?"}),Object(v.jsxs)("p",{children:["Wednesday: ",Object(v.jsx)("u",{children:"Closed"})," "]}),Object(v.jsxs)("p",{children:["Monday, Tuesday, Thursday, Friday, Saturday: ",Object(v.jsx)("u",{children:"10am - 6pm"})]}),Object(v.jsxs)("p",{children:["Sunday: ",Object(v.jsx)("u",{children:"11am - 4pm"})]})]}),Object(v.jsx)("div",{className:"email-btn",children:Object(v.jsx)(y,{})})]})})]})};t(522),t(523);i.a.render(Object(v.jsx)(G,{}),document.getElementById("root"))}},[[524,1,2]]]);
//# sourceMappingURL=main.ba602c92.chunk.js.map