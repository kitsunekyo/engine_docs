"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={},s=void 0,i={unversionedId:"Tutorials/FragmentIfcStreamer",id:"Tutorials/FragmentIfcStreamer",title:"FragmentIfcStreamer",description:"\ud83d\udcaa Let's go BIG",source:"@site/docs/Tutorials/FragmentIfcStreamer.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentIfcStreamer",permalink:"/Tutorials/FragmentIfcStreamer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentIfcLoader",permalink:"/Tutorials/FragmentIfcLoader"},next:{title:"FragmentManager",permalink:"/Tutorials/FragmentManager"}},l={},m=[{value:"\ud83d\udcaa Let&#39;s go BIG",id:"-lets-go-big",level:3},{value:"\ud83e\udde9 Converting the IFC model to tiles",id:"-converting-the-ifc-model-to-tiles",level:3},{value:"\ud83d\udccb Streaming the properties",id:"-streaming-the-properties",level:3},{value:"\ud83e\uddf1 Assembling the data",id:"-assembling-the-data",level:3},{value:"\ud83e\uddf1 Streaming the data",id:"-streaming-the-data",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-lets-go-big"},"\ud83d\udcaa Let's go BIG"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Do you need to open huge big IFC files fast, even on more modest devices?\nIf so, you are in luck! We can open virtually any model on any device in\nseconds thanks to BIM TILES!"),(0,r.kt)("admonition",{title:"BIM tiles?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The idea behind BIM tiles is pretty simple! Instead of loading the whole BIM\nmodel at once, we just load the explicit geometries that are seen by the user.\nIt's way faster than opening the IFC directly, but for this you'll need\na backend (or to rely on the file system of the user if you are building a\ndesktop or mobile app).")),(0,r.kt)("p",null,"Let's see how to do this step by step!"),(0,r.kt)("h3",{id:"-converting-the-ifc-model-to-tiles"},"\ud83e\udde9 Converting the IFC model to tiles"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The first step is to transform the IFC model into BIM tiles. The reason why we\nhave to do this is pretty simple: geometry in IFC is implicit (e.g. a wall is\ndefined as an extrusion). This means that it needs to be computed and converted\nto explicit geometry (triangles) so that it can be displayed in 3D. Let's start\nconverting the IFC geometry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const streamer = new OBC.FragmentIfcStreamConverter(components);\nstreamer.settings.wasm = {\npath: "https://unpkg.com/web-ifc@0.0.51/",\nabsolute: true\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentIfcStreamConverter")," class takes IFC files and transform them into\ntiles. You can use events to get the data. The ",(0,r.kt)("inlineCode",{parentName:"p"},"onGeometryStreamed")," event will\ngive you the geometries bundled in a binary file, as well as an object with\ninformation about the geometries contained within this file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"streamer.onGeometryStreamed.add((geometry) => {\nconsole.log(geometry);\n});\n")),(0,r.kt)("p",null,"You can control the amount of geometries inside a file using the settings. The\nway the streaming works can't guarantee a precise number of geometries within a file,\nbut in most cases it will be quite close to the given number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"streamer.settings.minGeometrySize = 20;\n")),(0,r.kt)("p",null,"Similarly, you can get the assets data and control the number of assets per chunk like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"streamer.onAssetStreamed.add((assets) => {\nconsole.log(assets);\n});\nstreamer.settings.minAssetsSize = 1000;\n")),(0,r.kt)("p",null,"Just like when using the normal ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentIfcLoader"),", when you stream an IFC file you are\ncreating a ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentsGroup"),". Using this event, you can get it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"streamer.onIfcLoaded.add(async (groupBuffer) => {\nconsole.log(groupBuffer);\n})\n")),(0,r.kt)("p",null,"Finally, you can use this to get notified as the streaming process progresses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"streamer.onProgress.add((progress) => {\nconsole.log(progress);\n})\n")),(0,r.kt)("p",null,"With everything in place, it's time to stream the IFC file and get all the tiles!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fetchedIfc = await fetch("../../../resources/small.ifc");\nconst ifcBuffer = await fetchedIfc.arrayBuffer();\nstreamer.streamFromBuffer(new Uint8Array(ifcBuffer));\n')),(0,r.kt)("h3",{id:"-streaming-the-properties"},"\ud83d\udccb Streaming the properties"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can also stream the properties of an IFC file. Why? Because some files can have\nmillions of properties, and trying to save them naively in a normal DB is not very\nscalable/affordable. Using this system, you'll be able to store and retrieve the\ndata of models of any size without big cloud costs. We can do this conversion\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentPropsStreamConverter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const propsStreamer = new OBC.FragmentPropsStreamConverter(components);\npropsStreamer.settings.wasm = {\npath: "https://unpkg.com/web-ifc@0.0.51/",\nabsolute: true\n}\n')),(0,r.kt)("p",null,"Similarly to geometries, here you will also get data and progress notification\nusing events. In addition to properties, you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"indices"),", which is an\nindexation data of the properties to be able to use them effectively when\nstreamed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"propsStreamer.onPropertiesStreamed.add(async (props) => {\nconsole.log(props);\n})\npropsStreamer.onProgress.add(async (progress) => {\nconsole.log(progress);\n})\npropsStreamer.onIndicesStreamed.add(async (props) => {\nconsole.log(props);\n})\n")),(0,r.kt)("p",null,"Just call the ",(0,r.kt)("inlineCode",{parentName:"p"},"streamFromBuffer")," method and you are ready to go!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"propsStreamer.streamFromBuffer(new Uint8Array(ifcBuffer));\n")),(0,r.kt)("h3",{id:"-assembling-the-data"},"\ud83e\uddf1 Assembling the data"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now you are ready to start streaming your data. The first step is to create 2 JSON\nfiles so that the library can access your backend: one for the geometries and other for\nthe properties. You have examples of both JSONs ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/resources/small.ifc-processed.json"},"here"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/resources/small.ifc-processed-properties.json"},"here"),".\nThe JSON file for the geometries should look like this, and you should\nbe able to create them with the data given in the previous steps. The ",(0,r.kt)("inlineCode",{parentName:"p"},"globalDataIDFile"),"\nis expected to have a name that ends with ",(0,r.kt)("inlineCode",{parentName:"p"},"-global"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface StreamedGeometries {\nassets: {\nid: number;\ngeometries: {\ncolor: number[];\ngeometryID: number;\ntransformation: number[];\n}[];\n}[];\ngeometries: {\n[id: number]: {\nboundingBox: {[id: number]: number};\nhasHoles: boolean;\ngeometryFile: "url-to-geometry-file-in-your-backend";\n};\n};\nglobalDataFileId: "url-to-fragments-group-file-in-your-backend";\n}\n')),(0,r.kt)("p",null,"The JSON for geometries should look like this. The values in ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," and in ",(0,r.kt)("inlineCode",{parentName:"p"},"ids"),"\nare the suffix of the name of the properties file in your backend. In other words,\nthe library expects that if your globalDataFile is called ",(0,r.kt)("inlineCode",{parentName:"p"},"small.ifc-global"),", the\nproperties files will be called ",(0,r.kt)("inlineCode",{parentName:"p"},"small.ifc-properties-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"small.ifc-properties-2"),",\netc. In other words: ",(0,r.kt)("inlineCode",{parentName:"p"},"types: {1837: [1, 2], ...}, ids: {8: 1, ...}")," means that\nall the items of type ",(0,r.kt)("inlineCode",{parentName:"p"},"1837")," are in the files ",(0,r.kt)("inlineCode",{parentName:"p"},"small.ifc-properties-1")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"small.ifc-properties-2"),", and that the properties of the item with id 8 is in the\nfile ",(0,r.kt)("inlineCode",{parentName:"p"},"small.ifc-properties-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface StreamedProperties {\ntypes: {\n[typeID: number]: number[]\n};\nids: {\n[id: number]: {\nboundingBox: {[id: number]: number};\nhasHoles: boolean;\ngeometryFile: "url-to-geometry-file-in-your-backend";\n};\n};\nindexesFile: "url-to-indexes-file-in-your-backend";\n}\n')),(0,r.kt)("p",null,"Once you get both files, you are ready to start streaming!"),(0,r.kt)("h3",{id:"-streaming-the-data"},"\ud83e\uddf1 Streaming the data"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, streaming the data is quite easy once you have the JSON files.\nYou can just instantiate the loader, give it the base URL to your\nbackend and just load the models like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let loader = new OBC.FragmentStreamLoader(components);\nloader.url = "http://YOUR_BACKEND_URL";\nlet fragments = new OBC.FragmentManager(components);\nasync function loadModel(geometryURL, propertiesURL) {\nconst rawGeometryData = await fetch(geometryURL);\nconst geometryData = await rawGeometryData.json();\nlet propertiesData;\nif (propertiesURL) {\nconst rawPropertiesData = await fetch(propertiesURL);\npropertiesData = await rawPropertiesData.json();\n}\nawait loader.load(geometryData, true, propertiesData);\n}\nawait loadModel(\n"../../../resources/small.ifc-processed.json",\n"../../../resources/small.ifc-processed-properties.json"\n);\n')),(0,r.kt)("p",null,"Now, streaming works by updating the scene depending on the user's perspective\nand getting the necessary geometries from the backend. A simple way to achieve\nthis is by updating the scene each time the user stops the camera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'components.camera.controls.addEventListener("controlend", () => {\nloader.culler.needsUpdate = true;\n});\n')),(0,r.kt)("p",null,"As you can imagine, downloading the geometries from the server each time can\ntake time, especially for heavier geometries. This is why the stream loader\nautomatically caches the files locally to get them much faster. This means that\nthe loading experience the first time might be a bit slower, but then later\nit will be much better. You can control this using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCache")," property\nand clear the cache using the ",(0,r.kt)("inlineCode",{parentName:"p"},"clearCache()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"loader.useCache = true;\nawait loader.clearCache();\n")),(0,r.kt)("p",null,"You can also customize the loader through the ",(0,r.kt)("inlineCode",{parentName:"p"},"culler")," property:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Threshold determines how bit an object must be in the screen to stream it."),(0,r.kt)("li",{parentName:"ul"},"maxHiddenTime determines how long an object must be lost to remove it from the scene."),(0,r.kt)("li",{parentName:"ul"},"maxLostTime determines how long an object must be lost to remove it from memory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"loader.culler.threshold = 20;\nloader.culler.maxHiddenTime = 1000;\nloader.culler.maxLostTime = 40000;\n")),(0,r.kt)("p",null,"This is it! Now you should be able to stream your own IFC models and open them anywhere,\nno matter how big they are! \ud83d\udcaa We will keep improving and making this API more powerful\nto handle any model on any device smoothly."),(0,r.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/fragments/FragmentIfcStreamer/index.html"}))}u.isMDXComponent=!0}}]);