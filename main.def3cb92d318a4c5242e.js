(this.webpackJsonpgame_project=this.webpackJsonpgame_project||[]).push([[4],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),o=a(33),s=a(20),l=a(10),j=[{name:"\u9996\u9801",path:"/",component:c.a.lazy((function(){return Promise.all([a.e(7),a.e(2)]).then(a.bind(null,276))})),exact:!0},{name:"\u884c\u4e8b\u66c6",path:"/Calendar",component:c.a.lazy((function(){return a.e(1).then(a.bind(null,266))})),exact:!0},{name:"Villagers",path:"/Villagers/:id",component:c.a.lazy((function(){return Promise.all([a.e(8),a.e(3)]).then(a.bind(null,267))})),exact:!0},{name:"Page Not Found",path:"*",component:c.a.lazy((function(){return a.e(0).then(a.bind(null,271))}))}],b=a(194),u=a(62),p=a(3);var h=function(){return Object(p.jsx)(b.a,{children:Object(p.jsx)(u.a,{component:"p",children:"Loading profile..."})})};var O=function(){return Object(p.jsx)(n.Suspense,{fallback:h(),children:Object(p.jsx)(l.c,{children:j.map((function(e,t){return Object(p.jsx)(l.a,{path:e.path,exact:e.exact,component:e.component},t)}))})})},d=a(37),m=a(203),x=a(216),g=a(54),f=a(196),v=a(218),S=a(197),w=a(199),C=a(202),k=a(215),y=a(198),N=a(200),_=a(201);var E=function(e){var t=e.open,a=e.onClose,n=e.onOpen;return Object(p.jsx)(k.a,{open:t,onClose:a,onOpen:n,children:Object(p.jsxs)("div",{role:"presentation",onClick:a,onKeyDown:n,children:[Object(p.jsxs)(f.a,{children:[Object(p.jsxs)(v.a,{button:!0,component:s.b,to:"/",children:[Object(p.jsx)(S.a,{children:Object(p.jsx)(y.a,{})}),Object(p.jsx)(w.a,{primary:"\u9996\u9801"})]}),["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(p.jsxs)(v.a,{button:!0,component:s.b,to:"/",children:[Object(p.jsx)(S.a,{children:t%2===0?Object(p.jsx)(N.a,{}):Object(p.jsx)(_.a,{})}),Object(p.jsx)(w.a,{primary:e})]},e)}))]}),Object(p.jsx)(C.a,{}),Object(p.jsx)(f.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(p.jsxs)(v.a,{button:!0,children:[Object(p.jsx)(S.a,{children:t%2===0?Object(p.jsx)(N.a,{}):Object(p.jsx)(_.a,{})}),Object(p.jsx)(w.a,{primary:e})]},e)}))})]})})},A=a(204),L=a(205),R=a(206),T=a(207),U=a(208),B=a(209),F=Object(m.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:"24px"}}}));var P=function(){var e=Object(l.f)(),t=F(),a=Object(n.useState)(!1),c=Object(g.a)(a,2),i=c[0],r=c[1],o=Object(d.c)((function(e){return e.App.backShow})),s=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(e)}};return Object(p.jsx)(A.a,{position:"fixed",children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(L.a,{disableGutters:!0,children:[Object(p.jsx)(R.a,{className:t.menuButton,edge:"start",color:"inherit","aria-label":"menu",onClick:s(!0),children:Object(p.jsx)(T.a,{})}),Object(p.jsx)(E,{open:i,onClose:s(!1),onOpen:s(!0)}),Object(p.jsx)(u.a,{variant:"h1",className:t.title,children:"project"}),o&&Object(p.jsx)(R.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(){return e.goBack()},children:Object(p.jsx)(U.a,{})}),Object(p.jsx)(R.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(p.jsx)(B.a,{})})]})})})},V=a(210),G=a(211),I=a(212),z=Object(m.a)((function(){return{bottomNavigation:{maxWidth:"none"},appBar:{top:"auto",bottom:0,backgroundColor:"#fff"}}}));var D=function(){var e=window.location.hash.replace(/#/i,""),t=z(),a=c.a.useState(e),n=Object(g.a)(a,2),i=n[0],r=n[1];return Object(p.jsx)(A.a,{position:"fixed",className:t.appBar,children:Object(p.jsx)(b.a,{children:Object(p.jsxs)(V.a,{value:i,onChange:function(e,t){r(t)},showLabels:!0,className:t.bottomNavigationRoot,children:[Object(p.jsx)(G.a,{component:s.b,to:"/",value:"/",className:t.bottomNavigation,label:"\u9996\u9801",icon:Object(p.jsx)(y.a,{})}),Object(p.jsx)(G.a,{component:s.b,to:"/Calendar",value:"/Calendar",className:t.bottomNavigation,label:"\u884c\u4e8b\u66c6",icon:Object(p.jsx)(I.a,{})})]})})})},H=Object(m.a)((function(e){return{boxRoot:{padding:"56px 0"}}}));var W,J=function(){H();var e=Object(d.c)((function(e){return e.App.footerShow}));return Object(p.jsxs)(s.a,{children:[Object(p.jsx)(P,{}),Object(p.jsx)(x.a,{py:{xs:7,sm:8},children:Object(p.jsx)(O,{})}),Object(p.jsx)(x.a,{display:e,children:Object(p.jsx)(D,{})})]})},K=a(36),X=a(32),M=a(23),q=a(70),Q={footerShow:"block",backShow:!1},Y=(W={},Object(K.a)(W,q.a.CHANGE_FOOTER_SHOW,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return Object(X.a)(Object(X.a)({},e),{},{footerShow:t.showSwitch})})),Object(K.a)(W,q.a.CHANGE_BACK_SHOW,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return Object(X.a)(Object(X.a)({},e),{},{backShow:t.showSwitch})})),W),Z=Object(M.createReducer)(Q,Y),$=Object(M.createReducer)({banner:{speed:5e3,lists:[{id:"01",imgUrl:"https://fakeimg.pl/1920x600/",title:"banner 1"},{id:"02",imgUrl:"https://fakeimg.pl/1920x600/",title:"banner 2"},{id:"03",imgUrl:"https://fakeimg.pl/1920x600/",title:"banner 3"}]}},{}),ee=a(78),te={lists:[{id:"01",title:"\u4e00",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"},{id:"02",title:"\u4e8c",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg"},{id:"03",title:"\u4e09",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"},{id:"04",title:"\u56db",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg"},{id:"05",title:"\u4e94",imgUrl:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg"},{id:"06",title:"\u516d",imgUrl:"https://material-ui.com/static/images/cards/paella.jpg"}],selectList:{},villager:{season:[{title:"\u6625"},{title:"\u590f"},{title:"\u79cb"},{title:"\u51ac"},{title:"\u5a5a"}]}},ae=Object(K.a)({},ee.a.SELECT_VILLAGER,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,a=e.lists.filter((function(e){return e.id===t.id}));return Object(X.a)(Object(X.a)({},e),{},{selectList:a[0]})})),ne=Object(M.createReducer)(te,ae),ce=Object(o.c)({App:Z,Home:$,Villagers:ne}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,re=Object(o.e)(ce,ie(Object(o.a)()));var oe=function(){return Object(p.jsx)(d.a,{store:re,children:Object(p.jsx)(J,{})})},se=function(e){e&&e instanceof Function&&a.e(9).then(a.bind(null,272)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},le=a(213),je=(a(171),a(214)),be=a(98),ue=a(97),pe=a.n(ue),he=Object(be.a)({palette:{primary:{main:pe.a[700]}}});r.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(le.a,{}),Object(p.jsx)(je.a,{theme:he,children:Object(p.jsx)(oe,{})})]}),document.getElementById("root")),se()},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(23),c=Object(n.createActions)({changeFooterShow:["showSwitch"],changeBackShow:["showSwitch"]},{prefix:"APP/"}),i=c.Types,r=c.Creators;t.b=r},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(23),c=Object(n.createActions)({selectVillager:["id"]},{prefix:"VILLAGERS/"}),i=c.Types,r=c.Creators;t.b=r}},[[172,5,6]]]);
//# sourceMappingURL=main.def3cb92d318a4c5242e.js.map