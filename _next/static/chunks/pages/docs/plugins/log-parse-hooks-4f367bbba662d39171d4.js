_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[75],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=o.default.useState(!1),t=(0,c.default)(e,2),a=t[0],n=t[1];return(0,r.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var c=n(a("nxTg")),o=n(a("mXGw")),r=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("RiSW")),o=n(a("mXGw")),r=n(a("9fEB")),m=a("GDok"),s=a("nZpd"),d=a("AFBu"),l=a("0oBi"),u=function(e){var t=e.children,a=(0,c.default)(e,["children"]),n=o.default.useState(!1);o.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var u=(0,l.useDarkMode)();return o.default.createElement(s.MobileMenuContext.Provider,{value:a.menuState||n},o.default.createElement(r.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,d.formatPath)(u?"favicon-dark.png":"favicon.png")})),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},o.default.createElement(m.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return c.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var c=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var c=n(a("OvAC")),o=n(a("RiSW")),r=n(a("nxTg")),m=n(a("mXGw")),s=n(a("5dyF")),d=n(a("9fEB")),l=n(a("O2/E")),u=n(a("PDtE")),i=a("/FXl"),p=a("bBV7"),b=a("nZpd"),O=a("AFBu");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){(0,c.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=m.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=x;var N=function(e){var t=e.href,a=e.children,n=m.default.useContext(x),c=(0,i.useMDXComponents)().SidebarLink,o=l.default.join(n.sidebarFileLocation,t),r=t;return n.sidebarFileLocation&&((r=o).endsWith("/index")&&(r=r.replace("/index","")),r.endsWith("/")&&(r=r.slice(0,-1))),m.default.createElement(s.default,{passHref:!0,href:(0,O.postFixHTML)(r)},m.default.createElement(c,{isActive:n.pathname.replace("/index","")===(0,O.formatPath)(r)},a))};t.Sidebar=function(t){var n=t.links,c=t.folder,s=m.default.useContext(b.MobileMenuContext),j=(0,r.default)(s,1)[0],g="/".concat(c),h=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(g),k=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?l.default.relative("/auto",a.pathname):l.default.relative("/",a.pathname),c=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return c||(c=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:c.title||"auto",pathname:(0,O.formatPath)(c.__resourcePath)}}(n),v=(0,i.useMDXComponents)(),y=v.SidebarItemWrapper,w=(v.SidebarLink,v.SidebarTitle),E=v.SidebarDivider,P=v.SidebarList,_=v.Sidebar,M=(0,o.default)(v,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return m.default.createElement(x.Provider,{value:f(f({},k),{},{sidebarFileLocation:h?g:""})},m.default.createElement(i.MDXProvider,{components:f(f({},M),{},{li:y,ul:P,a:N,p:w,hr:E})},m.default.createElement(d.default,null,m.default.createElement("title",null,k.title.replace(/\\`/g,"`"))),m.default.createElement(_,{className:(0,u.default)(!j&&"hidden","lg:block")},h?m.default.createElement(h,null):m.default.createElement(P,null,n.map((function(e){return m.default.createElement(y,{key:e.__resourcePath},m.default.createElement(N,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},D8SK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/plugins/log-parse-hooks",function(){return a("lnlL")}])},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var c=n(a("nxTg")),o=n(a("8VmE")),r=n(a("RiSW")),m=n(a("mXGw")),s=n(a("5dyF")),d=a("V5Fo"),l=a("/FXl"),u=n(a("PDtE")),i=a("nZpd"),p=a("AFBu"),b=function(e){var t=e.className,a=(0,r.default)(e,["className"]);return m.default.createElement("svg",(0,o.default)({className:(0,u.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),m.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},O=function(){var e=(0,l.useMDXComponents)().SearchInput;return m.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},m.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=m.default.useContext(i.MobileMenuContext),o=(0,c.default)(n,2),r=o[0],u=o[1],j=(0,l.useMDXComponents)(),f=j.Logo,x=j.NavBarWrapper,N=j.NavBar,g=j.NavBarItem,h=j.MobileMenuButton;return m.default.createElement(m.default.Fragment,null,m.default.createElement(x,null,m.default.createElement(N,null,a?m.default.createElement(s.default,{passHref:!0,href:"/"},m.default.createElement(f,null)):m.default.createElement(f,null),m.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},m.default.createElement(O,null),m.default.createElement(h,{open:r,setOpen:u,className:"lg:hidden"}),m.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return m.default.createElement(s.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},m.default.createElement(g,null,(0,d.titleCase)(e)))})),m.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},m.default.createElement(b,null)))))),r&&m.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return m.default.createElement(s.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},m.default.createElement(g,null,(0,d.titleCase)(e)))})),m.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank"},m.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},lnlL:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),c=a("dV/x"),o=a("mXGw"),r=a.n(o),m=a("/FXl"),s=a("pu0P"),d=a.n(s),l=(r.a.createElement,{title:"Log Parser Hooks",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/plugins/log-parse-hooks.mdx",__scans:{}}),u={frontMatter:l},i=d.a;function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(m.mdx)(i,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("p",null,"The core of ",Object(m.mdx)("inlineCode",{parentName:"p"},"auto")," is built around parsing information from the output of ",Object(m.mdx)("inlineCode",{parentName:"p"},"git log")," in your repository.\nWe take that output and iterate over it to extract information from the commits.\nThe construct that does that work is the ",Object(m.mdx)("inlineCode",{parentName:"p"},"LogParse")," class."),Object(m.mdx)("p",null,"The ",Object(m.mdx)("inlineCode",{parentName:"p"},"LogParse")," class is involved in any command that interacts with the git log.\nYou can use its hooks to attach information to the commit object (",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#parsecommit"}),"parseCommit"),") or make ",Object(m.mdx)("inlineCode",{parentName:"p"},"auto")," ignore commits entirely (",Object(m.mdx)("a",Object(n.a)({parentName:"p"},{href:"#omitcommit"}),"omitCommit"),")."),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"#oncreatelogparse"}),"onCreateLogParse")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"#parsecommit"}),"parseCommit")),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"#omitcommit"}),"omitCommit"))),Object(m.mdx)("h2",{id:"oncreatelogparse"},Object(m.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#oncreatelogparse"}),"onCreateLogParse")),Object(m.mdx)("p",null,"This is where you hook into the log parser's hooks.\nSee examples below."),Object(m.mdx)("h2",{id:"parsecommit"},Object(m.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#parsecommit"}),"parseCommit")),Object(m.mdx)("p",null,"Parse information about a commit from a commit.\nHere is where ",Object(m.mdx)("inlineCode",{parentName:"p"},"auto")," gets the PR number from the merge commits."),Object(m.mdx)("pre",{className:"language-ts"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"auto",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"onCreateLogParse"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tapPromise"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Stars'"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"logParse")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>"),"\n  logParse",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"parseCommit"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tap"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'test'"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"commit"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," bump ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"getBump"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"commit",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"subject"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," logParse",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"options"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"versionLabels"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n      commit",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"labels")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"bump",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"return")," commit",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(m.mdx)("p",null,Object(m.mdx)("em",{parentName:"p"},"Other examples:")),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},"In core:",Object(m.mdx)("ul",{parentName:"li"},Object(m.mdx)("li",{parentName:"ul"},"Find PR number from commits message"),Object(m.mdx)("li",{parentName:"ul"},"Attaches labels from pull requests"),Object(m.mdx)("li",{parentName:"ul"},"Attaches GitHub author information"))),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/conventional-commits"}),"conventional-commits")," - Parse change types from commit messages")),Object(m.mdx)("h2",{id:"omitcommit"},Object(m.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#omitcommit"}),"omitCommit")),Object(m.mdx)("p",null,"Choose to omit certain commits.\nIf you return true the commit will be omitted.\nBe sure to return nothing if you don't want the commit omitted."),Object(m.mdx)("pre",{className:"language-ts"},Object(m.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"auto",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"onCreateLogParse"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tapPromise"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'Stars'"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"changelog")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>"),"\n  changelog",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"hooks"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"omitCommit"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token method function property-access"}),"tap"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'test'"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),"commit"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token arrow operator"}),"=>")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"if")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"someTest"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"commit",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"subject"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"return")," ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(m.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(m.mdx)("p",null,Object(m.mdx)("em",{parentName:"p"},"Other examples:")),Object(m.mdx)("ul",null,Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/gradle"}),"gradle")," - Omit commits from the Gradle Release plugin"),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/maven"}),"maven")," - Omit commits from the Maven Release plugin"),Object(m.mdx)("li",{parentName:"ul"},Object(m.mdx)("a",Object(n.a)({parentName:"li"},{href:"../generated/omit-commit"}),"omit-commit")," - Omit commits from authors, labels, and more")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var c=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=c},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a("nxTg")),o=n(a("mXGw")),r=n(a("O2/E")),m=a("/FXl"),s=n(a("PDtE")),d=a("C3pV"),l=n(a("6f/q")),u=n(a("x3GE")),i=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=o.default.useState(!1),p=(0,c.default)(n,2),b=p[0],O=p[1],j=(0,m.useMDXComponents)(),f=a.__resourcePath.split("/")[0],x=(0,u.default)(),N=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return r.default.relative("./",e)})).filter((function(e){return e.startsWith(f)})).map((function(e){return x.find((function(t){return t.__resourcePath===e}))}));return o.default.createElement(l.default,{menuState:[b,O]},o.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},o.default.createElement(d.Sidebar,{links:N,folder:f}),o.default.createElement("main",{className:(0,s.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},o.default.createElement(j.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");i.test(n);){var r=n.match(i),m=(0,c.default)(r,4),s=m[1],d=m[2],l=m[3];a.push(s),a.push(o.default.createElement(e.inlineCode,null,d)),n=l}return a.push(n),o.default.createElement("div",null,a)}}(j,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1"),c=function(){try{return n.keys().map(n)}catch(e){return[]}};t.default=c}},[["D8SK",0,1,2,3,4]]]);