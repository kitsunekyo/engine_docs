"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return n?o.createElement(h,s(s({ref:t},m),{},{components:n})):o.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:4},l="Clean components ABC",p={unversionedId:"components/clean-components-guide",id:"components/clean-components-guide",title:"Clean components ABC",description:"Basics",source:"@site/docs/components/clean-components-guide.md",sourceDirName:"components",slug:"/components/clean-components-guide",permalink:"/components/clean-components-guide",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Creating new components",permalink:"/components/creating-components"},next:{title:"Tutorial paths",permalink:"/components/tutorial-paths"}},m={},c=[{value:"Basics",id:"basics",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Memory management",id:"memory-management",level:2},{value:"3D objects and materials",id:"3d-objects-and-materials",level:3},{value:"UI Components / HTML elements",id:"ui-components--html-elements",level:3},{value:"Events",id:"events",level:3},{value:"Huge objects / arrays",id:"huge-objects--arrays",level:3}],u={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clean-components-abc"},"Clean components ABC"),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Always extend from the base ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as OBC from "openbim-components"\n\nexport MyComponent extends OBC.Component<any> {}\n')),(0,r.kt)("p",null,"If your component has more than one file, name the base file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts"),". If you need to include other supporting files for your component, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder in the component folder. You can call those supporting file whatever you want. This is a basic folder structure, making sure you name the component folder as the class name:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MyComponent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"src"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"supporting-file-1.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"supporting-file-2.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"index.ts"))))))),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"Avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," in property fields. If a property element is not initialized in the constructor, you can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", or create a getter to assert that it exists before getting it."),(0,r.kt)("p",null,"Always name private members with underscore."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {Component} from "src/base-types/component"\n\nexport MyComponent extends Component<any> {\n    private _privateProperty: any;\n}\n')),(0,r.kt)("p",null,"Never define private properties in the constructor. Make them explicit beforehand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/*Incorrect*/\nconstructor(private _components: Components)\n\n/*Correct*/\nprivate _components: Components\nconstructor(components: Components) {\n    this._components = components\n}\n")),(0,r.kt)("p",null,"Always make events readonly and initialize them directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"readonly onCreated = new Event<any>()\n")),(0,r.kt)("p",null,"Follow the Single Responsibility Principle."),(0,r.kt)("p",null,"Always make sure to know the interfaces you can implement when creating your component (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Creatable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Hideable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UI"),", etc), that way we keep things uniform in terms of properties and methods naming and types."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"In tutorials, try to not reference functions inside paragraphs. That allows to easily update the tutorial code without need to also update the paragraphs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"/*Incorrect*/\n/*MD\nTo add a cube to the scene, you need to call scene.add()\n*/\n\nscene.add(cube)\n\n/*Correct*/\n/*MD\nTo add a cube to the scene, just add the following code line!\n*/\n\nscene.add(cube)\n")),(0,r.kt)("h2",{id:"memory-management"},"Memory management"),(0,r.kt)("p",null,"Memory management is critical when using Open BIM components. Not paying attention to this can result in applications that consume more and more memory, up to a point in which it freeze and / or crash. This is especially relevant when using SPA (Single Page Application) libraries and frameworks, like React, Angular, Vue, etc."),(0,r.kt)("p",null,"To make sure your component doesn\u2019t cause any memory leaks and stays efficient, you need to make sure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," object like this: ",(0,r.kt)("inlineCode",{parentName:"p"},'components.tools.add("name", yourComponent)')," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"Disposable")," interface. This will force you to implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose()")," method that will be called automatically by the library when it\u2019s disposed. You can add all the clean up logic inside this method."))),(0,r.kt)("p",null,"There are some things that you want to clean up inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose")," method:"),(0,r.kt)("h3",{id:"3d-objects-and-materials"},"3D objects and materials"),(0,r.kt)("p",null,"Three.js needs to ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects"},"manually release the memory")," of the geometry and materials that are not used anymore. If your component creates any new geometry or material, you need to keep track of it and get rid of it. You can do this in 2 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the Three.js ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose")," method to get rid of all geometries and materials, including their children recursively.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"disposer")," object provided by the components library, which does everything for you."))),(0,r.kt)("p",null,"You can also make sure that the browser gets rid of this memory fast by leaving this data out of scope (e.g. emptying the array where they are after disposing it). For instance, if you are keeping track of all your meshes in an array called ",(0,r.kt)("inlineCode",{parentName:"p"},"meshes"),", you can get rid of it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as THREE from "three";\nimport * as OBC from "openbim-components";\n\nclass YourComponent extends Component<THREE.Mesh[]> implements Disposable {\n\n    // ...\n\n    private _meshes: Mesh[];\n    private _disposer = new OBC.Disposer();\n\n    dispose() {\n        // ...\n        for(const mesh of this.meshes) {\n            this._disposer.dispose(mesh);\n        }\n        this._meshes = [];\n    }\n\n}\n')),(0,r.kt)("h3",{id:"ui-components--html-elements"},"UI Components / HTML elements"),(0,r.kt)("p",null,"If your components has any kind of menu, it\u2019s probably made of UI Components or raw HTML elements. When you dispose your component, you should also get rid of them to make sure that they are not left hidden somewhere consuming memory. You can easily do this by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose")," method of the UI Components that you create.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," method of any HTML element that you create."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The only exception to this rule is if your component takes external UI components or HTML elements. In this case, it\u2019s possible that it is used by other components that are not being disposed yet. In that case, you can just de-reference it (e.g. assigning them an empty value).")),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"Events are a nice way of binding HTML elements to JS logic. A common way of doing that is using ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener"),". That\u2019s fine if all the events are bound to HTML elements that you create inside your component (and thus are destroyed when your component is disposed)."),(0,r.kt)("p",null,"But in some situations you\u2019ll need to add events to HTML elements outside your components, or even to the global ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object. In those cases, you will need to make sure that you get rid of these events when your component is disposed. You can do that with ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEventListener"),", and making sure that you keep a reference to the logic as an arrow function."),(0,r.kt)("p",null,"To make sure you don\u2019t forget about getting rid of your events, it\u2019s a good practice to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"setupEvents")," method that allows you to toggle them like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as THREE from "three";\nimport * as OBC from "openbim-components";\n\nclass YourComponent extends Component<THREE.Mesh[]> implements Disposable {\n\n    // ...\n\n    constructor() {\n        this.setupEvents(true);\n    }\n\n    dispose() {\n        // ...\n        this.setupEvents(false);\n    }\n\n    private _setupEvents(active: boolean) {\n        if(active) {\n            window.addEventListener("mousemove", this.logMessage);\n        } else {\n            window.removeEventListener("mousemove", this.logMessage);\n        }\n    }\n\n    private logMessage = () => {\n        console.log("Hey!");\n    }\n}\n')),(0,r.kt)("h3",{id:"huge-objects--arrays"},"Huge objects / arrays"),(0,r.kt)("p",null,"Some components are data-heavy. You should make sure that that memory is released when your component is disposed. To achieve that, you can just assign them an empty value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as THREE from "three";\nimport * as OBC from "openbim-components";\n\nclass YourComponent extends Component<THREE.Mesh[]> implements Disposable {\n\n    dataArray: any = [];\n    dataObject: any = {};\n\n    dispose() {\n        // ...\n        this.dataArray= [];\n        this.dataObject= {};\n    }\n}\n')))}h.isMDXComponent=!0}}]);