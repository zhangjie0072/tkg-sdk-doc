"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),d=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||a;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5},i="\u5e7f\u544a\u63a5\u5165",o={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"version-2.0.1/tkg-integration/sdk-basic/sdk-func-ads",title:"\u5e7f\u544a\u63a5\u5165",description:"\u63d2\u5c4f\u5e7f\u544a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.0.1/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc/zh/2.0.1/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"2.0.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5408\u89c4\u63a5\u53e3",permalink:"/tkg-sdk-doc/zh/2.0.1/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"\u4e8b\u4ef6\u57cb\u70b9",permalink:"/tkg-sdk-doc/zh/2.0.1/tkg-integration/sdk-basic/sdk-func-event"}},s={},d=[{value:"\u63d2\u5c4f\u5e7f\u544a",id:"\u63d2\u5c4f\u5e7f\u544a",level:2},{value:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",id:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",level:3},{value:"\u63d2\u5c4fIsReady",id:"\u63d2\u5c4fisready",level:3},{value:"\u6fc0\u52b1\u89c6\u9891",id:"\u6fc0\u52b1\u89c6\u9891",level:2},{value:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",id:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",level:3},{value:"\u6fc0\u52b1\u89c6\u9891isReady",id:"\u6fc0\u52b1\u89c6\u9891isready",level:3},{value:"\u5f00\u5c4f\u5e7f\u544a",id:"\u5f00\u5c4f\u5e7f\u544a",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5e7f\u544a\u63a5\u5165"},"\u5e7f\u544a\u63a5\u5165"),(0,r.kt)("h2",{id:"\u63d2\u5c4f\u5e7f\u544a"},"\u63d2\u5c4f\u5e7f\u544a"),(0,r.kt)("h3",{id:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a"},"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \u53c2\u6570:   "),(0,r.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_adPos"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"TKGIVAdPositionName"),(0,r.kt)("td",null,"\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u3002",(0,r.kt)("br",null),"\u8bf7\u5c06\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5148\u5728 TKGAdPositionName.cs - TKGIVAdPositionName \u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_callback"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"Action"),(0,r.kt)("td",null,"\u63d2\u5c4f\u56de\u8c03\u3002",(0,r.kt)("br",null),"\u5173\u95ed\u63d2\u5c4f\u548c\u64ad\u653e\u5931\u8d25\u7b49\u90fd\u4f1a\u56de\u6765\u8fd9\u4e2a\u56de\u8c03\u3002"))),(0,r.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5b9a\u4e49\u793a\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u8def\u5f84\uff1a/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,r.kt)("h3",{id:"\u63d2\u5c4fisready"},"\u63d2\u5c4fIsReady"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,r.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u51c6\u5907\u597d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"true  "),(0,r.kt)("li",{parentName:"ul"},"false ")),(0,r.kt)("h2",{id:"\u6fc0\u52b1\u89c6\u9891"},"\u6fc0\u52b1\u89c6\u9891"),(0,r.kt)("h3",{id:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"},"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:"),(0,r.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null)"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_adPos"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"TKGRVPositionName"),(0,r.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u70b9\u4f4d\u540d\u79f0\u3002 ",(0,r.kt)("br",null),"\u8bf7\u5c06\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5148\u5728 TKGAdPositionName.cs - TKGRVPositionName \u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_rewardCallback"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"Action<bool"),(0,r.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u5956\u52b1\u56de\u8c03\u3002 ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"_playFailedCallback"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"Action"),(0,r.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u64ad\u653e\u5931\u8d25\u56de\u8c03\u3002 "))),(0,r.kt)("p",null,"\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5b9a\u4e49\u793a\u4f8b\uff1a ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"\u8def\u5f84\uff1a/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,r.kt)("h3",{id:"\u6fc0\u52b1\u89c6\u9891isready"},"\u6fc0\u52b1\u89c6\u9891isReady"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,r.kt)("p",null,"\u8fd4\u56de\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u662f\u5426\u51c6\u5907\u597d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Return:   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"true  "),(0,r.kt)("li",{parentName:"ul"},"false  ")),(0,r.kt)("h2",{id:"\u5f00\u5c4f\u5e7f\u544a"},"\u5f00\u5c4f\u5e7f\u544a"),(0,r.kt)("p",null,"\u63a5\u5165\u5f00\u5c4f\u5e7f\u544a\uff0c\u53ea\u9700\u8981\u914d\u7f6e TOPON_OriginSplashAdId\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"file\uff1aAssets/TKGSDK/Config/Scripts/AdsSettings/StaticStringsKey_iOS.cs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TOPON_OriginSplashAdId\n")))}c.isMDXComponent=!0}}]);