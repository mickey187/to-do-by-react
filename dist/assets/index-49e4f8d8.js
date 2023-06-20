var G_=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var BI1=G_((X2,J2)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=c(a);fetch(a.href,r)}})();function M9(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yv={exports:{}},V9={},Zv={exports:{}},a1={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i7=Symbol.for("react.element"),K_=Symbol.for("react.portal"),Y_=Symbol.for("react.fragment"),Z_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),X_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),eI=Symbol.for("react.forward_ref"),tI=Symbol.for("react.suspense"),cI=Symbol.for("react.memo"),nI=Symbol.for("react.lazy"),zh=Symbol.iterator;function aI(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Jv={};function e5(t,e,c){this.props=t,this.context=e,this.refs=Jv,this.updater=c||Qv}e5.prototype.isReactComponent={};e5.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};e5.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function eg(){}eg.prototype=e5.prototype;function to(t,e,c){this.props=t,this.context=e,this.refs=Jv,this.updater=c||Qv}var co=to.prototype=new eg;co.constructor=to;Xv(co,e5.prototype);co.isPureReactComponent=!0;var Ch=Array.isArray,tg=Object.prototype.hasOwnProperty,no={current:null},cg={key:!0,ref:!0,__self:!0,__source:!0};function ng(t,e,c){var n,a={},r=null,i=null;if(e!=null)for(n in e.ref!==void 0&&(i=e.ref),e.key!==void 0&&(r=""+e.key),e)tg.call(e,n)&&!cg.hasOwnProperty(n)&&(a[n]=e[n]);var s=arguments.length-2;if(s===1)a.children=c;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:i7,type:t,key:r,ref:i,props:a,_owner:no.current}}function rI(t,e){return{$$typeof:i7,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ao(t){return typeof t=="object"&&t!==null&&t.$$typeof===i7}function iI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(c){return e[c]})}var Hh=/\/+/g;function Ca(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iI(""+t.key):e.toString(36)}function Ot(t,e,c,n,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(r){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case i7:case K_:i=!0}}if(i)return i=t,a=a(i),t=n===""?"."+Ca(i,0):n,Ch(a)?(c="",t!=null&&(c=t.replace(Hh,"$&/")+"/"),Ot(a,e,c,"",function(l){return l})):a!=null&&(ao(a)&&(a=rI(a,c+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Hh,"$&/")+"/")+t)),e.push(a)),1;if(i=0,n=n===""?".":n+":",Ch(t))for(var s=0;s<t.length;s++){r=t[s];var o=n+Ca(r,s);i+=Ot(r,e,c,o,a)}else if(o=aI(t),typeof o=="function")for(t=o.call(t),s=0;!(r=t.next()).done;)r=r.value,o=n+Ca(r,s++),i+=Ot(r,e,c,o,a);else if(r==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function X7(t,e,c){if(t==null)return t;var n=[],a=0;return Ot(t,n,"","",function(r){return e.call(c,r,a++)}),n}function sI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(c){(t._status===0||t._status===-1)&&(t._status=1,t._result=c)},function(c){(t._status===0||t._status===-1)&&(t._status=2,t._result=c)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var D2={current:null},Ft={transition:null},oI={ReactCurrentDispatcher:D2,ReactCurrentBatchConfig:Ft,ReactCurrentOwner:no};a1.Children={map:X7,forEach:function(t,e,c){X7(t,function(){e.apply(this,arguments)},c)},count:function(t){var e=0;return X7(t,function(){e++}),e},toArray:function(t){return X7(t,function(e){return e})||[]},only:function(t){if(!ao(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};a1.Component=e5;a1.Fragment=Y_;a1.Profiler=Q_;a1.PureComponent=to;a1.StrictMode=Z_;a1.Suspense=tI;a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oI;a1.cloneElement=function(t,e,c){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Xv({},t.props),a=t.key,r=t.ref,i=t._owner;if(e!=null){if(e.ref!==void 0&&(r=e.ref,i=no.current),e.key!==void 0&&(a=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(o in e)tg.call(e,o)&&!cg.hasOwnProperty(o)&&(n[o]=e[o]===void 0&&s!==void 0?s[o]:e[o])}var o=arguments.length-2;if(o===1)n.children=c;else if(1<o){s=Array(o);for(var l=0;l<o;l++)s[l]=arguments[l+2];n.children=s}return{$$typeof:i7,type:t.type,key:a,ref:r,props:n,_owner:i}};a1.createContext=function(t){return t={$$typeof:J_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X_,_context:t},t.Consumer=t};a1.createElement=ng;a1.createFactory=function(t){var e=ng.bind(null,t);return e.type=t,e};a1.createRef=function(){return{current:null}};a1.forwardRef=function(t){return{$$typeof:eI,render:t}};a1.isValidElement=ao;a1.lazy=function(t){return{$$typeof:nI,_payload:{_status:-1,_result:t},_init:sI}};a1.memo=function(t,e){return{$$typeof:cI,type:t,compare:e===void 0?null:e}};a1.startTransition=function(t){var e=Ft.transition;Ft.transition={};try{t()}finally{Ft.transition=e}};a1.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};a1.useCallback=function(t,e){return D2.current.useCallback(t,e)};a1.useContext=function(t){return D2.current.useContext(t)};a1.useDebugValue=function(){};a1.useDeferredValue=function(t){return D2.current.useDeferredValue(t)};a1.useEffect=function(t,e){return D2.current.useEffect(t,e)};a1.useId=function(){return D2.current.useId()};a1.useImperativeHandle=function(t,e,c){return D2.current.useImperativeHandle(t,e,c)};a1.useInsertionEffect=function(t,e){return D2.current.useInsertionEffect(t,e)};a1.useLayoutEffect=function(t,e){return D2.current.useLayoutEffect(t,e)};a1.useMemo=function(t,e){return D2.current.useMemo(t,e)};a1.useReducer=function(t,e,c){return D2.current.useReducer(t,e,c)};a1.useRef=function(t){return D2.current.useRef(t)};a1.useState=function(t){return D2.current.useState(t)};a1.useSyncExternalStore=function(t,e,c){return D2.current.useSyncExternalStore(t,e,c)};a1.useTransition=function(){return D2.current.useTransition()};a1.version="18.2.0";Zv.exports=a1;var L=Zv.exports;const z8=M9(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lI=L,fI=Symbol.for("react.element"),uI=Symbol.for("react.fragment"),hI=Object.prototype.hasOwnProperty,dI=lI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mI={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,c){var n,a={},r=null,i=null;c!==void 0&&(r=""+c),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(i=e.ref);for(n in e)hI.call(e,n)&&!mI.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)a[n]===void 0&&(a[n]=e[n]);return{$$typeof:fI,type:t,key:r,ref:i,props:a,_owner:dI.current}}V9.Fragment=uI;V9.jsx=ag;V9.jsxs=ag;Yv.exports=V9;var d=Yv.exports,Br={},rg={exports:{}},i3={},ig={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,j){var K=I.length;I.push(j);e:for(;0<K;){var x1=K-1>>>1,_1=I[x1];if(0<a(_1,j))I[x1]=j,I[K]=_1,K=x1;else break e}}function c(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var j=I[0],K=I.pop();if(K!==j){I[0]=K;e:for(var x1=0,_1=I.length,L3=_1>>>1;x1<L3;){var U3=2*(x1+1)-1,O6=I[U3],j3=U3+1,F6=I[j3];if(0>a(O6,K))j3<_1&&0>a(F6,O6)?(I[x1]=F6,I[j3]=K,x1=j3):(I[x1]=O6,I[U3]=K,x1=U3);else if(j3<_1&&0>a(F6,K))I[x1]=F6,I[j3]=K,x1=j3;else break e}}return j}function a(I,j){var K=I.sortIndex-j.sortIndex;return K!==0?K:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var o=[],l=[],f=1,u=null,h=3,p=!1,z=!1,C=!1,H=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var j=c(l);j!==null;){if(j.callback===null)n(l);else if(j.startTime<=I)n(l),j.sortIndex=j.expirationTime,e(o,j);else break;j=c(l)}}function M(I){if(C=!1,g(I),!z)if(c(o)!==null)z=!0,Q1(V);else{var j=c(l);j!==null&&A2(M,j.startTime-I)}}function V(I,j){z=!1,C&&(C=!1,v(T),T=-1),p=!0;var K=h;try{for(g(j),u=c(o);u!==null&&(!(u.expirationTime>j)||I&&!Z());){var x1=u.callback;if(typeof x1=="function"){u.callback=null,h=u.priorityLevel;var _1=x1(u.expirationTime<=j);j=t.unstable_now(),typeof _1=="function"?u.callback=_1:u===c(o)&&n(o),g(j)}else n(o);u=c(o)}if(u!==null)var L3=!0;else{var U3=c(l);U3!==null&&A2(M,U3.startTime-j),L3=!1}return L3}finally{u=null,h=K,p=!1}}var b=!1,k=null,T=-1,E=5,A=-1;function Z(){return!(t.unstable_now()-A<E)}function E1(){if(k!==null){var I=t.unstable_now();A=I;var j=!0;try{j=k(!0,I)}finally{j?Z1():(b=!1,k=null)}}else b=!1}var Z1;if(typeof m=="function")Z1=function(){m(E1)};else if(typeof MessageChannel<"u"){var O4=new MessageChannel,j1=O4.port2;O4.port1.onmessage=E1,Z1=function(){j1.postMessage(null)}}else Z1=function(){H(E1,0)};function Q1(I){k=I,b||(b=!0,Z1())}function A2(I,j){T=H(function(){I(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){z||p||(z=!0,Q1(V))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return c(o)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var K=h;h=j;try{return I()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=h;h=I;try{return j()}finally{h=K}},t.unstable_scheduleCallback=function(I,j,K){var x1=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?x1+K:x1):K=x1,I){case 1:var _1=-1;break;case 2:_1=250;break;case 5:_1=1073741823;break;case 4:_1=1e4;break;default:_1=5e3}return _1=K+_1,I={id:f++,callback:j,priorityLevel:I,startTime:K,expirationTime:_1,sortIndex:-1},K>x1?(I.sortIndex=K,e(l,I),c(o)===null&&I===c(l)&&(C?(v(T),T=-1):C=!0,A2(M,K-x1))):(I.sortIndex=_1,e(o,I),z||p||(z=!0,Q1(V))),I},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(I){var j=h;return function(){var K=h;h=j;try{return I.apply(this,arguments)}finally{h=K}}}})(sg);ig.exports=sg;var pI=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og=L,n3=pI;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,c=1;c<arguments.length;c++)e+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,de={};function A0(t,e){I8(t,e),I8(t+"Capture",e)}function I8(t,e){for(de[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var L4=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ur=Object.prototype.hasOwnProperty,vI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Vh={};function gI(t){return Ur.call(Vh,t)?!0:Ur.call(Mh,t)?!1:vI.test(t)?Vh[t]=!0:(Mh[t]=!0,!1)}function zI(t,e,c,n){if(c!==null&&c.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:c!==null?!c.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CI(t,e,c,n){if(e===null||typeof e>"u"||zI(t,e,c,n))return!0;if(n)return!1;if(c!==null)switch(c.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function R2(t,e,c,n,a,r,i){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=c,this.propertyName=t,this.type=e,this.sanitizeURL=r,this.removeEmptyString=i}var d2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){d2[t]=new R2(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];d2[e]=new R2(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){d2[t]=new R2(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){d2[t]=new R2(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){d2[t]=new R2(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){d2[t]=new R2(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){d2[t]=new R2(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){d2[t]=new R2(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){d2[t]=new R2(t,5,!1,t.toLowerCase(),null,!1,!1)});var ro=/[\-:]([a-z])/g;function io(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ro,io);d2[e]=new R2(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ro,io);d2[e]=new R2(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ro,io);d2[e]=new R2(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){d2[t]=new R2(t,1,!1,t.toLowerCase(),null,!1,!1)});d2.xlinkHref=new R2("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){d2[t]=new R2(t,1,!1,t.toLowerCase(),null,!0,!0)});function so(t,e,c,n){var a=d2.hasOwnProperty(e)?d2[e]:null;(a!==null?a.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CI(e,c,a,n)&&(c=null),n||a===null?gI(e)&&(c===null?t.removeAttribute(e):t.setAttribute(e,""+c)):a.mustUseProperty?t[a.propertyName]=c===null?a.type===3?!1:"":c:(e=a.attributeName,n=a.attributeNamespace,c===null?t.removeAttribute(e):(a=a.type,c=a===3||a===4&&c===!0?"":""+c,n?t.setAttributeNS(n,e,c):t.setAttribute(e,c))))}var P4=og.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J7=Symbol.for("react.element"),e8=Symbol.for("react.portal"),t8=Symbol.for("react.fragment"),oo=Symbol.for("react.strict_mode"),jr=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),lo=Symbol.for("react.forward_ref"),qr=Symbol.for("react.suspense"),Wr=Symbol.for("react.suspense_list"),fo=Symbol.for("react.memo"),j4=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),yh=Symbol.iterator;function V5(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var A1=Object.assign,Ha;function I5(t){if(Ha===void 0)try{throw Error()}catch(c){var e=c.stack.trim().match(/\n( *(at )?)/);Ha=e&&e[1]||""}return`
`+Ha+t}var Ma=!1;function Va(t,e){if(!t||Ma)return"";Ma=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var n=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){n=l}t.call(e.prototype)}else{try{throw Error()}catch(l){n=l}t()}}catch(l){if(l&&n&&typeof l.stack=="string"){for(var a=l.stack.split(`
`),r=n.stack.split(`
`),i=a.length-1,s=r.length-1;1<=i&&0<=s&&a[i]!==r[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==r[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==r[s]){var o=`
`+a[i].replace(" at new "," at ");return t.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",t.displayName)),o}while(1<=i&&0<=s);break}}}finally{Ma=!1,Error.prepareStackTrace=c}return(t=t?t.displayName||t.name:"")?I5(t):""}function HI(t){switch(t.tag){case 5:return I5(t.type);case 16:return I5("Lazy");case 13:return I5("Suspense");case 19:return I5("SuspenseList");case 0:case 2:case 15:return t=Va(t.type,!1),t;case 11:return t=Va(t.type.render,!1),t;case 1:return t=Va(t.type,!0),t;default:return""}}function Gr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case t8:return"Fragment";case e8:return"Portal";case jr:return"Profiler";case oo:return"StrictMode";case qr:return"Suspense";case Wr:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case fg:return(t._context.displayName||"Context")+".Provider";case lo:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fo:return e=t.displayName||null,e!==null?e:Gr(t.type)||"Memo";case j4:e=t._payload,t=t._init;try{return Gr(t(e))}catch{}}return null}function MI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gr(e);case 8:return e===oo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function z6(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VI(t){var e=dg(t)?"checked":"value",c=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var a=c.get,r=c.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,r.call(this,i)}}),Object.defineProperty(t,e,{enumerable:c.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function et(t){t._valueTracker||(t._valueTracker=VI(t))}function mg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var c=e.getValue(),n="";return t&&(n=dg(t)?t.checked?"true":"false":t.value),t=n,t!==c?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kr(t,e){var c=e.checked;return A1({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??t._wrapperState.initialChecked})}function Lh(t,e){var c=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;c=z6(e.value!=null?e.value:c),t._wrapperState={initialChecked:n,initialValue:c,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&so(t,"checked",e,!1)}function Yr(t,e){pg(t,e);var c=z6(e.value),n=e.type;if(c!=null)n==="number"?(c===0&&t.value===""||t.value!=c)&&(t.value=""+c):t.value!==""+c&&(t.value=""+c);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zr(t,e.type,c):e.hasOwnProperty("defaultValue")&&Zr(t,e.type,z6(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wh(t,e,c){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,c||e===t.value||(t.value=e),t.defaultValue=e}c=t.name,c!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,c!==""&&(t.name=c)}function Zr(t,e,c){(e!=="number"||lc(t.ownerDocument)!==t)&&(c==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+c&&(t.defaultValue=""+c))}var P5=Array.isArray;function C8(t,e,c,n){if(t=t.options,e){e={};for(var a=0;a<c.length;a++)e["$"+c[a]]=!0;for(c=0;c<t.length;c++)a=e.hasOwnProperty("$"+t[c].value),t[c].selected!==a&&(t[c].selected=a),a&&n&&(t[c].defaultSelected=!0)}else{for(c=""+z6(c),e=null,a=0;a<t.length;a++){if(t[a].value===c){t[a].selected=!0,n&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Qr(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return A1({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var c=e.value;if(c==null){if(c=e.children,e=e.defaultValue,c!=null){if(e!=null)throw Error(S(92));if(P5(c)){if(1<c.length)throw Error(S(93));c=c[0]}e=c}e==null&&(e=""),c=e}t._wrapperState={initialValue:z6(c)}}function vg(t,e){var c=z6(e.value),n=z6(e.defaultValue);c!=null&&(c=""+c,c!==t.value&&(t.value=c),e.defaultValue==null&&t.defaultValue!==c&&(t.defaultValue=c)),n!=null&&(t.defaultValue=""+n)}function bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xr(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tt,zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,c,n,a){MSApp.execUnsafeLocalFunction(function(){return t(e,c,n,a)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tt=tt||document.createElement("div"),tt.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function me(t,e){if(e){var c=t.firstChild;if(c&&c===t.lastChild&&c.nodeType===3){c.nodeValue=e;return}}t.textContent=e}var W5={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yI=["Webkit","ms","Moz","O"];Object.keys(W5).forEach(function(t){yI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),W5[e]=W5[t]})});function Cg(t,e,c){return e==null||typeof e=="boolean"||e===""?"":c||typeof e!="number"||e===0||W5.hasOwnProperty(t)&&W5[t]?(""+e).trim():e+"px"}function Hg(t,e){t=t.style;for(var c in e)if(e.hasOwnProperty(c)){var n=c.indexOf("--")===0,a=Cg(c,e[c],n);c==="float"&&(c="cssFloat"),n?t.setProperty(c,a):t[c]=a}}var LI=A1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jr(t,e){if(e){if(LI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function ei(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ti=null;function uo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ci=null,H8=null,M8=null;function Sh(t){if(t=l7(t)){if(typeof ci!="function")throw Error(S(280));var e=t.stateNode;e&&(e=b9(e),ci(t.stateNode,t.type,e))}}function Mg(t){H8?M8?M8.push(t):M8=[t]:H8=t}function Vg(){if(H8){var t=H8,e=M8;if(M8=H8=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function yg(t,e){return t(e)}function Lg(){}var ya=!1;function wg(t,e,c){if(ya)return t(e,c);ya=!0;try{return yg(t,e,c)}finally{ya=!1,(H8!==null||M8!==null)&&(Lg(),Vg())}}function pe(t,e){var c=t.stateNode;if(c===null)return null;var n=b9(c);if(n===null)return null;c=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(c&&typeof c!="function")throw Error(S(231,e,typeof c));return c}var ni=!1;if(L4)try{var y5={};Object.defineProperty(y5,"passive",{get:function(){ni=!0}}),window.addEventListener("test",y5,y5),window.removeEventListener("test",y5,y5)}catch{ni=!1}function wI(t,e,c,n,a,r,i,s,o){var l=Array.prototype.slice.call(arguments,3);try{e.apply(c,l)}catch(f){this.onError(f)}}var G5=!1,fc=null,uc=!1,ai=null,xI={onError:function(t){G5=!0,fc=t}};function bI(t,e,c,n,a,r,i,s,o){G5=!1,fc=null,wI.apply(xI,arguments)}function SI(t,e,c,n,a,r,i,s,o){if(bI.apply(this,arguments),G5){if(G5){var l=fc;G5=!1,fc=null}else throw Error(S(198));uc||(uc=!0,ai=l)}}function T0(t){var e=t,c=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(c=e.return),t=e.return;while(t)}return e.tag===3?c:null}function xg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nh(t){if(T0(t)!==t)throw Error(S(188))}function NI(t){var e=t.alternate;if(!e){if(e=T0(t),e===null)throw Error(S(188));return e!==t?null:t}for(var c=t,n=e;;){var a=c.return;if(a===null)break;var r=a.alternate;if(r===null){if(n=a.return,n!==null){c=n;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===c)return Nh(a),t;if(r===n)return Nh(a),e;r=r.sibling}throw Error(S(188))}if(c.return!==n.return)c=a,n=r;else{for(var i=!1,s=a.child;s;){if(s===c){i=!0,c=a,n=r;break}if(s===n){i=!0,n=a,c=r;break}s=s.sibling}if(!i){for(s=r.child;s;){if(s===c){i=!0,c=r,n=a;break}if(s===n){i=!0,n=r,c=a;break}s=s.sibling}if(!i)throw Error(S(189))}}if(c.alternate!==n)throw Error(S(190))}if(c.tag!==3)throw Error(S(188));return c.stateNode.current===c?t:e}function bg(t){return t=NI(t),t!==null?Sg(t):null}function Sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sg(t);if(e!==null)return e;t=t.sibling}return null}var Ng=n3.unstable_scheduleCallback,kh=n3.unstable_cancelCallback,kI=n3.unstable_shouldYield,AI=n3.unstable_requestPaint,R1=n3.unstable_now,TI=n3.unstable_getCurrentPriorityLevel,ho=n3.unstable_ImmediatePriority,kg=n3.unstable_UserBlockingPriority,hc=n3.unstable_NormalPriority,EI=n3.unstable_LowPriority,Ag=n3.unstable_IdlePriority,y9=null,Q3=null;function _I(t){if(Q3&&typeof Q3.onCommitFiberRoot=="function")try{Q3.onCommitFiberRoot(y9,t,void 0,(t.current.flags&128)===128)}catch{}}var E3=Math.clz32?Math.clz32:DI,II=Math.log,PI=Math.LN2;function DI(t){return t>>>=0,t===0?32:31-(II(t)/PI|0)|0}var ct=64,nt=4194304;function D5(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var c=t.pendingLanes;if(c===0)return 0;var n=0,a=t.suspendedLanes,r=t.pingedLanes,i=c&268435455;if(i!==0){var s=i&~a;s!==0?n=D5(s):(r&=i,r!==0&&(n=D5(r)))}else i=c&~a,i!==0?n=D5(i):r!==0&&(n=D5(r));if(n===0)return 0;if(e!==0&&e!==n&&!(e&a)&&(a=n&-n,r=e&-e,a>=r||a===16&&(r&4194240)!==0))return e;if(n&4&&(n|=c&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)c=31-E3(e),a=1<<c,n|=t[c],e&=~a;return n}function RI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OI(t,e){for(var c=t.suspendedLanes,n=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes;0<r;){var i=31-E3(r),s=1<<i,o=a[i];o===-1?(!(s&c)||s&n)&&(a[i]=RI(s,e)):o<=e&&(t.expiredLanes|=s),r&=~s}}function ri(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tg(){var t=ct;return ct<<=1,!(ct&4194240)&&(ct=64),t}function La(t){for(var e=[],c=0;31>c;c++)e.push(t);return e}function s7(t,e,c){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-E3(e),t[e]=c}function FI(t,e){var c=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<c;){var a=31-E3(c),r=1<<a;e[a]=0,n[a]=-1,t[a]=-1,c&=~r}}function mo(t,e){var c=t.entangledLanes|=e;for(t=t.entanglements;c;){var n=31-E3(c),a=1<<n;a&e|t[n]&e&&(t[n]|=e),c&=~a}}var d1=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _g,po,Ig,Pg,Dg,ii=!1,at=[],a6=null,r6=null,i6=null,ve=new Map,ge=new Map,W4=[],$I="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(t,e){switch(t){case"focusin":case"focusout":a6=null;break;case"dragenter":case"dragleave":r6=null;break;case"mouseover":case"mouseout":i6=null;break;case"pointerover":case"pointerout":ve.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ge.delete(e.pointerId)}}function L5(t,e,c,n,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:c,eventSystemFlags:n,nativeEvent:r,targetContainers:[a]},e!==null&&(e=l7(e),e!==null&&po(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function BI(t,e,c,n,a){switch(e){case"focusin":return a6=L5(a6,t,e,c,n,a),!0;case"dragenter":return r6=L5(r6,t,e,c,n,a),!0;case"mouseover":return i6=L5(i6,t,e,c,n,a),!0;case"pointerover":var r=a.pointerId;return ve.set(r,L5(ve.get(r)||null,t,e,c,n,a)),!0;case"gotpointercapture":return r=a.pointerId,ge.set(r,L5(ge.get(r)||null,t,e,c,n,a)),!0}return!1}function Rg(t){var e=Y6(t.target);if(e!==null){var c=T0(e);if(c!==null){if(e=c.tag,e===13){if(e=xg(c),e!==null){t.blockedOn=e,Dg(t.priority,function(){Ig(c)});return}}else if(e===3&&c.stateNode.current.memoizedState.isDehydrated){t.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $t(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var c=si(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(c===null){c=t.nativeEvent;var n=new c.constructor(c.type,c);ti=n,c.target.dispatchEvent(n),ti=null}else return e=l7(c),e!==null&&po(e),t.blockedOn=c,!1;e.shift()}return!0}function Th(t,e,c){$t(t)&&c.delete(e)}function UI(){ii=!1,a6!==null&&$t(a6)&&(a6=null),r6!==null&&$t(r6)&&(r6=null),i6!==null&&$t(i6)&&(i6=null),ve.forEach(Th),ge.forEach(Th)}function w5(t,e){t.blockedOn===e&&(t.blockedOn=null,ii||(ii=!0,n3.unstable_scheduleCallback(n3.unstable_NormalPriority,UI)))}function ze(t){function e(a){return w5(a,t)}if(0<at.length){w5(at[0],t);for(var c=1;c<at.length;c++){var n=at[c];n.blockedOn===t&&(n.blockedOn=null)}}for(a6!==null&&w5(a6,t),r6!==null&&w5(r6,t),i6!==null&&w5(i6,t),ve.forEach(e),ge.forEach(e),c=0;c<W4.length;c++)n=W4[c],n.blockedOn===t&&(n.blockedOn=null);for(;0<W4.length&&(c=W4[0],c.blockedOn===null);)Rg(c),c.blockedOn===null&&W4.shift()}var V8=P4.ReactCurrentBatchConfig,mc=!0;function jI(t,e,c,n){var a=d1,r=V8.transition;V8.transition=null;try{d1=1,vo(t,e,c,n)}finally{d1=a,V8.transition=r}}function qI(t,e,c,n){var a=d1,r=V8.transition;V8.transition=null;try{d1=4,vo(t,e,c,n)}finally{d1=a,V8.transition=r}}function vo(t,e,c,n){if(mc){var a=si(t,e,c,n);if(a===null)_a(t,e,n,pc,c),Ah(t,n);else if(BI(a,t,e,c,n))n.stopPropagation();else if(Ah(t,n),e&4&&-1<$I.indexOf(t)){for(;a!==null;){var r=l7(a);if(r!==null&&_g(r),r=si(t,e,c,n),r===null&&_a(t,e,n,pc,c),r===a)break;a=r}a!==null&&n.stopPropagation()}else _a(t,e,n,null,c)}}var pc=null;function si(t,e,c,n){if(pc=null,t=uo(n),t=Y6(t),t!==null)if(e=T0(t),e===null)t=null;else if(c=e.tag,c===13){if(t=xg(e),t!==null)return t;t=null}else if(c===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function Og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TI()){case ho:return 1;case kg:return 4;case hc:case EI:return 16;case Ag:return 536870912;default:return 16}default:return 16}}var X4=null,go=null,Bt=null;function Fg(){if(Bt)return Bt;var t,e=go,c=e.length,n,a="value"in X4?X4.value:X4.textContent,r=a.length;for(t=0;t<c&&e[t]===a[t];t++);var i=c-t;for(n=1;n<=i&&e[c-n]===a[r-n];n++);return Bt=a.slice(t,1<n?1-n:void 0)}function Ut(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rt(){return!0}function Eh(){return!1}function s3(t){function e(c,n,a,r,i){this._reactName=c,this._targetInst=a,this.type=n,this.nativeEvent=r,this.target=i,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(c=t[s],this[s]=c?c(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?rt:Eh,this.isPropagationStopped=Eh,this}return A1(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=rt)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=rt)},persist:function(){},isPersistent:rt}),e}var t5={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zo=s3(t5),o7=A1({},t5,{view:0,detail:0}),WI=s3(o7),wa,xa,x5,L9=A1({},o7,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Co,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==x5&&(x5&&t.type==="mousemove"?(wa=t.screenX-x5.screenX,xa=t.screenY-x5.screenY):xa=wa=0,x5=t),wa)},movementY:function(t){return"movementY"in t?t.movementY:xa}}),_h=s3(L9),GI=A1({},L9,{dataTransfer:0}),KI=s3(GI),YI=A1({},o7,{relatedTarget:0}),ba=s3(YI),ZI=A1({},t5,{animationName:0,elapsedTime:0,pseudoElement:0}),QI=s3(ZI),XI=A1({},t5,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JI=s3(XI),eP=A1({},t5,{data:0}),Ih=s3(eP),tP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nP[t])?!!e[t]:!1}function Co(){return aP}var rP=A1({},o7,{key:function(t){if(t.key){var e=tP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ut(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Co,charCode:function(t){return t.type==="keypress"?Ut(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ut(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iP=s3(rP),sP=A1({},L9,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=s3(sP),oP=A1({},o7,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Co}),lP=s3(oP),fP=A1({},t5,{propertyName:0,elapsedTime:0,pseudoElement:0}),uP=s3(fP),hP=A1({},L9,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dP=s3(hP),mP=[9,13,27,32],Ho=L4&&"CompositionEvent"in window,K5=null;L4&&"documentMode"in document&&(K5=document.documentMode);var pP=L4&&"TextEvent"in window&&!K5,$g=L4&&(!Ho||K5&&8<K5&&11>=K5),Dh=String.fromCharCode(32),Rh=!1;function Bg(t,e){switch(t){case"keyup":return mP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var c8=!1;function vP(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(Rh=!0,Dh);case"textInput":return t=e.data,t===Dh&&Rh?null:t;default:return null}}function gP(t,e){if(c8)return t==="compositionend"||!Ho&&Bg(t,e)?(t=Fg(),Bt=go=X4=null,c8=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var zP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zP[t.type]:e==="textarea"}function jg(t,e,c,n){Mg(n),e=vc(e,"onChange"),0<e.length&&(c=new zo("onChange","change",null,c,n),t.push({event:c,listeners:e}))}var Y5=null,Ce=null;function CP(t){tz(t,0)}function w9(t){var e=r8(t);if(mg(e))return t}function HP(t,e){if(t==="change")return e}var qg=!1;if(L4){var Sa;if(L4){var Na="oninput"in document;if(!Na){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),Na=typeof Fh.oninput=="function"}Sa=Na}else Sa=!1;qg=Sa&&(!document.documentMode||9<document.documentMode)}function $h(){Y5&&(Y5.detachEvent("onpropertychange",Wg),Ce=Y5=null)}function Wg(t){if(t.propertyName==="value"&&w9(Ce)){var e=[];jg(e,Ce,t,uo(t)),wg(CP,e)}}function MP(t,e,c){t==="focusin"?($h(),Y5=e,Ce=c,Y5.attachEvent("onpropertychange",Wg)):t==="focusout"&&$h()}function VP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return w9(Ce)}function yP(t,e){if(t==="click")return w9(e)}function LP(t,e){if(t==="input"||t==="change")return w9(e)}function wP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var P3=typeof Object.is=="function"?Object.is:wP;function He(t,e){if(P3(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var c=Object.keys(t),n=Object.keys(e);if(c.length!==n.length)return!1;for(n=0;n<c.length;n++){var a=c[n];if(!Ur.call(e,a)||!P3(t[a],e[a]))return!1}return!0}function Bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var c=Bh(t);t=0;for(var n;c;){if(c.nodeType===3){if(n=t+c.textContent.length,t<=e&&n>=e)return{node:c,offset:e-t};t=n}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=Bh(c)}}function Gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kg(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var c=typeof e.contentWindow.location.href=="string"}catch{c=!1}if(c)t=e.contentWindow;else break;e=lc(t.document)}return e}function Mo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xP(t){var e=Kg(),c=t.focusedElem,n=t.selectionRange;if(e!==c&&c&&c.ownerDocument&&Gg(c.ownerDocument.documentElement,c)){if(n!==null&&Mo(c)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in c)c.selectionStart=e,c.selectionEnd=Math.min(t,c.value.length);else if(t=(e=c.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var a=c.textContent.length,r=Math.min(n.start,a);n=n.end===void 0?r:Math.min(n.end,a),!t.extend&&r>n&&(a=n,n=r,r=a),a=Uh(c,r);var i=Uh(c,n);a&&i&&(t.rangeCount!==1||t.anchorNode!==a.node||t.anchorOffset!==a.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),t.removeAllRanges(),r>n?(t.addRange(e),t.extend(i.node,i.offset)):(e.setEnd(i.node,i.offset),t.addRange(e)))}}for(e=[],t=c;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<e.length;c++)t=e[c],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bP=L4&&"documentMode"in document&&11>=document.documentMode,n8=null,oi=null,Z5=null,li=!1;function jh(t,e,c){var n=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;li||n8==null||n8!==lc(n)||(n=n8,"selectionStart"in n&&Mo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Z5&&He(Z5,n)||(Z5=n,n=vc(oi,"onSelect"),0<n.length&&(e=new zo("onSelect","select",null,e,c),t.push({event:e,listeners:n}),e.target=n8)))}function it(t,e){var c={};return c[t.toLowerCase()]=e.toLowerCase(),c["Webkit"+t]="webkit"+e,c["Moz"+t]="moz"+e,c}var a8={animationend:it("Animation","AnimationEnd"),animationiteration:it("Animation","AnimationIteration"),animationstart:it("Animation","AnimationStart"),transitionend:it("Transition","TransitionEnd")},ka={},Yg={};L4&&(Yg=document.createElement("div").style,"AnimationEvent"in window||(delete a8.animationend.animation,delete a8.animationiteration.animation,delete a8.animationstart.animation),"TransitionEvent"in window||delete a8.transitionend.transition);function x9(t){if(ka[t])return ka[t];if(!a8[t])return t;var e=a8[t],c;for(c in e)if(e.hasOwnProperty(c)&&c in Yg)return ka[t]=e[c];return t}var Zg=x9("animationend"),Qg=x9("animationiteration"),Xg=x9("animationstart"),Jg=x9("transitionend"),ez=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function N6(t,e){ez.set(t,e),A0(e,[t])}for(var Aa=0;Aa<qh.length;Aa++){var Ta=qh[Aa],SP=Ta.toLowerCase(),NP=Ta[0].toUpperCase()+Ta.slice(1);N6(SP,"on"+NP)}N6(Zg,"onAnimationEnd");N6(Qg,"onAnimationIteration");N6(Xg,"onAnimationStart");N6("dblclick","onDoubleClick");N6("focusin","onFocus");N6("focusout","onBlur");N6(Jg,"onTransitionEnd");I8("onMouseEnter",["mouseout","mouseover"]);I8("onMouseLeave",["mouseout","mouseover"]);I8("onPointerEnter",["pointerout","pointerover"]);I8("onPointerLeave",["pointerout","pointerover"]);A0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));A0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));A0("onBeforeInput",["compositionend","keypress","textInput","paste"]);A0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));A0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));A0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var R5="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kP=new Set("cancel close invalid load scroll toggle".split(" ").concat(R5));function Wh(t,e,c){var n=t.type||"unknown-event";t.currentTarget=c,SI(n,e,void 0,t),t.currentTarget=null}function tz(t,e){e=(e&4)!==0;for(var c=0;c<t.length;c++){var n=t[c],a=n.event;n=n.listeners;e:{var r=void 0;if(e)for(var i=n.length-1;0<=i;i--){var s=n[i],o=s.instance,l=s.currentTarget;if(s=s.listener,o!==r&&a.isPropagationStopped())break e;Wh(a,s,l),r=o}else for(i=0;i<n.length;i++){if(s=n[i],o=s.instance,l=s.currentTarget,s=s.listener,o!==r&&a.isPropagationStopped())break e;Wh(a,s,l),r=o}}}if(uc)throw t=ai,uc=!1,ai=null,t}function z1(t,e){var c=e[mi];c===void 0&&(c=e[mi]=new Set);var n=t+"__bubble";c.has(n)||(cz(e,t,2,!1),c.add(n))}function Ea(t,e,c){var n=0;e&&(n|=4),cz(c,t,n,e)}var st="_reactListening"+Math.random().toString(36).slice(2);function Me(t){if(!t[st]){t[st]=!0,lg.forEach(function(c){c!=="selectionchange"&&(kP.has(c)||Ea(c,!1,t),Ea(c,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[st]||(e[st]=!0,Ea("selectionchange",!1,e))}}function cz(t,e,c,n){switch(Og(e)){case 1:var a=jI;break;case 4:a=qI;break;default:a=vo}c=a.bind(null,e,c,t),a=void 0,!ni||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),n?a!==void 0?t.addEventListener(e,c,{capture:!0,passive:a}):t.addEventListener(e,c,!0):a!==void 0?t.addEventListener(e,c,{passive:a}):t.addEventListener(e,c,!1)}function _a(t,e,c,n,a){var r=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var o=i.tag;if((o===3||o===4)&&(o=i.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;i=i.return}for(;s!==null;){if(i=Y6(s),i===null)return;if(o=i.tag,o===5||o===6){n=r=i;continue e}s=s.parentNode}}n=n.return}wg(function(){var l=r,f=uo(c),u=[];e:{var h=ez.get(t);if(h!==void 0){var p=zo,z=t;switch(t){case"keypress":if(Ut(c)===0)break e;case"keydown":case"keyup":p=iP;break;case"focusin":z="focus",p=ba;break;case"focusout":z="blur",p=ba;break;case"beforeblur":case"afterblur":p=ba;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=KI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=lP;break;case Zg:case Qg:case Xg:p=QI;break;case Jg:p=uP;break;case"scroll":p=WI;break;case"wheel":p=dP;break;case"copy":case"cut":case"paste":p=JI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ph}var C=(e&4)!==0,H=!C&&t==="scroll",v=C?h!==null?h+"Capture":null:h;C=[];for(var m=l,g;m!==null;){g=m;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,v!==null&&(M=pe(m,v),M!=null&&C.push(Ve(m,M,g)))),H)break;m=m.return}0<C.length&&(h=new p(h,z,null,c,f),u.push({event:h,listeners:C}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&c!==ti&&(z=c.relatedTarget||c.fromElement)&&(Y6(z)||z[w4]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(z=c.relatedTarget||c.toElement,p=l,z=z?Y6(z):null,z!==null&&(H=T0(z),z!==H||z.tag!==5&&z.tag!==6)&&(z=null)):(p=null,z=l),p!==z)){if(C=_h,M="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=Ph,M="onPointerLeave",v="onPointerEnter",m="pointer"),H=p==null?h:r8(p),g=z==null?h:r8(z),h=new C(M,m+"leave",p,c,f),h.target=H,h.relatedTarget=g,M=null,Y6(f)===l&&(C=new C(v,m+"enter",z,c,f),C.target=g,C.relatedTarget=H,M=C),H=M,p&&z)t:{for(C=p,v=z,m=0,g=C;g;g=G0(g))m++;for(g=0,M=v;M;M=G0(M))g++;for(;0<m-g;)C=G0(C),m--;for(;0<g-m;)v=G0(v),g--;for(;m--;){if(C===v||v!==null&&C===v.alternate)break t;C=G0(C),v=G0(v)}C=null}else C=null;p!==null&&Gh(u,h,p,C,!1),z!==null&&H!==null&&Gh(u,H,z,C,!0)}}e:{if(h=l?r8(l):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var V=HP;else if(Oh(h))if(qg)V=LP;else{V=VP;var b=MP}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(V=yP);if(V&&(V=V(t,l))){jg(u,V,c,f);break e}b&&b(t,h,l),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Zr(h,"number",h.value)}switch(b=l?r8(l):window,t){case"focusin":(Oh(b)||b.contentEditable==="true")&&(n8=b,oi=l,Z5=null);break;case"focusout":Z5=oi=n8=null;break;case"mousedown":li=!0;break;case"contextmenu":case"mouseup":case"dragend":li=!1,jh(u,c,f);break;case"selectionchange":if(bP)break;case"keydown":case"keyup":jh(u,c,f)}var k;if(Ho)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else c8?Bg(t,c)&&(T="onCompositionEnd"):t==="keydown"&&c.keyCode===229&&(T="onCompositionStart");T&&($g&&c.locale!=="ko"&&(c8||T!=="onCompositionStart"?T==="onCompositionEnd"&&c8&&(k=Fg()):(X4=f,go="value"in X4?X4.value:X4.textContent,c8=!0)),b=vc(l,T),0<b.length&&(T=new Ih(T,t,null,c,f),u.push({event:T,listeners:b}),k?T.data=k:(k=Ug(c),k!==null&&(T.data=k)))),(k=pP?vP(t,c):gP(t,c))&&(l=vc(l,"onBeforeInput"),0<l.length&&(f=new Ih("onBeforeInput","beforeinput",null,c,f),u.push({event:f,listeners:l}),f.data=k))}tz(u,e)})}function Ve(t,e,c){return{instance:t,listener:e,currentTarget:c}}function vc(t,e){for(var c=e+"Capture",n=[];t!==null;){var a=t,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=pe(t,c),r!=null&&n.unshift(Ve(t,r,a)),r=pe(t,e),r!=null&&n.push(Ve(t,r,a))),t=t.return}return n}function G0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,c,n,a){for(var r=e._reactName,i=[];c!==null&&c!==n;){var s=c,o=s.alternate,l=s.stateNode;if(o!==null&&o===n)break;s.tag===5&&l!==null&&(s=l,a?(o=pe(c,r),o!=null&&i.unshift(Ve(c,o,s))):a||(o=pe(c,r),o!=null&&i.push(Ve(c,o,s)))),c=c.return}i.length!==0&&t.push({event:e,listeners:i})}var AP=/\r\n?/g,TP=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(AP,`
`).replace(TP,"")}function ot(t,e,c){if(e=Kh(e),Kh(t)!==e&&c)throw Error(S(425))}function gc(){}var fi=null,ui=null;function hi(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var di=typeof setTimeout=="function"?setTimeout:void 0,EP=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,_P=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(t){return Yh.resolve(null).then(t).catch(IP)}:di;function IP(t){setTimeout(function(){throw t})}function Ia(t,e){var c=e,n=0;do{var a=c.nextSibling;if(t.removeChild(c),a&&a.nodeType===8)if(c=a.data,c==="/$"){if(n===0){t.removeChild(a),ze(e);return}n--}else c!=="$"&&c!=="$?"&&c!=="$!"||n++;c=a}while(c);ze(e)}function s6(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var c=t.data;if(c==="$"||c==="$!"||c==="$?"){if(e===0)return t;e--}else c==="/$"&&e++}t=t.previousSibling}return null}var c5=Math.random().toString(36).slice(2),G3="__reactFiber$"+c5,ye="__reactProps$"+c5,w4="__reactContainer$"+c5,mi="__reactEvents$"+c5,PP="__reactListeners$"+c5,DP="__reactHandles$"+c5;function Y6(t){var e=t[G3];if(e)return e;for(var c=t.parentNode;c;){if(e=c[w4]||c[G3]){if(c=e.alternate,e.child!==null||c!==null&&c.child!==null)for(t=Zh(t);t!==null;){if(c=t[G3])return c;t=Zh(t)}return e}t=c,c=t.parentNode}return null}function l7(t){return t=t[G3]||t[w4],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function r8(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function b9(t){return t[ye]||null}var pi=[],i8=-1;function k6(t){return{current:t}}function y1(t){0>i8||(t.current=pi[i8],pi[i8]=null,i8--)}function g1(t,e){i8++,pi[i8]=t.current,t.current=e}var C6={},x2=k6(C6),U2=k6(!1),h0=C6;function P8(t,e){var c=t.type.contextTypes;if(!c)return C6;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in c)a[r]=e[r];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=a),a}function j2(t){return t=t.childContextTypes,t!=null}function zc(){y1(U2),y1(x2)}function Qh(t,e,c){if(x2.current!==C6)throw Error(S(168));g1(x2,e),g1(U2,c)}function nz(t,e,c){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return c;n=n.getChildContext();for(var a in n)if(!(a in e))throw Error(S(108,MI(t)||"Unknown",a));return A1({},c,n)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||C6,h0=x2.current,g1(x2,t),g1(U2,U2.current),!0}function Xh(t,e,c){var n=t.stateNode;if(!n)throw Error(S(169));c?(t=nz(t,e,h0),n.__reactInternalMemoizedMergedChildContext=t,y1(U2),y1(x2),g1(x2,t)):y1(U2),g1(U2,c)}var m4=null,S9=!1,Pa=!1;function az(t){m4===null?m4=[t]:m4.push(t)}function RP(t){S9=!0,az(t)}function A6(){if(!Pa&&m4!==null){Pa=!0;var t=0,e=d1;try{var c=m4;for(d1=1;t<c.length;t++){var n=c[t];do n=n(!0);while(n!==null)}m4=null,S9=!1}catch(a){throw m4!==null&&(m4=m4.slice(t+1)),Ng(ho,A6),a}finally{d1=e,Pa=!1}}return null}var s8=[],o8=0,Hc=null,Mc=0,d3=[],m3=0,d0=null,p4=1,v4="";function U6(t,e){s8[o8++]=Mc,s8[o8++]=Hc,Hc=t,Mc=e}function rz(t,e,c){d3[m3++]=p4,d3[m3++]=v4,d3[m3++]=d0,d0=t;var n=p4;t=v4;var a=32-E3(n)-1;n&=~(1<<a),c+=1;var r=32-E3(e)+a;if(30<r){var i=a-a%5;r=(n&(1<<i)-1).toString(32),n>>=i,a-=i,p4=1<<32-E3(e)+a|c<<a|n,v4=r+t}else p4=1<<r|c<<a|n,v4=t}function Vo(t){t.return!==null&&(U6(t,1),rz(t,1,0))}function yo(t){for(;t===Hc;)Hc=s8[--o8],s8[o8]=null,Mc=s8[--o8],s8[o8]=null;for(;t===d0;)d0=d3[--m3],d3[m3]=null,v4=d3[--m3],d3[m3]=null,p4=d3[--m3],d3[m3]=null}var e3=null,Z2=null,b1=!1,k3=null;function iz(t,e){var c=v3(5,null,null,0);c.elementType="DELETED",c.stateNode=e,c.return=t,e=t.deletions,e===null?(t.deletions=[c],t.flags|=16):e.push(c)}function Jh(t,e){switch(t.tag){case 5:var c=t.type;return e=e.nodeType!==1||c.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,e3=t,Z2=s6(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,e3=t,Z2=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(c=d0!==null?{id:p4,overflow:v4}:null,t.memoizedState={dehydrated:e,treeContext:c,retryLane:1073741824},c=v3(18,null,null,0),c.stateNode=e,c.return=t,t.child=c,e3=t,Z2=null,!0):!1;default:return!1}}function vi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gi(t){if(b1){var e=Z2;if(e){var c=e;if(!Jh(t,e)){if(vi(t))throw Error(S(418));e=s6(c.nextSibling);var n=e3;e&&Jh(t,e)?iz(n,c):(t.flags=t.flags&-4097|2,b1=!1,e3=t)}}else{if(vi(t))throw Error(S(418));t.flags=t.flags&-4097|2,b1=!1,e3=t}}}function ed(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;e3=t}function lt(t){if(t!==e3)return!1;if(!b1)return ed(t),b1=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hi(t.type,t.memoizedProps)),e&&(e=Z2)){if(vi(t))throw sz(),Error(S(418));for(;e;)iz(t,e),e=s6(e.nextSibling)}if(ed(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var c=t.data;if(c==="/$"){if(e===0){Z2=s6(t.nextSibling);break e}e--}else c!=="$"&&c!=="$!"&&c!=="$?"||e++}t=t.nextSibling}Z2=null}}else Z2=e3?s6(t.stateNode.nextSibling):null;return!0}function sz(){for(var t=Z2;t;)t=s6(t.nextSibling)}function D8(){Z2=e3=null,b1=!1}function Lo(t){k3===null?k3=[t]:k3.push(t)}var OP=P4.ReactCurrentBatchConfig;function S3(t,e){if(t&&t.defaultProps){e=A1({},e),t=t.defaultProps;for(var c in t)e[c]===void 0&&(e[c]=t[c]);return e}return e}var Vc=k6(null),yc=null,l8=null,wo=null;function xo(){wo=l8=yc=null}function bo(t){var e=Vc.current;y1(Vc),t._currentValue=e}function zi(t,e,c){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===c)break;t=t.return}}function y8(t,e){yc=t,wo=l8=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(B2=!0),t.firstContext=null)}function C3(t){var e=t._currentValue;if(wo!==t)if(t={context:t,memoizedValue:e,next:null},l8===null){if(yc===null)throw Error(S(308));l8=t,yc.dependencies={lanes:0,firstContext:t}}else l8=l8.next=t;return e}var Z6=null;function So(t){Z6===null?Z6=[t]:Z6.push(t)}function oz(t,e,c,n){var a=e.interleaved;return a===null?(c.next=c,So(e)):(c.next=a.next,a.next=c),e.interleaved=c,x4(t,n)}function x4(t,e){t.lanes|=e;var c=t.alternate;for(c!==null&&(c.lanes|=e),c=t,t=t.return;t!==null;)t.childLanes|=e,c=t.alternate,c!==null&&(c.childLanes|=e),c=t,t=t.return;return c.tag===3?c.stateNode:null}var q4=!1;function No(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lz(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function M4(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function o6(t,e,c){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,s1&2){var a=n.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e,x4(t,c)}return a=n.interleaved,a===null?(e.next=e,So(n)):(e.next=a.next,a.next=e),n.interleaved=e,x4(t,c)}function jt(t,e,c){if(e=e.updateQueue,e!==null&&(e=e.shared,(c&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,c|=n,e.lanes=c,mo(t,c)}}function td(t,e){var c=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,c===n)){var a=null,r=null;if(c=c.firstBaseUpdate,c!==null){do{var i={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};r===null?a=r=i:r=r.next=i,c=c.next}while(c!==null);r===null?a=r=e:r=r.next=e}else a=r=e;c={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:n.shared,effects:n.effects},t.updateQueue=c;return}t=c.lastBaseUpdate,t===null?c.firstBaseUpdate=e:t.next=e,c.lastBaseUpdate=e}function Lc(t,e,c,n){var a=t.updateQueue;q4=!1;var r=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,l=o.next;o.next=null,i===null?r=l:i.next=l,i=o;var f=t.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==i&&(s===null?f.firstBaseUpdate=l:s.next=l,f.lastBaseUpdate=o))}if(r!==null){var u=a.baseState;i=0,f=l=o=null,s=r;do{var h=s.lane,p=s.eventTime;if((n&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var z=t,C=s;switch(h=e,p=c,C.tag){case 1:if(z=C.payload,typeof z=="function"){u=z.call(p,u,h);break e}u=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=C.payload,h=typeof z=="function"?z.call(p,u,h):z,h==null)break e;u=A1({},u,h);break e;case 2:q4=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(l=f=p,o=u):f=f.next=p,i|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(o=u),a.baseState=o,a.firstBaseUpdate=l,a.lastBaseUpdate=f,e=a.shared.interleaved,e!==null){a=e;do i|=a.lane,a=a.next;while(a!==e)}else r===null&&(a.shared.lanes=0);p0|=i,t.lanes=i,t.memoizedState=u}}function cd(t,e,c){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],a=n.callback;if(a!==null){if(n.callback=null,n=c,typeof a!="function")throw Error(S(191,a));a.call(n)}}}var fz=new og.Component().refs;function Ci(t,e,c,n){e=t.memoizedState,c=c(n,e),c=c==null?e:A1({},e,c),t.memoizedState=c,t.lanes===0&&(t.updateQueue.baseState=c)}var N9={isMounted:function(t){return(t=t._reactInternals)?T0(t)===t:!1},enqueueSetState:function(t,e,c){t=t._reactInternals;var n=I2(),a=f6(t),r=M4(n,a);r.payload=e,c!=null&&(r.callback=c),e=o6(t,r,a),e!==null&&(_3(e,t,a,n),jt(e,t,a))},enqueueReplaceState:function(t,e,c){t=t._reactInternals;var n=I2(),a=f6(t),r=M4(n,a);r.tag=1,r.payload=e,c!=null&&(r.callback=c),e=o6(t,r,a),e!==null&&(_3(e,t,a,n),jt(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var c=I2(),n=f6(t),a=M4(c,n);a.tag=2,e!=null&&(a.callback=e),e=o6(t,a,n),e!==null&&(_3(e,t,n,c),jt(e,t,n))}};function nd(t,e,c,n,a,r,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,r,i):e.prototype&&e.prototype.isPureReactComponent?!He(c,n)||!He(a,r):!0}function uz(t,e,c){var n=!1,a=C6,r=e.contextType;return typeof r=="object"&&r!==null?r=C3(r):(a=j2(e)?h0:x2.current,n=e.contextTypes,r=(n=n!=null)?P8(t,a):C6),e=new e(c,r),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=N9,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=r),e}function ad(t,e,c,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(c,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(c,n),e.state!==t&&N9.enqueueReplaceState(e,e.state,null)}function Hi(t,e,c,n){var a=t.stateNode;a.props=c,a.state=t.memoizedState,a.refs=fz,No(t);var r=e.contextType;typeof r=="object"&&r!==null?a.context=C3(r):(r=j2(e)?h0:x2.current,a.context=P8(t,r)),a.state=t.memoizedState,r=e.getDerivedStateFromProps,typeof r=="function"&&(Ci(t,e,r,c),a.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&N9.enqueueReplaceState(a,a.state,null),Lc(t,c,a,n),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308)}function b5(t,e,c){if(t=c.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(S(309));var n=c.stateNode}if(!n)throw Error(S(147,t));var a=n,r=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===r?e.ref:(e=function(i){var s=a.refs;s===fz&&(s=a.refs={}),i===null?delete s[r]:s[r]=i},e._stringRef=r,e)}if(typeof t!="string")throw Error(S(284));if(!c._owner)throw Error(S(290,t))}return t}function ft(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rd(t){var e=t._init;return e(t._payload)}function hz(t){function e(v,m){if(t){var g=v.deletions;g===null?(v.deletions=[m],v.flags|=16):g.push(m)}}function c(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function n(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=u6(v,m),v.index=0,v.sibling=null,v}function r(v,m,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<m?(v.flags|=2,m):g):(v.flags|=2,m)):(v.flags|=1048576,m)}function i(v){return t&&v.alternate===null&&(v.flags|=2),v}function s(v,m,g,M){return m===null||m.tag!==6?(m=Ua(g,v.mode,M),m.return=v,m):(m=a(m,g),m.return=v,m)}function o(v,m,g,M){var V=g.type;return V===t8?f(v,m,g.props.children,M,g.key):m!==null&&(m.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===j4&&rd(V)===m.type)?(M=a(m,g.props),M.ref=b5(v,m,g),M.return=v,M):(M=Zt(g.type,g.key,g.props,null,v.mode,M),M.ref=b5(v,m,g),M.return=v,M)}function l(v,m,g,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=ja(g,v.mode,M),m.return=v,m):(m=a(m,g.children||[]),m.return=v,m)}function f(v,m,g,M,V){return m===null||m.tag!==7?(m=i0(g,v.mode,M,V),m.return=v,m):(m=a(m,g),m.return=v,m)}function u(v,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ua(""+m,v.mode,g),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case J7:return g=Zt(m.type,m.key,m.props,null,v.mode,g),g.ref=b5(v,null,m),g.return=v,g;case e8:return m=ja(m,v.mode,g),m.return=v,m;case j4:var M=m._init;return u(v,M(m._payload),g)}if(P5(m)||V5(m))return m=i0(m,v.mode,g,null),m.return=v,m;ft(v,m)}return null}function h(v,m,g,M){var V=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return V!==null?null:s(v,m,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case J7:return g.key===V?o(v,m,g,M):null;case e8:return g.key===V?l(v,m,g,M):null;case j4:return V=g._init,h(v,m,V(g._payload),M)}if(P5(g)||V5(g))return V!==null?null:f(v,m,g,M,null);ft(v,g)}return null}function p(v,m,g,M,V){if(typeof M=="string"&&M!==""||typeof M=="number")return v=v.get(g)||null,s(m,v,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case J7:return v=v.get(M.key===null?g:M.key)||null,o(m,v,M,V);case e8:return v=v.get(M.key===null?g:M.key)||null,l(m,v,M,V);case j4:var b=M._init;return p(v,m,g,b(M._payload),V)}if(P5(M)||V5(M))return v=v.get(g)||null,f(m,v,M,V,null);ft(m,M)}return null}function z(v,m,g,M){for(var V=null,b=null,k=m,T=m=0,E=null;k!==null&&T<g.length;T++){k.index>T?(E=k,k=null):E=k.sibling;var A=h(v,k,g[T],M);if(A===null){k===null&&(k=E);break}t&&k&&A.alternate===null&&e(v,k),m=r(A,m,T),b===null?V=A:b.sibling=A,b=A,k=E}if(T===g.length)return c(v,k),b1&&U6(v,T),V;if(k===null){for(;T<g.length;T++)k=u(v,g[T],M),k!==null&&(m=r(k,m,T),b===null?V=k:b.sibling=k,b=k);return b1&&U6(v,T),V}for(k=n(v,k);T<g.length;T++)E=p(k,v,T,g[T],M),E!==null&&(t&&E.alternate!==null&&k.delete(E.key===null?T:E.key),m=r(E,m,T),b===null?V=E:b.sibling=E,b=E);return t&&k.forEach(function(Z){return e(v,Z)}),b1&&U6(v,T),V}function C(v,m,g,M){var V=V5(g);if(typeof V!="function")throw Error(S(150));if(g=V.call(g),g==null)throw Error(S(151));for(var b=V=null,k=m,T=m=0,E=null,A=g.next();k!==null&&!A.done;T++,A=g.next()){k.index>T?(E=k,k=null):E=k.sibling;var Z=h(v,k,A.value,M);if(Z===null){k===null&&(k=E);break}t&&k&&Z.alternate===null&&e(v,k),m=r(Z,m,T),b===null?V=Z:b.sibling=Z,b=Z,k=E}if(A.done)return c(v,k),b1&&U6(v,T),V;if(k===null){for(;!A.done;T++,A=g.next())A=u(v,A.value,M),A!==null&&(m=r(A,m,T),b===null?V=A:b.sibling=A,b=A);return b1&&U6(v,T),V}for(k=n(v,k);!A.done;T++,A=g.next())A=p(k,v,T,A.value,M),A!==null&&(t&&A.alternate!==null&&k.delete(A.key===null?T:A.key),m=r(A,m,T),b===null?V=A:b.sibling=A,b=A);return t&&k.forEach(function(E1){return e(v,E1)}),b1&&U6(v,T),V}function H(v,m,g,M){if(typeof g=="object"&&g!==null&&g.type===t8&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case J7:e:{for(var V=g.key,b=m;b!==null;){if(b.key===V){if(V=g.type,V===t8){if(b.tag===7){c(v,b.sibling),m=a(b,g.props.children),m.return=v,v=m;break e}}else if(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===j4&&rd(V)===b.type){c(v,b.sibling),m=a(b,g.props),m.ref=b5(v,b,g),m.return=v,v=m;break e}c(v,b);break}else e(v,b);b=b.sibling}g.type===t8?(m=i0(g.props.children,v.mode,M,g.key),m.return=v,v=m):(M=Zt(g.type,g.key,g.props,null,v.mode,M),M.ref=b5(v,m,g),M.return=v,v=M)}return i(v);case e8:e:{for(b=g.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){c(v,m.sibling),m=a(m,g.children||[]),m.return=v,v=m;break e}else{c(v,m);break}else e(v,m);m=m.sibling}m=ja(g,v.mode,M),m.return=v,v=m}return i(v);case j4:return b=g._init,H(v,m,b(g._payload),M)}if(P5(g))return z(v,m,g,M);if(V5(g))return C(v,m,g,M);ft(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(c(v,m.sibling),m=a(m,g),m.return=v,v=m):(c(v,m),m=Ua(g,v.mode,M),m.return=v,v=m),i(v)):c(v,m)}return H}var R8=hz(!0),dz=hz(!1),f7={},X3=k6(f7),Le=k6(f7),we=k6(f7);function Q6(t){if(t===f7)throw Error(S(174));return t}function ko(t,e){switch(g1(we,e),g1(Le,t),g1(X3,f7),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xr(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xr(e,t)}y1(X3),g1(X3,e)}function O8(){y1(X3),y1(Le),y1(we)}function mz(t){Q6(we.current);var e=Q6(X3.current),c=Xr(e,t.type);e!==c&&(g1(Le,t),g1(X3,c))}function Ao(t){Le.current===t&&(y1(X3),y1(Le))}var N1=k6(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var c=e.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Da=[];function To(){for(var t=0;t<Da.length;t++)Da[t]._workInProgressVersionPrimary=null;Da.length=0}var qt=P4.ReactCurrentDispatcher,Ra=P4.ReactCurrentBatchConfig,m0=0,k1=null,q1=null,e2=null,xc=!1,Q5=!1,xe=0,FP=0;function p2(){throw Error(S(321))}function Eo(t,e){if(e===null)return!1;for(var c=0;c<e.length&&c<t.length;c++)if(!P3(t[c],e[c]))return!1;return!0}function _o(t,e,c,n,a,r){if(m0=r,k1=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qt.current=t===null||t.memoizedState===null?jP:qP,t=c(n,a),Q5){r=0;do{if(Q5=!1,xe=0,25<=r)throw Error(S(301));r+=1,e2=q1=null,e.updateQueue=null,qt.current=WP,t=c(n,a)}while(Q5)}if(qt.current=bc,e=q1!==null&&q1.next!==null,m0=0,e2=q1=k1=null,xc=!1,e)throw Error(S(300));return t}function Io(){var t=xe!==0;return xe=0,t}function W3(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return e2===null?k1.memoizedState=e2=t:e2=e2.next=t,e2}function H3(){if(q1===null){var t=k1.alternate;t=t!==null?t.memoizedState:null}else t=q1.next;var e=e2===null?k1.memoizedState:e2.next;if(e!==null)e2=e,q1=t;else{if(t===null)throw Error(S(310));q1=t,t={memoizedState:q1.memoizedState,baseState:q1.baseState,baseQueue:q1.baseQueue,queue:q1.queue,next:null},e2===null?k1.memoizedState=e2=t:e2=e2.next=t}return e2}function be(t,e){return typeof e=="function"?e(t):e}function Oa(t){var e=H3(),c=e.queue;if(c===null)throw Error(S(311));c.lastRenderedReducer=t;var n=q1,a=n.baseQueue,r=c.pending;if(r!==null){if(a!==null){var i=a.next;a.next=r.next,r.next=i}n.baseQueue=a=r,c.pending=null}if(a!==null){r=a.next,n=n.baseState;var s=i=null,o=null,l=r;do{var f=l.lane;if((m0&f)===f)o!==null&&(o=o.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),n=l.hasEagerState?l.eagerState:t(n,l.action);else{var u={lane:f,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};o===null?(s=o=u,i=n):o=o.next=u,k1.lanes|=f,p0|=f}l=l.next}while(l!==null&&l!==r);o===null?i=n:o.next=s,P3(n,e.memoizedState)||(B2=!0),e.memoizedState=n,e.baseState=i,e.baseQueue=o,c.lastRenderedState=n}if(t=c.interleaved,t!==null){a=t;do r=a.lane,k1.lanes|=r,p0|=r,a=a.next;while(a!==t)}else a===null&&(c.lanes=0);return[e.memoizedState,c.dispatch]}function Fa(t){var e=H3(),c=e.queue;if(c===null)throw Error(S(311));c.lastRenderedReducer=t;var n=c.dispatch,a=c.pending,r=e.memoizedState;if(a!==null){c.pending=null;var i=a=a.next;do r=t(r,i.action),i=i.next;while(i!==a);P3(r,e.memoizedState)||(B2=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),c.lastRenderedState=r}return[r,n]}function pz(){}function vz(t,e){var c=k1,n=H3(),a=e(),r=!P3(n.memoizedState,a);if(r&&(n.memoizedState=a,B2=!0),n=n.queue,Po(Cz.bind(null,c,n,t),[t]),n.getSnapshot!==e||r||e2!==null&&e2.memoizedState.tag&1){if(c.flags|=2048,Se(9,zz.bind(null,c,n,a,e),void 0,null),t2===null)throw Error(S(349));m0&30||gz(c,e,a)}return a}function gz(t,e,c){t.flags|=16384,t={getSnapshot:e,value:c},e=k1.updateQueue,e===null?(e={lastEffect:null,stores:null},k1.updateQueue=e,e.stores=[t]):(c=e.stores,c===null?e.stores=[t]:c.push(t))}function zz(t,e,c,n){e.value=c,e.getSnapshot=n,Hz(e)&&Mz(t)}function Cz(t,e,c){return c(function(){Hz(e)&&Mz(t)})}function Hz(t){var e=t.getSnapshot;t=t.value;try{var c=e();return!P3(t,c)}catch{return!0}}function Mz(t){var e=x4(t,1);e!==null&&_3(e,t,1,-1)}function id(t){var e=W3();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:be,lastRenderedState:t},e.queue=t,t=t.dispatch=UP.bind(null,k1,t),[e.memoizedState,t]}function Se(t,e,c,n){return t={tag:t,create:e,destroy:c,deps:n,next:null},e=k1.updateQueue,e===null?(e={lastEffect:null,stores:null},k1.updateQueue=e,e.lastEffect=t.next=t):(c=e.lastEffect,c===null?e.lastEffect=t.next=t:(n=c.next,c.next=t,t.next=n,e.lastEffect=t)),t}function Vz(){return H3().memoizedState}function Wt(t,e,c,n){var a=W3();k1.flags|=t,a.memoizedState=Se(1|e,c,void 0,n===void 0?null:n)}function k9(t,e,c,n){var a=H3();n=n===void 0?null:n;var r=void 0;if(q1!==null){var i=q1.memoizedState;if(r=i.destroy,n!==null&&Eo(n,i.deps)){a.memoizedState=Se(e,c,r,n);return}}k1.flags|=t,a.memoizedState=Se(1|e,c,r,n)}function sd(t,e){return Wt(8390656,8,t,e)}function Po(t,e){return k9(2048,8,t,e)}function yz(t,e){return k9(4,2,t,e)}function Lz(t,e){return k9(4,4,t,e)}function wz(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xz(t,e,c){return c=c!=null?c.concat([t]):null,k9(4,4,wz.bind(null,e,t),c)}function Do(){}function bz(t,e){var c=H3();e=e===void 0?null:e;var n=c.memoizedState;return n!==null&&e!==null&&Eo(e,n[1])?n[0]:(c.memoizedState=[t,e],t)}function Sz(t,e){var c=H3();e=e===void 0?null:e;var n=c.memoizedState;return n!==null&&e!==null&&Eo(e,n[1])?n[0]:(t=t(),c.memoizedState=[t,e],t)}function Nz(t,e,c){return m0&21?(P3(c,e)||(c=Tg(),k1.lanes|=c,p0|=c,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,B2=!0),t.memoizedState=c)}function $P(t,e){var c=d1;d1=c!==0&&4>c?c:4,t(!0);var n=Ra.transition;Ra.transition={};try{t(!1),e()}finally{d1=c,Ra.transition=n}}function kz(){return H3().memoizedState}function BP(t,e,c){var n=f6(t);if(c={lane:n,action:c,hasEagerState:!1,eagerState:null,next:null},Az(t))Tz(e,c);else if(c=oz(t,e,c,n),c!==null){var a=I2();_3(c,t,n,a),Ez(c,e,n)}}function UP(t,e,c){var n=f6(t),a={lane:n,action:c,hasEagerState:!1,eagerState:null,next:null};if(Az(t))Tz(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var i=e.lastRenderedState,s=r(i,c);if(a.hasEagerState=!0,a.eagerState=s,P3(s,i)){var o=e.interleaved;o===null?(a.next=a,So(e)):(a.next=o.next,o.next=a),e.interleaved=a;return}}catch{}finally{}c=oz(t,e,a,n),c!==null&&(a=I2(),_3(c,t,n,a),Ez(c,e,n))}}function Az(t){var e=t.alternate;return t===k1||e!==null&&e===k1}function Tz(t,e){Q5=xc=!0;var c=t.pending;c===null?e.next=e:(e.next=c.next,c.next=e),t.pending=e}function Ez(t,e,c){if(c&4194240){var n=e.lanes;n&=t.pendingLanes,c|=n,e.lanes=c,mo(t,c)}}var bc={readContext:C3,useCallback:p2,useContext:p2,useEffect:p2,useImperativeHandle:p2,useInsertionEffect:p2,useLayoutEffect:p2,useMemo:p2,useReducer:p2,useRef:p2,useState:p2,useDebugValue:p2,useDeferredValue:p2,useTransition:p2,useMutableSource:p2,useSyncExternalStore:p2,useId:p2,unstable_isNewReconciler:!1},jP={readContext:C3,useCallback:function(t,e){return W3().memoizedState=[t,e===void 0?null:e],t},useContext:C3,useEffect:sd,useImperativeHandle:function(t,e,c){return c=c!=null?c.concat([t]):null,Wt(4194308,4,wz.bind(null,e,t),c)},useLayoutEffect:function(t,e){return Wt(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wt(4,2,t,e)},useMemo:function(t,e){var c=W3();return e=e===void 0?null:e,t=t(),c.memoizedState=[t,e],t},useReducer:function(t,e,c){var n=W3();return e=c!==void 0?c(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=BP.bind(null,k1,t),[n.memoizedState,t]},useRef:function(t){var e=W3();return t={current:t},e.memoizedState=t},useState:id,useDebugValue:Do,useDeferredValue:function(t){return W3().memoizedState=t},useTransition:function(){var t=id(!1),e=t[0];return t=$P.bind(null,t[1]),W3().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,c){var n=k1,a=W3();if(b1){if(c===void 0)throw Error(S(407));c=c()}else{if(c=e(),t2===null)throw Error(S(349));m0&30||gz(n,e,c)}a.memoizedState=c;var r={value:c,getSnapshot:e};return a.queue=r,sd(Cz.bind(null,n,r,t),[t]),n.flags|=2048,Se(9,zz.bind(null,n,r,c,e),void 0,null),c},useId:function(){var t=W3(),e=t2.identifierPrefix;if(b1){var c=v4,n=p4;c=(n&~(1<<32-E3(n)-1)).toString(32)+c,e=":"+e+"R"+c,c=xe++,0<c&&(e+="H"+c.toString(32)),e+=":"}else c=FP++,e=":"+e+"r"+c.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qP={readContext:C3,useCallback:bz,useContext:C3,useEffect:Po,useImperativeHandle:xz,useInsertionEffect:yz,useLayoutEffect:Lz,useMemo:Sz,useReducer:Oa,useRef:Vz,useState:function(){return Oa(be)},useDebugValue:Do,useDeferredValue:function(t){var e=H3();return Nz(e,q1.memoizedState,t)},useTransition:function(){var t=Oa(be)[0],e=H3().memoizedState;return[t,e]},useMutableSource:pz,useSyncExternalStore:vz,useId:kz,unstable_isNewReconciler:!1},WP={readContext:C3,useCallback:bz,useContext:C3,useEffect:Po,useImperativeHandle:xz,useInsertionEffect:yz,useLayoutEffect:Lz,useMemo:Sz,useReducer:Fa,useRef:Vz,useState:function(){return Fa(be)},useDebugValue:Do,useDeferredValue:function(t){var e=H3();return q1===null?e.memoizedState=t:Nz(e,q1.memoizedState,t)},useTransition:function(){var t=Fa(be)[0],e=H3().memoizedState;return[t,e]},useMutableSource:pz,useSyncExternalStore:vz,useId:kz,unstable_isNewReconciler:!1};function F8(t,e){try{var c="",n=e;do c+=HI(n),n=n.return;while(n);var a=c}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:t,source:e,stack:a,digest:null}}function $a(t,e,c){return{value:t,source:null,stack:c??null,digest:e??null}}function Mi(t,e){try{console.error(e.value)}catch(c){setTimeout(function(){throw c})}}var GP=typeof WeakMap=="function"?WeakMap:Map;function _z(t,e,c){c=M4(-1,c),c.tag=3,c.payload={element:null};var n=e.value;return c.callback=function(){Nc||(Nc=!0,Ai=n),Mi(t,e)},c}function Iz(t,e,c){c=M4(-1,c),c.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var a=e.value;c.payload=function(){return n(a)},c.callback=function(){Mi(t,e)}}var r=t.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(c.callback=function(){Mi(t,e),typeof n!="function"&&(l6===null?l6=new Set([this]):l6.add(this));var i=e.stack;this.componentDidCatch(e.value,{componentStack:i!==null?i:""})}),c}function od(t,e,c){var n=t.pingCache;if(n===null){n=t.pingCache=new GP;var a=new Set;n.set(e,a)}else a=n.get(e),a===void 0&&(a=new Set,n.set(e,a));a.has(c)||(a.add(c),t=sD.bind(null,t,e,c),e.then(t,t))}function ld(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fd(t,e,c,n,a){return t.mode&1?(t.flags|=65536,t.lanes=a,t):(t===e?t.flags|=65536:(t.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(e=M4(-1,1),e.tag=2,o6(c,e,1))),c.lanes|=1),t)}var KP=P4.ReactCurrentOwner,B2=!1;function T2(t,e,c,n){e.child=t===null?dz(e,null,c,n):R8(e,t.child,c,n)}function ud(t,e,c,n,a){c=c.render;var r=e.ref;return y8(e,a),n=_o(t,e,c,n,r,a),c=Io(),t!==null&&!B2?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,b4(t,e,a)):(b1&&c&&Vo(e),e.flags|=1,T2(t,e,n,a),e.child)}function hd(t,e,c,n,a){if(t===null){var r=c.type;return typeof r=="function"&&!qo(r)&&r.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(e.tag=15,e.type=r,Pz(t,e,r,n,a)):(t=Zt(c.type,null,n,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!(t.lanes&a)){var i=r.memoizedProps;if(c=c.compare,c=c!==null?c:He,c(i,n)&&t.ref===e.ref)return b4(t,e,a)}return e.flags|=1,t=u6(r,n),t.ref=e.ref,t.return=e,e.child=t}function Pz(t,e,c,n,a){if(t!==null){var r=t.memoizedProps;if(He(r,n)&&t.ref===e.ref)if(B2=!1,e.pendingProps=n=r,(t.lanes&a)!==0)t.flags&131072&&(B2=!0);else return e.lanes=t.lanes,b4(t,e,a)}return Vi(t,e,c,n,a)}function Dz(t,e,c){var n=e.pendingProps,a=n.children,r=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},g1(u8,K2),K2|=c;else{if(!(c&1073741824))return t=r!==null?r.baseLanes|c:c,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,g1(u8,K2),K2|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=r!==null?r.baseLanes:c,g1(u8,K2),K2|=n}else r!==null?(n=r.baseLanes|c,e.memoizedState=null):n=c,g1(u8,K2),K2|=n;return T2(t,e,a,c),e.child}function Rz(t,e){var c=e.ref;(t===null&&c!==null||t!==null&&t.ref!==c)&&(e.flags|=512,e.flags|=2097152)}function Vi(t,e,c,n,a){var r=j2(c)?h0:x2.current;return r=P8(e,r),y8(e,a),c=_o(t,e,c,n,r,a),n=Io(),t!==null&&!B2?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a,b4(t,e,a)):(b1&&n&&Vo(e),e.flags|=1,T2(t,e,c,a),e.child)}function dd(t,e,c,n,a){if(j2(c)){var r=!0;Cc(e)}else r=!1;if(y8(e,a),e.stateNode===null)Gt(t,e),uz(e,c,n),Hi(e,c,n,a),n=!0;else if(t===null){var i=e.stateNode,s=e.memoizedProps;i.props=s;var o=i.context,l=c.contextType;typeof l=="object"&&l!==null?l=C3(l):(l=j2(c)?h0:x2.current,l=P8(e,l));var f=c.getDerivedStateFromProps,u=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";u||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||o!==l)&&ad(e,i,n,l),q4=!1;var h=e.memoizedState;i.state=h,Lc(e,n,i,a),o=e.memoizedState,s!==n||h!==o||U2.current||q4?(typeof f=="function"&&(Ci(e,c,f,n),o=e.memoizedState),(s=q4||nd(e,c,s,n,h,o,l))?(u||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=o),i.props=n,i.state=o,i.context=l,n=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{i=e.stateNode,lz(t,e),s=e.memoizedProps,l=e.type===e.elementType?s:S3(e.type,s),i.props=l,u=e.pendingProps,h=i.context,o=c.contextType,typeof o=="object"&&o!==null?o=C3(o):(o=j2(c)?h0:x2.current,o=P8(e,o));var p=c.getDerivedStateFromProps;(f=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==u||h!==o)&&ad(e,i,n,o),q4=!1,h=e.memoizedState,i.state=h,Lc(e,n,i,a);var z=e.memoizedState;s!==u||h!==z||U2.current||q4?(typeof p=="function"&&(Ci(e,c,p,n),z=e.memoizedState),(l=q4||nd(e,c,l,n,h,z,o)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,z,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,z,o)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=z),i.props=n,i.state=z,i.context=o,n=l):(typeof i.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),n=!1)}return yi(t,e,c,n,r,a)}function yi(t,e,c,n,a,r){Rz(t,e);var i=(e.flags&128)!==0;if(!n&&!i)return a&&Xh(e,c,!1),b4(t,e,r);n=e.stateNode,KP.current=e;var s=i&&typeof c.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&i?(e.child=R8(e,t.child,null,r),e.child=R8(e,null,s,r)):T2(t,e,s,r),e.memoizedState=n.state,a&&Xh(e,c,!0),e.child}function Oz(t){var e=t.stateNode;e.pendingContext?Qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qh(t,e.context,!1),ko(t,e.containerInfo)}function md(t,e,c,n,a){return D8(),Lo(a),e.flags|=256,T2(t,e,c,n),e.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function wi(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fz(t,e,c){var n=e.pendingProps,a=N1.current,r=!1,i=(e.flags&128)!==0,s;if((s=i)||(s=t!==null&&t.memoizedState===null?!1:(a&2)!==0),s?(r=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(a|=1),g1(N1,a&1),t===null)return gi(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(i=n.children,t=n.fallback,r?(n=e.mode,r=e.child,i={mode:"hidden",children:i},!(n&1)&&r!==null?(r.childLanes=0,r.pendingProps=i):r=E9(i,n,0,null),t=i0(t,n,c,null),r.return=e,t.return=e,r.sibling=t,e.child=r,e.child.memoizedState=wi(c),e.memoizedState=Li,t):Ro(e,i));if(a=t.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return YP(t,e,i,n,s,a,c);if(r){r=n.fallback,i=e.mode,a=t.child,s=a.sibling;var o={mode:"hidden",children:n.children};return!(i&1)&&e.child!==a?(n=e.child,n.childLanes=0,n.pendingProps=o,e.deletions=null):(n=u6(a,o),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?r=u6(s,r):(r=i0(r,i,c,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,n=r,r=e.child,i=t.child.memoizedState,i=i===null?wi(c):{baseLanes:i.baseLanes|c,cachePool:null,transitions:i.transitions},r.memoizedState=i,r.childLanes=t.childLanes&~c,e.memoizedState=Li,n}return r=t.child,t=r.sibling,n=u6(r,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=c),n.return=e,n.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=n,e.memoizedState=null,n}function Ro(t,e){return e=E9({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ut(t,e,c,n){return n!==null&&Lo(n),R8(e,t.child,null,c),t=Ro(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YP(t,e,c,n,a,r,i){if(c)return e.flags&256?(e.flags&=-257,n=$a(Error(S(422))),ut(t,e,i,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(r=n.fallback,a=e.mode,n=E9({mode:"visible",children:n.children},a,0,null),r=i0(r,a,i,null),r.flags|=2,n.return=e,r.return=e,n.sibling=r,e.child=n,e.mode&1&&R8(e,t.child,null,i),e.child.memoizedState=wi(i),e.memoizedState=Li,r);if(!(e.mode&1))return ut(t,e,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,r=Error(S(419)),n=$a(r,n,void 0),ut(t,e,i,n)}if(s=(i&t.childLanes)!==0,B2||s){if(n=t2,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,x4(t,a),_3(n,t,a,-1))}return jo(),n=$a(Error(S(421))),ut(t,e,i,n)}return a.data==="$?"?(e.flags|=128,e.child=t.child,e=oD.bind(null,t),a._reactRetry=e,null):(t=r.treeContext,Z2=s6(a.nextSibling),e3=e,b1=!0,k3=null,t!==null&&(d3[m3++]=p4,d3[m3++]=v4,d3[m3++]=d0,p4=t.id,v4=t.overflow,d0=e),e=Ro(e,n.children),e.flags|=4096,e)}function pd(t,e,c){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),zi(t.return,e,c)}function Ba(t,e,c,n,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:c,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=c,r.tailMode=a)}function $z(t,e,c){var n=e.pendingProps,a=n.revealOrder,r=n.tail;if(T2(t,e,n.children,c),n=N1.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pd(t,c,e);else if(t.tag===19)pd(t,c,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(g1(N1,n),!(e.mode&1))e.memoizedState=null;else switch(a){case"forwards":for(c=e.child,a=null;c!==null;)t=c.alternate,t!==null&&wc(t)===null&&(a=c),c=c.sibling;c=a,c===null?(a=e.child,e.child=null):(a=c.sibling,c.sibling=null),Ba(e,!1,a,c,r);break;case"backwards":for(c=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&wc(t)===null){e.child=a;break}t=a.sibling,a.sibling=c,c=a,a=t}Ba(e,!0,c,null,r);break;case"together":Ba(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gt(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function b4(t,e,c){if(t!==null&&(e.dependencies=t.dependencies),p0|=e.lanes,!(c&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,c=u6(t,t.pendingProps),e.child=c,c.return=e;t.sibling!==null;)t=t.sibling,c=c.sibling=u6(t,t.pendingProps),c.return=e;c.sibling=null}return e.child}function ZP(t,e,c){switch(e.tag){case 3:Oz(e),D8();break;case 5:mz(e);break;case 1:j2(e.type)&&Cc(e);break;case 4:ko(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,a=e.memoizedProps.value;g1(Vc,n._currentValue),n._currentValue=a;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(g1(N1,N1.current&1),e.flags|=128,null):c&e.child.childLanes?Fz(t,e,c):(g1(N1,N1.current&1),t=b4(t,e,c),t!==null?t.sibling:null);g1(N1,N1.current&1);break;case 19:if(n=(c&e.childLanes)!==0,t.flags&128){if(n)return $z(t,e,c);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),g1(N1,N1.current),n)break;return null;case 22:case 23:return e.lanes=0,Dz(t,e,c)}return b4(t,e,c)}var Bz,xi,Uz,jz;Bz=function(t,e){for(var c=e.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break;for(;c.sibling===null;){if(c.return===null||c.return===e)return;c=c.return}c.sibling.return=c.return,c=c.sibling}};xi=function(){};Uz=function(t,e,c,n){var a=t.memoizedProps;if(a!==n){t=e.stateNode,Q6(X3.current);var r=null;switch(c){case"input":a=Kr(t,a),n=Kr(t,n),r=[];break;case"select":a=A1({},a,{value:void 0}),n=A1({},n,{value:void 0}),r=[];break;case"textarea":a=Qr(t,a),n=Qr(t,n),r=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=gc)}Jr(c,n);var i;c=null;for(l in a)if(!n.hasOwnProperty(l)&&a.hasOwnProperty(l)&&a[l]!=null)if(l==="style"){var s=a[l];for(i in s)s.hasOwnProperty(i)&&(c||(c={}),c[i]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(de.hasOwnProperty(l)?r||(r=[]):(r=r||[]).push(l,null));for(l in n){var o=n[l];if(s=a!=null?a[l]:void 0,n.hasOwnProperty(l)&&o!==s&&(o!=null||s!=null))if(l==="style")if(s){for(i in s)!s.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||(c||(c={}),c[i]="");for(i in o)o.hasOwnProperty(i)&&s[i]!==o[i]&&(c||(c={}),c[i]=o[i])}else c||(r||(r=[]),r.push(l,c)),c=o;else l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,s=s?s.__html:void 0,o!=null&&s!==o&&(r=r||[]).push(l,o)):l==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(l,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(de.hasOwnProperty(l)?(o!=null&&l==="onScroll"&&z1("scroll",t),r||s===o||(r=[])):(r=r||[]).push(l,o))}c&&(r=r||[]).push("style",c);var l=r;(e.updateQueue=l)&&(e.flags|=4)}};jz=function(t,e,c,n){c!==n&&(e.flags|=4)};function S5(t,e){if(!b1)switch(t.tailMode){case"hidden":e=t.tail;for(var c=null;e!==null;)e.alternate!==null&&(c=e),e=e.sibling;c===null?t.tail=null:c.sibling=null;break;case"collapsed":c=t.tail;for(var n=null;c!==null;)c.alternate!==null&&(n=c),c=c.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function v2(t){var e=t.alternate!==null&&t.alternate.child===t.child,c=0,n=0;if(e)for(var a=t.child;a!==null;)c|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)c|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=n,t.childLanes=c,e}function QP(t,e,c){var n=e.pendingProps;switch(yo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return v2(e),null;case 1:return j2(e.type)&&zc(),v2(e),null;case 3:return n=e.stateNode,O8(),y1(U2),y1(x2),To(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(lt(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,k3!==null&&(_i(k3),k3=null))),xi(t,e),v2(e),null;case 5:Ao(e);var a=Q6(we.current);if(c=e.type,t!==null&&e.stateNode!=null)Uz(t,e,c,n,a),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(S(166));return v2(e),null}if(t=Q6(X3.current),lt(e)){n=e.stateNode,c=e.type;var r=e.memoizedProps;switch(n[G3]=e,n[ye]=r,t=(e.mode&1)!==0,c){case"dialog":z1("cancel",n),z1("close",n);break;case"iframe":case"object":case"embed":z1("load",n);break;case"video":case"audio":for(a=0;a<R5.length;a++)z1(R5[a],n);break;case"source":z1("error",n);break;case"img":case"image":case"link":z1("error",n),z1("load",n);break;case"details":z1("toggle",n);break;case"input":Lh(n,r),z1("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!r.multiple},z1("invalid",n);break;case"textarea":xh(n,r),z1("invalid",n)}Jr(c,r),a=null;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];i==="children"?typeof s=="string"?n.textContent!==s&&(r.suppressHydrationWarning!==!0&&ot(n.textContent,s,t),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&ot(n.textContent,s,t),a=["children",""+s]):de.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&z1("scroll",n)}switch(c){case"input":et(n),wh(n,r,!0);break;case"textarea":et(n),bh(n);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(n.onclick=gc)}n=a,e.updateQueue=n,n!==null&&(e.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(c)),t==="http://www.w3.org/1999/xhtml"?c==="script"?(t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=i.createElement(c,{is:n.is}):(t=i.createElement(c),c==="select"&&(i=t,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):t=i.createElementNS(t,c),t[G3]=e,t[ye]=n,Bz(t,e,!1,!1),e.stateNode=t;e:{switch(i=ei(c,n),c){case"dialog":z1("cancel",t),z1("close",t),a=n;break;case"iframe":case"object":case"embed":z1("load",t),a=n;break;case"video":case"audio":for(a=0;a<R5.length;a++)z1(R5[a],t);a=n;break;case"source":z1("error",t),a=n;break;case"img":case"image":case"link":z1("error",t),z1("load",t),a=n;break;case"details":z1("toggle",t),a=n;break;case"input":Lh(t,n),a=Kr(t,n),z1("invalid",t);break;case"option":a=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},a=A1({},n,{value:void 0}),z1("invalid",t);break;case"textarea":xh(t,n),a=Qr(t,n),z1("invalid",t);break;default:a=n}Jr(c,a),s=a;for(r in s)if(s.hasOwnProperty(r)){var o=s[r];r==="style"?Hg(t,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&zg(t,o)):r==="children"?typeof o=="string"?(c!=="textarea"||o!=="")&&me(t,o):typeof o=="number"&&me(t,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(de.hasOwnProperty(r)?o!=null&&r==="onScroll"&&z1("scroll",t):o!=null&&so(t,r,o,i))}switch(c){case"input":et(t),wh(t,n,!1);break;case"textarea":et(t),bh(t);break;case"option":n.value!=null&&t.setAttribute("value",""+z6(n.value));break;case"select":t.multiple=!!n.multiple,r=n.value,r!=null?C8(t,!!n.multiple,r,!1):n.defaultValue!=null&&C8(t,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=gc)}switch(c){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return v2(e),null;case 6:if(t&&e.stateNode!=null)jz(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(S(166));if(c=Q6(we.current),Q6(X3.current),lt(e)){if(n=e.stateNode,c=e.memoizedProps,n[G3]=e,(r=n.nodeValue!==c)&&(t=e3,t!==null))switch(t.tag){case 3:ot(n.nodeValue,c,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ot(n.nodeValue,c,(t.mode&1)!==0)}r&&(e.flags|=4)}else n=(c.nodeType===9?c:c.ownerDocument).createTextNode(n),n[G3]=e,e.stateNode=n}return v2(e),null;case 13:if(y1(N1),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(b1&&Z2!==null&&e.mode&1&&!(e.flags&128))sz(),D8(),e.flags|=98560,r=!1;else if(r=lt(e),n!==null&&n.dehydrated!==null){if(t===null){if(!r)throw Error(S(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(S(317));r[G3]=e}else D8(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;v2(e),r=!1}else k3!==null&&(_i(k3),k3=null),r=!0;if(!r)return e.flags&65536?e:null}return e.flags&128?(e.lanes=c,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||N1.current&1?W1===0&&(W1=3):jo())),e.updateQueue!==null&&(e.flags|=4),v2(e),null);case 4:return O8(),xi(t,e),t===null&&Me(e.stateNode.containerInfo),v2(e),null;case 10:return bo(e.type._context),v2(e),null;case 17:return j2(e.type)&&zc(),v2(e),null;case 19:if(y1(N1),r=e.memoizedState,r===null)return v2(e),null;if(n=(e.flags&128)!==0,i=r.rendering,i===null)if(n)S5(r,!1);else{if(W1!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=wc(t),i!==null){for(e.flags|=128,S5(r,!1),n=i.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=c,c=e.child;c!==null;)r=c,t=n,r.flags&=14680066,i=r.alternate,i===null?(r.childLanes=0,r.lanes=t,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=i.childLanes,r.lanes=i.lanes,r.child=i.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=i.memoizedProps,r.memoizedState=i.memoizedState,r.updateQueue=i.updateQueue,r.type=i.type,t=i.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),c=c.sibling;return g1(N1,N1.current&1|2),e.child}t=t.sibling}r.tail!==null&&R1()>$8&&(e.flags|=128,n=!0,S5(r,!1),e.lanes=4194304)}else{if(!n)if(t=wc(i),t!==null){if(e.flags|=128,n=!0,c=t.updateQueue,c!==null&&(e.updateQueue=c,e.flags|=4),S5(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!b1)return v2(e),null}else 2*R1()-r.renderingStartTime>$8&&c!==1073741824&&(e.flags|=128,n=!0,S5(r,!1),e.lanes=4194304);r.isBackwards?(i.sibling=e.child,e.child=i):(c=r.last,c!==null?c.sibling=i:e.child=i,r.last=i)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=R1(),e.sibling=null,c=N1.current,g1(N1,n?c&1|2:c&1),e):(v2(e),null);case 22:case 23:return Uo(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?K2&1073741824&&(v2(e),e.subtreeFlags&6&&(e.flags|=8192)):v2(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function XP(t,e){switch(yo(e),e.tag){case 1:return j2(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return O8(),y1(U2),y1(x2),To(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ao(e),null;case 13:if(y1(N1),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));D8()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return y1(N1),null;case 4:return O8(),null;case 10:return bo(e.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var ht=!1,C2=!1,JP=typeof WeakSet=="function"?WeakSet:Set,D=null;function f8(t,e){var c=t.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(n){I1(t,e,n)}else c.current=null}function bi(t,e,c){try{c()}catch(n){I1(t,e,n)}}var vd=!1;function eD(t,e){if(fi=mc,t=Kg(),Mo(t)){if("selectionStart"in t)var c={start:t.selectionStart,end:t.selectionEnd};else e:{c=(c=t.ownerDocument)&&c.defaultView||window;var n=c.getSelection&&c.getSelection();if(n&&n.rangeCount!==0){c=n.anchorNode;var a=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{c.nodeType,r.nodeType}catch{c=null;break e}var i=0,s=-1,o=-1,l=0,f=0,u=t,h=null;t:for(;;){for(var p;u!==c||a!==0&&u.nodeType!==3||(s=i+a),u!==r||n!==0&&u.nodeType!==3||(o=i+n),u.nodeType===3&&(i+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===c&&++l===a&&(s=i),h===r&&++f===n&&(o=i),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}c=s===-1||o===-1?null:{start:s,end:o}}else c=null}c=c||{start:0,end:0}}else c=null;for(ui={focusedElem:t,selectionRange:c},mc=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var z=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var C=z.memoizedProps,H=z.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?C:S3(e.type,C),H);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(M){I1(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return z=vd,vd=!1,z}function X5(t,e,c){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var r=a.destroy;a.destroy=void 0,r!==void 0&&bi(e,c,r)}a=a.next}while(a!==n)}}function A9(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var c=e=e.next;do{if((c.tag&t)===t){var n=c.create;c.destroy=n()}c=c.next}while(c!==e)}}function Si(t){var e=t.ref;if(e!==null){var c=t.stateNode;switch(t.tag){case 5:t=c;break;default:t=c}typeof e=="function"?e(t):e.current=t}}function qz(t){var e=t.alternate;e!==null&&(t.alternate=null,qz(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[G3],delete e[ye],delete e[mi],delete e[PP],delete e[DP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wz(t){return t.tag===5||t.tag===3||t.tag===4}function gd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wz(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ni(t,e,c){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?c.nodeType===8?c.parentNode.insertBefore(t,e):c.insertBefore(t,e):(c.nodeType===8?(e=c.parentNode,e.insertBefore(t,c)):(e=c,e.appendChild(t)),c=c._reactRootContainer,c!=null||e.onclick!==null||(e.onclick=gc));else if(n!==4&&(t=t.child,t!==null))for(Ni(t,e,c),t=t.sibling;t!==null;)Ni(t,e,c),t=t.sibling}function ki(t,e,c){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?c.insertBefore(t,e):c.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(ki(t,e,c),t=t.sibling;t!==null;)ki(t,e,c),t=t.sibling}var s2=null,N3=!1;function F4(t,e,c){for(c=c.child;c!==null;)Gz(t,e,c),c=c.sibling}function Gz(t,e,c){if(Q3&&typeof Q3.onCommitFiberUnmount=="function")try{Q3.onCommitFiberUnmount(y9,c)}catch{}switch(c.tag){case 5:C2||f8(c,e);case 6:var n=s2,a=N3;s2=null,F4(t,e,c),s2=n,N3=a,s2!==null&&(N3?(t=s2,c=c.stateNode,t.nodeType===8?t.parentNode.removeChild(c):t.removeChild(c)):s2.removeChild(c.stateNode));break;case 18:s2!==null&&(N3?(t=s2,c=c.stateNode,t.nodeType===8?Ia(t.parentNode,c):t.nodeType===1&&Ia(t,c),ze(t)):Ia(s2,c.stateNode));break;case 4:n=s2,a=N3,s2=c.stateNode.containerInfo,N3=!0,F4(t,e,c),s2=n,N3=a;break;case 0:case 11:case 14:case 15:if(!C2&&(n=c.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var r=a,i=r.destroy;r=r.tag,i!==void 0&&(r&2||r&4)&&bi(c,e,i),a=a.next}while(a!==n)}F4(t,e,c);break;case 1:if(!C2&&(f8(c,e),n=c.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=c.memoizedProps,n.state=c.memoizedState,n.componentWillUnmount()}catch(s){I1(c,e,s)}F4(t,e,c);break;case 21:F4(t,e,c);break;case 22:c.mode&1?(C2=(n=C2)||c.memoizedState!==null,F4(t,e,c),C2=n):F4(t,e,c);break;default:F4(t,e,c)}}function zd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var c=t.stateNode;c===null&&(c=t.stateNode=new JP),e.forEach(function(n){var a=lD.bind(null,t,n);c.has(n)||(c.add(n),n.then(a,a))})}}function w3(t,e){var c=e.deletions;if(c!==null)for(var n=0;n<c.length;n++){var a=c[n];try{var r=t,i=e,s=i;e:for(;s!==null;){switch(s.tag){case 5:s2=s.stateNode,N3=!1;break e;case 3:s2=s.stateNode.containerInfo,N3=!0;break e;case 4:s2=s.stateNode.containerInfo,N3=!0;break e}s=s.return}if(s2===null)throw Error(S(160));Gz(r,i,a),s2=null,N3=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(l){I1(a,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kz(e,t),e=e.sibling}function Kz(t,e){var c=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(w3(e,t),q3(t),n&4){try{X5(3,t,t.return),A9(3,t)}catch(C){I1(t,t.return,C)}try{X5(5,t,t.return)}catch(C){I1(t,t.return,C)}}break;case 1:w3(e,t),q3(t),n&512&&c!==null&&f8(c,c.return);break;case 5:if(w3(e,t),q3(t),n&512&&c!==null&&f8(c,c.return),t.flags&32){var a=t.stateNode;try{me(a,"")}catch(C){I1(t,t.return,C)}}if(n&4&&(a=t.stateNode,a!=null)){var r=t.memoizedProps,i=c!==null?c.memoizedProps:r,s=t.type,o=t.updateQueue;if(t.updateQueue=null,o!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&pg(a,r),ei(s,i);var l=ei(s,r);for(i=0;i<o.length;i+=2){var f=o[i],u=o[i+1];f==="style"?Hg(a,u):f==="dangerouslySetInnerHTML"?zg(a,u):f==="children"?me(a,u):so(a,f,u,l)}switch(s){case"input":Yr(a,r);break;case"textarea":vg(a,r);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?C8(a,!!r.multiple,p,!1):h!==!!r.multiple&&(r.defaultValue!=null?C8(a,!!r.multiple,r.defaultValue,!0):C8(a,!!r.multiple,r.multiple?[]:"",!1))}a[ye]=r}catch(C){I1(t,t.return,C)}}break;case 6:if(w3(e,t),q3(t),n&4){if(t.stateNode===null)throw Error(S(162));a=t.stateNode,r=t.memoizedProps;try{a.nodeValue=r}catch(C){I1(t,t.return,C)}}break;case 3:if(w3(e,t),q3(t),n&4&&c!==null&&c.memoizedState.isDehydrated)try{ze(e.containerInfo)}catch(C){I1(t,t.return,C)}break;case 4:w3(e,t),q3(t);break;case 13:w3(e,t),q3(t),a=t.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||($o=R1())),n&4&&zd(t);break;case 22:if(f=c!==null&&c.memoizedState!==null,t.mode&1?(C2=(l=C2)||f,w3(e,t),C2=l):w3(e,t),q3(t),n&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!f&&t.mode&1)for(D=t,f=t.child;f!==null;){for(u=D=f;D!==null;){switch(h=D,p=h.child,h.tag){case 0:case 11:case 14:case 15:X5(4,h,h.return);break;case 1:f8(h,h.return);var z=h.stateNode;if(typeof z.componentWillUnmount=="function"){n=h,c=h.return;try{e=n,z.props=e.memoizedProps,z.state=e.memoizedState,z.componentWillUnmount()}catch(C){I1(n,c,C)}}break;case 5:f8(h,h.return);break;case 22:if(h.memoizedState!==null){Hd(u);continue}}p!==null?(p.return=h,D=p):Hd(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{a=u.stateNode,l?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=u.stateNode,o=u.memoizedProps.style,i=o!=null&&o.hasOwnProperty("display")?o.display:null,s.style.display=Cg("display",i))}catch(C){I1(t,t.return,C)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=l?"":u.memoizedProps}catch(C){I1(t,t.return,C)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:w3(e,t),q3(t),n&4&&zd(t);break;case 21:break;default:w3(e,t),q3(t)}}function q3(t){var e=t.flags;if(e&2){try{e:{for(var c=t.return;c!==null;){if(Wz(c)){var n=c;break e}c=c.return}throw Error(S(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(me(a,""),n.flags&=-33);var r=gd(t);ki(t,r,a);break;case 3:case 4:var i=n.stateNode.containerInfo,s=gd(t);Ni(t,s,i);break;default:throw Error(S(161))}}catch(o){I1(t,t.return,o)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tD(t,e,c){D=t,Yz(t)}function Yz(t,e,c){for(var n=(t.mode&1)!==0;D!==null;){var a=D,r=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||ht;if(!i){var s=a.alternate,o=s!==null&&s.memoizedState!==null||C2;s=ht;var l=C2;if(ht=i,(C2=o)&&!l)for(D=a;D!==null;)i=D,o=i.child,i.tag===22&&i.memoizedState!==null?Md(a):o!==null?(o.return=i,D=o):Md(a);for(;r!==null;)D=r,Yz(r),r=r.sibling;D=a,ht=s,C2=l}Cd(t)}else a.subtreeFlags&8772&&r!==null?(r.return=a,D=r):Cd(t)}}function Cd(t){for(;D!==null;){var e=D;if(e.flags&8772){var c=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:C2||A9(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!C2)if(c===null)n.componentDidMount();else{var a=e.elementType===e.type?c.memoizedProps:S3(e.type,c.memoizedProps);n.componentDidUpdate(a,c.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var r=e.updateQueue;r!==null&&cd(e,r,n);break;case 3:var i=e.updateQueue;if(i!==null){if(c=null,e.child!==null)switch(e.child.tag){case 5:c=e.child.stateNode;break;case 1:c=e.child.stateNode}cd(e,i,c)}break;case 5:var s=e.stateNode;if(c===null&&e.flags&4){c=s;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break;case"img":o.src&&(c.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var f=l.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&ze(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}C2||e.flags&512&&Si(e)}catch(h){I1(e,e.return,h)}}if(e===t){D=null;break}if(c=e.sibling,c!==null){c.return=e.return,D=c;break}D=e.return}}function Hd(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var c=e.sibling;if(c!==null){c.return=e.return,D=c;break}D=e.return}}function Md(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var c=e.return;try{A9(4,e)}catch(o){I1(e,c,o)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var a=e.return;try{n.componentDidMount()}catch(o){I1(e,a,o)}}var r=e.return;try{Si(e)}catch(o){I1(e,r,o)}break;case 5:var i=e.return;try{Si(e)}catch(o){I1(e,i,o)}}}catch(o){I1(e,e.return,o)}if(e===t){D=null;break}var s=e.sibling;if(s!==null){s.return=e.return,D=s;break}D=e.return}}var cD=Math.ceil,Sc=P4.ReactCurrentDispatcher,Oo=P4.ReactCurrentOwner,z3=P4.ReactCurrentBatchConfig,s1=0,t2=null,B1=null,f2=0,K2=0,u8=k6(0),W1=0,Ne=null,p0=0,T9=0,Fo=0,J5=null,O2=null,$o=0,$8=1/0,u4=null,Nc=!1,Ai=null,l6=null,dt=!1,J4=null,kc=0,ee=0,Ti=null,Kt=-1,Yt=0;function I2(){return s1&6?R1():Kt!==-1?Kt:Kt=R1()}function f6(t){return t.mode&1?s1&2&&f2!==0?f2&-f2:OP.transition!==null?(Yt===0&&(Yt=Tg()),Yt):(t=d1,t!==0||(t=window.event,t=t===void 0?16:Og(t.type)),t):1}function _3(t,e,c,n){if(50<ee)throw ee=0,Ti=null,Error(S(185));s7(t,c,n),(!(s1&2)||t!==t2)&&(t===t2&&(!(s1&2)&&(T9|=c),W1===4&&G4(t,f2)),q2(t,n),c===1&&s1===0&&!(e.mode&1)&&($8=R1()+500,S9&&A6()))}function q2(t,e){var c=t.callbackNode;OI(t,e);var n=dc(t,t===t2?f2:0);if(n===0)c!==null&&kh(c),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(c!=null&&kh(c),e===1)t.tag===0?RP(Vd.bind(null,t)):az(Vd.bind(null,t)),_P(function(){!(s1&6)&&A6()}),c=null;else{switch(Eg(n)){case 1:c=ho;break;case 4:c=kg;break;case 16:c=hc;break;case 536870912:c=Ag;break;default:c=hc}c=nC(c,Zz.bind(null,t))}t.callbackPriority=e,t.callbackNode=c}}function Zz(t,e){if(Kt=-1,Yt=0,s1&6)throw Error(S(327));var c=t.callbackNode;if(L8()&&t.callbackNode!==c)return null;var n=dc(t,t===t2?f2:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Ac(t,n);else{e=n;var a=s1;s1|=2;var r=Xz();(t2!==t||f2!==e)&&(u4=null,$8=R1()+500,r0(t,e));do try{rD();break}catch(s){Qz(t,s)}while(1);xo(),Sc.current=r,s1=a,B1!==null?e=0:(t2=null,f2=0,e=W1)}if(e!==0){if(e===2&&(a=ri(t),a!==0&&(n=a,e=Ei(t,a))),e===1)throw c=Ne,r0(t,0),G4(t,n),q2(t,R1()),c;if(e===6)G4(t,n);else{if(a=t.current.alternate,!(n&30)&&!nD(a)&&(e=Ac(t,n),e===2&&(r=ri(t),r!==0&&(n=r,e=Ei(t,r))),e===1))throw c=Ne,r0(t,0),G4(t,n),q2(t,R1()),c;switch(t.finishedWork=a,t.finishedLanes=n,e){case 0:case 1:throw Error(S(345));case 2:j6(t,O2,u4);break;case 3:if(G4(t,n),(n&130023424)===n&&(e=$o+500-R1(),10<e)){if(dc(t,0)!==0)break;if(a=t.suspendedLanes,(a&n)!==n){I2(),t.pingedLanes|=t.suspendedLanes&a;break}t.timeoutHandle=di(j6.bind(null,t,O2,u4),e);break}j6(t,O2,u4);break;case 4:if(G4(t,n),(n&4194240)===n)break;for(e=t.eventTimes,a=-1;0<n;){var i=31-E3(n);r=1<<i,i=e[i],i>a&&(a=i),n&=~r}if(n=a,n=R1()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cD(n/1960))-n,10<n){t.timeoutHandle=di(j6.bind(null,t,O2,u4),n);break}j6(t,O2,u4);break;case 5:j6(t,O2,u4);break;default:throw Error(S(329))}}}return q2(t,R1()),t.callbackNode===c?Zz.bind(null,t):null}function Ei(t,e){var c=J5;return t.current.memoizedState.isDehydrated&&(r0(t,e).flags|=256),t=Ac(t,e),t!==2&&(e=O2,O2=c,e!==null&&_i(e)),t}function _i(t){O2===null?O2=t:O2.push.apply(O2,t)}function nD(t){for(var e=t;;){if(e.flags&16384){var c=e.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var n=0;n<c.length;n++){var a=c[n],r=a.getSnapshot;a=a.value;try{if(!P3(r(),a))return!1}catch{return!1}}}if(c=e.child,e.subtreeFlags&16384&&c!==null)c.return=e,e=c;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function G4(t,e){for(e&=~Fo,e&=~T9,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var c=31-E3(e),n=1<<c;t[c]=-1,e&=~n}}function Vd(t){if(s1&6)throw Error(S(327));L8();var e=dc(t,0);if(!(e&1))return q2(t,R1()),null;var c=Ac(t,e);if(t.tag!==0&&c===2){var n=ri(t);n!==0&&(e=n,c=Ei(t,n))}if(c===1)throw c=Ne,r0(t,0),G4(t,e),q2(t,R1()),c;if(c===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,j6(t,O2,u4),q2(t,R1()),null}function Bo(t,e){var c=s1;s1|=1;try{return t(e)}finally{s1=c,s1===0&&($8=R1()+500,S9&&A6())}}function v0(t){J4!==null&&J4.tag===0&&!(s1&6)&&L8();var e=s1;s1|=1;var c=z3.transition,n=d1;try{if(z3.transition=null,d1=1,t)return t()}finally{d1=n,z3.transition=c,s1=e,!(s1&6)&&A6()}}function Uo(){K2=u8.current,y1(u8)}function r0(t,e){t.finishedWork=null,t.finishedLanes=0;var c=t.timeoutHandle;if(c!==-1&&(t.timeoutHandle=-1,EP(c)),B1!==null)for(c=B1.return;c!==null;){var n=c;switch(yo(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&zc();break;case 3:O8(),y1(U2),y1(x2),To();break;case 5:Ao(n);break;case 4:O8();break;case 13:y1(N1);break;case 19:y1(N1);break;case 10:bo(n.type._context);break;case 22:case 23:Uo()}c=c.return}if(t2=t,B1=t=u6(t.current,null),f2=K2=e,W1=0,Ne=null,Fo=T9=p0=0,O2=J5=null,Z6!==null){for(e=0;e<Z6.length;e++)if(c=Z6[e],n=c.interleaved,n!==null){c.interleaved=null;var a=n.next,r=c.pending;if(r!==null){var i=r.next;r.next=a,n.next=i}c.pending=n}Z6=null}return t}function Qz(t,e){do{var c=B1;try{if(xo(),qt.current=bc,xc){for(var n=k1.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}xc=!1}if(m0=0,e2=q1=k1=null,Q5=!1,xe=0,Oo.current=null,c===null||c.return===null){W1=1,Ne=e,B1=null;break}e:{var r=t,i=c.return,s=c,o=e;if(e=f2,s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var l=o,f=s,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=ld(i);if(p!==null){p.flags&=-257,fd(p,i,s,r,e),p.mode&1&&od(r,l,e),e=p,o=l;var z=e.updateQueue;if(z===null){var C=new Set;C.add(o),e.updateQueue=C}else z.add(o);break e}else{if(!(e&1)){od(r,l,e),jo();break e}o=Error(S(426))}}else if(b1&&s.mode&1){var H=ld(i);if(H!==null){!(H.flags&65536)&&(H.flags|=256),fd(H,i,s,r,e),Lo(F8(o,s));break e}}r=o=F8(o,s),W1!==4&&(W1=2),J5===null?J5=[r]:J5.push(r),r=i;do{switch(r.tag){case 3:r.flags|=65536,e&=-e,r.lanes|=e;var v=_z(r,o,e);td(r,v);break e;case 1:s=o;var m=r.type,g=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(l6===null||!l6.has(g)))){r.flags|=65536,e&=-e,r.lanes|=e;var M=Iz(r,s,e);td(r,M);break e}}r=r.return}while(r!==null)}eC(c)}catch(V){e=V,B1===c&&c!==null&&(B1=c=c.return);continue}break}while(1)}function Xz(){var t=Sc.current;return Sc.current=bc,t===null?bc:t}function jo(){(W1===0||W1===3||W1===2)&&(W1=4),t2===null||!(p0&268435455)&&!(T9&268435455)||G4(t2,f2)}function Ac(t,e){var c=s1;s1|=2;var n=Xz();(t2!==t||f2!==e)&&(u4=null,r0(t,e));do try{aD();break}catch(a){Qz(t,a)}while(1);if(xo(),s1=c,Sc.current=n,B1!==null)throw Error(S(261));return t2=null,f2=0,W1}function aD(){for(;B1!==null;)Jz(B1)}function rD(){for(;B1!==null&&!kI();)Jz(B1)}function Jz(t){var e=cC(t.alternate,t,K2);t.memoizedProps=t.pendingProps,e===null?eC(t):B1=e,Oo.current=null}function eC(t){var e=t;do{var c=e.alternate;if(t=e.return,e.flags&32768){if(c=XP(c,e),c!==null){c.flags&=32767,B1=c;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{W1=6,B1=null;return}}else if(c=QP(c,e,K2),c!==null){B1=c;return}if(e=e.sibling,e!==null){B1=e;return}B1=e=t}while(e!==null);W1===0&&(W1=5)}function j6(t,e,c){var n=d1,a=z3.transition;try{z3.transition=null,d1=1,iD(t,e,c,n)}finally{z3.transition=a,d1=n}return null}function iD(t,e,c,n){do L8();while(J4!==null);if(s1&6)throw Error(S(327));c=t.finishedWork;var a=t.finishedLanes;if(c===null)return null;if(t.finishedWork=null,t.finishedLanes=0,c===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var r=c.lanes|c.childLanes;if(FI(t,r),t===t2&&(B1=t2=null,f2=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||dt||(dt=!0,nC(hc,function(){return L8(),null})),r=(c.flags&15990)!==0,c.subtreeFlags&15990||r){r=z3.transition,z3.transition=null;var i=d1;d1=1;var s=s1;s1|=4,Oo.current=null,eD(t,c),Kz(c,t),xP(ui),mc=!!fi,ui=fi=null,t.current=c,tD(c),AI(),s1=s,d1=i,z3.transition=r}else t.current=c;if(dt&&(dt=!1,J4=t,kc=a),r=t.pendingLanes,r===0&&(l6=null),_I(c.stateNode),q2(t,R1()),e!==null)for(n=t.onRecoverableError,c=0;c<e.length;c++)a=e[c],n(a.value,{componentStack:a.stack,digest:a.digest});if(Nc)throw Nc=!1,t=Ai,Ai=null,t;return kc&1&&t.tag!==0&&L8(),r=t.pendingLanes,r&1?t===Ti?ee++:(ee=0,Ti=t):ee=0,A6(),null}function L8(){if(J4!==null){var t=Eg(kc),e=z3.transition,c=d1;try{if(z3.transition=null,d1=16>t?16:t,J4===null)var n=!1;else{if(t=J4,J4=null,kc=0,s1&6)throw Error(S(331));var a=s1;for(s1|=4,D=t.current;D!==null;){var r=D,i=r.child;if(D.flags&16){var s=r.deletions;if(s!==null){for(var o=0;o<s.length;o++){var l=s[o];for(D=l;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:X5(8,f,r)}var u=f.child;if(u!==null)u.return=f,D=u;else for(;D!==null;){f=D;var h=f.sibling,p=f.return;if(qz(f),f===l){D=null;break}if(h!==null){h.return=p,D=h;break}D=p}}}var z=r.alternate;if(z!==null){var C=z.child;if(C!==null){z.child=null;do{var H=C.sibling;C.sibling=null,C=H}while(C!==null)}}D=r}}if(r.subtreeFlags&2064&&i!==null)i.return=r,D=i;else e:for(;D!==null;){if(r=D,r.flags&2048)switch(r.tag){case 0:case 11:case 15:X5(9,r,r.return)}var v=r.sibling;if(v!==null){v.return=r.return,D=v;break e}D=r.return}}var m=t.current;for(D=m;D!==null;){i=D;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,D=g;else e:for(i=m;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:A9(9,s)}}catch(V){I1(s,s.return,V)}if(s===i){D=null;break e}var M=s.sibling;if(M!==null){M.return=s.return,D=M;break e}D=s.return}}if(s1=a,A6(),Q3&&typeof Q3.onPostCommitFiberRoot=="function")try{Q3.onPostCommitFiberRoot(y9,t)}catch{}n=!0}return n}finally{d1=c,z3.transition=e}}return!1}function yd(t,e,c){e=F8(c,e),e=_z(t,e,1),t=o6(t,e,1),e=I2(),t!==null&&(s7(t,1,e),q2(t,e))}function I1(t,e,c){if(t.tag===3)yd(t,t,c);else for(;e!==null;){if(e.tag===3){yd(e,t,c);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(l6===null||!l6.has(n))){t=F8(c,t),t=Iz(e,t,1),e=o6(e,t,1),t=I2(),e!==null&&(s7(e,1,t),q2(e,t));break}}e=e.return}}function sD(t,e,c){var n=t.pingCache;n!==null&&n.delete(e),e=I2(),t.pingedLanes|=t.suspendedLanes&c,t2===t&&(f2&c)===c&&(W1===4||W1===3&&(f2&130023424)===f2&&500>R1()-$o?r0(t,0):Fo|=c),q2(t,e)}function tC(t,e){e===0&&(t.mode&1?(e=nt,nt<<=1,!(nt&130023424)&&(nt=4194304)):e=1);var c=I2();t=x4(t,e),t!==null&&(s7(t,e,c),q2(t,c))}function oD(t){var e=t.memoizedState,c=0;e!==null&&(c=e.retryLane),tC(t,c)}function lD(t,e){var c=0;switch(t.tag){case 13:var n=t.stateNode,a=t.memoizedState;a!==null&&(c=a.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(e),tC(t,c)}var cC;cC=function(t,e,c){if(t!==null)if(t.memoizedProps!==e.pendingProps||U2.current)B2=!0;else{if(!(t.lanes&c)&&!(e.flags&128))return B2=!1,ZP(t,e,c);B2=!!(t.flags&131072)}else B2=!1,b1&&e.flags&1048576&&rz(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Gt(t,e),t=e.pendingProps;var a=P8(e,x2.current);y8(e,c),a=_o(null,e,n,t,a,c);var r=Io();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,j2(n)?(r=!0,Cc(e)):r=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,No(e),a.updater=N9,e.stateNode=a,a._reactInternals=e,Hi(e,n,t,c),e=yi(null,e,n,!0,r,c)):(e.tag=0,b1&&r&&Vo(e),T2(null,e,a,c),e=e.child),e;case 16:n=e.elementType;e:{switch(Gt(t,e),t=e.pendingProps,a=n._init,n=a(n._payload),e.type=n,a=e.tag=uD(n),t=S3(n,t),a){case 0:e=Vi(null,e,n,t,c);break e;case 1:e=dd(null,e,n,t,c);break e;case 11:e=ud(null,e,n,t,c);break e;case 14:e=hd(null,e,n,S3(n.type,t),c);break e}throw Error(S(306,n,""))}return e;case 0:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:S3(n,a),Vi(t,e,n,a,c);case 1:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:S3(n,a),dd(t,e,n,a,c);case 3:e:{if(Oz(e),t===null)throw Error(S(387));n=e.pendingProps,r=e.memoizedState,a=r.element,lz(t,e),Lc(e,n,null,c);var i=e.memoizedState;if(n=i.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){a=F8(Error(S(423)),e),e=md(t,e,n,c,a);break e}else if(n!==a){a=F8(Error(S(424)),e),e=md(t,e,n,c,a);break e}else for(Z2=s6(e.stateNode.containerInfo.firstChild),e3=e,b1=!0,k3=null,c=dz(e,null,n,c),e.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(D8(),n===a){e=b4(t,e,c);break e}T2(t,e,n,c)}e=e.child}return e;case 5:return mz(e),t===null&&gi(e),n=e.type,a=e.pendingProps,r=t!==null?t.memoizedProps:null,i=a.children,hi(n,a)?i=null:r!==null&&hi(n,r)&&(e.flags|=32),Rz(t,e),T2(t,e,i,c),e.child;case 6:return t===null&&gi(e),null;case 13:return Fz(t,e,c);case 4:return ko(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=R8(e,null,n,c):T2(t,e,n,c),e.child;case 11:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:S3(n,a),ud(t,e,n,a,c);case 7:return T2(t,e,e.pendingProps,c),e.child;case 8:return T2(t,e,e.pendingProps.children,c),e.child;case 12:return T2(t,e,e.pendingProps.children,c),e.child;case 10:e:{if(n=e.type._context,a=e.pendingProps,r=e.memoizedProps,i=a.value,g1(Vc,n._currentValue),n._currentValue=i,r!==null)if(P3(r.value,i)){if(r.children===a.children&&!U2.current){e=b4(t,e,c);break e}}else for(r=e.child,r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){i=r.child;for(var o=s.firstContext;o!==null;){if(o.context===n){if(r.tag===1){o=M4(-1,c&-c),o.tag=2;var l=r.updateQueue;if(l!==null){l=l.shared;var f=l.pending;f===null?o.next=o:(o.next=f.next,f.next=o),l.pending=o}}r.lanes|=c,o=r.alternate,o!==null&&(o.lanes|=c),zi(r.return,c,e),s.lanes|=c;break}o=o.next}}else if(r.tag===10)i=r.type===e.type?null:r.child;else if(r.tag===18){if(i=r.return,i===null)throw Error(S(341));i.lanes|=c,s=i.alternate,s!==null&&(s.lanes|=c),zi(i,c,e),i=r.sibling}else i=r.child;if(i!==null)i.return=r;else for(i=r;i!==null;){if(i===e){i=null;break}if(r=i.sibling,r!==null){r.return=i.return,i=r;break}i=i.return}r=i}T2(t,e,a.children,c),e=e.child}return e;case 9:return a=e.type,n=e.pendingProps.children,y8(e,c),a=C3(a),n=n(a),e.flags|=1,T2(t,e,n,c),e.child;case 14:return n=e.type,a=S3(n,e.pendingProps),a=S3(n.type,a),hd(t,e,n,a,c);case 15:return Pz(t,e,e.type,e.pendingProps,c);case 17:return n=e.type,a=e.pendingProps,a=e.elementType===n?a:S3(n,a),Gt(t,e),e.tag=1,j2(n)?(t=!0,Cc(e)):t=!1,y8(e,c),uz(e,n,a),Hi(e,n,a,c),yi(null,e,n,!0,t,c);case 19:return $z(t,e,c);case 22:return Dz(t,e,c)}throw Error(S(156,e.tag))};function nC(t,e){return Ng(t,e)}function fD(t,e,c,n){this.tag=t,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function v3(t,e,c,n){return new fD(t,e,c,n)}function qo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uD(t){if(typeof t=="function")return qo(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lo)return 11;if(t===fo)return 14}return 2}function u6(t,e){var c=t.alternate;return c===null?(c=v3(t.tag,e,t.key,t.mode),c.elementType=t.elementType,c.type=t.type,c.stateNode=t.stateNode,c.alternate=t,t.alternate=c):(c.pendingProps=e,c.type=t.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=t.flags&14680064,c.childLanes=t.childLanes,c.lanes=t.lanes,c.child=t.child,c.memoizedProps=t.memoizedProps,c.memoizedState=t.memoizedState,c.updateQueue=t.updateQueue,e=t.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},c.sibling=t.sibling,c.index=t.index,c.ref=t.ref,c}function Zt(t,e,c,n,a,r){var i=2;if(n=t,typeof t=="function")qo(t)&&(i=1);else if(typeof t=="string")i=5;else e:switch(t){case t8:return i0(c.children,a,r,e);case oo:i=8,a|=8;break;case jr:return t=v3(12,c,e,a|2),t.elementType=jr,t.lanes=r,t;case qr:return t=v3(13,c,e,a),t.elementType=qr,t.lanes=r,t;case Wr:return t=v3(19,c,e,a),t.elementType=Wr,t.lanes=r,t;case hg:return E9(c,a,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fg:i=10;break e;case ug:i=9;break e;case lo:i=11;break e;case fo:i=14;break e;case j4:i=16,n=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=v3(i,c,e,a),e.elementType=t,e.type=n,e.lanes=r,e}function i0(t,e,c,n){return t=v3(7,t,n,e),t.lanes=c,t}function E9(t,e,c,n){return t=v3(22,t,n,e),t.elementType=hg,t.lanes=c,t.stateNode={isHidden:!1},t}function Ua(t,e,c){return t=v3(6,t,null,e),t.lanes=c,t}function ja(t,e,c){return e=v3(4,t.children!==null?t.children:[],t.key,e),e.lanes=c,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hD(t,e,c,n,a){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wo(t,e,c,n,a,r,i,s,o){return t=new hD(t,e,c,s,o),e===1?(e=1,r===!0&&(e|=8)):e=0,r=v3(3,null,null,e),t.current=r,r.stateNode=t,r.memoizedState={element:n,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(r),t}function dD(t,e,c){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:e8,key:n==null?null:""+n,children:t,containerInfo:e,implementation:c}}function aC(t){if(!t)return C6;t=t._reactInternals;e:{if(T0(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(j2(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var c=t.type;if(j2(c))return nz(t,c,e)}return e}function rC(t,e,c,n,a,r,i,s,o){return t=Wo(c,n,!0,t,a,r,i,s,o),t.context=aC(null),c=t.current,n=I2(),a=f6(c),r=M4(n,a),r.callback=e??null,o6(c,r,a),t.current.lanes=a,s7(t,a,n),q2(t,n),t}function _9(t,e,c,n){var a=e.current,r=I2(),i=f6(a);return c=aC(c),e.context===null?e.context=c:e.pendingContext=c,e=M4(r,i),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=o6(a,e,i),t!==null&&(_3(t,a,i,r),jt(t,a,i)),i}function Tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ld(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var c=t.retryLane;t.retryLane=c!==0&&c<e?c:e}}function Go(t,e){Ld(t,e),(t=t.alternate)&&Ld(t,e)}function mD(){return null}var iC=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ko(t){this._internalRoot=t}I9.prototype.render=Ko.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));_9(t,e,null,null)};I9.prototype.unmount=Ko.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;v0(function(){_9(null,t,null,null)}),e[w4]=null}};function I9(t){this._internalRoot=t}I9.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var c=0;c<W4.length&&e!==0&&e<W4[c].priority;c++);W4.splice(c,0,t),c===0&&Rg(t)}};function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function P9(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wd(){}function pD(t,e,c,n,a){if(a){if(typeof n=="function"){var r=n;n=function(){var l=Tc(i);r.call(l)}}var i=rC(e,n,t,0,null,!1,!1,"",wd);return t._reactRootContainer=i,t[w4]=i.current,Me(t.nodeType===8?t.parentNode:t),v0(),i}for(;a=t.lastChild;)t.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var l=Tc(o);s.call(l)}}var o=Wo(t,0,!1,null,null,!1,!1,"",wd);return t._reactRootContainer=o,t[w4]=o.current,Me(t.nodeType===8?t.parentNode:t),v0(function(){_9(e,o,c,n)}),o}function D9(t,e,c,n,a){var r=c._reactRootContainer;if(r){var i=r;if(typeof a=="function"){var s=a;a=function(){var o=Tc(i);s.call(o)}}_9(e,i,t,a)}else i=pD(c,e,t,a,n);return Tc(i)}_g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var c=D5(e.pendingLanes);c!==0&&(mo(e,c|1),q2(e,R1()),!(s1&6)&&($8=R1()+500,A6()))}break;case 13:v0(function(){var n=x4(t,1);if(n!==null){var a=I2();_3(n,t,1,a)}}),Go(t,1)}};po=function(t){if(t.tag===13){var e=x4(t,134217728);if(e!==null){var c=I2();_3(e,t,134217728,c)}Go(t,134217728)}};Ig=function(t){if(t.tag===13){var e=f6(t),c=x4(t,e);if(c!==null){var n=I2();_3(c,t,e,n)}Go(t,e)}};Pg=function(){return d1};Dg=function(t,e){var c=d1;try{return d1=t,e()}finally{d1=c}};ci=function(t,e,c){switch(e){case"input":if(Yr(t,c),e=c.name,c.type==="radio"&&e!=null){for(c=t;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<c.length;e++){var n=c[e];if(n!==t&&n.form===t.form){var a=b9(n);if(!a)throw Error(S(90));mg(n),Yr(n,a)}}}break;case"textarea":vg(t,c);break;case"select":e=c.value,e!=null&&C8(t,!!c.multiple,e,!1)}};yg=Bo;Lg=v0;var vD={usingClientEntryPoint:!1,Events:[l7,r8,b9,Mg,Vg,Bo]},N5={findFiberByHostInstance:Y6,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gD={bundleType:N5.bundleType,version:N5.version,rendererPackageName:N5.rendererPackageName,rendererConfig:N5.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P4.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bg(t),t===null?null:t.stateNode},findFiberByHostInstance:N5.findFiberByHostInstance||mD,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mt.isDisabled&&mt.supportsFiber)try{y9=mt.inject(gD),Q3=mt}catch{}}i3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vD;i3.createPortal=function(t,e){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yo(e))throw Error(S(200));return dD(t,e,null,c)};i3.createRoot=function(t,e){if(!Yo(t))throw Error(S(299));var c=!1,n="",a=iC;return e!=null&&(e.unstable_strictMode===!0&&(c=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Wo(t,1,!1,null,null,c,!1,n,a),t[w4]=e.current,Me(t.nodeType===8?t.parentNode:t),new Ko(e)};i3.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=bg(e),t=t===null?null:t.stateNode,t};i3.flushSync=function(t){return v0(t)};i3.hydrate=function(t,e,c){if(!P9(e))throw Error(S(200));return D9(null,t,e,!0,c)};i3.hydrateRoot=function(t,e,c){if(!Yo(t))throw Error(S(405));var n=c!=null&&c.hydratedSources||null,a=!1,r="",i=iC;if(c!=null&&(c.unstable_strictMode===!0&&(a=!0),c.identifierPrefix!==void 0&&(r=c.identifierPrefix),c.onRecoverableError!==void 0&&(i=c.onRecoverableError)),e=rC(e,null,t,1,c??null,a,!1,r,i),t[w4]=e.current,Me(t),n)for(t=0;t<n.length;t++)c=n[t],a=c._getVersion,a=a(c._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[c,a]:e.mutableSourceEagerHydrationData.push(c,a);return new I9(e)};i3.render=function(t,e,c){if(!P9(e))throw Error(S(200));return D9(null,t,e,!1,c)};i3.unmountComponentAtNode=function(t){if(!P9(t))throw Error(S(40));return t._reactRootContainer?(v0(function(){D9(null,null,t,!1,function(){t._reactRootContainer=null,t[w4]=null})}),!0):!1};i3.unstable_batchedUpdates=Bo;i3.unstable_renderSubtreeIntoContainer=function(t,e,c,n){if(!P9(c))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return D9(t,e,c,!1,n)};i3.version="18.2.0-next-9e3b772b8-20220608";function sC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sC)}catch(t){console.error(t)}}sC(),rg.exports=i3;var zD=rg.exports,oC,xd=zD;oC=Br.createRoot=xd.createRoot,Br.hydrateRoot=xd.hydrateRoot;function bd(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),c.push.apply(c,n)}return c}function P(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?bd(Object(c),!0).forEach(function(n){K1(t,n,c[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):bd(Object(c)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(c,n))})}return t}function Ec(t){"@babel/helpers - typeof";return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ec(t)}function CD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sd(t,e){for(var c=0;c<e.length;c++){var n=e[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function HD(t,e,c){return e&&Sd(t.prototype,e),c&&Sd(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}function K1(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function Zo(t,e){return VD(t)||LD(t,e)||lC(t,e)||xD()}function u7(t){return MD(t)||yD(t)||lC(t)||wD()}function MD(t){if(Array.isArray(t))return Ii(t)}function VD(t){if(Array.isArray(t))return t}function yD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LD(t,e){var c=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var n=[],a=!0,r=!1,i,s;try{for(c=c.call(t);!(a=(i=c.next()).done)&&(n.push(i.value),!(e&&n.length===e));a=!0);}catch(o){r=!0,s=o}finally{try{!a&&c.return!=null&&c.return()}finally{if(r)throw s}}return n}}function lC(t,e){if(t){if(typeof t=="string")return Ii(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Ii(t,e)}}function Ii(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,n=new Array(e);c<e;c++)n[c]=t[c];return n}function wD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nd=function(){},Qo={},fC={},uC=null,hC={mark:Nd,measure:Nd};try{typeof window<"u"&&(Qo=window),typeof document<"u"&&(fC=document),typeof MutationObserver<"u"&&(uC=MutationObserver),typeof performance<"u"&&(hC=performance)}catch{}var bD=Qo.navigator||{},kd=bD.userAgent,Ad=kd===void 0?"":kd,H6=Qo,L1=fC,Td=uC,pt=hC;H6.document;var D4=!!L1.documentElement&&!!L1.head&&typeof L1.addEventListener=="function"&&typeof L1.createElement=="function",dC=~Ad.indexOf("MSIE")||~Ad.indexOf("Trident/"),vt,gt,zt,Ct,Ht,S4="___FONT_AWESOME___",Pi=16,mC="fa",pC="svg-inline--fa",g0="data-fa-i2svg",Di="data-fa-pseudo-element",SD="data-fa-pseudo-element-pending",Xo="data-prefix",Jo="data-icon",Ed="fontawesome-i2svg",ND="async",kD=["HTML","HEAD","STYLE","SCRIPT"],vC=function(){try{return!0}catch{return!1}}(),H1="classic",P1="sharp",el=[H1,P1];function h7(t){return new Proxy(t,{get:function(c,n){return n in c?c[n]:c[H1]}})}var ke=h7((vt={},K1(vt,H1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),K1(vt,P1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vt)),Ae=h7((gt={},K1(gt,H1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),K1(gt,P1,{solid:"fass",regular:"fasr",light:"fasl"}),gt)),Te=h7((zt={},K1(zt,H1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),K1(zt,P1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zt)),AD=h7((Ct={},K1(Ct,H1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),K1(Ct,P1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ct)),TD=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,gC="fa-layers-text",ED=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_D=h7((Ht={},K1(Ht,H1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),K1(Ht,P1,{900:"fass",400:"fasr",300:"fasl"}),Ht)),zC=[1,2,3,4,5,6,7,8,9,10],ID=zC.concat([11,12,13,14,15,16,17,18,19,20]),PD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ee=new Set;Object.keys(Ae[H1]).map(Ee.add.bind(Ee));Object.keys(Ae[P1]).map(Ee.add.bind(Ee));var DD=[].concat(el,u7(Ee),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",X6.GROUP,X6.SWAP_OPACITY,X6.PRIMARY,X6.SECONDARY]).concat(zC.map(function(t){return"".concat(t,"x")})).concat(ID.map(function(t){return"w-".concat(t)})),te=H6.FontAwesomeConfig||{};function RD(t){var e=L1.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function OD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(L1&&typeof L1.querySelector=="function"){var FD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];FD.forEach(function(t){var e=Zo(t,2),c=e[0],n=e[1],a=OD(RD(c));a!=null&&(te[n]=a)})}var CC={styleDefault:"solid",familyDefault:"classic",cssPrefix:mC,replacementClass:pC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};te.familyPrefix&&(te.cssPrefix=te.familyPrefix);var B8=P(P({},CC),te);B8.autoReplaceSvg||(B8.observeMutations=!1);var F={};Object.keys(CC).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(c){B8[t]=c,ce.forEach(function(n){return n(F)})},get:function(){return B8[t]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(e){B8.cssPrefix=e,ce.forEach(function(c){return c(F)})},get:function(){return B8.cssPrefix}});H6.FontAwesomeConfig=F;var ce=[];function $D(t){return ce.push(t),function(){ce.splice(ce.indexOf(t),1)}}var $4=Pi,Y3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function BD(t){if(!(!t||!D4)){var e=L1.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=L1.head.childNodes,n=null,a=c.length-1;a>-1;a--){var r=c[a],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=r)}return L1.head.insertBefore(e,n),t}}var UD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _e(){for(var t=12,e="";t-- >0;)e+=UD[Math.random()*62|0];return e}function n5(t){for(var e=[],c=(t||[]).length>>>0;c--;)e[c]=t[c];return e}function tl(t){return t.classList?n5(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function HC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jD(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,'="').concat(HC(t[c]),'" ')},"").trim()}function R9(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,": ").concat(t[c].trim(),";")},"")}function cl(t){return t.size!==Y3.size||t.x!==Y3.x||t.y!==Y3.y||t.rotate!==Y3.rotate||t.flipX||t.flipY}function qD(t){var e=t.transform,c=t.containerWidth,n=t.iconWidth,a={transform:"translate(".concat(c/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(i," ").concat(s)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:o,path:l}}function WD(t){var e=t.transform,c=t.width,n=c===void 0?Pi:c,a=t.height,r=a===void 0?Pi:a,i=t.startCentered,s=i===void 0?!1:i,o="";return s&&dC?o+="translate(".concat(e.x/$4-n/2,"em, ").concat(e.y/$4-r/2,"em) "):s?o+="translate(calc(-50% + ".concat(e.x/$4,"em), calc(-50% + ").concat(e.y/$4,"em)) "):o+="translate(".concat(e.x/$4,"em, ").concat(e.y/$4,"em) "),o+="scale(".concat(e.size/$4*(e.flipX?-1:1),", ").concat(e.size/$4*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var GD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function MC(){var t=mC,e=pC,c=F.cssPrefix,n=F.replacementClass,a=GD;if(c!==t||n!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(r,".".concat(c,"-")).replace(i,"--".concat(c,"-")).replace(s,".".concat(n))}return a}var _d=!1;function qa(){F.autoAddCss&&!_d&&(BD(MC()),_d=!0)}var KD={mixout:function(){return{dom:{css:MC,insertCss:qa}}},hooks:function(){return{beforeDOMElementCreation:function(){qa()},beforeI2svg:function(){qa()}}}},N4=H6||{};N4[S4]||(N4[S4]={});N4[S4].styles||(N4[S4].styles={});N4[S4].hooks||(N4[S4].hooks={});N4[S4].shims||(N4[S4].shims=[]);var A3=N4[S4],VC=[],YD=function t(){L1.removeEventListener("DOMContentLoaded",t),_c=1,VC.map(function(e){return e()})},_c=!1;D4&&(_c=(L1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L1.readyState),_c||L1.addEventListener("DOMContentLoaded",YD));function ZD(t){D4&&(_c?setTimeout(t,0):VC.push(t))}function d7(t){var e=t.tag,c=t.attributes,n=c===void 0?{}:c,a=t.children,r=a===void 0?[]:a;return typeof t=="string"?HC(t):"<".concat(e," ").concat(jD(n),">").concat(r.map(d7).join(""),"</").concat(e,">")}function Id(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}var QD=function(e,c){return function(n,a,r,i){return e.call(c,n,a,r,i)}},Wa=function(e,c,n,a){var r=Object.keys(e),i=r.length,s=a!==void 0?QD(c,a):c,o,l,f;for(n===void 0?(o=1,f=e[r[0]]):(o=0,f=n);o<i;o++)l=r[o],f=s(f,e[l],l,e);return f};function XD(t){for(var e=[],c=0,n=t.length;c<n;){var a=t.charCodeAt(c++);if(a>=55296&&a<=56319&&c<n){var r=t.charCodeAt(c++);(r&64512)==56320?e.push(((a&1023)<<10)+(r&1023)+65536):(e.push(a),c--)}else e.push(a)}return e}function Ri(t){var e=XD(t);return e.length===1?e[0].toString(16):null}function JD(t,e){var c=t.length,n=t.charCodeAt(e),a;return n>=55296&&n<=56319&&c>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function Pd(t){return Object.keys(t).reduce(function(e,c){var n=t[c],a=!!n.icon;return a?e[n.iconName]=n.icon:e[c]=n,e},{})}function Oi(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=c.skipHooks,a=n===void 0?!1:n,r=Pd(e);typeof A3.hooks.addPack=="function"&&!a?A3.hooks.addPack(t,Pd(e)):A3.styles[t]=P(P({},A3.styles[t]||{}),r),t==="fas"&&Oi("fa",e)}var Mt,Vt,yt,h8=A3.styles,eR=A3.shims,tR=(Mt={},K1(Mt,H1,Object.values(Te[H1])),K1(Mt,P1,Object.values(Te[P1])),Mt),nl=null,yC={},LC={},wC={},xC={},bC={},cR=(Vt={},K1(Vt,H1,Object.keys(ke[H1])),K1(Vt,P1,Object.keys(ke[P1])),Vt);function nR(t){return~DD.indexOf(t)}function aR(t,e){var c=e.split("-"),n=c[0],a=c.slice(1).join("-");return n===t&&a!==""&&!nR(a)?a:null}var SC=function(){var e=function(r){return Wa(h8,function(i,s,o){return i[o]=Wa(s,r,{}),i},{})};yC=e(function(a,r,i){if(r[3]&&(a[r[3]]=i),r[2]){var s=r[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){a[o.toString(16)]=i})}return a}),LC=e(function(a,r,i){if(a[i]=i,r[2]){var s=r[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){a[o]=i})}return a}),bC=e(function(a,r,i){var s=r[2];return a[i]=i,s.forEach(function(o){a[o]=i}),a});var c="far"in h8||F.autoFetchSvg,n=Wa(eR,function(a,r){var i=r[0],s=r[1],o=r[2];return s==="far"&&!c&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});wC=n.names,xC=n.unicodes,nl=O9(F.styleDefault,{family:F.familyDefault})};$D(function(t){nl=O9(t.styleDefault,{family:F.familyDefault})});SC();function al(t,e){return(yC[t]||{})[e]}function rR(t,e){return(LC[t]||{})[e]}function J6(t,e){return(bC[t]||{})[e]}function NC(t){return wC[t]||{prefix:null,iconName:null}}function iR(t){var e=xC[t],c=al("fas",t);return e||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function M6(){return nl}var rl=function(){return{prefix:null,iconName:null,rest:[]}};function O9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.family,n=c===void 0?H1:c,a=ke[n][t],r=Ae[n][t]||Ae[n][a],i=t in A3.styles?t:null;return r||i||null}var Dd=(yt={},K1(yt,H1,Object.keys(Te[H1])),K1(yt,P1,Object.keys(Te[P1])),yt);function F9(t){var e,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.skipLookups,a=n===void 0?!1:n,r=(e={},K1(e,H1,"".concat(F.cssPrefix,"-").concat(H1)),K1(e,P1,"".concat(F.cssPrefix,"-").concat(P1)),e),i=null,s=H1;(t.includes(r[H1])||t.some(function(l){return Dd[H1].includes(l)}))&&(s=H1),(t.includes(r[P1])||t.some(function(l){return Dd[P1].includes(l)}))&&(s=P1);var o=t.reduce(function(l,f){var u=aR(F.cssPrefix,f);if(h8[f]?(f=tR[s].includes(f)?AD[s][f]:f,i=f,l.prefix=f):cR[s].indexOf(f)>-1?(i=f,l.prefix=O9(f,{family:s})):u?l.iconName=u:f!==F.replacementClass&&f!==r[H1]&&f!==r[P1]&&l.rest.push(f),!a&&l.prefix&&l.iconName){var h=i==="fa"?NC(l.iconName):{},p=J6(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!h8.far&&h8.fas&&!F.autoFetchSvg&&(l.prefix="fas")}return l},rl());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===P1&&(h8.fass||F.autoFetchSvg)&&(o.prefix="fass",o.iconName=J6(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=M6()||"fas"),o}var sR=function(){function t(){CD(this,t),this.definitions={}}return HD(t,[{key:"add",value:function(){for(var c=this,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){c.definitions[s]=P(P({},c.definitions[s]||{}),i[s]),Oi(s,i[s]);var o=Te[H1][s];o&&Oi(o,i[s]),SC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(r){var i=a[r],s=i.prefix,o=i.iconName,l=i.icon,f=l[2];c[s]||(c[s]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(c[s][u]=l)}),c[s][o]=l}),c}}]),t}(),Rd=[],d8={},w8={},oR=Object.keys(w8);function lR(t,e){var c=e.mixoutsTo;return Rd=t,d8={},Object.keys(w8).forEach(function(n){oR.indexOf(n)===-1&&delete w8[n]}),Rd.forEach(function(n){var a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(function(i){typeof a[i]=="function"&&(c[i]=a[i]),Ec(a[i])==="object"&&Object.keys(a[i]).forEach(function(s){c[i]||(c[i]={}),c[i][s]=a[i][s]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(i){d8[i]||(d8[i]=[]),d8[i].push(r[i])})}n.provides&&n.provides(w8)}),c}function Fi(t,e){for(var c=arguments.length,n=new Array(c>2?c-2:0),a=2;a<c;a++)n[a-2]=arguments[a];var r=d8[t]||[];return r.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function z0(t){for(var e=arguments.length,c=new Array(e>1?e-1:0),n=1;n<e;n++)c[n-1]=arguments[n];var a=d8[t]||[];a.forEach(function(r){r.apply(null,c)})}function k4(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return w8[t]?w8[t].apply(null,e):void 0}function $i(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,c=t.prefix||M6();if(e)return e=J6(c,e)||e,Id(kC.definitions,c,e)||Id(A3.styles,c,e)}var kC=new sR,fR=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,z0("noAuto")},uR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D4?(z0("beforeI2svg",e),k4("pseudoElements2svg",e),k4("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,ZD(function(){dR({autoReplaceSvgRoot:c}),z0("watch",e)})}},hR={icon:function(e){if(e===null)return null;if(Ec(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:J6(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=O9(e[0]);return{prefix:n,iconName:J6(n,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(F.cssPrefix,"-"))>-1||e.match(TD))){var a=F9(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||M6(),iconName:J6(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var r=M6();return{prefix:r,iconName:J6(r,e)||e}}}},o3={noAuto:fR,config:F,dom:uR,parse:hR,library:kC,findIconDefinition:$i,toHtml:d7},dR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot,n=c===void 0?L1:c;(Object.keys(A3.styles).length>0||F.autoFetchSvg)&&D4&&F.autoReplaceSvg&&o3.dom.i2svg({node:n})};function $9(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return d7(n)})}}),Object.defineProperty(t,"node",{get:function(){if(D4){var n=L1.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function mR(t){var e=t.children,c=t.main,n=t.mask,a=t.attributes,r=t.styles,i=t.transform;if(cl(i)&&c.found&&!n.found){var s=c.width,o=c.height,l={x:s/o/2,y:.5};a.style=R9(P(P({},r),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function pR(t){var e=t.prefix,c=t.iconName,n=t.children,a=t.attributes,r=t.symbol,i=r===!0?"".concat(e,"-").concat(F.cssPrefix,"-").concat(c):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:i}),children:n}]}]}function il(t){var e=t.icons,c=e.main,n=e.mask,a=t.prefix,r=t.iconName,i=t.transform,s=t.symbol,o=t.title,l=t.maskId,f=t.titleId,u=t.extra,h=t.watchable,p=h===void 0?!1:h,z=n.found?n:c,C=z.width,H=z.height,v=a==="fak",m=[F.replacementClass,r?"".concat(F.cssPrefix,"-").concat(r):""].filter(function(E){return u.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(u.classes).join(" "),g={children:[],attributes:P(P({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:m,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(H)})},M=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(C/H*16*.0625,"em")}:{};p&&(g.attributes[g0]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||_e())},children:[o]}),delete g.attributes.title);var V=P(P({},g),{},{prefix:a,iconName:r,main:c,mask:n,maskId:l,transform:i,symbol:s,styles:P(P({},M),u.styles)}),b=n.found&&c.found?k4("generateAbstractMask",V)||{children:[],attributes:{}}:k4("generateAbstractIcon",V)||{children:[],attributes:{}},k=b.children,T=b.attributes;return V.children=k,V.attributes=T,s?pR(V):mR(V)}function Od(t){var e=t.content,c=t.width,n=t.height,a=t.transform,r=t.title,i=t.extra,s=t.watchable,o=s===void 0?!1:s,l=P(P(P({},i.attributes),r?{title:r}:{}),{},{class:i.classes.join(" ")});o&&(l[g0]="");var f=P({},i.styles);cl(a)&&(f.transform=WD({transform:a,startCentered:!0,width:c,height:n}),f["-webkit-transform"]=f.transform);var u=R9(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function vR(t){var e=t.content,c=t.title,n=t.extra,a=P(P(P({},n.attributes),c?{title:c}:{}),{},{class:n.classes.join(" ")}),r=R9(n.styles);r.length>0&&(a.style=r);var i=[];return i.push({tag:"span",attributes:a,children:[e]}),c&&i.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),i}var Ga=A3.styles;function Bi(t){var e=t[0],c=t[1],n=t.slice(4),a=Zo(n,1),r=a[0],i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(X6.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(X6.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(X6.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:c,icon:i}}var gR={found:!1,width:512,height:512};function zR(t,e){!vC&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ui(t,e){var c=e;return e==="fa"&&F.styleDefault!==null&&(e=M6()),new Promise(function(n,a){if(k4("missingIconAbstract"),c==="fa"){var r=NC(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Ga[e]&&Ga[e][t]){var i=Ga[e][t];return n(Bi(i))}zR(t,e),n(P(P({},gR),{},{icon:F.showMissingIcons&&t?k4("missingIconAbstract")||{}:{}}))})}var Fd=function(){},ji=F.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Fd,measure:Fd},O5='FA "6.4.0"',CR=function(e){return ji.mark("".concat(O5," ").concat(e," begins")),function(){return AC(e)}},AC=function(e){ji.mark("".concat(O5," ").concat(e," ends")),ji.measure("".concat(O5," ").concat(e),"".concat(O5," ").concat(e," begins"),"".concat(O5," ").concat(e," ends"))},sl={begin:CR,end:AC},Qt=function(){};function $d(t){var e=t.getAttribute?t.getAttribute(g0):null;return typeof e=="string"}function HR(t){var e=t.getAttribute?t.getAttribute(Xo):null,c=t.getAttribute?t.getAttribute(Jo):null;return e&&c}function MR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function VR(){if(F.autoReplaceSvg===!0)return Xt.replace;var t=Xt[F.autoReplaceSvg];return t||Xt.replace}function yR(t){return L1.createElementNS("http://www.w3.org/2000/svg",t)}function LR(t){return L1.createElement(t)}function TC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.ceFn,n=c===void 0?t.tag==="svg"?yR:LR:c;if(typeof t=="string")return L1.createTextNode(t);var a=n(t.tag);Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])});var r=t.children||[];return r.forEach(function(i){a.appendChild(TC(i,{ceFn:n}))}),a}function wR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Xt={replace:function(e){var c=e[0];if(c.parentNode)if(e[1].forEach(function(a){c.parentNode.insertBefore(TC(a),c)}),c.getAttribute(g0)===null&&F.keepOriginalSource){var n=L1.createComment(wR(c));c.parentNode.replaceChild(n,c)}else c.remove()},nest:function(e){var c=e[0],n=e[1];if(~tl(c).indexOf(F.replacementClass))return Xt.replace(e);var a=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(s,o){return o===F.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",r.toNode.join(" "))}var i=n.map(function(s){return d7(s)}).join(`
`);c.setAttribute(g0,""),c.innerHTML=i}};function Bd(t){t()}function EC(t,e){var c=typeof e=="function"?e:Qt;if(t.length===0)c();else{var n=Bd;F.mutateApproach===ND&&(n=H6.requestAnimationFrame||Bd),n(function(){var a=VR(),r=sl.begin("mutate");t.map(a),r(),c()})}}var ol=!1;function _C(){ol=!0}function qi(){ol=!1}var Ic=null;function Ud(t){if(Td&&F.observeMutations){var e=t.treeCallback,c=e===void 0?Qt:e,n=t.nodeCallback,a=n===void 0?Qt:n,r=t.pseudoElementsCallback,i=r===void 0?Qt:r,s=t.observeMutationsRoot,o=s===void 0?L1:s;Ic=new Td(function(l){if(!ol){var f=M6();n5(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!$d(u.addedNodes[0])&&(F.searchPseudoElements&&i(u.target),c(u.target)),u.type==="attributes"&&u.target.parentNode&&F.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&$d(u.target)&&~PD.indexOf(u.attributeName))if(u.attributeName==="class"&&HR(u.target)){var h=F9(tl(u.target)),p=h.prefix,z=h.iconName;u.target.setAttribute(Xo,p||f),z&&u.target.setAttribute(Jo,z)}else MR(u.target)&&a(u.target)})}}),D4&&Ic.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xR(){Ic&&Ic.disconnect()}function bR(t){var e=t.getAttribute("style"),c=[];return e&&(c=e.split(";").reduce(function(n,a){var r=a.split(":"),i=r[0],s=r.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),c}function SR(t){var e=t.getAttribute("data-prefix"),c=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",a=F9(tl(t));return a.prefix||(a.prefix=M6()),e&&c&&(a.prefix=e,a.iconName=c),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=rR(a.prefix,t.innerText)||al(a.prefix,Ri(t.innerText))),!a.iconName&&F.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function NR(t){var e=n5(t.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{}),c=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return F.autoA11y&&(c?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(n||_e()):(e["aria-hidden"]="true",e.focusable="false")),e}function kR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=SR(t),n=c.iconName,a=c.prefix,r=c.rest,i=NR(t),s=Fi("parseNodeAttributes",{},t),o=e.styleParser?bR(t):[];return P({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Y3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}var AR=A3.styles;function IC(t){var e=F.autoReplaceSvg==="nest"?jd(t,{styleParser:!1}):jd(t);return~e.extra.classes.indexOf(gC)?k4("generateLayersText",t,e):k4("generateSvgReplacementMutation",t,e)}var V6=new Set;el.map(function(t){V6.add("fa-".concat(t))});Object.keys(ke[H1]).map(V6.add.bind(V6));Object.keys(ke[P1]).map(V6.add.bind(V6));V6=u7(V6);function qd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D4)return Promise.resolve();var c=L1.documentElement.classList,n=function(u){return c.add("".concat(Ed,"-").concat(u))},a=function(u){return c.remove("".concat(Ed,"-").concat(u))},r=F.autoFetchSvg?V6:el.map(function(f){return"fa-".concat(f)}).concat(Object.keys(AR));r.includes("fa")||r.push("fa");var i=[".".concat(gC,":not([").concat(g0,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(g0,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=n5(t.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();var o=sl.begin("onTree"),l=s.reduce(function(f,u){try{var h=IC(u);h&&f.push(h)}catch(p){vC||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){EC(h,function(){n("active"),n("complete"),a("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(h){o(),u(h)})})}function TR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;IC(t).then(function(c){c&&EC([c],e)})}function ER(t){return function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:$i(e||{}),a=c.mask;return a&&(a=(a||{}).icon?a:$i(a||{})),t(n,P(P({},c),{},{mask:a}))}}var _R=function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.transform,a=n===void 0?Y3:n,r=c.symbol,i=r===void 0?!1:r,s=c.mask,o=s===void 0?null:s,l=c.maskId,f=l===void 0?null:l,u=c.title,h=u===void 0?null:u,p=c.titleId,z=p===void 0?null:p,C=c.classes,H=C===void 0?[]:C,v=c.attributes,m=v===void 0?{}:v,g=c.styles,M=g===void 0?{}:g;if(e){var V=e.prefix,b=e.iconName,k=e.icon;return $9(P({type:"icon"},e),function(){return z0("beforeDOMElementCreation",{iconDefinition:e,params:c}),F.autoA11y&&(h?m["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(z||_e()):(m["aria-hidden"]="true",m.focusable="false")),il({icons:{main:Bi(k),mask:o?Bi(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:b,transform:P(P({},Y3),a),symbol:i,title:h,maskId:f,titleId:z,extra:{attributes:m,styles:M,classes:H}})})}},IR={mixout:function(){return{icon:ER(_R)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=qd,c.nodeCallback=TR,c}}},provides:function(e){e.i2svg=function(c){var n=c.node,a=n===void 0?L1:n,r=c.callback,i=r===void 0?function(){}:r;return qd(a,i)},e.generateSvgReplacementMutation=function(c,n){var a=n.iconName,r=n.title,i=n.titleId,s=n.prefix,o=n.transform,l=n.symbol,f=n.mask,u=n.maskId,h=n.extra;return new Promise(function(p,z){Promise.all([Ui(a,s),f.iconName?Ui(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var H=Zo(C,2),v=H[0],m=H[1];p([c,il({icons:{main:v,mask:m},prefix:s,iconName:a,transform:o,symbol:l,maskId:u,title:r,titleId:i,extra:h,watchable:!0})])}).catch(z)})},e.generateAbstractIcon=function(c){var n=c.children,a=c.attributes,r=c.main,i=c.transform,s=c.styles,o=R9(s);o.length>0&&(a.style=o);var l;return cl(i)&&(l=k4("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},PR={mixout:function(){return{layer:function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.classes,r=a===void 0?[]:a;return $9({type:"layer"},function(){z0("beforeDOMElementCreation",{assembler:c,params:n});var i=[];return c(function(s){Array.isArray(s)?s.map(function(o){i=i.concat(o.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(u7(r)).join(" ")},children:i}]})}}}},DR={mixout:function(){return{counter:function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.title,r=a===void 0?null:a,i=n.classes,s=i===void 0?[]:i,o=n.attributes,l=o===void 0?{}:o,f=n.styles,u=f===void 0?{}:f;return $9({type:"counter",content:c},function(){return z0("beforeDOMElementCreation",{content:c,params:n}),vR({content:c.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(u7(s))}})})}}}},RR={mixout:function(){return{text:function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?Y3:a,i=n.title,s=i===void 0?null:i,o=n.classes,l=o===void 0?[]:o,f=n.attributes,u=f===void 0?{}:f,h=n.styles,p=h===void 0?{}:h;return $9({type:"text",content:c},function(){return z0("beforeDOMElementCreation",{content:c,params:n}),Od({content:c,transform:P(P({},Y3),r),title:s,extra:{attributes:u,styles:p,classes:["".concat(F.cssPrefix,"-layers-text")].concat(u7(l))}})})}}},provides:function(e){e.generateLayersText=function(c,n){var a=n.title,r=n.transform,i=n.extra,s=null,o=null;if(dC){var l=parseInt(getComputedStyle(c).fontSize,10),f=c.getBoundingClientRect();s=f.width/l,o=f.height/l}return F.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([c,Od({content:c.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}},OR=new RegExp('"',"ug"),Wd=[1105920,1112319];function FR(t){var e=t.replace(OR,""),c=JD(e,0),n=c>=Wd[0]&&c<=Wd[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ri(a?e[0]:e),isSecondary:n||a}}function Gd(t,e){var c="".concat(SD).concat(e.replace(":","-"));return new Promise(function(n,a){if(t.getAttribute(c)!==null)return n();var r=n5(t.children),i=r.filter(function(k){return k.getAttribute(Di)===e})[0],s=H6.getComputedStyle(t,e),o=s.getPropertyValue("font-family").match(ED),l=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(i&&!o)return t.removeChild(i),n();if(o&&f!=="none"&&f!==""){var u=s.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?P1:H1,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?Ae[h][o[2].toLowerCase()]:_D[h][l],z=FR(u),C=z.value,H=z.isSecondary,v=o[0].startsWith("FontAwesome"),m=al(p,C),g=m;if(v){var M=iR(C);M.iconName&&M.prefix&&(m=M.iconName,p=M.prefix)}if(m&&!H&&(!i||i.getAttribute(Xo)!==p||i.getAttribute(Jo)!==g)){t.setAttribute(c,g),i&&t.removeChild(i);var V=kR(),b=V.extra;b.attributes[Di]=e,Ui(m,p).then(function(k){var T=il(P(P({},V),{},{icons:{main:k,mask:rl()},prefix:p,iconName:g,extra:b,watchable:!0})),E=L1.createElement("svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=T.map(function(A){return d7(A)}).join(`
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=function(t){const e=[];let c=0;for(let n=0;n<t.length;n++){let a=t.charCodeAt(n);a<128?e[c++]=a:a<2048?(e[c++]=a>>6|192,e[c++]=a&63|128):(a&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++n)&1023),e[c++]=a>>18|240,e[c++]=a>>12&63|128,e[c++]=a>>6&63|128,e[c++]=a&63|128):(e[c++]=a>>12|224,e[c++]=a>>6&63|128,e[c++]=a&63|128)}return e},zm1=function(t){const e=[];let c=0,n=0;for(;c<t.length;){const a=t[c++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const r=t[c++];e[n++]=String.fromCharCode((a&31)<<6|r&63)}else if(a>239&&a<365){const r=t[c++],i=t[c++],s=t[c++],o=((a&7)<<18|(r&63)<<12|(i&63)<<6|s&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const r=t[c++],i=t[c++];e[n++]=String.fromCharCode((a&15)<<12|(r&63)<<6|i&63)}}return e.join("")},hN={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<t.length;a+=3){const r=t[a],i=a+1<t.length,s=i?t[a+1]:0,o=a+2<t.length,l=o?t[a+2]:0,f=r>>2,u=(r&3)<<4|s>>4;let h=(s&15)<<2|l>>6,p=l&63;o||(p=64,i||(h=64)),n.push(c[f],c[u],c[h],c[p])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uN(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zm1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<t.length;){const r=c[t.charAt(a++)],s=a<t.length?c[t.charAt(a)]:0;++a;const l=a<t.length?c[t.charAt(a)]:64;++a;const u=a<t.length?c[t.charAt(a)]:64;if(++a,r==null||s==null||l==null||u==null)throw new Cm1;const h=r<<2|s>>4;if(n.push(h),l!==64){const p=s<<4&240|l>>2;if(n.push(p),u!==64){const z=l<<6&192|u;n.push(z)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cm1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hm1=function(t){const e=uN(t);return hN.encodeByteArray(e,!0)},Pc=function(t){return Hm1(t).replace(/\./g,"")},dN=function(t){try{return hN.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm1=()=>Mm1().__FIREBASE_DEFAULTS__,ym1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lm1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dN(t[1]);return e&&JSON.parse(e)},lf=()=>{try{return Vm1()||ym1()||Lm1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mN=t=>{var e,c;return(c=(e=lf())===null||e===void 0?void 0:e.emulatorHosts)===null||c===void 0?void 0:c[t]},pN=t=>{const e=mN(t);if(!e)return;const c=e.lastIndexOf(":");if(c<=0||c+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(c+1),10);return e[0]==="["?[e.substring(1,c-1),n]:[e.substring(0,c),n]},vN=()=>{var t;return(t=lf())===null||t===void 0?void 0:t.config},gN=t=>{var e;return(e=lf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}wrapCallback(e){return(c,n)=>{c?this.reject(c):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(c):e(c,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},n=e||"demo-project",a=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),s="";return[Pc(JSON.stringify(c)),Pc(JSON.stringify(i)),s].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xm1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b2())}function bm1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sm1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nm1(){const t=b2();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CN(){try{return typeof indexedDB=="object"}catch{return!1}}function HN(){return new Promise((t,e)=>{try{let c=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),c||self.indexedDB.deleteDatabase(n),t(!0)},a.onupgradeneeded=()=>{c=!1},a.onerror=()=>{var r;e(((r=a.error)===null||r===void 0?void 0:r.message)||"")}}catch(c){e(c)}})}function km1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am1="FirebaseError";class B3 extends Error{constructor(e,c,n){super(c),this.code=e,this.customData=n,this.name=Am1,Object.setPrototypeOf(this,B3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E0.prototype.create)}}class E0{constructor(e,c,n){this.service=e,this.serviceName=c,this.errors=n}create(e,...c){const n=c[0]||{},a=`${this.service}/${e}`,r=this.errors[e],i=r?Tm1(r,n):"Error",s=`${this.serviceName}: ${i} (${a}).`;return new B3(a,s,n)}}function Tm1(t,e){return t.replace(Em1,(c,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const Em1=/\{\$([^}]+)}/g;function _m1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dc(t,e){if(t===e)return!0;const c=Object.keys(t),n=Object.keys(e);for(const a of c){if(!n.includes(a))return!1;const r=t[a],i=e[a];if(Xd(r)&&Xd(i)){if(!Dc(r,i))return!1}else if(r!==i)return!1}for(const a of n)if(!c.includes(a))return!1;return!0}function Xd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C7(t){const e=[];for(const[c,n]of Object.entries(t))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function F5(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,r]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(r)}}),e}function $5(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}function Im1(t,e){const c=new Pm1(t,e);return c.subscribe.bind(c)}class Pm1{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(c=>{c.next(e)})}error(e){this.forEachObserver(c=>{c.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,c,n){let a;if(e===void 0&&c===void 0&&n===void 0)throw new Error("Missing Observer.");Dm1(e,["next","error","complete"])?a=e:a={next:e,error:c,complete:n},a.next===void 0&&(a.next=Ya),a.error===void 0&&(a.error=Ya),a.complete===void 0&&(a.complete=Ya);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{c(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dm1(t,e){if(typeof t!="object"||t===null)return!1;for(const c of e)if(c in t&&typeof t[c]=="function")return!0;return!1}function Ya(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){return t&&t._delegate?t._delegate:t}class M3{constructor(e,c,n){this.name=e,this.instanceFactory=c,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q6="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm1{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const n=new wm1;if(this.instancesDeferred.set(c,n),this.isInitialized(c)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:c});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(c=e==null?void 0:e.optional)!==null&&c!==void 0?c:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fm1(e))try{this.getOrInitializeService({instanceIdentifier:q6})}catch{}for(const[c,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(c);try{const r=this.getOrInitializeService({instanceIdentifier:a});n.resolve(r)}catch{}}}}clearInstance(e=q6){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(c=>"INTERNAL"in c).map(c=>c.INTERNAL.delete()),...e.filter(c=>"_delete"in c).map(c=>c._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=q6){return this.instances.has(e)}getOptions(e=q6){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:c});for(const[r,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);n===s&&i.resolve(a)}return a}onInit(e,c){var n;const a=this.normalizeInstanceIdentifier(c),r=(n=this.onInitCallbacks.get(a))!==null&&n!==void 0?n:new Set;r.add(e),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&e(i,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,c){const n=this.onInitCallbacks.get(c);if(n)for(const a of n)try{a(e,c)}catch{}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Om1(e),options:c}),this.instances.set(e,n),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=q6){return this.component?this.component.multipleInstances?e:q6:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Om1(t){return t===q6?void 0:t}function Fm1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new Rm1(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o1;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(o1||(o1={}));const Bm1={debug:o1.DEBUG,verbose:o1.VERBOSE,info:o1.INFO,warn:o1.WARN,error:o1.ERROR,silent:o1.SILENT},Um1=o1.INFO,jm1={[o1.DEBUG]:"log",[o1.VERBOSE]:"log",[o1.INFO]:"info",[o1.WARN]:"warn",[o1.ERROR]:"error"},qm1=(t,e,...c)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),a=jm1[e];if(a)console[a](`[${n}]  ${t.name}:`,...c);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ff{constructor(e){this.name=e,this._logLevel=Um1,this._logHandler=qm1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o1))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bm1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o1.DEBUG,...e),this._logHandler(this,o1.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o1.VERBOSE,...e),this._logHandler(this,o1.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o1.INFO,...e),this._logHandler(this,o1.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o1.WARN,...e),this._logHandler(this,o1.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o1.ERROR,...e),this._logHandler(this,o1.ERROR,...e)}}const Wm1=(t,e)=>e.some(c=>t instanceof c);let Jd,em;function Gm1(){return Jd||(Jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Km1(){return em||(em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const MN=new WeakMap,Gi=new WeakMap,VN=new WeakMap,Za=new WeakMap,uf=new WeakMap;function Ym1(t){const e=new Promise((c,n)=>{const a=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{c(h6(t.result)),a()},i=()=>{n(t.error),a()};t.addEventListener("success",r),t.addEventListener("error",i)});return e.then(c=>{c instanceof IDBCursor&&MN.set(c,t)}).catch(()=>{}),uf.set(e,t),e}function Zm1(t){if(Gi.has(t))return;const e=new Promise((c,n)=>{const a=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{c(),a()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)});Gi.set(t,e)}let Ki={get(t,e,c){if(t instanceof IDBTransaction){if(e==="done")return Gi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VN.get(t);if(e==="store")return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return h6(t[e])},set(t,e,c){return t[e]=c,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qm1(t){Ki=t(Ki)}function Xm1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...c){const n=t.call(Qa(this),e,...c);return VN.set(n,e.sort?e.sort():[e]),h6(n)}:Km1().includes(t)?function(...e){return t.apply(Qa(this),e),h6(MN.get(this))}:function(...e){return h6(t.apply(Qa(this),e))}}function Jm1(t){return typeof t=="function"?Xm1(t):(t instanceof IDBTransaction&&Zm1(t),Wm1(t,Gm1())?new Proxy(t,Ki):t)}function h6(t){if(t instanceof IDBRequest)return Ym1(t);if(Za.has(t))return Za.get(t);const e=Jm1(t);return e!==t&&(Za.set(t,e),uf.set(e,t)),e}const Qa=t=>uf.get(t);function ep1(t,e,{blocked:c,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(t,e),s=h6(i);return n&&i.addEventListener("upgradeneeded",o=>{n(h6(i.result),o.oldVersion,o.newVersion,h6(i.transaction),o)}),c&&i.addEventListener("blocked",o=>c(o.oldVersion,o.newVersion,o)),s.then(o=>{r&&o.addEventListener("close",()=>r()),a&&o.addEventListener("versionchange",l=>a(l.oldVersion,l.newVersion,l))}).catch(()=>{}),s}const tp1=["get","getKey","getAll","getAllKeys","count"],cp1=["put","add","delete","clear"],Xa=new Map;function tm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const c=e.replace(/FromIndex$/,""),n=e!==c,a=cp1.includes(c);if(!(c in(n?IDBIndex:IDBObjectStore).prototype)||!(a||tp1.includes(c)))return;const r=async function(i,...s){const o=this.transaction(i,a?"readwrite":"readonly");let l=o.store;return n&&(l=l.index(s.shift())),(await Promise.all([l[c](...s),a&&o.done]))[0]};return Xa.set(e,r),r}Qm1(t=>({...t,get:(e,c,n)=>tm(e,c)||t.get(e,c,n),has:(e,c)=>!!tm(e,c)||t.has(e,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(c=>{if(ap1(c)){const n=c.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(c=>c).join(" ")}}function ap1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yi="@firebase/app",cm="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=new ff("@firebase/app"),rp1="@firebase/app-compat",ip1="@firebase/analytics-compat",sp1="@firebase/analytics",op1="@firebase/app-check-compat",lp1="@firebase/app-check",fp1="@firebase/auth",up1="@firebase/auth-compat",hp1="@firebase/database",dp1="@firebase/database-compat",mp1="@firebase/functions",pp1="@firebase/functions-compat",vp1="@firebase/installations",gp1="@firebase/installations-compat",zp1="@firebase/messaging",Cp1="@firebase/messaging-compat",Hp1="@firebase/performance",Mp1="@firebase/performance-compat",Vp1="@firebase/remote-config",yp1="@firebase/remote-config-compat",Lp1="@firebase/storage",wp1="@firebase/storage-compat",xp1="@firebase/firestore",bp1="@firebase/firestore-compat",Sp1="firebase",Np1="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]",kp1={[Yi]:"fire-core",[rp1]:"fire-core-compat",[sp1]:"fire-analytics",[ip1]:"fire-analytics-compat",[lp1]:"fire-app-check",[op1]:"fire-app-check-compat",[fp1]:"fire-auth",[up1]:"fire-auth-compat",[hp1]:"fire-rtdb",[dp1]:"fire-rtdb-compat",[mp1]:"fire-fn",[pp1]:"fire-fn-compat",[vp1]:"fire-iid",[gp1]:"fire-iid-compat",[zp1]:"fire-fcm",[Cp1]:"fire-fcm-compat",[Hp1]:"fire-perf",[Mp1]:"fire-perf-compat",[Vp1]:"fire-rc",[yp1]:"fire-rc-compat",[Lp1]:"fire-gcs",[wp1]:"fire-gcs-compat",[xp1]:"fire-fst",[bp1]:"fire-fst-compat","fire-js":"fire-js",[Sp1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map,Qi=new Map;function Ap1(t,e){try{t.container.addComponent(e)}catch(c){C0.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function D3(t){const e=t.name;if(Qi.has(e))return C0.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const c of Rc.values())Ap1(c,t);return!0}function _0(t,e){const c=t.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp1={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},d6=new E0("app","Firebase",Tp1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep1{constructor(e,c,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new M3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw d6.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=Np1;function yN(t,e={}){let c=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},e),a=n.name;if(typeof a!="string"||!a)throw d6.create("bad-app-name",{appName:String(a)});if(c||(c=vN()),!c)throw d6.create("no-options");const r=Rc.get(a);if(r){if(Dc(c,r.options)&&Dc(n,r.config))return r;throw d6.create("duplicate-app",{appName:a})}const i=new $m1(a);for(const o of Qi.values())i.addComponent(o);const s=new Ep1(c,n,i);return Rc.set(a,s),s}function rn(t=Zi){const e=Rc.get(t);if(!e&&t===Zi&&vN())return yN();if(!e)throw d6.create("no-app",{appName:t});return e}function W2(t,e,c){var n;let a=(n=kp1[t])!==null&&n!==void 0?n:t;c&&(a+=`-${c}`);const r=a.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const s=[`Unable to register library "${a}" with version "${e}":`];r&&s.push(`library name "${a}" contains illegal characters (whitespace or "/")`),r&&i&&s.push("and"),i&&s.push(`version name "${e}" contains illegal characters (whitespace or "/")`),C0.warn(s.join(" "));return}D3(new M3(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p1="firebase-heartbeat-database",Ip1=1,Ie="firebase-heartbeat-store";let Ja=null;function LN(){return Ja||(Ja=ep1(_p1,Ip1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ie)}}}).catch(t=>{throw d6.create("idb-open",{originalErrorMessage:t.message})})),Ja}async function Pp1(t){try{return await(await LN()).transaction(Ie).objectStore(Ie).get(wN(t))}catch(e){if(e instanceof B3)C0.warn(e.message);else{const c=d6.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});C0.warn(c.message)}}}async function nm(t,e){try{const n=(await LN()).transaction(Ie,"readwrite");await n.objectStore(Ie).put(e,wN(t)),await n.done}catch(c){if(c instanceof B3)C0.warn(c.message);else{const n=d6.create("idb-set",{originalErrorMessage:c==null?void 0:c.message});C0.warn(n.message)}}}function wN(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp1=1024,Rp1=30*24*60*60*1e3;class Op1{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new $p1(c),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const c=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=am();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(a=>a.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:c}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const r=new Date(a.date).valueOf();return Date.now()-r<=Rp1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=am(),{heartbeatsToSend:c,unsentEntries:n}=Fp1(this._heartbeatsCache.heartbeats),a=Pc(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function am(){return new Date().toISOString().substring(0,10)}function Fp1(t,e=Dp1){const c=[];let n=t.slice();for(const a of t){const r=c.find(i=>i.agent===a.agent);if(r){if(r.dates.push(a.date),rm(c)>e){r.dates.pop();break}}else if(c.push({agent:a.agent,dates:[a.date]}),rm(c)>e){c.pop();break}n=n.slice(1)}return{heartbeatsToSend:c,unsentEntries:n}}class $p1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CN()?HN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pp1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var c;if(await this._canUseIndexedDBPromise){const a=await this.read();return nm(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var c;if(await this._canUseIndexedDBPromise){const a=await this.read();return nm(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function rm(t){return Pc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp1(t){D3(new M3("platform-logger",e=>new np1(e),"PRIVATE")),D3(new M3("heartbeat",e=>new Op1(e),"PRIVATE")),W2(Yi,cm,t),W2(Yi,cm,"esm2017"),W2("fire-js","")}Bp1("");var Up1="firebase",jp1="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W2(Up1,jp1,"app");var qp1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,hf=hf||{},Y=qp1||self;function Oc(){}function sn(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function H7(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Wp1(t){return Object.prototype.hasOwnProperty.call(t,er)&&t[er]||(t[er]=++Gp1)}var er="closure_uid_"+(1e9*Math.random()>>>0),Gp1=0;function Kp1(t,e,c){return t.call.apply(t.bind,arguments)}function Yp1(t,e,c){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function y2(t,e,c){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y2=Kp1:y2=Yp1,y2.apply(null,arguments)}function Lt(t,e){var c=Array.prototype.slice.call(arguments,1);return function(){var n=c.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function n2(t,e){function c(){}c.prototype=e.prototype,t.$=e.prototype,t.prototype=new c,t.prototype.constructor=t,t.ac=function(n,a,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[a].apply(n,i)}}function T6(){this.s=this.s,this.o=this.o}var Zp1=0;T6.prototype.s=!1;T6.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Zp1!=0)&&Wp1(this)};T6.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xN=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let c=0;c<t.length;c++)if(c in t&&t[c]===e)return c;return-1};function df(t){const e=t.length;if(0<e){const c=Array(e);for(let n=0;n<e;n++)c[n]=t[n];return c}return[]}function im(t,e){for(let c=1;c<arguments.length;c++){const n=arguments[c];if(sn(n)){const a=t.length||0,r=n.length||0;t.length=a+r;for(let i=0;i<r;i++)t[a+i]=n[i]}else t.push(n)}}function L2(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}L2.prototype.h=function(){this.defaultPrevented=!0};var Qp1=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Oc,e),Y.removeEventListener("test",Oc,e)}catch{}return t}();function Fc(t){return/^[\s\xa0]*$/.test(t)}var sm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function tr(t,e){return t<e?-1:t>e?1:0}function on(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function K3(t){return on().indexOf(t)!=-1}function mf(t){return mf[" "](t),t}mf[" "]=Oc;function bN(t,e,c){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=c(e)}var Xp1=K3("Opera"),U8=K3("Trident")||K3("MSIE"),SN=K3("Edge"),Xi=SN||U8,NN=K3("Gecko")&&!(on().toLowerCase().indexOf("webkit")!=-1&&!K3("Edge"))&&!(K3("Trident")||K3("MSIE"))&&!K3("Edge"),Jp1=on().toLowerCase().indexOf("webkit")!=-1&&!K3("Edge");function kN(){var t=Y.document;return t?t.documentMode:void 0}var $c;e:{var cr="",nr=function(){var t=on();if(NN)return/rv:([^\);]+)(\)|;)/.exec(t);if(SN)return/Edge\/([\d\.]+)/.exec(t);if(U8)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Jp1)return/WebKit\/(\S+)/.exec(t);if(Xp1)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(nr&&(cr=nr?nr[1]:""),U8){var ar=kN();if(ar!=null&&ar>parseFloat(cr)){$c=String(ar);break e}}$c=cr}var ev1={};function tv1(){return bN(ev1,9,function(){let t=0;const e=sm(String($c)).split("."),c=sm("9").split("."),n=Math.max(e.length,c.length);for(let i=0;t==0&&i<n;i++){var a=e[i]||"",r=c[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],a[0].length==0&&r[0].length==0)break;t=tr(a[1].length==0?0:parseInt(a[1],10),r[1].length==0?0:parseInt(r[1],10))||tr(a[2].length==0,r[2].length==0)||tr(a[2],r[2]),a=a[3],r=r[3]}while(t==0)}return 0<=t})}var Ji;if(Y.document&&U8){var om=kN();Ji=om||parseInt($c,10)||void 0}else Ji=void 0;var cv1=Ji;function Pe(t,e){if(L2.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var c=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(NN){e:{try{mf(e.nodeName);var a=!0;break e}catch{}a=!1}a||(e=null)}}else c=="mouseover"?e=t.fromElement:c=="mouseout"&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nv1[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pe.$.h.call(this)}}n2(Pe,L2);var nv1={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var M7="closure_listenable_"+(1e6*Math.random()|0),av1=0;function rv1(t,e,c,n,a){this.listener=t,this.proxy=null,this.src=e,this.type=c,this.capture=!!n,this.la=a,this.key=++av1,this.fa=this.ia=!1}function ln(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pf(t,e,c){for(const n in t)e.call(c,t[n],n,t)}function AN(t){const e={};for(const c in t)e[c]=t[c];return e}const lm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function TN(t,e){let c,n;for(let a=1;a<arguments.length;a++){n=arguments[a];for(c in n)t[c]=n[c];for(let r=0;r<lm.length;r++)c=lm[r],Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}}function fn(t){this.src=t,this.g={},this.h=0}fn.prototype.add=function(t,e,c,n,a){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var i=ts(t,e,n,a);return-1<i?(e=t[i],c||(e.ia=!1)):(e=new rv1(e,this.src,r,!!n,a),e.ia=c,t.push(e)),e};function es(t,e){var c=e.type;if(c in t.g){var n=t.g[c],a=xN(n,e),r;(r=0<=a)&&Array.prototype.splice.call(n,a,1),r&&(ln(e),t.g[c].length==0&&(delete t.g[c],t.h--))}}function ts(t,e,c,n){for(var a=0;a<t.length;++a){var r=t[a];if(!r.fa&&r.listener==e&&r.capture==!!c&&r.la==n)return a}return-1}var vf="closure_lm_"+(1e6*Math.random()|0),rr={};function EN(t,e,c,n,a){if(n&&n.once)return IN(t,e,c,n,a);if(Array.isArray(e)){for(var r=0;r<e.length;r++)EN(t,e[r],c,n,a);return null}return c=Cf(c),t&&t[M7]?t.O(e,c,H7(n)?!!n.capture:!!n,a):_N(t,e,c,!1,n,a)}function _N(t,e,c,n,a,r){if(!e)throw Error("Invalid event type");var i=H7(a)?!!a.capture:!!a,s=zf(t);if(s||(t[vf]=s=new fn(t)),c=s.add(e,c,n,i,r),c.proxy)return c;if(n=iv1(),c.proxy=n,n.src=t,n.listener=c,t.addEventListener)Qp1||(a=i),a===void 0&&(a=!1),t.addEventListener(e.toString(),n,a);else if(t.attachEvent)t.attachEvent(DN(e.toString()),n);else if(t.addListener&&t.removeListener)t.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return c}function iv1(){function t(c){return e.call(t.src,t.listener,c)}const e=sv1;return t}function IN(t,e,c,n,a){if(Array.isArray(e)){for(var r=0;r<e.length;r++)IN(t,e[r],c,n,a);return null}return c=Cf(c),t&&t[M7]?t.P(e,c,H7(n)?!!n.capture:!!n,a):_N(t,e,c,!0,n,a)}function PN(t,e,c,n,a){if(Array.isArray(e))for(var r=0;r<e.length;r++)PN(t,e[r],c,n,a);else n=H7(n)?!!n.capture:!!n,c=Cf(c),t&&t[M7]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],c=ts(r,c,n,a),-1<c&&(ln(r[c]),Array.prototype.splice.call(r,c,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=zf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ts(e,c,n,a)),(c=-1<t?e[t]:null)&&gf(c))}function gf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[M7])es(e.i,t);else{var c=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(c,n,t.capture):e.detachEvent?e.detachEvent(DN(c),n):e.addListener&&e.removeListener&&e.removeListener(n),(c=zf(e))?(es(c,t),c.h==0&&(c.src=null,e[vf]=null)):ln(t)}}}function DN(t){return t in rr?rr[t]:rr[t]="on"+t}function sv1(t,e){if(t.fa)t=!0;else{e=new Pe(e,this);var c=t.listener,n=t.la||t.src;t.ia&&gf(t),t=c.call(n,e)}return t}function zf(t){return t=t[vf],t instanceof fn?t:null}var ir="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cf(t){return typeof t=="function"?t:(t[ir]||(t[ir]=function(e){return t.handleEvent(e)}),t[ir])}function c2(){T6.call(this),this.i=new fn(this),this.S=this,this.J=null}n2(c2,T6);c2.prototype[M7]=!0;c2.prototype.removeEventListener=function(t,e,c,n){PN(this,t,e,c,n)};function u2(t,e){var c,n=t.J;if(n)for(c=[];n;n=n.J)c.push(n);if(t=t.S,n=e.type||e,typeof e=="string")e=new L2(e,t);else if(e instanceof L2)e.target=e.target||t;else{var a=e;e=new L2(n,t),TN(e,a)}if(a=!0,c)for(var r=c.length-1;0<=r;r--){var i=e.g=c[r];a=wt(i,n,!0,e)&&a}if(i=e.g=t,a=wt(i,n,!0,e)&&a,a=wt(i,n,!1,e)&&a,c)for(r=0;r<c.length;r++)i=e.g=c[r],a=wt(i,n,!1,e)&&a}c2.prototype.N=function(){if(c2.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var c=t.g[e],n=0;n<c.length;n++)ln(c[n]);delete t.g[e],t.h--}}this.J=null};c2.prototype.O=function(t,e,c,n){return this.i.add(String(t),e,!1,c,n)};c2.prototype.P=function(t,e,c,n){return this.i.add(String(t),e,!0,c,n)};function wt(t,e,c,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var a=!0,r=0;r<e.length;++r){var i=e[r];if(i&&!i.fa&&i.capture==c){var s=i.listener,o=i.la||i.src;i.ia&&es(t.i,i),a=s.call(o,n)!==!1&&a}}return a&&!n.defaultPrevented}var Hf=Y.JSON.stringify;function ov1(){var t=FN;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lv1{constructor(){this.h=this.g=null}add(e,c){const n=RN.get();n.set(e,c),this.h?this.h.next=n:this.g=n,this.h=n}}var RN=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fv1,t=>t.reset());class fv1{constructor(){this.next=this.g=this.h=null}set(e,c){this.h=e,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}function uv1(t){Y.setTimeout(()=>{throw t},0)}function ON(t,e){cs||hv1(),ns||(cs(),ns=!0),FN.add(t,e)}var cs;function hv1(){var t=Y.Promise.resolve(void 0);cs=function(){t.then(dv1)}}var ns=!1,FN=new lv1;function dv1(){for(var t;t=ov1();){try{t.h.call(t.g)}catch(c){uv1(c)}var e=RN;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ns=!1}function un(t,e){c2.call(this),this.h=t||1,this.g=e||Y,this.j=y2(this.qb,this),this.l=Date.now()}n2(un,c2);_=un.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),u2(this,"tick"),this.ga&&(Mf(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}_.N=function(){un.$.N.call(this),Mf(this),delete this.g};function Vf(t,e,c){if(typeof t=="function")c&&(t=y2(t,c));else if(t&&typeof t.handleEvent=="function")t=y2(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function $N(t){t.g=Vf(()=>{t.g=null,t.i&&(t.i=!1,$N(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mv1 extends T6{constructor(e,c){super(),this.m=e,this.j=c,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$N(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(t){T6.call(this),this.h=t,this.g={}}n2(De,T6);var fm=[];function BN(t,e,c,n){Array.isArray(c)||(c&&(fm[0]=c.toString()),c=fm);for(var a=0;a<c.length;a++){var r=EN(e,c[a],n||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function UN(t){pf(t.g,function(e,c){this.g.hasOwnProperty(c)&&gf(e)},t),t.g={}}De.prototype.N=function(){De.$.N.call(this),UN(this)};De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hn(){this.g=!0}hn.prototype.Ea=function(){this.g=!1};function pv1(t,e,c,n,a,r){t.info(function(){if(t.g)if(r)for(var i="",s=r.split("&"),o=0;o<s.length;o++){var l=s[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");i=2<=u.length&&u[1]=="type"?i+(f+"="+l+"&"):i+(f+"=redacted&")}}else i=null;else i=r;return"XMLHTTP REQ ("+n+") [attempt "+a+"]: "+e+`
`+c+`
`+i})}function vv1(t,e,c,n,a,r,i){t.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+a+"]: "+e+`
`+c+`
`+r+" "+i})}function m8(t,e,c,n){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zv1(t,c)+(n?" "+n:"")})}function gv1(t,e){t.info(function(){return"TIMEOUT: "+e})}hn.prototype.info=function(){};function zv1(t,e){if(!t.g)return e;if(!e)return null;try{var c=JSON.parse(e);if(c){for(t=0;t<c.length;t++)if(Array.isArray(c[t])){var n=c[t];if(!(2>n.length)){var a=n[1];if(Array.isArray(a)&&!(1>a.length)){var r=a[0];if(r!="noop"&&r!="stop"&&r!="close")for(var i=1;i<a.length;i++)a[i]=""}}}}return Hf(c)}catch{return e}}var P0={},um=null;function dn(){return um=um||new c2}P0.Ta="serverreachability";function jN(t){L2.call(this,P0.Ta,t)}n2(jN,L2);function Re(t){const e=dn();u2(e,new jN(e))}P0.STAT_EVENT="statevent";function qN(t,e){L2.call(this,P0.STAT_EVENT,t),this.stat=e}n2(qN,L2);function E2(t){const e=dn();u2(e,new qN(e,t))}P0.Ua="timingevent";function WN(t,e){L2.call(this,P0.Ua,t),this.size=e}n2(WN,L2);function V7(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var mn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},GN={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yf(){}yf.prototype.h=null;function hm(t){return t.h||(t.h=t.i())}function KN(){}var y7={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lf(){L2.call(this,"d")}n2(Lf,L2);function wf(){L2.call(this,"c")}n2(wf,L2);var as;function pn(){}n2(pn,yf);pn.prototype.g=function(){return new XMLHttpRequest};pn.prototype.i=function(){return{}};as=new pn;function L7(t,e,c,n){this.l=t,this.j=e,this.m=c,this.W=n||1,this.U=new De(this),this.P=Cv1,t=Xi?125:void 0,this.V=new un(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new YN}function YN(){this.i=null,this.g="",this.h=!1}var Cv1=45e3,rs={},Bc={};_=L7.prototype;_.setTimeout=function(t){this.P=t};function is(t,e,c){t.L=1,t.v=gn(A4(e)),t.s=c,t.S=!0,ZN(t,null)}function ZN(t,e){t.G=Date.now(),w7(t),t.A=A4(t.v);var c=t.A,n=t.W;Array.isArray(n)||(n=[String(n)]),ak(c.i,"t",n),t.C=0,c=t.l.I,t.h=new YN,t.g=wk(t.l,c?e:null,!t.s),0<t.O&&(t.M=new mv1(y2(t.Pa,t,t.g),t.O)),BN(t.U,t.g,"readystatechange",t.nb),e=t.I?AN(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Re(),pv1(t.j,t.u,t.A,t.m,t.W,t.s)}_.nb=function(t){t=t.target;const e=this.M;e&&g4(t)==3?e.l():this.Pa(t)};_.Pa=function(t){try{if(t==this.g)e:{const f=g4(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>f)&&(f!=3||Xi||this.g&&(this.h.h||this.g.ja()||vm(this.g)))){this.J||f!=4||e==7||(e==8||0>=u?Re(3):Re(2)),vn(this);var c=this.g.da();this.aa=c;t:if(QN(this)){var n=vm(this.g);t="";var a=n.length,r=g4(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){e0(this),ne(this);var i="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<a;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:r&&e==a-1});n.splice(0,a),this.h.g+=t,this.C=0,i=this.h.g}else i=this.g.ja();if(this.i=c==200,vv1(this.j,this.u,this.A,this.m,this.W,f,c),this.i){if(this.ba&&!this.K){t:{if(this.g){var s,o=this.g;if((s=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fc(s)){var l=s;break t}}l=null}if(c=l)m8(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ss(this,c);else{this.i=!1,this.o=3,E2(12),e0(this),ne(this);break e}}this.S?(XN(this,f,i),Xi&&this.i&&f==3&&(BN(this.U,this.V,"tick",this.mb),this.V.start())):(m8(this.j,this.m,i,null),ss(this,i)),f==4&&e0(this),this.i&&!this.J&&(f==4?Mk(this.l,this):(this.i=!1,w7(this)))}else c==400&&0<i.indexOf("Unknown SID")?(this.o=3,E2(12)):(this.o=0,E2(13)),e0(this),ne(this)}}}catch{}finally{}};function QN(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function XN(t,e,c){let n=!0,a;for(;!t.J&&t.C<c.length;)if(a=Hv1(t,c),a==Bc){e==4&&(t.o=4,E2(14),n=!1),m8(t.j,t.m,null,"[Incomplete Response]");break}else if(a==rs){t.o=4,E2(15),m8(t.j,t.m,c,"[Invalid Chunk]"),n=!1;break}else m8(t.j,t.m,a,null),ss(t,a);QN(t)&&a!=Bc&&a!=rs&&(t.h.g="",t.C=0),e!=4||c.length!=0||t.h.h||(t.o=1,E2(16),n=!1),t.i=t.i&&n,n?0<c.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Tf(e),e.L=!0,E2(11))):(m8(t.j,t.m,c,"[Invalid Chunked Response]"),e0(t),ne(t))}_.mb=function(){if(this.g){var t=g4(this.g),e=this.g.ja();this.C<e.length&&(vn(this),XN(this,t,e),this.i&&t!=4&&w7(this))}};function Hv1(t,e){var c=t.C,n=e.indexOf(`
`,c);return n==-1?Bc:(c=Number(e.substring(c,n)),isNaN(c)?rs:(n+=1,n+c>e.length?Bc:(e=e.substr(n,c),t.C=n+c,e)))}_.cancel=function(){this.J=!0,e0(this)};function w7(t){t.Y=Date.now()+t.P,JN(t,t.P)}function JN(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=V7(y2(t.lb,t),e)}function vn(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}_.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gv1(this.j,this.A),this.L!=2&&(Re(),E2(17)),e0(this),this.o=2,ne(this)):JN(this,this.Y-t)};function ne(t){t.l.H==0||t.J||Mk(t.l,t)}function e0(t){vn(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Mf(t.V),UN(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ss(t,e){try{var c=t.l;if(c.H!=0&&(c.g==t||os(c.h,t))){if(!t.K&&os(c.h,t)&&c.H==3){try{var n=c.Ja.g.parse(e)}catch{n=null}if(Array.isArray(n)&&n.length==3){var a=n;if(a[0]==0){e:if(!c.u){if(c.g)if(c.g.G+3e3<t.G)qc(c),Hn(c);else break e;Af(c),E2(18)}}else c.Fa=a[1],0<c.Fa-c.V&&37500>a[2]&&c.M&&c.A==0&&!c.v&&(c.v=V7(y2(c.ib,c),6e3));if(1>=sk(c.h)&&c.na){try{c.na()}catch{}c.na=void 0}}else t0(c,11)}else if((t.K||c.g==t)&&qc(c),!Fc(e))for(a=c.Ja.g.parse(e),e=0;e<a.length;e++){let l=a[e];if(c.V=l[0],l=l[1],c.H==2)if(l[0]=="c"){c.J=l[1],c.oa=l[2];const f=l[3];f!=null&&(c.qa=f,c.j.info("VER="+c.qa));const u=l[4];u!=null&&(c.Ga=u,c.j.info("SVER="+c.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(n=1.5*h,c.K=n,c.j.info("backChannelRequestTimeoutMs_="+n)),n=c;const p=t.g;if(p){const z=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(z){var r=n.h;r.g||z.indexOf("spdy")==-1&&z.indexOf("quic")==-1&&z.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(xf(r,r.h),r.h=null))}if(n.F){const C=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(n.Da=C,S1(n.G,n.F,C))}}c.H=3,c.l&&c.l.Ba(),c.ca&&(c.S=Date.now()-t.G,c.j.info("Handshake RTT: "+c.S+"ms")),n=c;var i=t;if(n.wa=Lk(n,n.I?n.oa:null,n.Y),i.K){ok(n.h,i);var s=i,o=n.K;o&&s.setTimeout(o),s.B&&(vn(s),w7(s)),n.g=i}else Ck(n);0<c.i.length&&Mn(c)}else l[0]!="stop"&&l[0]!="close"||t0(c,7);else c.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?t0(c,7):kf(c):l[0]!="noop"&&c.l&&c.l.Aa(l),c.A=0)}}Re(4)}catch{}}function Mv1(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sn(t)){for(var e=[],c=t.length,n=0;n<c;n++)e.push(t[n]);return e}e=[],c=0;for(n in t)e[c++]=t[n];return e}function Vv1(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sn(t)||typeof t=="string"){var e=[];t=t.length;for(var c=0;c<t;c++)e.push(c);return e}e=[],c=0;for(const n in t)e[c++]=n;return e}}}function ek(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sn(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var c=Vv1(t),n=Mv1(t),a=n.length,r=0;r<a;r++)e.call(void 0,n[r],c&&c[r],t)}var tk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yv1(t,e){if(t){t=t.split("&");for(var c=0;c<t.length;c++){var n=t[c].indexOf("="),a=null;if(0<=n){var r=t[c].substring(0,n);a=t[c].substring(n+1)}else r=t[c];e(r,a?decodeURIComponent(a.replace(/\+/g," ")):"")}}}function s0(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof s0){this.h=e!==void 0?e:t.h,Uc(this,t.j),this.s=t.s,this.g=t.g,jc(this,t.m),this.l=t.l,e=t.i;var c=new Oe;c.i=e.i,e.g&&(c.g=new Map(e.g),c.h=e.h),dm(this,c),this.o=t.o}else t&&(c=String(t).match(tk))?(this.h=!!e,Uc(this,c[1]||"",!0),this.s=B5(c[2]||""),this.g=B5(c[3]||"",!0),jc(this,c[4]),this.l=B5(c[5]||"",!0),dm(this,c[6]||"",!0),this.o=B5(c[7]||"")):(this.h=!!e,this.i=new Oe(null,this.h))}s0.prototype.toString=function(){var t=[],e=this.j;e&&t.push(U5(e,mm,!0),":");var c=this.g;return(c||e=="file")&&(t.push("//"),(e=this.s)&&t.push(U5(e,mm,!0),"@"),t.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,c!=null&&t.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&t.push("/"),t.push(U5(c,c.charAt(0)=="/"?xv1:wv1,!0))),(c=this.i.toString())&&t.push("?",c),(c=this.o)&&t.push("#",U5(c,Sv1)),t.join("")};function A4(t){return new s0(t)}function Uc(t,e,c){t.j=c?B5(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dm(t,e,c){e instanceof Oe?(t.i=e,Nv1(t.i,t.h)):(c||(e=U5(e,bv1)),t.i=new Oe(e,t.h))}function S1(t,e,c){t.i.set(e,c)}function gn(t){return S1(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function B5(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function U5(t,e,c){return typeof t=="string"?(t=encodeURI(t).replace(e,Lv1),c&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lv1(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mm=/[#\/\?@]/g,wv1=/[#\?:]/g,xv1=/[#\?]/g,bv1=/[#\?@]/g,Sv1=/#/g;function Oe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function E6(t){t.g||(t.g=new Map,t.h=0,t.i&&yv1(t.i,function(e,c){t.add(decodeURIComponent(e.replace(/\+/g," ")),c)}))}_=Oe.prototype;_.add=function(t,e){E6(this),this.i=null,t=a5(this,t);var c=this.g.get(t);return c||this.g.set(t,c=[]),c.push(e),this.h+=1,this};function ck(t,e){E6(t),e=a5(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nk(t,e){return E6(t),e=a5(t,e),t.g.has(e)}_.forEach=function(t,e){E6(this),this.g.forEach(function(c,n){c.forEach(function(a){t.call(e,a,n,this)},this)},this)};_.sa=function(){E6(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),c=[];for(let n=0;n<e.length;n++){const a=t[n];for(let r=0;r<a.length;r++)c.push(e[n])}return c};_.Z=function(t){E6(this);let e=[];if(typeof t=="string")nk(this,t)&&(e=e.concat(this.g.get(a5(this,t))));else{t=Array.from(this.g.values());for(let c=0;c<t.length;c++)e=e.concat(t[c])}return e};_.set=function(t,e){return E6(this),this.i=null,t=a5(this,t),nk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};_.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ak(t,e,c){ck(t,e),0<c.length&&(t.i=null,t.g.set(a5(t,e),df(c)),t.h+=c.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var c=0;c<e.length;c++){var n=e[c];const r=encodeURIComponent(String(n)),i=this.Z(n);for(n=0;n<i.length;n++){var a=r;i[n]!==""&&(a+="="+encodeURIComponent(String(i[n]))),t.push(a)}}return this.i=t.join("&")};function a5(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Nv1(t,e){e&&!t.j&&(E6(t),t.i=null,t.g.forEach(function(c,n){var a=n.toLowerCase();n!=a&&(ck(this,n),ak(this,a,c))},t)),t.j=e}var kv1=class{constructor(t,e){this.h=t,this.g=e}};function rk(t){this.l=t||Av1,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Av1=10;function ik(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sk(t){return t.h?1:t.g?t.g.size:0}function os(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xf(t,e){t.g?t.g.add(e):t.h=e}function ok(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rk.prototype.cancel=function(){if(this.i=lk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lk(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const c of t.g.values())e=e.concat(c.F);return e}return df(t.i)}function bf(){}bf.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};bf.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function Tv1(){this.g=new bf}function Ev1(t,e,c){const n=c||"";try{ek(t,function(a,r){let i=a;H7(a)&&(i=Hf(a)),e.push(n+r+"="+encodeURIComponent(i))})}catch(a){throw e.push(n+"type="+encodeURIComponent("_badmap")),a}}function _v1(t,e){const c=new hn;if(Y.Image){const n=new Image;n.onload=Lt(xt,c,n,"TestLoadImage: loaded",!0,e),n.onerror=Lt(xt,c,n,"TestLoadImage: error",!1,e),n.onabort=Lt(xt,c,n,"TestLoadImage: abort",!1,e),n.ontimeout=Lt(xt,c,n,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=t}else e(!1)}function xt(t,e,c,n,a){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,a(n)}catch{}}function x7(t){this.l=t.fc||null,this.j=t.ob||!1}n2(x7,yf);x7.prototype.g=function(){return new zn(this.l,this.j)};x7.prototype.i=function(t){return function(){return t}}({});function zn(t,e){c2.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Sf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}n2(zn,c2);var Sf=0;_=zn.prototype;_.open=function(t,e){if(this.readyState!=Sf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fe(this)};_.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,b7(this)),this.readyState=Sf};_.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fk(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function fk(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}_.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?b7(this):Fe(this),this.readyState==3&&fk(this)}};_.Za=function(t){this.g&&(this.response=this.responseText=t,b7(this))};_.Ya=function(t){this.g&&(this.response=t,b7(this))};_.ka=function(){this.g&&b7(this)};function b7(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fe(t)}_.setRequestHeader=function(t,e){this.v.append(t,e)};_.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var c=e.next();!c.done;)c=c.value,t.push(c[0]+": "+c[1]),c=e.next();return t.join(`\r
`)};function Fe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Iv1=Y.JSON.parse;function D1(t){c2.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=uk,this.L=this.M=!1}n2(D1,c2);var uk="",Pv1=/^https?$/i,Dv1=["POST","PUT"];_=D1.prototype;_.Oa=function(t){this.M=t};_.ha=function(t,e,c,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():as.g(),this.C=this.u?hm(this.u):hm(as),this.g.onreadystatechange=y2(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){pm(this,r);return}if(t=c||"",c=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var a in n)c.set(a,n[a]);else if(typeof n.keys=="function"&&typeof n.get=="function")for(const r of n.keys())c.set(r,n.get(r));else throw Error("Unknown input type for opt_headers: "+String(n));n=Array.from(c.keys()).find(r=>r.toLowerCase()=="content-type"),a=Y.FormData&&t instanceof Y.FormData,!(0<=xN(Dv1,e))||n||a||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,i]of c)this.g.setRequestHeader(r,i);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mk(this),0<this.B&&((this.L=Rv1(this.g))?(this.g.timeout=this.B,this.g.ontimeout=y2(this.ua,this)):this.A=Vf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){pm(this,r)}};function Rv1(t){return U8&&tv1()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}_.ua=function(){typeof hf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,u2(this,"timeout"),this.abort(8))};function pm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hk(t),Cn(t)}function hk(t){t.F||(t.F=!0,u2(t,"complete"),u2(t,"error"))}_.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,u2(this,"complete"),u2(this,"abort"),Cn(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cn(this,!0)),D1.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?dk(this):this.kb())};_.kb=function(){dk(this)};function dk(t){if(t.h&&typeof hf<"u"&&(!t.C[1]||g4(t)!=4||t.da()!=2)){if(t.v&&g4(t)==4)Vf(t.La,0,t);else if(u2(t,"readystatechange"),g4(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var c;if(!(c=e)){var n;if(n=s===0){var a=String(t.I).match(tk)[1]||null;if(!a&&Y.self&&Y.self.location){var r=Y.self.location.protocol;a=r.substr(0,r.length-1)}n=!Pv1.test(a?a.toLowerCase():"")}c=n}if(c)u2(t,"complete"),u2(t,"success");else{t.m=6;try{var i=2<g4(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",hk(t)}}finally{Cn(t)}}}}function Cn(t,e){if(t.g){mk(t);const c=t.g,n=t.C[0]?Oc:null;t.g=null,t.C=null,e||u2(t,"ready");try{c.onreadystatechange=n}catch{}}}function mk(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function g4(t){return t.g?t.g.readyState:0}_.da=function(){try{return 2<g4(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Iv1(e)}};function vm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case uk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pk(t){let e="";return pf(t,function(c,n){e+=n,e+=":",e+=c,e+=`\r
`}),e}function Nf(t,e,c){e:{for(n in c){var n=!1;break e}n=!0}n||(c=pk(c),typeof t=="string"?c!=null&&encodeURIComponent(String(c)):S1(t,e,c))}function k5(t,e,c){return c&&c.internalChannelParams&&c.internalChannelParams[t]||e}function vk(t){this.Ga=0,this.i=[],this.j=new hn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=k5("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=k5("baseRetryDelayMs",5e3,t),this.hb=k5("retryDelaySeedMs",1e4,t),this.eb=k5("forwardChannelMaxRetries",2,t),this.xa=k5("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new rk(t&&t.concurrentRequestLimit),this.Ja=new Tv1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}_=vk.prototype;_.qa=8;_.H=1;function kf(t){if(gk(t),t.H==3){var e=t.W++,c=A4(t.G);S1(c,"SID",t.J),S1(c,"RID",e),S1(c,"TYPE","terminate"),S7(t,c),e=new L7(t,t.j,e,void 0),e.L=2,e.v=gn(A4(c)),c=!1,Y.navigator&&Y.navigator.sendBeacon&&(c=Y.navigator.sendBeacon(e.v.toString(),"")),!c&&Y.Image&&(new Image().src=e.v,c=!0),c||(e.g=wk(e.l,null),e.g.ha(e.v)),e.G=Date.now(),w7(e)}yk(t)}function Hn(t){t.g&&(Tf(t),t.g.cancel(),t.g=null)}function gk(t){Hn(t),t.u&&(Y.clearTimeout(t.u),t.u=null),qc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Mn(t){ik(t.h)||t.m||(t.m=!0,ON(t.Na,t),t.C=0)}function Ov1(t,e){return sk(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=V7(y2(t.Na,t,e),Vk(t,t.C)),t.C++,!0)}_.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const a=new L7(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=AN(r),TN(r,this.U)):r=this.U),this.o!==null||this.O||(a.I=r,r=null),this.P)e:{for(var e=0,c=0;c<this.i.length;c++){t:{var n=this.i[c];if("__data__"in n.g&&(n=n.g.__data__,typeof n=="string")){n=n.length;break t}n=void 0}if(n===void 0)break;if(e+=n,4096<e){e=c;break e}if(e===4096||c===this.i.length-1){e=c+1;break e}}e=1e3}else e=1e3;e=zk(this,a,e),c=A4(this.G),S1(c,"RID",t),S1(c,"CVER",22),this.F&&S1(c,"X-HTTP-Session-Id",this.F),S7(this,c),r&&(this.O?e="headers="+encodeURIComponent(String(pk(r)))+"&"+e:this.o&&Nf(c,this.o,r)),xf(this.h,a),this.bb&&S1(c,"TYPE","init"),this.P?(S1(c,"$req",e),S1(c,"SID","null"),a.ba=!0,is(a,c,null)):is(a,c,e),this.H=2}}else this.H==3&&(t?gm(this,t):this.i.length==0||ik(this.h)||gm(this))};function gm(t,e){var c;e?c=e.m:c=t.W++;const n=A4(t.G);S1(n,"SID",t.J),S1(n,"RID",c),S1(n,"AID",t.V),S7(t,n),t.o&&t.s&&Nf(n,t.o,t.s),c=new L7(t,t.j,c,t.C+1),t.o===null&&(c.I=t.s),e&&(t.i=e.F.concat(t.i)),e=zk(t,c,1e3),c.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xf(t.h,c),is(c,n,e)}function S7(t,e){t.ma&&pf(t.ma,function(c,n){S1(e,n,c)}),t.l&&ek({},function(c,n){S1(e,n,c)})}function zk(t,e,c){c=Math.min(t.i.length,c);var n=t.l?y2(t.l.Va,t.l,t):null;e:{var a=t.i;let r=-1;for(;;){const i=["count="+c];r==-1?0<c?(r=a[0].h,i.push("ofs="+r)):r=0:i.push("ofs="+r);let s=!0;for(let o=0;o<c;o++){let l=a[o].h;const f=a[o].g;if(l-=r,0>l)r=Math.max(0,a[o].h-100),s=!1;else try{Ev1(f,i,"req"+l+"_")}catch{n&&n(f)}}if(s){n=i.join("&");break e}}}return t=t.i.splice(0,c),e.F=t,n}function Ck(t){t.g||t.u||(t.ba=1,ON(t.Ma,t),t.A=0)}function Af(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=V7(y2(t.Ma,t),Vk(t,t.A)),t.A++,!0)}_.Ma=function(){if(this.u=null,Hk(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=V7(y2(this.jb,this),t)}};_.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,E2(10),Hn(this),Hk(this))};function Tf(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Hk(t){t.g=new L7(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=A4(t.wa);S1(e,"RID","rpc"),S1(e,"SID",t.J),S1(e,"CI",t.M?"0":"1"),S1(e,"AID",t.V),S1(e,"TYPE","xmlhttp"),S7(t,e),t.o&&t.s&&Nf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var c=t.g;t=t.oa,c.L=1,c.v=gn(A4(e)),c.s=null,c.S=!0,ZN(c,t)}_.ib=function(){this.v!=null&&(this.v=null,Hn(this),Af(this),E2(19))};function qc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Mk(t,e){var c=null;if(t.g==e){qc(t),Tf(t),t.g=null;var n=2}else if(os(t.h,e))c=e.F,ok(t.h,e),n=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(n==1){c=e.s?e.s.length:0,e=Date.now()-e.G;var a=t.C;n=dn(),u2(n,new WN(n,c)),Mn(t)}else Ck(t);else if(a=e.o,a==3||a==0&&0<t.ta||!(n==1&&Ov1(t,e)||n==2&&Af(t)))switch(c&&0<c.length&&(e=t.h,e.i=e.i.concat(c)),a){case 1:t0(t,5);break;case 4:t0(t,10);break;case 3:t0(t,6);break;default:t0(t,2)}}}function Vk(t,e){let c=t.ab+Math.floor(Math.random()*t.hb);return t.l||(c*=2),c*e}function t0(t,e){if(t.j.info("Error code "+e),e==2){var c=null;t.l&&(c=null);var n=y2(t.pb,t);c||(c=new s0("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Uc(c,"https"),gn(c)),_v1(c.toString(),n)}else E2(2);t.H=0,t.l&&t.l.za(e),yk(t),gk(t)}_.pb=function(t){t?(this.j.info("Successfully pinged google.com"),E2(2)):(this.j.info("Failed to ping google.com"),E2(1))};function yk(t){if(t.H=0,t.pa=[],t.l){const e=lk(t.h);(e.length!=0||t.i.length!=0)&&(im(t.pa,e),im(t.pa,t.i),t.h.i.length=0,df(t.i),t.i.length=0),t.l.ya()}}function Lk(t,e,c){var n=c instanceof s0?A4(c):new s0(c,void 0);if(n.g!="")e&&(n.g=e+"."+n.g),jc(n,n.m);else{var a=Y.location;n=a.protocol,e=e?e+"."+a.hostname:a.hostname,a=+a.port;var r=new s0(null,void 0);n&&Uc(r,n),e&&(r.g=e),a&&jc(r,a),c&&(r.l=c),n=r}return c=t.F,e=t.Da,c&&e&&S1(n,c,e),S1(n,"VER",t.qa),S7(t,n),n}function wk(t,e,c){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=c&&t.Ha&&!t.va?new D1(new x7({ob:!0})):new D1(t.va),e.Oa(t.I),e}function xk(){}_=xk.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.Va=function(){};function Wc(){if(U8&&!(10<=Number(cv1)))throw Error("Environmental error: no available transport.")}Wc.prototype.g=function(t,e){return new a3(t,e)};function a3(t,e){c2.call(this),this.g=new vk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new r5(this)}n2(a3,c2);a3.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,c=this.h||void 0;E2(0),t.Y=e,t.ma=c||{},t.M=t.aa,t.G=Lk(t,null,t.Y),Mn(t)};a3.prototype.close=function(){kf(this.g)};a3.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var c={};c.__data__=t,t=c}else this.v&&(c={},c.__data__=Hf(t),t=c);e.i.push(new kv1(e.fb++,t)),e.H==3&&Mn(e)};a3.prototype.N=function(){this.g.l=null,delete this.j,kf(this.g),delete this.g,a3.$.N.call(this)};function bk(t){Lf.call(this);var e=t.__sm__;if(e){e:{for(const c in e){t=c;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}n2(bk,Lf);function Sk(){wf.call(this),this.status=1}n2(Sk,wf);function r5(t){this.g=t}n2(r5,xk);r5.prototype.Ba=function(){u2(this.g,"a")};r5.prototype.Aa=function(t){u2(this.g,new bk(t))};r5.prototype.za=function(t){u2(this.g,new Sk)};r5.prototype.ya=function(){u2(this.g,"b")};function Fv1(){this.blockSize=-1}function R3(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}n2(R3,Fv1);R3.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sr(t,e,c){c||(c=0);var n=Array(16);if(typeof e=="string")for(var a=0;16>a;++a)n[a]=e.charCodeAt(c++)|e.charCodeAt(c++)<<8|e.charCodeAt(c++)<<16|e.charCodeAt(c++)<<24;else for(a=0;16>a;++a)n[a]=e[c++]|e[c++]<<8|e[c++]<<16|e[c++]<<24;e=t.g[0],c=t.g[1],a=t.g[2];var r=t.g[3],i=e+(r^c&(a^r))+n[0]+3614090360&4294967295;e=c+(i<<7&4294967295|i>>>25),i=r+(a^e&(c^a))+n[1]+3905402710&4294967295,r=e+(i<<12&4294967295|i>>>20),i=a+(c^r&(e^c))+n[2]+606105819&4294967295,a=r+(i<<17&4294967295|i>>>15),i=c+(e^a&(r^e))+n[3]+3250441966&4294967295,c=a+(i<<22&4294967295|i>>>10),i=e+(r^c&(a^r))+n[4]+4118548399&4294967295,e=c+(i<<7&4294967295|i>>>25),i=r+(a^e&(c^a))+n[5]+1200080426&4294967295,r=e+(i<<12&4294967295|i>>>20),i=a+(c^r&(e^c))+n[6]+2821735955&4294967295,a=r+(i<<17&4294967295|i>>>15),i=c+(e^a&(r^e))+n[7]+4249261313&4294967295,c=a+(i<<22&4294967295|i>>>10),i=e+(r^c&(a^r))+n[8]+1770035416&4294967295,e=c+(i<<7&4294967295|i>>>25),i=r+(a^e&(c^a))+n[9]+2336552879&4294967295,r=e+(i<<12&4294967295|i>>>20),i=a+(c^r&(e^c))+n[10]+4294925233&4294967295,a=r+(i<<17&4294967295|i>>>15),i=c+(e^a&(r^e))+n[11]+2304563134&4294967295,c=a+(i<<22&4294967295|i>>>10),i=e+(r^c&(a^r))+n[12]+1804603682&4294967295,e=c+(i<<7&4294967295|i>>>25),i=r+(a^e&(c^a))+n[13]+4254626195&4294967295,r=e+(i<<12&4294967295|i>>>20),i=a+(c^r&(e^c))+n[14]+2792965006&4294967295,a=r+(i<<17&4294967295|i>>>15),i=c+(e^a&(r^e))+n[15]+1236535329&4294967295,c=a+(i<<22&4294967295|i>>>10),i=e+(a^r&(c^a))+n[1]+4129170786&4294967295,e=c+(i<<5&4294967295|i>>>27),i=r+(c^a&(e^c))+n[6]+3225465664&4294967295,r=e+(i<<9&4294967295|i>>>23),i=a+(e^c&(r^e))+n[11]+643717713&4294967295,a=r+(i<<14&4294967295|i>>>18),i=c+(r^e&(a^r))+n[0]+3921069994&4294967295,c=a+(i<<20&4294967295|i>>>12),i=e+(a^r&(c^a))+n[5]+3593408605&4294967295,e=c+(i<<5&4294967295|i>>>27),i=r+(c^a&(e^c))+n[10]+38016083&4294967295,r=e+(i<<9&4294967295|i>>>23),i=a+(e^c&(r^e))+n[15]+3634488961&4294967295,a=r+(i<<14&4294967295|i>>>18),i=c+(r^e&(a^r))+n[4]+3889429448&4294967295,c=a+(i<<20&4294967295|i>>>12),i=e+(a^r&(c^a))+n[9]+568446438&4294967295,e=c+(i<<5&4294967295|i>>>27),i=r+(c^a&(e^c))+n[14]+3275163606&4294967295,r=e+(i<<9&4294967295|i>>>23),i=a+(e^c&(r^e))+n[3]+4107603335&4294967295,a=r+(i<<14&4294967295|i>>>18),i=c+(r^e&(a^r))+n[8]+1163531501&4294967295,c=a+(i<<20&4294967295|i>>>12),i=e+(a^r&(c^a))+n[13]+2850285829&4294967295,e=c+(i<<5&4294967295|i>>>27),i=r+(c^a&(e^c))+n[2]+4243563512&4294967295,r=e+(i<<9&4294967295|i>>>23),i=a+(e^c&(r^e))+n[7]+1735328473&4294967295,a=r+(i<<14&4294967295|i>>>18),i=c+(r^e&(a^r))+n[12]+2368359562&4294967295,c=a+(i<<20&4294967295|i>>>12),i=e+(c^a^r)+n[5]+4294588738&4294967295,e=c+(i<<4&4294967295|i>>>28),i=r+(e^c^a)+n[8]+2272392833&4294967295,r=e+(i<<11&4294967295|i>>>21),i=a+(r^e^c)+n[11]+1839030562&4294967295,a=r+(i<<16&4294967295|i>>>16),i=c+(a^r^e)+n[14]+4259657740&4294967295,c=a+(i<<23&4294967295|i>>>9),i=e+(c^a^r)+n[1]+2763975236&4294967295,e=c+(i<<4&4294967295|i>>>28),i=r+(e^c^a)+n[4]+1272893353&4294967295,r=e+(i<<11&4294967295|i>>>21),i=a+(r^e^c)+n[7]+4139469664&4294967295,a=r+(i<<16&4294967295|i>>>16),i=c+(a^r^e)+n[10]+3200236656&4294967295,c=a+(i<<23&4294967295|i>>>9),i=e+(c^a^r)+n[13]+681279174&4294967295,e=c+(i<<4&4294967295|i>>>28),i=r+(e^c^a)+n[0]+3936430074&4294967295,r=e+(i<<11&4294967295|i>>>21),i=a+(r^e^c)+n[3]+3572445317&4294967295,a=r+(i<<16&4294967295|i>>>16),i=c+(a^r^e)+n[6]+76029189&4294967295,c=a+(i<<23&4294967295|i>>>9),i=e+(c^a^r)+n[9]+3654602809&4294967295,e=c+(i<<4&4294967295|i>>>28),i=r+(e^c^a)+n[12]+3873151461&4294967295,r=e+(i<<11&4294967295|i>>>21),i=a+(r^e^c)+n[15]+530742520&4294967295,a=r+(i<<16&4294967295|i>>>16),i=c+(a^r^e)+n[2]+3299628645&4294967295,c=a+(i<<23&4294967295|i>>>9),i=e+(a^(c|~r))+n[0]+4096336452&4294967295,e=c+(i<<6&4294967295|i>>>26),i=r+(c^(e|~a))+n[7]+1126891415&4294967295,r=e+(i<<10&4294967295|i>>>22),i=a+(e^(r|~c))+n[14]+2878612391&4294967295,a=r+(i<<15&4294967295|i>>>17),i=c+(r^(a|~e))+n[5]+4237533241&4294967295,c=a+(i<<21&4294967295|i>>>11),i=e+(a^(c|~r))+n[12]+1700485571&4294967295,e=c+(i<<6&4294967295|i>>>26),i=r+(c^(e|~a))+n[3]+2399980690&4294967295,r=e+(i<<10&4294967295|i>>>22),i=a+(e^(r|~c))+n[10]+4293915773&4294967295,a=r+(i<<15&4294967295|i>>>17),i=c+(r^(a|~e))+n[1]+2240044497&4294967295,c=a+(i<<21&4294967295|i>>>11),i=e+(a^(c|~r))+n[8]+1873313359&4294967295,e=c+(i<<6&4294967295|i>>>26),i=r+(c^(e|~a))+n[15]+4264355552&4294967295,r=e+(i<<10&4294967295|i>>>22),i=a+(e^(r|~c))+n[6]+2734768916&4294967295,a=r+(i<<15&4294967295|i>>>17),i=c+(r^(a|~e))+n[13]+1309151649&4294967295,c=a+(i<<21&4294967295|i>>>11),i=e+(a^(c|~r))+n[4]+4149444226&4294967295,e=c+(i<<6&4294967295|i>>>26),i=r+(c^(e|~a))+n[11]+3174756917&4294967295,r=e+(i<<10&4294967295|i>>>22),i=a+(e^(r|~c))+n[2]+718787259&4294967295,a=r+(i<<15&4294967295|i>>>17),i=c+(r^(a|~e))+n[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(a+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+a&4294967295,t.g[3]=t.g[3]+r&4294967295}R3.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var c=e-this.blockSize,n=this.m,a=this.h,r=0;r<e;){if(a==0)for(;r<=c;)sr(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(n[a++]=t.charCodeAt(r++),a==this.blockSize){sr(this,n),a=0;break}}else for(;r<e;)if(n[a++]=t[r++],a==this.blockSize){sr(this,n),a=0;break}}this.h=a,this.i+=e};R3.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var c=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=c&255,c/=256;for(this.j(t),t=Array(16),e=c=0;4>e;++e)for(var n=0;32>n;n+=8)t[c++]=this.g[e]>>>n&255;return t};function m1(t,e){this.h=e;for(var c=[],n=!0,a=t.length-1;0<=a;a--){var r=t[a]|0;n&&r==e||(c[a]=r,n=!1)}this.g=c}var $v1={};function Ef(t){return-128<=t&&128>t?bN($v1,t,function(e){return new m1([e|0],0>e?-1:0)}):new m1([t|0],0>t?-1:0)}function Z3(t){if(isNaN(t)||!isFinite(t))return x8;if(0>t)return l2(Z3(-t));for(var e=[],c=1,n=0;t>=c;n++)e[n]=t/c|0,c*=ls;return new m1(e,0)}function Nk(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return l2(Nk(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=Z3(Math.pow(e,8)),n=x8,a=0;a<t.length;a+=8){var r=Math.min(8,t.length-a),i=parseInt(t.substring(a,a+r),e);8>r?(r=Z3(Math.pow(e,r)),n=n.R(r).add(Z3(i))):(n=n.R(c),n=n.add(Z3(i)))}return n}var ls=4294967296,x8=Ef(0),fs=Ef(1),zm=Ef(16777216);_=m1.prototype;_.ea=function(){if(p3(this))return-l2(this).ea();for(var t=0,e=1,c=0;c<this.g.length;c++){var n=this.D(c);t+=(0<=n?n:ls+n)*e,e*=ls}return t};_.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(z4(this))return"0";if(p3(this))return"-"+l2(this).toString(t);for(var e=Z3(Math.pow(t,6)),c=this,n="";;){var a=Kc(c,e).g;c=Gc(c,a.R(e));var r=((0<c.g.length?c.g[0]:c.h)>>>0).toString(t);if(c=a,z4(c))return r+n;for(;6>r.length;)r="0"+r;n=r+n}};_.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function z4(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function p3(t){return t.h==-1}_.X=function(t){return t=Gc(this,t),p3(t)?-1:z4(t)?0:1};function l2(t){for(var e=t.g.length,c=[],n=0;n<e;n++)c[n]=~t.g[n];return new m1(c,~t.h).add(fs)}_.abs=function(){return p3(this)?l2(this):this};_.add=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],n=0,a=0;a<=e;a++){var r=n+(this.D(a)&65535)+(t.D(a)&65535),i=(r>>>16)+(this.D(a)>>>16)+(t.D(a)>>>16);n=i>>>16,r&=65535,i&=65535,c[a]=i<<16|r}return new m1(c,c[c.length-1]&-2147483648?-1:0)};function Gc(t,e){return t.add(l2(e))}_.R=function(t){if(z4(this)||z4(t))return x8;if(p3(this))return p3(t)?l2(this).R(l2(t)):l2(l2(this).R(t));if(p3(t))return l2(this.R(l2(t)));if(0>this.X(zm)&&0>t.X(zm))return Z3(this.ea()*t.ea());for(var e=this.g.length+t.g.length,c=[],n=0;n<2*e;n++)c[n]=0;for(n=0;n<this.g.length;n++)for(var a=0;a<t.g.length;a++){var r=this.D(n)>>>16,i=this.D(n)&65535,s=t.D(a)>>>16,o=t.D(a)&65535;c[2*n+2*a]+=i*o,bt(c,2*n+2*a),c[2*n+2*a+1]+=r*o,bt(c,2*n+2*a+1),c[2*n+2*a+1]+=i*s,bt(c,2*n+2*a+1),c[2*n+2*a+2]+=r*s,bt(c,2*n+2*a+2)}for(n=0;n<e;n++)c[n]=c[2*n+1]<<16|c[2*n];for(n=e;n<2*e;n++)c[n]=0;return new m1(c,0)};function bt(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function A5(t,e){this.g=t,this.h=e}function Kc(t,e){if(z4(e))throw Error("division by zero");if(z4(t))return new A5(x8,x8);if(p3(t))return e=Kc(l2(t),e),new A5(l2(e.g),l2(e.h));if(p3(e))return e=Kc(t,l2(e)),new A5(l2(e.g),e.h);if(30<t.g.length){if(p3(t)||p3(e))throw Error("slowDivide_ only works with positive integers.");for(var c=fs,n=e;0>=n.X(t);)c=Cm(c),n=Cm(n);var a=K0(c,1),r=K0(n,1);for(n=K0(n,2),c=K0(c,2);!z4(n);){var i=r.add(n);0>=i.X(t)&&(a=a.add(c),r=i),n=K0(n,1),c=K0(c,1)}return e=Gc(t,a.R(e)),new A5(a,e)}for(a=x8;0<=t.X(e);){for(c=Math.max(1,Math.floor(t.ea()/e.ea())),n=Math.ceil(Math.log(c)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),r=Z3(c),i=r.R(e);p3(i)||0<i.X(t);)c-=n,r=Z3(c),i=r.R(e);z4(r)&&(r=fs),a=a.add(r),t=Gc(t,i)}return new A5(a,t)}_.gb=function(t){return Kc(this,t).h};_.and=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],n=0;n<e;n++)c[n]=this.D(n)&t.D(n);return new m1(c,this.h&t.h)};_.or=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],n=0;n<e;n++)c[n]=this.D(n)|t.D(n);return new m1(c,this.h|t.h)};_.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],n=0;n<e;n++)c[n]=this.D(n)^t.D(n);return new m1(c,this.h^t.h)};function Cm(t){for(var e=t.g.length+1,c=[],n=0;n<e;n++)c[n]=t.D(n)<<1|t.D(n-1)>>>31;return new m1(c,t.h)}function K0(t,e){var c=e>>5;e%=32;for(var n=t.g.length-c,a=[],r=0;r<n;r++)a[r]=0<e?t.D(r+c)>>>e|t.D(r+c+1)<<32-e:t.D(r+c);return new m1(a,t.h)}Wc.prototype.createWebChannel=Wc.prototype.g;a3.prototype.send=a3.prototype.u;a3.prototype.open=a3.prototype.m;a3.prototype.close=a3.prototype.close;mn.NO_ERROR=0;mn.TIMEOUT=8;mn.HTTP_ERROR=6;GN.COMPLETE="complete";KN.EventType=y7;y7.OPEN="a";y7.CLOSE="b";y7.ERROR="c";y7.MESSAGE="d";c2.prototype.listen=c2.prototype.O;D1.prototype.listenOnce=D1.prototype.P;D1.prototype.getLastError=D1.prototype.Sa;D1.prototype.getLastErrorCode=D1.prototype.Ia;D1.prototype.getStatus=D1.prototype.da;D1.prototype.getResponseJson=D1.prototype.Wa;D1.prototype.getResponseText=D1.prototype.ja;D1.prototype.send=D1.prototype.ha;D1.prototype.setWithCredentials=D1.prototype.Oa;R3.prototype.digest=R3.prototype.l;R3.prototype.reset=R3.prototype.reset;R3.prototype.update=R3.prototype.j;m1.prototype.add=m1.prototype.add;m1.prototype.multiply=m1.prototype.R;m1.prototype.modulo=m1.prototype.gb;m1.prototype.compare=m1.prototype.X;m1.prototype.toNumber=m1.prototype.ea;m1.prototype.toString=m1.prototype.toString;m1.prototype.getBits=m1.prototype.D;m1.fromNumber=Z3;m1.fromString=Nk;var Bv1=function(){return new Wc},Uv1=function(){return dn()},or=mn,jv1=GN,qv1=P0,Hm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wv1=x7,St=KN,Gv1=D1,Kv1=R3,b8=m1;const Mm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z2.UNAUTHENTICATED=new z2(null),z2.GOOGLE_CREDENTIALS=new z2("google-credentials-uid"),z2.FIRST_PARTY=new z2("first-party-uid"),z2.MOCK_USER=new z2("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i5="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new ff("@firebase/firestore");function Vm(){return H0.logLevel}function $(t,...e){if(H0.logLevel<=o1.DEBUG){const c=e.map(_f);H0.debug(`Firestore (${i5}): ${t}`,...c)}}function T4(t,...e){if(H0.logLevel<=o1.ERROR){const c=e.map(_f);H0.error(`Firestore (${i5}): ${t}`,...c)}}function j8(t,...e){if(H0.logLevel<=o1.WARN){const c=e.map(_f);H0.warn(`Firestore (${i5}): ${t}`,...c)}}function _f(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${i5}) INTERNAL ASSERTION FAILED: `+t;throw T4(e),new Error(e)}function w1(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends B3{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m6{constructor(){this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yv1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable(()=>c(z2.UNAUTHENTICATED))}shutdown(){}}class Zv1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable(()=>c(this.token.user))}shutdown(){this.changeListener=null}}let Qv1=class{constructor(e){this.t=e,this.currentUser=z2.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,c){let n=this.i;const a=o=>this.i!==n?(n=this.i,c(o)):Promise.resolve();let r=new m6;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new m6,e.enqueueRetryable(()=>a(this.currentUser))};const i=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await a(this.currentUser)})},s=o=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(o=>s(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?s(o):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new m6)}},0),i()}getToken(){const e=this.i,c=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(c).then(n=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(w1(typeof n.accessToken=="string"),new kk(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return w1(e===null||typeof e=="string"),new z2(e)}};class Xv1{constructor(e,c,n){this.h=e,this.l=c,this.m=n,this.type="FirstParty",this.user=z2.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Jv1{constructor(e,c,n){this.h=e,this.l=c,this.m=n}getToken(){return Promise.resolve(new Xv1(this.h,this.l,this.m))}start(e,c){e.enqueueRetryable(()=>c(z2.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eg1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tg1{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,c){const n=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const i=r.token!==this.T;return this.T=r.token,$("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?c(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>n(r))};const a=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>a(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?a(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(c=>c?(w1(typeof c.token=="string"),this.T=c.token,new eg1(c.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),c=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(c);else for(let n=0;n<t;n++)c[n]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const a=cg1(40);for(let r=0;r<a.length;++r)n.length<20&&a[r]<c&&(n+=e.charAt(a[r]%e.length))}return n}}function l1(t,e){return t<e?-1:t>e?1:0}function q8(t,e,c){return t.length===e.length&&t.every((n,a)=>c(n,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new R(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new R(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new R(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return G1.fromMillis(Date.now())}static fromDate(e){return G1.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*c));return new G1(c,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?l1(this.nanoseconds,e.nanoseconds):l1(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new G1(0,0))}static max(){return new Q(new G1(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,c,n){c===void 0?c=0:c>e.length&&G(),n===void 0?n=e.length-c:n>e.length-c&&G(),this.segments=e,this.offset=c,this.len=n}get length(){return this.len}isEqual(e){return $e.comparator(this,e)===0}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof $e?e.forEach(n=>{c.push(n)}):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,n=this.limit();c<n;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const n=Math.min(e.length,c.length);for(let a=0;a<n;a++){const r=e.get(a),i=c.get(a);if(r<i)return-1;if(r>i)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class M1 extends $e{construct(e,c,n){return new M1(e,c,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const n of e){if(n.indexOf("//")>=0)throw new R(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);c.push(...n.split("/").filter(a=>a.length>0))}return new M1(c)}static emptyPath(){return new M1([])}}const ng1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class M2 extends $e{construct(e,c,n){return new M2(e,c,n)}static isValidIdentifier(e){return ng1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),M2.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new M2(["__name__"])}static fromServerFormat(e){const c=[];let n="",a=0;const r=()=>{if(n.length===0)throw new R(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(n),n=""};let i=!1;for(;a<e.length;){const s=e[a];if(s==="\\"){if(a+1===e.length)throw new R(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[a+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new R(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=o,a+=2}else s==="`"?(i=!i,a++):s!=="."||i?(n+=s,a++):(r(),a++)}if(r(),i)throw new R(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new M2(c)}static emptyPath(){return new M2([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(M1.fromString(e))}static fromName(e){return new U(M1.fromString(e).popFirst(5))}static empty(){return new U(M1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M1.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,c){return M1.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new M1(e.slice()))}}function ag1(t,e){const c=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,a=Q.fromTimestamp(n===1e9?new G1(c+1,0):new G1(c,n));return new y6(a,U.empty(),e)}function rg1(t){return new y6(t.readTime,t.key,-1)}class y6{constructor(e,c,n){this.readTime=e,this.documentKey=c,this.largestBatchId=n}static min(){return new y6(Q.min(),U.empty(),-1)}static max(){return new y6(Q.max(),U.empty(),-1)}}function ig1(t,e){let c=t.readTime.compareTo(e.readTime);return c!==0?c:(c=U.comparator(t.documentKey,e.documentKey),c!==0?c:l1(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class og1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N7(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==sg1)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(c=>{this.isDone=!0,this.result=c,this.nextCallback&&this.nextCallback(c)},c=>{this.isDone=!0,this.error=c,this.catchCallback&&this.catchCallback(c)})}catch(e){return this.next(void 0,e)}next(e,c){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(c,this.error):this.wrapSuccess(e,this.result):new N((n,a)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(n,a)},this.catchCallback=r=>{this.wrapFailure(c,r).next(n,a)}})}toPromise(){return new Promise((e,c)=>{this.next(e,c)})}wrapUserFunction(e){try{const c=e();return c instanceof N?c:N.resolve(c)}catch(c){return N.reject(c)}}wrapSuccess(e,c){return e?this.wrapUserFunction(()=>e(c)):N.resolve(c)}wrapFailure(e,c){return e?this.wrapUserFunction(()=>e(c)):N.reject(c)}static resolve(e){return new N((c,n)=>{c(e)})}static reject(e){return new N((c,n)=>{n(e)})}static waitFor(e){return new N((c,n)=>{let a=0,r=0,i=!1;e.forEach(s=>{++a,s.next(()=>{++r,i&&r===a&&c()},o=>n(o))}),i=!0,r===a&&c()})}static or(e){let c=N.resolve(!1);for(const n of e)c=c.next(a=>a?N.resolve(a):n());return c}static forEach(e,c){const n=[];return e.forEach((a,r)=>{n.push(c.call(this,a,r))}),this.waitFor(n)}static mapArray(e,c){return new N((n,a)=>{const r=e.length,i=new Array(r);let s=0;for(let o=0;o<r;o++){const l=o;c(e[l]).next(f=>{i[l]=f,++s,s===r&&n(i)},f=>a(f))}})}static doWhile(e,c){return new N((n,a)=>{const r=()=>{e()===!0?c().next(()=>{r()},a):n()};r()})}}function k7(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,c){this.previousValue=e,c&&(c.sequenceNumberHandler=n=>this.ot(n),this.ut=n=>c.writeSequenceNumber(n))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}If.ct=-1;function Vn(t){return t==null}function Yc(t){return t===0&&1/t==-1/0}function lg1(t){return typeof t=="number"&&Number.isInteger(t)&&!Yc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){let e=0;for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e++;return e}function D0(t,e){for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e(c,t[c])}function Tk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,c){this.comparator=e,this.root=c||o2.EMPTY}insert(e,c){return new T1(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,o2.BLACK,null,null))}remove(e){return new T1(this.comparator,this.root.remove(e,this.comparator).copy(null,null,o2.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const n=this.comparator(e,c.key);if(n===0)return c.value;n<0?c=c.left:n>0&&(c=c.right)}return null}indexOf(e){let c=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return c+n.left.size;a<0?n=n.left:(c+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((c,n)=>(e(c,n),!1))}toString(){const e=[];return this.inorderTraversal((c,n)=>(e.push(`${c}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nt(this.root,e,this.comparator,!0)}}class Nt{constructor(e,c,n,a){this.isReverse=a,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=c?n(e.key,c):1,c&&a&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class o2{constructor(e,c,n,a,r){this.key=e,this.value=c,this.color=n??o2.RED,this.left=a??o2.EMPTY,this.right=r??o2.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,n,a,r){return new o2(e??this.key,c??this.value,n??this.color,a??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,n){let a=this;const r=n(e,a.key);return a=r<0?a.copy(null,null,null,a.left.insert(e,c,n),null):r===0?a.copy(null,c,null,null,null):a.copy(null,null,null,null,a.right.insert(e,c,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return o2.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let n,a=this;if(c(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,c),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),c(e,a.key)===0){if(a.right.isEmpty())return o2.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,c))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,o2.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,o2.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}o2.EMPTY=null,o2.RED=!0,o2.BLACK=!1;o2.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,c,n,a){return this}insert(t,e,c){return new o2(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.comparator=e,this.data=new T1(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((c,n)=>(e(c),!1))}forEachInRange(e,c){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;c(a.key)}}forEachWhile(e,c){let n;for(n=c!==void 0?this.data.getIteratorFrom(c):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new Lm(this.data.getIterator())}getIteratorFrom(e){return new Lm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach(n=>{c=c.add(n)}),c}isEqual(e){if(!(e instanceof w2)||this.size!==e.size)return!1;const c=this.data.getIterator(),n=e.data.getIterator();for(;c.hasNext();){const a=c.getNext().key,r=n.getNext().key;if(this.comparator(a,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(c=>{e.push(c)}),e}toString(){const e=[];return this.forEach(c=>e.push(c)),"SortedSet("+e.toString()+")"}copy(e){const c=new w2(this.comparator);return c.data=e,c}}class Lm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.fields=e,e.sort(M2.comparator)}static empty(){return new Q2([])}unionWith(e){let c=new w2(M2.comparator);for(const n of this.fields)c=c.add(n);for(const n of e)c=c.add(n);return new Q2(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return q8(this.fields,e.fields,(c,n)=>c.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(n){try{return atob(n)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Ek("Invalid base64 string: "+a):a}}(e);return new S2(c)}static fromUint8Array(e){const c=function(n){let a="";for(let r=0;r<n.length;++r)a+=String.fromCharCode(n[r]);return a}(e);return new S2(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const c=new Uint8Array(e.length);for(let n=0;n<e.length;n++)c[n]=e.charCodeAt(n);return c}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return l1(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}S2.EMPTY_BYTE_STRING=new S2("");const fg1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function L6(t){if(w1(!!t),typeof t=="string"){let e=0;const c=fg1.exec(t);if(w1(!!c),c[1]){let a=c[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:$1(t.seconds),nanos:$1(t.nanos)}}function $1(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function M0(t){return typeof t=="string"?S2.fromBase64String(t):S2.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){var e,c;return((c=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||c===void 0?void 0:c.stringValue)==="server_timestamp"}function Df(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?Df(e):e}function Be(t){const e=L6(t.mapValue.fields.__local_write_time__.timestampValue);return new G1(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug1{constructor(e,c,n,a,r,i,s,o,l){this.databaseId=e,this.appId=c,this.persistenceKey=n,this.host=a,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.longPollingOptions=o,this.useFetchStreams=l}}class Ue{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ue&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function V0(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:hg1(t)?9007199254740991:10:G()}function n4(t,e){if(t===e)return!0;const c=V0(t);if(c!==V0(e))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Be(t).isEqual(Be(e));case 3:return function(n,a){if(typeof n.timestampValue=="string"&&typeof a.timestampValue=="string"&&n.timestampValue.length===a.timestampValue.length)return n.timestampValue===a.timestampValue;const r=L6(n.timestampValue),i=L6(a.timestampValue);return r.seconds===i.seconds&&r.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,a){return M0(n.bytesValue).isEqual(M0(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,a){return $1(n.geoPointValue.latitude)===$1(a.geoPointValue.latitude)&&$1(n.geoPointValue.longitude)===$1(a.geoPointValue.longitude)}(t,e);case 2:return function(n,a){if("integerValue"in n&&"integerValue"in a)return $1(n.integerValue)===$1(a.integerValue);if("doubleValue"in n&&"doubleValue"in a){const r=$1(n.doubleValue),i=$1(a.doubleValue);return r===i?Yc(r)===Yc(i):isNaN(r)&&isNaN(i)}return!1}(t,e);case 9:return q8(t.arrayValue.values||[],e.arrayValue.values||[],n4);case 10:return function(n,a){const r=n.mapValue.fields||{},i=a.mapValue.fields||{};if(ym(r)!==ym(i))return!1;for(const s in r)if(r.hasOwnProperty(s)&&(i[s]===void 0||!n4(r[s],i[s])))return!1;return!0}(t,e);default:return G()}}function je(t,e){return(t.values||[]).find(c=>n4(c,e))!==void 0}function W8(t,e){if(t===e)return 0;const c=V0(t),n=V0(e);if(c!==n)return l1(c,n);switch(c){case 0:case 9007199254740991:return 0;case 1:return l1(t.booleanValue,e.booleanValue);case 2:return function(a,r){const i=$1(a.integerValue||a.doubleValue),s=$1(r.integerValue||r.doubleValue);return i<s?-1:i>s?1:i===s?0:isNaN(i)?isNaN(s)?0:-1:1}(t,e);case 3:return wm(t.timestampValue,e.timestampValue);case 4:return wm(Be(t),Be(e));case 5:return l1(t.stringValue,e.stringValue);case 6:return function(a,r){const i=M0(a),s=M0(r);return i.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(a,r){const i=a.split("/"),s=r.split("/");for(let o=0;o<i.length&&o<s.length;o++){const l=l1(i[o],s[o]);if(l!==0)return l}return l1(i.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,r){const i=l1($1(a.latitude),$1(r.latitude));return i!==0?i:l1($1(a.longitude),$1(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(a,r){const i=a.values||[],s=r.values||[];for(let o=0;o<i.length&&o<s.length;++o){const l=W8(i[o],s[o]);if(l)return l}return l1(i.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(a,r){if(a===kt.mapValue&&r===kt.mapValue)return 0;if(a===kt.mapValue)return 1;if(r===kt.mapValue)return-1;const i=a.fields||{},s=Object.keys(i),o=r.fields||{},l=Object.keys(o);s.sort(),l.sort();for(let f=0;f<s.length&&f<l.length;++f){const u=l1(s[f],l[f]);if(u!==0)return u;const h=W8(i[s[f]],o[l[f]]);if(h!==0)return h}return l1(s.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function wm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return l1(t,e);const c=L6(t),n=L6(e),a=l1(c.seconds,n.seconds);return a!==0?a:l1(c.nanos,n.nanos)}function G8(t){return us(t)}function us(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const a=L6(n);return`time(${a.seconds},${a.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?M0(t.bytesValue).toBase64():"referenceValue"in t?(c=t.referenceValue,U.fromName(c).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(n){let a="[",r=!0;for(const i of n.values||[])r?r=!1:a+=",",a+=us(i);return a+"]"}(t.arrayValue):"mapValue"in t?function(n){const a=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const s of a)i?i=!1:r+=",",r+=`${s}:${us(n.fields[s])}`;return r+"}"}(t.mapValue):G();var e,c}function xm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function hs(t){return!!t&&"integerValue"in t}function Rf(t){return!!t&&"arrayValue"in t}function bm(t){return!!t&&"nullValue"in t}function Sm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jt(t){return!!t&&"mapValue"in t}function ae(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return D0(t.mapValue.fields,(c,n)=>e.mapValue.fields[c]=ae(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let c=0;c<(t.arrayValue.values||[]).length;++c)e.arrayValue.values[c]=ae(t.arrayValue.values[c]);return e}return Object.assign({},t)}function hg1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.value=e}static empty(){return new $2({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let n=0;n<e.length-1;++n)if(c=(c.mapValue.fields||{})[e.get(n)],!Jt(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=ae(c)}setAll(e){let c=M2.emptyPath(),n={},a=[];e.forEach((i,s)=>{if(!c.isImmediateParentOf(s)){const o=this.getFieldsMap(c);this.applyChanges(o,n,a),n={},a=[],c=s.popLast()}i?n[s.lastSegment()]=ae(i):a.push(s.lastSegment())});const r=this.getFieldsMap(c);this.applyChanges(r,n,a)}delete(e){const c=this.field(e.popLast());Jt(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return n4(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=c.mapValue.fields[e.get(n)];Jt(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},c.mapValue.fields[e.get(n)]=a),c=a}return c.mapValue.fields}applyChanges(e,c,n){D0(c,(a,r)=>e[a]=r);for(const a of n)delete e[a]}clone(){return new $2(ae(this.value))}}function _k(t){const e=[];return D0(t.fields,(c,n)=>{const a=new M2([c]);if(Jt(n)){const r=_k(n.mapValue).fields;if(r.length===0)e.push(a);else for(const i of r)e.push(a.child(i))}else e.push(a)}),new Q2(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,c,n,a,r,i,s){this.key=e,this.documentType=c,this.version=n,this.readTime=a,this.createTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new H2(e,0,Q.min(),Q.min(),Q.min(),$2.empty(),0)}static newFoundDocument(e,c,n,a){return new H2(e,1,c,Q.min(),n,a,0)}static newNoDocument(e,c){return new H2(e,2,c,Q.min(),Q.min(),$2.empty(),0)}static newUnknownDocument(e,c){return new H2(e,3,c,Q.min(),Q.min(),$2.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$2.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H2&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H2(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,c){this.position=e,this.inclusive=c}}function Nm(t,e,c){let n=0;for(let a=0;a<t.position.length;a++){const r=e[a],i=t.position[a];if(r.field.isKeyField()?n=U.comparator(U.fromName(i.referenceValue),c.key):n=W8(i,c.data.field(r.field)),r.dir==="desc"&&(n*=-1),n!==0)break}return n}function km(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let c=0;c<t.position.length;c++)if(!n4(t.position[c],e.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,c="asc"){this.field=e,this.dir=c}}function dg1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{}class U1 extends Ik{constructor(e,c,n){super(),this.field=e,this.op=c,this.value=n}static create(e,c,n){return e.isKeyField()?c==="in"||c==="not-in"?this.createKeyFieldInFilter(e,c,n):new pg1(e,c,n):c==="array-contains"?new zg1(e,n):c==="in"?new Cg1(e,n):c==="not-in"?new Hg1(e,n):c==="array-contains-any"?new Mg1(e,n):new U1(e,c,n)}static createKeyFieldInFilter(e,c,n){return c==="in"?new vg1(e,n):new gg1(e,n)}matches(e){const c=e.data.field(this.field);return this.op==="!="?c!==null&&this.matchesComparison(W8(c,this.value)):c!==null&&V0(this.value)===V0(c)&&this.matchesComparison(W8(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class O3 extends Ik{constructor(e,c){super(),this.filters=e,this.op=c,this.lt=null}static create(e,c){return new O3(e,c)}matches(e){return Pk(this)?this.filters.find(c=>!c.matches(e))===void 0:this.filters.find(c=>c.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,c)=>e.concat(c.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(c=>c.isInequality());return e!==null?e.field:null}ft(e){for(const c of this.getFlattenedFilters())if(e(c))return c;return null}}function Pk(t){return t.op==="and"}function Dk(t){return mg1(t)&&Pk(t)}function mg1(t){for(const e of t.filters)if(e instanceof O3)return!1;return!0}function ds(t){if(t instanceof U1)return t.field.canonicalString()+t.op.toString()+G8(t.value);if(Dk(t))return t.filters.map(e=>ds(e)).join(",");{const e=t.filters.map(c=>ds(c)).join(",");return`${t.op}(${e})`}}function Rk(t,e){return t instanceof U1?function(c,n){return n instanceof U1&&c.op===n.op&&c.field.isEqual(n.field)&&n4(c.value,n.value)}(t,e):t instanceof O3?function(c,n){return n instanceof O3&&c.op===n.op&&c.filters.length===n.filters.length?c.filters.reduce((a,r,i)=>a&&Rk(r,n.filters[i]),!0):!1}(t,e):void G()}function Ok(t){return t instanceof U1?function(e){return`${e.field.canonicalString()} ${e.op} ${G8(e.value)}`}(t):t instanceof O3?function(e){return e.op.toString()+" {"+e.getFilters().map(Ok).join(" ,")+"}"}(t):"Filter"}class pg1 extends U1{constructor(e,c,n){super(e,c,n),this.key=U.fromName(n.referenceValue)}matches(e){const c=U.comparator(e.key,this.key);return this.matchesComparison(c)}}class vg1 extends U1{constructor(e,c){super(e,"in",c),this.keys=Fk("in",c)}matches(e){return this.keys.some(c=>c.isEqual(e.key))}}class gg1 extends U1{constructor(e,c){super(e,"not-in",c),this.keys=Fk("not-in",c)}matches(e){return!this.keys.some(c=>c.isEqual(e.key))}}function Fk(t,e){var c;return(((c=e.arrayValue)===null||c===void 0?void 0:c.values)||[]).map(n=>U.fromName(n.referenceValue))}class zg1 extends U1{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return Rf(c)&&je(c.arrayValue,this.value)}}class Cg1 extends U1{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return c!==null&&je(this.value.arrayValue,c)}}class Hg1 extends U1{constructor(e,c){super(e,"not-in",c)}matches(e){if(je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return c!==null&&!je(this.value.arrayValue,c)}}class Mg1 extends U1{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!Rf(c)||!c.arrayValue.values)&&c.arrayValue.values.some(n=>je(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg1{constructor(e,c=null,n=[],a=[],r=null,i=null,s=null){this.path=e,this.collectionGroup=c,this.orderBy=n,this.filters=a,this.limit=r,this.startAt=i,this.endAt=s,this.dt=null}}function Am(t,e=null,c=[],n=[],a=null,r=null,i=null){return new Vg1(t,e,c,n,a,r,i)}function Of(t){const e=X(t);if(e.dt===null){let c=e.path.canonicalString();e.collectionGroup!==null&&(c+="|cg:"+e.collectionGroup),c+="|f:",c+=e.filters.map(n=>ds(n)).join(","),c+="|ob:",c+=e.orderBy.map(n=>function(a){return a.field.canonicalString()+a.dir}(n)).join(","),Vn(e.limit)||(c+="|l:",c+=e.limit),e.startAt&&(c+="|lb:",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(n=>G8(n)).join(",")),e.endAt&&(c+="|ub:",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(n=>G8(n)).join(",")),e.dt=c}return e.dt}function Ff(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let c=0;c<t.orderBy.length;c++)if(!dg1(t.orderBy[c],e.orderBy[c]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let c=0;c<t.filters.length;c++)if(!Rk(t.filters[c],e.filters[c]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!km(t.startAt,e.startAt)&&km(t.endAt,e.endAt)}function ms(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A7{constructor(e,c=null,n=[],a=[],r=null,i="F",s=null,o=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=n,this.filters=a,this.limit=r,this.limitType=i,this.startAt=s,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function yg1(t,e,c,n,a,r,i,s){return new A7(t,e,c,n,a,r,i,s)}function $k(t){return new A7(t)}function Tm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $f(t){for(const e of t.filters){const c=e.getFirstInequalityField();if(c!==null)return c}return null}function Uk(t){return t.collectionGroup!==null}function S8(t){const e=X(t);if(e.wt===null){e.wt=[];const c=$f(e),n=Bk(e);if(c!==null&&n===null)c.isKeyField()||e.wt.push(new re(c)),e.wt.push(new re(M2.keyField(),"asc"));else{let a=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(a=!0);if(!a){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new re(M2.keyField(),r))}}}return e.wt}function E4(t){const e=X(t);if(!e._t)if(e.limitType==="F")e._t=Am(e.path,e.collectionGroup,S8(e),e.filters,e.limit,e.startAt,e.endAt);else{const c=[];for(const r of S8(e)){const i=r.dir==="desc"?"asc":"desc";c.push(new re(r.field,i))}const n=e.endAt?new Zc(e.endAt.position,e.endAt.inclusive):null,a=e.startAt?new Zc(e.startAt.position,e.startAt.inclusive):null;e._t=Am(e.path,e.collectionGroup,c,e.filters,e.limit,n,a)}return e._t}function ps(t,e){e.getFirstInequalityField(),$f(t);const c=t.filters.concat([e]);return new A7(t.path,t.collectionGroup,t.explicitOrderBy.slice(),c,t.limit,t.limitType,t.startAt,t.endAt)}function vs(t,e,c){return new A7(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,c,t.startAt,t.endAt)}function yn(t,e){return Ff(E4(t),E4(e))&&t.limitType===e.limitType}function jk(t){return`${Of(E4(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(e){let c=e.path.canonicalString();return e.collectionGroup!==null&&(c+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(c+=`, filters: [${e.filters.map(n=>Ok(n)).join(", ")}]`),Vn(e.limit)||(c+=", limit: "+e.limit),e.orderBy.length>0&&(c+=`, orderBy: [${e.orderBy.map(n=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(n)).join(", ")}]`),e.startAt&&(c+=", startAt: ",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(n=>G8(n)).join(",")),e.endAt&&(c+=", endAt: ",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(n=>G8(n)).join(",")),`Target(${c})`}(E4(t))}; limitType=${t.limitType})`}function Ln(t,e){return e.isFoundDocument()&&function(c,n){const a=n.key.path;return c.collectionGroup!==null?n.key.hasCollectionId(c.collectionGroup)&&c.path.isPrefixOf(a):U.isDocumentKey(c.path)?c.path.isEqual(a):c.path.isImmediateParentOf(a)}(t,e)&&function(c,n){for(const a of S8(c))if(!a.field.isKeyField()&&n.data.field(a.field)===null)return!1;return!0}(t,e)&&function(c,n){for(const a of c.filters)if(!a.matches(n))return!1;return!0}(t,e)&&function(c,n){return!(c.startAt&&!function(a,r,i){const s=Nm(a,r,i);return a.inclusive?s<=0:s<0}(c.startAt,S8(c),n)||c.endAt&&!function(a,r,i){const s=Nm(a,r,i);return a.inclusive?s>=0:s>0}(c.endAt,S8(c),n))}(t,e)}function Lg1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qk(t){return(e,c)=>{let n=!1;for(const a of S8(t)){const r=wg1(a,e,c);if(r!==0)return r;n=n||a.field.isKeyField()}return 0}}function wg1(t,e,c){const n=t.field.isKeyField()?U.comparator(e.key,c.key):function(a,r,i){const s=r.data.field(a),o=i.data.field(a);return s!==null&&o!==null?W8(s,o):G()}(t.field,e,c);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,c){this.mapKeyFn=e,this.equalsFn=c,this.inner={},this.innerSize=0}get(e){const c=this.mapKeyFn(e),n=this.inner[c];if(n!==void 0){for(const[a,r]of n)if(this.equalsFn(a,e))return r}}has(e){return this.get(e)!==void 0}set(e,c){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,c]],void this.innerSize++;for(let r=0;r<a.length;r++)if(this.equalsFn(a[r][0],e))return void(a[r]=[e,c]);a.push([e,c]),this.innerSize++}delete(e){const c=this.mapKeyFn(e),n=this.inner[c];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[c]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){D0(this.inner,(c,n)=>{for(const[a,r]of n)e(a,r)})}isEmpty(){return Tk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg1=new T1(U.comparator);function _4(){return xg1}const Wk=new T1(U.comparator);function j5(...t){let e=Wk;for(const c of t)e=e.insert(c.key,c);return e}function Gk(t){let e=Wk;return t.forEach((c,n)=>e=e.insert(c,n.overlayedDocument)),e}function c0(){return ie()}function Kk(){return ie()}function ie(){return new s5(t=>t.toString(),(t,e)=>t.isEqual(e))}const bg1=new T1(U.comparator),Sg1=new w2(U.comparator);function n1(...t){let e=Sg1;for(const c of t)e=e.add(c);return e}const Ng1=new w2(l1);function kg1(){return Ng1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function Zk(t){return{integerValue:""+t}}function Ag1(t,e){return lg1(e)?Zk(e):Yk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this._=void 0}}function Tg1(t,e,c){return t instanceof Qc?function(n,a){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return a&&Pf(a)&&(a=Df(a)),a&&(r.fields.__previous_value__=a),{mapValue:r}}(c,e):t instanceof qe?Xk(t,e):t instanceof We?Jk(t,e):function(n,a){const r=Qk(n,a),i=Em(r)+Em(n.gt);return hs(r)&&hs(n.gt)?Zk(i):Yk(n.serializer,i)}(t,e)}function Eg1(t,e,c){return t instanceof qe?Xk(t,e):t instanceof We?Jk(t,e):c}function Qk(t,e){return t instanceof Xc?hs(c=e)||function(n){return!!n&&"doubleValue"in n}(c)?e:{integerValue:0}:null;var c}class Qc extends wn{}class qe extends wn{constructor(e){super(),this.elements=e}}function Xk(t,e){const c=eA(e);for(const n of t.elements)c.some(a=>n4(a,n))||c.push(n);return{arrayValue:{values:c}}}class We extends wn{constructor(e){super(),this.elements=e}}function Jk(t,e){let c=eA(e);for(const n of t.elements)c=c.filter(a=>!n4(a,n));return{arrayValue:{values:c}}}class Xc extends wn{constructor(e,c){super(),this.serializer=e,this.gt=c}}function Em(t){return $1(t.integerValue||t.doubleValue)}function eA(t){return Rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _g1(t,e){return t.field.isEqual(e.field)&&function(c,n){return c instanceof qe&&n instanceof qe||c instanceof We&&n instanceof We?q8(c.elements,n.elements,n4):c instanceof Xc&&n instanceof Xc?n4(c.gt,n.gt):c instanceof Qc&&n instanceof Qc}(t.transform,e.transform)}class Ig1{constructor(e,c){this.version=e,this.transformResults=c}}class I3{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new I3}static exists(e){return new I3(void 0,e)}static updateTime(e){return new I3(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xn{}function tA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bf(t.key,I3.none()):new T7(t.key,t.data,I3.none());{const c=t.data,n=$2.empty();let a=new w2(M2.comparator);for(let r of e.fields)if(!a.has(r)){let i=c.field(r);i===null&&r.length>1&&(r=r.popLast(),i=c.field(r)),i===null?n.delete(r):n.set(r,i),a=a.add(r)}return new _6(t.key,n,new Q2(a.toArray()),I3.none())}}function Pg1(t,e,c){t instanceof T7?function(n,a,r){const i=n.value.clone(),s=Im(n.fieldTransforms,a,r.transformResults);i.setAll(s),a.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(t,e,c):t instanceof _6?function(n,a,r){if(!ec(n.precondition,a))return void a.convertToUnknownDocument(r.version);const i=Im(n.fieldTransforms,a,r.transformResults),s=a.data;s.setAll(cA(n)),s.setAll(i),a.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(t,e,c):function(n,a,r){a.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,c)}function se(t,e,c,n){return t instanceof T7?function(a,r,i,s){if(!ec(a.precondition,r))return i;const o=a.value.clone(),l=Pm(a.fieldTransforms,s,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(t,e,c,n):t instanceof _6?function(a,r,i,s){if(!ec(a.precondition,r))return i;const o=Pm(a.fieldTransforms,s,r),l=r.data;return l.setAll(cA(a)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),i===null?null:i.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(f=>f.field))}(t,e,c,n):function(a,r,i){return ec(a.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i}(t,e,c)}function Dg1(t,e){let c=null;for(const n of t.fieldTransforms){const a=e.data.field(n.field),r=Qk(n.transform,a||null);r!=null&&(c===null&&(c=$2.empty()),c.set(n.field,r))}return c||null}function _m(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(c,n){return c===void 0&&n===void 0||!(!c||!n)&&q8(c,n,(a,r)=>_g1(a,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class T7 extends xn{constructor(e,c,n,a=[]){super(),this.key=e,this.value=c,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class _6 extends xn{constructor(e,c,n,a,r=[]){super(),this.key=e,this.data=c,this.fieldMask=n,this.precondition=a,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function cA(t){const e=new Map;return t.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){const n=t.data.field(c);e.set(c,n)}}),e}function Im(t,e,c){const n=new Map;w1(t.length===c.length);for(let a=0;a<c.length;a++){const r=t[a],i=r.transform,s=e.data.field(r.field);n.set(r.field,Eg1(i,s,c[a]))}return n}function Pm(t,e,c){const n=new Map;for(const a of t){const r=a.transform,i=c.data.field(a.field);n.set(a.field,Tg1(r,i,e))}return n}class Bf extends xn{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rg1 extends xn{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og1{constructor(e,c,n,a){this.batchId=e,this.localWriteTime=c,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,c){const n=c.mutationResults;for(let a=0;a<this.mutations.length;a++){const r=this.mutations[a];r.key.isEqual(e.key)&&Pg1(r,e,n[a])}}applyToLocalView(e,c){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(c=se(n,e,c,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(c=se(n,e,c,this.localWriteTime));return c}applyToLocalDocumentSet(e,c){const n=Kk();return this.mutations.forEach(a=>{const r=e.get(a.key),i=r.overlayedDocument;let s=this.applyToLocalView(i,r.mutatedFields);s=c.has(a.key)?null:s;const o=tA(i,s);o!==null&&n.set(a.key,o),i.isValidDocument()||i.convertToNoDocument(Q.min())}),n}keys(){return this.mutations.reduce((e,c)=>e.add(c.key),n1())}isEqual(e){return this.batchId===e.batchId&&q8(this.mutations,e.mutations,(c,n)=>_m(c,n))&&q8(this.baseMutations,e.baseMutations,(c,n)=>_m(c,n))}}class Uf{constructor(e,c,n,a){this.batch=e,this.commitVersion=c,this.mutationResults=n,this.docVersions=a}static from(e,c,n){w1(e.mutations.length===n.length);let a=bg1;const r=e.mutations;for(let i=0;i<r.length;i++)a=a.insert(r[i].key,n[i].version);return new Uf(e,c,n,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg1{constructor(e,c){this.largestBatchId=e,this.mutation=c}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g1{constructor(e,c){this.count=e,this.unchangedNames=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F1,r1;function Bg1(t){switch(t){default:return G();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function nA(t){if(t===void 0)return T4("GRPC error has no .code"),x.UNKNOWN;switch(t){case F1.OK:return x.OK;case F1.CANCELLED:return x.CANCELLED;case F1.UNKNOWN:return x.UNKNOWN;case F1.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case F1.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case F1.INTERNAL:return x.INTERNAL;case F1.UNAVAILABLE:return x.UNAVAILABLE;case F1.UNAUTHENTICATED:return x.UNAUTHENTICATED;case F1.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case F1.NOT_FOUND:return x.NOT_FOUND;case F1.ALREADY_EXISTS:return x.ALREADY_EXISTS;case F1.PERMISSION_DENIED:return x.PERMISSION_DENIED;case F1.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case F1.ABORTED:return x.ABORTED;case F1.OUT_OF_RANGE:return x.OUT_OF_RANGE;case F1.UNIMPLEMENTED:return x.UNIMPLEMENTED;case F1.DATA_LOSS:return x.DATA_LOSS;default:return G()}}(r1=F1||(F1={}))[r1.OK=0]="OK",r1[r1.CANCELLED=1]="CANCELLED",r1[r1.UNKNOWN=2]="UNKNOWN",r1[r1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",r1[r1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",r1[r1.NOT_FOUND=5]="NOT_FOUND",r1[r1.ALREADY_EXISTS=6]="ALREADY_EXISTS",r1[r1.PERMISSION_DENIED=7]="PERMISSION_DENIED",r1[r1.UNAUTHENTICATED=16]="UNAUTHENTICATED",r1[r1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",r1[r1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",r1[r1.ABORTED=10]="ABORTED",r1[r1.OUT_OF_RANGE=11]="OUT_OF_RANGE",r1[r1.UNIMPLEMENTED=12]="UNIMPLEMENTED",r1[r1.INTERNAL=13]="INTERNAL",r1[r1.UNAVAILABLE=14]="UNAVAILABLE",r1[r1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return At}static getOrCreateInstance(){return At===null&&(At=new jf),At}onExistenceFilterMismatch(e){const c=Symbol();return this.onExistenceFilterMismatchCallbacks.set(c,e),()=>this.onExistenceFilterMismatchCallbacks.delete(c)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(c=>c(e))}}let At=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg1=new b8([4294967295,4294967295],0);function Dm(t){const e=Ug1().encode(t),c=new Kv1;return c.update(e),new Uint8Array(c.digest())}function Rm(t){const e=new DataView(t.buffer),c=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new b8([c,n],0),new b8([a,r],0)]}class qf{constructor(e,c,n){if(this.bitmap=e,this.padding=c,this.hashCount=n,c<0||c>=8)throw new q5(`Invalid padding: ${c}`);if(n<0)throw new q5(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new q5(`Invalid hash count: ${n}`);if(e.length===0&&c!==0)throw new q5(`Invalid padding when bitmap length is 0: ${c}`);this.It=8*e.length-c,this.Tt=b8.fromNumber(this.It)}Et(e,c,n){let a=e.add(c.multiply(b8.fromNumber(n)));return a.compare(jg1)===1&&(a=new b8([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const c=Dm(e),[n,a]=Rm(c);for(let r=0;r<this.hashCount;r++){const i=this.Et(n,a,r);if(!this.At(i))return!1}return!0}static create(e,c,n){const a=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),i=new qf(r,a,c);return n.forEach(s=>i.insert(s)),i}insert(e){if(this.It===0)return;const c=Dm(e),[n,a]=Rm(c);for(let r=0;r<this.hashCount;r++){const i=this.Et(n,a,r);this.Rt(i)}}Rt(e){const c=Math.floor(e/8),n=e%8;this.bitmap[c]|=1<<n}}class q5 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,c,n,a,r){this.snapshotVersion=e,this.targetChanges=c,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,c,n){const a=new Map;return a.set(e,E7.createSynthesizedTargetChangeForCurrentChange(e,c,n)),new bn(Q.min(),a,new T1(l1),_4(),n1())}}class E7{constructor(e,c,n,a,r){this.resumeToken=e,this.current=c,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,c,n){return new E7(n,c,n1(),n1(),n1())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,c,n,a){this.Pt=e,this.removedTargetIds=c,this.key=n,this.bt=a}}class aA{constructor(e,c){this.targetId=e,this.Vt=c}}class rA{constructor(e,c,n=S2.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=c,this.resumeToken=n,this.cause=a}}class Om{constructor(){this.St=0,this.Dt=$m(),this.Ct=S2.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=n1(),c=n1(),n=n1();return this.Dt.forEach((a,r)=>{switch(r){case 0:e=e.add(a);break;case 2:c=c.add(a);break;case 1:n=n.add(a);break;default:G()}}),new E7(this.Ct,this.xt,e,c,n)}Ft(){this.Nt=!1,this.Dt=$m()}Bt(e,c){this.Nt=!0,this.Dt=this.Dt.insert(e,c)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class qg1{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=_4(),this.zt=Fm(),this.Wt=new T1(l1)}Ht(e){for(const c of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(c,e.bt):this.Yt(c,e.key,e.bt);for(const c of e.removedTargetIds)this.Yt(c,e.key,e.bt)}Xt(e){this.forEachTarget(e,c=>{const n=this.Zt(c);switch(e.state){case 0:this.te(c)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(c);break;case 3:this.te(c)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(c)&&(this.ee(c),n.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,c){e.targetIds.length>0?e.targetIds.forEach(c):this.Qt.forEach((n,a)=>{this.te(a)&&c(a)})}ne(e){var c;const n=e.targetId,a=e.Vt.count,r=this.se(n);if(r){const i=r.target;if(ms(i))if(a===0){const s=new U(i.path);this.Yt(n,s,H2.newNoDocument(s,Q.min()))}else w1(a===1);else{const s=this.ie(n);if(s!==a){const o=this.re(e,s);if(o!==0){this.ee(n);const l=o===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,l)}(c=jf.instance)===null||c===void 0||c.notifyOnExistenceFilterMismatch(function(l,f,u){var h,p,z,C,H,v;const m={localCacheCount:f,existenceFilterCount:u.count},g=u.unchangedNames;return g&&(m.bloomFilter={applied:l===0,hashCount:(h=g==null?void 0:g.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(C=(z=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||z===void 0?void 0:z.length)!==null&&C!==void 0?C:0,padding:(v=(H=g==null?void 0:g.bits)===null||H===void 0?void 0:H.padding)!==null&&v!==void 0?v:0}),m}(o,s,e.Vt))}}}}re(e,c){const{unchangedNames:n,count:a}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=M0(r).toUint8Array()}catch(f){if(f instanceof Ek)return j8("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw f}try{l=new qf(o,i,s)}catch(f){return j8(f instanceof q5?"BloomFilter error: ":"Applying bloom filter failed: ",f),1}return l.It===0?1:a!==c-this.oe(e.targetId,l)?2:0}oe(e,c){const n=this.Gt.getRemoteKeysForTarget(e);let a=0;return n.forEach(r=>{const i=this.Gt.ue(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;c.vt(s)||(this.Yt(e,r,null),a++)}),a}ce(e){const c=new Map;this.Qt.forEach((r,i)=>{const s=this.se(i);if(s){if(r.current&&ms(s.target)){const o=new U(s.target.path);this.jt.get(o)!==null||this.ae(i,o)||this.Yt(i,o,H2.newNoDocument(o,e))}r.Mt&&(c.set(i,r.Ot()),r.Ft())}});let n=n1();this.zt.forEach((r,i)=>{let s=!0;i.forEachWhile(o=>{const l=this.se(o);return!l||l.purpose==="TargetPurposeLimboResolution"||(s=!1,!1)}),s&&(n=n.add(r))}),this.jt.forEach((r,i)=>i.setReadTime(e));const a=new bn(e,c,this.Wt,this.jt,n);return this.jt=_4(),this.zt=Fm(),this.Wt=new T1(l1),a}Jt(e,c){if(!this.te(e))return;const n=this.ae(e,c.key)?2:0;this.Zt(e).Bt(c.key,n),this.jt=this.jt.insert(c.key,c),this.zt=this.zt.insert(c.key,this.he(c.key).add(e))}Yt(e,c,n){if(!this.te(e))return;const a=this.Zt(e);this.ae(e,c)?a.Bt(c,1):a.Lt(c),this.zt=this.zt.insert(c,this.he(c).delete(e)),n&&(this.jt=this.jt.insert(c,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const c=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+c.addedDocuments.size-c.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let c=this.Qt.get(e);return c||(c=new Om,this.Qt.set(e,c)),c}he(e){let c=this.zt.get(e);return c||(c=new w2(l1),this.zt=this.zt.insert(e,c)),c}te(e){const c=this.se(e)!==null;return c||$("WatchChangeAggregator","Detected inactive target",e),c}se(e){const c=this.Qt.get(e);return c&&c.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Om),this.Gt.getRemoteKeysForTarget(e).forEach(c=>{this.Yt(e,c,null)})}ae(e,c){return this.Gt.getRemoteKeysForTarget(e).has(c)}}function Fm(){return new T1(U.comparator)}function $m(){return new T1(U.comparator)}const Wg1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gg1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Kg1=(()=>({and:"AND",or:"OR"}))();class Yg1{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function zs(t,e){return t.useProto3Json||Vn(e)?e:{value:e}}function Jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zg1(t,e){return Jc(t,e.toTimestamp())}function J3(t){return w1(!!t),Q.fromTimestamp(function(e){const c=L6(e);return new G1(c.seconds,c.nanos)}(t))}function Wf(t,e){return function(c){return new M1(["projects",c.projectId,"databases",c.database])}(t).child("documents").child(e).canonicalString()}function sA(t){const e=M1.fromString(t);return w1(uA(e)),e}function Cs(t,e){return Wf(t.databaseId,e.path)}function lr(t,e){const c=sA(e);if(c.get(1)!==t.databaseId.projectId)throw new R(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+t.databaseId.projectId);if(c.get(3)!==t.databaseId.database)throw new R(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+t.databaseId.database);return new U(oA(c))}function Hs(t,e){return Wf(t.databaseId,e)}function Qg1(t){const e=sA(t);return e.length===4?M1.emptyPath():oA(e)}function Ms(t){return new M1(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oA(t){return w1(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bm(t,e,c){return{name:Cs(t,e),fields:c.value.mapValue.fields}}function Xg1(t,e){let c;if("targetChange"in e){e.targetChange;const n=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],r=function(o,l){return o.useProto3Json?(w1(l===void 0||typeof l=="string"),S2.fromBase64String(l||"")):(w1(l===void 0||l instanceof Uint8Array),S2.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),i=e.targetChange.cause,s=i&&function(o){const l=o.code===void 0?x.UNKNOWN:nA(o.code);return new R(l,o.message||"")}(i);c=new rA(n,a,r,s||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=lr(t,n.document.name),r=J3(n.document.updateTime),i=n.document.createTime?J3(n.document.createTime):Q.min(),s=new $2({mapValue:{fields:n.document.fields}}),o=H2.newFoundDocument(a,r,i,s),l=n.targetIds||[],f=n.removedTargetIds||[];c=new tc(l,f,o.key,o)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=lr(t,n.document),r=n.readTime?J3(n.readTime):Q.min(),i=H2.newNoDocument(a,r),s=n.removedTargetIds||[];c=new tc([],s,i.key,i)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=lr(t,n.document),r=n.removedTargetIds||[];c=new tc([],r,a,null)}else{if(!("filter"in e))return G();{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:r}=n,i=new $g1(a,r),s=n.targetId;c=new aA(s,i)}}return c}function Jg1(t,e){let c;if(e instanceof T7)c={update:Bm(t,e.key,e.value)};else if(e instanceof Bf)c={delete:Cs(t,e.key)};else if(e instanceof _6)c={update:Bm(t,e.key,e.data),updateMask:oz1(e.fieldMask)};else{if(!(e instanceof Rg1))return G();c={verify:Cs(t,e.key)}}return e.fieldTransforms.length>0&&(c.updateTransforms=e.fieldTransforms.map(n=>function(a,r){const i=r.transform;if(i instanceof Qc)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof qe)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof We)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof Xc)return{fieldPath:r.field.canonicalString(),increment:i.gt};throw G()}(0,n))),e.precondition.isNone||(c.currentDocument=function(n,a){return a.updateTime!==void 0?{updateTime:Zg1(n,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:G()}(t,e.precondition)),c}function ez1(t,e){return t&&t.length>0?(w1(e!==void 0),t.map(c=>function(n,a){let r=n.updateTime?J3(n.updateTime):J3(a);return r.isEqual(Q.min())&&(r=J3(a)),new Ig1(r,n.transformResults||[])}(c,e))):[]}function tz1(t,e){return{documents:[Hs(t,e.path)]}}function cz1(t,e){const c={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(c.parent=Hs(t,n),c.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(c.parent=Hs(t,n.popLast()),c.structuredQuery.from=[{collectionId:n.lastSegment()}]);const a=function(o){if(o.length!==0)return fA(O3.create(o,"and"))}(e.filters);a&&(c.structuredQuery.where=a);const r=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:X0(f.field),direction:rz1(f.dir)}}(l))}(e.orderBy);r&&(c.structuredQuery.orderBy=r);const i=zs(t,e.limit);var s;return i!==null&&(c.structuredQuery.limit=i),e.startAt&&(c.structuredQuery.startAt={before:(s=e.startAt).inclusive,values:s.position}),e.endAt&&(c.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),c}function nz1(t){let e=Qg1(t.parent);const c=t.structuredQuery,n=c.from?c.from.length:0;let a=null;if(n>0){w1(n===1);const f=c.from[0];f.allDescendants?a=f.collectionId:e=e.child(f.collectionId)}let r=[];c.where&&(r=function(f){const u=lA(f);return u instanceof O3&&Dk(u)?u.getFilters():[u]}(c.where));let i=[];c.orderBy&&(i=c.orderBy.map(f=>function(u){return new re(J0(u.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(f)));let s=null;c.limit&&(s=function(f){let u;return u=typeof f=="object"?f.value:f,Vn(u)?null:u}(c.limit));let o=null;c.startAt&&(o=function(f){const u=!!f.before,h=f.values||[];return new Zc(h,u)}(c.startAt));let l=null;return c.endAt&&(l=function(f){const u=!f.before,h=f.values||[];return new Zc(h,u)}(c.endAt)),yg1(e,a,i,r,s,"F",o,l)}function az1(t,e){const c=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return c==null?null:{"goog-listen-tags":c}}function lA(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const c=J0(e.unaryFilter.field);return U1.create(c,"==",{doubleValue:NaN});case"IS_NULL":const n=J0(e.unaryFilter.field);return U1.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=J0(e.unaryFilter.field);return U1.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=J0(e.unaryFilter.field);return U1.create(r,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return U1.create(J0(e.fieldFilter.field),function(c){switch(c){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return O3.create(e.compositeFilter.filters.map(c=>lA(c)),function(c){switch(c){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function rz1(t){return Wg1[t]}function iz1(t){return Gg1[t]}function sz1(t){return Kg1[t]}function X0(t){return{fieldPath:t.canonicalString()}}function J0(t){return M2.fromServerFormat(t.fieldPath)}function fA(t){return t instanceof U1?function(e){if(e.op==="=="){if(Sm(e.value))return{unaryFilter:{field:X0(e.field),op:"IS_NAN"}};if(bm(e.value))return{unaryFilter:{field:X0(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sm(e.value))return{unaryFilter:{field:X0(e.field),op:"IS_NOT_NAN"}};if(bm(e.value))return{unaryFilter:{field:X0(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:X0(e.field),op:iz1(e.op),value:e.value}}}(t):t instanceof O3?function(e){const c=e.getFilters().map(n=>fA(n));return c.length===1?c[0]:{compositeFilter:{op:sz1(e.op),filters:c}}}(t):G()}function oz1(t){const e=[];return t.fields.forEach(c=>e.push(c.canonicalString())),{fieldPaths:e}}function uA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,c,n,a,r=Q.min(),i=Q.min(),s=S2.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=c,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=s,this.expectedCount=o}withSequenceNumber(e){return new e6(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,c){return new e6(this.target,this.targetId,this.purpose,this.sequenceNumber,c,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new e6(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new e6(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lz1{constructor(e){this.fe=e}}function fz1(t){const e=nz1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uz1{constructor(){this.rn=new hz1}addToCollectionParentIndex(e,c){return this.rn.add(c),N.resolve()}getCollectionParents(e,c){return N.resolve(this.rn.getEntries(c))}addFieldIndex(e,c){return N.resolve()}deleteFieldIndex(e,c){return N.resolve()}getDocumentsMatchingTarget(e,c){return N.resolve(null)}getIndexType(e,c){return N.resolve(0)}getFieldIndexes(e,c){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,c){return N.resolve(y6.min())}getMinOffsetFromCollectionGroup(e,c){return N.resolve(y6.min())}updateCollectionGroup(e,c,n){return N.resolve()}updateIndexEntries(e,c){return N.resolve()}}class hz1{constructor(){this.index={}}add(e){const c=e.lastSegment(),n=e.popLast(),a=this.index[c]||new w2(M1.comparator),r=!a.has(n);return this.index[c]=a.add(n),r}has(e){const c=e.lastSegment(),n=e.popLast(),a=this.index[c];return a&&a.has(n)}getEntries(e){return(this.index[e]||new w2(M1.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K8{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new K8(0)}static Mn(){return new K8(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dz1{constructor(){this.changes=new s5(e=>e.toString(),(e,c)=>e.isEqual(c)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,c){this.assertNotApplied(),this.changes.set(e,H2.newInvalidDocument(e).setReadTime(c))}getEntry(e,c){this.assertNotApplied();const n=this.changes.get(c);return n!==void 0?N.resolve(n):this.getFromCache(e,c)}getEntries(e,c){return this.getAllFromCache(e,c)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mz1{constructor(e,c){this.overlayedDocument=e,this.mutatedFields=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pz1{constructor(e,c,n,a){this.remoteDocumentCache=e,this.mutationQueue=c,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,c){let n=null;return this.documentOverlayCache.getOverlay(e,c).next(a=>(n=a,this.remoteDocumentCache.getEntry(e,c))).next(a=>(n!==null&&se(n.mutation,a,Q2.empty(),G1.now()),a))}getDocuments(e,c){return this.remoteDocumentCache.getEntries(e,c).next(n=>this.getLocalViewOfDocuments(e,n,n1()).next(()=>n))}getLocalViewOfDocuments(e,c,n=n1()){const a=c0();return this.populateOverlays(e,a,c).next(()=>this.computeViews(e,c,a,n).next(r=>{let i=j5();return r.forEach((s,o)=>{i=i.insert(s,o.overlayedDocument)}),i}))}getOverlayedDocuments(e,c){const n=c0();return this.populateOverlays(e,n,c).next(()=>this.computeViews(e,c,n,n1()))}populateOverlays(e,c,n){const a=[];return n.forEach(r=>{c.has(r)||a.push(r)}),this.documentOverlayCache.getOverlays(e,a).next(r=>{r.forEach((i,s)=>{c.set(i,s)})})}computeViews(e,c,n,a){let r=_4();const i=ie(),s=ie();return c.forEach((o,l)=>{const f=n.get(l.key);a.has(l.key)&&(f===void 0||f.mutation instanceof _6)?r=r.insert(l.key,l):f!==void 0?(i.set(l.key,f.mutation.getFieldMask()),se(f.mutation,l,f.mutation.getFieldMask(),G1.now())):i.set(l.key,Q2.empty())}),this.recalculateAndSaveOverlays(e,r).next(o=>(o.forEach((l,f)=>i.set(l,f)),c.forEach((l,f)=>{var u;return s.set(l,new mz1(f,(u=i.get(l))!==null&&u!==void 0?u:null))}),s))}recalculateAndSaveOverlays(e,c){const n=ie();let a=new T1((i,s)=>i-s),r=n1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,c).next(i=>{for(const s of i)s.keys().forEach(o=>{const l=c.get(o);if(l===null)return;let f=n.get(o)||Q2.empty();f=s.applyToLocalView(l,f),n.set(o,f);const u=(a.get(s.batchId)||n1()).add(o);a=a.insert(s.batchId,u)})}).next(()=>{const i=[],s=a.getReverseIterator();for(;s.hasNext();){const o=s.getNext(),l=o.key,f=o.value,u=Kk();f.forEach(h=>{if(!r.has(h)){const p=tA(c.get(h),n.get(h));p!==null&&u.set(h,p),r=r.add(h)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,u))}return N.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,c){return this.remoteDocumentCache.getEntries(e,c).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,c,n){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(c)?this.getDocumentsMatchingDocumentQuery(e,c.path):Uk(c)?this.getDocumentsMatchingCollectionGroupQuery(e,c,n):this.getDocumentsMatchingCollectionQuery(e,c,n)}getNextDocuments(e,c,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,c,n,a).next(r=>{const i=a-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,c,n.largestBatchId,a-r.size):N.resolve(c0());let s=-1,o=r;return i.next(l=>N.forEach(l,(f,u)=>(s<u.largestBatchId&&(s=u.largestBatchId),r.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(h=>{o=o.insert(f,h)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,o,l,n1())).next(f=>({batchId:s,changes:Gk(f)})))})}getDocumentsMatchingDocumentQuery(e,c){return this.getDocument(e,new U(c)).next(n=>{let a=j5();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a})}getDocumentsMatchingCollectionGroupQuery(e,c,n){const a=c.collectionGroup;let r=j5();return this.indexManager.getCollectionParents(e,a).next(i=>N.forEach(i,s=>{const o=function(l,f){return new A7(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(c,s.child(a));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(l=>{l.forEach((f,u)=>{r=r.insert(f,u)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,c,n){let a;return this.documentOverlayCache.getOverlaysForCollection(e,c.path,n.largestBatchId).next(r=>(a=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,c,n,a))).next(r=>{a.forEach((s,o)=>{const l=o.getKey();r.get(l)===null&&(r=r.insert(l,H2.newInvalidDocument(l)))});let i=j5();return r.forEach((s,o)=>{const l=a.get(s);l!==void 0&&se(l.mutation,o,Q2.empty(),G1.now()),Ln(c,o)&&(i=i.insert(s,o))}),i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz1{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,c){return N.resolve(this.cs.get(c))}saveBundleMetadata(e,c){var n;return this.cs.set(c.id,{id:(n=c).id,version:n.version,createTime:J3(n.createTime)}),N.resolve()}getNamedQuery(e,c){return N.resolve(this.hs.get(c))}saveNamedQuery(e,c){return this.hs.set(c.name,function(n){return{name:n.name,query:fz1(n.bundledQuery),readTime:J3(n.readTime)}}(c)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gz1{constructor(){this.overlays=new T1(U.comparator),this.ls=new Map}getOverlay(e,c){return N.resolve(this.overlays.get(c))}getOverlays(e,c){const n=c0();return N.forEach(c,a=>this.getOverlay(e,a).next(r=>{r!==null&&n.set(a,r)})).next(()=>n)}saveOverlays(e,c,n){return n.forEach((a,r)=>{this.we(e,c,r)}),N.resolve()}removeOverlaysForBatchId(e,c,n){const a=this.ls.get(n);return a!==void 0&&(a.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(n)),N.resolve()}getOverlaysForCollection(e,c,n){const a=c0(),r=c.length+1,i=new U(c.child("")),s=this.overlays.getIteratorFrom(i);for(;s.hasNext();){const o=s.getNext().value,l=o.getKey();if(!c.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>n&&a.set(o.getKey(),o)}return N.resolve(a)}getOverlaysForCollectionGroup(e,c,n,a){let r=new T1((l,f)=>l-f);const i=this.overlays.getIterator();for(;i.hasNext();){const l=i.getNext().value;if(l.getKey().getCollectionGroup()===c&&l.largestBatchId>n){let f=r.get(l.largestBatchId);f===null&&(f=c0(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const s=c0(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>s.set(l,f)),!(s.size()>=a)););return N.resolve(s)}we(e,c,n){const a=this.overlays.get(n.key);if(a!==null){const i=this.ls.get(a.largestBatchId).delete(n.key);this.ls.set(a.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Fg1(c,n));let r=this.ls.get(c);r===void 0&&(r=n1(),this.ls.set(c,r)),this.ls.set(c,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.fs=new w2(J1.ds),this.ws=new w2(J1._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,c){const n=new J1(e,c);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,c){e.forEach(n=>this.addReference(n,c))}removeReference(e,c){this.ys(new J1(e,c))}ps(e,c){e.forEach(n=>this.removeReference(n,c))}Is(e){const c=new U(new M1([])),n=new J1(c,e),a=new J1(c,e+1),r=[];return this.ws.forEachInRange([n,a],i=>{this.ys(i),r.push(i.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const c=new U(new M1([])),n=new J1(c,e),a=new J1(c,e+1);let r=n1();return this.ws.forEachInRange([n,a],i=>{r=r.add(i.key)}),r}containsKey(e){const c=new J1(e,0),n=this.fs.firstAfterOrEqual(c);return n!==null&&e.isEqual(n.key)}}class J1{constructor(e,c){this.key=e,this.As=c}static ds(e,c){return U.comparator(e.key,c.key)||l1(e.As,c.As)}static _s(e,c){return l1(e.As,c.As)||U.comparator(e.key,c.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz1{constructor(e,c){this.indexManager=e,this.referenceDelegate=c,this.mutationQueue=[],this.vs=1,this.Rs=new w2(J1.ds)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,c,n,a){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Og1(r,c,n,a);this.mutationQueue.push(i);for(const s of a)this.Rs=this.Rs.add(new J1(s.key,r)),this.indexManager.addToCollectionParentIndex(e,s.key.path.popLast());return N.resolve(i)}lookupMutationBatch(e,c){return N.resolve(this.Ps(c))}getNextMutationBatchAfterBatchId(e,c){const n=c+1,a=this.bs(n),r=a<0?0:a;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,c){const n=new J1(c,0),a=new J1(c,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,a],i=>{const s=this.Ps(i.As);r.push(s)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,c){let n=new w2(l1);return c.forEach(a=>{const r=new J1(a,0),i=new J1(a,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,i],s=>{n=n.add(s.As)})}),N.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,c){const n=c.path,a=n.length+1;let r=n;U.isDocumentKey(r)||(r=r.child(""));const i=new J1(new U(r),0);let s=new w2(l1);return this.Rs.forEachWhile(o=>{const l=o.key.path;return!!n.isPrefixOf(l)&&(l.length===a&&(s=s.add(o.As)),!0)},i),N.resolve(this.Vs(s))}Vs(e){const c=[];return e.forEach(n=>{const a=this.Ps(n);a!==null&&c.push(a)}),c}removeMutationBatch(e,c){w1(this.Ss(c.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Rs;return N.forEach(c.mutations,a=>{const r=new J1(a.key,c.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,c){const n=new J1(c,0),a=this.Rs.firstAfterOrEqual(n);return N.resolve(c.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ss(e,c){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const c=this.bs(e);return c<0||c>=this.mutationQueue.length?null:this.mutationQueue[c]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cz1{constructor(e){this.Ds=e,this.docs=new T1(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,c){const n=c.key,a=this.docs.get(n),r=a?a.size:0,i=this.Ds(c);return this.docs=this.docs.insert(n,{document:c.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const c=this.docs.get(e);c&&(this.docs=this.docs.remove(e),this.size-=c.size)}getEntry(e,c){const n=this.docs.get(c);return N.resolve(n?n.document.mutableCopy():H2.newInvalidDocument(c))}getEntries(e,c){let n=_4();return c.forEach(a=>{const r=this.docs.get(a);n=n.insert(a,r?r.document.mutableCopy():H2.newInvalidDocument(a))}),N.resolve(n)}getDocumentsMatchingQuery(e,c,n,a){let r=_4();const i=c.path,s=new U(i.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:l,value:{document:f}}=o.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||ig1(rg1(f),n)<=0||(a.has(f.key)||Ln(c,f))&&(r=r.insert(f.key,f.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,c,n,a){G()}Cs(e,c){return N.forEach(this.docs,n=>c(n))}newChangeBuffer(e){return new Hz1(this)}getSize(e){return N.resolve(this.size)}}class Hz1 extends dz1{constructor(e){super(),this.os=e}applyChanges(e){const c=[];return this.changes.forEach((n,a)=>{a.isValidDocument()?c.push(this.os.addEntry(e,a)):this.os.removeEntry(n)}),N.waitFor(c)}getFromCache(e,c){return this.os.getEntry(e,c)}getAllFromCache(e,c){return this.os.getEntries(e,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mz1{constructor(e){this.persistence=e,this.xs=new s5(c=>Of(c),Ff),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Gf,this.targetCount=0,this.Ms=K8.kn()}forEachTarget(e,c){return this.xs.forEach((n,a)=>c(a)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,c,n){return n&&(this.lastRemoteSnapshotVersion=n),c>this.Ns&&(this.Ns=c),N.resolve()}Fn(e){this.xs.set(e.target,e);const c=e.targetId;c>this.highestTargetId&&(this.Ms=new K8(c),this.highestTargetId=c),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,c){return this.Fn(c),this.targetCount+=1,N.resolve()}updateTargetData(e,c){return this.Fn(c),N.resolve()}removeTargetData(e,c){return this.xs.delete(c.target),this.ks.Is(c.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,c,n){let a=0;const r=[];return this.xs.forEach((i,s)=>{s.sequenceNumber<=c&&n.get(s.targetId)===null&&(this.xs.delete(i),r.push(this.removeMatchingKeysForTargetId(e,s.targetId)),a++)}),N.waitFor(r).next(()=>a)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,c){const n=this.xs.get(c)||null;return N.resolve(n)}addMatchingKeys(e,c,n){return this.ks.gs(c,n),N.resolve()}removeMatchingKeys(e,c,n){this.ks.ps(c,n);const a=this.persistence.referenceDelegate,r=[];return a&&c.forEach(i=>{r.push(a.markPotentiallyOrphaned(e,i))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,c){return this.ks.Is(c),N.resolve()}getMatchingKeysForTargetId(e,c){const n=this.ks.Es(c);return N.resolve(n)}containsKey(e,c){return N.resolve(this.ks.containsKey(c))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vz1{constructor(e,c){this.$s={},this.overlays={},this.Os=new If(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Mz1(this),this.indexManager=new uz1,this.remoteDocumentCache=function(n){return new Cz1(n)}(n=>this.referenceDelegate.Ls(n)),this.serializer=new lz1(c),this.qs=new vz1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let c=this.overlays[e.toKey()];return c||(c=new gz1,this.overlays[e.toKey()]=c),c}getMutationQueue(e,c){let n=this.$s[e.toKey()];return n||(n=new zz1(c,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,c,n){$("MemoryPersistence","Starting transaction:",e);const a=new yz1(this.Os.next());return this.referenceDelegate.Us(),n(a).next(r=>this.referenceDelegate.Ks(a).next(()=>r)).toPromise().then(r=>(a.raiseOnCommittedEvent(),r))}Gs(e,c){return N.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,c)))}}class yz1 extends og1{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Qs=new Gf,this.js=null}static zs(e){return new Kf(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,c,n){return this.Qs.addReference(n,c),this.Ws.delete(n.toString()),N.resolve()}removeReference(e,c,n){return this.Qs.removeReference(n,c),this.Ws.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,c){return this.Ws.add(c.toString()),N.resolve()}removeTarget(e,c){this.Qs.Is(c.targetId).forEach(a=>this.Ws.add(a.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,c.targetId).next(a=>{a.forEach(r=>this.Ws.add(r.toString()))}).next(()=>n.removeTargetData(e,c))}Us(){this.js=new Set}Ks(e){const c=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,n=>{const a=U.fromPath(n);return this.Hs(e,a).next(r=>{r||c.removeEntry(a,Q.min())})}).next(()=>(this.js=null,c.apply(e)))}updateLimboDocument(e,c){return this.Hs(e,c).next(n=>{n?this.Ws.delete(c.toString()):this.Ws.add(c.toString())})}Ls(e){return 0}Hs(e,c){return N.or([()=>N.resolve(this.Qs.containsKey(c)),()=>this.persistence.getTargetCache().containsKey(e,c),()=>this.persistence.Gs(e,c)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,c,n,a){this.targetId=e,this.fromCache=c,this.Fi=n,this.Bi=a}static Li(e,c){let n=n1(),a=n1();for(const r of c.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:a=a.add(r.doc.key)}return new Yf(e,c.fromCache,n,a)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lz1{constructor(){this.qi=!1}initialize(e,c){this.Ui=e,this.indexManager=c,this.qi=!0}getDocumentsMatchingQuery(e,c,n,a){return this.Ki(e,c).next(r=>r||this.Gi(e,c,a,n)).next(r=>r||this.Qi(e,c))}Ki(e,c){if(Tm(c))return N.resolve(null);let n=E4(c);return this.indexManager.getIndexType(e,n).next(a=>a===0?null:(c.limit!==null&&a===1&&(c=vs(c,null,"F"),n=E4(c)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=n1(...r);return this.Ui.getDocuments(e,i).next(s=>this.indexManager.getMinOffset(e,n).next(o=>{const l=this.ji(c,s);return this.zi(c,l,i,o.readTime)?this.Ki(e,vs(c,null,"F")):this.Wi(e,l,c,o)}))})))}Gi(e,c,n,a){return Tm(c)||a.isEqual(Q.min())?this.Qi(e,c):this.Ui.getDocuments(e,n).next(r=>{const i=this.ji(c,r);return this.zi(c,i,n,a)?this.Qi(e,c):(Vm()<=o1.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),gs(c)),this.Wi(e,i,c,ag1(a,-1)))})}ji(e,c){let n=new w2(qk(e));return c.forEach((a,r)=>{Ln(e,r)&&(n=n.add(r))}),n}zi(e,c,n,a){if(e.limit===null)return!1;if(n.size!==c.size)return!0;const r=e.limitType==="F"?c.last():c.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(a)>0)}Qi(e,c){return Vm()<=o1.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",gs(c)),this.Ui.getDocumentsMatchingQuery(e,c,y6.min())}Wi(e,c,n,a){return this.Ui.getDocumentsMatchingQuery(e,n,a).next(r=>(c.forEach(i=>{r=r.insert(i.key,i)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wz1{constructor(e,c,n,a){this.persistence=e,this.Hi=c,this.serializer=a,this.Ji=new T1(l1),this.Yi=new s5(r=>Of(r),Ff),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pz1(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",c=>e.collect(c,this.Ji))}}function xz1(t,e,c,n){return new wz1(t,e,c,n)}async function hA(t,e){const c=X(t);return await c.persistence.runTransaction("Handle user change","readonly",n=>{let a;return c.mutationQueue.getAllMutationBatches(n).next(r=>(a=r,c.tr(e),c.mutationQueue.getAllMutationBatches(n))).next(r=>{const i=[],s=[];let o=n1();for(const l of a){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){s.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return c.localDocuments.getDocuments(n,o).next(l=>({er:l,removedBatchIds:i,addedBatchIds:s}))})})}function bz1(t,e){const c=X(t);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const a=e.batch.keys(),r=c.Zi.newChangeBuffer({trackRemovals:!0});return function(i,s,o,l){const f=o.batch,u=f.keys();let h=N.resolve();return u.forEach(p=>{h=h.next(()=>l.getEntry(s,p)).next(z=>{const C=o.docVersions.get(p);w1(C!==null),z.version.compareTo(C)<0&&(f.applyToRemoteDocument(z,o),z.isValidDocument()&&(z.setReadTime(o.commitVersion),l.addEntry(z)))})}),h.next(()=>i.mutationQueue.removeMutationBatch(s,f))}(c,n,e,r).next(()=>r.apply(n)).next(()=>c.mutationQueue.performConsistencyCheck(n)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(i){let s=n1();for(let o=0;o<i.mutationResults.length;++o)i.mutationResults[o].transformResults.length>0&&(s=s.add(i.batch.mutations[o].key));return s}(e))).next(()=>c.localDocuments.getDocuments(n,a))})}function dA(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",c=>e.Bs.getLastRemoteSnapshotVersion(c))}function Sz1(t,e){const c=X(t),n=e.snapshotVersion;let a=c.Ji;return c.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const i=c.Zi.newChangeBuffer({trackRemovals:!0});a=c.Ji;const s=[];e.targetChanges.forEach((f,u)=>{const h=a.get(u);if(!h)return;s.push(c.Bs.removeMatchingKeys(r,f.removedDocuments,u).next(()=>c.Bs.addMatchingKeys(r,f.addedDocuments,u)));let p=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(u)!==null?p=p.withResumeToken(S2.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(f.resumeToken,n)),a=a.insert(u,p),function(z,C,H){return z.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(h,p,f)&&s.push(c.Bs.updateTargetData(r,p))});let o=_4(),l=n1();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&s.push(c.persistence.referenceDelegate.updateLimboDocument(r,f))}),s.push(Nz1(r,i,e.documentUpdates).next(f=>{o=f.nr,l=f.sr})),!n.isEqual(Q.min())){const f=c.Bs.getLastRemoteSnapshotVersion(r).next(u=>c.Bs.setTargetsMetadata(r,r.currentSequenceNumber,n));s.push(f)}return N.waitFor(s).next(()=>i.apply(r)).next(()=>c.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(c.Ji=a,r))}function Nz1(t,e,c){let n=n1(),a=n1();return c.forEach(r=>n=n.add(r)),e.getEntries(t,n).next(r=>{let i=_4();return c.forEach((s,o)=>{const l=r.get(s);o.isFoundDocument()!==l.isFoundDocument()&&(a=a.add(s)),o.isNoDocument()&&o.version.isEqual(Q.min())?(e.removeEntry(s,o.readTime),i=i.insert(s,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(o),i=i.insert(s,o)):$("LocalStore","Ignoring outdated watch update for ",s,". Current version:",l.version," Watch version:",o.version)}),{nr:i,sr:a}})}function kz1(t,e){const c=X(t);return c.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Az1(t,e){const c=X(t);return c.persistence.runTransaction("Allocate target","readwrite",n=>{let a;return c.Bs.getTargetData(n,e).next(r=>r?(a=r,N.resolve(a)):c.Bs.allocateTargetId(n).next(i=>(a=new e6(e,i,"TargetPurposeListen",n.currentSequenceNumber),c.Bs.addTargetData(n,a).next(()=>a))))}).then(n=>{const a=c.Ji.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(c.Ji=c.Ji.insert(n.targetId,n),c.Yi.set(e,n.targetId)),n})}async function Vs(t,e,c){const n=X(t),a=n.Ji.get(e),r=c?"readwrite":"readwrite-primary";try{c||await n.persistence.runTransaction("Release target",r,i=>n.persistence.referenceDelegate.removeTarget(i,a))}catch(i){if(!k7(i))throw i;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${i}`)}n.Ji=n.Ji.remove(e),n.Yi.delete(a.target)}function Um(t,e,c){const n=X(t);let a=Q.min(),r=n1();return n.persistence.runTransaction("Execute query","readonly",i=>function(s,o,l){const f=X(s),u=f.Yi.get(l);return u!==void 0?N.resolve(f.Ji.get(u)):f.Bs.getTargetData(o,l)}(n,i,E4(e)).next(s=>{if(s)return a=s.lastLimboFreeSnapshotVersion,n.Bs.getMatchingKeysForTargetId(i,s.targetId).next(o=>{r=o})}).next(()=>n.Hi.getDocumentsMatchingQuery(i,e,c?a:Q.min(),c?r:n1())).next(s=>(Tz1(n,Lg1(e),s),{documents:s,ir:r})))}function Tz1(t,e,c){let n=t.Xi.get(e)||Q.min();c.forEach((a,r)=>{r.readTime.compareTo(n)>0&&(n=r.readTime)}),t.Xi.set(e,n)}class jm{constructor(){this.activeTargetIds=kg1()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ez1{constructor(){this.Hr=new jm,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,c,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,c,n){this.Jr[e]=c}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new jm,Promise.resolve()}handleUserChange(e,c,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _z1{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt=null;function fr(){return Tt===null?Tt=268435456+Math.round(2147483648*Math.random()):Tt++,"0x"+Tt.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iz1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pz1{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2="WebChannelConnection";class Dz1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const c=e.ssl?"https":"http";this.mo=c+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,c,n,a,r){const i=fr(),s=this.To(e,c);$("RestConnection",`Sending RPC '${e}' ${i}:`,s,n);const o={};return this.Eo(o,a,r),this.Ao(e,s,o,n).then(l=>($("RestConnection",`Received RPC '${e}' ${i}: `,l),l),l=>{throw j8("RestConnection",`RPC '${e}' ${i} failed with error: `,l,"url: ",s,"request:",n),l})}vo(e,c,n,a,r,i){return this.Io(e,c,n,a,r)}Eo(e,c,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+i5,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),c&&c.headers.forEach((a,r)=>e[r]=a),n&&n.headers.forEach((a,r)=>e[r]=a)}To(e,c){const n=Iz1[e];return`${this.mo}/v1/${c}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,c,n,a){const r=fr();return new Promise((i,s)=>{const o=new Gv1;o.setWithCredentials(!0),o.listenOnce(jv1.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case or.NO_ERROR:const f=o.getResponseJson();$(g2,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),i(f);break;case or.TIMEOUT:$(g2,`RPC '${e}' ${r} timed out`),s(new R(x.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const u=o.getStatus();if($(g2,`RPC '${e}' ${r} failed with status:`,u,"response text:",o.getResponseText()),u>0){let h=o.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const z=function(C){const H=C.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(H)>=0?H:x.UNKNOWN}(p.status);s(new R(z,p.message))}else s(new R(x.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new R(x.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(g2,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(a);$(g2,`RPC '${e}' ${r} sending request:`,a),o.send(c,"POST",l,n,15)})}Ro(e,c,n){const a=fr(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Bv1(),s=Uv1(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.xmlHttpFactory=new Wv1({})),this.Eo(o.initMessageHeaders,c,n),o.encodeInitMessageHeaders=!0;const f=r.join("");$(g2,`Creating RPC '${e}' stream ${a}: ${f}`,o);const u=i.createWebChannel(f,o);let h=!1,p=!1;const z=new Pz1({ro:H=>{p?$(g2,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(h||($(g2,`Opening RPC '${e}' stream ${a} transport.`),u.open(),h=!0),$(g2,`RPC '${e}' stream ${a} sending:`,H),u.send(H))},oo:()=>u.close()}),C=(H,v,m)=>{H.listen(v,g=>{try{m(g)}catch(M){setTimeout(()=>{throw M},0)}})};return C(u,St.EventType.OPEN,()=>{p||$(g2,`RPC '${e}' stream ${a} transport opened.`)}),C(u,St.EventType.CLOSE,()=>{p||(p=!0,$(g2,`RPC '${e}' stream ${a} transport closed`),z.wo())}),C(u,St.EventType.ERROR,H=>{p||(p=!0,j8(g2,`RPC '${e}' stream ${a} transport errored:`,H),z.wo(new R(x.UNAVAILABLE,"The operation could not be completed")))}),C(u,St.EventType.MESSAGE,H=>{var v;if(!p){const m=H.data[0];w1(!!m);const g=m,M=g.error||((v=g[0])===null||v===void 0?void 0:v.error);if(M){$(g2,`RPC '${e}' stream ${a} received error:`,M);const V=M.status;let b=function(T){const E=F1[T];if(E!==void 0)return nA(E)}(V),k=M.message;b===void 0&&(b=x.INTERNAL,k="Unknown error status: "+V+" with message "+M.message),p=!0,z.wo(new R(b,k)),u.close()}else $(g2,`RPC '${e}' stream ${a} received:`,m),z._o(m)}}),C(s,qv1.STAT_EVENT,H=>{H.stat===Hm.PROXY?$(g2,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===Hm.NOPROXY&&$(g2,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{z.fo()},0),z}}function ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t){return new Yg1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,c,n=1e3,a=1.5,r=6e4){this.ii=e,this.timerId=c,this.Po=n,this.bo=a,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const c=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),a=Math.max(0,c-n);a>0&&$("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.So} ms, delay with jitter: ${c} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,a,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,c,n,a,r,i,s,o){this.ii=e,this.$o=n,this.Oo=a,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=s,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new mA(e,c)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,c){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():c&&c.code===x.RESOURCE_EXHAUSTED?(T4(c.toString()),T4("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):c&&c.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(c)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),c=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,a])=>{this.Fo===c&&this.Zo(n,a)},n=>{e(()=>{const a=new R(x.UNKNOWN,"Fetching auth token failed: "+n.message);return this.tu(a)})})}Zo(e,c){const n=this.Xo(this.Fo);this.stream=this.eu(e,c),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(a=>{n(()=>this.tu(a))}),this.stream.onMessage(a=>{n(()=>this.onMessage(a))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return c=>{this.ii.enqueueAndForget(()=>this.Fo===e?c():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rz1 extends pA{constructor(e,c,n,a,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",c,n,a,i),this.serializer=r}eu(e,c){return this.connection.Ro("Listen",e,c)}onMessage(e){this.qo.reset();const c=Xg1(this.serializer,e),n=function(a){if(!("targetChange"in a))return Q.min();const r=a.targetChange;return r.targetIds&&r.targetIds.length?Q.min():r.readTime?J3(r.readTime):Q.min()}(e);return this.listener.nu(c,n)}su(e){const c={};c.database=Ms(this.serializer),c.addTarget=function(a,r){let i;const s=r.target;if(i=ms(s)?{documents:tz1(a,s)}:{query:cz1(a,s)},i.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){i.resumeToken=iA(a,r.resumeToken);const o=zs(a,r.expectedCount);o!==null&&(i.expectedCount=o)}else if(r.snapshotVersion.compareTo(Q.min())>0){i.readTime=Jc(a,r.snapshotVersion.toTimestamp());const o=zs(a,r.expectedCount);o!==null&&(i.expectedCount=o)}return i}(this.serializer,e);const n=az1(this.serializer,e);n&&(c.labels=n),this.Wo(c)}iu(e){const c={};c.database=Ms(this.serializer),c.removeTarget=e,this.Wo(c)}}class Oz1 extends pA{constructor(e,c,n,a,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",c,n,a,i),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,c){return this.connection.Ro("Write",e,c)}onMessage(e){if(w1(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const c=ez1(e.writeResults,e.commitTime),n=J3(e.commitTime);return this.listener.cu(n,c)}return w1(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ms(this.serializer),this.Wo(e)}uu(e){const c={streamToken:this.lastStreamToken,writes:e.map(n=>Jg1(this.serializer,n))};this.Wo(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fz1 extends class{}{constructor(e,c,n,a){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=n,this.serializer=a,this.lu=!1}fu(){if(this.lu)throw new R(x.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,c,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,r])=>this.connection.Io(e,c,n,a,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new R(x.UNKNOWN,a.toString())})}vo(e,c,n,a){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.vo(e,c,n,r,i,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(x.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class $z1{constructor(e,c){this.asyncQueue=e,this.onlineStateHandler=c,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const c=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(T4(c),this.mu=!1):$("OnlineStateTracker",c)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bz1{constructor(e,c,n,a,r){this.localStore=e,this.datastore=c,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(i=>{n.enqueueAndForget(async()=>{R0(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(s){const o=X(s);o.vu.add(4),await _7(o),o.bu.set("Unknown"),o.vu.delete(4),await Nn(o)}(this))})}),this.bu=new $z1(n,a)}}async function Nn(t){if(R0(t))for(const e of t.Ru)await e(!0)}async function _7(t){for(const e of t.Ru)await e(!1)}function vA(t,e){const c=X(t);c.Au.has(e.targetId)||(c.Au.set(e.targetId,e),Xf(c)?Qf(c):o5(c).Ko()&&Zf(c,e))}function gA(t,e){const c=X(t),n=o5(c);c.Au.delete(e),n.Ko()&&zA(c,e),c.Au.size===0&&(n.Ko()?n.jo():R0(c)&&c.bu.set("Unknown"))}function Zf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const c=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(c)}o5(t).su(e)}function zA(t,e){t.Vu.qt(e),o5(t).iu(e)}function Qf(t){t.Vu=new qg1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),o5(t).start(),t.bu.gu()}function Xf(t){return R0(t)&&!o5(t).Uo()&&t.Au.size>0}function R0(t){return X(t).vu.size===0}function CA(t){t.Vu=void 0}async function Uz1(t){t.Au.forEach((e,c)=>{Zf(t,e)})}async function jz1(t,e){CA(t),Xf(t)?(t.bu.Iu(e),Qf(t)):t.bu.set("Unknown")}async function qz1(t,e,c){if(t.bu.set("Online"),e instanceof rA&&e.state===2&&e.cause)try{await async function(n,a){const r=a.cause;for(const i of a.targetIds)n.Au.has(i)&&(await n.remoteSyncer.rejectListen(i,r),n.Au.delete(i),n.Vu.removeTarget(i))}(t,e)}catch(n){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await e9(t,n)}else if(e instanceof tc?t.Vu.Ht(e):e instanceof aA?t.Vu.ne(e):t.Vu.Xt(e),!c.isEqual(Q.min()))try{const n=await dA(t.localStore);c.compareTo(n)>=0&&await function(a,r){const i=a.Vu.ce(r);return i.targetChanges.forEach((s,o)=>{if(s.resumeToken.approximateByteSize()>0){const l=a.Au.get(o);l&&a.Au.set(o,l.withResumeToken(s.resumeToken,r))}}),i.targetMismatches.forEach((s,o)=>{const l=a.Au.get(s);if(!l)return;a.Au.set(s,l.withResumeToken(S2.EMPTY_BYTE_STRING,l.snapshotVersion)),zA(a,s);const f=new e6(l.target,s,o,l.sequenceNumber);Zf(a,f)}),a.remoteSyncer.applyRemoteEvent(i)}(t,c)}catch(n){$("RemoteStore","Failed to raise snapshot:",n),await e9(t,n)}}async function e9(t,e,c){if(!k7(e))throw e;t.vu.add(1),await _7(t),t.bu.set("Offline"),c||(c=()=>dA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await c(),t.vu.delete(1),await Nn(t)})}function HA(t,e){return e().catch(c=>e9(t,c,e))}async function kn(t){const e=X(t),c=w6(e);let n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Wz1(e);)try{const a=await kz1(e.localStore,n);if(a===null){e.Eu.length===0&&c.jo();break}n=a.batchId,Gz1(e,a)}catch(a){await e9(e,a)}MA(e)&&VA(e)}function Wz1(t){return R0(t)&&t.Eu.length<10}function Gz1(t,e){t.Eu.push(e);const c=w6(t);c.Ko()&&c.ou&&c.uu(e.mutations)}function MA(t){return R0(t)&&!w6(t).Uo()&&t.Eu.length>0}function VA(t){w6(t).start()}async function Kz1(t){w6(t).hu()}async function Yz1(t){const e=w6(t);for(const c of t.Eu)e.uu(c.mutations)}async function Zz1(t,e,c){const n=t.Eu.shift(),a=Uf.from(n,e,c);await HA(t,()=>t.remoteSyncer.applySuccessfulWrite(a)),await kn(t)}async function Qz1(t,e){e&&w6(t).ou&&await async function(c,n){if(a=n.code,Bg1(a)&&a!==x.ABORTED){const r=c.Eu.shift();w6(c).Qo(),await HA(c,()=>c.remoteSyncer.rejectFailedWrite(r.batchId,n)),await kn(c)}var a}(t,e),MA(t)&&VA(t)}async function Wm(t,e){const c=X(t);c.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const n=R0(c);c.vu.add(3),await _7(c),n&&c.bu.set("Unknown"),await c.remoteSyncer.handleCredentialChange(e),c.vu.delete(3),await Nn(c)}async function Xz1(t,e){const c=X(t);e?(c.vu.delete(2),await Nn(c)):e||(c.vu.add(2),await _7(c),c.bu.set("Unknown"))}function o5(t){return t.Su||(t.Su=function(e,c,n){const a=X(e);return a.fu(),new Rz1(c,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,n)}(t.datastore,t.asyncQueue,{uo:Uz1.bind(null,t),ao:jz1.bind(null,t),nu:qz1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Xf(t)?Qf(t):t.bu.set("Unknown")):(await t.Su.stop(),CA(t))})),t.Su}function w6(t){return t.Du||(t.Du=function(e,c,n){const a=X(e);return a.fu(),new Oz1(c,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,n)}(t.datastore,t.asyncQueue,{uo:Kz1.bind(null,t),ao:Qz1.bind(null,t),au:Yz1.bind(null,t),cu:Zz1.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await kn(t)):(await t.Du.stop(),t.Eu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,c,n,a,r){this.asyncQueue=e,this.timerId=c,this.targetTimeMs=n,this.op=a,this.removalCallback=r,this.deferred=new m6,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}static createAndSchedule(e,c,n,a,r){const i=Date.now()+n,s=new Jf(e,c,i,a,r);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eu(t,e){if(T4("AsyncQueue",`${e}: ${t}`),k7(t))return new R(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N8{constructor(e){this.comparator=e?(c,n)=>e(c,n)||U.comparator(c.key,n.key):(c,n)=>U.comparator(c.key,n.key),this.keyedMap=j5(),this.sortedSet=new T1(this.comparator)}static emptySet(e){return new N8(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const c=this.keyedMap.get(e);return c?this.sortedSet.indexOf(c):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((c,n)=>(e(c),!1))}add(e){const c=this.delete(e.key);return c.copy(c.keyedMap.insert(e.key,e),c.sortedSet.insert(e,null))}delete(e){const c=this.get(e);return c?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(c)):this}isEqual(e){if(!(e instanceof N8)||this.size!==e.size)return!1;const c=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;c.hasNext();){const a=c.getNext().key,r=n.getNext().key;if(!a.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(c=>{e.push(c.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,c){const n=new N8;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=c,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.Cu=new T1(U.comparator)}track(e){const c=e.doc.key,n=this.Cu.get(c);n?e.type!==0&&n.type===3?this.Cu=this.Cu.insert(c,e):e.type===3&&n.type!==1?this.Cu=this.Cu.insert(c,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Cu=this.Cu.insert(c,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Cu=this.Cu.insert(c,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Cu=this.Cu.remove(c):e.type===1&&n.type===2?this.Cu=this.Cu.insert(c,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Cu=this.Cu.insert(c,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(c,e)}xu(){const e=[];return this.Cu.inorderTraversal((c,n)=>{e.push(n)}),e}}class Y8{constructor(e,c,n,a,r,i,s,o,l){this.query=e,this.docs=c,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=s,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,c,n,a,r){const i=[];return c.forEach(s=>{i.push({type:0,doc:s})}),new Y8(e,c,N8.emptySet(c),i,n,a,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const c=this.docChanges,n=e.docChanges;if(c.length!==n.length)return!1;for(let a=0;a<c.length;a++)if(c[a].type!==n[a].type||!c[a].doc.isEqual(n[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jz1{constructor(){this.Nu=void 0,this.listeners=[]}}class eC1{constructor(){this.queries=new s5(e=>jk(e),yn),this.onlineState="Unknown",this.ku=new Set}}async function tC1(t,e){const c=X(t),n=e.query;let a=!1,r=c.queries.get(n);if(r||(a=!0,r=new Jz1),a)try{r.Nu=await c.onListen(n)}catch(i){const s=eu(i,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(s)}c.queries.set(n,r),r.listeners.push(e),e.Mu(c.onlineState),r.Nu&&e.$u(r.Nu)&&tu(c)}async function cC1(t,e){const c=X(t),n=e.query;let a=!1;const r=c.queries.get(n);if(r){const i=r.listeners.indexOf(e);i>=0&&(r.listeners.splice(i,1),a=r.listeners.length===0)}if(a)return c.queries.delete(n),c.onUnlisten(n)}function nC1(t,e){const c=X(t);let n=!1;for(const a of e){const r=a.query,i=c.queries.get(r);if(i){for(const s of i.listeners)s.$u(a)&&(n=!0);i.Nu=a}}n&&tu(c)}function aC1(t,e,c){const n=X(t),a=n.queries.get(e);if(a)for(const r of a.listeners)r.onError(c);n.queries.delete(e)}function tu(t){t.ku.forEach(e=>{e.next()})}class rC1{constructor(e,c,n){this.query=e,this.Ou=c,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const n=[];for(const a of e.docChanges)a.type!==3&&n.push(a);e=new Y8(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let c=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),c=!0):this.qu(e,this.onlineState)&&(this.Uu(e),c=!0),this.Bu=e,c}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let c=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),c=!0),c}qu(e,c){if(!e.fromCache)return!0;const n=c!=="Offline";return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||c==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const c=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!c)&&this.options.includeMetadataChanges===!0}Uu(e){e=Y8.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.key=e}}class LA{constructor(e){this.key=e}}class iC1{constructor(e,c){this.query=e,this.Yu=c,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=n1(),this.mutatedKeys=n1(),this.tc=qk(e),this.ec=new N8(this.tc)}get nc(){return this.Yu}sc(e,c){const n=c?c.ic:new Gm,a=c?c.ec:this.ec;let r=c?c.mutatedKeys:this.mutatedKeys,i=a,s=!1;const o=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,l=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((f,u)=>{const h=a.get(f),p=Ln(this.query,u)?u:null,z=!!h&&this.mutatedKeys.has(h.key),C=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let H=!1;h&&p?h.data.isEqual(p.data)?z!==C&&(n.track({type:3,doc:p}),H=!0):this.rc(h,p)||(n.track({type:2,doc:p}),H=!0,(o&&this.tc(p,o)>0||l&&this.tc(p,l)<0)&&(s=!0)):!h&&p?(n.track({type:0,doc:p}),H=!0):h&&!p&&(n.track({type:1,doc:h}),H=!0,(o||l)&&(s=!0)),H&&(p?(i=i.add(p),r=C?r.add(f):r.delete(f)):(i=i.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const f=this.query.limitType==="F"?i.last():i.first();i=i.delete(f.key),r=r.delete(f.key),n.track({type:1,doc:f})}return{ec:i,ic:n,zi:s,mutatedKeys:r}}rc(e,c){return e.hasLocalMutations&&c.hasCommittedMutations&&!c.hasLocalMutations}applyChanges(e,c,n){const a=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,f)=>function(u,h){const p=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return p(u)-p(h)}(l.type,f.type)||this.tc(l.doc,f.doc)),this.oc(n);const i=c?this.uc():[],s=this.Zu.size===0&&this.current?1:0,o=s!==this.Xu;return this.Xu=s,r.length!==0||o?{snapshot:new Y8(this.query,e.ec,a,r,e.mutatedKeys,s===0,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:i}:{cc:i}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Gm,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(c=>this.Yu=this.Yu.add(c)),e.modifiedDocuments.forEach(c=>{}),e.removedDocuments.forEach(c=>this.Yu=this.Yu.delete(c)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=n1(),this.ec.forEach(n=>{this.ac(n.key)&&(this.Zu=this.Zu.add(n.key))});const c=[];return e.forEach(n=>{this.Zu.has(n)||c.push(new LA(n))}),this.Zu.forEach(n=>{e.has(n)||c.push(new yA(n))}),c}hc(e){this.Yu=e.ir,this.Zu=n1();const c=this.sc(e.documents);return this.applyChanges(c,!0)}lc(){return Y8.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class sC1{constructor(e,c,n){this.query=e,this.targetId=c,this.view=n}}class oC1{constructor(e){this.key=e,this.fc=!1}}class lC1{constructor(e,c,n,a,r,i){this.localStore=e,this.remoteStore=c,this.eventManager=n,this.sharedClientState=a,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.dc={},this.wc=new s5(s=>jk(s),yn),this._c=new Map,this.mc=new Set,this.gc=new T1(U.comparator),this.yc=new Map,this.Ic=new Gf,this.Tc={},this.Ec=new Map,this.Ac=K8.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function fC1(t,e){const c=HC1(t);let n,a;const r=c.wc.get(e);if(r)n=r.targetId,c.sharedClientState.addLocalQueryTarget(n),a=r.view.lc();else{const i=await Az1(c.localStore,E4(e)),s=c.sharedClientState.addLocalQueryTarget(i.targetId);n=i.targetId,a=await uC1(c,e,n,s==="current",i.resumeToken),c.isPrimaryClient&&vA(c.remoteStore,i)}return a}async function uC1(t,e,c,n,a){t.Rc=(u,h,p)=>async function(z,C,H,v){let m=C.view.sc(H);m.zi&&(m=await Um(z.localStore,C.query,!1).then(({documents:V})=>C.view.sc(V,m)));const g=v&&v.targetChanges.get(C.targetId),M=C.view.applyChanges(m,z.isPrimaryClient,g);return Ym(z,C.targetId,M.cc),M.snapshot}(t,u,h,p);const r=await Um(t.localStore,e,!0),i=new iC1(e,r.ir),s=i.sc(r.documents),o=E7.createSynthesizedTargetChangeForCurrentChange(c,n&&t.onlineState!=="Offline",a),l=i.applyChanges(s,t.isPrimaryClient,o);Ym(t,c,l.cc);const f=new sC1(e,c,i);return t.wc.set(e,f),t._c.has(c)?t._c.get(c).push(e):t._c.set(c,[e]),l.snapshot}async function hC1(t,e){const c=X(t),n=c.wc.get(e),a=c._c.get(n.targetId);if(a.length>1)return c._c.set(n.targetId,a.filter(r=>!yn(r,e))),void c.wc.delete(e);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(n.targetId),c.sharedClientState.isActiveQueryTarget(n.targetId)||await Vs(c.localStore,n.targetId,!1).then(()=>{c.sharedClientState.clearQueryState(n.targetId),gA(c.remoteStore,n.targetId),ys(c,n.targetId)}).catch(N7)):(ys(c,n.targetId),await Vs(c.localStore,n.targetId,!0))}async function dC1(t,e,c){const n=MC1(t);try{const a=await function(r,i){const s=X(r),o=G1.now(),l=i.reduce((h,p)=>h.add(p.key),n1());let f,u;return s.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=_4(),z=n1();return s.Zi.getEntries(h,l).next(C=>{p=C,p.forEach((H,v)=>{v.isValidDocument()||(z=z.add(H))})}).next(()=>s.localDocuments.getOverlayedDocuments(h,p)).next(C=>{f=C;const H=[];for(const v of i){const m=Dg1(v,f.get(v.key).overlayedDocument);m!=null&&H.push(new _6(v.key,m,_k(m.value.mapValue),I3.exists(!0)))}return s.mutationQueue.addMutationBatch(h,o,H,i)}).next(C=>{u=C;const H=C.applyToLocalDocumentSet(f,z);return s.documentOverlayCache.saveOverlays(h,C.batchId,H)})}).then(()=>({batchId:u.batchId,changes:Gk(f)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(a.batchId),function(r,i,s){let o=r.Tc[r.currentUser.toKey()];o||(o=new T1(l1)),o=o.insert(i,s),r.Tc[r.currentUser.toKey()]=o}(n,a.batchId,c),await I7(n,a.changes),await kn(n.remoteStore)}catch(a){const r=eu(a,"Failed to persist write");c.reject(r)}}async function wA(t,e){const c=X(t);try{const n=await Sz1(c.localStore,e);e.targetChanges.forEach((a,r)=>{const i=c.yc.get(r);i&&(w1(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?i.fc=!0:a.modifiedDocuments.size>0?w1(i.fc):a.removedDocuments.size>0&&(w1(i.fc),i.fc=!1))}),await I7(c,n,e)}catch(n){await N7(n)}}function Km(t,e,c){const n=X(t);if(n.isPrimaryClient&&c===0||!n.isPrimaryClient&&c===1){const a=[];n.wc.forEach((r,i)=>{const s=i.view.Mu(e);s.snapshot&&a.push(s.snapshot)}),function(r,i){const s=X(r);s.onlineState=i;let o=!1;s.queries.forEach((l,f)=>{for(const u of f.listeners)u.Mu(i)&&(o=!0)}),o&&tu(s)}(n.eventManager,e),a.length&&n.dc.nu(a),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function mC1(t,e,c){const n=X(t);n.sharedClientState.updateQueryState(e,"rejected",c);const a=n.yc.get(e),r=a&&a.key;if(r){let i=new T1(U.comparator);i=i.insert(r,H2.newNoDocument(r,Q.min()));const s=n1().add(r),o=new bn(Q.min(),new Map,new T1(l1),i,s);await wA(n,o),n.gc=n.gc.remove(r),n.yc.delete(e),cu(n)}else await Vs(n.localStore,e,!1).then(()=>ys(n,e,c)).catch(N7)}async function pC1(t,e){const c=X(t),n=e.batch.batchId;try{const a=await bz1(c.localStore,e);bA(c,n,null),xA(c,n),c.sharedClientState.updateMutationState(n,"acknowledged"),await I7(c,a)}catch(a){await N7(a)}}async function vC1(t,e,c){const n=X(t);try{const a=await function(r,i){const s=X(r);return s.persistence.runTransaction("Reject batch","readwrite-primary",o=>{let l;return s.mutationQueue.lookupMutationBatch(o,i).next(f=>(w1(f!==null),l=f.keys(),s.mutationQueue.removeMutationBatch(o,f))).next(()=>s.mutationQueue.performConsistencyCheck(o)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(o,l,i)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(o,l)).next(()=>s.localDocuments.getDocuments(o,l))})}(n.localStore,e);bA(n,e,c),xA(n,e),n.sharedClientState.updateMutationState(e,"rejected",c),await I7(n,a)}catch(a){await N7(a)}}function xA(t,e){(t.Ec.get(e)||[]).forEach(c=>{c.resolve()}),t.Ec.delete(e)}function bA(t,e,c){const n=X(t);let a=n.Tc[n.currentUser.toKey()];if(a){const r=a.get(e);r&&(c?r.reject(c):r.resolve(),a=a.remove(e)),n.Tc[n.currentUser.toKey()]=a}}function ys(t,e,c=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t._c.get(e))t.wc.delete(n),c&&t.dc.Pc(n,c);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(n=>{t.Ic.containsKey(n)||SA(t,n)})}function SA(t,e){t.mc.delete(e.path.canonicalString());const c=t.gc.get(e);c!==null&&(gA(t.remoteStore,c),t.gc=t.gc.remove(e),t.yc.delete(c),cu(t))}function Ym(t,e,c){for(const n of c)n instanceof yA?(t.Ic.addReference(n.key,e),gC1(t,n)):n instanceof LA?($("SyncEngine","Document no longer in limbo: "+n.key),t.Ic.removeReference(n.key,e),t.Ic.containsKey(n.key)||SA(t,n.key)):G()}function gC1(t,e){const c=e.key,n=c.path.canonicalString();t.gc.get(c)||t.mc.has(n)||($("SyncEngine","New document in limbo: "+c),t.mc.add(n),cu(t))}function cu(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const c=new U(M1.fromString(e)),n=t.Ac.next();t.yc.set(n,new oC1(c)),t.gc=t.gc.insert(c,n),vA(t.remoteStore,new e6(E4($k(c.path)),n,"TargetPurposeLimboResolution",If.ct))}}async function I7(t,e,c){const n=X(t),a=[],r=[],i=[];n.wc.isEmpty()||(n.wc.forEach((s,o)=>{i.push(n.Rc(o,e,c).then(l=>{if((l||c)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){a.push(l);const f=Yf.Li(o.targetId,l);r.push(f)}}))}),await Promise.all(i),n.dc.nu(a),await async function(s,o){const l=X(s);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(o,u=>N.forEach(u.Fi,h=>l.persistence.referenceDelegate.addReference(f,u.targetId,h)).next(()=>N.forEach(u.Bi,h=>l.persistence.referenceDelegate.removeReference(f,u.targetId,h)))))}catch(f){if(!k7(f))throw f;$("LocalStore","Failed to update sequence numbers: "+f)}for(const f of o){const u=f.targetId;if(!f.fromCache){const h=l.Ji.get(u),p=h.snapshotVersion,z=h.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(u,z)}}}(n.localStore,r))}async function zC1(t,e){const c=X(t);if(!c.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const n=await hA(c.localStore,e);c.currentUser=e,function(a,r){a.Ec.forEach(i=>{i.forEach(s=>{s.reject(new R(x.CANCELLED,r))})}),a.Ec.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await I7(c,n.er)}}function CC1(t,e){const c=X(t),n=c.yc.get(e);if(n&&n.fc)return n1().add(n.key);{let a=n1();const r=c._c.get(e);if(!r)return a;for(const i of r){const s=c.wc.get(i);a=a.unionWith(s.view.nc)}return a}}function HC1(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CC1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mC1.bind(null,e),e.dc.nu=nC1.bind(null,e.eventManager),e.dc.Pc=aC1.bind(null,e.eventManager),e}function MC1(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pC1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vC1.bind(null,e),e}class Zm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sn(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,c){return null}createIndexBackfillerScheduler(e,c){return null}createLocalStore(e){return xz1(this.persistence,new Lz1,e.initialUser,this.serializer)}createPersistence(e){return new Vz1(Kf.zs,this.serializer)}createSharedClientState(e){return new Ez1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VC1{async initialize(e,c){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(c),this.remoteStore=this.createRemoteStore(c),this.eventManager=this.createEventManager(c),this.syncEngine=this.createSyncEngine(c,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Km(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=zC1.bind(null,this.syncEngine),await Xz1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eC1}createDatastore(e){const c=Sn(e.databaseInfo.databaseId),n=(a=e.databaseInfo,new Dz1(a));var a;return function(r,i,s,o){return new Fz1(r,i,s,o)}(e.authCredentials,e.appCheckCredentials,n,c)}createRemoteStore(e){return c=this.localStore,n=this.datastore,a=e.asyncQueue,r=s=>Km(this.syncEngine,s,0),i=qm.D()?new qm:new _z1,new Bz1(c,n,a,r,i);var c,n,a,r,i}createSyncEngine(e,c){return function(n,a,r,i,s,o,l){const f=new lC1(n,a,r,i,s,o);return l&&(f.vc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,c)}terminate(){return async function(e){const c=X(e);$("RemoteStore","RemoteStore shutting down."),c.vu.add(5),await _7(c),c.Pu.shutdown(),c.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):T4("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,c){this.muted||setTimeout(()=>{this.muted||e(c)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC1{constructor(e,c,n,a){this.authCredentials=e,this.appCheckCredentials=c,this.asyncQueue=n,this.databaseInfo=a,this.user=z2.UNAUTHENTICATED,this.clientId=Ak.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async r=>{$("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(n,r=>($("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new m6;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(c){const n=eu(c,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function hr(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const c=await t.getConfiguration();await e.initialize(c);let n=c.initialUser;t.setCredentialChangeListener(async a=>{n.isEqual(a)||(await hA(e.localStore,a),n=a)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qm(t,e){t.asyncQueue.verifyOperationInProgress();const c=await xC1(t);$("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(c,n),t.setCredentialChangeListener(a=>Wm(e.remoteStore,a)),t.setAppCheckTokenChangeListener((a,r)=>Wm(e.remoteStore,r)),t._onlineComponents=e}function wC1(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function xC1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await hr(t,t._uninitializedComponentsProvider._offline)}catch(e){const c=e;if(!wC1(c))throw c;j8("Error using user provided cache. Falling back to memory cache: "+c),await hr(t,new Zm)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await hr(t,new Zm);return t._offlineComponents}async function NA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Qm(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Qm(t,new VC1))),t._onlineComponents}function bC1(t){return NA(t).then(e=>e.syncEngine)}async function SC1(t){const e=await NA(t),c=e.eventManager;return c.onListen=fC1.bind(null,e.syncEngine),c.onUnlisten=hC1.bind(null,e.syncEngine),c}function NC1(t,e,c={}){const n=new m6;return t.asyncQueue.enqueueAndForget(async()=>function(a,r,i,s,o){const l=new yC1({next:u=>{r.enqueueAndForget(()=>cC1(a,f)),u.fromCache&&s.source==="server"?o.reject(new R(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(u)},error:u=>o.reject(u)}),f=new rC1(i,l,{includeMetadataChanges:!0,Ku:!0});return tC1(a,f)}(await SC1(t),t.asyncQueue,e,c,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(t,e,c){if(!c)throw new R(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kC1(t,e,c,n){if(e===!0&&n===!0)throw new R(x.INVALID_ARGUMENT,`${t} and ${c} cannot be used together.`)}function Jm(t){if(!U.isDocumentKey(t))throw new R(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ep(t){if(U.isDocumentKey(t))throw new R(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function An(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(c){return c.constructor?c.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function y0(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=An(t);throw new R(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${c}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){var c,n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(c=e.ssl)===null||c===void 0||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kC1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kA((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new R(x.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new R(x.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new R(x.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(c=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,c.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var c,n}}class Tn{constructor(e,c,n,a){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tp(e),e.credentials!==void 0&&(this._authCredentials=function(c){if(!c)return new Yv1;switch(c.type){case"firstParty":return new Jv1(c.sessionIndex||"0",c.iamToken||null,c.authTokenFactory||null);case"provider":return c.client;default:throw new R(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const c=Xm.get(e);c&&($("ComponentProvider","Removing Datastore"),Xm.delete(e),c.terminate())}(this),Promise.resolve()}}function AC1(t,e,c,n={}){var a;const r=(t=y0(t,Tn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&j8("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${c}`,ssl:!1})),n.mockUserToken){let i,s;if(typeof n.mockUserToken=="string")i=n.mockUserToken,s=z2.MOCK_USER;else{i=zN(n.mockUserToken,(a=t._app)===null||a===void 0?void 0:a.options.projectId);const o=n.mockUserToken.sub||n.mockUserToken.user_id;if(!o)throw new R(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new z2(o)}t._authCredentials=new Zv1(new kk(i,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e,c,n){this.converter=c,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new p6(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new t3(this.firestore,e,this._key)}}class l5{constructor(e,c,n){this.converter=c,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new l5(this.firestore,e,this._query)}}class p6 extends l5{constructor(e,c,n){super(e,c,$k(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new t3(this.firestore,null,new U(e))}withConverter(e){return new p6(this.firestore,e,this._path)}}function nu(t,e,...c){if(t=Y1(t),AA("collection","path",e),t instanceof Tn){const n=M1.fromString(e,...c);return ep(n),new p6(t,null,n)}{if(!(t instanceof t3||t instanceof p6))throw new R(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(M1.fromString(e,...c));return ep(n),new p6(t.firestore,null,n)}}function Ge(t,e,...c){if(t=Y1(t),arguments.length===1&&(e=Ak.A()),AA("doc","path",e),t instanceof Tn){const n=M1.fromString(e,...c);return Jm(n),new t3(t,null,new U(n))}{if(!(t instanceof t3||t instanceof p6))throw new R(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(M1.fromString(e,...c));return Jm(n),new t3(t.firestore,t instanceof p6?t.converter:null,new U(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC1{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new mA(this,"async_queue_retry"),this.Xc=()=>{const c=ur();c&&$("AsyncQueue","Visibility state changed to "+c.visibilityState),this.qo.Mo()};const e=ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const c=ur();c&&typeof c.removeEventListener=="function"&&c.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const c=new m6;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(c.resolve,c.reject),c.promise)).then(()=>c.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!k7(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const c=this.Gc.then(()=>(this.Hc=!0,e().catch(n=>{this.Wc=n,this.Hc=!1;const a=function(r){let i=r.message||"";return r.stack&&(i=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),i}(n);throw T4("INTERNAL UNHANDLED ERROR: ",a),n}).then(n=>(this.Hc=!1,n))));return this.Gc=c,c}enqueueAfterDelay(e,c,n){this.Zc(),this.Yc.indexOf(e)>-1&&(c=0);const a=Jf.createAndSchedule(this,e,c,n,r=>this.na(r));return this.zc.push(a),a}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const c of this.zc)if(c.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((c,n)=>c.targetTimeMs-n.targetTimeMs);for(const c of this.zc)if(c.skipDelay(),e!=="all"&&c.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const c=this.zc.indexOf(e);this.zc.splice(c,1)}}class P7 extends Tn{constructor(e,c,n,a){super(e,c,n,a),this.type="firestore",this._queue=new TC1,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||EA(this),this._firestoreClient.terminate()}}function EC1(t,e){const c=typeof t=="object"?t:rn(),n=typeof t=="string"?t:e||"(default)",a=_0(c,"firestore").getImmediate({identifier:n});if(!a._initialized){const r=pN("firestore");r&&AC1(a,...r)}return a}function TA(t){return t._firestoreClient||EA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function EA(t){var e,c,n;const a=t._freezeSettings(),r=function(i,s,o,l){return new ug1(i,s,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,kA(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,a);t._firestoreClient=new LC1(t._authCredentials,t._appCheckCredentials,t._queue,r),!((c=a.cache)===null||c===void 0)&&c._offlineComponentProvider&&(!((n=a.cache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.cache.kind,_offline:a.cache._offlineComponentProvider,_online:a.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z8{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Z8(S2.fromBase64String(e))}catch(c){throw new R(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+c)}}static fromUint8Array(e){return new Z8(S2.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(...e){for(let c=0;c<e.length;++c)if(e[c].length===0)throw new R(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new M2(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new R(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new R(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return l1(this._lat,e._lat)||l1(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C1=/^__.*__$/;class IC1{constructor(e,c,n){this.data=e,this.fieldMask=c,this.fieldTransforms=n}toMutation(e,c){return this.fieldMask!==null?new _6(e,this.data,this.fieldMask,c,this.fieldTransforms):new T7(e,this.data,c,this.fieldTransforms)}}class _A{constructor(e,c,n){this.data=e,this.fieldMask=c,this.fieldTransforms=n}toMutation(e,c){return new _6(e,this.data,this.fieldMask,c,this.fieldTransforms)}}function IA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class iu{constructor(e,c,n,a,r,i){this.settings=e,this.databaseId=c,this.serializer=n,this.ignoreUndefinedProperties=a,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var c;const n=(c=this.path)===null||c===void 0?void 0:c.child(e),a=this.aa({path:n,la:!1});return a.fa(e),a}da(e){var c;const n=(c=this.path)===null||c===void 0?void 0:c.child(e),a=this.aa({path:n,la:!1});return a.ua(),a}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return t9(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(c=>e.isPrefixOf(c))!==void 0||this.fieldTransforms.find(c=>e.isPrefixOf(c.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(IA(this.ca)&&_C1.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class PC1{constructor(e,c,n){this.databaseId=e,this.ignoreUndefinedProperties=c,this.serializer=n||Sn(e)}ya(e,c,n,a=!1){return new iu({ca:e,methodName:c,ga:n,path:M2.emptyPath(),la:!1,ma:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function su(t){const e=t._freezeSettings(),c=Sn(t._databaseId);return new PC1(t._databaseId,!!e.ignoreUndefinedProperties,c)}function DC1(t,e,c,n,a,r={}){const i=t.ya(r.merge||r.mergeFields?2:0,e,c,a);ou("Data must be an object, but it was:",i,n);const s=PA(n,i);let o,l;if(r.merge)o=new Q2(i.fieldMask),l=i.fieldTransforms;else if(r.mergeFields){const f=[];for(const u of r.mergeFields){const h=Ls(e,u,c);if(!i.contains(h))throw new R(x.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);RA(f,h)||f.push(h)}o=new Q2(f),l=i.fieldTransforms.filter(u=>o.covers(u.field))}else o=null,l=i.fieldTransforms;return new IC1(new $2(s),o,l)}class _n extends au{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _n}}function RC1(t,e,c,n){const a=t.ya(1,e,c);ou("Data must be an object, but it was:",a,n);const r=[],i=$2.empty();D0(n,(o,l)=>{const f=lu(e,o,c);l=Y1(l);const u=a.da(f);if(l instanceof _n)r.push(f);else{const h=D7(l,u);h!=null&&(r.push(f),i.set(f,h))}});const s=new Q2(r);return new _A(i,s,a.fieldTransforms)}function OC1(t,e,c,n,a,r){const i=t.ya(1,e,c),s=[Ls(e,n,c)],o=[a];if(r.length%2!=0)throw new R(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)s.push(Ls(e,r[h])),o.push(r[h+1]);const l=[],f=$2.empty();for(let h=s.length-1;h>=0;--h)if(!RA(l,s[h])){const p=s[h];let z=o[h];z=Y1(z);const C=i.da(p);if(z instanceof _n)l.push(p);else{const H=D7(z,C);H!=null&&(l.push(p),f.set(p,H))}}const u=new Q2(l);return new _A(f,u,i.fieldTransforms)}function FC1(t,e,c,n=!1){return D7(c,t.ya(n?4:3,e))}function D7(t,e){if(DA(t=Y1(t)))return ou("Unsupported field value:",e,t),PA(t,e);if(t instanceof au)return function(c,n){if(!IA(n.ca))throw n._a(`${c._methodName}() can only be used with update() and set()`);if(!n.path)throw n._a(`${c._methodName}() is not currently supported inside arrays`);const a=c._toFieldTransform(n);a&&n.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(c,n){const a=[];let r=0;for(const i of c){let s=D7(i,n.wa(r));s==null&&(s={nullValue:"NULL_VALUE"}),a.push(s),r++}return{arrayValue:{values:a}}}(t,e)}return function(c,n){if((c=Y1(c))===null)return{nullValue:"NULL_VALUE"};if(typeof c=="number")return Ag1(n.serializer,c);if(typeof c=="boolean")return{booleanValue:c};if(typeof c=="string")return{stringValue:c};if(c instanceof Date){const a=G1.fromDate(c);return{timestampValue:Jc(n.serializer,a)}}if(c instanceof G1){const a=new G1(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:Jc(n.serializer,a)}}if(c instanceof ru)return{geoPointValue:{latitude:c.latitude,longitude:c.longitude}};if(c instanceof Z8)return{bytesValue:iA(n.serializer,c._byteString)};if(c instanceof t3){const a=n.databaseId,r=c.firestore._databaseId;if(!r.isEqual(a))throw n._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Wf(c.firestore._databaseId||n.databaseId,c._key.path)}}throw n._a(`Unsupported field value: ${An(c)}`)}(t,e)}function PA(t,e){const c={};return Tk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):D0(t,(n,a)=>{const r=D7(a,e.ha(n));r!=null&&(c[n]=r)}),{mapValue:{fields:c}}}function DA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof G1||t instanceof ru||t instanceof Z8||t instanceof t3||t instanceof au)}function ou(t,e,c){if(!DA(c)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(c)){const n=An(c);throw n==="an object"?e._a(t+" a custom object"):e._a(t+" "+n)}}function Ls(t,e,c){if((e=Y1(e))instanceof En)return e._internalPath;if(typeof e=="string")return lu(t,e);throw t9("Field path arguments must be of type string or ",t,!1,void 0,c)}const $C1=new RegExp("[~\\*/\\[\\]]");function lu(t,e,c){if(e.search($C1)>=0)throw t9(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,c);try{return new En(...e.split("."))._internalPath}catch{throw t9(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,c)}}function t9(t,e,c,n,a){const r=n&&!n.isEmpty(),i=a!==void 0;let s=`Function ${e}() called with invalid data`;c&&(s+=" (via `toFirestore()`)"),s+=". ";let o="";return(r||i)&&(o+=" (found",r&&(o+=` in field ${n}`),i&&(o+=` in document ${a}`),o+=")"),new R(x.INVALID_ARGUMENT,s+t+o)}function RA(t,e){return t.some(c=>c.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,c,n,a,r){this._firestore=e,this._userDataWriter=c,this._key=n,this._document=a,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new t3(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BC1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(fu("DocumentSnapshot.get",e));if(c!==null)return this._userDataWriter.convertValue(c)}}}class BC1 extends OA{data(){return super.data()}}function fu(t,e){return typeof e=="string"?lu(t,e):e instanceof En?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uu{}class jC1 extends uu{}function FA(t,e,...c){let n=[];e instanceof uu&&n.push(e),n=n.concat(c),function(a){const r=a.filter(s=>s instanceof hu).length,i=a.filter(s=>s instanceof In).length;if(r>1||r>0&&i>0)throw new R(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const a of n)t=a._apply(t);return t}class In extends jC1{constructor(e,c,n){super(),this._field=e,this._op=c,this._value=n,this.type="where"}static _create(e,c,n){return new In(e,c,n)}_apply(e){const c=this._parse(e);return $A(e._query,c),new l5(e.firestore,e.converter,ps(e._query,c))}_parse(e){const c=su(e.firestore);return function(a,r,i,s,o,l,f){let u;if(o.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){np(f,l);const h=[];for(const p of f)h.push(cp(s,a,p));u={arrayValue:{values:h}}}else u=cp(s,a,f)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||np(f,l),u=FC1(i,r,f,l==="in"||l==="not-in");return U1.create(o,l,u)}(e._query,"where",c,e.firestore._databaseId,this._field,this._op,this._value)}}function oe(t,e,c){const n=e,a=fu("where",t);return In._create(a,n,c)}class hu extends uu{constructor(e,c){super(),this.type=e,this._queryConstraints=c}static _create(e,c){return new hu(e,c)}_parse(e){const c=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return c.length===1?c[0]:O3.create(c,this._getOperator())}_apply(e){const c=this._parse(e);return c.getFilters().length===0?e:(function(n,a){let r=n;const i=a.getFlattenedFilters();for(const s of i)$A(r,s),r=ps(r,s)}(e._query,c),new l5(e.firestore,e.converter,ps(e._query,c)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function cp(t,e,c){if(typeof(c=Y1(c))=="string"){if(c==="")throw new R(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uk(e)&&c.indexOf("/")!==-1)throw new R(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);const n=e.path.child(M1.fromString(c));if(!U.isDocumentKey(n))throw new R(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return xm(t,new U(n))}if(c instanceof t3)return xm(t,c._key);throw new R(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${An(c)}.`)}function np(t,e){if(!Array.isArray(t)||t.length===0)throw new R(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $A(t,e){if(e.isInequality()){const n=$f(t),a=e.field;if(n!==null&&!n.isEqual(a))throw new R(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${a.toString()}'`);const r=Bk(t);r!==null&&qC1(t,a,r)}const c=function(n,a){for(const r of n)for(const i of r.getFlattenedFilters())if(a.indexOf(i.op)>=0)return i.op;return null}(t.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(c!==null)throw c===e.op?new R(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${c.toString()}' filters.`)}function qC1(t,e,c){if(!c.isEqual(e))throw new R(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${c.toString()}' instead.`)}class WC1{convertValue(e,c="none"){switch(V0(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $1(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(M0(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw G()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const n={};return D0(e,(a,r)=>{n[a]=this.convertValue(r,c)}),n}convertGeoPoint(e){return new ru($1(e.latitude),$1(e.longitude))}convertArray(e,c){return(e.values||[]).map(n=>this.convertValue(n,c))}convertServerTimestamp(e,c){switch(c){case"previous":const n=Df(e);return n==null?null:this.convertValue(n,c);case"estimate":return this.convertTimestamp(Be(e));default:return null}}convertTimestamp(e){const c=L6(e);return new G1(c.seconds,c.nanos)}convertDocumentKey(e,c){const n=M1.fromString(e);w1(uA(n));const a=new Ue(n.get(1),n.get(3)),r=new U(n.popFirst(5));return a.isEqual(c)||T4(`Document ${r} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC1(t,e,c){let n;return n=t?c&&(c.merge||c.mergeFields)?t.toFirestore(e,c):t.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,c){this.hasPendingWrites=e,this.fromCache=c}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KC1 extends OA{constructor(e,c,n,a,r,i){super(e,c,n,a,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const c=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(c,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,c={}){if(this._document){const n=this._document.data.field(fu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,c.serverTimestamps)}}}class cc extends KC1{data(e={}){return super.data(e)}}class YC1{constructor(e,c,n,a){this._firestore=e,this._userDataWriter=c,this._snapshot=a,this.metadata=new Et(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach(c=>e.push(c)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,c){this._snapshot.docs.forEach(n=>{e.call(c,new cc(this._firestore,this._userDataWriter,n.key,n,new Et(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const c=!!e.includeMetadataChanges;if(c&&this._snapshot.excludesMetadataChanges)throw new R(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===c||(this._cachedChanges=function(n,a){if(n._snapshot.oldDocs.isEmpty()){let r=0;return n._snapshot.docChanges.map(i=>{const s=new cc(n._firestore,n._userDataWriter,i.doc.key,i.doc,new Et(n._snapshot.mutatedKeys.has(i.doc.key),n._snapshot.fromCache),n.query.converter);return i.doc,{type:"added",doc:s,oldIndex:-1,newIndex:r++}})}{let r=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(i=>a||i.type!==3).map(i=>{const s=new cc(n._firestore,n._userDataWriter,i.doc.key,i.doc,new Et(n._snapshot.mutatedKeys.has(i.doc.key),n._snapshot.fromCache),n.query.converter);let o=-1,l=-1;return i.type!==0&&(o=r.indexOf(i.doc.key),r=r.delete(i.doc.key)),i.type!==1&&(r=r.add(i.doc),l=r.indexOf(i.doc.key)),{type:ZC1(i.type),doc:s,oldIndex:o,newIndex:l}})}}(this,c),this._cachedChangesIncludeMetadataChanges=c),this._cachedChanges}}function ZC1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class QC1 extends WC1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Z8(e)}convertReference(e){const c=this.convertDocumentKey(e,this.firestore._databaseId);return new t3(this.firestore,null,c)}}function BA(t){t=y0(t,l5);const e=y0(t.firestore,P7),c=TA(e),n=new QC1(e);return UC1(t._query),NC1(c,t._query).then(a=>new YC1(e,n,t,a))}function UA(t,e,c,...n){t=y0(t,t3);const a=y0(t.firestore,P7),r=su(a);let i;return i=typeof(e=Y1(e))=="string"||e instanceof En?OC1(r,"updateDoc",t._key,e,c,n):RC1(r,"updateDoc",t._key,e),du(a,[i.toMutation(t._key,I3.exists(!0))])}function jA(t){return du(y0(t.firestore,P7),[new Bf(t._key,I3.none())])}function XC1(t,e){const c=y0(t.firestore,P7),n=Ge(t),a=GC1(t.converter,e);return du(c,[DC1(su(t.firestore),"addDoc",n._key,a,t.converter!==null,{}).toMutation(n._key,I3.exists(!1))]).then(()=>n)}function du(t,e){return function(c,n){const a=new m6;return c.asyncQueue.enqueueAndForget(async()=>dC1(await bC1(c),n,a)),a.promise}(TA(t),e)}(function(t,e=!0){(function(c){i5=c})(I0),D3(new M3("firestore",(c,{instanceIdentifier:n,options:a})=>{const r=c.getProvider("app").getImmediate(),i=new P7(new Qv1(c.getProvider("auth-internal")),new tg1(c.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new R(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(s.options.projectId,o)}(r,n),r);return a=Object.assign({useFetchStreams:e},a),i._setSettings(a),i},"PUBLIC").setMultipleInstances(!0)),W2(Mm,"3.12.0",t),W2(Mm,"3.12.0","esm2017")})();function mu(t,e){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(c[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(c[n[a]]=t[n[a]]);return c}function qA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JC1=qA,WA=new E0("auth","Firebase",qA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c9=new ff("@firebase/auth");function eH1(t,...e){c9.logLevel<=o1.WARN&&c9.warn(`Auth (${I0}): ${t}`,...e)}function nc(t,...e){c9.logLevel<=o1.ERROR&&c9.error(`Auth (${I0}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(t,...e){throw pu(t,...e)}function e4(t,...e){return pu(t,...e)}function tH1(t,e,c){const n=Object.assign(Object.assign({},JC1()),{[e]:c});return new E0("auth","Firebase",n).create(e,{appName:t.name})}function pu(t,...e){if(typeof t!="string"){const c=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(c,...n)}return WA.create(t,...e)}function W(t,e,...c){if(!t)throw pu(e,...c)}function C4(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function I4(t,e){t||C4(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cH1(){return ap()==="http:"||ap()==="https:"}function ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nH1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cH1()||bm1()||"connection"in navigator)?navigator.onLine:!0}function aH1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R7{constructor(e,c){this.shortDelay=e,this.longDelay=c,I4(c>e,"Short delay should be less than long delay!"),this.isMobile=xm1()||Sm1()}get(){return nH1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t,e){I4(t.emulator,"Emulator should always be set here");const{url:c}=t.emulator;return e?`${c}${e.startsWith("/")?e.slice(1):e}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{static initialize(e,c,n){this.fetchImpl=e,c&&(this.headersImpl=c),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;C4("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;C4("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;C4("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rH1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iH1=new R7(3e4,6e4);function f5(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function O0(t,e,c,n,a={}){return KA(t,a,async()=>{let r={},i={};n&&(e==="GET"?i=n:r={body:JSON.stringify(n)});const s=C7(Object.assign({key:t.config.apiKey},i)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),GA.fetch()(YA(t,t.config.apiHost,c,s),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},r))})}async function KA(t,e,c){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},rH1),e);try{const a=new sH1(t),r=await Promise.race([c(),a.promise]);a.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw _t(t,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const s=r.ok?i.errorMessage:i.error.message,[o,l]=s.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw _t(t,"credential-already-in-use",i);if(o==="EMAIL_EXISTS")throw _t(t,"email-already-in-use",i);if(o==="USER_DISABLED")throw _t(t,"user-disabled",i);const f=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw tH1(t,f,l);F3(t,f)}}catch(a){if(a instanceof B3)throw a;F3(t,"network-request-failed",{message:String(a)})}}async function Pn(t,e,c,n,a={}){const r=await O0(t,e,c,n,a);return"mfaPendingCredential"in r&&F3(t,"multi-factor-auth-required",{_serverResponse:r}),r}function YA(t,e,c,n){const a=`${e}${c}?${n}`;return t.config.emulator?vu(t.config,a):`${t.config.apiScheme}://${a}`}class sH1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((c,n)=>{this.timer=setTimeout(()=>n(e4(this.auth,"network-request-failed")),iH1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _t(t,e,c){const n={appName:t.name};c.email&&(n.email=c.email),c.phoneNumber&&(n.phoneNumber=c.phoneNumber);const a=e4(t,e,n);return a.customData._tokenResponse=c,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oH1(t,e){return O0(t,"POST","/v1/accounts:delete",e)}async function lH1(t,e){return O0(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fH1(t,e=!1){const c=Y1(t),n=await c.getIdToken(e),a=gu(n);W(a&&a.exp&&a.auth_time&&a.iat,c.auth,"internal-error");const r=typeof a.firebase=="object"?a.firebase:void 0,i=r==null?void 0:r.sign_in_provider;return{claims:a,token:n,authTime:le(dr(a.auth_time)),issuedAtTime:le(dr(a.iat)),expirationTime:le(dr(a.exp)),signInProvider:i||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function dr(t){return Number(t)*1e3}function gu(t){const[e,c,n]=t.split(".");if(e===void 0||c===void 0||n===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const a=dN(c);return a?JSON.parse(a):(nc("Failed to decode base64 JWT payload"),null)}catch(a){return nc("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function uH1(t){const e=gu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(t,e,c=!1){if(c)return e;try{return await e}catch(n){throw n instanceof B3&&hH1(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function hH1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dH1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=((c=this.user.stsTokenManager.expirationTime)!==null&&c!==void 0?c:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=le(this.lastLoginAt),this.creationTime=le(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n9(t){var e;const c=t.auth,n=await t.getIdToken(),a=await Ke(t,lH1(c,{idToken:n}));W(a==null?void 0:a.users.length,c,"internal-error");const r=a.users[0];t._notifyReloadListener(r);const i=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vH1(r.providerUserInfo):[],s=pH1(t.providerData,i),o=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(s!=null&&s.length),f=o?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ZA(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function mH1(t){const e=Y1(t);await n9(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pH1(t,e){return[...t.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function vH1(t){return t.map(e=>{var{providerId:c}=e,n=mu(e,["providerId"]);return{providerId:c,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gH1(t,e){const c=await KA(t,{},async()=>{const n=C7({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:r}=t.config,i=YA(t,a,"/v1/token",`key=${r}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",GA.fetch()(i,{method:"POST",headers:s,body:n})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const c="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uH1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!c&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:n,refreshToken:a,expiresIn:r}=await gH1(e,c);this.updateTokensAndExpiration(n,a,Number(r))}updateTokensAndExpiration(e,c,n){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,c){const{refreshToken:n,accessToken:a,expirationTime:r}=c,i=new Ye;return n&&(W(typeof n=="string","internal-error",{appName:e}),i.refreshToken=n),a&&(W(typeof a=="string","internal-error",{appName:e}),i.accessToken=a),r&&(W(typeof r=="number","internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ye,this.toJSON())}_performRefresh(){return C4("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class o0{constructor(e){var{uid:c,auth:n,stsTokenManager:a}=e,r=mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dH1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ZA(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const c=await Ke(this,this.stsTokenManager.getToken(this.auth,e));return W(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return fH1(this,e)}reload(){return mH1(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(c=>Object.assign({},c)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new o0(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),c&&await n9(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ke(this,oH1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var n,a,r,i,s,o,l,f;const u=(n=c.displayName)!==null&&n!==void 0?n:void 0,h=(a=c.email)!==null&&a!==void 0?a:void 0,p=(r=c.phoneNumber)!==null&&r!==void 0?r:void 0,z=(i=c.photoURL)!==null&&i!==void 0?i:void 0,C=(s=c.tenantId)!==null&&s!==void 0?s:void 0,H=(o=c._redirectEventId)!==null&&o!==void 0?o:void 0,v=(l=c.createdAt)!==null&&l!==void 0?l:void 0,m=(f=c.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:M,isAnonymous:V,providerData:b,stsTokenManager:k}=c;W(g&&k,e,"internal-error");const T=Ye.fromJSON(this.name,k);W(typeof g=="string",e,"internal-error"),B4(u,e.name),B4(h,e.name),W(typeof M=="boolean",e,"internal-error"),W(typeof V=="boolean",e,"internal-error"),B4(p,e.name),B4(z,e.name),B4(C,e.name),B4(H,e.name),B4(v,e.name),B4(m,e.name);const E=new o0({uid:g,auth:e,email:h,emailVerified:M,displayName:u,isAnonymous:V,photoURL:z,phoneNumber:p,tenantId:C,stsTokenManager:T,createdAt:v,lastLoginAt:m});return b&&Array.isArray(b)&&(E.providerData=b.map(A=>Object.assign({},A))),H&&(E._redirectEventId=H),E}static async _fromIdTokenResponse(e,c,n=!1){const a=new Ye;a.updateFromServerResponse(c);const r=new o0({uid:c.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await n9(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=new Map;function H4(t){I4(t instanceof Function,"Expected a class definition");let e=rp.get(t);return e?(I4(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return c===void 0?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}QA.type="NONE";const ip=QA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t,e,c){return`firebase:${t}:${e}:${c}`}class k8{constructor(e,c,n){this.persistence=e,this.auth=c,this.userKey=n;const{config:a,name:r}=this.auth;this.fullUserKey=ac(this.userKey,a.apiKey,r),this.fullPersistenceKey=ac("persistence",a.apiKey,r),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?o0._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,c)return this.setCurrentUser(c)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,n="authUser"){if(!c.length)return new k8(H4(ip),e,n);const a=(await Promise.all(c.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=a[0]||H4(ip);const i=ac(n,e.config.apiKey,e.name);let s=null;for(const l of c)try{const f=await l._get(i);if(f){const u=o0._fromJSON(e,f);l!==r&&(s=u),r=l;break}}catch{}const o=a.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new k8(r,e,n):(r=o[0],s&&await r._set(i,s.toJSON()),await Promise.all(c.map(async l=>{if(l!==r)try{await l._remove(i)}catch{}})),new k8(r,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cT(e))return"Blackberry";if(nT(e))return"Webos";if(zu(e))return"Safari";if((e.includes("chrome/")||JA(e))&&!e.includes("edge/"))return"Chrome";if(tT(e))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(c);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function XA(t=b2()){return/firefox\//i.test(t)}function zu(t=b2()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JA(t=b2()){return/crios\//i.test(t)}function eT(t=b2()){return/iemobile/i.test(t)}function tT(t=b2()){return/android/i.test(t)}function cT(t=b2()){return/blackberry/i.test(t)}function nT(t=b2()){return/webos/i.test(t)}function Dn(t=b2()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zH1(t=b2()){var e;return Dn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CH1(){return Nm1()&&document.documentMode===10}function aT(t=b2()){return Dn(t)||tT(t)||nT(t)||cT(t)||/windows phone/i.test(t)||eT(t)}function HH1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e=[]){let c;switch(t){case"Browser":c=sp(b2());break;case"Worker":c=`${sp(b2())}-${t}`;break;default:c=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${c}/JsCore/${I0}/${n}`}async function iT(t,e){return O0(t,"GET","/v2/recaptchaConfig",f5(t,e))}function op(t){return t!==void 0&&t.enterprise!==void 0}class sT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(c=>c.provider==="EMAIL_PASSWORD_PROVIDER"&&c.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MH1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oT(t){return new Promise((e,c)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=a=>{const r=e4("internal-error");r.customData=a,c(r)},n.type="text/javascript",n.charset="UTF-8",MH1().appendChild(n)})}function VH1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yH1="https://www.google.com/recaptcha/enterprise.js?render=",LH1="recaptcha-enterprise",wH1="NO_RECAPTCHA";class lT{constructor(e){this.type=LH1,this.auth=u5(e)}async verify(e="verify",c=!1){async function n(r){if(!c){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(i,s)=>{iT(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const l=new sT(o);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,i(l.siteKey)}}).catch(o=>{s(o)})})}function a(r,i,s){const o=window.grecaptcha;op(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(l=>{i(l)}).catch(()=>{i(wH1)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,i)=>{n(this.auth).then(s=>{if(!c&&op(window.grecaptcha))a(s,r,i);else{if(typeof window>"u"){i(new Error("RecaptchaVerifier is only supported in browser"));return}oT(yH1+s).then(()=>{a(s,r,i)}).catch(o=>{i(o)})}}).catch(s=>{i(s)})})}}async function a9(t,e,c,n=!1){const a=new lT(t);let r;try{r=await a.verify(c)}catch{r=await a.verify(c,!0)}const i=Object.assign({},e);return n?Object.assign(i,{captchaResp:r}):Object.assign(i,{captchaResponse:r}),Object.assign(i,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(i,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),i}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xH1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const n=r=>new Promise((i,s)=>{try{const o=e(r);i(o)}catch(o){s(o)}});n.onAbort=c,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const n of this.queue)await n(e),n.onAbort&&c.push(n.onAbort)}catch(n){c.reverse();for(const a of c)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bH1{constructor(e,c,n,a){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new xH1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=WA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=H4(c)),this._initializationPromise=this.queue(async()=>{var n,a;if(!this._deleted&&(this.persistenceManager=await k8.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(c),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var c;const n=await this.assertedPersistence.getCurrentUser();let a=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId,s=a==null?void 0:a._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o!=null&&o.user)&&(a=o.user,r=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(a)}catch(i){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await n9(e)}catch(c){if((c==null?void 0:c.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aH1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?Y1(e):null;return c&&W(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(H4(e))})}async initializeRecaptchaConfig(){const e=await iT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),c=new sT(e);this.tenantId==null?this._agentRecaptchaConfig=c:this._tenantRecaptchaConfigs[this.tenantId]=c,c.emailPasswordEnabled&&new lT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new E0("auth","Firebase",e())}onAuthStateChanged(e,c,n){return this.registerStateListener(this.authStateSubscription,e,c,n)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,n){return this.registerStateListener(this.idTokenSubscription,e,c,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,c){const n=await this.getOrInitRedirectPersistenceManager(c);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&H4(e)||this._popupRedirectResolver;W(c,this,"argument-error"),this.redirectPersistenceManager=await k8.create(this,[H4(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,n;return this._isInitialized&&await this.queue(async()=>{}),((c=this._currentUser)===null||c===void 0?void 0:c._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(c=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&c!==void 0?c:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,n,a){if(this._deleted)return()=>{};const r=typeof c=="function"?c:c.next.bind(c),i=this._isInitialized?Promise.resolve():this._initializationPromise;return W(i,this,"internal-error"),i.then(()=>r(this.currentUser)),typeof c=="function"?e.addObserver(c,n,a):e.addObserver(c)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(c["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(c["X-Firebase-AppCheck"]=a),c}async _getAppCheckToken(){var e;const c=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return c!=null&&c.error&&eH1(`Error while retrieving App Check token: ${c.error}`),c==null?void 0:c.token}}function u5(t){return Y1(t)}class lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Im1(c=>this.observer=c)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SH1(t,e){const c=_0(t,"auth");if(c.isInitialized()){const a=c.getImmediate(),r=c.getOptions();if(Dc(r,e??{}))return a;F3(a,"already-initialized")}return c.initialize({options:e})}function NH1(t,e){const c=(e==null?void 0:e.persistence)||[],n=(Array.isArray(c)?c:[c]).map(H4);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function kH1(t,e,c){const n=u5(t);W(n._canInitEmulator,n,"emulator-config-failed"),W(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!!(c!=null&&c.disableWarnings),r=fT(e),{host:i,port:s}=AH1(e),o=s===null?"":`:${s}`;n.config.emulator={url:`${r}//${i}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:i,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||TH1()}function fT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AH1(t){const e=fT(t),c=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!c)return{host:"",port:null};const n=c[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const r=a[1];return{host:r,port:fp(n.substr(r.length+1))}}else{const[r,i]=n.split(":");return{host:r,port:fp(i)}}}function fp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TH1(){function t(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return C4("not implemented")}_getIdTokenResponse(e){return C4("not implemented")}_linkToIdToken(e,c){return C4("not implemented")}_getReauthenticationResolver(e){return C4("not implemented")}}async function EH1(t,e){return O0(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t,e){return Pn(t,"POST","/v1/accounts:signInWithPassword",f5(t,e))}async function _H1(t,e){return O0(t,"POST","/v1/accounts:sendOobCode",f5(t,e))}async function pr(t,e){return _H1(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IH1(t,e){return Pn(t,"POST","/v1/accounts:signInWithEmailLink",f5(t,e))}async function PH1(t,e){return Pn(t,"POST","/v1/accounts:signInWithEmailLink",f5(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * @license
