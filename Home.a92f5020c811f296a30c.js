(this.webpackJsonpgame_project=this.webpackJsonpgame_project||[]).push([[3],{227:function(e,t,n){"use strict";var a=n(22),i=n(49),r=n(0),c=n(37),l=n(10),s=n(228),o=n.n(s),b=n(204),u=n(29),j=n(21),m=n(63),d=n(260),p=n(261),O=n(262),h=n(62),f=n(2),x=Object(b.a)((function(){return{media:{height:100},mediaTitle:{margin:0}}}));var g=function(e){var t=Object(c.b)(),n=x(),a=e.title,i=e.id,r=e.imgUrl;return Object(f.jsx)(d.a,{children:Object(f.jsxs)(p.a,{component:j.b,to:"Villagers/".concat(i),onClick:function(){return t(m.b.selectVillager(i))},children:[Object(f.jsx)(O.a,{component:"img",height:"100",image:r,title:"Contemplative Reptile"}),Object(f.jsx)(h.a,{gutterBottom:!0,component:"p",align:"center",className:n.mediaTitle,children:a})]})})},v=n(234),k=n(217);var T=function(e){var t=e.children,n=e.value,i=e.index,r=Object(v.a)(e,["children","value","index"]);return Object(f.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:n!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},r),{},{children:n===i&&Object(f.jsx)(k.a,{children:t})}))},w=n(263),C=n(277),y=n(264),N=Object(b.a)((function(e){return{card:{padding:e.spacing(1)}}}));function V(e){var t=e.cards,n=e.value,a=Object(l.g)(),i=N(),r=[];switch(n){case"Star":r=t.filter((function(e){return e.star}));break;case"All":case"Normal":r=t;break;case"Male":r=t.filter((function(e){return"Male"===e.sex}));break;case"Female":r=t.filter((function(e){return"Female"===e.sex}))}return"/"===a.path&&(r=t),r.map((function(e){return Object(f.jsx)(w.a,{item:!0,xs:4,sm:3,md:2,className:i.card,children:Object(f.jsx)(g,{title:e.title,id:e.id,imgUrl:e.imgUrl})},e.id)}))}t.a=function(e){var t=e.tabs,n=e.lists,l=Object(r.useState)([]),s=Object(i.a)(l,2),b=s[0],j=s[1],m=Object(u.a)(),d=Object(c.c)((function(e){return e.Villagers.lists})),p=Object(r.useState)(0),O=Object(i.a)(p,2),h=O[0],x=O[1];return Object(r.useEffect)((function(){if(0===n.filter((function(e){return!0===e.star})).length){var e=t.filter((function(e){return"Star"!==e.title}));j(e)}else j(t)}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,{value:h,onChange:function(e,t){x(t)},"aria-label":"simple tabs example",children:b.map((function(e,t){return Object(f.jsx)(y.a,Object(a.a)({label:e.title},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t)),t)}))}),Object(f.jsx)(k.a,{mx:-1,children:Object(f.jsx)(o.a,{axis:"rtl"===m.direction?"x-reverse":"x",index:h,onChangeIndex:function(e){x(e)},children:b.map((function(e,t){return Object(f.jsx)(T,{value:h,index:t,dir:m.direction,children:Object(f.jsx)(w.a,{container:!0,children:Object(f.jsx)(V,{cards:d,value:e.title})})},t)}))})})]})}},280:function(e,t,n){"use strict";n.r(t);n(0);var a=n(17),i=n.n(a),r=n(37),c=n(2);var l=function e(t){var n=t.Component;function a(){var e=Object(r.c)((function(e){return e.Home.banner})),t=Object(r.c)((function(e){return e.Home.homeTabs})),a=Object(r.c)((function(e){return e.Villagers.lists})),i=e.speed,l=e.bannerLists;return Object(c.jsx)(n,{speed:i,bannerLists:l,homeTabs:t,lists:a})}return i()(a,e),a},s=n(275),o=n(265),b=n(266),u=n(276),j=n(267),m=n(227),d=n(204),p=n(217),O=n(262),h=n(195),f=n(62);n(252),n(253);s.a.use([o.a,b.a]);var x=Object(d.a)((function(e){return{title:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},media:{height:100},mediaTitle:{margin:0},swiperRoot:{"& .swiper-pagination-bullet":{backgroundColor:e.palette.primary.main}}}}));var g=l({Component:function(e){var t=e.speed,n=e.bannerLists,a=e.homeTabs,i=e.lists,r=x();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{className:r.swiperRoot,children:Object(c.jsx)(u.a,{slidesPerView:1,pagination:{clickable:!0},loop:!0,autoplay:{delay:t},children:n&&n.map((function(e,t){return Object(c.jsx)(j.a,{children:Object(c.jsx)(O.a,{component:"img",image:e.imgUrl,alt:e.title})},t)}))})}),Object(c.jsxs)(h.a,{component:p.a,my:3,color:"primary.main",children:[Object(c.jsx)(f.a,{component:"h2",variant:"h5",className:r.title,children:"Title"}),Object(c.jsx)(m.a,{tabs:a,lists:i})]})]})}});t.default=g}}]);
//# sourceMappingURL=Home.a92f5020c811f296a30c.js.map