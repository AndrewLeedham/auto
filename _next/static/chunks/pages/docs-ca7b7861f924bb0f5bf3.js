_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=l.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),l=n(a("mXGw")),d=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),l=n(a("mXGw")),d=n(a("9fEB")),o=a("GDok"),c=a("nZpd"),u=a("AFBu"),s=a("0oBi"),i=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=l.default.useState(!1);l.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var i=(0,s.useDarkMode)();return l.default.createElement(c.MobileMenuContext.Provider,{value:a.menuState||n},l.default.createElement(d.default,null,l.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,u.formatPath)(i?"favicon-dark.png":"favicon.png")})),l.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},l.default.createElement(o.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=i},"7UXh":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),l=a("mXGw"),d=a.n(l),o=a("/FXl"),c=a("pu0P"),u=a.n(c),s=a("8fa9"),i=(d.a.createElement,{layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/index.mdx",__scans:{}}),m={frontMatter:i},f=u.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.mdx)(f,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("div",{className:"w-full"},Object(o.mdx)("picture",null,Object(o.mdx)("source",{srcSet:"dark-logo-large.png",media:"(prefers-color-scheme: dark)",class:"mx-auto max-w-sm my-24 w-full"}),Object(o.mdx)("img",{src:"light-logo-large.png",alt:"Auto Logo",class:"mx-auto max-w-sm my-24 w-full"}))),Object(o.mdx)("blockquote",null,Object(o.mdx)("p",{parentName:"blockquote"},"Automated releases powered by pull request labels")),Object(o.mdx)("p",null,"Streamline your release workflow and publish constantly!\n",Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," is meant to be run in a continuous integration (CI) environment, but all the commands work locally as well."),Object(o.mdx)("p",null,"The two main problems auto is trying to solve are: release automation and pull request interaction.\nWith the set of tools we provide you can automate every part of contribution!"),Object(o.mdx)("br",null),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Release Features:")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Calculate semantic version bumps from PRs"),Object(o.mdx)("li",{parentName:"ul"},"Publish ",Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./docs/generated/canary"}),"canaries")," (test versions) directly from PRs or locally"),Object(o.mdx)("li",{parentName:"ul"},"Generate changelogs with fancy headers, authors, and ",Object(o.mdx)("a",Object(n.a)({parentName:"li"},{href:"./docs/generated/changelog#additional-release-notes"}),"detailed release notes")),Object(o.mdx)("li",{parentName:"ul"},"Make GitHub releases")),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"Pull Request Interaction Features:")),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Get the labels for a PR"),Object(o.mdx)("li",{parentName:"ul"},"Set the status of a PR"),Object(o.mdx)("li",{parentName:"ul"},"Comment on a PR with markdown"),Object(o.mdx)("li",{parentName:"ul"},"Update the PR body with contextual build metadata")),Object(o.mdx)("h2",{id:"workflow"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#workflow"}),"Workflow")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),"'s main use it to automate the release process for your project.\nThis can be broken down into three core steps:"),Object(o.mdx)("pre",{className:"language-text"},Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"pre: (optional) Check if new version\n\n1. Generate CHANGELOG.md\n2. Publish code\n3. Generate github release notes\n")),Object(o.mdx)("p",null,Object(o.mdx)("inlineCode",{parentName:"p"},"auto")," makes no assumptions about your publishing process.\nEach tool is a function that can be run in isolation and only does one thing really well.\nFor instance, you could just use ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto changelog")," to generate the changelog and nothing else or use ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto version")," to calculate just the ",Object(o.mdx)("inlineCode",{parentName:"p"},"semver")," bump."),Object(o.mdx)("div",{className:"my-20 flex align-center justify-center w-full"},Object(o.mdx)(s.a,{mdxType:"GetStarted"})))}p.isMDXComponent=!0},"8fa9":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("mXGw"),r=a.n(n).a.createElement,l=function(){return r("a",{href:"https://intuit.github.io/auto/docs/welcome/getting-started",className:"uppercase text-xl lg:text-2xl border-2 border-white rounded px-6 py-3 hover:bg-primary-500 hover:text-white"},r("span",{className:"pr-2"},"Get Started")," \ud83c\udf89")}},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),l=n(a("RiSW")),d=n(a("nxTg")),o=n(a("mXGw")),c=n(a("5dyF")),u=n(a("9fEB")),s=n(a("O2/E")),i=n(a("PDtE")),m=a("/FXl"),f=a("bBV7"),p=a("nZpd"),x=a("AFBu");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=o.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=h;var v=function(e){var t=e.href,a=e.children,n=o.default.useContext(h),r=(0,m.useMDXComponents)().SidebarLink,l=s.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=l).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),o.default.createElement(c.default,{passHref:!0,href:(0,x.postFixHTML)(d)},o.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,x.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,c=o.default.useContext(p.MobileMenuContext),g=(0,d.default)(c,1)[0],w="/".concat(r),O=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(w),j=function(t){var a=(0,f.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?s.default.relative("/auto",a.pathname):s.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,x.formatPath)(r.__resourcePath)}}(n),E=(0,m.useMDXComponents)(),y=E.SidebarItemWrapper,k=(E.SidebarLink,E.SidebarTitle),N=E.SidebarDivider,_=E.SidebarList,P=E.Sidebar,M=(0,l.default)(E,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return o.default.createElement(h.Provider,{value:b(b({},j),{},{sidebarFileLocation:O?w:""})},o.default.createElement(m.MDXProvider,{components:b(b({},M),{},{li:y,ul:_,a:v,p:k,hr:N})},o.default.createElement(u.default,null,o.default.createElement("title",null,j.title.replace(/\\`/g,"`"))),o.default.createElement(P,{className:(0,i.default)(!g&&"hidden","lg:block")},O?o.default.createElement(O,null):o.default.createElement(_,null,n.map((function(e){return o.default.createElement(y,{key:e.__resourcePath},o.default.createElement(v,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),l=n(a("8VmE")),d=n(a("RiSW")),o=n(a("mXGw")),c=n(a("5dyF")),u=a("V5Fo"),s=a("/FXl"),i=n(a("PDtE")),m=a("nZpd"),f=a("AFBu"),p=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return o.default.createElement("svg",(0,l.default)({className:(0,i.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),o.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},x=function(){var e=(0,s.useMDXComponents)().SearchInput;return o.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},o.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=o.default.useContext(m.MobileMenuContext),l=(0,r.default)(n,2),d=l[0],i=l[1],g=(0,s.useMDXComponents)(),b=g.Logo,h=g.NavBarWrapper,v=g.NavBar,w=g.NavBarItem,O=g.MobileMenuButton;return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,null,o.default.createElement(v,null,a?o.default.createElement(c.default,{passHref:!0,href:"/"},o.default.createElement(b,null)):o.default.createElement(b,null),o.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},o.default.createElement(x,null),o.default.createElement(O,{open:d,setOpen:i,className:"lg:hidden"}),o.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return o.default.createElement(c.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},o.default.createElement(w,null,(0,u.titleCase)(e)))})),o.default.createElement(w,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},o.default.createElement(p,null)))))),d&&o.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return o.default.createElement(c.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},o.default.createElement(w,null,(0,u.titleCase)(e)))})),o.default.createElement(w,{href:"https://github.com/intuit/auto",target:"_blank"},o.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},M4dN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return a("7UXh")}])},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),l=n(a("mXGw")),d=n(a("O2/E")),o=a("/FXl"),c=n(a("PDtE")),u=a("C3pV"),s=n(a("6f/q")),i=n(a("x3GE")),m=/([^`]*)`([^`]*)`(.*)/m;var f=function(e){var t=e.children,a=e.frontMatter,n=l.default.useState(!1),f=(0,r.default)(n,2),p=f[0],x=f[1],g=(0,o.useMDXComponents)(),b=a.__resourcePath.split("/")[0],h=(0,i.default)(),v=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(b)})).map((function(e){return h.find((function(t){return t.__resourcePath===e}))}));return l.default.createElement(s.default,{menuState:[p,x]},l.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},l.default.createElement(u.Sidebar,{links:v,folder:b}),l.default.createElement("main",{className:(0,c.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",p&&"hidden")},l.default.createElement(g.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");m.test(n);){var d=n.match(m),o=(0,r.default)(d,4),c=o[1],u=o[2],s=o[3];a.push(c),a.push(l.default.createElement(e.inlineCode,null,u)),n=s}return a.push(n),l.default.createElement("div",null,a)}}(g,a.title)),t)))};t.default=f},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1"),r=function(){try{return n.keys().map(n)}catch(e){return[]}};t.default=r}},[["M4dN",0,1,2,3,4]]]);