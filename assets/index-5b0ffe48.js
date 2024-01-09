(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Qh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Md={exports:{}},ao={},$d={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),Xh=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),qh=Symbol.for("react.profiler"),Zh=Symbol.for("react.provider"),Jh=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),nm=Symbol.for("react.memo"),rm=Symbol.for("react.lazy"),Ru=Symbol.iterator;function im(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jd=Object.assign,Ad={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Ld}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nd(){}Nd.prototype=Ir.prototype;function _a(e,t,n){this.props=e,this.context=t,this.refs=Ad,this.updater=n||Ld}var za=_a.prototype=new Nd;za.constructor=_a;jd(za,Ir.prototype);za.isPureReactComponent=!0;var Vu=Array.isArray,bd=Object.prototype.hasOwnProperty,Ia={current:null},Fd={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)bd.call(t,r)&&!Fd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pi,type:e,key:s,ref:o,props:i,_owner:Ia.current}}function sm(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function om(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bu=/\/+/g;function Lo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?om(""+e.key):t.toString(36)}function as(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Pi:case Yh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Lo(o,0):r,Vu(i)?(n="",e!=null&&(n=e.replace(Bu,"$&/")+"/"),as(i,t,n,"",function(u){return u})):i!=null&&(Oa(i)&&(i=sm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Vu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Lo(s,a);o+=as(s,t,n,l,i)}else if(l=im(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Lo(s,a++),o+=as(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ji(e,t,n){if(e==null)return e;var r=[],i=0;return as(e,r,"","",function(s){return t.call(n,s,i++)}),r}function lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},us={transition:null},am={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:us,ReactCurrentOwner:Ia};Z.Children={map:ji,forEach:function(e,t,n){ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ji(e,function(){t++}),t},toArray:function(e){return ji(e,function(t){return t})||[]},only:function(e){if(!Oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Ir;Z.Fragment=Xh;Z.Profiler=qh;Z.PureComponent=_a;Z.StrictMode=Kh;Z.Suspense=tm;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ia.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)bd.call(t,l)&&!Fd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pi,type:e.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(e){return e={$$typeof:Jh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zh,_context:e},e.Consumer=e};Z.createElement=Dd;Z.createFactory=function(e){var t=Dd.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:em,render:e}};Z.isValidElement=Oa;Z.lazy=function(e){return{$$typeof:rm,_payload:{_status:-1,_result:e},_init:lm}};Z.memo=function(e,t){return{$$typeof:nm,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=us.transition;us.transition={};try{e()}finally{us.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return Be.current.useCallback(e,t)};Z.useContext=function(e){return Be.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Be.current.useEffect(e,t)};Z.useId=function(){return Be.current.useId()};Z.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Be.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};Z.useRef=function(e){return Be.current.useRef(e)};Z.useState=function(e){return Be.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Be.current.useTransition()};Z.version="18.2.0";$d.exports=Z;var Y=$d.exports;const X=Qh(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=Y,cm=Symbol.for("react.element"),dm=Symbol.for("react.fragment"),fm=Object.prototype.hasOwnProperty,pm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hm={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)fm.call(t,r)&&!hm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cm,type:e,key:s,ref:o,props:i,_owner:pm.current}}ao.Fragment=dm;ao.jsx=Rd;ao.jsxs=Rd;Md.exports=ao;var v=Md.exports,Sl={},Vd={exports:{}},nt={},Bd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,b){var W=N.length;N.push(b);e:for(;0<W;){var te=W-1>>>1,J=N[te];if(0<i(J,b))N[te]=b,N[W]=J,W=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],W=N.pop();if(W!==b){N[0]=W;e:for(var te=0,J=N.length,kt=J>>>1;te<kt;){var Ue=2*(te+1)-1,Tt=N[Ue],je=Ue+1,pt=N[je];if(0>i(Tt,W))je<J&&0>i(pt,Tt)?(N[te]=pt,N[je]=W,te=je):(N[te]=Tt,N[Ue]=W,te=Ue);else if(je<J&&0>i(pt,W))N[te]=pt,N[je]=W,te=je;else break e}}return b}function i(N,b){var W=N.sortIndex-b.sortIndex;return W!==0?W:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,p=null,h=3,g=!1,x=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=N)r(u),b.sortIndex=b.expirationTime,t(l,b);else break;b=n(u)}}function S(N){if(y=!1,m(N),!x)if(n(l)!==null)x=!0,ie(E);else{var b=n(u);b!==null&&fe(S,b.startTime-N)}}function E(N,b){x=!1,y&&(y=!1,f(I),I=-1),g=!0;var W=h;try{for(m(b),p=n(l);p!==null&&(!(p.expirationTime>b)||N&&!D());){var te=p.callback;if(typeof te=="function"){p.callback=null,h=p.priorityLevel;var J=te(p.expirationTime<=b);b=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(l)&&r(l),m(b)}else r(l);p=n(l)}if(p!==null)var kt=!0;else{var Ue=n(u);Ue!==null&&fe(S,Ue.startTime-b),kt=!1}return kt}finally{p=null,h=W,g=!1}}var C=!1,P=null,I=-1,A=5,z=-1;function D(){return!(e.unstable_now()-z<A)}function $(){if(P!==null){var N=e.unstable_now();z=N;var b=!0;try{b=P(!0,N)}finally{b?L():(C=!1,P=null)}}else C=!1}var L;if(typeof d=="function")L=function(){d($)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=$,L=function(){q.postMessage(null)}}else L=function(){T($,0)};function ie(N){P=N,C||(C=!0,L())}function fe(N,b){I=T(function(){N(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,ie(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var W=h;h=b;try{return N()}finally{h=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=h;h=N;try{return b()}finally{h=W}},e.unstable_scheduleCallback=function(N,b,W){var te=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?te+W:te):W=te,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=W+J,N={id:c++,callback:b,priorityLevel:N,startTime:W,expirationTime:J,sortIndex:-1},W>te?(N.sortIndex=W,t(u,N),n(l)===null&&N===n(u)&&(y?(f(I),I=-1):y=!0,fe(S,W-te))):(N.sortIndex=J,t(l,N),x||g||(x=!0,ie(E))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var b=h;return function(){var W=h;h=b;try{return N.apply(this,arguments)}finally{h=W}}}})(Wd);Bd.exports=Wd;var mm=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=Y,tt=mm;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,oi={};function Un(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(oi[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,gm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wu={},Uu={};function vm(e){return El.call(Uu,e)?!0:El.call(Wu,e)?!1:gm.test(e)?Uu[e]=!0:(Wu[e]=!0,!1)}function ym(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xm(e,t,n,r){if(t===null||typeof t>"u"||ym(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ma=/[\-:]([a-z])/g;function $a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ma,$a);Le[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ma,$a);Le[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ma,$a);Le[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function La(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xm(t,n,i,r)&&(n=null),r||i===null?vm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),kl=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Qd=Symbol.for("react.context"),Aa=Symbol.for("react.forward_ref"),Tl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),Na=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),Hu=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=Hu&&e[Hu]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,jo;function Wr(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||""}return`
`+jo+e}var Ao=!1;function No(e,t){if(!e||Ao)return"";Ao=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ao=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function wm(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=No(e.type,!1),e;case 11:return e=No(e.type.render,!1),e;case 1:return e=No(e.type,!0),e;default:return""}}function Pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case qn:return"Portal";case kl:return"Profiler";case ja:return"StrictMode";case Tl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qd:return(e.displayName||"Context")+".Consumer";case Gd:return(e._context.displayName||"Context")+".Provider";case Aa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Na:return t=e.displayName||null,t!==null?t:Pl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Pl(e(t))}catch{}}return null}function Sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(t);case 8:return t===ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=Xd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ni(e){e._valueTracker||(e._valueTracker=Em(e))}function Kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Xd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _l(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qd(e,t){t=t.checked,t!=null&&La(e,"checked",t,!1)}function zl(e,t){qd(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Il(e,t.type,n):t.hasOwnProperty("defaultValue")&&Il(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Il(e,t,n){(t!=="number"||_s(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ur=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ur(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Zd(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bi,ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bi=bi||document.createElement("div"),bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},km=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(e){km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yr[t]=Yr[e]})});function tf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yr.hasOwnProperty(e)&&Yr[e]?(""+t).trim():t+"px"}function nf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Tm=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(Tm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,fr=null,pr=null;function Ku(e){if(e=Ii(e)){if(typeof Al!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ho(t),Al(e.stateNode,e.type,t))}}function rf(e){fr?pr?pr.push(e):pr=[e]:fr=e}function sf(){if(fr){var e=fr,t=pr;if(pr=fr=null,Ku(e),t)for(e=0;e<t.length;e++)Ku(t[e])}}function of(e,t){return e(t)}function lf(){}var bo=!1;function af(e,t,n){if(bo)return e(t,n);bo=!0;try{return of(e,t,n)}finally{bo=!1,(fr!==null||pr!==null)&&(lf(),sf())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Nl=!1;if(Yt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{Nl=!1}function Cm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Xr=!1,zs=null,Is=!1,bl=null,Pm={onError:function(e){Xr=!0,zs=e}};function _m(e,t,n,r,i,s,o,a,l){Xr=!1,zs=null,Cm.apply(Pm,arguments)}function zm(e,t,n,r,i,s,o,a,l){if(_m.apply(this,arguments),Xr){if(Xr){var u=zs;Xr=!1,zs=null}else throw Error(M(198));Is||(Is=!0,bl=u)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qu(e){if(Hn(e)!==e)throw Error(M(188))}function Im(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qu(i),e;if(s===r)return qu(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function cf(e){return e=Im(e),e!==null?df(e):null}function df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=df(e);if(t!==null)return t;e=e.sibling}return null}var ff=tt.unstable_scheduleCallback,Zu=tt.unstable_cancelCallback,Om=tt.unstable_shouldYield,Mm=tt.unstable_requestPaint,xe=tt.unstable_now,$m=tt.unstable_getCurrentPriorityLevel,Fa=tt.unstable_ImmediatePriority,pf=tt.unstable_UserBlockingPriority,Os=tt.unstable_NormalPriority,Lm=tt.unstable_LowPriority,hf=tt.unstable_IdlePriority,uo=null,jt=null;function jm(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(uo,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:bm,Am=Math.log,Nm=Math.LN2;function bm(e){return e>>>=0,e===0?32:31-(Am(e)/Nm|0)|0}var Fi=64,Di=4194304;function Hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Hr(a):(s&=o,s!==0&&(r=Hr(s)))}else o=n&~i,o!==0?r=Hr(o):s!==0&&(r=Hr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function Fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Fm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mf(){var e=Fi;return Fi<<=1,!(Fi&4194240)&&(Fi=64),e}function Fo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Rm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Da(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vf,Ra,yf,xf,wf,Dl=!1,Ri=[],cn=null,dn=null,fn=null,ui=new Map,ci=new Map,rn=[],Vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ju(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":ui.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Nr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&Ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bm(e,t,n,r,i){switch(t){case"focusin":return cn=Nr(cn,e,t,n,r,i),!0;case"dragenter":return dn=Nr(dn,e,t,n,r,i),!0;case"mouseover":return fn=Nr(fn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ui.set(s,Nr(ui.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ci.set(s,Nr(ci.get(s)||null,e,t,n,r,i)),!0}return!1}function Sf(e){var t=zn(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=uf(n),t!==null){e.blockedOn=t,wf(e.priority,function(){yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return t=Ii(n),t!==null&&Ra(t),e.blockedOn=n,!1;t.shift()}return!0}function ec(e,t,n){cs(e)&&n.delete(t)}function Wm(){Dl=!1,cn!==null&&cs(cn)&&(cn=null),dn!==null&&cs(dn)&&(dn=null),fn!==null&&cs(fn)&&(fn=null),ui.forEach(ec),ci.forEach(ec)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Dl||(Dl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Wm)))}function di(e){function t(i){return br(i,e)}if(0<Ri.length){br(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&br(cn,e),dn!==null&&br(dn,e),fn!==null&&br(fn,e),ui.forEach(t),ci.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Sf(n),n.blockedOn===null&&rn.shift()}var hr=Zt.ReactCurrentBatchConfig,$s=!0;function Um(e,t,n,r){var i=re,s=hr.transition;hr.transition=null;try{re=1,Va(e,t,n,r)}finally{re=i,hr.transition=s}}function Hm(e,t,n,r){var i=re,s=hr.transition;hr.transition=null;try{re=4,Va(e,t,n,r)}finally{re=i,hr.transition=s}}function Va(e,t,n,r){if($s){var i=Rl(e,t,n,r);if(i===null)Yo(e,t,r,Ls,n),Ju(e,r);else if(Bm(i,e,t,n,r))r.stopPropagation();else if(Ju(e,r),t&4&&-1<Vm.indexOf(e)){for(;i!==null;){var s=Ii(i);if(s!==null&&vf(s),s=Rl(e,t,n,r),s===null&&Yo(e,t,r,Ls,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yo(e,t,r,null,n)}}var Ls=null;function Rl(e,t,n,r){if(Ls=null,e=ba(r),e=zn(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ls=e,null}function Ef(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case Fa:return 1;case pf:return 4;case Os:case Lm:return 16;case hf:return 536870912;default:return 16}default:return 16}}var on=null,Ba=null,ds=null;function kf(){if(ds)return ds;var e,t=Ba,n=t.length,r,i="value"in on?on.value:on.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ds=i.slice(e,1<r?1-r:void 0)}function fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function tc(){return!1}function rt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vi:tc,this.isPropagationStopped=tc,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=rt(Or),zi=me({},Or,{view:0,detail:0}),Gm=rt(zi),Do,Ro,Fr,co=me({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(Do=e.screenX-Fr.screenX,Ro=e.screenY-Fr.screenY):Ro=Do=0,Fr=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),nc=rt(co),Qm=me({},co,{dataTransfer:0}),Ym=rt(Qm),Xm=me({},zi,{relatedTarget:0}),Vo=rt(Xm),Km=me({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=rt(Km),Zm=me({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jm=rt(Zm),eg=me({},Or,{data:0}),rc=rt(eg),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rg[e])?!!t[e]:!1}function Ua(){return ig}var sg=me({},zi,{key:function(e){if(e.key){var t=tg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),og=rt(sg),lg=me({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ic=rt(lg),ag=me({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),ug=rt(ag),cg=me({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=rt(cg),fg=me({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=rt(fg),hg=[9,13,27,32],Ha=Yt&&"CompositionEvent"in window,Kr=null;Yt&&"documentMode"in document&&(Kr=document.documentMode);var mg=Yt&&"TextEvent"in window&&!Kr,Tf=Yt&&(!Ha||Kr&&8<Kr&&11>=Kr),sc=String.fromCharCode(32),oc=!1;function Cf(e,t){switch(e){case"keyup":return hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function gg(e,t){switch(e){case"compositionend":return Pf(t);case"keypress":return t.which!==32?null:(oc=!0,sc);case"textInput":return e=t.data,e===sc&&oc?null:e;default:return null}}function vg(e,t){if(Jn)return e==="compositionend"||!Ha&&Cf(e,t)?(e=kf(),ds=Ba=on=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yg[e.type]:t==="textarea"}function _f(e,t,n,r){rf(r),t=js(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,fi=null;function xg(e){Ff(e,0)}function fo(e){var t=nr(e);if(Kd(t))return e}function wg(e,t){if(e==="change")return t}var zf=!1;if(Yt){var Bo;if(Yt){var Wo="oninput"in document;if(!Wo){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),Wo=typeof ac.oninput=="function"}Bo=Wo}else Bo=!1;zf=Bo&&(!document.documentMode||9<document.documentMode)}function uc(){qr&&(qr.detachEvent("onpropertychange",If),fi=qr=null)}function If(e){if(e.propertyName==="value"&&fo(fi)){var t=[];_f(t,fi,e,ba(e)),af(xg,t)}}function Sg(e,t,n){e==="focusin"?(uc(),qr=t,fi=n,qr.attachEvent("onpropertychange",If)):e==="focusout"&&uc()}function Eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fo(fi)}function kg(e,t){if(e==="click")return fo(t)}function Tg(e,t){if(e==="input"||e==="change")return fo(t)}function Cg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Cg;function pi(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!El.call(t,i)||!Et(e[i],t[i]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,t){var n=cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cc(n)}}function Of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mf(){for(var e=window,t=_s();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_s(e.document)}return t}function Ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pg(e){var t=Mf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Of(n.ownerDocument.documentElement,n)){if(r!==null&&Ga(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=dc(n,s);var o=dc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _g=Yt&&"documentMode"in document&&11>=document.documentMode,er=null,Vl=null,Zr=null,Bl=!1;function fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bl||er==null||er!==_s(r)||(r=er,"selectionStart"in r&&Ga(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&pi(Zr,r)||(Zr=r,r=js(Vl,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Uo={},$f={};Yt&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function po(e){if(Uo[e])return Uo[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $f)return Uo[e]=t[n];return e}var Lf=po("animationend"),jf=po("animationiteration"),Af=po("animationstart"),Nf=po("transitionend"),bf=new Map,pc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){bf.set(e,t),Un(t,[e])}for(var Ho=0;Ho<pc.length;Ho++){var Go=pc[Ho],zg=Go.toLowerCase(),Ig=Go[0].toUpperCase()+Go.slice(1);Sn(zg,"on"+Ig)}Sn(Lf,"onAnimationEnd");Sn(jf,"onAnimationIteration");Sn(Af,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Nf,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function hc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zm(r,t,void 0,e),e.currentTarget=null}function Ff(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hc(i,a,u),s=l}}}if(Is)throw e=bl,Is=!1,bl=null,e}function le(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var r=e+"__bubble";n.has(r)||(Df(t,e,2,!1),n.add(r))}function Qo(e,t,n){var r=0;t&&(r|=4),Df(n,e,r,t)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[Wi]){e[Wi]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(Og.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wi]||(t[Wi]=!0,Qo("selectionchange",!1,t))}}function Df(e,t,n,r){switch(Ef(t)){case 1:var i=Um;break;case 4:i=Hm;break;default:i=Va}n=i.bind(null,t,n,e),i=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}af(function(){var u=s,c=ba(n),p=[];e:{var h=bf.get(e);if(h!==void 0){var g=Wa,x=e;switch(e){case"keypress":if(fs(n)===0)break e;case"keydown":case"keyup":g=og;break;case"focusin":x="focus",g=Vo;break;case"focusout":x="blur",g=Vo;break;case"beforeblur":case"afterblur":g=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ug;break;case Lf:case jf:case Af:g=qm;break;case Nf:g=dg;break;case"scroll":g=Gm;break;case"wheel":g=pg;break;case"copy":case"cut":case"paste":g=Jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ic}var y=(t&4)!==0,T=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=ai(d,f),S!=null&&y.push(mi(d,S,m)))),T)break;d=d.return}0<y.length&&(h=new g(h,x,null,n,c),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==jl&&(x=n.relatedTarget||n.fromElement)&&(zn(x)||x[Xt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?zn(x):null,x!==null&&(T=Hn(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=nc,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=ic,S="onPointerLeave",f="onPointerEnter",d="pointer"),T=g==null?h:nr(g),m=x==null?h:nr(x),h=new y(S,d+"leave",g,n,c),h.target=T,h.relatedTarget=m,S=null,zn(c)===u&&(y=new y(f,d+"enter",x,n,c),y.target=m,y.relatedTarget=T,S=y),T=S,g&&x)t:{for(y=g,f=x,d=0,m=y;m;m=Yn(m))d++;for(m=0,S=f;S;S=Yn(S))m++;for(;0<d-m;)y=Yn(y),d--;for(;0<m-d;)f=Yn(f),m--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=Yn(y),f=Yn(f)}y=null}else y=null;g!==null&&mc(p,h,g,y,!1),x!==null&&T!==null&&mc(p,T,x,y,!0)}}e:{if(h=u?nr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=wg;else if(lc(h))if(zf)E=Tg;else{E=Eg;var C=Sg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=kg);if(E&&(E=E(e,u))){_f(p,E,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Il(h,"number",h.value)}switch(C=u?nr(u):window,e){case"focusin":(lc(C)||C.contentEditable==="true")&&(er=C,Vl=u,Zr=null);break;case"focusout":Zr=Vl=er=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,fc(p,n,c);break;case"selectionchange":if(_g)break;case"keydown":case"keyup":fc(p,n,c)}var P;if(Ha)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Jn?Cf(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Tf&&n.locale!=="ko"&&(Jn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Jn&&(P=kf()):(on=c,Ba="value"in on?on.value:on.textContent,Jn=!0)),C=js(u,I),0<C.length&&(I=new rc(I,e,null,n,c),p.push({event:I,listeners:C}),P?I.data=P:(P=Pf(n),P!==null&&(I.data=P)))),(P=mg?gg(e,n):vg(e,n))&&(u=js(u,"onBeforeInput"),0<u.length&&(c=new rc("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=P))}Ff(p,t)})}function mi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ai(e,n),s!=null&&r.unshift(mi(e,s,i)),s=ai(e,t),s!=null&&r.push(mi(e,s,i))),e=e.return}return r}function Yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ai(n,s),l!=null&&o.unshift(mi(n,l,a))):i||(l=ai(n,s),l!=null&&o.push(mi(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Mg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function gc(e){return(typeof e=="string"?e:""+e).replace(Mg,`
`).replace($g,"")}function Ui(e,t,n){if(t=gc(t),gc(e)!==t&&n)throw Error(M(425))}function As(){}var Wl=null,Ul=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,Lg=typeof clearTimeout=="function"?clearTimeout:void 0,vc=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof vc<"u"?function(e){return vc.resolve(null).then(e).catch(Ag)}:Gl;function Ag(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Mr,gi="__reactProps$"+Mr,Xt="__reactContainer$"+Mr,Ql="__reactEvents$"+Mr,Ng="__reactListeners$"+Mr,bg="__reactHandles$"+Mr;function zn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yc(e);e!==null;){if(n=e[Mt])return n;e=yc(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[Mt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ho(e){return e[gi]||null}var Yl=[],rr=-1;function En(e){return{current:e}}function ue(e){0>rr||(e.current=Yl[rr],Yl[rr]=null,rr--)}function oe(e,t){rr++,Yl[rr]=e.current,e.current=t}var wn={},Fe=En(wn),Ye=En(!1),Nn=wn;function xr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Ns(){ue(Ye),ue(Fe)}function xc(e,t,n){if(Fe.current!==wn)throw Error(M(168));oe(Fe,t),oe(Ye,n)}function Rf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Sm(e)||"Unknown",i));return me({},n,r)}function bs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Nn=Fe.current,oe(Fe,e),oe(Ye,Ye.current),!0}function wc(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Rf(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,ue(Ye),ue(Fe),oe(Fe,e)):ue(Ye),oe(Ye,n)}var Wt=null,mo=!1,Ko=!1;function Vf(e){Wt===null?Wt=[e]:Wt.push(e)}function Fg(e){mo=!0,Vf(e)}function kn(){if(!Ko&&Wt!==null){Ko=!0;var e=0,t=re;try{var n=Wt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,mo=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),ff(Fa,kn),i}finally{re=t,Ko=!1}}return null}var ir=[],sr=0,Fs=null,Ds=0,ot=[],lt=0,bn=null,Ht=1,Gt="";function Pn(e,t){ir[sr++]=Ds,ir[sr++]=Fs,Fs=e,Ds=t}function Bf(e,t,n){ot[lt++]=Ht,ot[lt++]=Gt,ot[lt++]=bn,bn=e;var r=Ht;e=Gt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var s=32-xt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-xt(t)+i|n<<i|r,Gt=s+e}else Ht=1<<s|n<<i|r,Gt=e}function Qa(e){e.return!==null&&(Pn(e,1),Bf(e,1,0))}function Ya(e){for(;e===Fs;)Fs=ir[--sr],ir[sr]=null,Ds=ir[--sr],ir[sr]=null;for(;e===bn;)bn=ot[--lt],ot[lt]=null,Gt=ot[--lt],ot[lt]=null,Ht=ot[--lt],ot[lt]=null}var et=null,Je=null,de=!1,vt=null;function Wf(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:Ht,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Je=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(de){var t=Je;if(t){var n=t;if(!Sc(e,t)){if(Xl(e))throw Error(M(418));t=pn(n.nextSibling);var r=et;t&&Sc(e,t)?Wf(r,n):(e.flags=e.flags&-4097|2,de=!1,et=e)}}else{if(Xl(e))throw Error(M(418));e.flags=e.flags&-4097|2,de=!1,et=e}}}function Ec(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Hi(e){if(e!==et)return!1;if(!de)return Ec(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=Je)){if(Xl(e))throw Uf(),Error(M(418));for(;t;)Wf(e,t),t=pn(t.nextSibling)}if(Ec(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?pn(e.stateNode.nextSibling):null;return!0}function Uf(){for(var e=Je;e;)e=pn(e.nextSibling)}function wr(){Je=et=null,de=!1}function Xa(e){vt===null?vt=[e]:vt.push(e)}var Dg=Zt.ReactCurrentBatchConfig;function mt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Rs=En(null),Vs=null,or=null,Ka=null;function qa(){Ka=or=Vs=null}function Za(e){var t=Rs.current;ue(Rs),e._currentValue=t}function ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function mr(e,t){Vs=e,Ka=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(Vs===null)throw Error(M(308));or=e,Vs.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var In=null;function Ja(e){In===null?In=[e]:In.push(e)}function Hf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ja(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ja(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function ps(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Da(e,n)}}function kc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,r){var i=e.updateQueue;nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(h=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(g,p,h):x,h==null)break e;p=me({},p,h);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=p):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Dn|=o,e.lanes=o,e.memoizedState=p}}function Tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Qf=new Ud.Component().refs;function Zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=gn(e),s=Qt(r,i);s.payload=t,n!=null&&(s.callback=n),t=hn(e,s,i),t!==null&&(wt(t,e,i,r),ps(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=gn(e),s=Qt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=hn(e,s,i),t!==null&&(wt(t,e,i,r),ps(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=gn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(wt(t,e,r,n),ps(t,e,r))}};function Cc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(i,s):!0}function Yf(e,t,n){var r=!1,i=wn,s=t.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Xe(t)?Nn:Fe.current,r=t.contextTypes,s=(r=r!=null)?xr(e,i):wn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function Jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Qf,eu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Xe(t)?Nn:Fe.current,i.context=xr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Zl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),Bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Qf&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _c(e){var t=e._init;return t(e._payload)}function Xf(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=vn(f,d),f.index=0,f.sibling=null,f}function s(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,S){return d===null||d.tag!==6?(d=rl(m,f.mode,S),d.return=f,d):(d=i(d,m),d.return=f,d)}function l(f,d,m,S){var E=m.type;return E===Zn?c(f,d,m.props.children,S,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&_c(E)===d.type)?(S=i(d,m.props),S.ref=Dr(f,d,m),S.return=f,S):(S=xs(m.type,m.key,m.props,null,f.mode,S),S.ref=Dr(f,d,m),S.return=f,S)}function u(f,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=il(m,f.mode,S),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function c(f,d,m,S,E){return d===null||d.tag!==7?(d=jn(m,f.mode,S,E),d.return=f,d):(d=i(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=rl(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ai:return m=xs(d.type,d.key,d.props,null,f.mode,m),m.ref=Dr(f,null,d),m.return=f,m;case qn:return d=il(d,f.mode,m),d.return=f,d;case tn:var S=d._init;return p(f,S(d._payload),m)}if(Ur(d)||jr(d))return d=jn(d,f.mode,m,null),d.return=f,d;Gi(f,d)}return null}function h(f,d,m,S){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:return m.key===E?l(f,d,m,S):null;case qn:return m.key===E?u(f,d,m,S):null;case tn:return E=m._init,h(f,d,E(m._payload),S)}if(Ur(m)||jr(m))return E!==null?null:c(f,d,m,S,null);Gi(f,m)}return null}function g(f,d,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,a(d,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ai:return f=f.get(S.key===null?m:S.key)||null,l(d,f,S,E);case qn:return f=f.get(S.key===null?m:S.key)||null,u(d,f,S,E);case tn:var C=S._init;return g(f,d,m,C(S._payload),E)}if(Ur(S)||jr(S))return f=f.get(m)||null,c(d,f,S,E,null);Gi(d,S)}return null}function x(f,d,m,S){for(var E=null,C=null,P=d,I=d=0,A=null;P!==null&&I<m.length;I++){P.index>I?(A=P,P=null):A=P.sibling;var z=h(f,P,m[I],S);if(z===null){P===null&&(P=A);break}e&&P&&z.alternate===null&&t(f,P),d=s(z,d,I),C===null?E=z:C.sibling=z,C=z,P=A}if(I===m.length)return n(f,P),de&&Pn(f,I),E;if(P===null){for(;I<m.length;I++)P=p(f,m[I],S),P!==null&&(d=s(P,d,I),C===null?E=P:C.sibling=P,C=P);return de&&Pn(f,I),E}for(P=r(f,P);I<m.length;I++)A=g(P,f,I,m[I],S),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?I:A.key),d=s(A,d,I),C===null?E=A:C.sibling=A,C=A);return e&&P.forEach(function(D){return t(f,D)}),de&&Pn(f,I),E}function y(f,d,m,S){var E=jr(m);if(typeof E!="function")throw Error(M(150));if(m=E.call(m),m==null)throw Error(M(151));for(var C=E=null,P=d,I=d=0,A=null,z=m.next();P!==null&&!z.done;I++,z=m.next()){P.index>I?(A=P,P=null):A=P.sibling;var D=h(f,P,z.value,S);if(D===null){P===null&&(P=A);break}e&&P&&D.alternate===null&&t(f,P),d=s(D,d,I),C===null?E=D:C.sibling=D,C=D,P=A}if(z.done)return n(f,P),de&&Pn(f,I),E;if(P===null){for(;!z.done;I++,z=m.next())z=p(f,z.value,S),z!==null&&(d=s(z,d,I),C===null?E=z:C.sibling=z,C=z);return de&&Pn(f,I),E}for(P=r(f,P);!z.done;I++,z=m.next())z=g(P,f,I,z.value,S),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?I:z.key),d=s(z,d,I),C===null?E=z:C.sibling=z,C=z);return e&&P.forEach(function($){return t(f,$)}),de&&Pn(f,I),E}function T(f,d,m,S){if(typeof m=="object"&&m!==null&&m.type===Zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ai:e:{for(var E=m.key,C=d;C!==null;){if(C.key===E){if(E=m.type,E===Zn){if(C.tag===7){n(f,C.sibling),d=i(C,m.props.children),d.return=f,f=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&_c(E)===C.type){n(f,C.sibling),d=i(C,m.props),d.ref=Dr(f,C,m),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}m.type===Zn?(d=jn(m.props.children,f.mode,S,m.key),d.return=f,f=d):(S=xs(m.type,m.key,m.props,null,f.mode,S),S.ref=Dr(f,d,m),S.return=f,f=S)}return o(f);case qn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=il(m,f.mode,S),d.return=f,f=d}return o(f);case tn:return C=m._init,T(f,d,C(m._payload),S)}if(Ur(m))return x(f,d,m,S);if(jr(m))return y(f,d,m,S);Gi(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=rl(m,f.mode,S),d.return=f,f=d),o(f)):n(f,d)}return T}var Sr=Xf(!0),Kf=Xf(!1),Oi={},At=En(Oi),vi=En(Oi),yi=En(Oi);function On(e){if(e===Oi)throw Error(M(174));return e}function tu(e,t){switch(oe(yi,t),oe(vi,e),oe(At,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}ue(At),oe(At,t)}function Er(){ue(At),ue(vi),ue(yi)}function qf(e){On(yi.current);var t=On(At.current),n=Ml(t,e.type);t!==n&&(oe(vi,e),oe(At,n))}function nu(e){vi.current===e&&(ue(At),ue(vi))}var pe=En(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function ru(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var hs=Zt.ReactCurrentDispatcher,Zo=Zt.ReactCurrentBatchConfig,Fn=0,he=null,Ee=null,Pe=null,Us=!1,Jr=!1,xi=0,Rg=0;function Ae(){throw Error(M(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function su(e,t,n,r,i,s){if(Fn=s,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hs.current=e===null||e.memoizedState===null?Ug:Hg,e=n(r,i),Jr){s=0;do{if(Jr=!1,xi=0,25<=s)throw Error(M(301));s+=1,Pe=Ee=null,t.updateQueue=null,hs.current=Gg,e=n(r,i)}while(Jr)}if(hs.current=Hs,t=Ee!==null&&Ee.next!==null,Fn=0,Pe=Ee=he=null,Us=!1,t)throw Error(M(300));return e}function ou(){var e=xi!==0;return xi=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?he.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function dt(){if(Ee===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Pe===null?he.memoizedState:Pe.next;if(t!==null)Pe=t,Ee=e;else{if(e===null)throw Error(M(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Pe===null?he.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function wi(e,t){return typeof t=="function"?t(e):t}function Jo(e){var t=dt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Fn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,he.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Et(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,he.lanes|=s,Dn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function el(e){var t=dt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Et(s,t.memoizedState)||(Qe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Zf(){}function Jf(e,t){var n=he,r=dt(),i=t(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,lu(np.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Si(9,tp.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(M(349));Fn&30||ep(n,t,i)}return i}function ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tp(e,t,n,r){t.value=n,t.getSnapshot=r,rp(t)&&ip(e)}function np(e,t,n){return n(function(){rp(t)&&ip(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function ip(e){var t=Kt(e,1);t!==null&&wt(t,e,1,-1)}function zc(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Wg.bind(null,he,e),[t.memoizedState,e]}function Si(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sp(){return dt().memoizedState}function ms(e,t,n,r){var i=It();he.flags|=e,i.memoizedState=Si(1|t,n,void 0,r===void 0?null:r)}function vo(e,t,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(Ee!==null){var o=Ee.memoizedState;if(s=o.destroy,r!==null&&iu(r,o.deps)){i.memoizedState=Si(t,n,s,r);return}}he.flags|=e,i.memoizedState=Si(1|t,n,s,r)}function Ic(e,t){return ms(8390656,8,e,t)}function lu(e,t){return vo(2048,8,e,t)}function op(e,t){return vo(4,2,e,t)}function lp(e,t){return vo(4,4,e,t)}function ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function up(e,t,n){return n=n!=null?n.concat([e]):null,vo(4,4,ap.bind(null,t,e),n)}function au(){}function cp(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function dp(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fp(e,t,n){return Fn&21?(Et(n,t)||(n=mf(),he.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function Vg(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Zo.transition;Zo.transition={};try{e(!1),t()}finally{re=n,Zo.transition=r}}function pp(){return dt().memoizedState}function Bg(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hp(e))mp(t,n);else if(n=Hf(e,t,n,r),n!==null){var i=Ve();wt(n,e,r,i),gp(n,t,r)}}function Wg(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hp(e))mp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,o)){var l=t.interleaved;l===null?(i.next=i,Ja(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Hf(e,t,i,r),n!==null&&(i=Ve(),wt(n,e,r,i),gp(n,t,r))}}function hp(e){var t=e.alternate;return e===he||t!==null&&t===he}function mp(e,t){Jr=Us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Da(e,n)}}var Hs={readContext:ct,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Ug={readContext:ct,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ms(4194308,4,ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){return ms(4,2,e,t)},useMemo:function(e,t){var n=It();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=It();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bg.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:zc,useDebugValue:au,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=zc(!1),t=e[0];return e=Vg.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=It();if(de){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Ie===null)throw Error(M(349));Fn&30||ep(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ic(np.bind(null,r,s,e),[e]),r.flags|=2048,Si(9,tp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=It(),t=Ie.identifierPrefix;if(de){var n=Gt,r=Ht;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hg={readContext:ct,useCallback:cp,useContext:ct,useEffect:lu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:dp,useReducer:Jo,useRef:sp,useState:function(){return Jo(wi)},useDebugValue:au,useDeferredValue:function(e){var t=dt();return fp(t,Ee.memoizedState,e)},useTransition:function(){var e=Jo(wi)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Zf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1},Gg={readContext:ct,useCallback:cp,useContext:ct,useEffect:lu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:dp,useReducer:el,useRef:sp,useState:function(){return el(wi)},useDebugValue:au,useDeferredValue:function(e){var t=dt();return Ee===null?t.memoizedState=e:fp(t,Ee.memoizedState,e)},useTransition:function(){var e=el(wi)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Zf,useSyncExternalStore:Jf,useId:pp,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=wm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function vp(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qs||(Qs=!0,ca=r),ea(e,t)},n}function yp(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ea(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ea(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Oc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lv.bind(null,e,t,n),t.then(e,e))}function Mc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $c(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var Yg=Zt.ReactCurrentOwner,Qe=!1;function De(e,t,n,r){t.child=e===null?Kf(t,null,n,r):Sr(t,e.child,n,r)}function Lc(e,t,n,r,i){n=n.render;var s=t.ref;return mr(t,i),r=su(e,t,n,r,s,i),n=ou(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(de&&n&&Qa(t),t.flags|=1,De(e,t,r,i),t.child)}function jc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!gu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,xp(e,t,s,r,i)):(e=xs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(o,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=vn(s,r),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(pi(s,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,qt(e,t,i)}return ta(e,t,n,r,i)}function wp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(ar,qe),qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(ar,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(ar,qe),qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,oe(ar,qe),qe|=r;return De(e,t,i,n),t.child}function Sp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ta(e,t,n,r,i){var s=Xe(n)?Nn:Fe.current;return s=xr(t,s),mr(t,i),n=su(e,t,n,r,s,i),r=ou(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(de&&r&&Qa(t),t.flags|=1,De(e,t,n,i),t.child)}function Ac(e,t,n,r,i){if(Xe(n)){var s=!0;bs(t)}else s=!1;if(mr(t,i),t.stateNode===null)gs(e,t),Yf(t,n,r),Jl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?Nn:Fe.current,u=xr(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pc(t,o,r,u),nn=!1;var h=t.memoizedState;o.state=h,Bs(t,r,o,i),l=t.memoizedState,a!==r||h!==l||Ye.current||nn?(typeof c=="function"&&(Zl(t,n,c,r),l=t.memoizedState),(a=nn||Cc(t,n,a,r,h,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Gf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:mt(t.type,a),o.props=u,p=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Xe(n)?Nn:Fe.current,l=xr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Pc(t,o,r,l),nn=!1,h=t.memoizedState,o.state=h,Bs(t,r,o,i);var x=t.memoizedState;a!==p||h!==x||Ye.current||nn?(typeof g=="function"&&(Zl(t,n,g,r),x=t.memoizedState),(u=nn||Cc(t,n,u,r,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return na(e,t,n,r,s,i)}function na(e,t,n,r,i,s){Sp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&wc(t,n,!1),qt(e,t,s);r=t.stateNode,Yg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Sr(t,e.child,null,s),t.child=Sr(t,null,a,s)):De(e,t,a,s),t.memoizedState=r.state,i&&wc(t,n,!0),t.child}function Ep(e){var t=e.stateNode;t.pendingContext?xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xc(e,t.context,!1),tu(e,t.containerInfo)}function Nc(e,t,n,r,i){return wr(),Xa(i),t.flags|=256,De(e,t,n,r),t.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function kp(e,t,n){var r=t.pendingProps,i=pe.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(pe,i&1),e===null)return Kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wo(o,r,0,null),e=jn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ia(n),t.memoizedState=ra,e):uu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Xg(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=vn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=vn(a,s):(s=jn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ia(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ra,r}return s=e.child,e=s.sibling,r=vn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function uu(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&Xa(r),Sr(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xg(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=tl(Error(M(422))),Qi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=wo({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Sr(t,e.child,null,o),t.child.memoizedState=ia(o),t.memoizedState=ra,s);if(!(t.mode&1))return Qi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(M(419)),r=tl(s,r,void 0),Qi(e,t,o,r)}if(a=(o&e.childLanes)!==0,Qe||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kt(e,i),wt(r,e,i,-1))}return mu(),r=tl(Error(M(421))),Qi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=av.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Je=pn(i.nextSibling),et=t,de=!0,vt=null,e!==null&&(ot[lt++]=Ht,ot[lt++]=Gt,ot[lt++]=bn,Ht=e.id,Gt=e.overflow,bn=t),t=uu(t,r.children),t.flags|=4096,t)}function bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ql(e.return,t,n)}function nl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Tp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(De(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bc(e,n,t);else if(e.tag===19)bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ws(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ws(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nl(t,!0,n,null,s);break;case"together":nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kg(e,t,n){switch(t.tag){case 3:Ep(t),wr();break;case 5:qf(t);break;case 1:Xe(t.type)&&bs(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(Rs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?kp(e,t,n):(oe(pe,pe.current&1),e=qt(e,t,n),e!==null?e.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,wp(e,t,n)}return qt(e,t,n)}var Cp,sa,Pp,_p;Cp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sa=function(){};Pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(At.current);var s=null;switch(n){case"input":i=_l(e,i),r=_l(e,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Ol(e,i),r=Ol(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=As)}$l(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};_p=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qg(e,t,n){var r=t.pendingProps;switch(Ya(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Xe(t.type)&&Ns(),Ne(t),null;case 3:return r=t.stateNode,Er(),ue(Ye),ue(Fe),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(pa(vt),vt=null))),sa(e,t),Ne(t),null;case 5:nu(t);var i=On(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ne(t),null}if(e=On(At.current),Hi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Mt]=t,r[gi]=s,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)le(Gr[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Gu(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Yu(r,s),le("invalid",r)}$l(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ui(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ui(r.textContent,a,e),i=["children",""+a]):oi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Ni(r),Qu(r,s,!0);break;case"textarea":Ni(r),Xu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=As)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Mt]=t,e[gi]=r,Cp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ll(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)le(Gr[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":Gu(e,r),i=_l(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",e);break;case"textarea":Yu(e,r),i=Ol(e,r),le("invalid",e);break;default:i=r}$l(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?nf(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ef(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&li(e,l):typeof l=="number"&&li(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",e):l!=null&&La(e,s,l,o))}switch(n){case"input":Ni(e),Qu(e,r,!1);break;case"textarea":Ni(e),Xu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?dr(e,!!r.multiple,s,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)_p(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=On(yi.current),On(At.current),Hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(s=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ui(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Ne(t),null;case 13:if(ue(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&Je!==null&&t.mode&1&&!(t.flags&128))Uf(),wr(),t.flags|=98560,s=!1;else if(s=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Mt]=t}else wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else vt!==null&&(pa(vt),vt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?ke===0&&(ke=3):mu())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Er(),sa(e,t),e===null&&hi(t.stateNode.containerInfo),Ne(t),null;case 10:return Za(t.type._context),Ne(t),null;case 17:return Xe(t.type)&&Ns(),Ne(t),null;case 19:if(ue(pe),s=t.memoizedState,s===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Rr(s,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ws(e),o!==null){for(t.flags|=128,Rr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&xe()>Tr&&(t.flags|=128,r=!0,Rr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ws(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ne(t),null}else 2*xe()-s.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=xe(),t.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return hu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Zg(e,t){switch(Ya(t),t.tag){case 1:return Xe(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ue(Ye),ue(Fe),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nu(t),null;case 13:if(ue(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(pe),null;case 4:return Er(),null;case 10:return Za(t.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Yi=!1,be=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,R=null;function lr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function oa(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Fc=!1;function ev(e,t){if(Wl=$s,e=Mf(),Ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,p=e,h=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ul={focusedElem:e,selectionRange:n},$s=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,T=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:mt(t.type,y),T);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){ge(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return x=Fc,Fc=!1,x}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&oa(t,n,s)}i=i.next}while(i!==r)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function la(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[gi],delete t[Ql],delete t[Ng],delete t[bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function Dc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=As));else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}function ua(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ua(e,t,n),e=e.sibling;e!==null;)ua(e,t,n),e=e.sibling}var Me=null,gt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Op(e,t,n),n=n.sibling}function Op(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(uo,n)}catch{}switch(n.tag){case 5:be||lr(n,t);case 6:var r=Me,i=gt;Me=null,Jt(e,t,n),Me=r,gt=i,Me!==null&&(gt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(gt?(e=Me,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),di(e)):Xo(Me,n.stateNode));break;case 4:r=Me,i=gt,Me=n.stateNode.containerInfo,gt=!0,Jt(e,t,n),Me=r,gt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&oa(n,t,o),i=i.next}while(i!==r)}Jt(e,t,n);break;case 1:if(!be&&(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,t,a)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Jt(e,t,n),be=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jg),t.forEach(function(r){var i=uv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,gt=!1;break e;case 3:Me=a.stateNode.containerInfo,gt=!0;break e;case 4:Me=a.stateNode.containerInfo,gt=!0;break e}a=a.return}if(Me===null)throw Error(M(160));Op(s,o,i),Me=null,gt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mp(t,e),t=t.sibling}function Mp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),zt(e),r&4){try{ei(3,e,e.return),yo(3,e)}catch(y){ge(e,e.return,y)}try{ei(5,e,e.return)}catch(y){ge(e,e.return,y)}}break;case 1:ht(t,e),zt(e),r&512&&n!==null&&lr(n,n.return);break;case 5:if(ht(t,e),zt(e),r&512&&n!==null&&lr(n,n.return),e.flags&32){var i=e.stateNode;try{li(i,"")}catch(y){ge(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qd(i,s),Ll(a,o);var u=Ll(a,s);for(o=0;o<l.length;o+=2){var c=l[o],p=l[o+1];c==="style"?nf(i,p):c==="dangerouslySetInnerHTML"?ef(i,p):c==="children"?li(i,p):La(i,c,p,u)}switch(a){case"input":zl(i,s);break;case"textarea":Zd(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?dr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?dr(i,!!s.multiple,s.defaultValue,!0):dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[gi]=s}catch(y){ge(e,e.return,y)}}break;case 6:if(ht(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){ge(e,e.return,y)}}break;case 3:if(ht(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(y){ge(e,e.return,y)}break;case 4:ht(t,e),zt(e);break;case 13:ht(t,e),zt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fu=xe())),r&4&&Rc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||c,ht(t,e),be=u):ht(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(R=e,c=e.child;c!==null;){for(p=R=c;R!==null;){switch(h=R,g=h.child,h.tag){case 0:case 11:case 14:case 15:ei(4,h,h.return);break;case 1:lr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ge(r,n,y)}}break;case 5:lr(h,h.return);break;case 22:if(h.memoizedState!==null){Bc(p);continue}}g!==null?(g.return=h,R=g):Bc(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tf("display",o))}catch(y){ge(e,e.return,y)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ge(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ht(t,e),zt(e),r&4&&Rc(e);break;case 21:break;default:ht(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(li(i,""),r.flags&=-33);var s=Dc(e);ua(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dc(e);aa(e,a,o);break;default:throw Error(M(161))}}catch(l){ge(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tv(e,t,n){R=e,$p(e)}function $p(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=Yi;var u=be;if(Yi=o,(be=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Wc(i):l!==null?(l.return=o,R=l):Wc(i);for(;s!==null;)R=s,$p(s),s=s.sibling;R=i,Yi=a,be=u}Vc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Vc(e)}}function Vc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Tc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&di(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}be||t.flags&512&&la(t)}catch(h){ge(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Bc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Wc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(l){ge(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ge(t,i,l)}}var s=t.return;try{la(t)}catch(l){ge(t,s,l)}break;case 5:var o=t.return;try{la(t)}catch(l){ge(t,o,l)}}}catch(l){ge(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var nv=Math.ceil,Gs=Zt.ReactCurrentDispatcher,cu=Zt.ReactCurrentOwner,ut=Zt.ReactCurrentBatchConfig,ee=0,Ie=null,Se=null,$e=0,qe=0,ar=En(0),ke=0,Ei=null,Dn=0,xo=0,du=0,ti=null,He=null,fu=0,Tr=1/0,Vt=null,Qs=!1,ca=null,mn=null,Xi=!1,ln=null,Ys=0,ni=0,da=null,vs=-1,ys=0;function Ve(){return ee&6?xe():vs!==-1?vs:vs=xe()}function gn(e){return e.mode&1?ee&2&&$e!==0?$e&-$e:Dg.transition!==null?(ys===0&&(ys=mf()),ys):(e=re,e!==0||(e=window.event,e=e===void 0?16:Ef(e.type)),e):1}function wt(e,t,n,r){if(50<ni)throw ni=0,da=null,Error(M(185));_i(e,n,r),(!(ee&2)||e!==Ie)&&(e===Ie&&(!(ee&2)&&(xo|=n),ke===4&&sn(e,$e)),Ke(e,r),n===1&&ee===0&&!(t.mode&1)&&(Tr=xe()+500,mo&&kn()))}function Ke(e,t){var n=e.callbackNode;Dm(e,t);var r=Ms(e,e===Ie?$e:0);if(r===0)n!==null&&Zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zu(n),t===1)e.tag===0?Fg(Uc.bind(null,e)):Vf(Uc.bind(null,e)),jg(function(){!(ee&6)&&kn()}),n=null;else{switch(gf(r)){case 1:n=Fa;break;case 4:n=pf;break;case 16:n=Os;break;case 536870912:n=hf;break;default:n=Os}n=Rp(n,Lp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lp(e,t){if(vs=-1,ys=0,ee&6)throw Error(M(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Ms(e,e===Ie?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xs(e,r);else{t=r;var i=ee;ee|=2;var s=Ap();(Ie!==e||$e!==t)&&(Vt=null,Tr=xe()+500,Ln(e,t));do try{sv();break}catch(a){jp(e,a)}while(1);qa(),Gs.current=s,ee=i,Se!==null?t=0:(Ie=null,$e=0,t=ke)}if(t!==0){if(t===2&&(i=Fl(e),i!==0&&(r=i,t=fa(e,i))),t===1)throw n=Ei,Ln(e,0),sn(e,r),Ke(e,xe()),n;if(t===6)sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!rv(i)&&(t=Xs(e,r),t===2&&(s=Fl(e),s!==0&&(r=s,t=fa(e,s))),t===1))throw n=Ei,Ln(e,0),sn(e,r),Ke(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:_n(e,He,Vt);break;case 3:if(sn(e,r),(r&130023424)===r&&(t=fu+500-xe(),10<t)){if(Ms(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gl(_n.bind(null,e,He,Vt),t);break}_n(e,He,Vt);break;case 4:if(sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-xt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nv(r/1960))-r,10<r){e.timeoutHandle=Gl(_n.bind(null,e,He,Vt),r);break}_n(e,He,Vt);break;case 5:_n(e,He,Vt);break;default:throw Error(M(329))}}}return Ke(e,xe()),e.callbackNode===n?Lp.bind(null,e):null}function fa(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=Xs(e,t),e!==2&&(t=He,He=n,t!==null&&pa(t)),e}function pa(e){He===null?He=e:He.push.apply(He,e)}function rv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sn(e,t){for(t&=~du,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Uc(e){if(ee&6)throw Error(M(327));gr();var t=Ms(e,0);if(!(t&1))return Ke(e,xe()),null;var n=Xs(e,t);if(e.tag!==0&&n===2){var r=Fl(e);r!==0&&(t=r,n=fa(e,r))}if(n===1)throw n=Ei,Ln(e,0),sn(e,t),Ke(e,xe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,He,Vt),Ke(e,xe()),null}function pu(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Tr=xe()+500,mo&&kn())}}function Rn(e){ln!==null&&ln.tag===0&&!(ee&6)&&gr();var t=ee;ee|=1;var n=ut.transition,r=re;try{if(ut.transition=null,re=1,e)return e()}finally{re=r,ut.transition=n,ee=t,!(ee&6)&&kn()}}function hu(){qe=ar.current,ue(ar)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lg(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Ya(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ns();break;case 3:Er(),ue(Ye),ue(Fe),ru();break;case 5:nu(r);break;case 4:Er();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:Za(r.type._context);break;case 22:case 23:hu()}n=n.return}if(Ie=e,Se=e=vn(e.current,null),$e=qe=t,ke=0,Ei=null,du=xo=Dn=0,He=ti=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}In=null}return e}function jp(e,t){do{var n=Se;try{if(qa(),hs.current=Hs,Us){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Us=!1}if(Fn=0,Pe=Ee=he=null,Jr=!1,xi=0,cu.current=null,n===null||n.return===null){ke=1,Ei=t,Se=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Mc(o);if(g!==null){g.flags&=-257,$c(g,o,a,s,t),g.mode&1&&Oc(s,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Oc(s,u,t),mu();break e}l=Error(M(426))}}else if(de&&a.mode&1){var T=Mc(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),$c(T,o,a,s,t),Xa(kr(l,a));break e}}s=l=kr(l,a),ke!==4&&(ke=2),ti===null?ti=[s]:ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=vp(s,l,t);kc(s,f);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mn===null||!mn.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=yp(s,a,t);kc(s,S);break e}}s=s.return}while(s!==null)}bp(n)}catch(E){t=E,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function Ap(){var e=Gs.current;return Gs.current=Hs,e===null?Hs:e}function mu(){(ke===0||ke===3||ke===2)&&(ke=4),Ie===null||!(Dn&268435455)&&!(xo&268435455)||sn(Ie,$e)}function Xs(e,t){var n=ee;ee|=2;var r=Ap();(Ie!==e||$e!==t)&&(Vt=null,Ln(e,t));do try{iv();break}catch(i){jp(e,i)}while(1);if(qa(),ee=n,Gs.current=r,Se!==null)throw Error(M(261));return Ie=null,$e=0,ke}function iv(){for(;Se!==null;)Np(Se)}function sv(){for(;Se!==null&&!Om();)Np(Se)}function Np(e){var t=Dp(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?bp(e):Se=t,cu.current=null}function bp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zg(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,Se=null;return}}else if(n=qg(n,t,qe),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);ke===0&&(ke=5)}function _n(e,t,n){var r=re,i=ut.transition;try{ut.transition=null,re=1,ov(e,t,n,r)}finally{ut.transition=i,re=r}return null}function ov(e,t,n,r){do gr();while(ln!==null);if(ee&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rm(e,s),e===Ie&&(Se=Ie=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,Rp(Os,function(){return gr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=re;re=1;var a=ee;ee|=4,cu.current=null,ev(e,n),Mp(n,e),Pg(Ul),$s=!!Wl,Ul=Wl=null,e.current=n,tv(n),Mm(),ee=a,re=o,ut.transition=s}else e.current=n;if(Xi&&(Xi=!1,ln=e,Ys=i),s=e.pendingLanes,s===0&&(mn=null),jm(n.stateNode),Ke(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qs)throw Qs=!1,e=ca,ca=null,e;return Ys&1&&e.tag!==0&&gr(),s=e.pendingLanes,s&1?e===da?ni++:(ni=0,da=e):ni=0,kn(),null}function gr(){if(ln!==null){var e=gf(Ys),t=ut.transition,n=re;try{if(ut.transition=null,re=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Ys=0,ee&6)throw Error(M(331));var i=ee;for(ee|=4,R=e.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:ei(8,c,s)}var p=c.child;if(p!==null)p.return=c,R=p;else for(;R!==null;){c=R;var h=c.sibling,g=c.return;if(zp(c),c===u){R=null;break}if(h!==null){h.return=g,R=h;break}R=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ei(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,R=f;break e}R=s.return}}var d=e.current;for(R=d;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=d;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yo(9,a)}}catch(E){ge(a,a.return,E)}if(a===o){R=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,R=S;break e}R=a.return}}if(ee=i,kn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(uo,e)}catch{}r=!0}return r}finally{re=n,ut.transition=t}}return!1}function Hc(e,t,n){t=kr(n,t),t=vp(e,t,1),e=hn(e,t,1),t=Ve(),e!==null&&(_i(e,1,t),Ke(e,t))}function ge(e,t,n){if(e.tag===3)Hc(e,e,n);else for(;t!==null;){if(t.tag===3){Hc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=kr(n,e),e=yp(t,e,1),t=hn(t,e,1),e=Ve(),t!==null&&(_i(t,1,e),Ke(t,e));break}}t=t.return}}function lv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&($e&n)===n&&(ke===4||ke===3&&($e&130023424)===$e&&500>xe()-fu?Ln(e,0):du|=n),Ke(e,t)}function Fp(e,t){t===0&&(e.mode&1?(t=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):t=1);var n=Ve();e=Kt(e,t),e!==null&&(_i(e,t,n),Ke(e,n))}function av(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fp(e,n)}function uv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Fp(e,n)}var Dp;Dp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,Kg(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,de&&t.flags&1048576&&Bf(t,Ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gs(e,t),e=t.pendingProps;var i=xr(t,Fe.current);mr(t,n),i=su(null,t,r,e,i,n);var s=ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(s=!0,bs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eu(t),i.updater=go,t.stateNode=i,i._reactInternals=t,Jl(t,r,e,n),t=na(null,t,r,!0,s,n)):(t.tag=0,de&&s&&Qa(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dv(r),e=mt(r,e),i){case 0:t=ta(null,t,r,e,n);break e;case 1:t=Ac(null,t,r,e,n);break e;case 11:t=Lc(null,t,r,e,n);break e;case 14:t=jc(null,t,r,mt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ta(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ac(e,t,r,i,n);case 3:e:{if(Ep(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Gf(e,t),Bs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=kr(Error(M(423)),t),t=Nc(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(M(424)),t),t=Nc(e,t,r,n,i);break e}else for(Je=pn(t.stateNode.containerInfo.firstChild),et=t,de=!0,vt=null,n=Kf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wr(),r===i){t=qt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return qf(t),e===null&&Kl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Hl(r,i)?o=null:s!==null&&Hl(r,s)&&(t.flags|=32),Sp(e,t),De(e,t,o,n),t.child;case 6:return e===null&&Kl(t),null;case 13:return kp(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Lc(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,oe(Rs,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Ye.current){t=qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ql(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ql(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,mr(t,n),i=ct(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),jc(e,t,r,i,n);case 15:return xp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),gs(e,t),t.tag=1,Xe(r)?(e=!0,bs(t)):e=!1,mr(t,n),Yf(t,r,i),Jl(t,r,i,n),na(null,t,r,!0,e,n);case 19:return Tp(e,t,n);case 22:return wp(e,t,n)}throw Error(M(156,t.tag))};function Rp(e,t){return ff(e,t)}function cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new cv(e,t,n,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dv(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Aa)return 11;if(e===Na)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Zn:return jn(n.children,i,s,t);case ja:o=8,i|=8;break;case kl:return e=at(12,n,t,i|2),e.elementType=kl,e.lanes=s,e;case Tl:return e=at(13,n,t,i),e.elementType=Tl,e.lanes=s,e;case Cl:return e=at(19,n,t,i),e.elementType=Cl,e.lanes=s,e;case Yd:return wo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gd:o=10;break e;case Qd:o=9;break e;case Aa:o=11;break e;case Na:o=14;break e;case tn:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=at(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function jn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=at(22,e,r,t),e.elementType=Yd,e.lanes=n,e.stateNode={isHidden:!1},e}function rl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fo(0),this.expirationTimes=Fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vu(e,t,n,r,i,s,o,a,l){return e=new fv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=at(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(s),e}function pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vp(e){if(!e)return wn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Rf(e,n,t)}return t}function Bp(e,t,n,r,i,s,o,a,l){return e=vu(n,r,!0,e,i,s,o,a,l),e.context=Vp(null),n=e.current,r=Ve(),i=gn(n),s=Qt(r,i),s.callback=t??null,hn(n,s,i),e.current.lanes=i,_i(e,i,r),Ke(e,r),e}function So(e,t,n,r){var i=t.current,s=Ve(),o=gn(i);return n=Vp(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,o),e!==null&&(wt(e,i,o,s),ps(e,i,o)),o}function Ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yu(e,t){Gc(e,t),(e=e.alternate)&&Gc(e,t)}function hv(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}Eo.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));So(e,t,null,null)};Eo.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){So(null,e,null,null)}),t[Xt]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Sf(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qc(){}function mv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ks(o);s.call(u)}}var o=Bp(t,r,e,0,null,!1,!1,"",Qc);return e._reactRootContainer=o,e[Xt]=o.current,hi(e.nodeType===8?e.parentNode:e),Rn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ks(l);a.call(u)}}var l=vu(e,0,!1,null,null,!1,!1,"",Qc);return e._reactRootContainer=l,e[Xt]=l.current,hi(e.nodeType===8?e.parentNode:e),Rn(function(){So(t,l,n,r)}),l}function To(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ks(o);a.call(l)}}So(t,o,e,i)}else o=mv(n,t,e,i,r);return Ks(o)}vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hr(t.pendingLanes);n!==0&&(Da(t,n|1),Ke(t,xe()),!(ee&6)&&(Tr=xe()+500,kn()))}break;case 13:Rn(function(){var r=Kt(e,1);if(r!==null){var i=Ve();wt(r,e,1,i)}}),yu(e,1)}};Ra=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Ve();wt(t,e,134217728,n)}yu(e,134217728)}};yf=function(e){if(e.tag===13){var t=gn(e),n=Kt(e,t);if(n!==null){var r=Ve();wt(n,e,t,r)}yu(e,t)}};xf=function(){return re};wf=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Al=function(e,t,n){switch(t){case"input":if(zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ho(r);if(!i)throw Error(M(90));Kd(r),zl(r,i)}}}break;case"textarea":Zd(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};of=pu;lf=Rn;var gv={usingClientEntryPoint:!1,Events:[Ii,nr,ho,rf,sf,pu]},Vr={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vv={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cf(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{uo=Ki.inject(vv),jt=Ki}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(M(200));return pv(e,t,null,n)};nt.createRoot=function(e,t){if(!wu(e))throw Error(M(299));var n=!1,r="",i=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=vu(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,hi(e.nodeType===8?e.parentNode:e),new xu(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=cf(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Rn(e)};nt.hydrate=function(e,t,n){if(!ko(t))throw Error(M(200));return To(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!wu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bp(t,null,e,1,n??null,i,!1,s,o),e[Xt]=t.current,hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};nt.render=function(e,t,n){if(!ko(t))throw Error(M(200));return To(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!ko(e))throw Error(M(40));return e._reactRootContainer?(Rn(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};nt.unstable_batchedUpdates=pu;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return To(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function Up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Up)}catch(e){console.error(e)}}Up(),Vd.exports=nt;var yv=Vd.exports,Yc=yv;Sl.createRoot=Yc.createRoot,Sl.hydrateRoot=Yc.hydrateRoot;var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ze.apply(this,arguments)};function ki(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var ae="-ms-",ri="-moz-",ne="-webkit-",Hp="comm",Co="rule",Su="decl",xv="@import",Gp="@keyframes",wv="@layer",Qp=Math.abs,Eu=String.fromCharCode,ha=Object.assign;function Sv(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function Yp(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function ws(e,t,n){return e.indexOf(t,n)}function _e(e,t){return e.charCodeAt(t)|0}function Cr(e,t,n){return e.slice(t,n)}function Ot(e){return e.length}function Xp(e){return e.length}function Qr(e,t){return t.push(e),e}function Ev(e,t){return e.map(t).join("")}function Xc(e,t){return e.filter(function(n){return!Bt(n,t)})}var Po=1,Pr=1,Kp=0,ft=0,we=0,$r="";function _o(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Po,column:Pr,length:o,return:"",siblings:a}}function en(e,t){return ha(_o("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xn(e){for(;e.root;)e=en(e.root,{children:[e]});Qr(e,e.siblings)}function kv(){return we}function Tv(){return we=ft>0?_e($r,--ft):0,Pr--,we===10&&(Pr=1,Po--),we}function St(){return we=ft<Kp?_e($r,ft++):0,Pr++,we===10&&(Pr=1,Po++),we}function An(){return _e($r,ft)}function Ss(){return ft}function zo(e,t){return Cr($r,e,t)}function ma(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cv(e){return Po=Pr=1,Kp=Ot($r=e),ft=0,[]}function Pv(e){return $r="",e}function sl(e){return Yp(zo(ft-1,ga(e===91?e+2:e===40?e+1:e)))}function _v(e){for(;(we=An())&&we<33;)St();return ma(e)>2||ma(we)>3?"":" "}function zv(e,t){for(;--t&&St()&&!(we<48||we>102||we>57&&we<65||we>70&&we<97););return zo(e,Ss()+(t<6&&An()==32&&St()==32))}function ga(e){for(;St();)switch(we){case e:return ft;case 34:case 39:e!==34&&e!==39&&ga(we);break;case 40:e===41&&ga(e);break;case 92:St();break}return ft}function Iv(e,t){for(;St()&&e+we!==47+10;)if(e+we===42+42&&An()===47)break;return"/*"+zo(t,ft-1)+"*"+Eu(e===47?e:St())}function Ov(e){for(;!ma(An());)St();return zo(e,ft)}function Mv(e){return Pv(Es("",null,null,null,[""],e=Cv(e),0,[0],e))}function Es(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,p=o,h=0,g=0,x=0,y=1,T=1,f=1,d=0,m="",S=i,E=s,C=r,P=m;T;)switch(x=d,d=St()){case 40:if(x!=108&&_e(P,p-1)==58){ws(P+=K(sl(d),"&","&\f"),"&\f",Qp(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:P+=sl(d);break;case 9:case 10:case 13:case 32:P+=_v(x);break;case 92:P+=zv(Ss()-1,7);continue;case 47:switch(An()){case 42:case 47:Qr($v(Iv(St(),Ss()),t,n,l),l);break;default:P+="/"}break;case 123*y:a[u++]=Ot(P)*f;case 125*y:case 59:case 0:switch(d){case 0:case 125:T=0;case 59+c:f==-1&&(P=K(P,/\f/g,"")),g>0&&Ot(P)-p&&Qr(g>32?qc(P+";",r,n,p-1,l):qc(K(P," ","")+";",r,n,p-2,l),l);break;case 59:P+=";";default:if(Qr(C=Kc(P,t,n,u,c,i,a,m,S=[],E=[],p,s),s),d===123)if(c===0)Es(P,t,C,C,S,s,p,a,E);else switch(h===99&&_e(P,3)===110?100:h){case 100:case 108:case 109:case 115:Es(e,C,C,r&&Qr(Kc(e,C,C,0,0,i,a,m,i,S=[],p,E),E),i,E,p,a,r?S:E);break;default:Es(P,C,C,C,[""],E,0,a,E)}}u=c=g=0,y=f=1,m=P="",p=o;break;case 58:p=1+Ot(P),g=x;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&Tv()==125)continue}switch(P+=Eu(d),d*y){case 38:f=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(Ot(P)-1)*f,f=1;break;case 64:An()===45&&(P+=sl(St())),h=An(),c=p=Ot(m=P+=Ov(Ss())),d++;break;case 45:x===45&&Ot(P)==2&&(y=0)}}return s}function Kc(e,t,n,r,i,s,o,a,l,u,c,p){for(var h=i-1,g=i===0?s:[""],x=Xp(g),y=0,T=0,f=0;y<r;++y)for(var d=0,m=Cr(e,h+1,h=Qp(T=o[y])),S=e;d<x;++d)(S=Yp(T>0?g[d]+" "+m:K(m,/&\f/g,g[d])))&&(l[f++]=S);return _o(e,t,n,i===0?Co:a,l,u,c,p)}function $v(e,t,n,r){return _o(e,t,n,Hp,Eu(kv()),Cr(e,2,-2),0,r)}function qc(e,t,n,r,i){return _o(e,t,n,Su,Cr(e,0,r),Cr(e,r+1,-1),r,i)}function qp(e,t,n){switch(Sv(e,t)){case 5103:return ne+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ne+e+e;case 4789:return ri+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ne+e+ri+e+ae+e+e;case 5936:switch(_e(e,t+11)){case 114:return ne+e+ae+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ne+e+ae+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ne+e+ae+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ne+e+ae+e+e;case 6165:return ne+e+ae+"flex-"+e+e;case 5187:return ne+e+K(e,/(\w+).+(:[^]+)/,ne+"box-$1$2"+ae+"flex-$1$2")+e;case 5443:return ne+e+ae+"flex-item-"+K(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":ae+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return ne+e+ae+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return ne+e+ae+K(e,"shrink","negative")+e;case 5292:return ne+e+ae+K(e,"basis","preferred-size")+e;case 6060:return ne+"box-"+K(e,"-grow","")+ne+e+ae+K(e,"grow","positive")+e;case 4554:return ne+K(e,/([^-])(transform)/g,"$1"+ne+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,ne+"$1"),/(image-set)/,ne+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,ne+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,ne+"box-pack:$3"+ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ne+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return ae+"grid-column-align"+Cr(e,t)+e;break;case 2592:case 3360:return ae+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Bt(r.props,/grid-\w+-end/)})?~ws(e+(n=n[t].value),"span",0)?e:ae+K(e,"-start","")+e+ae+"grid-row-span:"+(~ws(n,"span",0)?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":ae+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Bt(r.props,/grid-\w+-start/)})?e:ae+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,ne+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ot(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+ne+"$2-$3$1"+ri+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ws(e,"stretch",0)?qp(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ae+i+":"+s+u+(o?ae+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(_e(e,t+6)===121)return K(e,":",":"+ne)+e;break;case 6444:switch(_e(e,_e(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ne+(_e(e,14)===45?"inline-":"")+"box$3$1"+ne+"$2$3$1"+ae+"$2box$3")+e;case 100:return K(e,":",":"+ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function qs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Lv(e,t,n,r){switch(e.type){case wv:if(e.children.length)break;case xv:case Su:return e.return=e.return||e.value;case Hp:return"";case Gp:return e.return=e.value+"{"+qs(e.children,r)+"}";case Co:if(!Ot(e.value=e.props.join(",")))return""}return Ot(n=qs(e.children,r))?e.return=e.value+"{"+n+"}":""}function jv(e){var t=Xp(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function Av(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Su:e.return=qp(e.value,e.length,n);return;case Gp:return qs([en(e,{value:K(e.value,"@","@"+ne)})],r);case Co:if(e.length)return Ev(n=e.props,function(i){switch(Bt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xn(en(e,{props:[K(i,/:(read-\w+)/,":"+ri+"$1")]})),Xn(en(e,{props:[i]})),ha(e,{props:Xc(n,r)});break;case"::placeholder":Xn(en(e,{props:[K(i,/:(plac\w+)/,":"+ne+"input-$1")]})),Xn(en(e,{props:[K(i,/:(plac\w+)/,":"+ri+"$1")]})),Xn(en(e,{props:[K(i,/:(plac\w+)/,ae+"input-$1")]})),Xn(en(e,{props:[i]})),ha(e,{props:Xc(n,r)});break}return""})}}var bv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_r=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zp="active",Jp="data-styled-version",Io="6.1.6",ku=`/*!sc*/
`,Tu=typeof window<"u"&&"HTMLElement"in window,Fv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Dv={},Oo=Object.freeze([]),zr=Object.freeze({});function eh(e,t,n){return n===void 0&&(n=zr),e.theme!==n.theme&&e.theme||t||n.theme}var th=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vv=/(^-|-$)/g;function Zc(e){return e.replace(Rv,"-").replace(Vv,"")}var Bv=/(a)(d)/gi,qi=52,Jc=function(e){return String.fromCharCode(e+(e>25?39:97))};function va(e){var t,n="";for(t=Math.abs(e);t>qi;t=t/qi|0)n=Jc(t%qi)+n;return(Jc(t%qi)+n).replace(Bv,"$1-$2")}var ol,nh=5381,ur=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},rh=function(e){return ur(nh,e)};function ih(e){return va(rh(e)>>>0)}function Wv(e){return e.displayName||e.name||"Component"}function ll(e){return typeof e=="string"&&!0}var sh=typeof Symbol=="function"&&Symbol.for,oh=sh?Symbol.for("react.memo"):60115,Uv=sh?Symbol.for("react.forward_ref"):60112,Hv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qv=((ol={})[Uv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ol[oh]=lh,ol);function ed(e){return("type"in(t=e)&&t.type.$$typeof)===oh?lh:"$$typeof"in e?Qv[e.$$typeof]:Hv;var t}var Yv=Object.defineProperty,Xv=Object.getOwnPropertyNames,td=Object.getOwnPropertySymbols,Kv=Object.getOwnPropertyDescriptor,qv=Object.getPrototypeOf,nd=Object.prototype;function ah(e,t,n){if(typeof t!="string"){if(nd){var r=qv(t);r&&r!==nd&&ah(e,r,n)}var i=Xv(t);td&&(i=i.concat(td(t)));for(var s=ed(e),o=ed(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Gv||n&&n[l]||o&&l in o||s&&l in s)){var u=Kv(t,l);try{Yv(e,l,u)}catch{}}}}return e}function Vn(e){return typeof e=="function"}function Cu(e){return typeof e=="object"&&"styledComponentId"in e}function Mn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ya(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ti(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xa(e,t,n){if(n===void 0&&(n=!1),!n&&!Ti(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=xa(e[r],t[r]);else if(Ti(t))for(var r in t)e[r]=xa(e[r],t[r]);return e}function Pu(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Bn(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ku);return n},e}(),ks=new Map,Zs=new Map,Ts=1,Zi=function(e){if(ks.has(e))return ks.get(e);for(;Zs.has(Ts);)Ts++;var t=Ts++;return ks.set(e,t),Zs.set(t,e),t},Jv=function(e,t){Ts=t+1,ks.set(e,t),Zs.set(t,e)},e0="style[".concat(_r,"][").concat(Jp,'="').concat(Io,'"]'),t0=new RegExp("^".concat(_r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),n0=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},r0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ku),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(t0);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Jv(c,u),n0(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function i0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(_r,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(_r,Zp),r.setAttribute(Jp,Io);var o=i0();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},s0=function(){function e(t){this.element=uh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),o0=function(){function e(t){this.element=uh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),l0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rd=Tu,a0={isServer:!Tu,useCSSOMInjection:!Fv},Js=function(){function e(t,n,r){t===void 0&&(t=zr),n===void 0&&(n={});var i=this;this.options=ze(ze({},a0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tu&&rd&&(rd=!1,function(s){for(var o=document.querySelectorAll(e0),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(_r)!==Zp&&(r0(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Pu(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(p){var h=function(f){return Zs.get(f)}(p);if(h===void 0)return"continue";var g=s.names.get(h),x=o.getGroup(p);if(g===void 0||x.length===0)return"continue";var y="".concat(_r,".g").concat(p,'[id="').concat(h,'"]'),T="";g!==void 0&&g.forEach(function(f){f.length>0&&(T+="".concat(f,","))}),l+="".concat(x).concat(y,'{content:"').concat(T,'"}').concat(ku)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Zi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new l0(i):r?new s0(i):new o0(i)}(this.options),new Zv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Zi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Zi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Zi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),u0=/&/g,c0=/^\s*\/\/.*$/gm;function ch(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ch(n.children,t)),n})}function d0(e){var t,n,r,i=e===void 0?zr:e,s=i.options,o=s===void 0?zr:s,a=i.plugins,l=a===void 0?Oo:a,u=function(h,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===Co&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(u0,n).replace(r,u))}),o.prefix&&c.push(Nv),c.push(Lv);var p=function(h,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var T=h.replace(c0,""),f=Mv(x||g?"".concat(x," ").concat(g," { ").concat(T," }"):T);o.namespace&&(f=ch(f,o.namespace));var d=[];return qs(f,jv(c.concat(Av(function(m){return d.push(m)})))),d};return p.hash=l.length?l.reduce(function(h,g){return g.name||Bn(15),ur(h,g.name)},nh).toString():"",p}var f0=new Js,wa=d0(),dh=X.createContext({shouldForwardProp:void 0,styleSheet:f0,stylis:wa});dh.Consumer;X.createContext(void 0);function Sa(){return Y.useContext(dh)}var p0=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=wa);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pu(this,function(){throw Bn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=wa),this.name+t.hash},e}(),h0=function(e){return e>="A"&&e<="Z"};function id(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;h0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fh=function(e){return e==null||e===!1||e===""},ph=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!fh(s)&&(Array.isArray(s)&&s.isCss||Vn(s)?r.push("".concat(id(i),":"),s,";"):Ti(s)?r.push.apply(r,ki(ki(["".concat(i," {")],ph(s),!1),["}"],!1)):r.push("".concat(id(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in bv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(fh(e))return[];if(Cu(e))return[".".concat(e.styledComponentId)];if(Vn(e)){if(!Vn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return yn(i,t,n,r)}var s;return e instanceof p0?n?(e.inject(n,r),[e.getName(r)]):[e]:Ti(e)?ph(e):Array.isArray(e)?Array.prototype.concat.apply(Oo,e.map(function(o){return yn(o,t,n,r)})):[e.toString()]}function hh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vn(n)&&!Cu(n))return!1}return!0}var m0=rh(Io),g0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&hh(t),this.componentId=n,this.baseHash=ur(m0,n),this.baseStyle=r,Js.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mn(i,this.staticRulesId);else{var s=ya(yn(this.rules,t,n,r)),o=va(ur(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Mn(i,o),this.staticRulesId=o}else{for(var l=ur(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var h=ya(yn(p,t,n,r));l=ur(l,h+c),u+=h}}if(u){var g=va(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Mn(i,g)}}return i},e}(),Ci=X.createContext(void 0);Ci.Consumer;function v0(e){var t=X.useContext(Ci),n=Y.useMemo(function(){return function(r,i){if(!r)throw Bn(14);if(Vn(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Bn(8);return i?ze(ze({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?X.createElement(Ci.Provider,{value:n},e.children):null}var al={};function y0(e,t,n){var r=Cu(e),i=e,s=!ll(e),o=t.attrs,a=o===void 0?Oo:o,l=t.componentId,u=l===void 0?function(S,E){var C=typeof S!="string"?"sc":Zc(S);al[C]=(al[C]||0)+1;var P="".concat(C,"-").concat(ih(Io+C+al[C]));return E?"".concat(E,"-").concat(P):P}(t.displayName,t.parentComponentId):l,c=t.displayName,p=c===void 0?function(S){return ll(S)?"styled.".concat(S):"Styled(".concat(Wv(S),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Zc(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;x=function(S,E){return y(S,E)&&T(S,E)}}else x=y}var f=new g0(n,h,r?i.componentStyle:void 0);function d(S,E){return function(C,P,I){var A=C.attrs,z=C.componentStyle,D=C.defaultProps,$=C.foldedComponentIds,L=C.styledComponentId,G=C.target,q=X.useContext(Ci),ie=Sa(),fe=C.shouldForwardProp||ie.shouldForwardProp,N=eh(P,q,D)||zr,b=function(Tt,je,pt){for(var Nt,Ct=ze(ze({},je),{className:void 0,theme:pt}),Tn=0;Tn<Tt.length;Tn+=1){var Cn=Vn(Nt=Tt[Tn])?Nt(Ct):Nt;for(var Pt in Cn)Ct[Pt]=Pt==="className"?Mn(Ct[Pt],Cn[Pt]):Pt==="style"?ze(ze({},Ct[Pt]),Cn[Pt]):Cn[Pt]}return je.className&&(Ct.className=Mn(Ct.className,je.className)),Ct}(A,P,N),W=b.as||G,te={};for(var J in b)b[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&b.theme===N||(J==="forwardedAs"?te.as=b.forwardedAs:fe&&!fe(J,W)||(te[J]=b[J]));var kt=function(Tt,je){var pt=Sa(),Nt=Tt.generateAndInjectStyles(je,pt.styleSheet,pt.stylis);return Nt}(z,b),Ue=Mn($,L);return kt&&(Ue+=" "+kt),b.className&&(Ue+=" "+b.className),te[ll(W)&&!th.has(W)?"class":"className"]=Ue,te.ref=I,Y.createElement(W,te)}(m,S,E)}d.displayName=p;var m=X.forwardRef(d);return m.attrs=g,m.componentStyle=f,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?Mn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var I=0,A=C;I<A.length;I++)xa(E,A[I],!0);return E}({},i.defaultProps,S):S}}),Pu(m,function(){return".".concat(m.styledComponentId)}),s&&ah(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function sd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var od=function(e){return Object.assign(e,{isCss:!0})};function mh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vn(e)||Ti(e))return od(yn(sd(Oo,ki([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):od(yn(sd(r,t)))}function Ea(e,t,n){if(n===void 0&&(n=zr),!t)throw Bn(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,mh.apply(void 0,ki([i],s,!1)))};return r.attrs=function(i){return Ea(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ea(e,t,ze(ze({},n),i))},r}var gh=function(e){return Ea(y0,e)},O=gh;th.forEach(function(e){O[e]=gh(e)});var x0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=hh(t),Js.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(ya(yn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Js.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function w0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mh.apply(void 0,ki([e],t,!1)),i="sc-global-".concat(ih(JSON.stringify(r))),s=new x0(r,i),o=function(l){var u=Sa(),c=X.useContext(Ci),p=X.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(p,l,u.styleSheet,c,u.stylis),X.useLayoutEffect(function(){if(!u.styleSheet.server)return a(p,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,p,h){if(s.isStatic)s.renderStyles(l,Dv,c,h);else{var g=ze(ze({},u),{theme:eh(u,p,o.defaultProps)});s.renderStyles(l,g,c,h)}}return X.memo(o)}const Gn=e=>e.theme.beforeTablet,U=e=>e.theme.media.tablet,_u=e=>e.theme.media.beforeDesktop,H=e=>e.theme.media.desktop,S0=O.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 767px) {
    /* @media ${Gn} { */
    min-width: 360px;
    max-width: 480px;
  }

  @media (min-width: 768px) {
    /* @media ${U} { */
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    /* @media ${H} { */
    width: 1280px;
    padding: 0 20px;
  }
`,E0=({children:e})=>v.jsx(S0,{children:e}),k0=e=>{Y.useEffect(()=>{const t=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e])},T0=O.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`,C0=({handleToggleModal:e,children:t})=>{k0(e);const n=r=>{r.target===r.currentTarget&&e()};return v.jsx(T0,{onClick:n,className:"absolute top-0 left-0 z-10 w-screen h-screen bg-transparent",children:t})},P0=O.button`
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
  gap: 8px;

  background: transparent;
  border: none;

  cursor: pointer;
  overflow: hidden;

  svg use {
    stroke: #fff;
  }

  span {
    color: #fff;
  }

  &:hover {
    span {
      color: #97d28b;
    }

    svg use {
      stroke: #97d28b;
    }
  }

  &::before {
    content: "";

    width: 272px;
    height: 1px;

    flex-shrink: 0;
    background: #fff;
  }
`,_0=O.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,z0=O.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`,ve="/vite-ecosolution/assets/sprite-7a3f5b15.svg",I0=({handleToggleModal:e})=>v.jsx(P0,{onClick:e,children:v.jsxs(_0,{children:[v.jsx("svg",{width:20,height:20,children:v.jsx("use",{href:ve+"#icon-close-menu"})}),v.jsx(z0,{children:"close"})]})}),Mi=e=>{const t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-76,behavior:"smooth"})},O0=O.button`
  display: flex;
  align-items: center;
  gap: 4px;

  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  cursor: pointer;

  svg use {
    stroke: #FFFFFF;
  }

  &:hover {
    color: #97d28b;

    svg use {
      stroke: #97D28B;
    }
  }
`,M0=({label:e,sectionName:t,handleToggleModal:n})=>{const r=()=>{Mi(t),n()};return v.jsxs(O0,{onClick:r,children:[e,v.jsx("svg",{width:16,height:16,children:v.jsx("use",{xlinkHref:ve+"#icon-arrow-right-up"})})]})},$0=O.div`
  display: flex;
  gap: ${({$space:e})=>`${e}px`};
`,ld=O.svg`
  cursor: pointer;
  stroke: ${({$colorPlan:e})=>e==="primary"?"#173d33":"#ffffff"};
  fill: ${({$colorPlan:e})=>e==="primary"?"#173d33":"#ffffff"};

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`,zu=({colorPlan:e,space:t})=>v.jsxs($0,{$space:t,children:[v.jsx("a",{href:"https://www.facebook.com/",target:"blank",children:v.jsx(ld,{width:24,height:24,$colorPlan:e,children:v.jsx("use",{href:ve+"#icon-facebook"})})}),v.jsx("a",{href:"https://www.instagram.com/",target:"blank",children:v.jsx(ld,{width:24,height:24,$colorPlan:e,children:v.jsx("use",{href:ve+"#icon-instagram"})})})]}),Ge={MAIN:"main",ABOUT:"about",CASES:"cases",QUESTIONS:"questions",CONTACT:"contact"},L0=[{id:1,label:"Main",sectionName:Ge.MAIN},{id:2,label:"About",sectionName:Ge.ABOUT},{id:3,label:"Cases",sectionName:Ge.CASES},{id:4,label:"FAQ",sectionName:Ge.QUESTIONS},{id:5,label:"Contact",sectionName:Ge.CONTACT}],j0=O.div`
  position: absolute;
  top: 36px;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-shrink: 0;
  width: 320px;
  height: calc(100% - 72px);
  padding: 24px;

  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  @media ${U} {
    top: 42px;
    right: 30px;
    height: calc(100% - 84px);
  }

  @media ${H} {
    top: 30px;
    right: 100px;
    height: calc(100% - 60px);
  }
`,A0=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`,N0=O.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`,b0=({handleToggleModal:e})=>v.jsx(C0,{handleToggleModal:e,children:v.jsxs(j0,{children:[v.jsx(I0,{handleToggleModal:e}),v.jsx(A0,{children:L0.map(t=>v.jsx(M0,{label:t.label,sectionName:t.sectionName,handleToggleModal:e},t.id))}),v.jsx(N0,{children:v.jsx(zu,{colorPlan:"secondary",space:8})})]})}),F0=O.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 39px;
  width: 40px;

  border-radius: 500px;
  background: #dcefd8;
  border: none;
  cursor: pointer;

  &:hover {
    background: #97d28b;
  }
`,D0=()=>{const[e,t]=Y.useState(!1),n=()=>{t(r=>!r)};return v.jsxs("div",{children:[v.jsx(F0,{onClick:n,children:v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-menu",stroke:"#292D32"})})}),e&&v.jsx(b0,{handleToggleModal:n})]})},R0=O.a`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  & > p {
    color: ${({$scrolled:e})=>e&&"#97d28b"};
  }

  &:hover {
    & > p {
      color: #97d28b;
    }
  }
`,V0=O.p`
  color: #173d33;
  font-family: "FONTSPRING DEMO - All Round Gothic Thick";
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;
`,B0=O.p`
  width: 60px;

  color: #97d28b;
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`,W0=O.span`
  color: "#173d33";
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
`,vh=({$scrolled:e})=>v.jsxs(R0,{href:"/",target:"blank",$scrolled:e??null,children:[v.jsx("svg",{width:31,height:18,children:v.jsx("use",{href:ve+"#icon-logo"})}),v.jsx(V0,{children:"ecosolution"}),v.jsxs(B0,{children:[v.jsx(W0,{children:"green"}),"ergy for life"]})]}),U0=O.button`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 140px;

  border-radius: 500px;
  background: #97d28b;
  border: none;
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  cursor: pointer;

  svg use {
    fill: #173d33;
    stroke: #173d33;
  }

  &:hover {
    color: #97d28b;
    background: #173d33;
    svg use {
      fill: #97d28b;
    }
  }
`,ka=({textContent:e,followTo:t})=>v.jsxs(U0,{onClick:t,children:[e,v.jsx("svg",{width:14,height:14,children:v.jsx("use",{href:ve+"#icon-group-31"})})]}),yh=(e,t)=>{const n=Y.useCallback(()=>window.innerWidth<e?"mobile":window.innerWidth<t?"tablet":"desktop",[t,e]),[r,i]=Y.useState(()=>n());return Y.useEffect(()=>{const s=()=>i(n());return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[n]),r},H0=()=>{const[e,t]=Y.useState(!1);return Y.useEffect(()=>{const n=()=>{const r=window.scrollY>0;t(r)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e},G0=O.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 11px;
  width: 100%;
  margin: 0 auto;
  background: #f3f5fa;

  @media ${Gn} {
    min-width: 360px;
    max-width: 480px;
    justify-content: space-between;
    padding: 36px 20px 0;
  }

  @media ${U} {
    width: 709px;
    max-width: 709px;

    justify-content: center;
    padding: 36px 0 0;
  }

  @media ${H} {
    width: 1240px;
    max-width: 1240px;
    padding-top: 24px;
  }
`,Q0=O.div`
    @media ${U} {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`,Y0=()=>{const e=yh(768,1440),t=H0(),n=()=>{Mi(Ge.CONTACT)};return v.jsxs(G0,{children:[v.jsx(vh,{$scrolled:t}),v.jsxs(Q0,{children:[v.jsx(D0,{}),e!=="mobile"&&v.jsx(ka,{textContent:"Get in touch",followTo:n})]})]})},xh=O.picture`
  @media ${Gn} {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`,X0="/vite-ecosolution/assets/turbine-mob-0dfea615.webp",K0="/vite-ecosolution/assets/turbine-2xmob-40a58984.webp",q0="/vite-ecosolution/assets/turbine-tabl-dbe8aade.webp",Z0="/vite-ecosolution/assets/turbine-2xtabl-344a54f0.webp",ad="/vite-ecosolution/assets/turbine-desk-43d5d924.webp",J0="/vite-ecosolution/assets/turbine-2xdesk-c8e6de3f.webp",ey=()=>v.jsxs(xh,{children:[v.jsx("source",{srcSet:`${X0} 1x, ${K0} 2x`,media:`${Gn}`}),v.jsx("source",{srcSet:`${q0} 1x, ${Z0} 2x`,media:`${U} and ${_u}`}),v.jsx("source",{srcSet:`${ad} 1x, ${J0} 2x`,media:`${H}`}),v.jsx("img",{src:`${ad}`,alt:"turbine"})]}),ty=O.button`
  display: flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  margin: 0 auto;

  border-radius: 500px;
  border: 1px solid #97d28b;
  color: #173d33;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    color: #97d28b;
    background: #173d33;
    border-color: #173d33;
  }

  @media ${U} {
    margin: 0;
  }
`,ny=O.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  background: #97d28b;
`,wh=({type:e,textContent:t,followTo:n})=>v.jsxs(ty,{type:e,onClick:n,children:[t,v.jsx(ny,{children:v.jsx("svg",{width:14,height:14,children:v.jsx("use",{href:ve+"#icon-arrow-right"})})})]}),ry=O.section`
  margin-top: 222px;

  @media ${U} {
    margin-top: 240px;
  }

  @media ${H} {
    margin-top: 264px;
  }
`,iy=O.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  border-bottom: 1px solid #97d28b;

  @media ${U} {
    flex-direction: row;
    gap: 65px;
    padding-bottom: 26px;
  }

  @media ${H} {
    gap: 296px;
    padding-bottom: 28px;
  }
`,sy=O.h1`
  color: #173d33;
  font-family: "Oswald";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media ${Gn} {
    width: 100%;
  }

  @media ${U} {
    width: 301px;
    margin-bottom: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media ${H} {
    width: 485px;

    font-size: 62px;
    line-height: 64px;
  }
`,oy=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${U} {
    gap: 43px;
  }

  @media ${H} {
    gap: 20px;
  }
`,ly=O.p`
  margin-top: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${U} {
    margin-top: 0;
    width: 342px;

    text-align: start;
  }

  @media ${H} {
    width: 363px;
  }
`,ay=O.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 36px;

  @media ${U} {
    gap: 0;
    margin-top: 16px;
    margin-bottom: 40px;
  }
`,uy=O.address`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${U} {
    flex-direction: row;
    gap: 0;
  }
`,cy=O.p`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media ${U} {
    text-align: start;
  }
`,dy=O.p`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media ${U} {
    margin-left: 77px;

    text-align: start;
  }

  @media ${H} {
    margin-left: 492px;
  }
`,fy=O.p`
  display: none;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${U} {
    display: block;
    margin-left: auto;
  }
`,py=()=>{const e=()=>{Mi(Ge.CASES)};return v.jsxs(ry,{id:Ge.MAIN,children:[v.jsxs(iy,{children:[v.jsx(sy,{children:"renewable energy for any task"}),v.jsxs(oy,{children:[v.jsx(ly,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),v.jsx("div",{children:v.jsx(wh,{type:"button",textContent:"Learn More",followTo:e})})]})]}),v.jsxs(ay,{children:[v.jsxs(uy,{children:[v.jsx(cy,{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),v.jsx(dy,{children:"office@ecosolution.com"})]}),v.jsx(fy,{children:"ecosolution © 2023"})]}),v.jsx(ey,{})]})},hy="/vite-ecosolution/assets/wind-farms-tabl-f682e3a7.webp",my="/vite-ecosolution/assets/wind-farms-2xtabl-2a8c5771.webp",ud="/vite-ecosolution/assets/wind-farms-desk-c8152f55.webp",gy="/vite-ecosolution/assets/wind-farms-2xdesk-837e6b69.webp",vy=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${hy} 1x, ${my} 2x`,media:`${U} and ${_u}`}),v.jsx("source",{srcSet:`${ud} 1x, ${gy} 2x`,media:`${H}`}),v.jsx("img",{src:`${ud}`,alt:"wind-farms"})]}),yy="/vite-ecosolution/assets/solar-panels-tabl-ef4daad0.webp",xy="/vite-ecosolution/assets/solar-panels-2xtabl-6d126731.webp",cd="/vite-ecosolution/assets/solar-panels-desk-40346a35.webp",wy="/vite-ecosolution/assets/solar-panels-2xdesk-99c6706c.webp",Sy=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${yy} 1x, ${xy} 2x`,media:`${U} and ${_u}`}),v.jsx("source",{srcSet:`${cd} 1x, ${wy} 2x`,media:`${H}`}),v.jsx("img",{src:`${cd}`,alt:"solar-panels"})]}),Ey=O.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;

  @media ${U} {
    gap: 100px;
    margin-top: 100px;
  }

  @media ${H} {
    gap: 122px;
    margin-top: 120px;
  }
`,ky=O.div`
  @media ${U} {
    display: flex;
    gap: 82px;
  }
  @media ${H} {
    gap: 254px;
  }
`,Ty=O.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${U} {
    width: 272px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${H} {
    width: 365px;

    font-size: 48px;
    line-height: 48px;
  }
`,Cy=O.p`
  margin-top: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${U} {
    /* 342px + 11px */
    width: 353px;
    margin-top: 0;
    padding-left: 11px;

    border-left: 1px solid #97d28b;
  }

  @media ${H} {
    width: 620px;
    padding-left: 161px;
  }
`,Py=O.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${U} {
    grid-template-columns: repeat(4, 1fr);
  }
`,Ji=O.li`
  flex-shrink: 0;
  padding: 12px;

  background: #eaedf1;

  @media ${U} {
    width: 159px;
  }

  @media ${H} {
    width: 274px;
    height: 339px;
    padding: 48px 24px;
  }
`,dd=O.li`
  display: none;
  @media ${U} {
    display: block;
    grid-column: span 2;
  }
`,es=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  margin-bottom: 12px;

  border-bottom: 1px solid #97d28b;

  @media ${U} {
    padding-bottom: 51px;
  }

  @media ${H} {
    padding-bottom: 94px;
    margin-bottom: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,ts=O.h3`
  display: flex;
  flex-direction: column;

  color: #173d33;
  font-family: "Oswald";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${U} {
    font-size: 18px;
  }

  @media ${H} {
    font-size: 32px;
    line-height: 48px;
  }
`,ns=O.p`
  color: #173d33;
  text-align: justify;
  font-family: "Fira Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${H} {
    font-size: 16px;
  }
`,_y=()=>v.jsxs(Ey,{id:Ge.ABOUT,children:[v.jsxs(ky,{children:[v.jsx(Ty,{children:"Main values of our company"}),v.jsx(Cy,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]}),v.jsxs(Py,{children:[v.jsxs(Ji,{children:[v.jsxs(es,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-maximize-circle",fill:"transparent",stroke:"#173D33"})}),v.jsx(ts,{children:"Openness"})]}),v.jsx(ns,{children:"to the world, people, new ideas and projects"})]}),v.jsxs(Ji,{children:[v.jsxs(es,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-global-edit",fill:"transparent",stroke:"#173D33"})}),v.jsx(ts,{children:"Responsibility"})]}),v.jsx(ns,{children:"we are aware that the results of our work have an impact on our lives and the lives of future generations"})]}),v.jsx(dd,{children:v.jsx(vy,{})}),v.jsx(dd,{children:v.jsx(Sy,{})}),v.jsxs(Ji,{children:[v.jsxs(es,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-cpu-charge",fill:"transparent",stroke:"#173D33"})}),v.jsx(ts,{children:"Innovation"})]}),v.jsx(ns,{children:"we use the latest technology to implement non-standard solutions"})]}),v.jsxs(Ji,{children:[v.jsxs(es,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-ranking",fill:"transparent",stroke:"#173D33"})}),v.jsx(ts,{children:"Quality"})]}),v.jsx(ns,{children:"we do not strive to be the first among others, but we want to be the best in our business"})]})]})]}),zy=()=>{const[e,t]=Y.useState(1134147814),n=Y.useRef(null);return Y.useEffect(()=>(n.current=setInterval(()=>{t(r=>r+=1)},1e3),()=>{n.current&&clearInterval(n.current)}),[]),e},Iy=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),Oy=O.section`
  margin-top: 36px;

  @media ${U} {
    margin-top: 100px;
  }

  @media ${H} {
    margin-top: 120px;
  }
`,My=O.h2`
  width: 286px;
  margin: 0 auto;

  color: #173d33;
  text-align: center;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${U} {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${H} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }

  &::after {
    display: block;
    margin: 24px auto 0;
    content: "";

    width: 1px;
    height: 87px;
    flex-shrink: 0;

    background: #97d28b;

    @media ${H} {
      margin: 16px auto 17px;
    }
  }
`,$y=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  @media ${U} {
    gap: 24px;
  }

  @media ${H} {
    margin-top: 17px;
  }
`,Ly=O.p`
  color: #97d28b;
  text-align: center;
  font-family: "Oswald";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media ${U} {
    font-size: 100px;
    line-height: 100px;
  }

  @media ${H} {
    font-size: 164px;
    line-height: 164px;
  }
`,jy=O.span`
  color: #173d33;
  text-align: center;
  font-family: "Oswald";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media ${U} {
    font-size: 28px;
    line-height: 48px;
  }

  @media ${H} {
    font-size: 48px;
  }
`,Ay=()=>{const e=zy();return v.jsxs(Oy,{children:[v.jsx(My,{children:"Electricity we produced for all time"}),v.jsxs($y,{children:[v.jsx(Ly,{children:Iy(e)}),v.jsx(jy,{children:"kWh"})]})]})};function fd(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Iu(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:fd(t[n])&&fd(e[n])&&Object.keys(t[n]).length>0&&Iu(e[n],t[n])})}const Sh={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Lr(){const e=typeof document<"u"?document:{};return Iu(e,Sh),e}const Ny={document:Sh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function it(){const e=typeof window<"u"?window:{};return Iu(e,Ny),e}function by(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Fy(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ta(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function eo(){return Date.now()}function Dy(e){const t=it();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Ry(e,t){t===void 0&&(t="x");const n=it();let r,i,s;const o=Dy(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function rs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Vy(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ze(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Vy(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const a=i[s],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(rs(e[a])&&rs(r[a])?r[a].__swiper__?e[a]=r[a]:Ze(e[a],r[a]):!rs(e[a])&&rs(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Ze(e[a],r[a])):e[a]=r[a])}}}return e}function is(e,t,n){e.style.setProperty(t,n)}function Eh(e){let{swiper:t,targetPosition:n,side:r}=e;const i=it(),s=-t.translate;let o=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>s?"next":"prev",c=(h,g)=>u==="next"&&h>=g||u==="prev"&&h<=g,p=()=>{a=new Date().getTime(),o===null&&(o=a);const h=Math.max(Math.min((a-o)/l,1),0),g=.5-Math.cos(h*Math.PI)/2;let x=s+g*(n-s);if(c(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),c(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function $t(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function to(e){try{console.warn(e);return}catch{}}function no(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:by(t)),n}function By(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Wy(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function an(e,t){return it().getComputedStyle(e,null).getPropertyValue(t)}function pd(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Uy(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function hd(e,t,n){const r=it();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let ul;function Hy(){const e=it(),t=Lr();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function kh(){return ul||(ul=Hy()),ul}let cl;function Gy(e){let{userAgent:t}=e===void 0?{}:e;const n=kh(),r=it(),i=r.navigator.platform,s=t||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&x&&n.touch&&y.indexOf(`${a}x${l}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),x=!1),u&&!g&&(o.os="android",o.android=!0),(c||h||p)&&(o.os="ios",o.ios=!0),o}function Qy(e){return e===void 0&&(e={}),cl||(cl=Gy(e)),cl}let dl;function Yy(){const e=it();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,s]=r.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=i<16||i===16&&s<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function Xy(){return dl||(dl=Yy()),dl}function Ky(e){let{swiper:t,on:n,emit:r}=e;const i=it();let s=null,o=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(p=>{o=i.requestAnimationFrame(()=>{const{width:h,height:g}=t;let x=h,y=g;p.forEach(T=>{let{contentBoxSize:f,contentRect:d,target:m}=T;m&&m!==t.el||(x=d?d.width:(f[0]||f).inlineSize,y=d?d.height:(f[0]||f).blockSize)}),(x!==h||y!==g)&&a()})}),s.observe(t.el))},u=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function qy(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],o=it(),a=function(c,p){p===void 0&&(p={});const h=o.MutationObserver||o.WebkitMutationObserver,g=new h(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});g.observe(c,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const c=Uy(t.hostEl);for(let p=0;p<c.length;p+=1)a(c[p])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var Zy={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function Jy(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(an(r,"padding-left")||0,10)-parseInt(an(r,"padding-right")||0,10),n=n-parseInt(an(r,"padding-top")||0,10)-parseInt(an(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function e1(){const e=this;function t(z,D){return parseFloat(z.getPropertyValue(e.getDirectionLabel(D))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=$t(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:c.length;let h=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let T=n.slidesOffsetAfter;typeof T=="function"&&(T=n.slidesOffsetAfter.call(e));const f=e.snapGrid.length,d=e.slidesGrid.length;let m=n.spaceBetween,S=-y,E=0,C=0;if(typeof s>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*s:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,c.forEach(z=>{o?z.style.marginLeft="":z.style.marginRight="",z.style.marginBottom="",z.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(is(r,"--swiper-centered-offset-before",""),is(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let I;const A=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(z=>typeof n.breakpoints[z].slidesPerView<"u").length>0;for(let z=0;z<p;z+=1){I=0;let D;if(c[z]&&(D=c[z]),P&&e.grid.updateSlide(z,D,c),!(c[z]&&an(D,"display")==="none")){if(n.slidesPerView==="auto"){A&&(c[z].style[e.getDirectionLabel("width")]="");const $=getComputedStyle(D),L=D.style.transform,G=D.style.webkitTransform;if(L&&(D.style.transform="none"),G&&(D.style.webkitTransform="none"),n.roundLengths)I=e.isHorizontal()?hd(D,"width",!0):hd(D,"height",!0);else{const q=t($,"width"),ie=t($,"padding-left"),fe=t($,"padding-right"),N=t($,"margin-left"),b=t($,"margin-right"),W=$.getPropertyValue("box-sizing");if(W&&W==="border-box")I=q+N+b;else{const{clientWidth:te,offsetWidth:J}=D;I=q+ie+fe+N+b+(J-te)}}L&&(D.style.transform=L),G&&(D.style.webkitTransform=G),n.roundLengths&&(I=Math.floor(I))}else I=(s-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(I=Math.floor(I)),c[z]&&(c[z].style[e.getDirectionLabel("width")]=`${I}px`);c[z]&&(c[z].swiperSlideSize=I),x.push(I),n.centeredSlides?(S=S+I/2+E/2+m,E===0&&z!==0&&(S=S-s/2-m),z===0&&(S=S-s/2-m),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),C%n.slidesPerGroup===0&&h.push(S),g.push(S)):(n.roundLengths&&(S=Math.floor(S)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&h.push(S),g.push(S),S=S+I+m),e.virtualSize+=I+m,E=I,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+T,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),P&&e.grid.updateWrapperSize(I,h),!n.centeredSlides){const z=[];for(let D=0;D<h.length;D+=1){let $=h[D];n.roundLengths&&($=Math.floor($)),h[D]<=e.virtualSize-s&&z.push($)}h=z,Math.floor(e.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-s)}if(l&&n.loop){const z=x[0]+m;if(n.slidesPerGroup>1){const D=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),$=z*n.slidesPerGroup;for(let L=0;L<D;L+=1)h.push(h[h.length-1]+$)}for(let D=0;D<e.virtual.slidesBefore+e.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+z),g.push(g[g.length-1]+z),e.virtualSize+=z}if(h.length===0&&(h=[0]),m!==0){const z=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((D,$)=>!n.cssMode||n.loop?!0:$!==c.length-1).forEach(D=>{D.style[z]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let z=0;x.forEach($=>{z+=$+(m||0)}),z-=m;const D=z-s;h=h.map($=>$<=0?-y:$>D?D+T:$)}if(n.centerInsufficientSlides){let z=0;if(x.forEach(D=>{z+=D+(m||0)}),z-=m,z<s){const D=(s-z)/2;h.forEach(($,L)=>{h[L]=$-D}),g.forEach(($,L)=>{g[L]=$+D})}}if(Object.assign(e,{slides:c,snapGrid:h,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){is(r,"--swiper-centered-offset-before",`${-h[0]}px`),is(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const z=-e.snapGrid[0],D=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map($=>$+z),e.slidesGrid=e.slidesGrid.map($=>$+D)}if(p!==u&&e.emit("slidesLengthChange"),h.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const z=`${n.containerModifierClass}backface-hidden`,D=e.el.classList.contains(z);p<=n.maxBackfaceHiddenSlides?D||e.el.classList.add(z):D&&e.el.classList.remove(z)}}function t1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const a=t.activeIndex+s;if(a>t.slides.length&&!r)break;n.push(o(a))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function n1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function r1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const u=r[l];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+a),h=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+a),g=-(o-c),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l];(g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),y&&r[l].classList.add(n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-h:h}}function i1(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,u=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;s=c||i<=0,o=p||i>=1,c&&(i=0),p&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[c],g=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?a=(y-h)/x:a=(y+x-g)/x,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(l&&!s||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function s1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,a=p=>$t(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];t.forEach(p=>{p.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,u,c;if(s)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${p}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(p=>p.column===i)[0],c=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(l.classList.add(n.slideActiveClass),o?(c&&c.classList.add(n.slideNextClass),u&&u.classList.add(n.slidePrevClass)):(c=Wy(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),c&&c.classList.add(n.slideNextClass),u=By(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass))),e.emitSlidesClasses()}const Cs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},fl=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Ca=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,a=[o-t];a.push(...Array.from({length:t}).map((l,u)=>o+r+u)),e.slides.forEach((l,u)=>{a.includes(l.column)&&fl(e,u)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=s+t;o+=1){const a=(o%n+n)%n;(a<i||a>s)&&fl(e,a)}else for(let o=Math.max(i-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&(o>s||o<i)&&fl(e,o)};function o1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function l1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l=e,u;const c=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=o1(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===s&&!t.params.loop){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=c(l);else if(p){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),h=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?h=parseInt(g,10):h=l}else h=l;Object.assign(t,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:h,previousIndex:s,activeIndex:l}),t.initialized&&Ca(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function a1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let s=!1,o;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){s=!0,o=a;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var u1={updateSize:Jy,updateSlides:e1,updateAutoHeight:t1,updateSlidesOffset:n1,updateSlidesProgress:r1,updateProgress:i1,updateSlidesClasses:s1,updateActiveIndex:l1,updateClickedSlide:a1};function c1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Ry(s,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function d1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let c;const p=n.maxTranslate()-n.minTranslate();p===0?c=0:c=(e-n.minTranslate())/p,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function f1(){return-this.snapGrid[0]}function p1(){return-this.snapGrid[this.snapGrid.length-1]}function h1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,s.updateProgress(c),o.cssMode){const p=s.isHorizontal();if(t===0)a[p?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return Eh({swiper:s,targetPosition:-c,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var m1={getTranslate:c1,setTranslate:d1,minTranslate:f1,maxTranslate:p1,translateTo:h1};function g1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Th(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:o}=t;let a=r;if(a||(s>o?a="next":s<o?a="prev":a="reset"),t.emit(`transition${i}`),n&&s!==o){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function v1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Th({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function y1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Th({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var x1={setTransition:g1,transitionStart:v1,transitionEnd:y1};function w1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:x}=s;if(s.animating&&a.preventInteractionOnTransition||!x&&!r&&!i)return!1;const y=Math.min(s.params.slidesPerGroupSkip,o);let T=y+Math.floor((o-y)/s.params.slidesPerGroup);T>=l.length&&(T=l.length-1);const f=-l[T];if(a.normalizeSlideIndex)for(let m=0;m<u.length;m+=1){const S=-Math.floor(f*100),E=Math.floor(u[m]*100),C=Math.floor(u[m+1]*100);typeof u[m+1]<"u"?S>=E&&S<C-(C-E)/2?o=m:S>=E&&S<C&&(o=m+1):S>=E&&(o=m)}if(s.initialized&&o!==p&&(!s.allowSlideNext&&(h?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(p||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let d;if(o>p?d="next":o<p?d="prev":d="reset",h&&-f===s.translate||!h&&f===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(f),d!=="reset"&&(s.transitionStart(n,d),s.transitionEnd(n,d)),!1;if(a.cssMode){const m=s.isHorizontal(),S=h?f:-f;if(t===0){const E=s.virtual&&s.params.virtual.enabled;E&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),E&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[m?"scrollLeft":"scrollTop"]=S})):g[m?"scrollLeft":"scrollTop"]=S,E&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Eh({swiper:s,targetPosition:S,side:m?"left":"top"}),!0;g.scrollTo({[m?"left":"top"]:S,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(f),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,d),t===0?s.transitionEnd(n,d):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(S){!s||s.destroyed||S.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,d))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function S1(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this,s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let a;if(s){const h=o*i.params.grid.rows;a=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else a=i.getSlideIndexByData(o);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let c=i.params.slidesPerView;c==="auto"?c=i.slidesPerViewDynamic():(c=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&c%2===0&&(c=c+1));let p=l-a<c;if(u&&(p=p||a<Math.ceil(c/2)),p){const h=u?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?a+1:a-l+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(s){const h=o*i.params.grid.rows;o=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function E1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,u=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function k1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=r;if(!l)return r;const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const g=h(p),x=s.map(f=>h(f));let y=s[x.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let f;s.forEach((d,m)=>{g>=d&&(f=m)}),typeof f<"u"&&(y=s[f>0?f-1:f])}let T=0;if(typeof y<"u"&&(T=o.indexOf(y),T<0&&(T=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(T=T-r.slidesPerViewDynamic("previous",!0)+1,T=Math.max(T,0))),i.rewind&&r.isBeginning){const f=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(f,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(T,e,t,n)}),!0;return r.slideTo(T,e,t,n)}function T1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function C1(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function P1(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex($t(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ta(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex($t(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ta(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var _1={slideTo:w1,slideToLoop:S1,slideNext:E1,slidePrev:k1,slideReset:T1,slideToClosest:C1,slideToClickedSlide:P1};function z1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{$t(r,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},s=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),a=t.slides.length%o!==0,l=s&&t.slides.length%n.grid.rows!==0,u=c=>{for(let p=0;p<c;p+=1){const h=t.isElement?no("swiper-slide",[n.slideBlankClass]):no("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(h)}};if(a){if(n.loopAddBlankSlides){const c=o-t.slides.length%o;u(c),t.recalcSlides(),t.updateSlides()}else to("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-t.slides.length%n.grid.rows;u(c),t.recalcSlides(),t.updateSlides()}else to("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function I1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:p,slidesEl:h,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=p,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const T=g.slidesPerGroupAuto?y:g.slidesPerGroup;let f=T;f%T!==0&&(f+=T-f%T),f+=g.loopAdditionalSlides,l.loopedSlides=f;const d=l.grid&&g.grid&&g.grid.rows>1;u.length<y+f?to("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&g.grid.fill==="row"&&to("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],S=[];let E=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(u.filter(L=>L.classList.contains(g.slideActiveClass))[0]):E=s;const C=r==="next"||!r,P=r==="prev"||!r;let I=0,A=0;const z=d?Math.ceil(u.length/g.grid.rows):u.length,$=(d?u[s].column:s)+(x&&typeof i>"u"?-y/2+.5:0);if($<f){I=Math.max(f-$,T);for(let L=0;L<f-$;L+=1){const G=L-Math.floor(L/z)*z;if(d){const q=z-G-1;for(let ie=u.length-1;ie>=0;ie-=1)u[ie].column===q&&m.push(ie)}else m.push(z-G-1)}}else if($+y>z-f){A=Math.max($-(z-f*2),T);for(let L=0;L<A;L+=1){const G=L-Math.floor(L/z)*z;d?u.forEach((q,ie)=>{q.column===G&&S.push(ie)}):S.push(G)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&m.forEach(L=>{u[L].swiperLoopMoveDOM=!0,h.prepend(u[L]),u[L].swiperLoopMoveDOM=!1}),C&&S.forEach(L=>{u[L].swiperLoopMoveDOM=!0,h.append(u[L]),u[L].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():d&&(m.length>0&&P||S.length>0&&C)&&l.slides.forEach((L,G)=>{l.grid.updateSlide(G,L,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&P){if(typeof t>"u"){const L=l.slidesGrid[E],q=l.slidesGrid[E+I]-L;a?l.setTranslate(l.translate-q):(l.slideTo(E+I,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else if(i){const L=d?m.length/g.grid.rows:m.length;l.slideTo(l.activeIndex+L,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&C)if(typeof t>"u"){const L=l.slidesGrid[E],q=l.slidesGrid[E-A]-L;a?l.setTranslate(l.translate-q):(l.slideTo(E-A,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else{const L=d?S.length/g.grid.rows:S.length;l.slideTo(l.activeIndex-L,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=p,l.controller&&l.controller.control&&!o){const L={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(G=>{!G.destroyed&&G.params.loop&&G.loopFix({...L,slideTo:G.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...L,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function O1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var M1={loopCreate:z1,loopFix:I1,loopDestroy:O1};function $1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function L1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var j1={setGrabCursor:$1,unsetGrabCursor:L1};function A1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Lr()||r===it())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function md(e,t,n){const r=it(),{params:i}=e,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function N1(e){const t=this,n=Lr();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){md(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=t;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(l=c[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(h?A1(p,l):l.closest(p))){t.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const g=o.currentX,x=o.currentY;if(!md(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=x,i.touchStartTime=eo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const T=y&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||T)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function b1(e){const t=Lr(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){s.startX=c,s.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p}),r.touchStartTime=eo());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=p;const h=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(h**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:h*h+g*g>=25&&(C=Math.atan2(Math.abs(g),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?h:g,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),s.diff=x,x*=i.touchRatio,o&&(x=-x,y=-y);const T=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const f=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&T!==n.touchesDirection&&f&&d&&Math.abs(x)>=1){Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),x>0?(f&&d&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**E))):x<0&&(f&&d&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**E))),S&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function F1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(E=>E.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:u,enabled:c}=t;if(!c||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=eo(),h=p-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),h<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=eo(),Ta(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(o.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,T=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[E+C]<"u"?(x||g>=u[E]&&g<u[E+C])&&(y=E,T=u[E+C]-u[E]):(x||g>=u[E])&&(y=E,T=u[u.length-1]-u[u.length-2])}let f=null,d=null;o.rewind&&(t.isBeginning?d=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const m=(g-u[y])/T,S=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(h>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?f:y+S):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+S):d!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(d):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+S):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:y+S),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:y))}}function gd(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function D1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function R1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function V1(e){const t=this;Cs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function B1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Ch=(e,t)=>{const n=Lr(),{params:r,el:i,wrapperEl:s,device:o}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",gd,!0):e[u]("observerUpdate",gd,!0),i[l]("load",e.onLoad,{capture:!0})};function W1(){const e=this,{params:t}=e;e.onTouchStart=N1.bind(e),e.onTouchMove=b1.bind(e),e.onTouchEnd=F1.bind(e),e.onDocumentTouchStart=B1.bind(e),t.cssMode&&(e.onScroll=R1.bind(e)),e.onClick=D1.bind(e),e.onLoad=V1.bind(e),Ch(e,"on")}function U1(){Ch(this,"off")}var H1={attachEvents:W1,detachEvents:U1};const vd=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function G1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||e.originalParams,u=vd(e,r),c=vd(e,l),p=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(f=>{if(typeof l[f]>"u")return;const d=r[f]&&r[f].enabled,m=l[f]&&l[f].enabled;d&&!m&&e[f].disable(),!d&&m&&e[f].enable()});const h=l.direction&&l.direction!==r.direction,g=r.loop&&(l.slidesPerView!==r.slidesPerView||h),x=r.loop;h&&n&&e.changeDirection(),Ze(e.params,l);const y=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!y?e.disable():!p&&y&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&T?(e.loopCreate(t),e.updateSlides()):x&&!T&&e.loopDestroy()),e.emit("breakpoint",l)}function Q1(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=it(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var Y1={setBreakpoint:G1,getBreakpoint:Q1};function X1(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function K1(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=X1(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function q1(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var Z1={addClasses:K1,removeClasses:q1};function J1(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var ex={checkOverflow:J1},Pa={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function tx(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ze(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Ze(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ze(t,r)}}const pl={eventsEmitter:Zy,update:u1,translate:m1,transition:x1,slide:_1,loop:M1,grabCursor:j1,events:H1,breakpoints:Y1,checkOverflow:ex,classes:Z1},hl={};let Ou=class Dt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ze({},n),t&&!n.el&&(n.el=t);const o=Lr();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const c=[];return o.querySelectorAll(n.el).forEach(p=>{const h=Ze({},n,{el:p});c.push(new Dt(h))}),c}const a=this;a.__swiper__=!0,a.support=kh(),a.device=Qy({userAgent:n.userAgent}),a.browser=Xy(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(c=>{c({params:n,swiper:a,extendParams:tx(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Ze({},Pa,l);return a.params=Ze({},u,hl,n),a.originalParams=Ze({},a.params),a.passedParams=Ze({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(c=>{a.on(c,a.params.on[c])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=$t(n,`.${r.slideClass}, swiper-slide`),s=pd(i[0]);return pd(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=$t(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=s[u]?s[u].swiperSlideSize:0,h;for(let g=u+1;g<s.length;g+=1)s[g]&&!h&&(p+=s[g].swiperSlideSize,c+=1,p>l&&(h=!0));for(let g=u-1;g>=0;g-=1)s[g]&&!h&&(p+=s[g].swiperSlideSize,c+=1,p>l&&(h=!0))}else if(t==="current")for(let p=u+1;p<s.length;p+=1)(n?o[p]+a[p]-o[u]<l:o[p]-o[u]<l)&&(c+=1);else for(let p=u-1;p>=0;p-=1)o[u]-o[p]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Cs(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(o.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):$t(r,i())[0])();return!o&&n.params.createElements&&(o=no("div",n.params.wrapperClass),r.append(o),$t(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||an(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||an(r,"direction")==="rtl"),wrongRTL:an(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Cs(n,s):s.addEventListener("load",o=>{Cs(n,o.target)})}),Ca(n),n.initialized=!0,Ca(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,Fy(r)),r.destroyed=!0),null}static extendDefaults(t){Ze(hl,t)}static get extendedDefaults(){return hl}static get defaults(){return Pa}static installModule(t){Dt.prototype.__modules__||(Dt.prototype.__modules__=[]);const n=Dt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Dt.installModule(n)),Dt):(Dt.installModule(t),Dt)}};Object.keys(pl).forEach(e=>{Object.keys(pl[e]).forEach(t=>{Ou.prototype[t]=pl[e][t]})});Ou.use([Ky,qy]);const Ph=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Wn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function vr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Wn(t[r])&&Wn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:vr(e[r],t[r]):e[r]=t[r]})}function _h(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function zh(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Ih(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Oh(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function nx(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function rx(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=e;const u=i.filter(A=>A!=="children"&&A!=="direction"&&A!=="wrapperClass"),{params:c,pagination:p,navigation:h,scrollbar:g,virtual:x,thumbs:y}=t;let T,f,d,m,S,E,C,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(T=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(f=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(S=!0);const I=A=>{t[A]&&(t[A].destroy(),A==="navigation"?(t.isElement&&(t[A].prevEl.remove(),t[A].nextEl.remove()),c[A].prevEl=void 0,c[A].nextEl=void 0,t[A].prevEl=void 0,t[A].nextEl=void 0):(t.isElement&&t[A].el.remove(),c[A].el=void 0,t[A].el=void 0))};i.includes("loop")&&t.isElement&&(c.loop&&!r.loop?E=!0:!c.loop&&r.loop?C=!0:P=!0),u.forEach(A=>{if(Wn(c[A])&&Wn(r[A]))Object.assign(c[A],r[A]),(A==="navigation"||A==="pagination"||A==="scrollbar")&&"enabled"in r[A]&&!r[A].enabled&&I(A);else{const z=r[A];(z===!0||z===!1)&&(A==="navigation"||A==="pagination"||A==="scrollbar")?z===!1&&I(A):c[A]=r[A]}}),u.includes("controller")&&!f&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&x&&c.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&c.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&c.loop&&(P=!0),T&&y.init()&&y.update(!0),f&&(t.controller.control=c.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(c.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(c.scrollbar.el=a),g.init(),g.updateSize(),g.setTranslate()),S&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=t.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),t.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),s&&(c.navigation.nextEl=s),o&&(c.navigation.prevEl=o),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(E||P)&&t.loopDestroy(),(C||P)&&t.loopCreate(),t.update()}function ix(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};vr(n,Pa),n._emitClasses=!0,n.init=!1;const s={},o=Ph.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?Wn(e[l])?(n[l]={},i[l]={},vr(n[l],e[l]),vr(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:s[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function sx(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:a}=e;_h(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),zh(t)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),Ih(t)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function ox(e,t,n,r,i){const s=[];if(!t)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return Ph.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Wn(e[l])&&Wn(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?o(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}),c.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}))}else e[l]!==t[l]&&o(l)}),s}const lx=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function Mh(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function $h(e){const t=[];return X.Children.toArray(e).forEach(n=>{Mh(n)?t.push(n):n.props&&n.props.children&&$h(n.props.children).forEach(r=>t.push(r))}),t}function ax(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return X.Children.toArray(e).forEach(r=>{if(Mh(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=$h(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function ux(e,t,n){if(!n)return null;const r=c=>{let p=c;return c<0?p=t.length+c:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let c=a;c<l;c+=1)c>=s&&c<=o&&u.push(t[r(c)]);return u.map((c,p)=>X.cloneElement(c,{swiper:e,style:i,key:`slide-${p}`}))}function ii(e,t){return typeof window>"u"?Y.useEffect(e,t):Y.useLayoutEffect(e,t)}const yd=Y.createContext(null),cx=Y.createContext(null),Lh=Y.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...a}=e===void 0?{}:e,l=!1;const[u,c]=Y.useState("swiper"),[p,h]=Y.useState(null),[g,x]=Y.useState(!1),y=Y.useRef(!1),T=Y.useRef(null),f=Y.useRef(null),d=Y.useRef(null),m=Y.useRef(null),S=Y.useRef(null),E=Y.useRef(null),C=Y.useRef(null),P=Y.useRef(null),{params:I,passedParams:A,rest:z,events:D}=ix(a),{slides:$,slots:L}=ax(s),G=()=>{x(!g)};Object.assign(I.on,{_containerClasses(b,W){c(W)}});const q=()=>{Object.assign(I.on,D),l=!0;const b={...I};if(delete b.wrapperClass,f.current=new Ou(b),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=$;const W={cache:!1,slides:$,renderExternal:h,renderExternalUpdate:!1};vr(f.current.params.virtual,W),vr(f.current.originalParams.virtual,W)}};T.current||q(),f.current&&f.current.on("_beforeBreakpoint",G);const ie=()=>{l||!D||!f.current||Object.keys(D).forEach(b=>{f.current.on(b,D[b])})},fe=()=>{!D||!f.current||Object.keys(D).forEach(b=>{f.current.off(b,D[b])})};Y.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",G)}),Y.useEffect(()=>{!y.current&&f.current&&(f.current.emitSlidesClasses(),y.current=!0)}),ii(()=>{if(t&&(t.current=T.current),!!T.current)return f.current.destroyed&&q(),sx({el:T.current,nextEl:S.current,prevEl:E.current,paginationEl:C.current,scrollbarEl:P.current,swiper:f.current},I),o&&o(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),ii(()=>{ie();const b=ox(A,d.current,$,m.current,W=>W.key);return d.current=A,m.current=$,b.length&&f.current&&!f.current.destroyed&&rx({swiper:f.current,slides:$,passedParams:A,changedParams:b,nextEl:S.current,prevEl:E.current,scrollbarEl:P.current,paginationEl:C.current}),()=>{fe()}}),ii(()=>{lx(f.current)},[p]);function N(){return I.virtual?ux(f.current,$,p):$.map((b,W)=>X.cloneElement(b,{swiper:f.current,swiperSlideIndex:W}))}return X.createElement(r,ro({ref:T,className:Oh(`${u}${n?` ${n}`:""}`)},z),X.createElement(cx.Provider,{value:f.current},L["container-start"],X.createElement(i,{className:nx(I.wrapperClass)},L["wrapper-start"],N(),L["wrapper-end"]),_h(I)&&X.createElement(X.Fragment,null,X.createElement("div",{ref:E,className:"swiper-button-prev"}),X.createElement("div",{ref:S,className:"swiper-button-next"})),Ih(I)&&X.createElement("div",{ref:P,className:"swiper-scrollbar"}),zh(I)&&X.createElement("div",{ref:C,className:"swiper-pagination"}),L["container-end"]))});Lh.displayName="Swiper";const jh=Y.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:u,...c}=e===void 0?{}:e;const p=Y.useRef(null),[h,g]=Y.useState("swiper-slide"),[x,y]=Y.useState(!1);function T(S,E,C){E===p.current&&g(C)}ii(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!s)){if(s.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return s.on("_slideClass",T),()=>{s&&s.off("_slideClass",T)}}}),ii(()=>{s&&p.current&&!s.destroyed&&g(s.getSlideClasses(p.current))},[s]);const f={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(f):r,m=()=>{y(!0)};return X.createElement(n,ro({ref:p,className:Oh(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},c),o&&X.createElement(yd.Provider,{value:f},X.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},d(),a&&!x&&X.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&X.createElement(yd.Provider,{value:f},d(),a&&!x&&X.createElement("div",{className:"swiper-lazy-preloader"})))});jh.displayName="SwiperSlide";function dx(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=$t(e.el,`.${r[i]}`)[0];s||(s=no("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function fx(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const s=y=>(Array.isArray(y)?y:[y]).filter(T=>!!T);function o(y){let T;return y&&typeof y=="string"&&t.isElement&&(T=t.el.querySelector(y),T)?T:(y&&(typeof y=="string"&&(T=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&T.length>1&&t.el.querySelectorAll(y).length===1&&(T=t.el.querySelector(y))),y&&!T?y:T)}function a(y,T){const f=t.params.navigation;y=s(y),y.forEach(d=>{d&&(d.classList[T?"add":"remove"](...f.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=T),t.params.watchOverflow&&t.enabled&&d.classList[t.isLocked?"add":"remove"](f.lockClass))})}function l(){const{nextEl:y,prevEl:T}=t.navigation;if(t.params.loop){a(T,!1),a(y,!1);return}a(T,t.isBeginning&&!t.params.rewind),a(y,t.isEnd&&!t.params.rewind)}function u(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const y=t.params.navigation;if(t.params.navigation=dx(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let T=o(y.nextEl),f=o(y.prevEl);Object.assign(t.navigation,{nextEl:T,prevEl:f}),T=s(T),f=s(f);const d=(m,S)=>{m&&m.addEventListener("click",S==="next"?c:u),!t.enabled&&m&&m.classList.add(...y.lockClass.split(" "))};T.forEach(m=>d(m,"next")),f.forEach(m=>d(m,"prev"))}function h(){let{nextEl:y,prevEl:T}=t.navigation;y=s(y),T=s(T);const f=(d,m)=>{d.removeEventListener("click",m==="next"?c:u),d.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(d=>f(d,"next")),T.forEach(d=>f(d,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?x():(p(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{h()}),r("enable disable",()=>{let{nextEl:y,prevEl:T}=t.navigation;if(y=s(y),T=s(T),t.enabled){l();return}[...y,...T].filter(f=>!!f).forEach(f=>f.classList.add(t.params.navigation.lockClass))}),r("click",(y,T)=>{let{nextEl:f,prevEl:d}=t.navigation;f=s(f),d=s(d);const m=T.target;if(t.params.navigation.hideOnClick&&!d.includes(m)&&!f.includes(m)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===m||t.pagination.el.contains(m)))return;let S;f.length?S=f[0].classList.contains(t.params.navigation.hiddenClass):d.length&&(S=d[0].classList.contains(t.params.navigation.hiddenClass)),i(S===!0?"navigationShow":"navigationHide"),[...f,...d].filter(E=>!!E).forEach(E=>E.classList.toggle(t.params.navigation.hiddenClass))}});const g=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),l()},x=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:g,disable:x,update:l,init:p,destroy:h})}const px=O.img`
  @media ${U} {
    width: 342px;
  }

  @media ${H} {
    width: 596px;
    height: 296px;
  }
`,hx=({imageSrc:e,imageSrc2x:t,alt:n})=>v.jsxs(xh,{children:[v.jsx("source",{srcSet:`${e} 1x, ${t} 2x`}),v.jsx(px,{src:e,alt:n})]}),mx="/vite-ecosolution/assets/lviv-region-5b359b82.webp",gx="/vite-ecosolution/assets/lviv-region-2x-96295f3b.webp",vx="/vite-ecosolution/assets/zhytomyr-city-3f6eae4f.webp",yx="/vite-ecosolution/assets/zhytomyr-city-2x-a0538cd1.webp",xx="/vite-ecosolution/assets/rivne-city-323c680c.webp",wx="/vite-ecosolution/assets/rivne-city-2x-a1d6bb37.webp",Sx="/vite-ecosolution/assets/kherson-city-ef69295b.webp",Ex="/vite-ecosolution/assets/kherson-city-2x-990e6e5b.webp",kx="/vite-ecosolution/assets/zaporizhia-city-805bcd2f.webp",Tx="/vite-ecosolution/assets/zaporizhia-city-2x-71a22a97.webp",Cx=[{key:1,imageSrc:mx,imageSrc2x:gx,title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{key:2,imageSrc:vx,imageSrc2x:yx,title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{key:3,imageSrc:xx,imageSrc2x:wx,title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{key:4,imageSrc:Sx,imageSrc2x:Ex,title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{key:5,imageSrc:kx,imageSrc2x:Tx,title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],Px=O.section`
  margin-top: 36px;

  @media ${U} {
    margin-top: 100px;
  }

  @media ${H} {
    margin-top: 120px;
  }
`,_x=O.div`
  @media ${U} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,zx=O.h2`
  width: 100%;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${U} {
    width: 276px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${H} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`,Ix=O.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 24px;

  @media ${U} {
    margin-top: 0;
    padding-left: 9px;

    border-left: 1px solid #97d28b;
  }

  @media ${H} {
    padding-left: 161px;
  }
`,Ox=O.p`
  color: #173d33;

  text-align: justify;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;

  span {
    color: rgba(23, 61, 51, 0.25);
  }
`,Mx=O.div`
  display: flex;
  gap: 12px;
`,$x=O.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  rotate: 180deg;
  cursor: pointer;

  border-radius: 100px;
  border: 1px solid #173d33;

  svg {
    stroke: #173d33;
  }

  &:hover {
    border-color: #97d28b;

    svg {
      stroke: #97d28b;
    }
  }
`,Lx=O.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;

  border-radius: 100px;
  border: 1px solid #173d33;

  svg {
    stroke: #173d33;
  }

  &:hover {
    border-color: #97d28b;

    svg {
      stroke: #97d28b;
    }
  }
`,jx=O.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: 24px;

  @media ${U} {
    margin-top: 38px;
  }

  @media ${H} {
    margin-top: 120px;
  }
`,Ax=O.div`
  padding: 24px 12px 12px;

  background: #eaedf1;

  @media ${H} {
    padding: 48px 36px;
  }
`,Nx=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;

  @media ${Gn} {
    gap: 61px;
  }

  border-bottom: 1px solid #97d28b;
`,bx=O.h4`
  width: 100%;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${U} {
    width: 194px;
    height: 72px;

    font-size: 20px;
    letter-spacing: -0.85px;
  }

  @media ${H} {
    width: 357px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,Fx=O.a`
  display: inline-flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 100px;
  background: #97d28b;
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    background: #173d33;

    svg use {
      stroke: #97d28b;
    }
  }
`,Dx=O.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`,Rx=O.p`
  color: #173d33;
  text-align: justify;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media ${U} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${H} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Vx=O.p`
  color: #173d33;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media ${U} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${H} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Bx=()=>{const[e,t]=Y.useState(1),n=yh(768,1440);return v.jsxs(Px,{id:Ge.CASES,children:[v.jsxs(_x,{children:[v.jsx(zx,{children:"Successful cases of our company"}),v.jsxs(Ix,{children:[v.jsxs(Ox,{children:[e,v.jsx("span",{children:"/05"})]}),v.jsxs(Mx,{children:[v.jsx($x,{className:"custom_prev",children:v.jsx("svg",{width:36,height:36,children:v.jsx("use",{href:ve+"#icon-arrow-right"})})}),v.jsx(Lx,{className:"custom_next",children:v.jsx("svg",{width:36,height:36,children:v.jsx("use",{href:ve+"#icon-arrow-right"})})})]})]})]}),v.jsx(jx,{children:v.jsx(Lh,{modules:[fx],spaceBetween:n==="desktop"?48:24,loop:!0,slidesPerView:n==="mobile"?1:2,navigation:{nextEl:".custom_next",prevEl:".custom_prev"},onSlideChange:r=>t(r.realIndex+1),children:Cx.map(r=>v.jsxs(jh,{style:{width:500},children:[v.jsx(hx,{imageSrc:r.imageSrc,imageSrc2x:r.imageSrc2x,alt:r.description}),v.jsxs(Ax,{children:[v.jsxs(Nx,{children:[v.jsx(bx,{children:r.title}),v.jsx(Fx,{href:"/",target:"blank",children:v.jsx("svg",{width:28,height:28,children:v.jsx("use",{href:ve+"#icon-arrow-right-up"})})})]}),v.jsxs(Dx,{children:[v.jsx(Rx,{children:r.description}),v.jsx(Vx,{children:r.date})]})]})]},r.key))})})]})},Wx=[{id:1,title:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,title:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,title:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,title:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,title:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],Ux=O.section`
  margin-top: 36px;

  @media ${U} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 100px;
  }

  @media ${H} {
    justify-content: start;
    gap: 185px;
    margin-top: 120px;
  }
`,Hx=O.div`
  @media ${U} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,Gx=O.h2`
  width: 100%;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${U} {
    width: 342px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${H} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`,Qx=O.div`
  margin-top: 16px;

  @media ${U} {
    margin-top: 0;
  }

  & > :last-child {
    padding-bottom: 0;
  }
`,Yx=O.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;

  border-top: 1px solid #97d28b;

  @media ${U} {
    gap: 16px;
  }

  @media ${H} {
    gap: 24px;
  }
`,Xx=O.div`
  padding-top: 21px;

  svg {
    cursor: pointer;
  }

  svg use {
    stroke: #97d28b;
  }

  @media ${U} {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`,Kx=O.h3`
  width: 100%;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${U} {
    width: 298px;
  }

  @media ${H} {
    width: 544px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,qx=O.p`
  width: 100%;
  margin-top: 16px;

  color: #173d33;
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${U} {
    width: 298px;
  }

  @media ${H} {
    width: 544px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,xd=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 36px;

  @media ${Gn} {
    display: ${e=>e.id==="mobile"?"flex":"none"};
  }

  @media ${U} {
    display: ${e=>e.id==="not-mobile"?"flex":"none"};
    margin-top: 0px;
  }
`,wd=O.p`
  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${H} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,Zx=()=>{const[e,t]=Y.useState(1),n=i=>{t(i)},r=()=>{Mi(Ge.CONTACT)};return v.jsxs(Ux,{id:Ge.QUESTIONS,children:[v.jsxs(Hx,{children:[v.jsx(Gx,{children:"Frequently Asked Questions"}),v.jsxs(xd,{id:"not-mobile",children:[v.jsx(wd,{children:"Didn't find the answer to your question?"}),v.jsx(ka,{textContent:"Contact Us",followTo:r})]})]}),v.jsx(Qx,{children:Wx.map(i=>v.jsxs(Yx,{children:[v.jsx(Xx,{onClick:()=>n(i.id),children:e===i.id?v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-minus"})}):v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-add"})})}),v.jsxs("div",{children:[v.jsx(Kx,{children:i.title}),e===i.id&&v.jsx(qx,{children:i.answer})]})]},i.id))}),v.jsxs(xd,{id:"mobile",children:[v.jsx(wd,{children:"Didn't find the answer to your question?"}),v.jsx(ka,{textContent:"Contact Us",followTo:r})]})]})};var $i=e=>e.type==="checkbox",cr=e=>e instanceof Date,Re=e=>e==null;const Ah=e=>typeof e=="object";var Te=e=>!Re(e)&&!Array.isArray(e)&&Ah(e)&&!cr(e),Jx=e=>Te(e)&&e.target?$i(e.target)?e.target.checked:e.target.value:e,ew=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tw=(e,t)=>e.has(ew(t)),nw=e=>{const t=e.constructor&&e.constructor.prototype;return Te(t)&&t.hasOwnProperty("isPrototypeOf")},Mu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Rt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Mu&&(e instanceof Blob||e instanceof FileList))&&(n||Te(e)))if(t=n?[]:{},!n&&!nw(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Rt(e[r]));else return e;return t}var Li=e=>Array.isArray(e)?e.filter(Boolean):[],ye=e=>e===void 0,B=(e,t,n)=>{if(!t||!Te(e))return n;const r=Li(t.split(/[,[\].]+?/)).reduce((i,s)=>Re(i)?i:i[s],e);return ye(r)||r===e?ye(e[t])?n:e[t]:r},Ut=e=>typeof e=="boolean";const Sd={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},yt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},bt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},rw=X.createContext(null),iw=()=>X.useContext(rw);var sw=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==yt.all&&(t._proxyFormState[o]=!r||yt.all),n&&(n[o]=!0),e[o]}});return i},st=e=>Te(e)&&!Object.keys(e).length,ow=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return st(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||yt.all))},ml=e=>Array.isArray(e)?e:[e];function lw(e){const t=X.useRef(e);t.current=e,X.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Lt=e=>typeof e=="string",aw=(e,t,n,r,i)=>Lt(e)?(r&&t.watch.add(e),B(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),B(n,s))):(r&&(t.watchAll=!0),n),$u=e=>/^\w*$/.test(e),Nh=e=>Li(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ce=(e,t,n)=>{let r=-1;const i=$u(t)?[t]:Nh(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=e[a];l=Te(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=l,e=e[a]}return e},uw=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ed=e=>({isOnSubmit:!e||e===yt.onSubmit,isOnBlur:e===yt.onBlur,isOnChange:e===yt.onChange,isOnAll:e===yt.all,isOnTouch:e===yt.onTouched}),kd=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const si=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const s=B(e,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],i)&&!r)break;if(o.ref&&t(o.ref,o.name)&&!r)break;si(a,t)}else Te(a)&&si(a,t)}}};var cw=(e,t,n)=>{const r=Li(B(e,n));return ce(r,"root",t[n]),ce(e,n,r),e},Lu=e=>e.type==="file",un=e=>typeof e=="function",io=e=>{if(!Mu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Ps=e=>Lt(e),ju=e=>e.type==="radio",so=e=>e instanceof RegExp;const Td={value:!1,isValid:!1},Cd={value:!0,isValid:!0};var bh=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ye(e[0].attributes.value)?ye(e[0].value)||e[0].value===""?Cd:{value:e[0].value,isValid:!0}:Cd:Td}return Td};const Pd={isValid:!1,value:null};var Fh=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Pd):Pd;function _d(e,t,n="validate"){if(Ps(e)||Array.isArray(e)&&e.every(Ps)||Ut(e)&&!e)return{type:n,message:Ps(e)?e:"",ref:t}}var Kn=e=>Te(e)&&!so(e)?e:{value:e,message:""},zd=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:p,pattern:h,validate:g,name:x,valueAsNumber:y,mount:T,disabled:f}=e._f,d=B(t,x);if(!T||f)return{};const m=o?o[0]:s,S=$=>{r&&m.reportValidity&&(m.setCustomValidity(Ut($)?"":$||""),m.reportValidity())},E={},C=ju(s),P=$i(s),I=C||P,A=(y||Lu(s))&&ye(s.value)&&ye(d)||io(s)&&s.value===""||d===""||Array.isArray(d)&&!d.length,z=uw.bind(null,x,n,E),D=($,L,G,q=bt.maxLength,ie=bt.minLength)=>{const fe=$?L:G;E[x]={type:$?q:ie,message:fe,ref:s,...z($?q:ie,fe)}};if(i?!Array.isArray(d)||!d.length:a&&(!I&&(A||Re(d))||Ut(d)&&!d||P&&!bh(o).isValid||C&&!Fh(o).isValid)){const{value:$,message:L}=Ps(a)?{value:!!a,message:a}:Kn(a);if($&&(E[x]={type:bt.required,message:L,ref:m,...z(bt.required,L)},!n))return S(L),E}if(!A&&(!Re(c)||!Re(p))){let $,L;const G=Kn(p),q=Kn(c);if(!Re(d)&&!isNaN(d)){const ie=s.valueAsNumber||d&&+d;Re(G.value)||($=ie>G.value),Re(q.value)||(L=ie<q.value)}else{const ie=s.valueAsDate||new Date(d),fe=W=>new Date(new Date().toDateString()+" "+W),N=s.type=="time",b=s.type=="week";Lt(G.value)&&d&&($=N?fe(d)>fe(G.value):b?d>G.value:ie>new Date(G.value)),Lt(q.value)&&d&&(L=N?fe(d)<fe(q.value):b?d<q.value:ie<new Date(q.value))}if(($||L)&&(D(!!$,G.message,q.message,bt.max,bt.min),!n))return S(E[x].message),E}if((l||u)&&!A&&(Lt(d)||i&&Array.isArray(d))){const $=Kn(l),L=Kn(u),G=!Re($.value)&&d.length>+$.value,q=!Re(L.value)&&d.length<+L.value;if((G||q)&&(D(G,$.message,L.message),!n))return S(E[x].message),E}if(h&&!A&&Lt(d)){const{value:$,message:L}=Kn(h);if(so($)&&!d.match($)&&(E[x]={type:bt.pattern,message:L,ref:s,...z(bt.pattern,L)},!n))return S(L),E}if(g){if(un(g)){const $=await g(d,t),L=_d($,m);if(L&&(E[x]={...L,...z(bt.validate,L.message)},!n))return S(L.message),E}else if(Te(g)){let $={};for(const L in g){if(!st($)&&!n)break;const G=_d(await g[L](d,t),m,L);G&&($={...G,...z(L,G.message)},S(G.message),n&&(E[x]=$))}if(!st($)&&(E[x]={ref:m,...$},!n))return E}}return S(!0),E};function dw(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ye(e)?r++:e[t[r++]];return e}function fw(e){for(const t in e)if(e.hasOwnProperty(t)&&!ye(e[t]))return!1;return!0}function Oe(e,t){const n=Array.isArray(t)?t:$u(t)?[t]:Nh(t),r=n.length===1?e:dw(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Te(r)&&st(r)||Array.isArray(r)&&fw(r))&&Oe(e,n.slice(0,-1)),e}var gl=()=>{let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next&&s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}},oo=e=>Re(e)||!Ah(e);function $n(e,t){if(oo(e)||oo(t))return e===t;if(cr(e)&&cr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(cr(s)&&cr(o)||Te(s)&&Te(o)||Array.isArray(s)&&Array.isArray(o)?!$n(s,o):s!==o)return!1}}return!0}var Dh=e=>e.type==="select-multiple",pw=e=>ju(e)||$i(e),vl=e=>io(e)&&e.isConnected,Rh=e=>{for(const t in e)if(un(e[t]))return!0;return!1};function lo(e,t={}){const n=Array.isArray(e);if(Te(e)||n)for(const r in e)Array.isArray(e[r])||Te(e[r])&&!Rh(e[r])?(t[r]=Array.isArray(e[r])?[]:{},lo(e[r],t[r])):Re(e[r])||(t[r]=!0);return t}function Vh(e,t,n){const r=Array.isArray(e);if(Te(e)||r)for(const i in e)Array.isArray(e[i])||Te(e[i])&&!Rh(e[i])?ye(t)||oo(n[i])?n[i]=Array.isArray(e[i])?lo(e[i],[]):{...lo(e[i])}:Vh(e[i],Re(t)?{}:t[i],n[i]):n[i]=!$n(e[i],t[i]);return n}var yl=(e,t)=>Vh(e,t,lo(t)),Bh=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ye(e)?e:t?e===""?NaN:e&&+e:n&&Lt(e)?new Date(e):r?r(e):e;function xl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Lu(t)?t.files:ju(t)?Fh(e.refs).value:Dh(t)?[...t.selectedOptions].map(({value:n})=>n):$i(t)?bh(e.refs).value:Bh(ye(t.value)?e.ref.value:t.value,e)}var hw=(e,t,n,r)=>{const i={};for(const s of e){const o=B(t,s);o&&ce(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Br=e=>ye(e)?e:so(e)?e.source:Te(e)?so(e.value)?e.value.source:e.value:e,mw=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Id(e,t,n){const r=B(e,n);if(r||$u(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=B(t,s),a=B(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var gw=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,vw=(e,t)=>!Li(B(e,t)).length&&Oe(e,t);const yw={mode:yt.onSubmit,reValidateMode:yt.onChange,shouldFocusError:!0};function xw(e={},t){let n={...yw,...e},r={submitCount:0,isDirty:!1,isLoading:un(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},s=Te(n.defaultValues)||Te(n.values)?Rt(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Rt(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:gl(),array:gl(),state:gl()},g=e.resetOptions&&e.resetOptions.keepDirtyValues,x=Ed(n.mode),y=Ed(n.reValidateMode),T=n.criteriaMode===yt.all,f=w=>k=>{clearTimeout(c),c=setTimeout(w,k)},d=async w=>{if(p.isValid||w){const k=n.resolver?st((await z()).errors):await $(i,!0);k!==r.isValid&&h.state.next({isValid:k})}},m=w=>p.isValidating&&h.state.next({isValidating:w}),S=(w,k=[],_,V,F=!0,j=!0)=>{if(V&&_){if(a.action=!0,j&&Array.isArray(B(i,w))){const Q=_(B(i,w),V.argA,V.argB);F&&ce(i,w,Q)}if(j&&Array.isArray(B(r.errors,w))){const Q=_(B(r.errors,w),V.argA,V.argB);F&&ce(r.errors,w,Q),vw(r.errors,w)}if(p.touchedFields&&j&&Array.isArray(B(r.touchedFields,w))){const Q=_(B(r.touchedFields,w),V.argA,V.argB);F&&ce(r.touchedFields,w,Q)}p.dirtyFields&&(r.dirtyFields=yl(s,o)),h.state.next({name:w,isDirty:G(w,k),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ce(o,w,k)},E=(w,k)=>{ce(r.errors,w,k),h.state.next({errors:r.errors})},C=w=>{r.errors=w,h.state.next({errors:r.errors,isValid:!1})},P=(w,k,_,V)=>{const F=B(i,w);if(F){const j=B(o,w,ye(_)?B(s,w):_);ye(j)||V&&V.defaultChecked||k?ce(o,w,k?j:xl(F._f)):fe(w,j),a.mount&&d()}},I=(w,k,_,V,F)=>{let j=!1,Q=!1;const se={name:w},Ce=!!(B(i,w)&&B(i,w)._f.disabled);if(!_||V){p.isDirty&&(Q=r.isDirty,r.isDirty=se.isDirty=G(),j=Q!==se.isDirty);const _t=Ce||$n(B(s,w),k);Q=!!(!Ce&&B(r.dirtyFields,w)),_t||Ce?Oe(r.dirtyFields,w):ce(r.dirtyFields,w,!0),se.dirtyFields=r.dirtyFields,j=j||p.dirtyFields&&Q!==!_t}if(_){const _t=B(r.touchedFields,w);_t||(ce(r.touchedFields,w,_),se.touchedFields=r.touchedFields,j=j||p.touchedFields&&_t!==_)}return j&&F&&h.state.next(se),j?se:{}},A=(w,k,_,V)=>{const F=B(r.errors,w),j=p.isValid&&Ut(k)&&r.isValid!==k;if(e.delayError&&_?(u=f(()=>E(w,_)),u(e.delayError)):(clearTimeout(c),u=null,_?ce(r.errors,w,_):Oe(r.errors,w)),(_?!$n(F,_):F)||!st(V)||j){const Q={...V,...j&&Ut(k)?{isValid:k}:{},errors:r.errors,name:w};r={...r,...Q},h.state.next(Q)}m(!1)},z=async w=>n.resolver(o,n.context,hw(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),D=async w=>{const{errors:k}=await z(w);if(w)for(const _ of w){const V=B(k,_);V?ce(r.errors,_,V):Oe(r.errors,_)}else r.errors=k;return k},$=async(w,k,_={valid:!0})=>{for(const V in w){const F=w[V];if(F){const{_f:j,...Q}=F;if(j){const se=l.array.has(j.name),Ce=await zd(F,o,T,n.shouldUseNativeValidation&&!k,se);if(Ce[j.name]&&(_.valid=!1,k))break;!k&&(B(Ce,j.name)?se?cw(r.errors,Ce,j.name):ce(r.errors,j.name,Ce[j.name]):Oe(r.errors,j.name))}Q&&await $(Q,k,_)}}return _.valid},L=()=>{for(const w of l.unMount){const k=B(i,w);k&&(k._f.refs?k._f.refs.every(_=>!vl(_)):!vl(k._f.ref))&&Nt(w)}l.unMount=new Set},G=(w,k)=>(w&&k&&ce(o,w,k),!$n(kt(),s)),q=(w,k,_)=>aw(w,l,{...a.mount?o:ye(k)?s:Lt(w)?{[w]:k}:k},_,k),ie=w=>Li(B(a.mount?o:s,w,e.shouldUnregister?B(s,w,[]):[])),fe=(w,k,_={})=>{const V=B(i,w);let F=k;if(V){const j=V._f;j&&(!j.disabled&&ce(o,w,Bh(k,j)),F=io(j.ref)&&Re(k)?"":k,Dh(j.ref)?[...j.ref.options].forEach(Q=>Q.selected=F.includes(Q.value)):j.refs?$i(j.ref)?j.refs.length>1?j.refs.forEach(Q=>(!Q.defaultChecked||!Q.disabled)&&(Q.checked=Array.isArray(F)?!!F.find(se=>se===Q.value):F===Q.value)):j.refs[0]&&(j.refs[0].checked=!!F):j.refs.forEach(Q=>Q.checked=Q.value===F):Lu(j.ref)?j.ref.value="":(j.ref.value=F,j.ref.type||h.values.next({name:w,values:{...o}})))}(_.shouldDirty||_.shouldTouch)&&I(w,F,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&J(w)},N=(w,k,_)=>{for(const V in k){const F=k[V],j=`${w}.${V}`,Q=B(i,j);(l.array.has(w)||!oo(F)||Q&&!Q._f)&&!cr(F)?N(j,F,_):fe(j,F,_)}},b=(w,k,_={})=>{const V=B(i,w),F=l.array.has(w),j=Rt(k);ce(o,w,j),F?(h.array.next({name:w,values:{...o}}),(p.isDirty||p.dirtyFields)&&_.shouldDirty&&h.state.next({name:w,dirtyFields:yl(s,o),isDirty:G(w,j)})):V&&!V._f&&!Re(j)?N(w,j,_):fe(w,j,_),kd(w,l)&&h.state.next({...r}),h.values.next({name:w,values:{...o}}),!a.mount&&t()},W=async w=>{const k=w.target;let _=k.name,V=!0;const F=B(i,_),j=()=>k.type?xl(F._f):Jx(w),Q=se=>{V=Number.isNaN(se)||se===B(o,_,se)};if(F){let se,Ce;const _t=j(),Qn=w.type===Sd.BLUR||w.type===Sd.FOCUS_OUT,Uh=!mw(F._f)&&!n.resolver&&!B(r.errors,_)&&!F._f.deps||gw(Qn,B(r.touchedFields,_),r.isSubmitted,y,x),Mo=kd(_,l,Qn);ce(o,_,_t),Qn?(F._f.onBlur&&F._f.onBlur(w),u&&u(0)):F._f.onChange&&F._f.onChange(w);const $o=I(_,_t,Qn,!1),Hh=!st($o)||Mo;if(!Qn&&h.values.next({name:_,type:w.type,values:{...o}}),Uh)return p.isValid&&d(),Hh&&h.state.next({name:_,...Mo?{}:$o});if(!Qn&&Mo&&h.state.next({...r}),m(!0),n.resolver){const{errors:Fu}=await z([_]);if(Q(_t),V){const Gh=Id(r.errors,i,_),Du=Id(Fu,i,Gh.name||_);se=Du.error,_=Du.name,Ce=st(Fu)}}else se=(await zd(F,o,T,n.shouldUseNativeValidation))[_],Q(_t),V&&(se?Ce=!1:p.isValid&&(Ce=await $(i,!0)));V&&(F._f.deps&&J(F._f.deps),A(_,Ce,se,$o))}},te=(w,k)=>{if(B(r.errors,k)&&w.focus)return w.focus(),1},J=async(w,k={})=>{let _,V;const F=ml(w);if(m(!0),n.resolver){const j=await D(ye(w)?w:F);_=st(j),V=w?!F.some(Q=>B(j,Q)):_}else w?(V=(await Promise.all(F.map(async j=>{const Q=B(i,j);return await $(Q&&Q._f?{[j]:Q}:Q)}))).every(Boolean),!(!V&&!r.isValid)&&d()):V=_=await $(i);return h.state.next({...!Lt(w)||p.isValid&&_!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:_}:{},errors:r.errors,isValidating:!1}),k.shouldFocus&&!V&&si(i,te,w?F:l.mount),V},kt=w=>{const k={...s,...a.mount?o:{}};return ye(w)?k:Lt(w)?B(k,w):w.map(_=>B(k,_))},Ue=(w,k)=>({invalid:!!B((k||r).errors,w),isDirty:!!B((k||r).dirtyFields,w),isTouched:!!B((k||r).touchedFields,w),error:B((k||r).errors,w)}),Tt=w=>{w&&ml(w).forEach(k=>Oe(r.errors,k)),h.state.next({errors:w?r.errors:{}})},je=(w,k,_)=>{const V=(B(i,w,{_f:{}})._f||{}).ref;ce(r.errors,w,{...k,ref:V}),h.state.next({name:w,errors:r.errors,isValid:!1}),_&&_.shouldFocus&&V&&V.focus&&V.focus()},pt=(w,k)=>un(w)?h.values.subscribe({next:_=>w(q(void 0,k),_)}):q(w,k,!0),Nt=(w,k={})=>{for(const _ of w?ml(w):l.mount)l.mount.delete(_),l.array.delete(_),k.keepValue||(Oe(i,_),Oe(o,_)),!k.keepError&&Oe(r.errors,_),!k.keepDirty&&Oe(r.dirtyFields,_),!k.keepTouched&&Oe(r.touchedFields,_),!n.shouldUnregister&&!k.keepDefaultValue&&Oe(s,_);h.values.next({values:{...o}}),h.state.next({...r,...k.keepDirty?{isDirty:G()}:{}}),!k.keepIsValid&&d()},Ct=({disabled:w,name:k,field:_,fields:V,value:F})=>{if(Ut(w)){const j=w?void 0:ye(F)?xl(_?_._f:B(V,k)._f):F;ce(o,k,j),I(k,j,!1,!1,!0)}},Tn=(w,k={})=>{let _=B(i,w);const V=Ut(k.disabled);return ce(i,w,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:w}},name:w,mount:!0,...k}}),l.mount.add(w),_?Ct({field:_,disabled:k.disabled,name:w,value:k.value}):P(w,!0,k.value),{...V?{disabled:k.disabled}:{},...n.progressive?{required:!!k.required,min:Br(k.min),max:Br(k.max),minLength:Br(k.minLength),maxLength:Br(k.maxLength),pattern:Br(k.pattern)}:{},name:w,onChange:W,onBlur:W,ref:F=>{if(F){Tn(w,k),_=B(i,w);const j=ye(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,Q=pw(j),se=_._f.refs||[];if(Q?se.find(Ce=>Ce===j):j===_._f.ref)return;ce(i,w,{_f:{..._._f,...Q?{refs:[...se.filter(vl),j,...Array.isArray(B(s,w))?[{}]:[]],ref:{type:j.type,name:w}}:{ref:j}}}),P(w,!1,void 0,j)}else _=B(i,w,{}),_._f&&(_._f.mount=!1),(n.shouldUnregister||k.shouldUnregister)&&!(tw(l.array,w)&&a.action)&&l.unMount.add(w)}}},Cn=()=>n.shouldFocusError&&si(i,te,l.mount),Pt=w=>{Ut(w)&&(h.state.next({disabled:w}),si(i,(k,_)=>{let V=w;const F=B(i,_);F&&Ut(F._f.disabled)&&(V||(V=F._f.disabled)),k.disabled=V},0,!1))},Au=(w,k)=>async _=>{_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let V=Rt(o);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:F,values:j}=await z();r.errors=F,V=j}else await $(i);Oe(r.errors,"root"),st(r.errors)?(h.state.next({errors:{}}),await w(V,_)):(k&&await k({...r.errors},_),Cn(),setTimeout(Cn)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:st(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Wh=(w,k={})=>{B(i,w)&&(ye(k.defaultValue)?b(w,B(s,w)):(b(w,k.defaultValue),ce(s,w,k.defaultValue)),k.keepTouched||Oe(r.touchedFields,w),k.keepDirty||(Oe(r.dirtyFields,w),r.isDirty=k.defaultValue?G(w,B(s,w)):G()),k.keepError||(Oe(r.errors,w),p.isValid&&d()),h.state.next({...r}))},Nu=(w,k={})=>{const _=w?Rt(w):s,V=Rt(_),F=w&&!st(w)?V:s;if(k.keepDefaultValues||(s=_),!k.keepValues){if(k.keepDirtyValues||g)for(const j of l.mount)B(r.dirtyFields,j)?ce(F,j,B(o,j)):b(j,B(F,j));else{if(Mu&&ye(w))for(const j of l.mount){const Q=B(i,j);if(Q&&Q._f){const se=Array.isArray(Q._f.refs)?Q._f.refs[0]:Q._f.ref;if(io(se)){const Ce=se.closest("form");if(Ce){Ce.reset();break}}}}i={}}o=e.shouldUnregister?k.keepDefaultValues?Rt(s):{}:Rt(F),h.array.next({values:{...F}}),h.values.next({values:{...F}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!p.isValid||!!k.keepIsValid,a.watch=!!e.shouldUnregister,h.state.next({submitCount:k.keepSubmitCount?r.submitCount:0,isDirty:k.keepDirty?r.isDirty:!!(k.keepDefaultValues&&!$n(w,s)),isSubmitted:k.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:k.keepDirtyValues?r.dirtyFields:k.keepDefaultValues&&w?yl(s,w):{},touchedFields:k.keepTouched?r.touchedFields:{},errors:k.keepErrors?r.errors:{},isSubmitSuccessful:k.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},bu=(w,k)=>Nu(un(w)?w(o):w,k);return{control:{register:Tn,unregister:Nt,getFieldState:Ue,handleSubmit:Au,setError:je,_executeSchema:z,_getWatch:q,_getDirty:G,_updateValid:d,_removeUnmounted:L,_updateFieldArray:S,_updateDisabledField:Ct,_getFieldArray:ie,_reset:Nu,_resetDefaultValues:()=>un(n.defaultValues)&&n.defaultValues().then(w=>{bu(w,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_disableForm:Pt,_subjects:h,_proxyFormState:p,_setErrors:C,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:J,register:Tn,handleSubmit:Au,watch:pt,setValue:b,getValues:kt,reset:bu,resetField:Wh,clearErrors:Tt,unregister:Nt,setError:je,setFocus:(w,k={})=>{const _=B(i,w),V=_&&_._f;if(V){const F=V.refs?V.refs[0]:V.ref;F.focus&&(F.focus(),k.shouldSelect&&F.select())}},getFieldState:Ue}}function ww(e={}){const t=X.useRef(),n=X.useRef(),[r,i]=X.useState({isDirty:!1,isValidating:!1,isLoading:un(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:un(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...xw(e,()=>i(o=>({...o}))),formState:r});const s=t.current.control;return s._options=e,lw({subject:s._subjects.state,next:o=>{ow(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),X.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),X.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),X.useEffect(()=>{e.values&&!$n(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,i(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),X.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),X.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=sw(r,s),t.current}var Sw=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,s=e.render,o=function(h,g){if(h==null)return{};var x,y,T={},f=Object.keys(h);for(y=0;y<f.length;y++)g.indexOf(x=f[y])>=0||(T[x]=h[x]);return T}(e,["as","errors","name","message","render"]),a=iw(),l=B(n||a.formState.errors,r);if(!l)return null;var u=l.message,c=l.types,p=Object.assign({},o,{children:u||i});return Y.isValidElement(t)?Y.cloneElement(t,p):s?s({message:u||i,messages:c}):Y.createElement(t||Y.Fragment,p)};const Ew=/^[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)\s[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)$/,kw=/^380\d{9}$/,Tw=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,wl={fullNameRegExp:Ew,phoneRegExp:kw,emailRegExp:Tw},Cw=[{name:"fullName",label:"Full name",type:"text",placeholder:"John Rosie",pattern:{value:wl.fullNameRegExp,message:"Invalid Fullname"},requiredMessage:"Wrong Fullname"},{name:"email",label:"E-mail",type:"email",placeholder:"johnrosie@gmail.com",pattern:{value:wl.emailRegExp,message:"Invalid Email"},requiredMessage:"Wrong Email"},{name:"phone",label:"Phone",type:"tel",placeholder:"380961234567",pattern:{value:wl.phoneRegExp,message:"Invalid Phone"},requiredMessage:"Wrong Phone"}],Pw=O.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 36px;
  padding: 36px 12px;

  background: #eaedf1;

  @media ${U} {
    margin-top: 0;
    padding: 36px 24px;
  }

  @media ${H} {
    padding: 48px;
  }
`,_w=O.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 100%;

  border-bottom: 1px solid #97d28b;
  border-color: ${({$isError:e})=>e&&"#d28b8b"};

  @media ${H} {
    width: 500px;
  }
`,Od=O.span`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`,zw=O.input`
  color: #173d33;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;

  @media ${H} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`,Iw=O.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 100%;

  @media ${H} {
    width: 500px;
  }
`,Ow=O.textarea`
  height: 147px;
  padding: 0;

  color: #173d33;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;
  border: none;
  resize: none;
  background: transparent;
  border-bottom: 1px solid #97d28b;

  &::placeholder {
    color: #bdbdbd;
  }
`,Mw=O.div`
  margin-top: -8px;
  margin-left: auto;
`,$w=O.p`
  position: absolute;
  /* p-8px + down 8px  */
  bottom: -16px;
  right: 0;

  color: #d28b8b;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`,Lw=()=>{const{register:e,handleSubmit:t,setValue:n,getValues:r,reset:i,formState:{isSubmitSuccessful:s,errors:o}}=ww({mode:"onChange",defaultValues:{fullName:"",email:"",phone:"",message:""}});Y.useEffect(()=>{s&&(localStorage.removeItem("contactFormValues"),i())},[s,i]),Y.useEffect(()=>{const u=JSON.parse(localStorage.getItem("contactFormValues")||"{}");Object.keys(u).forEach(c=>{n(c,u[c])})},[n]);const a=()=>{localStorage.setItem("contactFormValues",JSON.stringify(r()))},l=u=>{console.log("data sended",u)};return v.jsx(v.Fragment,{children:v.jsxs(Pw,{action:"/path",onSubmit:t(l),onChange:a,children:[Cw.map(u=>v.jsxs(_w,{htmlFor:u.name,$isError:o[u.name],children:[v.jsxs(Od,{children:["* ",u.label,":"]}),v.jsx(zw,{...e(u.name,{pattern:u.pattern,required:u.requiredMessage}),type:u.type,id:u.name,placeholder:u.placeholder}),v.jsx(Sw,{errors:o,name:u.name,render:({message:c})=>v.jsx($w,{children:c})})]},u.name)),v.jsxs(Iw,{htmlFor:"message",children:[v.jsx(Od,{children:"Message:"}),v.jsx(Ow,{...e("message"),id:"message",name:"message",cols:30,rows:10,placeholder:"Your message"})]}),v.jsx(Mw,{children:v.jsx(wh,{type:"submit",textContent:"Send"})})]})})},jw=O.section`
  margin-top: 36px;

  @media ${U} {
    margin-top: 100px;
  }

  @media ${H} {
    margin-top: 120px;
  }
`,Aw=O.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;

  @media ${U} {
    font-size: 36px;
    line-height: 36px;
  }

  @media ${H} {
    font-size: 48px;
    line-height: 48px;
  }
`,Nw=O.div`
  margin-top: 24px;

  @media ${U} {
    display: flex;
    gap: 122px;
    margin-top: 40px;
  }

  @media ${H} {
    gap: 178px;
    margin-top: 120px;
  }
`,bw=O.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ss=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 244px;

  @media ${H} {
    width: 469px;
  }
`,Fw=O.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,os=O.p`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`,ls=O.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  color: #173d33;
  text-align: justify;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.9px;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  p {
    width: 212px;

    @media ${H} {
      width: 434px;
    }
  }

  @media ${H} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  &:hover {
    svg use {
      stroke: #97d28b;
    }
    color: #97d28b;
  }
`,Dw=()=>v.jsxs(jw,{id:Ge.CONTACT,children:[v.jsx(Aw,{children:"Contact Us"}),v.jsxs(Nw,{children:[v.jsxs(bw,{children:[v.jsxs(ss,{children:[v.jsx(os,{children:"Phone:"}),v.jsxs(Fw,{children:[v.jsxs(ls,{href:"tel:+38(093)1234567",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ve+"#icon-call",stroke:"#173d33",fill:"#FFFFFF"})}),"38 (098) 12 34 567"]}),v.jsxs(ls,{href:"tel:+38(093)1234567",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ve+"#icon-call"})}),"38 (093) 12 34 567"]})]})]}),v.jsxs(ss,{children:[v.jsx(os,{children:"E-mail:"}),v.jsxs(ls,{href:"mailto:office@ecosolution.com",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ve+"#icon-sms"})}),"office@ecosolution.com"]})]}),v.jsxs(ss,{children:[v.jsx(os,{children:"Address:"}),v.jsxs(ls,{href:"https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ve+"#icon-map"})}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),v.jsxs(ss,{children:[v.jsx(os,{children:"Social Networks:"}),v.jsx(zu,{colorPlan:"primary",space:32})]})]}),v.jsx(Lw,{})]})]}),Rw=O.footer`
  width: 100%;
  flex-shrink: 0;
  margin-top: 36px;
  padding: 24px 0;

  border-top: 1px solid #97d28b;

  @media ${U} {
    width: 708px;
    margin-top: 100px;
    padding: 44px 0 40px;
  }

  @media ${H} {
    width: 1240px;
    margin-top: 120px;
  }
`,Vw=O.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${U} {
    flex-wrap: nowrap;
  }
`,Bw=O.div`
  @media (max-width: 413px) {
    margin: 24px auto 0;
    order: 1;
  }

  @media (min-width: 414px) {
    margin: auto;
  }

  @media ${U} {
    margin-left: 97px;
  }

  @media ${H} {
    margin-left: 512px;
  }
`,Ww=O.button`
  display: inline-flex;
  padding: 8px;
  margin-left: 19px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transform: rotate(-90deg);
  width: 32px;
  height: 32px;

  border-radius: 100px;
  background: #97d28b;
  border: none;
  cursor: pointer;

  svg use {
    stroke: #173d33;
  }

  &:hover {
    background: #173d33;

    svg use {
      stroke: #97d28b;
    }
  }

  @media ${U} {
    margin-left: auto;
  }
`,Uw=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${U} {
    flex-direction: row;

    & > p {
      margin-left: auto;
    }
  }
`,Hw=O.address`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${U} {
    flex-direction: row;
    gap: 73px;
  }

  @media ${H} {
    gap: 487px;
  }
`,Gw=()=>{const e=()=>{Mi(Ge.MAIN)};return v.jsxs(Rw,{children:[v.jsxs(Vw,{children:[v.jsx(vh,{}),v.jsx(Bw,{children:v.jsx(zu,{colorPlan:"primary",space:8})}),v.jsx(Ww,{onClick:e,children:v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ve+"#icon-arrow-right"})})})]}),v.jsxs(Uw,{children:[v.jsxs(Hw,{children:[v.jsx("p",{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),v.jsx("p",{children:"office@ecosolution.com"})]}),v.jsx("p",{children:"ecosolution © 2023"})]})]})};const Qw="/vite-ecosolution/assets/fira-sans-v17-latin-300-f8fb86af.woff2",Yw="/vite-ecosolution/assets/fira-sans-v17-latin-regular-89ae1743.woff2",Xw="/vite-ecosolution/assets/fira-sans-v17-latin-500-c52b9a30.woff2",Kw="/vite-ecosolution/assets/oswald-v53-latin-regular-24df88e7.woff2",qw="/vite-ecosolution/assets/oswald-v53-latin-700-6ecd2a10.woff2",Zw="/vite-ecosolution/assets/oswald-v53-latin-500-201dc695.woff2",Jw="/vite-ecosolution/assets/CASaygonText-Regular-b26b980e.woff2",eS="/vite-ecosolution/assets/All-Round-Gothic-Medium-5c9e64b8.woff2",tS="/vite-ecosolution/assets/inter-v13-latin-regular-2301bb03.woff2",Ft={FiraSans_300:Qw,FiraSans_Regular:Yw,FiraSans_500:Xw,Oswald_Regular:Kw,Oswald_700:qw,Oswald_500:Zw,CASaygonText_Regular:Jw,AllRoundGothic_Medium:eS,Inter_Regular:tS},nS=w0`
@font-face {
  font-family: 'Fira Sans';
  src: url(${Ft.FiraSans_300}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${Ft.FiraSans_Regular}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${Ft.FiraSans_500}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${Ft.Oswald_Regular}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${Ft.Oswald_700}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${Ft.Oswald_500}) format('woff2');
}

@font-face {
  font-family: 'CA Saygon Text';
  src: url(${Ft.CASaygonText_Regular}) format('woff2');
}

@font-face {
  font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
  src: url(${Ft.AllRoundGothic_Medium}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  src: url(${Ft.Inter_Regular}) format('woff2');
}

  body {
        margin: 0;
        font-family: 'Fira Sans',  sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #F3F5FA;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      button {
        padding: 0;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      a {
        text-decoration: none;
      }
`,rS={mobile:"(min-width: 360px)",beforeTablet:"(max-width: 767px)",tablet:"(min-width: 768px)",beforeDesktop:"(max-width: 1279px)",desktop:"(min-width: 1280px)"},iS={colors:{accentColor:"#97D28B",whiteTextColor:"#FFFFFF",mainTextColor:"#173D33",mainBackgroundColor:"#F3F5FA",secondBackgroundColor:"#EAEDF1",errorColor:"#d28b8b"},media:rS},sS=()=>v.jsxs(v0,{theme:iS,children:[v.jsx(nS,{}),v.jsxs(E0,{children:[v.jsx(Y0,{}),v.jsxs("main",{children:[v.jsx(py,{}),v.jsx(_y,{}),v.jsx(Ay,{}),v.jsx(Bx,{}),v.jsx(Zx,{}),v.jsx(Dw,{})]}),v.jsx(Gw,{})]})]});Sl.createRoot(document.getElementById("root")).render(v.jsx(X.StrictMode,{children:v.jsx(sS,{})}));