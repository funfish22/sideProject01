(this.webpackJsonpgame_project=this.webpackJsonpgame_project||[]).push([[4],{59:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c}));var n={SELECT_VILLAGER:"villagers/sekect_villager"},c=function(t){return{type:n.SELECT_VILLAGER,payload:{id:t}}}},92:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),o=a(28),s=a(22),l=a(9),j=[{name:"\u9996\u9801",path:"/",component:c.a.lazy((function(){return Promise.all([a.e(7),a.e(2)]).then(a.bind(null,173))})),exact:!0},{name:"\u884c\u4e8b\u66c6",path:"/Calendar",component:c.a.lazy((function(){return a.e(1).then(a.bind(null,168))})),exact:!0},{name:"Villagers",path:"/Villagers/:id",component:c.a.lazy((function(){return a.e(3).then(a.bind(null,169))})),exact:!0},{name:"Page Not Found",path:"*",component:c.a.lazy((function(){return a.e(0).then(a.bind(null,170))}))}],b=a(3);var u=function(){return Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)("h1",{children:"Loading profile..."}),children:Object(b.jsx)(l.c,{children:j.map((function(t,e){return Object(b.jsx)(l.a,{path:t.path,exact:t.exact,component:t.component},e)}))})})},p=a(122),m=a(134),d=a(40),O=a(114),h=a(136),x=a(116),g=a(118),f=a(121),v=a(133),y=a(117),C=a(119),L=a(120);var E=function(t){var e=t.open,a=t.onClose,n=t.onOpen;return Object(b.jsx)(v.a,{open:e,onClose:a,onOpen:n,children:Object(b.jsxs)("div",{role:"presentation",onClick:a,onKeyDown:n,children:[Object(b.jsxs)(O.a,{children:[Object(b.jsxs)(h.a,{button:!0,component:s.b,to:"/",children:[Object(b.jsx)(x.a,{children:Object(b.jsx)(y.a,{})}),Object(b.jsx)(g.a,{primary:"\u9996\u9801"})]}),["Inbox","Starred","Send email","Drafts"].map((function(t,e){return Object(b.jsxs)(h.a,{button:!0,component:s.b,to:"/",children:[Object(b.jsx)(x.a,{children:e%2===0?Object(b.jsx)(C.a,{}):Object(b.jsx)(L.a,{})}),Object(b.jsx)(g.a,{primary:t})]},t)}))]}),Object(b.jsx)(f.a,{}),Object(b.jsx)(O.a,{children:["All mail","Trash","Spam"].map((function(t,e){return Object(b.jsxs)(h.a,{button:!0,children:[Object(b.jsx)(x.a,{children:e%2===0?Object(b.jsx)(C.a,{}):Object(b.jsx)(L.a,{})}),Object(b.jsx)(g.a,{primary:t})]},t)}))})]})})},S=a(123),N=a(124),_=a(125),w=a(47),k=a(126),T=a(127),R=Object(p.a)((function(t){return{menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1,fontSize:"24px"}}}));var I=function(){var t=R(),e=Object(n.useState)(!1),a=Object(d.a)(e,2),c=a[0],i=a[1],r=function(t){return function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&i(t)}};return Object(b.jsx)(S.a,{position:"fixed",children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)(_.a,{className:t.menuButton,edge:"start",color:"inherit","aria-label":"menu",onClick:r(!0),children:Object(b.jsx)(k.a,{})}),Object(b.jsx)(E,{open:c,onClose:r(!1),onOpen:r(!0)}),Object(b.jsx)(w.a,{variant:"h1",className:t.title,children:"project"}),Object(b.jsx)(_.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(b.jsx)(T.a,{})})]})})},U=a(128),V=a(129),B=a(130),F=Object(p.a)((function(){return{bottomNavigation:{"max-width":"none"},appBar:{top:"auto",bottom:0}}}));var z=function(){var t=window.location.hash.replace(/#/i,""),e=F(),a=c.a.useState(t),n=Object(d.a)(a,2),i=n[0],r=n[1];return Object(b.jsx)(S.a,{position:"fixed",className:e.appBar,children:Object(b.jsxs)(U.a,{value:i,onChange:function(t,e){r(e)},showLabels:!0,className:e.bottomNavigationRoot,children:[Object(b.jsx)(V.a,{component:s.b,to:"/",value:"/",className:e.bottomNavigation,label:"\u9996\u9801",icon:Object(b.jsx)(y.a,{})}),Object(b.jsx)(V.a,{component:s.b,to:"/Calendar",value:"/Calendar",className:e.bottomNavigation,label:"\u884c\u4e8b\u66c6",icon:Object(b.jsx)(B.a,{})})]})})},D=Object(p.a)((function(t){return{boxRoot:{padding:"56px 0"}}}));var P=function(){var t=D();return Object(b.jsxs)(s.a,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(m.a,{className:t.boxRoot,children:Object(b.jsx)(u,{})}),Object(b.jsx)(z,{})]})},A=a(51),G=a(59),J={lists:[{id:"01",title:"\u4e00",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"},{id:"02",title:"\u4e8c",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg"},{id:"03",title:"\u4e09",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"},{id:"04",title:"\u56db",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg"},{id:"05",title:"\u4e94",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"},{id:"06",title:"\u516d",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg"}],selectList:{}},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G.a.SELECT_VILLAGER:var a=t.lists.filter((function(t){return t.id===e.payload.id}));return Object(A.a)(Object(A.a)({},t),{},{selectList:a[0]});default:return t}},K=Object(o.c)({Villagers:X}),M=a(57),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,H=Object(o.e)(K,q(Object(o.a)()));var Q=function(){return Object(b.jsx)(M.a,{store:H,children:Object(b.jsx)(P,{})})},W=function(t){t&&t instanceof Function&&a.e(8).then(a.bind(null,171)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),i(t),r(t)}))},Y=a(131),Z=(a(91),a(132)),$=a(71),tt=a(70),et=a.n(tt),at=Object($.a)({palette:{primary:{main:et.a[700]}}});r.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Y.a,{}),Object(b.jsx)(Z.a,{theme:at,children:Object(b.jsx)(Q,{})})]}),document.getElementById("root")),W()}},[[92,5,6]]]);
//# sourceMappingURL=main.171f1a6051e4f1477710.js.map