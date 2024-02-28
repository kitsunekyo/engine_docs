"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l=void 0,o={unversionedId:"Tutorials/EdgesClipper",id:"Tutorials/EdgesClipper",title:"EdgesClipper",description:"\u2b55\ufe0f Aesthetic Clipping Edges",source:"@site/docs/Tutorials/EdgesClipper.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/EdgesClipper",permalink:"/Tutorials/EdgesClipper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AreaMeasurement",permalink:"/Tutorials/AreaMeasurement"},next:{title:"FragmentBoundingBox",permalink:"/Tutorials/FragmentBoundingBox"}},s={},p=[{value:"\u2b55\ufe0f Aesthetic Clipping Edges",id:"\ufe0f-aesthetic-clipping-edges",level:3},{value:"\ud83e\udde9 Adding Objects to Scene",id:"-adding-objects-to-scene",level:3},{value:"\u2694\ufe0f Slicing Some Cubes",id:"\ufe0f-slicing-some-cubes",level:3},{value:"\ud83d\udd8c\ufe0f Creating Fine Edges",id:"\ufe0f-creating-fine-edges",level:3},{value:"\ud83d\udcab Using Line Material",id:"-using-line-material",level:4},{value:"\ud83e\udd1d Performing Clipping Events",id:"-performing-clipping-events",level:3},{value:"\ud83e\uddf9 Deleting the Clipping Planes",id:"-deleting-the-clipping-planes",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\ufe0f-aesthetic-clipping-edges"},"\u2b55\ufe0f Aesthetic Clipping Edges"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You can build whole BIM application using Components.\ud83d\udcaa\nOne such essential component is ",(0,i.kt)("strong",{parentName:"p"},"Edges Clipper")," which helps you to add Clipping Planes along\nwith beautiful yet functional edges.\ud83d\udd8d\ufe0f"),(0,i.kt)("admonition",{title:"Advanced but Simple to use",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u26a1\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Simple Clipper")," and ",(0,i.kt)("strong",{parentName:"p"},"Edges Clipper")," are similar, but ",(0,i.kt)("inlineCode",{parentName:"p"},"Edges Clipper")," offers more advanced options.\nIf you want to learn more about ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/Tutorials/SimpleClipper"},"Simple Clipper")),", visit the tutorial.")),(0,i.kt)("p",null,"In this tutorial, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"EdgesClipper")," to slice two distinct Cubes that each have a unique set of edge effects.\nWith the help of this tutorial, you can quickly add ",(0,i.kt)("strong",{parentName:"p"},"Clipping Planes")," and ",(0,i.kt)("strong",{parentName:"p"},"Configurable Edges")," to your project.\ud83d\ude80"),(0,i.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,i.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,i.kt)("h3",{id:"-adding-objects-to-scene"},"\ud83e\udde9 Adding Objects to Scene"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's start by adding two Cubes, we will create a ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry"},"Box Geometry")," and use it for both Meshes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cubeMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(-2, 1.5, 0);\nscene.add(cube);\ncomponents.meshes.push(cube);\nconst cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube2.position.set(2, 1.5, 0);\nscene.add(cube2);\ncomponents.meshes.push(cube2);\n")),(0,i.kt)("admonition",{title:"Storing Components",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83e\uddf0 After adding cubes to the scene, we must also add them to ",(0,i.kt)("inlineCode",{parentName:"p"},"components.meshes"),",\nwhich is just an array of all the meshes in the scene.\ud83d\uddc4\ufe0f")),(0,i.kt)("h3",{id:"\ufe0f-slicing-some-cubes"},"\u2694\ufe0f Slicing Some Cubes"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that the setup is complete. Let's get started with the interesting part!\nWe will create ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../api/classes/components.EdgesClipper"},"Edges Clipper"))," and pass the ",(0,i.kt)("strong",{parentName:"p"},"components")," and\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../api/classes/components.EdgesPlane"},"Edges Plane"))," to the constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const clipper = new OBC.EdgesClipper(components);\n")),(0,i.kt)("admonition",{title:"PLANE WITH EDGES and TRANSFORMATION CONTROLS",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udfe6 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../api/classes/components.EdgesPlane"},"Edges Plane"))," helps us in adding Clipping Planes to the Clipper Component.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"clipper.enabled = true;\n")),(0,i.kt)("p",null,"When we set ",(0,i.kt)("inlineCode",{parentName:"p"},"clipper.enabled = true"),", we will make the clipper functional; otherwise, clipping planes won't be formed."),(0,i.kt)("h3",{id:"\ufe0f-creating-fine-edges"},"\ud83d\udd8c\ufe0f Creating Fine Edges"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's now prepare the materials that will be visible on the cube edges.\nWe will use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://threejs.org/examples/?q=line#webgl_lines_fat"},"LineMaterial"))," for creating edges."),(0,i.kt)("h4",{id:"-using-line-material"},"\ud83d\udcab Using Line Material"),(0,i.kt)("p",null,"After creating the Line Material we will add it to the ",(0,i.kt)("strong",{parentName:"p"},"clipper"),"\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"clipper.styles.create(styleName: string, mesh: Mesh[], material: LineMaterial)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const blueFill = new THREE.MeshBasicMaterial({color: 'lightblue', side: 2});\nconst blueLine = new THREE.LineBasicMaterial({ color: 'blue' });\nconst blueOutline = new THREE.MeshBasicMaterial({color: 'blue', opacity: 0.2, side: 2, transparent: true});\nclipper.styles.create('Red lines', new Set([cube]), blueLine, blueFill, blueOutline);\nconst salmonFill = new THREE.MeshBasicMaterial({color: 'salmon', side: 2});\nconst redLine = new THREE.LineBasicMaterial({ color: 'red' });\nconst redOutline = new THREE.MeshBasicMaterial({color: 'red', opacity: 0.2, side: 2, transparent: true});\nclipper.styles.create('Blue lines', new Set([cube2]), redLine, salmonFill, redOutline);\n")),(0,i.kt)("h3",{id:"-performing-clipping-events"},"\ud83e\udd1d Performing Clipping Events"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We need a method for instantly producing a clipping plane;\nthis can be accomplished with either a ",(0,i.kt)("inlineCode",{parentName:"p"},"single click")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"double click")," of the mouse.\nFor this tutorial, we will use ",(0,i.kt)("strong",{parentName:"p"},"Double Click"),", to create a Clipper that will generate a\nplane on the 3D object's face."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"container.ondblclick = () => clipper.create();\n")),(0,i.kt)("admonition",{title:"Raycaster below the hood \ud83c\udfa9",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We use the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/Tutorials/SimpleRaycaster"},"Simple Raycaster"))," to determine if the intersection has occurred.\nThe clipper places a plane after detecting the face on which the mouse was clicked.\nHere, the ",(0,i.kt)("strong",{parentName:"p"},"EdgesClipper")," handles everything for you \ud83d\ude0e")),(0,i.kt)("h3",{id:"-deleting-the-clipping-planes"},"\ud83e\uddf9 Deleting the Clipping Planes"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that we know how to make multiple clippers, we must also know how to delete them when necessary.\nClipping Edges can be removed using ",(0,i.kt)("inlineCode",{parentName:"p"},"clipper.delete()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"clipper.delete(plane)"),", which deletes a single plane.\n",(0,i.kt)("strong",{parentName:"p"},"clipper.delete()")," deletes the plane on which your mouse pointer is now located."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.onkeydown = (event) => {\nif (event.code === 'Delete' || event.code === 'Backspace') {\nclipper.delete();\n}\n};\n")),(0,i.kt)("admonition",{title:"Delete all Clipping Planes",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u274e If you want to safely delete all the clipping edges that were created you can simply call\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"clipper.deleteAll()")))),(0,i.kt)("p",null,"Great job! \ud83c\udf89 Using the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleClipper"},"Clipper Component")),",\nyou can now effortlessly check BIM models or any other 3D objects with stunning edges.\ud83e\uddd0\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,i.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/navigation/EdgesClipper/index.html"}))}d.isMDXComponent=!0}}]);