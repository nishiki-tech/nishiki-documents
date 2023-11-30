"use strict";(self.webpackChunkproject_document=self.webpackChunkproject_document||[]).push([[232],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),l=o,g=d["".concat(s,".").concat(l)]||d[l]||m[l]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9686:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=n(7462),o=(n(7294),n(3905));const a={},i="ER Diagram",c={unversionedId:"database/er-diagram",id:"database/er-diagram",title:"ER Diagram",description:"",source:"@site/docs/database/er-diagram.md",sourceDirName:"database",slug:"/database/er-diagram",permalink:"/nishiki-documents/project-document/database/er-diagram",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Food",permalink:"/nishiki-documents/project-document/domain-model/group-context/food"},next:{title:"DynamoDB Design",permalink:"/nishiki-documents/project-document/database/"}},s={},u=[],p={toc:u},d="wrapper";function m(e){let{components:r,...n}=e;return(0,o.kt)(d,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"er-diagram"},"ER Diagram"),(0,o.kt)("mermaid",{value:'erDiagram\n\nUser {\n    string user_id\n    string name\n    string email_address\n}\n\nUserGroup {\n    string user_id\n    string group_id\n}\n\nGroup {\n    int group_id\n    string name\n}\n\nContainer {\n    string container_id\n    string group_id\n    string name\n}\n\nFood {\n    string name\n    string food_id\n    string container_id\n    string unit\n    int quantity\n    Datetime expiry\n    Datetime created_datetime\n}\n\nShareLink {\n    string url\n    string group_id\n    Datetime expired\n}\n\nUser || --|{ UserGroup : "one to one or more"\nGroup ||--|{ UserGroup : "one to one or more"\nGroup ||--o{ Container : "one to zero or more"\nContainer ||--o{ Food : "zero or more"\nGroup ||--o{ ShareLink : "zero or more"\n\n'}))}m.isMDXComponent=!0}}]);