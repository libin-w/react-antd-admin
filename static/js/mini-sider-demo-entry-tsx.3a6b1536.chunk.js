(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[9],{705:function(e,t,a){"use strict";a.r(t);var n=a(59),c=a(60),i=a(80),r=a(81),s=a(0),l=a.n(s),o=a(755),u=a(756),d=a(344),j=a(15),b=(a(223),a(120)),h=a.n(b),m=(a(332),a(334)),O=a.n(m),p=(a(79),a(46)),f=a.n(p),x=(a(333),a(335)),g=a.n(x),v=(a(339),a(231)),w=a.n(v),y=(a(805),a(806)),C=a.n(y),P=(a(92),a(47)),N=a.n(P),I=(a(328),a(175)),T=a.n(I),k=(a(327),a(99)),S=a.n(k),F=a(45),E=(a(222),a(171)),W=a.n(E),q=a(64),R=a(763),z=a(2),A=function(){return Object(z.jsx)(R.a,{moduleConfig:d.default,routerConfig:K})},M=a(726),V=W.a.Option,L=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],H={labelCol:{span:7},wrapperCol:{span:12}},J={wrapperCol:{span:16,offset:7}},K=[{showTitle:"\u8868\u5355\u9875",iconName:"FormOutlined",children:[{showTitle:"\u57fa\u7840\u8868\u5355",view:function(){var e=S.a.useForm(),t=Object(F.a)(e,1)[0],a=Object(z.jsx)(S.a.Item,{name:"prefix",noStyle:!0,children:Object(z.jsxs)(W.a,{style:{width:70},children:[Object(z.jsx)(V,{value:"86",children:"+86"}),Object(z.jsx)(V,{value:"87",children:"+87"})]})}),n=Object(s.useState)([]),c=Object(F.a)(n,2),i=c[0],r=c[1],l=i.map((function(e){return{label:e,value:e}}));return Object(z.jsxs)("div",{children:[Object(z.jsx)(q.d,{title:"\u57fa\u7840\u8868\u5355",breadcrumbRender:function(){return Object(z.jsx)(A,{})},children:"\u8868\u5355\u9875\u7528\u4e8e\u5411\u7528\u6237\u6536\u96c6\u6216\u9a8c\u8bc1\u4fe1\u606f\uff0c\u57fa\u7840\u8868\u5355\u5e38\u89c1\u4e8e\u6570\u636e\u9879\u8f83\u5c11\u7684\u8868\u5355\u573a\u666f\u3002"}),Object(z.jsx)(q.c,{children:Object(z.jsx)(q.b,{allPadding:!0,children:Object(z.jsxs)(S.a,Object(j.a)(Object(j.a)({},H),{},{form:t,name:"register",onFinish:function(e){},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0,children:[Object(z.jsx)(S.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(z.jsx)(T.a,{})}),Object(z.jsx)(S.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(z.jsx)(T.a.Password,{})}),Object(z.jsx)(S.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}],children:Object(z.jsx)(T.a.Password,{})}),Object(z.jsx)(S.a.Item,{name:"nickname",label:Object(z.jsxs)("span",{children:["Nickname\xa0",Object(z.jsx)(N.a,{title:"What do you want others to call you?",children:Object(z.jsx)(M.a,{})})]}),rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}],children:Object(z.jsx)(T.a,{})}),Object(z.jsx)(S.a.Item,{name:"residence",label:"Habitual Residence",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}],children:Object(z.jsx)(C.a,{options:L})}),Object(z.jsx)(S.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],children:Object(z.jsx)(T.a,{addonBefore:a,style:{width:"100%"}})}),Object(z.jsx)(S.a.Item,{name:"website",label:"Website",rules:[{required:!0,message:"Please input website!"}],children:Object(z.jsx)(w.a,{options:l,onChange:function(e){r(e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[])},placeholder:"website",children:Object(z.jsx)(T.a,{})})}),Object(z.jsx)(S.a.Item,{label:"Captcha",extra:"We must make sure that your are a human.",children:Object(z.jsxs)(O.a,{gutter:8,children:[Object(z.jsx)(g.a,{span:12,children:Object(z.jsx)(S.a.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}],children:Object(z.jsx)(T.a,{})})}),Object(z.jsx)(g.a,{span:12,children:Object(z.jsx)(f.a,{children:"Get captcha"})})]})}),Object(z.jsx)(S.a.Item,Object(j.a)(Object(j.a)({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject("Should accept agreement")}}]},J),{},{children:Object(z.jsxs)(h.a,{children:["I have read the ",Object(z.jsx)("a",{href:window.location.href,children:"agreement"})]})})),Object(z.jsxs)(S.a.Item,Object(j.a)(Object(j.a)({},J),{},{children:[Object(z.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Register"}),Object(z.jsx)(f.a,{onClick:function(){t.resetFields()},children:"Reset"})]}))]}))})})]})},path:"basic-form",brdgeConfig:{count:"new"},access:["admin"]},{showTitle:"\u5206\u6b65\u8868\u5355",view:function(){var e=S.a.useForm();Object(F.a)(e,1)[0];return Object(z.jsxs)("div",{children:[Object(z.jsx)(q.d,{title:"\u5206\u6b65\u8868\u5355",breadcrumbRender:function(){return Object(z.jsx)(A,{})},children:"\u5c06\u4e00\u4e2a\u5197\u957f\u6216\u7528\u6237\u4e0d\u719f\u6089\u7684\u8868\u5355\u4efb\u52a1\u5206\u6210\u591a\u4e2a\u6b65\u9aa4\uff0c\u6307\u5bfc\u7528\u6237\u5b8c\u6210\u3002"}),Object(z.jsx)(q.c,{children:Object(z.jsx)(q.b,{allPadding:!0,children:"StepFormRouteView"})})]})},path:"step-form"},{showTitle:"\u9ad8\u7ea7\u8868\u5355",view:function(){var e=S.a.useForm();Object(F.a)(e,1)[0];return Object(z.jsxs)("div",{children:[Object(z.jsx)(q.d,{title:"\u9ad8\u7ea7\u8868\u5355",breadcrumbRender:function(){return Object(z.jsx)(A,{})},children:"\u5f53\u4e00\u6b21\u6027\u63d0\u4ea4\u5927\u91cf\u6570\u636e\u65f6\uff0c\u53ef\u4f7f\u7528\u9ad8\u7ea7\u8868\u5355\u3002"}),Object(z.jsx)(q.c,{children:Object(z.jsx)(q.b,{allPadding:!0,children:"AdvancedFormRouteView"})})]})},path:"advanced-form"}],path:"form-page"},{showTitle:"\u767e\u5ea6\u9996\u9875",iconName:"LinkOutlined",path:"https://www.baidu.com"}],D=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(z.jsx)(o.a,{siderType:"mini",moduleConfig:d.default,routerConfig:K,children:Object(z.jsx)(u.a,{moduleConfig:d.default,routerConfig:K})})}}]),a}(l.a.Component);t.default=D},755:function(e,t,a){"use strict";var n=a(15),c=(a(170),a(95)),i=a.n(c),r=a(45),s=(a(133),a(38)),l=a.n(s),o=(a(329),a(174)),u=a.n(o),d=a(0),j=a(31),b=a(72),h=a(3),m=a.n(h),O=a(933),p=a(934),f=a(322),x=a(64),g=a(25),v=a(169),w=a(172),y=a.n(w),C=a(2),P=u.a.Content,N=u.a.Sider,I=l.a.SubMenu;t.a=function(e){var t=e.minWidth,a=e.siderType,c=e.moduleConfig,s=e.routerConfig,o=e.children,h=Object(j.h)(),w=Object(d.useState)("mini"===a),T=Object(r.a)(w,2),k=T[0],S=T[1],F=Object(d.useState)(Object(g.i)(h.pathname)),E=Object(r.a)(F,2),W=E[0],q=E[1],R=Object(d.useState)(Object(g.i)(h.pathname)),z=Object(r.a)(R,2),A=z[0],M=z[1],V=Object(f.a)((function(e,t){return t.map((function(t){var a;if(!0===t.hideInMenu)return null;var c,r,s,o="".concat(e,"/").concat(t.path);return Object(g.d)(t.path)?Object(C.jsx)(l.a.Item,{icon:t.iconName?null===(c=v.a[t.iconName])||void 0===c?void 0:c.call(v.a,{}):null,children:Object(C.jsx)("a",{href:t.path,target:"_blank",rel:"noopener noreferrer",children:t.showTitle})},t.path):t.view||(null===(a=t.children)||void 0===a?void 0:a.every((function(e){return!0===e.hideInMenu})))?Object(C.jsx)(l.a.Item,{icon:t.iconName?null===(r=v.a[t.iconName])||void 0===r?void 0:r.call(v.a,{}):null,style:{position:"relative"},children:Object(C.jsxs)(b.b,{exact:!0,to:o,activeStyle:{pointerEvents:"none"},children:[t.showTitle,t.brdgeConfig&&Object(C.jsx)("span",{className:"basics-submodule-sider-menu-badge",children:Object(C.jsx)(i.a,Object(n.a)({},t.brdgeConfig))})]})},o):Array.isArray(t.children)?Object(C.jsx)(I,{icon:t.iconName?null===(s=v.a[t.iconName])||void 0===s?void 0:s.call(v.a,{}):null,title:t.showTitle,children:V(o,t.children)},o):null}))})),L=Object(d.useMemo)((function(){return V("/".concat(c.modulePath),s)}),[c,s,V]);Object(d.useEffect)((function(){M(Object(g.i)(h.pathname)),q(Object(g.i)(h.pathname))}),[h]),Object(d.useEffect)((function(){"auto"===a&&q(k?[]:Object(g.i)(h.pathname))}),[a,k,h]);var H="mini"===a||k?{}:{openKeys:W};return Object(C.jsxs)(u.a,{className:"basics-submodule-layout-wrapper",style:{minWidth:t||"unset"},hasSider:!0,children:[Object(C.jsx)("div",{className:m()("basics-submodule-sider-placeholder",{"is-collapsed":k})}),Object(C.jsx)(N,{className:"basics-submodule-sider",width:y.a.siderWidth,collapsible:"auto"===a,collapsed:k,breakpoint:"auto"===a?"lg":void 0,collapsedWidth:parseInt(y.a.siderCollapsedWidth),theme:"light",trigger:Object(C.jsx)("div",{className:"basics-submodule-sider-trigger",children:k?Object(C.jsx)(O.a,{}):Object(C.jsx)(p.a,{})}),onCollapse:function(e){S(e)},children:Object(C.jsx)(l.a,Object(n.a)(Object(n.a)({className:"basics-submodule-sider-menu",mode:"inline",selectedKeys:A,onOpenChange:function(e){q(e||[])},onSelect:function(e){var t=e.selectedKeys,a=e.key;Object(g.d)(String(a))||M(t||[])}},H),{},{children:L}))}),Object(C.jsx)(P,{className:"basics-submodule-content",children:Object(C.jsx)(x.e,{children:o})})]})}},756:function(e,t,a){"use strict";var n=a(0),c=a(31),i=a(134),r=a(220),s=a(322),l=a(25),o=a(2);t.a=function(e){var t=e.moduleConfig,a=e.routerConfig,u=Object(c.h)(),d=Object(c.g)(),j=Object(s.a)((function(e,a){var n=[],c=[];return function e(a,i){for(var r=0;r<i.length;r++){var s=i[r],o="".concat(a,"/").concat(s.path);s.view&&!Object(l.d)(s.path)&&(c.push(o),n.push({path:o,access:s.access,showTitle:s.showTitle+"-"+t.moduleName,exact:!1!==s.exact,component:s.view})),Array.isArray(s.children)&&e(o,s.children)}return i}(e,a),{reactDom:n.map((function(e){return Object(o.jsx)(i.a,{exact:e.exact,path:e.path,accessValue:e.access,showTitle:e.showTitle,component:e.component},e.path)})),pathList:c}})),b=Object(n.useMemo)((function(){return j("/".concat(t.modulePath),a)}),[j,a,t]);return Object(n.useEffect)((function(){u.pathname==="/".concat(t.modulePath)&&d.replace(b.pathList[0])}),[d,u,t,b]),Object(o.jsxs)(c.d,{children:[b.reactDom,Object(o.jsx)(i.a,{path:"*",component:r.a})]})}},763:function(e,t,a){"use strict";a(330);var n=a(331),c=a.n(n),i=(a(219),a(115)),r=a.n(i),s=a(45),l=a(0),o=a(31),u=a(72),d=a(169),j=a(2);t.a=function(e){var t,a=e.moduleConfig,n=e.routerConfig,i=Object(o.h)(),b=Object(l.useState)([]),h=Object(s.a)(b,2),m=h[0],O=h[1];return Object(l.useEffect)((function(){var e=i.pathname.substring(1).split("/").splice(1),t="",a="",c=[],r=n;e.forEach((function(e){var n=r.find((function(t){return 0===t.path.indexOf(a+e)}));n?(c.push({title:n.showTitle,key:"".concat(t,"/").concat(e),url:n.view?"".concat(t,"/").concat(e):""}),Array.isArray(n.children)?(r=n.children,a="",t="".concat(t,"/").concat(e)):r=[]):a="".concat(e,"/")})),O(c)}),[i,n]),Object(j.jsxs)(c.a,{children:[Object(j.jsx)(c.a.Item,{children:Object(j.jsx)(u.b,{exact:!0,to:"/".concat(a.modulePath),children:Object(j.jsxs)(r.a,{size:4,children:[a.iconName&&(null===(t=d.a[a.iconName])||void 0===t?void 0:t.call(d.a,{})),a.moduleName]})})}),m.map((function(e,t){return Object(j.jsx)(c.a.Item,{children:e.url&&m.length!==t+1?Object(j.jsx)(u.b,{exact:!0,to:"/".concat(a.modulePath).concat(e.url),children:e.title}):e.title},e.key)}))]})}}}]);