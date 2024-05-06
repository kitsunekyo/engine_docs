"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),s=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(r.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(r,".").concat(u)]||m[u]||k[u]||o;return n?a.createElement(h,p(p({ref:t},d),{},{components:n})):a.createElement(h,p({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[m]="string"==typeof e?e:i,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),p=["components"],l={id:"openbim_components.ToolComponent",title:"Class: ToolComponent",sidebar_label:"ToolComponent",custom_edit_url:null},r=void 0,s={unversionedId:"api/classes/openbim_components.ToolComponent",id:"api/classes/openbim_components.ToolComponent",title:"Class: ToolComponent",description:"openbim-components.ToolComponent",source:"@site/docs/api/classes/openbim_components.ToolComponent.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.ToolComponent",permalink:"/api/classes/openbim_components.ToolComponent",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.ToolComponent",title:"Class: ToolComponent",sidebar_label:"ToolComponent",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SimpleScene",permalink:"/api/classes/openbim_components.SimpleScene"},next:{title:"UIElement",permalink:"/api/classes/openbim_components.UIElement"}},d={},m=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"list",id:"list",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"token",id:"token",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"uuid",id:"uuid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"libraryUUIDs",id:"libraryuuids",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"get",id:"get",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"init",id:"init",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-16",level:4}],k={toc:m},u="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)(u,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".ToolComponent"),(0,o.kt)("p",null,"An object to easily handle all the tools used (e.g. updating them, retrieving\nthem, performing batch operations, etc). A tool is a feature that achieves\nsomething through user interaction (e.g. clipping planes, dimensions, etc)."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ToolComponent"))))),(0,o.kt)("h2",{id:"implements"},"Implements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,o.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"enabled"},"enabled"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"enabled"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"enabled")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L31"},"src/core/ToolsComponent/index.ts:31")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"list"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"any"),">",">"," = ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")),(0,o.kt)("p",null,"The list of components created in this app."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L16"},"src/core/ToolsComponent/index.ts:16")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,o.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"onDisposed")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L19"},"src/core/ToolsComponent/index.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"token"},"token"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"token"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("p",null,"The auth token to get tools from That Open Platform."),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L25"},"src/core/ToolsComponent/index.ts:25")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uuid"},"uuid"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"uuid"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,o.kt)("inlineCode",{parentName:"p"},'"ToolComponent"')),(0,o.kt)("p",null,"Component.uuid"),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L28"},"src/core/ToolsComponent/index.ts:28")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"libraryuuids"},"libraryUUIDs"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"libraryUUIDs"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,o.kt)("p",null,"The list of UUIDs of all the components in this library."),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L22"},"src/core/ToolsComponent/index.ts:22")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"add"},"add"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"add"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"instance"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Adds a new tool. Use this in the constructor of your tools."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"uuid")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The UUID of your tool.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"instance")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/api/classes/openbim_components.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,o.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The instance of your tool (",(0,o.kt)("inlineCode",{parentName:"td"},"this")," inside the constructor).")))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L58"},"src/core/ToolsComponent/index.ts:58")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dispose"},"dispose"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("p",null,"Disposes all the MEMORY used by all the tools."),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"dispose")),(0,o.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L107"},"src/core/ToolsComponent/index.ts:107")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"get"},"get"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"get"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"U"),">","(",(0,o.kt)("inlineCode",{parentName:"p"},"ToolClass"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"U")),(0,o.kt)("p",null,"Retrieves a tool component. If it already exists in this app, it returns the instance of the component. If it\ndoesn't exist, it will instance it automatically."),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,o.kt)("a",{parentName:"td",href:"/api/classes/openbim_components.Component"},(0,o.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,o.kt)("inlineCode",{parentName:"td"},"T"),">")))),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ToolClass")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Object")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The component to get or create.")))),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"U")),(0,o.kt)("h4",{id:"overrides-1"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"get")),(0,o.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L74"},"src/core/ToolsComponent/index.ts:74")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hasui"},"hasUI"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,o.kt)("p",null,"Whether is component implements any kind of ",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,"this is UI"),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,o.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"init"},"init"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"init"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"OBC"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("p",null,"Pass the whole library object as argument."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"OBC")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"void")),(0,o.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L46"},"src/core/ToolsComponent/index.ts:46")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,o.kt)("p",null,"Whether is component is ",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,o.kt)("h4",{id:"returns-5"},"Returns"),(0,o.kt)("p",null,"this is Configurable<any",">"),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,o.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,o.kt)("p",null,"Whether is component is ",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,o.kt)("h4",{id:"returns-6"},"Returns"),(0,o.kt)("p",null,"this is Disposable"),(0,o.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,o.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ishideable"},"isHideable"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,o.kt)("p",null,"Whether is component is ",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,o.kt)("h4",{id:"returns-7"},"Returns"),(0,o.kt)("p",null,"this is Hideable"),(0,o.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,o.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,o.kt)("p",null,"Whether is component is ",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,o.kt)("h4",{id:"returns-8"},"Returns"),(0,o.kt)("p",null,"this is Resizeable"),(0,o.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,o.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,o.kt)("p",null,"Whether is component is ",(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,o.kt)("h4",{id:"returns-9"},"Returns"),(0,o.kt)("p",null,"this is Updateable"),(0,o.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,o.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"update"},"update"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"update"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("p",null,"Updates all the registered tool components. Only the components where the\nproperty ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")," is true will be updated."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"delta")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ",(0,o.kt)("a",{parentName:"td",href:"https://threejs.org/docs/#api/en/core/Clock"},"delta time")," of the loop.")))),(0,o.kt)("h4",{id:"returns-10"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,o.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/ToolsComponent/index.ts#L95"},"src/core/ToolsComponent/index.ts:95")))}h.isMDXComponent=!0}}]);