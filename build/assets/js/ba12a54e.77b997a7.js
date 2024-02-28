"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"openbim_components.Resizeable",title:"Interface: Resizeable",sidebar_label:"Resizeable",custom_edit_url:null},o=void 0,p={unversionedId:"api/interfaces/openbim_components.Resizeable",id:"api/interfaces/openbim_components.Resizeable",title:"Interface: Resizeable",description:"openbim-components.Resizeable",source:"@site/docs/api/interfaces/openbim_components.Resizeable.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/openbim_components.Resizeable",permalink:"/api/interfaces/openbim_components.Resizeable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.Resizeable",title:"Interface: Resizeable",sidebar_label:"Resizeable",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/api/interfaces/openbim_components.Progress"},next:{title:"UI",permalink:"/api/interfaces/openbim_components.UI"}},l={},s=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"getSize",id:"getsize",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"onResize",id:"onresize",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"resize",id:"resize",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".Resizeable"),(0,a.kt)("p",null,"Whether this component can be resized. The meaning of this can vary depending\non the component: resizing a\n",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer"},"Renderer"),"\ncomponent could mean changing its resolution, whereas resizing a\n",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/objects/Mesh"},"Mesh")," would change its scale."),(0,a.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.BaseRenderer"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRenderer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.Simple2DScene"},(0,a.kt)("inlineCode",{parentName:"a"},"Simple2DScene"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleRenderer"},(0,a.kt)("inlineCode",{parentName:"a"},"SimpleRenderer")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"getsize"},"getSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"getSize"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,a.kt)("p",null,"Gets the current size of this component (e.g. the resolution of a\n",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer"},"Renderer"),"\ncomponent."),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/base-types.ts#L103"},"temp/components/src/base-types/base-types.ts:103")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onresize"},"onResize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"onResize"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2"),">"),(0,a.kt)("p",null,"Event that fires when the component has been resized."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/base-types.ts#L96"},"temp/components/src/base-types/base-types.ts:96")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resize"},"resize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"resize"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"size?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"size?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Sets size of this component (e.g. the resolution of a\n",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer"},"Renderer"),"\ncomponent."),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"size?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector2"))))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/base-types.ts#L93"},"temp/components/src/base-types/base-types.ts:93")))}d.isMDXComponent=!0}}]);