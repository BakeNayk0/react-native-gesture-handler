/*! For license information please see 4692.315d3b37.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[4692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2527:(e,t,r)=>{r.d(t,{ZP:()=>de});var n=r(102),o=r(3117),i=r(7294),a=r(6010),s=r(5408),c=r(9766),l=r(4920);const p=["sx"],u=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:l.Z;return Object.keys(e).forEach((t=>{o[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n};var d=r(5042),m=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const f=(0,d.Z)((function(e){return m.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var h=r(2443),g=r(444),y=r(8137),v=r(7278),b=f,k=function(e){return"theme"!==e},w=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?b:k},x=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},S=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;(0,g.hC)(t,r,n);(0,v.L)((function(){return(0,g.My)(t,r,n)}));return null};const O=function e(t,r){var n,a,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(n=r.label,a=r.target);var l=x(t,r,s),p=l||w(c),u=!p("as");return function(){var d=arguments,m=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&m.push("label:"+n+";"),null==d[0]||void 0===d[0].raw)m.push.apply(m,d);else{0,m.push(d[0][0]);for(var f=d.length,v=1;v<f;v++)m.push(d[v],d[0][v])}var b=(0,h.w)((function(e,t,r){var n=u&&e.as||c,o="",s=[],d=e;if(null==e.theme){for(var f in d={},e)d[f]=e[f];d.theme=(0,i.useContext)(h.T)}"string"==typeof e.className?o=(0,g.fp)(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var v=(0,y.O)(m.concat(s),t.registered,d);o+=t.key+"-"+v.name,void 0!==a&&(o+=" "+a);var b=u&&void 0===l?w(n):p,k={};for(var x in e)u&&"as"===x||b(x)&&(k[x]=e[x]);return k.className=o,k.ref=r,(0,i.createElement)(i.Fragment,null,(0,i.createElement)(S,{cache:t,serialized:v,isStringTag:"string"==typeof n}),(0,i.createElement)(n,k))}));return b.displayName=void 0!==n?n:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",b.defaultProps=t.defaultProps,b.__emotion_real=b,b.__emotion_base=c,b.__emotion_styles=m,b.__emotion_forwardProp=l,Object.defineProperty(b,"toString",{value:function(){return"."+a}}),b.withComponent=function(t,n){return e(t,(0,o.Z)({},r,n,{shouldForwardProp:x(b,n,!0)})).apply(void 0,m)},b}};var _=O.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){_[e]=_(e)}));const P=_;const Z=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))};var T=r(6842),$=r(601);const E=["variant"];function j(e){return 0===e.length}function C(e){const{variant:t}=e,r=(0,n.Z)(e,E);let o=t||"";return Object.keys(r).sort().forEach((t=>{o+="color"===t?j(o)?e[t]:(0,$.Z)(e[t]):`${j(o)?t:(0,$.Z)(t)}${(0,$.Z)(e[t].toString())}`})),o}var A=r(6523);const M=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];const R=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,N=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);const n={};return r.forEach((e=>{const t=C(e.props);n[t]=e.style})),n},z=(e,t,r,n)=>{var o,i;const{ownerState:a={}}=e,s=[],c=null==r||null==(o=r.components)||null==(i=o[n])?void 0:i.variants;return c&&c.forEach((r=>{let n=!0;Object.keys(r.props).forEach((t=>{a[t]!==r.props[t]&&e[t]!==r.props[t]&&(n=!1)})),n&&s.push(t[C(r.props)])})),s};function W(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const I=(0,T.Z)();function L({defaultTheme:e,theme:t,themeId:r}){return n=t,0===Object.keys(n).length?e:t[r]||t;var n}const F=(0,r(6073).Z)();var D=r(606);const q=function(e={}){const{themeId:t,defaultTheme:r=I,rootShouldForwardProp:i=W,slotShouldForwardProp:a=W}=e,s=e=>(0,A.Z)((0,o.Z)({},e,{theme:L((0,o.Z)({},e,{defaultTheme:r,themeId:t}))}));return s.__mui_systemSx=!0,(e,c={})=>{Z(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:l,slot:p,skipVariantsResolver:u,skipSx:d,overridesResolver:m}=c,f=(0,n.Z)(c,M),h=void 0!==u?u:p&&"Root"!==p||!1,g=d||!1;let y=W;"Root"===p?y=i:p?y=a:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(y=void 0);const v=function(e,t){return P(e,t)}(e,(0,o.Z)({shouldForwardProp:y,label:undefined},f)),b=(e,...n)=>{const i=n?n.map((e=>"function"==typeof e&&e.__emotion_real!==e?n=>e((0,o.Z)({},n,{theme:L((0,o.Z)({},n,{defaultTheme:r,themeId:t}))})):e)):[];let a=e;l&&m&&i.push((e=>{const n=L((0,o.Z)({},e,{defaultTheme:r,themeId:t})),i=R(l,n);if(i){const t={};return Object.entries(i).forEach((([r,i])=>{t[r]="function"==typeof i?i((0,o.Z)({},e,{theme:n})):i})),m(e,t)}return null})),l&&!h&&i.push((e=>{const n=L((0,o.Z)({},e,{defaultTheme:r,themeId:t}));return z(e,N(l,n),n,l)})),g||i.push(s);const c=i.length-n.length;if(Array.isArray(e)&&c>0){const t=new Array(c).fill("");a=[...e,...t],a.raw=[...e.raw,...t]}else"function"==typeof e&&e.__emotion_real!==e&&(a=n=>e((0,o.Z)({},n,{theme:L((0,o.Z)({},n,{defaultTheme:r,themeId:t}))})));return v(a,...i)};return v.withConfig&&(b.withConfig=v.withConfig),b}}({themeId:D.Z,defaultTheme:F,rootShouldForwardProp:e=>W(e)&&"classes"!==e}),H=q;function B(e,t){const r=(0,o.Z)({},t);return Object.keys(e).forEach((n=>{if(n.toString().match(/^(components|slots)$/))r[n]=(0,o.Z)({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const i=e[n]||{},a=t[n];r[n]={},a&&Object.keys(a)?i&&Object.keys(i)?(r[n]=(0,o.Z)({},a),Object.keys(i).forEach((e=>{r[n][e]=B(i[e],a[e])}))):r[n]=a:r[n]=i}else void 0===r[n]&&(r[n]=e[n])})),r}function G(e){const{theme:t,name:r,props:n}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?B(t.components[r].defaultProps,n):n}var U=r(4168);const V=(0,T.Z)();const X=function(e=V){return(0,U.Z)(e)};function Y({props:e,name:t}){return function({props:e,name:t,defaultTheme:r,themeId:n}){let o=X(r);return n&&(o=o[n]||o),G({theme:o,name:t,props:e})}({props:e,name:t,defaultTheme:F,themeId:D.Z})}const K=i.createContext(),J=e=>e,Q=(()=>{let e=J;return{configure(t){e=t},generate:t=>e(t),reset(){e=J}}})(),ee={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function te(e,t,r="Mui"){const n=ee[t];return n?`${r}-${n}`:`${Q.generate(e)}-${t}`}function re(e){return te("MuiGrid",e)}const ne=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],oe=function(e,t,r="Mui"){const n={};return t.forEach((t=>{n[t]=te(e,t,r)})),n}("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...ne.map((e=>`grid-xs-${e}`)),...ne.map((e=>`grid-sm-${e}`)),...ne.map((e=>`grid-md-${e}`)),...ne.map((e=>`grid-lg-${e}`)),...ne.map((e=>`grid-xl-${e}`))]);var ie=r(5893);const ae=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function se(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function ce({breakpoints:e,values:t}){let r="";Object.keys(t).forEach((e=>{""===r&&0!==t[e]&&(r=e)}));const n=Object.keys(e).sort(((t,r)=>e[t]-e[r]));return n.slice(0,n.indexOf(r))}const le=H("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:n,direction:o,item:i,spacing:a,wrap:s,zeroMinWidth:c,breakpoints:l}=r;let p=[];n&&(p=function(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];const n=[];return t.forEach((t=>{const o=e[t];Number(o)>0&&n.push(r[`spacing-${t}-${String(o)}`])})),n}(a,l,t));const u=[];return l.forEach((e=>{const n=r[e];n&&u.push(t[`grid-${e}-${String(n)}`])})),[t.root,n&&t.container,i&&t.item,c&&t.zeroMinWidth,...p,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const r=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},r,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${oe.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:r,rowSpacing:n}=t;let o={};if(r&&0!==n){const t=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});let r;"object"==typeof t&&(r=ce({breakpoints:e.breakpoints.values,values:t})),o=(0,s.k9)({theme:e},t,((t,n)=>{var o;const i=e.spacing(t);return"0px"!==i?{marginTop:`-${se(i)}`,[`& > .${oe.item}`]:{paddingTop:se(i)}}:null!=(o=r)&&o.includes(n)?{}:{marginTop:0,[`& > .${oe.item}`]:{paddingTop:0}}}))}return o}),(function({theme:e,ownerState:t}){const{container:r,columnSpacing:n}=t;let o={};if(r&&0!==n){const t=(0,s.P$)({values:n,breakpoints:e.breakpoints.values});let r;"object"==typeof t&&(r=ce({breakpoints:e.breakpoints.values,values:t})),o=(0,s.k9)({theme:e},t,((t,n)=>{var o;const i=e.spacing(t);return"0px"!==i?{width:`calc(100% + ${se(i)})`,marginLeft:`-${se(i)}`,[`& > .${oe.item}`]:{paddingLeft:se(i)}}:null!=(o=r)&&o.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${oe.item}`]:{paddingLeft:0}}}))}return o}),(function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce(((n,i)=>{let a={};if(t[i]&&(r=t[i]),!r)return n;if(!0===r)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof c?c[i]:c;if(null==l)return n;const p=Math.round(r/l*1e8)/1e6+"%";let u={};if(t.container&&t.item&&0!==t.columnSpacing){const r=e.spacing(t.columnSpacing);if("0px"!==r){const e=`calc(${p} + ${se(r)})`;u={flexBasis:e,maxWidth:e}}}a=(0,o.Z)({flexBasis:p,flexGrow:0,maxWidth:p},u)}return 0===e.breakpoints.values[i]?Object.assign(n,a):n[e.breakpoints.up(i)]=a,n}),{})}));const pe=e=>{const{classes:t,container:r,direction:n,item:o,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:c}=e;let l=[];r&&(l=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const r=[];return t.forEach((t=>{const n=e[t];if(Number(n)>0){const e=`spacing-${t}-${String(n)}`;r.push(e)}})),r}(i,c));const p=[];c.forEach((t=>{const r=e[t];r&&p.push(`grid-${t}-${String(r)}`)}));return function(e,t,r){const n={};return Object.keys(e).forEach((o=>{n[o]=e[o].reduce(((e,n)=>{if(n){const o=t(n);""!==o&&e.push(o),r&&r[n]&&e.push(r[n])}return e}),[]).join(" ")})),n}({root:["root",r&&"container",o&&"item",s&&"zeroMinWidth",...l,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...p]},re,t)},ue=i.forwardRef((function(e,t){const r=Y({props:e,name:"MuiGrid"}),{breakpoints:s}=function(){const e=X(F);return e[D.Z]||e}(),l=function(e){const{sx:t}=e,r=(0,n.Z)(e,p),{systemProps:i,otherProps:a}=u(r);let s;return s=Array.isArray(t)?[i,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,c.P)(r)?(0,o.Z)({},i,r):i}:(0,o.Z)({},i,t),(0,o.Z)({},a,{sx:s})}(r),{className:d,columns:m,columnSpacing:f,component:h="div",container:g=!1,direction:y="row",item:v=!1,rowSpacing:b,spacing:k=0,wrap:w="wrap",zeroMinWidth:x=!1}=l,S=(0,n.Z)(l,ae),O=b||k,_=f||k,P=i.useContext(K),Z=g?m||12:P,T={},$=(0,o.Z)({},S);s.keys.forEach((e=>{null!=S[e]&&(T[e]=S[e],delete $[e])}));const E=(0,o.Z)({},l,{columns:Z,container:g,direction:y,item:v,rowSpacing:O,columnSpacing:_,wrap:w,zeroMinWidth:x,spacing:k},T,{breakpoints:s.keys}),j=pe(E);return(0,ie.jsx)(K.Provider,{value:Z,children:(0,ie.jsx)(le,(0,o.Z)({ownerState:E,className:(0,a.Z)(j.root,d),as:h,ref:t},$))})}));const de=ue},1682:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5998),o=r(7294);function i(){var e=(0,o.useState)((()=>n.Z.get("window"))),t=e[0],r=e[1];return(0,o.useEffect)((()=>{function e(e){var t=e.window;null!=t&&r(t)}return n.Z.addEventListener("change",e),r(n.Z.get("window")),()=>{n.Z.removeEventListener("change",e)}}),[]),t}}}]);