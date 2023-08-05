"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),k=s(n),c=l,m=k["".concat(o,".").concat(c)]||k[c]||p[c]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[k]="string"==typeof e?e:l,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:5},i="Advertising integration",d={unversionedId:"tkg-integration/sdk-basic/sdk-func-ads",id:"version-2.2.x/tkg-integration/sdk-basic/sdk-func-ads",title:"Advertising integration",description:"InterstitialAd",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.2.x/tkg-integration/sdk-basic/sdk-func-ads.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-ads",permalink:"/tkg-sdk-doc/2.2.x/tkg-integration/sdk-basic/sdk-func-ads",tags:[],version:"2.2.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Compliance Popup",permalink:"/tkg-sdk-doc/2.2.x/tkg-integration/sdk-basic/sdk-func-privacy"},next:{title:"Event Tracking",permalink:"/tkg-sdk-doc/2.2.x/tkg-integration/sdk-basic/sdk-func-event"}},o={},s=[{value:"InterstitialAd",id:"interstitialad",level:2},{value:"ShowInterstitialAd",id:"showinterstitialad",level:3},{value:"IsReadyInterstitialAd",id:"isreadyinterstitialad",level:3},{value:"RewardAd",id:"rewardad",level:2},{value:"ShowRewardAd",id:"showrewardad",level:3},{value:"IsReadyRewardAd",id:"isreadyrewardad",level:3},{value:"Splash Ad",id:"splash-ad",level:2},{value:"Native Ad",id:"native-ad",level:2},{value:"ShowNativeAd",id:"shownativead",level:3},{value:"IsReadyNativeAd",id:"isreadynativead",level:3},{value:"RemoveNativeAd",id:"removenativead",level:3},{value:"Banner Ad",id:"banner-ad",level:2},{value:"ShowBannerAd",id:"showbannerad",level:3},{value:"HideBannerAd",id:"hidebannerad",level:3}],u={toc:s},k="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(k,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advertising-integration"},"Advertising integration"),(0,l.kt)("h2",{id:"interstitialad"},"InterstitialAd"),(0,l.kt)("h3",{id:"showinterstitialad"},"ShowInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," API:   "),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowInterstitialAd(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGIVAdPositionName"),(0,l.kt)("td",null,"Name of interstitial ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the InterstitialAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGIVAdPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_callback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,"Callback of ad close and playback fail.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_IvType"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"IVADType"),(0,l.kt)("td",null,"Type of frequency control",(0,l.kt)("br",null),"Default set IV1. IV2 can be used if required."))),(0,l.kt)("p",null,"define the InterstitialAd POSITION NAME as follows   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGIVAdPositionName\n{\n    autoShowIntersititial,  \n\n    IV_RetryExp,\n    IV_NextLevelExp,\n\n    //add your game InterstitialAd PositionName\n    \n}\n")),(0,l.kt)("h3",{id:"isreadyinterstitialad"},"IsReadyInterstitialAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,l.kt)("p",null,"Whether interstitial ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false")),(0,l.kt)("h2",{id:"rewardad"},"RewardAd"),(0,l.kt)("h3",{id:"showrewardad"},"ShowRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult, null, true);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"API:"),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowRewardAd(TKGRVPositionName _adPos, Action","<","bool",">"," _rewardCallback = null, Action _showFailedCallback = null,bool _showSDKToast = false)   ",(0,l.kt)("font",{color:"#ff0000"},"[ ** _showSDKToast is best set to true.]"," ")),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_adPos"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGRVPositionName"),(0,l.kt)("td",null,"Name of reward ad placement.    ",(0,l.kt)("br",null),(0,l.kt)("br",null),"Please define the RewardAd POSITION NAME in the [Product Requirements Document] in TKGAdPositionName.cs - TKGRVPositionName first.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_rewardCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action<bool>"),(0,l.kt)("td",null,"Callback for reward.  ",(0,l.kt)("br",null),"Recommended developers issue rewards in this callback.   ",(0,l.kt)("br",null),"true: reward succ, false: cannot reward.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_showFailedCallback"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Action"),(0,l.kt)("td",null,"Callback of ad close and playback fail.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_showSDKToast"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"bool"),(0,l.kt)("td",null,"Whether to use the SDK to prompt the video presentation failure page.",(0,l.kt)("br",null),"true:Use the failure page provided by the SDK.",(0,l.kt)("br",null),"false:Do not use the failure notification page provided by the SDK.",(0,l.kt)("br",null)))),(0,l.kt)("p",null,"Example of SDK incentive video display failure prompt page:",(0,l.kt)("br",null),"\n",(0,l.kt)("img",{src:n(778).Z,width:"250",height:"541"})),(0,l.kt)("br",null),(0,l.kt)("p",null,"define the RewardAd POSITION NAME as follows    "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"',title:'"/Assets/TKGSDK/Config/Scripts/TKGAdPositionName.cs"'},"public enum TKGRVPositionName\n{\n    RV_GetDoubleCoinExp,\n    RV_GetTipsExp,\n\n    //add your game RewardAd PositionName\n\n}\n")),(0,l.kt)("h3",{id:"isreadyrewardad"},"IsReadyRewardAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n")),(0,l.kt)("p",null,"Whether reward ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n","Return:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false  ")),(0,l.kt)("h2",{id:"splash-ad"},"Splash Ad"),(0,l.kt)("p",null,"Don't need to do anything to access Splash Ads. ",(0,l.kt)("br",null),"\n(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)"),(0,l.kt)("h2",{id:"native-ad"},"Native Ad"),(0,l.kt)("h3",{id:"shownativead"},"ShowNativeAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," API:   "),(0,l.kt)("br",{parentName:"p"}),"\n",'void ShowNative(RectTransform pRect, Camera pCam = null, string pAdPos = "")'),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"pRect"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"RectTransform"),(0,l.kt)("td",null,"RectTransform that needs to display the native AD Image")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"pCam"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"Camera"),(0,l.kt)("td",null,"If there is a camera in the Canvas, pass it in")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_pos"),(0,l.kt)("td",null,"N"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"Name of native ad placement."))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Explanation of location: ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"config01",src:n(7298).Z,width:"1632",height:"1043"}),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Mount:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"config01",src:n(8210).Z,width:"1008",height:"774"}),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," code ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"config01",src:n(4546).Z,width:"1232",height:"658"}),(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"isreadynativead"},"IsReadyNativeAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"bool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();\n")),(0,l.kt)("p",null,"Whether native ad is ready to be played.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Return: "),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"true  "),(0,l.kt)("li",{parentName:"ul"},"false")),(0,l.kt)("h3",{id:"removenativead"},"RemoveNativeAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.RemoveNative();\n")),(0,l.kt)("h2",{id:"banner-ad"},"Banner Ad"),(0,l.kt)("h3",{id:"showbannerad"},"ShowBannerAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," API:   "),(0,l.kt)("br",{parentName:"p"}),"\n","void ShowBanner(TKGBannerAlign _bannerAlign)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"isRequired"),(0,l.kt)("td",null,"Type"),(0,l.kt)("td",null,"Description")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"_bannerAlign"),(0,l.kt)("td",null,"Y"),(0,l.kt)("td",null,"TKGBannerAlign"),(0,l.kt)("td",null,"Where to display banner ads:",(0,l.kt)("br",null),"TKGBannerAlign.BannerCenterBottomAlign - the bottom center ",(0,l.kt)("br",null),"TKGBannerAlign.BannerCenterTopAlign - the top center"))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"hidebannerad"},"HideBannerAd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.HideBanner();\n")))}p.isMDXComponent=!0},8210:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bottomrightposition-3a58b0ebd6d5c8f9249abe100b5a1b97.jpg"},778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nativeadscode-211fcf745021a1757940df58950c8041.jpeg"},4546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nativeadscode-1a9f992af6c5fb2792dd6ff78bf59cdf.jpg"},7298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/topleftposition-90c3e4cc33439c116c57d5c92b424352.jpg"}}]);