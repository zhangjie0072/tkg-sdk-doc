"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),y=i,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:4},o="Privacy Compliance",c={unversionedId:"tkg-integration/sdk-basic/sdk-func-privacy",id:"version-2.0.1/tkg-integration/sdk-basic/sdk-func-privacy",title:"Privacy Compliance",description:"Privacy Policy",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.0.1/tkg-integration/sdk-basic/sdk-func-privacy.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-privacy",permalink:"/tkg-sdk-doc/2.0.1/tkg-integration/sdk-basic/sdk-func-privacy",tags:[],version:"2.0.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Initializing the SDK",permalink:"/tkg-sdk-doc/2.0.1/tkg-integration/sdk-basic/sdk-func-init"},next:{title:"Advertising integration",permalink:"/tkg-sdk-doc/2.0.1/tkg-integration/sdk-basic/sdk-func-ads"}},s={},p=[{value:"Privacy Policy",id:"privacy-policy",level:3},{value:"Terms &amp; Conditions",id:"terms--conditions",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"privacy-compliance"},"Privacy Compliance"),(0,i.kt)("h3",{id:"privacy-policy"},"Privacy Policy"),(0,i.kt)("p",null,"Open privacy page in browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenPrivacyURL();\n")),(0,i.kt)("h3",{id:"terms--conditions"},"Terms & Conditions"),(0,i.kt)("p",null,"Open terms&Conditions in browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenUserTermURL();\n")))}d.isMDXComponent=!0}}]);