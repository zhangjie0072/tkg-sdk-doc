"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,b=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(b,o(o({ref:t},p),{},{components:n})):i.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},o="For iOS",s={unversionedId:"tkg-integration/sdk-projectsettings/sdk-projectsettings-ios",id:"version-3.1.x/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios",title:"For iOS",description:"Method 1: Build a game with a specified account",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.1.x/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios.md",sourceDirName:"tkg-integration/sdk-projectsettings",slug:"/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios",permalink:"/tkg-sdk-doc/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios",tags:[],version:"3.1.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"For Android",permalink:"/tkg-sdk-doc/tkg-integration/sdk-projectsettings/sdk-projectsettings-android"},next:{title:"Release",permalink:"/tkg-sdk-doc/tkg-integration/sdk-package"}},c={},l=[{value:"Method 1: Build a game with a specified account",id:"method-1-build-a-game-with-a-specified-account",level:2},{value:"Certificate Settings",id:"certificate-settings",level:3},{value:"1\u3001Company Apple Developer Account",id:"1company-apple-developer-account",level:3},{value:"2\u3001Individual Apple Developer Account",id:"2individual-apple-developer-account",level:3},{value:"Method 2: Build a game with your own account",id:"method-2-build-a-game-with-your-own-account",level:2},{value:"Prepare materials related to account",id:"prepare-materials-related-to-account",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"for-ios"},"For iOS"),(0,r.kt)("h2",{id:"method-1-build-a-game-with-a-specified-account"},"Method 1: Build a game with a specified account"),(0,r.kt)("h3",{id:"certificate-settings"},"Certificate Settings"),(0,r.kt)("p",null,"Please confirm the apple developer account type of used. Then set as follows."),(0,r.kt)("h3",{id:"1company-apple-developer-account"},"1\u3001Company Apple Developer Account"),(0,r.kt)("b",null,"First. Grant  Your Apple ID with  App Store developer account access"),"    ",(0,r.kt)("br",null),"Please confirm that your Apple ID has been granted and that you have confirmed acceptance. Then Use this account to log in in xcode.      ",(0,r.kt)("br",null),(0,r.kt)("b",null,"Second. Installed the iOS certificate provided by us"),"    ",(0,r.kt)("br",null),"Please make sure you have installed the certificate provided by us. (",(0,r.kt)("font",{color:"#ff0000"},"no need mobileprovision file"),", After installing the certificate, can try restarting xcode.)  ",(0,r.kt)("br",null),(0,r.kt)("b",null,"Third. Select Automatically manage signing in xcode"),"    ",(0,r.kt)("br",null),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"ios_autocert",src:n(8202).Z,width:"2480",height:"906"})),(0,r.kt)("h3",{id:"2individual-apple-developer-account"},"2\u3001Individual Apple Developer Account"),(0,r.kt)("b",null,"First. Grant  Your Apple ID with  App Store developer account access"),"    ",(0,r.kt)("br",null),"Please confirm that your Apple ID has been granted and that you have confirmed acceptance. Then Use this account to log in in xcode.      ",(0,r.kt)("br",null),(0,r.kt)("b",null,"Second. Installed the iOS certificate and mobileprovision file provided by us"),"    ",(0,r.kt)("br",null),"Please make sure you have installed the certificate and mobileprovision file provided by us. (After installing the certificate, can try restarting xcode.)  ",(0,r.kt)("br",null),(0,r.kt)("b",null,"Third. The settings in xcode are as follows"),"    ",(0,r.kt)("br",null),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"ios_autocert",src:n(4879).Z,width:"1762",height:"602"}),"\nAfter setting, you can upload the App Store by yourself."),(0,r.kt)("h2",{id:"method-2-build-a-game-with-your-own-account"},"Method 2: Build a game with your own account"),(0,r.kt)("p",null,"When using your own account to publish the game, the following materials shall be provided: ",(0,r.kt)("br",null)),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After the integration of Xcode project, Xcode project can run normally without error or crash. ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},"Own account certificate, p12 file and the mobileprovision file of our test device UDID (please contact the business department to obtain the UDID) have been added.")),(0,r.kt)("h3",{id:"prepare-materials-related-to-account"},"Prepare materials related to account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," 1.login apple developer background: ",(0,r.kt)("a",{parentName:"strong",href:"https://developer.apple.com"},"https://developer.apple.com"),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"2.Select Certificate Options:\n",(0,r.kt)("img",{src:n(2973).Z,width:"2168",height:"1680"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"3.Select a certificate of type Distribution:\n",(0,r.kt)("img",{src:n(3163).Z,width:"2744",height:"1620"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"4.Download:\n",(0,r.kt)("img",{src:n(3525).Z,width:"2856",height:"1060"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"5.Double-click to install and download the certificate:\n",(0,r.kt)("img",{src:n(2232).Z,width:"2302",height:"1008"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"6.Open the Key application for your Mac:\n",(0,r.kt)("img",{src:n(7631).Z,width:"2488",height:"1306"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"7.Locate the certificate installed in Step 5 and right-click to export the certificate:\n",(0,r.kt)("img",{src:n(5928).Z,width:"2872",height:"994"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"8.Export the Personal Information exchange (.p12) certificate:\n",(0,r.kt)("img",{src:n(1782).Z,width:"2816",height:"1518"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"9.Add test device UDID (contact business to obtain test device UDID) :",(0,r.kt)("br",null),"\n9.1\n",(0,r.kt)("img",{src:n(4494).Z,width:"2878",height:"1336"}),(0,r.kt)("br",null),"\n9.2\n",(0,r.kt)("img",{src:n(6185).Z,width:"2862",height:"1712"}),(0,r.kt)("br",null),"\n9.3\n",(0,r.kt)("img",{src:n(9073).Z,width:"2754",height:"1250"}),(0,r.kt)("br",null),"\n10.Create Ad Hoc type mobileprovision file:",(0,r.kt)("br",null),"\n10.1\n",(0,r.kt)("img",{src:n(3684).Z,width:"2806",height:"1090"}),(0,r.kt)("br",null),"\n10.2\n",(0,r.kt)("img",{src:n(4354).Z,width:"2878",height:"1754"}),(0,r.kt)("br",null),"\n10.3\n",(0,r.kt)("img",{src:n(9894).Z,width:"2878",height:"1170"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"10.4\n",(0,r.kt)("img",{src:n(6491).Z,width:"2878",height:"1252"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"10.5\n",(0,r.kt)("img",{src:n(9813).Z,width:"2878",height:"1500"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"10.6\n",(0,r.kt)("img",{src:n(983).Z,width:"2876",height:"1484"}),(0,r.kt)("br",null),(0,r.kt)("br",{parentName:"strong"}),"10.7\n",(0,r.kt)("img",{src:n(1207).Z,width:"2878",height:"1198"}),(0,r.kt)("br",null),"\n11.Create an App Store type description file:",(0,r.kt)("br",null),"\n11.1\n",(0,r.kt)("img",{src:n(3684).Z,width:"2806",height:"1090"}),(0,r.kt)("br",null),"\n11.2\n",(0,r.kt)("img",{src:n(9630).Z,width:"2878",height:"1742"}),(0,r.kt)("br",null),"\n\xb7",(0,r.kt)("br",null),"\n\xb7",(0,r.kt)("br",null),"\n\xb7\uff08same as Ad Hoc\uff09",(0,r.kt)("br",null),"\n\xb7",(0,r.kt)("br",null),"\n\xb7",(0,r.kt)("br",null),"\n11.3\n",(0,r.kt)("img",{src:n(6656).Z,width:"2878",height:"1210"}),(0,r.kt)("br",null),"\nPlease package the files of 4, 8, 10.7, 11.3 and the Xcode project to us. After the test is completed, we will send the IPA package of App Store type to you and upload the IPA using Transporter.\n")))}u.isMDXComponent=!0},2973:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic1-258209310dad2a568a7c202a56b3beb1.jpg"},9894:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic10-b855ef79ee007979526a607f156bdde1.jpg"},6491:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic11-17bc450a5e63882751d3b7bdf6740cb6.jpg"},9813:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic12-ff0c3c43dbae8c99b6e05d96e0766551.jpg"},983:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic13-9c38efe3d6c836ff5cd78059af0e0afe.jpg"},1207:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic14-b285a063c61e15569471b6cadd80848a.jpg"},4494:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic15-1239a6f166513a546d677a3337e47bd0.jpg"},6185:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic16-07b3977eab72539ef61e0f206c2e7eaa.jpg"},9073:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic17-b62fd7a4452511122b0d902109ee8796.jpg"},9630:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic18-ddaa03faed84c5419a1897f26b2e4dae.jpg"},6656:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic19-af67b4645394947d6872bb39495e5023.jpg"},3163:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic2-bccbe40de8c51b8531f6ae3ea8e6f2bb.jpg"},5928:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic20-03b4d73d82871577d659d6f1f0c3484d.jpg"},1782:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic21-bcdeb12d5d07e6e2b41d0c2b81a8e195.jpg"},3525:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic3-c6b4573ad3f7f5b476ae4bd3203c066a.jpg"},2232:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic4-cb0633d52f371d4027b2a2d6f4241153.jpg"},7631:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic5-57499dc70401dc20f7d5860dc866a928.jpg"},3684:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic8-a1ee10403eba9cf423143f324dddd9b1.jpg"},4354:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pic9-99de52181434e1f08f030fb99976c4a1.jpg"},8202:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/config_ios_autocert-7179235ac9905d89ee2ab0776904ae5a.jpg"},4879:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/config_ios_noautocert-48c70480c4ec541260aa2267b5432b5d.jpg"}}]);