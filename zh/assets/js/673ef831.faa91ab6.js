"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5490],{3905:function(t,n,l){l.d(n,{Zo:function(){return k},kt:function(){return g}});var e=l(7294);function r(t,n,l){return n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t}function a(t,n){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),l.push.apply(l,e)}return l}function u(t){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?a(Object(l),!0).forEach((function(n){r(t,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(l,n))}))}return t}function i(t,n){if(null==t)return{};var l,e,r=function(t,n){if(null==t)return{};var l,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)l=a[e],n.indexOf(l)>=0||(r[l]=t[l]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)l=a[e],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var o=e.createContext({}),d=function(t){var n=e.useContext(o),l=n;return t&&(l="function"==typeof t?t(n):u(u({},n),t)),l},k=function(t){var n=d(t.components);return e.createElement(o.Provider,{value:n},t.children)},s={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},c=e.forwardRef((function(t,n){var l=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),c=d(l),g=r,p=c["".concat(o,".").concat(g)]||c[g]||s[g]||a;return l?e.createElement(p,u(u({ref:n},k),{},{components:l})):e.createElement(p,u({ref:n},k))}));function g(t,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=c;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var d=2;d<a;d++)u[d]=l[d];return e.createElement.apply(null,u)}return e.createElement.apply(null,l)}c.displayName="MDXCreateElement"},9098:function(t,n,l){l.r(n),l.d(n,{assets:function(){return k},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var e=l(7462),r=l(3366),a=(l(7294),l(3905)),u=["components"],i={title:"\u57fa\u7840\u63a5\u53e3",sidebar_label:"\u57fa\u7840\u63a5\u53e3",description:"",sidebar_position:97},o=void 0,d={unversionedId:"api/common-api",id:"version-3.0.x/api/common-api",title:"\u57fa\u7840\u63a5\u53e3",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.x/api/common-api.md",sourceDirName:"api",slug:"/api/common-api",permalink:"/tkg-sdk-doc/zh/api/common-api",tags:[],version:"3.0.x",sidebarPosition:97,frontMatter:{title:"\u57fa\u7840\u63a5\u53e3",sidebar_label:"\u57fa\u7840\u63a5\u53e3",description:"",sidebar_position:97},sidebar:"apiSidebar",next:{title:"\u5176\u4ed6\u529f\u80fd",permalink:"/tkg-sdk-doc/zh/api/advance-api"}},k={},s=[{value:"1 \u521d\u59cb\u5316\u63a5\u5165",id:"1-\u521d\u59cb\u5316\u63a5\u5165",level:2},{value:"1.1 \u521d\u59cb\u5316",id:"11-\u521d\u59cb\u5316",level:3},{value:"2 \u5408\u89c4\u63a5\u53e3",id:"2-\u5408\u89c4\u63a5\u53e3",level:2},{value:"2.1 \u4fe1\u606f\u5f39\u7a97",id:"21-\u4fe1\u606f\u5f39\u7a97",level:3},{value:"3 \u5e7f\u544a\u63a5\u5165",id:"3-\u5e7f\u544a\u63a5\u5165",level:2},{value:"3.1 \u63d2\u5c4f\u5e7f\u544a",id:"31-\u63d2\u5c4f\u5e7f\u544a",level:3},{value:"3.1.1 \u793a\u4f8b\u4ee3\u7801",id:"311-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"3.2 \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",id:"32-\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",level:3},{value:"3.1.1 \u793a\u4f8b\u4ee3\u7801",id:"311-\u793a\u4f8b\u4ee3\u7801-1",level:4},{value:"3.3 \u5f00\u5c4f\u5e7f\u544a",id:"33-\u5f00\u5c4f\u5e7f\u544a",level:3},{value:"3.4 native \u5e7f\u544a",id:"34-native-\u5e7f\u544a",level:3},{value:"3.4.1 \u793a\u4f8b\u4ee3\u7801",id:"341-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"3.5 banner \u5e7f\u544a",id:"35-banner-\u5e7f\u544a",level:3},{value:"3.5.1 \u793a\u4f8b\u4ee3\u7801",id:"351-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"4 \u4e8b\u4ef6\u57cb\u70b9",id:"4-\u4e8b\u4ef6\u57cb\u70b9",level:2},{value:"4.1 \u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",id:"41-\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",level:3},{value:"4.1.1 \u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",id:"411-\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",level:4},{value:"4.1.2 \u5173\u5361\u7ed3\u675f\u4e8b\u4ef6",id:"412-\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6",level:4},{value:"4.2 \u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"42-\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:3},{value:"4.2.1 \u793a\u4f8b\u4ee3\u7801",id:"421-\u793a\u4f8b\u4ee3\u7801",level:4},{value:'5 \u5185\u8d2d <font color="#ff0000">(v3.0.4\u65b0\u589e)</font>',id:"5-\u5185\u8d2d-v304\u65b0\u589e",level:2},{value:"5.1 \u5b8f\u5b9a\u4e49\uff1a",id:"51-\u5b8f\u5b9a\u4e49",level:3},{value:"5.2 \u5546\u54c1ID\uff1a",id:"52-\u5546\u54c1id",level:3},{value:"5.3 \u5185\u8d2d\u56de\u8c03",id:"53-\u5185\u8d2d\u56de\u8c03",level:3},{value:"5.4 \u5185\u8d2d\u63a5\u53e3",id:"54-\u5185\u8d2d\u63a5\u53e3",level:3},{value:'5.5 \u5185\u8d2d\u4e8b\u4ef6<font color="#ff0000">(v3.0.5\u65b0\u589e)</font>',id:"55-\u5185\u8d2d\u4e8b\u4ef6v305\u65b0\u589e",level:3},{value:"4.3.1 \u793a\u4f8b\u4ee3\u7801",id:"431-\u793a\u4f8b\u4ee3\u7801",level:4},{value:'6 \u8d26\u53f7\u7cfb\u7edf<font color="#ff0000">(v3.0.5\u65b0\u589e)</font>',id:"6-\u8d26\u53f7\u7cfb\u7edfv305\u65b0\u589e",level:2},{value:"6.1 \u793a\u4f8b\u4ee3\u7801",id:"61-\u793a\u4f8b\u4ee3\u7801",level:4}],c={toc:s};function g(t){var n=t.components,l=(0,r.Z)(t,u);return(0,a.kt)("wrapper",(0,e.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u521d\u59cb\u5316\u63a5\u5165"},"1 \u521d\u59cb\u5316\u63a5\u5165"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"InitSDK"),(0,a.kt)("td",null,"(Action _initCallback = null)"),(0,a.kt)("td",null,"SDK\u521d\u59cb\u5316",(0,a.kt)("br",null),"_initCallback: SDK\u521d\u59cb\u5316\u7ed3\u675f\u56de\u8c03"))),(0,a.kt)("h3",{id:"11-\u521d\u59cb\u5316"},"1.1 \u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.InitSDK(initCallback);\nprivate void initCallback()\n{\n    Debug.Log("init callback");\n}  \n')),(0,a.kt)("h2",{id:"2-\u5408\u89c4\u63a5\u53e3"},"2 \u5408\u89c4\u63a5\u53e3"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"OpenPolicyPop"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u5728\u5f53\u524d\u8fdb\u7a0b\u4e2d\u6253\u5f00\u4fe1\u606f\u5f39\u7a97"))),(0,a.kt)("h3",{id:"21-\u4fe1\u606f\u5f39\u7a97"},"2.1 \u4fe1\u606f\u5f39\u7a97"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenPolicyPop();\n")),(0,a.kt)("h2",{id:"3-\u5e7f\u544a\u63a5\u5165"},"3 \u5e7f\u544a\u63a5\u5165"),(0,a.kt)("h3",{id:"31-\u63d2\u5c4f\u5e7f\u544a"},"3.1 \u63d2\u5c4f\u5e7f\u544a"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ShowInterstitialAd"),(0,a.kt)("td",null,"(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,a.kt)("td",null,"\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a",(0,a.kt)("br",null),"_adPos: \u63d2\u5c4f\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\uff08\u9700\u81ea\u884c\u5728TKGIVAdPositionName\u4e2d\u6dfb\u52a0\u5b9a\u4e49\uff09",(0,a.kt)("br",null),"_callback: \u63d2\u5c4f\u56de\u8c03\u3002",(0,a.kt)("br",null),"\u5173\u95ed\u63d2\u5c4f\u548c\u63d2\u5c4f\u672a\u6210\u529f\u64ad\u653e\u7b49\u90fd\u4f1a\u56de\u7ed9\u8fd9\u4e2a\u56de\u8c03\u3002",(0,a.kt)("br",null),"_IvType: \u63d2\u5c4f\u9891\u6b21\u63a7\u5236\u7c7b\u578b",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IsReadyInterstitialAd"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u5224\u65ad\u5f53\u524d\u662f\u5426\u5b58\u5728\u53ef\u5c55\u793a\u7684\u63d2\u5c4f\u5e7f\u544a\u3002",(0,a.kt)("br",null),"\u4e00\u822c\u6e38\u620f\u65e0\u9700\u81ea\u884c\u8c03\u7528\u3002"))),(0,a.kt)("h4",{id:"311-\u793a\u4f8b\u4ee3\u7801"},"3.1.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// show interstitial ad\nTKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n\n// is ready interstitial ad\nbool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,a.kt)("h3",{id:"32-\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"},"3.2 \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ShowRewardAd"),(0,a.kt)("td",null,"(TKGRVPositionName _adPos, Action<bool> _rewardCallback = null, Action _showFailedCallback = null, bool _showSDKToast = false)"),(0,a.kt)("td",null,"\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a",(0,a.kt)("br",null),"_adPos: \u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0\uff08\u9700\u81ea\u884c\u5728TKGRVPositionName\u4e2d\u6dfb\u52a0\u5b9a\u4e49\uff09",(0,a.kt)("br",null),"_rewardCallback: \u6fc0\u52b1\u89c6\u9891\u5956\u52b1\u56de\u8c03\u3002(\u5728\u6b64\u56de\u8c03\u4e2d\u5904\u7406\u4e0b\u53d1\u5956\u52b1)",(0,a.kt)("br",null),"_showFailedCallback: \u6fc0\u52b1\u89c6\u9891\u672a\u6210\u529f\u64ad\u653e\u56de\u8c03",(0,a.kt)("br",null),"_showSDKToast: \u662f\u5426\u4f7f\u7528SDK\u6fc0\u52b1\u89c6\u9891\u5c55\u793a\u5931\u8d25\u63d0\u793a\u9875\u9762\uff1b true:\u4f7f\u7528SDK\u63d0\u4f9b\u7684\u5931\u8d25\u63d0\u793a\u9875\u9762;",(0,a.kt)("br",null),"false:\u4e0d\u4f7f\u7528SDK\u63d0\u4f9b\u7684\u5931\u8d25\u63d0\u793a\u9875\u9762",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IsReadyRewardAd"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u5224\u65ad\u5f53\u524d\u662f\u5426\u5b58\u5728\u53ef\u5c55\u793a\u7684\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u3002",(0,a.kt)("br",null),"\u4e00\u822c\u6e38\u620f\u65e0\u9700\u81ea\u884c\u8c03\u7528\u3002"))),(0,a.kt)("h4",{id:"311-\u793a\u4f8b\u4ee3\u7801-1"},"3.1.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// show reward ad\nTKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n\n\n// is ready reward ad\nbool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n')),(0,a.kt)("h3",{id:"33-\u5f00\u5c4f\u5e7f\u544a"},"3.3 \u5f00\u5c4f\u5e7f\u544a"),(0,a.kt)("p",null,"\u63a5\u5165\u5f00\u5c4f\u5e7f\u544a\u65e0\u9700\u505a\u4efb\u4f55\u5904\u7406\u3002     "),(0,a.kt)("h3",{id:"34-native-\u5e7f\u544a"},"3.4 native \u5e7f\u544a"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ShowNative"),(0,a.kt)("td",null,'(RectTransform pRect, Camera pCam = null, string pAdPos = "")'),(0,a.kt)("td",null,"\u5c55\u793a\u539f\u751f\u5e7f\u544a",(0,a.kt)("br",null),"pRect: \u539f\u751f\u5e7f\u544a\u5c55\u793a\u4f4d\u7f6e",(0,a.kt)("br",null),"pCam: \u5982\u679cUI\u4f7f\u7528\u76f8\u673a\u6a21\u5f0f\uff0c\u5fc5\u987b\u4f7f\u7528\u6b63\u4ea4\u76f8\u673a",(0,a.kt)("br",null),"_pos: \u5c55\u793anative\u5e7f\u544a\u70b9\u4f4d\u540d\u79f0",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IsReadyNativeAd"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u5224\u65ad\u5f53\u524d\u662f\u5426\u5b58\u5728\u53ef\u5c55\u793a\u7684\u539f\u751f\u5e7f\u544a\u3002",(0,a.kt)("br",null),"\u4e00\u822c\u6e38\u620f\u65e0\u9700\u81ea\u884c\u8c03\u7528\u3002"))),(0,a.kt)("h4",{id:"341-\u793a\u4f8b\u4ee3\u7801"},"3.4.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// show native ad\nTKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);\n\n\n// is ready native ad\nbool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();\n")),(0,a.kt)("h3",{id:"35-banner-\u5e7f\u544a"},"3.5 banner \u5e7f\u544a"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ShowBanner"),(0,a.kt)("td",null,"(TKGBannerAlign _bannerAlign)"),(0,a.kt)("td",null,"\u5c55\u793a\u6a2a\u5e45\u5e7f\u544a",(0,a.kt)("br",null),(0,a.kt)("br",null),"_bannerAlign: \u6a2a\u5e45\u5e7f\u544a\u6240\u5c55\u793a\u7684\u4f4d\u7f6e",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HideBanner"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u9690\u85cfbanner\u5e7f\u544a"))),(0,a.kt)("h4",{id:"351-\u793a\u4f8b\u4ee3\u7801"},"3.5.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// show banner ad\nTKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);\n\n// hide ad\nTKGSDKManager.Instance.HideBanner();\n\n")),(0,a.kt)("h2",{id:"4-\u4e8b\u4ef6\u57cb\u70b9"},"4 \u4e8b\u4ef6\u57cb\u70b9"),(0,a.kt)("h3",{id:"41-\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6"},"4.1 \u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LevelStart"),(0,a.kt)("td",null,"(int _level)  ",(0,a.kt)("br",null),"(string _level)"),(0,a.kt)("td",null,"\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",(0,a.kt)("br",null),"_level: \u6b63\u5728\u8fdb\u884c\u7684\u5173\u5361\u5e8f\u53f7\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LevelEnd"),(0,a.kt)("td",null,"(int _level, StageResult _stageResult)",(0,a.kt)("br",null),"(string _level, StageResult _stageResult)"),(0,a.kt)("td",null,"\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6    ",(0,a.kt)("br",null),"_level: \u6b63\u5728\u8fdb\u884c\u7684\u5173\u5361\u5e8f\u53f7\u503c ",(0,a.kt)("br",null),"_stageResult: \u5173\u5361\u7ed3\u675f\u7ed3\u679c ",(0,a.kt)("br",null),(0,a.kt)("br",null),"StageResult : StageSucc / StageFail / \u6e38\u620f\u5185\u91cd\u8bd5: StageRetry / \u6e38\u620f\u5185\u8fd4\u56de: StageBack"))),(0,a.kt)("h4",{id:"411-\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6"},"4.1.1 \u5173\u5361\u5f00\u59cb\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelStart(1);\nTKGSDKManager.Instance.LevelStart("S_1");\n')),(0,a.kt)("h4",{id:"412-\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6"},"4.1.2 \u5173\u5361\u7ed3\u675f\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);\nTKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);\nTKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);\nTKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);\n')),(0,a.kt)("h3",{id:"42-\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},"4.2 \u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogEvent"),(0,a.kt)("td",null,"(string _eventSort) "),(0,a.kt)("td",null,"\u4e0a\u62a5\u6e38\u620f\u57cb\u70b9\u4e8b\u4ef6\uff08\u53c2\u6570\u4e2a\u6570\u4e0d\u540c\uff09 ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogEvent"),(0,a.kt)("td",null,"(string _eventSort, string _key, string _value) "),(0,a.kt)("td",null,"\u540c\u4e0a ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogEvent"),(0,a.kt)("td",null,"(string _eventSort, string _key01, string _value01, string _key02, string _value02) "),(0,a.kt)("td",null,"\u540c\u4e0a ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogEvent"),(0,a.kt)("td",null,"(string _eventSort, Dictionary<string, string> _eventDic = null) "),(0,a.kt)("td",null,"\u540c\u4e0a "))),(0,a.kt)("h4",{id:"421-\u793a\u4f8b\u4ee3\u7801"},"4.2.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')),(0,a.kt)("h2",{id:"5-\u5185\u8d2d-v304\u65b0\u589e"},"5 \u5185\u8d2d ",(0,a.kt)("font",{color:"#ff0000"},"(v3.0.4\u65b0\u589e)")),(0,a.kt)("h3",{id:"51-\u5b8f\u5b9a\u4e49"},"5.1 \u5b8f\u5b9a\u4e49\uff1a"),(0,a.kt)("p",null," \u6dfb\u52a0\u5b8f\u5b9a\u4e49\uff1a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("font",{color:"#ff0000"},"USE_IAP "))),(0,a.kt)("h3",{id:"52-\u5546\u54c1id"},"5.2 \u5546\u54c1ID\uff1a"),(0,a.kt)("p",null,"\u5728IAPProducts.cs \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5546\u54c1ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'public const string NoAds = "test.tremoveads";\n\npublic static readonly Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n{\n    // ProductType.NonConsumable  \u53ea\u80fd\u8d2d\u4e70\u4e00\u6b21\u3002\u9002\u5408\u4e00\u6b21\u6027\u8d2d\u4e70\u7684\u5546\u54c1\uff0c\u5982\u989d\u5916\u7684\u5173\u5361\n    // ProductType.Consumable     \u53ef\u4ee5\u53cd\u590d\u8d2d\u4e70\u3002\u9002\u5408\u865a\u62df\u8d27\u5e01\u7b49\u53ef\u6d88\u8017\u5546\u54c1\n    // ProductType.Subscription   \u53ef\u4ee5\u53cd\u590d\u8d2d\u4e70\u548c\u6062\u590d\u3002\u8010\u7528\u54c1\uff0c\u4f46\u6709\u6548\u671f\u6709\u9650\uff08\u8ba2\u9605\uff09\n    \n    { NoAds, ProductType.NonConsumable}\n        \n};\n')),(0,a.kt)("h3",{id:"53-\u5185\u8d2d\u56de\u8c03"},"5.3 \u5185\u8d2d\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"\nIAPTool.Instance.OnPurchaseDone += OnPurchaseResult;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"private void OnPurchaseResult(string pID, bool pResult)\n{\n    if (pID.Equals(IAPProducts.NoAds) && pResult)\n    {\n        // \u5185\u8d2d\u6210\u529f\u540e\uff0c\u53bb\u9664\u5e7f\u544a\n        TKGSDKManager.Instance.IsRemoveAds = true;\n    }\n}\n")),(0,a.kt)("h3",{id:"54-\u5185\u8d2d\u63a5\u53e3"},"5.4 \u5185\u8d2d\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"IAPTool.Instance.BuyProductByID(IAPProducts.NoAds);\n")),(0,a.kt)("h3",{id:"55-\u5185\u8d2d\u4e8b\u4ef6v305\u65b0\u589e"},"5.5 \u5185\u8d2d\u4e8b\u4ef6",(0,a.kt)("font",{color:"#ff0000"},"(v3.0.5\u65b0\u589e)")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogIAPBtnShow"),(0,a.kt)("td",null,"(string _iap, ",(0,a.kt)("br",null),"string _id, ",(0,a.kt)("br",null),"string _currency, ",(0,a.kt)("br",null),"string _price)"),(0,a.kt)("td",null,"\u5185\u8d2d\u6309\u94ae\u5c55\u793a",(0,a.kt)("br",null),"_iap : \u6e38\u620f\u4fa7\u81ea\u5b9a\u4e49\u5546\u54c1\u540d\u79f0",(0,a.kt)("br",null),"_id : \u5546\u54c1ID",(0,a.kt)("br",null),"_currency : \u8d27\u5e01\u5355\u4f4d,\u5982\uff1aUSD",(0,a.kt)("br",null),"_price : \u8d2d\u4e70\u4ef7\u683c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogIAPBtnClick"),(0,a.kt)("td",null,"(string _iap, ",(0,a.kt)("br",null),"string _id, ",(0,a.kt)("br",null),"string _currency, ",(0,a.kt)("br",null),"string _price)"),(0,a.kt)("td",null,"\u5185\u8d2d\u6309\u94ae\u70b9\u51fb    ",(0,a.kt)("br",null),"\uff08\u53c2\u6570\u540c\u4e0a\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogIAPFirstPurchase"),(0,a.kt)("td",null,"(string _iap, ",(0,a.kt)("br",null),"string _id, ",(0,a.kt)("br",null),"string _currency, ",(0,a.kt)("br",null),"string _price)"),(0,a.kt)("td",null,"\u9996\u6b21\u8d2d\u4e70\u6210\u529f    ",(0,a.kt)("br",null),"\uff08\u53c2\u6570\u540c\u4e0a\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LogIAPSuccess"),(0,a.kt)("td",null,"(string _iap, ",(0,a.kt)("br",null),"string _id, ",(0,a.kt)("br",null),"string _orderid, ",(0,a.kt)("br",null),"string _productToken, ",(0,a.kt)("br",null),"string _paymentMethod, ",(0,a.kt)("br",null),"string _currency, ",(0,a.kt)("br",null),"string _price)"),(0,a.kt)("td",null,"\u8d2d\u4e70\u6210\u529f    ",(0,a.kt)("br",null),"_iap : \u6e38\u620f\u4fa7\u81ea\u5b9a\u4e49\u5546\u54c1\u540d\u79f0",(0,a.kt)("br",null),"_id : \u5546\u54c1ID",(0,a.kt)("br",null),"_orderid : \u8ba2\u5355ID",(0,a.kt)("br",null),"_productToken : GooglePlay\u8d2d\u4e70\u4ee4\u724c\uff0c\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u4f20\u7a7a",(0,a.kt)("br",null),"_paymentMethod : \u652f\u4ed8\u6e20\u9053\uff1aAppStore\u3001GooglePlay",(0,a.kt)("br",null),"_currency : \u8d27\u5e01\u5355\u4f4d,\u5982\uff1aUSD",(0,a.kt)("br",null),"_price : \u8d2d\u4e70\u4ef7\u683c"))),(0,a.kt)("h4",{id:"431-\u793a\u4f8b\u4ee3\u7801"},"4.3.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\n// \u5185\u8d2d\u6309\u94ae\u5c55\u793a\u65f6\u8c03\u7528\nTKGSDKManager.Instance.LogIAPBtnShow("200\u94bb\u77f3","com.game.diamond200","USD","1.99");\n\n// \u5185\u8d2d\u6309\u94ae\u70b9\u51fb\u65f6\u8c03\u7528\nTKGSDKManager.Instance.LogIAPBtnClick("200\u94bb\u77f3","com.game.diamond200","USD","1.99");\n\n// \u9996\u6b21\u8d2d\u4e70\u6210\u529f\u65f6\u8c03\u7528\nTKGSDKManager.Instance.LogIAPFirstPurchase("200\u94bb\u77f3","com.game.diamond200","USD","1.99");\n\n// \u8d2d\u4e70\u6210\u529f\u65f6\u8c03\u7528\nTKGSDKManager.Instance.LogIAPSuccess("200\u94bb\u77f3","com.game.diamond200","GPA.3327-1005-9772-34199","fhlkemmlgnoaedkjmlobdkce.AO-J1OxTtpuomZK4pjutaKDyOqQfFBF122_NgIlMzU_3xrYdvvv9ed1Y-WZVC7yXBVQDKKjx25rs8S02mHjE9GUmfhXbDT_TIyYHQCEyJbTmdnS82N5FR4o","GooglePlay","USD","1.99");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("font",{color:"#ff0000"},"\u91cd\u8981")," ",(0,a.kt)("br",null)," "),"\n_orderid \u548c _productToken \u5728 IAPTool.cs \u6587\u4ef6\u4e2d\u53ef\u83b7\u53d6\u5230"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\npublic PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs e)\n{\n    ...\n    // For GooglePlay payload contains more JSON\n    if (Application.platform == RuntimePlatform.Android)\n    {\n        ...\n        \n        var token   = (string)tokenJson["purchaseToken"];\n        var orderId = (string)tokenJson["orderId"];\n\n    }\n\n    ...\n}\n')),(0,a.kt)("h2",{id:"6-\u8d26\u53f7\u7cfb\u7edfv305\u65b0\u589e"},"6 \u8d26\u53f7\u7cfb\u7edf",(0,a.kt)("font",{color:"#ff0000"},"(v3.0.5\u65b0\u589e)")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Login"),(0,a.kt)("td",null," (LoginType _loginType, Action<LoginStatus, LoginType, string, string, string, string,string,string> _loginResultCallback)"),(0,a.kt)("td",null,"\u8d26\u53f7\u767b\u5f55",(0,a.kt)("br",null),"_loginType\uff1a\u767b\u5f55\u7c7b\u578b _loginResultCallback\uff1a\u767b\u5f55\u56de\u8c03")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Logout"),(0,a.kt)("td",null," (Action _logoutCallback = null)"),(0,a.kt)("td",null,"\u8d26\u53f7\u767b\u51fa",(0,a.kt)("br",null),"_logoutCallback\uff1a\u767b\u51fa\u56de\u8c03")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AvailableLoginChannelList"),(0,a.kt)("td",null," -"),(0,a.kt)("td",null,"\u8fd4\u56de\u5f53\u524d\u53ef\u7528\u7684\u767b\u5f55\u65b9\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DeleteAccount"),(0,a.kt)("td",null," (Action<string> _deleteAccountCallback = null)"),(0,a.kt)("td",null,"\u8d26\u53f7\u5220\u9664",(0,a.kt)("br",null),"_deleteAccountCallback\uff1a\u8d26\u53f7\u5220\u9664\u56de\u8c03\uff0c\u8fd4\u56de\u88ab\u5220\u9664\u7684userId"))),(0,a.kt)("h4",{id:"61-\u793a\u4f8b\u4ee3\u7801"},"6.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\n// \u8d26\u53f7\u767b\u5f55\nTKGSDKManager.Instance.Login(LoginType.LOGIN_BY_GOOGLE, (loginStatus,  loginType,  loginMsg,  userId,  token,  email,  nickName,  iconUrl) =>{\n\n    Debug.Log("\u767b\u5f55\u72b6\u6001\u7801:"+loginStatus);\n    Debug.Log("\u767b\u5f55\u7c7b\u578b:" + loginType);\n    Debug.Log("\u767b\u5f55\u72b6\u6001\u4fe1\u606f:" + loginMsg);\n    Debug.Log("\u7528\u6237ID:" + userId);\n    Debug.Log("token:" + token);\n    Debug.Log("\u90ae\u7bb1:" + email);\n    Debug.Log("\u663e\u793a\u540d\u79f0:" + nickName);\n    Debug.Log("\u5934\u50cfurl:" + iconUrl);\n    \n});\n\n// \u8d26\u53f7\u767b\u51fa\nTKGSDKManager.Instance.Logout();\n\n// \u67e5\u8be2\u53ef\u7528\u7684\u767b\u5f55\u65b9\u5f0f\nList<LoginType> list = TKGSDKManager.Instance.AvailableLoginChannelList();\n\n// \u5220\u9664\u5f53\u524d\u8d26\u53f7\nTKGSDKManager.Instance.DeleteAccount();\n\n')))}g.isMDXComponent=!0}}]);