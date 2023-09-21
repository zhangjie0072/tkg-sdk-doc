"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5373],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,m=s["".concat(d,".").concat(k)]||s[k]||p[k]||l;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9991:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:7},i="In App Purchase",o={unversionedId:"tkg-integration/sdk-basic/sdk-func-iap",id:"version-3.1.x/tkg-integration/sdk-basic/sdk-func-iap",title:"In App Purchase",description:"- Add USE_IAP macro definition",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.1.x/tkg-integration/sdk-basic/sdk-func-iap.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-iap",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-iap",tags:[],version:"3.1.x",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Event Tracking",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-event"},next:{title:"Account system",permalink:"/tkg-sdk-doc/tkg-integration/sdk-basic/sdk-func-account"}},d={},u=[{value:"In App Purchase access method",id:"in-app-purchase-access-method",level:2},{value:"1\u3001Import IAP Plugin",id:"1import-iap-plugin",level:3},{value:"2 Add macro definition",id:"2-add-macro-definition",level:3},{value:"3\u3001Add Product IDs",id:"3add-product-ids",level:3},{value:"3.1 In IAPProducts.cs, pre-set the product IDs.",id:"31-in-iapproductscs-pre-set-the-product-ids",level:4},{value:'3.2 Adding Product IDs through the AddProducts Interface. <font color="ff0000">(v3.1.2new)</font>',id:"32-adding-product-ids-through-the-addproducts-interface-v312new",level:4},{value:'4\u3001Add Purchase callback <font color="ff0000">(v3.1.3new)</font>',id:"4add-purchase-callback-v313new",level:3},{value:'5\u3001In App Purchase <font color="ff0000">(v3.1.2new)</font>',id:"5in-app-purchase-v312new",level:3},{value:"6\u3001Gets the localized price string interface",id:"6gets-the-localized-price-string-interface",level:3},{value:"In App Purchase event",id:"in-app-purchase-event",level:2},{value:'In-purchase button display <font color="ff0000">(v3.1.2new)</font>',id:"in-purchase-button-display-v312new",level:3},{value:"In-purchase exception",id:"in-purchase-exception",level:2},{value:'Server Integration (Optional)<font color="ff0000">(v3.1.2 new)</font>',id:"server-integration-optionalv312-new",level:2},{value:"Preparation for third-party game callback",id:"preparation-for-third-party-game-callback",level:3},{value:"Game-side Callback Address Interface Description",id:"game-side-callback-address-interface-description",level:3}],c={toc:u},s="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"in-app-purchase"},"In App Purchase"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add USE_IAP macro definition"),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.unity3d.com/Packages/com.unity.purchasing@4.9/manual/StoresSupported.html"},"Unity In App Purchasing plug-in version 4.9.3 or later")),"   ")))),(0,r.kt)("h2",{id:"in-app-purchase-access-method"},"In App Purchase access method"),(0,r.kt)("h3",{id:"1import-iap-plugin"},"1\u3001Import IAP Plugin"),(0,r.kt)("p",null,"Import Unity In App Purchasing Plugin.",(0,r.kt)("br",{parentName:"p"}),"\n","Unity menu bar -> Window -> Package Manager -> In App Purchasing -> Install."),(0,r.kt)("h3",{id:"2-add-macro-definition"},"2 Add macro definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"USE_IAP \n")),(0,r.kt)("h3",{id:"3add-product-ids"},"3\u3001Add Product IDs"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," Support two ways:",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"a. In IAPProducts.cs, pre-set the product IDs."),(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"b. Adding Product IDs through the AddProducts Interface.")),"  ",(0,r.kt)("font",{color:"ff0000"},"Note: The product type you add must match the type requested in the backend application. Otherwise, it may not be able to retrieve the corresponding product information."),"     ",(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"**ProductType.NonConsumable**  only buy once. Good for one-time purchases, such as extra levels.        \n**ProductType.Consumable**     can be purchased repeatedly. Suitable for consumable goods such as virtual currency.        \n**ProductType.Subscription**   can be purchased and restored repeatedly. Durable goods, but for a limited period (subscription).       \n")))),(0,r.kt)("h4",{id:"31-in-iapproductscs-pre-set-the-product-ids"},"3.1 In IAPProducts.cs, pre-set the product IDs."),(0,r.kt)("p",null,"Add item ID in ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets/TKGSDK/Config/Scripts/IAPProducts.cs")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'public static class IAPProducts\n{\n    /// <summary>\n    /// Item ID\n    /// </summary>\n    public const string NoAds = "test.tremoveads";\n\n    public readonly static Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n    {    \n        //ProductType.NonConsumable only buy once. Good for one-time purchases, such as extra levels\n        //ProductType.Consumable can be purchased repeatedly. Suitable for consumable goods such as virtual currency\n        //ProductType.Subscription can be purchased and restored repeatedly. Durable goods, but for a limited period (subscription)\n        { NoAds, ProductType.NonConsumable},\n        //Add more product\n        ...\n        ...\n    };\n}\n')),(0,r.kt)("h4",{id:"32-adding-product-ids-through-the-addproducts-interface-v312new"},"3.2 Adding Product IDs through the AddProducts Interface. ",(0,r.kt)("font",{color:"ff0000"},"(v3.1.2new)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.AddProducts(addProDic);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void AddProducts(Dictionary<string, ProductType> products);         \n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isRequired"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"products"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary<string, ",(0,r.kt)("strong",{parentName:"td"},"ProductType"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Products IDs")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ex:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'Dictionary<string, ProductType> ProductDic = new Dictionary<string, ProductType>()\n{\n    { "com.tkkk.unitysdk.demo.1",ProductType.Consumable},\n    { "com.tkkk.unitysdk.demo.a1",ProductType.Consumable},\n    { "com.tkkk.unitysdk.demo.a12",ProductType.Consumable}\n};\n\nTKGSDKManager.Instance.AddProducts(ProductDic);\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Note: When you encounter an account problem, (such as Googleplay can not use China account) will return an empty string, then please use the local default price of the game. ")),(0,r.kt)("h3",{id:"4add-purchase-callback-v313new"},"4\u3001Add Purchase callback ",(0,r.kt)("font",{color:"ff0000"},"(v3.1.3new)")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purchase callbacks must be set before SDK initialization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Purchase callback is an asynchronous callback, and when the callback is returned, ensure that the game reward is issued normally. It is suggested that the game side can add a mask to shield user actions during the payment process"),"   ")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.SetOnPurchaseDone(OnPurchaseResult);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void SetOnPurchaseDone(Action<string, string, string, bool, string> onPurchaseDoneAction)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isRequired"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPurchaseDoneAction"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"In-app purchase result callback <paid Financial transactions on GooglePlay/ iOS, Product Name, product ID, whether the payment is successful, gameExtra>")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ex:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"private void OnPurchaseResult(string pOrderID, string pProductName, string pID, bool pResult, string gameExtra)\n{\n    if (pResult)\n    {\n        //add gold\n    }\n}\nTKGSDKManager.Instance.SetOnPurchaseDone(OnPurchaseResult);\n")),(0,r.kt)("h3",{id:"5in-app-purchase-v312new"},"5\u3001In App Purchase ",(0,r.kt)("font",{color:"ff0000"},"(v3.1.2new)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.BuyProductByID(productID, productName, gameExtra);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void BuyProductByID(string productId, string enProductName, string gameExtraParam = "")        \n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isRequired"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"productId"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product ID ",(0,r.kt)("br",null),"GooglePlay\uff1aProductID iOS\uff1aSKU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enProductName"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Product Name ",(0,r.kt)("br",null),"Custom product name on the game side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gameExtraParam"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Game Extension Field",(0,r.kt)("br",null),"Passed from the game to the SDK in the payment interface and returned unchanged in the payment callback.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ex:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'public void BuyProduct()\n{\n    string productID = "com.tkkk.unitysdk.demo.a1";\n    string productName = "a1";\n    string gameExtra = "a1GameExtraParam";\n#if USE_IAP\n    TKGSDKManager.Instance.BuyProductByID(productID, productName, gameExtra);\n#endif\n}\n')),(0,r.kt)("h3",{id:"6gets-the-localized-price-string-interface"},"6\u3001Gets the localized price string interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.GetPriceByID(productID);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"string GetPriceByID(string productID)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"isRequired"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"productID"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the item to be purchased")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ex:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"public void GetPriceByID()\n{\n    string productID = \"com.tkkk.unitysdk.demo.a1\";\n    \n    // Returns a price string with a currency symbol, such as '$1.99' '\uffe56.99'\n    string price = TKGSDKManager.Instance.GetPriceByID(productID);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Note: If you encounter an account problem (such as Googleplay cannot use a Chinese account), an empty string will be returned, then please use the default price of the game.")),(0,r.kt)("h2",{id:"in-app-purchase-event"},"In App Purchase event"),(0,r.kt)("h3",{id:"in-purchase-button-display-v312new"},"In-purchase button display ",(0,r.kt)("font",{color:"ff0000"},"(v3.1.2new)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," void LogIAPBtnShow(string productName, string productId) ")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"productName"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Custom product name on the game side")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"productId"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"Product ID",(0,r.kt)("br",null),"GP: ProductID",(0,r.kt)("br",null),"iOS: SKU"))),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"LogIAPBtnShow")," method when the in-app purchase button is displayed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogIAPBtnShow("200golds","com.game.diamond200");\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"in-purchase-exception"},"In-purchase exception"),(0,r.kt)("p",null,"In case of payment failure, please confirm the following issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Purchase callbacks must be set before SDK initialization"),(0,r.kt)("li",{parentName:"ul"},"All product categories need to be consistent with the store configuration, consumable, non-consumable or subscription products"),(0,r.kt)("li",{parentName:"ul"},"If the account in China cannot be used for payment, you need to switch regions or use another region account"),(0,r.kt)("li",{parentName:"ul"},"Network reasons, trying to switch between different vpn nodes")),(0,r.kt)("h2",{id:"server-integration-optionalv312-new"},"Server Integration (Optional)",(0,r.kt)("font",{color:"ff0000"},"(v3.1.2 new)")),(0,r.kt)("p",null,"After a successful payment through the SDK, the game retrieves the payment result via a callback. For games with a server, it is recommended to prioritize integration with the SDK server's payment callback interface. After a successful payment, the SDK server will notify the game server to deliver the purchased goods. In the case of standalone games, ensure that the goods are delivered to the player after receiving a successful payment callback from the client."),(0,r.kt)("h3",{id:"preparation-for-third-party-game-callback"},"Preparation for third-party game callback"),(0,r.kt)("p",null,"1\u3001Obtain game-side authorization encryption secret from the integration partner.",(0,r.kt)("br",{parentName:"p"}),"\n","2\u3001Provide the game-side callback URL to the integration partner for configuration."),(0,r.kt)("h3",{id:"game-side-callback-address-interface-description"},"Game-side Callback Address Interface Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," 1\u3001Request Method: Post        "),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"2\u3001Header Authorization:  ",(0,r.kt)("inlineCode",{parentName:"strong"},"Authorization: secretkey "),"                        "),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"3\u3001Body Json        "),"      "),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Des"),(0,r.kt)("td",null,"Example Value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"env"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Environment ",(0,r.kt)("br",null),"(qa: test; prod: production)"),(0,r.kt)("td",null,"prod")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"platform"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"platform\uff08android/ios\uff09"),(0,r.kt)("td",null,"android")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"pkg"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"package name"),(0,r.kt)("td",null,"com.test.demo")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"user_id"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"UserID"),(0,r.kt)("td",null,"0cc852594cb2dfd0381af38f687b44906")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"product_id"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Product ID"),(0,r.kt)("td",null,"com.tkkk.unitysdk.demo.a1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"order_id"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Order ID"),(0,r.kt)("td",null,"GPA.3340-7674-3284-90321")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"price"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Price"),(0,r.kt)("td",null,"1.99")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"currency"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Currency"),(0,r.kt)("td",null,"USD")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"game_extra_param"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"N"),(0,r.kt)("td",null,"Game Extra Param"),(0,r.kt)("td",null,"game_extra_param_value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ts"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Timestamp"),(0,r.kt)("td",null,"1692346624")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"sign"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"Encrypted Value"),(0,r.kt)("td",null,"33dasfdewffggg"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'Body JSON Example \uff08secretkey: 64f1b1fb8efadc41dcd29d5c\uff09\n{\n    "env": "qa",\n    "platform": "android",\n    "pkg": "com.test.demo",\n    "user_id": "0cc852594cb2dfd0381af38f687b44906",\n    "product_id": "com.tkkk.unitysdk.demo.a1",\n    "order_id": "GPA.3340-7674-3284-90321",\n    "price": "1.99",\n    "currency": "USD",\n    "game_extra_param":"game_extra_param_value"\n    "ts": "1692346624",\n    "sign": "c9e91f2b7d28eec1130df9ddea5697e8"\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," 4\u3001Encryption Method "),(0,r.kt)("br",{parentName:"p"}),"\n",'Calculate the value of the "Sign" field by concatenating the parameter values (parameter value 1 + parameter value 2 + parameter value n + secret key) in the order of the returned parameters, and then applying MD5 encryption. The "+" sign is used as a connector and is not included in the calculation.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'$sign = md5("qa"+"android"+"com.test.demo"+"0cc852594cb2dfd0381af38f687b44906"+"com.tkkk.unitysdk.demo.a1"+"GPA.3340-7674-3284-90321"+"1.99"+"USD"+"game_extra_param_value"+"1692346624"+$secretKey)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," 5\u3001Retry Mechanism "),(0,r.kt)("br",{parentName:"p"}),"\n","Retry up to 10 times within a 5-hour timeframe with the following intervals:"),(0,r.kt)("p",null,"Retry 1: After 35 seconds   ",(0,r.kt)("br",null),"\nRetry 2: After 40 seconds   ",(0,r.kt)("br",null),"\nRetry 3: After 115 seconds   ",(0,r.kt)("br",null),"\nRetry 4: After 150 seconds   ",(0,r.kt)("br",null),"\nRetry 5: After 385 seconds   ",(0,r.kt)("br",null),"\nRetry 6: After 755 seconds   ",(0,r.kt)("br",null),"\nRetry 7: After 1500 seconds   ",(0,r.kt)("br",null),"\nRetry 8: After 2610 seconds   ",(0,r.kt)("br",null),"\nRetry 9: After 4230 seconds   ",(0,r.kt)("br",null),"\nRetry 10: After 6850 seconds   ",(0,r.kt)("br",null),"\nContinue retrying until the returned HTTP status is 200 and the output is 'success'."))}p.isMDXComponent=!0}}]);