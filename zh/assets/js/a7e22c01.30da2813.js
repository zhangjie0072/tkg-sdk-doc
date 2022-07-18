"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1036],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return p}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||r;return n?l.createElement(m,i(i({ref:t},k),{},{components:n})):l.createElement(m,i({ref:t},k))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],u={title:"\u5176\u4ed6\u529f\u80fd",sidebar_label:"\u5176\u4ed6\u529f\u80fd",description:"",sidebar_position:98},o=void 0,c={unversionedId:"api/advance-api",id:"version-2.2.0/api/advance-api",title:"\u5176\u4ed6\u529f\u80fd",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.0/api/advance-api.md",sourceDirName:"api",slug:"/api/advance-api",permalink:"/tkg-sdk-doc/zh/api/advance-api",tags:[],version:"2.2.0",sidebarPosition:98,frontMatter:{title:"\u5176\u4ed6\u529f\u80fd",sidebar_label:"\u5176\u4ed6\u529f\u80fd",description:"",sidebar_position:98},sidebar:"apiSidebar",previous:{title:"\u57fa\u7840\u63a5\u53e3",permalink:"/tkg-sdk-doc/zh/api/common-api"}},k={},s=[{value:"1 \u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",id:"1-\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9",level:2},{value:"1.1 \u793a\u4f8b\u4ee3\u7801",id:"11-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"2 \u8bc4\u4ef7",id:"2-\u8bc4\u4ef7",level:2},{value:"2.1 \u793a\u4f8b\u4ee3\u7801",id:"21-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"3 \u66f4\u591a\u6e38\u620f",id:"3-\u66f4\u591a\u6e38\u620f",level:2},{value:"3.1 \u793a\u4f8b\u4ee3\u7801",id:"31-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"4 \u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0",id:"4-\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0",level:2},{value:"4.1 \u793a\u4f8b\u4ee3\u7801",id:"41-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"5 \u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",id:"5-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",level:2},{value:"5.1 \u793a\u4f8b\u4ee3\u7801",id:"51-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"6 SDK\u901a\u7528\u56de\u8c03\u63a5\u53e3",id:"6-sdk\u901a\u7528\u56de\u8c03\u63a5\u53e3",level:2},{value:"6.1 \u793a\u4f8b\u4ee3\u7801",id:"61-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"7 \u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570",id:"7-\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570",level:2},{value:"7.1 \u793a\u4f8b\u4ee3\u7801",id:"71-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"8 \u6fc0\u52b1\u89c6\u9891\u56de\u8c03",id:"8-\u6fc0\u52b1\u89c6\u9891\u56de\u8c03",level:2},{value:"8.1 \u793a\u4f8b\u4ee3\u7801",id:"81-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"9 \u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a",id:"9-\u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a",level:2},{value:"10 \u9707\u52a8",id:"10-\u9707\u52a8",level:2},{value:"10.1 \u793a\u4f8b\u4ee3\u7801",id:"101-\u793a\u4f8b\u4ee3\u7801",level:4}],d={toc:s};function p(e){var t=e.components,u=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9"},"1 \u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetGameFocusListener"),(0,r.kt)("td",null,"(Action<bool> _gameFocusAction)"),(0,r.kt)("td",null,"\u8bbe\u7f6e\u6e38\u620f\u5931\u53bb\u7126\u70b9\u56de\u8c03",(0,r.kt)("br",null),"true:\u83b7\u5f97\u7126\u70b9",(0,r.kt)("br",null),"false:\u5931\u53bb\u7126\u70b9",(0,r.kt)("br",null)," ",(0,r.kt)("br",null),"\u6bcf\u6b21\u5f00\u59cb\u64ad\u5e7f\u544a\u7b49\u60c5\u51b5\u4f1a\u88ab\u89e6\u53d1\uff0c\u53ef\u7edf\u4e00\u5904\u7406\u6682\u505c\u6e38\u620f\u58f0\u97f3\u7b49\u3002"))),(0,r.kt)("h4",{id:"11-\u793a\u4f8b\u4ee3\u7801"},"1.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,r.kt)("h2",{id:"2-\u8bc4\u4ef7"},"2 \u8bc4\u4ef7"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Review"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\u4ec5iOS\u751f\u6548\u3002\u5c55\u793aiOS\u7cfb\u7edf\u8bc4\u4ef7\u5f39\u6846"))),(0,r.kt)("h4",{id:"21-\u793a\u4f8b\u4ee3\u7801"},"2.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();\n")),(0,r.kt)("h2",{id:"3-\u66f4\u591a\u6e38\u620f"},"3 \u66f4\u591a\u6e38\u620f"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenMoreGame"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"\u6253\u5f00\u5546\u5e97\u81ea\u5bb6\u6e38\u620f\u5217\u8868\u9875\u9762\u3002"))),(0,r.kt)("h4",{id:"31-\u793a\u4f8b\u4ee3\u7801"},"3.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,r.kt)("h2",{id:"4-\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0"},"4 \u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Return"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetChannel"),(0,r.kt)("td",null,"AppChannel"),(0,r.kt)("td",null,"\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0\uff0c\u8fd4\u56de\u7c7b\u578bAppChannel ",(0,r.kt)("br",null),"AppStore_GB/AppStore_CN/GooglePlay/GW002\u7b49"))),(0,r.kt)("h4",{id:"41-\u793a\u4f8b\u4ee3\u7801"},"4.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"AppChannel _channel = TKGSDKManager.Instance.GetChannel();\n")),(0,r.kt)("h2",{id:"5-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"},"5 \u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetUserSourceListener"),(0,r.kt)("td",null,"(Action\xa0<bool, string> _userSourceAction)"),(0,r.kt)("td",null,"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u6765\u6e90\u56de\u8c03\u76d1\u542c   ",(0,r.kt)("br",null),"_isOrigin: true \u81ea\u7136\u7528\u6237 false \u975e\u81ea\u7136\u7528\u6237 ",(0,r.kt)("br",null),"\u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002\u5982\u4e00\u6b21\u6e38\u620f\u5185\u591a\u6b21\u8c03\u7528\u8be5\u63a5\u53e3\u60c5\u51b5\uff0c\u53ea\u9996\u6b21\u6709\u8fd4\u56de\u503c\u3002"))),(0,r.kt)("h4",{id:"51-\u793a\u4f8b\u4ee3\u7801"},"5.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source) =>\n{\n    if (_isOrigin)\n    {\n        Debug.Log("is origin user");\n    }\n    else\n    {\n        Debug.Log("is not origin user");\n    }\n});\n')),(0,r.kt)("h2",{id:"6-sdk\u901a\u7528\u56de\u8c03\u63a5\u53e3"},"6 SDK\u901a\u7528\u56de\u8c03\u63a5\u53e3"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetTKGCommonCallback"),(0,r.kt)("td",null,"(Action<CommonCallbackCode, string> _commonCallback)"),(0,r.kt)("td",null,"   ",(0,r.kt)("br",null),"SDK\u7edf\u4e00\u4e8b\u4ef6\u56de\u8c03\u63a5\u53e3\u3002 ",(0,r.kt)("br",null),"\u7528CommonCallbackCode\u6765\u8fdb\u884c\u533a\u5206\u4e8b\u4ef6\u540d\u79f0\u3002 FirebaseOnlineParamGet_Succ: firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u6210\u529f\u3002 FirebaseOnlineParamGet_Failed: firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u5931\u8d25\u3002   ",(0,r.kt)("br",null),"    ",(0,r.kt)("br",null),"string: \u6d88\u606f\u643a\u5e26\u53c2\u6570\u3002"))),(0,r.kt)("h4",{id:"61-\u793a\u4f8b\u4ee3\u7801"},"6.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {\n    Debug.Log("common callback, code : " + code + " , msg : " + msg);\n});\n')),(0,r.kt)("h2",{id:"7-\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570"},"7 \u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetConfigStr"),(0,r.kt)("td",null,"(TKGParamKey _key)"),(0,r.kt)("td",null,"\u83b7\u53d6string\u7c7b\u578b\u7684\u5728\u7ebf\u53c2\u6570\u3002 ",(0,r.kt)("br",null),"\u9700\u4e8b\u5148\u5728TKGParams\u4e2d\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570key\u53ca\u9ed8\u8ba4\u503c")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetConfigInt"),(0,r.kt)("td",null,"(TKGParamKey _key)"),(0,r.kt)("td",null,"\u83b7\u53d6int\u7c7b\u578b\u7684\u5728\u7ebf\u53c2\u6570\u3002 ",(0,r.kt)("br",null),"\u9700\u4e8b\u5148\u5728TKGParams\u4e2d\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570key\u53ca\u9ed8\u8ba4\u503c")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GetConfigBool"),(0,r.kt)("td",null,"(TKGParamKey _key)"),(0,r.kt)("td",null,"\u83b7\u53d6bool\u7c7b\u578b\u7684\u5728\u7ebf\u53c2\u6570\u3002 ",(0,r.kt)("br",null),"\u9700\u4e8b\u5148\u5728TKGParams\u4e2d\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570key\u53ca\u9ed8\u8ba4\u503c",(0,r.kt)("br",null),"true: \u9ed8\u8ba4\u503c\u914d1; false: \u9ed8\u8ba4\u503c\u914d0"))),(0,r.kt)("h4",{id:"71-\u793a\u4f8b\u4ee3\u7801"},"7.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},'// set key\npublic enum TKGParamKey\n{\n    RemoveAdsShowCount,\n    LevelList,\n    HasBlock,\n    .\n    .\n}\n\n// add key & default value\npublic static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        // key - default value\n        { TKGParamKey.RemoveAdsShowCount.ToString(), 4 },    // int value    // \n        { TKGParamKey.LevelList.ToString(), "1,78,72,70,64,65,4,66" }, // string value\n        { TKGParamKey.HasBlock.ToString(), 0 },     // bool value // 1:true 0:false\n    };\n}\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// get online param value\nint onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);\nstring onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);\nbool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);\n")),(0,r.kt)("h2",{id:"8-\u6fc0\u52b1\u89c6\u9891\u56de\u8c03"},"8 \u6fc0\u52b1\u89c6\u9891\u56de\u8c03"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetRewardClickListener"),(0,r.kt)("td",null,"(Action<bool> _rewardClickAction)"),(0,r.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03",(0,r.kt)("br",null),"\u5728\u521d\u59cb\u5316SDK\u524d\u8bbe\u7f6e\u597d\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03"))),(0,r.kt)("h4",{id:"81-\u793a\u4f8b\u4ee3\u7801"},"8.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'private void InitSDK()\n{\n    \n    TKGSDKManager.Instance.SetRewardClickListener(ClickRewardCallback);\n\n    TKGSDKManager.Instance.InitSDK(initCallback);\n}\n\nprivate void ClickRewardCallback()\n{\n    Debug.Log("[ToukaSDKDemo] click reward callback");\n}\n')),(0,r.kt)("h2",{id:"9-\u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a"},"9 \u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a"),(0,r.kt)("p",null,"\u5728unity\u4e2d\u6dfb\u52a0\u5b8f\u5b9a\u4e49\uff1a",(0,r.kt)("strong",{parentName:"p"}," USE_SPLASH ")," ",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("img",{src:n(7123).Z,width:"636",height:"236"}),(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"10-\u9707\u52a8"},"10 \u9707\u52a8"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Shake"),(0,r.kt)("td",null,"(int _shakeType, float _intensity = 1)"),(0,r.kt)("td",null,"\u89e6\u53d1\u624b\u673a\u9707\u52a8",(0,r.kt)("br",null),"  ",(0,r.kt)("br",null),"_shakeType \u9707\u52a8\u5f3a\u5f31:",(0,r.kt)("br",null),"0:\u8f7b\u5fae",(0,r.kt)("br",null),"1:\u4e2d\u5ea6",(0,r.kt)("br",null),"2:\u91cd\u5ea6",(0,r.kt)("br",null),(0,r.kt)("br",null),"_intensity \u9707\u52a8\u6301\u7eed\u65f6\u95f4: ",(0,r.kt)("br",null),"0 ~ 1"))),(0,r.kt)("h4",{id:"101-\u793a\u4f8b\u4ee3\u7801"},"10.1 \u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Shake(1,0.5f);\n")))}p.isMDXComponent=!0},7123:function(e,t,n){t.Z=n.p+"assets/images/usesplash-6dc5db23f2e9dbe754557fb05eb6e556.jpg"}}]);