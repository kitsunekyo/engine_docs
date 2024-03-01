"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),o=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=n(7462),a=(n(7294),n(3905));const r={id:"openbim_components.SimpleRaycaster",title:"Class: SimpleRaycaster",sidebar_label:"SimpleRaycaster",custom_edit_url:null},s=void 0,l={unversionedId:"api/classes/openbim_components.SimpleRaycaster",id:"api/classes/openbim_components.SimpleRaycaster",title:"Class: SimpleRaycaster",description:"openbim-components.SimpleRaycaster",source:"@site/docs/api/classes/openbim_components.SimpleRaycaster.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.SimpleRaycaster",permalink:"/api/classes/openbim_components.SimpleRaycaster",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.SimpleRaycaster",title:"Class: SimpleRaycaster",sidebar_label:"SimpleRaycaster",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SimplePlane",permalink:"/api/classes/openbim_components.SimplePlane"},next:{title:"SimpleRenderer",permalink:"/api/classes/openbim_components.SimpleRenderer"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"mouse",id:"mouse",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"castRay",id:"castray",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-11",level:4}],d={toc:o},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".SimpleRaycaster"),(0,a.kt)("p",null,"A simple ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"raycaster"),"\nthat allows to easily get items from the scene using the mouse and touch\nevents."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BaseRaycaster")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"SimpleRaycaster"))))),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,a.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enabled"},"enabled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"enabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"BaseRaycaster.enabled"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleRaycaster/index.ts#L13"},"src/core/SimpleRaycaster/index.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mouse"},"mouse"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"mouse"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Mouse"},(0,a.kt)("inlineCode",{parentName:"a"},"Mouse"))),(0,a.kt)("p",null,"The position of the mouse in the screen."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleRaycaster/index.ts#L19"},"src/core/SimpleRaycaster/index.ts:19")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"onDisposed")),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"BaseRaycaster.onDisposed"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleRaycaster/index.ts#L16"},"src/core/SimpleRaycaster/index.ts:16")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"castray"},"castRay"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"castRay"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"items?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Intersection"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Object3DEventMap"),">",">"),(0,a.kt)("p",null,"Throws a ray from the camera to the mouse or touch event point and returns\nthe first item found. This also takes into account the clipping planes\nused by the renderer."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"items")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Mesh"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"BufferGeometry"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"NormalBufferAttributes"),">",", ",(0,a.kt)("inlineCode",{parentName:"td"},"Material")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Material"),"[], ",(0,a.kt)("inlineCode",{parentName:"td"},"Object3DEventMap"),">","[]"),(0,a.kt)("td",{parentName:"tr",align:"left"},"the ",(0,a.kt)("a",{parentName:"td",href:"https://threejs.org/docs/#api/en/objects/Mesh"},"meshes")," to query. If not provided, it will query all the meshes stored in ",(0,a.kt)("a",{parentName:"td",href:"/api/classes/openbim_components.Components#meshes"},"Components.meshes"),".")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"Intersection"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Object3D"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Object3DEventMap"),">",">"),(0,a.kt)("h4",{id:"overrides-2"},"Overrides"),(0,a.kt)("p",null,"BaseRaycaster.castRay"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleRaycaster/index.ts#L51"},"src/core/SimpleRaycaster/index.ts:51")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"Disposable.dispose")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"dispose")),(0,a.kt)("h4",{id:"overrides-3"},"Overrides"),(0,a.kt)("p",null,"BaseRaycaster.dispose"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleRaycaster/index.ts#L36"},"src/core/SimpleRaycaster/index.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"get"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Raycaster")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"Component.get")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Raycaster")),(0,a.kt)("h4",{id:"overrides-4"},"Overrides"),(0,a.kt)("p",null,"BaseRaycaster.get"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleRaycaster/index.ts#L31"},"src/core/SimpleRaycaster/index.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasui"},"hasUI"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,a.kt)("p",null,"Whether is component implements any kind of ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"this is UI"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"BaseRaycaster.hasUI"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,"this is Configurable<any",">"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"BaseRaycaster.isConfigurable"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,"this is Disposable"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"BaseRaycaster.isDisposeable"),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishideable"},"isHideable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,"this is Hideable"),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"BaseRaycaster.isHideable"),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,"this is Resizeable"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"BaseRaycaster.isResizeable"),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,"this is Updateable"),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,"BaseRaycaster.isUpdateable"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")))}c.isMDXComponent=!0}}]);