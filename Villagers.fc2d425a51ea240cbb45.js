(this.webpackJsonpgame_project=this.webpackJsonpgame_project||[]).push([[3],{163:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(0),c=(a(5),a(4)),i=a(6),s=["video","audio","picture","iframe","img"],l=r.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,u=e.component,d=void 0===u?"div":u,m=e.image,b=e.src,p=e.style,f=Object(o.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==s.indexOf(d),h=!g&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},p):p;return r.createElement(d,Object(n.a)({className:Object(c.a)(i.root,l,g&&i.media,-1!=="picture img".indexOf(d)&&i.img),ref:t,style:h,src:g?m||b:void 0},f),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},175:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(18),r=a(34),c=a(43),i=a(60),s=a(125),l=a(116),u=a(138),d=a(1),m=a(19),b=a(2),p=(a(77),a(5),a(4)),f=a(6),g=a(51),h=a(20),j=a(31),O=Object(j.a)(n.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=a(76);var x=Object(f.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(h.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(b.a)(e,["classes"]);return n.createElement(v.a,Object(d.a)({component:"li",className:t.root,focusRipple:!0},a),n.createElement(O,{className:t.icon}))}));var y=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,c=e.component,i=void 0===c?"nav":c,s=e.expandText,l=void 0===s?"Show path":s,u=e.itemsAfterCollapse,f=void 0===u?1:u,h=e.itemsBeforeCollapse,j=void 0===h?1:h,O=e.maxItems,v=void 0===O?8:O,y=e.separator,k=void 0===y?"/":y,w=Object(b.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=n.useState(!1),C=N[0],E=N[1],S=n.Children.toArray(a).filter((function(e){return n.isValidElement(e)})).map((function(e,t){return n.createElement("li",{className:o.li,key:"child-".concat(t)},e)}));return n.createElement(g.a,Object(d.a)({ref:t,component:i,color:"textSecondary",className:Object(p.a)(o.root,r)},w),n.createElement("ol",{className:o.ol},function(e,t,a){return e.reduce((function(o,r,c){return c<e.length-1?o=o.concat(r,n.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:t},a)):o.push(r),o}),[])}(C||v&&S.length<=v?S:function(e){return j+f>=e.length?e:[].concat(Object(m.a)(e.slice(0,j)),[n.createElement(x,{"aria-label":l,key:"ellipsis",onClick:function(e){E(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(m.a)(e.slice(e.length-f,e.length)))}(S),o.separator,k)))})),k=Object(f.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(y),w=a(10),N=a(65),C=a(12),E=n.forwardRef((function(e,t){var a=e.classes,o=e.className,r=e.color,c=void 0===r?"primary":r,i=e.component,s=void 0===i?"a":i,l=e.onBlur,u=e.onFocus,m=e.TypographyClasses,f=e.underline,h=void 0===f?"hover":f,j=e.variant,O=void 0===j?"inherit":j,v=Object(b.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),x=Object(N.a)(),y=x.isFocusVisible,k=x.onBlurVisible,E=x.ref,S=n.useState(!1),B=S[0],R=S[1],V=Object(C.a)(t,E);return n.createElement(g.a,Object(d.a)({className:Object(p.a)(a.root,a["underline".concat(Object(w.a)(h))],o,B&&a.focusVisible,"button"===s&&a.button),classes:m,color:c,component:s,onBlur:function(e){B&&(k(),R(!1)),l&&l(e)},onFocus:function(e){y(e)&&R(!0),u&&u(e)},ref:V,variant:O},v))})),S=Object(f.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(E),B=a(163),R=a(3),V=Object(s.a)((function(e){return{title:{fontWeight:"bold",marginBottom:e.spacing(1)}}}));t.default=function(){var e=Object(r.b)(),t=V(),a=Object(r.c)((function(e){return e.Villagers.selectList})),s=window.location.hash.substr(window.location.hash.lastIndexOf("/")+1),d=a.title,m=a.imgUrl;return Object(n.useEffect)((function(){return e(Object(c.c)("none")),e(Object(c.b)(!0)),e(Object(i.b)(s)),function(){e(Object(c.c)("block")),e(Object(c.b)(!1))}}),[]),Object(R.jsxs)(l.a,{component:u.a,my:3,children:[Object(R.jsx)(u.a,{children:Object(R.jsxs)(k,{"aria-label":"breadcrumb",children:[Object(R.jsx)(S,{component:o.b,color:"inherit",to:"/",children:"Home"}),Object(R.jsx)(S,{component:o.b,color:"inherit",to:"/Villagers",children:"Villagers"}),Object(R.jsx)(g.a,{color:"textPrimary",children:d})]})}),Object(R.jsxs)(u.a,{my:2,children:[Object(R.jsx)(g.a,{component:"h2",variant:"h5",className:t.title,children:d}),Object(R.jsx)(B.a,{component:"img",image:m,title:d})]})]})}}}]);
//# sourceMappingURL=Villagers.fc2d425a51ea240cbb45.js.map