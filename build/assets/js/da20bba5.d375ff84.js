"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,g=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"openbim_components.PropertiesStreamingSettings",title:"Class: PropertiesStreamingSettings",sidebar_label:"PropertiesStreamingSettings",custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/openbim_components.PropertiesStreamingSettings",id:"api/classes/openbim_components.PropertiesStreamingSettings",title:"Class: PropertiesStreamingSettings",description:"openbim-components.PropertiesStreamingSettings",source:"@site/docs/api/classes/openbim_components.PropertiesStreamingSettings.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.PropertiesStreamingSettings",permalink:"/api/classes/openbim_components.PropertiesStreamingSettings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.PropertiesStreamingSettings",title:"Class: PropertiesStreamingSettings",sidebar_label:"PropertiesStreamingSettings",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PostproductionRenderer",permalink:"/api/classes/openbim_components.PostproductionRenderer"},next:{title:"ScreenCuller",permalink:"/api/classes/openbim_components.ScreenCuller"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"coordinate",id:"coordinate",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"excludedCategories",id:"excludedcategories",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"includeProperties",id:"includeproperties",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"optionalCategories",id:"optionalcategories",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"saveLocations",id:"savelocations",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"wasm",id:"wasm",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"webIfc",id:"webifc",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".PropertiesStreamingSettings"),(0,i.kt)("p",null,"Configuration of the IFC-fragment streaming."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"IfcFragmentSettings")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"PropertiesStreamingSettings"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"coordinate"},"coordinate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"coordinate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Whether to use the coordination data coming from the IFC files."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.coordinate"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L15"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"excludedcategories"},"excludedCategories"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"excludedCategories"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,i.kt)("p",null,"List of categories that won't be converted to fragments."),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.excludedCategories"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L29"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"includeproperties"},"includeProperties"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"includeProperties"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Whether to extract the IFC properties into a JSON."),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.includeProperties"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L6"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:6")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"optionalcategories"},"optionalCategories"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"optionalCategories"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,i.kt)("p",null,"Generate the geometry for categories that are not included by default,\nlike IFCSPACE."),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.optionalCategories"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L12"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"savelocations"},"saveLocations"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"saveLocations"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Whether to save the absolute location of all IFC items."),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.saveLocations"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L32"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"wasm"},"wasm"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"wasm"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Path of the WASM for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_web-ifc"},"web-ifc"),"."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"absolute")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"logLevel?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"LogLevel"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.wasm"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L18"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"webifc"},"webIfc"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"webIfc"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"LoaderSettings")),(0,i.kt)("p",null,"Loader settings for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_web-ifc"},"web-ifc"),"."),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"IfcFragmentSettings.webIfc"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L35"},"src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:35")))}m.isMDXComponent=!0}}]);