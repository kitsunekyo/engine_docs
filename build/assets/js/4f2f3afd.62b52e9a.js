"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3554],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=i,b=c["".concat(l,".").concat(u)]||c[u]||d[u]||p;return t?a.createElement(b,r(r({ref:n},m),{},{components:t})):a.createElement(b,r({ref:n},m))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,r=new Array(p);r[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<p;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),i=t(3366),p=(t(7294),t(3905)),r=["components"],o={id:"openbim_components.Disposable",title:"Interface: Disposable",sidebar_label:"Disposable",custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/openbim_components.Disposable",id:"api/interfaces/openbim_components.Disposable",title:"Interface: Disposable",description:"openbim-components.Disposable",source:"@site/docs/api/interfaces/openbim_components.Disposable.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/openbim_components.Disposable",permalink:"/api/interfaces/openbim_components.Disposable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.Disposable",title:"Interface: Disposable",sidebar_label:"Disposable",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Createable",permalink:"/api/interfaces/openbim_components.Createable"},next:{title:"FragmentIdMap",permalink:"/api/interfaces/openbim_components.FragmentIdMap"}},m={},c=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"dispose",id:"dispose",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:c},u="wrapper";function b(e){var n=e.components,t=(0,i.Z)(e,r);return(0,p.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".Disposable"),(0,p.kt)("p",null,"Whether this component has to be manually destroyed once you are done with\nit to prevent\n",(0,p.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects"},"memory leaks"),".\nThis also ensures that the DOM events created by that component will be\ncleaned up."),(0,p.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.Components"},(0,p.kt)("inlineCode",{parentName:"a"},"Components"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.CubeMap"},(0,p.kt)("inlineCode",{parentName:"a"},"CubeMap"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.FragmentBoundingBox"},(0,p.kt)("inlineCode",{parentName:"a"},"FragmentBoundingBox"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.FragmentManager"},(0,p.kt)("inlineCode",{parentName:"a"},"FragmentManager"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.FragmentPlans"},(0,p.kt)("inlineCode",{parentName:"a"},"FragmentPlans"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.LengthMeasurement"},(0,p.kt)("inlineCode",{parentName:"a"},"LengthMeasurement"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.MaterialManager"},(0,p.kt)("inlineCode",{parentName:"a"},"MaterialManager"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.Mouse"},(0,p.kt)("inlineCode",{parentName:"a"},"Mouse"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.ScreenCuller"},(0,p.kt)("inlineCode",{parentName:"a"},"ScreenCuller"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.Simple2DScene"},(0,p.kt)("inlineCode",{parentName:"a"},"Simple2DScene"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleCamera"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleCamera"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleClipper"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleClipper"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleGrid"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleGrid"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimplePlane"},(0,p.kt)("inlineCode",{parentName:"a"},"SimplePlane"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleRaycaster"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleRaycaster"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleRenderer"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleRenderer"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleScene"},(0,p.kt)("inlineCode",{parentName:"a"},"SimpleScene"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.ToolComponent"},(0,p.kt)("inlineCode",{parentName:"a"},"ToolComponent"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.UIManager"},(0,p.kt)("inlineCode",{parentName:"a"},"UIManager")))),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"dispose"},"dispose"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("strong",{parentName:"p"},"dispose"),": () => ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,p.kt)("p",null,"\u25b8 (): ",(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("p",null,"Destroys the object from memory to prevent a\n",(0,p.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects"},"memory leak"),"."),(0,p.kt)("h5",{id:"returns"},"Returns"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,p.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,p.kt)("h4",{id:"defined-in"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L60"},"temp/engine_components/src/base-types/base-types.ts:60")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,p.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,p.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,p.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,p.kt)("p",null,"Fired after the tool has been ",(0,p.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"()")),(0,p.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L63"},"temp/engine_components/src/base-types/base-types.ts:63")))}b.isMDXComponent=!0}}]);