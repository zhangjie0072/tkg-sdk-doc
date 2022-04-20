"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[329],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,k=d["".concat(s,".").concat(p)]||d[p]||g[p]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},s="Event Tracking",u={unversionedId:"tkg-integration/sdk-basic/sdk-func-event",id:"tkg-integration/sdk-basic/sdk-func-event",title:"Event Tracking",description:"Progression Events",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tkg-integration/sdk-basic/sdk-func-event.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-event",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-event",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Advertising integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-ads"},next:{title:"Advanced Integration",permalink:"/tkg-sdk-doc/tkg-integration/sdk-other-func"}},c={},g=[{value:"Progression Events",id:"progression-events",level:2},{value:"NotifyGameStart",id:"notifygamestart",level:3},{value:"NotifyGameEnd",id:"notifygameend",level:3},{value:"Custom Event",id:"custom-event",level:3}],d={toc:g};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"event-tracking"},"Event Tracking"),(0,a.kt)("h2",{id:"progression-events"},"Progression Events"),(0,a.kt)("p",null,"Use this event to track when players start and finish levels in your game.   \u201cProgress\u201d could mean things like levelling up, completing quests, completing missions, or completing milestones."),(0,a.kt)("font",{color:"ff0000"},'Attention: if you have levels and quests in your game, you must integrate "Progression Events"!'),(0,a.kt)("h3",{id:"notifygamestart"},"NotifyGameStart"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.NotifyGameStart(1);\n")),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"NotifyGameStart")," method when starting each level."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_level"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"int/string"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"notifygameend"},"NotifyGameEnd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.NotifyGameEnd(1);\n")),(0,a.kt)("p",null,"Call ",(0,a.kt)("inlineCode",{parentName:"p"},"NotifyGameEnd")," method when starting each level."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_level"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"int/string"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"custom-event"},"Custom Event"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_shop");\nTKGSDKManager.Instance.LogEvent("stage_start", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_time", "stage_level", "1", "time_long", "13");\n')),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort)"),(0,a.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort, string _key, string _value)"),(0,a.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)"),(0,a.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)")))}p.isMDXComponent=!0}}]);