"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1292],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=u(n),p=l,m=k["".concat(s,".").concat(p)]||k[p]||c[p]||a;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3290:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={sidebar_position:5},s="\u5e7f\u544a\u63a5\u5165",u={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads",title:"\u5e7f\u544a\u63a5\u5165",description:"\u63d2\u5c4f\u5e7f\u544a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"2.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5408\u89c4\u63a5\u53e3",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"\u4e8b\u4ef6\u57cb\u70b9",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-func-event"}},d={},c=[{value:"\u63d2\u5c4f\u5e7f\u544a",id:"\u63d2\u5c4f\u5e7f\u544a",level:2},{value:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",id:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",level:3},{value:"\u63d2\u5c4fIsReady",id:"\u63d2\u5c4fisready",level:3},{value:"\u6fc0\u52b1\u89c6\u9891",id:"\u6fc0\u52b1\u89c6\u9891",level:2},{value:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",id:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",level:3},{value:"\u6fc0\u52b1\u89c6\u9891isReady",id:"\u6fc0\u52b1\u89c6\u9891isready",level:3},{value:"\u5f00\u5c4f\u5e7f\u544a",id:"\u5f00\u5c4f\u5e7f\u544a",level:2}],k={toc:c};function p(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e7f\u544a\u63a5\u5165"},"\u5e7f\u544a\u63a5\u5165"),(0,a.kt)("h2",{id:"\u63d2\u5c4f\u5e7f\u544a"},"\u63d2\u5c4f\u5e7f\u544a"),(0,a.kt)("h3",{id:"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a"},"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," API:   "),(0,a.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_adPos"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"TKGIVAdPositionName"),(0,a.kt)("td",null,"\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u3002",(0,a.kt)("br",null),"\u8bf7\u5c06\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5148\u5728 TKGAdPositionName.cs - TKGIVAdPositionName \u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_callback"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Action"),(0,a.kt)("td",null,"\u63d2\u5c4f\u56de\u8c03\u3002",(0,a.kt)("br",null),"\u5173\u95ed\u63d2\u5c4f\u548c\u63d2\u5c4f\u672a\u6210\u529f\u64ad\u653e\u7b49\u90fd\u4f1a\u56de\u7ed9\u8fd9\u4e2a\u56de\u8c03\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_IvType"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"IVADType"),(0,a.kt)("td",null,"\u63d2\u5c4f\u9891\u6b21\u7c7b\u578b\u3002",(0,a.kt)("br",null),"\u9ed8\u8ba4\u4f7f\u7528 IV1\u3002\u53ef\u7ed3\u5408\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u5982\u6709\u4e0d\u540c\u63d2\u5c4f\u9891\u6b21\u9700\u6c42\uff0c\u53ef\u914d\u5408 IV2 \u4f7f\u7528\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," \u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5b9a\u4e49\u793a\u4f8b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,a.kt)("h3",{id:"\u63d2\u5c4fisready"},"\u63d2\u5c4fIsReady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,a.kt)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u662f\u5426\u51c6\u5907\u597d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"true  "),(0,a.kt)("li",{parentName:"ul"},"false ")),(0,a.kt)("h2",{id:"\u6fc0\u52b1\u89c6\u9891"},"\u6fc0\u52b1\u89c6\u9891"),(0,a.kt)("h3",{id:"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"},"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:"),(0,a.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null)"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_adPos"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"TKGRVPositionName"),(0,a.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u70b9\u4f4d\u540d\u79f0\u3002 ",(0,a.kt)("br",null),"\u8bf7\u5c06\u3010\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u3011\u4e2d\u7684\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5148\u5728 TKGAdPositionName.cs - TKGRVPositionName \u4e2d\u8fdb\u884c\u5b9a\u4e49\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_rewardCallback"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Action<bool>"),(0,a.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u5956\u52b1\u56de\u8c03\u3002(\u5728\u6b64\u56de\u8c03\u4e2d\u5904\u7406\u4e0b\u53d1\u5956\u52b1) ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_playFailedCallback"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Action"),(0,a.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u672a\u6210\u529f\u64ad\u653e\u56de\u8c03\u3002 "))),(0,a.kt)("p",null,"\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\u5b9a\u4e49\u793a\u4f8b\uff1a    ",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,a.kt)("h3",{id:"\u6fc0\u52b1\u89c6\u9891isready"},"\u6fc0\u52b1\u89c6\u9891isReady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u662f\u5426\u51c6\u5907\u597d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","Return:   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"true  "),(0,a.kt)("li",{parentName:"ul"},"false  ")),(0,a.kt)("h2",{id:"\u5f00\u5c4f\u5e7f\u544a"},"\u5f00\u5c4f\u5e7f\u544a"),(0,a.kt)("p",null,"\u63a5\u5165\u5f00\u5c4f\u65e0\u9700\u505a\u4efb\u4f55\u5904\u7406\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\uff08\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f00\u5c4f\u5e7f\u544a\u4f4did\u6b63\u786e\u5373\u53ef\u5728\u6e38\u620f\u542f\u52a8\u65f6\u6b63\u5e38\u5c55\u793a\u5f00\u5c4f\u5e7f\u544a\u300c ",(0,a.kt)("inlineCode",{parentName:"p"},"ad_splash_id ")," \u300d\uff09\u3002"))}p.isMDXComponent=!0}}]);