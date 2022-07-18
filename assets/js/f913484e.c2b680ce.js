"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9167],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),p=s(n),k=r,m=p["".concat(o,".").concat(k)]||p[k]||c[k]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5542:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={sidebar_position:5},o="Advertising integration",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads",title:"Advertising integration",description:"InterstitialAd",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc/2.1.0/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"2.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Privacy Compliance",permalink:"/tkg-sdk-doc/2.1.0/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"Event Tracking",permalink:"/tkg-sdk-doc/2.1.0/tkg-integration/sdk-basic/sdk-func-event"}},u={},c=[{value:"InterstitialAd",id:"interstitialad",level:2},{value:"ShowInterstitialAd",id:"showinterstitialad",level:3},{value:"IsReadyInterstitialAd",id:"isreadyinterstitialad",level:3},{value:"RewardAd",id:"rewardad",level:2},{value:"PlayRewardAd",id:"playrewardad",level:3},{value:"IsReadyRewardAd",id:"isreadyrewardad",level:3},{value:"Splash Ad",id:"splash-ad",level:2}],p={toc:c};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advertising-integration"},"Advertising integration"),(0,l.kt)("h2",{id:"interstitialad"},"InterstitialAd"),(0,l.kt)("h3",{id:"showinterstitialad"},"ShowInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," API:   "),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGIVAdPositionName"),(0,l.kt)("td",null,"Name of interstitial ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the InterstitialAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGIVAdPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_callback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,"Callback of ad close and playback fail.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_IvType"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"IVADType"),(0,l.kt)("td",null,"Type of frequency control",(0,l.kt)("br",null),"Default set IV1. IV2 can be used if required."))),(0,l.kt)("p",null,"define the InterstitialAd POSITION NAME as follows   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,l.kt)("h3",{id:"isreadyinterstitialad"},"IsReadyInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,l.kt)("p",null,"Whether interstitial ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false")),(0,l.kt)("h2",{id:"rewardad"},"RewardAd"),(0,l.kt)("h3",{id:"playrewardad"},"PlayRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"API:"),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGRVPositionName"),(0,l.kt)("td",null,"Name of reward ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the RewardAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGRVPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action<bool>"),(0,l.kt)("td",null,"Callback for reward.  ",(0,l.kt)("br",null),"Recommended developers issue rewards in this callback.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action<bool>"),(0,l.kt)("td",null,"Callback of ad close and playback fail."))),(0,l.kt)("p",null,"define the RewardAd POSITION NAME as follows    "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,l.kt)("h3",{id:"isreadyrewardad"},"IsReadyRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,l.kt)("p",null,"Whether reward ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n","Return:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false  ")),(0,l.kt)("h2",{id:"splash-ad"},"Splash Ad"),(0,l.kt)("p",null,"Don't need to do anything to access Splash Ads. ",(0,l.kt)("br",null),"\n(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)"))}k.isMDXComponent=!0}}]);