"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6405],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),k=p(n),d=i,g=k["".concat(s,".").concat(d)]||k[d]||l[d]||r;return n?a.createElement(g,o(o({ref:e},u),{},{components:n})):a.createElement(g,o({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=k;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6296:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],c={sidebar_position:1},s="SDK\u5bfc\u5165",p={unversionedId:"tkg-integration/sdk-basic/sdk-import",id:"version-2.0.1/tkg-integration/sdk-basic/sdk-import",title:"SDK\u5bfc\u5165",description:"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.1/tkg-integration/sdk-basic/sdk-import.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-import",permalink:"/tkg-sdk-doc/zh/2.0.1/tkg-integration/sdk-basic/sdk-import",tags:[],version:"2.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/tkg-sdk-doc/zh/2.0.1/tkg-integration/sdk-prepare"},next:{title:"SDK\u53c2\u6570\u914d\u7f6e(Only for iOS)",permalink:"/tkg-sdk-doc/zh/2.0.1/tkg-integration/sdk-basic/sdk-config"}},u={},l=[{value:"ToukaSDK.unitypackage",id:"toukasdkunitypackage",level:3},{value:"Touka_AndroidPlugins.unitypackage",id:"touka_androidpluginsunitypackage",level:3},{value:"Touka_iOSAnalythics.unitypackage",id:"touka_iosanalythicsunitypackage",level:3},{value:"Touka_iOSAds.unitypackage",id:"touka_iosadsunitypackage",level:3}],k={toc:l};function d(t){var e=t.components,c=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sdk\u5bfc\u5165"},"SDK\u5bfc\u5165"),(0,r.kt)("p",null,"\u8bf7\u5c06\u4e0b\u8f7d\u540e\u7684unitypackage\u5305\u5bfc\u5165\u5de5\u7a0b:    "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"SDK Demo: ",(0,r.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Demo/ToukaSDKDemo"))))),(0,r.kt)("h3",{id:"toukasdkunitypackage"},"ToukaSDK.unitypackage"),(0,r.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"import01",src:n(5464).Z,width:"300",height:"477"})),(0,r.kt)("h3",{id:"touka_androidpluginsunitypackage"},"Touka_AndroidPlugins.unitypackage"),(0,r.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"import02",src:n(1371).Z,width:"300",height:"420"})),(0,r.kt)("h3",{id:"touka_iosanalythicsunitypackage"},"Touka_iOSAnalythics.unitypackage"),(0,r.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"import03",src:n(1802).Z,width:"300",height:"461"})),(0,r.kt)("h3",{id:"touka_iosadsunitypackage"},"Touka_iOSAds.unitypackage"),(0,r.kt)("p",null,"\u5bfc\u5165\u540e\u5982\u56fe\u6240\u793a\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"import04",src:n(6627).Z,width:"300",height:"461"})))}d.isMDXComponent=!0},5464:function(t,e,n){e.Z=n.p+"assets/images/import01-e699c91f116615b96f2a31d00f47853a.jpg"},1371:function(t,e,n){e.Z=n.p+"assets/images/import02-8ac17383f8591ee380269e4c4f39680b.jpg"},1802:function(t,e,n){e.Z=n.p+"assets/images/import03-5c5ca6a4dfeb9ee09d72060a8031b7d8.jpeg"},6627:function(t,e,n){e.Z=n.p+"assets/images/import04-cb1b869a01d10b713bc2b29b5b434683.jpeg"}}]);