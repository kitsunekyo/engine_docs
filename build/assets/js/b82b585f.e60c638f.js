"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||p;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,r=new Array(p);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<p;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=n(3366),p=(n(7294),n(3905)),r=["components"],o={id:"openbim_components.SimpleCamera",title:"Class: SimpleCamera",sidebar_label:"SimpleCamera",custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/openbim_components.SimpleCamera",id:"api/classes/openbim_components.SimpleCamera",title:"Class: SimpleCamera",description:"openbim-components.SimpleCamera",source:"@site/docs/api/classes/openbim_components.SimpleCamera.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.SimpleCamera",permalink:"/api/classes/openbim_components.SimpleCamera",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.SimpleCamera",title:"Class: SimpleCamera",sidebar_label:"SimpleCamera",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Simple2DScene",permalink:"/api/classes/openbim_components.Simple2DScene"},next:{title:"SimpleClipper",permalink:"/api/classes/openbim_components.SimpleClipper"}},m={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"activeCamera",id:"activecamera",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"controls",id:"controls",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Accessors",id:"accessors",level:2},{value:"enabled",id:"enabled",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"updateAspect",id:"updateaspect",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-16",level:4}],c={toc:d},u="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,p.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".SimpleCamera"),(0,p.kt)("p",null,"A basic camera that uses\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yomotsu/camera-controls"},"yomotsu's cameracontrols")," to\neasily control the camera in 2D and 3D. Check out it's API to find out\nwhat features it offers."),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,p.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"THREE.PerspectiveCamera")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"THREE.OrthographicCamera"),">"),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"SimpleCamera"))),(0,p.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.OrthoPerspectiveCamera"},(0,p.kt)("inlineCode",{parentName:"a"},"OrthoPerspectiveCamera"))))),(0,p.kt)("h2",{id:"implements"},"Implements"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Updateable"},(0,p.kt)("inlineCode",{parentName:"a"},"Updateable"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,p.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"activecamera"},"activeCamera"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"activeCamera"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"PerspectiveCamera")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"OrthographicCamera")),(0,p.kt)("p",null,"The camera that is being used now according to the current ",(0,p.kt)("a",{parentName:"p",href:"/api/modules/openbim_components#cameraprojection"},"CameraProjection"),"."),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L48"},"src/core/SimpleCamera/index.ts:48")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"controls"},"controls"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"controls"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"CameraControls")),(0,p.kt)("p",null,"The object that controls the camera. An instance of\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yomotsu/camera-controls"},"yomotsu's cameracontrols"),".\nTransforming the camera directly will have no effect: you need to use this\nobject to move, rotate, look at objects, etc."),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L33"},"src/core/SimpleCamera/index.ts:33")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"onafterupdate"},"onAfterUpdate"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"onAfterUpdate"),": ",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,p.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleCamera"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleCamera")),">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onafterupdate"},"Updateable.onAfterUpdate")),(0,p.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),".",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onafterupdate"},"onAfterUpdate")),(0,p.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L20"},"src/core/SimpleCamera/index.ts:20")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"onbeforeupdate"},"onBeforeUpdate"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"onBeforeUpdate"),": ",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,p.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.SimpleCamera"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleCamera")),">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onbeforeupdate"},"Updateable.onBeforeUpdate")),(0,p.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),".",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onbeforeupdate"},"onBeforeUpdate")),(0,p.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L17"},"src/core/SimpleCamera/index.ts:17")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,p.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,p.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"onDisposed")),(0,p.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L25"},"src/core/SimpleCamera/index.ts:25")),(0,p.kt)("h2",{id:"accessors"},"Accessors"),(0,p.kt)("h3",{id:"enabled"},"enabled"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"get")," ",(0,p.kt)("strong",{parentName:"p"},"enabled"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,p.kt)("h4",{id:"returns"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"overrides"},"Overrides"),(0,p.kt)("p",null,"Component.enabled"),(0,p.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L36"},"src/core/SimpleCamera/index.ts:36")),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"set")," ",(0,p.kt)("strong",{parentName:"p"},"enabled"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"enabled"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,p.kt)("h4",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"enabled")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,p.kt)("h4",{id:"returns-1"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"overrides-1"},"Overrides"),(0,p.kt)("p",null,"Component.enabled"),(0,p.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L41"},"src/core/SimpleCamera/index.ts:41")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"dispose"},"dispose"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"Disposable.dispose")),(0,p.kt)("h4",{id:"returns-2"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"dispose")),(0,p.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L68"},"src/core/SimpleCamera/index.ts:68")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"PerspectiveCamera")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"OrthographicCamera")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"Component.get")),(0,p.kt)("h4",{id:"returns-3"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"PerspectiveCamera")," ","|"," ",(0,p.kt)("inlineCode",{parentName:"p"},"OrthographicCamera")),(0,p.kt)("h4",{id:"overrides-2"},"Overrides"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"get")),(0,p.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L63"},"src/core/SimpleCamera/index.ts:63")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"hasui"},"hasUI"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,p.kt)("p",null,"Whether is component implements any kind of ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,p.kt)("h4",{id:"returns-4"},"Returns"),(0,p.kt)("p",null,"this is UI"),(0,p.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,p.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,p.kt)("p",null,"Whether is component is ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,p.kt)("h4",{id:"returns-5"},"Returns"),(0,p.kt)("p",null,"this is Configurable<any",">"),(0,p.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,p.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,p.kt)("p",null,"Whether is component is ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,p.kt)("h4",{id:"returns-6"},"Returns"),(0,p.kt)("p",null,"this is Disposable"),(0,p.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,p.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"ishideable"},"isHideable"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,p.kt)("p",null,"Whether is component is ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,p.kt)("h4",{id:"returns-7"},"Returns"),(0,p.kt)("p",null,"this is Hideable"),(0,p.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,p.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,p.kt)("p",null,"Whether is component is ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,p.kt)("h4",{id:"returns-8"},"Returns"),(0,p.kt)("p",null,"this is Resizeable"),(0,p.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,p.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,p.kt)("p",null,"Whether is component is ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,p.kt)("h4",{id:"returns-9"},"Returns"),(0,p.kt)("p",null,"this is Updateable"),(0,p.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,p.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"update"},"update"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"update"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"_delta"),"): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#update"},"Updateable.update")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"_delta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"number"))))),(0,p.kt)("h4",{id:"returns-10"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),".",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#update"},"update")),(0,p.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L81"},"src/core/SimpleCamera/index.ts:81")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"updateaspect"},"updateAspect"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"updateAspect"),"(): ",(0,p.kt)("inlineCode",{parentName:"p"},"void")),(0,p.kt)("p",null,"Updates the aspect of the camera to match the size of the\n",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Components#renderer"},"Components.renderer"),"."),(0,p.kt)("h4",{id:"returns-11"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleCamera/index.ts#L93"},"src/core/SimpleCamera/index.ts:93")))}k.isMDXComponent=!0}}]);