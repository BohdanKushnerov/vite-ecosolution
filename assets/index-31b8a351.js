(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pd={exports:{}},io={},_d={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),Wh=Symbol.for("react.portal"),Uh=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Gh=Symbol.for("react.profiler"),Qh=Symbol.for("react.provider"),Yh=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),qh=Symbol.for("react.memo"),Zh=Symbol.for("react.lazy"),bu=Symbol.iterator;function Jh(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var zd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Od={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Od,this.updater=n||zd}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Md(){}Md.prototype=Cr.prototype;function ka(e,t,n){this.props=e,this.context=t,this.refs=Od,this.updater=n||zd}var Ta=ka.prototype=new Md;Ta.constructor=ka;Id(Ta,Cr.prototype);Ta.isPureReactComponent=!0;var Fu=Array.isArray,Ld=Object.prototype.hasOwnProperty,Ca={current:null},jd={key:!0,ref:!0,__self:!0,__source:!0};function Ad(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Ld.call(t,r)&&!jd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Si,type:e,key:s,ref:o,props:i,_owner:Ca.current}}function em(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function tm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Du=/\/+/g;function Io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tm(""+e.key):t.toString(36)}function is(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Si:case Wh:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Io(o,0):r,Fu(i)?(n="",e!=null&&(n=e.replace(Du,"$&/")+"/"),is(i,t,n,"",function(u){return u})):i!=null&&(Pa(i)&&(i=em(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Du,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Fu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Io(s,a);o+=is(s,t,n,l,i)}else if(l=Jh(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Io(s,a++),o+=is(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Oi(e,t,n){if(e==null)return e;var r=[],i=0;return is(e,r,"","",function(s){return t.call(n,s,i++)}),r}function nm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},ss={transition:null},rm={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ss,ReactCurrentOwner:Ca};K.Children={map:Oi,forEach:function(e,t,n){Oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Cr;K.Fragment=Uh;K.Profiler=Gh;K.PureComponent=ka;K.StrictMode=Hh;K.Suspense=Kh;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Id({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ca.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Ld.call(t,l)&&!jd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Si,type:e.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(e){return e={$$typeof:Yh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qh,_context:e},e.Consumer=e};K.createElement=Ad;K.createFactory=function(e){var t=Ad.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Xh,render:e}};K.isValidElement=Pa;K.lazy=function(e){return{$$typeof:Zh,_payload:{_status:-1,_result:e},_init:nm}};K.memo=function(e,t){return{$$typeof:qh,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return $e.current.useCallback(e,t)};K.useContext=function(e){return $e.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};K.useEffect=function(e,t){return $e.current.useEffect(e,t)};K.useId=function(){return $e.current.useId()};K.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return $e.current.useMemo(e,t)};K.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};K.useRef=function(e){return $e.current.useRef(e)};K.useState=function(e){return $e.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return $e.current.useTransition()};K.version="18.2.0";_d.exports=K;var G=_d.exports;const Q=Bh(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im=G,sm=Symbol.for("react.element"),om=Symbol.for("react.fragment"),lm=Object.prototype.hasOwnProperty,am=im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,um={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)lm.call(t,r)&&!um.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sm,type:e,key:s,ref:o,props:i,_owner:am.current}}io.Fragment=om;io.jsx=Nd;io.jsxs=Nd;Pd.exports=io;var v=Pd.exports,vl={},bd={exports:{}},et={},Fd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,F){var W=b.length;b.push(F);e:for(;0<W;){var J=W-1>>>1,q=b[J];if(0<i(q,F))b[J]=F,b[W]=q,W=J;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var F=b[0],W=b.pop();if(W!==F){b[0]=W;e:for(var J=0,q=b.length,St=q>>>1;J<St;){var Be=2*(J+1)-1,Et=b[Be],Me=Be+1,dt=b[Me];if(0>i(Et,W))Me<q&&0>i(dt,Et)?(b[J]=dt,b[Me]=W,J=Me):(b[J]=Et,b[Be]=W,J=Be);else if(Me<q&&0>i(dt,W))b[J]=dt,b[Me]=W,J=Me;else break e}}return F}function i(b,F){var W=b.sortIndex-F.sortIndex;return W!==0?W:b.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,p=null,h=3,g=!1,x=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=b)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function S(b){if(y=!1,m(b),!x)if(n(l)!==null)x=!0,ne(E);else{var F=n(u);F!==null&&ce(S,F.startTime-b)}}function E(b,F){x=!1,y&&(y=!1,f(I),I=-1),g=!0;var W=h;try{for(m(F),p=n(l);p!==null&&(!(p.expirationTime>F)||b&&!R());){var J=p.callback;if(typeof J=="function"){p.callback=null,h=p.priorityLevel;var q=J(p.expirationTime<=F);F=e.unstable_now(),typeof q=="function"?p.callback=q:p===n(l)&&r(l),m(F)}else r(l);p=n(l)}if(p!==null)var St=!0;else{var Be=n(u);Be!==null&&ce(S,Be.startTime-F),St=!1}return St}finally{p=null,h=W,g=!1}}var C=!1,P=null,I=-1,N=5,z=-1;function R(){return!(e.unstable_now()-z<N)}function L(){if(P!==null){var b=e.unstable_now();z=b;var F=!0;try{F=P(!0,b)}finally{F?j():(C=!1,P=null)}}else C=!1}var j;if(typeof d=="function")j=function(){d(L)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=L,j=function(){X.postMessage(null)}}else j=function(){T(L,0)};function ne(b){P=b,C||(C=!0,j())}function ce(b,F){I=T(function(){b(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,ne(E))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var W=h;h=F;try{return b()}finally{h=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,F){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var W=h;h=b;try{return F()}finally{h=W}},e.unstable_scheduleCallback=function(b,F,W){var J=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,b){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=W+q,b={id:c++,callback:F,priorityLevel:b,startTime:W,expirationTime:q,sortIndex:-1},W>J?(b.sortIndex=W,t(u,b),n(l)===null&&b===n(u)&&(y?(f(I),I=-1):y=!0,ce(S,W-J))):(b.sortIndex=q,t(l,b),x||g||(x=!0,ne(E))),b},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(b){var F=h;return function(){var W=h;h=F;try{return b.apply(this,arguments)}finally{h=W}}}})(Dd);Fd.exports=Dd;var cm=Fd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=G,Je=cm;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,ni={};function $n(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(ni[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yl=Object.prototype.hasOwnProperty,dm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ru={},$u={};function fm(e){return yl.call($u,e)?!0:yl.call(Ru,e)?!1:dm.test(e)?$u[e]=!0:(Ru[e]=!0,!1)}function pm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hm(e,t,n,r){if(t===null||typeof t>"u"||pm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var _a=/[\-:]([a-z])/g;function za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_a,za);Oe[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_a,za);Oe[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_a,za);Oe[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ia(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hm(t,n,i,r)&&(n=null),r||i===null?fm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),Oa=Symbol.for("react.strict_mode"),xl=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),wl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),La=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),Wd=Symbol.for("react.offscreen"),Vu=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Vu&&e[Vu]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Oo;function Rr(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Mo=!1;function Lo(e,t){if(!e||Mo)return"";Mo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function mm(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=Lo(e.type,!1),e;case 11:return e=Lo(e.type.render,!1),e;case 1:return e=Lo(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Gn:return"Portal";case xl:return"Profiler";case Oa:return"StrictMode";case wl:return"Suspense";case Sl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bd:return(e.displayName||"Context")+".Consumer";case Vd:return(e._context.displayName||"Context")+".Provider";case Ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case La:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function gm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Oa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vm(e){var t=Ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Li(e){e._valueTracker||(e._valueTracker=vm(e))}function Hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gd(e,t){t=t.checked,t!=null&&Ia(e,"checked",t,!1)}function Tl(e,t){Gd(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Cl(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Cl(e,t,n){(t!=="number"||ks(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $r=Array.isArray;function or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if($r(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function Qd(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ym=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function Kd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function qd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xm=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(xm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ol=null;function ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,lr=null,ar=null;function Gu(e){if(e=Ti(e)){if(typeof Ml!="function")throw Error(M(280));var t=e.stateNode;t&&(t=uo(t),Ml(e.stateNode,e.type,t))}}function Zd(e){lr?ar?ar.push(e):ar=[e]:lr=e}function Jd(){if(lr){var e=lr,t=ar;if(ar=lr=null,Gu(e),t)for(e=0;e<t.length;e++)Gu(t[e])}}function ef(e,t){return e(t)}function tf(){}var jo=!1;function nf(e,t,n){if(jo)return e(t,n);jo=!0;try{return ef(e,t,n)}finally{jo=!1,(lr!==null||ar!==null)&&(tf(),Jd())}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Ll=!1;if(Gt)try{var Mr={};Object.defineProperty(Mr,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",Mr,Mr),window.removeEventListener("test",Mr,Mr)}catch{Ll=!1}function wm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Hr=!1,Ts=null,Cs=!1,jl=null,Sm={onError:function(e){Hr=!0,Ts=e}};function Em(e,t,n,r,i,s,o,a,l){Hr=!1,Ts=null,wm.apply(Sm,arguments)}function km(e,t,n,r,i,s,o,a,l){if(Em.apply(this,arguments),Hr){if(Hr){var u=Ts;Hr=!1,Ts=null}else throw Error(M(198));Cs||(Cs=!0,jl=u)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qu(e){if(Vn(e)!==e)throw Error(M(188))}function Tm(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qu(i),e;if(s===r)return Qu(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function sf(e){return e=Tm(e),e!==null?of(e):null}function of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=of(e);if(t!==null)return t;e=e.sibling}return null}var lf=Je.unstable_scheduleCallback,Yu=Je.unstable_cancelCallback,Cm=Je.unstable_shouldYield,Pm=Je.unstable_requestPaint,ve=Je.unstable_now,_m=Je.unstable_getCurrentPriorityLevel,Aa=Je.unstable_ImmediatePriority,af=Je.unstable_UserBlockingPriority,Ps=Je.unstable_NormalPriority,zm=Je.unstable_LowPriority,uf=Je.unstable_IdlePriority,so=null,Lt=null;function Im(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Lm,Om=Math.log,Mm=Math.LN2;function Lm(e){return e>>>=0,e===0?32:31-(Om(e)/Mm|0)|0}var Ai=64,Ni=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Vr(a):(s&=o,s!==0&&(r=Vr(s)))}else o=n&~i,o!==0?r=Vr(o):s!==0&&(r=Vr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-vt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=jm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cf(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function Nm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Na(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function df(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ff,ba,pf,hf,mf,Nl=!1,bi=[],an=null,un=null,cn=null,si=new Map,oi=new Map,tn=[],bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function Lr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ti(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fm(e,t,n,r,i){switch(t){case"focusin":return an=Lr(an,e,t,n,r,i),!0;case"dragenter":return un=Lr(un,e,t,n,r,i),!0;case"mouseover":return cn=Lr(cn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return si.set(s,Lr(si.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,Lr(oi.get(s)||null,e,t,n,r,i)),!0}return!1}function gf(e){var t=Pn(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=rf(n),t!==null){e.blockedOn=t,mf(e.priority,function(){pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ol=r,n.target.dispatchEvent(r),Ol=null}else return t=Ti(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function Ku(e,t,n){os(e)&&n.delete(t)}function Dm(){Nl=!1,an!==null&&os(an)&&(an=null),un!==null&&os(un)&&(un=null),cn!==null&&os(cn)&&(cn=null),si.forEach(Ku),oi.forEach(Ku)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,Nl||(Nl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Dm)))}function li(e){function t(i){return jr(i,e)}if(0<bi.length){jr(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&jr(an,e),un!==null&&jr(un,e),cn!==null&&jr(cn,e),si.forEach(t),oi.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)gf(n),n.blockedOn===null&&tn.shift()}var ur=Kt.ReactCurrentBatchConfig,zs=!0;function Rm(e,t,n,r){var i=te,s=ur.transition;ur.transition=null;try{te=1,Fa(e,t,n,r)}finally{te=i,ur.transition=s}}function $m(e,t,n,r){var i=te,s=ur.transition;ur.transition=null;try{te=4,Fa(e,t,n,r)}finally{te=i,ur.transition=s}}function Fa(e,t,n,r){if(zs){var i=bl(e,t,n,r);if(i===null)Uo(e,t,r,Is,n),Xu(e,r);else if(Fm(i,e,t,n,r))r.stopPropagation();else if(Xu(e,r),t&4&&-1<bm.indexOf(e)){for(;i!==null;){var s=Ti(i);if(s!==null&&ff(s),s=bl(e,t,n,r),s===null&&Uo(e,t,r,Is,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uo(e,t,r,null,n)}}var Is=null;function bl(e,t,n,r){if(Is=null,e=ja(r),e=Pn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Is=e,null}function vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case Aa:return 1;case af:return 4;case Ps:case zm:return 16;case uf:return 536870912;default:return 16}default:return 16}}var rn=null,Da=null,ls=null;function yf(){if(ls)return ls;var e,t=Da,n=t.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ls=i.slice(e,1<r?1-r:void 0)}function as(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function qu(){return!1}function tt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fi:qu,this.isPropagationStopped=qu,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=tt(Pr),ki=pe({},Pr,{view:0,detail:0}),Vm=tt(ki),No,bo,Ar,oo=pe({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(No=e.screenX-Ar.screenX,bo=e.screenY-Ar.screenY):bo=No=0,Ar=e),No)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),Zu=tt(oo),Bm=pe({},oo,{dataTransfer:0}),Wm=tt(Bm),Um=pe({},ki,{relatedTarget:0}),Fo=tt(Um),Hm=pe({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=tt(Hm),Qm=pe({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ym=tt(Qm),Xm=pe({},Pr,{data:0}),Ju=tt(Xm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zm[e])?!!t[e]:!1}function $a(){return Jm}var eg=pe({},ki,{key:function(e){if(e.key){var t=Km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=as(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?as(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?as(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=tt(eg),ng=pe({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=tt(ng),rg=pe({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),ig=tt(rg),sg=pe({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),og=tt(sg),lg=pe({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=tt(lg),ug=[9,13,27,32],Va=Gt&&"CompositionEvent"in window,Gr=null;Gt&&"documentMode"in document&&(Gr=document.documentMode);var cg=Gt&&"TextEvent"in window&&!Gr,xf=Gt&&(!Va||Gr&&8<Gr&&11>=Gr),tc=String.fromCharCode(32),nc=!1;function wf(e,t){switch(e){case"keyup":return ug.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function dg(e,t){switch(e){case"compositionend":return Sf(t);case"keypress":return t.which!==32?null:(nc=!0,tc);case"textInput":return e=t.data,e===tc&&nc?null:e;default:return null}}function fg(e,t){if(Yn)return e==="compositionend"||!Va&&wf(e,t)?(e=yf(),ls=Da=rn=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xf&&t.locale!=="ko"?null:t.data;default:return null}}var pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pg[e.type]:t==="textarea"}function Ef(e,t,n,r){Zd(r),t=Os(t,"onChange"),0<t.length&&(n=new Ra("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,ai=null;function hg(e){jf(e,0)}function lo(e){var t=qn(e);if(Hd(t))return e}function mg(e,t){if(e==="change")return t}var kf=!1;if(Gt){var Do;if(Gt){var Ro="oninput"in document;if(!Ro){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),Ro=typeof ic.oninput=="function"}Do=Ro}else Do=!1;kf=Do&&(!document.documentMode||9<document.documentMode)}function sc(){Qr&&(Qr.detachEvent("onpropertychange",Tf),ai=Qr=null)}function Tf(e){if(e.propertyName==="value"&&lo(ai)){var t=[];Ef(t,ai,e,ja(e)),nf(hg,t)}}function gg(e,t,n){e==="focusin"?(sc(),Qr=t,ai=n,Qr.attachEvent("onpropertychange",Tf)):e==="focusout"&&sc()}function vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(ai)}function yg(e,t){if(e==="click")return lo(t)}function xg(e,t){if(e==="input"||e==="change")return lo(t)}function wg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:wg;function ui(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yl.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oc(n)}}function Cf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=ks();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ks(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sg(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cf(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=lc(n,s);var o=lc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eg=Gt&&"documentMode"in document&&11>=document.documentMode,Xn=null,Fl=null,Yr=null,Dl=!1;function ac(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||Xn==null||Xn!==ks(r)||(r=Xn,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&ui(Yr,r)||(Yr=r,r=Os(Fl,"onSelect"),0<r.length&&(t=new Ra("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},$o={},_f={};Gt&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function ao(e){if($o[e])return $o[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _f)return $o[e]=t[n];return e}var zf=ao("animationend"),If=ao("animationiteration"),Of=ao("animationstart"),Mf=ao("transitionend"),Lf=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){Lf.set(e,t),$n(t,[e])}for(var Vo=0;Vo<uc.length;Vo++){var Bo=uc[Vo],kg=Bo.toLowerCase(),Tg=Bo[0].toUpperCase()+Bo.slice(1);xn(kg,"on"+Tg)}xn(zf,"onAnimationEnd");xn(If,"onAnimationIteration");xn(Of,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Mf,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,km(r,t,void 0,e),e.currentTarget=null}function jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cc(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cc(i,a,u),s=l}}}if(Cs)throw e=jl,Cs=!1,jl=null,e}function se(e,t){var n=t[Wl];n===void 0&&(n=t[Wl]=new Set);var r=e+"__bubble";n.has(r)||(Af(t,e,2,!1),n.add(r))}function Wo(e,t,n){var r=0;t&&(r|=4),Af(n,e,r,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[Ri]){e[Ri]=!0,$d.forEach(function(n){n!=="selectionchange"&&(Cg.has(n)||Wo(n,!1,e),Wo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Wo("selectionchange",!1,t))}}function Af(e,t,n,r){switch(vf(t)){case 1:var i=Rm;break;case 4:i=$m;break;default:i=Fa}n=i.bind(null,t,n,e),i=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Uo(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nf(function(){var u=s,c=ja(n),p=[];e:{var h=Lf.get(e);if(h!==void 0){var g=Ra,x=e;switch(e){case"keypress":if(as(n)===0)break e;case"keydown":case"keyup":g=tg;break;case"focusin":x="focus",g=Fo;break;case"focusout":x="blur",g=Fo;break;case"beforeblur":case"afterblur":g=Fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ig;break;case zf:case If:case Of:g=Gm;break;case Mf:g=og;break;case"scroll":g=Vm;break;case"wheel":g=ag;break;case"copy":case"cut":case"paste":g=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ec}var y=(t&4)!==0,T=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=ii(d,f),S!=null&&y.push(di(d,S,m)))),T)break;d=d.return}0<y.length&&(h=new g(h,x,null,n,c),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Ol&&(x=n.relatedTarget||n.fromElement)&&(Pn(x)||x[Qt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Pn(x):null,x!==null&&(T=Vn(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=Zu,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=ec,S="onPointerLeave",f="onPointerEnter",d="pointer"),T=g==null?h:qn(g),m=x==null?h:qn(x),h=new y(S,d+"leave",g,n,c),h.target=T,h.relatedTarget=m,S=null,Pn(c)===u&&(y=new y(f,d+"enter",x,n,c),y.target=m,y.relatedTarget=T,S=y),T=S,g&&x)t:{for(y=g,f=x,d=0,m=y;m;m=Wn(m))d++;for(m=0,S=f;S;S=Wn(S))m++;for(;0<d-m;)y=Wn(y),d--;for(;0<m-d;)f=Wn(f),m--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=Wn(y),f=Wn(f)}y=null}else y=null;g!==null&&dc(p,h,g,y,!1),x!==null&&T!==null&&dc(p,T,x,y,!0)}}e:{if(h=u?qn(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=mg;else if(rc(h))if(kf)E=xg;else{E=vg;var C=gg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=yg);if(E&&(E=E(e,u))){Ef(p,E,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Cl(h,"number",h.value)}switch(C=u?qn(u):window,e){case"focusin":(rc(C)||C.contentEditable==="true")&&(Xn=C,Fl=u,Yr=null);break;case"focusout":Yr=Fl=Xn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,ac(p,n,c);break;case"selectionchange":if(Eg)break;case"keydown":case"keyup":ac(p,n,c)}var P;if(Va)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Yn?wf(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(xf&&n.locale!=="ko"&&(Yn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Yn&&(P=yf()):(rn=c,Da="value"in rn?rn.value:rn.textContent,Yn=!0)),C=Os(u,I),0<C.length&&(I=new Ju(I,e,null,n,c),p.push({event:I,listeners:C}),P?I.data=P:(P=Sf(n),P!==null&&(I.data=P)))),(P=cg?dg(e,n):fg(e,n))&&(u=Os(u,"onBeforeInput"),0<u.length&&(c=new Ju("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=P))}jf(p,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Os(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ii(e,n),s!=null&&r.unshift(di(e,s,i)),s=ii(e,t),s!=null&&r.push(di(e,s,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ii(n,s),l!=null&&o.unshift(di(n,l,a))):i||(l=ii(n,s),l!=null&&o.push(di(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Pg=/\r\n?/g,_g=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(_g,"")}function $i(e,t,n){if(t=fc(t),fc(e)!==t&&n)throw Error(M(425))}function Ms(){}var Rl=null,$l=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,Ig=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(e){return pc.resolve(null).then(e).catch(Og)}:Bl;function Og(e){setTimeout(function(){throw e})}function Ho(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),It="__reactFiber$"+_r,fi="__reactProps$"+_r,Qt="__reactContainer$"+_r,Wl="__reactEvents$"+_r,Mg="__reactListeners$"+_r,Lg="__reactHandles$"+_r;function Pn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hc(e);e!==null;){if(n=e[It])return n;e=hc(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[It]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function uo(e){return e[fi]||null}var Ul=[],Zn=-1;function wn(e){return{current:e}}function le(e){0>Zn||(e.current=Ul[Zn],Ul[Zn]=null,Zn--)}function ie(e,t){Zn++,Ul[Zn]=e.current,e.current=t}var yn={},be=wn(yn),Ge=wn(!1),An=yn;function hr(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function Ls(){le(Ge),le(be)}function mc(e,t,n){if(be.current!==yn)throw Error(M(168));ie(be,t),ie(Ge,n)}function Nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,gm(e)||"Unknown",i));return pe({},n,r)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,An=be.current,ie(be,e),ie(Ge,Ge.current),!0}function gc(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Nf(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,le(Ge),le(be),ie(be,e)):le(Ge),ie(Ge,n)}var Vt=null,co=!1,Go=!1;function bf(e){Vt===null?Vt=[e]:Vt.push(e)}function jg(e){co=!0,bf(e)}function Sn(){if(!Go&&Vt!==null){Go=!0;var e=0,t=te;try{var n=Vt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,co=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),lf(Aa,Sn),i}finally{te=t,Go=!1}}return null}var Jn=[],er=0,As=null,Ns=0,it=[],st=0,Nn=null,Wt=1,Ut="";function Tn(e,t){Jn[er++]=Ns,Jn[er++]=As,As=e,Ns=t}function Ff(e,t,n){it[st++]=Wt,it[st++]=Ut,it[st++]=Nn,Nn=e;var r=Wt;e=Ut;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var s=32-vt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-vt(t)+i|n<<i|r,Ut=s+e}else Wt=1<<s|n<<i|r,Ut=e}function Wa(e){e.return!==null&&(Tn(e,1),Ff(e,1,0))}function Ua(e){for(;e===As;)As=Jn[--er],Jn[er]=null,Ns=Jn[--er],Jn[er]=null;for(;e===Nn;)Nn=it[--st],it[st]=null,Ut=it[--st],it[st]=null,Wt=it[--st],it[st]=null}var Ze=null,qe=null,ue=!1,mt=null;function Df(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,qe=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nn!==null?{id:Wt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,qe=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(ue){var t=qe;if(t){var n=t;if(!vc(e,t)){if(Hl(e))throw Error(M(418));t=dn(n.nextSibling);var r=Ze;t&&vc(e,t)?Df(r,n):(e.flags=e.flags&-4097|2,ue=!1,Ze=e)}}else{if(Hl(e))throw Error(M(418));e.flags=e.flags&-4097|2,ue=!1,Ze=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function Vi(e){if(e!==Ze)return!1;if(!ue)return yc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=qe)){if(Hl(e))throw Rf(),Error(M(418));for(;t;)Df(e,t),t=dn(t.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ze?dn(e.stateNode.nextSibling):null;return!0}function Rf(){for(var e=qe;e;)e=dn(e.nextSibling)}function mr(){qe=Ze=null,ue=!1}function Ha(e){mt===null?mt=[e]:mt.push(e)}var Ag=Kt.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bs=wn(null),Fs=null,tr=null,Ga=null;function Qa(){Ga=tr=Fs=null}function Ya(e){var t=bs.current;le(bs),e._currentValue=t}function Ql(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Fs=e,Ga=tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ga!==e)if(e={context:e,memoizedValue:t,next:null},tr===null){if(Fs===null)throw Error(M(308));tr=e,Fs.dependencies={lanes:0,firstContext:e}}else tr=tr.next=e;return t}var _n=null;function Xa(e){_n===null?_n=[e]:_n.push(e)}function $f(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function us(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Na(e,n)}}function xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ds(e,t,n,r){var i=e.updateQueue;en=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(h=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,h);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(g,p,h):x,h==null)break e;p=pe({},p,h);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=p):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Fn|=o,e.lanes=o,e.memoizedState=p}}function wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Bf=new Rd.Component().refs;function Yl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=hn(e),s=Ht(r,i);s.payload=t,n!=null&&(s.callback=n),t=fn(e,s,i),t!==null&&(yt(t,e,i,r),us(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=hn(e),s=Ht(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=fn(e,s,i),t!==null&&(yt(t,e,i,r),us(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=hn(e),i=Ht(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(yt(t,e,r,n),us(t,e,r))}};function Sc(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,s):!0}function Wf(e,t,n){var r=!1,i=yn,s=t.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=Qe(t)?An:be.current,r=t.contextTypes,s=(r=r!=null)?hr(e,i):yn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ec(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Xl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bf,Ka(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=Qe(t)?An:be.current,i.context=hr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Yl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fo.enqueueReplaceState(i,i.state,null),Ds(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===Bf&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kc(e){var t=e._init;return t(e._payload)}function Uf(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=mn(f,d),f.index=0,f.sibling=null,f}function s(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,S){return d===null||d.tag!==6?(d=Jo(m,f.mode,S),d.return=f,d):(d=i(d,m),d.return=f,d)}function l(f,d,m,S){var E=m.type;return E===Qn?c(f,d,m.props.children,S,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&kc(E)===d.type)?(S=i(d,m.props),S.ref=Nr(f,d,m),S.return=f,S):(S=ms(m.type,m.key,m.props,null,f.mode,S),S.ref=Nr(f,d,m),S.return=f,S)}function u(f,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=el(m,f.mode,S),d.return=f,d):(d=i(d,m.children||[]),d.return=f,d)}function c(f,d,m,S,E){return d===null||d.tag!==7?(d=Ln(m,f.mode,S,E),d.return=f,d):(d=i(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Jo(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Mi:return m=ms(d.type,d.key,d.props,null,f.mode,m),m.ref=Nr(f,null,d),m.return=f,m;case Gn:return d=el(d,f.mode,m),d.return=f,d;case Jt:var S=d._init;return p(f,S(d._payload),m)}if($r(d)||Or(d))return d=Ln(d,f.mode,m,null),d.return=f,d;Bi(f,d)}return null}function h(f,d,m,S){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mi:return m.key===E?l(f,d,m,S):null;case Gn:return m.key===E?u(f,d,m,S):null;case Jt:return E=m._init,h(f,d,E(m._payload),S)}if($r(m)||Or(m))return E!==null?null:c(f,d,m,S,null);Bi(f,m)}return null}function g(f,d,m,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,a(d,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Mi:return f=f.get(S.key===null?m:S.key)||null,l(d,f,S,E);case Gn:return f=f.get(S.key===null?m:S.key)||null,u(d,f,S,E);case Jt:var C=S._init;return g(f,d,m,C(S._payload),E)}if($r(S)||Or(S))return f=f.get(m)||null,c(d,f,S,E,null);Bi(d,S)}return null}function x(f,d,m,S){for(var E=null,C=null,P=d,I=d=0,N=null;P!==null&&I<m.length;I++){P.index>I?(N=P,P=null):N=P.sibling;var z=h(f,P,m[I],S);if(z===null){P===null&&(P=N);break}e&&P&&z.alternate===null&&t(f,P),d=s(z,d,I),C===null?E=z:C.sibling=z,C=z,P=N}if(I===m.length)return n(f,P),ue&&Tn(f,I),E;if(P===null){for(;I<m.length;I++)P=p(f,m[I],S),P!==null&&(d=s(P,d,I),C===null?E=P:C.sibling=P,C=P);return ue&&Tn(f,I),E}for(P=r(f,P);I<m.length;I++)N=g(P,f,I,m[I],S),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?I:N.key),d=s(N,d,I),C===null?E=N:C.sibling=N,C=N);return e&&P.forEach(function(R){return t(f,R)}),ue&&Tn(f,I),E}function y(f,d,m,S){var E=Or(m);if(typeof E!="function")throw Error(M(150));if(m=E.call(m),m==null)throw Error(M(151));for(var C=E=null,P=d,I=d=0,N=null,z=m.next();P!==null&&!z.done;I++,z=m.next()){P.index>I?(N=P,P=null):N=P.sibling;var R=h(f,P,z.value,S);if(R===null){P===null&&(P=N);break}e&&P&&R.alternate===null&&t(f,P),d=s(R,d,I),C===null?E=R:C.sibling=R,C=R,P=N}if(z.done)return n(f,P),ue&&Tn(f,I),E;if(P===null){for(;!z.done;I++,z=m.next())z=p(f,z.value,S),z!==null&&(d=s(z,d,I),C===null?E=z:C.sibling=z,C=z);return ue&&Tn(f,I),E}for(P=r(f,P);!z.done;I++,z=m.next())z=g(P,f,I,z.value,S),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?I:z.key),d=s(z,d,I),C===null?E=z:C.sibling=z,C=z);return e&&P.forEach(function(L){return t(f,L)}),ue&&Tn(f,I),E}function T(f,d,m,S){if(typeof m=="object"&&m!==null&&m.type===Qn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Mi:e:{for(var E=m.key,C=d;C!==null;){if(C.key===E){if(E=m.type,E===Qn){if(C.tag===7){n(f,C.sibling),d=i(C,m.props.children),d.return=f,f=d;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&kc(E)===C.type){n(f,C.sibling),d=i(C,m.props),d.ref=Nr(f,C,m),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}m.type===Qn?(d=Ln(m.props.children,f.mode,S,m.key),d.return=f,f=d):(S=ms(m.type,m.key,m.props,null,f.mode,S),S.ref=Nr(f,d,m),S.return=f,f=S)}return o(f);case Gn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=i(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=el(m,f.mode,S),d.return=f,f=d}return o(f);case Jt:return C=m._init,T(f,d,C(m._payload),S)}if($r(m))return x(f,d,m,S);if(Or(m))return y(f,d,m,S);Bi(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,m),d.return=f,f=d):(n(f,d),d=Jo(m,f.mode,S),d.return=f,f=d),o(f)):n(f,d)}return T}var gr=Uf(!0),Hf=Uf(!1),Ci={},jt=wn(Ci),pi=wn(Ci),hi=wn(Ci);function zn(e){if(e===Ci)throw Error(M(174));return e}function qa(e,t){switch(ie(hi,t),ie(pi,e),ie(jt,Ci),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_l(t,e)}le(jt),ie(jt,t)}function vr(){le(jt),le(pi),le(hi)}function Gf(e){zn(hi.current);var t=zn(jt.current),n=_l(t,e.type);t!==n&&(ie(pi,e),ie(jt,n))}function Za(e){pi.current===e&&(le(jt),le(pi))}var de=wn(0);function Rs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function Ja(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var cs=Kt.ReactCurrentDispatcher,Yo=Kt.ReactCurrentBatchConfig,bn=0,fe=null,we=null,Te=null,$s=!1,Xr=!1,mi=0,Ng=0;function Le(){throw Error(M(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function tu(e,t,n,r,i,s){if(bn=s,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cs.current=e===null||e.memoizedState===null?Rg:$g,e=n(r,i),Xr){s=0;do{if(Xr=!1,mi=0,25<=s)throw Error(M(301));s+=1,Te=we=null,t.updateQueue=null,cs.current=Vg,e=n(r,i)}while(Xr)}if(cs.current=Vs,t=we!==null&&we.next!==null,bn=0,Te=we=fe=null,$s=!1,t)throw Error(M(300));return e}function nu(){var e=mi!==0;return mi=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?fe.memoizedState=Te=e:Te=Te.next=e,Te}function ut(){if(we===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Te===null?fe.memoizedState:Te.next;if(t!==null)Te=t,we=e;else{if(e===null)throw Error(M(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Te===null?fe.memoizedState=Te=e:Te=Te.next=e}return Te}function gi(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((bn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,fe.lanes|=c,Fn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,fe.lanes|=s,Fn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);wt(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qf(){}function Yf(e,t){var n=fe,r=ut(),i=t(),s=!wt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,ru(qf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,vi(9,Kf.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(M(349));bn&30||Xf(n,t,i)}return i}function Xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Zf(t)&&Jf(e)}function qf(e,t,n){return n(function(){Zf(t)&&Jf(e)})}function Zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Jf(e){var t=Yt(e,1);t!==null&&yt(t,e,1,-1)}function Tc(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:e},t.queue=e,e=e.dispatch=Dg.bind(null,fe,e),[t.memoizedState,e]}function vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ep(){return ut().memoizedState}function ds(e,t,n,r){var i=_t();fe.flags|=e,i.memoizedState=vi(1|t,n,void 0,r===void 0?null:r)}function po(e,t,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(we!==null){var o=we.memoizedState;if(s=o.destroy,r!==null&&eu(r,o.deps)){i.memoizedState=vi(t,n,s,r);return}}fe.flags|=e,i.memoizedState=vi(1|t,n,s,r)}function Cc(e,t){return ds(8390656,8,e,t)}function ru(e,t){return po(2048,8,e,t)}function tp(e,t){return po(4,2,e,t)}function np(e,t){return po(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,rp.bind(null,t,e),n)}function iu(){}function sp(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function op(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lp(e,t,n){return bn&21?(wt(n,t)||(n=cf(),fe.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function bg(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Yo.transition;Yo.transition={};try{e(!1),t()}finally{te=n,Yo.transition=r}}function ap(){return ut().memoizedState}function Fg(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},up(e))cp(t,n);else if(n=$f(e,t,n,r),n!==null){var i=Re();yt(n,e,r,i),dp(n,t,r)}}function Dg(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(up(e))cp(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wt(a,o)){var l=t.interleaved;l===null?(i.next=i,Xa(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=$f(e,t,i,r),n!==null&&(i=Re(),yt(n,e,r,i),dp(n,t,r))}}function up(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function cp(e,t){Xr=$s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Na(e,n)}}var Vs={readContext:at,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Rg={readContext:at,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ds(4194308,4,rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return ds(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fg.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:iu,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=bg.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=_t();if(ue){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Pe===null)throw Error(M(349));bn&30||Xf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Cc(qf.bind(null,r,s,e),[e]),r.flags|=2048,vi(9,Kf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=_t(),t=Pe.identifierPrefix;if(ue){var n=Ut,r=Wt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ng++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$g={readContext:at,useCallback:sp,useContext:at,useEffect:ru,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:Xo,useRef:ep,useState:function(){return Xo(gi)},useDebugValue:iu,useDeferredValue:function(e){var t=ut();return lp(t,we.memoizedState,e)},useTransition:function(){var e=Xo(gi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Yf,useId:ap,unstable_isNewReconciler:!1},Vg={readContext:at,useCallback:sp,useContext:at,useEffect:ru,useImperativeHandle:ip,useInsertionEffect:tp,useLayoutEffect:np,useMemo:op,useReducer:Ko,useRef:ep,useState:function(){return Ko(gi)},useDebugValue:iu,useDeferredValue:function(e){var t=ut();return we===null?t.memoizedState=e:lp(t,we.memoizedState,e)},useTransition:function(){var e=Ko(gi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:Qf,useSyncExternalStore:Yf,useId:ap,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=mm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Kl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Bg=typeof WeakMap=="function"?WeakMap:Map;function fp(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,oa=r),Kl(e,t)},n}function pp(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Kl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kl(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=nv.bind(null,e,t,n),t.then(e,e))}function _c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var Wg=Kt.ReactCurrentOwner,He=!1;function Fe(e,t,n,r){t.child=e===null?Hf(t,null,n,r):gr(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var s=t.ref;return cr(t,i),r=tu(e,t,n,r,s,i),n=nu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(ue&&n&&Wa(t),t.flags|=1,Fe(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!fu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,hp(e,t,s,r,i)):(e=ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(o,r)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=mn(s,r),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ui(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return ql(e,t,n,r,i)}function mp(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(rr,Xe),Xe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(rr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(rr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ie(rr,Xe),Xe|=r;return Fe(e,t,i,n),t.child}function gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,i){var s=Qe(n)?An:be.current;return s=hr(t,s),cr(t,i),n=tu(e,t,n,r,s,i),r=nu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(ue&&r&&Wa(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Mc(e,t,n,r,i){if(Qe(n)){var s=!0;js(t)}else s=!1;if(cr(t,i),t.stateNode===null)fs(e,t),Wf(t,n,r),Xl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Qe(n)?An:be.current,u=hr(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ec(t,o,r,u),en=!1;var h=t.memoizedState;o.state=h,Ds(t,r,o,i),l=t.memoizedState,a!==r||h!==l||Ge.current||en?(typeof c=="function"&&(Yl(t,n,c,r),l=t.memoizedState),(a=en||Sc(t,n,a,r,h,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Vf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:pt(t.type,a),o.props=u,p=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=at(l):(l=Qe(n)?An:be.current,l=hr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Ec(t,o,r,l),en=!1,h=t.memoizedState,o.state=h,Ds(t,r,o,i);var x=t.memoizedState;a!==p||h!==x||Ge.current||en?(typeof g=="function"&&(Yl(t,n,g,r),x=t.memoizedState),(u=en||Sc(t,n,u,r,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Zl(e,t,n,r,s,i)}function Zl(e,t,n,r,i,s){gp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&gc(t,n,!1),Xt(e,t,s);r=t.stateNode,Wg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gr(t,e.child,null,s),t.child=gr(t,null,a,s)):Fe(e,t,a,s),t.memoizedState=r.state,i&&gc(t,n,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mc(e,t.context,!1),qa(e,t.containerInfo)}function Lc(e,t,n,r,i){return mr(),Ha(i),t.flags|=256,Fe(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,t,n){var r=t.pendingProps,i=de.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(de,i&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=go(o,r,0,null),e=Ln(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ea(n),t.memoizedState=Jl,e):su(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Ug(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mn(a,s):(s=Ln(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ea(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return s=e.child,e=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function su(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&Ha(r),gr(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ug(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(M(422))),Wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=go({mode:"visible",children:r.children},i,0,null),s=Ln(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gr(t,e.child,null,o),t.child.memoizedState=ea(o),t.memoizedState=Jl,s);if(!(t.mode&1))return Wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(M(419)),r=qo(s,r,void 0),Wi(e,t,o,r)}if(a=(o&e.childLanes)!==0,He||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(e,i),yt(r,e,i,-1))}return du(),r=qo(Error(M(421))),Wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qe=dn(i.nextSibling),Ze=t,ue=!0,mt=null,e!==null&&(it[st++]=Wt,it[st++]=Ut,it[st++]=Nn,Wt=e.id,Ut=e.overflow,Nn=t),t=su(t,r.children),t.flags|=4096,t)}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ql(e.return,t,n)}function Zo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xp(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Rs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zo(t,!0,n,null,s);break;case"together":Zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hg(e,t,n){switch(t.tag){case 3:vp(t),mr();break;case 5:Gf(t);break;case 1:Qe(t.type)&&js(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(bs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?yp(e,t,n):(ie(de,de.current&1),e=Xt(e,t,n),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,n)}return Xt(e,t,n)}var wp,ta,Sp,Ep;wp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ta=function(){};Sp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,zn(jt.current);var s=null;switch(n){case"input":i=kl(e,i),r=kl(e,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Pl(e,i),r=Pl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ms)}zl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Ep=function(e,t,n,r){n!==r&&(t.flags|=4)};function br(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gg(e,t,n){var r=t.pendingProps;switch(Ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Qe(t.type)&&Ls(),je(t),null;case 3:return r=t.stateNode,vr(),le(Ge),le(be),Ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(ua(mt),mt=null))),ta(e,t),je(t),null;case 5:Za(t);var i=zn(hi.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return je(t),null}if(e=zn(jt.current),Vi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[It]=t,r[fi]=s,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)se(Br[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Bu(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Uu(r,s),se("invalid",r)}zl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&$i(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$i(r.textContent,a,e),i=["children",""+a]):ni.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Li(r),Wu(r,s,!0);break;case"textarea":Li(r),Hu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ms)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[fi]=r,wp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Il(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)se(Br[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Bu(e,r),i=kl(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),se("invalid",e);break;case"textarea":Uu(e,r),i=Pl(e,r),se("invalid",e);break;default:i=r}zl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qd(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xd(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ri(e,l):typeof l=="number"&&ri(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ni.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",e):l!=null&&Ia(e,s,l,o))}switch(n){case"input":Li(e),Wu(e,r,!1);break;case"textarea":Li(e),Hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?or(e,!!r.multiple,s,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ms)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Ep(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=zn(hi.current),zn(jt.current),Vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(s=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return je(t),null;case 13:if(le(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&qe!==null&&t.mode&1&&!(t.flags&128))Rf(),mr(),t.flags|=98560,s=!1;else if(s=Vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[It]=t}else mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),s=!1}else mt!==null&&(ua(mt),mt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Se===0&&(Se=3):du())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return vr(),ta(e,t),e===null&&ci(t.stateNode.containerInfo),je(t),null;case 10:return Ya(t.type._context),je(t),null;case 17:return Qe(t.type)&&Ls(),je(t),null;case 19:if(le(de),s=t.memoizedState,s===null)return je(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)br(s,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Rs(e),o!==null){for(t.flags|=128,br(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(de,de.current&1|2),t.child}e=e.sibling}s.tail!==null&&ve()>xr&&(t.flags|=128,r=!0,br(s,!1),t.lanes=4194304)}else{if(!r)if(e=Rs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),br(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return je(t),null}else 2*ve()-s.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,br(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Qg(e,t){switch(Ua(t),t.tag){case 1:return Qe(t.type)&&Ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),le(Ge),le(be),Ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(le(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(de),null;case 4:return vr(),null;case 10:return Ya(t.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Ui=!1,Ae=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,$=null;function nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function na(e,t,n){try{n()}catch(r){he(e,t,r)}}var Ac=!1;function Xg(e,t){if(Rl=zs,e=Pf(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,p=e,h=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($l={focusedElem:e,selectionRange:n},zs=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,T=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:pt(t.type,y),T);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=Ac,Ac=!1,x}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&na(t,n,s)}i=i.next}while(i!==r)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ra(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kp(e){var t=e.alternate;t!==null&&(e.alternate=null,kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[fi],delete t[Wl],delete t[Mg],delete t[Lg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tp(e){return e.tag===5||e.tag===3||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ms));else if(r!==4&&(e=e.child,e!==null))for(ia(e,t,n),e=e.sibling;e!==null;)ia(e,t,n),e=e.sibling}function sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(sa(e,t,n),e=e.sibling;e!==null;)sa(e,t,n),e=e.sibling}var ze=null,ht=!1;function qt(e,t,n){for(n=n.child;n!==null;)Cp(e,t,n),n=n.sibling}function Cp(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:Ae||nr(n,t);case 6:var r=ze,i=ht;ze=null,qt(e,t,n),ze=r,ht=i,ze!==null&&(ht?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(ht?(e=ze,n=n.stateNode,e.nodeType===8?Ho(e.parentNode,n):e.nodeType===1&&Ho(e,n),li(e)):Ho(ze,n.stateNode));break;case 4:r=ze,i=ht,ze=n.stateNode.containerInfo,ht=!0,qt(e,t,n),ze=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&na(n,t,o),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!Ae&&(nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,qt(e,t,n),Ae=r):qt(e,t,n);break;default:qt(e,t,n)}}function bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yg),t.forEach(function(r){var i=iv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,ht=!1;break e;case 3:ze=a.stateNode.containerInfo,ht=!0;break e;case 4:ze=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(ze===null)throw Error(M(160));Cp(s,o,i),ze=null,ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),Pt(e),r&4){try{Kr(3,e,e.return),ho(3,e)}catch(y){he(e,e.return,y)}try{Kr(5,e,e.return)}catch(y){he(e,e.return,y)}}break;case 1:ft(t,e),Pt(e),r&512&&n!==null&&nr(n,n.return);break;case 5:if(ft(t,e),Pt(e),r&512&&n!==null&&nr(n,n.return),e.flags&32){var i=e.stateNode;try{ri(i,"")}catch(y){he(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gd(i,s),Il(a,o);var u=Il(a,s);for(o=0;o<l.length;o+=2){var c=l[o],p=l[o+1];c==="style"?qd(i,p):c==="dangerouslySetInnerHTML"?Xd(i,p):c==="children"?ri(i,p):Ia(i,c,p,u)}switch(a){case"input":Tl(i,s);break;case"textarea":Qd(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?or(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?or(i,!!s.multiple,s.defaultValue,!0):or(i,!!s.multiple,s.multiple?[]:"",!1))}i[fi]=s}catch(y){he(e,e.return,y)}}break;case 6:if(ft(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){he(e,e.return,y)}}break;case 3:if(ft(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(y){he(e,e.return,y)}break;case 4:ft(t,e),Pt(e);break;case 13:ft(t,e),Pt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(au=ve())),r&4&&bc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(u=Ae)||c,ft(t,e),Ae=u):ft(t,e),Pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(p=$=c;$!==null;){switch(h=$,g=h.child,h.tag){case 0:case 11:case 14:case 15:Kr(4,h,h.return);break;case 1:nr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:nr(h,h.return);break;case 22:if(h.memoizedState!==null){Dc(p);continue}}g!==null?(g.return=h,$=g):Dc(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kd("display",o))}catch(y){he(e,e.return,y)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){he(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ft(t,e),Pt(e),r&4&&bc(e);break;case 21:break;default:ft(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tp(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var s=Nc(e);sa(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Nc(e);ia(e,a,o);break;default:throw Error(M(161))}}catch(l){he(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kg(e,t,n){$=e,_p(e)}function _p(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ui;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ae;a=Ui;var u=Ae;if(Ui=o,(Ae=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Rc(i):l!==null?(l.return=o,$=l):Rc(i);for(;s!==null;)$=s,_p(s),s=s.sibling;$=i,Ui=a,Ae=u}Fc(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Fc(e)}}function Fc(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||ho(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&wc(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&li(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ae||t.flags&512&&ra(t)}catch(h){he(t,t.return,h)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Dc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Rc(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ho(4,t)}catch(l){he(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){he(t,i,l)}}var s=t.return;try{ra(t)}catch(l){he(t,s,l)}break;case 5:var o=t.return;try{ra(t)}catch(l){he(t,o,l)}}}catch(l){he(t,t.return,l)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var qg=Math.ceil,Bs=Kt.ReactCurrentDispatcher,ou=Kt.ReactCurrentOwner,lt=Kt.ReactCurrentBatchConfig,Z=0,Pe=null,xe=null,Ie=0,Xe=0,rr=wn(0),Se=0,yi=null,Fn=0,mo=0,lu=0,qr=null,We=null,au=0,xr=1/0,Rt=null,Ws=!1,oa=null,pn=null,Hi=!1,sn=null,Us=0,Zr=0,la=null,ps=-1,hs=0;function Re(){return Z&6?ve():ps!==-1?ps:ps=ve()}function hn(e){return e.mode&1?Z&2&&Ie!==0?Ie&-Ie:Ag.transition!==null?(hs===0&&(hs=cf()),hs):(e=te,e!==0||(e=window.event,e=e===void 0?16:vf(e.type)),e):1}function yt(e,t,n,r){if(50<Zr)throw Zr=0,la=null,Error(M(185));Ei(e,n,r),(!(Z&2)||e!==Pe)&&(e===Pe&&(!(Z&2)&&(mo|=n),Se===4&&nn(e,Ie)),Ye(e,r),n===1&&Z===0&&!(t.mode&1)&&(xr=ve()+500,co&&Sn()))}function Ye(e,t){var n=e.callbackNode;Am(e,t);var r=_s(e,e===Pe?Ie:0);if(r===0)n!==null&&Yu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yu(n),t===1)e.tag===0?jg($c.bind(null,e)):bf($c.bind(null,e)),Ig(function(){!(Z&6)&&Sn()}),n=null;else{switch(df(r)){case 1:n=Aa;break;case 4:n=af;break;case 16:n=Ps;break;case 536870912:n=uf;break;default:n=Ps}n=Np(n,zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zp(e,t){if(ps=-1,hs=0,Z&6)throw Error(M(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=_s(e,e===Pe?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Hs(e,r);else{t=r;var i=Z;Z|=2;var s=Op();(Pe!==e||Ie!==t)&&(Rt=null,xr=ve()+500,Mn(e,t));do try{ev();break}catch(a){Ip(e,a)}while(1);Qa(),Bs.current=s,Z=i,xe!==null?t=0:(Pe=null,Ie=0,t=Se)}if(t!==0){if(t===2&&(i=Al(e),i!==0&&(r=i,t=aa(e,i))),t===1)throw n=yi,Mn(e,0),nn(e,r),Ye(e,ve()),n;if(t===6)nn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zg(i)&&(t=Hs(e,r),t===2&&(s=Al(e),s!==0&&(r=s,t=aa(e,s))),t===1))throw n=yi,Mn(e,0),nn(e,r),Ye(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Cn(e,We,Rt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=au+500-ve(),10<t)){if(_s(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bl(Cn.bind(null,e,We,Rt),t);break}Cn(e,We,Rt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-vt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qg(r/1960))-r,10<r){e.timeoutHandle=Bl(Cn.bind(null,e,We,Rt),r);break}Cn(e,We,Rt);break;case 5:Cn(e,We,Rt);break;default:throw Error(M(329))}}}return Ye(e,ve()),e.callbackNode===n?zp.bind(null,e):null}function aa(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=Hs(e,t),e!==2&&(t=We,We=n,t!==null&&ua(t)),e}function ua(e){We===null?We=e:We.push.apply(We,e)}function Zg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~lu,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function $c(e){if(Z&6)throw Error(M(327));dr();var t=_s(e,0);if(!(t&1))return Ye(e,ve()),null;var n=Hs(e,t);if(e.tag!==0&&n===2){var r=Al(e);r!==0&&(t=r,n=aa(e,r))}if(n===1)throw n=yi,Mn(e,0),nn(e,t),Ye(e,ve()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cn(e,We,Rt),Ye(e,ve()),null}function uu(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(xr=ve()+500,co&&Sn())}}function Dn(e){sn!==null&&sn.tag===0&&!(Z&6)&&dr();var t=Z;Z|=1;var n=lt.transition,r=te;try{if(lt.transition=null,te=1,e)return e()}finally{te=r,lt.transition=n,Z=t,!(Z&6)&&Sn()}}function cu(){Xe=rr.current,le(rr)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zg(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ls();break;case 3:vr(),le(Ge),le(be),Ja();break;case 5:Za(r);break;case 4:vr();break;case 13:le(de);break;case 19:le(de);break;case 10:Ya(r.type._context);break;case 22:case 23:cu()}n=n.return}if(Pe=e,xe=e=mn(e.current,null),Ie=Xe=t,Se=0,yi=null,lu=mo=Fn=0,We=qr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_n=null}return e}function Ip(e,t){do{var n=xe;try{if(Qa(),cs.current=Vs,$s){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$s=!1}if(bn=0,Te=we=fe=null,Xr=!1,mi=0,ou.current=null,n===null||n.return===null){Se=1,yi=t,xe=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=_c(o);if(g!==null){g.flags&=-257,zc(g,o,a,s,t),g.mode&1&&Pc(s,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){Pc(s,u,t),du();break e}l=Error(M(426))}}else if(ue&&a.mode&1){var T=_c(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),zc(T,o,a,s,t),Ha(yr(l,a));break e}}s=l=yr(l,a),Se!==4&&(Se=2),qr===null?qr=[s]:qr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var f=fp(s,l,t);xc(s,f);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pn===null||!pn.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=pp(s,a,t);xc(s,S);break e}}s=s.return}while(s!==null)}Lp(n)}catch(E){t=E,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Op(){var e=Bs.current;return Bs.current=Vs,e===null?Vs:e}function du(){(Se===0||Se===3||Se===2)&&(Se=4),Pe===null||!(Fn&268435455)&&!(mo&268435455)||nn(Pe,Ie)}function Hs(e,t){var n=Z;Z|=2;var r=Op();(Pe!==e||Ie!==t)&&(Rt=null,Mn(e,t));do try{Jg();break}catch(i){Ip(e,i)}while(1);if(Qa(),Z=n,Bs.current=r,xe!==null)throw Error(M(261));return Pe=null,Ie=0,Se}function Jg(){for(;xe!==null;)Mp(xe)}function ev(){for(;xe!==null&&!Cm();)Mp(xe)}function Mp(e){var t=Ap(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Lp(e):xe=t,ou.current=null}function Lp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qg(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}else if(n=Gg(n,t,Xe),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function Cn(e,t,n){var r=te,i=lt.transition;try{lt.transition=null,te=1,tv(e,t,n,r)}finally{lt.transition=i,te=r}return null}function tv(e,t,n,r){do dr();while(sn!==null);if(Z&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nm(e,s),e===Pe&&(xe=Pe=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,Np(Ps,function(){return dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=te;te=1;var a=Z;Z|=4,ou.current=null,Xg(e,n),Pp(n,e),Sg($l),zs=!!Rl,$l=Rl=null,e.current=n,Kg(n),Pm(),Z=a,te=o,lt.transition=s}else e.current=n;if(Hi&&(Hi=!1,sn=e,Us=i),s=e.pendingLanes,s===0&&(pn=null),Im(n.stateNode),Ye(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ws)throw Ws=!1,e=oa,oa=null,e;return Us&1&&e.tag!==0&&dr(),s=e.pendingLanes,s&1?e===la?Zr++:(Zr=0,la=e):Zr=0,Sn(),null}function dr(){if(sn!==null){var e=df(Us),t=lt.transition,n=te;try{if(lt.transition=null,te=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,Us=0,Z&6)throw Error(M(331));var i=Z;for(Z|=4,$=e.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Kr(8,c,s)}var p=c.child;if(p!==null)p.return=c,$=p;else for(;$!==null;){c=$;var h=c.sibling,g=c.return;if(kp(c),c===u){$=null;break}if(h!==null){h.return=g,$=h;break}$=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kr(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,$=f;break e}$=s.return}}var d=e.current;for($=d;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=d;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ho(9,a)}}catch(E){he(a,a.return,E)}if(a===o){$=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,$=S;break e}$=a.return}}if(Z=i,Sn(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{te=n,lt.transition=t}}return!1}function Vc(e,t,n){t=yr(n,t),t=fp(e,t,1),e=fn(e,t,1),t=Re(),e!==null&&(Ei(e,1,t),Ye(e,t))}function he(e,t,n){if(e.tag===3)Vc(e,e,n);else for(;t!==null;){if(t.tag===3){Vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=yr(n,e),e=pp(t,e,1),t=fn(t,e,1),e=Re(),t!==null&&(Ei(t,1,e),Ye(t,e));break}}t=t.return}}function nv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ie&n)===n&&(Se===4||Se===3&&(Ie&130023424)===Ie&&500>ve()-au?Mn(e,0):lu|=n),Ye(e,t)}function jp(e,t){t===0&&(e.mode&1?(t=Ni,Ni<<=1,!(Ni&130023424)&&(Ni=4194304)):t=1);var n=Re();e=Yt(e,t),e!==null&&(Ei(e,t,n),Ye(e,n))}function rv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jp(e,n)}function iv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),jp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Hg(e,t,n);He=!!(e.flags&131072)}else He=!1,ue&&t.flags&1048576&&Ff(t,Ns,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fs(e,t),e=t.pendingProps;var i=hr(t,be.current);cr(t,n),i=tu(null,t,r,e,i,n);var s=nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(s=!0,js(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ka(t),i.updater=fo,t.stateNode=i,i._reactInternals=t,Xl(t,r,e,n),t=Zl(null,t,r,!0,s,n)):(t.tag=0,ue&&s&&Wa(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ov(r),e=pt(r,e),i){case 0:t=ql(null,t,r,e,n);break e;case 1:t=Mc(null,t,r,e,n);break e;case 11:t=Ic(null,t,r,e,n);break e;case 14:t=Oc(null,t,r,pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Mc(e,t,r,i,n);case 3:e:{if(vp(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Vf(e,t),Ds(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yr(Error(M(423)),t),t=Lc(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(M(424)),t),t=Lc(e,t,r,n,i);break e}else for(qe=dn(t.stateNode.containerInfo.firstChild),Ze=t,ue=!0,mt=null,n=Hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mr(),r===i){t=Xt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Gf(t),e===null&&Gl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Vl(r,i)?o=null:s!==null&&Vl(r,s)&&(t.flags|=32),gp(e,t),Fe(e,t,o,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return yp(e,t,n);case 4:return qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Ic(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ie(bs,r._currentValue),r._currentValue=o,s!==null)if(wt(s.value,o)){if(s.children===i.children&&!Ge.current){t=Xt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ht(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ql(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ql(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=at(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Oc(e,t,r,i,n);case 15:return hp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),fs(e,t),t.tag=1,Qe(r)?(e=!0,js(t)):e=!1,cr(t,n),Wf(t,r,i),Xl(t,r,i,n),Zl(null,t,r,!0,e,n);case 19:return xp(e,t,n);case 22:return mp(e,t,n)}throw Error(M(156,t.tag))};function Np(e,t){return lf(e,t)}function sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new sv(e,t,n,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ov(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===La)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ms(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")fu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qn:return Ln(n.children,i,s,t);case Oa:o=8,i|=8;break;case xl:return e=ot(12,n,t,i|2),e.elementType=xl,e.lanes=s,e;case wl:return e=ot(13,n,t,i),e.elementType=wl,e.lanes=s,e;case Sl:return e=ot(19,n,t,i),e.elementType=Sl,e.lanes=s,e;case Wd:return go(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vd:o=10;break e;case Bd:o=9;break e;case Ma:o=11;break e;case La:o=14;break e;case Jt:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ot(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ln(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Wd,e.lanes=n,e.stateNode={isHidden:!1},e}function Jo(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function el(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,i,s,o,a,l){return e=new lv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ot(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(s),e}function av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bp(e){if(!e)return yn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Nf(e,n,t)}return t}function Fp(e,t,n,r,i,s,o,a,l){return e=pu(n,r,!0,e,i,s,o,a,l),e.context=bp(null),n=e.current,r=Re(),i=hn(n),s=Ht(r,i),s.callback=t??null,fn(n,s,i),e.current.lanes=i,Ei(e,i,r),Ye(e,r),e}function vo(e,t,n,r){var i=t.current,s=Re(),o=hn(i);return n=bp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,o),e!==null&&(yt(e,i,o,s),us(e,i,o)),o}function Gs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){Bc(e,t),(e=e.alternate)&&Bc(e,t)}function uv(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}yo.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));vo(e,t,null,null)};yo.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dn(function(){vo(null,e,null,null)}),t[Qt]=null}};function yo(e){this._internalRoot=e}yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&gf(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wc(){}function cv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Gs(o);s.call(u)}}var o=Fp(t,r,e,0,null,!1,!1,"",Wc);return e._reactRootContainer=o,e[Qt]=o.current,ci(e.nodeType===8?e.parentNode:e),Dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Gs(l);a.call(u)}}var l=pu(e,0,!1,null,null,!1,!1,"",Wc);return e._reactRootContainer=l,e[Qt]=l.current,ci(e.nodeType===8?e.parentNode:e),Dn(function(){vo(t,l,n,r)}),l}function wo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gs(o);a.call(l)}}vo(t,o,e,i)}else o=cv(n,t,e,i,r);return Gs(o)}ff=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(Na(t,n|1),Ye(t,ve()),!(Z&6)&&(xr=ve()+500,Sn()))}break;case 13:Dn(function(){var r=Yt(e,1);if(r!==null){var i=Re();yt(r,e,1,i)}}),hu(e,1)}};ba=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Re();yt(t,e,134217728,n)}hu(e,134217728)}};pf=function(e){if(e.tag===13){var t=hn(e),n=Yt(e,t);if(n!==null){var r=Re();yt(n,e,t,r)}hu(e,t)}};hf=function(){return te};mf=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ml=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=uo(r);if(!i)throw Error(M(90));Hd(r),Tl(r,i)}}}break;case"textarea":Qd(e,n);break;case"select":t=n.value,t!=null&&or(e,!!n.multiple,t,!1)}};ef=uu;tf=Dn;var dv={usingClientEntryPoint:!1,Events:[Ti,qn,uo,Zd,Jd,uu]},Fr={findFiberByHostInstance:Pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fv={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sf(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{so=Gi.inject(fv),Lt=Gi}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(M(200));return av(e,t,null,n)};et.createRoot=function(e,t){if(!gu(e))throw Error(M(299));var n=!1,r="",i=Dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,ci(e.nodeType===8?e.parentNode:e),new mu(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=sf(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return Dn(e)};et.hydrate=function(e,t,n){if(!xo(t))throw Error(M(200));return wo(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!gu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Fp(t,null,e,1,n??null,i,!1,s,o),e[Qt]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yo(t)};et.render=function(e,t,n){if(!xo(t))throw Error(M(200));return wo(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!xo(e))throw Error(M(40));return e._reactRootContainer?(Dn(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};et.unstable_batchedUpdates=uu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return wo(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function Rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp)}catch(e){console.error(e)}}Rp(),bd.exports=et;var pv=bd.exports,Uc=pv;vl.createRoot=Uc.createRoot,vl.hydrateRoot=Uc.hydrateRoot;var Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ne.apply(this,arguments)};function xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var oe="-ms-",Jr="-moz-",ee="-webkit-",$p="comm",So="rule",vu="decl",hv="@import",Vp="@keyframes",mv="@layer",Bp=Math.abs,yu=String.fromCharCode,ca=Object.assign;function gv(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Wp(e){return e.trim()}function $t(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function gs(e,t,n){return e.indexOf(t,n)}function Ce(e,t){return e.charCodeAt(t)|0}function wr(e,t,n){return e.slice(t,n)}function zt(e){return e.length}function Up(e){return e.length}function Wr(e,t){return t.push(e),e}function vv(e,t){return e.map(t).join("")}function Hc(e,t){return e.filter(function(n){return!$t(n,t)})}var Eo=1,Sr=1,Hp=0,ct=0,ye=0,zr="";function ko(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Eo,column:Sr,length:o,return:"",siblings:a}}function Zt(e,t){return ca(ko("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=Zt(e.root,{children:[e]});Wr(e,e.siblings)}function yv(){return ye}function xv(){return ye=ct>0?Ce(zr,--ct):0,Sr--,ye===10&&(Sr=1,Eo--),ye}function xt(){return ye=ct<Hp?Ce(zr,ct++):0,Sr++,ye===10&&(Sr=1,Eo++),ye}function jn(){return Ce(zr,ct)}function vs(){return ct}function To(e,t){return wr(zr,e,t)}function da(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wv(e){return Eo=Sr=1,Hp=zt(zr=e),ct=0,[]}function Sv(e){return zr="",e}function tl(e){return Wp(To(ct-1,fa(e===91?e+2:e===40?e+1:e)))}function Ev(e){for(;(ye=jn())&&ye<33;)xt();return da(e)>2||da(ye)>3?"":" "}function kv(e,t){for(;--t&&xt()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return To(e,vs()+(t<6&&jn()==32&&xt()==32))}function fa(e){for(;xt();)switch(ye){case e:return ct;case 34:case 39:e!==34&&e!==39&&fa(ye);break;case 40:e===41&&fa(e);break;case 92:xt();break}return ct}function Tv(e,t){for(;xt()&&e+ye!==47+10;)if(e+ye===42+42&&jn()===47)break;return"/*"+To(t,ct-1)+"*"+yu(e===47?e:xt())}function Cv(e){for(;!da(jn());)xt();return To(e,ct)}function Pv(e){return Sv(ys("",null,null,null,[""],e=wv(e),0,[0],e))}function ys(e,t,n,r,i,s,o,a,l){for(var u=0,c=0,p=o,h=0,g=0,x=0,y=1,T=1,f=1,d=0,m="",S=i,E=s,C=r,P=m;T;)switch(x=d,d=xt()){case 40:if(x!=108&&Ce(P,p-1)==58){gs(P+=Y(tl(d),"&","&\f"),"&\f",Bp(u?a[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:P+=tl(d);break;case 9:case 10:case 13:case 32:P+=Ev(x);break;case 92:P+=kv(vs()-1,7);continue;case 47:switch(jn()){case 42:case 47:Wr(_v(Tv(xt(),vs()),t,n,l),l);break;default:P+="/"}break;case 123*y:a[u++]=zt(P)*f;case 125*y:case 59:case 0:switch(d){case 0:case 125:T=0;case 59+c:f==-1&&(P=Y(P,/\f/g,"")),g>0&&zt(P)-p&&Wr(g>32?Qc(P+";",r,n,p-1,l):Qc(Y(P," ","")+";",r,n,p-2,l),l);break;case 59:P+=";";default:if(Wr(C=Gc(P,t,n,u,c,i,a,m,S=[],E=[],p,s),s),d===123)if(c===0)ys(P,t,C,C,S,s,p,a,E);else switch(h===99&&Ce(P,3)===110?100:h){case 100:case 108:case 109:case 115:ys(e,C,C,r&&Wr(Gc(e,C,C,0,0,i,a,m,i,S=[],p,E),E),i,E,p,a,r?S:E);break;default:ys(P,C,C,C,[""],E,0,a,E)}}u=c=g=0,y=f=1,m=P="",p=o;break;case 58:p=1+zt(P),g=x;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&xv()==125)continue}switch(P+=yu(d),d*y){case 38:f=c>0?1:(P+="\f",-1);break;case 44:a[u++]=(zt(P)-1)*f,f=1;break;case 64:jn()===45&&(P+=tl(xt())),h=jn(),c=p=zt(m=P+=Cv(vs())),d++;break;case 45:x===45&&zt(P)==2&&(y=0)}}return s}function Gc(e,t,n,r,i,s,o,a,l,u,c,p){for(var h=i-1,g=i===0?s:[""],x=Up(g),y=0,T=0,f=0;y<r;++y)for(var d=0,m=wr(e,h+1,h=Bp(T=o[y])),S=e;d<x;++d)(S=Wp(T>0?g[d]+" "+m:Y(m,/&\f/g,g[d])))&&(l[f++]=S);return ko(e,t,n,i===0?So:a,l,u,c,p)}function _v(e,t,n,r){return ko(e,t,n,$p,yu(yv()),wr(e,2,-2),0,r)}function Qc(e,t,n,r,i){return ko(e,t,n,vu,wr(e,0,r),wr(e,r+1,-1),r,i)}function Gp(e,t,n){switch(gv(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Jr+e+oe+e+e;case 5936:switch(Ce(e,t+11)){case 114:return ee+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+oe+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+oe+e+e;case 6165:return ee+e+oe+"flex-"+e+e;case 5187:return ee+e+Y(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return ee+e+oe+"flex-item-"+Y(e,/flex-|-self/g,"")+($t(e,/flex-|baseline/)?"":oe+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ee+e+oe+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+oe+Y(e,"shrink","negative")+e;case 5292:return ee+e+oe+Y(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+Y(e,"-grow","")+ee+e+oe+Y(e,"grow","positive")+e;case 4554:return ee+Y(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!$t(e,/flex-|baseline/))return oe+"grid-column-align"+wr(e,t)+e;break;case 2592:case 3360:return oe+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,$t(r.props,/grid-\w+-end/)})?~gs(e+(n=n[t].value),"span",0)?e:oe+Y(e,"-start","")+e+oe+"grid-row-span:"+(~gs(n,"span",0)?$t(n,/\d+/):+$t(n,/\d+/)-+$t(e,/\d+/))+";":oe+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return $t(r.props,/grid-\w+-start/)})?e:oe+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Jr+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gs(e,"stretch",0)?Gp(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return oe+i+":"+s+u+(o?oe+i+"-span:"+(a?l:+l-+s)+u:"")+e});case 4949:if(Ce(e,t+6)===121)return Y(e,":",":"+ee)+e;break;case 6444:switch(Ce(e,Ce(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Ce(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+oe+"$2box$3")+e;case 100:return Y(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function Qs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zv(e,t,n,r){switch(e.type){case mv:if(e.children.length)break;case hv:case vu:return e.return=e.return||e.value;case $p:return"";case Vp:return e.return=e.value+"{"+Qs(e.children,r)+"}";case So:if(!zt(e.value=e.props.join(",")))return""}return zt(n=Qs(e.children,r))?e.return=e.value+"{"+n+"}":""}function Iv(e){var t=Up(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function Ov(e){return function(t){t.root||(t=t.return)&&e(t)}}function Mv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vu:e.return=Gp(e.value,e.length,n);return;case Vp:return Qs([Zt(e,{value:Y(e.value,"@","@"+ee)})],r);case So:if(e.length)return vv(n=e.props,function(i){switch($t(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(Zt(e,{props:[Y(i,/:(read-\w+)/,":"+Jr+"$1")]})),Un(Zt(e,{props:[i]})),ca(e,{props:Hc(n,r)});break;case"::placeholder":Un(Zt(e,{props:[Y(i,/:(plac\w+)/,":"+ee+"input-$1")]})),Un(Zt(e,{props:[Y(i,/:(plac\w+)/,":"+Jr+"$1")]})),Un(Zt(e,{props:[Y(i,/:(plac\w+)/,oe+"input-$1")]})),Un(Zt(e,{props:[i]})),ca(e,{props:Hc(n,r)});break}return""})}}var Lv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Er=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Qp="active",Yp="data-styled-version",Co="6.1.6",xu=`/*!sc*/
`,wu=typeof window<"u"&&"HTMLElement"in window,jv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Av={},Po=Object.freeze([]),kr=Object.freeze({});function Xp(e,t,n){return n===void 0&&(n=kr),e.theme!==n.theme&&e.theme||t||n.theme}var Kp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Nv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bv=/(^-|-$)/g;function Yc(e){return e.replace(Nv,"-").replace(bv,"")}var Fv=/(a)(d)/gi,Qi=52,Xc=function(e){return String.fromCharCode(e+(e>25?39:97))};function pa(e){var t,n="";for(t=Math.abs(e);t>Qi;t=t/Qi|0)n=Xc(t%Qi)+n;return(Xc(t%Qi)+n).replace(Fv,"$1-$2")}var nl,qp=5381,ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zp=function(e){return ir(qp,e)};function Jp(e){return pa(Zp(e)>>>0)}function Dv(e){return e.displayName||e.name||"Component"}function rl(e){return typeof e=="string"&&!0}var eh=typeof Symbol=="function"&&Symbol.for,th=eh?Symbol.for("react.memo"):60115,Rv=eh?Symbol.for("react.forward_ref"):60112,$v={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bv=((nl={})[Rv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nl[th]=nh,nl);function Kc(e){return("type"in(t=e)&&t.type.$$typeof)===th?nh:"$$typeof"in e?Bv[e.$$typeof]:$v;var t}var Wv=Object.defineProperty,Uv=Object.getOwnPropertyNames,qc=Object.getOwnPropertySymbols,Hv=Object.getOwnPropertyDescriptor,Gv=Object.getPrototypeOf,Zc=Object.prototype;function rh(e,t,n){if(typeof t!="string"){if(Zc){var r=Gv(t);r&&r!==Zc&&rh(e,r,n)}var i=Uv(t);qc&&(i=i.concat(qc(t)));for(var s=Kc(e),o=Kc(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Vv||n&&n[l]||o&&l in o||s&&l in s)){var u=Hv(t,l);try{Wv(e,l,u)}catch{}}}}return e}function Tr(e){return typeof e=="function"}function Su(e){return typeof e=="object"&&"styledComponentId"in e}function In(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ha(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ma(e,t,n){if(n===void 0&&(n=!1),!n&&!wi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ma(e[r],t[r]);else if(wi(t))for(var r in t)e[r]=ma(e[r],t[r]);return e}function Eu(e,t){Object.defineProperty(e,"toString",{value:t})}function Pi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Pi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(xu);return n},e}(),xs=new Map,Ys=new Map,ws=1,Yi=function(e){if(xs.has(e))return xs.get(e);for(;Ys.has(ws);)ws++;var t=ws++;return xs.set(e,t),Ys.set(t,e),t},Yv=function(e,t){ws=t+1,xs.set(e,t),Ys.set(t,e)},Xv="style[".concat(Er,"][").concat(Yp,'="').concat(Co,'"]'),Kv=new RegExp("^".concat(Er,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qv=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Zv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(xu),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Kv);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Yv(c,u),qv(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Jv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ih=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Er,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Er,Qp),r.setAttribute(Yp,Co);var o=Jv();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},e0=function(){function e(t){this.element=ih(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Pi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),t0=function(){function e(t){this.element=ih(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),n0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Jc=wu,r0={isServer:!wu,useCSSOMInjection:!jv},Xs=function(){function e(t,n,r){t===void 0&&(t=kr),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},r0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&wu&&Jc&&(Jc=!1,function(s){for(var o=document.querySelectorAll(Xv),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Er)!==Qp&&(Zv(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Eu(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(p){var h=function(f){return Ys.get(f)}(p);if(h===void 0)return"continue";var g=s.names.get(h),x=o.getGroup(p);if(g===void 0||x.length===0)return"continue";var y="".concat(Er,".g").concat(p,'[id="').concat(h,'"]'),T="";g!==void 0&&g.forEach(function(f){f.length>0&&(T+="".concat(f,","))}),l+="".concat(x).concat(y,'{content:"').concat(T,'"}').concat(xu)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Yi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new n0(i):r?new e0(i):new t0(i)}(this.options),new Qv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Yi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Yi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Yi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),i0=/&/g,s0=/^\s*\/\/.*$/gm;function sh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sh(n.children,t)),n})}function o0(e){var t,n,r,i=e===void 0?kr:e,s=i.options,o=s===void 0?kr:s,a=i.plugins,l=a===void 0?Po:a,u=function(h,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):h},c=l.slice();c.push(function(h){h.type===So&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(i0,n).replace(r,u))}),o.prefix&&c.push(Mv),c.push(zv);var p=function(h,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var T=h.replace(s0,""),f=Pv(x||g?"".concat(x," ").concat(g," { ").concat(T," }"):T);o.namespace&&(f=sh(f,o.namespace));var d=[];return Qs(f,Iv(c.concat(Ov(function(m){return d.push(m)})))),d};return p.hash=l.length?l.reduce(function(h,g){return g.name||Pi(15),ir(h,g.name)},qp).toString():"",p}var l0=new Xs,ga=o0(),oh=Q.createContext({shouldForwardProp:void 0,styleSheet:l0,stylis:ga});oh.Consumer;Q.createContext(void 0);function va(){return G.useContext(oh)}var a0=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ga);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Eu(this,function(){throw Pi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ga),this.name+t.hash},e}(),u0=function(e){return e>="A"&&e<="Z"};function ed(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;u0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var lh=function(e){return e==null||e===!1||e===""},ah=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!lh(s)&&(Array.isArray(s)&&s.isCss||Tr(s)?r.push("".concat(ed(i),":"),s,";"):wi(s)?r.push.apply(r,xi(xi(["".concat(i," {")],ah(s),!1),["}"],!1)):r.push("".concat(ed(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Lv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gn(e,t,n,r){if(lh(e))return[];if(Su(e))return[".".concat(e.styledComponentId)];if(Tr(e)){if(!Tr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return gn(i,t,n,r)}var s;return e instanceof a0?n?(e.inject(n,r),[e.getName(r)]):[e]:wi(e)?ah(e):Array.isArray(e)?Array.prototype.concat.apply(Po,e.map(function(o){return gn(o,t,n,r)})):[e.toString()]}function uh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Tr(n)&&!Su(n))return!1}return!0}var c0=Zp(Co),d0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&uh(t),this.componentId=n,this.baseHash=ir(c0,n),this.baseStyle=r,Xs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=In(i,this.staticRulesId);else{var s=ha(gn(this.rules,t,n,r)),o=pa(ir(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=In(i,o),this.staticRulesId=o}else{for(var l=ir(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var h=ha(gn(p,t,n,r));l=ir(l,h+c),u+=h}}if(u){var g=pa(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=In(i,g)}}return i},e}(),ku=Q.createContext(void 0);ku.Consumer;var il={};function f0(e,t,n){var r=Su(e),i=e,s=!rl(e),o=t.attrs,a=o===void 0?Po:o,l=t.componentId,u=l===void 0?function(S,E){var C=typeof S!="string"?"sc":Yc(S);il[C]=(il[C]||0)+1;var P="".concat(C,"-").concat(Jp(Co+C+il[C]));return E?"".concat(E,"-").concat(P):P}(t.displayName,t.parentComponentId):l,c=t.displayName,p=c===void 0?function(S){return rl(S)?"styled.".concat(S):"Styled(".concat(Dv(S),")")}(e):c,h=t.displayName&&t.componentId?"".concat(Yc(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;x=function(S,E){return y(S,E)&&T(S,E)}}else x=y}var f=new d0(n,h,r?i.componentStyle:void 0);function d(S,E){return function(C,P,I){var N=C.attrs,z=C.componentStyle,R=C.defaultProps,L=C.foldedComponentIds,j=C.styledComponentId,U=C.target,X=Q.useContext(ku),ne=va(),ce=C.shouldForwardProp||ne.shouldForwardProp,b=Xp(P,X,R)||kr,F=function(Et,Me,dt){for(var At,kt=Ne(Ne({},Me),{className:void 0,theme:dt}),En=0;En<Et.length;En+=1){var kn=Tr(At=Et[En])?At(kt):At;for(var Tt in kn)kt[Tt]=Tt==="className"?In(kt[Tt],kn[Tt]):Tt==="style"?Ne(Ne({},kt[Tt]),kn[Tt]):kn[Tt]}return Me.className&&(kt.className=In(kt.className,Me.className)),kt}(N,P,b),W=F.as||U,J={};for(var q in F)F[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&F.theme===b||(q==="forwardedAs"?J.as=F.forwardedAs:ce&&!ce(q,W)||(J[q]=F[q]));var St=function(Et,Me){var dt=va(),At=Et.generateAndInjectStyles(Me,dt.styleSheet,dt.stylis);return At}(z,F),Be=In(L,j);return St&&(Be+=" "+St),F.className&&(Be+=" "+F.className),J[rl(W)&&!Kp.has(W)?"class":"className"]=Be,J.ref=I,G.createElement(W,J)}(m,S,E)}d.displayName=p;var m=Q.forwardRef(d);return m.attrs=g,m.componentStyle=f,m.displayName=p,m.shouldForwardProp=x,m.foldedComponentIds=r?In(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(E){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var I=0,N=C;I<N.length;I++)ma(E,N[I],!0);return E}({},i.defaultProps,S):S}}),Eu(m,function(){return".".concat(m.styledComponentId)}),s&&rh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function td(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var nd=function(e){return Object.assign(e,{isCss:!0})};function ch(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Tr(e)||wi(e))return nd(gn(td(Po,xi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?gn(r):nd(gn(td(r,t)))}function ya(e,t,n){if(n===void 0&&(n=kr),!t)throw Pi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,ch.apply(void 0,xi([i],s,!1)))};return r.attrs=function(i){return ya(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ya(e,t,Ne(Ne({},n),i))},r}var dh=function(e){return ya(f0,e)},O=dh;Kp.forEach(function(e){O[e]=dh(e)});var p0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=uh(t),Xs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(ha(gn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Xs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function h0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ch.apply(void 0,xi([e],t,!1)),i="sc-global-".concat(Jp(JSON.stringify(r))),s=new p0(r,i),o=function(l){var u=va(),c=Q.useContext(ku),p=Q.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(p,l,u.styleSheet,c,u.stylis),Q.useLayoutEffect(function(){if(!u.styleSheet.server)return a(p,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(p,u.styleSheet)}},[p,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,p,h){if(s.isStatic)s.renderStyles(l,Av,c,h);else{var g=Ne(Ne({},u),{theme:Xp(u,p,o.defaultProps)});s.renderStyles(l,g,c,h)}}return Q.memo(o)}const m0=O.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 767px) {
    min-width: 360px;
    max-width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1280px) {
    /* @media (min-width: 1280px) { */
    width: 1280px;
    /* width: 1280px; */
    /* padding: 0 100px; */
    padding: 0 20px;
  }
`,g0=({children:e})=>v.jsx(m0,{children:e}),me="/vite-ecosolution/assets/sprite-7a3f5b15.svg",v0=O.a`
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
`,y0=O.p`
  color: #173d33;
  font-family: "FONTSPRING DEMO - All Round Gothic Thick";
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;
`,x0=O.p`
  width: 60px;

  color: #97d28b;
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`,w0=O.span`
  color: "#173d33";
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
`,fh=({$scrolled:e})=>v.jsxs(v0,{href:"/",target:"blank",$scrolled:e??null,children:[v.jsx("svg",{width:31,height:18,children:v.jsx("use",{href:me+"#icon-logo"})}),v.jsx(y0,{children:"ecosolution"}),v.jsxs(x0,{children:[v.jsx(w0,{children:"green"}),"ergy for life"]})]}),S0=O.button`
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
`,xa=({textContent:e,followTo:t})=>v.jsxs(S0,{onClick:t,children:[e,v.jsx("svg",{width:14,height:14,children:v.jsx("use",{href:me+"#icon-group-31"})})]}),E0=e=>{G.useEffect(()=>{const t=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e])},k0=O.div`
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
`,T0=({handleToggleModal:e,children:t})=>{E0(e);const n=r=>{r.target===r.currentTarget&&e()};return v.jsx(k0,{onClick:n,className:"absolute top-0 left-0 z-10 w-screen h-screen bg-transparent",children:t})},C0=O.button`
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
`,P0=O.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,_0=O.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`,z0=({handleToggleModal:e})=>v.jsx(C0,{onClick:e,children:v.jsxs(P0,{children:[v.jsx("svg",{width:20,height:20,children:v.jsx("use",{href:me+"#icon-close-menu"})}),v.jsx(_0,{children:"close"})]})}),_i=e=>{const t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-76,behavior:"smooth"})},I0=O.button`
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
`,O0=({label:e,sectionName:t,handleToggleModal:n})=>{const r=()=>{_i(t),n()};return v.jsxs(I0,{onClick:r,children:[e,v.jsx("svg",{width:16,height:16,children:v.jsx("use",{xlinkHref:me+"#icon-arrow-right-up"})})]})},M0=O.div`
  display: flex;
  gap: ${({$space:e})=>`${e}px`};
`,rd=O.svg`
  cursor: pointer;
  stroke: ${({$colorplan:e})=>e==="primary"?"#173d33":"#ffffff"};
  fill: ${({$colorplan:e})=>e==="primary"?"#173d33":"#ffffff"};

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`,Tu=({colorplan:e,space:t})=>v.jsxs(M0,{$space:t,children:[v.jsx("a",{href:"https://www.facebook.com/",target:"blank",children:v.jsx(rd,{width:24,height:24,$colorplan:e,children:v.jsx("use",{href:me+"#icon-facebook"})})}),v.jsx("a",{href:"https://www.instagram.com/",target:"blank",children:v.jsx(rd,{width:24,height:24,$colorplan:e,children:v.jsx("use",{href:me+"#icon-instagram"})})})]}),Ue={MAIN:"main",ABOUT:"about",CASES:"cases",QUESTIONS:"questions",CONTACT:"contact"},L0=[{id:1,label:"Main",sectionName:Ue.MAIN},{id:2,label:"About",sectionName:Ue.ABOUT},{id:3,label:"Cases",sectionName:Ue.CASES},{id:4,label:"FAQ",sectionName:Ue.QUESTIONS},{id:5,label:"Contact",sectionName:Ue.CONTACT}],j0=O.div`
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

  @media (min-width: 768px) {
    top: 42px;
    right: 30px;
    height: calc(100% - 84px);
  }

  @media (min-width: 1280px) {
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
`,b0=({handleToggleModal:e})=>v.jsx(T0,{handleToggleModal:e,children:v.jsxs(j0,{children:[v.jsx(z0,{handleToggleModal:e}),v.jsx(A0,{children:L0.map(t=>v.jsx(O0,{label:t.label,sectionName:t.sectionName,handleToggleModal:e},t.id))}),v.jsx(N0,{children:v.jsx(Tu,{colorplan:"secondary",space:8})})]})}),F0=O.button`
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
`,D0=()=>{const[e,t]=G.useState(!1),n=()=>{t(r=>!r)};return v.jsxs("div",{children:[v.jsx(F0,{onClick:n,children:v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-menu",stroke:"#292D32"})})}),e&&v.jsx(b0,{handleToggleModal:n})]})},ph=(e,t)=>{const n=G.useCallback(()=>window.innerWidth<e?"mobile":window.innerWidth<t?"tablet":"desktop",[t,e]),[r,i]=G.useState(()=>n());return G.useEffect(()=>{const s=()=>i(n());return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[n]),r},R0=O.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 11px;
  width: 100%;
  margin: 0 auto;
  padding: 36px 20px 0;
  background: #f3f5fa;

  @media (max-width: 767px) {
    min-width: 360px;
    max-width: 480px;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 709px;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    width: 1240px;
    padding-top: 24px;
  }
`,$0=O.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`,V0=()=>{const[e,t]=G.useState(!1);return G.useEffect(()=>{const n=()=>{const r=window.scrollY>0;t(r)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e},B0=()=>{const e=ph(768,1440),t=V0(),n=()=>{_i(Ue.CONTACT)};return v.jsxs(R0,{children:[v.jsx(fh,{$scrolled:t}),v.jsxs($0,{children:[v.jsx(D0,{}),e!=="mobile"&&v.jsx(xa,{textContent:"Get in touch",followTo:n})]})]})},W0=O.button`
  display: flex;
  /* width: 143px; */
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

  @media (min-width: 768px) {
    margin: 0;
  }
`,U0=O.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  background: #97d28b;
`,hh=({type:e,textContent:t,followTo:n})=>v.jsxs(W0,{type:e,onClick:n,children:[t,v.jsx(U0,{children:v.jsx("svg",{width:14,height:14,children:v.jsx("use",{href:me+"#icon-arrow-right"})})})]}),H0=O.section`
  margin-top: 222px;

  @media (min-width: 768px) {
    margin-top: 240px;
  }

  @media (min-width: 1280px) {
    margin-top: 264px;
  }
`,G0=O.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  border-bottom: 1px solid #97d28b;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 65px;
    padding-bottom: 26px;
  }

  @media (min-width: 1280px) {
    gap: 296px;
    padding-bottom: 28px;
  }
`,Q0=O.h1`
  color: #173d33;
  font-family: "Oswald";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    width: 100%;
    min-width: 320px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media (min-width: 1280px) {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`,Y0=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 43px;
  }

  @media (min-width: 1280px) {
    gap: 20px;
  }
`,X0=O.p`
  margin-top: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 342px;

    text-align: start;
  }

  @media (min-width: 1280px) {
    width: 363px;
  }
`,K0=O.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    gap: 0;
    margin-top: 16px;
    margin-bottom: 40px;
  }
`,q0=O.address`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Z0=O.p`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }
`,J0=O.p`
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 77px;

    text-align: start;
  }

  @media (min-width: 1280px) {
    margin-left: 492px;
  }
`,ey=O.p`
  display: none;

  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
  }
`,ty="/vite-ecosolution/assets/turbine-mob-0dfea615.webp",ny="/vite-ecosolution/assets/turbine-2xmob-40a58984.webp",ry="/vite-ecosolution/assets/turbine-tabl-dbe8aade.webp",iy="/vite-ecosolution/assets/turbine-2xtabl-344a54f0.webp",sy="/vite-ecosolution/assets/turbine-desk-43d5d924.webp",oy="/vite-ecosolution/assets/turbine-2xdesk-c8e6de3f.webp",mh=O.picture`
  @media (max-width: 767px) {
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`,ly=()=>v.jsxs(mh,{children:[v.jsx("source",{srcSet:`${ty} 1x, ${ny} 2x`,media:"(max-width: 767px)"}),v.jsx("source",{srcSet:`${ry} 1x, ${iy} 2x`,media:"(min-width: 768px) and (max-width: 1279px)"}),v.jsx("source",{srcSet:`${sy} 1x, ${oy} 2x`,media:"(min-width: 1280px)"}),v.jsx("img",{src:"/src/assets/AboutSectionImages/turbine-desk.webp",alt:"turbine"})]}),ay=()=>{const e=()=>{_i(Ue.CASES)};return v.jsxs(H0,{id:Ue.MAIN,children:[v.jsxs(G0,{children:[v.jsx(Q0,{children:"renewable energy for any task"}),v.jsxs(Y0,{children:[v.jsx(X0,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),v.jsx(hh,{type:"button",textContent:"Learn More",followTo:e})]})]}),v.jsxs(K0,{children:[v.jsxs(q0,{children:[v.jsx(Z0,{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),v.jsx(J0,{children:"office@ecosolution.com"})]}),v.jsx(ey,{children:"ecosolution © 2023"})]}),v.jsx(ly,{})]})},uy=O.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;

  @media (min-width: 768px) {
    gap: 100px;
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    gap: 122px;
    margin-top: 120px;
  }
`,cy=O.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 82px;
  }
  @media (min-width: 1280px) {
    gap: 254px;
  }
`,dy=O.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 272px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1280px) {
    width: 365px;

    font-size: 48px;
    line-height: 48px;
  }
`,fy=O.p`
  margin-top: 24px;

  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media (min-width: 768px) {
    /* 342px + 11px */
    width: 353px;
    margin-top: 0;
    padding-left: 11px;

    border-left: 1px solid #97d28b;
  }

  @media (min-width: 1280px) {
    width: 620px;
    padding-left: 161px;
  }
`,py=O.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  /* @media (max-width: 767px) {
    width: 320px;
    justify-self: center;
    align-self: center;
  } */

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Xi=O.li`
  /* width: 148px; */
  @media (max-width: 767px) {
    /* width: 320px;
    justify-self: center;
    align-self: center; */
  }
  /* height: 197px; */
  flex-shrink: 0;
  padding: 12px;

  background: #eaedf1;

  @media (min-width: 768px) {
    width: 159px;
  }

  @media (min-width: 1280px) {
    width: 274px;
    height: 339px;
    padding: 48px 24px;
  }
`,id=O.li`
  display: none;
  @media (min-width: 768px) {
    display: block;
    grid-column: span 2;
  }
`,Ki=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  margin-bottom: 12px;

  border-bottom: 1px solid #97d28b;

  @media (min-width: 768px) {
    padding-bottom: 51px;
  }

  @media (min-width: 1280px) {
    padding-bottom: 94px;
    margin-bottom: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,qi=O.h3`
  display: flex;
  flex-direction: column;

  color: #173d33;
  font-family: "Oswald";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
`,Zi=O.p`
  color: #173d33;
  text-align: justify;
  font-family: "Fira Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`,hy="/vite-ecosolution/assets/wind-farms-tabl-f682e3a7.webp",my="/vite-ecosolution/assets/wind-farms-2xtabl-2a8c5771.webp",sd="/vite-ecosolution/assets/wind-farms-desk-c8152f55.webp",gy="/vite-ecosolution/assets/wind-farms-2xdesk-837e6b69.webp",vy=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${hy} 1x, ${my} 2x`,media:"(min-width: 768px) and (max-width: 1279px)"}),v.jsx("source",{srcSet:`${sd} 1x, ${gy} 2x`,media:"(min-width: 1280px)"}),v.jsx("img",{src:`${sd}`,alt:"wind-farms"})]}),yy="/vite-ecosolution/assets/solar-panels-tabl-ef4daad0.webp",xy="/vite-ecosolution/assets/solar-panels-2xtabl-6d126731.webp",od="/vite-ecosolution/assets/solar-panels-desk-40346a35.webp",wy="/vite-ecosolution/assets/solar-panels-2xdesk-99c6706c.webp",Sy=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${yy} 1x, ${xy} 2x`,media:"(min-width: 768px) and (max-width: 1279px)"}),v.jsx("source",{srcSet:`${od} 1x, ${wy} 2x`,media:"(min-width: 1280px)"}),v.jsx("img",{src:`${od}`,alt:"solar-panels"})]}),Ey=()=>v.jsxs(uy,{id:Ue.ABOUT,children:[v.jsxs(cy,{children:[v.jsx(dy,{children:"Main values of our company"}),v.jsx(fy,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]}),v.jsxs(py,{children:[v.jsxs(Xi,{children:[v.jsxs(Ki,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-maximize-circle",fill:"transparent",stroke:"#173D33"})}),v.jsx(qi,{children:"Openness"})]}),v.jsx(Zi,{children:"to the world, people, new ideas and projects"})]}),v.jsxs(Xi,{children:[v.jsxs(Ki,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-global-edit",fill:"transparent",stroke:"#173D33"})}),v.jsx(qi,{children:"Responsibility"})]}),v.jsx(Zi,{children:"we are aware that the results of our work have an impact on our lives and the lives of future generations"})]}),v.jsx(id,{children:v.jsx(vy,{})}),v.jsx(id,{children:v.jsx(Sy,{})}),v.jsxs(Xi,{children:[v.jsxs(Ki,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-cpu-charge",fill:"transparent",stroke:"#173D33"})}),v.jsx(qi,{children:"Innovation"})]}),v.jsx(Zi,{children:"we use the latest technology to implement non-standard solutions"})]}),v.jsxs(Xi,{children:[v.jsxs(Ki,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-ranking",fill:"transparent",stroke:"#173D33"})}),v.jsx(qi,{children:"Quality"})]}),v.jsx(Zi,{children:"we do not strive to be the first among others, but we want to be the best in our business"})]})]})]}),ky=()=>{const[e,t]=G.useState(1134147814),n=G.useRef(null);return G.useEffect(()=>(n.current=setInterval(()=>{t(r=>r+=1)},1e3),()=>{n.current&&clearInterval(n.current)}),[]),e},Ty=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),Cy=O.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`,Py=O.h2`
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

  @media (min-width: 768px) {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1280px) {
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

    @media (min-width: 1280px) {
      margin: 16px auto 17px;
    }
  }
`,_y=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1280px) {
    margin-top: 17px;
  }
`,zy=O.p`
  color: #97d28b;
  text-align: center;
  font-family: "Oswald";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`,Iy=O.span`
  color: #173d33;
  text-align: center;
  font-family: "Oswald";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`,Oy=()=>{const e=ky();return v.jsxs(Cy,{children:[v.jsx(Py,{children:"Electricity we produced for all time"}),v.jsxs(_y,{children:[v.jsx(zy,{children:Ty(e)}),v.jsx(Iy,{children:"kWh"})]})]})};function ld(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Cu(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:ld(t[n])&&ld(e[n])&&Object.keys(t[n]).length>0&&Cu(e[n],t[n])})}const gh={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ir(){const e=typeof document<"u"?document:{};return Cu(e,gh),e}const My={document:gh,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function nt(){const e=typeof window<"u"?window:{};return Cu(e,My),e}function Ly(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function jy(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function wa(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Ks(){return Date.now()}function Ay(e){const t=nt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Ny(e,t){t===void 0&&(t="x");const n=nt();let r,i,s;const o=Ay(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ji(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function by(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ke(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!by(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const a=i[s],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(Ji(e[a])&&Ji(r[a])?r[a].__swiper__?e[a]=r[a]:Ke(e[a],r[a]):!Ji(e[a])&&Ji(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Ke(e[a],r[a])):e[a]=r[a])}}}return e}function es(e,t,n){e.style.setProperty(t,n)}function vh(e){let{swiper:t,targetPosition:n,side:r}=e;const i=nt(),s=-t.translate;let o=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>s?"next":"prev",c=(h,g)=>u==="next"&&h>=g||u==="prev"&&h<=g,p=()=>{a=new Date().getTime(),o===null&&(o=a);const h=Math.max(Math.min((a-o)/l,1),0),g=.5-Math.cos(h*Math.PI)/2;let x=s+g*(n-s);if(c(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),c(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function qs(e){try{console.warn(e);return}catch{}}function Zs(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Ly(t)),n}function Fy(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Dy(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function on(e,t){return nt().getComputedStyle(e,null).getPropertyValue(t)}function ad(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ry(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function ud(e,t,n){const r=nt();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let sl;function $y(){const e=nt(),t=Ir();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function yh(){return sl||(sl=$y()),sl}let ol;function Vy(e){let{userAgent:t}=e===void 0?{}:e;const n=yh(),r=nt(),i=r.navigator.platform,s=t||r.navigator.userAgent,o={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&x&&n.touch&&y.indexOf(`${a}x${l}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),x=!1),u&&!g&&(o.os="android",o.android=!0),(c||h||p)&&(o.os="ios",o.ios=!0),o}function By(e){return e===void 0&&(e={}),ol||(ol=Vy(e)),ol}let ll;function Wy(){const e=nt();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,s]=r.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));t=i<16||i===16&&s<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function Uy(){return ll||(ll=Wy()),ll}function Hy(e){let{swiper:t,on:n,emit:r}=e;const i=nt();let s=null,o=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(p=>{o=i.requestAnimationFrame(()=>{const{width:h,height:g}=t;let x=h,y=g;p.forEach(T=>{let{contentBoxSize:f,contentRect:d,target:m}=T;m&&m!==t.el||(x=d?d.width:(f[0]||f).inlineSize,y=d?d.height:(f[0]||f).blockSize)}),(x!==h||y!==g)&&a()})}),s.observe(t.el))},u=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function Gy(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],o=nt(),a=function(c,p){p===void 0&&(p={});const h=o.MutationObserver||o.WebkitMutationObserver,g=new h(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});g.observe(c,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const c=Ry(t.hostEl);for(let p=0;p<c.length;p+=1)a(c[p])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},u=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var Qy={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function Yy(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(on(r,"padding-left")||0,10)-parseInt(on(r,"padding-right")||0,10),n=n-parseInt(on(r,"padding-top")||0,10)-parseInt(on(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function Xy(){const e=this;function t(z,R){return parseFloat(z.getPropertyValue(e.getDirectionLabel(R))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=Ot(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:c.length;let h=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let T=n.slidesOffsetAfter;typeof T=="function"&&(T=n.slidesOffsetAfter.call(e));const f=e.snapGrid.length,d=e.slidesGrid.length;let m=n.spaceBetween,S=-y,E=0,C=0;if(typeof s>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*s:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,c.forEach(z=>{o?z.style.marginLeft="":z.style.marginRight="",z.style.marginBottom="",z.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(es(r,"--swiper-centered-offset-before",""),es(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let I;const N=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(z=>typeof n.breakpoints[z].slidesPerView<"u").length>0;for(let z=0;z<p;z+=1){I=0;let R;if(c[z]&&(R=c[z]),P&&e.grid.updateSlide(z,R,c),!(c[z]&&on(R,"display")==="none")){if(n.slidesPerView==="auto"){N&&(c[z].style[e.getDirectionLabel("width")]="");const L=getComputedStyle(R),j=R.style.transform,U=R.style.webkitTransform;if(j&&(R.style.transform="none"),U&&(R.style.webkitTransform="none"),n.roundLengths)I=e.isHorizontal()?ud(R,"width",!0):ud(R,"height",!0);else{const X=t(L,"width"),ne=t(L,"padding-left"),ce=t(L,"padding-right"),b=t(L,"margin-left"),F=t(L,"margin-right"),W=L.getPropertyValue("box-sizing");if(W&&W==="border-box")I=X+b+F;else{const{clientWidth:J,offsetWidth:q}=R;I=X+ne+ce+b+F+(q-J)}}j&&(R.style.transform=j),U&&(R.style.webkitTransform=U),n.roundLengths&&(I=Math.floor(I))}else I=(s-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(I=Math.floor(I)),c[z]&&(c[z].style[e.getDirectionLabel("width")]=`${I}px`);c[z]&&(c[z].swiperSlideSize=I),x.push(I),n.centeredSlides?(S=S+I/2+E/2+m,E===0&&z!==0&&(S=S-s/2-m),z===0&&(S=S-s/2-m),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),C%n.slidesPerGroup===0&&h.push(S),g.push(S)):(n.roundLengths&&(S=Math.floor(S)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&h.push(S),g.push(S),S=S+I+m),e.virtualSize+=I+m,E=I,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+T,o&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),P&&e.grid.updateWrapperSize(I,h),!n.centeredSlides){const z=[];for(let R=0;R<h.length;R+=1){let L=h[R];n.roundLengths&&(L=Math.floor(L)),h[R]<=e.virtualSize-s&&z.push(L)}h=z,Math.floor(e.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-s)}if(l&&n.loop){const z=x[0]+m;if(n.slidesPerGroup>1){const R=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),L=z*n.slidesPerGroup;for(let j=0;j<R;j+=1)h.push(h[h.length-1]+L)}for(let R=0;R<e.virtual.slidesBefore+e.virtual.slidesAfter;R+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+z),g.push(g[g.length-1]+z),e.virtualSize+=z}if(h.length===0&&(h=[0]),m!==0){const z=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((R,L)=>!n.cssMode||n.loop?!0:L!==c.length-1).forEach(R=>{R.style[z]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let z=0;x.forEach(L=>{z+=L+(m||0)}),z-=m;const R=z-s;h=h.map(L=>L<=0?-y:L>R?R+T:L)}if(n.centerInsufficientSlides){let z=0;if(x.forEach(R=>{z+=R+(m||0)}),z-=m,z<s){const R=(s-z)/2;h.forEach((L,j)=>{h[j]=L-R}),g.forEach((L,j)=>{g[j]=L+R})}}if(Object.assign(e,{slides:c,snapGrid:h,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){es(r,"--swiper-centered-offset-before",`${-h[0]}px`),es(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const z=-e.snapGrid[0],R=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(L=>L+z),e.slidesGrid=e.slidesGrid.map(L=>L+R)}if(p!==u&&e.emit("slidesLengthChange"),h.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const z=`${n.containerModifierClass}backface-hidden`,R=e.el.classList.contains(z);p<=n.maxBackfaceHiddenSlides?R||e.el.classList.add(z):R&&e.el.classList.remove(z)}}function Ky(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const a=t.activeIndex+s;if(a>t.slides.length&&!r)break;n.push(o(a))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const a=n[s].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function qy(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function Zy(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const u=r[l];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+a),h=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+a),g=-(o-c),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l];(g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),y&&r[l].classList.add(n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-h:h}}function Jy(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,u=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;s=c||i<=0,o=p||i>=1,c&&(i=0),p&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[c],g=t.slidesGrid[p],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?a=(y-h)/x:a=(y+x-g)/x,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!u&&t.emit("reachEnd toEdge"),(l&&!s||u&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function e1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,a=p=>Ot(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];t.forEach(p=>{p.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,u,c;if(s)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${p}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(p=>p.column===i)[0],c=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(l.classList.add(n.slideActiveClass),o?(c&&c.classList.add(n.slideNextClass),u&&u.classList.add(n.slidePrevClass)):(c=Dy(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),c&&c.classList.add(n.slideNextClass),u=Fy(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass))),e.emitSlidesClasses()}const Ss=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},al=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Sa=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,a=[o-t];a.push(...Array.from({length:t}).map((l,u)=>o+r+u)),e.slides.forEach((l,u)=>{a.includes(l.column)&&al(e,u)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=s+t;o+=1){const a=(o%n+n)%n;(a<i||a>s)&&al(e,a)}else for(let o=Math.max(i-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&(o>s||o<i)&&al(e,o)};function t1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function n1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l=e,u;const c=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=t1(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===s&&!t.params.loop){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=c(l);else if(p){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),h=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?h=parseInt(g,10):h=l}else h=l;Object.assign(t,{previousSnapIndex:a,snapIndex:u,previousRealIndex:o,realIndex:h,previousIndex:s,activeIndex:l}),t.initialized&&Sa(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function r1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let s=!1,o;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){s=!0,o=a;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var i1={updateSize:Yy,updateSlides:Xy,updateAutoHeight:Ky,updateSlidesOffset:qy,updateSlidesProgress:Zy,updateProgress:Jy,updateSlidesClasses:e1,updateActiveIndex:n1,updateClickedSlide:r1};function s1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Ny(s,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function o1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let c;const p=n.maxTranslate()-n.minTranslate();p===0?c=0:c=(e-n.minTranslate())/p,c!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function l1(){return-this.snapGrid[0]}function a1(){return-this.snapGrid[this.snapGrid.length-1]}function u1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,s.updateProgress(c),o.cssMode){const p=s.isHorizontal();if(t===0)a[p?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return vh({swiper:s,targetPosition:-c,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var c1={getTranslate:s1,setTranslate:o1,minTranslate:l1,maxTranslate:a1,translateTo:u1};function d1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function xh(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:o}=t;let a=r;if(a||(s>o?a="next":s<o?a="prev":a="reset"),t.emit(`transition${i}`),n&&s!==o){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function f1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),xh({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function p1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),xh({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var h1={setTransition:d1,transitionStart:f1,transitionEnd:p1};function m1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:x}=s;if(s.animating&&a.preventInteractionOnTransition||!x&&!r&&!i)return!1;const y=Math.min(s.params.slidesPerGroupSkip,o);let T=y+Math.floor((o-y)/s.params.slidesPerGroup);T>=l.length&&(T=l.length-1);const f=-l[T];if(a.normalizeSlideIndex)for(let m=0;m<u.length;m+=1){const S=-Math.floor(f*100),E=Math.floor(u[m]*100),C=Math.floor(u[m+1]*100);typeof u[m+1]<"u"?S>=E&&S<C-(C-E)/2?o=m:S>=E&&S<C&&(o=m+1):S>=E&&(o=m)}if(s.initialized&&o!==p&&(!s.allowSlideNext&&(h?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(p||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let d;if(o>p?d="next":o<p?d="prev":d="reset",h&&-f===s.translate||!h&&f===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(f),d!=="reset"&&(s.transitionStart(n,d),s.transitionEnd(n,d)),!1;if(a.cssMode){const m=s.isHorizontal(),S=h?f:-f;if(t===0){const E=s.virtual&&s.params.virtual.enabled;E&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),E&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[m?"scrollLeft":"scrollTop"]=S})):g[m?"scrollLeft":"scrollTop"]=S,E&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return vh({swiper:s,targetPosition:S,side:m?"left":"top"}),!0;g.scrollTo({[m?"left":"top"]:S,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(f),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,d),t===0?s.transitionEnd(n,d):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(S){!s||s.destroyed||S.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,d))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function g1(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this,s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let a;if(s){const h=o*i.params.grid.rows;a=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else a=i.getSlideIndexByData(o);const l=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let c=i.params.slidesPerView;c==="auto"?c=i.slidesPerViewDynamic():(c=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&c%2===0&&(c=c+1));let p=l-a<c;if(u&&(p=p||a<Math.ceil(c/2)),p){const h=u?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?a+1:a-l+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(s){const h=o*i.params.grid.rows;o=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function v1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,u=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!u&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function y1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:u}=r;if(!l)return r;const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const g=h(p),x=s.map(f=>h(f));let y=s[x.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let f;s.forEach((d,m)=>{g>=d&&(f=m)}),typeof f<"u"&&(y=s[f>0?f-1:f])}let T=0;if(typeof y<"u"&&(T=o.indexOf(y),T<0&&(T=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(T=T-r.slidesPerViewDynamic("previous",!0)+1,T=Math.max(T,0))),i.rewind&&r.isBeginning){const f=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(f,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(T,e,t,n)}),!0;return r.slideTo(T,e,t,n)}function x1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function w1(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function S1(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(Ot(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),wa(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(Ot(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),wa(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var E1={slideTo:m1,slideToLoop:g1,slideNext:v1,slidePrev:y1,slideReset:x1,slideToClosest:w1,slideToClickedSlide:S1};function k1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{Ot(r,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},s=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),a=t.slides.length%o!==0,l=s&&t.slides.length%n.grid.rows!==0,u=c=>{for(let p=0;p<c;p+=1){const h=t.isElement?Zs("swiper-slide",[n.slideBlankClass]):Zs("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(h)}};if(a){if(n.loopAddBlankSlides){const c=o-t.slides.length%o;u(c),t.recalcSlides(),t.updateSlides()}else qs("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-t.slides.length%n.grid.rows;u(c),t.recalcSlides(),t.updateSlides()}else qs("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function T1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:p,slidesEl:h,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=p,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const T=g.slidesPerGroupAuto?y:g.slidesPerGroup;let f=T;f%T!==0&&(f+=T-f%T),f+=g.loopAdditionalSlides,l.loopedSlides=f;const d=l.grid&&g.grid&&g.grid.rows>1;u.length<y+f?qs("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&g.grid.fill==="row"&&qs("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],S=[];let E=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(u.filter(j=>j.classList.contains(g.slideActiveClass))[0]):E=s;const C=r==="next"||!r,P=r==="prev"||!r;let I=0,N=0;const z=d?Math.ceil(u.length/g.grid.rows):u.length,L=(d?u[s].column:s)+(x&&typeof i>"u"?-y/2+.5:0);if(L<f){I=Math.max(f-L,T);for(let j=0;j<f-L;j+=1){const U=j-Math.floor(j/z)*z;if(d){const X=z-U-1;for(let ne=u.length-1;ne>=0;ne-=1)u[ne].column===X&&m.push(ne)}else m.push(z-U-1)}}else if(L+y>z-f){N=Math.max(L-(z-f*2),T);for(let j=0;j<N;j+=1){const U=j-Math.floor(j/z)*z;d?u.forEach((X,ne)=>{X.column===U&&S.push(ne)}):S.push(U)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&m.forEach(j=>{u[j].swiperLoopMoveDOM=!0,h.prepend(u[j]),u[j].swiperLoopMoveDOM=!1}),C&&S.forEach(j=>{u[j].swiperLoopMoveDOM=!0,h.append(u[j]),u[j].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():d&&(m.length>0&&P||S.length>0&&C)&&l.slides.forEach((j,U)=>{l.grid.updateSlide(U,j,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&P){if(typeof t>"u"){const j=l.slidesGrid[E],X=l.slidesGrid[E+I]-j;a?l.setTranslate(l.translate-X):(l.slideTo(E+I,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-X,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-X))}else if(i){const j=d?m.length/g.grid.rows:m.length;l.slideTo(l.activeIndex+j,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&C)if(typeof t>"u"){const j=l.slidesGrid[E],X=l.slidesGrid[E-N]-j;a?l.setTranslate(l.translate-X):(l.slideTo(E-N,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-X,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-X))}else{const j=d?S.length/g.grid.rows:S.length;l.slideTo(l.activeIndex-j,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=p,l.controller&&l.controller.control&&!o){const j={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...j,slideTo:U.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...j,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function C1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var P1={loopCreate:k1,loopFix:T1,loopDestroy:C1};function _1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function z1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var I1={setGrabCursor:_1,unsetGrabCursor:z1};function O1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Ir()||r===nt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function cd(e,t,n){const r=nt(),{params:i}=e,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function M1(e){const t=this,n=Ir();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){cd(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=t;if(!a||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(l=c[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(h?O1(p,l):l.closest(p))){t.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const g=o.currentX,x=o.currentY;if(!cd(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=x,i.touchStartTime=Ks(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const T=y&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||T)&&!l.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function L1(e){const t=Ir(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=u.pageX,p=u.pageY;if(l.preventedByNestedSwiper){s.startX=c,s.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p}),r.touchStartTime=Ks());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=c,s.currentY=p;const h=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(h**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:h*h+g*g>=25&&(C=Math.atan2(Math.abs(g),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?h:g,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(x=Math.abs(x)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),s.diff=x,x*=i.touchRatio,o&&(x=-x,y=-y);const T=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const f=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(f&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&T!==n.touchesDirection&&f&&d&&Math.abs(x)>=1){Object.assign(s,{startX:c,startY:p,currentX:c,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),x>0?(f&&d&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**E))):x<0&&(f&&d&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**E))),S&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function j1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(E=>E.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:u,enabled:c}=t;if(!c||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=Ks(),h=p-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),h<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Ks(),wa(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(o.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,T=t.slidesSizesGrid[0];for(let E=0;E<u.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof u[E+C]<"u"?(x||g>=u[E]&&g<u[E+C])&&(y=E,T=u[E+C]-u[E]):(x||g>=u[E])&&(y=E,T=u[u.length-1]-u[u.length-2])}let f=null,d=null;o.rewind&&(t.isBeginning?d=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const m=(g-u[y])/T,S=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(h>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?f:y+S):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+S):d!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(d):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+S):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:y+S),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:y))}}function dd(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function A1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function N1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function b1(e){const t=this;Ss(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function F1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const wh=(e,t)=>{const n=Ir(),{params:r,el:i,wrapperEl:s,device:o}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",dd,!0):e[u]("observerUpdate",dd,!0),i[l]("load",e.onLoad,{capture:!0})};function D1(){const e=this,{params:t}=e;e.onTouchStart=M1.bind(e),e.onTouchMove=L1.bind(e),e.onTouchEnd=j1.bind(e),e.onDocumentTouchStart=F1.bind(e),t.cssMode&&(e.onScroll=N1.bind(e)),e.onClick=A1.bind(e),e.onLoad=b1.bind(e),wh(e,"on")}function R1(){wh(this,"off")}var $1={attachEvents:D1,detachEvents:R1};const fd=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function V1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||e.originalParams,u=fd(e,r),c=fd(e,l),p=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(f=>{if(typeof l[f]>"u")return;const d=r[f]&&r[f].enabled,m=l[f]&&l[f].enabled;d&&!m&&e[f].disable(),!d&&m&&e[f].enable()});const h=l.direction&&l.direction!==r.direction,g=r.loop&&(l.slidesPerView!==r.slidesPerView||h),x=r.loop;h&&n&&e.changeDirection(),Ke(e.params,l);const y=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!y?e.disable():!p&&y&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&T?(e.loopCreate(t),e.updateSlides()):x&&!T&&e.loopDestroy()),e.emit("breakpoint",l)}function B1(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=nt(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:u}=o[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var W1={setBreakpoint:V1,getBreakpoint:B1};function U1(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function H1(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=U1(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function G1(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var Q1={addClasses:H1,removeClasses:G1};function Y1(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var X1={checkOverflow:Y1},Ea={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function K1(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ke(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Ke(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ke(t,r)}}const ul={eventsEmitter:Qy,update:i1,translate:c1,transition:h1,slide:E1,loop:P1,grabCursor:I1,events:$1,breakpoints:W1,checkOverflow:X1,classes:Q1},cl={};let Pu=class Ft{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ke({},n),t&&!n.el&&(n.el=t);const o=Ir();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const c=[];return o.querySelectorAll(n.el).forEach(p=>{const h=Ke({},n,{el:p});c.push(new Ft(h))}),c}const a=this;a.__swiper__=!0,a.support=yh(),a.device=By({userAgent:n.userAgent}),a.browser=Uy(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(c=>{c({params:n,swiper:a,extendParams:K1(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Ke({},Ea,l);return a.params=Ke({},u,cl,n),a.originalParams=Ke({},a.params),a.passedParams=Ke({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(c=>{a.on(c,a.params.on[c])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=Ot(n,`.${r.slideClass}, swiper-slide`),s=ad(i[0]);return ad(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=Ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=s[u]?s[u].swiperSlideSize:0,h;for(let g=u+1;g<s.length;g+=1)s[g]&&!h&&(p+=s[g].swiperSlideSize,c+=1,p>l&&(h=!0));for(let g=u-1;g>=0;g-=1)s[g]&&!h&&(p+=s[g].swiperSlideSize,c+=1,p>l&&(h=!0))}else if(t==="current")for(let p=u+1;p<s.length;p+=1)(n?o[p]+a[p]-o[u]<l:o[p]-o[u]<l)&&(c+=1);else for(let p=u-1;p>=0;p-=1)o[u]-o[p]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Ss(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(o.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Ot(r,i())[0])();return!o&&n.params.createElements&&(o=Zs("div",n.params.wrapperClass),r.append(o),Ot(r,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||on(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||on(r,"direction")==="rtl"),wrongRTL:on(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Ss(n,s):s.addEventListener("load",o=>{Ss(n,o.target)})}),Sa(n),n.initialized=!0,Sa(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,jy(r)),r.destroyed=!0),null}static extendDefaults(t){Ke(cl,t)}static get extendedDefaults(){return cl}static get defaults(){return Ea}static installModule(t){Ft.prototype.__modules__||(Ft.prototype.__modules__=[]);const n=Ft.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Ft.installModule(n)),Ft):(Ft.installModule(t),Ft)}};Object.keys(ul).forEach(e=>{Object.keys(ul[e]).forEach(t=>{Pu.prototype[t]=ul[e][t]})});Pu.use([Hy,Gy]);const Sh=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Rn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function fr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Rn(t[r])&&Rn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:fr(e[r],t[r]):e[r]=t[r]})}function Eh(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function kh(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Th(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Ch(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function q1(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function Z1(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:a,paginationEl:l}=e;const u=i.filter(N=>N!=="children"&&N!=="direction"&&N!=="wrapperClass"),{params:c,pagination:p,navigation:h,scrollbar:g,virtual:x,thumbs:y}=t;let T,f,d,m,S,E,C,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(T=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(f=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(c.navigation||c.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(S=!0);const I=N=>{t[N]&&(t[N].destroy(),N==="navigation"?(t.isElement&&(t[N].prevEl.remove(),t[N].nextEl.remove()),c[N].prevEl=void 0,c[N].nextEl=void 0,t[N].prevEl=void 0,t[N].nextEl=void 0):(t.isElement&&t[N].el.remove(),c[N].el=void 0,t[N].el=void 0))};i.includes("loop")&&t.isElement&&(c.loop&&!r.loop?E=!0:!c.loop&&r.loop?C=!0:P=!0),u.forEach(N=>{if(Rn(c[N])&&Rn(r[N]))Object.assign(c[N],r[N]),(N==="navigation"||N==="pagination"||N==="scrollbar")&&"enabled"in r[N]&&!r[N].enabled&&I(N);else{const z=r[N];(z===!0||z===!1)&&(N==="navigation"||N==="pagination"||N==="scrollbar")?z===!1&&I(N):c[N]=r[N]}}),u.includes("controller")&&!f&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&x&&c.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&c.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&c.loop&&(P=!0),T&&y.init()&&y.update(!0),f&&(t.controller.control=c.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(c.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(c.scrollbar.el=a),g.init(),g.updateSize(),g.setTranslate()),S&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=t.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),t.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),s&&(c.navigation.nextEl=s),o&&(c.navigation.prevEl=o),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(E||P)&&t.loopDestroy(),(C||P)&&t.loopCreate(),t.update()}function J1(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};fr(n,Ea),n._emitClasses=!0,n.init=!1;const s={},o=Sh.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?Rn(e[l])?(n[l]={},i[l]={},fr(n[l],e[l]),fr(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:s[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:s,events:r}}function ex(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:a}=e;Eh(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),kh(t)&&s&&(a.params.pagination.el=s,a.originalParams.pagination.el=s),Th(t)&&o&&(a.params.scrollbar.el=o,a.originalParams.scrollbar.el=o),a.init(n)}function tx(e,t,n,r,i){const s=[];if(!t)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return Sh.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Rn(e[l])&&Rn(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?o(l):(u.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}),c.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}))}else e[l]!==t[l]&&o(l)}),s}const nx=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Js(){return Js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Js.apply(this,arguments)}function Ph(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function _h(e){const t=[];return Q.Children.toArray(e).forEach(n=>{Ph(n)?t.push(n):n.props&&n.props.children&&_h(n.props.children).forEach(r=>t.push(r))}),t}function rx(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(Ph(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=_h(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function ix(e,t,n){if(!n)return null;const r=c=>{let p=c;return c<0?p=t.length+c:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let c=a;c<l;c+=1)c>=s&&c<=o&&u.push(t[r(c)]);return u.map((c,p)=>Q.cloneElement(c,{swiper:e,style:i,key:`slide-${p}`}))}function ei(e,t){return typeof window>"u"?G.useEffect(e,t):G.useLayoutEffect(e,t)}const pd=G.createContext(null),sx=G.createContext(null),zh=G.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...a}=e===void 0?{}:e,l=!1;const[u,c]=G.useState("swiper"),[p,h]=G.useState(null),[g,x]=G.useState(!1),y=G.useRef(!1),T=G.useRef(null),f=G.useRef(null),d=G.useRef(null),m=G.useRef(null),S=G.useRef(null),E=G.useRef(null),C=G.useRef(null),P=G.useRef(null),{params:I,passedParams:N,rest:z,events:R}=J1(a),{slides:L,slots:j}=rx(s),U=()=>{x(!g)};Object.assign(I.on,{_containerClasses(F,W){c(W)}});const X=()=>{Object.assign(I.on,R),l=!0;const F={...I};if(delete F.wrapperClass,f.current=new Pu(F),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=L;const W={cache:!1,slides:L,renderExternal:h,renderExternalUpdate:!1};fr(f.current.params.virtual,W),fr(f.current.originalParams.virtual,W)}};T.current||X(),f.current&&f.current.on("_beforeBreakpoint",U);const ne=()=>{l||!R||!f.current||Object.keys(R).forEach(F=>{f.current.on(F,R[F])})},ce=()=>{!R||!f.current||Object.keys(R).forEach(F=>{f.current.off(F,R[F])})};G.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",U)}),G.useEffect(()=>{!y.current&&f.current&&(f.current.emitSlidesClasses(),y.current=!0)}),ei(()=>{if(t&&(t.current=T.current),!!T.current)return f.current.destroyed&&X(),ex({el:T.current,nextEl:S.current,prevEl:E.current,paginationEl:C.current,scrollbarEl:P.current,swiper:f.current},I),o&&o(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),ei(()=>{ne();const F=tx(N,d.current,L,m.current,W=>W.key);return d.current=N,m.current=L,F.length&&f.current&&!f.current.destroyed&&Z1({swiper:f.current,slides:L,passedParams:N,changedParams:F,nextEl:S.current,prevEl:E.current,scrollbarEl:P.current,paginationEl:C.current}),()=>{ce()}}),ei(()=>{nx(f.current)},[p]);function b(){return I.virtual?ix(f.current,L,p):L.map((F,W)=>Q.cloneElement(F,{swiper:f.current,swiperSlideIndex:W}))}return Q.createElement(r,Js({ref:T,className:Ch(`${u}${n?` ${n}`:""}`)},z),Q.createElement(sx.Provider,{value:f.current},j["container-start"],Q.createElement(i,{className:q1(I.wrapperClass)},j["wrapper-start"],b(),j["wrapper-end"]),Eh(I)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:E,className:"swiper-button-prev"}),Q.createElement("div",{ref:S,className:"swiper-button-next"})),Th(I)&&Q.createElement("div",{ref:P,className:"swiper-scrollbar"}),kh(I)&&Q.createElement("div",{ref:C,className:"swiper-pagination"}),j["container-end"]))});zh.displayName="Swiper";const Ih=G.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:a,virtualIndex:l,swiperSlideIndex:u,...c}=e===void 0?{}:e;const p=G.useRef(null),[h,g]=G.useState("swiper-slide"),[x,y]=G.useState(!1);function T(S,E,C){E===p.current&&g(C)}ei(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!s)){if(s.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return s.on("_slideClass",T),()=>{s&&s.off("_slideClass",T)}}}),ei(()=>{s&&p.current&&!s.destroyed&&g(s.getSlideClasses(p.current))},[s]);const f={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(f):r,m=()=>{y(!0)};return Q.createElement(n,Js({ref:p,className:Ch(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},c),o&&Q.createElement(pd.Provider,{value:f},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},d(),a&&!x&&Q.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&Q.createElement(pd.Provider,{value:f},d(),a&&!x&&Q.createElement("div",{className:"swiper-lazy-preloader"})))});Ih.displayName="SwiperSlide";function ox(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=Ot(e.el,`.${r[i]}`)[0];s||(s=Zs("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function lx(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const s=y=>(Array.isArray(y)?y:[y]).filter(T=>!!T);function o(y){let T;return y&&typeof y=="string"&&t.isElement&&(T=t.el.querySelector(y),T)?T:(y&&(typeof y=="string"&&(T=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&T.length>1&&t.el.querySelectorAll(y).length===1&&(T=t.el.querySelector(y))),y&&!T?y:T)}function a(y,T){const f=t.params.navigation;y=s(y),y.forEach(d=>{d&&(d.classList[T?"add":"remove"](...f.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=T),t.params.watchOverflow&&t.enabled&&d.classList[t.isLocked?"add":"remove"](f.lockClass))})}function l(){const{nextEl:y,prevEl:T}=t.navigation;if(t.params.loop){a(T,!1),a(y,!1);return}a(T,t.isBeginning&&!t.params.rewind),a(y,t.isEnd&&!t.params.rewind)}function u(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const y=t.params.navigation;if(t.params.navigation=ox(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let T=o(y.nextEl),f=o(y.prevEl);Object.assign(t.navigation,{nextEl:T,prevEl:f}),T=s(T),f=s(f);const d=(m,S)=>{m&&m.addEventListener("click",S==="next"?c:u),!t.enabled&&m&&m.classList.add(...y.lockClass.split(" "))};T.forEach(m=>d(m,"next")),f.forEach(m=>d(m,"prev"))}function h(){let{nextEl:y,prevEl:T}=t.navigation;y=s(y),T=s(T);const f=(d,m)=>{d.removeEventListener("click",m==="next"?c:u),d.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(d=>f(d,"next")),T.forEach(d=>f(d,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?x():(p(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{h()}),r("enable disable",()=>{let{nextEl:y,prevEl:T}=t.navigation;if(y=s(y),T=s(T),t.enabled){l();return}[...y,...T].filter(f=>!!f).forEach(f=>f.classList.add(t.params.navigation.lockClass))}),r("click",(y,T)=>{let{nextEl:f,prevEl:d}=t.navigation;f=s(f),d=s(d);const m=T.target;if(t.params.navigation.hideOnClick&&!d.includes(m)&&!f.includes(m)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===m||t.pagination.el.contains(m)))return;let S;f.length?S=f[0].classList.contains(t.params.navigation.hiddenClass):d.length&&(S=d[0].classList.contains(t.params.navigation.hiddenClass)),i(S===!0?"navigationShow":"navigationHide"),[...f,...d].filter(E=>!!E).forEach(E=>E.classList.toggle(t.params.navigation.hiddenClass))}});const g=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),p(),l()},x=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(t.navigation,{enable:g,disable:x,update:l,init:p,destroy:h})}const ax=O.img`
  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1280px) {
    width: 596px;
    height: 296px;
  }
`,ux=({imageSrc:e,imageSrc2x:t,alt:n})=>v.jsxs(mh,{children:[v.jsx("source",{srcSet:`${e} 1x, ${t} 2x`}),v.jsx(ax,{src:e,alt:n})]}),cx="/vite-ecosolution/assets/lviv-region-5b359b82.webp",dx="/vite-ecosolution/assets/lviv-region-2x-96295f3b.webp",fx="/vite-ecosolution/assets/zhytomyr-city-3f6eae4f.webp",px="/vite-ecosolution/assets/zhytomyr-city-2x-a0538cd1.webp",hx="/vite-ecosolution/assets/rivne-city-323c680c.webp",mx="/vite-ecosolution/assets/rivne-city-2x-a1d6bb37.webp",gx="/vite-ecosolution/assets/kherson-city-ef69295b.webp",vx="/vite-ecosolution/assets/kherson-city-2x-990e6e5b.webp",yx="/vite-ecosolution/assets/zaporizhia-city-805bcd2f.webp",xx="/vite-ecosolution/assets/zaporizhia-city-2x-71a22a97.webp",wx=[{key:1,imageSrc:cx,imageSrc2x:dx,title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{key:2,imageSrc:fx,imageSrc2x:px,title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{key:3,imageSrc:hx,imageSrc2x:mx,title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{key:4,imageSrc:gx,imageSrc2x:vx,title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{key:5,imageSrc:yx,imageSrc2x:xx,title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],Sx=O.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`,Ex=O.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,kx=O.h2`
  width: 100%;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 276px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1280px) {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`,Tx=O.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 0;
    padding-left: 9px;

    border-left: 1px solid #97d28b;
  }

  @media (min-width: 1280px) {
    padding-left: 161px;
  }
`,Cx=O.p`
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
`,Px=O.div`
  display: flex;
  gap: 12px;
`,_x=O.button`
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
`,zx=O.button`
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
`,Ix=O.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 38px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`,Ox=O.div`
  padding: 24px 12px 12px;

  background: #eaedf1;

  @media (min-width: 1280px) {
    padding: 48px 36px;
  }
`,Mx=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;

  @media (max-width: 767px) {
    gap: 61px;
  }

  border-bottom: 1px solid #97d28b;
`,Lx=O.h4`
  width: 100%;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
    width: 194px;
    height: 72px;

    font-size: 20px;
    letter-spacing: -0.85px;
  }

  @media (min-width: 1280px) {
    width: 357px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,jx=O.a`
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
`,Ax=O.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`,Nx=O.p`
  color: #173d33;
  text-align: justify;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,bx=O.p`
  color: #173d33;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Fx=()=>{const[e,t]=G.useState(1),n=ph(768,1440);return v.jsxs(Sx,{id:Ue.CASES,children:[v.jsxs(Ex,{children:[v.jsx(kx,{children:"Successful cases of our company"}),v.jsxs(Tx,{children:[v.jsxs(Cx,{children:[e,v.jsx("span",{children:"/05"})]}),v.jsxs(Px,{children:[v.jsx(_x,{className:"custom_prev",children:v.jsx("svg",{width:36,height:36,children:v.jsx("use",{href:me+"#icon-arrow-right"})})}),v.jsx(zx,{className:"custom_next",children:v.jsx("svg",{width:36,height:36,children:v.jsx("use",{href:me+"#icon-arrow-right"})})})]})]})]}),v.jsx(Ix,{children:v.jsx(zh,{modules:[lx],spaceBetween:n==="desktop"?48:24,loop:!0,slidesPerView:n==="mobile"?1:2,navigation:{nextEl:".custom_next",prevEl:".custom_prev"},onSlideChange:r=>t(r.realIndex+1),children:wx.map(r=>v.jsxs(Ih,{style:{width:500},children:[v.jsx(ux,{imageSrc:r.imageSrc,imageSrc2x:r.imageSrc2x,alt:r.description}),v.jsxs(Ox,{children:[v.jsxs(Mx,{children:[v.jsx(Lx,{children:r.title}),v.jsx(jx,{href:"/",target:"blank",children:v.jsx("svg",{width:28,height:28,children:v.jsx("use",{href:me+"#icon-arrow-right-up"})})})]}),v.jsxs(Ax,{children:[v.jsx(Nx,{children:r.description}),v.jsx(bx,{children:r.date})]})]})]},r.key))})})]})},Dx=[{id:1,title:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,title:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,title:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,title:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,title:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],Rx=O.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    justify-content: start;
    gap: 185px;
    margin-top: 120px;
  }
`,$x=O.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,Vx=O.h2`
  width: 100%;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 342px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1280px) {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`,Bx=O.div`
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  & > :last-child {
    padding-bottom: 0;
  }
`,Wx=O.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;

  border-top: 1px solid #97d28b;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1280px) {
    gap: 24px;
  }
`,Ux=O.div`
  padding-top: 21px;

  svg {
    cursor: pointer;
  }

  svg use {
    stroke: #97d28b;
  }

  @media (min-width: 768px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`,Hx=O.h3`
  width: 100%;

  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 768px) {
    width: 298px;
  }

  @media (min-width: 1280px) {
    width: 544px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,Gx=O.p`
  width: 100%;
  margin-top: 16px;

  color: #173d33;
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (min-width: 768px) {
    width: 298px;
  }

  @media (min-width: 1280px) {
    width: 544px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,hd=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 36px;

  @media (min-width: 768px) {
    display: ${e=>e.id==="not-mobile"?"flex":"none"};
    margin-top: 0px;
  }

  @media (max-width: 767px) {
    display: ${e=>e.id==="mobile"?"flex":"none"};
  }
`,md=O.p`
  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,Qx=()=>{const[e,t]=G.useState(1),n=i=>{t(i)},r=()=>{_i(Ue.CONTACT)};return v.jsxs(Rx,{id:Ue.QUESTIONS,children:[v.jsxs($x,{children:[v.jsx(Vx,{children:"Frequently Asked Questions"}),v.jsxs(hd,{id:"not-mobile",children:[v.jsx(md,{children:"Didn't find the answer to your question?"}),v.jsx(xa,{textContent:"Contact Us",followTo:r})]})]}),v.jsx(Bx,{children:Dx.map(i=>v.jsxs(Wx,{children:[v.jsx(Ux,{onClick:()=>n(i.id),children:e===i.id?v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-minus"})}):v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-add"})})}),v.jsxs("div",{children:[v.jsx(Hx,{children:i.title}),e===i.id&&v.jsx(Gx,{children:i.answer})]})]},i.id))}),v.jsxs(hd,{id:"mobile",children:[v.jsx(md,{children:"Didn't find the answer to your question?"}),v.jsx(xa,{textContent:"Contact Us",followTo:r})]})]})};var zi=e=>e.type==="checkbox",sr=e=>e instanceof Date,De=e=>e==null;const Oh=e=>typeof e=="object";var Ee=e=>!De(e)&&!Array.isArray(e)&&Oh(e)&&!sr(e),Yx=e=>Ee(e)&&e.target?zi(e.target)?e.target.checked:e.target.value:e,Xx=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Kx=(e,t)=>e.has(Xx(t)),qx=e=>{const t=e.constructor&&e.constructor.prototype;return Ee(t)&&t.hasOwnProperty("isPrototypeOf")},_u=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Dt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(_u&&(e instanceof Blob||e instanceof FileList))&&(n||Ee(e)))if(t=n?[]:{},!n&&!qx(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Dt(e[r]));else return e;return t}var Ii=e=>Array.isArray(e)?e.filter(Boolean):[],ge=e=>e===void 0,B=(e,t,n)=>{if(!t||!Ee(e))return n;const r=Ii(t.split(/[,[\].]+?/)).reduce((i,s)=>De(i)?i:i[s],e);return ge(r)||r===e?ge(e[t])?n:e[t]:r},Bt=e=>typeof e=="boolean";const gd={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},gt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Nt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Zx=Q.createContext(null),Jx=()=>Q.useContext(Zx);var ew=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==gt.all&&(t._proxyFormState[o]=!r||gt.all),n&&(n[o]=!0),e[o]}});return i},rt=e=>Ee(e)&&!Object.keys(e).length,tw=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return rt(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||gt.all))},dl=e=>Array.isArray(e)?e:[e];function nw(e){const t=Q.useRef(e);t.current=e,Q.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Mt=e=>typeof e=="string",rw=(e,t,n,r,i)=>Mt(e)?(r&&t.watch.add(e),B(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),B(n,s))):(r&&(t.watchAll=!0),n),zu=e=>/^\w*$/.test(e),Mh=e=>Ii(e.replace(/["|']|\]/g,"").split(/\.|\[/)),ae=(e,t,n)=>{let r=-1;const i=zu(t)?[t]:Mh(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=e[a];l=Ee(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=l,e=e[a]}return e},iw=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},vd=e=>({isOnSubmit:!e||e===gt.onSubmit,isOnBlur:e===gt.onBlur,isOnChange:e===gt.onChange,isOnAll:e===gt.all,isOnTouch:e===gt.onTouched}),yd=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ti=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const s=B(e,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&t(o.refs[0],i)&&!r)break;if(o.ref&&t(o.ref,o.name)&&!r)break;ti(a,t)}else Ee(a)&&ti(a,t)}}};var sw=(e,t,n)=>{const r=Ii(B(e,n));return ae(r,"root",t[n]),ae(e,n,r),e},Iu=e=>e.type==="file",ln=e=>typeof e=="function",eo=e=>{if(!_u)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Es=e=>Mt(e),Ou=e=>e.type==="radio",to=e=>e instanceof RegExp;const xd={value:!1,isValid:!1},wd={value:!0,isValid:!0};var Lh=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ge(e[0].attributes.value)?ge(e[0].value)||e[0].value===""?wd:{value:e[0].value,isValid:!0}:wd:xd}return xd};const Sd={isValid:!1,value:null};var jh=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Sd):Sd;function Ed(e,t,n="validate"){if(Es(e)||Array.isArray(e)&&e.every(Es)||Bt(e)&&!e)return{type:n,message:Es(e)?e:"",ref:t}}var Hn=e=>Ee(e)&&!to(e)?e:{value:e,message:""},kd=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:p,pattern:h,validate:g,name:x,valueAsNumber:y,mount:T,disabled:f}=e._f,d=B(t,x);if(!T||f)return{};const m=o?o[0]:s,S=L=>{r&&m.reportValidity&&(m.setCustomValidity(Bt(L)?"":L||""),m.reportValidity())},E={},C=Ou(s),P=zi(s),I=C||P,N=(y||Iu(s))&&ge(s.value)&&ge(d)||eo(s)&&s.value===""||d===""||Array.isArray(d)&&!d.length,z=iw.bind(null,x,n,E),R=(L,j,U,X=Nt.maxLength,ne=Nt.minLength)=>{const ce=L?j:U;E[x]={type:L?X:ne,message:ce,ref:s,...z(L?X:ne,ce)}};if(i?!Array.isArray(d)||!d.length:a&&(!I&&(N||De(d))||Bt(d)&&!d||P&&!Lh(o).isValid||C&&!jh(o).isValid)){const{value:L,message:j}=Es(a)?{value:!!a,message:a}:Hn(a);if(L&&(E[x]={type:Nt.required,message:j,ref:m,...z(Nt.required,j)},!n))return S(j),E}if(!N&&(!De(c)||!De(p))){let L,j;const U=Hn(p),X=Hn(c);if(!De(d)&&!isNaN(d)){const ne=s.valueAsNumber||d&&+d;De(U.value)||(L=ne>U.value),De(X.value)||(j=ne<X.value)}else{const ne=s.valueAsDate||new Date(d),ce=W=>new Date(new Date().toDateString()+" "+W),b=s.type=="time",F=s.type=="week";Mt(U.value)&&d&&(L=b?ce(d)>ce(U.value):F?d>U.value:ne>new Date(U.value)),Mt(X.value)&&d&&(j=b?ce(d)<ce(X.value):F?d<X.value:ne<new Date(X.value))}if((L||j)&&(R(!!L,U.message,X.message,Nt.max,Nt.min),!n))return S(E[x].message),E}if((l||u)&&!N&&(Mt(d)||i&&Array.isArray(d))){const L=Hn(l),j=Hn(u),U=!De(L.value)&&d.length>+L.value,X=!De(j.value)&&d.length<+j.value;if((U||X)&&(R(U,L.message,j.message),!n))return S(E[x].message),E}if(h&&!N&&Mt(d)){const{value:L,message:j}=Hn(h);if(to(L)&&!d.match(L)&&(E[x]={type:Nt.pattern,message:j,ref:s,...z(Nt.pattern,j)},!n))return S(j),E}if(g){if(ln(g)){const L=await g(d,t),j=Ed(L,m);if(j&&(E[x]={...j,...z(Nt.validate,j.message)},!n))return S(j.message),E}else if(Ee(g)){let L={};for(const j in g){if(!rt(L)&&!n)break;const U=Ed(await g[j](d,t),m,j);U&&(L={...U,...z(j,U.message)},S(U.message),n&&(E[x]=L))}if(!rt(L)&&(E[x]={ref:m,...L},!n))return E}}return S(!0),E};function ow(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ge(e)?r++:e[t[r++]];return e}function lw(e){for(const t in e)if(e.hasOwnProperty(t)&&!ge(e[t]))return!1;return!0}function _e(e,t){const n=Array.isArray(t)?t:zu(t)?[t]:Mh(t),r=n.length===1?e:ow(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Ee(r)&&rt(r)||Array.isArray(r)&&lw(r))&&_e(e,n.slice(0,-1)),e}var fl=()=>{let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next&&s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}},no=e=>De(e)||!Oh(e);function On(e,t){if(no(e)||no(t))return e===t;if(sr(e)&&sr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(sr(s)&&sr(o)||Ee(s)&&Ee(o)||Array.isArray(s)&&Array.isArray(o)?!On(s,o):s!==o)return!1}}return!0}var Ah=e=>e.type==="select-multiple",aw=e=>Ou(e)||zi(e),pl=e=>eo(e)&&e.isConnected,Nh=e=>{for(const t in e)if(ln(e[t]))return!0;return!1};function ro(e,t={}){const n=Array.isArray(e);if(Ee(e)||n)for(const r in e)Array.isArray(e[r])||Ee(e[r])&&!Nh(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ro(e[r],t[r])):De(e[r])||(t[r]=!0);return t}function bh(e,t,n){const r=Array.isArray(e);if(Ee(e)||r)for(const i in e)Array.isArray(e[i])||Ee(e[i])&&!Nh(e[i])?ge(t)||no(n[i])?n[i]=Array.isArray(e[i])?ro(e[i],[]):{...ro(e[i])}:bh(e[i],De(t)?{}:t[i],n[i]):n[i]=!On(e[i],t[i]);return n}var hl=(e,t)=>bh(e,t,ro(t)),Fh=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ge(e)?e:t?e===""?NaN:e&&+e:n&&Mt(e)?new Date(e):r?r(e):e;function ml(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Iu(t)?t.files:Ou(t)?jh(e.refs).value:Ah(t)?[...t.selectedOptions].map(({value:n})=>n):zi(t)?Lh(e.refs).value:Fh(ge(t.value)?e.ref.value:t.value,e)}var uw=(e,t,n,r)=>{const i={};for(const s of e){const o=B(t,s);o&&ae(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Dr=e=>ge(e)?e:to(e)?e.source:Ee(e)?to(e.value)?e.value.source:e.value:e,cw=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Td(e,t,n){const r=B(e,n);if(r||zu(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=B(t,s),a=B(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var dw=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,fw=(e,t)=>!Ii(B(e,t)).length&&_e(e,t);const pw={mode:gt.onSubmit,reValidateMode:gt.onChange,shouldFocusError:!0};function hw(e={},t){let n={...pw,...e},r={submitCount:0,isDirty:!1,isLoading:ln(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},s=Ee(n.defaultValues)||Ee(n.values)?Dt(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Dt(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:fl(),array:fl(),state:fl()},g=e.resetOptions&&e.resetOptions.keepDirtyValues,x=vd(n.mode),y=vd(n.reValidateMode),T=n.criteriaMode===gt.all,f=w=>k=>{clearTimeout(c),c=setTimeout(w,k)},d=async w=>{if(p.isValid||w){const k=n.resolver?rt((await z()).errors):await L(i,!0);k!==r.isValid&&h.state.next({isValid:k})}},m=w=>p.isValidating&&h.state.next({isValidating:w}),S=(w,k=[],_,V,D=!0,A=!0)=>{if(V&&_){if(a.action=!0,A&&Array.isArray(B(i,w))){const H=_(B(i,w),V.argA,V.argB);D&&ae(i,w,H)}if(A&&Array.isArray(B(r.errors,w))){const H=_(B(r.errors,w),V.argA,V.argB);D&&ae(r.errors,w,H),fw(r.errors,w)}if(p.touchedFields&&A&&Array.isArray(B(r.touchedFields,w))){const H=_(B(r.touchedFields,w),V.argA,V.argB);D&&ae(r.touchedFields,w,H)}p.dirtyFields&&(r.dirtyFields=hl(s,o)),h.state.next({name:w,isDirty:U(w,k),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ae(o,w,k)},E=(w,k)=>{ae(r.errors,w,k),h.state.next({errors:r.errors})},C=w=>{r.errors=w,h.state.next({errors:r.errors,isValid:!1})},P=(w,k,_,V)=>{const D=B(i,w);if(D){const A=B(o,w,ge(_)?B(s,w):_);ge(A)||V&&V.defaultChecked||k?ae(o,w,k?A:ml(D._f)):ce(w,A),a.mount&&d()}},I=(w,k,_,V,D)=>{let A=!1,H=!1;const re={name:w},ke=!!(B(i,w)&&B(i,w)._f.disabled);if(!_||V){p.isDirty&&(H=r.isDirty,r.isDirty=re.isDirty=U(),A=H!==re.isDirty);const Ct=ke||On(B(s,w),k);H=!!(!ke&&B(r.dirtyFields,w)),Ct||ke?_e(r.dirtyFields,w):ae(r.dirtyFields,w,!0),re.dirtyFields=r.dirtyFields,A=A||p.dirtyFields&&H!==!Ct}if(_){const Ct=B(r.touchedFields,w);Ct||(ae(r.touchedFields,w,_),re.touchedFields=r.touchedFields,A=A||p.touchedFields&&Ct!==_)}return A&&D&&h.state.next(re),A?re:{}},N=(w,k,_,V)=>{const D=B(r.errors,w),A=p.isValid&&Bt(k)&&r.isValid!==k;if(e.delayError&&_?(u=f(()=>E(w,_)),u(e.delayError)):(clearTimeout(c),u=null,_?ae(r.errors,w,_):_e(r.errors,w)),(_?!On(D,_):D)||!rt(V)||A){const H={...V,...A&&Bt(k)?{isValid:k}:{},errors:r.errors,name:w};r={...r,...H},h.state.next(H)}m(!1)},z=async w=>n.resolver(o,n.context,uw(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),R=async w=>{const{errors:k}=await z(w);if(w)for(const _ of w){const V=B(k,_);V?ae(r.errors,_,V):_e(r.errors,_)}else r.errors=k;return k},L=async(w,k,_={valid:!0})=>{for(const V in w){const D=w[V];if(D){const{_f:A,...H}=D;if(A){const re=l.array.has(A.name),ke=await kd(D,o,T,n.shouldUseNativeValidation&&!k,re);if(ke[A.name]&&(_.valid=!1,k))break;!k&&(B(ke,A.name)?re?sw(r.errors,ke,A.name):ae(r.errors,A.name,ke[A.name]):_e(r.errors,A.name))}H&&await L(H,k,_)}}return _.valid},j=()=>{for(const w of l.unMount){const k=B(i,w);k&&(k._f.refs?k._f.refs.every(_=>!pl(_)):!pl(k._f.ref))&&At(w)}l.unMount=new Set},U=(w,k)=>(w&&k&&ae(o,w,k),!On(St(),s)),X=(w,k,_)=>rw(w,l,{...a.mount?o:ge(k)?s:Mt(w)?{[w]:k}:k},_,k),ne=w=>Ii(B(a.mount?o:s,w,e.shouldUnregister?B(s,w,[]):[])),ce=(w,k,_={})=>{const V=B(i,w);let D=k;if(V){const A=V._f;A&&(!A.disabled&&ae(o,w,Fh(k,A)),D=eo(A.ref)&&De(k)?"":k,Ah(A.ref)?[...A.ref.options].forEach(H=>H.selected=D.includes(H.value)):A.refs?zi(A.ref)?A.refs.length>1?A.refs.forEach(H=>(!H.defaultChecked||!H.disabled)&&(H.checked=Array.isArray(D)?!!D.find(re=>re===H.value):D===H.value)):A.refs[0]&&(A.refs[0].checked=!!D):A.refs.forEach(H=>H.checked=H.value===D):Iu(A.ref)?A.ref.value="":(A.ref.value=D,A.ref.type||h.values.next({name:w,values:{...o}})))}(_.shouldDirty||_.shouldTouch)&&I(w,D,_.shouldTouch,_.shouldDirty,!0),_.shouldValidate&&q(w)},b=(w,k,_)=>{for(const V in k){const D=k[V],A=`${w}.${V}`,H=B(i,A);(l.array.has(w)||!no(D)||H&&!H._f)&&!sr(D)?b(A,D,_):ce(A,D,_)}},F=(w,k,_={})=>{const V=B(i,w),D=l.array.has(w),A=Dt(k);ae(o,w,A),D?(h.array.next({name:w,values:{...o}}),(p.isDirty||p.dirtyFields)&&_.shouldDirty&&h.state.next({name:w,dirtyFields:hl(s,o),isDirty:U(w,A)})):V&&!V._f&&!De(A)?b(w,A,_):ce(w,A,_),yd(w,l)&&h.state.next({...r}),h.values.next({name:w,values:{...o}}),!a.mount&&t()},W=async w=>{const k=w.target;let _=k.name,V=!0;const D=B(i,_),A=()=>k.type?ml(D._f):Yx(w),H=re=>{V=Number.isNaN(re)||re===B(o,_,re)};if(D){let re,ke;const Ct=A(),Bn=w.type===gd.BLUR||w.type===gd.FOCUS_OUT,Rh=!cw(D._f)&&!n.resolver&&!B(r.errors,_)&&!D._f.deps||dw(Bn,B(r.touchedFields,_),r.isSubmitted,y,x),_o=yd(_,l,Bn);ae(o,_,Ct),Bn?(D._f.onBlur&&D._f.onBlur(w),u&&u(0)):D._f.onChange&&D._f.onChange(w);const zo=I(_,Ct,Bn,!1),$h=!rt(zo)||_o;if(!Bn&&h.values.next({name:_,type:w.type,values:{...o}}),Rh)return p.isValid&&d(),$h&&h.state.next({name:_,..._o?{}:zo});if(!Bn&&_o&&h.state.next({...r}),m(!0),n.resolver){const{errors:Au}=await z([_]);if(H(Ct),V){const Vh=Td(r.errors,i,_),Nu=Td(Au,i,Vh.name||_);re=Nu.error,_=Nu.name,ke=rt(Au)}}else re=(await kd(D,o,T,n.shouldUseNativeValidation))[_],H(Ct),V&&(re?ke=!1:p.isValid&&(ke=await L(i,!0)));V&&(D._f.deps&&q(D._f.deps),N(_,ke,re,zo))}},J=(w,k)=>{if(B(r.errors,k)&&w.focus)return w.focus(),1},q=async(w,k={})=>{let _,V;const D=dl(w);if(m(!0),n.resolver){const A=await R(ge(w)?w:D);_=rt(A),V=w?!D.some(H=>B(A,H)):_}else w?(V=(await Promise.all(D.map(async A=>{const H=B(i,A);return await L(H&&H._f?{[A]:H}:H)}))).every(Boolean),!(!V&&!r.isValid)&&d()):V=_=await L(i);return h.state.next({...!Mt(w)||p.isValid&&_!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:_}:{},errors:r.errors,isValidating:!1}),k.shouldFocus&&!V&&ti(i,J,w?D:l.mount),V},St=w=>{const k={...s,...a.mount?o:{}};return ge(w)?k:Mt(w)?B(k,w):w.map(_=>B(k,_))},Be=(w,k)=>({invalid:!!B((k||r).errors,w),isDirty:!!B((k||r).dirtyFields,w),isTouched:!!B((k||r).touchedFields,w),error:B((k||r).errors,w)}),Et=w=>{w&&dl(w).forEach(k=>_e(r.errors,k)),h.state.next({errors:w?r.errors:{}})},Me=(w,k,_)=>{const V=(B(i,w,{_f:{}})._f||{}).ref;ae(r.errors,w,{...k,ref:V}),h.state.next({name:w,errors:r.errors,isValid:!1}),_&&_.shouldFocus&&V&&V.focus&&V.focus()},dt=(w,k)=>ln(w)?h.values.subscribe({next:_=>w(X(void 0,k),_)}):X(w,k,!0),At=(w,k={})=>{for(const _ of w?dl(w):l.mount)l.mount.delete(_),l.array.delete(_),k.keepValue||(_e(i,_),_e(o,_)),!k.keepError&&_e(r.errors,_),!k.keepDirty&&_e(r.dirtyFields,_),!k.keepTouched&&_e(r.touchedFields,_),!n.shouldUnregister&&!k.keepDefaultValue&&_e(s,_);h.values.next({values:{...o}}),h.state.next({...r,...k.keepDirty?{isDirty:U()}:{}}),!k.keepIsValid&&d()},kt=({disabled:w,name:k,field:_,fields:V,value:D})=>{if(Bt(w)){const A=w?void 0:ge(D)?ml(_?_._f:B(V,k)._f):D;ae(o,k,A),I(k,A,!1,!1,!0)}},En=(w,k={})=>{let _=B(i,w);const V=Bt(k.disabled);return ae(i,w,{..._||{},_f:{..._&&_._f?_._f:{ref:{name:w}},name:w,mount:!0,...k}}),l.mount.add(w),_?kt({field:_,disabled:k.disabled,name:w,value:k.value}):P(w,!0,k.value),{...V?{disabled:k.disabled}:{},...n.progressive?{required:!!k.required,min:Dr(k.min),max:Dr(k.max),minLength:Dr(k.minLength),maxLength:Dr(k.maxLength),pattern:Dr(k.pattern)}:{},name:w,onChange:W,onBlur:W,ref:D=>{if(D){En(w,k),_=B(i,w);const A=ge(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,H=aw(A),re=_._f.refs||[];if(H?re.find(ke=>ke===A):A===_._f.ref)return;ae(i,w,{_f:{..._._f,...H?{refs:[...re.filter(pl),A,...Array.isArray(B(s,w))?[{}]:[]],ref:{type:A.type,name:w}}:{ref:A}}}),P(w,!1,void 0,A)}else _=B(i,w,{}),_._f&&(_._f.mount=!1),(n.shouldUnregister||k.shouldUnregister)&&!(Kx(l.array,w)&&a.action)&&l.unMount.add(w)}}},kn=()=>n.shouldFocusError&&ti(i,J,l.mount),Tt=w=>{Bt(w)&&(h.state.next({disabled:w}),ti(i,(k,_)=>{let V=w;const D=B(i,_);D&&Bt(D._f.disabled)&&(V||(V=D._f.disabled)),k.disabled=V},0,!1))},Mu=(w,k)=>async _=>{_&&(_.preventDefault&&_.preventDefault(),_.persist&&_.persist());let V=Dt(o);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:D,values:A}=await z();r.errors=D,V=A}else await L(i);_e(r.errors,"root"),rt(r.errors)?(h.state.next({errors:{}}),await w(V,_)):(k&&await k({...r.errors},_),kn(),setTimeout(kn)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:rt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Dh=(w,k={})=>{B(i,w)&&(ge(k.defaultValue)?F(w,B(s,w)):(F(w,k.defaultValue),ae(s,w,k.defaultValue)),k.keepTouched||_e(r.touchedFields,w),k.keepDirty||(_e(r.dirtyFields,w),r.isDirty=k.defaultValue?U(w,B(s,w)):U()),k.keepError||(_e(r.errors,w),p.isValid&&d()),h.state.next({...r}))},Lu=(w,k={})=>{const _=w?Dt(w):s,V=Dt(_),D=w&&!rt(w)?V:s;if(k.keepDefaultValues||(s=_),!k.keepValues){if(k.keepDirtyValues||g)for(const A of l.mount)B(r.dirtyFields,A)?ae(D,A,B(o,A)):F(A,B(D,A));else{if(_u&&ge(w))for(const A of l.mount){const H=B(i,A);if(H&&H._f){const re=Array.isArray(H._f.refs)?H._f.refs[0]:H._f.ref;if(eo(re)){const ke=re.closest("form");if(ke){ke.reset();break}}}}i={}}o=e.shouldUnregister?k.keepDefaultValues?Dt(s):{}:Dt(D),h.array.next({values:{...D}}),h.values.next({values:{...D}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!p.isValid||!!k.keepIsValid,a.watch=!!e.shouldUnregister,h.state.next({submitCount:k.keepSubmitCount?r.submitCount:0,isDirty:k.keepDirty?r.isDirty:!!(k.keepDefaultValues&&!On(w,s)),isSubmitted:k.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:k.keepDirtyValues?r.dirtyFields:k.keepDefaultValues&&w?hl(s,w):{},touchedFields:k.keepTouched?r.touchedFields:{},errors:k.keepErrors?r.errors:{},isSubmitSuccessful:k.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ju=(w,k)=>Lu(ln(w)?w(o):w,k);return{control:{register:En,unregister:At,getFieldState:Be,handleSubmit:Mu,setError:Me,_executeSchema:z,_getWatch:X,_getDirty:U,_updateValid:d,_removeUnmounted:j,_updateFieldArray:S,_updateDisabledField:kt,_getFieldArray:ne,_reset:Lu,_resetDefaultValues:()=>ln(n.defaultValues)&&n.defaultValues().then(w=>{ju(w,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_disableForm:Tt,_subjects:h,_proxyFormState:p,_setErrors:C,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:q,register:En,handleSubmit:Mu,watch:dt,setValue:F,getValues:St,reset:ju,resetField:Dh,clearErrors:Et,unregister:At,setError:Me,setFocus:(w,k={})=>{const _=B(i,w),V=_&&_._f;if(V){const D=V.refs?V.refs[0]:V.ref;D.focus&&(D.focus(),k.shouldSelect&&D.select())}},getFieldState:Be}}function mw(e={}){const t=Q.useRef(),n=Q.useRef(),[r,i]=Q.useState({isDirty:!1,isValidating:!1,isLoading:ln(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:ln(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...hw(e,()=>i(o=>({...o}))),formState:r});const s=t.current.control;return s._options=e,nw({subject:s._subjects.state,next:o=>{tw(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Q.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),Q.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),Q.useEffect(()=>{e.values&&!On(e.values,n.current)?(s._reset(e.values,s._options.resetOptions),n.current=e.values,i(o=>({...o}))):s._resetDefaultValues()},[e.values,s]),Q.useEffect(()=>{e.errors&&s._setErrors(e.errors)},[e.errors,s]),Q.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),t.current.formState=ew(r,s),t.current}var gw=function(e){var t=e.as,n=e.errors,r=e.name,i=e.message,s=e.render,o=function(h,g){if(h==null)return{};var x,y,T={},f=Object.keys(h);for(y=0;y<f.length;y++)g.indexOf(x=f[y])>=0||(T[x]=h[x]);return T}(e,["as","errors","name","message","render"]),a=Jx(),l=B(n||a.formState.errors,r);if(!l)return null;var u=l.message,c=l.types,p=Object.assign({},o,{children:u||i});return G.isValidElement(t)?G.cloneElement(t,p):s?s({message:u||i,messages:c}):G.createElement(t||G.Fragment,p)};const vw=/^[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)\s[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+([-']?[a-zA-Zа-яА-ЯґҐіІєЄщЩ']+)$/,yw=/^380\d{9}$/,xw=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,gl={fullNameRegExp:vw,phoneRegExp:yw,emailRegExp:xw},ww=[{name:"fullName",label:"Full name",type:"text",placeholder:"John Rosie",pattern:{value:gl.fullNameRegExp,message:"Invalid Fullname"},requiredMessage:"Wrong Fullname"},{name:"email",label:"E-mail",type:"email",placeholder:"johnrosie@gmail.com",pattern:{value:gl.emailRegExp,message:"Invalid Email"},requiredMessage:"Wrong Email"},{name:"phone",label:"Phone",type:"tel",placeholder:"380961234567",pattern:{value:gl.phoneRegExp,message:"Invalid Phone"},requiredMessage:"Wrong Phone"}],Sw=O.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 36px;
  padding: 36px 12px;

  background: #eaedf1;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 36px 24px;
  }

  @media (min-width: 1280px) {
    padding: 48px;
  }
`,Ew=O.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 100%;

  border-bottom: 1px solid #97d28b;
  border-color: ${({$isError:e})=>e&&"#d28b8b"};

  @media (min-width: 1280px) {
    width: 500px;
  }
`,Cd=O.span`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`,kw=O.input`
  color: #173d33;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;

  @media (min-width: 1280px) {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`,Tw=O.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 100%;

  @media (min-width: 1280px) {
    width: 500px;
  }
`,Cw=O.textarea`
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
`,Pw=O.div`
  margin-top: -8px;
  margin-left: auto;
`,_w=O.p`
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
`,zw=()=>{const{register:e,handleSubmit:t,reset:n,formState:{isSubmitSuccessful:r,errors:i}}=mw({mode:"onChange",defaultValues:{fullName:"",email:"",phone:"",message:""}});G.useEffect(()=>{r&&n()},[r,n]);const s=o=>{console.log("data sended",o)};return v.jsx(v.Fragment,{children:v.jsxs(Sw,{action:"/path",onSubmit:t(s),children:[ww.map(o=>v.jsxs(Ew,{htmlFor:o.name,$isError:i[o.name],children:[v.jsxs(Cd,{children:["* ",o.label,":"]}),v.jsx(kw,{...e(o.name,{pattern:o.pattern,required:o.requiredMessage}),type:o.type,id:o.name,placeholder:o.placeholder}),v.jsx(gw,{errors:i,name:o.name,render:({message:a})=>v.jsx(_w,{children:a})})]},o.name)),v.jsxs(Tw,{htmlFor:"message",children:[v.jsx(Cd,{children:"Message:"}),v.jsx(Cw,{...e("message"),id:"message",name:"message",cols:30,rows:10,placeholder:"Your message"})]}),v.jsx(Pw,{children:v.jsx(hh,{type:"submit",textContent:"Send"})})]})})},Iw=O.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`,Ow=O.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px; /* 100% */
  }
`,Mw=O.div`
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    gap: 122px;
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    gap: 178px;
    margin-top: 120px;
  }
`,Lw=O.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ts=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 244px;

  @media (min-width: 1280px) {
    width: 469px;
  }
`,jw=O.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ns=O.p`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`,rs=O.a`
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

    @media (min-width: 1280px) {
      width: 434px;
    }
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  &:hover {
    svg use {
      stroke: #97d28b;
    }
    color: #97d28b;
  }
`,Aw=()=>v.jsxs(Iw,{id:Ue.CONTACT,children:[v.jsx(Ow,{children:"Contact Us"}),v.jsxs(Mw,{children:[v.jsxs(Lw,{children:[v.jsxs(ts,{children:[v.jsx(ns,{children:"Phone:"}),v.jsxs(jw,{children:[v.jsxs(rs,{href:"tel:+38(093)1234567",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:me+"#icon-call",stroke:"#173d33",fill:"#FFFFFF"})}),"38 (098) 12 34 567"]}),v.jsxs(rs,{href:"tel:+38(093)1234567",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:me+"#icon-call"})}),"38 (093) 12 34 567"]})]})]}),v.jsxs(ts,{children:[v.jsx(ns,{children:"E-mail:"}),v.jsxs(rs,{href:"mailto:office@ecosolution.com",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:me+"#icon-sms"})}),"office@ecosolution.com"]})]}),v.jsxs(ts,{children:[v.jsx(ns,{children:"Address:"}),v.jsxs(rs,{href:"https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:me+"#icon-map"})}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),v.jsxs(ts,{children:[v.jsx(ns,{children:"Social Networks:"}),v.jsx(Tu,{colorplan:"primary",space:32})]})]}),v.jsx(zw,{})]})]}),Nw=O.footer`
  width: 100%;
  flex-shrink: 0;
  margin-top: 36px;
  padding: 24px 0;

  border-top: 1px solid #97d28b;

  @media (min-width: 768px) {
    width: 708px;
    margin-top: 100px;
    padding: 44px 0 40px;
  }

  @media (min-width: 1280px) {
    width: 1240px;
    margin-top: 120px;
  }
`,bw=O.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,Fw=O.div`
  @media (max-width: 413px) {
    margin: 24px auto 0;
    order: 1;
  }

  @media (min-width: 414px) {
    margin: auto;
  }

  @media (min-width: 768px) {
    margin-left: 97px;
  }

  @media (min-width: 1280px) {
    margin-left: 512px;
  }
`,Dw=O.button`
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

  @media (min-width: 768px) {
    margin-left: auto;
  }
`,Rw=O.div`
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

  @media (min-width: 768px) {
    flex-direction: row;

    & > p {
      margin-left: auto;
    }
  }
`,$w=O.address`
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

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 73px;
  }

  @media (min-width: 1280px) {
    gap: 487px;
  }
`,Vw=()=>{const e=()=>{_i(Ue.MAIN)};return v.jsxs(Nw,{children:[v.jsxs(bw,{children:[v.jsx(fh,{}),v.jsx(Fw,{children:v.jsx(Tu,{colorplan:"primary",space:8})}),v.jsx(Dw,{onClick:e,children:v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:me+"#icon-arrow-right"})})})]}),v.jsxs(Rw,{children:[v.jsxs($w,{children:[v.jsx("p",{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),v.jsx("p",{children:"office@ecosolution.com"})]}),v.jsx("p",{children:"ecosolution © 2023"})]})]})};const Bw="/vite-ecosolution/assets/fira-sans-v17-latin-300-f8fb86af.woff2",Ww="/vite-ecosolution/assets/fira-sans-v17-latin-regular-89ae1743.woff2",Uw="/vite-ecosolution/assets/fira-sans-v17-latin-500-c52b9a30.woff2",Hw="/vite-ecosolution/assets/oswald-v53-latin-regular-24df88e7.woff2",Gw="/vite-ecosolution/assets/oswald-v53-latin-700-6ecd2a10.woff2",Qw="/vite-ecosolution/assets/oswald-v53-latin-500-201dc695.woff2",Yw="/vite-ecosolution/assets/CASaygonText-Regular-b26b980e.woff2",Xw="/vite-ecosolution/assets/All-Round-Gothic-Medium-5c9e64b8.woff2",Kw="/vite-ecosolution/assets/inter-v13-latin-regular-2301bb03.woff2",bt={FiraSans_300:Bw,FiraSans_Regular:Ww,FiraSans_500:Uw,Oswald_Regular:Hw,Oswald_700:Gw,Oswald_500:Qw,CASaygonText_Regular:Yw,AllRoundGothic_Medium:Xw,Inter_Regular:Kw},qw=h0`
@font-face {
  font-family: 'Fira Sans';
  src: url(${bt.FiraSans_300}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${bt.FiraSans_Regular}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${bt.FiraSans_500}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${bt.Oswald_Regular}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${bt.Oswald_700}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${bt.Oswald_500}) format('woff2');
}

@font-face {
  font-family: 'CA Saygon Text';
  src: url(${bt.CASaygonText_Regular}) format('woff2');
}

@font-face {
  font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
  src: url(${bt.AllRoundGothic_Medium}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  src: url(${bt.Inter_Regular}) format('woff2');
}

  body {
        margin: 0;
        /* font-family: 'Fira Sans', 'Oswald', 'CA Saygon Text', 'FONTSPRING DEMO - All Round Gothic Thick', 'Inter', sans-serif; */
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
`,Zw=()=>v.jsxs(v.Fragment,{children:[v.jsx(qw,{}),v.jsxs(g0,{children:[v.jsx(B0,{}),v.jsxs("main",{children:[v.jsx(ay,{}),v.jsx(Ey,{}),v.jsx(Oy,{}),v.jsx(Fx,{}),v.jsx(Qx,{}),v.jsx(Aw,{})]}),v.jsx(Vw,{})]})]});vl.createRoot(document.getElementById("root")).render(v.jsx(Q.StrictMode,{children:v.jsx(Zw,{})}));
