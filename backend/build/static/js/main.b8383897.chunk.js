(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{523:function(e,c,s){},524:function(e,c,s){"use strict";s.r(c);var a=s(0),t=s(46),i=s.n(t),l=s(201),n=s.n(l),r=s(276),d=s(109),j=s(277),o=s.n(j),b=s(538),h=s(536),m=s(540),p=s(539),O=s(51),x=s(285),A=s(535),u=s(1),g=function(e){var c=e.field,s=e.label,a=e.placeholder;return Object(u.jsxs)(A.a.Field,{children:[Object(u.jsxs)("label",{children:[s,": "]}),Object(u.jsx)(O.b,Object(x.a)({placeholder:a},c)),Object(u.jsx)("div",{style:{color:"red"},children:Object(u.jsx)(O.a,{name:c.name})})]})},v={name:"",email:"",comment:""},f=function(e){var c=e.onSubmit,s=e.onCancel;return Object(u.jsx)(O.d,{initialValues:v,onSubmit:c,validate:function(e){var c="Field is required",s={};return e.name||(s.name=c),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(s.email="Invalid email address"):s.email=c,e.comment||(s.comment=c),s},children:function(e){var c=e.isValid,a=e.dirty;return Object(u.jsxs)(O.c,{className:"form ui",children:[Object(u.jsx)(O.b,{label:"Name",placeholder:"Name",name:"name",component:g}),Object(u.jsx)(O.b,{label:"Email",placeholder:"E-Mail Address",name:"email",component:g}),Object(u.jsx)(O.b,{label:"Comment",placeholder:"Leave a comment",name:"comment",component:g}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)(p.a.Column,{floated:"left",width:5,children:Object(u.jsx)(b.a,{type:"button",onClick:s,color:"red",children:"Cancel"})}),Object(u.jsx)(p.a.Column,{floated:"right",width:5,children:Object(u.jsx)(b.a,{type:"submit",floated:"right",color:"green",disabled:!a||!c,children:"Submit"})})]})]})}})},C=function(e){var c=e.modalOpen,s=e.onClose,a=e.onSubmit,t=e.error,i=e.success;return Object(u.jsxs)(h.a,{open:c,onClose:s,centered:!1,closeIcon:!0,children:[Object(u.jsxs)(h.a.Header,{children:["Contact us: ",Object(u.jsx)("span",{className:"successSpan",children:i})]}),Object(u.jsxs)(h.a.Content,{children:[t&&Object(u.jsx)(m.a,{inverted:!0,color:"red",children:"".concat(t)}),Object(u.jsx)(f,{onSubmit:a,onCancel:s})]})]})},N=function(){var e=Object(a.useState)(!1),c=Object(d.a)(e,2),s=c[0],t=c[1],i=Object(a.useState)(null),l=Object(d.a)(i,2),j=l[0],h=l[1],m=Object(a.useState)(null),p=Object(d.a)(m,2),O=p[0],x=p[1],A=function(){var e=Object(r.a)(n.a.mark((function e(c,s){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.resetForm,e.prev=1,h(null),x(null),a({}),e.next=7,o.a.post("/api/comments",c);case 7:x("Comment submitted successfully!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),h(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(c,s){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"buttonContainer",children:[Object(u.jsx)(C,{modalOpen:s,onSubmit:A,error:j,onClose:function(){t(!1),x(null),h(null)},success:O}),Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{onClick:function(){return t(!0)},className:"contactButton",id:"contactButton",children:"Got A Question?"})})]})},I=s.p+"static/media/yBottle.fa0c368b.png",w=s(119),Q=function(){var e=Object(w.withScriptjs)(Object(w.withGoogleMap)((function(){return Object(u.jsx)(w.GoogleMap,{defaultZoom:19,defaultCenter:{lat:43.70403,lng:-79.5044},children:Object(u.jsx)(w.Marker,{position:{lat:43.70403,lng:-79.50435}})})})));return Object(u.jsx)("div",{style:{height:"100%",width:"100%"},children:Object(u.jsx)(e,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyCsD6vKl-fNGpxy0iUgtouPdRYLcvlGRsA"),loadingElement:Object(u.jsx)("div",{style:{height:"100%"}}),containerElement:Object(u.jsx)("div",{style:{height:"100%"}}),mapElement:Object(u.jsx)("div",{style:{height:"100%"}})})})},k=s.p+"static/media/cooler.dd560fbf.png",y=s.p+"static/media/refill.be5a2356.png",V=s.p+"static/media/water-drop.67a00904.png",q=s.p+"static/media/pumpDiagonal.8be9a4d5.jpg",U=s.p+"static/media/pumpBack.ad7d9981.jpg",D=s.p+"static/media/cupsDiagonal.1372a684.jpg",G=s.p+"static/media/cupsBack.5588e8f0.jpg",B=s.p+"static/media/dispenserDiagonal.88295ee4.jpg",E=s.p+"static/media/dispenserBack.b059acd7.jpg",T=s(283),F=s.n(T),S=function(e){var c=e.image,s=e.backImage,t=e.desc,i=e.price,l=Object(a.useState)(!1),n=Object(d.a)(l,2),r=n[0],j=n[1],o=function(){j(!r)};return Object(u.jsxs)(F.a,{isFlipped:r,flipDirection:"vertical",children:[Object(u.jsx)("div",{className:"flip-card",onMouseEnter:o,children:Object(u.jsxs)("div",{className:"flip-btn",children:[Object(u.jsx)("div",{className:"card-img",children:Object(u.jsx)("img",{src:c})}),Object(u.jsx)("div",{className:"card-text",children:Object(u.jsx)("p",{children:t})}),Object(u.jsx)("div",{className:"card-price",children:Object(u.jsx)("p",{children:i})})]})}),Object(u.jsx)("div",{className:"flip-card",onMouseLeave:o,children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"flip-btn",children:[Object(u.jsx)("div",{className:"card-img",children:Object(u.jsx)("img",{src:s})}),Object(u.jsx)("div",{className:"card-text",children:Object(u.jsx)("p",{children:t})}),Object(u.jsx)("div",{className:"card-price",children:Object(u.jsx)("p",{children:i})})]})})})]})},Y=s.p+"static/media/google.ed8cc84b.png",Z=s.p+"static/media/yellowPages.749119fc.png",L=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"headerWrapper",children:[Object(u.jsxs)("div",{className:"bannerContainer",children:[Object(u.jsx)("h1",{children:"SPARKLING FRESH WATER"}),Object(u.jsxs)("div",{className:"bannerLinks",children:[Object(u.jsx)("a",{className:"underline",href:"https://www.google.com/search?q=sparkling%20fresh%20water&rlz=1C5CHFA_enCA904CA904&oq=s&aqs=chrome.2.69i60j69i59l2j69i60l5.1463j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00rUXG5scS4JujNjbBqxGuFc2vUDA:1621203561487&rflfq=1&num=10&rldimm=10018326207811326723&lqi=ChVzcGFya2xpbmcgZnJlc2ggd2F0ZXJaLgoVc3BhcmtsaW5nIGZyZXNoIHdhdGVyIhVzcGFya2xpbmcgZnJlc2ggd2F0ZXKSARZib3R0bGVkX3dhdGVyX3N1cHBsaWVy&ved=2ahUKEwjF9I_znc_wAhVVa80KHWC6BA4QvS4wAHoECAYQNg&rlst=f#rlfi=hd:;si:10018326207811326723,l,ChVzcGFya2xpbmcgZnJlc2ggd2F0ZXJaLgoVc3BhcmtsaW5nIGZyZXNoIHdhdGVyIhVzcGFya2xpbmcgZnJlc2ggd2F0ZXKSARZib3R0bGVkX3dhdGVyX3N1cHBsaWVy;mv:[[43.7833531,-79.4822509],[43.1938171,-79.8986962]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2",children:Object(u.jsx)("img",{src:Y})}),Object(u.jsx)("a",{className:"underline",href:"https://www.yelp.ca/biz/sparkling-fresh-water-north-york",children:Object(u.jsx)("img",{src:"data:image/png;base64,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"})}),Object(u.jsx)("a",{className:"underline",href:"https://www.yellowpages.ca/bus/Ontario/York/Sparkling-Fresh-Water/7785807.html",children:Object(u.jsx)("img",{src:Z})})]}),Object(u.jsx)("h1",{className:"mobile-location",children:"1722 Jane Street"})]}),Object(u.jsx)("div",{className:"contactContainer",children:Object(u.jsx)("div",{className:"phoneContainer",children:Object(u.jsx)("h2",{className:"underline",children:Object(u.jsx)("a",{href:"tel:416-241-7866",children:"Call: (416) 241-7866"})})})})]})}),Object(u.jsx)("div",{className:"hero",children:Object(u.jsxs)("div",{className:"hero-wrapper",children:[Object(u.jsxs)("div",{className:"hero-about",children:[Object(u.jsx)("h2",{children:"Our Water"}),Object(u.jsxs)("h3",{children:["Local. Affordable. Water You Can ",Object(u.jsx)("u",{children:"Trust"}),"."]}),Object(u.jsx)("p",{children:Object(u.jsx)("i",{children:"Pure drinking water filtered by reverse osmosis"})}),Object(u.jsx)("p",{children:Object(u.jsx)("i",{children:"Total dissolved solids less than 10 parts per million"})})]}),Object(u.jsx)("div",{className:"bottle-container",children:Object(u.jsx)("img",{src:k,alt:"Splash of water"})})]})}),Object(u.jsxs)("div",{className:"prices",children:[Object(u.jsxs)("div",{className:"price-container",children:[Object(u.jsx)("div",{className:"price-title",children:Object(u.jsx)("h3",{children:Object(u.jsx)("u",{children:"Refill"})})}),Object(u.jsxs)("div",{className:"price-desc",children:[Object(u.jsx)("div",{className:"price-desc-text",children:Object(u.jsx)("p",{children:"$3.5"})}),Object(u.jsx)("div",{className:"price-desc-img refill",children:Object(u.jsx)("img",{src:V,alt:"Water droplets"})})]})]}),Object(u.jsxs)("div",{className:"price-container",children:[Object(u.jsx)("div",{className:"price-title",children:Object(u.jsx)("h3",{children:Object(u.jsx)("u",{children:"Empty Bottle"})})}),Object(u.jsxs)("div",{className:"price-desc",children:[Object(u.jsx)("div",{className:"price-desc-text",children:Object(u.jsx)("p",{children:"$10"})}),Object(u.jsx)("div",{className:"price-desc-img emptyBottle",children:Object(u.jsx)("img",{src:I,alt:"5 gallon water bottle"})})]})]}),Object(u.jsxs)("div",{className:"price-container",children:[Object(u.jsx)("div",{className:"price-title",children:Object(u.jsx)("h3",{children:Object(u.jsx)("u",{children:"Bottle & Water"})})}),Object(u.jsxs)("div",{className:"price-desc",children:[Object(u.jsx)("div",{className:"price-desc-text",children:Object(u.jsx)("p",{children:"$13.5"})}),Object(u.jsx)("div",{className:"price-desc-img bottleWater",children:Object(u.jsx)("img",{src:y,alt:"refill icon"})})]})]})]}),Object(u.jsxs)("div",{className:"location",children:[Object(u.jsx)("div",{className:"location-head",children:Object(u.jsxs)("div",{className:"location-wrapper",children:[Object(u.jsx)("h2",{children:"Where Are We Located?"}),Object(u.jsx)("h2",{children:Object(u.jsxs)("span",{className:"location-span",children:[Object(u.jsx)("u",{children:"1722 Jane Street"})," at Jane & Lawrence"]})})]})}),Object(u.jsx)("div",{className:"location-map",children:Object(u.jsx)("div",{className:"location-wrapper map-wrapper",children:Object(u.jsx)("div",{className:"map-container",children:Object(u.jsx)(Q,{})})})})]}),Object(u.jsxs)("div",{className:"other-products",children:[Object(u.jsxs)("div",{className:"other-wrapper",children:[Object(u.jsx)("h2",{children:"Our Other Products"}),Object(u.jsx)("h2",{children:Object(u.jsx)("span",{className:"underline",children:"Hover to see the product!"})})]}),Object(u.jsxs)("div",{className:"product-list",children:[Object(u.jsx)("div",{className:"product-card",children:Object(u.jsx)(S,{image:q,backImage:U,desc:"Drinking Water Pump",price:"$16"})}),Object(u.jsx)("div",{className:"product-card",children:Object(u.jsx)(S,{image:D,backImage:G,desc:"Cone Water Cups",price:"$7"})}),Object(u.jsx)("div",{className:"product-card product-card-3",children:Object(u.jsx)(S,{image:B,backImage:E,desc:"Water Cooler Cup Dispenser",price:"$28"})})]})]}),Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"footer-wrapper",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"When Are We Open?"}),Object(u.jsxs)("p",{children:["Wednesday: ",Object(u.jsx)("u",{children:"Closed"})," "]}),Object(u.jsxs)("p",{children:["Monday, Tuesday, Thursday, Friday, Saturday: ",Object(u.jsx)("u",{children:"10am - 6pm"})]}),Object(u.jsxs)("p",{children:["Sunday: ",Object(u.jsx)("u",{children:"11am - 4pm"})]})]}),Object(u.jsx)("div",{className:"email-btn",children:Object(u.jsx)(N,{})})]})})]})};s(522),s(523);i.a.render(Object(u.jsx)(L,{}),document.getElementById("root"))}},[[524,1,2]]]);
//# sourceMappingURL=main.b8383897.chunk.js.map