"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="Getting started",p={unversionedId:"components/getting-started",id:"components/getting-started",title:"Getting started",description:"Component ABC",source:"@site/docs/components/getting-started.md",sourceDirName:"components",slug:"/components/getting-started",permalink:"/components/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/intro"},next:{title:"Creating new components",permalink:"/components/creating-components"}},c={},m=[{value:"Component ABC",id:"component-abc",level:2},{value:"Try them!",id:"try-them",level:2},{value:"Tools",id:"tools",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Testability",id:"testability",level:2},{value:"Unit tests",id:"unit-tests",level:4},{value:"Community tests",id:"community-tests",level:4}],u={toc:m},h="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"component-abc"},"Component ABC"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Components")," are the building blocks of all our libraries. In short, a component is a bunch of tested code that has a\nspecific set of features and can be used through a documented API. Components can do anything: viewing a 3D scene,\nloading an IFC, exporting floor plans, and even 3D modelling."),(0,i.kt)("admonition",{title:"Why components?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Our goal is to allow everyone to create BIM software. But that's not enough; creating a BIM software is no easy task, especially when doing it alone (as a company or individual). "),(0,i.kt)("p",{parentName:"admonition"},"Wouldn't it be nice if all the software that we develop spoke the same language? That way, we could all share, buy and sell it to solve each other's problem, creating a decentralised ecosystem. That's exactly what ",(0,i.kt)("strong",{parentName:"p"},"Components")," are: a very basic set of rules that allows everyone to build their own tools on top of the same foundations, so that everything is compatible.")),(0,i.kt)("p",null,"The cool thing about components is that they are extensible. We provide a wide set of components that cover the basic features of any BIM app, but buildings are complex and there are many use cases. Using our technology as a basis, you'll be able to create your own components in no time. We also cover this in this documentation. \ud83d\ude09"),(0,i.kt)("p",null,"But first, let's get our feet wet with the basics: start using components in one of your projects!"),(0,i.kt)("h2",{id:"try-them"},"Try them!"),(0,i.kt)("p",null,"We have many libraries of components. The reason is that some of those components are big, and having everything in a single repository would be a mess! However, the main one is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components"},"this one"),". You can import it in your project using ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," or any other package manager of your choice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i openbim-components\n")),(0,i.kt)("p",null,"Most of our libraries are based on ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/"},"Three.js"),", so you'll also need to import it. Make sure it's the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/package.json"},"same version")," as the one used by openbim-components!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i three\n")),(0,i.kt)("p",null,"Finally, you also need to install some peer dependencies. These are other libraries we made and didn't include as regular dependencies to enable more flexible bundling scenarios. Again, make sure it's the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/package.json"},"same version")," as the one used by openbim-components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i bim-fragment\nnpm i web-ifc\n")),(0,i.kt)("p",null,"That's it! Now you are ready to start using components. But where to start? Here you have a nice tutorial to make your first steps and build a 3D app that looks like this in less than 5 minutes:"),(0,i.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/core/SimpleScene/index.html"}),(0,i.kt)("p",null,"Cool, right? But of course, as you can imagine, there's a long way between this simple app and a full-fledged BIM application. If you need some guidance in your journey to discover all the components that we offer, check out the ",(0,i.kt)("a",{parentName:"p",href:"/components/tutorial-paths"},"tutorial paths"),". If you want to know more about components, keep reading! \ud83d\udc47"),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("p",null,"Components are great, and soon you will learn how to use the ones in this library and create your own components. However, BIM applications are complex, and the components have several limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cloud-native behavior"),": we want to democratize BIM software, and for that it is imperative that software can be easily shared between applications through the cloud.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Globally availability"),": BIM applications have many parts, and in many occasions we will need to access logic from several places in our app easily and in a decoupled manner.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lifecycle management"),": 3D applications need to be able to update their parts at every frame. In addition, Three.js applications need to manage memory to ensure that we don't have memory leaks, especially when using technologies like React, Angular, etc."))),(0,i.kt)("p",null,"For this reason we have created a special type of component that is capable of all this and more: the ",(0,i.kt)("strong",{parentName:"p"},"Tools"),". Don't worry, in the tutorials of these docs you will learn how to use the ",(0,i.kt)("a",{parentName:"p",href:"/Tutorials/ToolsComponent"},"tools provided by the library")," and how to ",(0,i.kt)("a",{parentName:"p",href:"/components/creating-components"},"create your own tools")," and share them through That Open Platform."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"You might be wondering where you can use these components. In short, anywhere that runs JavaScript! You can use them on vanilla web apps, on any library/framework (Vue, React, Angular, Svelte, etc). Most of them are also compatible with Node.js (for backend apps), React Native (for mobile apps) and Electron (for desktop apps)."),(0,i.kt)("admonition",{title:"What about types?",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"We write all our code in TypeScript and document it with TSDoc. That means that our code is natively type-safe and that you'll get the same documentation that you'll find in the API section of these docs.")),(0,i.kt)("h2",{id:"testability"},"Testability"),(0,i.kt)("h4",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"All our components are guaranteed to work while using their APIs directly or extending them, and our testing system guarantees that. All the code of all our libraries is unit-tested using AI, Jest, Typescript and human beings \ud83d\ude42. You can check it for each repository in real time looking at the badge:"),(0,i.kt)("img",{src:"https://github.com/ThatOpen/engine_components/actions/workflows/tests.yml/badge.svg"}),(0,i.kt)("p",null,"Regarding the coverage, each component in our repositories is contained in a folder that follows the following structure:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.ts"),": the entry point for the logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.d.ts"),": the typed tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.html"),": a tutorial app showing how to use it.")),(0,i.kt)("p",null,"Following this structure, it's easy to check that all the components in the library are fully tested."),(0,i.kt)("h4",{id:"community-tests"},"Community tests"),(0,i.kt)("p",null,"All the 3D apps that you see in these docs are not hardcoded: they are automatically deployed from the latest version of the code of our repositories and imported here. Any change in the repositories will automatically show up here."),(0,i.kt)("p",null,"Each component has a minimal, self-contained tutorial app exposing all its features. That means that each person looking at a tutorial of a specific component and trying it in the 3D app is actually testing that component. Having thousands of users navigating through these docs, if anything breaks, we'll know it right away!"))}d.isMDXComponent=!0}}]);