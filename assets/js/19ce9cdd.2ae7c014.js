"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[8389],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3603:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(9668),r=(a(6540),a(5680));const o={id:"introduction",title:"Introduction",sidebar_label:"Introduction",sidebar_position:1,slug:"/"},i=void 0,s={unversionedId:"fundamentals/introduction",id:"fundamentals/introduction",title:"Introduction",description:"Gesture Handler provides a declarative API exposing the native platform's touch and gesture system to React Native. It's designed to be a replacement of React Native's built in touch system called Gesture Responder System. Using native touch handling allows to address the performance limitations of React Native's Gesture Responder System. It also provides more control over the platform's native components that can handle gestures on their own. If you want to learn more, we recommend this talk by Krzysztof Magiera in which he explains issues with the responder system.",source:"@site/docs/fundamentals/introduction.md",sourceDirName:"fundamentals",slug:"/",permalink:"/react-native-gesture-handler/docs/",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/fundamentals/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Fundamentals",permalink:"/react-native-gesture-handler/docs/category/fundamentals"},next:{title:"Installation",permalink:"/react-native-gesture-handler/docs/fundamentals/installation"}},l={},c=[{value:"Learning resources",id:"learning-resources",level:2},{value:"Apps",id:"apps",level:3},{value:"Talks and workshops",id:"talks-and-workshops",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Community",id:"community",level:2},{value:"Gesture Handler Team \ud83d\ude80",id:"gesture-handler-team-",level:3},{value:"Sponsors",id:"sponsors",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Gesture Handler provides a declarative API exposing the native platform's touch and gesture system to React Native. It's designed to be a replacement of React Native's built in touch system called ",(0,r.yg)("a",{parentName:"p",href:"http://reactnative.dev/docs/gesture-responder-system"},"Gesture Responder System"),". Using native touch handling allows to address the performance limitations of React Native's Gesture Responder System. It also provides more control over the platform's native components that can handle gestures on their own. If you want to learn more, we recommend ",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V8maYc4R2G0"},"this talk")," by ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," in which he explains issues with the responder system."),(0,r.yg)("p",null,"The main benefits of using React Native Gesture Handler are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A way to use a platform's native touch handling system for recognizing gestures (like pinch, rotation, pan and a few others)."),(0,r.yg)("li",{parentName:"ul"},"The ability to define relations between gestures to ensure gestures, and possibly native components, will not conflict with each other."),(0,r.yg)("li",{parentName:"ul"},"Mechanisms to use touchable components that run in native thread and follow platform default behavior; e.g. in the event they are in a scrollable component, turning into pressed state is slightly delayed to prevent it from highlighting when you fling."),(0,r.yg)("li",{parentName:"ul"},"Close integration with ",(0,r.yg)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,r.yg)("inlineCode",{parentName:"a"},"react-native-reanimated"))," to process touch events on the UI thread."),(0,r.yg)("li",{parentName:"ul"},"Support for different input devices like touch screens, pens and mice."),(0,r.yg)("li",{parentName:"ul"},"Ability to include any native component into the Gesture Handler's touch system, making it work alongside your gestures.")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"We recommended to use Reanimated to implement gesture-driven animations with Gesture Handler. Its more advanced features rely heavily on worklets and the UI runtime provided by Reanimated.")),(0,r.yg)("h2",{id:"learning-resources"},"Learning resources"),(0,r.yg)("h3",{id:"apps"},"Apps"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example"},"Gesture Handler Example App"),' \u2013 official gesture handler "showcase" app.'),(0,r.yg)("h3",{id:"talks-and-workshops"},"Talks and workshops"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kdq4z2708VM"},"Declarative future of gestures and animations in React Native")," by ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," - talk that explains motivation behind creating gesture handler library. It also presents ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated")," and how and when it can be used with gesture handler."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://youtu.be/JSIoE_ReeDk?t=41m49s"},"React Native workshop with Expo team @ReactEurope 2018")," by ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/notbrent"},"Brent Vatne")," \u2013 great workshop explaining gesture handler in details and presenting a few exercises that will help get you started."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=-Izgons3mec"},"Living in an async world of React Native")," by ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," \u2013 talk which highlights some issue with the React Native's touch system Gesture Handler aims to address. Also the motivation for building this library is explained."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V8maYc4R2G0"},"React Native Touch & Gesture")," by ",(0,r.yg)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," - talk explaining JS responder system limitations and points out some of the core features of Gesture Handler."),(0,r.yg)("h2",{id:"contributing"},"Contributing"),(0,r.yg)("p",null,"If you are interested in the project and want to contribute or support it in other ways don't hesitate to contact anyone from the team on Twitter or Bluesky (links below)!"),(0,r.yg)("p",null,"All PRs are welcome, but talk to us before you start working on something big."),(0,r.yg)("p",null,"The easiest way to get started with contributing code is by:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reviewing the list of ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-gesture-handler/issues"},"open issues")," and trying to solve the one that seem approachable to you."),(0,r.yg)("li",{parentName:"ul"},"Updating the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/docs"},"documentation")," whenever you see some information is unclear, missing or out of date.")),(0,r.yg)("p",null,"Code is only one way how you can contribute. You may want to consider ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/issues"},"replying on issues")," if you know how to help."),(0,r.yg)("h2",{id:"community"},"Community"),(0,r.yg)("p",null,"We are very proud of the community that has been build around this package. We really appreciate all your help regardless of it is a pull request, issue report, helping others by commenting on existing issues or posting some demo or video tutorial on social media.\nIf you've build something with this library you'd like to share, please contact us as we'd love to help share it with others."),(0,r.yg)("h3",{id:"gesture-handler-team-"},"Gesture Handler Team \ud83d\ude80"),(0,r.yg)("div",{className:"community-holder-container"},(0,r.yg)("div",{className:"community-holder-container-item"},(0,r.yg)("div",{className:"community-imageHolder"},(0,r.yg)("img",{src:"https://ca.slack-edge.com/T03Q9AMJJ-U02700KC6J1-0c9e18c89e71-512"})),(0,r.yg)("div",null,"Jakub Piasecki"),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://twitter.com/breskin67"},"@breskin67")),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://bsky.app/profile/jpiasecki.com"},"@jpiasecki.com"))),(0,r.yg)("div",{className:"community-holder-container-item"},(0,r.yg)("div",{className:"community-imageHolder"},(0,r.yg)("img",{src:"https://ca.slack-edge.com/T03Q9AMJJ-U03N3HU2C0M-60a31c54a7d5-512"})),(0,r.yg)("div",null,"Micha\u0142 Bert"),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://x.com/Michal3870"},"@Michal3870"))),(0,r.yg)("div",{className:"community-holder-container-item"},(0,r.yg)("div",{className:"community-imageHolder"},(0,r.yg)("img",{src:"https://ca.slack-edge.com/T03Q9AMJJ-U0F40CATS-d0a2e7559a1b-512"})),(0,r.yg)("div",null,"Krzysztof Magiera"),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://twitter.com/kzzzf"},"@kzzzf")),(0,r.yg)("div",null,(0,r.yg)("a",{href:"https://bsky.app/profile/kzzzf.bsky.social"},"@kzzzf.bsky.social")))),(0,r.yg)("h3",{id:"sponsors"},"Sponsors"),(0,r.yg)("p",null,"We really appreciate our sponsors! Thanks to them we can develop our library and make the react-native world a better place. Special thanks for:"),(0,r.yg)("div",{className:"community-holder-container"},(0,r.yg)("div",{className:"community-holder-container-item"},(0,r.yg)("a",{href:"https://www.shopify.com/"},(0,r.yg)("div",{className:"community-imageHolder"},(0,r.yg)("img",{src:"https://avatars1.githubusercontent.com/u/8085?v=3&s=100"})),(0,r.yg)("div",null,"Shopify"))),(0,r.yg)("div",{className:"community-holder-container-item"},(0,r.yg)("a",{href:"https://expo.dev"},(0,r.yg)("div",{className:"community-imageHolder"},(0,r.yg)("img",{className:"community-imageHolder",src:"https://avatars2.githubusercontent.com/u/12504344?v=3&s=100"})),(0,r.yg)("div",null,"Expo")))))}p.isMDXComponent=!0}}]);