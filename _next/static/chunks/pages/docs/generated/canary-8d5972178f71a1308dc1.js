_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=d.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,c.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),d=n(a("mXGw")),c=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),d=n(a("mXGw")),c=n(a("9fEB")),l=a("GDok"),o=a("nZpd"),m=a("AFBu"),s=a("0oBi"),i=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=d.default.useState(!1);d.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var i=(0,s.useDarkMode)();return d.default.createElement(o.MobileMenuContext.Provider,{value:a.menuState||n},d.default.createElement(c.default,null,d.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,m.formatPath)(i?"favicon-dark.png":"favicon.png")})),d.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},d.default.createElement(l.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=i},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),d=n(a("RiSW")),c=n(a("nxTg")),l=n(a("mXGw")),o=n(a("5dyF")),m=n(a("9fEB")),s=n(a("O2/E")),i=n(a("PDtE")),u=a("/FXl"),p=a("bBV7"),b=a("nZpd"),f=a("AFBu");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=l.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=O;var j=function(e){var t=e.href,a=e.children,n=l.default.useContext(O),r=(0,u.useMDXComponents)().SidebarLink,d=s.default.join(n.sidebarFileLocation,t),c=t;return n.sidebarFileLocation&&((c=d).endsWith("/index")&&(c=c.replace("/index","")),c.endsWith("/")&&(c=c.slice(0,-1))),l.default.createElement(o.default,{passHref:!0,href:(0,f.postFixHTML)(c)},l.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,f.formatPath)(c)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,o=l.default.useContext(b.MobileMenuContext),x=(0,c.default)(o,1)[0],h="/".concat(r),N=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(h),v=function(t){var a=(0,p.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?s.default.relative("/auto",a.pathname):s.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,f.formatPath)(r.__resourcePath)}}(n),y=(0,u.useMDXComponents)(),E=y.SidebarItemWrapper,k=(y.SidebarLink,y.SidebarTitle),w=y.SidebarDivider,_=y.SidebarList,P=y.Sidebar,M=(0,d.default)(y,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return l.default.createElement(O.Provider,{value:g(g({},v),{},{sidebarFileLocation:N?h:""})},l.default.createElement(u.MDXProvider,{components:g(g({},M),{},{li:E,ul:_,a:j,p:k,hr:w})},l.default.createElement(m.default,null,l.default.createElement("title",null,v.title.replace(/\\`/g,"`"))),l.default.createElement(P,{className:(0,i.default)(!x&&"hidden","lg:block")},N?l.default.createElement(N,null):l.default.createElement(_,null,n.map((function(e){return l.default.createElement(E,{key:e.__resourcePath},l.default.createElement(j,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),d=n(a("8VmE")),c=n(a("RiSW")),l=n(a("mXGw")),o=n(a("5dyF")),m=a("V5Fo"),s=a("/FXl"),i=n(a("PDtE")),u=a("nZpd"),p=a("AFBu"),b=function(e){var t=e.className,a=(0,c.default)(e,["className"]);return l.default.createElement("svg",(0,d.default)({className:(0,i.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),l.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},f=function(){var e=(0,s.useMDXComponents)().SearchInput;return l.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},l.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=l.default.useContext(u.MobileMenuContext),d=(0,r.default)(n,2),c=d[0],i=d[1],x=(0,s.useMDXComponents)(),g=x.Logo,O=x.NavBarWrapper,j=x.NavBar,h=x.NavBarItem,N=x.MobileMenuButton;return l.default.createElement(l.default.Fragment,null,l.default.createElement(O,null,l.default.createElement(j,null,a?l.default.createElement(o.default,{passHref:!0,href:"/"},l.default.createElement(g,null)):l.default.createElement(g,null),l.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},l.default.createElement(f,null),l.default.createElement(N,{open:c,setOpen:i,className:"lg:hidden"}),l.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return l.default.createElement(o.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},l.default.createElement(h,null,(0,m.titleCase)(e)))})),l.default.createElement(h,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},l.default.createElement(b,null)))))),c&&l.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return l.default.createElement(o.default,{passHref:!0,key:e,href:(0,p.postFixHTML)("/".concat(e))},l.default.createElement(h,null,(0,m.titleCase)(e)))})),l.default.createElement(h,{href:"https://github.com/intuit/auto",target:"_blank"},l.default.createElement(b,{className:"mr-2"}),"Open on GitHub")))}},Q7d1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/canary",function(){return a("m6vf")}])},m6vf:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a("Fcif"),r=a("dV/x"),d=a("mXGw"),c=a.n(d),l=a("/FXl"),o=a("pu0P"),m=a.n(o),s=(c.a.createElement,{title:"`canary`",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/generated/canary.mdx",__scans:{}}),i={frontMatter:s},u=m.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.mdx)(u,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Make a canary release of the project. Useful on PRs. If ran locally, ",Object(l.mdx)("inlineCode",{parentName:"p"},"canary"),' will release a canary version for your current git HEAD. This is ran automatically from "shipit".'),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"In PR: 1.2.3-canary.123.0 + add version to PR body"),Object(l.mdx)("li",{parentName:"ol"},"Locally: 1.2.3-canary.1810cfd")),Object(l.mdx)("h2",{id:"options"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flag"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"--dry-run"),", ",Object(l.mdx)("inlineCode",{parentName:"td"},"-d")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report what command will do but do not actually do anything")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"--pr")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"PR number to use to create the canary version. Detected in CI env")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"--build")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Build number to use to create the canary version. Detected in CI env")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"--message"),", ",Object(l.mdx)("inlineCode",{parentName:"td"},"-m")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to comment on PR with. Defaults to 'Published PR with canary version: %v'. Pass false to disable the comment")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"--force")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Force a canary release, even if the PR is marked to skip the release")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.mdx)("inlineCode",{parentName:"td"},"--quiet"),", ",Object(l.mdx)("inlineCode",{parentName:"td"},"-q")),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print ",Object(l.mdx)("strong",{parentName:"td"},"only")," the result of the command")))),Object(l.mdx)("h2",{id:"examples"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(l.mdx)("pre",{className:"language-bash"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto canary\n")),Object(l.mdx)("pre",{className:"language-bash"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto canary --force\n")),Object(l.mdx)("pre",{className:"language-bash"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto canary --pr ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"123")," --build ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"5"),"\n")),Object(l.mdx)("pre",{className:"language-bash"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto canary --message ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Install PR version: ',Object(l.mdx)("span",Object(n.a)({parentName:"span"},{className:"token variable"}),Object(l.mdx)("span",Object(n.a)({parentName:"span"},{className:"token variable"}),"`"),Object(l.mdx)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"yarn")," ",Object(l.mdx)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"add")," -D my-project@%v",Object(l.mdx)("span",Object(n.a)({parentName:"span"},{className:"token variable"}),"`")),'"'),"\n")),Object(l.mdx)("pre",{className:"language-bash"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"auto canary --message ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"false"),"\n")),Object(l.mdx)("h2",{id:"configurable-options"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#configurable-options"}),"Configurable Options")),Object(l.mdx)("p",null,"You can configure some of the options for the ",Object(l.mdx)("inlineCode",{parentName:"p"},"canary")," command in the ",Object(l.mdx)("inlineCode",{parentName:"p"},".autorc"),"."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"message")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"force"))),Object(l.mdx)("p",null,Object(l.mdx)("strong",{parentName:"p"},"Example ",Object(l.mdx)("inlineCode",{parentName:"strong"},".autorc"),":")),Object(l.mdx)("pre",{className:"language-json"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"canary"'),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"message"'),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"string"'),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token property"}),'"force"'),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),"\n  ",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")))}p.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),d=n(a("mXGw")),c=n(a("O2/E")),l=a("/FXl"),o=n(a("PDtE")),m=a("C3pV"),s=n(a("6f/q")),i=n(a("x3GE")),u=/([^`]*)`([^`]*)`(.*)/m;var p=function(e){var t=e.children,a=e.frontMatter,n=d.default.useState(!1),p=(0,r.default)(n,2),b=p[0],f=p[1],x=(0,l.useMDXComponents)(),g=a.__resourcePath.split("/")[0],O=(0,i.default)(),j=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return c.default.relative("./",e)})).filter((function(e){return e.startsWith(g)})).map((function(e){return O.find((function(t){return t.__resourcePath===e}))}));return d.default.createElement(s.default,{menuState:[b,f]},d.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},d.default.createElement(m.Sidebar,{links:j,folder:g}),d.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",b&&"hidden")},d.default.createElement(x.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");u.test(n);){var c=n.match(u),l=(0,r.default)(c,4),o=l[1],m=l[2],s=l[3];a.push(o),a.push(d.default.createElement(e.inlineCode,null,m)),n=s}return a.push(n),d.default.createElement("div",null,a)}}(x,a.title)),t)))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1"),r=function(){try{return n.keys().map(n)}catch(e){return[]}};t.default=r}},[["Q7d1",0,1,2,3,4]]]);