"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Tutorials/OrthoPerspectiveCamera",id:"Tutorials/OrthoPerspectiveCamera",title:"OrthoPerspectiveCamera",description:"\ud83d\udcfd\ufe0f Managing Multiple Views",source:"@site/docs/Tutorials/OrthoPerspectiveCamera.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/OrthoPerspectiveCamera",permalink:"/Tutorials/OrthoPerspectiveCamera",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MiniMap",permalink:"/Tutorials/MiniMap"},next:{title:"PostproductionRenderer",permalink:"/Tutorials/PostproductionRenderer"}},l={},p=[{value:"\ud83d\udcfd\ufe0f Managing Multiple Views",id:"\ufe0f-managing-multiple-views",level:3},{value:"\ud83c\udfb2 Creating a Cube Mesh",id:"-creating-a-cube-mesh",level:3},{value:"\ud83c\udf9e\ufe0f Developing an OrthoPerspective Camera",id:"\ufe0f-developing-an-orthoperspective-camera",level:3},{value:"\ud83d\udd79\ufe0f Changing Views and Navigation",id:"\ufe0f-changing-views-and-navigation",level:3},{value:"Toggling Orthographic View and Perspective View",id:"toggling-orthographic-view-and-perspective-view",level:4},{value:"Managing Navigation Modes",id:"managing-navigation-modes",level:4}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\ufe0f-managing-multiple-views"},"\ud83d\udcfd\ufe0f Managing Multiple Views"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Perspective view adds depth and realism, which helps in creating visually compelling representations in 3D scenes.\ud83d\udee4\ufe0f\nWhile, Orthographic view is important for precise measurements and proportions.\ud83d\udcd0"),(0,r.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,r.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,r.kt)("p",null,"We'll be using an advanced camera component for this tutorial.\nOrthoPerspectiveCamera makes it simple to use Orthographic and Perspective projections."),(0,r.kt)("h3",{id:"-creating-a-cube-mesh"},"\ud83c\udfb2 Creating a Cube Mesh"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"First, let's create a simple Cube, which will render differently depending on the projection you choose.\ud83e\uddca\nWe will create a ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry"},"Cube"),"\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"3x3x3")," dimensions and use red color for the material.\ud83d\udd8d\ufe0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cubeMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(0, 1.5, 0);\n")),(0,r.kt)("p",null,"Now, we will add the Cube to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scene"),". We must also add the ",(0,r.kt)("strong",{parentName:"p"},"cube")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"components.meshes"),",\nwhich is simply an array of all the meshes in the Scene \ud83d\uddc4\ufe0f.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"components.meshes"))," acts as a store to help you manage your elements centrally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"scene.add(cube);\ncomponents.meshes.push(cube);\n")),(0,r.kt)("h3",{id:"\ufe0f-developing-an-orthoperspective-camera"},"\ud83c\udf9e\ufe0f Developing an OrthoPerspective Camera"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will create OrthoPerspectiveCamera by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," as an argument to it.\ud83d\uddc3\ufe0f\nThe OrthoPerspective Camera extends the SimpleCamera by providing you with extra controls.\nWe will then configure the camera location and update the look at target using ",(0,r.kt)("inlineCode",{parentName:"p"},"setLookAt()")," API.\ud83d\udc40"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const camera = new OBC.OrthoPerspectiveCamera(components);\ncomponents.camera = camera;\ncamera.controls.setLookAt(10, 10, 10, 0, 0, 0);\ncomponents.init();\n")),(0,r.kt)("admonition",{title:"Igniting Components!",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udd25 Whenever the components like scene, camera are created, you need to initialize the component library.\nCheck out components.init() for more info!\ud83d\udd16")),(0,r.kt)("h3",{id:"\ufe0f-changing-views-and-navigation"},"\ud83d\udd79\ufe0f Changing Views and Navigation"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, that our camera setup is done, we need to manage the camera projection on demand."),(0,r.kt)("h4",{id:"toggling-orthographic-view-and-perspective-view"},"Toggling Orthographic View and Perspective View"),(0,r.kt)("p",null,"Let's create a simple method ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"toggleProjection()"))," which toggles the Camera View using ",(0,r.kt)("inlineCode",{parentName:"p"},"camera.toggleProjection"),".\nAlternatively, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"camera.setProjection()")," and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"'Orthographic'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'Perspective'")," to manage the views.\ud83d\udca1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function toggleProjection() {\ncamera.toggleProjection();\n}\n")),(0,r.kt)("p",null,"You can also subscribe to an event for when the projection changes. For instance, let's change the grid fading mode\nwhen the projection changes. This will make the grid look good in orthographic mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"camera.projectionChanged.add(() => {\nconst projection = camera.getProjection();\ngrid.fade = projection === 'Perspective';\n});\n")),(0,r.kt)("h4",{id:"managing-navigation-modes"},"Managing Navigation Modes"),(0,r.kt)("p",null,"Along with projection, we can also manage Navigation modes using ",(0,r.kt)("strong",{parentName:"p"},"OrthoPerspective")," camera.\nTo update navigation modes, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"camera.setNavigationMode('Orbit' | 'FirstPerson' | 'Plan')")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Orbit")," - Orbit Mode helps us to easily navigate around the 3D Elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FirstPerson")," - It helps you to visualize scene from your own perspective.\nFirst Person mode is only available for Perspective Projection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Plan")," - This mode helps you to easily navigate in 2D Projections.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function setNavigationMode(navMode) {\ncamera.setNavigationMode(navMode);\n}\n")),(0,r.kt)("admonition",{title:"MORE CONTROLS, MORE POWER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83e\uddee OrthoPerspective Camera also provides you an option to adjust your camera to fit the 3D elements.\nYou can simply use fitModelToFrame(mesh)\nand provide the mesh which you want to fit to your window frame")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial!\nNow you can add Advance Camera System to your web-app in minutes using\n",(0,r.kt)("strong",{parentName:"p"},"OrthoPerspectiveCamera")," \u231a\ud83d\udcfd\ufe0f\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,r.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/navigation/OrthoPerspectiveCamera/index.html"}))}u.isMDXComponent=!0}}]);