_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[66],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=l.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),l=n(a("mXGw")),d=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),l=n(a("mXGw")),d=n(a("9fEB")),c=a("GDok"),o=a("nZpd"),m=a("AFBu"),i=a("0oBi"),s=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=l.default.useState(!1);l.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var s=(0,i.useDarkMode)();return l.default.createElement(o.MobileMenuContext.Provider,{value:a.menuState||n},l.default.createElement(d.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,m.formatPath)(s?"favicon-dark.png":"favicon.png")})),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},l.default.createElement(c.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=s},"9AR2":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/shipit",function(){return a("UfwX")}])},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),l=n(a("RiSW")),d=n(a("nxTg")),c=n(a("mXGw")),o=n(a("5dyF")),m=n(a("9fEB")),i=n(a("O2/E")),s=n(a("PDtE")),u=a("/FXl"),p=a("bBV7"),b=a("nZpd"),x=a("AFBu");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=c.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=h;var f=function(e){var t=e.href,a=e.children,n=c.default.useContext(h),r=(0,u.useMDXComponents)().SidebarLink,l=i.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=l).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),c.default.createElement(o.default,{passHref:!0,href:(0,x.postFixHTML)(d)},c.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,x.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,o=c.default.useContext(b.MobileMenuContext),j=(0,d.default)(o,1)[0],g="/".concat(r),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(g),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?i.default.relative("/auto",a.pathname):i.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,x.formatPath)(r.__resourcePath)}}(n),y=(0,u.useMDXComponents)(),w=y.SidebarItemWrapper,k=(y.SidebarLink,y.SidebarTitle),C=y.SidebarDivider,E=y.SidebarList,P=y.Sidebar,_=(0,l.default)(y,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return c.default.createElement(h.Provider,{value:O(O({},v),{},{sidebarFileLocation:N?g:""})},c.default.createElement(u.MDXProvider,{components:O(O({},_),{},{li:w,ul:E,a:f,p:k,hr:C})},c.default.createElement(m.default,null,c.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),c.default.createElement(P,{className:(0,s.default)(!j&&"hidden","lg:block")},N?c.default.createElement(N,null):c.default.createElement(E,null,n.map((function(e){return c.default.createElement(w,{key:e.__resourcePath},c.default.createElement(f,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),l=n(a("8VmE")),d=n(a("RiSW")),c=n(a("mXGw")),o=n(a("5dyF")),m=a("V5Fo"),i=a("/FXl"),s=n(a("PDtE")),u=a("nZpd"),p=a("AFBu"),b=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return c.default.createElement("svg",(0,l.default)({className:(0,s.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),c.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},x=function(){var e=(0,i.useMDXComponents)().SearchInput;return c.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},c.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=c.default.useContext(u.MobileMenuContext),l=(0,r.default)(n,2),d=l[0],s=l[1],j=(0,i.useMDXComponents)(),O=j.Logo,h=j.NavBarWrapper,f=j.NavBar,g=j.NavBarItem,N=j.MobileMenuButton;return c.default.createElement(c.default.Fragment,null,c.default.createElement(h,null,c.default.createElement(f,null,a?c.default.createElement(o.default,{passHref:!0,href:"/"},c.default.createElement(O,null)):c.default.createElement(O,null),c.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},c.default.createElement(x,null),c.default.createElement(N,{open:d,setOpen:s,className:"lg:hidden"}),c.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return c.default.createElement(o.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},c.default.createElement(g,null,(0,m.titleCase)(e)))})),c.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},c.default.createElement(b,null)))))),d&&c.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return c.default.createElement(o.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},c.default.createElement(g,null,(0,m.titleCase)(e)))})),c.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank"},c.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},UfwX:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),l=a("mXGw"),d=a.n(l),c=a("/FXl"),o=a("pu0P"),m=a.n(o),i=(d.a.createElement,{title:"`shipit`",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/shipit.mdx",__scans:{}}),s={frontMatter:i},u=m.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.mdx)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Context aware publishing."),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"call from base branch -> latest version released (LATEST)"),Object(c.mdx)("li",{parentName:"ol"},"call from prerelease branch -> prerelease version released (NEXT)"),Object(c.mdx)("li",{parentName:"ol"},"call from PR in CI -> canary version released (CANARY)"),Object(c.mdx)("li",{parentName:"ol"},"call locally when not on base/prerelease branch -> canary version released (CANARY)")),Object(c.mdx)("h2",{id:"options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flag"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--name")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Git name to commit  with. Defaults to package definition for the platform")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--email")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Git email to commit with. Defaults to package definition for the platform")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--only-publish-with-release-label")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Only bump version if 'release' label is on pull request")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--base-branch")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'Branch to treat as the "master" branch')),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--dry-run"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-d")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report what command will do but do not actually do anything")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--no-version-prefix")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use the version as the tag without the 'v' prefix. WARNING: some plugins might need extra config to use this option (ex: npm)")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--prerelease")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Publish a prerelease on GitHub.")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--title")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override the title used in the addition to the CHANGELOG.md.")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--message"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-m")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to commit the changelog with. Defaults to 'Update CHANGELOG.md ","[skip ci]","'")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--quiet"),", ",Object(c.mdx)("inlineCode",{parentName:"td"},"-q")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print ",Object(c.mdx)("strong",{parentName:"td"},"only")," the result of the command")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--no-changelog")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skip creating the changelog")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.mdx)("inlineCode",{parentName:"td"},"--only-graduate-with-release-label")),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(c.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),'Make auto publish prerelease versions when merging to master. Only PRs merged with "release" label will generate a "latest" release. Only use this flag if you do not want to maintain a prerelease branch, and instead only want to use master.')))),Object(c.mdx)("h2",{id:"examples"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(c.mdx)("pre",{className:"language-bash"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto shipit\n")),Object(c.mdx)("h2",{id:"configurable-options"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#configurable-options"}),"Configurable Options")),Object(c.mdx)("p",null,"You can configure some of the options for the ",Object(c.mdx)("inlineCode",{parentName:"p"},"shipit")," command in the ",Object(c.mdx)("inlineCode",{parentName:"p"},".autorc"),"."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"prerelease")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"message")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"no-changelog")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"only-graduate-with-release-label"))),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Example ",Object(c.mdx)("inlineCode",{parentName:"strong"},".autorc"),":")),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"shipit"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"prerelease"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"message"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"string"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"noChangelog"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"onlyGraduateWithReleaseLabel"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("h2",{id:"release-pipeline"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#release-pipeline"}),"Release Pipeline")),Object(c.mdx)("p",null,"Below is the basics steps auto takes when releasing your code through the ",Object(c.mdx)("inlineCode",{parentName:"p"},"shipit")," command."),Object(c.mdx)("p",null,Object(c.mdx)("img",Object(n.a)({parentName:"p"},{src:"/default-auto.png",alt:"The default shipit workflow"}))),Object(c.mdx)("p",null,"You can customize how this pipeline operates with various flags.\nThe following shows how those flags can effect the workflow."),Object(c.mdx)("p",null,Object(c.mdx)("img",Object(n.a)({parentName:"p"},{src:"/complete-auto.png",alt:"The entire shipit workflow"}))),Object(c.mdx)("h2",{id:"managing-old-major-versions"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#managing-old-major-versions"}),"Managing Old Major Versions")),Object(c.mdx)("p",null,"This command also has the ability to help you manage old major versions too!\nThis feature is off by default, to enable set ",Object(c.mdx)("inlineCode",{parentName:"p"},"versionBranches")," to ",Object(c.mdx)("inlineCode",{parentName:"p"},"true")," in your ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"../configuration/autorc#versionbranches"}),".autorc"),"."),Object(c.mdx)("p",null,"With this feature enabled ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto shipit")," will:"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Create a version branch when a ",Object(c.mdx)("inlineCode",{parentName:"li"},"major")," happens (prefixed with ",Object(c.mdx)("inlineCode",{parentName:"li"},"version-"),")"),Object(c.mdx)("li",{parentName:"ul"},"When ran from a ",Object(c.mdx)("inlineCode",{parentName:"li"},"versionBranch")," make a release to that version")),Object(c.mdx)("p",null,"Now that you have a branch for an old major release, it is super easy to release patches to it!\nPeople can make PRs to the the ",Object(c.mdx)("inlineCode",{parentName:"p"},"version-")," branch and once merged create a new release of that version."),Object(c.mdx)("h3",{id:"customize-branch-prefix"},Object(c.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#customize-branch-prefix"}),"Customize Branch Prefix")),Object(c.mdx)("p",null,"You can customize what the branch names will be by setting ",Object(c.mdx)("inlineCode",{parentName:"p"},"versionBranches")," to a string."),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"versionBranches"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Major-"'),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("h2",{id:"prereleases"},Object(c.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#prereleases"}),"Prereleases")),Object(c.mdx)("p",null,"If you are interested in pre-releases (ex: ",Object(c.mdx)("inlineCode",{parentName:"p"},"alpha"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"beta"),", ",Object(c.mdx)("inlineCode",{parentName:"p"},"next"),") ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," has the ability to publish pre-releases in various ways."),Object(c.mdx)("p",null,"Read more about preparing you project for pre-releases ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"./next#setting-up-protected-branches"}),"here"),"."),Object(c.mdx)("h3",{id:"strategies"},Object(c.mdx)("a",Object(n.a)({parentName:"h3"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#strategies"}),"Strategies")),Object(c.mdx)("h4",{id:"next-branch-default"},Object(c.mdx)("a",Object(n.a)({parentName:"h4"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#next-branch-default"}),'"next" Branch (default)')),Object(c.mdx)("p",null,"The suggested way to create pre-releases is by managing 2 branches for your repo: ",Object(c.mdx)("inlineCode",{parentName:"p"},"master")," and ",Object(c.mdx)("inlineCode",{parentName:"p"},"next"),".\n",Object(c.mdx)("inlineCode",{parentName:"p"},"master")," contains the ",Object(c.mdx)("inlineCode",{parentName:"p"},"latest")," stable version of the code, and ",Object(c.mdx)("inlineCode",{parentName:"p"},"next")," contains future updates."),Object(c.mdx)("p",null,"You can change what branches ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," treats as pre-release branches in your ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"../configuration/autorc#prerelease-branches"}),Object(c.mdx)("inlineCode",{parentName:"a"},".autorc")),"."),Object(c.mdx)("p",null,Object(c.mdx)("img",Object(n.a)({parentName:"p"},{src:"/next-branch.png",alt:"Example git tree"}))),Object(c.mdx)("p",null,"To update the ",Object(c.mdx)("inlineCode",{parentName:"p"},"latest")," stable version simply merge your pre-release branch into your ",Object(c.mdx)("inlineCode",{parentName:"p"},"baseBranch"),"."),Object(c.mdx)("h4",{id:"without-next-branch---only-graduate-with-release-label"},Object(c.mdx)("a",Object(n.a)({parentName:"h4"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#without-next-branch---only-graduate-with-release-label"}),'Without "next" Branch (',Object(c.mdx)("inlineCode",{parentName:"a"},"--only-graduate-with-release-label"),")")),Object(c.mdx)("p",null,"If you use the ",Object(c.mdx)("inlineCode",{parentName:"p"},"--only-graduate-with-release-label")," flag, you do not have to manage 2 branches.\nInstead you only have a ",Object(c.mdx)("inlineCode",{parentName:"p"},"baseBranch")," and do all work and pull requests there.\n",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," will only publish pre-releases when PRs are merged.\nTo update the ",Object(c.mdx)("inlineCode",{parentName:"p"},"latest")," stable version add the ",Object(c.mdx)("inlineCode",{parentName:"p"},"released")," label to the PR."),Object(c.mdx)("p",null,"While this setup may be simpler, it restricts you from updating latest while development is happening for the pre-release.\nWith 2 branches you can easily merge update to the latest release, with 1 this is not possible."),Object(c.mdx)("h4",{id:"multiple-next-branches"},Object(c.mdx)("a",Object(n.a)({parentName:"h4"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#multiple-next-branches"}),'Multiple "next" Branches')),Object(c.mdx)("p",null,"Sometimes you might want to have more rigorous release lines.\nThis can help test out bugs on a smaller set of users."),Object(c.mdx)("p",null,"One setup you could use to accomplish this is by creating 3 ",Object(c.mdx)("inlineCode",{parentName:"p"},"prereleaseBranches")),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"prereleaseBranches"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"alpha"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"beta"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"rc"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("p",null,"You could then set you default to ",Object(c.mdx)("inlineCode",{parentName:"p"},"alpha")," and ",Object(c.mdx)("inlineCode",{parentName:"p"},"auto")," would publish updates merged to that branch under the ",Object(c.mdx)("inlineCode",{parentName:"p"},"alpha")," release tag.\nWhen you are ready for the update to get used by more users just merge ",Object(c.mdx)("inlineCode",{parentName:"p"},"alpha")," into ",Object(c.mdx)("inlineCode",{parentName:"p"},"beta"),".\nThis will publish a ",Object(c.mdx)("inlineCode",{parentName:"p"},"beta")," release to the matching release tag.\nRepeat this same process when graduating to ",Object(c.mdx)("inlineCode",{parentName:"p"},"rc")," or ",Object(c.mdx)("inlineCode",{parentName:"p"},"latest"),"."),Object(c.mdx)("h4",{id:"feature-pre-releases"},Object(c.mdx)("a",Object(n.a)({parentName:"h4"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#feature-pre-releases"}),"Feature Pre-releases")),Object(c.mdx)("p",null,"Sometimes you are working on a large feature that requires a lot of work.\nInstead of making a giant PR with a bunch of updates, you can create a ",Object(c.mdx)("inlineCode",{parentName:"p"},"prereleaseBranch")," to track the work."),Object(c.mdx)("pre",{className:"language-json"},Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"prereleaseBranches"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"next"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"my-cool-feature"'),Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(c.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(c.mdx)("p",null,"Now instead of just getting a canary version when merging into the ",Object(c.mdx)("inlineCode",{parentName:"p"},"my-cool-feature")," branch, a prerelease version is published under the ",Object(c.mdx)("inlineCode",{parentName:"p"},"my-cool-feature")," release tag!\nThis enables other to consume just this line of work and enables your work to be more flexible."))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),l=n(a("mXGw")),d=n(a("O2/E")),c=a("/FXl"),o=n(a("PDtE")),m=a("C3pV"),i=n(a("6f/q")),s=n(a("x3GE")),u=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=l.default.useState(!1),p=(0,r.default)(n,2),b=p[0],x=p[1],j=(0,c.useMDXComponents)(),O=a.__resourcePath.split("/")[0],h=(0,s.default)(),f=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(O)})).map((function(e){return h.find((function(t){return t.__resourcePath===e}))}));return l.default.createElement(i.default,{menuState:[b,x]},l.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},l.default.createElement(m.Sidebar,{links:f,folder:O}),l.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},l.default.createElement(j.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");u.test(n);){var d=n.match(u),c=(0,r.default)(d,4),o=c[1],m=c[2],i=c[3];a.push(o),a.push(l.default.createElement(e.inlineCode,null,m)),n=i}return a.push(n),l.default.createElement("div",null,a)}}(j,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1"),r=function(){try{return n.keys().map(n)}catch(e){return[]}};t.default=r}},[["9AR2",0,1,2,3,4]]]);