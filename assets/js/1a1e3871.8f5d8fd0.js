"use strict";(self.webpackChunko_snap=self.webpackChunko_snap||[]).push([[929],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,h=i(),v=h.tabGroupChoices,b=h.setTabGroupChoices,y=(0,a.useState)(k),g=y[0],x=y[1],N=[];if(null!=p){var w=v[p];null!=w&&w!==g&&f.some((function(e){return e.value===w}))&&x(w)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;x(a),null!=p&&(b(p,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},9065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s=["components"],c={id:"actions",title:"Actions",sidebar_position:2},u="Actions",p={unversionedId:"Tests/actions",id:"Tests/actions",isDocsHomePage:!1,title:"Actions",description:"As seen in the configuration options of a test file, you are able to run some actions, before the screenshot will be taken.",source:"@site/docs/Tests/actions.md",sourceDirName:"Tests",slug:"/Tests/actions",permalink:"/OSnap/Tests/actions",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"actions",title:"Actions",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/OSnap/Tests/configuration"},next:{title:"Ignore Regions",permalink:"/OSnap/Tests/ignore-regions"}},m=[{value:"Action Types",id:"action-types",children:[{value:"Wait",id:"wait",children:[]},{value:"Click",id:"click",children:[]},{value:"Type",id:"type",children:[]}]}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"actions"},"Actions"),(0,i.kt)("p",null,"As seen in the ",(0,i.kt)("a",{parentName:"p",href:"configuration"},"configuration options")," of a test file, you are able to run some actions, before the screenshot will be taken."),(0,i.kt)("p",null,"This is useful to bring the page into a specific state, you want to capture. ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"For example:")," opening a dropdown, typing something in an input or waiting for an animation to be completed."),(0,i.kt)("p",null,"The currently available actions are ",(0,i.kt)("inlineCode",{parentName:"p"},"wait"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"click")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),". They may be configured like this."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All actions may be configured with the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," key.\nIt configures the sizes this action is run on. ",(0,i.kt)("br",null),"\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," is not present, the action runs on all sizes."))),(0,i.kt)("h2",{id:"action-types"},"Action Types"),(0,i.kt)("h3",{id:"wait"},"Wait"),(0,i.kt)("h4",{id:"options"},"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout"),": The number of ms to wait, before executing the next action or taking the screenshot.")),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",label:"YAML",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "@": ["xxl"]\n  action: "wait"\n  timeout: 2000\n'))),(0,i.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "@": ["xxl"],\n    "action": "wait",\n    "timeout": 2000\n  }\n]\n')))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"click"},"Click"),(0,i.kt)("h4",{id:"options-1"},"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selector"),": A css selector of an element which should be clicked. If the selector evaluates to multiple elements, only the first one is clicked.")),(0,i.kt)("h4",{id:"example-1"},"Example:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",label:"YAML",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "@": ["xxl"]\n  action: "click"\n  selector: "#id-to-click"\n'))),(0,i.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "@": ["xxl"],\n    "action": "click",\n    "selector": "#id-to-click"\n  }\n]\n')))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"options-2"},"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selector"),": A css selector of an element which should be typed in. If the selector evaluates to multiple elements, the first one will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),": The text to type into the element")),(0,i.kt)("h4",{id:"example-2"},"Example:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"yaml",label:"YAML",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "@": ["xxl"]\n  action: "type"\n  selector: "#search"\n  text: "some searchword"\n'))),(0,i.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "@": ["xxl"],\n    "action": "type",\n    "selector": "#search",\n    "text": "some searchword"\n  }\n]\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);