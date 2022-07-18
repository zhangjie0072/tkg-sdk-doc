"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4746],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(n),p=a,v=k["".concat(d,".").concat(p)]||k[p]||c[p]||r;return n?l.createElement(v,i(i({ref:t},u),{},{components:n})):l.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={title:"Basic API",sidebar_label:"Basic API",description:"",sidebar_position:97},d=void 0,s={unversionedId:"api/common-api",id:"version-2.1.0/api/common-api",title:"Basic API",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.1.0/api/common-api.md",sourceDirName:"api",slug:"/api/common-api",permalink:"/tkg-sdk-doc/2.1.0/api/common-api",tags:[],version:"2.1.0",sidebarPosition:97,frontMatter:{title:"Basic API",sidebar_label:"Basic API",description:"",sidebar_position:97},sidebar:"apiSidebar",next:{title:"Advanced API",permalink:"/tkg-sdk-doc/2.1.0/api/advance-api"}},u={},c=[{value:"1 Init",id:"1-init",level:2},{value:"1.1 InitSDK",id:"11-initsdk",level:3},{value:"1.2 SetLogEnable",id:"12-setlogenable",level:3},{value:"2 Privacy Compliance",id:"2-privacy-compliance",level:2},{value:"2.1 Privacy Policy",id:"21-privacy-policy",level:3},{value:"2.2 Terms &amp; Conditions",id:"22-terms--conditions",level:3},{value:"3 Advertising integration",id:"3-advertising-integration",level:2},{value:"3.1 InterstitialAd",id:"31-interstitialad",level:3},{value:"3.1.1 Sample code",id:"311-sample-code",level:4},{value:"3.2 RewardAd",id:"32-rewardad",level:3},{value:"3.1.1 Sample code",id:"311-sample-code-1",level:4},{value:"3.3 Splash Ad",id:"33-splash-ad",level:3},{value:"4 Event Tracking",id:"4-event-tracking",level:2},{value:"4.1 Level Progression Events",id:"41-level-progression-events",level:3},{value:"4.1.1 LevelStart",id:"411-levelstart",level:4},{value:"4.1.2 LevelEnd",id:"412-levelend",level:4},{value:"4.2 Custom Event",id:"42-custom-event",level:3},{value:"4.2.1 Sample code",id:"421-sample-code",level:4}],k={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-init"},"1 Init"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"InitSDK"),(0,r.kt)("td",null,"(Action _initCallback = null)"),(0,r.kt)("td",null,"SDK Init",(0,r.kt)("br",null),"_initCallback: Initialization finished callback.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetLogEnable"),(0,r.kt)("td",null,"(bool _enable)"),(0,r.kt)("td",null,"Set up the output of the debug log",(0,r.kt)("br",null),"true: open ",(0,r.kt)("br",null),"false: close"))),(0,r.kt)("h3",{id:"11-initsdk"},"1.1 InitSDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.InitSDK(initCallback);\nprivate void initCallback()\n{\n    Debug.Log("init callback");\n}  \n')),(0,r.kt)("h3",{id:"12-setlogenable"},"1.2 SetLogEnable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.SetLogEnable(true);\n")),(0,r.kt)("h2",{id:"2-privacy-compliance"},"2 Privacy Compliance"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenPrivacyURL"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Open privacy page in browser")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenUserTermURL"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Open terms&Conditions in browser"))),(0,r.kt)("h3",{id:"21-privacy-policy"},"2.1 Privacy Policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenPrivacyURL();\n")),(0,r.kt)("h3",{id:"22-terms--conditions"},"2.2 Terms & Conditions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenUserTermURL();\n")),(0,r.kt)("h2",{id:"3-advertising-integration"},"3 Advertising integration"),(0,r.kt)("h3",{id:"31-interstitialad"},"3.1 InterstitialAd"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowInterstitialAd"),(0,r.kt)("td",null,"(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,r.kt)("td",null,"Show Interstitial Ad",(0,r.kt)("br",null),(0,r.kt)("br",null),"_adPos: Name of interstitial ad placement.\uff08Please define the TKGIVAdPositionName first\uff09",(0,r.kt)("br",null),"_callback: Callback of ad close and playback fail.",(0,r.kt)("br",null),"_IvType: Type of frequency control",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyInterstitialAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Whether InterstitialAd can be displayed.",(0,r.kt)("br",null),"General games do not need to call by themselves."))),(0,r.kt)("h4",{id:"311-sample-code"},"3.1.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// show interstitial ad\nTKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n\n// is ready interstitial ad\nbool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,r.kt)("h3",{id:"32-rewardad"},"3.2 RewardAd"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowRewardAd"),(0,r.kt)("td",null,"(TKGRVPositionName _adPos, Action<bool> _rewardCallback = null, Action _showFailedCallback = null)"),(0,r.kt)("td",null,"Show RewardAd",(0,r.kt)("br",null),(0,r.kt)("br",null),"_adPos: Name of reward ad placement.\uff08Please define the TKGRVPositionName first\uff09",(0,r.kt)("br",null),"_rewardCallback: Callback for reward.(Recommended developers issue rewards in this callback.)",(0,r.kt)("br",null),"_showFailedCallback: Callback of ad close and playback fail.",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyRewardAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Whether RewardAd can be displayed.",(0,r.kt)("br",null),"General games do not need to call by themselves."))),(0,r.kt)("h4",{id:"311-sample-code-1"},"3.1.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// show reward ad\nTKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n\n// is ready reward ad\nbool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n')),(0,r.kt)("h3",{id:"33-splash-ad"},"3.3 Splash Ad"),(0,r.kt)("p",null,"No need to do anything to access Splash Ads.    ",(0,r.kt)("br",null),"\n(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)"),(0,r.kt)("h2",{id:"4-event-tracking"},"4 Event Tracking"),(0,r.kt)("h3",{id:"41-level-progression-events"},"4.1 Level Progression Events"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LevelStart"),(0,r.kt)("td",null,"(int _level)  ",(0,r.kt)("br",null),"(string _level)"),(0,r.kt)("td",null,"Level Start",(0,r.kt)("br",null),"_level: current level id.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LevelEnd"),(0,r.kt)("td",null,"(int _level, StageResult _stageResult)",(0,r.kt)("br",null),"(string _level, StageResult _stageResult)"),(0,r.kt)("td",null,"Level End    ",(0,r.kt)("br",null),"_level: current level id. ",(0,r.kt)("br",null),"_stageResult: level result ",(0,r.kt)("br",null),(0,r.kt)("br",null),"StageResult : StageSucc / StageFail / retry in level: StageRetry / back in level: StageBack"))),(0,r.kt)("h4",{id:"411-levelstart"},"4.1.1 LevelStart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelStart(1);\nTKGSDKManager.Instance.LevelStart("S_1");\n')),(0,r.kt)("h4",{id:"412-levelend"},"4.1.2 LevelEnd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);\nTKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);\nTKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);\nTKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);\n')),(0,r.kt)("h3",{id:"42-custom-event"},"4.2 Custom Event"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort) "),(0,r.kt)("td",null,"Report game tracking event ",(0,r.kt)("br",null),"(the number of parameters is different) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, string _key, string _value) "),(0,r.kt)("td",null,"same as above ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, string _key01, string _value01, string _key02, string _value02) "),(0,r.kt)("td",null,"same as above ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, Dictionary<string, string> _eventDic = null) "),(0,r.kt)("td",null,"same as above "))),(0,r.kt)("h4",{id:"421-sample-code"},"4.2.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')))}p.isMDXComponent=!0}}]);