"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7766],{4467:(e,t,n)=>{n.d(t,{A:()=>B});var a=n(2827),r=n(6540),i=n(2773),o=n(9176),s=n(8506),l=n(1691),c=n(14),d=n(7979),u=n(880),g=n(3562),h=n(2220);const m=150,p="var(--swm-blue-light-80)",y="var(--swm-green-light-80)",f="var(--swm-yellow-light-80)",v="var(--swm-red-light-80)",E=new Map([[a.Uw.UNDETERMINED,"UNDETERMINED"],[a.Uw.FAILED,"FAILED"],[a.Uw.BEGAN,"BEGAN"],[a.Uw.CANCELLED,"CANCELLED"],[a.Uw.ACTIVE,"ACTIVE"],[a.Uw.END,"END"]]),w=new Map([[E.get(a.Uw.BEGAN),p],[E.get(a.Uw.ACTIVE),y],[E.get(a.Uw.END),p],[E.get(a.Uw.FAILED),v],[E.get(a.Uw.CANCELLED),v],[E.get(a.Uw.UNDETERMINED),f]]);class N{get idObject(){return this._itemIds}set idObject(e){this._itemIds=e}}class b{_items=[];_connections=[];_listeners=(0,r.useMemo)((()=>new Map),[]);static EMPTY_SPACE_ID=0;constructor(){this.addItem(null,null,!1)}get items(){return this._items}get connections(){return this._connections}get layout(){return this._layout}set layout(e){this._layout=e}addListener(e,t){const n=this._listeners.get(e)?.size-1??0;return this._listeners.has(e)?this._listeners.get(e).set(n,t):this._listeners.set(e,new Map([[0,t]])),n}removeListener(e,t){this._listeners.get(e).delete(t)}clearListeners(){this._listeners.clear()}addItem(e,t,n){void 0===e&&(e=null),void 0===t&&(t=null),void 0===n&&(n=!0);const a=this._items.length;"number"==typeof e&&(e=E.get(e));let r=w.get(e)??f;const i={id:a,label:e,subtext:t,position:null,isVisible:n,highlightColor:r};return this._items.push(i),[e=>{this._listeners.get(a)?.forEach((t=>t(e)))},a]}addConnection(e,t){this._connections.push({id:this._connections.length,from:e,to:t})}newGesture(e){const[t,n]=this.addItem(a.Uw.BEGAN),[r,i]=this.addItem(a.Uw.ACTIVE),[o,s]=this.addItem(a.Uw.END),[l,c]=this.addItem(a.Uw.FAILED),[d,u]=this.addItem(a.Uw.CANCELLED),[g,h]=this.addItem(a.Uw.UNDETERMINED),p=new N;p.idObject={began:n,active:i,end:s,failed:c,cancelled:u,undetermined:h},g(!0);e.onBegin((()=>{t(!0),g(!1)})).onStart((()=>{t(!1),r(!0)})).onEnd((()=>{o(!0)})).onFinalize((e=>{(e=>{g(!0),e.state==a.Uw.FAILED&&l(!0),e.state==a.Uw.CANCELLED&&d(!0),setTimeout((()=>{t(!1),r(!1)}),m),setTimeout((()=>{o(!1),l(!1),d(!1)}),2*m)})(e)})),[[h,n],[n,i],[n,c],[i,s],[i,u],[n,u]].forEach((e=>{let[t,n]=e;this.addConnection(t,n)}));return[p,e,()=>{g(!0)}]}}var _=n(6846),C=n(6798);const D={code:"function anonymous(){const{progress,item}=this.__closure;return{backgroundColor:progress.value>0.5?item.highlightColor:'var(--ifm-background-color)',borderColor:progress.value>0.5?'transparent':'var(--swm-border)'};}"},x={code:"function anonymous(){const{progress}=this.__closure;return{color:progress.value>0.5?'var(--swm-navy-light-100)':'var(--swm-border)'};}"};function I(e){let{item:t,chartManager:n,innerRef:a,style:i}=e;const o=(0,c.U)(0);(0,r.useEffect)((()=>{if(t.id!=b.EMPTY_SPACE_ID){const e=n.addListener(t.id,(e=>{o.value=(0,d.e)(e?1:0,{duration:2*m})}));return()=>{n.removeListener(t.id,e)}}}),[n]);const l=(0,g.m)(function(){const e=function(){return{backgroundColor:o.value>.5?t.highlightColor:"var(--ifm-background-color)",borderColor:o.value>.5?"transparent":"var(--swm-border)"}};return e.__closure={progress:o,item:t},e.__workletHash=0xd14c9c0e639,e.__initData=D,e}()),u=(0,g.m)(function(){const e=function(){return{color:o.value>.5?"var(--swm-navy-light-100)":"var(--swm-border)"}};return e.__closure={progress:o},e.__workletHash=9645850522955,e.__initData=x,e}());return r.createElement(_.Ay,{item:!0,style:A.box,xs:3},r.createElement(h.X,{style:[A.item,t.isVisible?null:A.hidden,l,i],ref:a},r.createElement(C.n,{style:[u,A.label,i]},t.label)),r.createElement(s.A,{style:A.subtext},t.subtext))}const A=l.A.create({box:{flex:1,flexDirection:"column",textAlign:"center",maxWidth:900},item:{paddingVertical:16,backgroundColor:"var(--ifm-background-color)",borderWidth:1,borderColor:"var(--swm-border)",transition:"all 350ms ease-in-out"},label:{color:"var(--swm-border)",transition:"color 350ms ease-in-out",fontWeight:"500",fontSize:22},subtext:{fontWeight:"300",fontSize:14,backgroundColor:"var(--swm-off-background)"},hidden:{opacity:0}});function T(e){let{startPoint:t,endPoint:n}=e;const a={x:Math.min(t.x,n.x),y:Math.min(t.y,n.y)},i=Math.abs(n.x-t.x)+103,o=Math.abs(n.y-t.y)+103;a.x-=51.5,a.y-=51.5,t.x=t.x-a.x,t.y=t.y-a.y,n.x=n.x-a.x,n.y=n.y-a.y;const s=(e,t)=>(e+t)/2,l=s(t.x,n.x),c=s(t.y,n.y),d={x:l-n.x,y:c-n.y},u=(e,t)=>{let{x:n,y:a}=e;let r=t/Math.hypot(n,a);return Number.isFinite(r)||(r=0),{x:n*r,y:a*r}},g=(e,t)=>{let{x:n,y:a}=e;const r=Math.PI*t/180,i=Math.cos(r),o=Math.sin(r);return{x:n*i-a*o,y:n*o+a*i}},h=u(d,9),m=g(h,50),p=g(h,-50),y=(e=>{let{x:t,y:n}=e;return{x:-t,y:-n}})(u(d,5)),f="var(--swm-border)";return r.createElement("svg",{width:i,height:o,style:{position:"absolute",left:0,top:0,zIndex:-1,backgroundColor:"transparent",transform:`translate(${a.x}px, ${a.y}px)`}},r.createElement("line",{stroke:f,strokeLinecap:"round",strokeWidth:3,x1:l+y.x,y1:c+y.y,x2:l+p.x,y2:c+p.y}),r.createElement("line",{stroke:f,strokeLinecap:"round",strokeWidth:3,x1:l+y.x,y1:c+y.y,x2:l+m.x,y2:c+m.y}))}function k(e){let{chartManager:t}=e;const n=(0,r.useRef)([]),a=(0,r.useRef)([]),i=(0,r.useRef)(null),[s,l]=(0,r.useState)(0);(0,r.useEffect)((()=>{const e=setTimeout((()=>{l(s+1)}),0);return()=>clearTimeout(e)}),[]);const c=(e,t)=>e+t/2;return a.current=n.current.map((e=>{if(!e)return{x:0,y:0};const t=e.getBoundingClientRect(),n=i.current.getBoundingClientRect();return{x:c(t.left,t.width)-n.left,y:c(t.top,t.height)-n.top}})),r.createElement(o.A,{style:M.container,ref:i},r.createElement(_.Ay,{container:!0,rowGap:4},t.layout.map(((e,a)=>r.createElement(_.Ay,{container:!0,spacing:4,key:a},e.map((e=>t.items[e])).map(((e,a)=>r.createElement(I,{key:a,innerRef:t=>n.current[e.id]=t,item:e,chartManager:t}))))))),t.connections.map((e=>a.current[e.from]&&a.current[e.to]?r.createElement(T,{key:e.id,startPoint:{x:a.current[e.from].x,y:a.current[e.from].y},endPoint:{x:a.current[e.to].x,y:a.current[e.to].y}}):r.createElement(o.A,{key:e.id}))))}const M=l.A.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%",paddingHorizontal:40}}),L=1298,S={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=true;}"},U={code:"function anonymous(){const{scale,withSpring}=this.__closure;scale.value=withSpring(0.7);}"},P={code:"function anonymous(){const{offset,withSpring,scale,withTiming,pressed}=this.__closure;offset.value=withSpring(0,{damping:20,stiffness:150});scale.value=withTiming(1);pressed.value=false;}"},G={code:"function anonymous(event){const{offset}=this.__closure;offset.value=event.translationX;}"},z={code:"function anonymous(){const{scale,withSpring}=this.__closure;scale.value=withSpring(1.3,{stiffness:175});}"},R={code:"function anonymous(){const{scale,withTiming}=this.__closure;scale.value=withTiming(1);}"},F={code:"function anonymous(){const{withSpring,offset,scale,pressed}=this.__closure;return{transform:[{translateX:withSpring(offset.value,{duration:1000})},{scale:scale.value}],backgroundColor:pressed.value?'#ffe04b':'#b58df1'};}"};function B(){const e=(0,r.useRef)(new b),[t,n,l]=(0,r.useMemo)((()=>e.current.newGesture(a.q6.Pan())),[]),[m,p,y]=(0,r.useMemo)((()=>e.current.newGesture(a.q6.LongPress())),[]);(0,r.useEffect)((()=>{l(),y()}),[]);const f=t.idObject,v=m.idObject,E=(0,i.A)().width>L,w=[[f.undetermined,b.EMPTY_SPACE_ID,v.undetermined,b.EMPTY_SPACE_ID],[f.began,f.failed,v.began,v.failed],[f.active,f.cancelled,v.active,v.cancelled],[f.end,b.EMPTY_SPACE_ID,v.end,b.EMPTY_SPACE_ID]],N=[[f.undetermined],[f.began,f.failed],[f.active,f.cancelled],[f.end,b.EMPTY_SPACE_ID]];e.current.layout=E?w:N;const _=(0,c.U)(!1),C=(0,c.U)(0),D=(0,c.U)(1),x=a.q6.Pan().onBegin(function(){const e=function(){_.value=!0};return e.__closure={pressed:_},e.__workletHash=9733417743160,e.__initData=S,e}()).onStart(function(){const e=function(){D.value=(0,d.e)(.7)};return e.__closure={scale:D,withSpring:d.e},e.__workletHash=2001549828618,e.__initData=U,e}()).onFinalize(function(){const e=function(){C.value=(0,d.e)(0,{damping:20,stiffness:150}),D.value=(0,u.f)(1),_.value=!1};return e.__closure={offset:C,withSpring:d.e,scale:D,withTiming:u.f,pressed:_},e.__workletHash=4044435718847,e.__initData=P,e}()).onUpdate(function(){const e=function(e){C.value=e.translationX};return e.__closure={offset:C},e.__workletHash=5437248460915,e.__initData=G,e}()),I=a.q6.LongPress().onStart(function(){const e=function(){D.value=(0,d.e)(1.3,{stiffness:175})};return e.__closure={scale:D,withSpring:d.e},e.__workletHash=0xf95b1a0b7a9,e.__initData=z,e}()).onFinalize(function(){const e=function(){D.value=(0,u.f)(1)};return e.__closure={scale:D,withTiming:u.f},e.__workletHash=0xa9d2b4a1cb2,e.__initData=R,e}()),A=a.q6.Simultaneous(x,n),T=a.q6.Simultaneous(I,p),M=a.q6.Race(A,T),B=(0,g.m)(function(){const e=()=>({transform:[{translateX:(0,d.e)(C.value,{duration:1e3})},{scale:D.value}],backgroundColor:_.value?"#ffe04b":"#b58df1"});return e.__closure={withSpring:d.e,offset:C,scale:D,pressed:_},e.__workletHash=4586616976440,e.__initData=F,e}());return r.createElement(r.Fragment,null,r.createElement(o.A,{style:[V.container,V.chartContainer]},r.createElement(o.A,{style:V.row},r.createElement(s.A,{style:V.label},"Gesture.Pan()"),E&&r.createElement(s.A,{style:V.label},"Gesture.LongPress()")),r.createElement(k,{chartManager:e.current})),r.createElement(a.Zy,{style:V.container},r.createElement(o.A,{style:V.container},r.createElement(a.Sl,{gesture:M},r.createElement(h.X,{style:[V.circle,B]})))))}const V=l.A.create({chartContainer:{marginBottom:60},container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},circle:{height:120,width:120,borderRadius:500,cursor:"grab"},row:{flexDirection:"row",justifyContent:"space-around",width:"100%",marginBottom:20},label:{fontSize:24,fontWeight:"bold",marginTop:24,marginBottom:14,color:"var(--ifm-font-color-base)"}})},3929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(9668),r=(n(6540),n(5680)),i=n(4467);const o={id:"states-events",title:"Gesture states & events",sidebar_label:"Gesture states & events",sidebar_position:4},s=void 0,l={unversionedId:"fundamentals/states-events",id:"fundamentals/states-events",title:"Gesture states & events",description:'Every gesture can be treated as "state machine".',source:"@site/docs/fundamentals/states-events.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/states-events",permalink:"/react-native-gesture-handler/docs/fundamentals/states-events",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/fundamentals/states-events.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"states-events",title:"Gesture states & events",sidebar_label:"Gesture states & events",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Gesture composition & interactions",permalink:"/react-native-gesture-handler/docs/fundamentals/gesture-composition"},next:{title:"Guides",permalink:"/react-native-gesture-handler/docs/category/guides"}},c={},d=[{value:"State flows",id:"state-flows",level:2},{value:"Events",id:"events",level:2},{value:"<code>onBegin</code>",id:"onbegin",level:3},{value:"<code>onStart</code>",id:"onstart",level:3},{value:"<code>onEnd</code>",id:"onend",level:3},{value:"<code>onFinalize</code>",id:"onfinalize",level:3},{value:"<code>onUpdate</code>",id:"onupdate",level:3},{value:"<code>onPointerDown</code>",id:"onpointerdown",level:3},{value:"<code>onPointerMove</code>",id:"onpointermove",level:3},{value:"<code>onPointerUp</code>",id:"onpointerup",level:3},{value:"<code>onPointerCancelled</code>",id:"onpointercancelled",level:3}],u=(g="InteractiveExample",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",e)});var g;const h={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Every gesture can be treated as ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Finite-state_machine"},'"state machine"'),".\nAt any given time, each handler instance has an assigned state that can change when new touch events occur or can be forced to change by the touch system in certain circumstances."),(0,r.yg)("p",null,"A gesture can be in one of the six possible states:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"undetermined"},"UNDETERMINED"),(0,r.yg)("p",{parentName:"li"},"This is the initial state of each gesture recognizer and it goes into this state after it's done recognizing a gesture.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"failed"},"FAILED"),(0,r.yg)("p",{parentName:"li"},"A gesture recognizer received some touches but for some reason didn't recognize them. For example, if a finger travels more distance than a defined ",(0,r.yg)("inlineCode",{parentName:"p"},"maxDist")," property allows, then the gesture won't become active but will fail instead. Afterwards, it's state will be reset to ",(0,r.yg)("inlineCode",{parentName:"p"},"UNDETERMINED"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"began"},"BEGAN"),(0,r.yg)("p",{parentName:"li"},"Gesture recognizer has started receiving touch stream but hasn't yet received enough data to either ",(0,r.yg)("a",{parentName:"p",href:"#failed"},"fail")," or ",(0,r.yg)("a",{parentName:"p",href:"#active"},"activate"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"cancelled"},"CANCELLED"),(0,r.yg)("p",{parentName:"li"},"The gesture recognizer has received a signal (possibly new touches or a command from the touch system controller) resulting in the cancellation of a continuous gesture. The gesture's state will become ",(0,r.yg)("inlineCode",{parentName:"p"},"CANCELLED")," until it is finally reset to the initial state, ",(0,r.yg)("inlineCode",{parentName:"p"},"UNDETERMINED"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"active"},"ACTIVE"),(0,r.yg)("p",{parentName:"li"},"Recognizer has recognized a gesture. It will become and stay in the ",(0,r.yg)("inlineCode",{parentName:"p"},"ACTIVE")," state until the gesture finishes (e.g. when user lifts the finger) or gets cancelled by the touch system. Under normal circumstances the state will then turn into ",(0,r.yg)("inlineCode",{parentName:"p"},"END"),". In the case that a gesture is cancelled by the touch system, its state would then become ",(0,r.yg)("inlineCode",{parentName:"p"},"CANCELLED"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("h4",{parentName:"li",id:"end"},"END"),(0,r.yg)("p",{parentName:"li"},"The gesture recognizer has received touches signalling the end of a gesture. Its state will become ",(0,r.yg)("inlineCode",{parentName:"p"},"END")," until it is reset to ",(0,r.yg)("inlineCode",{parentName:"p"},"UNDETERMINED"),"."))),(0,r.yg)("h2",{id:"state-flows"},"State flows"),(0,r.yg)("p",null,"The most typical flow of state is when a gesture picks up on an initial touch event, then recognizes it, then acknowledges its ending and resets itself back to the initial state."),(0,r.yg)("p",null,"The flow looks as follows:"),(0,r.yg)(u,{component:(0,r.yg)(i.A,{mdxType:"GestureStateFlowExample"}),label:"Drag or long-press the circle",larger:!0,mdxType:"InteractiveExample"}),(0,r.yg)("h2",{id:"events"},"Events"),(0,r.yg)("p",null,"There are three types of events in RNGH2: ",(0,r.yg)("inlineCode",{parentName:"p"},"StateChangeEvent"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"GestureEvent")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"PointerEvent"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"StateChangeEvent")," is send every time a gesture moves to a different state, while ",(0,r.yg)("inlineCode",{parentName:"p"},"GestureEvent")," is send every time a gesture is updated. The first two carry a gesture-specific data and a ",(0,r.yg)("inlineCode",{parentName:"p"},"state")," property, indicating the current state of the gesture. ",(0,r.yg)("inlineCode",{parentName:"p"},"StateChangeEvent")," also carries a ",(0,r.yg)("inlineCode",{parentName:"p"},"oldState")," property indicating the previous state of the gesture. ",(0,r.yg)("inlineCode",{parentName:"p"},"PointerEvent")," carries information about raw touch events, like touching the screen or moving the finger. These events are handled internally before they are passed along to the correct callbacks:"),(0,r.yg)("h3",{id:"onbegin"},(0,r.yg)("inlineCode",{parentName:"h3"},"onBegin")),(0,r.yg)("p",null,"Is called when a gesture transitions to the ",(0,r.yg)("a",{parentName:"p",href:"#began"},(0,r.yg)("inlineCode",{parentName:"a"},"BEGAN"))," state."),(0,r.yg)("h3",{id:"onstart"},(0,r.yg)("inlineCode",{parentName:"h3"},"onStart")),(0,r.yg)("p",null,"Is called when a gesture transitions to the ",(0,r.yg)("a",{parentName:"p",href:"#active"},(0,r.yg)("inlineCode",{parentName:"a"},"ACTIVE"))," state."),(0,r.yg)("h3",{id:"onend"},(0,r.yg)("inlineCode",{parentName:"h3"},"onEnd")),(0,r.yg)("p",null,"Is called when a gesture transitions from the ",(0,r.yg)("a",{parentName:"p",href:"#active"},(0,r.yg)("inlineCode",{parentName:"a"},"ACTIVE"))," state to the ",(0,r.yg)("a",{parentName:"p",href:"#end"},(0,r.yg)("inlineCode",{parentName:"a"},"END")),", ",(0,r.yg)("a",{parentName:"p",href:"#failed"},(0,r.yg)("inlineCode",{parentName:"a"},"FAILED")),", or ",(0,r.yg)("a",{parentName:"p",href:"#cancelled"},(0,r.yg)("inlineCode",{parentName:"a"},"CANCELLED"))," state. If the gesture transitions to the ",(0,r.yg)("a",{parentName:"p",href:"#end"},(0,r.yg)("inlineCode",{parentName:"a"},"END"))," state, the ",(0,r.yg)("inlineCode",{parentName:"p"},"success")," argument is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," otherwise it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,r.yg)("h3",{id:"onfinalize"},(0,r.yg)("inlineCode",{parentName:"h3"},"onFinalize")),(0,r.yg)("p",null,"Is called when a gesture transitions to the ",(0,r.yg)("a",{parentName:"p",href:"#end"},(0,r.yg)("inlineCode",{parentName:"a"},"END")),", ",(0,r.yg)("a",{parentName:"p",href:"#failed"},(0,r.yg)("inlineCode",{parentName:"a"},"FAILED")),", or ",(0,r.yg)("a",{parentName:"p",href:"#cancelled"},(0,r.yg)("inlineCode",{parentName:"a"},"CANCELLED"))," state. If the gesture transitions to the ",(0,r.yg)("a",{parentName:"p",href:"#end"},(0,r.yg)("inlineCode",{parentName:"a"},"END"))," state, the ",(0,r.yg)("inlineCode",{parentName:"p"},"success")," argument is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," otherwise it is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),". If the gesture transitions from the ",(0,r.yg)("a",{parentName:"p",href:"#active"},(0,r.yg)("inlineCode",{parentName:"a"},"ACTIVE"))," state, it will be called after ",(0,r.yg)("inlineCode",{parentName:"p"},"onEnd"),"."),(0,r.yg)("h3",{id:"onupdate"},(0,r.yg)("inlineCode",{parentName:"h3"},"onUpdate")),(0,r.yg)("p",null,"Is called every time a gesture is updated while it is in the ",(0,r.yg)("a",{parentName:"p",href:"#active"},(0,r.yg)("inlineCode",{parentName:"a"},"ACTIVE"))," state."),(0,r.yg)("h3",{id:"onpointerdown"},(0,r.yg)("inlineCode",{parentName:"h3"},"onPointerDown")),(0,r.yg)("p",null,"Is called when new pointers are placed on the screen. It may carry information about more than one pointer because the events are batched."),(0,r.yg)("h3",{id:"onpointermove"},(0,r.yg)("inlineCode",{parentName:"h3"},"onPointerMove")),(0,r.yg)("p",null,"Is called when pointers are moved on the screen. It may carry information about more than one pointer because the events are batched."),(0,r.yg)("h3",{id:"onpointerup"},(0,r.yg)("inlineCode",{parentName:"h3"},"onPointerUp")),(0,r.yg)("p",null,"Is called when pointers are lifted from the screen. It may carry information about more than one pointer because the events are batched."),(0,r.yg)("h3",{id:"onpointercancelled"},(0,r.yg)("inlineCode",{parentName:"h3"},"onPointerCancelled")),(0,r.yg)("p",null,"Is called when there will be no more information about this pointer. It may be called because the gesture has ended or was interrupted. It may carry information about more than one pointer because the events are batched."))}p.isMDXComponent=!0}}]);