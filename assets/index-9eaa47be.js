(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yc={exports:{}},ko={},xc={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),Ep=Symbol.for("react.portal"),kp=Symbol.for("react.fragment"),Tp=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),zp=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),Ip=Symbol.for("react.suspense"),jp=Symbol.for("react.memo"),Mp=Symbol.for("react.lazy"),Fa=Symbol.iterator;function Op(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,Ec={};function Xn(e,t,n){this.props=e,this.context=t,this.refs=Ec,this.updater=n||wc}Xn.prototype.isReactComponent={};Xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=Xn.prototype;function Rl(e,t,n){this.props=e,this.context=t,this.refs=Ec,this.updater=n||wc}var $l=Rl.prototype=new kc;$l.constructor=Rl;Sc($l,Xn.prototype);$l.isPureReactComponent=!0;var Ba=Array.isArray,Tc=Object.prototype.hasOwnProperty,bl={current:null},Cc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Tc.call(t,r)&&!Cc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hr,type:e,key:o,ref:s,props:i,_owner:bl.current}}function Lp(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Va=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Np(""+e.key):t.toString(36)}function zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hr:case Ep:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Uo(s,0):r,Ba(i)?(n="",e!=null&&(n=e.replace(Va,"$&/")+"/"),zi(i,t,n,"",function(u){return u})):i!=null&&(Dl(i)&&(i=Lp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Va,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ba(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Uo(o,a);s+=zi(o,t,n,l,i)}else if(l=Op(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Uo(o,a++),s+=zi(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Zr(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ap(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},_i={transition:null},Rp={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:_i,ReactCurrentOwner:bl};D.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Xn;D.Fragment=kp;D.Profiler=Cp;D.PureComponent=Rl;D.StrictMode=Tp;D.Suspense=Ip;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=bl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Tc.call(t,l)&&!Cc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pp,_context:e},e.Consumer=e};D.createElement=Pc;D.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:_p,render:e}};D.isValidElement=Dl;D.lazy=function(e){return{$$typeof:Mp,_payload:{_status:-1,_result:e},_init:Ap}};D.memo=function(e,t){return{$$typeof:jp,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return ke.current.useCallback(e,t)};D.useContext=function(e){return ke.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};D.useEffect=function(e,t){return ke.current.useEffect(e,t)};D.useId=function(){return ke.current.useId()};D.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ke.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};D.useRef=function(e){return ke.current.useRef(e)};D.useState=function(e){return ke.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ke.current.useTransition()};D.version="18.2.0";xc.exports=D;var b=xc.exports;const H=Sp(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=b,bp=Symbol.for("react.element"),Dp=Symbol.for("react.fragment"),Fp=Object.prototype.hasOwnProperty,Bp=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vp={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Fp.call(t,r)&&!Vp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bp,type:e,key:o,ref:s,props:i,_owner:Bp.current}}ko.Fragment=Dp;ko.jsx=zc;ko.jsxs=zc;yc.exports=ko;var v=yc.exports,js={},_c={exports:{}},$e={},Ic={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,M){var A=j.length;j.push(M);e:for(;0<A;){var V=A-1>>>1,W=j[V];if(0<i(W,M))j[V]=M,j[A]=W,A=V;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],A=j.pop();if(A!==M){j[0]=A;e:for(var V=0,W=j.length,Xt=W>>>1;V<Xt;){var Ye=2*(V+1)-1,Tt=j[Ye],Me=Ye+1,ct=j[Me];if(0>i(Tt,A))Me<W&&0>i(ct,Tt)?(j[V]=ct,j[Me]=A,V=Me):(j[V]=Tt,j[Ye]=A,V=Ye);else if(Me<W&&0>i(ct,A))j[V]=ct,j[Me]=A,V=Me;else break e}}return M}function i(j,M){var A=j.sortIndex-M.sortIndex;return A!==0?A:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,m=3,g=!1,x=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=j)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(j){if(y=!1,h(j),!x)if(n(l)!==null)x=!0,me(S);else{var M=n(u);M!==null&&Qe(w,M.startTime-j)}}function S(j,M){x=!1,y&&(y=!1,d(z),z=-1),g=!0;var A=m;try{for(h(M),f=n(l);f!==null&&(!(f.expirationTime>M)||j&&!L());){var V=f.callback;if(typeof V=="function"){f.callback=null,m=f.priorityLevel;var W=V(f.expirationTime<=M);M=e.unstable_now(),typeof W=="function"?f.callback=W:f===n(l)&&r(l),h(M)}else r(l);f=n(l)}if(f!==null)var Xt=!0;else{var Ye=n(u);Ye!==null&&Qe(w,Ye.startTime-M),Xt=!1}return Xt}finally{f=null,m=A,g=!1}}var k=!1,T=null,z=-1,I=5,C=-1;function L(){return!(e.unstable_now()-C<I)}function R(){if(T!==null){var j=e.unstable_now();C=j;var M=!0;try{M=T(!0,j)}finally{M?N():(k=!1,T=null)}}else k=!1}var N;if(typeof p=="function")N=function(){p(R)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,re=U.port2;U.port1.onmessage=R,N=function(){re.postMessage(null)}}else N=function(){E(R,0)};function me(j){T=j,k||(k=!0,N())}function Qe(j,M){z=E(function(){j(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,me(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var M=3;break;default:M=m}var A=m;m=M;try{return j()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var A=m;m=j;try{return M()}finally{m=A}},e.unstable_scheduleCallback=function(j,M,A){var V=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?V+A:V):A=V,j){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=A+W,j={id:c++,callback:M,priorityLevel:j,startTime:A,expirationTime:W,sortIndex:-1},A>V?(j.sortIndex=A,t(u,j),n(l)===null&&j===n(u)&&(y?(d(z),z=-1):y=!0,Qe(w,A-V))):(j.sortIndex=W,t(l,j),x||g||(x=!0,me(S))),j},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(j){var M=m;return function(){var A=m;m=M;try{return j.apply(this,arguments)}finally{m=A}}}})(jc);Ic.exports=jc;var Wp=Ic.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=b,Re=Wp;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,Cr={};function pn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,Hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},Ha={};function Gp(e){return Ms.call(Ha,e)?!0:Ms.call(Wa,e)?!1:Hp.test(e)?Ha[e]=!0:(Wa[e]=!0,!1)}function Up(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qp(e,t,n,r){if(t===null||typeof t>"u"||Up(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fl=/[\-:]([a-z])/g;function Bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fl,Bl);he[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fl,Bl);he[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fl,Bl);he[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qp(t,n,i,r)&&(n=null),r||i===null?Gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),vn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Os=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Ls=Symbol.for("react.suspense"),Ns=Symbol.for("react.suspense_list"),Gl=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Ac=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Qo;function ur(e){if(Qo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qo=t&&t[1]||""}return`
`+Qo+e}var Yo=!1;function Xo(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Yp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function As(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case vn:return"Portal";case Os:return"Profiler";case Wl:return"StrictMode";case Ls:return"Suspense";case Ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nc:return(e.displayName||"Context")+".Consumer";case Lc:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gl:return t=e.displayName||null,t!==null?t:As(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return As(e(t))}catch{}}return null}function Xp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return As(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kp(e){var t=Rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ei(e){e._valueTracker||(e._valueTracker=Kp(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bc(e,t){t=t.checked,t!=null&&Vl(e,"checked",t,!1)}function $s(e,t){bc(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&bs(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bs(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ds(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(cr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Dc(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ti,Bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ti=ti||document.createElement("div"),ti.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ti.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Wc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Zp=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bs(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function Ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Mn=null,On=null;function Ka(e){if(e=Qr(e)){if(typeof Hs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=_o(t),Hs(e.stateNode,e.type,t))}}function Hc(e){Mn?On?On.push(e):On=[e]:Mn=e}function Gc(){if(Mn){var e=Mn,t=On;if(On=Mn=null,Ka(e),t)for(e=0;e<t.length;e++)Ka(t[e])}}function Uc(e,t){return e(t)}function Qc(){}var Ko=!1;function Yc(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return Uc(e,t,n)}finally{Ko=!1,(Mn!==null||On!==null)&&(Qc(),Gc())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=_o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Gs=!1;if(xt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Gs=!1}function Jp(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var mr=!1,Ui=null,Qi=!1,Us=null,eh={onError:function(e){mr=!0,Ui=e}};function th(e,t,n,r,i,o,s,a,l){mr=!1,Ui=null,Jp.apply(eh,arguments)}function nh(e,t,n,r,i,o,s,a,l){if(th.apply(this,arguments),mr){if(mr){var u=Ui;mr=!1,Ui=null}else throw Error(_(198));Qi||(Qi=!0,Us=u)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qa(e){if(hn(e)!==e)throw Error(_(188))}function rh(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qa(i),e;if(o===r)return qa(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Kc(e){return e=rh(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var Zc=Re.unstable_scheduleCallback,Za=Re.unstable_cancelCallback,ih=Re.unstable_shouldYield,oh=Re.unstable_requestPaint,ie=Re.unstable_now,sh=Re.unstable_getCurrentPriorityLevel,Ql=Re.unstable_ImmediatePriority,Jc=Re.unstable_UserBlockingPriority,Yi=Re.unstable_NormalPriority,lh=Re.unstable_LowPriority,ed=Re.unstable_IdlePriority,To=null,at=null;function ah(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:dh,uh=Math.log,ch=Math.LN2;function dh(e){return e>>>=0,e===0?32:31-(uh(e)/ch|0)|0}var ni=64,ri=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=dr(a):(o&=s,o!==0&&(r=dr(o)))}else s=n&~i,s!==0?r=dr(s):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function fh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ph(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Je(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=fh(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function td(){var e=ni;return ni<<=1,!(ni&4194240)&&(ni=64),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function hh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rd,Xl,id,od,sd,Ys=!1,ii=[],At=null,Rt=null,$t=null,_r=new Map,Ir=new Map,jt=[],mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ja(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qr(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function gh(e,t,n,r,i){switch(t){case"focusin":return At=rr(At,e,t,n,r,i),!0;case"dragenter":return Rt=rr(Rt,e,t,n,r,i),!0;case"mouseover":return $t=rr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _r.set(o,rr(_r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,rr(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function ld(e){var t=Jt(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xc(n),t!==null){e.blockedOn=t,sd(e.priority,function(){id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=Qr(n),t!==null&&Xl(t),e.blockedOn=n,!1;t.shift()}return!0}function eu(e,t,n){Ii(e)&&n.delete(t)}function vh(){Ys=!1,At!==null&&Ii(At)&&(At=null),Rt!==null&&Ii(Rt)&&(Rt=null),$t!==null&&Ii($t)&&($t=null),_r.forEach(eu),Ir.forEach(eu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,vh)))}function jr(e){function t(i){return ir(i,e)}if(0<ii.length){ir(ii[0],e);for(var n=1;n<ii.length;n++){var r=ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&ir(At,e),Rt!==null&&ir(Rt,e),$t!==null&&ir($t,e),_r.forEach(t),Ir.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)ld(n),n.blockedOn===null&&jt.shift()}var Ln=kt.ReactCurrentBatchConfig,Ki=!0;function yh(e,t,n,r){var i=G,o=Ln.transition;Ln.transition=null;try{G=1,Kl(e,t,n,r)}finally{G=i,Ln.transition=o}}function xh(e,t,n,r){var i=G,o=Ln.transition;Ln.transition=null;try{G=4,Kl(e,t,n,r)}finally{G=i,Ln.transition=o}}function Kl(e,t,n,r){if(Ki){var i=Xs(e,t,n,r);if(i===null)ls(e,t,r,qi,n),Ja(e,r);else if(gh(i,e,t,n,r))r.stopPropagation();else if(Ja(e,r),t&4&&-1<mh.indexOf(e)){for(;i!==null;){var o=Qr(i);if(o!==null&&rd(o),o=Xs(e,t,n,r),o===null&&ls(e,t,r,qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var qi=null;function Xs(e,t,n,r){if(qi=null,e=Ul(r),e=Jt(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qi=e,null}function ad(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Ql:return 1;case Jc:return 4;case Yi:case lh:return 16;case ed:return 536870912;default:return 16}default:return 16}}var Ot=null,ql=null,ji=null;function ud(){if(ji)return ji;var e,t=ql,n=t.length,r,i="value"in Ot?Ot.value:Ot.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oi(){return!0}function tu(){return!1}function be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oi:tu,this.isPropagationStopped=tu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oi)},persist:function(){},isPersistent:oi}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=be(Kn),Ur=ee({},Kn,{view:0,detail:0}),wh=be(Ur),Zo,Jo,or,Co=ee({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Zo=e.screenX-or.screenX,Jo=e.screenY-or.screenY):Jo=Zo=0,or=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),nu=be(Co),Sh=ee({},Co,{dataTransfer:0}),Eh=be(Sh),kh=ee({},Ur,{relatedTarget:0}),es=be(kh),Th=ee({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ch=be(Th),Ph=ee({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zh=be(Ph),_h=ee({},Kn,{data:0}),ru=be(_h),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mh[e])?!!t[e]:!1}function Jl(){return Oh}var Lh=ee({},Ur,{key:function(e){if(e.key){var t=Ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nh=be(Lh),Ah=ee({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=be(Ah),Rh=ee({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),$h=be(Rh),bh=ee({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dh=be(bh),Fh=ee({},Co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bh=be(Fh),Vh=[9,13,27,32],ea=xt&&"CompositionEvent"in window,gr=null;xt&&"documentMode"in document&&(gr=document.documentMode);var Wh=xt&&"TextEvent"in window&&!gr,cd=xt&&(!ea||gr&&8<gr&&11>=gr),ou=String.fromCharCode(32),su=!1;function dd(e,t){switch(e){case"keyup":return Vh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Hh(e,t){switch(e){case"compositionend":return fd(t);case"keypress":return t.which!==32?null:(su=!0,ou);case"textInput":return e=t.data,e===ou&&su?null:e;default:return null}}function Gh(e,t){if(xn)return e==="compositionend"||!ea&&dd(e,t)?(e=ud(),ji=ql=Ot=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cd&&t.locale!=="ko"?null:t.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uh[e.type]:t==="textarea"}function pd(e,t,n,r){Hc(r),t=Zi(t,"onChange"),0<t.length&&(n=new Zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Mr=null;function Qh(e){Td(e,0)}function Po(e){var t=En(e);if($c(t))return e}function Yh(e,t){if(e==="change")return t}var hd=!1;if(xt){var ts;if(xt){var ns="oninput"in document;if(!ns){var au=document.createElement("div");au.setAttribute("oninput","return;"),ns=typeof au.oninput=="function"}ts=ns}else ts=!1;hd=ts&&(!document.documentMode||9<document.documentMode)}function uu(){vr&&(vr.detachEvent("onpropertychange",md),Mr=vr=null)}function md(e){if(e.propertyName==="value"&&Po(Mr)){var t=[];pd(t,Mr,e,Ul(e)),Yc(Qh,t)}}function Xh(e,t,n){e==="focusin"?(uu(),vr=t,Mr=n,vr.attachEvent("onpropertychange",md)):e==="focusout"&&uu()}function Kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(Mr)}function qh(e,t){if(e==="click")return Po(t)}function Zh(e,t){if(e==="input"||e==="change")return Po(t)}function Jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Jh;function Or(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,t){var n=cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vd(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function em(e){var t=vd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gd(n.ownerDocument.documentElement,n)){if(r!==null&&ta(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=du(n,o);var s=du(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tm=xt&&"documentMode"in document&&11>=document.documentMode,wn=null,Ks=null,yr=null,qs=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qs||wn==null||wn!==Gi(r)||(r=wn,"selectionStart"in r&&ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Or(yr,r)||(yr=r,r=Zi(Ks,"onSelect"),0<r.length&&(t=new Zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},rs={},yd={};xt&&(yd=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function zo(e){if(rs[e])return rs[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yd)return rs[e]=t[n];return e}var xd=zo("animationend"),wd=zo("animationiteration"),Sd=zo("animationstart"),Ed=zo("transitionend"),kd=new Map,pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){kd.set(e,t),pn(t,[e])}for(var is=0;is<pu.length;is++){var os=pu[is],nm=os.toLowerCase(),rm=os[0].toUpperCase()+os.slice(1);Ut(nm,"on"+rm)}Ut(xd,"onAnimationEnd");Ut(wd,"onAnimationIteration");Ut(Sd,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(Ed,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function hu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,nh(r,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;hu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;hu(i,a,u),o=l}}}if(Qi)throw e=Us,Qi=!1,Us=null,e}function Y(e,t){var n=t[nl];n===void 0&&(n=t[nl]=new Set);var r=e+"__bubble";n.has(r)||(Cd(t,e,2,!1),n.add(r))}function ss(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var li="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[li]){e[li]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(im.has(n)||ss(n,!1,e),ss(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[li]||(t[li]=!0,ss("selectionchange",!1,t))}}function Cd(e,t,n,r){switch(ad(t)){case 1:var i=yh;break;case 4:i=xh;break;default:i=Kl}n=i.bind(null,t,n,e),i=void 0,!Gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Jt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Yc(function(){var u=o,c=Ul(n),f=[];e:{var m=kd.get(e);if(m!==void 0){var g=Zl,x=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":g=Nh;break;case"focusin":x="focus",g=es;break;case"focusout":x="blur",g=es;break;case"beforeblur":case"afterblur":g=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$h;break;case xd:case wd:case Sd:g=Ch;break;case Ed:g=Dh;break;case"scroll":g=wh;break;case"wheel":g=Bh;break;case"copy":case"cut":case"paste":g=zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=iu}var y=(t&4)!==0,E=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var p=u,h;p!==null;){h=p;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,d!==null&&(w=zr(p,d),w!=null&&y.push(Nr(p,w,h)))),E)break;p=p.return}0<y.length&&(m=new g(m,x,null,n,c),f.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Ws&&(x=n.relatedTarget||n.fromElement)&&(Jt(x)||x[wt]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Jt(x):null,x!==null&&(E=hn(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=nu,w="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(y=iu,w="onPointerLeave",d="onPointerEnter",p="pointer"),E=g==null?m:En(g),h=x==null?m:En(x),m=new y(w,p+"leave",g,n,c),m.target=E,m.relatedTarget=h,w=null,Jt(c)===u&&(y=new y(d,p+"enter",x,n,c),y.target=h,y.relatedTarget=E,w=y),E=w,g&&x)t:{for(y=g,d=x,p=0,h=y;h;h=mn(h))p++;for(h=0,w=d;w;w=mn(w))h++;for(;0<p-h;)y=mn(y),p--;for(;0<h-p;)d=mn(d),h--;for(;p--;){if(y===d||d!==null&&y===d.alternate)break t;y=mn(y),d=mn(d)}y=null}else y=null;g!==null&&mu(f,m,g,y,!1),x!==null&&E!==null&&mu(f,E,x,y,!0)}}e:{if(m=u?En(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=Yh;else if(lu(m))if(hd)S=Zh;else{S=Kh;var k=Xh}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=qh);if(S&&(S=S(e,u))){pd(f,S,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&bs(m,"number",m.value)}switch(k=u?En(u):window,e){case"focusin":(lu(k)||k.contentEditable==="true")&&(wn=k,Ks=u,yr=null);break;case"focusout":yr=Ks=wn=null;break;case"mousedown":qs=!0;break;case"contextmenu":case"mouseup":case"dragend":qs=!1,fu(f,n,c);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":fu(f,n,c)}var T;if(ea)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else xn?dd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(cd&&n.locale!=="ko"&&(xn||z!=="onCompositionStart"?z==="onCompositionEnd"&&xn&&(T=ud()):(Ot=c,ql="value"in Ot?Ot.value:Ot.textContent,xn=!0)),k=Zi(u,z),0<k.length&&(z=new ru(z,e,null,n,c),f.push({event:z,listeners:k}),T?z.data=T:(T=fd(n),T!==null&&(z.data=T)))),(T=Wh?Hh(e,n):Gh(e,n))&&(u=Zi(u,"onBeforeInput"),0<u.length&&(c=new ru("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}Td(f,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zr(e,n),o!=null&&r.unshift(Nr(e,o,i)),o=zr(e,t),o!=null&&r.push(Nr(e,o,i))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=zr(n,o),l!=null&&s.unshift(Nr(n,l,a))):i||(l=zr(n,o),l!=null&&s.push(Nr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var om=/\r\n?/g,sm=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(sm,"")}function ai(e,t,n){if(t=gu(t),gu(e)!==t&&n)throw Error(_(425))}function Ji(){}var Zs=null,Js=null;function el(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tl=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,vu=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof vu<"u"?function(e){return vu.resolve(null).then(e).catch(um)}:tl;function um(e){setTimeout(function(){throw e})}function as(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);jr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),st="__reactFiber$"+qn,Ar="__reactProps$"+qn,wt="__reactContainer$"+qn,nl="__reactEvents$"+qn,cm="__reactListeners$"+qn,dm="__reactHandles$"+qn;function Jt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[st])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[st]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function _o(e){return e[Ar]||null}var rl=[],kn=-1;function Qt(e){return{current:e}}function K(e){0>kn||(e.current=rl[kn],rl[kn]=null,kn--)}function Q(e,t){kn++,rl[kn]=e.current,e.current=t}var Gt={},we=Qt(Gt),_e=Qt(!1),ln=Gt;function bn(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function eo(){K(_e),K(we)}function xu(e,t,n){if(we.current!==Gt)throw Error(_(168));Q(we,t),Q(_e,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Xp(e)||"Unknown",i));return ee({},n,r)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,ln=we.current,Q(we,e),Q(_e,_e.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Pd(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,K(_e),K(we),Q(we,e)):K(_e),Q(_e,n)}var mt=null,Io=!1,us=!1;function zd(e){mt===null?mt=[e]:mt.push(e)}function fm(e){Io=!0,zd(e)}function Yt(){if(!us&&mt!==null){us=!0;var e=0,t=G;try{var n=mt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Io=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),Zc(Ql,Yt),i}finally{G=t,us=!1}}return null}var Tn=[],Cn=0,no=null,ro=0,Fe=[],Be=0,an=null,gt=1,vt="";function qt(e,t){Tn[Cn++]=ro,Tn[Cn++]=no,no=e,ro=t}function _d(e,t,n){Fe[Be++]=gt,Fe[Be++]=vt,Fe[Be++]=an,an=e;var r=gt;e=vt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,gt=1<<32-Je(t)+i|n<<i|r,vt=o+e}else gt=1<<o|n<<i|r,vt=e}function na(e){e.return!==null&&(qt(e,1),_d(e,1,0))}function ra(e){for(;e===no;)no=Tn[--Cn],Tn[Cn]=null,ro=Tn[--Cn],Tn[Cn]=null;for(;e===an;)an=Fe[--Be],Fe[Be]=null,vt=Fe[--Be],Fe[Be]=null,gt=Fe[--Be],Fe[Be]=null}var Ae=null,Ne=null,q=!1,Ze=null;function Id(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,Ne=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,Ne=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(q){var t=Ne;if(t){var n=t;if(!Su(e,t)){if(il(e))throw Error(_(418));t=bt(n.nextSibling);var r=Ae;t&&Su(e,t)?Id(r,n):(e.flags=e.flags&-4097|2,q=!1,Ae=e)}}else{if(il(e))throw Error(_(418));e.flags=e.flags&-4097|2,q=!1,Ae=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function ui(e){if(e!==Ae)return!1;if(!q)return Eu(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!el(e.type,e.memoizedProps)),t&&(t=Ne)){if(il(e))throw jd(),Error(_(418));for(;t;)Id(e,t),t=bt(t.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Ae?bt(e.stateNode.nextSibling):null;return!0}function jd(){for(var e=Ne;e;)e=bt(e.nextSibling)}function Dn(){Ne=Ae=null,q=!1}function ia(e){Ze===null?Ze=[e]:Ze.push(e)}var pm=kt.ReactCurrentBatchConfig;function Ke(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var io=Qt(null),oo=null,Pn=null,oa=null;function sa(){oa=Pn=oo=null}function la(e){var t=io.current;K(io),e._currentValue=t}function sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nn(e,t){oo=e,oa=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(oa!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(oo===null)throw Error(_(308));Pn=e,oo.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var en=null;function aa(e){en===null?en=[e]:en.push(e)}function Md(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function Oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var i=e.updateQueue;It=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,y=a;switch(m=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,m=typeof x=="function"?x.call(g,f,m):x,m==null)break e;f=ee({},f,m);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=f}}function Tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Ld=new Mc.Component().refs;function ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Bt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(et(t,e,i,r),Oi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Bt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(et(t,e,i,r),Oi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Bt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(et(t,e,r,n),Oi(t,e,r))}};function Cu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,o):!0}function Nd(e,t,n){var r=!1,i=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=Ie(t)?ln:we.current,r=t.contextTypes,o=(r=r!=null)?bn(e,i):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ld,ua(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=Ie(t)?ln:we.current,i.context=bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ll(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jo.enqueueReplaceState(i,i.state,null),so(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Ld&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ci(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function Ad(e){function t(d,p){if(e){var h=d.deletions;h===null?(d.deletions=[p],d.flags|=16):h.push(p)}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function i(d,p){return d=Vt(d,p),d.index=0,d.sibling=null,d}function o(d,p,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<p?(d.flags|=2,p):h):(d.flags|=2,p)):(d.flags|=1048576,p)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,p,h,w){return p===null||p.tag!==6?(p=gs(h,d.mode,w),p.return=d,p):(p=i(p,h),p.return=d,p)}function l(d,p,h,w){var S=h.type;return S===yn?c(d,p,h.props.children,w,h.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&zu(S)===p.type)?(w=i(p,h.props),w.ref=sr(d,p,h),w.return=d,w):(w=bi(h.type,h.key,h.props,null,d.mode,w),w.ref=sr(d,p,h),w.return=d,w)}function u(d,p,h,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=vs(h,d.mode,w),p.return=d,p):(p=i(p,h.children||[]),p.return=d,p)}function c(d,p,h,w,S){return p===null||p.tag!==7?(p=on(h,d.mode,w,S),p.return=d,p):(p=i(p,h),p.return=d,p)}function f(d,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=gs(""+p,d.mode,h),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jr:return h=bi(p.type,p.key,p.props,null,d.mode,h),h.ref=sr(d,null,p),h.return=d,h;case vn:return p=vs(p,d.mode,h),p.return=d,p;case _t:var w=p._init;return f(d,w(p._payload),h)}if(cr(p)||tr(p))return p=on(p,d.mode,h,null),p.return=d,p;ci(d,p)}return null}function m(d,p,h,w){var S=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(d,p,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Jr:return h.key===S?l(d,p,h,w):null;case vn:return h.key===S?u(d,p,h,w):null;case _t:return S=h._init,m(d,p,S(h._payload),w)}if(cr(h)||tr(h))return S!==null?null:c(d,p,h,w,null);ci(d,h)}return null}function g(d,p,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(h)||null,a(p,d,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jr:return d=d.get(w.key===null?h:w.key)||null,l(p,d,w,S);case vn:return d=d.get(w.key===null?h:w.key)||null,u(p,d,w,S);case _t:var k=w._init;return g(d,p,h,k(w._payload),S)}if(cr(w)||tr(w))return d=d.get(h)||null,c(p,d,w,S,null);ci(p,w)}return null}function x(d,p,h,w){for(var S=null,k=null,T=p,z=p=0,I=null;T!==null&&z<h.length;z++){T.index>z?(I=T,T=null):I=T.sibling;var C=m(d,T,h[z],w);if(C===null){T===null&&(T=I);break}e&&T&&C.alternate===null&&t(d,T),p=o(C,p,z),k===null?S=C:k.sibling=C,k=C,T=I}if(z===h.length)return n(d,T),q&&qt(d,z),S;if(T===null){for(;z<h.length;z++)T=f(d,h[z],w),T!==null&&(p=o(T,p,z),k===null?S=T:k.sibling=T,k=T);return q&&qt(d,z),S}for(T=r(d,T);z<h.length;z++)I=g(T,d,z,h[z],w),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?z:I.key),p=o(I,p,z),k===null?S=I:k.sibling=I,k=I);return e&&T.forEach(function(L){return t(d,L)}),q&&qt(d,z),S}function y(d,p,h,w){var S=tr(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var k=S=null,T=p,z=p=0,I=null,C=h.next();T!==null&&!C.done;z++,C=h.next()){T.index>z?(I=T,T=null):I=T.sibling;var L=m(d,T,C.value,w);if(L===null){T===null&&(T=I);break}e&&T&&L.alternate===null&&t(d,T),p=o(L,p,z),k===null?S=L:k.sibling=L,k=L,T=I}if(C.done)return n(d,T),q&&qt(d,z),S;if(T===null){for(;!C.done;z++,C=h.next())C=f(d,C.value,w),C!==null&&(p=o(C,p,z),k===null?S=C:k.sibling=C,k=C);return q&&qt(d,z),S}for(T=r(d,T);!C.done;z++,C=h.next())C=g(T,d,z,C.value,w),C!==null&&(e&&C.alternate!==null&&T.delete(C.key===null?z:C.key),p=o(C,p,z),k===null?S=C:k.sibling=C,k=C);return e&&T.forEach(function(R){return t(d,R)}),q&&qt(d,z),S}function E(d,p,h,w){if(typeof h=="object"&&h!==null&&h.type===yn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Jr:e:{for(var S=h.key,k=p;k!==null;){if(k.key===S){if(S=h.type,S===yn){if(k.tag===7){n(d,k.sibling),p=i(k,h.props.children),p.return=d,d=p;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===_t&&zu(S)===k.type){n(d,k.sibling),p=i(k,h.props),p.ref=sr(d,k,h),p.return=d,d=p;break e}n(d,k);break}else t(d,k);k=k.sibling}h.type===yn?(p=on(h.props.children,d.mode,w,h.key),p.return=d,d=p):(w=bi(h.type,h.key,h.props,null,d.mode,w),w.ref=sr(d,p,h),w.return=d,d=w)}return s(d);case vn:e:{for(k=h.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(d,p.sibling),p=i(p,h.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=vs(h,d.mode,w),p.return=d,d=p}return s(d);case _t:return k=h._init,E(d,p,k(h._payload),w)}if(cr(h))return x(d,p,h,w);if(tr(h))return y(d,p,h,w);ci(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(d,p.sibling),p=i(p,h),p.return=d,d=p):(n(d,p),p=gs(h,d.mode,w),p.return=d,d=p),s(d)):n(d,p)}return E}var Fn=Ad(!0),Rd=Ad(!1),Yr={},ut=Qt(Yr),Rr=Qt(Yr),$r=Qt(Yr);function tn(e){if(e===Yr)throw Error(_(174));return e}function ca(e,t){switch(Q($r,t),Q(Rr,e),Q(ut,Yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fs(t,e)}K(ut),Q(ut,t)}function Bn(){K(ut),K(Rr),K($r)}function $d(e){tn($r.current);var t=tn(ut.current),n=Fs(t,e.type);t!==n&&(Q(Rr,e),Q(ut,n))}function da(e){Rr.current===e&&(K(ut),K(Rr))}var Z=Qt(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function fa(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var Li=kt.ReactCurrentDispatcher,ds=kt.ReactCurrentBatchConfig,un=0,J=null,le=null,ue=null,ao=!1,xr=!1,br=0,hm=0;function ge(){throw Error(_(321))}function pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function ha(e,t,n,r,i,o){if(un=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Li.current=e===null||e.memoizedState===null?ym:xm,e=n(r,i),xr){o=0;do{if(xr=!1,br=0,25<=o)throw Error(_(301));o+=1,ue=le=null,t.updateQueue=null,Li.current=wm,e=n(r,i)}while(xr)}if(Li.current=uo,t=le!==null&&le.next!==null,un=0,ue=le=J=null,ao=!1,t)throw Error(_(300));return e}function ma(){var e=br!==0;return br=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Ge(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(_(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function Dr(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=Ge(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((un&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,J.lanes|=c,cn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,nt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=Ge(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);nt(o,t.memoizedState)||(ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function bd(){}function Dd(e,t){var n=J,r=Ge(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,ga(Vd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Bd.bind(null,n,r,i,t),void 0,null),de===null)throw Error(_(349));un&30||Fd(n,t,i)}return i}function Fd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bd(e,t,n,r){t.value=n,t.getSnapshot=r,Wd(t)&&Hd(e)}function Vd(e,t,n){return n(function(){Wd(t)&&Hd(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Hd(e){var t=St(e,1);t!==null&&et(t,e,1,-1)}function _u(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,J,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gd(){return Ge().memoizedState}function Ni(e,t,n,r){var i=it();J.flags|=e,i.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(le!==null){var s=le.memoizedState;if(o=s.destroy,r!==null&&pa(r,s.deps)){i.memoizedState=Fr(t,n,o,r);return}}J.flags|=e,i.memoizedState=Fr(1|t,n,o,r)}function Iu(e,t){return Ni(8390656,8,e,t)}function ga(e,t){return Mo(2048,8,e,t)}function Ud(e,t){return Mo(4,2,e,t)}function Qd(e,t){return Mo(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xd(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,Yd.bind(null,t,e),n)}function va(){}function Kd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zd(e,t,n){return un&21?(nt(n,t)||(n=td(),J.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function mm(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=ds.transition;ds.transition={};try{e(!1),t()}finally{G=n,ds.transition=r}}function Jd(){return Ge().memoizedState}function gm(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ef(e))tf(t,n);else if(n=Md(e,t,n,r),n!==null){var i=Ee();et(n,e,r,i),nf(n,t,r)}}function vm(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ef(e))tf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,s)){var l=t.interleaved;l===null?(i.next=i,aa(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Md(e,t,i,r),n!==null&&(i=Ee(),et(n,e,r,i),nf(n,t,r))}}function ef(e){var t=e.alternate;return e===J||t!==null&&t===J}function tf(e,t){xr=ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}var uo={readContext:He,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},ym={readContext:He,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gm.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:va,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=mm.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=it();if(q){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));un&30||Fd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Iu(Vd.bind(null,r,o,e),[e]),r.flags|=2048,Fr(9,Bd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=de.identifierPrefix;if(q){var n=vt,r=gt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=hm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xm={readContext:He,useCallback:Kd,useContext:He,useEffect:ga,useImperativeHandle:Xd,useInsertionEffect:Ud,useLayoutEffect:Qd,useMemo:qd,useReducer:fs,useRef:Gd,useState:function(){return fs(Dr)},useDebugValue:va,useDeferredValue:function(e){var t=Ge();return Zd(t,le.memoizedState,e)},useTransition:function(){var e=fs(Dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:Dd,useId:Jd,unstable_isNewReconciler:!1},wm={readContext:He,useCallback:Kd,useContext:He,useEffect:ga,useImperativeHandle:Xd,useInsertionEffect:Ud,useLayoutEffect:Qd,useMemo:qd,useReducer:ps,useRef:Gd,useState:function(){return ps(Dr)},useDebugValue:va,useDeferredValue:function(e){var t=Ge();return le===null?t.memoizedState=e:Zd(t,le.memoizedState,e)},useTransition:function(){var e=ps(Dr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:bd,useSyncExternalStore:Dd,useId:Jd,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=Yp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function rf(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,xl=r),ul(e,t)},n}function of(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ul(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ul(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Am.bind(null,e,t,n),t.then(e,e))}function Mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ou(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Em=kt.ReactCurrentOwner,ze=!1;function Se(e,t,n,r){t.child=e===null?Rd(t,null,n,r):Fn(t,e.child,n,r)}function Lu(e,t,n,r,i){n=n.render;var o=t.ref;return Nn(t,i),r=ha(e,t,n,r,o,i),n=ma(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(q&&n&&na(t),t.flags|=1,Se(e,t,r,i),t.child)}function Nu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ca(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sf(e,t,o,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(s,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Or(o,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,Et(e,t,i)}return cl(e,t,n,r,i)}function lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(_n,Oe),Oe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(_n,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(_n,Oe),Oe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(_n,Oe),Oe|=r;return Se(e,t,i,n),t.child}function af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cl(e,t,n,r,i){var o=Ie(n)?ln:we.current;return o=bn(t,o),Nn(t,i),n=ha(e,t,n,r,o,i),r=ma(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(q&&r&&na(t),t.flags|=1,Se(e,t,n,i),t.child)}function Au(e,t,n,r,i){if(Ie(n)){var o=!0;to(t)}else o=!1;if(Nn(t,i),t.stateNode===null)Ai(e,t),Nd(t,n,r),al(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Ie(n)?ln:we.current,u=bn(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pu(t,s,r,u),It=!1;var m=t.memoizedState;s.state=m,so(t,r,s,i),l=t.memoizedState,a!==r||m!==l||_e.current||It?(typeof c=="function"&&(ll(t,n,c,r),l=t.memoizedState),(a=It||Cu(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Od(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ke(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Ie(n)?ln:we.current,l=bn(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Pu(t,s,r,l),It=!1,m=t.memoizedState,s.state=m,so(t,r,s,i);var x=t.memoizedState;a!==f||m!==x||_e.current||It?(typeof g=="function"&&(ll(t,n,g,r),x=t.memoizedState),(u=It||Cu(t,n,u,r,m,x,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return dl(e,t,n,r,o,i)}function dl(e,t,n,r,i,o){af(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&wu(t,n,!1),Et(e,t,o);r=t.stateNode,Em.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Fn(t,e.child,null,o),t.child=Fn(t,null,a,o)):Se(e,t,a,o),t.memoizedState=r.state,i&&wu(t,n,!0),t.child}function uf(e){var t=e.stateNode;t.pendingContext?xu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xu(e,t.context,!1),ca(e,t.containerInfo)}function Ru(e,t,n,r,i){return Dn(),ia(i),t.flags|=256,Se(e,t,n,r),t.child}var fl={dehydrated:null,treeContext:null,retryLane:0};function pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function cf(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(Z,i&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=No(s,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pl(n),t.memoizedState=fl,e):ya(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return km(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Vt(a,o):(o=on(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?pl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=fl,r}return o=e.child,e=o.sibling,r=Vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ya(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function di(e,t,n,r){return r!==null&&ia(r),Fn(t,e.child,null,n),e=ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function km(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=hs(Error(_(422))),di(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=No({mode:"visible",children:r.children},i,0,null),o=on(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Fn(t,e.child,null,s),t.child.memoizedState=pl(s),t.memoizedState=fl,o);if(!(t.mode&1))return di(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=hs(o,r,void 0),di(e,t,s,r)}if(a=(s&e.childLanes)!==0,ze||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),et(r,e,i,-1))}return Ta(),r=hs(Error(_(421))),di(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=bt(i.nextSibling),Ae=t,q=!0,Ze=null,e!==null&&(Fe[Be++]=gt,Fe[Be++]=vt,Fe[Be++]=an,gt=e.id,vt=e.overflow,an=t),t=ya(t,r.children),t.flags|=4096,t)}function $u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sl(e.return,t,n)}function ms(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function df(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$u(e,n,t);else if(e.tag===19)$u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ms(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ms(t,!0,n,null,o);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Tm(e,t,n){switch(t.tag){case 3:uf(t),Dn();break;case 5:$d(t);break;case 1:Ie(t.type)&&to(t);break;case 4:ca(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?cf(e,t,n):(Q(Z,Z.current&1),e=Et(e,t,n),e!==null?e.sibling:null);Q(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return df(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,lf(e,t,n)}return Et(e,t,n)}var ff,hl,pf,hf;ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hl=function(){};pf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(ut.current);var o=null;switch(n){case"input":i=Rs(e,i),r=Rs(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=Ds(e,i),r=Ds(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ji)}Bs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};hf=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cm(e,t,n){var r=t.pendingProps;switch(ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ie(t.type)&&eo(),ve(t),null;case 3:return r=t.stateNode,Bn(),K(_e),K(we),fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ui(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(El(Ze),Ze=null))),hl(e,t),ve(t),null;case 5:da(t);var i=tn($r.current);if(n=t.type,e!==null&&t.stateNode!=null)pf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ve(t),null}if(e=tn(ut.current),ui(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)Y(fr[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Ua(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":Ya(r,o),Y("invalid",r)}Bs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ai(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ai(r.textContent,a,e),i=["children",""+a]):Cr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":ei(r),Qa(r,o,!0);break;case"textarea":ei(r),Xa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ji)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[Ar]=r,ff(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vs(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)Y(fr[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":Ua(e,r),i=Rs(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Ya(e,r),i=Ds(e,r),Y("invalid",e);break;default:i=r}Bs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Wc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bc(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Cr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Y("scroll",e):l!=null&&Vl(e,o,l,s))}switch(n){case"input":ei(e),Qa(e,r,!1);break;case"textarea":ei(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jn(e,!!r.multiple,o,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)hf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=tn($r.current),tn(ut.current),ui(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ai(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ve(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ne!==null&&t.mode&1&&!(t.flags&128))jd(),Dn(),t.flags|=98560,o=!1;else if(o=ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[st]=t}else Dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Ze!==null&&(El(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ae===0&&(ae=3):Ta())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Bn(),hl(e,t),e===null&&Lr(t.stateNode.containerInfo),ve(t),null;case 10:return la(t.type._context),ve(t),null;case 17:return Ie(t.type)&&eo(),ve(t),null;case 19:if(K(Z),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=lo(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Wn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=lo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ve(t),null}else 2*ie()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=Z.current,Q(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Pm(e,t){switch(ra(t),t.tag){case 1:return Ie(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),K(_e),K(we),fa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return da(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return Bn(),null;case 10:return la(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var fi=!1,ye=!1,zm=typeof WeakSet=="function"?WeakSet:Set,O=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ml(e,t,n){try{n()}catch(r){te(e,t,r)}}var bu=!1;function _m(e,t){if(Zs=Ki,e=vd(),ta(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Js={focusedElem:e,selectionRange:n},Ki=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,E=x.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ke(t.type,y),E);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return x=bu,bu=!1,x}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ml(t,n,o)}i=i.next}while(i!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mf(e){var t=e.alternate;t!==null&&(e.alternate=null,mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ar],delete t[nl],delete t[cm],delete t[dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gf(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}var fe=null,qe=!1;function Pt(e,t,n){for(n=n.child;n!==null;)vf(e,t,n),n=n.sibling}function vf(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:ye||zn(n,t);case 6:var r=fe,i=qe;fe=null,Pt(e,t,n),fe=r,qe=i,fe!==null&&(qe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(qe?(e=fe,n=n.stateNode,e.nodeType===8?as(e.parentNode,n):e.nodeType===1&&as(e,n),jr(e)):as(fe,n.stateNode));break;case 4:r=fe,i=qe,fe=n.stateNode.containerInfo,qe=!0,Pt(e,t,n),fe=r,qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ml(n,t,s),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!ye&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Pt(e,t,n),ye=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zm),t.forEach(function(r){var i=$m.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,qe=!1;break e;case 3:fe=a.stateNode.containerInfo,qe=!0;break e;case 4:fe=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(fe===null)throw Error(_(160));vf(o,s,i),fe=null,qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}function yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),rt(e),r&4){try{wr(3,e,e.return),Oo(3,e)}catch(y){te(e,e.return,y)}try{wr(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:Xe(t,e),rt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(Xe(t,e),rt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(y){te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&bc(i,o),Vs(a,s);var u=Vs(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Wc(i,f):c==="dangerouslySetInnerHTML"?Bc(i,f):c==="children"?Pr(i,f):Vl(i,c,f,u)}switch(a){case"input":$s(i,o);break;case"textarea":Dc(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?jn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?jn(i,!!o.multiple,o.defaultValue,!0):jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(y){te(e,e.return,y)}}break;case 6:if(Xe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){te(e,e.return,y)}}break;case 3:if(Xe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:Xe(t,e),rt(e);break;case 13:Xe(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Sa=ie())),r&4&&Fu(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,Xe(t,e),ye=u):Xe(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(m=O,g=m.child,m.tag){case 0:case 11:case 14:case 15:wr(4,m,m.return);break;case 1:zn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:zn(m,m.return);break;case 22:if(m.memoizedState!==null){Vu(f);continue}}g!==null?(g.return=m,O=g):Vu(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vc("display",s))}catch(y){te(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){te(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xe(t,e),rt(e),r&4&&Fu(e);break;case 21:break;default:Xe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gf(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=Du(e);yl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Du(e);vl(e,a,s);break;default:throw Error(_(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){O=e,xf(e)}function xf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||fi;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=fi;var u=ye;if(fi=s,(ye=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?Wu(i):l!==null?(l.return=s,O=l):Wu(i);for(;o!==null;)O=o,xf(o),o=o.sibling;O=i,fi=a,ye=u}Bu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):Bu(e)}}function Bu(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Tu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&gl(t)}catch(m){te(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Vu(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Wu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(l){te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){te(t,i,l)}}var o=t.return;try{gl(t)}catch(l){te(t,o,l)}break;case 5:var s=t.return;try{gl(t)}catch(l){te(t,s,l)}}}catch(l){te(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var jm=Math.ceil,co=kt.ReactCurrentDispatcher,xa=kt.ReactCurrentOwner,We=kt.ReactCurrentBatchConfig,F=0,de=null,se=null,pe=0,Oe=0,_n=Qt(0),ae=0,Br=null,cn=0,Lo=0,wa=0,Sr=null,Ce=null,Sa=0,Wn=1/0,pt=null,fo=!1,xl=null,Ft=null,pi=!1,Lt=null,po=0,Er=0,wl=null,Ri=-1,$i=0;function Ee(){return F&6?ie():Ri!==-1?Ri:Ri=ie()}function Bt(e){return e.mode&1?F&2&&pe!==0?pe&-pe:pm.transition!==null?($i===0&&($i=td()),$i):(e=G,e!==0||(e=window.event,e=e===void 0?16:ad(e.type)),e):1}function et(e,t,n,r){if(50<Er)throw Er=0,wl=null,Error(_(185));Gr(e,n,r),(!(F&2)||e!==de)&&(e===de&&(!(F&2)&&(Lo|=n),ae===4&&Mt(e,pe)),je(e,r),n===1&&F===0&&!(t.mode&1)&&(Wn=ie()+500,Io&&Yt()))}function je(e,t){var n=e.callbackNode;ph(e,t);var r=Xi(e,e===de?pe:0);if(r===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Za(n),t===1)e.tag===0?fm(Hu.bind(null,e)):zd(Hu.bind(null,e)),am(function(){!(F&6)&&Yt()}),n=null;else{switch(nd(r)){case 1:n=Ql;break;case 4:n=Jc;break;case 16:n=Yi;break;case 536870912:n=ed;break;default:n=Yi}n=zf(n,wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wf(e,t){if(Ri=-1,$i=0,F&6)throw Error(_(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Xi(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ho(e,r);else{t=r;var i=F;F|=2;var o=Ef();(de!==e||pe!==t)&&(pt=null,Wn=ie()+500,rn(e,t));do try{Lm();break}catch(a){Sf(e,a)}while(1);sa(),co.current=o,F=i,se!==null?t=0:(de=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=Qs(e),i!==0&&(r=i,t=Sl(e,i))),t===1)throw n=Br,rn(e,0),Mt(e,r),je(e,ie()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mm(i)&&(t=ho(e,r),t===2&&(o=Qs(e),o!==0&&(r=o,t=Sl(e,o))),t===1))throw n=Br,rn(e,0),Mt(e,r),je(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Zt(e,Ce,pt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Sa+500-ie(),10<t)){if(Xi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tl(Zt.bind(null,e,Ce,pt),t);break}Zt(e,Ce,pt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Je(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jm(r/1960))-r,10<r){e.timeoutHandle=tl(Zt.bind(null,e,Ce,pt),r);break}Zt(e,Ce,pt);break;case 5:Zt(e,Ce,pt);break;default:throw Error(_(329))}}}return je(e,ie()),e.callbackNode===n?wf.bind(null,e):null}function Sl(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=ho(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&El(t)),e}function El(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~wa,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(F&6)throw Error(_(327));An();var t=Xi(e,0);if(!(t&1))return je(e,ie()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=Sl(e,r))}if(n===1)throw n=Br,rn(e,0),Mt(e,t),je(e,ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ce,pt),je(e,ie()),null}function Ea(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Wn=ie()+500,Io&&Yt())}}function dn(e){Lt!==null&&Lt.tag===0&&!(F&6)&&An();var t=F;F|=1;var n=We.transition,r=G;try{if(We.transition=null,G=1,e)return e()}finally{G=r,We.transition=n,F=t,!(F&6)&&Yt()}}function ka(){Oe=_n.current,K(_n)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lm(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(ra(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eo();break;case 3:Bn(),K(_e),K(we),fa();break;case 5:da(r);break;case 4:Bn();break;case 13:K(Z);break;case 19:K(Z);break;case 10:la(r.type._context);break;case 22:case 23:ka()}n=n.return}if(de=e,se=e=Vt(e.current,null),pe=Oe=t,ae=0,Br=null,wa=Lo=cn=0,Ce=Sr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}en=null}return e}function Sf(e,t){do{var n=se;try{if(sa(),Li.current=uo,ao){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ao=!1}if(un=0,ue=le=J=null,xr=!1,br=0,xa.current=null,n===null||n.return===null){ae=1,Br=t,se=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Mu(s);if(g!==null){g.flags&=-257,Ou(g,s,a,o,t),g.mode&1&&ju(o,u,t),t=g,l=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(l),t.updateQueue=y}else x.add(l);break e}else{if(!(t&1)){ju(o,u,t),Ta();break e}l=Error(_(426))}}else if(q&&a.mode&1){var E=Mu(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ou(E,s,a,o,t),ia(Vn(l,a));break e}}o=l=Vn(l,a),ae!==4&&(ae=2),Sr===null?Sr=[o]:Sr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=rf(o,l,t);ku(o,d);break e;case 1:a=l;var p=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ft===null||!Ft.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=of(o,a,t);ku(o,w);break e}}o=o.return}while(o!==null)}Tf(n)}catch(S){t=S,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function Ef(){var e=co.current;return co.current=uo,e===null?uo:e}function Ta(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(cn&268435455)&&!(Lo&268435455)||Mt(de,pe)}function ho(e,t){var n=F;F|=2;var r=Ef();(de!==e||pe!==t)&&(pt=null,rn(e,t));do try{Om();break}catch(i){Sf(e,i)}while(1);if(sa(),F=n,co.current=r,se!==null)throw Error(_(261));return de=null,pe=0,ae}function Om(){for(;se!==null;)kf(se)}function Lm(){for(;se!==null&&!ih();)kf(se)}function kf(e){var t=Pf(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?Tf(e):se=t,xa.current=null}function Tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Pm(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,se=null;return}}else if(n=Cm(n,t,Oe),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ae===0&&(ae=5)}function Zt(e,t,n){var r=G,i=We.transition;try{We.transition=null,G=1,Nm(e,t,n,r)}finally{We.transition=i,G=r}return null}function Nm(e,t,n,r){do An();while(Lt!==null);if(F&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(hh(e,o),e===de&&(se=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pi||(pi=!0,zf(Yi,function(){return An(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=We.transition,We.transition=null;var s=G;G=1;var a=F;F|=4,xa.current=null,_m(e,n),yf(n,e),em(Js),Ki=!!Zs,Js=Zs=null,e.current=n,Im(n),oh(),F=a,G=s,We.transition=o}else e.current=n;if(pi&&(pi=!1,Lt=e,po=i),o=e.pendingLanes,o===0&&(Ft=null),ah(n.stateNode),je(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fo)throw fo=!1,e=xl,xl=null,e;return po&1&&e.tag!==0&&An(),o=e.pendingLanes,o&1?e===wl?Er++:(Er=0,wl=e):Er=0,Yt(),null}function An(){if(Lt!==null){var e=nd(po),t=We.transition,n=G;try{if(We.transition=null,G=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,po=0,F&6)throw Error(_(331));var i=F;for(F|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:wr(8,c,o)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var m=c.sibling,g=c.return;if(mf(c),c===u){O=null;break}if(m!==null){m.return=g,O=m;break}O=g}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,O=d;break e}O=o.return}}var p=e.current;for(O=p;O!==null;){s=O;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,O=h;else e:for(s=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Oo(9,a)}}catch(S){te(a,a.return,S)}if(a===s){O=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,O=w;break e}O=a.return}}if(F=i,Yt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{G=n,We.transition=t}}return!1}function Gu(e,t,n){t=Vn(n,t),t=rf(e,t,1),e=Dt(e,t,1),t=Ee(),e!==null&&(Gr(e,1,t),je(e,t))}function te(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Vn(n,e),e=of(t,e,1),t=Dt(t,e,1),e=Ee(),t!==null&&(Gr(t,1,e),je(t,e));break}}t=t.return}}function Am(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>ie()-Sa?rn(e,0):wa|=n),je(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=ri,ri<<=1,!(ri&130023424)&&(ri=4194304)):t=1);var n=Ee();e=St(e,t),e!==null&&(Gr(e,t,n),je(e,n))}function Rm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function $m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Cf(e,n)}var Pf;Pf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Tm(e,t,n);ze=!!(e.flags&131072)}else ze=!1,q&&t.flags&1048576&&_d(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ai(e,t),e=t.pendingProps;var i=bn(t,we.current);Nn(t,n),i=ha(null,t,r,e,i,n);var o=ma();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,to(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ua(t),i.updater=jo,t.stateNode=i,i._reactInternals=t,al(t,r,e,n),t=dl(null,t,r,!0,o,n)):(t.tag=0,q&&o&&na(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ai(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Dm(r),e=Ke(r,e),i){case 0:t=cl(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Lu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Ke(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),cl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Au(e,t,r,i,n);case 3:e:{if(uf(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Od(e,t),so(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(_(423)),t),t=Ru(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(_(424)),t),t=Ru(e,t,r,n,i);break e}else for(Ne=bt(t.stateNode.containerInfo.firstChild),Ae=t,q=!0,Ze=null,n=Rd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===i){t=Et(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return $d(t),e===null&&ol(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,el(r,i)?s=null:o!==null&&el(r,o)&&(t.flags|=32),af(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&ol(t),null;case 13:return cf(e,t,n);case 4:return ca(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Lu(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Q(io,r._currentValue),r._currentValue=s,o!==null)if(nt(o.value,s)){if(o.children===i.children&&!_e.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),sl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nn(t,n),i=He(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Ke(r,t.pendingProps),i=Ke(r.type,i),Nu(e,t,r,i,n);case 15:return sf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ke(r,i),Ai(e,t),t.tag=1,Ie(r)?(e=!0,to(t)):e=!1,Nn(t,n),Nd(t,r,i),al(t,r,i,n),dl(null,t,r,!0,e,n);case 19:return df(e,t,n);case 22:return lf(e,t,n)}throw Error(_(156,t.tag))};function zf(e,t){return Zc(e,t)}function bm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new bm(e,t,n,r)}function Ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dm(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Gl)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ca(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case yn:return on(n.children,i,o,t);case Wl:s=8,i|=8;break;case Os:return e=Ve(12,n,t,i|2),e.elementType=Os,e.lanes=o,e;case Ls:return e=Ve(13,n,t,i),e.elementType=Ls,e.lanes=o,e;case Ns:return e=Ve(19,n,t,i),e.elementType=Ns,e.lanes=o,e;case Ac:return No(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lc:s=10;break e;case Nc:s=9;break e;case Hl:s=11;break e;case Gl:s=14;break e;case _t:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ve(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function No(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=Ac,e.lanes=n,e.stateNode={isHidden:!1},e}function gs(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function vs(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pa(e,t,n,r,i,o,s,a,l){return e=new Fm(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ve(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ua(o),e}function Bm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return Gt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Pd(e,n,t)}return t}function If(e,t,n,r,i,o,s,a,l){return e=Pa(n,r,!0,e,i,o,s,a,l),e.context=_f(null),n=e.current,r=Ee(),i=Bt(n),o=yt(r,i),o.callback=t??null,Dt(n,o,i),e.current.lanes=i,Gr(e,i,r),je(e,r),e}function Ao(e,t,n,r){var i=t.current,o=Ee(),s=Bt(i);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,s),e!==null&&(et(e,i,s,o),Oi(e,i,s)),s}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function za(e,t){Uu(e,t),(e=e.alternate)&&Uu(e,t)}function Vm(){return null}var jf=typeof reportError=="function"?reportError:function(e){console.error(e)};function _a(e){this._internalRoot=e}Ro.prototype.render=_a.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ao(e,t,null,null)};Ro.prototype.unmount=_a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Ao(null,e,null,null)}),t[wt]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&ld(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qu(){}function Wm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=mo(s);o.call(u)}}var s=If(t,r,e,0,null,!1,!1,"",Qu);return e._reactRootContainer=s,e[wt]=s.current,Lr(e.nodeType===8?e.parentNode:e),dn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=mo(l);a.call(u)}}var l=Pa(e,0,!1,null,null,!1,!1,"",Qu);return e._reactRootContainer=l,e[wt]=l.current,Lr(e.nodeType===8?e.parentNode:e),dn(function(){Ao(t,l,n,r)}),l}function bo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=mo(s);a.call(l)}}Ao(t,s,e,i)}else s=Wm(n,t,e,i,r);return mo(s)}rd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Yl(t,n|1),je(t,ie()),!(F&6)&&(Wn=ie()+500,Yt()))}break;case 13:dn(function(){var r=St(e,1);if(r!==null){var i=Ee();et(r,e,1,i)}}),za(e,1)}};Xl=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=Ee();et(t,e,134217728,n)}za(e,134217728)}};id=function(e){if(e.tag===13){var t=Bt(e),n=St(e,t);if(n!==null){var r=Ee();et(n,e,t,r)}za(e,t)}};od=function(){return G};sd=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Hs=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_o(r);if(!i)throw Error(_(90));$c(r),$s(r,i)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};Uc=Ea;Qc=dn;var Hm={usingClientEntryPoint:!1,Events:[Qr,En,_o,Hc,Gc,Ea]},ar={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gm={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Vm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hi.isDisabled&&hi.supportsFiber)try{To=hi.inject(Gm),at=hi}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(t))throw Error(_(200));return Bm(e,t,null,n)};$e.createRoot=function(e,t){if(!Ia(e))throw Error(_(299));var n=!1,r="",i=jf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pa(e,1,!1,null,null,n,!1,r,i),e[wt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new _a(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Kc(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return dn(e)};$e.hydrate=function(e,t,n){if(!$o(t))throw Error(_(200));return bo(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!Ia(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=jf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=If(t,null,e,1,n??null,i,!1,o,s),e[wt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ro(t)};$e.render=function(e,t,n){if(!$o(t))throw Error(_(200));return bo(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!$o(e))throw Error(_(40));return e._reactRootContainer?(dn(function(){bo(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};$e.unstable_batchedUpdates=Ea;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return bo(e,t,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),_c.exports=$e;var Um=_c.exports,Yu=Um;js.createRoot=Yu.createRoot,js.hydrateRoot=Yu.hydrateRoot;var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function Vr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var X="-ms-",kr="-moz-",B="-webkit-",Of="comm",Do="rule",ja="decl",Qm="@import",Lf="@keyframes",Ym="@layer",Nf=Math.abs,Ma=String.fromCharCode,kl=Object.assign;function Xm(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Af(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function Di(e,t,n){return e.indexOf(t,n)}function ce(e,t){return e.charCodeAt(t)|0}function Hn(e,t,n){return e.slice(t,n)}function ot(e){return e.length}function Rf(e){return e.length}function pr(e,t){return t.push(e),e}function Km(e,t){return e.map(t).join("")}function Xu(e,t){return e.filter(function(n){return!ht(n,t)})}var Fo=1,Gn=1,$f=0,Ue=0,oe=0,Zn="";function Bo(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Fo,column:Gn,length:s,return:"",siblings:a}}function zt(e,t){return kl(Bo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gn(e){for(;e.root;)e=zt(e.root,{children:[e]});pr(e,e.siblings)}function qm(){return oe}function Zm(){return oe=Ue>0?ce(Zn,--Ue):0,Gn--,oe===10&&(Gn=1,Fo--),oe}function tt(){return oe=Ue<$f?ce(Zn,Ue++):0,Gn++,oe===10&&(Gn=1,Fo++),oe}function sn(){return ce(Zn,Ue)}function Fi(){return Ue}function Vo(e,t){return Hn(Zn,e,t)}function Tl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jm(e){return Fo=Gn=1,$f=ot(Zn=e),Ue=0,[]}function eg(e){return Zn="",e}function ys(e){return Af(Vo(Ue-1,Cl(e===91?e+2:e===40?e+1:e)))}function tg(e){for(;(oe=sn())&&oe<33;)tt();return Tl(e)>2||Tl(oe)>3?"":" "}function ng(e,t){for(;--t&&tt()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Vo(e,Fi()+(t<6&&sn()==32&&tt()==32))}function Cl(e){for(;tt();)switch(oe){case e:return Ue;case 34:case 39:e!==34&&e!==39&&Cl(oe);break;case 40:e===41&&Cl(e);break;case 92:tt();break}return Ue}function rg(e,t){for(;tt()&&e+oe!==47+10;)if(e+oe===42+42&&sn()===47)break;return"/*"+Vo(t,Ue-1)+"*"+Ma(e===47?e:tt())}function ig(e){for(;!Tl(sn());)tt();return Vo(e,Ue)}function og(e){return eg(Bi("",null,null,null,[""],e=Jm(e),0,[0],e))}function Bi(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,m=0,g=0,x=0,y=1,E=1,d=1,p=0,h="",w=i,S=o,k=r,T=h;E;)switch(x=p,p=tt()){case 40:if(x!=108&&ce(T,f-1)==58){Di(T+=$(ys(p),"&","&\f"),"&\f",Nf(u?a[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:T+=ys(p);break;case 9:case 10:case 13:case 32:T+=tg(x);break;case 92:T+=ng(Fi()-1,7);continue;case 47:switch(sn()){case 42:case 47:pr(sg(rg(tt(),Fi()),t,n,l),l);break;default:T+="/"}break;case 123*y:a[u++]=ot(T)*d;case 125*y:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+c:d==-1&&(T=$(T,/\f/g,"")),g>0&&ot(T)-f&&pr(g>32?qu(T+";",r,n,f-1,l):qu($(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(pr(k=Ku(T,t,n,u,c,i,a,h,w=[],S=[],f,o),o),p===123)if(c===0)Bi(T,t,k,k,w,o,f,a,S);else switch(m===99&&ce(T,3)===110?100:m){case 100:case 108:case 109:case 115:Bi(e,k,k,r&&pr(Ku(e,k,k,0,0,i,a,h,i,w=[],f,S),S),i,S,f,a,r?w:S);break;default:Bi(T,k,k,k,[""],S,0,a,S)}}u=c=g=0,y=d=1,h=T="",f=s;break;case 58:f=1+ot(T),g=x;default:if(y<1){if(p==123)--y;else if(p==125&&y++==0&&Zm()==125)continue}switch(T+=Ma(p),p*y){case 38:d=c>0?1:(T+="\f",-1);break;case 44:a[u++]=(ot(T)-1)*d,d=1;break;case 64:sn()===45&&(T+=ys(tt())),m=sn(),c=f=ot(h=T+=ig(Fi())),p++;break;case 45:x===45&&ot(T)==2&&(y=0)}}return o}function Ku(e,t,n,r,i,o,s,a,l,u,c,f){for(var m=i-1,g=i===0?o:[""],x=Rf(g),y=0,E=0,d=0;y<r;++y)for(var p=0,h=Hn(e,m+1,m=Nf(E=s[y])),w=e;p<x;++p)(w=Af(E>0?g[p]+" "+h:$(h,/&\f/g,g[p])))&&(l[d++]=w);return Bo(e,t,n,i===0?Do:a,l,u,c,f)}function sg(e,t,n,r){return Bo(e,t,n,Of,Ma(qm()),Hn(e,2,-2),0,r)}function qu(e,t,n,r,i){return Bo(e,t,n,ja,Hn(e,0,r),Hn(e,r+1,-1),r,i)}function bf(e,t,n){switch(Xm(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 4789:return kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+kr+e+X+e+e;case 5936:switch(ce(e,t+11)){case 114:return B+e+X+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+X+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+X+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+X+e+e;case 6165:return B+e+X+"flex-"+e+e;case 5187:return B+e+$(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return B+e+X+"flex-item-"+$(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":X+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return B+e+X+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+X+$(e,"shrink","negative")+e;case 5292:return B+e+X+$(e,"basis","preferred-size")+e;case 6060:return B+"box-"+$(e,"-grow","")+B+e+X+$(e,"grow","positive")+e;case 4554:return B+$(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4200:if(!ht(e,/flex-|baseline/))return X+"grid-column-align"+Hn(e,t)+e;break;case 2592:case 3360:return X+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ht(r.props,/grid-\w+-end/)})?~Di(e+(n=n[t].value),"span",0)?e:X+$(e,"-start","")+e+X+"grid-row-span:"+(~Di(n,"span",0)?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":X+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:X+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+kr+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Di(e,"stretch",0)?bf($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return X+i+":"+o+u+(s?X+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(ce(e,t+6)===121)return $(e,":",":"+B)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ce(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+X+"$2box$3")+e;case 100:return $(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function go(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function lg(e,t,n,r){switch(e.type){case Ym:if(e.children.length)break;case Qm:case ja:return e.return=e.return||e.value;case Of:return"";case Lf:return e.return=e.value+"{"+go(e.children,r)+"}";case Do:if(!ot(e.value=e.props.join(",")))return""}return ot(n=go(e.children,r))?e.return=e.value+"{"+n+"}":""}function ag(e){var t=Rf(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function ug(e){return function(t){t.root||(t=t.return)&&e(t)}}function cg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ja:e.return=bf(e.value,e.length,n);return;case Lf:return go([zt(e,{value:$(e.value,"@","@"+B)})],r);case Do:if(e.length)return Km(n=e.props,function(i){switch(ht(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gn(zt(e,{props:[$(i,/:(read-\w+)/,":"+kr+"$1")]})),gn(zt(e,{props:[i]})),kl(e,{props:Xu(n,r)});break;case"::placeholder":gn(zt(e,{props:[$(i,/:(plac\w+)/,":"+B+"input-$1")]})),gn(zt(e,{props:[$(i,/:(plac\w+)/,":"+kr+"$1")]})),gn(zt(e,{props:[$(i,/:(plac\w+)/,X+"input-$1")]})),gn(zt(e,{props:[i]})),kl(e,{props:Xu(n,r)});break}return""})}}var dg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Un=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Df="active",Ff="data-styled-version",Wo="6.1.6",Oa=`/*!sc*/
`,La=typeof window<"u"&&"HTMLElement"in window,fg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),pg={},Ho=Object.freeze([]),Qn=Object.freeze({});function Bf(e,t,n){return n===void 0&&(n=Qn),e.theme!==n.theme&&e.theme||t||n.theme}var Vf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mg=/(^-|-$)/g;function Zu(e){return e.replace(hg,"-").replace(mg,"")}var gg=/(a)(d)/gi,mi=52,Ju=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pl(e){var t,n="";for(t=Math.abs(e);t>mi;t=t/mi|0)n=Ju(t%mi)+n;return(Ju(t%mi)+n).replace(gg,"$1-$2")}var xs,Wf=5381,In=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hf=function(e){return In(Wf,e)};function Gf(e){return Pl(Hf(e)>>>0)}function vg(e){return e.displayName||e.name||"Component"}function ws(e){return typeof e=="string"&&!0}var Uf=typeof Symbol=="function"&&Symbol.for,Qf=Uf?Symbol.for("react.memo"):60115,yg=Uf?Symbol.for("react.forward_ref"):60112,xg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sg=((xs={})[yg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xs[Qf]=Yf,xs);function ec(e){return("type"in(t=e)&&t.type.$$typeof)===Qf?Yf:"$$typeof"in e?Sg[e.$$typeof]:xg;var t}var Eg=Object.defineProperty,kg=Object.getOwnPropertyNames,tc=Object.getOwnPropertySymbols,Tg=Object.getOwnPropertyDescriptor,Cg=Object.getPrototypeOf,nc=Object.prototype;function Xf(e,t,n){if(typeof t!="string"){if(nc){var r=Cg(t);r&&r!==nc&&Xf(e,r,n)}var i=kg(t);tc&&(i=i.concat(tc(t)));for(var o=ec(e),s=ec(t),a=0;a<i.length;++a){var l=i[a];if(!(l in wg||n&&n[l]||s&&l in s||o&&l in o)){var u=Tg(t,l);try{Eg(e,l,u)}catch{}}}}return e}function Yn(e){return typeof e=="function"}function Na(e){return typeof e=="object"&&"styledComponentId"in e}function nn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Wr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _l(e,t,n){if(n===void 0&&(n=!1),!n&&!Wr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=_l(e[r],t[r]);else if(Wr(t))for(var r in t)e[r]=_l(e[r],t[r]);return e}function Aa(e,t){Object.defineProperty(e,"toString",{value:t})}function Xr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Pg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Xr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Oa);return n},e}(),Vi=new Map,vo=new Map,Wi=1,gi=function(e){if(Vi.has(e))return Vi.get(e);for(;vo.has(Wi);)Wi++;var t=Wi++;return Vi.set(e,t),vo.set(t,e),t},zg=function(e,t){Wi=t+1,Vi.set(e,t),vo.set(t,e)},_g="style[".concat(Un,"][").concat(Ff,'="').concat(Wo,'"]'),Ig=new RegExp("^".concat(Un,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jg=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Mg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Oa),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(Ig);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(zg(c,u),jg(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function Og(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Kf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Un,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Un,Df),r.setAttribute(Ff,Wo);var s=Og();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Lg=function(){function e(t){this.element=Kf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Xr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ng=function(){function e(t){this.element=Kf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ag=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rc=La,Rg={isServer:!La,useCSSOMInjection:!fg},yo=function(){function e(t,n,r){t===void 0&&(t=Qn),n===void 0&&(n={});var i=this;this.options=xe(xe({},Rg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&La&&rc&&(rc=!1,function(o){for(var s=document.querySelectorAll(_g),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Un)!==Df&&(Mg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Aa(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var m=function(d){return vo.get(d)}(f);if(m===void 0)return"continue";var g=o.names.get(m),x=s.getGroup(f);if(g===void 0||x.length===0)return"continue";var y="".concat(Un,".g").concat(f,'[id="').concat(m,'"]'),E="";g!==void 0&&g.forEach(function(d){d.length>0&&(E+="".concat(d,","))}),l+="".concat(x).concat(y,'{content:"').concat(E,'"}').concat(Oa)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return gi(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ag(i):r?new Lg(i):new Ng(i)}(this.options),new Pg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(gi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(gi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$g=/&/g,bg=/^\s*\/\/.*$/gm;function qf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=qf(n.children,t)),n})}function Dg(e){var t,n,r,i=e===void 0?Qn:e,o=i.options,s=o===void 0?Qn:o,a=i.plugins,l=a===void 0?Ho:a,u=function(m,g,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===Do&&m.value.includes("&")&&(m.props[0]=m.props[0].replace($g,n).replace(r,u))}),s.prefix&&c.push(cg),c.push(lg);var f=function(m,g,x,y){g===void 0&&(g=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var E=m.replace(bg,""),d=og(x||g?"".concat(x," ").concat(g," { ").concat(E," }"):E);s.namespace&&(d=qf(d,s.namespace));var p=[];return go(d,ag(c.concat(ug(function(h){return p.push(h)})))),p};return f.hash=l.length?l.reduce(function(m,g){return g.name||Xr(15),In(m,g.name)},Wf).toString():"",f}var Fg=new yo,Il=Dg(),Zf=H.createContext({shouldForwardProp:void 0,styleSheet:Fg,stylis:Il});Zf.Consumer;H.createContext(void 0);function jl(){return b.useContext(Zf)}var Bg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Il);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Aa(this,function(){throw Xr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Il),this.name+t.hash},e}(),Vg=function(e){return e>="A"&&e<="Z"};function ic(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Vg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Jf=function(e){return e==null||e===!1||e===""},ep=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Jf(o)&&(Array.isArray(o)&&o.isCss||Yn(o)?r.push("".concat(ic(i),":"),o,";"):Wr(o)?r.push.apply(r,Vr(Vr(["".concat(i," {")],ep(o),!1),["}"],!1)):r.push("".concat(ic(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in dg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wt(e,t,n,r){if(Jf(e))return[];if(Na(e))return[".".concat(e.styledComponentId)];if(Yn(e)){if(!Yn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Wt(i,t,n,r)}var o;return e instanceof Bg?n?(e.inject(n,r),[e.getName(r)]):[e]:Wr(e)?ep(e):Array.isArray(e)?Array.prototype.concat.apply(Ho,e.map(function(s){return Wt(s,t,n,r)})):[e.toString()]}function tp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Yn(n)&&!Na(n))return!1}return!0}var Wg=Hf(Wo),Hg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&tp(t),this.componentId=n,this.baseHash=In(Wg,n),this.baseStyle=r,yo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=nn(i,this.staticRulesId);else{var o=zl(Wt(this.rules,t,n,r)),s=Pl(In(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=nn(i,s),this.staticRulesId=s}else{for(var l=In(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=zl(Wt(f,t,n,r));l=In(l,m+c),u+=m}}if(u){var g=Pl(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=nn(i,g)}}return i},e}(),Ra=H.createContext(void 0);Ra.Consumer;var Ss={};function Gg(e,t,n){var r=Na(e),i=e,o=!ws(e),s=t.attrs,a=s===void 0?Ho:s,l=t.componentId,u=l===void 0?function(w,S){var k=typeof w!="string"?"sc":Zu(w);Ss[k]=(Ss[k]||0)+1;var T="".concat(k,"-").concat(Gf(Wo+k+Ss[k]));return S?"".concat(S,"-").concat(T):T}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(w){return ws(w)?"styled.".concat(w):"Styled(".concat(vg(w),")")}(e):c,m=t.displayName&&t.componentId?"".concat(Zu(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;x=function(w,S){return y(w,S)&&E(w,S)}}else x=y}var d=new Hg(n,m,r?i.componentStyle:void 0);function p(w,S){return function(k,T,z){var I=k.attrs,C=k.componentStyle,L=k.defaultProps,R=k.foldedComponentIds,N=k.styledComponentId,U=k.target,re=H.useContext(Ra),me=jl(),Qe=k.shouldForwardProp||me.shouldForwardProp,j=Bf(T,re,L)||Qn,M=function(Tt,Me,ct){for(var er,Kt=xe(xe({},Me),{className:void 0,theme:ct}),Go=0;Go<Tt.length;Go+=1){var qr=Yn(er=Tt[Go])?er(Kt):er;for(var Ct in qr)Kt[Ct]=Ct==="className"?nn(Kt[Ct],qr[Ct]):Ct==="style"?xe(xe({},Kt[Ct]),qr[Ct]):qr[Ct]}return Me.className&&(Kt.className=nn(Kt.className,Me.className)),Kt}(I,T,j),A=M.as||U,V={};for(var W in M)M[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&M.theme===j||(W==="forwardedAs"?V.as=M.forwardedAs:Qe&&!Qe(W,A)||(V[W]=M[W]));var Xt=function(Tt,Me){var ct=jl(),er=Tt.generateAndInjectStyles(Me,ct.styleSheet,ct.stylis);return er}(C,M),Ye=nn(R,N);return Xt&&(Ye+=" "+Xt),M.className&&(Ye+=" "+M.className),V[ws(A)&&!Vf.has(A)?"class":"className"]=Ye,V.ref=z,b.createElement(A,V)}(h,w,S)}p.displayName=f;var h=H.forwardRef(p);return h.attrs=g,h.componentStyle=d,h.displayName=f,h.shouldForwardProp=x,h.foldedComponentIds=r?nn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var k=[],T=1;T<arguments.length;T++)k[T-1]=arguments[T];for(var z=0,I=k;z<I.length;z++)_l(S,I[z],!0);return S}({},i.defaultProps,w):w}}),Aa(h,function(){return".".concat(h.styledComponentId)}),o&&Xf(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function oc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sc=function(e){return Object.assign(e,{isCss:!0})};function np(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Yn(e)||Wr(e))return sc(Wt(oc(Ho,Vr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wt(r):sc(Wt(oc(r,t)))}function Ml(e,t,n){if(n===void 0&&(n=Qn),!t)throw Xr(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,np.apply(void 0,Vr([i],o,!1)))};return r.attrs=function(i){return Ml(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ml(e,t,xe(xe({},n),i))},r}var rp=function(e){return Ml(Gg,e)},P=rp;Vf.forEach(function(e){P[e]=rp(e)});var Ug=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=tp(t),yo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(zl(Wt(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&yo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Qg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=np.apply(void 0,Vr([e],t,!1)),i="sc-global-".concat(Gf(JSON.stringify(r))),o=new Ug(r,i),s=function(l){var u=jl(),c=H.useContext(Ra),f=H.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),H.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,m){if(o.isStatic)o.renderStyles(l,pg,c,m);else{var g=xe(xe({},u),{theme:Bf(u,f,s.defaultProps)});o.renderStyles(l,g,c,m)}}return H.memo(s)}const Yg=P.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`,Xg=({children:e})=>v.jsx(Yg,{children:e}),ne="/vite-ecosolution/assets/sprite-7a3f5b15.svg",Kg=P.a`
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
`,qg=P.p`
  color: #173d33;
  font-family: "FONTSPRING DEMO - All Round Gothic Thick";
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;
`,Zg=P.p`
  width: 60px;

  color: #97d28b;
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`,Jg=P.span`
  color: "#173d33";
  font-family: "CA Saygon Text";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: -0.4px;
`,ip=({$scrolled:e})=>v.jsxs(Kg,{href:"/",target:"blank",$scrolled:e??null,children:[v.jsx("svg",{width:31,height:18,children:v.jsx("use",{href:ne+"#icon-logo"})}),v.jsx(qg,{children:"ecosolution"}),v.jsxs(Zg,{children:[v.jsx(Jg,{children:"green"}),"ergy for life"]})]}),ev=P.button`
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
`,Ol=({textContent:e,followTo:t})=>v.jsxs(ev,{onClick:t,children:[e,v.jsx("svg",{width:14,height:14,children:v.jsx("use",{href:ne+"#icon-group-31"})})]}),tv=e=>{b.useEffect(()=>{const t=n=>{n.code==="Escape"&&e()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e])},nv=P.div`
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
`,rv=({handleToggleModal:e,children:t})=>{tv(e);const n=r=>{r.target===r.currentTarget&&e()};return v.jsx(nv,{onClick:n,className:"absolute top-0 left-0 z-10 w-screen h-screen bg-transparent",children:t})},iv=P.button`
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
`,ov=P.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,sv=P.span`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`,lv=({handleToggleModal:e})=>v.jsx(iv,{onClick:e,children:v.jsxs(ov,{children:[v.jsx("svg",{width:20,height:20,children:v.jsx("use",{href:ne+"#icon-close-menu"})}),v.jsx(sv,{children:"close"})]})}),Kr=e=>{const t=document.getElementById(e);t&&window.scrollTo({top:t.offsetTop-76,behavior:"smooth"})},av=P.button`
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
`,uv=({label:e,sectionName:t,handleToggleModal:n})=>{const r=()=>{Kr(t),n()};return v.jsxs(av,{onClick:r,children:[e,v.jsx("svg",{width:16,height:16,children:v.jsx("use",{xlinkHref:ne+"#icon-arrow-right-up"})})]})},cv=P.div`
  display: flex;
  gap: ${({$space:e})=>`${e}px`};
`,lc=P.svg`
  cursor: pointer;
  stroke: ${({$colorplan:e})=>e==="primary"?"#173d33":"#ffffff"};
  fill: ${({$colorplan:e})=>e==="primary"?"#173d33":"#ffffff"};

  &:hover {
    fill: #97d28b;
    stroke: #97d28b;
  }
`,$a=({colorplan:e,space:t})=>v.jsxs(cv,{$space:t,children:[v.jsx("a",{href:"https://www.facebook.com/",target:"blank",children:v.jsx(lc,{width:24,height:24,$colorplan:e,children:v.jsx("use",{href:ne+"#icon-facebook"})})}),v.jsx("a",{href:"https://www.instagram.com/",target:"blank",children:v.jsx(lc,{width:24,height:24,$colorplan:e,children:v.jsx("use",{href:ne+"#icon-instagram"})})})]}),Pe={MAIN:"main",ABOUT:"about",CASES:"cases",QUESTIONS:"questions",CONTACT:"contact"},dv=[{id:1,label:"Main",sectionName:Pe.MAIN},{id:2,label:"About",sectionName:Pe.ABOUT},{id:3,label:"Cases",sectionName:Pe.CASES},{id:4,label:"FAQ",sectionName:Pe.QUESTIONS},{id:5,label:"Contact",sectionName:Pe.CONTACT}],fv=P.div`
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

  @media (min-width: 1440px) {
    top: 30px;
    right: 100px;
    height: calc(100% - 60px);
  }
`,pv=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`,hv=P.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
`,mv=({handleToggleModal:e})=>v.jsx(rv,{handleToggleModal:e,children:v.jsxs(fv,{children:[v.jsx(lv,{handleToggleModal:e}),v.jsx(pv,{children:dv.map(t=>v.jsx(uv,{label:t.label,sectionName:t.sectionName,handleToggleModal:e},t.id))}),v.jsx(hv,{children:v.jsx($a,{colorplan:"secondary",space:8})})]})}),gv=P.button`
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
`,vv=()=>{const[e,t]=b.useState(!1),n=()=>{t(r=>!r)};return v.jsxs("div",{children:[v.jsx(gv,{onClick:n,children:v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-menu",stroke:"#292D32"})})}),e&&v.jsx(mv,{handleToggleModal:n})]})},op=(e,t)=>{const n=b.useCallback(()=>window.innerWidth<e?"mobile":window.innerWidth<t?"tablet":"desktop",[t,e]),[r,i]=b.useState(()=>n());return b.useEffect(()=>{const o=()=>i(n());return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[n]),r},yv=P.header`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 11px;
  width: 320px;
  padding-top: 36px;
  background: #f3f5fa;

  @media (min-width: 768px) {
    width: 709px;
  }

  @media (min-width: 1440px) {
    width: 1242px;
    padding-top: 24px;
  }
`,xv=P.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 12px;
    margin-left: auto;
  }
`,wv=()=>{const[e,t]=b.useState(!1);return b.useEffect(()=>{const n=()=>{const r=window.scrollY>0;t(r)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e},Sv=()=>{const e=op(768,1440),t=wv(),n=()=>{Kr(Pe.CONTACT)};return v.jsxs(yv,{children:[v.jsx(ip,{$scrolled:t}),v.jsxs(xv,{children:[v.jsx(vv,{}),e!=="mobile"&&v.jsx(Ol,{textContent:"Get in touch",followTo:n})]})]})},Ev=P.button`
  display: flex;
  width: 143px;
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
`,kv=P.span`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  background: #97d28b;
`,sp=({type:e,textContent:t,followTo:n})=>v.jsxs(Ev,{type:e,onClick:n,children:[t,v.jsx(kv,{children:v.jsx("svg",{width:14,height:14,children:v.jsx("use",{href:ne+"#icon-arrow-right"})})})]}),Tv=P.section`
  margin-top: 222px;

  @media (min-width: 768px) {
    margin-top: 240px;
  }

  @media (min-width: 1440px) {
    margin-top: 264px;
  }
`,Cv=P.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid #97d28b;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 65px;
    padding-bottom: 26px;
  }

  @media (min-width: 1440px) {
    gap: 296px;
    padding-bottom: 28px;
  }
`,Pv=P.h1`
  width: 320px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin-bottom: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media (min-width: 1440px) {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`,zv=P.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 43px;
  }

  @media (min-width: 1440px) {
    gap: 20px;
  }
`,_v=P.p`
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

  @media (min-width: 1440px) {
    width: 363px;
  }
`,Iv=P.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    gap: 0;
    margin-top: 16px;
    margin-bottom: 40px;
  }
`,jv=P.address`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`,Mv=P.p`
  /* margin-bottom: 8px; */

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
`,Ov=P.p`
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

  @media (min-width: 1440px) {
    margin-left: 492px;
  }
`,Lv=P.p`
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
`,Nv="/vite-ecosolution/assets/turbine-mob-0dfea615.webp",Av="/vite-ecosolution/assets/turbine-2xmob-40a58984.webp",Rv="/vite-ecosolution/assets/turbine-tabl-dbe8aade.webp",$v="/vite-ecosolution/assets/turbine-2xtabl-344a54f0.webp",bv="/vite-ecosolution/assets/turbine-desk-43d5d924.webp",Dv="/vite-ecosolution/assets/turbine-2xdesk-c8e6de3f.webp",Fv=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${Nv} 1x, ${Av} 2x`,media:"(max-width: 767px)"}),v.jsx("source",{srcSet:`${Rv} 1x, ${$v} 2x`,media:"(min-width: 768px) and (max-width: 1439px)"}),v.jsx("source",{srcSet:`${bv} 1x, ${Dv} 2x`,media:"(min-width: 1440px)"}),v.jsx("img",{src:"/src/assets/AboutSectionImages/turbine-desk.webp"})]}),Bv=()=>{const e=()=>{Kr(Pe.CASES)};return v.jsxs(Tv,{id:Pe.MAIN,children:[v.jsxs(Cv,{children:[v.jsx(Pv,{children:"renewable energy for any task"}),v.jsxs(zv,{children:[v.jsx(_v,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),v.jsx(sp,{type:"button",textContent:"Learn More",followTo:e})]})]}),v.jsxs(Iv,{children:[v.jsxs(jv,{children:[v.jsx(Mv,{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),v.jsx(Ov,{children:"office@ecosolution.com"})]}),v.jsx(Lv,{children:"ecosolution © 2023"})]}),v.jsx(Fv,{})]})},Vv=P.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 36px;

  @media (min-width: 768px) {
    gap: 100px;
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    gap: 122px;
    margin-top: 120px;
  }
`,Wv=P.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 82px;
  }
  @media (min-width: 1440px) {
    gap: 254px;
  }
`,Hv=P.h2`
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

  @media (min-width: 1440px) {
    width: 365px;

    font-size: 48px;
    line-height: 48px; 
  }
`,Gv=P.p`
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

  @media (min-width: 1440px) {
    width: 620px;
    padding-left: 161px;
  }
`,Uv=P.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,vi=P.li`
  width: 148px;
  height: 197px;
  flex-shrink: 0;
  padding: 12px;

  background: #eaedf1;

  @media (min-width: 768px) {
    width: 159px;
  }

  @media (min-width: 1440px) {
    width: 274px;
    height: 339px;
    padding: 48px 24px;
  }
`,ac=P.li`
  display: none;
  @media (min-width: 768px) {
    display: block;
    grid-column: span 2;
  }
`,yi=P.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 33px;
  margin-bottom: 12px;

  border-bottom: 1px solid #97d28b;

  @media (min-width: 768px) {
    padding-bottom: 51px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 94px;
    margin-bottom: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,xi=P.h3`
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

  @media (min-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
  }
`,wi=P.p`
  color: #173d33;
  text-align: justify;
  font-family: "Fira Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,Qv="/vite-ecosolution/assets/wind-farms-tabl-f682e3a7.webp",Yv="/vite-ecosolution/assets/wind-farms-2xtabl-2a8c5771.webp",Xv="/vite-ecosolution/assets/wind-farms-desk-c8152f55.webp",Kv="/vite-ecosolution/assets/wind-farms-2xdesk-837e6b69.webp",qv=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${Qv} 1x, ${Yv} 2x`,media:"(min-width: 768px) and (max-width: 1439px)"}),v.jsx("source",{srcSet:`${Xv} 1x, ${Kv} 2x`,media:"(min-width: 1440px)"}),v.jsx("img",{src:"/src/assets/AboutSectionImages/Values/wind-farms-desk.webp"})]}),Zv="/vite-ecosolution/assets/solar-panels-tabl-ef4daad0.webp",Jv="/vite-ecosolution/assets/solar-panels-2xtabl-6d126731.webp",e0="/vite-ecosolution/assets/solar-panels-desk-40346a35.webp",t0="/vite-ecosolution/assets/solar-panels-2xdesk-99c6706c.webp",n0=()=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${Zv} 1x, ${Jv} 2x`,media:"(min-width: 768px) and (max-width: 1439px)"}),v.jsx("source",{srcSet:`${e0} 1x, ${t0} 2x`,media:"(min-width: 1440px)"}),v.jsx("img",{src:"/src/assets/AboutSectionImages/Values/wind-farms-desk.webp"})]}),r0=()=>v.jsxs(Vv,{id:Pe.ABOUT,children:[v.jsxs(Wv,{children:[v.jsx(Hv,{children:"Main values of our company"}),v.jsx(Gv,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]}),v.jsxs(Uv,{children:[v.jsxs(vi,{children:[v.jsxs(yi,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-maximize-circle",fill:"transparent",stroke:"#173D33"})}),v.jsx(xi,{children:"Openness"})]}),v.jsx(wi,{children:"to the world, people, new ideas and projects"})]}),v.jsxs(vi,{children:[v.jsxs(yi,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-global-edit",fill:"transparent",stroke:"#173D33"})}),v.jsx(xi,{children:"Responsibility"})]}),v.jsx(wi,{children:"we are aware that the results of our work have an impact on our lives and the lives of future generations"})]}),v.jsxs(ac,{children:[v.jsx(qv,{}),";"]}),v.jsx(ac,{children:v.jsx(n0,{})}),v.jsxs(vi,{children:[v.jsxs(yi,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-cpu-charge",fill:"transparent",stroke:"#173D33"})}),v.jsx(xi,{children:"Innovation"})]}),v.jsx(wi,{children:"we use the latest technology to implement non-standard solutions"})]}),v.jsxs(vi,{children:[v.jsxs(yi,{children:[v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-ranking",fill:"transparent",stroke:"#173D33"})}),v.jsx(xi,{children:"Quality"})]}),v.jsx(wi,{children:"we do not strive to be the first among others, but we want to be the best in our business"})]})]})]}),i0=()=>{const[e,t]=b.useState(1134147814),n=b.useRef(null);return b.useEffect(()=>(n.current=setInterval(()=>{t(r=>r+=1)},1e3),()=>{n.current&&clearInterval(n.current)}),[]),e},o0=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),s0=P.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`,l0=P.h2`
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

  @media (min-width: 1440px) {
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

    @media (min-width: 1440px) {
      margin: 16px auto 17px;
    }
  }
`,a0=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    margin-top: 17px;
  }
`,u0=P.p`
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

  @media (min-width: 1440px) {
    font-size: 164px;
    line-height: 164px;
  }
`,c0=P.span`
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

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`,d0=()=>{const e=i0();return v.jsxs(s0,{children:[v.jsx(l0,{children:"Electricity we produced for all time"}),v.jsxs(a0,{children:[v.jsx(u0,{children:o0(e)}),v.jsx(c0,{children:"kWh"})]})]})};function uc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ba(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:uc(t[n])&&uc(e[n])&&Object.keys(t[n]).length>0&&ba(e[n],t[n])})}const lp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Jn(){const e=typeof document<"u"?document:{};return ba(e,lp),e}const f0={document:lp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function De(){const e=typeof window<"u"?window:{};return ba(e,f0),e}function p0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function h0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ll(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function xo(){return Date.now()}function m0(e){const t=De();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function g0(e,t){t===void 0&&(t="x");const n=De();let r,i,o;const s=m0(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Si(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function v0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Le(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!v0(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(Si(e[a])&&Si(r[a])?r[a].__swiper__?e[a]=r[a]:Le(e[a],r[a]):!Si(e[a])&&Si(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:Le(e[a],r[a])):e[a]=r[a])}}}return e}function Ei(e,t,n){e.style.setProperty(t,n)}function ap(e){let{swiper:t,targetPosition:n,side:r}=e;const i=De(),o=-t.translate;let s=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",c=(m,g)=>u==="next"&&m>=g||u==="prev"&&m<=g,f=()=>{a=new Date().getTime(),s===null&&(s=a);const m=Math.max(Math.min((a-s)/l,1),0),g=.5-Math.cos(m*Math.PI)/2;let x=o+g*(n-o);if(c(x,n)&&(x=n),t.wrapperEl.scrollTo({[r]:x}),c(x,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:x})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function lt(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function wo(e){try{console.warn(e);return}catch{}}function So(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:p0(t)),n}function y0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function x0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Nt(e,t){return De().getComputedStyle(e,null).getPropertyValue(t)}function cc(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function w0(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function dc(e,t,n){const r=De();return n?e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):e.offsetWidth}let Es;function S0(){const e=De(),t=Jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function up(){return Es||(Es=S0()),Es}let ks;function E0(e){let{userAgent:t}=e===void 0?{}:e;const n=up(),r=De(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let c=o.match(/(iPad).*OS\s([\d_]+)/);const f=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!c&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let x=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&x&&n.touch&&y.indexOf(`${a}x${l}`)>=0&&(c=o.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),x=!1),u&&!g&&(s.os="android",s.android=!0),(c||m||f)&&(s.os="ios",s.ios=!0),s}function k0(e){return e===void 0&&(e={}),ks||(ks=E0(e)),ks}let Ts;function T0(){const e=De();let t=!1;function n(){const r=e.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(n()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[i,o]=r.split("Version/")[1].split(" ")[0].split(".").map(s=>Number(s));t=i<16||i===16&&o<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function C0(){return Ts||(Ts=T0()),Ts}function P0(e){let{swiper:t,on:n,emit:r}=e;const i=De();let o=null,s=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(f=>{s=i.requestAnimationFrame(()=>{const{width:m,height:g}=t;let x=m,y=g;f.forEach(E=>{let{contentBoxSize:d,contentRect:p,target:h}=E;h&&h!==t.el||(x=p?p.width:(d[0]||d).inlineSize,y=p?p.height:(d[0]||d).blockSize)}),(x!==m||y!==g)&&a()})}),o.observe(t.el))},u=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},c=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),n("destroy",()=>{u(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}function z0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=De(),a=function(c,f){f===void 0&&(f={});const m=s.MutationObserver||s.WebkitMutationObserver,g=new m(x=>{if(t.__preventObserver__)return;if(x.length===1){i("observerUpdate",x[0]);return}const y=function(){i("observerUpdate",x[0])};s.requestAnimationFrame?s.requestAnimationFrame(y):s.setTimeout(y,0)});g.observe(c,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),o.push(g)},l=()=>{if(t.params.observer){if(t.params.observeParents){const c=w0(t.hostEl);for(let f=0;f<c.length;f+=1)a(c[f])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(c=>{c.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",u)}var _0={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(u=>{u.apply(r,n)})}),e}};function I0(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Nt(r,"padding-left")||0,10)-parseInt(Nt(r,"padding-right")||0,10),n=n-parseInt(Nt(r,"padding-top")||0,10)-parseInt(Nt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function j0(){const e=this;function t(C,L){return parseFloat(C.getPropertyValue(e.getDirectionLabel(L))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=lt(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:c.length;let m=[];const g=[],x=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let E=n.slidesOffsetAfter;typeof E=="function"&&(E=n.slidesOffsetAfter.call(e));const d=e.snapGrid.length,p=e.slidesGrid.length;let h=n.spaceBetween,w=-y,S=0,k=0;if(typeof o>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*o:typeof h=="string"&&(h=parseFloat(h)),e.virtualSize=-h,c.forEach(C=>{s?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ei(r,"--swiper-centered-offset-before",""),Ei(r,"--swiper-centered-offset-after",""));const T=n.grid&&n.grid.rows>1&&e.grid;T?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let z;const I=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(C=>typeof n.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<f;C+=1){z=0;let L;if(c[C]&&(L=c[C]),T&&e.grid.updateSlide(C,L,c),!(c[C]&&Nt(L,"display")==="none")){if(n.slidesPerView==="auto"){I&&(c[C].style[e.getDirectionLabel("width")]="");const R=getComputedStyle(L),N=L.style.transform,U=L.style.webkitTransform;if(N&&(L.style.transform="none"),U&&(L.style.webkitTransform="none"),n.roundLengths)z=e.isHorizontal()?dc(L,"width",!0):dc(L,"height",!0);else{const re=t(R,"width"),me=t(R,"padding-left"),Qe=t(R,"padding-right"),j=t(R,"margin-left"),M=t(R,"margin-right"),A=R.getPropertyValue("box-sizing");if(A&&A==="border-box")z=re+j+M;else{const{clientWidth:V,offsetWidth:W}=L;z=re+me+Qe+j+M+(W-V)}}N&&(L.style.transform=N),U&&(L.style.webkitTransform=U),n.roundLengths&&(z=Math.floor(z))}else z=(o-(n.slidesPerView-1)*h)/n.slidesPerView,n.roundLengths&&(z=Math.floor(z)),c[C]&&(c[C].style[e.getDirectionLabel("width")]=`${z}px`);c[C]&&(c[C].swiperSlideSize=z),x.push(z),n.centeredSlides?(w=w+z/2+S/2+h,S===0&&C!==0&&(w=w-o/2-h),C===0&&(w=w-o/2-h),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),k%n.slidesPerGroup===0&&m.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&m.push(w),g.push(w),w=w+z+h),e.virtualSize+=z+h,S=z,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+E,s&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+h}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),T&&e.grid.updateWrapperSize(z,m),!n.centeredSlides){const C=[];for(let L=0;L<m.length;L+=1){let R=m[L];n.roundLengths&&(R=Math.floor(R)),m[L]<=e.virtualSize-o&&C.push(R)}m=C,Math.floor(e.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-o)}if(l&&n.loop){const C=x[0]+h;if(n.slidesPerGroup>1){const L=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),R=C*n.slidesPerGroup;for(let N=0;N<L;N+=1)m.push(m[m.length-1]+R)}for(let L=0;L<e.virtual.slidesBefore+e.virtual.slidesAfter;L+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+C),g.push(g[g.length-1]+C),e.virtualSize+=C}if(m.length===0&&(m=[0]),h!==0){const C=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");c.filter((L,R)=>!n.cssMode||n.loop?!0:R!==c.length-1).forEach(L=>{L.style[C]=`${h}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let C=0;x.forEach(R=>{C+=R+(h||0)}),C-=h;const L=C-o;m=m.map(R=>R<=0?-y:R>L?L+E:R)}if(n.centerInsufficientSlides){let C=0;if(x.forEach(L=>{C+=L+(h||0)}),C-=h,C<o){const L=(o-C)/2;m.forEach((R,N)=>{m[N]=R-L}),g.forEach((R,N)=>{g[N]=R+L})}}if(Object.assign(e,{slides:c,snapGrid:m,slidesGrid:g,slidesSizesGrid:x}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ei(r,"--swiper-centered-offset-before",`${-m[0]}px`),Ei(r,"--swiper-centered-offset-after",`${e.size/2-x[x.length-1]/2}px`);const C=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(R=>R+C),e.slidesGrid=e.slidesGrid.map(R=>R+L)}if(f!==u&&e.emit("slidesLengthChange"),m.length!==d&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==p&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const C=`${n.containerModifierClass}backface-hidden`,L=e.el.classList.contains(C);f<=n.maxBackfaceHiddenSlides?L||e.el.classList.add(C):L&&e.el.classList.remove(C)}}function M0(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(s(a))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function O0(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}function L0(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),r.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const u=r[l];let c=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const f=(s+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+a),m=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(u.swiperSlideSize+a),g=-(s-c),x=g+t.slidesSizesGrid[l],y=g>=0&&g<=t.size-t.slidesSizesGrid[l];(g>=0&&g<t.size-1||x>1&&x<=t.size||g<=0&&x>=t.size)&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(l),r[l].classList.add(n.slideVisibleClass)),y&&r[l].classList.add(n.slideFullyVisibleClass),u.progress=i?-f:f,u.originalProgress=i?-m:m}}function N0(e){const t=this;if(typeof e>"u"){const c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:a}=t;const l=o,u=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const c=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;o=c||i<=0,s=f||i>=1,c&&(i=0),f&&(i=1)}if(n.loop){const c=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[c],g=t.slidesGrid[f],x=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=m?a=(y-m)/x:a=(y+x-g)/x,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),s&&!u&&t.emit("reachEnd toEdge"),(l&&!o||u&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}function A0(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,a=f=>lt(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];t.forEach(f=>{f.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let l,u,c;if(o)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${f}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else s?(l=t.filter(f=>f.column===i)[0],c=t.filter(f=>f.column===i+1)[0],u=t.filter(f=>f.column===i-1)[0]):l=t[i];l&&(l.classList.add(n.slideActiveClass),s?(c&&c.classList.add(n.slideNextClass),u&&u.classList.add(n.slidePrevClass)):(c=x0(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c&&(c=t[0]),c&&c.classList.add(n.slideNextClass),u=y0(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]),u&&u.classList.add(n.slidePrevClass))),e.emitSlidesClasses()}const Hi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Cs=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Nl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,a=[s-t];a.push(...Array.from({length:t}).map((l,u)=>s+r+u)),e.slides.forEach((l,u)=>{a.includes(l.column)&&Cs(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const a=(s%n+n)%n;(a<i||a>o)&&Cs(e,a)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&Cs(e,s)};function R0(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function $0(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:a}=t;let l=e,u;const c=g=>{let x=g-t.virtual.slidesBefore;return x<0&&(x=t.virtual.slides.length+x),x>=t.virtual.slides.length&&(x-=t.virtual.slides.length),x};if(typeof l>"u"&&(l=R0(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,l);u=g+Math.floor((l-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),l===o&&!t.params.loop){u!==a&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=c(l);return}const f=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled&&i.loop)m=c(l);else if(f){const g=t.slides.filter(y=>y.column===l)[0];let x=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(x)&&(x=Math.max(t.slides.indexOf(g),0)),m=Math.floor(x/i.grid.rows)}else if(t.slides[l]){const g=t.slides[l].getAttribute("data-swiper-slide-index");g?m=parseInt(g,10):m=l}else m=l;Object.assign(t,{previousSnapIndex:a,snapIndex:u,previousRealIndex:s,realIndex:m,previousIndex:o,activeIndex:l}),t.initialized&&Nl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function b0(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let o=!1,s;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){o=!0,s=a;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var D0={updateSize:I0,updateSlides:j0,updateAutoHeight:M0,updateSlidesOffset:O0,updateSlidesProgress:L0,updateProgress:N0,updateSlidesClasses:A0,updateActiveIndex:$0,updateClickedSlide:b0};function F0(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=g0(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function B0(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let a=0,l=0;const u=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${a}px, ${l}px, ${u}px)`);let c;const f=n.maxTranslate()-n.minTranslate();f===0?c=0:c=(e-n.minTranslate())/f,c!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function V0(){return-this.snapGrid[0]}function W0(){return-this.snapGrid[this.snapGrid.length-1]}function H0(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),u=o.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,o.updateProgress(c),s.cssMode){const f=o.isHorizontal();if(t===0)a[f?"scrollLeft":"scrollTop"]=-c;else{if(!o.support.smoothScroll)return ap({swiper:o,targetPosition:-c,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(c),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var G0={getTranslate:F0,setTranslate:B0,minTranslate:V0,maxTranslate:W0,translateTo:H0};function U0(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function cp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==s){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function Q0(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),cp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function Y0(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),cp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var X0={setTransition:U0,transitionStart:Q0,transitionEnd:Y0};function K0(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:f,rtlTranslate:m,wrapperEl:g,enabled:x}=o;if(o.animating&&a.preventInteractionOnTransition||!x&&!r&&!i)return!1;const y=Math.min(o.params.slidesPerGroupSkip,s);let E=y+Math.floor((s-y)/o.params.slidesPerGroup);E>=l.length&&(E=l.length-1);const d=-l[E];if(a.normalizeSlideIndex)for(let h=0;h<u.length;h+=1){const w=-Math.floor(d*100),S=Math.floor(u[h]*100),k=Math.floor(u[h+1]*100);typeof u[h+1]<"u"?w>=S&&w<k-(k-S)/2?s=h:w>=S&&w<k&&(s=h+1):w>=S&&(s=h)}if(o.initialized&&s!==f&&(!o.allowSlideNext&&(m?d>o.translate&&d>o.minTranslate():d<o.translate&&d<o.minTranslate())||!o.allowSlidePrev&&d>o.translate&&d>o.maxTranslate()&&(f||0)!==s))return!1;s!==(c||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(d);let p;if(s>f?p="next":s<f?p="prev":p="reset",m&&-d===o.translate||!m&&d===o.translate)return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(d),p!=="reset"&&(o.transitionStart(n,p),o.transitionEnd(n,p)),!1;if(a.cssMode){const h=o.isHorizontal(),w=m?d:-d;if(t===0){const S=o.virtual&&o.params.virtual.enabled;S&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),S&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[h?"scrollLeft":"scrollTop"]=w})):g[h?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return ap({swiper:o,targetPosition:w,side:h?"left":"top"}),!0;g.scrollTo({[h?"left":"top"]:w,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(d),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,p),t===0?o.transitionEnd(n,p):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(w){!o||o.destroyed||w.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,p))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function q0(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this,o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let a;if(o){const m=s*i.params.grid.rows;a=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else a=i.getSlideIndexByData(s);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let c=i.params.slidesPerView;c==="auto"?c=i.slidesPerViewDynamic():(c=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&c%2===0&&(c=c+1));let f=l-a<c;if(u&&(f=f||a<Math.ceil(c/2)),f){const m=u?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-l+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(o){const m=s*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function Z0(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i)return r;let a=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:a,u=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function J0(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:a,enabled:l,animating:u}=r;if(!l)return r;const c=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!c&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=a?r.translate:-r.translate;function m(d){return d<0?-Math.floor(Math.abs(d)):Math.floor(d)}const g=m(f),x=o.map(d=>m(d));let y=o[x.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let d;o.forEach((p,h)=>{g>=p&&(d=h)}),typeof d<"u"&&(y=o[d>0?d-1:d])}let E=0;if(typeof y<"u"&&(E=s.indexOf(y),E<0&&(E=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),i.rewind&&r.isBeginning){const d=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(d,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,e,t,n)}),!0;return r.slideTo(E,e,t,n)}function e1(e,t,n){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0);const r=this;return r.slideTo(r.activeIndex,e,t,n)}function t1(e,t,n,r){e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const u=i.snapGrid[a],c=i.snapGrid[a+1];l-u>(c-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[a-1],c=i.snapGrid[a];l-u<=(c-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function n1(){const e=this,{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(lt(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Ll(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(lt(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Ll(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var r1={slideTo:K0,slideToLoop:q0,slideNext:Z0,slidePrev:J0,slideReset:e1,slideToClosest:t1,slideToClickedSlide:n1};function i1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{lt(r,`.${n.slideClass}, swiper-slide`).forEach((f,m)=>{f.setAttribute("data-swiper-slide-index",m)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),a=t.slides.length%s!==0,l=o&&t.slides.length%n.grid.rows!==0,u=c=>{for(let f=0;f<c;f+=1){const m=t.isElement?So("swiper-slide",[n.slideBlankClass]):So("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(m)}};if(a){if(n.loopAddBlankSlides){const c=s-t.slides.length%s;u(c),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const c=n.grid.rows-t.slides.length%n.grid.rows;u(c),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function o1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:u,allowSlidePrev:c,allowSlideNext:f,slidesEl:m,params:g}=l,{centeredSlides:x}=g;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):g.centeredSlides&&l.snapIndex<g.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=c,l.allowSlideNext=f,l.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),x&&y%2===0&&(y=y+1));const E=g.slidesPerGroupAuto?y:g.slidesPerGroup;let d=E;d%E!==0&&(d+=E-d%E),d+=g.loopAdditionalSlides,l.loopedSlides=d;const p=l.grid&&g.grid&&g.grid.rows>1;u.length<y+d?wo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):p&&g.grid.fill==="row"&&wo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],w=[];let S=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(u.filter(N=>N.classList.contains(g.slideActiveClass))[0]):S=o;const k=r==="next"||!r,T=r==="prev"||!r;let z=0,I=0;const C=p?Math.ceil(u.length/g.grid.rows):u.length,R=(p?u[o].column:o)+(x&&typeof i>"u"?-y/2+.5:0);if(R<d){z=Math.max(d-R,E);for(let N=0;N<d-R;N+=1){const U=N-Math.floor(N/C)*C;if(p){const re=C-U-1;for(let me=u.length-1;me>=0;me-=1)u[me].column===re&&h.push(me)}else h.push(C-U-1)}}else if(R+y>C-d){I=Math.max(R-(C-d*2),E);for(let N=0;N<I;N+=1){const U=N-Math.floor(N/C)*C;p?u.forEach((re,me)=>{re.column===U&&w.push(me)}):w.push(U)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),T&&h.forEach(N=>{u[N].swiperLoopMoveDOM=!0,m.prepend(u[N]),u[N].swiperLoopMoveDOM=!1}),k&&w.forEach(N=>{u[N].swiperLoopMoveDOM=!0,m.append(u[N]),u[N].swiperLoopMoveDOM=!1}),l.recalcSlides(),g.slidesPerView==="auto"?l.updateSlides():p&&(h.length>0&&T||w.length>0&&k)&&l.slides.forEach((N,U)=>{l.grid.updateSlide(U,N,l.slides)}),g.watchSlidesProgress&&l.updateSlidesOffset(),n){if(h.length>0&&T){if(typeof t>"u"){const N=l.slidesGrid[S],re=l.slidesGrid[S+z]-N;a?l.setTranslate(l.translate-re):(l.slideTo(S+z,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-re,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-re))}else if(i){const N=p?h.length/g.grid.rows:h.length;l.slideTo(l.activeIndex+N,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&k)if(typeof t>"u"){const N=l.slidesGrid[S],re=l.slidesGrid[S-I]-N;a?l.setTranslate(l.translate-re):(l.slideTo(S-I,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-re,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-re))}else{const N=p?w.length/g.grid.rows:w.length;l.slideTo(l.activeIndex-N,0,!1,!0)}}if(l.allowSlidePrev=c,l.allowSlideNext=f,l.controller&&l.controller.control&&!s){const N={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...N,slideTo:U.params.slidesPerView===g.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...N,slideTo:l.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}l.emit("loopFix")}function s1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var l1={loopCreate:i1,loopFix:o1,loopDestroy:s1};function a1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function u1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var c1={setGrabCursor:a1,unsetGrabCursor:u1};function d1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Jn()||r===De())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function fc(e,t,n){const r=De(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function f1(e){const t=this,n=Jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){fc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:a}=t;if(!a||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",c=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&c&&(l=c[0]);const f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?d1(f,l):l.closest(f))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const g=s.currentX,x=s.currentY;if(!fc(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=g,s.startY=x,i.touchStartTime=xo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const E=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||E)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function p1(e){const t=Jn(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let u;if(l.type==="touchmove"){if(u=[...l.changedTouches].filter(k=>k.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=u.pageX,f=u.pageY;if(l.preventedByNestedSwiper){o.startX=c,o.startY=f;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:c,startY:f,currentX:c,currentY:f}),r.touchStartTime=xo());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<o.startY&&n.translate<=n.maxTranslate()||f>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<o.startX&&n.translate<=n.maxTranslate()||c>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=c,o.currentY=f;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let k;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+g*g>=25&&(k=Math.atan2(Math.abs(g),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?k>i.touchAngle:90-k>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let x=n.isHorizontal()?m:g,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(x=Math.abs(x)*(s?1:-1),y=Math.abs(y)*(s?1:-1)),o.diff=x,x*=i.touchRatio,s&&(x=-x,y=-y);const E=n.touchesDirection;n.swipeDirection=x>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const d=n.params.loop&&!i.cssMode,p=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(d&&p&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(k)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let h;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&E!==n.touchesDirection&&d&&p&&Math.abs(x)>=1){Object.assign(o,{startX:c,startY:f,currentX:c,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=x+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),x>0?(d&&p&&!h&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+x)**S))):x<0&&(d&&p&&!h&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-x)**S))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(x)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function h1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:a,rtlTranslate:l,slidesGrid:u,enabled:c}=t;if(!c||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=xo(),m=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),m<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=xo(),Ll(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(s.followFinger?g=l?t.translate:-t.translate:g=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const x=g>=-t.maxTranslate()&&!t.params.loop;let y=0,E=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<s.slidesPerGroupSkip?1:s.slidesPerGroup){const k=S<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof u[S+k]<"u"?(x||g>=u[S]&&g<u[S+k])&&(y=S,E=u[S+k]-u[S]):(x||g>=u[S])&&(y=S,E=u[u.length-1]-u[u.length-2])}let d=null,p=null;s.rewind&&(t.isBeginning?p=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(d=0));const h=(g-u[y])/E,w=y<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(m>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?d:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(h>1-s.longSwipesRatio?t.slideTo(y+w):p!==null&&h<0&&Math.abs(h)>s.longSwipesRatio?t.slideTo(p):t.slideTo(y))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(d!==null?d:y+w),t.swipeDirection==="prev"&&t.slideTo(p!==null?p:y))}}function pc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function m1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function g1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function v1(e){const t=this;Hi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function y1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const dp=(e,t)=>{const n=Jn(),{params:r,el:i,wrapperEl:o,device:s}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",u=t;n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[u](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",pc,!0):e[u]("observerUpdate",pc,!0),i[l]("load",e.onLoad,{capture:!0})};function x1(){const e=this,{params:t}=e;e.onTouchStart=f1.bind(e),e.onTouchMove=p1.bind(e),e.onTouchEnd=h1.bind(e),e.onDocumentTouchStart=y1.bind(e),t.cssMode&&(e.onScroll=g1.bind(e)),e.onClick=m1.bind(e),e.onLoad=v1.bind(e),dp(e,"on")}function w1(){dp(this,"off")}var S1={attachEvents:x1,detachEvents:w1};const hc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function E1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const l=(s in o?o[s]:void 0)||e.originalParams,u=hc(e,r),c=hc(e,l),f=r.enabled;u&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(d=>{if(typeof l[d]>"u")return;const p=r[d]&&r[d].enabled,h=l[d]&&l[d].enabled;p&&!h&&e[d].disable(),!p&&h&&e[d].enable()});const m=l.direction&&l.direction!==r.direction,g=r.loop&&(l.slidesPerView!==r.slidesPerView||m),x=r.loop;m&&n&&e.changeDirection(),Le(e.params,l);const y=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),f&&!y?e.disable():!f&&y&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",l),n&&(g?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&E?(e.loopCreate(t),e.updateSlides()):x&&!E&&e.loopDestroy()),e.emit("breakpoint",l)}function k1(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=De(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:u}=s[a];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}var T1={setBreakpoint:E1,getBreakpoint:k1};function C1(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function P1(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=C1(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function z1(){const e=this,{el:t,classNames:n}=e;t.classList.remove(...n),e.emitContainerClasses()}var _1={addClasses:P1,removeClasses:z1};function I1(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var j1={checkOverflow:I1},Al={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function M1(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Le(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Le(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Le(t,r)}}const Ps={eventsEmitter:_0,update:D0,translate:G0,transition:X0,slide:r1,loop:l1,grabCursor:c1,events:S1,breakpoints:T1,checkOverflow:j1,classes:_1},zs={};let Da=class ft{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Le({},n),t&&!n.el&&(n.el=t);const s=Jn();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const c=[];return s.querySelectorAll(n.el).forEach(f=>{const m=Le({},n,{el:f});c.push(new ft(m))}),c}const a=this;a.__swiper__=!0,a.support=up(),a.device=k0({userAgent:n.userAgent}),a.browser=C0(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(c=>{c({params:n,swiper:a,extendParams:M1(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const u=Le({},Al,l);return a.params=Le({},u,zs,n),a.originalParams=Le({},a.params),a.passedParams=Le({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(c=>{a.on(c,a.params.on[c])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=lt(n,`.${r.slideClass}, swiper-slide`),o=cc(i[0]);return cc(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=lt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:u}=r;let c=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=o[u]?o[u].swiperSlideSize:0,m;for(let g=u+1;g<o.length;g+=1)o[g]&&!m&&(f+=o[g].swiperSlideSize,c+=1,f>l&&(m=!0));for(let g=u-1;g>=0;g-=1)o[g]&&!m&&(f+=o[g].swiperSlideSize,c+=1,f>l&&(m=!0))}else if(t==="current")for(let f=u+1;f<o.length;f+=1)(n?s[f]+a[f]-s[u]<l:s[f]-s[u]<l)&&(c+=1);else for(let f=u-1;f>=0;f-=1)s[u]-s[f]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Hi(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):lt(r,i())[0])();return!s&&n.params.createElements&&(s=So("div",n.params.wrapperClass),r.append(s),lt(r,`.${n.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Nt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Nt(r,"direction")==="rtl"),wrongRTL:Nt(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Hi(n,o):o.addEventListener("load",s=>{Hi(n,s.target)})}),Nl(n),n.initialized=!0,Nl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttribute("style"),s.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el.swiper=null,h0(r)),r.destroyed=!0),null}static extendDefaults(t){Le(zs,t)}static get extendedDefaults(){return zs}static get defaults(){return Al}static installModule(t){ft.prototype.__modules__||(ft.prototype.__modules__=[]);const n=ft.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ft.installModule(n)),ft):(ft.installModule(t),ft)}};Object.keys(Ps).forEach(e=>{Object.keys(Ps[e]).forEach(t=>{Da.prototype[t]=Ps[e][t]})});Da.use([P0,z0]);const fp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function fn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Rn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:fn(t[r])&&fn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Rn(e[r],t[r]):e[r]=t[r]})}function pp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function hp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function mp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function gp(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function O1(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function L1(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:a,paginationEl:l}=e;const u=i.filter(I=>I!=="children"&&I!=="direction"&&I!=="wrapperClass"),{params:c,pagination:f,navigation:m,scrollbar:g,virtual:x,thumbs:y}=t;let E,d,p,h,w,S,k,T;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(E=!0),i.includes("controller")&&r.controller&&r.controller.control&&c.controller&&!c.controller.control&&(d=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(c.pagination||c.pagination===!1)&&f&&!f.el&&(p=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&g&&!g.el&&(h=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(c.navigation||c.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(w=!0);const z=I=>{t[I]&&(t[I].destroy(),I==="navigation"?(t.isElement&&(t[I].prevEl.remove(),t[I].nextEl.remove()),c[I].prevEl=void 0,c[I].nextEl=void 0,t[I].prevEl=void 0,t[I].nextEl=void 0):(t.isElement&&t[I].el.remove(),c[I].el=void 0,t[I].el=void 0))};i.includes("loop")&&t.isElement&&(c.loop&&!r.loop?S=!0:!c.loop&&r.loop?k=!0:T=!0),u.forEach(I=>{if(fn(c[I])&&fn(r[I]))Object.assign(c[I],r[I]),(I==="navigation"||I==="pagination"||I==="scrollbar")&&"enabled"in r[I]&&!r[I].enabled&&z(I);else{const C=r[I];(C===!0||C===!1)&&(I==="navigation"||I==="pagination"||I==="scrollbar")?C===!1&&z(I):c[I]=r[I]}}),u.includes("controller")&&!d&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),i.includes("children")&&n&&x&&c.virtual.enabled?(x.slides=n,x.update(!0)):i.includes("virtual")&&x&&c.virtual.enabled&&(n&&(x.slides=n),x.update(!0)),i.includes("children")&&n&&c.loop&&(T=!0),E&&y.init()&&y.update(!0),d&&(t.controller.control=c.controller.control),p&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(c.pagination.el=l),f.init(),f.render(),f.update()),h&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(c.scrollbar.el=a),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(c.navigation.nextEl=o),s&&(c.navigation.prevEl=s),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||T)&&t.loopDestroy(),(k||T)&&t.loopCreate(),t.update()}function N1(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Rn(n,Al),n._emitClasses=!0,n.init=!1;const o={},s=fp.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(s.indexOf(l)>=0?fn(e[l])?(n[l]={},i[l]={},Rn(n[l],e[l]),Rn(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function A1(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:a}=e;pp(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),hp(t)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),mp(t)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(n)}function R1(e,t,n,r,i){const o=[];if(!t)return o;const s=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&s("children"),r.length!==n.length&&s("children")}return fp.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(fn(e[l])&&fn(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?s(l):(u.forEach(f=>{e[l][f]!==t[l][f]&&s(l)}),c.forEach(f=>{e[l][f]!==t[l][f]&&s(l)}))}else e[l]!==t[l]&&s(l)}),o}const $1=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eo.apply(this,arguments)}function vp(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function yp(e){const t=[];return H.Children.toArray(e).forEach(n=>{vp(n)?t.push(n):n.props&&n.props.children&&yp(n.props.children).forEach(r=>t.push(r))}),t}function b1(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return H.Children.toArray(e).forEach(r=>{if(vp(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=yp(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function D1(e,t,n){if(!n)return null;const r=c=>{let f=c;return c<0?f=t.length+c:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,u=[];for(let c=a;c<l;c+=1)c>=o&&c<=s&&u.push(t[r(c)]);return u.map((c,f)=>H.cloneElement(c,{swiper:e,style:i,key:`slide-${f}`}))}function Tr(e,t){return typeof window>"u"?b.useEffect(e,t):b.useLayoutEffect(e,t)}const mc=b.createContext(null),F1=b.createContext(null),xp=b.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...a}=e===void 0?{}:e,l=!1;const[u,c]=b.useState("swiper"),[f,m]=b.useState(null),[g,x]=b.useState(!1),y=b.useRef(!1),E=b.useRef(null),d=b.useRef(null),p=b.useRef(null),h=b.useRef(null),w=b.useRef(null),S=b.useRef(null),k=b.useRef(null),T=b.useRef(null),{params:z,passedParams:I,rest:C,events:L}=N1(a),{slides:R,slots:N}=b1(o),U=()=>{x(!g)};Object.assign(z.on,{_containerClasses(M,A){c(A)}});const re=()=>{Object.assign(z.on,L),l=!0;const M={...z};if(delete M.wrapperClass,d.current=new Da(M),d.current.virtual&&d.current.params.virtual.enabled){d.current.virtual.slides=R;const A={cache:!1,slides:R,renderExternal:m,renderExternalUpdate:!1};Rn(d.current.params.virtual,A),Rn(d.current.originalParams.virtual,A)}};E.current||re(),d.current&&d.current.on("_beforeBreakpoint",U);const me=()=>{l||!L||!d.current||Object.keys(L).forEach(M=>{d.current.on(M,L[M])})},Qe=()=>{!L||!d.current||Object.keys(L).forEach(M=>{d.current.off(M,L[M])})};b.useEffect(()=>()=>{d.current&&d.current.off("_beforeBreakpoint",U)}),b.useEffect(()=>{!y.current&&d.current&&(d.current.emitSlidesClasses(),y.current=!0)}),Tr(()=>{if(t&&(t.current=E.current),!!E.current)return d.current.destroyed&&re(),A1({el:E.current,nextEl:w.current,prevEl:S.current,paginationEl:k.current,scrollbarEl:T.current,swiper:d.current},z),s&&s(d.current),()=>{d.current&&!d.current.destroyed&&d.current.destroy(!0,!1)}},[]),Tr(()=>{me();const M=R1(I,p.current,R,h.current,A=>A.key);return p.current=I,h.current=R,M.length&&d.current&&!d.current.destroyed&&L1({swiper:d.current,slides:R,passedParams:I,changedParams:M,nextEl:w.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:k.current}),()=>{Qe()}}),Tr(()=>{$1(d.current)},[f]);function j(){return z.virtual?D1(d.current,R,f):R.map((M,A)=>H.cloneElement(M,{swiper:d.current,swiperSlideIndex:A}))}return H.createElement(r,Eo({ref:E,className:gp(`${u}${n?` ${n}`:""}`)},C),H.createElement(F1.Provider,{value:d.current},N["container-start"],H.createElement(i,{className:O1(z.wrapperClass)},N["wrapper-start"],j(),N["wrapper-end"]),pp(z)&&H.createElement(H.Fragment,null,H.createElement("div",{ref:S,className:"swiper-button-prev"}),H.createElement("div",{ref:w,className:"swiper-button-next"})),mp(z)&&H.createElement("div",{ref:T,className:"swiper-scrollbar"}),hp(z)&&H.createElement("div",{ref:k,className:"swiper-pagination"}),N["container-end"]))});xp.displayName="Swiper";const wp=b.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:a,virtualIndex:l,swiperSlideIndex:u,...c}=e===void 0?{}:e;const f=b.useRef(null),[m,g]=b.useState("swiper-slide"),[x,y]=b.useState(!1);function E(w,S,k){S===f.current&&g(k)}Tr(()=>{if(typeof u<"u"&&(f.current.swiperSlideIndex=u),t&&(t.current=f.current),!(!f.current||!o)){if(o.destroyed){m!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",E),()=>{o&&o.off("_slideClass",E)}}}),Tr(()=>{o&&f.current&&!o.destroyed&&g(o.getSlideClasses(f.current))},[o]);const d={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},p=()=>typeof r=="function"?r(d):r,h=()=>{y(!0)};return H.createElement(n,Eo({ref:f,className:gp(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:h},c),s&&H.createElement(mc.Provider,{value:d},H.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},p(),a&&!x&&H.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&H.createElement(mc.Provider,{value:d},p(),a&&!x&&H.createElement("div",{className:"swiper-lazy-preloader"})))});wp.displayName="SwiperSlide";function B1(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=lt(e.el,`.${r[i]}`)[0];o||(o=So("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function V1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};const o=y=>(Array.isArray(y)?y:[y]).filter(E=>!!E);function s(y){let E;return y&&typeof y=="string"&&t.isElement&&(E=t.el.querySelector(y),E)?E:(y&&(typeof y=="string"&&(E=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&E.length>1&&t.el.querySelectorAll(y).length===1&&(E=t.el.querySelector(y))),y&&!E?y:E)}function a(y,E){const d=t.params.navigation;y=o(y),y.forEach(p=>{p&&(p.classList[E?"add":"remove"](...d.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=E),t.params.watchOverflow&&t.enabled&&p.classList[t.isLocked?"add":"remove"](d.lockClass))})}function l(){const{nextEl:y,prevEl:E}=t.navigation;if(t.params.loop){a(E,!1),a(y,!1);return}a(E,t.isBeginning&&!t.params.rewind),a(y,t.isEnd&&!t.params.rewind)}function u(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const y=t.params.navigation;if(t.params.navigation=B1(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let E=s(y.nextEl),d=s(y.prevEl);Object.assign(t.navigation,{nextEl:E,prevEl:d}),E=o(E),d=o(d);const p=(h,w)=>{h&&h.addEventListener("click",w==="next"?c:u),!t.enabled&&h&&h.classList.add(...y.lockClass.split(" "))};E.forEach(h=>p(h,"next")),d.forEach(h=>p(h,"prev"))}function m(){let{nextEl:y,prevEl:E}=t.navigation;y=o(y),E=o(E);const d=(p,h)=>{p.removeEventListener("click",h==="next"?c:u),p.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(p=>d(p,"next")),E.forEach(p=>d(p,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?x():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:y,prevEl:E}=t.navigation;if(y=o(y),E=o(E),t.enabled){l();return}[...y,...E].filter(d=>!!d).forEach(d=>d.classList.add(t.params.navigation.lockClass))}),r("click",(y,E)=>{let{nextEl:d,prevEl:p}=t.navigation;d=o(d),p=o(p);const h=E.target;if(t.params.navigation.hideOnClick&&!p.includes(h)&&!d.includes(h)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let w;d.length?w=d[0].classList.contains(t.params.navigation.hiddenClass):p.length&&(w=p[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...d,...p].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const g=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),l()},x=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(t.navigation,{enable:g,disable:x,update:l,init:f,destroy:m})}const W1=P.img`
  width: 320px;
  height: 168px;

  @media (min-width: 768px) {
    width: 342px;
  }

  @media (min-width: 1440px) {
    width: 596px;
    height: 296px;
  }
`,H1=({imageSrc:e,imageSrc2x:t})=>v.jsxs("picture",{children:[v.jsx("source",{srcSet:`${e} 1x, ${t} 2x`}),v.jsx(W1,{src:e})]}),G1="/vite-ecosolution/assets/lviv-region-5b359b82.webp",U1="/vite-ecosolution/assets/lviv-region-2x-96295f3b.webp",Q1="/vite-ecosolution/assets/zhytomyr-city-3f6eae4f.webp",Y1="/vite-ecosolution/assets/zhytomyr-city-2x-a0538cd1.webp",X1="/vite-ecosolution/assets/rivne-city-323c680c.webp",K1="/vite-ecosolution/assets/rivne-city-2x-a1d6bb37.webp",q1="/vite-ecosolution/assets/kherson-city-ef69295b.webp",Z1="/vite-ecosolution/assets/kherson-city-2x-990e6e5b.webp",J1="/vite-ecosolution/assets/zaporizhia-city-805bcd2f.webp",ey="/vite-ecosolution/assets/zaporizhia-city-2x-71a22a97.webp",ty=[{key:1,imageSrc:G1,imageSrc2x:U1,title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{key:2,imageSrc:Q1,imageSrc2x:Y1,title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{key:3,imageSrc:X1,imageSrc2x:K1,title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{key:4,imageSrc:q1,imageSrc2x:Z1,title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{key:5,imageSrc:J1,imageSrc2x:ey,title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],ny=P.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`,ry=P.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`,iy=P.h2`
  width: 264px;

  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media (max-width: 767px) {
  }

  @media (min-width: 768px) {
    width: 276px;

    font-size: 36px;
    line-height: 36px;
  }

  @media (min-width: 1440px) {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }
`,oy=P.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 0;
    padding-left: 9px;

    border-left: 1px solid #97d28b;
  }

  @media (min-width: 1440px) {
    padding-left: 161px;
  }
`,sy=P.p`
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
`,ly=P.div`
  display: flex;
  gap: 12px;
`,ay=P.button`
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
`,uy=P.button`
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
`,cy=P.div`
  width: 320px;
  flex-shrink: 0;
  margin-top: 24px;

  @media (min-width: 768px) {
    width: 100%;
    margin-top: 38px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    margin-top: 120px;
  }
`,dy=P.div`
  padding: 24px 12px 12px;

  background: #eaedf1;

  @media (min-width: 1440px) {
    padding: 48px 36px;
  }
`,fy=P.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 21px;

  border-bottom: 1px solid #97d28b;
`,py=P.h4`
  width: 175px;

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

  @media (min-width: 1440px) {
    width: 357px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,hy=P.a`
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
`,my=P.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`,gy=P.p`
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

  @media (min-width: 1440px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,vy=P.p`
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

  @media (min-width: 1440px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,yy=()=>{const[e,t]=b.useState(1),n=op(768,1440);return v.jsxs(ny,{id:Pe.CASES,children:[v.jsxs(ry,{children:[v.jsx(iy,{children:"Successful cases of our company"}),v.jsxs(oy,{children:[v.jsxs(sy,{children:[e,v.jsx("span",{children:"/05"})]}),v.jsxs(ly,{children:[v.jsx(ay,{className:"custom_prev",children:v.jsx("svg",{width:36,height:36,children:v.jsx("use",{href:ne+"#icon-arrow-right"})})}),v.jsx(uy,{className:"custom_next",children:v.jsx("svg",{width:36,height:36,children:v.jsx("use",{href:ne+"#icon-arrow-right"})})})]})]})]}),v.jsx(cy,{children:v.jsx(xp,{modules:[V1],spaceBetween:n==="desktop"?48:24,loop:!0,slidesPerView:n==="mobile"?1:2,navigation:{nextEl:".custom_next",prevEl:".custom_prev"},onSlideChange:r=>t(r.realIndex+1),children:ty.map(r=>v.jsxs(wp,{children:[v.jsx(H1,{imageSrc:r.imageSrc,imageSrc2x:r.imageSrc2x}),v.jsxs(dy,{children:[v.jsxs(fy,{children:[v.jsx(py,{children:r.title}),v.jsx(hy,{href:"/",target:"blank",children:v.jsx("svg",{width:28,height:28,children:v.jsx("use",{href:ne+"#icon-arrow-right-up"})})})]}),v.jsxs(my,{children:[v.jsx(gy,{children:r.description}),v.jsx(vy,{children:r.date})]})]})]},r.key))})})]})},xy=[{id:1,title:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,title:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,title:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,title:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,title:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],wy=P.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    justify-content: start;
    gap: 185px;
    margin-top: 120px;
  }
`,Sy=P.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,Ey=P.h2`
  width: 320px;

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

  @media (min-width: 1440px) {
    width: 398px;

    font-size: 48px;
    line-height: 48px; 
  }
`,ky=P.div`
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  & > :last-child {
    padding-bottom: 0;
  }
`,Ty=P.div`
  display: flex;
  gap: 8px;
  padding: 16px 0;

  border-top: 1px solid #97d28b;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
    gap: 24px;
  }
`,Cy=P.div`
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
`,Py=P.h3`
  width: 296px;

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

  @media (min-width: 1440px) {
    width: 544px;

    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,zy=P.p`
  width: 296px;
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

  @media (min-width: 1440px) {
    width: 544px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,gc=P.div`
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
`,vc=P.p`
  color: #173d33;
  text-align: justify;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,_y=()=>{const[e,t]=b.useState(1),n=i=>{t(i)},r=()=>{Kr(Pe.CONTACT)};return v.jsxs(wy,{id:Pe.QUESTIONS,children:[v.jsxs(Sy,{children:[v.jsx(Ey,{children:"Frequently Asked Questions"}),v.jsxs(gc,{id:"not-mobile",children:[v.jsx(vc,{children:"Didn't find the answer to your question?"}),v.jsx(Ol,{textContent:"Contact Us",followTo:r})]})]}),v.jsx(ky,{children:xy.map(i=>v.jsxs(Ty,{children:[v.jsx(Cy,{onClick:()=>n(i.id),children:e===i.id?v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-minus"})}):v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-add"})})}),v.jsxs("div",{children:[v.jsx(Py,{children:i.title}),e===i.id&&v.jsx(zy,{children:i.answer})]})]},i.id))}),v.jsxs(gc,{id:"mobile",children:[v.jsx(vc,{children:"Didn't find the answer to your question?"}),v.jsx(Ol,{textContent:"Contact Us",followTo:r})]})]})},Iy=P.form`
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

  @media (min-width: 1440px) {
    padding: 48px;
  }
`,_s=P.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 294px;
  /* width: 100%; */

  border-bottom: 1px solid #97d28b;

  @media (min-width: 1440px) {
    width: 500px;
  }
`,ki=P.span`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`,Is=P.input`
  color: #173d33;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  border: none;
  background: transparent;

  @media (min-width: 1440px) {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`,jy=P.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  width: 294px;

  @media (min-width: 1440px) {
    width: 500px;
  }
`,My=P.textarea`
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
`,Oy=P.div`
  margin-top: -8px;
  margin-left: auto;
`,Ly=()=>v.jsxs(Iy,{action:"",children:[v.jsxs(_s,{htmlFor:"fullName",children:[v.jsx(ki,{children:"* Full name:"}),v.jsx(Is,{type:"text",id:"fullName",placeholder:"John Rosie"})]}),v.jsxs(_s,{htmlFor:"email",children:[v.jsx(ki,{children:"* E-mail:"}),v.jsx(Is,{type:"email",id:"email",placeholder:"johnrosie@gmail.com"})]}),v.jsxs(_s,{htmlFor:"phone",children:[v.jsx(ki,{children:"* Phone:"}),v.jsx(Is,{type:"tel",id:"phone",placeholder:"380961234567"})]}),v.jsxs(jy,{htmlFor:"message",children:[v.jsx(ki,{children:"Message:"}),v.jsx(My,{id:"message",name:"message",cols:30,rows:10,placeholder:"Your message"})]}),v.jsx(Oy,{children:v.jsx(sp,{type:"submit",textContent:"Send"})})]}),Ny=P.section`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`,Ay=P.h2`
  color: #173d33;
  font-family: "Oswald";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 100% */
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 48px; /* 100% */
  }
`,Ry=P.div`
  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    gap: 122px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    gap: 178px;
    margin-top: 120px;
  }
`,$y=P.address`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ti=P.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 244px;

  @media (min-width: 1440px) {
    width: 469px;
  }
`,by=P.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ci=P.h3`
  color: #173d33;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`,Pi=P.a`
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

    @media (min-width: 1440px) {
      width: 434px;
    }
  }

  @media (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  &:hover {
    svg use {
      stroke: #97d28b;
    }
    color: #97d28b;
  }
`,Dy=()=>v.jsxs(Ny,{id:Pe.CONTACT,children:[v.jsx(Ay,{children:"Contact Us"}),v.jsxs(Ry,{children:[v.jsxs($y,{children:[v.jsxs(Ti,{children:[v.jsx(Ci,{children:"Phone:"}),v.jsxs(by,{children:[v.jsxs(Pi,{href:"tel:+38(093)1234567",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ne+"#icon-call",stroke:"#173d33",fill:"#FFFFFF"})}),"38 (098) 12 34 567"]}),v.jsxs(Pi,{href:"tel:+38(093)1234567",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ne+"#icon-call"})}),"38 (093) 12 34 567"]})]})]}),v.jsxs(Ti,{children:[v.jsx(Ci,{children:"E-mail:"}),v.jsxs(Pi,{href:"mailto:office@ecosolution.com",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ne+"#icon-sms"})}),"office@ecosolution.com"]})]}),v.jsxs(Ti,{children:[v.jsx(Ci,{children:"Address:"}),v.jsxs(Pi,{href:"https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu",target:"blank",children:[v.jsx("svg",{width:24,height:24,stroke:"#173d33",fill:"transparent",children:v.jsx("use",{href:ne+"#icon-map"})}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),v.jsxs(Ti,{children:[v.jsx(Ci,{children:"Social Networks:"}),v.jsx($a,{colorplan:"primary",space:32})]})]}),v.jsx(Ly,{})]})]}),Fy=P.footer`
  width: 320px;
  flex-shrink: 0;
  margin-top: 36px;
  padding: 24px 0;

  border-top: 1px solid #97d28b;

  @media (min-width: 768px) {
    width: 708px;
    margin-top: 100px;
    padding: 44px 0 40px;
  }

  @media (min-width: 1440px) {
    width: 1240px;
    margin-top: 120px;
  }
`,By=P.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`,Vy=P.div`
  @media (max-width: 767px) {
    margin: 24px auto 0;
    order: 1;
  }

  @media (min-width: 768px) {
    margin-left: 97px;
  }

  @media (min-width: 1440px) {
    margin-left: 512px;
  }
`,Wy=P.button`
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
`,Hy=P.div`
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
`,Gy=P.address`
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

  @media (min-width: 1440px) {
    gap: 487px;
  }
`,Uy=()=>{const e=()=>{Kr(Pe.MAIN)};return v.jsxs(Fy,{children:[v.jsxs(By,{children:[v.jsx(ip,{}),v.jsx(Vy,{children:v.jsx($a,{colorplan:"primary",space:8})}),v.jsx(Wy,{onClick:e,children:v.jsx("svg",{width:16,height:16,children:v.jsx("use",{href:ne+"#icon-arrow-right"})})})]}),v.jsxs(Hy,{children:[v.jsxs(Gy,{children:[v.jsx("p",{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),v.jsx("p",{children:"office@ecosolution.com"})]}),v.jsx("p",{children:"ecosolution © 2023"})]})]})};const Qy="/vite-ecosolution/assets/fira-sans-v17-latin-300-f8fb86af.woff2",Yy="/vite-ecosolution/assets/fira-sans-v17-latin-regular-89ae1743.woff2",Xy="/vite-ecosolution/assets/fira-sans-v17-latin-500-c52b9a30.woff2",Ky="/vite-ecosolution/assets/oswald-v53-latin-regular-24df88e7.woff2",qy="/vite-ecosolution/assets/oswald-v53-latin-700-6ecd2a10.woff2",Zy="/vite-ecosolution/assets/oswald-v53-latin-500-201dc695.woff2",Jy="/vite-ecosolution/assets/CASaygonText-Regular-b26b980e.woff2",ex="/vite-ecosolution/assets/All-Round-Gothic-Medium-5c9e64b8.woff2",tx="/vite-ecosolution/assets/inter-v13-latin-regular-2301bb03.woff2",dt={FiraSans_300:Qy,FiraSans_Regular:Yy,FiraSans_500:Xy,Oswald_Regular:Ky,Oswald_700:qy,Oswald_500:Zy,CASaygonText_Regular:Jy,AllRoundGothic_Medium:ex,Inter_Regular:tx},nx=Qg`
@font-face {
  font-family: 'Fira Sans';
  src: url(${dt.FiraSans_300}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${dt.FiraSans_Regular}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${dt.FiraSans_500}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${dt.Oswald_Regular}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${dt.Oswald_700}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${dt.Oswald_500}) format('woff2');
}

@font-face {
  font-family: 'CA Saygon Text';
  src: url(${dt.CASaygonText_Regular}) format('woff2');
}

@font-face {
  font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
  src: url(${dt.AllRoundGothic_Medium}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  src: url(${dt.Inter_Regular}) format('woff2');
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
`,rx=()=>v.jsxs(v.Fragment,{children:[v.jsx(nx,{}),v.jsxs(Xg,{children:[v.jsx(Sv,{}),v.jsx(Bv,{}),v.jsx(r0,{}),v.jsx(d0,{}),v.jsx(yy,{}),v.jsx(_y,{}),v.jsx(Dy,{}),v.jsx(Uy,{})]})]});js.createRoot(document.getElementById("root")).render(v.jsx(H.StrictMode,{children:v.jsx(rx,{})}));
