"use strict";(self.webpackChunkproject_document=self.webpackChunkproject_document||[]).push([[703],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=r.createContext({}),c=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=c(n.components);return r.createElement(l.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,l=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,a(a({ref:e},d),{},{components:t})):r.createElement(f,a({ref:e},d))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[u]="string"==typeof n?n:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3540:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a="Domain Model",s={unversionedId:"domain-model/domain-model",id:"domain-model/domain-model",title:"Domain Model",description:"User Context",source:"@site/docs/domain-model/domain-model.md",sourceDirName:"domain-model",slug:"/domain-model/",permalink:"/nishiki-document/domain-model/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Nishiki Project Document",permalink:"/nishiki-document/"},next:{title:"ER Diagram",permalink:"/nishiki-document/er-diagram/"}},l={},c=[{value:"User Context",id:"user-context",level:2},{value:"Group Context",id:"group-context",level:2},{value:"User ID",id:"user-id",level:2},{value:"User",id:"user",level:2}],d={toc:c},u="wrapper";function p(n){let{components:e,...t}=n;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"domain-model"},"Domain Model"),(0,o.kt)("h2",{id:"user-context"},"User Context"),(0,o.kt)("mermaid",{value:"classDiagram\n\n    class UserId {\n        String id\n    }\n\n    class User {\n        String name\n        String eMail\n        UserId UserId\n    }\n\n    User *-- UserId : Composition\n\n"}),(0,o.kt)("h2",{id:"group-context"},"Group Context"),(0,o.kt)("mermaid",{value:"classDiagram\n\n    class UserId {\n        String id\n    }\n\n    class User {\n        String name\n        UserId UserId\n    }\n\n\n    class GroupId {\n        String id\n    }\n\n    class Group {\n        String id\n        String name\n        List [UserGroup]\n        List [Container]\n        List [User]\n    }\n\n    class Container {\n        ContainerId ContainerId\n        List [Food]\n        String name\n    }\n\n    class ContainerId {\n        Sting: id\n    }\n\n    class Food {\n        String id\n        String name\n        Unit Unit\n        Quantity Quantity\n        Expire Expire\n    }\n\n    class Unit {\n        String Unit\n    }\n\n    class Quantity {\n        Int Quantity\n    }\n\n    class Expire {\n        Date Expire\n    }\n\n    User *-- UserId : Composition\n\n    Group *-- GroupId : Composition\n    Group *-- Container : Composition\n    Group *-- User : Composition\n\n    Container *-- ContainerId : Composition\n    Container *-- Food : Composition\n\n    Food *-- Unit : Composition\n    Food *-- Quantity : Composition\n    Food *-- Expire : Composition\n"}),(0,o.kt)("h2",{id:"user-id"},"User ID"),(0,o.kt)("p",null,"Identifier"),(0,o.kt)("p",null,"The ID is created by Cognito User Pool."),(0,o.kt)("h2",{id:"user"},"User"),(0,o.kt)("p",null,"Entity"))}p.isMDXComponent=!0}}]);