"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6934],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(t),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(h,p(p({ref:n},d),{},{components:t})):a.createElement(h,p({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,p[1]=l;for(var o=2;o<r;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=t(7462),i=(t(7294),t(3905));const r={id:"openbim_components.BaseRenderer",title:"Class: BaseRenderer",sidebar_label:"BaseRenderer",custom_edit_url:null},p=void 0,l={unversionedId:"api/classes/openbim_components.BaseRenderer",id:"api/classes/openbim_components.BaseRenderer",title:"Class: BaseRenderer",description:"openbim-components.BaseRenderer",source:"@site/docs/api/classes/openbim_components.BaseRenderer.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.BaseRenderer",permalink:"/api/classes/openbim_components.BaseRenderer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.BaseRenderer",title:"Class: BaseRenderer",sidebar_label:"BaseRenderer",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Serializer",permalink:"/api/classes/bim_fragment.Serializer"},next:{title:"CloudStorage",permalink:"/api/classes/openbim_components.CloudStorage"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"clippingPlanes",id:"clippingplanes",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"enabled",id:"enabled",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"onClippingPlanesUpdated",id:"onclippingplanesupdated",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"onResize",id:"onresize",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"resize",id:"resize",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"togglePlane",id:"toggleplane",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"updateClippingPlanes",id:"updateclippingplanes",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-14",level:4}],d={toc:o},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".BaseRenderer"),(0,i.kt)("p",null,"A base component for other components whose main mission is to render a\n",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/scenes/Scene"},"scene"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"No Inherit Doc"))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"THREE.WebGLRenderer"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"BaseRenderer"))),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleRenderer"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Resizeable"},(0,i.kt)("inlineCode",{parentName:"a"},"Resizeable")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"clippingplanes"},"clippingPlanes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"clippingPlanes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Plane"),"[] = ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")),(0,i.kt)("p",null,"The list of ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes"},"clipping planes")," used by this\ninstance of the renderer."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L33"},"src/base-types/base-renderer.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enabled"},"enabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"enabled"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether this component is active or not. The behaviour can vary depending\non the type of component. E.g. a disabled dimension tool will stop creating\ndimensions, while a disabled camera will stop moving. A disabled component\nwill not be updated automatically each frame."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"enabled")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L24"},"src/base-types/component.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onclippingplanesupdated"},"onClippingPlanesUpdated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onClippingPlanesUpdated"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("p",null,"Event that fires when there has been a change to the list of clipping\nplanes used by the active renderer."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L27"},"src/base-types/base-renderer.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onresize"},"onResize"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onResize"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#onresize"},"Resizeable.onResize")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#onresize"},"onResize")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L21"},"src/base-types/base-renderer.ts:21")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"get"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,i.kt)("p",null,"The core of the component. For instance, if it's a camera component, it\ncould be a ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/cameras/Camera"},"THREE.Camera"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"get")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L30"},"src/base-types/component.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsize"},"getSize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSize"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#getsize"},"Resizeable.getSize"),"."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#getsize"},"getSize")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L15"},"src/base-types/base-renderer.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hasui"},"hasUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,i.kt)("p",null,"Whether is component implements any kind of ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"this is UI"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,"this is Configurable<any",">"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"this is Disposable"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ishideable"},"isHideable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"this is Hideable"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,"this is Resizeable"),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,"this is Updateable"),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"resize"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#resize"},"Resizeable.resize"),"."),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#resize"},"resize")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L18"},"src/base-types/base-renderer.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toggleplane"},"togglePlane"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"togglePlane"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plane"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isLocal?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Adds or removes a\n",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes"},"clipping plane"),"\nto the renderer."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"active")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"plane")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Plane"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isLocal?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L48"},"src/base-types/base-renderer.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updateclippingplanes"},"updateClippingPlanes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateClippingPlanes"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Forces the update of the clipping planes and all components that depend\non them that are subscribed to ",(0,i.kt)("inlineCode",{parentName:"p"},"onClippingPlanesUpdated"),"."),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/base-renderer.ts#L39"},"src/base-types/base-renderer.ts:39")))}c.isMDXComponent=!0}}]);