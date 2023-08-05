"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=o(n),k=l,m=c["".concat(s,".").concat(k)]||c[k]||p[k]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:l,i[1]=d;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:5},i="Advertising integration",d={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads",title:"Advertising integration",description:"InterstitialAd",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc/2.1.0/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"2.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Privacy Compliance",permalink:"/tkg-sdk-doc/2.1.0/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"Event Tracking",permalink:"/tkg-sdk-doc/2.1.0/tkg-integration/sdk-basic/sdk-func-event"}},s={},o=[{value:"InterstitialAd",id:"interstitialad",level:2},{value:"ShowInterstitialAd",id:"showinterstitialad",level:3},{value:"IsReadyInterstitialAd",id:"isreadyinterstitialad",level:3},{value:"RewardAd",id:"rewardad",level:2},{value:"PlayRewardAd",id:"playrewardad",level:3},{value:"IsReadyRewardAd",id:"isreadyrewardad",level:3},{value:"Splash Ad",id:"splash-ad",level:2}],u={toc:o},c="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advertising-integration"},"Advertising integration"),(0,l.kt)("h2",{id:"interstitialad"},"InterstitialAd"),(0,l.kt)("h3",{id:"showinterstitialad"},"ShowInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," API:   "),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGIVAdPositionName"),(0,l.kt)("td",null,"Name of interstitial ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the InterstitialAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGIVAdPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_callback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,"Callback of ad close and playback fail.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_IvType"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"IVADType"),(0,l.kt)("td",null,"Type of frequency control",(0,l.kt)("br",null),"Default set IV1. IV2 can be used if required."))),(0,l.kt)("p",null,"define the InterstitialAd POSITION NAME as follows   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,l.kt)("h3",{id:"isreadyinterstitialad"},"IsReadyInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,l.kt)("p",null,"Whether interstitial ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false")),(0,l.kt)("h2",{id:"rewardad"},"RewardAd"),(0,l.kt)("h3",{id:"playrewardad"},"PlayRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"API:"),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGRVPositionName"),(0,l.kt)("td",null,"Name of reward ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the RewardAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGRVPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action<bool>"),(0,l.kt)("td",null,"Callback for reward.  ",(0,l.kt)("br",null),"Recommended developers issue rewards in this callback.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action<bool>"),(0,l.kt)("td",null,"Callback of ad close and playback fail."))),(0,l.kt)("p",null,"define the RewardAd POSITION NAME as follows    "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,l.kt)("h3",{id:"isreadyrewardad"},"IsReadyRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,l.kt)("p",null,"Whether reward ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n","Return:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false  ")),(0,l.kt)("h2",{id:"splash-ad"},"Splash Ad"),(0,l.kt)("p",null,"Don't need to do anything to access Splash Ads. ",(0,l.kt)("br",null),"\n(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)"))}p.isMDXComponent=!0}}]);