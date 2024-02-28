"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"Tutorials/FragmentIfcLoader",id:"Tutorials/FragmentIfcLoader",title:"FragmentIfcLoader",description:"\ud83c\udfe0\ud83d\udc49\ud83e\udd16 From IFC to fragment in 1 minute",source:"@site/docs/Tutorials/FragmentIfcLoader.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentIfcLoader",permalink:"/Tutorials/FragmentIfcLoader",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentHighlighter",permalink:"/Tutorials/FragmentHighlighter"},next:{title:"FragmentManager",permalink:"/Tutorials/FragmentManager"}},s={},c=[{value:"\ud83c\udfe0\ud83d\udc49\ud83e\udd16 From IFC to fragment in 1 minute",id:"-from-ifc-to-fragment-in-1-minute",level:3},{value:"\ud83d\udd2d\ud83d\udd27 Calibrating the converter",id:"-calibrating-the-converter",level:3},{value:"\ud83d\ude97\ud83d\udd25 Loading the IFC",id:"-loading-the-ifc",level:3},{value:"\ud83c\udf81 Exporting the result",id:"-exporting-the-result",level:3},{value:"\ud83e\udde0\ud83e\uddfc Cleaning memory",id:"-cleaning-memory",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"-from-ifc-to-fragment-in-1-minute"},"\ud83c\udfe0\ud83d\udc49\ud83e\udd16 From IFC to fragment in 1 minute"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Fragments are great: they are lightweight, they are fast and we\nhave tons of tools to work with them. But fragments are not used\noutside our libraries. So how can we convert an IFC file to fragments?\nEasy: with the ",(0,o.kt)("inlineCode",{parentName:"p"},"FragmentIfcLoader"),"! Let's start by creating it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let fragments = new OBC.FragmentManager(components);\nlet fragmentIfcLoader = new OBC.FragmentIfcLoader(components);\n")),(0,o.kt)("admonition",{title:"Why not just IFC?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"IFC is nice because it lets us exchange data with many tools in the\nAECO industry. But it also has some limitations. In a nutshell,\ndata coming from IFC needs to be processed and converted to triangles\nto be able to draw it in 3D, and that requires processing power\nand time! That's why we convert it to fragments to display it.\nOnce you have the fragments, you can store them and load them\ndirectly the next time your user tries to load that IFC: it will\nload 10 times faster!")),(0,o.kt)("p",null,"Now, we will start using the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," the ifc loader has.\nTo do that, we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Toolbar")," and add it to our app. This\nbutton will give you all the features you need to load IFC files!\nDon't worry, we'll also do this programmatically in a moment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mainToolbar = new OBC.Toolbar(components, {name: 'Main Toolbar', position: 'bottom'});\ncomponents.ui.addToolbar(mainToolbar);\nconst ifcButton = fragmentIfcLoader.uiElement.get(\"main\");\nmainToolbar.addChild(ifcButton);\n")),(0,o.kt)("h3",{id:"-calibrating-the-converter"},"\ud83d\udd2d\ud83d\udd27 Calibrating the converter"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, we need to configure the path of the WASM files. What's WASM?\nIt's a technology that lets us run C++ on the browser, which means\nthat we can load IFCs super fast! These files are the compilation of\nour ",(0,o.kt)("inlineCode",{parentName:"p"},"web-ifc")," library. You can find them in the github repo and in NPM.\nThese files need to be available to our app, so you have 2 options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download them and serve them statically."),(0,o.kt)("li",{parentName:"ul"},"Get them from a remote server.\nThe easiest way is getting them from unpkg, and the cool thing is that\nyou don't need to do it manually! It can be done directly by the tool\njust by writing the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await fragmentIfcLoader.setup()\n/* If you want to the path to unpkg manually, then you can skip the line \nabove and set them manually as below:\nfragmentIfcLoader.settings.wasm = {\npath: "https://unpkg.com/web-ifc@0.0.50/",\nabsolute: true\n} */\n')),(0,o.kt)("p",null,"Awesome! Optionally, we can exclude categories that we don't want\nto convert to fragments like very easily:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const excludedCats = [\nWEBIFC.IFCTENDONANCHOR,\nWEBIFC.IFCREINFORCINGBAR,\nWEBIFC.IFCREINFORCINGELEMENT,\n];\nfor (const cat of excludedCats) {\nfragmentIfcLoader.settings.excludedCategories.add(cat);\n}\n")),(0,o.kt)("p",null,"We can further configure the conversion using the ",(0,o.kt)("inlineCode",{parentName:"p"},"webIfc")," object.\nIn this example, we will make the IFC model go to the origin of\nthe scene (don't worry, this supports model federation) and\noptimize the profiles geometry so that it generates very\nefficient geometry for certain geometries (e.g. HVAC):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;\nfragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;\n")),(0,o.kt)("h3",{id:"-loading-the-ifc"},"\ud83d\ude97\ud83d\udd25 Loading the IFC"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next, let's define a function to load the IFC programmatically.\nWe have hardcoded the path to one of our IFC files, but feel free\nto do this with any of your own files!"),(0,o.kt)("admonition",{title:"Opening local IFCs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that the browser can't access the file of your\ncomputer directly, so you will need to use the Open File API to\nopen local files.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function loadIfcAsFragments() {\nconst file = await fetch('../../../resources/small.ifc');\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = await fragmentIfcLoader.load(buffer, \"example\");\nscene.add(model);\n}\n")),(0,o.kt)("h3",{id:"-exporting-the-result"},"\ud83c\udf81 Exporting the result"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Once you have your precious fragments, you might want to save them\nso that you don't need to open this IFC file each time your user\ngets into your app. Instead, the next time you can load the\nfragments directly. Defining a function to export fragments\nis as easy as this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function exportFragments() {\nif (!fragments.groups.length) return;\nconst group = fragments.groups[0];\nconst data = fragments.export(group);\nconst blob = new Blob([data]);\nconst fragmentFile = new File([blob], 'small.frag');\nconst files = [];\nfiles.push(fragmentFile);\nconst properties = group.getLocalProperties();\nif (properties) {\nfiles.push(new File([JSON.stringify(properties)], 'small.json'));\n}\nconst result = await downloadZip(files).blob();\nresult.name = 'example';\ndownload(result);\n}\n")),(0,o.kt)("p",null,"Now, this is how the download function looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function download(file) {\nconst link = document.createElement('a');\nlink.href = URL.createObjectURL(file);\nlink.download = file.name;\ndocument.body.appendChild(link);\nlink.click();\nlink.remove();\n}\n")),(0,o.kt)("h3",{id:"-cleaning-memory"},"\ud83e\udde0\ud83e\uddfc Cleaning memory"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, just like in the ",(0,o.kt)("inlineCode",{parentName:"p"},"FragmentManager")," tutorial, you will need\nto dispose the memory if your user wants to reset the state of the\nscene, especially if you are using Single Page Application\ntechnologies like React, Angular, Vue, etc. To do that, you\ncan simply call the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispose")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function disposeFragments() {\nfragments.dispose();\n}\n")),(0,o.kt)("p",null,"That's it! Congrats, now you can load IFC files into your app,\ngenerate the 3D geometry and property data for them and navigate\nthem in 3D. In other tutorials, you'll find tons of tools to\nwork with them and create amazing BIM apps! See you there \ud83d\udcaa"),(0,o.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/fragments/FragmentIfcLoader/index.html"}))}p.isMDXComponent=!0}}]);