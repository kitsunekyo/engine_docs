"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5361],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var m=2;m<i;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(7462),a=(t(7294),t(3905));const i={},r=void 0,s={unversionedId:"Tutorials/LengthMeasurement",id:"Tutorials/LengthMeasurement",title:"LengthMeasurement",description:"\ud83d\udccf Dimensions Tool",source:"@site/docs/Tutorials/LengthMeasurement.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/LengthMeasurement",permalink:"/Tutorials/LengthMeasurement",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcPropertiesProcessor",permalink:"/Tutorials/IfcPropertiesProcessor"},next:{title:"MaterialManager",permalink:"/Tutorials/MaterialManager"}},l={},m=[{value:"\ud83d\udccf Dimensions Tool",id:"-dimensions-tool",level:3},{value:"\ud83c\udfb2 Creating a Cube Mesh",id:"-creating-a-cube-mesh",level:3},{value:"\ud83d\udee0\ufe0f Creating Dimension Tool",id:"\ufe0f-creating-dimension-tool",level:3},{value:"\ud83d\uddb1\ufe0f Managing Events",id:"\ufe0f-managing-events",level:3},{value:"\u270d\ufe0f Creating the Dimensions",id:"\ufe0f-creating-the-dimensions",level:4},{value:"\ud83e\uddf9 Deleting the Dimensions",id:"-deleting-the-dimensions",level:4},{value:"\u23cf\ufe0f Creating a Toolbar for the Dimensions",id:"\ufe0f-creating-a-toolbar-for-the-dimensions",level:3},{value:"\ud83d\udd8c\ufe0f Adding Styles",id:"\ufe0f-adding-styles",level:3}],p={toc:m},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-dimensions-tool"},"\ud83d\udccf Dimensions Tool"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"At times, you may need to compute the dimensions of an object or measure the distance between two elements.\nElements must be precisely aligned when working on complex models.\nDimension Tool allows you to perform measurements effortlessly."),(0,a.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,a.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,a.kt)("p",null,"This tutorial will show you how to add Dimension Tool to your projects,\nwhich can be used to acquire accurate dimensions for any 3D Object.\ud83d\udd2d"),(0,a.kt)("h3",{id:"-creating-a-cube-mesh"},"\ud83c\udfb2 Creating a Cube Mesh"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"For this tutorial we will use a Cube, you can add any geometry as per your preference.\nWe will create a ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry"},"Cube"),"\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"3x3x3")," dimensions and use red color for the material."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cubeMaterial = new THREE.MeshStandardMaterial({color: '#6528D7'});\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(0, 1.5, 0)\n")),(0,a.kt)("p",null,"Now, we will add the Cube to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Scene"),". We must also add the ",(0,a.kt)("strong",{parentName:"p"},"cube")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"components.meshes"),",\nwhich is simply an array of all the meshes in the Scene.\ud83d\uddc4\ufe0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"scene.add(cube);\ncomponents.meshes.push(cube);\n")),(0,a.kt)("admonition",{title:"Collection of Meshes",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udce6 ",(0,a.kt)("strong",{parentName:"p"},"Components.meshes")," keeps all your meshes including IFC Models, Fragments in\none place.")),(0,a.kt)("h3",{id:"\ufe0f-creating-dimension-tool"},"\ud83d\udee0\ufe0f Creating Dimension Tool"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"A lot of logic is usually needed to compute dimensions for any item, beginning with ray casting,\nfinding the vertices to snap to, and rendering the UI for every line element.\ud83d\ude44\nThis may appear to be a lot of effort, but we are handling all the heavy lifting for you,\nand you only need to write a few lines for creating the Dimension Tool.\ud83d\udcaa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const dimensions = new OBC.LengthMeasurement(components);\n")),(0,a.kt)("p",null,"We will build dimensions by supplying the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," to ",(0,a.kt)("strong",{parentName:"p"},"OBC.SimpleDimensions"),"."),(0,a.kt)("admonition",{title:"DIMENSIONS AND UI",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Read the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleDimensions"},"Simple Dimensions"))," API for more on this.\nThe Simple Dimensions API provides you with a compact UI as well to display the measurements.")),(0,a.kt)("p",null,"\ud83c\udfa8 ",(0,a.kt)("strong",{parentName:"p"},"SimpleDimensions")," has several properties that help you to customize the behaviour of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Line Element"),".\nOne such property which you can use is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"dimensions.color"))," which modifies the color of the Line Element.\nNow, let's enable dimensions and tell them to be snapped at a distance of one unit.\n",(0,a.kt)("strong",{parentName:"p"},"snapDistance")," helps in attaching the tooltip temporarily at regular intervals,\nmaking it easier to interact with items.\ud83d\udccd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"dimensions.enabled = true;\ndimensions.snapDistance = 1;\n")),(0,a.kt)("h3",{id:"\ufe0f-managing-events"},"\ud83d\uddb1\ufe0f Managing Events"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You can use the Dimension Tool to construct several dimension lines. Let's see how you handle them."),(0,a.kt)("h4",{id:"\ufe0f-creating-the-dimensions"},"\u270d\ufe0f Creating the Dimensions"),(0,a.kt)("p",null,"Now that we've generated the dimensions object, we need to attach the line tooltip to a vertex of the 3D object.\nWe'll use the double click event to invoke ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"dimensions.create()")),".\nWhen this event occurs, a line element is generated,\nand the distance is calculated in real-time inside the label associated with that line.\ud83c\udff7\ufe0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"container.ondblclick = () => dimensions.create();\n")),(0,a.kt)("h4",{id:"-deleting-the-dimensions"},"\ud83e\uddf9 Deleting the Dimensions"),(0,a.kt)("p",null,"Now that we know how to make multiple dimension lines, we must also know how to delete them when necessary.\nDimensions can be removed using ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions.delete()"),".\n",(0,a.kt)("strong",{parentName:"p"},"dimensions.delete()")," deletes the dimension on which your mouse pointer is now located."),(0,a.kt)("admonition",{title:"Deleting all the Dimensions",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u274e If you want to safely delete all the ",(0,a.kt)("strong",{parentName:"p"},"dimensions")," that were created you can simply call\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"dimensions.deleteAll()")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.onkeydown = (event) => {\nif (event.code === 'Delete' || event.code === 'Backspace') {\ndimensions.delete();\n}\n}\n")),(0,a.kt)("h3",{id:"\ufe0f-creating-a-toolbar-for-the-dimensions"},"\u23cf\ufe0f Creating a Toolbar for the Dimensions"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll make a ",(0,a.kt)("strong",{parentName:"p"},"Toolbar Component")," and set it at the bottom.\nIn addition, we will have a button that allows you to toggle the dimension tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mainToolbar = new OBC.Toolbar(components, { name: 'Main Toolbar', position: 'bottom' });\nmainToolbar.addChild(dimensions.uiElement.get(\"main\"));\ncomponents.ui.addToolbar(mainToolbar);\n")),(0,a.kt)("p",null,"\ud83c\udf9b\ufe0f Check ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/Tutorials/UIManager"},"Toolbar and UIManager"))," tutorial if you have any doubts!"),(0,a.kt)("h3",{id:"\ufe0f-adding-styles"},"\ud83d\udd8c\ufe0f Adding Styles"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Few final things, we need to add styles for the ",(0,a.kt)("inlineCode",{parentName:"p"},"labels")," which display the measurement information."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifcjs-dimension-label"))," - The label which is used to show the metric value after both the tooltips are attached."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifcjs-dimension-label:hover"))," - Changing the styling when someone hovers on the dimension label."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifcjs-dimension-preview"))," - The label which shows the measurement when the tooltip is not yet attached.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="style"',title:'"style"'},".ifcjs-dimension-label {\nbackground-color: black;\nfont-family: sans-serif;\ncolor: white;\npadding: 8px;\nborder-radius: 8px;\npointer-events: all;\ntransition: background-color 200ms ease-in-out;\n}\n.ifcjs-dimension-label:hover {\nbackground-color: grey;\n}\n.ifcjs-dimension-preview {\nbackground-color: #ffffff;\nwidth: 2rem;\nheight: 2rem;\nopacity: 0.3;\npadding: 8px;\nborder-radius: 100%;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial! Now you can measure any BIM Model or any 3D Object easily using\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleDimensions"},"Simple Dimension Component"))," \ud83d\udcd0\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/measurement/LengthMeasurement/index.html"}))}d.isMDXComponent=!0}}]);