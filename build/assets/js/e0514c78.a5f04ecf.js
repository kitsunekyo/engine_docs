"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var r=i.createContext({}),l=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(r.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(r,".").concat(u)]||d[u]||c[u]||p;return t?i.createElement(f,o(o({ref:n},m),{},{components:t})):i.createElement(f,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<p;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var i=t(7462),a=(t(7294),t(3905));const p={id:"openbim_components.UIManager",title:"Class: UIManager",sidebar_label:"UIManager",custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/openbim_components.UIManager",id:"api/classes/openbim_components.UIManager",title:"Class: UIManager",description:"openbim-components.UIManager",source:"@site/docs/api/classes/openbim_components.UIManager.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.UIManager",permalink:"/api/classes/openbim_components.UIManager",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.UIManager",title:"Class: UIManager",sidebar_label:"UIManager",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"UIElement",permalink:"/api/classes/openbim_components.UIElement"},next:{title:"Configurable",permalink:"/api/interfaces/openbim_components.Configurable"}},r={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],m={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".UIManager"),(0,a.kt)("p",null,"A component that handles all UI components."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,a.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Toolbar"),"[]",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"UIManager"))))),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,a.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"onDisposed")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/ui/UIManager/index.ts#L30"},"temp/engine_components/src/ui/UIManager/index.ts:30")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"hasui"},"hasUI"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,a.kt)("p",null,"Whether is component implements any kind of ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"this is UI"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L62"},"temp/engine_components/src/base-types/component.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"this is Configurable<any",">"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L57"},"temp/engine_components/src/base-types/component.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"this is Disposable"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L35"},"temp/engine_components/src/base-types/component.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishideable"},"isHideable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"this is Hideable"),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L52"},"temp/engine_components/src/base-types/component.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,"this is Resizeable"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L40"},"temp/engine_components/src/base-types/component.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,"this is Updateable"),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L45"},"temp/engine_components/src/base-types/component.ts:45")))}c.isMDXComponent=!0}}]);