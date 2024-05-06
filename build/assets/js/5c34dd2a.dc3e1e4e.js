"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5531],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||a;return t?i.createElement(h,p(p({ref:n},d),{},{components:t})):i.createElement(h,p({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[m]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<a;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),p=["components"],l={id:"openbim_components.PostproductionRenderer",title:"Class: PostproductionRenderer",sidebar_label:"PostproductionRenderer",custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/openbim_components.PostproductionRenderer",id:"api/classes/openbim_components.PostproductionRenderer",title:"Class: PostproductionRenderer",description:"openbim-components.PostproductionRenderer",source:"@site/docs/api/classes/openbim_components.PostproductionRenderer.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.PostproductionRenderer",permalink:"/api/classes/openbim_components.PostproductionRenderer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.PostproductionRenderer",title:"Class: PostproductionRenderer",sidebar_label:"PostproductionRenderer",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"OrthoPerspectiveCamera",permalink:"/api/classes/openbim_components.OrthoPerspectiveCamera"},next:{title:"PropertiesStreamingSettings",permalink:"/api/classes/openbim_components.PropertiesStreamingSettings"}},d={},m=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"clippingPlanes",id:"clippingplanes",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"container",id:"container",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enabled",id:"enabled",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"onClippingPlanesUpdated",id:"onclippingplanesupdated",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"onResize",id:"onresize",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"postproduction",id:"postproduction",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"resize",id:"resize",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"togglePlane",id:"toggleplane",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"update",id:"update",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"updateClippingPlanes",id:"updateclippingplanes",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"Defined in",id:"defined-in-21",level:4}],c={toc:m},u="wrapper";function h(e){var n=e.components,t=(0,r.Z)(e,p);return(0,a.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".PostproductionRenderer"),(0,a.kt)("p",null,"Renderer that uses efficient postproduction effects (e.g. Ambient Occlusion)."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},(0,a.kt)("inlineCode",{parentName:"a"},"SimpleRenderer"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PostproductionRenderer"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"clippingplanes"},"clippingPlanes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"clippingPlanes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Plane"),"[] = ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")),(0,a.kt)("p",null,"The list of ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes"},"clipping planes")," used by this\ninstance of the renderer."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#clippingplanes"},"clippingPlanes")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L33"},"src/base-types/base-renderer.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"container"},"container"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"container"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,a.kt)("p",null,"The HTML container of the THREE.js canvas where the scene is rendered."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#container"},"container")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L26"},"src/core/SimpleRenderer/index.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enabled"},"enabled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"enabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#enabled"},"enabled")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L23"},"src/core/SimpleRenderer/index.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onafterupdate"},"onAfterUpdate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onAfterUpdate"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},(0,a.kt)("inlineCode",{parentName:"a"},"SimpleRenderer")),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onafterupdate"},"Updateable.onAfterUpdate")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#onafterupdate"},"onAfterUpdate")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L35"},"src/core/SimpleRenderer/index.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onbeforeupdate"},"onBeforeUpdate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onBeforeUpdate"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},(0,a.kt)("inlineCode",{parentName:"a"},"SimpleRenderer")),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onbeforeupdate"},"Updateable.onBeforeUpdate")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#onbeforeupdate"},"onBeforeUpdate")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L32"},"src/core/SimpleRenderer/index.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onclippingplanesupdated"},"onClippingPlanesUpdated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onClippingPlanesUpdated"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("p",null,"Event that fires when there has been a change to the list of clipping\nplanes used by the active renderer."),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#onclippingplanesupdated"},"onClippingPlanesUpdated")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L27"},"src/base-types/base-renderer.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#ondisposed"},"onDisposed")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L29"},"src/core/SimpleRenderer/index.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onresize"},"onResize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onResize"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#onresize"},"Resizeable.onResize")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#onresize"},"onResize")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L21"},"src/base-types/base-renderer.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"postproduction"},"postproduction"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"postproduction"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Postproduction")),(0,a.kt)("p",null,"Helper object to handle the postproduction effects applied."),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/navigation/PostproductionRenderer/index.ts#L11"},"src/navigation/PostproductionRenderer/index.ts:11")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"Disposable.dispose"),"."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#dispose"},"dispose")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/navigation/PostproductionRenderer/index.ts#L41"},"src/navigation/PostproductionRenderer/index.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"get"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"Component.get")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WebGLRenderer")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#get"},"get")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L75"},"src/core/SimpleRenderer/index.ts:75")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsize"},"getSize"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSize"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#getsize"},"Resizeable.getSize"),"."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#getsize"},"getSize")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L106"},"src/core/SimpleRenderer/index.ts:106")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasui"},"hasUI"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,a.kt)("p",null,"Whether is component implements any kind of ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"this is UI"),(0,a.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#hasui"},"hasUI")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,"this is Configurable<any",">"),(0,a.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#isconfigurable"},"isConfigurable")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,"this is Disposable"),(0,a.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#isdisposeable"},"isDisposeable")),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishideable"},"isHideable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,"this is Hideable"),(0,a.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#ishideable"},"isHideable")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,"this is Resizeable"),(0,a.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#isresizeable"},"isResizeable")),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,"this is Updateable"),(0,a.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#isupdateable"},"isUpdateable")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resize"},"resize"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"resize"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"size?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable#resize"},"Resizeable.resize"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"size?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector2"))))),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#resize"},"resize")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L114"},"src/core/SimpleRenderer/index.ts:114")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"toggleplane"},"togglePlane"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"togglePlane"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"active"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plane"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"isLocal?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Adds or removes a\n",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes"},"clipping plane"),"\nto the renderer."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"active")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"plane")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Plane"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"isLocal?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#toggleplane"},"togglePlane")),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L48"},"src/base-types/base-renderer.ts:48")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"update"},"update"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"update"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#update"},"Updateable.update")),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#update"},"update")),(0,a.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/navigation/PostproductionRenderer/index.ts#L25"},"src/navigation/PostproductionRenderer/index.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updateclippingplanes"},"updateClippingPlanes"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"updateClippingPlanes"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,"Forces the update of the clipping planes and all components that depend\non them that are subscribed to ",(0,a.kt)("inlineCode",{parentName:"p"},"onClippingPlanesUpdated"),"."),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer"},"SimpleRenderer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleRenderer#updateclippingplanes"},"updateClippingPlanes")),(0,a.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L39"},"src/base-types/base-renderer.ts:39")))}h.isMDXComponent=!0}}]);