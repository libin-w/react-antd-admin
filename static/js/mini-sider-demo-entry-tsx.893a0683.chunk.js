(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[7],{700:function(e,t,c){"use strict";c.r(t);var n=c(59),a=c(60),i=c(80),o=c(81),r=c(0),l=c.n(r),s=c(754),u=c(751),d=c(330),h=c(65),j=(c(345),c(346)),b=c.n(j),m=(c(219),c(115)),f=c.n(m),p=c(45),O=c(31),v=c(71),g=c(169),x=c(2),w=function(e){var t,c=e.moduleConfig,n=e.routerConfig,a=Object(O.h)(),i=Object(r.useState)([]),o=Object(p.a)(i,2),l=o[0],s=o[1];return Object(r.useEffect)((function(){var e=a.pathname.substring(1).split("/").splice(1),t="",c="",i=[],o=n;e.forEach((function(e){var n=o.find((function(t){return 0===t.path.indexOf(c+e)}));n?(i.push({title:n.showTitle,key:"".concat(t,"/").concat(e),url:n.view?"".concat(t,"/").concat(e):""}),Array.isArray(n.children)?(o=n.children,c="",t="".concat(t,"/").concat(e)):o=[]):c="".concat(e,"/")})),s(i)}),[a,n]),Object(x.jsxs)(b.a,{children:[Object(x.jsx)(b.a.Item,{children:Object(x.jsx)(v.b,{exact:!0,to:"/".concat(c.modulePath),children:Object(x.jsxs)(f.a,{size:4,children:[c.iconName&&(null===(t=g.a[c.iconName])||void 0===t?void 0:t.call(g.a,{})),c.moduleName]})})}),l.map((function(e,t){return Object(x.jsx)(b.a.Item,{children:e.url&&l.length!==t+1?Object(x.jsx)(v.b,{exact:!0,to:"/".concat(c.modulePath).concat(e.url),children:e.title}):e.title},e.key)}))]})},y=function(){return Object(x.jsx)(w,{moduleConfig:d.default,routerConfig:T})},N=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(h.d,{title:"\u7d20\u6750\u5e93",breadcrumbRender:function(){return Object(x.jsx)(y,{})}})})},T=[{showTitle:"\u9996\u9875",iconName:"AppstoreOutlined",view:function(){return Object(x.jsx)("div",{children:"TestPage1"})},path:"gfdggdfg"},{showTitle:"\u4e00\u7ea7\u83dc\u5355111",iconName:"AppstoreOutlined",children:[{showTitle:"\u4e8c\u7ea7\u83dc\u5355111",children:[{showTitle:"\u4e09\u7ea7\u83dc\u5355111",children:[{showTitle:"\u56db\u7ea7\u83dc\u5355111",view:N,path:"sss"}],path:"aaa"},{showTitle:"\u4e09\u7ea7\u83dc\u5355222",view:N,path:"sss"}],path:"ddd"},{showTitle:"\u4e8c\u7ea7\u83dc\u5355222",view:N,path:"fff"}],path:"ggg"},{showTitle:"\u4e00\u7ea7\u83dc\u5355222",iconName:"AppstoreOutlined",view:N,path:"hhh"},{showTitle:"\u767e\u5ea6\u9996\u9875",iconName:"LinkOutlined",path:"https://www.baidu.com"}],C=function(e){Object(i.a)(c,e);var t=Object(o.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(x.jsx)(s.a,{siderType:"mini",moduleConfig:d.default,routerConfig:T,children:Object(x.jsx)(u.a,{moduleConfig:d.default,routerConfig:T})})}}]),c}(l.a.Component);t.default=C},751:function(e,t,c){"use strict";var n=c(0),a=c(31),i=c(133),o=c(218),r=c(321),l=c(25),s=c(2);t.a=function(e){var t=e.moduleConfig,c=e.routerConfig,u=Object(a.h)(),d=Object(a.g)(),h=Object(r.a)((function(e,c){var n=[],a=[];return function e(c,i){for(var o=0;o<i.length;o++){var r=i[o],s="".concat(c,"/").concat(r.path);r.view&&!Object(l.d)(r.path)&&(a.push(s),n.push({path:s,showTitle:r.showTitle+"-"+t.moduleName,exact:!1!==r.exact,component:r.view})),Array.isArray(r.children)&&e(s,r.children)}return i}(e,c),{reactDom:n.map((function(e){return Object(s.jsx)(i.a,{exact:e.exact,path:e.path,showTitle:e.showTitle,component:e.component},e.path)})),pathList:a}})),j=Object(n.useMemo)((function(){return h("/".concat(t.modulePath),c)}),[h,c,t]);return Object(n.useEffect)((function(){u.pathname==="/".concat(t.modulePath)&&d.replace(j.pathList[0])}),[d,u,t,j]),Object(s.jsxs)(a.d,{children:[j.reactDom,Object(s.jsx)(i.a,{path:"*",component:o.a})]})}},754:function(e,t,c){"use strict";var n=c(22),a=c(45),i=(c(132),c(38)),o=c.n(i),r=(c(327),c(172)),l=c.n(r),s=c(0),u=c(31),d=c(71),h=c(3),j=c.n(h),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"},m=c(24),f=function(e,t){return s.createElement(m.a,Object.assign({},e,{ref:t,icon:b}))};f.displayName="MenuUnfoldOutlined";var p=s.forwardRef(f),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"},v=function(e,t){return s.createElement(m.a,Object.assign({},e,{ref:t,icon:O}))};v.displayName="MenuFoldOutlined";var g=s.forwardRef(v),x=c(321),w=c(65),y=c(25),N=c(169),T=c(170),C=c.n(T),z=c(2),M=l.a.Content,S=l.a.Sider,k=o.a.SubMenu;t.a=function(e){var t=e.minWidth,c=e.siderType,i=e.moduleConfig,r=e.routerConfig,h=e.children,b=Object(u.h)(),m=Object(s.useState)("mini"===c),f=Object(a.a)(m,2),O=f[0],v=f[1],T=Object(s.useState)(Object(y.i)(b.pathname)),A=Object(a.a)(T,2),E=A[0],H=A[1],I=Object(s.useState)(Object(y.i)(b.pathname)),L=Object(a.a)(I,2),P=L[0],W=L[1],K=Object(x.a)((function(e,t){return t.map((function(t){var c;if(!0===t.hideInMenu)return null;var n,a,i,r="".concat(e,"/").concat(t.path);return Object(y.d)(t.path)?Object(z.jsx)(o.a.Item,{icon:t.iconName?null===(n=N.a[t.iconName])||void 0===n?void 0:n.call(N.a,{}):null,children:Object(z.jsx)("a",{href:t.path,target:"_blank",rel:"noopener noreferrer",children:t.showTitle})},t.path):t.view||(null===(c=t.children)||void 0===c?void 0:c.every((function(e){return!0===e.hideInMenu})))?Object(z.jsx)(o.a.Item,{icon:t.iconName?null===(a=N.a[t.iconName])||void 0===a?void 0:a.call(N.a,{}):null,children:Object(z.jsx)(d.b,{exact:!0,to:r,activeStyle:{pointerEvents:"none"},children:t.showTitle})},r):Array.isArray(t.children)?Object(z.jsx)(k,{icon:t.iconName?null===(i=N.a[t.iconName])||void 0===i?void 0:i.call(N.a,{}):null,title:t.showTitle,children:K(r,t.children)},r):null}))})),R=Object(s.useMemo)((function(){return K("/".concat(i.modulePath),r)}),[i,r,K]);Object(s.useEffect)((function(){W(Object(y.i)(b.pathname)),H(Object(y.i)(b.pathname))}),[b]),Object(s.useEffect)((function(){"auto"===c&&H(O?[]:Object(y.i)(b.pathname))}),[c,O,b]);var B="mini"===c||O?{}:{openKeys:E};return Object(z.jsxs)(l.a,{className:"basics-submodule-layout-wrapper",style:{minWidth:t||"unset"},hasSider:!0,children:[Object(z.jsx)("div",{className:j()("basics-submodule-sider-placeholder",{"is-collapsed":O})}),Object(z.jsx)(S,{className:"basics-submodule-sider",width:C.a.siderWidth,collapsible:"auto"===c,collapsed:O,breakpoint:"auto"===c?"lg":void 0,collapsedWidth:parseInt(C.a.siderCollapsedWidth),theme:"light",trigger:Object(z.jsx)("div",{className:"basics-submodule-sider-trigger",children:O?Object(z.jsx)(p,{}):Object(z.jsx)(g,{})}),onCollapse:function(e){v(e)},children:Object(z.jsx)(o.a,Object(n.a)(Object(n.a)({className:"basics-submodule-sider-menu",mode:"inline",selectedKeys:P,onOpenChange:function(e){H(e||[])},onSelect:function(e){var t=e.selectedKeys,c=e.key;Object(y.d)(String(c))||W(t||[])}},B),{},{children:R}))}),Object(z.jsx)(M,{className:"basics-submodule-content",children:Object(z.jsx)(w.e,{children:h})})]})}}}]);