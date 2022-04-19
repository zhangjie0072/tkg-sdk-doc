"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,y=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"\u5e38\u89c1\u95ee\u9898",sidebar_label:"\u5e38\u89c1\u95ee\u9898",description:"",sidebar_position:96},u=void 0,s={unversionedId:"faq",id:"faq",title:"\u5e38\u89c1\u95ee\u9898",description:"",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/tkg-sdk-doc/zh/faq",tags:[],version:"current",sidebarPosition:96,frontMatter:{title:"\u5e38\u89c1\u95ee\u9898",sidebar_label:"\u5e38\u89c1\u95ee\u9898",description:"",sidebar_position:96},sidebar:"tutorialSidebar",previous:{title:"SDK APIS",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-apis"},next:{title:"\u4e0b\u8f7dSDK",permalink:"/tkg-sdk-doc/zh/download"}},l={},p=[{value:"Why do you use PostHog",id:"why-do-you-use-posthog",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-do-you-use-posthog"},"Why do you use PostHog"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PostHog/posthog"},"PostHog")," is an open source, privacy-friendly analytics platform that lets us evaluate how many people are using Meli and which version they have in production. In practice, your Meli installation sends a heartbeat once a day to our PostHog server. You may disable this feature by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"MELI_POSTHOG_ENABLED")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))}d.isMDXComponent=!0}}]);