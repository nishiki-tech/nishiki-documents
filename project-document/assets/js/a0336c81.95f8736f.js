"use strict";(self.webpackChunkproject_document=self.webpackChunkproject_document||[]).push([[861],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),g=r,N=s["".concat(p,".").concat(g)]||s[g]||k[g]||i;return a?n.createElement(N,l(l({ref:e},m),{},{components:a})):n.createElement(N,l({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3822:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l="DynamoDB Design",o={unversionedId:"database/database",id:"database/database",title:"DynamoDB Design",description:"This system use DynamoDB.",source:"@site/docs/database/database.md",sourceDirName:"database",slug:"/database/",permalink:"/nishiki-documents/project-document/database/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ER Diagram",permalink:"/nishiki-documents/project-document/database/er-diagram"}},p={},d=[{value:"Table Configs",id:"table-configs",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Key",id:"key",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Global Secondary Index (GSI)",id:"global-secondary-index-gsi",level:2},{value:"UserAndGroupRelations",id:"userandgrouprelations",level:3},{value:"EMailUserRelation",id:"emailuserrelation",level:3},{value:"Non Key Attributes",id:"non-key-attributes",level:4},{value:"InvitationHash",id:"invitationhash",level:3},{value:"Non Key Attributes",id:"non-key-attributes-1",level:4},{value:"Contexts",id:"contexts",level:2},{value:"User",id:"user",level:3},{value:"Group",id:"group",level:3},{value:"Container",id:"container",level:3},{value:"Foods",id:"foods",level:4},{value:"Access Pattern",id:"access-pattern",level:2}],m={toc:d},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamodb-design"},"DynamoDB Design"),(0,r.kt)("p",null,"This system use DynamoDB."),(0,r.kt)("h2",{id:"table-configs"},"Table Configs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table Name"),": nishiki-table-prod-db",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Deletion Policy"),": Retain (In develop environment, Delete)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the development environment, the DB name is changed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"nishiki-table-dev-db"),".")),(0,r.kt)("h2",{id:"table-structure"},"Table Structure"),(0,r.kt)("h3",{id:"key"},"Key"),(0,r.kt)("p",null,"Partition Key is mostly ID of the entity.\nSort key is normally, explains the type of data, if the data is about User, the sort key is USER. But this is relative."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UserId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UserName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EMailAddress"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LinkExpiryDatetime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ISO 8601 date and time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"InvitationLinkHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This hash is generated from the Group ID and Expiry Datetime using the MD5 algorithm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContainerId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContainerName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Foods"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List","[Object]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/database#foods"},"Object Detail"))))),(0,r.kt)("h2",{id:"global-secondary-index-gsi"},"Global Secondary Index (GSI)"),(0,r.kt)("h3",{id:"userandgrouprelations"},"UserAndGroupRelations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GSI Name"),": UserAndGroupRelationship",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Projection Type"),": KEY_ONLY"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This index is used for the access pattern of retrieving a list of users by the Group ID.\nThe reason for not having Container and Group relation GSI, similar to User and Group relation, is that there are few chances to query groups by the container.")),(0,r.kt)("h3",{id:"emailuserrelation"},"EMailUserRelation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GSI Name"),": EMailAndUserIdRelationship",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Projection Type"),": KEY_ONLY"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EMailAddress")))),(0,r.kt)("h4",{id:"non-key-attributes"},"Non Key Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"InvitationLinkHash")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'This GSI\'s PK is "ExpiryDatetime". Used for querying the expired Datetime.')),(0,r.kt)("h3",{id:"invitationhash"},"InvitationHash"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GSI Name"),": InvitationHash",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Projection Type"),": INCLUDE"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"InvitationLinkHash")))),(0,r.kt)("h4",{id:"non-key-attributes-1"},"Non Key Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LinkExpiryDatetime")),(0,r.kt)("h2",{id:"contexts"},"Contexts"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The {} means that the value inside it will be dynamic value.")),(0,r.kt)("h3",{id:"user"},"User"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PK"),": User ID (UUID)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"SK"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Detail"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Attributes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"User"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UserName, EMailAddress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Group#{GroupID}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The group user belong to"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId")))),(0,r.kt)("h3",{id:"group"},"Group"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PK"),": Group ID (UUID)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"SK"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Detail"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Attributes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Group Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupName, Users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Container#{ContainerID}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Container Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ContainerId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"InvitationLinkHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invitation link's hash string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"LinkExpiryDatetime, InvitationLinkHash")))),(0,r.kt)("h3",{id:"container"},"Container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PK"),": Container ID (UUID)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"SK"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Detail"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Container"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Container Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ContainerName, Foods")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Container can be defined in the Group context using PK as group ID and SK as Container#{ContainerID}.\nWhile it makes the item structure more straightforward, it requires the use of a Global secondary Index(GSI) to retrieve container data using the container ID."),(0,r.kt)("p",{parentName:"admonition"},"In this system, updating food operations are the most frequent, and in DynamoDB, writing operations are more than 5 times more expensive than reading.\nUsing GSI for writing operations result in twice the cost which is not cost-effective. Hence, we prioritize cost efficiency and opted to separate the container from the group.")),(0,r.kt)("h4",{id:"foods"},"Foods"),(0,r.kt)("p",null,"Food is the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-object"},"{\n    FoodId: string (UUID),\n    Name: String | null,\n    Unit: String | null,\n    Quantity: Number | null,\n    Category: String | null,\n    Expiry: String (Datetime) | null,\n    CreatedDatetime: String (Datetime)\n}\n")),(0,r.kt)("h2",{id:"access-pattern"},"Access Pattern"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Access pattern name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Key (PK/SK)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"How to Access"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Detail"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Context"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetUser"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UserId / User"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a single user data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetUserByEMail"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EMailAddress"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query against GSI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a single user's ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ListOfUsersGroup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"UserId / Group#"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of groups user belonging to"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetGroup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId / Group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a group data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ListOfContainers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId / Container#"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of containers belonging to group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ListOfUsersInGroup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query against GSI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of users belonging to group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetContainer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ContainerId / Container"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get a container data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetInvitationLink"),(0,r.kt)("td",{parentName:"tr",align:"left"},"InvitationHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Query against GSI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get an invitation link and related information"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GetInvitationLinkByGroupId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"GroupId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get an invitation hash from the group ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Group")))))}k.isMDXComponent=!0}}]);