(this.webpackJsonpgame_project=this.webpackJsonpgame_project||[]).push([[6],{173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),o=a(33),s=a(21),l=a(10),j=[{name:"\u9996\u9801",path:"/",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(9),a.e(3)]).then(a.bind(null,280))})),exact:!0},{name:"\u884c\u4e8b\u66c6",path:"/Calendar",component:c.a.lazy((function(){return a.e(2).then(a.bind(null,268))}))},{name:"Villagers",path:"/Villagers",component:c.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,281))}))},{name:"Page Not Found",path:"*",component:c.a.lazy((function(){return a.e(1).then(a.bind(null,282))}))}],b=a(81),u=a(195),p=a(62),h=a(2);var O=Object(b.a)({Component:function(){return Object(h.jsx)(u.a,{children:Object(h.jsx)(p.a,{component:"p",children:"Loading profile..."})})}});var m=function(){return Object(h.jsx)(n.Suspense,{fallback:O(),children:Object(h.jsx)(l.c,{children:j.map((function(e,t){return Object(h.jsx)(l.a,{path:e.path,exact:e.exact,component:e.component},t)}))})})},d=a(17),x=a.n(d),f=a(37);var g=function e(t){var a=t.Component;function n(){var e=Object(f.c)((function(e){return e.App.footerShow}));return Object(h.jsx)(a,{footerShow:e})}return x()(n,e),n},v=a(217),S=a(49),w=a(197),C=a(219),k=a(198),y=a(200),N=a(203),A=a(216),T=a(199),_=a(201),E=a(202);var L=function(e){var t=e.open,a=e.onClose,n=e.onOpen;return Object(h.jsx)(A.a,{open:t,onClose:a,onOpen:n,children:Object(h.jsxs)("div",{role:"presentation",onClick:a,onKeyDown:n,children:[Object(h.jsxs)(w.a,{children:[Object(h.jsxs)(C.a,{button:!0,component:s.b,to:"/",children:[Object(h.jsx)(k.a,{children:Object(h.jsx)(T.a,{})}),Object(h.jsx)(y.a,{primary:"\u9996\u9801"})]}),["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(h.jsxs)(C.a,{button:!0,component:s.b,to:"/",children:[Object(h.jsx)(k.a,{children:t%2===0?Object(h.jsx)(_.a,{}):Object(h.jsx)(E.a,{})}),Object(h.jsx)(y.a,{primary:e})]},e)}))]}),Object(h.jsx)(N.a,{}),Object(h.jsx)(w.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(h.jsxs)(C.a,{button:!0,children:[Object(h.jsx)(k.a,{children:t%2===0?Object(h.jsx)(_.a,{}):Object(h.jsx)(E.a,{})}),Object(h.jsx)(y.a,{primary:e})]},e)}))})]})})},F=a(204),R=a(205),U=a(206),B=a(207),I=a(208),P=a(209),G=a(210),V=Object(F.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:"24px"}}}));var H=function(){var e=Object(l.f)(),t=V(),a=Object(n.useState)(!1),c=Object(S.a)(a,2),i=c[0],r=c[1],o=Object(f.c)((function(e){return e.App.backShow})),s=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}};return Object(h.jsx)(R.a,{position:"fixed",children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(U.a,{disableGutters:!0,children:[Object(h.jsx)(B.a,{className:t.menuButton,edge:"start",color:"inherit","aria-label":"menu",onClick:s(!0),children:Object(h.jsx)(I.a,{})}),Object(h.jsx)(L,{open:i,onClose:s(!1),onOpen:s(!0)}),Object(h.jsx)(p.a,{variant:"h1",className:t.title,children:"project"}),o&&Object(h.jsx)(B.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(){return e.goBack()},children:Object(h.jsx)(P.a,{})}),Object(h.jsx)(B.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(h.jsx)(G.a,{})})]})})})},M=a(211),z=a(212),D=a(213),W=Object(F.a)((function(){return{bottomNavigation:{maxWidth:"none"},appBar:{top:"auto",bottom:0,backgroundColor:"#fff"}}}));var J=function(){var e=window.location.hash.replace(/#/i,""),t=W(),a=c.a.useState(e),n=Object(S.a)(a,2),i=n[0],r=n[1];return Object(h.jsx)(R.a,{position:"fixed",className:t.appBar,children:Object(h.jsx)(u.a,{children:Object(h.jsxs)(M.a,{value:i,onChange:function(e,t){r(t)},showLabels:!0,className:t.bottomNavigationRoot,children:[Object(h.jsx)(z.a,{component:s.b,to:"/",value:"/",className:t.bottomNavigation,label:"\u9996\u9801",icon:Object(h.jsx)(T.a,{})}),Object(h.jsx)(z.a,{component:s.b,to:"/Calendar",value:"/Calendar",className:t.bottomNavigation,label:"\u884c\u4e8b\u66c6",icon:Object(h.jsx)(D.a,{})})]})})})};var K,X,q=g({Component:function(e){var t=e.footerShow;return Object(h.jsxs)(s.a,{children:[Object(h.jsx)(H,{}),Object(h.jsx)(v.a,{py:{xs:7,sm:8},children:Object(h.jsx)(m,{})}),Object(h.jsx)(v.a,{display:t,children:Object(h.jsx)(J,{})})]})}}),Q=a(34),Y=a(22),Z=a(25),$=a(70),ee={footerShow:"block",backShow:!1},te=(K={},Object(Q.a)(K,$.a.CHANGE_FOOTER_SHOW,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return Object(Y.a)(Object(Y.a)({},e),{},{footerShow:t.showSwitch})})),Object(Q.a)(K,$.a.CHANGE_BACK_SHOW,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return Object(Y.a)(Object(Y.a)({},e),{},{backShow:t.showSwitch})})),K),ae=Object(Z.createReducer)(ee,te),ne=Object(Z.createReducer)({banner:{speed:5e3,lists:[{id:"01",imgUrl:"https://fakeimg.pl/1920x600/",title:"banner 1"},{id:"02",imgUrl:"https://fakeimg.pl/1920x600/",title:"banner 2"},{id:"03",imgUrl:"https://fakeimg.pl/1920x600/",title:"banner 3"}]},homeTabs:[{title:"Item One"},{title:"Item Two"},{title:"Item Three"}]},{}),ce=a(63),ie={lists:[{id:"01",title:"1",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",sex:"Male",star:!0},{id:"02",title:"2",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg",sex:"Female",star:!1},{id:"03",title:"3",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",sex:"Female",star:!1},{id:"04",title:"4",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg",sex:"Male",star:!1},{id:"05",title:"5",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",sex:"Male",star:!1},{id:"06",title:"6",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg",sex:"Male",star:!1}],selectList:{},villagersTabs:[{title:"Star"},{title:"All"},{title:"Normal"},{title:"Male"},{title:"Female"}],villager:{season:[{title:"\u6625"},{title:"\u590f"},{title:"\u79cb"},{title:"\u51ac"},{title:"\u5a5a"}]}},re=(X={},Object(Q.a)(X,ce.a.SELECT_VILLAGER,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=e.lists.filter((function(e){return e.id===t.id}));return Object(Y.a)(Object(Y.a)({},e),{},{selectList:a[0]})})),Object(Q.a)(X,ce.a.CHANGE_STAR,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=e.lists.find((function(e){return e.id===t.id}));return a.star=!e.selectList.star,Object(Y.a)(Object(Y.a)({},e),{},{selectList:Object.assign({},a)})})),X),oe=Object(Z.createReducer)(ie,re),se=Object(o.c)({App:ae,Home:ne,Villagers:oe}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,je=Object(o.e)(se,le(Object(o.a)()));var be=function(){return Object(h.jsx)(f.a,{store:je,children:Object(h.jsx)(q,{})})},ue=function(e){e&&e instanceof Function&&a.e(11).then(a.bind(null,270)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},pe=a(214),he=(a(172),a(215)),Oe=a(99),me=a(98),de=a.n(me),xe=Object(Oe.a)({palette:{primary:{main:de.a[700]}}});r.a.render(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(pe.a,{}),Object(h.jsx)(he.a,{theme:xe,children:Object(h.jsx)(be,{})})]}),document.getElementById("root")),ue()},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(25),c=Object(n.createActions)({selectVillager:["id"],changeStar:["id"]},{prefix:"VILLAGERS/"}),i=c.Types,r=c.Creators;t.b=r},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(25),c=Object(n.createActions)({changeFooterShow:["showSwitch"],changeBackShow:["showSwitch"]},{prefix:"APP/"}),i=c.Types,r=c.Creators;t.b=r},81:function(e,t,a){"use strict";a(0);var n=a(17),c=a.n(n),i=a(2);t.a=function e(t){var a=t.Component;function n(){return Object(i.jsx)(a,{})}return c()(n,e),n}}},[[173,7,8]]]);
//# sourceMappingURL=main.5856d3bc23e22847f6eb.js.map