"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1803],{3905:function(t,n,e){e.d(n,{Zo:function(){return c},kt:function(){return k}});var r=e(7294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,r,l=function(t,n){if(null==t)return{};var e,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var o=r.createContext({}),s=function(t){var n=r.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},c=function(t){var n=s(t.components);return r.createElement(o.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(t,n){var e=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),p=s(e),k=l,g=p["".concat(o,".").concat(k)]||p[k]||d[k]||a;return e?r.createElement(g,i(i({ref:n},c),{},{components:e})):r.createElement(g,i({ref:n},c))}));function k(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var a=e.length,i=new Array(a);i[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=t,u.mdxType="string"==typeof t?t:l,i[1]=u;for(var s=2;s<a;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}p.displayName="MDXCreateElement"},8833:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=e(7462),l=e(3366),a=(e(7294),e(3905)),i=["components"],u={sidebar_position:7},o="\u5185\u8d2d",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-iap",id:"version-3.0.x/tkg-integration/sdk-basic/sdk-func-iap",title:"\u5185\u8d2d",description:"- \u9700\u8981\u6dfb\u52a0 USE_IAP \u5b8f\u5b9a\u4e49",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.x/tkg-integration/sdk-basic/sdk-func-iap.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-iap",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-iap",tags:[],version:"3.0.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6\u57cb\u70b9",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-event"},next:{title:"\u8d26\u53f7\u7cfb\u7edf",permalink:"/tkg-sdk-doc/zh/tkg-integration/sdk-basic/sdk-func-account"}},c={},d=[{value:"\u5185\u8d2d\u63a5\u5165\u65b9\u6cd5",id:"\u5185\u8d2d\u63a5\u5165\u65b9\u6cd5",level:2},{value:"1\u3001\u6dfb\u52a0\u5b8f\u5b9a\u4e49",id:"1\u6dfb\u52a0\u5b8f\u5b9a\u4e49",level:3},{value:"2\u3001\u5728 IAPProducts.cs \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5546\u54c1ID",id:"2\u5728-iapproductscs-\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5546\u54c1id",level:3},{value:"3\u3001\u6dfb\u52a0\u5185\u8d2d\u56de\u8c03",id:"3\u6dfb\u52a0\u5185\u8d2d\u56de\u8c03",level:3},{value:"4\u3001\u5185\u8d2d\u63a5\u53e3",id:"4\u5185\u8d2d\u63a5\u53e3",level:3},{value:"\u5185\u8d2d\u4e8b\u4ef6",id:"\u5185\u8d2d\u4e8b\u4ef6",level:2},{value:"\u5185\u8d2d\u6309\u94ae\u5c55\u793a",id:"\u5185\u8d2d\u6309\u94ae\u5c55\u793a",level:3},{value:"\u5185\u8d2d\u6309\u94ae\u70b9\u51fb",id:"\u5185\u8d2d\u6309\u94ae\u70b9\u51fb",level:3},{value:"\u9996\u6b21\u8d2d\u4e70\u6210\u529f",id:"\u9996\u6b21\u8d2d\u4e70\u6210\u529f",level:3},{value:"\u8d2d\u4e70\u6210\u529f",id:"\u8d2d\u4e70\u6210\u529f",level:3}],p={toc:d};function k(t){var n=t.components,e=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5185\u8d2d"},"\u5185\u8d2d"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9700\u8981\u6dfb\u52a0 USE_IAP \u5b8f\u5b9a\u4e49"),"   "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unity In App Purchasing \u63d2\u4ef6\u7248\u672c\u9700\u9ad8\u4e8e4.4.0"),"   "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u9879\u76ee\u4e2d\u6709\u4f7f\u7528\u5230 Unity Gaming Services \u7ec4\u4ef6\u65f6\uff0c\u786e\u4fdd\u5176\u624b\u52a8\u521d\u59cb\u5316\uff0c\u4e14\u521d\u59cb\u5316SDK\u65b9\u6cd5\u9700\u653e\u5728Unity Gaming Services \u7ec4\u4ef6\u521d\u59cb\u5316\u6210\u529f\u56de\u8c03\u4e2d\u6267\u884c"))))),(0,a.kt)("h2",{id:"\u5185\u8d2d\u63a5\u5165\u65b9\u6cd5"},"\u5185\u8d2d\u63a5\u5165\u65b9\u6cd5"),(0,a.kt)("h3",{id:"1\u6dfb\u52a0\u5b8f\u5b9a\u4e49"},"1\u3001\u6dfb\u52a0\u5b8f\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"USE_IAP \n")),(0,a.kt)("h3",{id:"2\u5728-iapproductscs-\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5546\u54c1id"},"2\u3001\u5728 IAPProducts.cs \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5546\u54c1ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'public const string NoAds = "test.tremoveads";\n\npublic static readonly Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n{\n    // ProductType.NonConsumable  \u53ea\u80fd\u8d2d\u4e70\u4e00\u6b21\u3002\u9002\u5408\u4e00\u6b21\u6027\u8d2d\u4e70\u7684\u5546\u54c1\uff0c\u5982\u989d\u5916\u7684\u5173\u5361\n    // ProductType.Consumable     \u53ef\u4ee5\u53cd\u590d\u8d2d\u4e70\u3002\u9002\u5408\u865a\u62df\u8d27\u5e01\u7b49\u53ef\u6d88\u8017\u5546\u54c1\n    // ProductType.Subscription   \u53ef\u4ee5\u53cd\u590d\u8d2d\u4e70\u548c\u6062\u590d\u3002\u8010\u7528\u54c1\uff0c\u4f46\u6709\u6548\u671f\u6709\u9650\uff08\u8ba2\u9605\uff09\n    \n    { NoAds, ProductType.NonConsumable}\n        \n};\n')),(0,a.kt)("h3",{id:"3\u6dfb\u52a0\u5185\u8d2d\u56de\u8c03"},"3\u3001\u6dfb\u52a0\u5185\u8d2d\u56de\u8c03"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"\nIAPTool.Instance.OnPurchaseDone += OnPurchaseResult;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"private void OnPurchaseResult(string pID, bool pResult)\n{\n    if (pID.Equals(IAPProducts.NoAds) && pResult)\n    {\n        // \u5185\u8d2d\u6210\u529f\u540e\uff0c\u53bb\u9664\u5e7f\u544a\n        TKGSDKManager.Instance.IsRemoveAds = true;\n    }\n}\n")),(0,a.kt)("h3",{id:"4\u5185\u8d2d\u63a5\u53e3"},"4\u3001\u5185\u8d2d\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"IAPTool.Instance.BuyProductByID(IAPProducts.NoAds);\n")),(0,a.kt)("h2",{id:"\u5185\u8d2d\u4e8b\u4ef6"},"\u5185\u8d2d\u4e8b\u4ef6"),(0,a.kt)("h3",{id:"\u5185\u8d2d\u6309\u94ae\u5c55\u793a"},"\u5185\u8d2d\u6309\u94ae\u5c55\u793a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," void LogIAPBtnShow(string _iap, string _id, string _currency, string _price) ")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iap"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u6e38\u620f\u4fa7\u81ea\u5b9a\u4e49\u5546\u54c1\u540d\u79f0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"id"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u5546\u54c1ID",(0,a.kt)("br",null),"GP\uff1aProductID",(0,a.kt)("br",null),"iOS\uff1aSKU")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"currency"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u8d27\u5e01\u5355\u4f4d,\u5982\uff1aUSD")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"price"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u8d2d\u4e70\u4ef7\u683c"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," \u8c03\u7528\u65f6\u673a\uff1a")," \u5185\u8d2d\u6309\u94ae\u5c55\u793a\u65f6\u8c03\u7528\u3002 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogIAPBtnShow("200\u94bb\u77f3","com.game.diamond200","USD","1.99");\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u5185\u8d2d\u6309\u94ae\u70b9\u51fb"},"\u5185\u8d2d\u6309\u94ae\u70b9\u51fb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," void LogIAPBtnClick(string _iap, string _id, string _currency, string _price) (\u53c2\u6570\u540c\u4e0a)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," \u8c03\u7528\u65f6\u673a\uff1a")," \u5185\u8d2d\u6309\u94ae\u70b9\u51fb\u65f6\u8c03\u7528\u3002  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogIAPBtnClick("200\u94bb\u77f3","com.game.diamond200","USD","1.99");\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u9996\u6b21\u8d2d\u4e70\u6210\u529f"},"\u9996\u6b21\u8d2d\u4e70\u6210\u529f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," void LogIAPFirstPurchase(string _iap, string _id, string _currency, string _price) (\u53c2\u6570\u540c\u4e0a)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," \u8c03\u7528\u65f6\u673a\uff1a"),"  \u9996\u6b21\u8d2d\u4e70\u6210\u529f\u65f6\u4e0a\u62a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogIAPFirstPurchase("200\u94bb\u77f3","com.game.diamond200","USD","1.99");\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u8d2d\u4e70\u6210\u529f"},"\u8d2d\u4e70\u6210\u529f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," void LogIAPSuccess(string _iap, string _id, string _orderid, string _productToken, string _paymentMethod, string _currency, string _price) ")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"isRequired"),(0,a.kt)("td",null,"Type"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iap"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u6e38\u620f\u4fa7\u81ea\u5b9a\u4e49\u5546\u54c1\u540d\u79f0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"id"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u5546\u54c1ID",(0,a.kt)("br",null),"GooglePlay\uff1aProductID",(0,a.kt)("br",null),"iOS\uff1aSKU")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orderid"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"GooglePlay/ iOS \u4e0a\u7684\u8d22\u52a1\u4ea4\u6613\u3002\u6bcf\u5f53\u53d1\u751f\u8d22\u52a1\u4ea4\u6613\u65f6\uff0c\u7cfb\u7edf\u90fd\u4f1a\u521b\u5efa\u8ba2\u5355ID\u3002\u5728IAPTool.cs\u6587\u4ef6 public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs e)\u65b9\u6cd5\u4e2d\u83b7\u53d6\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"productToken"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"GooglePlay\u4e0a\u8d2d\u4e70\u6210\u529f\u65f6\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u8d2d\u4e70\u4ee4\u724c\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u5176\u4ed6\u652f\u4ed8\u65b9\u5f0f\u4f20\u7a7a\u5373\u53ef\u3002\u5728IAPTool.cs\u6587\u4ef6 public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs e)\u65b9\u6cd5\u4e2d\u83b7\u53d6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"paymentMethod"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u5b98\u65b9\u652f\u4ed8\u6e20\u9053\u4f20\uff1aAppStore\u3001GooglePlay\u5373\u53ef\uff0c\u5176\u4ed6\u652f\u4ed8\u6e20\u9053\u4f20\u5bf9\u5e94\u6e20\u9053\u540d\u79f0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"currency"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u8d27\u5e01\u5355\u4f4d,\u5982\uff1aUSD")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"price"),(0,a.kt)("td",null,"Y"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"\u8d2d\u4e70\u4ef7\u683c"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," \u8c03\u7528\u65f6\u673a\uff1a"),"  \u8d2d\u4e70\u6210\u529f\u65f6\u4e0a\u62a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogIAPSuccess("200\u94bb\u77f3","com.game.diamond200","GPA.3327-1005-9772-34199","fhlkemmlgnoaedkjmlobdkce.AO-J1OxTtpuomZK4pjutaKDyOqQfFBF122_NgIlMzU_3xrYdvvv9ed1Y-WZVC7yXBVQDKKjx25rs8S02mHjE9GUmfhXbDT_TIyYHQCEyJbTmdnS82N5FR4o","GooglePlay","USD","1.99");\n')),(0,a.kt)("hr",null))}k.isMDXComponent=!0}}]);