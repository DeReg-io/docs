"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||n;return r?a.createElement(m,o(o({ref:t},g),{},{components:r})):a.createElement(m,o({ref:t},g))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:2},o="Create Easy Trigger",s={unversionedId:"create-easy-trigger",id:"create-easy-trigger",title:"Create Easy Trigger",description:"Prerequisites",source:"@site/docs/create-easy-trigger.md",sourceDirName:".",slug:"/create-easy-trigger",permalink:"/docs/create-easy-trigger",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure Smart Contract",permalink:"/docs/"},next:{title:"Example: Trigger by Forta Notifications",permalink:"/docs/example-connect-forta"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add a New Trigger",id:"add-a-new-trigger",level:2},{value:"1. Click <em>New Trigger</em>",id:"1-click-new-trigger",level:3},{value:"2. Fill out the form",id:"2-fill-out-the-form",level:3},{value:"Trigger Name",id:"trigger-name",level:4},{value:"Network",id:"network",level:4},{value:"Contract Address",id:"contract-address",level:4},{value:"Allowlist for specific domains",id:"allowlist-for-specific-domains",level:4},{value:"3. Click <em>Save &amp; Create Webhook</em>",id:"3-click-save--create-webhook",level:3},{value:"4. Use Webhook",id:"4-use-webhook",level:3},{value:"5. Test <em>Easy Trigger</em>",id:"5-test-easy-trigger",level:3},{value:"6. Activate <em>Easy Trigger</em>",id:"6-activate-easy-trigger",level:3}],g={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-easy-trigger"},"Create Easy Trigger"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to create an ",(0,i.kt)("em",{parentName:"p"},"Easy Trigger")," you must first follow the steps of ",(0,i.kt)("a",{parentName:"p",href:"/"},"configuring your smart contract"),"."),(0,i.kt)("h2",{id:"add-a-new-trigger"},"Add a New Trigger"),(0,i.kt)("h3",{id:"1-click-new-trigger"},"1. Click ",(0,i.kt)("em",{parentName:"h3"},"New Trigger")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Obtain UserID",src:r(7724).Z,width:"2038",height:"300"})),(0,i.kt)("h3",{id:"2-fill-out-the-form"},"2. Fill out the form"),(0,i.kt)("p",null,"You will get the Webhook after saving the form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New Trigger",src:r(3646).Z,width:"2008",height:"1664"})),(0,i.kt)("h4",{id:"trigger-name"},"Trigger Name"),(0,i.kt)("p",null,"Give your trigger a name."),(0,i.kt)("h4",{id:"network"},"Network"),(0,i.kt)("p",null,"Choose the network where your contract is deployed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": We do not support ",(0,i.kt)("em",{parentName:"p"},"Mainnet")," yet. If you are interested in it, please let us know (",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@dereg.io"},"contact@dereg.io"),")."),(0,i.kt)("h4",{id:"contract-address"},"Contract Address"),(0,i.kt)("p",null,"The address of your smart contract. Make sure your contract inherits from ",(0,i.kt)("em",{parentName:"p"},"Triggerable")," and passes your ",(0,i.kt)("em",{parentName:"p"},"UserID")," (see ",(0,i.kt)("a",{parentName:"p",href:"/"},"Configure Smart Contract"),")."),(0,i.kt)("h4",{id:"allowlist-for-specific-domains"},"Allowlist for specific domains"),(0,i.kt)("p",null,"Adding domains here, will restrict calling ",(0,i.kt)("em",{parentName:"p"},"Easy Trigger")," to the domains you specify here. This will increase security."),(0,i.kt)("p",null,"If you choose to not use the allowlist, please make sure to never share your webhook, since anyone with the\nWebhook Url could call the ",(0,i.kt)("em",{parentName:"p"},"Easy Trigger"),"."),(0,i.kt)("h3",{id:"3-click-save--create-webhook"},"3. Click ",(0,i.kt)("em",{parentName:"h3"},"Save & Create Webhook")),(0,i.kt)("h3",{id:"4-use-webhook"},"4. Use Webhook"),(0,i.kt)("p",null,"After you saved, the Webhook will be created."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Saved Webhook",src:r(9565).Z,width:"944",height:"328"})),(0,i.kt)("p",null,"\u2757 ",(0,i.kt)("strong",{parentName:"p"},"Note")," \u2757: By default, calling the Webhook does ",(0,i.kt)("strong",{parentName:"p"},"not")," trigger the smart contract, so you can first test it. To activate it, click on the active switch (see ",(0,i.kt)("a",{parentName:"p",href:"/create-easy-trigger#6-activate-easy-trigger"},"6."),")"),(0,i.kt)("h3",{id:"5-test-easy-trigger"},"5. Test ",(0,i.kt)("em",{parentName:"h3"},"Easy Trigger")),(0,i.kt)("p",null,"You can now send a ",(0,i.kt)("strong",{parentName:"p"},"POST")," request to your Webhook URL"),(0,i.kt)("p",null,"Alternatively you can just click ",(0,i.kt)("em",{parentName:"p"},"Trigger Webhook")," in order to test it.\nIf your ",(0,i.kt)("em",{parentName:"p"},"Easy Trigger")," is active (see ",(0,i.kt)("a",{parentName:"p",href:"/create-easy-trigger#6-activate-easy-trigger"},"6."),"),\npressing ",(0,i.kt)("em",{parentName:"p"},"Trigger Webhook")," will also call your smart contract."),(0,i.kt)("p",null,"Every time the an ",(0,i.kt)("em",{parentName:"p"},"Easy Trigger")," is called you will get a notification and can see details by clicking on the bell icon of your trigger."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Trigger Notifications",src:r(7593).Z,width:"2304",height:"790"})),(0,i.kt)("h3",{id:"6-activate-easy-trigger"},"6. Activate ",(0,i.kt)("em",{parentName:"h3"},"Easy Trigger")),(0,i.kt)("p",null,"Once you have finished testing you can active the ",(0,i.kt)("em",{parentName:"p"},"Easy Trigger")," by clicking on the activate switch."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Activate Trigger",src:r(8043).Z,width:"2304",height:"790"})))}u.isMDXComponent=!0},8043:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/activate_trigger-028256687dd49991e673a35a25654378.png"},7724:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/click_new_trigger-a176225807d56a6247d538024c4d6db0.png"},3646:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new_trigger_form-66e07858320613da0e3dc889caa6f3b2.png"},7593:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/test_trigger_bell-70c2d5b02b2189be87b9eafd85fcece6.png"},9565:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/webhook_created-e35985fbd758fa4782b0179a64ff61ab.png"}}]);