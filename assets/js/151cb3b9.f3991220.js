"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4306],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),k=l,m=p["".concat(u,".").concat(k)]||p[k]||c[k]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),l=n(7294),a=n(2389),o=n(5979),i=n(6010),u="tabItem_LplD";function d(e){var t,n,a,d=e.lazy,s=e.block,c=e.defaultValue,p=e.values,k=e.groupId,m=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var S=(0,o.UB)(),g=S.tabGroupChoices,D=S.setTabGroupChoices,_=(0,l.useState)(h),T=_[0],y=_[1],K=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=g[k];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&y(E)}var N=function(e){var t=e.currentTarget,n=K.indexOf(t),r=f[n].value;r!==T&&(w(t),y(r),null!=k&&D(k,r))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=K.indexOf(e.currentTarget)+1;n=K[r]||K[0];break;case"ArrowLeft":var l=K.indexOf(e.currentTarget)-1;n=K[l]||K[K.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},m)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return K.push(e)},onKeyDown:O,onFocus:N,onClick:N},a,{className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),d?(0,l.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,a.Z)();return l.createElement(d,(0,r.Z)({key:String(t)},e))}},4099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return k}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n(9877),i=n(8215),u=["components"],d={title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},s=void 0,c={unversionedId:"download",id:"version-2.2.x/download",title:"Download SDK",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.2.x/download.md",sourceDirName:".",slug:"/download",permalink:"/tkg-sdk-doc/2.2.x/download",tags:[],version:"2.2.x",sidebarPosition:2,frontMatter:{title:"Download SDK",sidebar_label:"Download SDK",description:"",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Touka SDK Introduction",permalink:"/tkg-sdk-doc/2.2.x/"},next:{title:"Preparation",permalink:"/tkg-sdk-doc/2.2.x/tkg-integration/sdk-prepare"}},p={},k=[{value:"ToukaSDK v2.2.9.2                          2023-01-12",id:"toukasdk-v2292--------------------------2023-01-12",level:2},{value:"Release Note",id:"release-note",level:3}],m={toc:k};function v(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get the Touka Android and iOS SDK. ",(0,a.kt)("br",null),"\nYou can download it from OSS or Google."),(0,a.kt)("h2",{id:"toukasdk-v2292--------------------------2023-01-12"},"ToukaSDK v2.2.9.2                          2023-01-12"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Please download CN SDK or Global SDK version as needed."),"   ")))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," ToukaSDK requires Xcode 13.2.1 or higher version."),"   "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"}," Update new\nSDK version is better to delete the old version. Except the config files. and export new Xcode or Android Studio project, don't append to old version's exported project."))))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"CN SDK",label:"CN SDK",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"SDK Name "),(0,a.kt)("td",null," Required "),(0,a.kt)("td",null," Version "),(0,a.kt)("td",null," Download ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_Common"),(0,a.kt)("td",null,"YES"),(0,a.kt)("td",null,"2.2.9.2"),(0,a.kt)("td",null,"OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/2.2.9.2/ToukaSDK_Common_2.2.9.2_470dc9e.zip"},"ToukaSDK_Common_2.2.9.2_470dc9e.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1hDHB-Y42vZKRq9f1Xt-c2MeDFzUoz0PB/view?usp=share_link"},"ToukaSDK_Common_2.2.9.2_470dc9e.zip"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_Android"),(0,a.kt)("td",null," The Android platform must be integrated"),(0,a.kt)("td",null," 2.2.9.2 "),(0,a.kt)("td",null,"OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/2.2.9.2/ToukaSDK_Android_2.2.9.2_470dc9e.zip"},"ToukaSDK_Android_2.2.9.2_470dc9e.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1zuTtbylgOdP1nQLMqrNlfUIG2CSRJYrO/view?usp=share_link"}," ToukaSDK_Android_2.2.9.2_470dc9e.zip"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_iOS_CN"),(0,a.kt)("td",null," The iOS platform must be integrated"),(0,a.kt)("td",null," 2.2.9.2"),(0,a.kt)("td",null," OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/2.2.9.2/ToukaSDK_iOSLib_CN_2.2.9.2_470dc9e.zip"},"ToukaSDK_iOSLib_CN_2.2.9.2_470dc9e.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1YSoxz-HtyIy2HoCq2BalhGtZfyon4wLI/view?usp=share_link"},"ToukaSDK_iOSLib_CN_2.2.9.2_470dc9e.zip"))))),(0,a.kt)(i.Z,{value:"Global SDK",label:"Global SDK",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"SDK Name "),(0,a.kt)("td",null," Required "),(0,a.kt)("td",null," Version "),(0,a.kt)("td",null," Download ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_Common"),(0,a.kt)("td",null,"YES"),(0,a.kt)("td",null,"2.2.9.2"),(0,a.kt)("td",null,"OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/2.2.9.2/ToukaSDK_Common_2.2.9.2_470dc9e.zip"},"ToukaSDK_Common_2.2.9.2_470dc9e.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1hDHB-Y42vZKRq9f1Xt-c2MeDFzUoz0PB/view?usp=share_link"},"ToukaSDK_Common_2.2.9.2_470dc9e.zip"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_Android"),(0,a.kt)("td",null," The Android platform must be integrated"),(0,a.kt)("td",null," 2.2.9.2 "),(0,a.kt)("td",null,"OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/2.2.9.2/ToukaSDK_Android_2.2.9.2_470dc9e.zip"},"ToukaSDK_Android_2.2.9.2_470dc9e.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1zuTtbylgOdP1nQLMqrNlfUIG2CSRJYrO/view?usp=share_link"}," ToukaSDK_Android_2.2.9.2_470dc9e.zip"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ToukaSDK_iOS_GB"),(0,a.kt)("td",null," The iOS platform must be integrated"),(0,a.kt)("td",null," 2.2.9.2 "),(0,a.kt)("td",null,"OSS:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://touka-artifacts.oss-cn-beijing.aliyuncs.com/TKG%20%E5%8F%91%E8%A1%8C%E6%8A%80%E6%9C%AF/Touka%20SDK/Unity%E6%B8%B8%E6%88%8F/TKGSDK/2.2.9.2/ToukaSDK_iOSLib_GB_2.2.9.2_470dc9e.zip"},"ToukaSDK_iOSLib_GB_2.2.9.2_470dc9e.zip"),(0,a.kt)("br",null),(0,a.kt)("br",null),"Google Driver:",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://drive.google.com/file/d/1WLgrqFNRQ809zew1uPfVp0wzIWb7q5Ay/view?usp=share_link"},"ToukaSDK_iOSLib_GB_2.2.9.2_470dc9e.zip")))))),(0,a.kt)("h3",{id:"release-note"},(0,a.kt)("a",{parentName:"h3",href:"/versions"},"Release Note")))}v.isMDXComponent=!0}}]);