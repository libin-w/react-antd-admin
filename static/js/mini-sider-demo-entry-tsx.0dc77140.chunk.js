(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[8],{703:function(e,t,c){"use strict";c.r(t);var n=c(59),a=c(60),i=c(80),o=c(81),r=c(0),s=c.n(r),l=c(754),u=c(755),d=c(331),h=c(64),j=c(823),b=c(2),m=function(){return Object(b.jsx)(j.a,{moduleConfig:d.default,routerConfig:p})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(h.d,{title:"\u7d20\u6750\u5e93",breadcrumbRender:function(){return Object(b.jsx)(m,{})}})})},p=[{showTitle:"\u9996\u9875",iconName:"AppstoreOutlined",view:function(){return Object(b.jsx)("div",{children:"TestPage1"})},path:"gfdggdfg"},{showTitle:"\u4e00\u7ea7\u83dc\u5355111",iconName:"AppstoreOutlined",children:[{showTitle:"\u4e8c\u7ea7\u83dc\u5355111",children:[{showTitle:"\u4e09\u7ea7\u83dc\u5355111",children:[{showTitle:"\u56db\u7ea7\u83dc\u5355111",view:f,path:"sss"}],path:"aaa"},{showTitle:"\u4e09\u7ea7\u83dc\u5355222",view:f,path:"sss"}],path:"ddd"},{showTitle:"\u4e8c\u7ea7\u83dc\u5355222",view:f,path:"fff"}],path:"ggg"},{showTitle:"\u4e00\u7ea7\u83dc\u5355222",iconName:"AppstoreOutlined",view:f,path:"hhh"},{showTitle:"\u767e\u5ea6\u9996\u9875",iconName:"LinkOutlined",path:"https://www.baidu.com"}],O=function(e){Object(i.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(b.jsx)(l.a,{siderType:"mini",moduleConfig:d.default,routerConfig:p,children:Object(b.jsx)(u.a,{moduleConfig:d.default,routerConfig:p})})}}]),c}(s.a.Component);t.default=O},754:function(e,t,c){"use strict";var n=c(21),a=c(46),i=(c(132),c(38)),o=c.n(i),r=(c(327),c(172)),s=c.n(r),l=c(0),u=c(31),d=c(71),h=c(3),j=c.n(h),b=c(800),m=c(801),f=c(321),p=c(64),O=c(25),v=c(169),g=c(170),x=c.n(g),w=c(2),y=s.a.Content,N=s.a.Sider,T=o.a.SubMenu;t.a=function(e){var t=e.minWidth,c=e.siderType,i=e.moduleConfig,r=e.routerConfig,h=e.children,g=Object(u.h)(),C=Object(l.useState)("mini"===c),z=Object(a.a)(C,2),M=z[0],S=z[1],k=Object(l.useState)(Object(O.i)(g.pathname)),A=Object(a.a)(k,2),E=A[0],H=A[1],I=Object(l.useState)(Object(O.i)(g.pathname)),L=Object(a.a)(I,2),P=L[0],W=L[1],K=Object(f.a)((function(e,t){return t.map((function(t){var c;if(!0===t.hideInMenu)return null;var n,a,i,r="".concat(e,"/").concat(t.path);return Object(O.d)(t.path)?Object(w.jsx)(o.a.Item,{icon:t.iconName?null===(n=v.a[t.iconName])||void 0===n?void 0:n.call(v.a,{}):null,children:Object(w.jsx)("a",{href:t.path,target:"_blank",rel:"noopener noreferrer",children:t.showTitle})},t.path):t.view||(null===(c=t.children)||void 0===c?void 0:c.every((function(e){return!0===e.hideInMenu})))?Object(w.jsx)(o.a.Item,{icon:t.iconName?null===(a=v.a[t.iconName])||void 0===a?void 0:a.call(v.a,{}):null,children:Object(w.jsx)(d.b,{exact:!0,to:r,activeStyle:{pointerEvents:"none"},children:t.showTitle})},r):Array.isArray(t.children)?Object(w.jsx)(T,{icon:t.iconName?null===(i=v.a[t.iconName])||void 0===i?void 0:i.call(v.a,{}):null,title:t.showTitle,children:K(r,t.children)},r):null}))})),R=Object(l.useMemo)((function(){return K("/".concat(i.modulePath),r)}),[i,r,K]);Object(l.useEffect)((function(){W(Object(O.i)(g.pathname)),H(Object(O.i)(g.pathname))}),[g]),Object(l.useEffect)((function(){"auto"===c&&H(M?[]:Object(O.i)(g.pathname))}),[c,M,g]);var B="mini"===c||M?{}:{openKeys:E};return Object(w.jsxs)(s.a,{className:"basics-submodule-layout-wrapper",style:{minWidth:t||"unset"},hasSider:!0,children:[Object(w.jsx)("div",{className:j()("basics-submodule-sider-placeholder",{"is-collapsed":M})}),Object(w.jsx)(N,{className:"basics-submodule-sider",width:x.a.siderWidth,collapsible:"auto"===c,collapsed:M,breakpoint:"auto"===c?"lg":void 0,collapsedWidth:parseInt(x.a.siderCollapsedWidth),theme:"light",trigger:Object(w.jsx)("div",{className:"basics-submodule-sider-trigger",children:M?Object(w.jsx)(b.a,{}):Object(w.jsx)(m.a,{})}),onCollapse:function(e){S(e)},children:Object(w.jsx)(o.a,Object(n.a)(Object(n.a)({className:"basics-submodule-sider-menu",mode:"inline",selectedKeys:P,onOpenChange:function(e){H(e||[])},onSelect:function(e){var t=e.selectedKeys,c=e.key;Object(O.d)(String(c))||W(t||[])}},B),{},{children:R}))}),Object(w.jsx)(y,{className:"basics-submodule-content",children:Object(w.jsx)(p.e,{children:h})})]})}},755:function(e,t,c){"use strict";var n=c(0),a=c(31),i=c(133),o=c(219),r=c(321),s=c(25),l=c(2);t.a=function(e){var t=e.moduleConfig,c=e.routerConfig,u=Object(a.h)(),d=Object(a.g)(),h=Object(r.a)((function(e,c){var n=[],a=[];return function e(c,i){for(var o=0;o<i.length;o++){var r=i[o],l="".concat(c,"/").concat(r.path);r.view&&!Object(s.d)(r.path)&&(a.push(l),n.push({path:l,showTitle:r.showTitle+"-"+t.moduleName,exact:!1!==r.exact,component:r.view})),Array.isArray(r.children)&&e(l,r.children)}return i}(e,c),{reactDom:n.map((function(e){return Object(l.jsx)(i.a,{exact:e.exact,path:e.path,showTitle:e.showTitle,component:e.component},e.path)})),pathList:a}})),j=Object(n.useMemo)((function(){return h("/".concat(t.modulePath),c)}),[h,c,t]);return Object(n.useEffect)((function(){u.pathname==="/".concat(t.modulePath)&&d.replace(j.pathList[0])}),[d,u,t,j]),Object(l.jsxs)(a.d,{children:[j.reactDom,Object(l.jsx)(i.a,{path:"*",component:o.a})]})}},800:function(e,t,c){"use strict";var n=c(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},i=c(18),o=function(e,t){return n.createElement(i.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="MenuUnfoldOutlined";t.a=n.forwardRef(o)},801:function(e,t,c){"use strict";var n=c(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},i=c(18),o=function(e,t){return n.createElement(i.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="MenuFoldOutlined";t.a=n.forwardRef(o)},823:function(e,t,c){"use strict";c(333);var n=c(334),a=c.n(n),i=(c(218),c(114)),o=c.n(i),r=c(46),s=c(0),l=c(31),u=c(71),d=c(169),h=c(2);t.a=function(e){var t,c=e.moduleConfig,n=e.routerConfig,i=Object(l.h)(),j=Object(s.useState)([]),b=Object(r.a)(j,2),m=b[0],f=b[1];return Object(s.useEffect)((function(){var e=i.pathname.substring(1).split("/").splice(1),t="",c="",a=[],o=n;e.forEach((function(e){var n=o.find((function(t){return 0===t.path.indexOf(c+e)}));n?(a.push({title:n.showTitle,key:"".concat(t,"/").concat(e),url:n.view?"".concat(t,"/").concat(e):""}),Array.isArray(n.children)?(o=n.children,c="",t="".concat(t,"/").concat(e)):o=[]):c="".concat(e,"/")})),f(a)}),[i,n]),Object(h.jsxs)(a.a,{children:[Object(h.jsx)(a.a.Item,{children:Object(h.jsx)(u.b,{exact:!0,to:"/".concat(c.modulePath),children:Object(h.jsxs)(o.a,{size:4,children:[c.iconName&&(null===(t=d.a[c.iconName])||void 0===t?void 0:t.call(d.a,{})),c.moduleName]})})}),m.map((function(e,t){return Object(h.jsx)(a.a.Item,{children:e.url&&m.length!==t+1?Object(h.jsx)(u.b,{exact:!0,to:"/".concat(c.modulePath).concat(e.url),children:e.title}):e.title},e.key)}))]})}}}]);