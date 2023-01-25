(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Ec(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Tc(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ue(s)?zy(s):Tc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Ue(t))return t;if(xe(t))return t}}const By=/;(?![^(]*\))/g,jy=/:([^]+)/,Hy=/\/\*.*?\*\//gs;function zy(t){const e={};return t.replace(Hy,"").split(By).forEach(n=>{if(n){const s=n.split(jy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Go(t){let e="";if(Ue(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=Go(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ky=Ec(qy);function Ff(t){return!!t||t===""}const Ce={},Rs=[],Dt=()=>{},Wy=()=>!1,Gy=/^on[^a-z]/,Qo=t=>Gy.test(t),Cc=t=>t.startsWith("onUpdate:"),ze=Object.assign,Sc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qy=Object.prototype.hasOwnProperty,de=(t,e)=>Qy.call(t,e),te=Array.isArray,Cr=t=>Yo(t)==="[object Map]",Yy=t=>Yo(t)==="[object Set]",ie=t=>typeof t=="function",Ue=t=>typeof t=="string",Ac=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Vf=t=>xe(t)&&ie(t.then)&&ie(t.catch),Xy=Object.prototype.toString,Yo=t=>Xy.call(t),Jy=t=>Yo(t).slice(8,-1),Zy=t=>Yo(t)==="[object Object]",kc=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},e0=/-(\w)/g,At=Xo(t=>t.replace(e0,(e,n)=>n?n.toUpperCase():"")),t0=/\B([A-Z])/g,Xs=Xo(t=>t.replace(t0,"-$1").toLowerCase()),Js=Xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ja=Xo(t=>t?`on${Js(t)}`:""),$r=(t,e)=>!Object.is(t,e),Za=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fh;const n0=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let It;class Uf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function s0(t){return new Uf(t)}function r0(t,e=It){e&&e.active&&e.effects.push(t)}function i0(t){It&&It.cleanups.push(t)}const Rc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Bf=t=>(t.w&Nn)>0,jf=t=>(t.n&Nn)>0,o0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nn},a0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Bf(r)&&!jf(r)?r.delete(t):e[n++]=r,r.w&=~Nn,r.n&=~Nn}e.length=n}},xl=new WeakMap;let wr=0,Nn=1;const Rl=30;let xt;const es=Symbol(""),Dl=Symbol("");class Dc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,r0(this,s)}run(){if(!this.active)return this.fn();let e=xt,n=Cn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xt,xt=this,Cn=!0,Nn=1<<++wr,wr<=Rl?o0(this):gh(this),this.fn()}finally{wr<=Rl&&a0(this),Nn=1<<--wr,xt=this.parent,Cn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(gh(this),this.onStop&&this.onStop(),this.active=!1)}}function gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Cn=!0;const Hf=[];function Zs(){Hf.push(Cn),Cn=!1}function er(){const t=Hf.pop();Cn=t===void 0?!0:t}function yt(t,e,n){if(Cn&&xt){let s=xl.get(t);s||xl.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Rc()),zf(r)}}function zf(t,e){let n=!1;wr<=Rl?jf(t)||(t.n|=Nn,n=!Bf(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function nn(t,e,n,s,r,i){const o=xl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const l=xc(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?kc(n)&&a.push(o.get("length")):(a.push(o.get(es)),Cr(t)&&a.push(o.get(Dl)));break;case"delete":te(t)||(a.push(o.get(es)),Cr(t)&&a.push(o.get(Dl)));break;case"set":Cr(t)&&a.push(o.get(es));break}if(a.length===1)a[0]&&Nl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Nl(Rc(l))}}function Nl(t,e){const n=te(t)?t:[...t];for(const s of n)s.computed&&mh(s);for(const s of n)s.computed||mh(s)}function mh(t,e){(t!==xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const l0=Ec("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ac)),c0=Nc(),u0=Nc(!1,!0),h0=Nc(!0),ph=d0();function d0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=fe(this);for(let i=0,o=this.length;i<o;i++)yt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(fe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zs();const s=fe(this)[e].apply(this,n);return er(),s}}),t}function Nc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?k0:Yf:e?Qf:Gf).get(s))return s;const o=te(s);if(!t&&o&&de(ph,r))return Reflect.get(ph,r,i);const a=Reflect.get(s,r,i);return(Ac(r)?qf.has(r):l0(r))||(t||yt(s,"get",r),e)?a:ke(a)?o&&kc(r)?a:a.value:xe(a)?t?Zo(a):mt(a):a}}const f0=Kf(),g0=Kf(!0);function Kf(t=!1){return function(n,s,r,i){let o=n[s];if(Vs(o)&&ke(o)&&!ke(r))return!1;if(!t&&(!fo(r)&&!Vs(r)&&(o=fe(o),r=fe(r)),!te(n)&&ke(o)&&!ke(r)))return o.value=r,!0;const a=te(n)&&kc(s)?Number(s)<n.length:de(n,s),l=Reflect.set(n,s,r,i);return n===fe(i)&&(a?$r(r,o)&&nn(n,"set",s,r):nn(n,"add",s,r)),l}}function m0(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&nn(t,"delete",e,void 0),s}function p0(t,e){const n=Reflect.has(t,e);return(!Ac(e)||!qf.has(e))&&yt(t,"has",e),n}function v0(t){return yt(t,"iterate",te(t)?"length":es),Reflect.ownKeys(t)}const Wf={get:c0,set:f0,deleteProperty:m0,has:p0,ownKeys:v0},y0={get:h0,set(t,e){return!0},deleteProperty(t,e){return!0}},b0=ze({},Wf,{get:u0,set:g0}),Oc=t=>t,Jo=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,s=!1){t=t.__v_raw;const r=fe(t),i=fe(e);n||(e!==i&&yt(r,"get",e),yt(r,"get",i));const{has:o}=Jo(r),a=s?Oc:n?Mc:Fr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Fi(t,e=!1){const n=this.__v_raw,s=fe(n),r=fe(t);return e||(t!==r&&yt(s,"has",t),yt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Vi(t,e=!1){return t=t.__v_raw,!e&&yt(fe(t),"iterate",es),Reflect.get(t,"size",t)}function vh(t){t=fe(t);const e=fe(this);return Jo(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function yh(t,e){e=fe(e);const n=fe(this),{has:s,get:r}=Jo(n);let i=s.call(n,t);i||(t=fe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?$r(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function bh(t){const e=fe(this),{has:n,get:s}=Jo(e);let r=n.call(e,t);r||(t=fe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&nn(e,"delete",t,void 0),i}function wh(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Ui(t,e){return function(s,r){const i=this,o=i.__v_raw,a=fe(o),l=e?Oc:t?Mc:Fr;return!t&&yt(a,"iterate",es),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function Bi(t,e,n){return function(...s){const r=this.__v_raw,i=fe(r),o=Cr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Oc:e?Mc:Fr;return!e&&yt(i,"iterate",l?Dl:es),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function pn(t){return function(...e){return t==="delete"?!1:this}}function w0(){const t={get(i){return $i(this,i)},get size(){return Vi(this)},has:Fi,add:vh,set:yh,delete:bh,clear:wh,forEach:Ui(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return Vi(this)},has:Fi,add:vh,set:yh,delete:bh,clear:wh,forEach:Ui(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return Vi(this,!0)},has(i){return Fi.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ui(!0,!1)},s={get(i){return $i(this,i,!0,!0)},get size(){return Vi(this,!0)},has(i){return Fi.call(this,i,!0)},add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear"),forEach:Ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Bi(i,!1,!1),n[i]=Bi(i,!0,!1),e[i]=Bi(i,!1,!0),s[i]=Bi(i,!0,!0)}),[t,n,e,s]}const[_0,I0,E0,T0]=w0();function Pc(t,e){const n=e?t?T0:E0:t?I0:_0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(de(n,r)&&r in s?n:s,r,i)}const C0={get:Pc(!1,!1)},S0={get:Pc(!1,!0)},A0={get:Pc(!0,!1)},Gf=new WeakMap,Qf=new WeakMap,Yf=new WeakMap,k0=new WeakMap;function x0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function R0(t){return t.__v_skip||!Object.isExtensible(t)?0:x0(Jy(t))}function mt(t){return Vs(t)?t:Lc(t,!1,Wf,C0,Gf)}function Xf(t){return Lc(t,!1,b0,S0,Qf)}function Zo(t){return Lc(t,!0,y0,A0,Yf)}function Lc(t,e,n,s,r){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=R0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ds(t){return Vs(t)?Ds(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function fo(t){return!!(t&&t.__v_isShallow)}function Jf(t){return Ds(t)||Vs(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function Zf(t){return ho(t,"__v_skip",!0),t}const Fr=t=>xe(t)?mt(t):t,Mc=t=>xe(t)?Zo(t):t;function eg(t){Cn&&xt&&(t=fe(t),zf(t.dep||(t.dep=Rc())))}function tg(t,e){t=fe(t),t.dep&&Nl(t.dep)}function ke(t){return!!(t&&t.__v_isRef===!0)}function J(t){return ng(t,!1)}function D0(t){return ng(t,!0)}function ng(t,e){return ke(t)?t:new N0(t,e)}class N0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Fr(e)}get value(){return eg(this),this._value}set value(e){const n=this.__v_isShallow||fo(e)||Vs(e);e=n?e:fe(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fr(e),tg(this))}}function ts(t){return ke(t)?t.value:t}const O0={get:(t,e,n)=>ts(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ke(r)&&!ke(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function sg(t){return Ds(t)?t:new Proxy(t,O0)}function $c(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=ot(t,n);return e}class P0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ot(t,e,n){const s=t[e];return ke(s)?s:new P0(t,e,n)}var rg;class L0{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[rg]=!1,this._dirty=!0,this.effect=new Dc(e,()=>{this._dirty||(this._dirty=!0,tg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=fe(this);return eg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}rg="__v_isReadonly";function M0(t,e,n=!1){let s,r;const i=ie(t);return i?(s=t,r=Dt):(s=t.get,r=t.set),new L0(s,r,i||!r,n)}function Sn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ea(i,e,n)}return r}function Ct(t,e,n,s){if(ie(t)){const i=Sn(t,e,n,s);return i&&Vf(i)&&i.catch(o=>{ea(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ct(t[i],e,n,s));return r}function ea(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[t,o,a]);return}}$0(t,n,r,s)}function $0(t,e,n,s=!0){console.error(t)}let Vr=!1,Ol=!1;const Je=[];let Vt=0;const Ns=[];let Qt=null,Kn=0;const ig=Promise.resolve();let Fc=null;function ci(t){const e=Fc||ig;return t?e.then(this?t.bind(this):t):e}function F0(t){let e=Vt+1,n=Je.length;for(;e<n;){const s=e+n>>>1;Ur(Je[s])<t?e=s+1:n=s}return e}function Vc(t){(!Je.length||!Je.includes(t,Vr&&t.allowRecurse?Vt+1:Vt))&&(t.id==null?Je.push(t):Je.splice(F0(t.id),0,t),og())}function og(){!Vr&&!Ol&&(Ol=!0,Fc=ig.then(lg))}function V0(t){const e=Je.indexOf(t);e>Vt&&Je.splice(e,1)}function U0(t){te(t)?Ns.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Kn+1:Kn))&&Ns.push(t),og()}function _h(t,e=Vr?Vt+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function ag(t){if(Ns.length){const e=[...new Set(Ns)];if(Ns.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>Ur(n)-Ur(s)),Kn=0;Kn<Qt.length;Kn++)Qt[Kn]();Qt=null,Kn=0}}const Ur=t=>t.id==null?1/0:t.id,B0=(t,e)=>{const n=Ur(t)-Ur(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lg(t){Ol=!1,Vr=!0,Je.sort(B0);const e=Dt;try{for(Vt=0;Vt<Je.length;Vt++){const n=Je[Vt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Vt=0,Je.length=0,ag(),Vr=!1,Fc=null,(Je.length||Ns.length)&&lg()}}function j0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Ce;d&&(r=n.map(f=>Ue(f)?f.trim():f)),h&&(r=n.map(xc))}let a,l=s[a=Ja(e)]||s[a=Ja(At(e))];!l&&i&&(l=s[a=Ja(Xs(e))]),l&&Ct(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(c,t,6,r)}}function cg(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=cg(c,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(xe(t)&&s.set(t,null),null):(te(i)?i.forEach(l=>o[l]=null):ze(o,i),xe(t)&&s.set(t,o),o)}function ta(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,Xs(e))||de(t,e))}let vt=null,ug=null;function go(t){const e=vt;return vt=t,ug=t&&t.type.__scopeId||null,e}function gt(t,e=vt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Dh(-1);const i=go(e);let o;try{o=t(...r)}finally{go(i),s._d&&Dh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function el(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let w,_;const k=go(t);try{if(n.shapeFlag&4){const L=r||s;w=Ft(u.call(L,L,h,i,f,d,m)),_=l}else{const L=e;w=Ft(L.length>1?L(i,{attrs:l,slots:a,emit:c}):L(i,null)),_=e.props?l:H0(l)}}catch(L){Ar.length=0,ea(L,t,1),w=v(Nt)}let C=w;if(_&&y!==!1){const L=Object.keys(_),{shapeFlag:$}=C;L.length&&$&7&&(o&&L.some(Cc)&&(_=z0(_,o)),C=sn(C,_))}return n.dirs&&(C=sn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),w=C,go(k),w}const H0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},z0=(t,e)=>{const n={};for(const s in t)(!Cc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function q0(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ih(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!ta(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ih(s,o,c):!0:!!o;return!1}function Ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function K0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const W0=t=>t.__isSuspense;function G0(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):U0(t)}function Mn(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function ut(t,e,n=!1){const s=He||vt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(s.proxy):e}}function ui(t,e){return Uc(t,null,e)}const ji={};function $e(t,e,n){return Uc(t,e,n)}function Uc(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ce){const a=He;let l,c=!1,u=!1;if(ke(t)?(l=()=>t.value,c=fo(t)):Ds(t)?(l=()=>t,s=!0):te(t)?(u=!0,c=t.some(C=>Ds(C)||fo(C)),l=()=>t.map(C=>{if(ke(C))return C.value;if(Ds(C))return Qn(C);if(ie(C))return Sn(C,a,2)})):ie(t)?e?l=()=>Sn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ct(t,a,3,[d])}:l=Dt,e&&s){const C=l;l=()=>Qn(C())}let h,d=C=>{h=_.onStop=()=>{Sn(C,a,4)}},f;if(zr)if(d=Dt,e?n&&Ct(e,a,3,[l(),u?[]:void 0,d]):l(),r==="sync"){const C=Mb();f=C.__watcherHandles||(C.__watcherHandles=[])}else return Dt;let m=u?new Array(t.length).fill(ji):ji;const y=()=>{if(!!_.active)if(e){const C=_.run();(s||c||(u?C.some((L,$)=>$r(L,m[$])):$r(C,m)))&&(h&&h(),Ct(e,a,3,[C,m===ji?void 0:u&&m[0]===ji?[]:m,d]),m=C)}else _.run()};y.allowRecurse=!!e;let w;r==="sync"?w=y:r==="post"?w=()=>lt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),w=()=>Vc(y));const _=new Dc(l,w);e?n?y():m=_.run():r==="post"?lt(_.run.bind(_),a&&a.suspense):_.run();const k=()=>{_.stop(),a&&a.scope&&Sc(a.scope.effects,_)};return f&&f.push(k),k}function Q0(t,e,n){const s=this.proxy,r=Ue(t)?t.includes(".")?hg(s,t):()=>s[t]:t.bind(s,s);let i;ie(e)?i=e:(i=e.handler,n=e);const o=He;Us(this);const a=Uc(r,i.bind(s),n);return o?Us(o):ns(),a}function hg(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Qn(t,e){if(!xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))Qn(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)Qn(t[n],e);else if(Yy(t)||Cr(t))t.forEach(n=>{Qn(n,e)});else if(Zy(t))for(const n in t)Qn(t[n],e);return t}function dg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tr(()=>{t.isMounted=!0}),$n(()=>{t.isUnmounting=!0}),t}const _t=[Function,Array],Y0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:_t,onEnter:_t,onAfterEnter:_t,onEnterCancelled:_t,onBeforeLeave:_t,onLeave:_t,onAfterLeave:_t,onLeaveCancelled:_t,onBeforeAppear:_t,onAppear:_t,onAfterAppear:_t,onAppearCancelled:_t},setup(t,{slots:e}){const n=la(),s=dg();let r;return()=>{const i=e.default&&Bc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Nt){o=y;break}}const a=fe(t),{mode:l}=a;if(s.isLeaving)return tl(o);const c=Eh(o);if(!c)return tl(o);const u=Br(c,a,s,n);jr(c,u);const h=n.subTree,d=h&&Eh(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const y=m();r===void 0?r=y:y!==r&&(r=y,f=!0)}if(d&&d.type!==Nt&&(!Wn(c,d)||f)){const y=Br(d,a,s,n);if(jr(d,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},tl(o);l==="in-out"&&c.type!==Nt&&(y.delayLeave=(w,_,k)=>{const C=gg(s,d);C[String(d.key)]=d,w._leaveCb=()=>{_(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=k})}return o}}},fg=Y0;function gg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Br(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:y,onAppear:w,onAfterAppear:_,onAppearCancelled:k}=e,C=String(t.key),L=gg(n,t),$=(S,U)=>{S&&Ct(S,s,9,U)},H=(S,U)=>{const F=U[1];$(S,U),te(S)?S.every(Q=>Q.length<=1)&&F():S.length<=1&&F()},D={mode:i,persisted:o,beforeEnter(S){let U=a;if(!n.isMounted)if(r)U=y||a;else return;S._leaveCb&&S._leaveCb(!0);const F=L[C];F&&Wn(t,F)&&F.el._leaveCb&&F.el._leaveCb(),$(U,[S])},enter(S){let U=l,F=c,Q=u;if(!n.isMounted)if(r)U=w||l,F=_||c,Q=k||u;else return;let O=!1;const Y=S._enterCb=me=>{O||(O=!0,me?$(Q,[S]):$(F,[S]),D.delayedLeave&&D.delayedLeave(),S._enterCb=void 0)};U?H(U,[S,Y]):Y()},leave(S,U){const F=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return U();$(h,[S]);let Q=!1;const O=S._leaveCb=Y=>{Q||(Q=!0,U(),Y?$(m,[S]):$(f,[S]),S._leaveCb=void 0,L[F]===t&&delete L[F])};L[F]=t,d?H(d,[S,O]):O()},clone(S){return Br(S,e,n,s)}};return D}function tl(t){if(na(t))return t=sn(t),t.children=null,t}function Eh(t){return na(t)?t.children?t.children[0]:void 0:t}function jr(t,e){t.shapeFlag&6&&t.component?jr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bc(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Me?(o.patchFlag&128&&r++,s=s.concat(Bc(o.children,e,a))):(e||o.type!==Nt)&&s.push(a!=null?sn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function mg(t){return ie(t)?{setup:t,name:t.name}:t}const eo=t=>!!t.type.__asyncLoader,na=t=>t.type.__isKeepAlive;function pg(t,e){yg(t,"a",e)}function vg(t,e){yg(t,"da",e)}function yg(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(sa(e,s,n),n){let r=n.parent;for(;r&&r.parent;)na(r.parent.vnode)&&X0(s,e,n,r),r=r.parent}}function X0(t,e,n,s){const r=sa(e,t,s,!0);wg(()=>{Sc(s[e],r)},n)}function sa(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zs(),Us(n);const a=Ct(e,n,t,o);return ns(),er(),a});return s?r.unshift(i):r.push(i),i}}const hn=t=>(e,n=He)=>(!zr||t==="sp")&&sa(t,(...s)=>e(...s),n),jc=hn("bm"),tr=hn("m"),J0=hn("bu"),bg=hn("u"),$n=hn("bum"),wg=hn("um"),Z0=hn("sp"),eb=hn("rtg"),tb=hn("rtc");function nb(t,e=He){sa("ec",t,e)}function us(t,e){const n=vt;if(n===null)return t;const s=ca(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=Ce]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&Qn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Bn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Zs(),Ct(l,n,8,[t.el,a,t,e]),er())}}const _g="components",sb="directives",Ig=Symbol();function rb(t){return Ue(t)?Eg(_g,t,!1)||t:t||Ig}function ra(t){return Eg(sb,t)}function Eg(t,e,n=!0,s=!1){const r=vt||He;if(r){const i=r.type;if(t===_g){const a=Ob(i,!1);if(a&&(a===e||a===At(e)||a===Js(At(e))))return i}const o=Th(r[t]||i[t],e)||Th(r.appContext[t],e);return!o&&s?i:o}}function Th(t,e){return t&&(t[e]||t[At(e)]||t[Js(At(e))])}function ib(t,e,n,s){let r;const i=n&&n[s];if(te(t)||Ue(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(xe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Pl=t=>t?Pg(t)?ca(t)||t.proxy:Pl(t.parent):null,Sr=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$emit:t=>t.emit,$options:t=>Hc(t),$forceUpdate:t=>t.f||(t.f=()=>Vc(t.update)),$nextTick:t=>t.n||(t.n=ci.bind(t.proxy)),$watch:t=>Q0.bind(t)}),nl=(t,e)=>t!==Ce&&!t.__isScriptSetup&&de(t,e),ob={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(nl(s,e))return o[e]=1,s[e];if(r!==Ce&&de(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&de(c,e))return o[e]=3,i[e];if(n!==Ce&&de(n,e))return o[e]=4,n[e];Ll&&(o[e]=0)}}const u=Sr[e];let h,d;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&de(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,de(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return nl(r,e)?(r[e]=n,!0):s!==Ce&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&de(t,o)||nl(e,o)||(a=i[0])&&de(a,o)||de(s,o)||de(Sr,o)||de(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ll=!0;function ab(t){const e=Hc(t),n=t.proxy,s=t.ctx;Ll=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:w,beforeDestroy:_,beforeUnmount:k,destroyed:C,unmounted:L,render:$,renderTracked:H,renderTriggered:D,errorCaptured:S,serverPrefetch:U,expose:F,inheritAttrs:Q,components:O,directives:Y,filters:me}=e;if(c&&lb(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const ae=o[re];ie(ae)&&(s[re]=ae.bind(n))}if(r){const re=r.call(n,n);xe(re)&&(t.data=mt(re))}if(Ll=!0,i)for(const re in i){const ae=i[re],Ke=ie(ae)?ae.bind(n,n):ie(ae.get)?ae.get.bind(n,n):Dt,Lt=!ie(ae)&&ie(ae.set)?ae.set.bind(n):Dt,at=I({get:Ke,set:Lt});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>at.value,set:De=>at.value=De})}if(a)for(const re in a)Tg(a[re],s,n,re);if(l){const re=ie(l)?l.call(n):l;Reflect.ownKeys(re).forEach(ae=>{Mn(ae,re[ae])})}u&&Ch(u,t,"c");function ue(re,ae){te(ae)?ae.forEach(Ke=>re(Ke.bind(n))):ae&&re(ae.bind(n))}if(ue(jc,h),ue(tr,d),ue(J0,f),ue(bg,m),ue(pg,y),ue(vg,w),ue(nb,S),ue(tb,H),ue(eb,D),ue($n,k),ue(wg,L),ue(Z0,U),te(F))if(F.length){const re=t.exposed||(t.exposed={});F.forEach(ae=>{Object.defineProperty(re,ae,{get:()=>n[ae],set:Ke=>n[ae]=Ke})})}else t.exposed||(t.exposed={});$&&t.render===Dt&&(t.render=$),Q!=null&&(t.inheritAttrs=Q),O&&(t.components=O),Y&&(t.directives=Y)}function lb(t,e,n=Dt,s=!1){te(t)&&(t=Ml(t));for(const r in t){const i=t[r];let o;xe(i)?"default"in i?o=ut(i.from||r,i.default,!0):o=ut(i.from||r):o=ut(i),ke(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ch(t,e,n){Ct(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tg(t,e,n,s){const r=s.includes(".")?hg(n,s):()=>n[s];if(Ue(t)){const i=e[t];ie(i)&&$e(r,i)}else if(ie(t))$e(r,t.bind(n));else if(xe(t))if(te(t))t.forEach(i=>Tg(i,e,n,s));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&$e(r,i,t)}}function Hc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>mo(l,c,o,!0)),mo(l,e,o)),xe(e)&&i.set(e,l),l}function mo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&mo(t,i,n,!0),r&&r.forEach(o=>mo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=cb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cb={data:Sh,props:zn,emits:zn,methods:zn,computed:zn,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:zn,directives:zn,watch:hb,provide:Sh,inject:ub};function Sh(t,e){return e?t?function(){return ze(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function ub(t,e){return zn(Ml(t),Ml(e))}function Ml(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function zn(t,e){return t?ze(ze(Object.create(null),t),e):e}function hb(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const s in e)n[s]=rt(t[s],e[s]);return n}function db(t,e,n,s=!1){const r={},i={};ho(i,oa,1),t.propsDefaults=Object.create(null),Cg(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Xf(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function fb(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=fe(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ta(t.emitsOptions,d))continue;const f=e[d];if(l)if(de(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const m=At(d);r[m]=$l(l,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{Cg(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=Xs(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=$l(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!de(e,h)&&!0)&&(delete i[h],c=!0)}c&&nn(t,"set","$attrs")}function Cg(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zi(l))continue;const c=e[l];let u;r&&de(r,u=At(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:ta(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=fe(n),c=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=$l(r,l,h,c[h],t,!de(c,h))}}return o}function $l(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ie(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Us(r),s=c[n]=l.call(null,e),ns())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Xs(n))&&(s=!0))}return s}function Sg(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=h=>{l=!0;const[d,f]=Sg(h,e,!0);ze(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return xe(t)&&s.set(t,Rs),Rs;if(te(i))for(let u=0;u<i.length;u++){const h=At(i[u]);Ah(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=At(u);if(Ah(h)){const d=i[u],f=o[h]=te(d)||ie(d)?{type:d}:Object.assign({},d);if(f){const m=Rh(Boolean,f.type),y=Rh(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||de(f,"default"))&&a.push(h)}}}const c=[o,a];return xe(t)&&s.set(t,c),c}function Ah(t){return t[0]!=="$"}function kh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function xh(t,e){return kh(t)===kh(e)}function Rh(t,e){return te(e)?e.findIndex(n=>xh(n,t)):ie(e)&&xh(e,t)?0:-1}const Ag=t=>t[0]==="_"||t==="$stable",zc=t=>te(t)?t.map(Ft):[Ft(t)],gb=(t,e,n)=>{if(e._n)return e;const s=gt((...r)=>zc(e(...r)),n);return s._c=!1,s},kg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ag(r))continue;const i=t[r];if(ie(i))e[r]=gb(r,i,s);else if(i!=null){const o=zc(i);e[r]=()=>o}}},xg=(t,e)=>{const n=zc(e);t.slots.default=()=>n},mb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),ho(e,"_",n)):kg(e,t.slots={})}else t.slots={},e&&xg(t,e);ho(t.slots,oa,1)},pb=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(r,e),!n&&a===1&&delete r._):(i=!e.$stable,kg(e,r)),o=e}else e&&(xg(t,e),o={default:1});if(i)for(const a in r)!Ag(a)&&!(a in o)&&delete r[a]};function Rg(){return{app:null,config:{isNativeTag:Wy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vb=0;function yb(t,e){return function(s,r=null){ie(s)||(s=Object.assign({},s)),r!=null&&!xe(r)&&(r=null);const i=Rg(),o=new Set;let a=!1;const l=i.app={_uid:vb++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:$b,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(l,...u)):ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=v(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Fl(t,e,n,s,r=!1){if(te(t)){t.forEach((d,f)=>Fl(d,e&&(te(e)?e[f]:e),n,s,r));return}if(eo(s)&&!r)return;const i=s.shapeFlag&4?ca(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,de(h,c)&&(h[c]=null)):ke(c)&&(c.value=null)),ie(l))Sn(l,a,12,[o,u]);else{const d=Ue(l),f=ke(l);if(d||f){const m=()=>{if(t.f){const y=d?de(h,l)?h[l]:u[l]:l.value;r?te(y)&&Sc(y,i):te(y)?y.includes(i)||y.push(i):d?(u[l]=[i],de(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,de(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,lt(m,n)):m()}}}const lt=G0;function bb(t){return wb(t)}function wb(t,e){const n=n0();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Dt,insertStaticContent:m}=t,y=(g,p,b,T=null,E=null,P=null,V=!1,N=null,M=!!p.dynamicChildren)=>{if(g===p)return;g&&!Wn(g,p)&&(T=mn(g),De(g,E,P,!0),g=null),p.patchFlag===-2&&(M=!1,p.dynamicChildren=null);const{type:A,ref:q,shapeFlag:B}=p;switch(A){case ia:w(g,p,b,T);break;case Nt:_(g,p,b,T);break;case sl:g==null&&k(p,b,T,V);break;case Me:O(g,p,b,T,E,P,V,N,M);break;default:B&1?$(g,p,b,T,E,P,V,N,M):B&6?Y(g,p,b,T,E,P,V,N,M):(B&64||B&128)&&A.process(g,p,b,T,E,P,V,N,M,_s)}q!=null&&E&&Fl(q,g&&g.ref,P,p||g,!p)},w=(g,p,b,T)=>{if(g==null)s(p.el=a(p.children),b,T);else{const E=p.el=g.el;p.children!==g.children&&c(E,p.children)}},_=(g,p,b,T)=>{g==null?s(p.el=l(p.children||""),b,T):p.el=g.el},k=(g,p,b,T)=>{[g.el,g.anchor]=m(g.children,p,b,T,g.el,g.anchor)},C=({el:g,anchor:p},b,T)=>{let E;for(;g&&g!==p;)E=d(g),s(g,b,T),g=E;s(p,b,T)},L=({el:g,anchor:p})=>{let b;for(;g&&g!==p;)b=d(g),r(g),g=b;r(p)},$=(g,p,b,T,E,P,V,N,M)=>{V=V||p.type==="svg",g==null?H(p,b,T,E,P,V,N,M):U(g,p,E,P,V,N,M)},H=(g,p,b,T,E,P,V,N)=>{let M,A;const{type:q,props:B,shapeFlag:K,transition:ee,dirs:le}=g;if(M=g.el=o(g.type,P,B&&B.is,B),K&8?u(M,g.children):K&16&&S(g.children,M,null,T,E,P&&q!=="foreignObject",V,N),le&&Bn(g,null,T,"created"),B){for(const we in B)we!=="value"&&!Zi(we)&&i(M,we,null,B[we],P,g.children,T,E,Ne);"value"in B&&i(M,"value",null,B.value),(A=B.onVnodeBeforeMount)&&$t(A,T,g)}D(M,g,g.scopeId,V,T),le&&Bn(g,null,T,"beforeMount");const Ee=(!E||E&&!E.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(M),s(M,p,b),((A=B&&B.onVnodeMounted)||Ee||le)&&lt(()=>{A&&$t(A,T,g),Ee&&ee.enter(M),le&&Bn(g,null,T,"mounted")},E)},D=(g,p,b,T,E)=>{if(b&&f(g,b),T)for(let P=0;P<T.length;P++)f(g,T[P]);if(E){let P=E.subTree;if(p===P){const V=E.vnode;D(g,V,V.scopeId,V.slotScopeIds,E.parent)}}},S=(g,p,b,T,E,P,V,N,M=0)=>{for(let A=M;A<g.length;A++){const q=g[A]=N?wn(g[A]):Ft(g[A]);y(null,q,p,b,T,E,P,V,N)}},U=(g,p,b,T,E,P,V)=>{const N=p.el=g.el;let{patchFlag:M,dynamicChildren:A,dirs:q}=p;M|=g.patchFlag&16;const B=g.props||Ce,K=p.props||Ce;let ee;b&&jn(b,!1),(ee=K.onVnodeBeforeUpdate)&&$t(ee,b,p,g),q&&Bn(p,g,b,"beforeUpdate"),b&&jn(b,!0);const le=E&&p.type!=="foreignObject";if(A?F(g.dynamicChildren,A,N,b,T,le,P):V||ae(g,p,N,null,b,T,le,P,!1),M>0){if(M&16)Q(N,p,B,K,b,T,E);else if(M&2&&B.class!==K.class&&i(N,"class",null,K.class,E),M&4&&i(N,"style",B.style,K.style,E),M&8){const Ee=p.dynamicProps;for(let we=0;we<Ee.length;we++){const Oe=Ee[we],kt=B[Oe],Is=K[Oe];(Is!==kt||Oe==="value")&&i(N,Oe,kt,Is,E,g.children,b,T,Ne)}}M&1&&g.children!==p.children&&u(N,p.children)}else!V&&A==null&&Q(N,p,B,K,b,T,E);((ee=K.onVnodeUpdated)||q)&&lt(()=>{ee&&$t(ee,b,p,g),q&&Bn(p,g,b,"updated")},T)},F=(g,p,b,T,E,P,V)=>{for(let N=0;N<p.length;N++){const M=g[N],A=p[N],q=M.el&&(M.type===Me||!Wn(M,A)||M.shapeFlag&70)?h(M.el):b;y(M,A,q,null,T,E,P,V,!0)}},Q=(g,p,b,T,E,P,V)=>{if(b!==T){if(b!==Ce)for(const N in b)!Zi(N)&&!(N in T)&&i(g,N,b[N],null,V,p.children,E,P,Ne);for(const N in T){if(Zi(N))continue;const M=T[N],A=b[N];M!==A&&N!=="value"&&i(g,N,A,M,V,p.children,E,P,Ne)}"value"in T&&i(g,"value",b.value,T.value)}},O=(g,p,b,T,E,P,V,N,M)=>{const A=p.el=g?g.el:a(""),q=p.anchor=g?g.anchor:a("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:ee}=p;ee&&(N=N?N.concat(ee):ee),g==null?(s(A,b,T),s(q,b,T),S(p.children,b,q,E,P,V,N,M)):B>0&&B&64&&K&&g.dynamicChildren?(F(g.dynamicChildren,K,b,E,P,V,N),(p.key!=null||E&&p===E.subTree)&&Dg(g,p,!0)):ae(g,p,b,q,E,P,V,N,M)},Y=(g,p,b,T,E,P,V,N,M)=>{p.slotScopeIds=N,g==null?p.shapeFlag&512?E.ctx.activate(p,b,T,V,M):me(p,b,T,E,P,V,M):_e(g,p,M)},me=(g,p,b,T,E,P,V)=>{const N=g.component=kb(g,T,E);if(na(g)&&(N.ctx.renderer=_s),xb(N),N.asyncDep){if(E&&E.registerDep(N,ue),!g.el){const M=N.subTree=v(Nt);_(null,M,p,b)}return}ue(N,g,p,b,E,P,V)},_e=(g,p,b)=>{const T=p.component=g.component;if(q0(g,p,b))if(T.asyncDep&&!T.asyncResolved){re(T,p,b);return}else T.next=p,V0(T.update),T.update();else p.el=g.el,T.vnode=p},ue=(g,p,b,T,E,P,V)=>{const N=()=>{if(g.isMounted){let{next:q,bu:B,u:K,parent:ee,vnode:le}=g,Ee=q,we;jn(g,!1),q?(q.el=le.el,re(g,q,V)):q=le,B&&Za(B),(we=q.props&&q.props.onVnodeBeforeUpdate)&&$t(we,ee,q,le),jn(g,!0);const Oe=el(g),kt=g.subTree;g.subTree=Oe,y(kt,Oe,h(kt.el),mn(kt),g,E,P),q.el=Oe.el,Ee===null&&K0(g,Oe.el),K&&lt(K,E),(we=q.props&&q.props.onVnodeUpdated)&&lt(()=>$t(we,ee,q,le),E)}else{let q;const{el:B,props:K}=p,{bm:ee,m:le,parent:Ee}=g,we=eo(p);if(jn(g,!1),ee&&Za(ee),!we&&(q=K&&K.onVnodeBeforeMount)&&$t(q,Ee,p),jn(g,!0),B&&Xa){const Oe=()=>{g.subTree=el(g),Xa(B,g.subTree,g,E,null)};we?p.type.__asyncLoader().then(()=>!g.isUnmounted&&Oe()):Oe()}else{const Oe=g.subTree=el(g);y(null,Oe,b,T,g,E,P),p.el=Oe.el}if(le&&lt(le,E),!we&&(q=K&&K.onVnodeMounted)){const Oe=p;lt(()=>$t(q,Ee,Oe),E)}(p.shapeFlag&256||Ee&&eo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&lt(g.a,E),g.isMounted=!0,p=b=T=null}},M=g.effect=new Dc(N,()=>Vc(A),g.scope),A=g.update=()=>M.run();A.id=g.uid,jn(g,!0),A()},re=(g,p,b)=>{p.component=g;const T=g.vnode.props;g.vnode=p,g.next=null,fb(g,p.props,T,b),pb(g,p.children,b),Zs(),_h(),er()},ae=(g,p,b,T,E,P,V,N,M=!1)=>{const A=g&&g.children,q=g?g.shapeFlag:0,B=p.children,{patchFlag:K,shapeFlag:ee}=p;if(K>0){if(K&128){Lt(A,B,b,T,E,P,V,N,M);return}else if(K&256){Ke(A,B,b,T,E,P,V,N,M);return}}ee&8?(q&16&&Ne(A,E,P),B!==A&&u(b,B)):q&16?ee&16?Lt(A,B,b,T,E,P,V,N,M):Ne(A,E,P,!0):(q&8&&u(b,""),ee&16&&S(B,b,T,E,P,V,N,M))},Ke=(g,p,b,T,E,P,V,N,M)=>{g=g||Rs,p=p||Rs;const A=g.length,q=p.length,B=Math.min(A,q);let K;for(K=0;K<B;K++){const ee=p[K]=M?wn(p[K]):Ft(p[K]);y(g[K],ee,b,null,E,P,V,N,M)}A>q?Ne(g,E,P,!0,!1,B):S(p,b,T,E,P,V,N,M,B)},Lt=(g,p,b,T,E,P,V,N,M)=>{let A=0;const q=p.length;let B=g.length-1,K=q-1;for(;A<=B&&A<=K;){const ee=g[A],le=p[A]=M?wn(p[A]):Ft(p[A]);if(Wn(ee,le))y(ee,le,b,null,E,P,V,N,M);else break;A++}for(;A<=B&&A<=K;){const ee=g[B],le=p[K]=M?wn(p[K]):Ft(p[K]);if(Wn(ee,le))y(ee,le,b,null,E,P,V,N,M);else break;B--,K--}if(A>B){if(A<=K){const ee=K+1,le=ee<q?p[ee].el:T;for(;A<=K;)y(null,p[A]=M?wn(p[A]):Ft(p[A]),b,le,E,P,V,N,M),A++}}else if(A>K)for(;A<=B;)De(g[A],E,P,!0),A++;else{const ee=A,le=A,Ee=new Map;for(A=le;A<=K;A++){const ft=p[A]=M?wn(p[A]):Ft(p[A]);ft.key!=null&&Ee.set(ft.key,A)}let we,Oe=0;const kt=K-le+1;let Is=!1,uh=0;const gr=new Array(kt);for(A=0;A<kt;A++)gr[A]=0;for(A=ee;A<=B;A++){const ft=g[A];if(Oe>=kt){De(ft,E,P,!0);continue}let Mt;if(ft.key!=null)Mt=Ee.get(ft.key);else for(we=le;we<=K;we++)if(gr[we-le]===0&&Wn(ft,p[we])){Mt=we;break}Mt===void 0?De(ft,E,P,!0):(gr[Mt-le]=A+1,Mt>=uh?uh=Mt:Is=!0,y(ft,p[Mt],b,null,E,P,V,N,M),Oe++)}const hh=Is?_b(gr):Rs;for(we=hh.length-1,A=kt-1;A>=0;A--){const ft=le+A,Mt=p[ft],dh=ft+1<q?p[ft+1].el:T;gr[A]===0?y(null,Mt,b,dh,E,P,V,N,M):Is&&(we<0||A!==hh[we]?at(Mt,b,dh,2):we--)}}},at=(g,p,b,T,E=null)=>{const{el:P,type:V,transition:N,children:M,shapeFlag:A}=g;if(A&6){at(g.component.subTree,p,b,T);return}if(A&128){g.suspense.move(p,b,T);return}if(A&64){V.move(g,p,b,_s);return}if(V===Me){s(P,p,b);for(let B=0;B<M.length;B++)at(M[B],p,b,T);s(g.anchor,p,b);return}if(V===sl){C(g,p,b);return}if(T!==2&&A&1&&N)if(T===0)N.beforeEnter(P),s(P,p,b),lt(()=>N.enter(P),E);else{const{leave:B,delayLeave:K,afterLeave:ee}=N,le=()=>s(P,p,b),Ee=()=>{B(P,()=>{le(),ee&&ee()})};K?K(P,le,Ee):Ee()}else s(P,p,b)},De=(g,p,b,T=!1,E=!1)=>{const{type:P,props:V,ref:N,children:M,dynamicChildren:A,shapeFlag:q,patchFlag:B,dirs:K}=g;if(N!=null&&Fl(N,null,b,g,!0),q&256){p.ctx.deactivate(g);return}const ee=q&1&&K,le=!eo(g);let Ee;if(le&&(Ee=V&&V.onVnodeBeforeUnmount)&&$t(Ee,p,g),q&6)Mi(g.component,b,T);else{if(q&128){g.suspense.unmount(b,T);return}ee&&Bn(g,null,p,"beforeUnmount"),q&64?g.type.remove(g,p,b,E,_s,T):A&&(P!==Me||B>0&&B&64)?Ne(A,p,b,!1,!0):(P===Me&&B&384||!E&&q&16)&&Ne(M,p,b),T&&ws(g)}(le&&(Ee=V&&V.onVnodeUnmounted)||ee)&&lt(()=>{Ee&&$t(Ee,p,g),ee&&Bn(g,null,p,"unmounted")},b)},ws=g=>{const{type:p,el:b,anchor:T,transition:E}=g;if(p===Me){Qa(b,T);return}if(p===sl){L(g);return}const P=()=>{r(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(g.shapeFlag&1&&E&&!E.persisted){const{leave:V,delayLeave:N}=E,M=()=>V(b,P);N?N(g.el,P,M):M()}else P()},Qa=(g,p)=>{let b;for(;g!==p;)b=d(g),r(g),g=b;r(p)},Mi=(g,p,b)=>{const{bum:T,scope:E,update:P,subTree:V,um:N}=g;T&&Za(T),E.stop(),P&&(P.active=!1,De(V,g,p,b)),N&&lt(N,p),lt(()=>{g.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ne=(g,p,b,T=!1,E=!1,P=0)=>{for(let V=P;V<g.length;V++)De(g[V],p,b,T,E)},mn=g=>g.shapeFlag&6?mn(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),ch=(g,p,b)=>{g==null?p._vnode&&De(p._vnode,null,null,!0):y(p._vnode||null,g,p,null,null,null,b),_h(),ag(),p._vnode=g},_s={p:y,um:De,m:at,r:ws,mt:me,mc:S,pc:ae,pbc:F,n:mn,o:t};let Ya,Xa;return e&&([Ya,Xa]=e(_s)),{render:ch,hydrate:Ya,createApp:yb(ch,Ya)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dg(t,e,n=!1){const s=t.children,r=e.children;if(te(s)&&te(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=wn(r[i]),a.el=o.el),n||Dg(o,a)),a.type===ia&&(a.el=o.el)}}function _b(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ib=t=>t.__isTeleport,Me=Symbol(void 0),ia=Symbol(void 0),Nt=Symbol(void 0),sl=Symbol(void 0),Ar=[];let Rt=null;function Et(t=!1){Ar.push(Rt=t?null:[])}function Eb(){Ar.pop(),Rt=Ar[Ar.length-1]||null}let Hr=1;function Dh(t){Hr+=t}function Ng(t){return t.dynamicChildren=Hr>0?Rt||Rs:null,Eb(),Hr>0&&Rt&&Rt.push(t),t}function po(t,e,n,s,r,i){return Ng(aa(t,e,n,s,r,i,!0))}function _n(t,e,n,s,r){return Ng(v(t,e,n,s,r,!0))}function Vl(t){return t?t.__v_isVNode===!0:!1}function Wn(t,e){return t.type===e.type&&t.key===e.key}const oa="__vInternal",Og=({key:t})=>t!=null?t:null,to=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ue(t)||ke(t)||ie(t)?{i:vt,r:t,k:e,f:!!n}:t:null;function aa(t,e=null,n=null,s=0,r=null,i=t===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Og(e),ref:e&&to(e),scopeId:ug,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vt};return a?(qc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Hr>0&&!o&&Rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rt.push(l),l}const v=Tb;function Tb(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ig)&&(t=Nt),Vl(t)){const a=sn(t,e,!0);return n&&qc(a,n),Hr>0&&!i&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(Pb(t)&&(t=t.__vccOpts),e){e=Cb(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=Go(a)),xe(l)&&(Jf(l)&&!te(l)&&(l=ze({},l)),e.style=Tc(l))}const o=Ue(t)?1:W0(t)?128:Ib(t)?64:xe(t)?4:ie(t)?2:0;return aa(t,e,n,s,r,o,i,!0)}function Cb(t){return t?Jf(t)||oa in t?ze({},t):t:null}function sn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?An(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Og(a),ref:e&&e.ref?n&&r?te(r)?r.concat(to(e)):[r,to(e)]:to(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ss(t=" ",e=0){return v(ia,null,t,e)}function Nh(t="",e=!1){return e?(Et(),_n(Nt,null,t)):v(Nt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?v(Nt):te(t)?v(Me,null,t.slice()):typeof t=="object"?wn(t):v(ia,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sn(t)}function qc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(oa in e)?e._ctx=vt:r===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),s&64?(n=16,e=[Ss(e)]):n=8);t.children=e,t.shapeFlag|=n}function An(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Go([e.class,s.class]));else if(r==="style")e.style=Tc([e.style,s.style]);else if(Qo(r)){const i=e[r],o=s[r];o&&i!==o&&!(te(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){Ct(t,e,7,[n,s])}const Sb=Rg();let Ab=0;function kb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Sb,i={uid:Ab++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sg(s,r),emitsOptions:cg(s,r),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=j0.bind(null,i),t.ce&&t.ce(i),i}let He=null;const la=()=>He||vt,Us=t=>{He=t,t.scope.on()},ns=()=>{He&&He.scope.off(),He=null};function Pg(t){return t.vnode.shapeFlag&4}let zr=!1;function xb(t,e=!1){zr=e;const{props:n,children:s}=t.vnode,r=Pg(t);db(t,n,r,e),mb(t,s);const i=r?Rb(t,e):void 0;return zr=!1,i}function Rb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Zf(new Proxy(t.ctx,ob));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Nb(t):null;Us(t),Zs();const i=Sn(s,t,0,[t.props,r]);if(er(),ns(),Vf(i)){if(i.then(ns,ns),e)return i.then(o=>{Oh(t,o,e)}).catch(o=>{ea(o,t,0)});t.asyncDep=i}else Oh(t,i,e)}else Lg(t,e)}function Oh(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=sg(e)),Lg(t,n)}let Ph;function Lg(t,e,n){const s=t.type;if(!t.render){if(!e&&Ph&&!s.render){const r=s.template||Hc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ze(ze({isCustomElement:i,delimiters:a},o),l);s.render=Ph(r,c)}}t.render=s.render||Dt}Us(t),Zs(),ab(t),er(),ns()}function Db(t){return new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}})}function Nb(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Db(t))},slots:t.slots,emit:t.emit,expose:e}}function ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sg(Zf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sr)return Sr[n](t)},has(e,n){return n in e||n in Sr}}))}function Ob(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Pb(t){return ie(t)&&"__vccOpts"in t}const I=(t,e)=>M0(t,e,zr);function nr(t,e,n){const s=arguments.length;return s===2?xe(e)&&!te(e)?Vl(e)?v(t,null,[e]):v(t,e):v(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vl(n)&&(n=[n]),v(t,e,n))}const Lb=Symbol(""),Mb=()=>ut(Lb),$b="3.2.45",Fb="http://www.w3.org/2000/svg",Gn=typeof document<"u"?document:null,Lh=Gn&&Gn.createElement("template"),Vb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Gn.createElementNS(Fb,t):Gn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Gn.createTextNode(t),createComment:t=>Gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Lh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Lh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ub(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Bb(t,e,n){const s=t.style,r=Ue(n);if(n&&!r){for(const i in n)Ul(s,i,n[i]);if(e&&!Ue(e))for(const i in e)n[i]==null&&Ul(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Mh=/\s*!important$/;function Ul(t,e,n){if(te(n))n.forEach(s=>Ul(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jb(t,e);Mh.test(n)?t.setProperty(Xs(s),n.replace(Mh,""),"important"):t[s]=n}}const $h=["Webkit","Moz","ms"],rl={};function jb(t,e){const n=rl[e];if(n)return n;let s=At(e);if(s!=="filter"&&s in t)return rl[e]=s;s=Js(s);for(let r=0;r<$h.length;r++){const i=$h[r]+s;if(i in t)return rl[e]=i}return e}const Fh="http://www.w3.org/1999/xlink";function Hb(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fh,e.slice(6,e.length)):t.setAttributeNS(Fh,e,n);else{const i=Ky(e);n==null||i&&!Ff(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zb(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ff(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function qb(t,e,n,s){t.addEventListener(e,n,s)}function Kb(t,e,n,s){t.removeEventListener(e,n,s)}function Wb(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Gb(e);if(s){const c=i[e]=Xb(s,r);qb(t,a,c,l)}else o&&(Kb(t,a,o,l),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function Gb(t){let e;if(Vh.test(t)){e={};let s;for(;s=t.match(Vh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xs(t.slice(2)),e]}let il=0;const Qb=Promise.resolve(),Yb=()=>il||(Qb.then(()=>il=0),il=Date.now());function Xb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(Jb(s,n.value),e,5,[s])};return n.value=t,n.attached=Yb(),n}function Jb(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Uh=/^on[a-z]/,Zb=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Ub(t,s,r):e==="style"?Bb(t,n,s):Qo(e)?Cc(e)||Wb(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ew(t,e,s,r))?zb(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Hb(t,e,s,r))};function ew(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Uh.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uh.test(e)&&Ue(n)?!1:e in t}const vn="transition",mr="animation",sr=(t,{slots:e})=>nr(fg,$g(t),e);sr.displayName="Transition";const Mg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tw=sr.props=ze({},fg.props,Mg),Hn=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bh=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function $g(t){const e={};for(const O in t)O in Mg||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=nw(r),y=m&&m[0],w=m&&m[1],{onBeforeEnter:_,onEnter:k,onEnterCancelled:C,onLeave:L,onLeaveCancelled:$,onBeforeAppear:H=_,onAppear:D=k,onAppearCancelled:S=C}=e,U=(O,Y,me)=>{bn(O,Y?u:a),bn(O,Y?c:o),me&&me()},F=(O,Y)=>{O._isLeaving=!1,bn(O,h),bn(O,f),bn(O,d),Y&&Y()},Q=O=>(Y,me)=>{const _e=O?D:k,ue=()=>U(Y,O,me);Hn(_e,[Y,ue]),jh(()=>{bn(Y,O?l:i),Gt(Y,O?u:a),Bh(_e)||Hh(Y,s,y,ue)})};return ze(e,{onBeforeEnter(O){Hn(_,[O]),Gt(O,i),Gt(O,o)},onBeforeAppear(O){Hn(H,[O]),Gt(O,l),Gt(O,c)},onEnter:Q(!1),onAppear:Q(!0),onLeave(O,Y){O._isLeaving=!0;const me=()=>F(O,Y);Gt(O,h),Vg(),Gt(O,d),jh(()=>{!O._isLeaving||(bn(O,h),Gt(O,f),Bh(L)||Hh(O,s,w,me))}),Hn(L,[O,me])},onEnterCancelled(O){U(O,!1),Hn(C,[O])},onAppearCancelled(O){U(O,!0),Hn(S,[O])},onLeaveCancelled(O){F(O),Hn($,[O])}})}function nw(t){if(t==null)return null;if(xe(t))return[ol(t.enter),ol(t.leave)];{const e=ol(t);return[e,e]}}function ol(t){return xc(t)}function Gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function bn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function jh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sw=0;function Hh(t,e,n,s){const r=t._endId=++sw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Fg(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),i()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Fg(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${vn}Delay`),i=s(`${vn}Duration`),o=zh(r,i),a=s(`${mr}Delay`),l=s(`${mr}Duration`),c=zh(a,l);let u=null,h=0,d=0;e===vn?o>0&&(u=vn,h=o,d=i.length):e===mr?c>0&&(u=mr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?vn:mr:null,d=u?u===vn?i.length:l.length:0);const f=u===vn&&/\b(transform|all)(,|$)/.test(s(`${vn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function zh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>qh(n)+qh(t[s])))}function qh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Vg(){return document.body.offsetHeight}const Ug=new WeakMap,Bg=new WeakMap,rw={name:"TransitionGroup",props:ze({},tw,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=la(),s=dg();let r,i;return bg(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!cw(r[0].el,n.vnode.el,o))return;r.forEach(ow),r.forEach(aw);const a=r.filter(lw);Vg(),a.forEach(l=>{const c=l.el,u=c.style;Gt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,bn(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=fe(t),a=$g(o);let l=o.tag||Me;r=i,i=e.default?Bc(e.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&jr(u,Br(u,a,s,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];jr(u,Br(u,a,s,n)),Ug.set(u,u.el.getBoundingClientRect())}return v(l,null,i)}}},iw=rw;function ow(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function aw(t){Bg.set(t,t.el.getBoundingClientRect())}function lw(t){const e=Ug.get(t),n=Bg.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function cw(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Fg(s);return r.removeChild(s),i}const uw=["ctrl","shift","alt","meta"],hw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uw.some(n=>t[`${n}Key`]&&!e.includes(n))},dw=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=hw[e[r]];if(i&&i(n,e))return}return t(n,...s)},Kc={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):pr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),pr(t,!0),s.enter(t)):s.leave(t,()=>{pr(t,!1)}):pr(t,e))},beforeUnmount(t,{value:e}){pr(t,e)}};function pr(t,e){t.style.display=e?t._vod:"none"}const fw=ze({patchProp:Zb},Vb);let Kh;function gw(){return Kh||(Kh=bb(fw))}const mw=(...t)=>{const e=gw().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=pw(s);if(!r)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function pw(t){return Ue(t)?document.querySelector(t):t}/**
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
 */const jg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},vw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},yw=function(t){const e=jg(t);return Hg.encodeByteArray(e,!0)},vo=function(t){return yw(t).replace(/\./g,"")},zg=function(t){try{return Hg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function ww(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iw(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ew(){return typeof indexedDB=="object"}function Tw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sw=()=>Cw().__FIREBASE_DEFAULTS__,Aw=()=>{if(typeof process>"u"||typeof{}>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zg(t[1]);return e&&JSON.parse(e)},Wc=()=>{try{return Sw()||Aw()||kw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qg=t=>{var e,n;return(n=(e=Wc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xw=t=>{const e=qg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Rw=()=>{var t;return(t=Wc())===null||t===void 0?void 0:t.config},Kg=t=>{var e;return(e=Wc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),a].join(".")}/**
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
 */const Ow="FirebaseError";class dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ow,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Pw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new dn(r,a,s)}}function Pw(t,e){return t.replace(Lw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Lw=/\{\$([^}]+)}/g;function Mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Wh(i)&&Wh(o)){if(!yo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Wh(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $w(t,e){const n=new Fw(t,e);return n.subscribe.bind(n)}class Fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=al),r.error===void 0&&(r.error=al),r.complete===void 0&&(r.complete=al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function al(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class Uw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Dw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jw(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bw(t){return t===qn?void 0:t}function jw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const zw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},qw=ge.INFO,Kw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Ww=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Kw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=qw,this._logHandler=Ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Gw=(t,e)=>e.some(n=>t instanceof n);let Gh,Qh;function Qw(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yw(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wg=new WeakMap,Bl=new WeakMap,Gg=new WeakMap,ll=new WeakMap,Qc=new WeakMap;function Xw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wg.set(n,t)}).catch(()=>{}),Qc.set(e,t),e}function Jw(t){if(Bl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bl.set(t,e)}let jl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zw(t){jl=t(jl)}function e_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(cl(this),e,...n);return Gg.set(s,e.sort?e.sort():[e]),kn(s)}:Yw().includes(t)?function(...e){return t.apply(cl(this),e),kn(Wg.get(this))}:function(...e){return kn(t.apply(cl(this),e))}}function t_(t){return typeof t=="function"?e_(t):(t instanceof IDBTransaction&&Jw(t),Gw(t,Qw())?new Proxy(t,jl):t)}function kn(t){if(t instanceof IDBRequest)return Xw(t);if(ll.has(t))return ll.get(t);const e=t_(t);return e!==t&&(ll.set(t,e),Qc.set(e,t)),e}const cl=t=>Qc.get(t);function n_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=kn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(kn(o.result),l.oldVersion,l.newVersion,kn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const s_=["get","getKey","getAll","getAllKeys","count"],r_=["put","add","delete","clear"],ul=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=r_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||s_.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ul.set(e,i),i}Zw(t=>({...t,get:(e,n,s)=>Yh(e,n)||t.get(e,n,s),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
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
 */class i_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function o_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hl="@firebase/app",Xh="0.8.4";/**
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
 */const ds=new Gc("@firebase/app"),a_="@firebase/app-compat",l_="@firebase/analytics-compat",c_="@firebase/analytics",u_="@firebase/app-check-compat",h_="@firebase/app-check",d_="@firebase/auth",f_="@firebase/auth-compat",g_="@firebase/database",m_="@firebase/database-compat",p_="@firebase/functions",v_="@firebase/functions-compat",y_="@firebase/installations",b_="@firebase/installations-compat",w_="@firebase/messaging",__="@firebase/messaging-compat",I_="@firebase/performance",E_="@firebase/performance-compat",T_="@firebase/remote-config",C_="@firebase/remote-config-compat",S_="@firebase/storage",A_="@firebase/storage-compat",k_="@firebase/firestore",x_="@firebase/firestore-compat",R_="firebase",D_="9.14.0";/**
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
 */const zl="[DEFAULT]",N_={[Hl]:"fire-core",[a_]:"fire-core-compat",[c_]:"fire-analytics",[l_]:"fire-analytics-compat",[h_]:"fire-app-check",[u_]:"fire-app-check-compat",[d_]:"fire-auth",[f_]:"fire-auth-compat",[g_]:"fire-rtdb",[m_]:"fire-rtdb-compat",[p_]:"fire-fn",[v_]:"fire-fn-compat",[y_]:"fire-iid",[b_]:"fire-iid-compat",[w_]:"fire-fcm",[__]:"fire-fcm-compat",[I_]:"fire-perf",[E_]:"fire-perf-compat",[T_]:"fire-rc",[C_]:"fire-rc-compat",[S_]:"fire-gcs",[A_]:"fire-gcs-compat",[k_]:"fire-fst",[x_]:"fire-fst-compat","fire-js":"fire-js",[R_]:"fire-js-all"};/**
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
 */const bo=new Map,ql=new Map;function O_(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bs(t){const e=t.name;if(ql.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,t);for(const n of bo.values())O_(n,t);return!0}function Yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const P_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new hi("app","Firebase",P_);/**
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
 */class L_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=D_;function Qg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw xn.create("bad-app-name",{appName:String(r)});if(n||(n=Rw()),!n)throw xn.create("no-options");const i=bo.get(r);if(i){if(yo(n,i.options)&&yo(s,i.config))return i;throw xn.create("duplicate-app",{appName:r})}const o=new Hw(r);for(const l of ql.values())o.addComponent(l);const a=new L_(n,s,o);return bo.set(r,a),a}function Yg(t=zl){const e=bo.get(t);if(!e&&t===zl)return Qg();if(!e)throw xn.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let r=(s=N_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(a.join(" "));return}Bs(new hs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const M_="firebase-heartbeat-database",$_=1,qr="firebase-heartbeat-store";let hl=null;function Xg(){return hl||(hl=n_(M_,$_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qr)}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),hl}async function F_(t){var e;try{return(await Xg()).transaction(qr).objectStore(qr).get(Jg(t))}catch(n){if(n instanceof dn)ds.warn(n.message);else{const s=xn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ds.warn(s.message)}}}async function Jh(t,e){var n;try{const r=(await Xg()).transaction(qr,"readwrite");return await r.objectStore(qr).put(e,Jg(t)),r.done}catch(s){if(s instanceof dn)ds.warn(s.message);else{const r=xn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ds.warn(r.message)}}}function Jg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V_=1024,U_=30*24*60*60*1e3;class B_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=U_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zh(),{heartbeatsToSend:n,unsentEntries:s}=j_(this._heartbeatsCache.heartbeats),r=vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Zh(){return new Date().toISOString().substring(0,10)}function j_(t,e=V_){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class H_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ew()?Tw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ed(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function z_(t){Bs(new hs("platform-logger",e=>new i_(e),"PRIVATE")),Bs(new hs("heartbeat",e=>new B_(e),"PRIVATE")),Rn(Hl,Xh,t),Rn(Hl,Xh,"esm2017"),Rn("fire-js","")}z_("");function Xc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Zg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q_=Zg,em=new hi("auth","Firebase",Zg());/**
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
 */const td=new Gc("@firebase/auth");function no(t,...e){td.logLevel<=ge.ERROR&&td.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Jc(t,...e)}function Bt(t,...e){return Jc(t,...e)}function tm(t,e,n){const s=Object.assign(Object.assign({},q_()),{[e]:n});return new hi("auth","Firebase",s).create(e,{appName:t.name})}function K_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&zt(t,"argument-error"),tm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return em.create(t,...e)}function X(t,e,...n){if(!t)throw Jc(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw no(e),new Error(e)}function rn(t,e){t||Xt(e)}/**
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
 */const nd=new Map;function Jt(t){rn(t instanceof Function,"Expected a class definition");let e=nd.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nd.set(t,e),e)}/**
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
 */function W_(t,e){const n=Yc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(yo(i,e!=null?e:{}))return r;zt(r,"already-initialized")}return n.initialize({options:e})}function G_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Q_(){return sd()==="http:"||sd()==="https:"}function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Y_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q_()||ww()||"connection"in navigator)?navigator.onLine:!0}function X_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=bw()||_w()}get(){return Y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zc(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Z_=new gi(3e4,6e4);function eI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ua(t,e,n,s,r={}){return sm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nm.fetch()(rm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function sm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},J_),e);try{const r=new nI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tm(t,u,c);zt(t,u)}}catch(r){if(r instanceof dn)throw r;zt(t,"network-request-failed")}}async function tI(t,e,n,s,r={}){const i=await ua(t,e,n,s,r);return"mfaPendingCredential"in i&&zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function rm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Zc(t.config,r):`${t.config.apiScheme}://${r}`}class nI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),Z_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Bt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function sI(t,e){return ua(t,"POST","/v1/accounts:delete",e)}async function rI(t,e){return ua(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function kr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iI(t,e=!1){const n=dt(t),s=await n.getIdToken(e),r=eu(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:kr(dl(r.auth_time)),issuedAtTime:kr(dl(r.iat)),expirationTime:kr(dl(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dl(t){return Number(t)*1e3}function eu(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const i=zg(s);return i?JSON.parse(i):(no("Failed to decode base64 JWT payload"),null)}catch(i){return no("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function oI(t){const e=eu(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof dn&&aI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function aI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class im{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Kr(t,rI(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hI(i.providerUserInfo):[],a=uI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new im(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cI(t){const e=dt(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hI(t){return t.map(e=>{var{providerId:n}=e,s=Xc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function dI(t,e){const n=await sm(t,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=rm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await dI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Wr;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function yn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new im(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iI(this,e)}reload(){return cI(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kr(this,sI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:L,isAnonymous:$,providerData:H,stsTokenManager:D}=n;X(C&&D,e,"internal-error");const S=Wr.fromJSON(this.name,D);X(typeof C=="string",e,"internal-error"),yn(h,e.name),yn(d,e.name),X(typeof L=="boolean",e,"internal-error"),X(typeof $=="boolean",e,"internal-error"),yn(f,e.name),yn(m,e.name),yn(y,e.name),yn(w,e.name),yn(_,e.name),yn(k,e.name);const U=new ss({uid:C,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:$,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:S,createdAt:_,lastLoginAt:k});return H&&Array.isArray(H)&&(U.providerData=H.map(F=>Object.assign({},F))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new Wr;r.updateFromServerResponse(n);const i=new ss({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await wo(i),i}}/**
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
 */class om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}om.type="NONE";const rd=om;/**
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
 */function so(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=so(this.userKey,r.apiKey,i),this.fullPersistenceKey=so("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Os(Jt(rd),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Jt(rd);const o=so(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ss._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Os(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Os(i,e,s))}}/**
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
 */function id(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(am(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hm(e))return"Blackberry";if(dm(e))return"Webos";if(tu(e))return"Safari";if((e.includes("chrome/")||lm(e))&&!e.includes("edge/"))return"Chrome";if(um(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function am(t=nt()){return/firefox\//i.test(t)}function tu(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lm(t=nt()){return/crios\//i.test(t)}function cm(t=nt()){return/iemobile/i.test(t)}function um(t=nt()){return/android/i.test(t)}function hm(t=nt()){return/blackberry/i.test(t)}function dm(t=nt()){return/webos/i.test(t)}function ha(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fI(t=nt()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gI(){return Iw()&&document.documentMode===10}function fm(t=nt()){return ha(t)||um(t)||dm(t)||hm(t)||/windows phone/i.test(t)||cm(t)}function mI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gm(t,e=[]){let n;switch(t){case"Browser":n=id(nt());break;case"Worker":n=`${id(nt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${s}`}/**
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
 */class pI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class vI{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new od(this),this.idTokenSubscription=new od(this),this.beforeStateQueue=new pI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=em,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await wo(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function da(t){return dt(t)}class od{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function yI(t,e,n){const s=da(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=mm(e),{host:o,port:a}=bI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wI()}function mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bI(t){const e=mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ad(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ad(o)}}}function ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class pm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
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
 */async function Ps(t,e){return tI(t,"POST","/v1/accounts:signInWithIdp",eI(t,e))}/**
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
 */const _I="http://localhost";class fs extends pm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Xc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new fs(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ps(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:_I,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends mi{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class En extends mi{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class Tn extends mi{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ss._fromIdTokenResponse(e,s,r),o=ld(s);return new js({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ld(s);return new js({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _o extends dn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new _o(e,n,s,r)}}function vm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(t,i,e,s):i})}async function II(t,e,n=!1){const s=await Kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return js._forOperation(t,"link",s)}/**
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
 */async function EI(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await Kr(t,vm(r,i,e,t),n);X(o.idToken,r,"internal-error");const a=eu(o.idToken);X(a,r,"internal-error");const{sub:l}=a;return X(t.uid===l,r,"user-mismatch"),js._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),o}}/**
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
 */async function TI(t,e,n=!1){const s="signIn",r=await vm(t,s,e),i=await js._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function CI(t,e,n,s){return dt(t).onIdTokenChanged(e,n,s)}function SI(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function AI(t,e,n,s){return dt(t).onAuthStateChanged(e,n,s)}function kI(t){return dt(t).signOut()}const Io="__sak";/**
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
 */class ym{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xI(){const t=nt();return tu(t)||ha(t)}const RI=1e3,DI=10;class bm extends ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xI()&&mI(),this.fallbackToPolling=fm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);gI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,DI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bm.type="LOCAL";const NI=bm;/**
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
 */class wm extends ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wm.type="SESSION";const _m=wm;/**
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
 */function OI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new fa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await OI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
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
 */function su(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=su("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function LI(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Im(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function MI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $I(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FI(){return Im()?self:null}/**
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
 */const Em="firebaseLocalStorageDb",VI=1,Eo="firebaseLocalStorage",Tm="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([Eo],e?"readwrite":"readonly").objectStore(Eo)}function UI(){const t=indexedDB.deleteDatabase(Em);return new pi(t).toPromise()}function Wl(){const t=indexedDB.open(Em,VI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Eo,{keyPath:Tm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Eo)?e(s):(s.close(),await UI(),e(await Wl()))})})}async function cd(t,e,n){const s=ga(t,!0).put({[Tm]:e,value:n});return new pi(s).toPromise()}async function BI(t,e){const n=ga(t,!1).get(e),s=await new pi(n).toPromise();return s===void 0?null:s.value}function ud(t,e){const n=ga(t,!0).delete(e);return new pi(n).toPromise()}const jI=800,HI=3;class Cm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>HI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(FI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MI(),!this.activeServiceWorker)return;this.sender=new PI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wl();return await cd(e,Io,"1"),await ud(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>cd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ud(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ga(r,!1).getAll();return new pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cm.type="LOCAL";const zI=Cm;/**
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
 */function qI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Bt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",qI().appendChild(s)})}function WI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gi(3e4,6e4);/**
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
 */function Sm(t,e){return e?Jt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ru extends pm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GI(t){return TI(t.auth,new ru(t),t.bypassAuthState)}function QI(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),EI(n,new ru(t),t.bypassAuthState)}async function YI(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),II(n,new ru(t),t.bypassAuthState)}/**
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
 */class Am{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return YI;case"reauthViaPopup":case"reauthViaRedirect":return QI;default:zt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XI=new gi(2e3,1e4);async function JI(t,e,n){const s=da(t);K_(t,e,nu);const r=Sm(s,n);return new Yn(s,"signInViaPopup",e,r).executeNotNull()}class Yn extends Am{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,XI.get())};e()}}Yn.currentPopupAction=null;/**
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
 */const ZI="pendingRedirect",ro=new Map;class eE extends Am{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const s=await tE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tE(t,e){const n=rE(e),s=sE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function nE(t,e){ro.set(t._key(),e)}function sE(t){return Jt(t._redirectPersistence)}function rE(t){return so(ZI,t.config.apiKey,t.name)}async function iE(t,e,n=!1){const s=da(t),r=Sm(s,e),o=await new eE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const oE=10*60*1e3;class aE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!km(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oE&&this.cachedEventUids.clear(),this.cachedEventUids.has(hd(e))}saveEventToCache(e){this.cachedEventUids.add(hd(e)),this.lastProcessedEventTime=Date.now()}}function hd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function km({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return km(t);default:return!1}}/**
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
 */async function cE(t,e={}){return ua(t,"GET","/v1/projects",e)}/**
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
 */const uE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hE=/^https?/;async function dE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cE(t);for(const n of e)try{if(fE(n))return}catch{}zt(t,"unauthorized-domain")}function fE(t){const e=Kl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!hE.test(n))return!1;if(uE.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const gE=new gi(3e4,6e4);function dd(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mE(t){return new Promise((e,n)=>{var s,r,i;function o(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),n(Bt(t,"network-request-failed"))},timeout:gE.get()})}if(!((r=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const a=WI("iframefcb");return jt()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},KI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw io=null,e})}let io=null;function pE(t){return io=io||mE(t),io}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const vE=new gi(5e3,15e3),yE="__/auth/iframe",bE="emulator/auth/iframe",wE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IE(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zc(e,bE):`https://${t.config.authDomain}/${yE}`,s={apiKey:e.apiKey,appName:t.name,v:fi},r=_E.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${di(s).slice(1)}`}async function EE(t){const e=await pE(t),n=jt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:IE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wE,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},vE.get());function l(){jt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const TE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CE=500,SE=600,AE="_blank",kE="http://localhost";class fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xE(t,e,n,s=CE,r=SE){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TE),{width:s.toString(),height:r.toString(),top:i,left:o}),c=nt().toLowerCase();n&&(a=lm(c)?AE:n),am(c)&&(e=e||kE,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(fI(c)&&a!=="_self")return RE(e||"",a),new fd(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new fd(h)}function RE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const DE="__/auth/handler",NE="emulator/auth/handler";function gd(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fi,eventId:r};if(e instanceof nu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof mi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${OE(t)}?${di(a).slice(1)}`}function OE({config:t}){return t.emulator?Zc(t,NE):`https://${t.authDomain}/${DE}`}/**
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
 */const fl="webStorageSupport";class PE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_m,this._completeRedirectFn=iE,this._overrideRedirectResult=nE}async _openPopup(e,n,s,r){var i;rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=gd(e,n,s,Kl(),r);return xE(e,o,su())}async _openRedirect(e,n,s,r){return await this._originValidation(e),LI(gd(e,n,s,Kl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(rn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await EE(e),s=new aE(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fl,{type:fl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[fl];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fm()||tu()||ha()}}const LE=PE;var md="@firebase/auth",pd="0.20.11";/**
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
 */class ME{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $E(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FE(t){Bs(new hs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{X(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gm(t)},u=new vI(a,l,c);return G_(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bs(new hs("auth-internal",e=>{const n=da(e.getProvider("auth").getImmediate());return(s=>new ME(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(md,pd,$E(t)),Rn(md,pd,"esm2017")}/**
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
 */const VE=5*60,UE=Kg("authIdTokenMaxAge")||VE;let vd=null;const BE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UE)return;const r=n==null?void 0:n.token;vd!==r&&(vd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function jE(t=Yg()){const e=Yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=W_(t,{popupRedirectResolver:LE,persistence:[zI,NI,_m]}),s=Kg("authTokenSyncURL");if(s){const i=BE(s);SI(n,i,()=>i(n.currentUser)),CI(n,o=>i(o))}const r=qg("auth");return r&&yI(n,`http://${r}`),n}FE("Browser");var HE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,iu=iu||{},Z=HE||self;function To(){}function ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zE(t){return Object.prototype.hasOwnProperty.call(t,gl)&&t[gl]||(t[gl]=++qE)}var gl="closure_uid_"+(1e9*Math.random()>>>0),qE=0;function KE(t,e,n){return t.call.apply(t.bind,arguments)}function WE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=KE:et=WE,et.apply(null,arguments)}function zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Fn(){this.s=this.s,this.o=this.o}var GE=0;Fn.prototype.s=!1;Fn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),GE!=0)&&zE(this)};Fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ou(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function yd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ma(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var QE=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",To,e),Z.removeEventListener("test",To,e)}catch{}return t}();function Co(t){return/^[\s\xa0]*$/.test(t)}var bd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ml(t,e){return t<e?-1:t>e?1:0}function pa(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return pa().indexOf(t)!=-1}function au(t){return au[" "](t),t}au[" "]=To;function YE(t){var e=ZE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var XE=Ut("Opera"),Hs=Ut("Trident")||Ut("MSIE"),Rm=Ut("Edge"),Gl=Rm||Hs,Dm=Ut("Gecko")&&!(pa().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),JE=pa().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Nm(){var t=Z.document;return t?t.documentMode:void 0}var So;e:{var pl="",vl=function(){var t=pa();if(Dm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rm)return/Edge\/([\d\.]+)/.exec(t);if(Hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JE)return/WebKit\/(\S+)/.exec(t);if(XE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(vl&&(pl=vl?vl[1]:""),Hs){var yl=Nm();if(yl!=null&&yl>parseFloat(pl)){So=String(yl);break e}}So=pl}var ZE={};function eT(){return YE(function(){let t=0;const e=bd(String(So)).split("."),n=bd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ml(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ml(r[2].length==0,i[2].length==0)||ml(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Ql;if(Z.document&&Hs){var wd=Nm();Ql=wd||parseInt(So,10)||void 0}else Ql=void 0;var tT=Ql;function Gr(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Dm){e:{try{au(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gr.X.h.call(this)}}Ye(Gr,tt);var nT={2:"touch",3:"pen",4:"mouse"};Gr.prototype.h=function(){Gr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yi="closure_listenable_"+(1e6*Math.random()|0),sT=0;function rT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++sT,this.ba=this.ea=!1}function va(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function lu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Om(t){const e={};for(const n in t)e[n]=t[n];return e}const _d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<_d.length;i++)n=_d[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ya(t){this.src=t,this.g={},this.h=0}ya.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Xl(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rT(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Yl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=xm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(va(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Xl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var cu="closure_lm_"+(1e6*Math.random()|0),bl={};function Lm(t,e,n,s,r){if(s&&s.once)return $m(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lm(t,e[i],n,s,r);return null}return n=du(n),t&&t[yi]?t.N(e,n,vi(s)?!!s.capture:!!s,r):Mm(t,e,n,!1,s,r)}function Mm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=vi(r)?!!r.capture:!!r,a=hu(t);if(a||(t[cu]=a=new ya(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=iT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)QE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Vm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function iT(){function t(n){return e.call(t.src,t.listener,n)}const e=oT;return t}function $m(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$m(t,e[i],n,s,r);return null}return n=du(n),t&&t[yi]?t.O(e,n,vi(s)?!!s.capture:!!s,r):Mm(t,e,n,!0,s,r)}function Fm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Fm(t,e[i],n,s,r);else s=vi(s)?!!s.capture:!!s,n=du(n),t&&t[yi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Xl(i,n,s,r),-1<n&&(va(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=hu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Xl(e,n,s,r)),(n=-1<t?e[t]:null)&&uu(n))}function uu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[yi])Yl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Vm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=hu(e))?(Yl(n,t),n.h==0&&(n.src=null,e[cu]=null)):va(t)}}}function Vm(t){return t in bl?bl[t]:bl[t]="on"+t}function oT(t,e){if(t.ba)t=!0;else{e=new Gr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&uu(t),t=n.call(s,e)}return t}function hu(t){return t=t[cu],t instanceof ya?t:null}var wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function du(t){return typeof t=="function"?t:(t[wl]||(t[wl]=function(e){return t.handleEvent(e)}),t[wl])}function qe(){Fn.call(this),this.i=new ya(this),this.P=this,this.I=null}Ye(qe,Fn);qe.prototype[yi]=!0;qe.prototype.removeEventListener=function(t,e,n,s){Fm(this,t,e,n,s)};function Qe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var r=e;e=new tt(s,t),Pm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=qi(o,s,!0,e)&&r}if(o=e.g=t,r=qi(o,s,!0,e)&&r,r=qi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=qi(o,s,!1,e)&&r}qe.prototype.M=function(){if(qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)va(n[s]);delete t.g[e],t.h--}}this.I=null};qe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function qi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Yl(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var fu=Z.JSON.stringify;function aT(){var t=jm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class lT{constructor(){this.h=this.g=null}add(e,n){const s=Um.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Um=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new cT,t=>t.reset());class cT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uT(t){Z.setTimeout(()=>{throw t},0)}function Bm(t,e){Jl||hT(),Zl||(Jl(),Zl=!0),jm.add(t,e)}var Jl;function hT(){var t=Z.Promise.resolve(void 0);Jl=function(){t.then(dT)}}var Zl=!1,jm=new lT;function dT(){for(var t;t=aT();){try{t.h.call(t.g)}catch(n){uT(n)}var e=Um;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zl=!1}function ba(t,e){qe.call(this),this.h=t||1,this.g=e||Z,this.j=et(this.lb,this),this.l=Date.now()}Ye(ba,qe);j=ba.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Qe(this,"tick"),this.ca&&(gu(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}j.M=function(){ba.X.M.call(this),gu(this),delete this.g};function mu(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Hm(t){t.g=mu(()=>{t.g=null,t.i&&(t.i=!1,Hm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fT extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hm(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(t){Fn.call(this),this.h=t,this.g={}}Ye(Qr,Fn);var Id=[];function zm(t,e,n,s){Array.isArray(n)||(n&&(Id[0]=n.toString()),n=Id);for(var r=0;r<n.length;r++){var i=Lm(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qm(t){lu(t.g,function(e,n){this.g.hasOwnProperty(n)&&uu(e)},t),t.g={}}Qr.prototype.M=function(){Qr.X.M.call(this),qm(this)};Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wa(){this.g=!0}wa.prototype.Aa=function(){this.g=!1};function gT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function mT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function As(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vT(t,n)+(s?" "+s:"")})}function pT(t,e){t.info(function(){return"TIMEOUT: "+e})}wa.prototype.info=function(){};function vT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return fu(n)}catch{return e}}var ps={},Ed=null;function _a(){return Ed=Ed||new qe}ps.Pa="serverreachability";function Km(t){tt.call(this,ps.Pa,t)}Ye(Km,tt);function Yr(t){const e=_a();Qe(e,new Km(e))}ps.STAT_EVENT="statevent";function Wm(t,e){tt.call(this,ps.STAT_EVENT,t),this.stat=e}Ye(Wm,tt);function it(t){const e=_a();Qe(e,new Wm(e,t))}ps.Qa="timingevent";function Gm(t,e){tt.call(this,ps.Qa,t),this.size=e}Ye(Gm,tt);function bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Ia={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function pu(){}pu.prototype.h=null;function Td(t){return t.h||(t.h=t.i())}function Ym(){}var wi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vu(){tt.call(this,"d")}Ye(vu,tt);function yu(){tt.call(this,"c")}Ye(yu,tt);var ec;function Ea(){}Ye(Ea,pu);Ea.prototype.g=function(){return new XMLHttpRequest};Ea.prototype.i=function(){return{}};ec=new Ea;function _i(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Qr(this),this.O=yT,t=Gl?125:void 0,this.T=new ba(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Xm}function Xm(){this.i=null,this.g="",this.h=!1}var yT=45e3,tc={},Ao={};j=_i.prototype;j.setTimeout=function(t){this.O=t};function nc(t,e,n){t.K=1,t.v=Ca(on(e)),t.s=n,t.P=!0,Jm(t,null)}function Jm(t,e){t.F=Date.now(),Ii(t),t.A=on(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),op(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Xm,t.g=Ap(t.l,n?e:null,!t.s),0<t.N&&(t.L=new fT(et(t.La,t,t.g),t.N)),zm(t.S,t.g,"readystatechange",t.ib),e=t.H?Om(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Yr(),gT(t.j,t.u,t.A,t.m,t.U,t.s)}j.ib=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.La(t)};j.La=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Gl||this.g&&(this.h.h||this.g.fa()||kd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Yr(3):Yr(2)),Ta(this);var n=this.g.aa();this.Y=n;t:if(Zm(this)){var s=kd(this.g);t="";var r=s.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),xr(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,mT(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Co(a)){var c=a;break t}}c=null}if(n=c)As(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sc(this,n);else{this.i=!1,this.o=3,it(12),Xn(this),xr(this);break e}}this.P?(ep(this,u,o),Gl&&this.i&&u==3&&(zm(this.S,this.T,"tick",this.hb),this.T.start())):(As(this.j,this.m,o,null),sc(this,o)),u==4&&Xn(this),this.i&&!this.I&&(u==4?Ep(this.l,this):(this.i=!1,Ii(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Xn(this),xr(this)}}}catch{}finally{}};function Zm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ep(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=bT(t,n),r==Ao){e==4&&(t.o=4,it(14),s=!1),As(t.j,t.m,null,"[Incomplete Response]");break}else if(r==tc){t.o=4,it(15),As(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else As(t.j,t.m,r,null),sc(t,r);Zm(t)&&r!=Ao&&r!=tc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cu(e),e.K=!0,it(11))):(As(t.j,t.m,n,"[Invalid Chunked Response]"),Xn(t),xr(t))}j.hb=function(){if(this.g){var t=Zt(this.g),e=this.g.fa();this.C<e.length&&(Ta(this),ep(this,t,e),this.i&&t!=4&&Ii(this))}};function bT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ao:(n=Number(e.substring(n,s)),isNaN(n)?tc:(s+=1,s+n>e.length?Ao:(e=e.substr(s,n),t.C=s+n,e)))}j.cancel=function(){this.I=!0,Xn(this)};function Ii(t){t.V=Date.now()+t.O,tp(t,t.O)}function tp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bi(et(t.gb,t),e)}function Ta(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}j.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(pT(this.j,this.A),this.K!=2&&(Yr(),it(17)),Xn(this),this.o=2,xr(this)):tp(this,this.V-t)};function xr(t){t.l.G==0||t.I||Ep(t.l,t)}function Xn(t){Ta(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,gu(t.T),qm(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rc(n.h,t))){if(!t.J&&rc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ro(n),ka(n);else break e;Tu(n),it(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=bi(et(n.cb,n),6e3));if(1>=cp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Jn(n,11)}else if((t.J||n.g==t)&&Ro(n),!Co(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(bu(i,i.h),i.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Se(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Sp(s,s.H?s.ka:null,s.V),o.J){up(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Ta(a),Ii(a)),s.g=o}else _p(s);0<n.i.length&&xa(n)}else c[0]!="stop"&&c[0]!="close"||Jn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Jn(n,7):Eu(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Yr(4)}catch{}}function wT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ma(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _T(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function np(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_T(t),s=wT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function rs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rs){this.h=e!==void 0?e:t.h,ko(this,t.j),this.s=t.s,this.g=t.g,xo(this,t.m),this.l=t.l,e=t.i;var n=new Xr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cd(this,n),this.o=t.o}else t&&(n=String(t).match(sp))?(this.h=!!e,ko(this,n[1]||"",!0),this.s=_r(n[2]||""),this.g=_r(n[3]||"",!0),xo(this,n[4]),this.l=_r(n[5]||"",!0),Cd(this,n[6]||"",!0),this.o=_r(n[7]||"")):(this.h=!!e,this.i=new Xr(null,this.h))}rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ir(e,Sd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ir(e,Sd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ir(n,n.charAt(0)=="/"?CT:TT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ir(n,AT)),t.join("")};function on(t){return new rs(t)}function ko(t,e,n){t.j=n?_r(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cd(t,e,n){e instanceof Xr?(t.i=e,kT(t.i,t.h)):(n||(e=Ir(e,ST)),t.i=new Xr(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function Ca(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function _r(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ir(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ET),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ET(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sd=/[#\/\?@]/g,TT=/[#\?:]/g,CT=/[#\?]/g,ST=/[#\?@]/g,AT=/#/g;function Xr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vn(t){t.g||(t.g=new Map,t.h=0,t.i&&IT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=Xr.prototype;j.add=function(t,e){Vn(this),this.i=null,t=rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rp(t,e){Vn(t),e=rr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ip(t,e){return Vn(t),e=rr(t,e),t.g.has(e)}j.forEach=function(t,e){Vn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};j.oa=function(){Vn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};j.W=function(t){Vn(this);let e=[];if(typeof t=="string")ip(this,t)&&(e=e.concat(this.g.get(rr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return Vn(this),this.i=null,t=rr(this,t),ip(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function op(t,e,n){rp(t,e),0<n.length&&(t.i=null,t.g.set(rr(t,e),ou(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function kT(t,e){e&&!t.j&&(Vn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(rp(this,s),op(this,r,n))},t)),t.j=e}var xT=class{constructor(t,e){this.h=t,this.g=e}};function ap(t){this.l=t||RT,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RT=10;function lp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cp(t){return t.h?1:t.g?t.g.size:0}function rc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bu(t,e){t.g?t.g.add(e):t.h=e}function up(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ap.prototype.cancel=function(){if(this.i=hp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ou(t.i)}function wu(){}wu.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};wu.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function DT(){this.g=new wu}function NT(t,e,n){const s=n||"";try{np(t,function(r,i){let o=r;vi(r)&&(o=fu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function OT(t,e){const n=new wa;if(Z.Image){const s=new Image;s.onload=zi(Ki,n,s,"TestLoadImage: loaded",!0,e),s.onerror=zi(Ki,n,s,"TestLoadImage: error",!1,e),s.onabort=zi(Ki,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=zi(Ki,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ki(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ei(t){this.l=t.ac||null,this.j=t.jb||!1}Ye(Ei,pu);Ei.prototype.g=function(){return new Sa(this.l,this.j)};Ei.prototype.i=function(t){return function(){return t}}({});function Sa(t,e){qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_u,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Sa,qe);var _u=0;j=Sa.prototype;j.open=function(t,e){if(this.readyState!=_u)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jr(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=_u};j.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function dp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}j.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ti(this):Jr(this),this.readyState==3&&dp(this)}};j.Va=function(t){this.g&&(this.response=this.responseText=t,Ti(this))};j.Ua=function(t){this.g&&(this.response=t,Ti(this))};j.ga=function(){this.g&&Ti(this)};function Ti(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jr(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PT=Z.JSON.parse;function Re(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fp,this.K=this.L=!1}Ye(Re,qe);var fp="",LT=/^https?$/i,MT=["POST","PUT"];j=Re.prototype;j.Ka=function(t){this.L=t};j.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ec.g(),this.C=this.u?Td(this.u):Td(ec),this.g.onreadystatechange=et(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ad(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=xm(MT,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pp(this),0<this.B&&((this.K=$T(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.qa,this)):this.A=mu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ad(this,i)}};function $T(t){return Hs&&eT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.qa=function(){typeof iu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Ad(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gp(t),Aa(t)}function gp(t){t.D||(t.D=!0,Qe(t,"complete"),Qe(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Aa(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Aa(this,!0)),Re.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?mp(this):this.fb())};j.fb=function(){mp(this)};function mp(t){if(t.h&&typeof iu<"u"&&(!t.C[1]||Zt(t)!=4||t.aa()!=2)){if(t.v&&Zt(t)==4)mu(t.Ha,0,t);else if(Qe(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(sp)[1]||null;if(!r&&Z.self&&Z.self.location){var i=Z.self.location.protocol;r=i.substr(0,i.length-1)}s=!LT.test(r?r.toLowerCase():"")}n=s}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",gp(t)}}finally{Aa(t)}}}}function Aa(t,e){if(t.g){pp(t);const n=t.g,s=t.C[0]?To:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=s}catch{}}}function pp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}j.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PT(e)}};function kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vp(t){let e="";return lu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Iu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=vp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function vr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yp(t){this.Ca=0,this.i=[],this.j=new wa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vr("baseRetryDelayMs",5e3,t),this.bb=vr("retryDelaySeedMs",1e4,t),this.$a=vr("forwardChannelMaxRetries",2,t),this.ta=vr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ap(t&&t.concurrentRequestLimit),this.Fa=new DT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=yp.prototype;j.ma=8;j.G=1;function Eu(t){if(bp(t),t.G==3){var e=t.U++,n=on(t.F);Se(n,"SID",t.I),Se(n,"RID",e),Se(n,"TYPE","terminate"),Ci(t,n),e=new _i(t,t.j,e,void 0),e.K=2,e.v=Ca(on(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ap(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ii(e)}Cp(t)}function ka(t){t.g&&(Cu(t),t.g.cancel(),t.g=null)}function bp(t){ka(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Ro(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function xa(t){lp(t.h)||t.m||(t.m=!0,Bm(t.Ja,t),t.C=0)}function FT(t,e){return cp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=bi(et(t.Ja,t,e),Tp(t,t.C)),t.C++,!0)}j.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new _i(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Om(i),Pm(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wp(this,r,e),n=on(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),Ci(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(vp(i)))+"&"+e:this.o&&Iu(n,this.o,i)),bu(this.h,r),this.Ya&&Se(n,"TYPE","init"),this.O?(Se(n,"$req",e),Se(n,"SID","null"),r.Z=!0,nc(r,n,null)):nc(r,n,e),this.G=2}}else this.G==3&&(t?xd(this,t):this.i.length==0||lp(this.h)||xd(this))};function xd(t,e){var n;e?n=e.m:n=t.U++;const s=on(t.F);Se(s,"SID",t.I),Se(s,"RID",n),Se(s,"AID",t.T),Ci(t,s),t.o&&t.s&&Iu(s,t.o,t.s),n=new _i(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=wp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bu(t.h,n),nc(n,s,e)}function Ci(t,e){t.ia&&lu(t.ia,function(n,s){Se(e,s,n)}),t.l&&np({},function(n,s){Se(e,s,n)})}function wp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?et(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{NT(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function _p(t){t.g||t.u||(t.Z=1,Bm(t.Ia,t),t.A=0)}function Tu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=bi(et(t.Ia,t),Tp(t,t.A)),t.A++,!0)}j.Ia=function(){if(this.u=null,Ip(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=bi(et(this.eb,this),t)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,it(10),ka(this),Ip(this))};function Cu(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function Ip(t){t.g=new _i(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=on(t.sa);Se(e,"RID","rpc"),Se(e,"SID",t.I),Se(e,"CI",t.L?"0":"1"),Se(e,"AID",t.T),Se(e,"TYPE","xmlhttp"),Ci(t,e),t.o&&t.s&&Iu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ca(on(e)),n.s=null,n.P=!0,Jm(n,t)}j.cb=function(){this.v!=null&&(this.v=null,ka(this),Tu(this),it(19))};function Ro(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function Ep(t,e){var n=null;if(t.g==e){Ro(t),Cu(t),t.g=null;var s=2}else if(rc(t.h,e))n=e.D,up(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=_a(),Qe(s,new Gm(s,n)),xa(t)}else _p(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&FT(t,e)||s==2&&Tu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}}function Tp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Jn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=et(t.kb,t);n||(n=new rs("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||ko(n,"https"),Ca(n)),OT(n.toString(),s)}else it(2);t.G=0,t.l&&t.l.va(e),Cp(t),bp(t)}j.kb=function(t){t?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Cp(t){if(t.G=0,t.la=[],t.l){const e=hp(t.h);(e.length!=0||t.i.length!=0)&&(yd(t.la,e),yd(t.la,t.i),t.h.i.length=0,ou(t.i),t.i.length=0),t.l.ua()}}function Sp(t,e,n){var s=n instanceof rs?on(n):new rs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),xo(s,s.m);else{var r=Z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new rs(null,void 0);s&&ko(i,s),e&&(i.g=e),r&&xo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Se(s,n,e),Se(s,"VER",t.ma),Ci(t,s),s}function Ap(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Re(new Ei({jb:!0})):new Re(t.ra),e.Ka(t.H),e}function kp(){}j=kp.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Do(){if(Hs&&!(10<=Number(tT)))throw Error("Environmental error: no available transport.")}Do.prototype.g=function(t,e){return new bt(t,e)};function bt(t,e){qe.call(this),this.g=new yp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Co(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Co(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ir(this)}Ye(bt,qe);bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Sp(t,null,t.V),xa(t)};bt.prototype.close=function(){Eu(this.g)};bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=fu(t),t=n);e.i.push(new xT(e.ab++,t)),e.G==3&&xa(e)};bt.prototype.M=function(){this.g.l=null,delete this.j,Eu(this.g),delete this.g,bt.X.M.call(this)};function xp(t){vu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(xp,vu);function Rp(){yu.call(this),this.status=1}Ye(Rp,yu);function ir(t){this.g=t}Ye(ir,kp);ir.prototype.xa=function(){Qe(this.g,"a")};ir.prototype.wa=function(t){Qe(this.g,new xp(t))};ir.prototype.va=function(t){Qe(this.g,new Rp)};ir.prototype.ua=function(){Qe(this.g,"b")};Do.prototype.createWebChannel=Do.prototype.g;bt.prototype.send=bt.prototype.u;bt.prototype.open=bt.prototype.m;bt.prototype.close=bt.prototype.close;Ia.NO_ERROR=0;Ia.TIMEOUT=8;Ia.HTTP_ERROR=6;Qm.COMPLETE="complete";Ym.EventType=wi;wi.OPEN="a";wi.CLOSE="b";wi.ERROR="c";wi.MESSAGE="d";qe.prototype.listen=qe.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.Oa;Re.prototype.getLastErrorCode=Re.prototype.Ea;Re.prototype.getStatus=Re.prototype.aa;Re.prototype.getResponseJson=Re.prototype.Sa;Re.prototype.getResponseText=Re.prototype.fa;Re.prototype.send=Re.prototype.da;Re.prototype.setWithCredentials=Re.prototype.Ka;var VT=function(){return new Do},UT=function(){return _a()},_l=Ia,BT=Qm,jT=ps,Rd={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},HT=Ei,Wi=Ym,zT=Re;const Dd="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let or="9.14.0";/**
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
 */const gs=new Gc("@firebase/firestore");function Nd(){return gs.logLevel}function z(t,...e){if(gs.logLevel<=ge.DEBUG){const n=e.map(Su);gs.debug(`Firestore (${or}): ${t}`,...n)}}function an(t,...e){if(gs.logLevel<=ge.ERROR){const n=e.map(Su);gs.error(`Firestore (${or}): ${t}`,...n)}}function ic(t,...e){if(gs.logLevel<=ge.WARN){const n=e.map(Su);gs.warn(`Firestore (${or}): ${t}`,...n)}}function Su(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function Te(t,e){t||ne()}function se(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Dp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class KT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WT{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new is;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new is,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new is)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new Dp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Xe(e)}}class GT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Te(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class QT{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new GT(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XT{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.A=n.token,new YT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Np{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=JT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Fe(0,0))}static max(){return new oe(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zr{constructor(e,n,s){n===void 0?n=0:n>e.length&&ne(),s===void 0?s=e.length-n:s>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Zr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Zr{construct(e,n,s){return new Ae(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(x.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const ZT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends Zr{construct(e,n,s){return new Ze(e,n,s)}static isValidIdentifier(e){return ZT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new W(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new W(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new W(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ae.fromString(e))}static fromName(e){return new G(Ae.fromString(e).popFirst(5))}static empty(){return new G(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ae(e.slice()))}}function eC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=oe.fromTimestamp(s===1e9?new Fe(n+1,0):new Fe(n,s));return new On(r,G.empty(),e)}function tC(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new On(oe.min(),G.empty(),-1)}static max(){return new On(oe.max(),G.empty(),-1)}}function nC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const sC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Si(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==sC)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Od(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Op(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Au.at=-1;class Be{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:We.RED,this.left=r!=null?r:We.EMPTY,this.right=i!=null?i:We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new We(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(t,e,n,s,r){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pd(this.data.getIterator())}getIteratorFrom(e){return new Pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class Pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ve(Ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new st(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const iC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=iC.exec(t);if(Te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qs(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function Pp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lp(t){const e=t.mapValue.fields.__previous_value__;return Pp(e)?Lp(e):e}function ei(t){const e=Pn(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class oC{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}function Ra(t){return t==null}function No(t){return t===0&&1/t==-1/0}function aC(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pp(t)?4:lC(t)?9007199254740991:10:ne()}function qt(t,e){if(t===e)return!0;const n=ms(t);if(n!==ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ei(t).isEqual(ei(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Pn(s.timestampValue),o=Pn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return qs(s.bytesValue).isEqual(qs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Le(s.geoPointValue.latitude)===Le(r.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Le(s.integerValue)===Le(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Le(s.doubleValue),o=Le(r.doubleValue);return i===o?No(i)===No(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Od(i)!==Od(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return ne()}}function ni(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=ms(t),s=ms(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Le(r.integerValue||r.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ld(t.timestampValue,e.timestampValue);case 4:return Ld(ei(t),ei(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=qs(r),a=qs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=pe(o[l],a[l]);if(c!==0)return c}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=pe(Le(r.latitude),Le(i.latitude));return o!==0?o:pe(Le(r.longitude),Le(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Ks(o[l],a[l]);if(c)return c}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Qi.mapValue&&i===Qi.mapValue)return 0;if(r===Qi.mapValue)return 1;if(i===Qi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=pe(a[u],c[u]);if(h!==0)return h;const d=Ks(o[a[u]],l[c[u]]);if(d!==0)return d}return pe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Pn(t),s=Pn(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function Ls(t){return oc(t)}function oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Pn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=oc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${oc(s.fields[a])}`;return i+"}"}(t.mapValue):ne();var e,n}function ac(t){return!!t&&"integerValue"in t}function ku(t){return!!t&&"arrayValue"in t}function Md(t){return!!t&&"nullValue"in t}function $d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oo(t){return!!t&&"mapValue"in t}function Rr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ar(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Rr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rr(n)}setAll(e){let n=Ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Rr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];oo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ar(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Tt(Rr(this.value))}}function Mp(t){const e=[];return ar(t.fields,(n,s)=>{const r=new Ze([n]);if(oo(s)){const i=Mp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ht(e)}/**
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
 */class Ge{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ge(e,0,oe.min(),oe.min(),Tt.empty(),0)}static newFoundDocument(e,n,s){return new Ge(e,1,n,oe.min(),s,0)}static newNoDocument(e,n){return new Ge(e,2,n,oe.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,oe.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cC{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Fd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new cC(t,e,n,s,r,i,o)}function xu(t){const e=se(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Ls(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ls(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ls(s)).join(",")),e.ht=n}return e.ht}function uC(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ls(s.value)}`;var s}).join(", ")}]`),Ra(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ls(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ls(n)).join(",")),`Target(${e})`}function Ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!yC(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!qt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ud(t.startAt,e.startAt)&&Ud(t.endAt,e.endAt)}function lc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ct extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new hC(e,n,s):n==="array-contains"?new gC(e,s):n==="in"?new mC(e,s):n==="not-in"?new pC(e,s):n==="array-contains-any"?new vC(e,s):new ct(e,n,s)}static lt(e,n,s){return n==="in"?new dC(e,s):new fC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ks(n,this.value)):n!==null&&ms(this.value)===ms(n)&&this.ft(Ks(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class hC extends ct{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.ft(n)}}class dC extends ct{constructor(e,n){super(e,"in",n),this.keys=$p("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fC extends ct{constructor(e,n){super(e,"not-in",n),this.keys=$p("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $p(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class gC extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ku(n)&&ni(n.arrayValue,this.value)}}class mC extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ni(this.value.arrayValue,n)}}class pC extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ni(this.value.arrayValue,n)}}class vC extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ni(this.value.arrayValue,s))}}class Oo{constructor(e,n){this.position=e,this.inclusive=n}}class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function yC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Vd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=Ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ki{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function bC(t,e,n,s,r,i,o,a){return new ki(t,e,n,s,r,i,o,a)}function Du(t){return new ki(t)}function Bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vp(t){for(const e of t.filters)if(e.dt())return e.field;return null}function wC(t){return t.collectionGroup!==null}function si(t){const e=se(t);if(e._t===null){e._t=[];const n=Vp(e),s=Fp(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Ms(n)),e._t.push(new Ms(Ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ms(Ze.keyField(),i))}}}return e._t}function ln(t){const e=se(t);if(!e.wt)if(e.limitType==="F")e.wt=Fd(e.path,e.collectionGroup,si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of si(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ms(i.field,o))}const s=e.endAt?new Oo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Oo(e.startAt.position,e.startAt.inclusive):null;e.wt=Fd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.wt}function cc(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Da(t,e){return Ru(ln(t),ln(e))&&t.limitType===e.limitType}function Up(t){return`${xu(ln(t))}|lt:${t.limitType}`}function uc(t){return`Query(target=${uC(ln(t))}; limitType=${t.limitType})`}function Nu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):G.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Vd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,si(n),s)||n.endAt&&!function(r,i,o){const a=Vd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,si(n),s))}(t,e)}function _C(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bp(t){return(e,n)=>{let s=!1;for(const r of si(t)){const i=IC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function IC(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Ks(a,l):ne()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ne()}}/**
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
 */function jp(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Hp(t){return{integerValue:""+t}}function EC(t,e){return aC(e)?Hp(e):jp(t,e)}/**
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
 */class Na{constructor(){this._=void 0}}function TC(t,e,n){return t instanceof Po?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ri?qp(t,e):t instanceof ii?Kp(t,e):function(s,r){const i=zp(s,r),o=jd(i)+jd(s.yt);return ac(i)&&ac(s.yt)?Hp(o):jp(s.It,o)}(t,e)}function CC(t,e,n){return t instanceof ri?qp(t,e):t instanceof ii?Kp(t,e):n}function zp(t,e){return t instanceof Lo?ac(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Po extends Na{}class ri extends Na{constructor(e){super(),this.elements=e}}function qp(t,e){const n=Wp(e);for(const s of t.elements)n.some(r=>qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ii extends Na{constructor(e){super(),this.elements=e}}function Kp(t,e){let n=Wp(e);for(const s of t.elements)n=n.filter(r=>!qt(r,s));return{arrayValue:{values:n}}}class Lo extends Na{constructor(e,n){super(),this.It=e,this.yt=n}}function jd(t){return Le(t.integerValue||t.doubleValue)}function Wp(t){return ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function SC(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ri&&s instanceof ri||n instanceof ii&&s instanceof ii?zs(n.elements,s.elements,qt):n instanceof Lo&&s instanceof Lo?qt(n.yt,s.yt):n instanceof Po&&s instanceof Po}(t.transform,e.transform)}class AC{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oa{}function Gp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yp(t.key,en.none()):new xi(t.key,t.data,en.none());{const n=t.data,s=Tt.empty();let r=new Ve(Ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new vs(t.key,s,new Ht(r.toArray()),en.none())}}function kC(t,e,n){t instanceof xi?function(s,r,i){const o=s.value.clone(),a=zd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,r,i){if(!ao(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=zd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Qp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Dr(t,e,n,s){return t instanceof xi?function(r,i,o,a){if(!ao(r.precondition,i))return o;const l=r.value.clone(),c=qd(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(r,i,o,a){if(!ao(r.precondition,i))return o;const l=qd(r.fieldTransforms,a,i),c=i.data;return c.setAll(Qp(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return ao(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function xC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=zp(s.transform,r||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(s.field,i))}return n||null}function Hd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&zs(n,s,(r,i)=>SC(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xi extends Oa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vs extends Oa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function zd(t,e,n){const s=new Map;Te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,CC(o,a,n[r]))}return s}function qd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,TC(i,o,e))}return s}class Yp extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RC extends Oa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DC{constructor(e){this.count=e}}/**
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
 */var Pe,he;function NC(t){switch(t){default:return ne();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Xp(t){if(t===void 0)return an("GRPC error has no .code"),x.UNKNOWN;switch(t){case Pe.OK:return x.OK;case Pe.CANCELLED:return x.CANCELLED;case Pe.UNKNOWN:return x.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return x.INTERNAL;case Pe.UNAVAILABLE:return x.UNAVAILABLE;case Pe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Pe.NOT_FOUND:return x.NOT_FOUND;case Pe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Pe.ABORTED:return x.ABORTED;case Pe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Pe.DATA_LOSS:return x.DATA_LOSS;default:return ne()}}(he=Pe||(Pe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ar(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Op(this.inner)}size(){return this.innerSize}}/**
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
 */const OC=new Be(G.comparator);function cn(){return OC}const Jp=new Be(G.comparator);function Er(...t){let e=Jp;for(const n of t)e=e.insert(n.key,n);return e}function Zp(t){let e=Jp;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zn(){return Nr()}function ev(){return Nr()}function Nr(){return new lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const PC=new Be(G.comparator),LC=new Ve(G.comparator);function ce(...t){let e=LC;for(const n of t)e=e.add(n);return e}const MC=new Ve(pe);function tv(){return MC}/**
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
 */class Pa{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Pa(oe.min(),r,tv(),cn(),ce())}}class Ri{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ri(s,n,ce(),ce(),ce())}}/**
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
 */class lo{constructor(e,n,s,r){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=r}}class nv{constructor(e,n){this.targetId=e,this.At=n}}class sv{constructor(e,n,s=st.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kd{constructor(){this.Rt=0,this.bt=Gd(),this.Pt=st.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ce(),n=ce(),s=ce();return this.bt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ne()}}),new Ri(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Gd()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class $C{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=cn(),this.qt=Wd(),this.Kt=new Ve(pe)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(e){const n=e.targetId,s=e.At.count,r=this.Xt(n);if(r){const i=r.target;if(lc(i))if(s===0){const o=new G(i.path);this.jt(n,o,Ge.newNoDocument(o,oe.min()))}else Te(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&lc(a.target)){const l=new G(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ge.newNoDocument(l,e))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=ce();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Pa(e,n,this.Kt,this.Ut,s);return this.Ut=cn(),this.qt=Wd(),this.Kt=new Ve(pe),r}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,n)?r.kt(n,1):r.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Kd,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ve(pe),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Kd),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Wd(){return new Be(G.comparator)}function Gd(){return new Be(G.comparator)}/**
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
 */const FC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class UC{constructor(e,n){this.databaseId=e,this.gt=n}}function Mo(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(t,e){return t.gt?e.toBase64():e.toUint8Array()}function BC(t,e){return Mo(t,e.toTimestamp())}function tn(t){return Te(!!t),oe.fromTimestamp(function(e){const n=Pn(e);return new Fe(n.seconds,n.nanos)}(t))}function Ou(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function iv(t){const e=Ae.fromString(t);return Te(lv(e)),e}function hc(t,e){return Ou(t.databaseId,e.path)}function Il(t,e){const n=iv(e);if(n.get(1)!==t.databaseId.projectId)throw new W(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(ov(n))}function dc(t,e){return Ou(t.databaseId,e)}function jC(t){const e=iv(t);return e.length===4?Ae.emptyPath():ov(e)}function fc(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ov(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qd(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function HC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.gt?(Te(c===void 0||typeof c=="string"),st.fromBase64String(c||"")):(Te(c===void 0||c instanceof Uint8Array),st.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?x.UNKNOWN:Xp(l.code);return new W(c,l.message||"")}(o);n=new sv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Il(t,s.document.name),i=tn(s.document.updateTime),o=new Tt({mapValue:{fields:s.document.fields}}),a=Ge.newFoundDocument(r,i,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new lo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Il(t,s.document),i=s.readTime?tn(s.readTime):oe.min(),o=Ge.newNoDocument(r,i),a=s.removedTargetIds||[];n=new lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Il(t,s.document),i=s.removedTargetIds||[];n=new lo([],i,r,null)}else{if(!("filter"in e))return ne();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new DC(r),o=s.targetId;n=new nv(o,i)}}return n}function zC(t,e){let n;if(e instanceof xi)n={update:Qd(t,e.key,e.value)};else if(e instanceof Yp)n={delete:hc(t,e.key)};else if(e instanceof vs)n={update:Qd(t,e.key,e.data),updateMask:eS(e.fieldMask)};else{if(!(e instanceof RC))return ne();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Po)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ri)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ii)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Lo)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw ne()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:BC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ne()}(t,e.precondition)),n}function qC(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?tn(s.updateTime):tn(r);return i.isEqual(oe.min())&&(i=tn(r)),new AC(i,s.transformResults||[])}(n,e))):[]}function KC(t,e){return{documents:[dc(t,e.path)]}}function WC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=dc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if($d(h.value))return{unaryFilter:{field:Es(h.field),op:"IS_NAN"}};if(Md(h.value))return{unaryFilter:{field:Es(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if($d(h.value))return{unaryFilter:{field:Es(h.field),op:"IS_NOT_NAN"}};if(Md(h.value))return{unaryFilter:{field:Es(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(h.field),op:XC(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Es(u.field),direction:YC(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.gt||Ra(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GC(t){let e=jC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=av(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ms(ks(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ra(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Oo(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Oo(d,h)}(n.endAt)),bC(e,r,o,i,a,"F",l,c)}function QC(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ne()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function av(t){return t?t.unaryFilter!==void 0?[ZC(t)]:t.fieldFilter!==void 0?[JC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>av(e)).reduce((e,n)=>e.concat(n)):ne():[]}function YC(t){return FC[t]}function XC(t){return VC[t]}function Es(t){return{fieldPath:t.canonicalString()}}function ks(t){return Ze.fromServerFormat(t.fieldPath)}function JC(t){return ct.create(ks(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}function ZC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ks(t.unaryFilter.field);return ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ks(t.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ks(t.unaryFilter.field);return ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ks(t.unaryFilter.field);return ct.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}function eS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&kC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ev();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Gp(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,s)=>Hd(n,s))&&zs(this.baseMutations,e.baseMutations,(n,s)=>Hd(n,s))}}class Pu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Te(e.mutations.length===s.length);let r=PC;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Pu(e,n,s,r)}}/**
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
 */class nS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class os{constructor(e,n,s,r,i=oe.min(),o=oe.min(),a=st.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new os(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new os(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class sS{constructor(e){this.re=e}}function rS(t){const e=GC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cc(e,e.limit,"L"):e}/**
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
 */class iS{constructor(){this.Ye=new oS}addToCollectionParentIndex(e,n){return this.Ye.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(On.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class oS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ve(Ae.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(Ae.comparator)).toArray()}}/**
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
 */class Ws{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ws(0)}static vn(){return new Ws(-1)}}/**
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
 */class aS{constructor(){this.changes=new lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class cS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Dr(s.mutation,r,Ht.empty(),Fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Er();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=cn();const o=Nr(),a=Nr();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof vs)?i=i.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Dr(u.mutation,c,u.mutation.getFieldMask(),Fe.now()))}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new lS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Nr();let r=new Be((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ht.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||ce()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ev();u.forEach(d=>{if(!i.has(d)){const f=Gp(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return G.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(Zn());let a=-1,l=i;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.getBaseDocument(e,u,h).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ce())).next(u=>({batchId:a,changes:Zp(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let r=Er();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Er();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const l=function(c,u){return new ki(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ge.newInvalidDocument(c)))});let o=Er();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Dr(c.mutation,l,Ht.empty(),Fe.now()),Nu(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(Ge.newInvalidDocument(n))}}/**
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
 */class uS{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:tn(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:rS(s.bundledQuery),readTime:tn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class hS{constructor(){this.overlays=new Be(G.comparator),this.es=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zn();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ue(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=Zn(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Be((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Zn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Zn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return R.resolve(a)}ue(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new nS(n,s));let i=this.es.get(n);i===void 0&&(i=ce(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class Lu{constructor(){this.ns=new Ve(je.ss),this.rs=new Ve(je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new je(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new je(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new G(new Ae([])),s=new je(n,e),r=new je(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new G(new Ae([])),s=new je(n,e),r=new je(n,e+1);let i=ce();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return G.comparator(e.key,n.key)||pe(e._s,n._s)}static os(e,n){return pe(e._s,n._s)||G.comparator(e.key,n.key)}}/**
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
 */class dS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ve(je.ss)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new je(n,0),r=new je(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ve(pe);return n.forEach(r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),R.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;G.isDocumentKey(i)||(i=i.child(""));const o=new je(new G(i),0);let a=new Ve(pe);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l._s)),!0)},o),R.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Te(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return R.forEach(n.mutations,r=>{const i=new je(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new je(n,0),r=this.gs.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fS{constructor(e){this.Es=e,this.docs=new Be(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=cn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ge.newInvalidDocument(r))}),R.resolve(s)}getAllFromCollection(e,n,s){let r=cn();const i=new G(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||nC(tC(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,r){ne()}As(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gS(this)}getSize(e){return R.resolve(this.size)}}class gS extends aS{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class mS{constructor(e){this.persistence=e,this.Rs=new lr(n=>xu(n),Ru),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Lu,this.targetCount=0,this.vs=Ws.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),R.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Dn(n),R.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Ps.containsKey(n))}}/**
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
 */class pS{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Au(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new mS(this),this.indexManager=new iS,this.remoteDocumentCache=function(s){return new fS(s)}(s=>this.referenceDelegate.xs(s)),this.It=new sS(n),this.Ns=new uS(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new dS(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){z("MemoryPersistence","Starting transaction:",e);const r=new vS(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return R.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class vS extends rC{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Fs=new Lu,this.$s=null}static Bs(e){return new Mu(e)}get Ls(){if(this.$s)return this.$s;throw ne()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),R.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ls,s=>{const r=G.fromPath(s);return this.Us(e,r).next(i=>{i||n.removeEntry(r,oe.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return R.or([()=>R.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class $u{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ce(),r=ce();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new $u(e,n.fromCache,s,r)}}/**
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
 */class yS{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Bd(n))return R.resolve(null);let s=ln(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=cc(n,null,"F"),s=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ce(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,cc(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,r){return Bd(n)||r.isEqual(oe.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(Nd()<=ge.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),uc(n)),this.Bi(e,o,n,eC(r,-1)))})}Fi(e,n){let s=new Ve(Bp(e));return n.forEach((r,i)=>{Nu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return Nd()<=ge.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",uc(n)),this.Ni.getDocumentsMatchingQuery(e,n,On.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class bS{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.It=r,this.Ui=new Be(pe),this.qi=new lr(i=>xu(i),Ru),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cS(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function wS(t,e,n,s){return new bS(t,e,n,s)}async function cv(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=ce();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function _S(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=R.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(m=>{const y=l.docVersions.get(f);Te(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ce();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function uv(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function IS(t,e){const n=se(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(st.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(m,y,w){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(i,f))});let l=cn(),c=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(ES(i,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(oe.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.Ui=r,i))}function ES(t,e,n){let s=ce(),r=ce();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=cn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:r}})}function TS(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CS(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new os(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function gc(t,e,n){const s=se(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ai(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Yd(t,e,n){const s=se(t);let r=oe.min(),i=ce();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=se(a),h=u.qi.get(c);return h!==void 0?R.resolve(u.Ui.get(h)):u.Cs.getTargetData(l,c)}(s,o,ln(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:oe.min(),n?i:ce())).next(a=>(SS(s,_C(e),a),{documents:a,Hi:i})))}function SS(t,e,n){let s=t.Ki.get(e)||oe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Xd{constructor(){this.activeTargetIds=tv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AS{constructor(){this.Lr=new Xd,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Xd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kS{qr(e){}shutdown(){}}/**
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
 */class Jd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const xS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class RS{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class DS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);z("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(l=>(z("RestConnection","Received: ",l),l),l=>{throw ic("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+or,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=xS[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new zT;a.setWithCredentials(!0),a.listenOnce(BT.COMPLETE,()=>{var c;try{switch(a.getLastErrorCode()){case _l.NO_ERROR:const u=a.getResponseJson();z("Connection","XHR received:",JSON.stringify(u)),i(u);break;case _l.TIMEOUT:z("Connection",'RPC "'+e+'" timed out'),o(new W(x.DEADLINE_EXCEEDED,"Request time out"));break;case _l.HTTP_ERROR:const h=a.getStatus();if(z("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=(c=d)===null||c===void 0?void 0:c.error;if(f&&f.status&&f.message){const m=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(w)>=0?w:x.UNKNOWN}(f.status);o(new W(m,f.message))}else o(new W(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(x.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=VT(),o=UT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new HT({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=r.join("");z("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const d=new RS({Hr:m=>{h?z("Connection","Not sending because WebChannel is closed:",m):(u||(z("Connection","Opening WebChannel transport."),c.open(),u=!0),z("Connection","WebChannel sending:",m),c.send(m))},Jr:()=>c.close()}),f=(m,y,w)=>{m.listen(y,_=>{try{w(_)}catch(k){setTimeout(()=>{throw k},0)}})};return f(c,Wi.EventType.OPEN,()=>{h||z("Connection","WebChannel transport opened.")}),f(c,Wi.EventType.CLOSE,()=>{h||(h=!0,z("Connection","WebChannel transport closed"),d.io())}),f(c,Wi.EventType.ERROR,m=>{h||(h=!0,ic("Connection","WebChannel transport errored:",m),d.io(new W(x.UNAVAILABLE,"The operation could not be completed")))}),f(c,Wi.EventType.MESSAGE,m=>{var y;if(!h){const w=m.data[0];Te(!!w);const _=w,k=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(k){z("Connection","WebChannel received error:",k);const C=k.status;let L=function(H){const D=Pe[H];if(D!==void 0)return Xp(D)}(C),$=k.message;L===void 0&&(L=x.INTERNAL,$="Unknown error status: "+C+" with message "+k.message),h=!0,d.io(new W(L,$)),c.close()}else z("Connection","WebChannel received:",w),d.ro(w)}}),f(o,jT.STAT_EVENT,m=>{m.stat===Rd.PROXY?z("Connection","Detected buffering proxy"):m.stat===Rd.NOPROXY&&z("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function El(){return typeof document<"u"?document:null}/**
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
 */function La(t){return new UC(t,!0)}class hv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class dv{constructor(e,n,s,r,i,o,a,l){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new hv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new W(x.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NS extends dv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=HC(this.It,e),s=function(r){if(!("targetChange"in r))return oe.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?oe.min():i.readTime?tn(i.readTime):oe.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=fc(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=lc(a)?{documents:KC(r,a)}:{query:WC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=rv(r,i.resumeToken):i.snapshotVersion.compareTo(oe.min())>0&&(o.readTime=Mo(r,i.snapshotVersion.toTimestamp())),o}(this.It,e);const s=QC(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=fc(this.It),n.removeTarget=e,this.Bo(n)}}class OS extends dv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=qC(e.writeResults,e.commitTime),s=tn(e.commitTime);return this.listener.Zo(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=fc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zC(this.It,s))};this.Bo(n)}}/**
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
 */class PS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(x.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(x.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class LS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(an(n),this.ou=!1):z("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class MS{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{ys(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l._u.add(4),await Di(l),l.gu.set("Unknown"),l._u.delete(4),await Ma(l)}(this))})}),this.gu=new LS(s,r)}}async function Ma(t){if(ys(t))for(const e of t.wu)await e(!0)}async function Di(t){for(const e of t.wu)await e(!1)}function fv(t,e){const n=se(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Uu(n)?Vu(n):cr(n).ko()&&Fu(n,e))}function gv(t,e){const n=se(t),s=cr(n);n.du.delete(e),s.ko()&&mv(n,e),n.du.size===0&&(s.ko()?s.Fo():ys(n)&&n.gu.set("Unknown"))}function Fu(t,e){t.yu.Mt(e.targetId),cr(t).zo(e)}function mv(t,e){t.yu.Mt(e),cr(t).Ho(e)}function Vu(t){t.yu=new $C({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),cr(t).start(),t.gu.uu()}function Uu(t){return ys(t)&&!cr(t).No()&&t.du.size>0}function ys(t){return se(t)._u.size===0}function pv(t){t.yu=void 0}async function $S(t){t.du.forEach((e,n)=>{Fu(t,e)})}async function FS(t,e){pv(t),Uu(t)?(t.gu.hu(e),Vu(t)):t.gu.set("Unknown")}async function VS(t,e,n){if(t.gu.set("Online"),e instanceof sv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $o(t,s)}else if(e instanceof lo?t.yu.Gt(e):e instanceof nv?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(oe.min()))try{const s=await uv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.du.get(l);c&&r.du.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.du.get(a);if(!l)return;r.du.set(a,l.withResumeToken(st.EMPTY_BYTE_STRING,l.snapshotVersion)),mv(r,a);const c=new os(l.target,a,1,l.sequenceNumber);Fu(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await $o(t,s)}}async function $o(t,e,n){if(!Ai(e))throw e;t._u.add(1),await Di(t),t.gu.set("Offline"),n||(n=()=>uv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ma(t)})}function vv(t,e){return e().catch(n=>$o(t,n,e))}async function $a(t){const e=se(t),n=Ln(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;US(e);)try{const r=await TS(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,BS(e,r)}catch(r){await $o(e,r)}yv(e)&&bv(e)}function US(t){return ys(t)&&t.fu.length<10}function BS(t,e){t.fu.push(e);const n=Ln(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function yv(t){return ys(t)&&!Ln(t).No()&&t.fu.length>0}function bv(t){Ln(t).start()}async function jS(t){Ln(t).eu()}async function HS(t){const e=Ln(t);for(const n of t.fu)e.Xo(n.mutations)}async function zS(t,e,n){const s=t.fu.shift(),r=Pu.from(s,e,n);await vv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await $a(t)}async function qS(t,e){e&&Ln(t).Yo&&await async function(n,s){if(r=s.code,NC(r)&&r!==x.ABORTED){const i=n.fu.shift();Ln(n).Mo(),await vv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $a(n)}var r}(t,e),yv(t)&&bv(t)}async function Zd(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=ys(n);n._u.add(3),await Di(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ma(n)}async function KS(t,e){const n=se(t);e?(n._u.delete(2),await Ma(n)):e||(n._u.add(2),await Di(n),n.gu.set("Unknown"))}function cr(t){return t.pu||(t.pu=function(e,n,s){const r=se(e);return r.su(),new NS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:$S.bind(null,t),Zr:FS.bind(null,t),Wo:VS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Uu(t)?Vu(t):t.gu.set("Unknown")):(await t.pu.stop(),pv(t))})),t.pu}function Ln(t){return t.Iu||(t.Iu=function(e,n,s){const r=se(e);return r.su(),new OS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.It,s)}(t.datastore,t.asyncQueue,{Yr:jS.bind(null,t),Zr:qS.bind(null,t),tu:HS.bind(null,t),Zo:zS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await $a(t)):(await t.Iu.stop(),t.fu.length>0&&(z("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Bu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Bu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ju(t,e){if(an("AsyncQueue",`${e}: ${t}`),Ai(t))return new W(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=Er(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ef{constructor(){this.Tu=new Be(G.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ne():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Gs{constructor(e,n,s,r,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gs(e,n,$s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class WS{constructor(){this.Au=void 0,this.listeners=[]}}class GS{constructor(){this.queries=new lr(e=>Up(e),Da),this.onlineState="Unknown",this.Ru=new Set}}async function QS(t,e){const n=se(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new WS),r)try{i.Au=await n.onListen(s)}catch(o){const a=ju(o,`Initialization of query '${uc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Hu(n)}async function YS(t,e){const n=se(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function XS(t,e){const n=se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Hu(n)}function JS(t,e,n){const s=se(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Hu(t){t.Ru.forEach(e=>{e.next()})}class ZS{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Gs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class wv{constructor(e){this.key=e}}class _v{constructor(e){this.key=e}}class eA{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ce(),this.mutatedKeys=ce(),this.Gu=Bp(e),this.Qu=new $s(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new ef,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Nu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),w=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),w=!0,(l&&this.Gu(f,l)>0||c&&this.Gu(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((c,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return f(h)-f(d)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,i.length!==0||l?{snapshot:new Gs(this.query,e.Qu,r,i,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ef,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ce(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new _v(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new wv(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=ce();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Gs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class tA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class nA{constructor(e){this.key=e,this.nc=!1}}class sA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new lr(a=>Up(a),Da),this.rc=new Map,this.oc=new Set,this.uc=new Be(G.comparator),this.cc=new Map,this.ac=new Lu,this.hc={},this.lc=new Map,this.fc=Ws.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function rA(t,e){const n=gA(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await CS(n.localStore,ln(e));n.isPrimaryClient&&fv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await iA(n,e,s,a==="current",o.resumeToken)}return r}async function iA(t,e,n,s,r){t._c=(h,d,f)=>async function(m,y,w,_){let k=y.view.Wu(w);k.$i&&(k=await Yd(m.localStore,y.query,!1).then(({documents:$})=>y.view.Wu($,k)));const C=_&&_.targetChanges.get(y.targetId),L=y.view.applyChanges(k,m.isPrimaryClient,C);return nf(m,y.targetId,L.Xu),L.snapshot}(t,h,d,f);const i=await Yd(t.localStore,e,!0),o=new eA(e,i.Hi),a=o.Wu(i.documents),l=Ri.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),c=o.applyChanges(a,t.isPrimaryClient,l);nf(t,n,c.Xu);const u=new tA(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function oA(t,e){const n=se(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Da(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),gv(n.remoteStore,s.targetId),mc(n,s.targetId)}).catch(Si)):(mc(n,s.targetId),await gc(n.localStore,s.targetId,!0))}async function aA(t,e,n){const s=mA(t);try{const r=await function(i,o){const a=se(i),l=Fe.now(),c=o.reduce((d,f)=>d.add(f.key),ce());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=cn(),m=ce();return a.Gi.getEntries(d,c).next(y=>{f=y,f.forEach((w,_)=>{_.isValidDocument()||(m=m.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const w=[];for(const _ of o){const k=xC(_,u.get(_.key).overlayedDocument);k!=null&&w.push(new vs(_.key,k,Mp(k.value.mapValue),en.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Zp(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.hc[i.currentUser.toKey()];l||(l=new Be(pe)),l=l.insert(o,a),i.hc[i.currentUser.toKey()]=l}(s,r.batchId,n),await Ni(s,r.changes),await $a(s.remoteStore)}catch(r){const i=ju(r,"Failed to persist write");n.reject(i)}}async function Iv(t,e){const n=se(t);try{const s=await IS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(Te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?Te(o.nc):r.removedDocuments.size>0&&(Te(o.nc),o.nc=!1))}),await Ni(n,s,e)}catch(s){await Si(s)}}function tf(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&Hu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function lA(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Be(G.comparator);o=o.insert(i,Ge.newNoDocument(i,oe.min()));const a=ce().add(i),l=new Pa(oe.min(),new Map,new Ve(pe),o,a);await Iv(s,l),s.uc=s.uc.remove(i),s.cc.delete(e),zu(s)}else await gc(s.localStore,e,!1).then(()=>mc(s,e,n)).catch(Si)}async function cA(t,e){const n=se(t),s=e.batch.batchId;try{const r=await _S(n.localStore,e);Tv(n,s,null),Ev(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ni(n,r)}catch(r){await Si(r)}}async function uA(t,e,n){const s=se(t);try{const r=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Te(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Tv(s,e,n),Ev(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ni(s,r)}catch(r){await Si(r)}}function Ev(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Tv(t,e,n){const s=se(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function mc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Cv(t,s)})}function Cv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(gv(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),zu(t))}function nf(t,e,n){for(const s of n)s instanceof wv?(t.ac.addReference(s.key,e),hA(t,s)):s instanceof _v?(z("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Cv(t,s.key)):ne()}function hA(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(z("SyncEngine","New document in limbo: "+n),t.oc.add(s),zu(t))}function zu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new G(Ae.fromString(e)),s=t.fc.next();t.cc.set(s,new nA(n)),t.uc=t.uc.insert(n,s),fv(t.remoteStore,new os(ln(Du(n.path)),s,2,Au.at))}}async function Ni(t,e,n){const s=se(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const u=$u.Ci(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,l){const c=se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ai(u))throw u;z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ui.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.Ui=c.Ui.insert(h,m)}}}(s.localStore,i))}async function dA(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const s=await cv(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new W(x.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ni(n,s.ji)}}function fA(t,e){const n=se(t),s=n.cc.get(e);if(s&&s.nc)return ce().add(s.key);{let r=ce();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function gA(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lA.bind(null,e),e.sc.Wo=XS.bind(null,e.eventManager),e.sc.wc=JS.bind(null,e.eventManager),e}function mA(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uA.bind(null,e),e}class pA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=La(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return wS(this.persistence,new yS,e.initialUser,this.It)}yc(e){return new pS(Mu.Bs,this.It)}gc(e){return new AS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dA.bind(null,this.syncEngine),await KS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new GS}createDatastore(e){const n=La(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new DS(r));var r;return function(i,o,a,l){return new PS(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>tf(this.syncEngine,a,0),o=Jd.C()?new Jd:new kS,new MS(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const u=new sA(s,r,i,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);z("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Di(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Sv(t,e,n){if(!n)throw new W(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yA(t,e,n,s){if(e===!0&&s===!0)throw new W(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sf(t){if(!G.isDocumentKey(t))throw new W(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rf(t){if(G.isDocumentKey(t))throw new W(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new W(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const of=new Map;class af{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,yA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Fa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new af(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qT;switch(n.type){case"gapi":const s=n.client;return new QT(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=of.get(e);n&&(z("ComponentProvider","Removing Datastore"),of.delete(e),n.terminate())}(this),Promise.resolve()}}function bA(t,e,n,s={}){var r;const i=(t=Or(t,Fa))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ic("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Xe.MOCK_USER;else{o=Nw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new W(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Xe(l)}t._authCredentials=new KT(new Dp(o,a))}}/**
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
 */class St{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Oi{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class Dn extends Oi{constructor(e,n,s){super(e,n,Du(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new G(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function Av(t,e,...n){if(t=dt(t),Sv("collection","path",e),t instanceof Fa){const s=Ae.fromString(e,...n);return rf(s),new Dn(t,null,s)}{if(!(t instanceof St||t instanceof Dn))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return rf(s),new Dn(t.firestore,null,s)}}function wA(t,e,...n){if(t=dt(t),arguments.length===1&&(e=Np.R()),Sv("doc","path",e),t instanceof Fa){const s=Ae.fromString(e,...n);return sf(s),new St(t,null,new G(s))}{if(!(t instanceof St||t instanceof Dn))throw new W(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ae.fromString(e,...n));return sf(s),new St(t.firestore,t instanceof Dn?t.converter:null,new G(s))}}/**
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
 */class _A{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class IA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Xe.UNAUTHENTICATED,this.clientId=Np.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ju(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function EA(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await cv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function TA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CA(t);z("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Zd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zd(e.remoteStore,i)),t.onlineComponents=e}async function CA(t){return t.offlineComponents||(z("FirestoreClient","Using default OfflineComponentProvider"),await EA(t,new pA)),t.offlineComponents}async function kv(t){return t.onlineComponents||(z("FirestoreClient","Using default OnlineComponentProvider"),await TA(t,new vA)),t.onlineComponents}function SA(t){return kv(t).then(e=>e.syncEngine)}async function lf(t){const e=await kv(t),n=e.eventManager;return n.onListen=rA.bind(null,e.syncEngine),n.onUnlisten=oA.bind(null,e.syncEngine),n}class AA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new hv(this,"async_queue_retry"),this.Wc=()=>{const n=El();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=El();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=El();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new is;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ai(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw an("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Bu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.qc.push(r),r}zc(){this.Kc&&ne()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function cf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Fo extends Fa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new AA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rv(this),this._firestoreClient.terminate()}}function kA(t,e){const n=typeof t=="object"?t:Yg(),s=typeof t=="string"?t:e||"(default)",r=Yc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=xw("firestore");i&&bA(r,...i)}return r}function xv(t){return t._firestoreClient||Rv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rv(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new oC(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IA(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(st.fromBase64String(e))}catch(n){throw new W(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dv{constructor(e){this._methodName=e}}/**
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
 */class Wu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const xA=/^__.*__$/;class RA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new xi(e,this.data,n,this.fieldTransforms)}}function Nv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Gu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Gu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Vo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Nv(this.sa)&&xA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class DA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||La(e)}da(e,n,s,r=!1){return new Gu({sa:e,methodName:n,fa:s,path:Ze.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function NA(t){const e=t._freezeSettings(),n=La(t._databaseId);return new DA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OA(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Mv("Data must be an object, but it was:",o,s);const a=Pv(s,o);let l,c;if(i.merge)l=new Ht(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=PA(e,h,n);if(!o.contains(d))throw new W(x.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MA(u,d)||u.push(d)}l=new Ht(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new RA(new Tt(a),l,c)}function Ov(t,e){if(Lv(t=dt(t)))return Mv("Unsupported field value:",e,t),Pv(t,e);if(t instanceof Dv)return function(n,s){if(!Nv(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ov(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return EC(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Fe.fromDate(n);return{timestampValue:Mo(s.It,r)}}if(n instanceof Fe){const r=new Fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mo(s.It,r)}}if(n instanceof Wu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qs)return{bytesValue:rv(s.It,n._byteString)};if(n instanceof St){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ou(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${qu(n)}`)}(t,e)}function Pv(t,e){const n={};return Op(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ar(t,(s,r)=>{const i=Ov(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Lv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Wu||t instanceof Qs||t instanceof St||t instanceof Dv)}function Mv(t,e,n){if(!Lv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=qu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function PA(t,e,n){if((e=dt(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return $v(t,e);throw Vo("Field path arguments must be of type string or ",t,!1,void 0,n)}const LA=new RegExp("[~\\*/\\[\\]]");function $v(t,e,n){if(e.search(LA)>=0)throw Vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw Vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new W(x.INVALID_ARGUMENT,a+t+l)}function MA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $A(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $A extends Fv{data(){return super.data()}}function Qu(t,e){return typeof e=="string"?$v(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
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
 */function FA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VA{}function UA(t,...e){for(const n of e)t=n._apply(t);return t}class BA extends VA{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new W(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ms(r,i);return function(a,l){if(Fp(a)===null){const c=Vp(a);c!==null&&HA(a,c,l.field)}}(s,o),o}(e._query,this.ma,this.pa);return new Oi(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new ki(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function jA(t,e="asc"){const n=e,s=Qu("orderBy",t);return new BA(s,n)}function HA(t,e,n){if(!n.isEqual(e))throw new W(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class zA{convertValue(e,n="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){const s={};return ar(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Wu(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Lp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ei(e));default:return null}}convertTimestamp(e){const n=Pn(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ae.fromString(e);Te(lv(s));const r=new ti(s.get(1),s.get(3)),i=new G(s.popFirst(5));return r.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vv extends Fv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class co extends Vv{data(e={}){return super.data(e)}}class KA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Tr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new co(this._firestore,this._userDataWriter,s.key,s,new Tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new co(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new co(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:WA(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class Uv extends zA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function GA(t,e){const n=Or(t.firestore,Fo),s=wA(t),r=qA(t.converter,e);return YA(n,[OA(NA(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,en.exists(!1))]).then(()=>s)}function QA(t,...e){var n,s,r;t=dt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(cf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof St)c=Or(t.firestore,Fo),u=Du(t._key.path),l={next:h=>{e[o]&&e[o](XA(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Or(t,Oi);c=Or(h.firestore,Fo),u=h._query;const d=new Uv(c);l={next:f=>{e[o]&&e[o](new KA(c,d,h,f))},error:e[o+1],complete:e[o+2]},FA(t._query)}return function(h,d,f,m){const y=new _A(m),w=new ZS(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>QS(await lf(h),w)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>YS(await lf(h),w))}}(xv(c),u,a,l)}function YA(t,e){return function(n,s){const r=new is;return n.asyncQueue.enqueueAndForget(async()=>aA(await SA(n),s,r)),r.promise}(xv(t),e)}function XA(t,e,n){const s=n.docs.get(e._key),r=new Uv(t);return new Vv(t,r,e._key,s,new Tr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){or=n})(fi),Bs(new hs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Fo(new WT(n.getProvider("auth-internal")),new XT(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Rn(Dd,"3.7.3",t),Rn(Dd,"3.7.3","esm2017")})();var JA="firebase",ZA="9.14.0";/**
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
 */Rn(JA,ZA,"app");const ek={apiKey:"AIzaSyBZftMyhpURTfOdQtZkd9o7vIMrWomxsdg",authDomain:"chat-app-70868.firebaseapp.com",projectId:"chat-app-70868",storageBucket:"chat-app-70868.appspot.com",messagingSenderId:"400665811762",appId:"1:400665811762:web:de477abdad5cb78084d52b"},Bv=Qg(ek),Fs=jE(Bv),jv=kA(Bv);function tk(t,e,n){const s=e.length-1;if(s<0)return t===void 0?n:t;for(let r=0;r<s;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[s]]===void 0?n:t[e[s]]}function Hv(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(s=>Hv(t[s],e[s]))}function uf(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),tk(t,e.split("."),n))}function nk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,s)=>e+s)}function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function pc(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}const hf=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Va(t,e){const n=Object.create(null),s=Object.create(null);for(const r in t)e.some(i=>i instanceof RegExp?i.test(r):i===r)?n[r]=t[r]:s[r]=t[r];return[n,s]}function sk(t){return Va(t,["class","style","id",/^data-/])}function Pr(t){return t==null?[]:Array.isArray(t)?t:[t]}function rk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function un(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const s={};for(const r in t)s[r]=t[r];for(const r in e){const i=t[r],o=e[r];if(pc(i)&&pc(o)){s[r]=un(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){s[r]=n(i,o);continue}s[r]=o}return s}function zv(t){return t.map(e=>e.type===Me?zv(e.children):e).flat()}function Ua(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function Lr(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Lr(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Lr(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Lr(t,e.component.subTree).flat(1)}return[]}function qv(t){const e=mt({}),n=I(t);return ui(()=>{for(const s in n.value)e[s]=n.value[s]},{flush:"sync"}),$c(e)}function vc(t,e){return t.includes(e)}const ik=/^on[^a-z]/,Kv=t=>ik.test(t),Mr=[Function,Array];function df(t,e){return e="on"+Js(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function ok(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if(Array.isArray(t))for(const r of t)r(...n);else typeof t=="function"&&t(...n)}const ak=["top","bottom"],lk=["start","end","left","right"];function ck(t,e){let[n,s]=t.split(" ");return s||(s=vc(ak,n)?"start":vc(lk,n)?"top":"center"),{side:ff(n,e),align:ff(s,e)}}function ff(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}class Tl{constructor(e){let{x:n,y:s,width:r,height:i}=e;this.x=n,this.y=s,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function uk(t){const e=t.getBoundingClientRect(),n=getComputedStyle(t),s=n.transform;if(s){let r,i,o,a,l;if(s.startsWith("matrix3d("))r=s.slice(9,-1).split(/, /),i=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(s.startsWith("matrix("))r=s.slice(7,-1).split(/, /),i=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new Tl(e);const c=n.transformOrigin,u=e.x-a-(1-i)*parseFloat(c),h=e.y-l-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),d=i?e.width/i:t.offsetWidth+1,f=o?e.height/o:t.offsetHeight+1;return new Tl({x:u,y:h,width:d,height:f})}else return new Tl(e)}function hk(t,e,n){if(typeof t.animate>"u")return{finished:Promise.resolve()};const s=t.animate(e,n);return typeof s.finished>"u"&&(s.finished=new Promise(r=>{s.onfinish=()=>{r(s)}})),s}function Wv(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?gk(e):"")}function as(t,e,n){const s=Wv(t,e,n);s!=null&&console.warn(s)}function gf(t,e,n){const s=Wv(t,e,n);s!=null&&console.error(s)}const dk=/(?:^|[-_])(\w)/g,fk=t=>t.replace(dk,e=>e.toUpperCase()).replace(/[-_]/g,"");function Cl(t,e){if(t.$root===t)return"<Root>";const n=typeof t=="function"&&t.cid!=null?t.options:t._isVue?t.$options||t.constructor.options:t||{};let s=n.name||n._componentTag;const r=n.__file;if(!s&&r){const i=r.match(/([^/\\]+)\.vue$/);s=i==null?void 0:i[1]}return(s?`<${fk(s)}>`:"<Anonymous>")+(r&&e!==!1?` at ${r}`:"")}function gk(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){n++,t=t.$parent;continue}else n>0&&(e[e.length-1]=[s,n],n=0)}e.push(t),t=t.$parent}return`

found in

`+e.map((s,r)=>`${r===0?"---> ":" ".repeat(5+r*2)}${Array.isArray(s)?`${Cl(s[0])}... (${s[1]} recursive calls)`:Cl(s)}`).join(`
`)}else return`

(found in ${Cl(t)})`}const mk=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],pk=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,vk=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],yk=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function Gv(t){const e=Array(3),n=pk,s=mk;for(let r=0;r<3;++r)e[r]=Math.round(rk(n(s[r][0]*t[0]+s[r][1]*t[1]+s[r][2]*t[2]))*255);return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function Yu(t){const e=[0,0,0],n=yk,s=vk,r=n((t>>16&255)/255),i=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=s[a][0]*r+s[a][1]*i+s[a][2]*o;return e}const Uo=.20689655172413793,bk=t=>t>Uo**3?Math.cbrt(t):t/(3*Uo**2)+4/29,wk=t=>t>Uo?t**3:3*Uo**2*(t-4/29);function Qv(t){const e=bk,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function Yv(t){const e=wk,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}function mf(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Bo(t){let e;if(typeof t=="number")e=t;else if(typeof t=="string"){let n=t.startsWith("#")?t.substring(1):t;n.length===3&&(n=n.split("").map(s=>s+s).join("")),n.length!==6&&n.length!==8&&as(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${t==null?t:t.constructor.name} instead`);return e<0?(as(`Colors cannot be negative: '${t}'`),e=0):(e>4294967295||isNaN(e))&&(as(`'${t}' is not a valid rgb color`),e=16777215),e}function _k(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function Xv(t){const e=Bo(t);return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255}}function Ik(t,e){const n=Qv(Yu(t));return n[0]=n[0]+e*10,Gv(Yv(n))}function Ek(t,e){const n=Qv(Yu(t));return n[0]=n[0]-e*10,Gv(Yv(n))}function Tk(t){const e=Bo(t);return Yu(e)[1]}function Kt(t,e){const n=la();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function fn(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Kt(t).type;return Ua((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let Jv=0,uo=new WeakMap;function bs(){const t=Kt("getUid");if(uo.has(t))return uo.get(t);{const e=Jv++;return uo.set(t,e),e}}bs.reset=()=>{Jv=0,uo=new WeakMap};function Ck(t){const{provides:e}=Kt("injectSelf");if(e&&t in e)return e[t]}function jo(t,e){let n;$e(t,s=>{if(s&&!n)n=s0(),n.run(e);else if(!s){var r;(r=n)==null||r.stop(),n=void 0}},{immediate:!0}),i0(()=>{var s;(s=n)==null||s.stop()})}function be(t,e){return n=>Object.keys(t).reduce((s,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?s[r]={...o,default:n[r]}:s[r]=o,e&&!s[r].source&&(s[r].source=e),s},{})}function Sk(t,e){var n,s;return((n=t.props)==null?void 0:n.hasOwnProperty(e))||((s=t.props)==null?void 0:s.hasOwnProperty(Ua(e)))}const ve=function(e){var n,s;return e._setup=(n=e._setup)!=null?n:e.setup,e.name?(e._setup&&(e.props=(s=e.props)!=null?s:{},e.props=be(e.props,Ua(e.name))(),e.props._as=String,e.setup=function(i,o){const a=la(),l=Zv(),c=D0(),u=Xf({...fe(i)});ui(()=>{var m,y,w;const d=l.value.global,f=l.value[(m=i._as)!=null?m:e.name];if(f){const _=Object.entries(f).filter(k=>{let[C]=k;return C.startsWith(C[0].toUpperCase())});_.length&&(c.value=Object.fromEntries(_))}for(const _ of Object.keys(i)){let k=i[_];Sk(a.vnode,_)||(k=(w=(y=f==null?void 0:f[_])!=null?y:d==null?void 0:d[_])!=null?w:i[_]),u[_]!==k&&(u[_]=k)}});const h=e._setup(u,o);return jo(c,()=>{var f;var d;Pi(un((f=(d=Ck(oi))==null?void 0:d.value)!=null?f:{},c.value))}),h}),e):(as("The component is missing an explicit name, unable to generate default prop value"),e)};function ur(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ve:mg)(e)}function Xu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return ve({name:n!=null?n:Js(At(t.replace(/__/g,"-"))),props:{tag:{type:String,default:e}},setup(s,r){let{slots:i}=r;return()=>{var o;return nr(s.tag,{class:t},(o=i.default)==null?void 0:o.call(i))}}})}const Ak="cubic-bezier(0.4, 0, 0.2, 1)",Ot=typeof window<"u",Ju=Ot&&"IntersectionObserver"in window,kk=Ot&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);Ot&&typeof CSS<"u"&&CSS.supports("selector(:focus-visible)");function Ie(t){const e=Kt("useRender");e.render=t}const oi=Symbol.for("vuetify:defaults");function xk(t){return J(t!=null?t:{})}function Zv(){const t=ut(oi);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function Pi(t,e){const n=Zv(),s=J(t),r=I(()=>{const i=ts(e==null?void 0:e.scoped),o=ts(e==null?void 0:e.reset),a=ts(e==null?void 0:e.root);let l=un(s.value,{prev:n.value});if(i)return l;if(o||a){const c=Number(o||1/0);for(let u=0;u<=c&&l.prev;u++)l=l.prev;return l}return un(l.prev,l)});return Mn(oi,r),r}const Rk=ve({name:"VCardActions",setup(t,e){let{slots:n}=e;return Pi({VBtn:{variant:"text"}}),Ie(()=>{var s;return v("div",{class:"v-card-actions"},[(s=n.default)==null?void 0:s.call(n)])}),{}}});const Dk={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},Nk={component:t=>nr(ey,{...t,class:"mdi"})},ht=[String,Function,Object],yc=Symbol.for("vuetify:icons"),Ba=be({icon:{type:ht,required:!0},tag:{type:String,required:!0}},"icon"),Ok=ve({name:"VComponentIcon",props:Ba(),setup(t){return()=>v(t.tag,null,{default:()=>[v(t.icon,null,null)]})}}),Pk=ve({name:"VSvgIcon",inheritAttrs:!1,props:Ba(),setup(t,e){let{attrs:n}=e;return()=>v(t.tag,An(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[v("path",{d:t.icon},null)])]})}});ve({name:"VLigatureIcon",props:Ba(),setup(t){return()=>v(t.tag,null,{default:()=>[t.icon]})}});const ey=ve({name:"VClassIcon",props:Ba(),setup(t){return()=>v(t.tag,{class:t.icon},null)}}),Lk={svg:{component:Pk},class:{component:ey}};function Mk(t){return un({defaultSet:"mdi",sets:{...Lk,mdi:Nk},aliases:Dk},t)}const $k=t=>{const e=ut(yc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{const s=ke(t)?t.value:t.icon;if(!s)throw new Error("Icon value is undefined or null");let r=s;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$"))){var i;r=(i=e.aliases)==null?void 0:i[r.slice(1)]}if(!r)throw new Error(`Could not find aliased icon "${s}"`);if(typeof r!="string")return{component:Ok,icon:r};const o=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),a=o?r.slice(o.length+1):r;return{component:e.sets[o!=null?o:e.defaultSet].component,icon:a}})}},Fk=["x-small","small","default","large","x-large"],ja=be({size:{type:[String,Number],default:"default"}},"size");function Ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();return qv(()=>{let n,s;return vc(Fk,t.size)?n=`${e}--size-${t.size}`:t.size&&(s={width:ye(t.size),height:ye(t.size)}),{sizeClasses:n,sizeStyles:s}})}const Pt=be({tag:{type:String,default:"div"}},"tag"),Ts=2.4,pf=.2126729,vf=.7151522,yf=.072175,Vk=.55,Uk=.58,Bk=.57,jk=.62,Yi=.03,bf=1.45,Hk=5e-4,zk=1.25,qk=1.25,wf=.078,_f=12.82051282051282,Xi=.06,If=.001;function Ef(t,e){const n=((t>>16&255)/255)**Ts,s=((t>>8&255)/255)**Ts,r=((t>>0&255)/255)**Ts,i=((e>>16&255)/255)**Ts,o=((e>>8&255)/255)**Ts,a=((e>>0&255)/255)**Ts;let l=n*pf+s*vf+r*yf,c=i*pf+o*vf+a*yf;if(l<=Yi&&(l+=(Yi-l)**bf),c<=Yi&&(c+=(Yi-c)**bf),Math.abs(c-l)<Hk)return 0;let u;if(c>l){const h=(c**Vk-l**Uk)*zk;u=h<If?0:h<wf?h-h*_f*Xi:h-Xi}else{const h=(c**jk-l**Bk)*qk;u=h>-If?0:h>-wf?h-h*_f*Xi:h+Xi}return u*100}const Ho=Symbol.for("vuetify:theme"),Wt=be({theme:String},"theme"),yr={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function Kk(){var r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yr;if(!t)return{...yr,isDisabled:!0};const e={};for(const[i,o]of Object.entries((r=t.themes)!=null?r:{})){var n,s;const a=o.dark||i==="dark"?(n=yr.themes)==null?void 0:n.dark:(s=yr.themes)==null?void 0:s.light;e[i]=un(a,o)}return un(yr,{...t,themes:e})}function Wk(t){const e=mt(Kk(t)),n=J(e.defaultTheme),s=J(e.themes),r=I(()=>{const c={};for(const[u,h]of Object.entries(s.value)){const d=c[u]={...h,colors:{...h.colors}};if(e.variations)for(const f of e.variations.colors){const m=d.colors[f];if(!!m)for(const y of["lighten","darken"]){const w=y==="lighten"?Ik:Ek;for(const _ of nk(e.variations[y],1))d.colors[`${f}-${y}-${_}`]=_k(w(Bo(m),_))}}for(const f of Object.keys(d.colors)){if(/^on-[a-z]/.test(f)||d.colors[`on-${f}`])continue;const m=`on-${f}`,y=Bo(d.colors[f]),w=Math.abs(Ef(0,y)),_=Math.abs(Ef(16777215,y));d.colors[m]=_>Math.min(w,50)?"#fff":"#000"}}return c}),i=I(()=>r.value[n.value]),o=I(()=>{const c=[];i.value.dark&&Cs(c,":root",["color-scheme: dark"]);for(const[f,m]of Object.entries(r.value)){const{variables:y,dark:w}=m;Cs(c,`.v-theme--${f}`,[`color-scheme: ${w?"dark":"normal"}`,...Gk(m),...Object.keys(y).map(_=>{const k=y[_],C=typeof k=="string"&&k.startsWith("#")?Xv(k):void 0,L=C?`${C.r}, ${C.g}, ${C.b}`:void 0;return`--v-${_}: ${L!=null?L:k}`})])}const u=[],h=[],d=new Set(Object.values(r.value).flatMap(f=>Object.keys(f.colors)));for(const f of d)/^on-[a-z]/.test(f)?Cs(h,`.${f}`,[`color: rgb(var(--v-theme-${f})) !important`]):(Cs(u,`.bg-${f}`,[`--v-theme-overlay-multiplier: var(--v-theme-${f}-overlay-multiplier)`,`background: rgb(var(--v-theme-${f})) !important`,`color: rgb(var(--v-theme-on-${f})) !important`]),Cs(h,`.text-${f}`,[`color: rgb(var(--v-theme-${f})) !important`]),Cs(h,`.border-${f}`,[`--v-border-color: var(--v-theme-${f})`]));return c.push(...u,...h),c.map((f,m)=>m===0?f:`    ${f}`).join("")});function a(c){const u=c._context.provides.usehead;if(u)u.addHeadObjs(I(()=>{const d={children:o.value,type:"text/css",id:"vuetify-theme-stylesheet"};return e.cspNonce&&(d.nonce=e.cspNonce),{style:[d]}})),Ot&&ui(()=>u.updateDOM());else{let f=function(){if(!e.isDisabled){if(typeof document<"u"&&!d){const m=document.createElement("style");m.type="text/css",m.id="vuetify-theme-stylesheet",e.cspNonce&&m.setAttribute("nonce",e.cspNonce),d=m,document.head.appendChild(d)}d&&(d.innerHTML=o.value)}};var h=f;let d=Ot?document.getElementById("vuetify-theme-stylesheet"):null;$e(o,f,{immediate:!0})}}const l=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:a,isDisabled:e.isDisabled,name:n,themes:s,current:i,computedThemes:r,themeClasses:l,styles:o,global:{name:n,current:i}}}function gn(t){Kt("provideTheme");const e=ut(Ho,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=I(()=>{var i;return(i=t.theme)!=null?i:e==null?void 0:e.name.value}),s=I(()=>e.isDisabled?void 0:`v-theme--${n.value}`),r={...e,name:n,themeClasses:s};return Mn(Ho,r),r}function Cs(t,e,n){t.push(`${e} {
`,...n.map(s=>`  ${s};
`),`}
`)}function Gk(t){const e=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,i]of Object.entries(t.colors)){const o=Xv(i);s.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${Tk(i)>.18?e:n}`)}return s}function Zu(t){return qv(()=>{const e=[],n={};return t.value.background&&(mf(t.value.background)?n.backgroundColor=t.value.background:e.push(`bg-${t.value.background}`)),t.value.text&&(mf(t.value.text)?(n.color=t.value.text,n.caretColor=t.value.text):e.push(`text-${t.value.text}`)),{colorClasses:e,colorStyles:n}})}function Ys(t,e){const n=I(()=>({text:ke(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:r}=Zu(n);return{textColorClasses:s,textColorStyles:r}}function zo(t,e){const n=I(()=>({background:ke(t)?t.value:e?t[e]:null})),{colorClasses:s,colorStyles:r}=Zu(n);return{backgroundColorClasses:s,backgroundColorStyles:r}}const Qk=be({color:String,start:Boolean,end:Boolean,icon:ht,...ja(),...Pt({tag:"i"}),...Wt()},"v-icon"),ls=ve({name:"VIcon",props:Qk(),setup(t,e){let{attrs:n,slots:s}=e,r;s.default&&(r=I(()=>{var u,h;const d=(u=s.default)==null?void 0:u.call(s);if(!!d)return(h=zv(d).filter(f=>f.children&&typeof f.children=="string")[0])==null?void 0:h.children}));const{themeClasses:i}=gn(t),{iconData:o}=$k(r||t),{sizeClasses:a}=Ha(t),{textColorClasses:l,textColorStyles:c}=Ys(ot(t,"color"));return Ie(()=>v(o.value.component,{tag:t.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,a.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":t.start,"v-icon--end":t.end}],style:[a.value?void 0:{fontSize:ye(t.size),height:ye(t.size),width:ye(t.size)},c.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},null)),{}}});const eh=be({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function th(t){return{dimensionStyles:I(()=>({height:ye(t.height),maxHeight:ye(t.maxHeight),maxWidth:ye(t.maxWidth),minHeight:ye(t.minHeight),minWidth:ye(t.minWidth),width:ye(t.width)}))}}function Yk(t){return{aspectStyles:I(()=>{const e=Number(t.aspectRatio);return e?{paddingBottom:String(1/e*100)+"%"}:void 0})}}const Xk=ve({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...eh()},setup(t,e){let{slots:n}=e;const{aspectStyles:s}=Yk(t),{dimensionStyles:r}=th(t);return Ie(()=>{var i;return v("div",{class:"v-responsive",style:r.value},[v("div",{class:"v-responsive__sizer",style:s.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&v("div",{class:["v-responsive__content",t.contentClass]},[n.default()])])}),{}}});function Jk(t,e){if(!Ju)return;const n=e.modifiers||{},s=e.value,{handler:r,options:i}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var a;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const u=(a=t._observe)==null?void 0:a[e.instance.$.uid];if(!u)return;const h=l.some(d=>d.isIntersecting);r&&(!n.quiet||u.init)&&(!n.once||h||u.init)&&r(h,l,c),h&&n.once?ty(t,e):u.init=!0},i);t._observe=Object(t._observe),t._observe[e.instance.$.uid]={init:!1,observer:o},o.observe(t)}function ty(t,e){var n;const s=(n=t._observe)==null?void 0:n[e.instance.$.uid];!s||(s.observer.unobserve(t),delete t._observe[e.instance.$.uid])}const Zk={mounted:Jk,unmounted:ty},ny=Zk,nh=be({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:t=>t!==!0}},"transition"),xs=(t,e)=>{let{slots:n}=e;const{transition:s,...r}=t,{component:i=sr,...o}=typeof s=="object"?s:{};return nr(i,An(typeof s=="string"?{name:s}:o,r),n)},sh=ve({name:"VImg",directives:{intersect:ny},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...nh()},emits:{loadstart:t=>!0,load:t=>!0,error:t=>!0},setup(t,e){let{emit:n,slots:s}=e;const r=J(""),i=J(),o=J(t.eager?"loading":"idle"),a=J(),l=J(),c=I(()=>t.src&&typeof t.src=="object"?{src:t.src.src,srcset:t.srcset||t.src.srcset,lazySrc:t.lazySrc||t.src.lazySrc,aspect:Number(t.aspectRatio||t.src.aspect)}:{src:t.src,srcset:t.srcset,lazySrc:t.lazySrc,aspect:Number(t.aspectRatio||0)}),u=I(()=>c.value.aspect||a.value/l.value||0);$e(()=>t.src,()=>{h(o.value!=="idle")}),jc(()=>h());function h(D){if(!(t.eager&&D)&&!(Ju&&!D&&!t.eager)){if(o.value="loading",c.value.lazySrc){const S=new Image;S.src=c.value.lazySrc,y(S,null)}!c.value.src||ci(()=>{var S,U;if(n("loadstart",((S=i.value)==null?void 0:S.currentSrc)||c.value.src),(U=i.value)!=null&&U.complete){if(i.value.naturalWidth||f(),o.value==="error")return;u.value||y(i.value,null),d()}else u.value||y(i.value),m()})}}function d(){var D;m(),o.value="loaded",n("load",((D=i.value)==null?void 0:D.currentSrc)||c.value.src)}function f(){var D;o.value="error",n("error",((D=i.value)==null?void 0:D.currentSrc)||c.value.src)}function m(){const D=i.value;D&&(r.value=D.currentSrc||D.src)}function y(D){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const U=()=>{const{naturalHeight:F,naturalWidth:Q}=D;F||Q?(a.value=Q,l.value=F):!D.complete&&o.value==="loading"&&S!=null?setTimeout(U,S):(D.currentSrc.endsWith(".svg")||D.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,l.value=1)};U()}const w=I(()=>({"v-img__img--cover":t.cover,"v-img__img--contain":!t.cover})),_=()=>{var D;if(!c.value.src||o.value==="idle")return null;const S=v("img",{class:["v-img__img",w.value],src:c.value.src,srcset:c.value.srcset,alt:"",sizes:t.sizes,ref:i,onLoad:d,onError:f},null),U=(D=s.sources)==null?void 0:D.call(s);return v(xs,{transition:t.transition,appear:!0},{default:()=>[us(U?v("picture",{class:"v-img__picture"},[U,S]):S,[[Kc,o.value==="loaded"]])]})},k=()=>v(xs,{transition:t.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&v("img",{class:["v-img__img","v-img__img--preload",w.value],src:c.value.lazySrc,alt:""},null)]}),C=()=>s.placeholder?v(xs,{transition:t.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!s.error)&&v("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,L=()=>s.error?v(xs,{transition:t.transition,appear:!0},{default:()=>[o.value==="error"&&v("div",{class:"v-img__error"},[s.error()])]}):null,$=()=>t.gradient?v("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${t.gradient})`}},null):null,H=J(!1);{const D=$e(u,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),D())})}return Ie(()=>us(v(Xk,{class:["v-img",{"v-img--booting":!H.value}],style:{width:ye(t.width==="auto"?a.value:t.width)},aspectRatio:u.value,"aria-label":t.alt,role:t.alt?"img":void 0},{additional:()=>v(Me,null,[v(_,null,null),v(k,null,null),v($,null,null),v(C,null,null),v(L,null,null)]),default:s.default}),[[ra("intersect"),{handler:h,options:t.options},null,{once:!0}]])),{currentSrc:r,image:i,state:o,naturalWidth:a,naturalHeight:l}}}),e1=["elevated","flat","tonal","outlined","text","plain"];function rh(t,e){return v(Me,null,[t&&v("span",{key:"overlay",class:`${e}__overlay`},null),v("span",{key:"underlay",class:`${e}__underlay`},null)])}const za=be({color:String,variant:{type:String,default:"elevated",validator:t=>e1.includes(t)}},"variant");function ih(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();const n=I(()=>{const{variant:i}=ts(t);return`${e}--variant-${i}`}),{colorClasses:s,colorStyles:r}=Zu(I(()=>{const{variant:i,color:o}=ts(t);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:r,variantClasses:n}}const t1=[null,"default","comfortable","compact"],hr=be({density:{type:String,default:"default",validator:t=>t1.includes(t)}},"density");function Li(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();return{densityClasses:I(()=>`${e}--density-${t.density}`)}}const dr=be({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function fr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();return{roundedClasses:I(()=>{const s=ke(t)?t.value:t.rounded,r=[];if(s===!0||s==="")r.push(`${e}--rounded`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))r.push(`rounded-${i}`);return r})}}const n1=be({start:Boolean,end:Boolean,icon:ht,image:String,...hr(),...dr(),...ja(),...Pt(),...za({variant:"flat"})},"v-avatar"),Tf=ve({name:"VAvatar",props:n1(),setup(t,e){let{slots:n}=e;const{colorClasses:s,colorStyles:r,variantClasses:i}=ih(t),{densityClasses:o}=Li(t),{roundedClasses:a}=fr(t),{sizeClasses:l,sizeStyles:c}=Ha(t);return Ie(()=>{var u;return v(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},s.value,o.value,a.value,l.value,i.value],style:[r.value,c.value]},{default:()=>[t.image?v(sh,{key:"image",src:t.image,alt:""},null):t.icon?v(ls,{key:"icon",icon:t.icon},null):(u=n.default)==null?void 0:u.call(n),rh(!1,"v-avatar")]})}),{}}}),s1=Xu("v-card-subtitle"),r1=Xu("v-card-title"),cs=mg({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(t,e){let{slots:n}=e;const{defaults:s,reset:r,root:i,scoped:o}=$c(t);return Pi(s,{reset:r,root:i,scoped:o}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}}),i1=ve({name:"VCardItem",props:{appendAvatar:String,appendIcon:ht,prependAvatar:String,prependIcon:ht,subtitle:String,title:String,...hr()},setup(t,e){let{slots:n}=e;return Ie(()=>{var s,r,i,o,a;const l=!!(t.prependAvatar||t.prependIcon||n.prepend),c=!!(t.appendAvatar||t.appendIcon||n.append),u=!!(t.title||n.title),h=!!(t.subtitle||n.subtitle);return v("div",{class:"v-card-item"},[l&&v(cs,{key:"prepend",defaults:{VAvatar:{density:t.density,icon:t.prependIcon,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon}}},{default:()=>{var d;return[v("div",{class:"v-card-item__prepend"},[(d=(s=n.prepend)==null?void 0:s.call(n))!=null?d:v(Tf,null,null)])]}}),v("div",{class:"v-card-item__content"},[u&&v(r1,{key:"title"},{default:()=>{var d;return[(d=(r=n.title)==null?void 0:r.call(n))!=null?d:t.title]}}),h&&v(s1,{key:"subtitle"},{default:()=>{var d;return[(d=(i=n.subtitle)==null?void 0:i.call(n))!=null?d:t.subtitle]}}),(o=n.default)==null?void 0:o.call(n)]),c&&v(cs,{key:"append",defaults:{VAvatar:{density:t.density,icon:t.appendIcon,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon}}},{default:()=>{var d;return[v("div",{class:"v-card-item__append"},[(d=(a=n.append)==null?void 0:a.call(n))!=null?d:v(Tf,null,null)])]}})])}),{}}}),o1=Xu("v-card-text");const bc=Symbol("rippleStop"),a1=80;function Cf(t,e){t.style.transform=e,t.style.webkitTransform=e}function Sl(t,e){t.style.opacity=`calc(${e} * var(--v-theme-overlay-multiplier))`}function wc(t){return t.constructor.name==="TouchEvent"}function sy(t){return t.constructor.name==="KeyboardEvent"}const l1=function(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,i=0;if(!sy(t)){const d=e.getBoundingClientRect(),f=wc(t)?t.touches[t.touches.length-1]:t;r=f.clientX-d.left,i=f.clientY-d.top}let o=0,a=.3;(n=e._ripple)!=null&&n.circle?(a=.15,o=e.clientWidth/2,o=s.center?o:o+Math.sqrt((r-o)**2+(i-o)**2)/4):o=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=`${(e.clientWidth-o*2)/2}px`,c=`${(e.clientHeight-o*2)/2}px`,u=s.center?l:`${r-o}px`,h=s.center?c:`${i-o}px`;return{radius:o,scale:a,x:u,y:h,centerX:l,centerY:c}},qo={show(t,e){var n;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const r=document.createElement("span"),i=document.createElement("span");r.appendChild(i),r.className="v-ripple__container",s.class&&(r.className+=` ${s.class}`);const{radius:o,scale:a,x:l,y:c,centerX:u,centerY:h}=l1(t,e,s),d=`${o*2}px`;i.className="v-ripple__animation",i.style.width=d,i.style.height=d,e.appendChild(r);const f=window.getComputedStyle(e);f&&f.position==="static"&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Cf(i,`translate(${l}, ${c}) scale3d(${a},${a},${a})`),Sl(i,0),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Cf(i,`translate(${u}, ${h}) scale3d(1,1,1)`),Sl(i,.08)},0)},hide(t){var e;if(!(t!=null&&(e=t._ripple)!=null&&e.enabled))return;const n=t.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const s=n[n.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const r=performance.now()-Number(s.dataset.activated),i=Math.max(250-r,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),Sl(s,0),setTimeout(()=>{t.getElementsByClassName("v-ripple__animation").length===1&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),s.parentNode&&t.removeChild(s.parentNode)},300)},i)}};function ry(t){return typeof t>"u"||!!t}function ai(t){const e={},n=t.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||t[bc])){if(t[bc]=!0,wc(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||sy(t),n._ripple.class&&(e.class=n._ripple.class),wc(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{qo.show(t,n,e)},n._ripple.showTimer=window.setTimeout(()=>{var s;n!=null&&(s=n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},a1)}else qo.show(t,n,e)}}function Sf(t){t[bc]=!0}function pt(t){const e=t.currentTarget;if(!(!e||!e._ripple)){if(window.clearTimeout(e._ripple.showTimer),t.type==="touchend"&&e._ripple.showTimerCommit){e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,e._ripple.showTimer=window.setTimeout(()=>{pt(t)});return}window.setTimeout(()=>{e._ripple&&(e._ripple.touched=!1)}),qo.hide(e)}}function iy(t){const e=t.currentTarget;!e||!e._ripple||(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let li=!1;function oy(t){!li&&(t.keyCode===hf.enter||t.keyCode===hf.space)&&(li=!0,ai(t))}function ay(t){li=!1,pt(t)}function ly(t){li&&(li=!1,pt(t))}function cy(t,e,n){var o;const{value:s,modifiers:r}=e,i=ry(s);if(i||qo.hide(t),t._ripple=(o=t._ripple)!=null?o:{},t._ripple.enabled=i,t._ripple.centered=r.center,t._ripple.circle=r.circle,pc(s)&&s.class&&(t._ripple.class=s.class),i&&!n){if(r.stop){t.addEventListener("touchstart",Sf,{passive:!0}),t.addEventListener("mousedown",Sf);return}t.addEventListener("touchstart",ai,{passive:!0}),t.addEventListener("touchend",pt,{passive:!0}),t.addEventListener("touchmove",iy,{passive:!0}),t.addEventListener("touchcancel",pt),t.addEventListener("mousedown",ai),t.addEventListener("mouseup",pt),t.addEventListener("mouseleave",pt),t.addEventListener("keydown",oy),t.addEventListener("keyup",ay),t.addEventListener("blur",ly),t.addEventListener("dragstart",pt,{passive:!0})}else!i&&n&&uy(t)}function uy(t){t.removeEventListener("mousedown",ai),t.removeEventListener("touchstart",ai),t.removeEventListener("touchend",pt),t.removeEventListener("touchmove",iy),t.removeEventListener("touchcancel",pt),t.removeEventListener("mouseup",pt),t.removeEventListener("mouseleave",pt),t.removeEventListener("keydown",oy),t.removeEventListener("keyup",ay),t.removeEventListener("dragstart",pt),t.removeEventListener("blur",ly)}function c1(t,e){cy(t,e,!1)}function u1(t){delete t._ripple,uy(t)}function h1(t,e){if(e.value===e.oldValue)return;const n=ry(e.oldValue);cy(t,e,n)}const hy={mounted:c1,unmounted:u1,updated:h1};function dy(t){const e=J(),n=J(!1);if(Ju){const s=new IntersectionObserver(r=>{t==null||t(r,s),n.value=!!r.find(i=>i.isIntersecting)});$n(()=>{s.disconnect()}),$e(e,(r,i)=>{i&&(s.unobserve(i),n.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:e,isIntersecting:n}}function Un(t,e,n){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h=>h,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:h=>h;const i=Kt("useProxiedModel"),o=J(t[e]!==void 0?t[e]:n),a=Ua(e),c=I(a!==e?()=>{var h,d,f,m;return t[e],!!(((h=i.vnode.props)!=null&&h.hasOwnProperty(e)||(d=i.vnode.props)!=null&&d.hasOwnProperty(a))&&((f=i.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${e}`)||(m=i.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var h,d;return t[e],!!((h=i.vnode.props)!=null&&h.hasOwnProperty(e)&&(d=i.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`))});jo(()=>!c.value,()=>{$e(()=>t[e],h=>{o.value=h})});const u=I({get(){return s(c.value?t[e]:o.value)},set(h){const d=r(h);(c.value?t[e]:o.value)===d||s(c.value?t[e]:o.value)===h||(o.value=d,i==null||i.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const d1={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},Af="$vuetify.",kf=(t,e)=>t.replace(/\{(\d+)\}/g,(n,s)=>String(e[+s])),fy=(t,e,n)=>function(s){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];if(!s.startsWith(Af))return kf(s,i);const a=s.replace(Af,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=uf(l,a,null);return u||(as(`Translation key "${s}" not found in "${t.value}", trying fallback locale`),u=uf(c,a,null)),u||(gf(`Translation key "${s}" not found in fallback`),u=s),typeof u!="string"&&(gf(`Translation key "${s}" has a non-string value`),u=s),kf(u,i)};function gy(t,e){return(n,s)=>new Intl.NumberFormat([t.value,e.value],s).format(n)}function Al(t,e,n){var r,i;const s=Un(t,e,(r=t[e])!=null?r:n.value);return s.value=(i=t[e])!=null?i:n.value,$e(n,o=>{t[e]==null&&(s.value=n.value)}),s}function my(t){return e=>{const n=Al(e,"locale",t.current),s=Al(e,"fallback",t.fallback),r=Al(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:s,messages:r,t:fy(n,s,r),n:gy(n,s),provide:my({current:n,fallback:s,messages:r})}}}function f1(t){var r,i;const e=J((r=t==null?void 0:t.locale)!=null?r:"en"),n=J((i=t==null?void 0:t.fallback)!=null?i:"en"),s=J({en:d1,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:s,t:fy(e,n,s),n:gy(e,n),provide:my({current:e,fallback:n,messages:s})}}const g1={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Ko=Symbol.for("vuetify:locale");function m1(t){return t.name!=null}function p1(t){const e=t!=null&&t.adapter&&m1(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:f1(t),n=y1(e,t);return{...e,...n}}function v1(){const t=ut(Ko);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function y1(t,e){var r;const n=J((r=e==null?void 0:e.rtl)!=null?r:g1),s=I(()=>{var i;return(i=n.value[t.current.value])!=null?i:!1});return{isRtl:s,rtl:n,rtlClasses:I(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function oh(){const t=ut(Ko);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const b1=ve({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...dr(),...Pt(),...Wt()},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=Un(t,"modelValue"),{isRtl:r}=oh(),{themeClasses:i}=gn(t),{textColorClasses:o,textColorStyles:a}=Ys(t,"color"),{backgroundColorClasses:l,backgroundColorStyles:c}=zo(I(()=>t.bgColor||t.color)),{backgroundColorClasses:u,backgroundColorStyles:h}=zo(t,"color"),{roundedClasses:d}=fr(t),{intersectionRef:f,isIntersecting:m}=dy(),y=I(()=>parseInt(t.max,10)),w=I(()=>parseInt(t.height,10)),_=I(()=>parseFloat(t.bufferValue)/y.value*100),k=I(()=>parseFloat(s.value)/y.value*100),C=I(()=>r.value!==t.reverse),L=I(()=>t.indeterminate?"fade-transition":"slide-x-transition"),$=I(()=>t.bgOpacity==null?t.bgOpacity:parseFloat(t.bgOpacity));function H(D){if(!f.value)return;const{left:S,right:U,width:F}=f.value.getBoundingClientRect(),Q=C.value?F-D.clientX+(U-F):D.clientX-S;s.value=Math.round(Q/F*y.value)}return Ie(()=>v(t.tag,{ref:f,class:["v-progress-linear",{"v-progress-linear--active":t.active&&m.value,"v-progress-linear--reverse":C.value,"v-progress-linear--rounded":t.rounded,"v-progress-linear--rounded-bar":t.roundedBar,"v-progress-linear--striped":t.striped},d.value,i.value],style:{height:t.active?ye(w.value):0,"--v-progress-linear-height":ye(w.value)},role:"progressbar","aria-hidden":t.active?"false":"true","aria-valuemin":"0","aria-valuemax":t.max,"aria-valuenow":t.indeterminate?void 0:k.value,onClick:t.clickable&&H},{default:()=>[t.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...a.value,[C.value?"left":"right"]:ye(-w.value),borderTop:`${ye(w.value/2)} dotted`,opacity:$.value,top:`calc(50% - ${ye(w.value/4)})`,width:ye(100-_.value,"%"),"--v-progress-linear-stream-to":ye(w.value*(C.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",l.value],style:[c.value,{opacity:$.value,width:ye(t.stream?_.value:100,"%")}]},null),v(sr,{name:L.value},{default:()=>[t.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(D=>v("div",{key:D,class:["v-progress-linear__indeterminate",D,u.value],style:h.value},null))]):v("div",{class:["v-progress-linear__determinate",u.value],style:[h.value,{width:ye(k.value,"%")}]},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:k.value,buffer:_.value})])]})),{}}}),ah=be({loading:Boolean},"loader");function lh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();return{loaderClasses:I(()=>({[`${e}--loading`]:t.loading}))}}function py(t,e){var n;let{slots:s}=e;return v("div",{class:`${t.name}__loader`},[((n=s.default)==null?void 0:n.call(s,{color:t.color,isActive:t.active}))||v(b1,{active:t.active,color:t.color,height:"2",indeterminate:!0},null)])}const qa=be({border:[Boolean,Number,String]},"border");function Ka(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();return{borderClasses:I(()=>{const s=ke(t)?t.value:t.border,r=[];if(s===!0||s==="")r.push(`${e}--border`);else if(typeof s=="string"||s===0)for(const i of String(s).split(" "))r.push(`border-${i}`);return r})}}const Wa=be({elevation:{type:[Number,String],validator(t){const e=parseInt(t);return!isNaN(e)&&e>=0&&e<=24}}},"elevation");function Ga(t){return{elevationClasses:I(()=>{const n=ke(t)?t.value:t.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}const xf={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},vy=be({location:String},"location");function yy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=oh();return{locationStyles:I(()=>{if(!t.location)return{};const{side:i,align:o}=ck(t.location.split(" ").length>1?t.location:`${t.location} center`,s.value);function a(c){return n?n(c):0}const l={};return i!=="center"&&(e?l[xf[i]]=`calc(100% - ${a(i)}px)`:l[i]=0),o!=="center"?e?l[xf[o]]=`calc(100% - ${a(o)}px)`:l[o]=0:(i==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),l})}}const w1=["static","relative","fixed","absolute","sticky"],by=be({position:{type:String,validator:t=>w1.includes(t)}},"position");function wy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();return{positionClasses:I(()=>t.position?`${e}--${t.position}`:void 0)}}function _y(t,e){const n=rb("RouterLink"),s=I(()=>!!(t.href||t.to)),r=I(()=>(s==null?void 0:s.value)||df(e,"click")||df(t,"click"));if(typeof n=="string")return{isLink:s,isClickable:r,href:ot(t,"href")};const i=t.to?n.useLink(t):void 0;return{isLink:s,isClickable:r,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&I(()=>{var o,a;return t.exact?(o=i.isExactActive)==null?void 0:o.value:(a=i.isActive)==null?void 0:a.value}),href:I(()=>t.to?i==null?void 0:i.route.value.href:t.href)}}const Iy=be({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),_1=ve({name:"VCard",directives:{Ripple:hy},props:{appendAvatar:String,appendIcon:ht,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ht,ripple:Boolean,subtitle:String,text:String,title:String,...Wt(),...qa(),...hr(),...eh(),...Wa(),...ah(),...vy(),...by(),...dr(),...Iy(),...Pt(),...za({variant:"elevated"})},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:r}=gn(t),{borderClasses:i}=Ka(t),{colorClasses:o,colorStyles:a,variantClasses:l}=ih(t),{densityClasses:c}=Li(t),{dimensionStyles:u}=th(t),{elevationClasses:h}=Ga(t),{loaderClasses:d}=lh(t),{locationStyles:f}=yy(t),{positionClasses:m}=wy(t),{roundedClasses:y}=fr(t),w=_y(t,n),_=I(()=>t.link!==!1&&w.isLink.value),k=I(()=>!t.disabled&&t.link!==!1&&(t.link||w.isClickable.value));return Ie(()=>{var C,L,$;const H=_.value?"a":t.tag,D=!!(s.title||t.title),S=!!(s.subtitle||t.subtitle),U=D||S,F=!!(s.append||t.appendAvatar||t.appendIcon),Q=!!(s.prepend||t.prependAvatar||t.prependIcon),O=!!(s.image||t.image),Y=U||Q||F,me=!!(s.text||t.text);return us(v(H,{class:["v-card",{"v-card--disabled":t.disabled,"v-card--flat":t.flat,"v-card--hover":t.hover&&!(t.disabled||t.flat),"v-card--link":k.value},r.value,i.value,o.value,c.value,h.value,d.value,m.value,y.value,l.value],style:[a.value,u.value,f.value],href:w.href.value,onClick:k.value&&w.navigate,tabindex:t.disabled?-1:void 0},{default:()=>[O&&v(cs,{key:"image",defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>{var _e;return[v("div",{class:"v-card__image"},[(_e=(C=s.image)==null?void 0:C.call(s))!=null?_e:v(sh,null,null)])]}}),v(py,{name:"v-card",active:!!t.loading,color:typeof t.loading=="boolean"?void 0:t.loading},{default:s.loader}),Y&&v(i1,{key:"item",prependAvatar:t.prependAvatar,prependIcon:t.prependIcon,title:t.title,subtitle:t.subtitle,appendAvatar:t.appendAvatar,appendIcon:t.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),me&&v(o1,{key:"text"},{default:()=>{var _e;return[(_e=(L=s.text)==null?void 0:L.call(s))!=null?_e:t.text]}}),($=s.default)==null?void 0:$.call(s),s.actions&&v(Rk,null,{default:s.actions}),rh(k.value,"v-card")]}),[[ra("ripple"),k.value]])}),{}}}),I1=aa("h1",{class:"text-center"},"Chats",-1),E1={__name:"Chat",setup(t){const e=J(Fs.currentUser),n=J([]),s=UA(Av(jv,"chats"),jA("time"));return QA(s,r=>{r.docChanges().forEach(i=>{i.type==="added"&&n.value.push({id:i.doc.id,...i.doc.data()})})}),(r,i)=>(Et(),po(Me,null,[I1,(Et(!0),po(Me,null,ib(n.value,o=>(Et(),_n(_1,{key:o.id,width:"300",subtitle:o.displayName,text:o.text,class:Go(["mb-3",o.uid===e.value.uid&&"ml-auto"]),color:o.uid===e.value.uid?"succes":"#555",theme:"dark"},null,8,["subtitle","text","class","color"]))),128))],64))}},Ey=Symbol.for("vuetify:form"),T1=be({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function C1(t){const e=Un(t,"modelValue"),n=I(()=>t.disabled),s=I(()=>t.readonly),r=J(!1),i=J([]),o=J([]);async function a(){const u=[];let h=!0;o.value=[],r.value=!0;for(const d of i.value){const f=await d.validate();if(f.length>0&&(h=!1,u.push({id:d.id,errorMessages:f})),!h&&t.fastFail)break}return o.value=u,r.value=!1,{valid:h,errors:o.value}}function l(){i.value.forEach(u=>u.reset()),e.value=null}function c(){i.value.forEach(u=>u.resetValidation()),o.value=[],e.value=null}return $e(i,()=>{let u=0,h=0;const d=[];for(const f of i.value)f.isValid===!1?(h++,d.push({id:f.id,errorMessages:f.errorMessages})):f.isValid===!0&&u++;o.value=d,e.value=h>0?!1:u===i.value.length?!0:null},{deep:!0}),Mn(Ey,{register:u=>{let{id:h,validate:d,reset:f,resetValidation:m}=u;i.value.some(y=>y.id===h)&&as(`Duplicate input name "${h}"`),i.value.push({id:h,validate:d,reset:f,resetValidation:m,isValid:null,errorMessages:[]})},unregister:u=>{i.value=i.value.filter(h=>h.id!==u)},update:(u,h,d)=>{const f=i.value.find(m=>m.id===u);!f||(f.isValid=h,f.errorMessages=d)},isDisabled:n,isReadonly:s,isValidating:r,items:i,validateOn:ot(t,"validateOn")}),{errors:o,isDisabled:n,isReadonly:s,isValidating:r,items:i,validate:a,reset:l,resetValidation:c}}function S1(){return ut(Ey,null)}const kl=Symbol("Forwarded refs");function Ty(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];return t[kl]=n,new Proxy(t,{get(r,i){if(Reflect.has(r,i))return Reflect.get(r,i);for(const o of n)if(o.value&&Reflect.has(o.value,i)){const a=Reflect.get(o.value,i);return typeof a=="function"?a.bind(o.value):a}},getOwnPropertyDescriptor(r,i){const o=Reflect.getOwnPropertyDescriptor(r,i);if(o)return o;if(!(typeof i=="symbol"||i.startsWith("__"))){for(const a of n){if(!a.value)continue;const l=Reflect.getOwnPropertyDescriptor(a.value,i);if(l)return l;if("_"in a.value&&"setupState"in a.value._){const c=Reflect.getOwnPropertyDescriptor(a.value._.setupState,i);if(c)return c}}for(const a of n){let l=a.value&&Object.getPrototypeOf(a.value);for(;l;){const c=Reflect.getOwnPropertyDescriptor(l,i);if(c)return c;l=Object.getPrototypeOf(l)}}for(const a of n){const l=a.value&&a.value[kl];if(!l)continue;const c=l.slice();for(;c.length;){const u=c.shift(),h=Reflect.getOwnPropertyDescriptor(u.value,i);if(h)return h;const d=u.value&&u.value[kl];d&&c.push(...d)}}}}})}const A1=ve({name:"VForm",props:{...T1()},emits:{"update:modelValue":t=>!0,submit:t=>!0},setup(t,e){let{slots:n,emit:s}=e;const r=C1(t),i=J();function o(l){l.preventDefault(),r.reset()}function a(l){const c=l,u=r.validate();c.then=u.then.bind(u),c.catch=u.catch.bind(u),c.finally=u.finally.bind(u),s("submit",c),c.defaultPrevented||u.then(h=>{let{valid:d}=h;if(d){var f;(f=i.value)==null||f.submit()}}),c.preventDefault()}return Ie(()=>{var l;return v("form",{ref:i,class:"v-form",novalidate:!0,onReset:o,onSubmit:a},[(l=n.default)==null?void 0:l.call(n,r)])}),Ty(r,i)}});function wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return ve({name:t,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:e}},setup(s,r){let{slots:i}=r;return()=>{const o=s.group?iw:sr;return nr(o,{name:t,mode:s.mode,onBeforeEnter(a){a.style.transformOrigin=s.origin},onLeave(a){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:u,offsetHeight:h}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${l}px`,a.style.left=`${c}px`,a.style.width=`${u}px`,a.style.height=`${h}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&a!=null&&a._transitionInitialStyles){const{position:l,top:c,left:u,width:h,height:d}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=l||"",a.style.top=c||"",a.style.left=u||"",a.style.width=h||"",a.style.height=d||""}}},i.default)}}})}function Cy(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return ve({name:t,props:{mode:{type:String,default:n}},setup(s,r){let{slots:i}=r;return()=>nr(sr,{name:t,...e},i.default)}})}function Sy(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=At(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const a=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[s]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=a.transition,t&&o._parent&&o._parent.classList.add(t),requestAnimationFrame(()=>{o.style[n]=l})},onAfterEnter:i,onEnterCancelled:i,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(o){t&&o._parent&&o._parent.classList.remove(t),i(o)}function i(o){const a=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,a!=null&&(o.style[n]=a),delete o._initialStyle}}wt("fab-transition","center center","out-in");wt("dialog-bottom-transition");wt("dialog-top-transition");wt("fade-transition");wt("scale-transition");wt("scroll-x-transition");wt("scroll-x-reverse-transition");wt("scroll-y-transition");wt("scroll-y-reverse-transition");wt("slide-x-transition");wt("slide-x-reverse-transition");const Ay=wt("slide-y-transition");wt("slide-y-reverse-transition");const k1=Cy("expand-transition",Sy()),x1=Cy("expand-x-transition",Sy("",!0));function ky(t){const{t:e}=v1();function n(s){var l;let{name:r}=s;const i={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[r],o=t[`onClick:${r}`],a=o&&i?e(`$vuetify.input.${i}`,(l=t.label)!=null?l:""):void 0;return v(ls,{icon:t[`${r}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}const R1=ve({name:"VLabel",props:{text:String,clickable:Boolean,...Wt()},setup(t,e){let{slots:n}=e;return Ie(()=>{var s;return v("label",{class:["v-label",{"v-label--clickable":t.clickable}]},[t.text,(s=n.default)==null?void 0:s.call(n)])}),{}}}),Ji=ve({name:"VFieldLabel",props:{floating:Boolean},setup(t,e){let{slots:n}=e;return Ie(()=>v(R1,{class:["v-field-label",{"v-field-label--floating":t.floating}],"aria-hidden":t.floating||void 0},n)),{}}}),xy=be({focused:Boolean},"focus");function Ry(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn();const n=Un(t,"focused"),s=I(()=>({[`${e}--focused`]:n.value}));function r(){n.value=!0}function i(){n.value=!1}return{focusClasses:s,isFocused:n,focus:r,blur:i}}const D1=["underlined","outlined","filled","solo","plain"],Dy=be({appendInnerIcon:ht,bgColor:String,clearable:Boolean,clearIcon:{type:ht,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ht,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:t=>D1.includes(t)},"onClick:clear":Mr,"onClick:appendInner":Mr,"onClick:prependInner":Mr,...Wt(),...ah()},"v-field"),Ny=ur()({name:"VField",inheritAttrs:!1,props:{id:String,...xy(),...Dy()},emits:{"click:control":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:r}=e;const{themeClasses:i}=gn(t),{loaderClasses:o}=lh(t),{focusClasses:a,isFocused:l,focus:c,blur:u}=Ry(t),{InputIcon:h}=ky(t),d=I(()=>t.dirty||t.active),f=I(()=>!t.singleLine&&!!(t.label||r.label)),m=bs(),y=I(()=>t.id||`input-${m}`),w=J(),_=J(),k=J(),{backgroundColorClasses:C,backgroundColorStyles:L}=zo(ot(t,"bgColor")),{textColorClasses:$,textColorStyles:H}=Ys(I(()=>d.value&&l.value&&!t.error&&!t.disabled?t.color:void 0));$e(d,U=>{if(f.value){const F=w.value.$el,Q=_.value.$el,O=uk(F),Y=Q.getBoundingClientRect(),me=Y.x-O.x,_e=Y.y-O.y-(O.height/2-Y.height/2),ue=Y.width/.75,re=Math.abs(ue-O.width)>1?{maxWidth:ye(ue)}:void 0,ae=getComputedStyle(F),Ke=getComputedStyle(Q),Lt=parseFloat(ae.transitionDuration)*1e3||150,at=parseFloat(Ke.getPropertyValue("--v-field-label-scale")),De=Ke.getPropertyValue("color");F.style.visibility="visible",Q.style.visibility="hidden",hk(F,{transform:`translate(${me}px, ${_e}px) scale(${at})`,color:De,...re},{duration:Lt,easing:Ak,direction:U?"normal":"reverse"}).finished.then(()=>{F.style.removeProperty("visibility"),Q.style.removeProperty("visibility")})}},{flush:"post"});const D=I(()=>({isActive:d,isFocused:l,controlRef:k,blur:u,focus:c}));function S(U){U.target!==document.activeElement&&U.preventDefault(),s("click:control",U)}return Ie(()=>{var U,F,Q;const O=t.variant==="outlined",Y=r["prepend-inner"]||t.prependInnerIcon,me=!!(t.clearable||r.clear),_e=!!(r["append-inner"]||t.appendInnerIcon||me),ue=r.label?r.label({label:t.label,props:{for:y.value}}):t.label;return v("div",An({class:["v-field",{"v-field--active":d.value,"v-field--appended":_e,"v-field--disabled":t.disabled,"v-field--dirty":t.dirty,"v-field--error":t.error,"v-field--has-background":!!t.bgColor,"v-field--persistent-clear":t.persistentClear,"v-field--prepended":Y,"v-field--reverse":t.reverse,"v-field--single-line":t.singleLine,"v-field--no-label":!ue,[`v-field--variant-${t.variant}`]:!0},i.value,C.value,a.value,o.value],style:[L.value,H.value],onClick:S},n),[v("div",{class:"v-field__overlay"},null),v(py,{name:"v-field",active:t.loading,color:t.error?"error":t.color},{default:r.loader}),Y&&v("div",{key:"prepend",class:"v-field__prepend-inner"},[t.prependInnerIcon&&v(h,{key:"prepend-icon",name:"prependInner"},null),(U=r["prepend-inner"])==null?void 0:U.call(r,D.value)]),v("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(t.variant)&&f.value&&v(Ji,{key:"floating-label",ref:_,class:[$.value],floating:!0,for:y.value},{default:()=>[ue]}),v(Ji,{ref:w,for:y.value},{default:()=>[ue]}),(F=r.default)==null?void 0:F.call(r,{...D.value,props:{id:y.value,class:"v-field__input"},focus:c,blur:u})]),me&&v(x1,{key:"clear"},{default:()=>[us(v("div",{class:"v-field__clearable"},[r.clear?r.clear():v(h,{name:"clear"},null)]),[[Kc,t.dirty]])]}),_e&&v("div",{key:"append",class:"v-field__append-inner"},[(Q=r["append-inner"])==null?void 0:Q.call(r,D.value),t.appendInnerIcon&&v(h,{key:"append-icon",name:"appendInner"},null)]),v("div",{class:["v-field__outline",$.value]},[O&&v(Me,null,[v("div",{class:"v-field__outline__start"},null),f.value&&v("div",{class:"v-field__outline__notch"},[v(Ji,{ref:_,floating:!0,for:y.value},{default:()=>[ue]})]),v("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(t.variant)&&f.value&&v(Ji,{ref:_,floating:!0,for:y.value},{default:()=>[ue]})])])}),{controlRef:k}}});function N1(t){const e=Object.keys(Ny.props).filter(n=>!Kv(n));return Va(t,e)}const O1=ve({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...nh({transition:{component:Ay,leaveAbsolute:!0,group:!0}})},setup(t,e){let{slots:n}=e;const s=I(()=>Pr(t.messages)),{textColorClasses:r,textColorStyles:i}=Ys(I(()=>t.color));return Ie(()=>v(xs,{transition:t.transition,tag:"div",class:["v-messages",r.value],style:i.value},{default:()=>[t.active&&s.value.map((o,a)=>v("div",{class:"v-messages__message",key:`${a}-${s.value}`},[n.message?n.message({message:o}):o]))]})),{}}}),P1=be({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...xy()},"validation");function L1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fn(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:bs();const s=Un(t,"modelValue"),r=I(()=>t.validationValue===void 0?s.value:t.validationValue),i=S1(),o=J([]),a=J(!0),l=I(()=>!!(Pr(s.value===""?null:s.value).length||Pr(r.value===""?null:r.value).length)),c=I(()=>!!(t.disabled||i!=null&&i.isDisabled.value)),u=I(()=>!!(t.readonly||i!=null&&i.isReadonly.value)),h=I(()=>t.errorMessages.length?Pr(t.errorMessages):o.value),d=I(()=>t.error||h.value.length?!1:t.rules.length&&a.value?null:!0),f=J(!1),m=I(()=>({[`${e}--error`]:d.value===!1,[`${e}--dirty`]:l.value,[`${e}--disabled`]:c.value,[`${e}--readonly`]:u.value})),y=I(()=>{var L;return(L=t.name)!=null?L:ts(n)});jc(()=>{i==null||i.register({id:y.value,validate:C,reset:_,resetValidation:k})}),$n(()=>{i==null||i.unregister(y.value)});const w=I(()=>t.validateOn||(i==null?void 0:i.validateOn.value)||"input");tr(()=>i==null?void 0:i.update(y.value,d.value,h.value)),jo(()=>w.value==="input",()=>{$e(r,()=>{if(r.value!=null)C();else if(t.focused){const L=$e(()=>t.focused,$=>{$||C(),L()})}})}),jo(()=>w.value==="blur",()=>{$e(()=>t.focused,L=>{L||C()})}),$e(d,()=>{i==null||i.update(y.value,d.value,h.value)});function _(){k(),s.value=null}function k(){a.value=!0,o.value=[]}async function C(){const L=[];f.value=!0;for(const $ of t.rules){if(L.length>=(t.maxErrors||1))break;const D=await(typeof $=="function"?$:()=>$)(r.value);if(D!==!0){if(typeof D!="string"){console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);continue}L.push(D)}}return o.value=L,f.value=!1,a.value=!1,o.value}return{errorMessages:h,isDirty:l,isDisabled:c,isReadonly:u,isPristine:a,isValid:d,isValidating:f,reset:_,resetValidation:k,validate:C,validationClasses:m}}const Oy=be({id:String,appendIcon:ht,prependIcon:ht,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},"onClick:prepend":Mr,"onClick:append":Mr,...hr(),...P1()},"v-input"),Py=ur()({name:"VInput",props:{...Oy()},emits:{"update:modelValue":t=>!0},setup(t,e){let{attrs:n,slots:s,emit:r}=e;const{densityClasses:i}=Li(t),{InputIcon:o}=ky(t),a=bs(),l=I(()=>t.id||`input-${a}`),{errorMessages:c,isDirty:u,isDisabled:h,isReadonly:d,isPristine:f,isValid:m,isValidating:y,reset:w,resetValidation:_,validate:k,validationClasses:C}=L1(t,"v-input",l),L=I(()=>({id:l,isDirty:u,isDisabled:h,isReadonly:d,isPristine:f,isValid:m,isValidating:y,reset:w,resetValidation:_,validate:k}));return Ie(()=>{var $,H,D,S,U;const F=!!(s.prepend||t.prependIcon),Q=!!(s.append||t.appendIcon),O=!!(($=t.messages)!=null&&$.length||c.value.length),Y=!t.hideDetails||t.hideDetails==="auto"&&(O||!!s.details);return v("div",{class:["v-input",`v-input--${t.direction}`,i.value,C.value]},[F&&v("div",{key:"prepend",class:"v-input__prepend"},[(H=s.prepend)==null?void 0:H.call(s,L.value),t.prependIcon&&v(o,{key:"prepend-icon",name:"prepend"},null)]),s.default&&v("div",{class:"v-input__control"},[(D=s.default)==null?void 0:D.call(s,L.value)]),Q&&v("div",{key:"append",class:"v-input__append"},[t.appendIcon&&v(o,{key:"append-icon",name:"append"},null),(S=s.append)==null?void 0:S.call(s,L.value)]),Y&&v("div",{class:"v-input__details"},[v(O1,{active:O,messages:c.value.length>0?c.value:t.messages},{message:s.message}),(U=s.details)==null?void 0:U.call(s,L.value)])])}),{reset:w,resetValidation:_,validate:k}}});function M1(t){const e=Object.keys(Py.props).filter(n=>!Kv(n));return Va(t,e)}const $1=ve({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...nh({transition:{component:Ay}})},setup(t,e){let{slots:n}=e;const s=I(()=>t.max?`${t.value} / ${t.max}`:String(t.value));return Ie(()=>v(xs,{transition:t.transition},{default:()=>[us(v("div",{class:"v-counter"},[n.default?n.default({counter:s.value,max:t.max,value:t.value}):s.value]),[[Kc,t.active]])]})),{}}}),F1=["color","file","time","date","datetime-local","week","month"],V1=be({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Oy(),...Dy()},"v-text-field"),U1=ur()({name:"VTextField",directives:{Intersect:ny},inheritAttrs:!1,props:V1(),emits:{"click:control":t=>!0,"click:input":t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,e){let{attrs:n,emit:s,slots:r}=e;const i=Un(t,"modelValue"),{isFocused:o,focus:a,blur:l}=Ry(t),c=I(()=>{var $;return typeof t.counterValue=="function"?t.counterValue(i.value):(($=i.value)!=null?$:"").toString().length}),u=I(()=>{if(n.maxlength)return n.maxlength;if(!(!t.counter||typeof t.counter!="number"&&typeof t.counter!="string"))return t.counter});function h($,H){var D,S;!t.autofocus||!$||(D=H[0].target)==null||(S=D.focus)==null||S.call(D)}const d=J(),f=J(),m=J(),y=I(()=>F1.includes(t.type)||t.persistentPlaceholder||o.value),w=I(()=>t.messages.length?t.messages:o.value||t.persistentHint?t.hint:"");function _(){if(m.value!==document.activeElement){var $;($=m.value)==null||$.focus()}o.value||a()}function k($){_(),s("click:control",$)}function C($){$.stopPropagation(),_(),ci(()=>{i.value=null,ok(t["onClick:clear"],$)})}function L($){i.value=$.target.value}return Ie(()=>{const $=!!(r.counter||t.counter||t.counterValue),H=!!($||r.details),[D,S]=sk(n),[{modelValue:U,...F}]=M1(t),[Q]=N1(t);return v(Py,An({ref:d,modelValue:i.value,"onUpdate:modelValue":O=>i.value=O,class:["v-text-field",{"v-text-field--prefixed":t.prefix,"v-text-field--suffixed":t.suffix,"v-text-field--flush-details":["plain","underlined"].includes(t.variant)}],"onClick:prepend":t["onClick:prepend"],"onClick:append":t["onClick:append"]},D,F,{focused:o.value,messages:w.value}),{...r,default:O=>{let{id:Y,isDisabled:me,isDirty:_e,isReadonly:ue,isValid:re}=O;return v(Ny,An({ref:f,onMousedown:ae=>{ae.target!==m.value&&ae.preventDefault()},"onClick:control":k,"onClick:clear":C,"onClick:prependInner":t["onClick:prependInner"],"onClick:appendInner":t["onClick:appendInner"],role:"textbox"},Q,{id:Y.value,active:y.value||_e.value,dirty:_e.value||t.dirty,focused:o.value,error:re.value===!1}),{...r,default:ae=>{let{props:{class:Ke,...Lt}}=ae;const at=us(v("input",An({ref:m,value:i.value,onInput:L,autofocus:t.autofocus,readonly:ue.value,disabled:me.value,name:t.name,placeholder:t.placeholder,size:1,type:t.type,onFocus:_,onBlur:l},Lt,S),null),[[ra("intersect"),{handler:h},null,{once:!0}]]);return v(Me,null,[t.prefix&&v("span",{class:"v-text-field__prefix"},[t.prefix]),r.default?v("div",{class:Ke,onClick:De=>s("click:input",De),"data-no-activator":""},[r.default(),at]):sn(at,{class:Ke}),t.suffix&&v("span",{class:"v-text-field__suffix"},[t.suffix])])}})},details:H?O=>{var Y;return v(Me,null,[(Y=r.details)==null?void 0:Y.call(r,O),$&&v(Me,null,[v("span",null,null),v($1,{active:t.persistentCounter||o.value,value:c.value,max:u.value},r.counter)])])}:void 0})}),Ty({},d,f,m)}}),B1={__name:"FormAdd",setup(t){const e=J(""),n=async()=>{console.log(e.value);try{await GA(Av(jv,"chats"),{text:e.value,time:Date.now(),uid:Fs.currentUser.uid,displayName:Fs.currentUser.displayName}),e.value=""}catch(s){console.log(s)}};return(s,r)=>(Et(),_n(A1,{class:"w-100",onSubmit:r[1]||(r[1]=dw(()=>{},["prevent"]))},{default:gt(()=>[v(U1,{color:"succes",label:"Ingresa el mensaje",variant:"outlined","hide-details":"","append-icon":"mdi-send","onClick:append":n,modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i)},null,8,["modelValue"])]),_:1}))}};function Ly(t){const e=J(),n=J();if(Ot){const s=new ResizeObserver(r=>{t==null||t(r,s),r.length&&(n.value=r[0].contentRect)});$n(()=>{s.disconnect()}),$e(e,(r,i)=>{i&&(s.unobserve(i),n.value=void 0),r&&s.observe(r)},{flush:"post"})}return{resizeRef:e,contentRect:Zo(n)}}const Wo=Symbol.for("vuetify:layout"),My=Symbol.for("vuetify:layout-item"),Rf=1e3,j1=be({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),H1=be({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function z1(){const t=ut(Wo);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function q1(t){var a;const e=ut(Wo);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=(a=t.id)!=null?a:`layout-item-${bs()}`,s=Kt("useLayoutItem");Mn(My,{id:n});const r=J(!1);vg(()=>r.value=!0),pg(()=>r.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:o}=e.register(s,{...t,active:I(()=>r.value?!1:t.active.value),id:n});return $n(()=>e.unregister(n)),{layoutItemStyles:i,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const K1=(t,e,n,s)=>{let r={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=s.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};i.push({id:o,layer:u}),r=u}return i};function W1(t){const e=ut(Wo,null),n=I(()=>e?e.rootZIndex.value-100:Rf),s=J([]),r=mt(new Map),i=mt(new Map),o=mt(new Map),a=mt(new Map),l=mt(new Map),{resizeRef:c,contentRect:u}=Ly(),h=I(()=>{var S;const H=new Map,D=(S=t.overlaps)!=null?S:[];for(const U of D.filter(F=>F.includes(":"))){const[F,Q]=U.split(":");if(!s.value.includes(F)||!s.value.includes(Q))continue;const O=r.get(F),Y=r.get(Q),me=i.get(F),_e=i.get(Q);!O||!Y||!me||!_e||(H.set(Q,{position:O.value,amount:parseInt(me.value,10)}),H.set(F,{position:Y.value,amount:-parseInt(_e.value,10)}))}return H}),d=I(()=>{const H=[...new Set([...o.values()].map(S=>S.value))].sort((S,U)=>S-U),D=[];for(const S of H){const U=s.value.filter(F=>{var Q;return((Q=o.get(F))==null?void 0:Q.value)===S});D.push(...U)}return K1(D,r,i,a)}),f=I(()=>!Array.from(l.values()).some(H=>H.value)),m=I(()=>d.value[d.value.length-1].layer),y=I(()=>({"--v-layout-left":ye(m.value.left),"--v-layout-right":ye(m.value.right),"--v-layout-top":ye(m.value.top),"--v-layout-bottom":ye(m.value.bottom),...f.value?void 0:{transition:"none"}})),w=I(()=>d.value.slice(1).map((H,D)=>{let{id:S}=H;const{layer:U}=d.value[D],F=i.get(S),Q=r.get(S);return{id:S,...U,size:Number(F.value),position:Q.value}})),_=H=>w.value.find(D=>D.id===H),k=Kt("createLayout"),C=J(!1);tr(()=>{C.value=!0}),Mn(Wo,{register:(H,D)=>{let{id:S,order:U,position:F,layoutSize:Q,elementSize:O,active:Y,disableTransitions:me,absolute:_e}=D;o.set(S,U),r.set(S,F),i.set(S,Q),a.set(S,Y),me&&l.set(S,me);const re=Lr(My,k==null?void 0:k.vnode).indexOf(H);re>-1?s.value.splice(re,0,S):s.value.push(S);const ae=I(()=>w.value.findIndex(De=>De.id===S)),Ke=I(()=>n.value+d.value.length*2-ae.value*2),Lt=I(()=>{const De=F.value==="left"||F.value==="right",ws=F.value==="right",Qa=F.value==="bottom",Mi={[F.value]:0,zIndex:Ke.value,transform:`translate${De?"X":"Y"}(${(Y.value?0:-110)*(ws||Qa?-1:1)}%)`,position:_e.value||n.value!==Rf?"absolute":"fixed",...f.value?void 0:{transition:"none"}};if(!C.value)return Mi;const Ne=w.value[ae.value];if(!Ne)throw new Error(`[Vuetify] Could not find layout item "${S}"`);const mn=h.value.get(S);return mn&&(Ne[mn.position]+=mn.amount),{...Mi,height:De?`calc(100% - ${Ne.top}px - ${Ne.bottom}px)`:O.value?`${O.value}px`:void 0,left:ws?void 0:`${Ne.left}px`,right:ws?`${Ne.right}px`:void 0,top:F.value!=="bottom"?`${Ne.top}px`:void 0,bottom:F.value!=="top"?`${Ne.bottom}px`:void 0,width:De?O.value?`${O.value}px`:void 0:`calc(100% - ${Ne.left}px - ${Ne.right}px)`}}),at=I(()=>({zIndex:Ke.value-1}));return{layoutItemStyles:Lt,layoutItemScrimStyles:at,zIndex:Ke}},unregister:H=>{o.delete(H),r.delete(H),i.delete(H),a.delete(H),l.delete(H),s.value=s.value.filter(D=>D!==H)},mainRect:m,mainStyles:y,getLayoutItem:_,items:w,layoutRect:u,rootZIndex:n});const L=I(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),$=I(()=>({zIndex:n.value,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:L,layoutStyles:$,getLayoutItem:_,items:w,layoutRect:u,layoutRef:c}}const G1=ve({name:"VApp",props:{...j1({fullHeight:!0}),...Wt()},setup(t,e){let{slots:n}=e;const s=gn(t),{layoutClasses:r,layoutStyles:i,getLayoutItem:o,items:a,layoutRef:l}=W1(t),{rtlClasses:c}=oh();return Ie(()=>{var u;return v("div",{ref:l,class:["v-application",s.themeClasses.value,r.value,c.value],style:i.value},[v("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:o,items:a,theme:s}}});const _c=ur()({name:"VToolbarTitle",props:{text:String,...Pt()},setup(t,e){let{slots:n}=e;return Ie(()=>{var s;const r=!!(n.default||n.text||t.text);return v(t.tag,{class:"v-toolbar-title"},{default:()=>[r&&v("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():t.text,(s=n.default)==null?void 0:s.call(n)])]})}),{}}}),Q1=[null,"prominent","default","comfortable","compact"],$y=be({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:t=>Q1.includes(t)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...qa(),...Wa(),...dr(),...Pt({tag:"header"}),...Wt()},"v-toolbar"),Ic=ur()({name:"VToolbar",props:$y(),setup(t,e){var n;let{slots:s}=e;const{backgroundColorClasses:r,backgroundColorStyles:i}=zo(ot(t,"color")),{borderClasses:o}=Ka(t),{elevationClasses:a}=Ga(t),{roundedClasses:l}=fr(t),{themeClasses:c}=gn(t),u=J(!!(t.extended||(n=s.extension)!=null&&n.call(s))),h=I(()=>parseInt(Number(t.height)+(t.density==="prominent"?Number(t.height):0)-(t.density==="comfortable"?8:0)-(t.density==="compact"?16:0),10)),d=I(()=>u.value?parseInt(Number(t.extensionHeight)+(t.density==="prominent"?Number(t.extensionHeight):0)-(t.density==="comfortable"?4:0)-(t.density==="compact"?8:0),10):0);return Pi({VBtn:{variant:"text"}}),Ie(()=>{var f,m,y,w,_;const k=!!(t.title||s.title),C=!!(s.image||t.image),L=(f=s.extension)==null?void 0:f.call(s);return u.value=!!(t.extended||L),v(t.tag,{class:["v-toolbar",{"v-toolbar--absolute":t.absolute,"v-toolbar--collapse":t.collapse,"v-toolbar--flat":t.flat,"v-toolbar--floating":t.floating,[`v-toolbar--density-${t.density}`]:!0},r.value,o.value,a.value,l.value,c.value],style:[i.value]},{default:()=>[C&&v("div",{key:"image",class:"v-toolbar__image"},[v(cs,{defaults:{VImg:{cover:!0,src:t.image}}},{default:()=>[s.image?(m=s.image)==null?void 0:m.call(s):v(sh,null,null)]})]),v("div",{class:"v-toolbar__content",style:{height:ye(h.value)}},[s.prepend&&v("div",{class:"v-toolbar__prepend"},[(y=s.prepend)==null?void 0:y.call(s)]),k&&v(_c,{key:"title",text:t.title},{text:s.title}),(w=s.default)==null?void 0:w.call(s),s.append&&v("div",{class:"v-toolbar__append"},[(_=s.append)==null?void 0:_.call(s)])]),v(k1,null,{default:()=>[u.value&&v("div",{class:"v-toolbar__extension",style:{height:ye(d.value)}},[L])]})]})}),{contentHeight:h,extensionHeight:d}}});function Y1(t){var e;return Va(t,Object.keys((e=Ic==null?void 0:Ic.props)!=null?e:{}))}const X1=ve({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:t=>["top","bottom"].includes(t)},...$y(),...H1(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const s=J(),r=Un(t,"modelValue"),i=I(()=>{var h,d;var a,l;const c=(h=(a=s.value)==null?void 0:a.contentHeight)!=null?h:0,u=(d=(l=s.value)==null?void 0:l.extensionHeight)!=null?d:0;return c+u}),{layoutItemStyles:o}=q1({id:t.name,order:I(()=>parseInt(t.order,10)),position:ot(t,"location"),layoutSize:i,elementSize:i,active:r,absolute:ot(t,"absolute")});return Ie(()=>{const[a]=Y1(t);return v(Ic,An({ref:s,class:["v-app-bar",{"v-app-bar--bottom":t.location==="bottom"}],style:{...o.value,height:void 0}},a),n)}),{}}});const J1=ve({name:"VBtnGroup",props:{divided:Boolean,...qa(),...hr(),...Wa(),...dr(),...Pt(),...Wt(),...za()},setup(t,e){let{slots:n}=e;const{themeClasses:s}=gn(t),{densityClasses:r}=Li(t),{borderClasses:i}=Ka(t),{elevationClasses:o}=Ga(t),{roundedClasses:a}=fr(t);Pi({VBtn:{height:"auto",color:ot(t,"color"),density:ot(t,"density"),flat:!0,variant:ot(t,"variant")}}),Ie(()=>v(t.tag,{class:["v-btn-group",{"v-btn-group--divided":t.divided},s.value,i.value,r.value,o.value,a.value]},n))}}),Z1=be({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ex=be({value:null,disabled:Boolean,selectedClass:String},"group-item");function tx(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=Kt("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const r=bs();Mn(Symbol.for(`${e.description}:id`),r);const i=ut(e,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)}const o=ot(t,"value"),a=I(()=>i.disabled.value||t.disabled);i.register({id:r,value:o,disabled:a},s),$n(()=>{i.unregister(r)});const l=I(()=>i.isSelected(r)),c=I(()=>l.value&&[i.selectedClass.value,t.selectedClass]);return $e(l,u=>{s.emit("group:selected",{value:u})}),{id:r,isSelected:l,toggle:()=>i.select(r,!l.value),select:u=>i.select(r,u),selectedClass:c,value:o,disabled:a,group:i}}function nx(t,e){let n=!1;const s=mt([]),r=Un(t,"modelValue",[],d=>d==null?[]:Fy(s,Pr(d)),d=>{const f=rx(s,d);return t.multiple?f:f[0]}),i=Kt("useGroup");function o(d,f){const m=d,y=Symbol.for(`${e.description}:id`),_=Lr(y,i==null?void 0:i.vnode).indexOf(f);_>-1?s.splice(_,0,m):s.push(m)}function a(d){if(n)return;l();const f=s.findIndex(m=>m.id===d);s.splice(f,1)}function l(){const d=s.find(f=>!f.disabled);d&&t.mandatory==="force"&&!r.value.length&&(r.value=[d.id])}tr(()=>{l()}),$n(()=>{n=!0});function c(d,f){const m=s.find(y=>y.id===d);if(!(f&&m!=null&&m.disabled))if(t.multiple){const y=r.value.slice(),w=y.findIndex(k=>k===d),_=~w;if(f=f!=null?f:!_,_&&t.mandatory&&y.length<=1||!_&&t.max!=null&&y.length+1>t.max)return;w<0&&f?y.push(d):w>=0&&!f&&y.splice(w,1),r.value=y}else{const y=r.value.includes(d);if(t.mandatory&&y)return;r.value=(f!=null?f:!y)?[d]:[]}}function u(d){if(t.multiple&&as('This method is not supported when using "multiple" prop'),r.value.length){const f=r.value[0],m=s.findIndex(_=>_.id===f);let y=(m+d)%s.length,w=s[y];for(;w.disabled&&y!==m;)y=(y+d)%s.length,w=s[y];if(w.disabled)return;r.value=[s[y].id]}else{const f=s.find(m=>!m.disabled);f&&(r.value=[f.id])}}const h={register:o,unregister:a,selected:r,select:c,disabled:ot(t,"disabled"),prev:()=>u(s.length-1),next:()=>u(1),isSelected:d=>r.value.includes(d),selectedClass:I(()=>t.selectedClass),items:I(()=>s),getItemIndex:d=>sx(s,d)};return Mn(e,h),h}function sx(t,e){const n=Fy(t,[e]);return n.length?t.findIndex(s=>s.id===n[0]):-1}function Fy(t,e){const n=[];for(let s=0;s<t.length;s++){const r=t[s];r.value!=null?e.find(i=>Hv(i,r.value))!=null&&n.push(r.id):e.includes(s)&&n.push(r.id)}return n}function rx(t,e){const n=[];for(let s=0;s<t.length;s++){const r=t[s];e.includes(r.id)&&n.push(r.value!=null?r.value:s)}return n}const Vy=Symbol.for("vuetify:v-btn-toggle");ur()({name:"VBtnToggle",props:Z1(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const{isSelected:s,next:r,prev:i,select:o,selected:a}=nx(t,Vy);return Ie(()=>{var l;return v(J1,{class:"v-btn-toggle"},{default:()=>[(l=n.default)==null?void 0:l.call(n,{isSelected:s,next:r,prev:i,select:o,selected:a})]})}),{next:r,prev:i,select:o}}});const ix=ve({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ja(),...Pt({tag:"div"}),...Wt()},setup(t,e){let{slots:n}=e;const s=20,r=2*Math.PI*s,i=J(),{themeClasses:o}=gn(t),{sizeClasses:a,sizeStyles:l}=Ha(t),{textColorClasses:c,textColorStyles:u}=Ys(ot(t,"color")),{textColorClasses:h,textColorStyles:d}=Ys(ot(t,"bgColor")),{intersectionRef:f,isIntersecting:m}=dy(),{resizeRef:y,contentRect:w}=Ly(),_=I(()=>Math.max(0,Math.min(100,parseFloat(t.modelValue)))),k=I(()=>Number(t.width)),C=I(()=>l.value?Number(t.size):w.value?w.value.width:Math.max(k.value,32)),L=I(()=>s/(1-k.value/C.value)*2),$=I(()=>k.value/C.value*L.value),H=I(()=>ye((100-_.value)/100*r));return ui(()=>{f.value=i.value,y.value=i.value}),Ie(()=>v(t.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!t.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":t.indeterminate==="disable-shrink"},o.value,a.value,c.value],style:[l.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t.indeterminate?void 0:_.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(t.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${L.value} ${L.value}`},[v("circle",{class:["v-progress-circular__underlay",h.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":$.value,"stroke-dasharray":r,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":$.value,"stroke-dasharray":r,"stroke-dashoffset":H.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:_.value})])]})),{}}});function ox(t,e){$e(()=>{var n;return(n=t.isActive)==null?void 0:n.value},n=>{t.isLink.value&&n&&e&&ci(()=>{e(!0)})},{immediate:!0})}const Df=ve({name:"VBtn",directives:{Ripple:hy},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:Vy},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ht,appendIcon:ht,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...qa(),...dr(),...hr(),...eh(),...Wa(),...ex(),...ah(),...vy(),...by(),...Iy(),...ja(),...Pt({tag:"button"}),...Wt(),...za({variant:"elevated"})},emits:{"group:selected":t=>!0},setup(t,e){let{attrs:n,slots:s}=e;const{themeClasses:r}=gn(t),{borderClasses:i}=Ka(t),{colorClasses:o,colorStyles:a,variantClasses:l}=ih(t),{densityClasses:c}=Li(t),{dimensionStyles:u}=th(t),{elevationClasses:h}=Ga(t),{loaderClasses:d}=lh(t),{locationStyles:f}=yy(t),{positionClasses:m}=wy(t),{roundedClasses:y}=fr(t),{sizeClasses:w,sizeStyles:_}=Ha(t),k=tx(t,t.symbol,!1),C=_y(t,n),L=I(()=>{var D;return t.active!==!1&&(t.active||((D=C.isActive)==null?void 0:D.value)||(k==null?void 0:k.isSelected.value))}),$=I(()=>(k==null?void 0:k.disabled.value)||t.disabled),H=I(()=>t.variant==="elevated"&&!(t.disabled||t.flat||t.border));return ox(C,k==null?void 0:k.select),Ie(()=>{var D,S,U,F;const Q=C.isLink.value?"a":t.tag,O=!k||k.isSelected.value,Y=!!(t.prependIcon||s.prepend),me=!!(t.appendIcon||s.append),_e=!!(t.icon&&t.icon!==!0);return us(v(Q,{type:Q==="a"?void 0:"button",class:["v-btn",k==null?void 0:k.selectedClass.value,{"v-btn--active":L.value,"v-btn--block":t.block,"v-btn--disabled":$.value,"v-btn--elevated":H.value,"v-btn--flat":t.flat,"v-btn--icon":!!t.icon,"v-btn--loading":t.loading,"v-btn--stacked":t.stacked},r.value,i.value,O?o.value:void 0,c.value,h.value,d.value,m.value,y.value,w.value,l.value],style:[O?a.value:void 0,u.value,f.value,_.value],disabled:$.value||void 0,href:C.href.value,onClick:ue=>{var re;$.value||((re=C.navigate)==null||re.call(C,ue),k==null||k.toggle())}},{default:()=>{var ue;return[rh(!0,"v-btn"),!t.icon&&Y&&v(cs,{key:"prepend",defaults:{VIcon:{icon:t.prependIcon}}},{default:()=>{var re;return[v("span",{class:"v-btn__prepend"},[(re=(D=s.prepend)==null?void 0:D.call(s))!=null?re:v(ls,null,null)])]}}),v("span",{class:"v-btn__content","data-no-activator":""},[v(cs,{key:"content",defaults:{VIcon:{icon:_e?t.icon:void 0}}},{default:()=>{var re;return[(re=(S=s.default)==null?void 0:S.call(s))!=null?re:_e&&v(ls,{key:"icon"},null)]}})]),!t.icon&&me&&v(cs,{key:"append",defaults:{VIcon:{icon:t.appendIcon}}},{default:()=>{var re;return[v("span",{class:"v-btn__append"},[(re=(U=s.append)==null?void 0:U.call(s))!=null?re:v(ls,null,null)])]}}),!!t.loading&&v("span",{key:"loader",class:"v-btn__loader"},[(ue=(F=s.loader)==null?void 0:F.call(s))!=null?ue:v(ix,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[ra("ripple"),!$.value&&t.ripple,null]])}),{}}}),ax=ve({name:"VAppBarTitle",props:{..._c.props},setup(t,e){let{slots:n}=e;return Ie(()=>v(_c,{class:"v-app-bar-title"},n)),{}}});const Nf=ve({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...Pt()},setup(t,e){let{slots:n}=e;return Ie(()=>v(t.tag,{class:["v-container",{"v-container--fluid":t.fluid}]},n)),{}}});function lx(){const t=J(!1);return tr(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:I(()=>t.value?void 0:{transition:"none !important"}),isBooted:Zo(t)}}const cx=ve({name:"VMain",props:{scrollable:Boolean,...Pt({tag:"main"})},setup(t,e){let{slots:n}=e;const{mainStyles:s}=z1(),{ssrBootStyles:r}=lx();return Ie(()=>{var i,o;return v(t.tag,{class:["v-main",{"v-main--scrollable":t.scrollable}],style:[s.value,r.value]},{default:()=>[t.scrollable?v("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(o=n.default)==null?void 0:o.call(n)]})}),{}}}),ux={key:0},hx={key:1},dx=aa("h1",{class:"text-center mt-15"},"Debes Iniciar Sesion Para Ver Los Chats",-1),fx=[dx],gx={__name:"App",setup(t){const e=J(!1),n=async()=>{try{const r=new Yt,{user:i}=await JI(Fs,r)}catch(r){console.log(r)}},s=async()=>{await kI(Fs)};return AI(Fs,r=>{console.log(r),e.value=r}),(r,i)=>(Et(),_n(G1,null,{default:gt(()=>[e.value===!1?(Et(),po("div",ux,"Loading...")):(Et(),_n(X1,{key:1,color:"primary"},{append:gt(()=>[e.value?Nh("",!0):(Et(),_n(Df,{key:0,onClick:n,color:"white"},{default:gt(()=>[v(ls,{class:"mr-2"},{default:gt(()=>[Ss("mdi-account-plus")]),_:1}),Ss("Acceder")]),_:1})),e.value?(Et(),_n(Df,{key:1,onClick:s,color:"white"},{default:gt(()=>[v(ls,{class:"mr-2"},{default:gt(()=>[Ss("mdi-account-minus")]),_:1}),Ss("Cerrar Sesion")]),_:1})):Nh("",!0)]),default:gt(()=>[v(ax,null,{default:gt(()=>[Ss("MaueiChat")]),_:1})]),_:1})),v(cx,{app:""},{default:gt(()=>[v(Nf,null,{default:gt(()=>[e.value?(Et(),_n(E1,{key:0})):(Et(),po("div",hx,fx))]),_:1})]),_:1}),v(Nf,null,{default:gt(()=>[v(B1)]),_:1})]),_:1}))}};const Of=Symbol.for("vuetify:display"),Pf={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},mx=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pf;return un(Pf,t)};function Lf(t){return Ot&&!t?window.innerWidth:0}function Mf(t){return Ot&&!t?window.innerHeight:0}function px(){const t=Ot?window.navigator.userAgent:"ssr";function e(m){return Boolean(t.match(m))}const n=e(/android/i),s=e(/iphone|ipad|ipod/i),r=e(/cordova/i),i=e(/electron/i),o=e(/chrome/i),a=e(/edge/i),l=e(/firefox/i),c=e(/opera/i),u=e(/win/i),h=e(/mac/i),d=e(/linux/i),f=e(/ssr/i);return{android:n,ios:s,cordova:r,electron:i,chrome:o,edge:a,firefox:l,opera:c,win:u,mac:h,linux:d,touch:kk,ssr:f}}function vx(t,e){const{thresholds:n,mobileBreakpoint:s}=mx(t),r=J(Mf(e)),i=px(),o=mt({}),a=J(Lf(e));function l(){r.value=Mf(),a.value=Lf()}return ui(()=>{const c=a.value<n.sm,u=a.value<n.md&&!c,h=a.value<n.lg&&!(u||c),d=a.value<n.xl&&!(h||u||c),f=a.value<n.xxl&&!(d||h||u||c),m=a.value>=n.xxl,y=c?"xs":u?"sm":h?"md":d?"lg":f?"xl":"xxl",w=typeof s=="number"?s:n[s],_=i.ssr?i.android||i.ios||i.opera:a.value<w;o.xs=c,o.sm=u,o.md=h,o.lg=d,o.xl=f,o.xxl=m,o.smAndUp=!c,o.mdAndUp=!(c||u),o.lgAndUp=!(c||u||h),o.xlAndUp=!(c||u||h||d),o.smAndDown=!(h||d||f||m),o.mdAndDown=!(d||f||m),o.lgAndDown=!(f||m),o.xlAndDown=!m,o.name=y,o.height=r.value,o.width=a.value,o.mobile=_,o.mobileBreakpoint=s,o.platform=i,o.thresholds=n}),Ot&&window.addEventListener("resize",l,{passive:!0}),{...$c(o),update:l}}function Uy(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,s=un(e,n),{aliases:r={},components:i={},directives:o={}}=s,a=xk(s.defaults),l=vx(s.display,s.ssr),c=Wk(s.theme),u=Mk(s.icons),h=p1(s.locale);return{install:f=>{for(const m in o)f.directive(m,o[m]);for(const m in i)f.component(m,i[m]);for(const m in r)f.component(m,ve({...r[m],name:m,aliasName:r[m].name}));if(c.install(f),f.provide(oi,a),f.provide(Of,l),f.provide(Ho,c),f.provide(yc,u),f.provide(Ko,h),Ot&&s.ssr)if(f.$nuxt)f.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=f;f.mount=function(){const y=m(...arguments);return ci(()=>l.update()),f.mount=m,y}}bs.reset(),f.mixin({computed:{$vuetify(){return mt({defaults:br.call(this,oi),display:br.call(this,Of),theme:br.call(this,Ho),icons:br.call(this,yc),locale:br.call(this,Ko)})}}})},defaults:a,display:l,theme:c,icons:u,locale:h}}const yx="3.0.2";Uy.version=yx;function br(t){var i;var e,n;const s=this.$,r=(i=(e=s.parent)==null?void 0:e.provides)!=null?i:(n=s.vnode.appContext)==null?void 0:n.provides;if(r&&t in r)return r[t]}const bx=Uy(),wx="modulepreload",_x=function(t){return"/"+t},$f={},Ix=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=_x(i),i in $f)return;$f[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":wx,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};async function Ex(){(await Ix(()=>import("./webfontloader.b777d690.js").then(e=>e.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Ex();mw(gx).use(bx).mount("#app");
