"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[675],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7515:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={title:"\u5e38\u89c1\u95ee\u9898",sidebar_label:"\u5e38\u89c1\u95ee\u9898",description:"",sidebar_position:96},l=void 0,u={unversionedId:"faq",id:"faq",title:"\u5e38\u89c1\u95ee\u9898",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/tkg-sdk-doc/zh/faq",tags:[],version:"current",sidebarPosition:96,frontMatter:{title:"\u5e38\u89c1\u95ee\u9898",sidebar_label:"\u5e38\u89c1\u95ee\u9898",description:"",sidebar_position:96},sidebar:"tutorialSidebar",previous:{title:"\u63d0\u4ea4\u53d1\u5e03",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-package"}},s={},p=[{value:"iOS\u76f8\u5173\u95ee\u9898",id:"ios\u76f8\u5173\u95ee\u9898",level:2},{value:"Android\u76f8\u5173\u95ee\u9898",id:"android\u76f8\u5173\u95ee\u9898",level:2}],d={toc:p};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8bf7\u786e\u4fdd\u60a8\u5df2\u6309\u7167",(0,o.kt)("a",{parentName:"p",href:"../tkg-integration/sdk-projectsettings/sdk-projectsettings-ios"},"SDK\u96c6\u6210-\u5de5\u7a0b\u8bbe\u7f6e"),"\u4e2d\u8fdb\u884c\u4e86\u6b63\u786e\u7684\u8bbe\u7f6e\u3002"),(0,o.kt)("h2",{id:"ios\u76f8\u5173\u95ee\u9898"},"iOS\u76f8\u5173\u95ee\u9898"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Xcode\u7f16\u8bd1\u65f6\uff0c\u5982\u9047\u89c1Legacy Build System\u76f8\u5173\u9519\u8bef\uff0c\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},": The Legacy Build System will be removed in a future release. You can configure the selected build system and this deprecation message in File > Project Settings.\n")),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a",(0,o.kt)("strong",{parentName:"p"},"Xcode > File > Project Settings\uff0cBuild System \u6539\u4e3a New Build System (Default)"),"\n",(0,o.kt)("img",{alt:"iOS Symbols",src:r(2217).Z,width:"934",height:"398"})),(0,o.kt)("h2",{id:"android\u76f8\u5173\u95ee\u9898"},"Android\u76f8\u5173\u95ee\u9898"))}f.isMDXComponent=!0},2217:function(e,t,r){t.Z=r.p+"assets/images/legacybuildsystem-ace40df1e1123e0c63e84ad982ecf4d4.png"}}]);