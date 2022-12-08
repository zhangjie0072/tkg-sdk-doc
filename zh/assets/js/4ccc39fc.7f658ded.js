"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5963],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4419:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},c="\u521d\u59cb\u5316",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-init",id:"version-3.0.1/tkg-integration/sdk-basic/sdk-func-init",title:"\u521d\u59cb\u5316",description:"- SDK\u7684\u63a5\u53e3\u4e3b\u8981\u5728TKGSDKManager\u8fd9\u4e2a\u7c7b\u91cc\uff0c\u9700\u8981\u901a\u8fc7 TKGSDKManager.Instance \u83b7\u53d6\u5355\u4f8b\u8c03\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.1/tkg-integration/sdk-basic/sdk-func-init.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-init",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-init",tags:[],version:"3.0.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-config"},next:{title:"\u5408\u89c4\u6027\u5f39\u7a97",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-privacy"}},u={},p=[{value:"InitSDK",id:"initsdk",level:2}],d={toc:p};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"SDK\u7684\u63a5\u53e3\u4e3b\u8981\u5728TKGSDKManager\u8fd9\u4e2a\u7c7b\u91cc\uff0c\u9700\u8981\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"TKGSDKManager.Instance")," \u83b7\u53d6\u5355\u4f8b\u8c03\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u8f85\u52a9\u6027\u7684\u63a5\u53e3\u5728TKGUtils\u8fd9\u4e2a\u7c7b\u91cc\uff0c\u90fd\u662f\u9759\u6001\u63a5\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5185\u5bb9\u90fd\u65e0\u9700\u5173\u5fc3\u53ca\u8c03\u7528\u3002")))),(0,i.kt)("h2",{id:"initsdk"},"InitSDK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.InitSDK();\n")),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u5728\u7a0b\u5e8f\u7684\u5165\u53e3\u65b9\u6cd5\u4e2d\u624b\u52a8\u8c03\u7528ToukaSDK\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u4e14",(0,i.kt)("font",{color:"ff0000"},"\u521d\u59cb\u5316\u65b9\u6cd5\u53ea\u80fd\u8c03\u7528\u4e00\u6b21"),"\u3002"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u65b9\u6cd5\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AppTrackingTransparency system (ATT\u5f39\u6846)"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u534f\u8bae"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u540d\u8ba4\u8bc1&\u9632\u6c89\u8ff7"),(0,i.kt)("li",{parentName:"ul"},"\u7edf\u8ba1"),(0,i.kt)("li",{parentName:"ul"},"\u5e7f\u544a")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"API:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void InitSDK(Action _initCallback = null) \n")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u53c2\u6570"),(0,i.kt)("td",null,"\u662f\u5426\u5fc5\u987b"),(0,i.kt)("td",null,"\u7c7b\u578b"),(0,i.kt)("td",null,"\u63cf\u8ff0")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_initCallback"),(0,i.kt)("td",null,"N"),(0,i.kt)("td",null,"Action"),(0,i.kt)("td",null,"\u521d\u59cb\u5316\u7ed3\u675f\u540e\u56de\u8c03\u3002"))))}k.isMDXComponent=!0}}]);