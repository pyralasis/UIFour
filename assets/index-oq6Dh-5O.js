(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const St=!1;var $r=Array.isArray,or=Array.from,Tt=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,qr=Object.getOwnPropertyDescriptors,Ze=Object.getPrototypeOf;const fe=()=>{};function kt(e){return e()}function Je(e){for(var r=0;r<e.length;r++)e[r]()}const L=2,Kr=4,xe=8,ar=16,$=32,Me=64,Qe=128,ie=256,Ae=512,I=1024,J=2048,ve=4096,W=8192,de=16384,xt=32768,ur=65536,Mt=1<<17,Ot=1<<19,zr=1<<20,Xe=Symbol("$state"),Pt=Symbol("legacy props"),Ft=Symbol("");function Ur(e){return e===this.v}function Br(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function Wr(e){return!Br(e,this.v)}function Rt(e){throw new Error("effect_in_teardown")}function It(){throw new Error("effect_in_unowned_derived")}function At(e){throw new Error("effect_orphan")}function Nt(){throw new Error("effect_update_depth_exceeded")}function Dt(e){throw new Error("props_invalid_value")}function Ct(){throw new Error("state_unsafe_local_read")}function Lt(){throw new Error("state_unsafe_mutation")}let _e=!1;function $t(){_e=!0}function Ne(e){return{f:0,v:e,reactions:null,equals:Ur,version:0}}function fr(e,r=!1){var n;const t=Ne(e);return r||(t.equals=Wr),_e&&E!==null&&E.l!==null&&((n=E.l).s??(n.s=[])).push(t),t}function P(e,r=!1){return qt(fr(e,r))}function qt(e){return b!==null&&b.f&L&&(G===null?nn([e]):G.push(e)),e}function U(e,r){return T(e,C(()=>c(e))),r}function T(e,r){return b!==null&&Ke()&&b.f&(L|ar)&&(G===null||!G.includes(e))&&Lt(),Gr(e,r)}function Gr(e,r){return e.equals(r)||(e.v=r,e.version=ct(),Vr(e,J),Ke()&&m!==null&&m.f&I&&!(m.f&$)&&(F!==null&&F.includes(e)?(q(m,J),Ue(m)):Z===null?sn([e]):Z.push(e))),r}function Vr(e,r){var t=e.reactions;if(t!==null)for(var n=Ke(),i=t.length,s=0;s<i;s++){var l=t[s],f=l.f;f&J||!n&&l===m||(q(l,r),f&(I|ie)&&(f&L?Vr(l,ve):Ue(l)))}}const Kt=1,zt=2,Ut=16,Bt=1,Wt=2,Gt=8,Vt=2;let jt=!1;var Tr,jr,Hr;function Ht(){if(Tr===void 0){Tr=window;var e=Element.prototype,r=Node.prototype;jr=Ye(r,"firstChild").get,Hr=Ye(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function cr(e=""){return document.createTextNode(e)}function Yr(e){return jr.call(e)}function vr(e){return Hr.call(e)}function M(e,r){return Yr(e)}function y(e,r=1,t=!1){let n=e;for(;r--;)n=vr(n);return n}function Yt(e){e.textContent=""}function dr(e){var r=L|J;m===null?r|=ie:m.f|=zr;var t=b!==null&&b.f&L?b:null;const n={children:null,ctx:E,deps:null,equals:Ur,f:r,fn:e,reactions:null,v:null,version:0,parent:t??m};return t!==null&&(t.children??(t.children=[])).push(n),n}function Zr(e){const r=dr(e);return r.equals=Wr,r}function Jr(e){var r=e.children;if(r!==null){e.children=null;for(var t=0;t<r.length;t+=1){var n=r[t];n.f&L?_r(n):se(n)}}}function Zt(e){for(var r=e.parent;r!==null;){if(!(r.f&L))return r;r=r.parent}return null}function Qr(e){var r,t=m;V(Zt(e));try{Jr(e),r=vt(e)}finally{V(t)}return r}function Xr(e){var r=Qr(e),t=(ae||e.f&ie)&&e.deps!==null?ve:I;q(e,t),e.equals(r)||(e.v=r,e.version=ct())}function _r(e){Jr(e),Te(e,0),q(e,de),e.v=e.children=e.deps=e.ctx=e.reactions=null}function et(e){m===null&&b===null&&At(),b!==null&&b.f&ie&&It(),yr&&Rt()}function Jt(e,r){var t=r.last;t===null?r.last=r.first=e:(t.next=e,e.prev=t,r.last=e)}function he(e,r,t,n=!0){var i=(e&Me)!==0,s=m,l={ctx:E,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|J,first:null,fn:r,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var f=ce;try{kr(!0),Oe(l),l.f|=xt}catch(o){throw se(l),o}finally{kr(f)}}else r!==null&&Ue(l);var u=t&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&zr)===0;if(!u&&!i&&n&&(s!==null&&Jt(l,s),b!==null&&b.f&L)){var a=b;(a.children??(a.children=[])).push(l)}return l}function rt(e){const r=he(xe,null,!1);return q(r,I),r.teardown=e,r}function er(e){et();var r=m!==null&&(m.f&$)!==0&&E!==null&&!E.m;if(r){var t=E;(t.e??(t.e=[])).push({fn:e,effect:m,reaction:b})}else{var n=tt(e);return n}}function Qt(e){return et(),qe(e)}function Xt(e){const r=he(Me,e,!0);return()=>{se(r)}}function tt(e){return he(Kr,e,!1)}function B(e,r,t,n){var i=E,s={effect:null,ran:!1};i.l.r1.push(s),s.effect=qe(()=>{e(),!s.ran&&(s.ran=!0,T(i.l.r2,!0),C(r))})}function hr(){var e=E;qe(()=>{if(c(e.l.r2)){for(var r of e.l.r1){var t=r.effect;t.f&I&&q(t,ve),pe(t)&&Oe(t),r.ran=!1}e.l.r2.v=!1}})}function qe(e){return he(xe,e,!0)}function Re(e){return pr(e)}function pr(e,r=0){return he(xe|ar|r,e,!0)}function Se(e,r=!0){return he(xe|$,e,!0,r)}function nt(e){var r=e.teardown;if(r!==null){const t=yr,n=b;xr(!0),Q(null);try{r.call(null)}finally{xr(t),Q(n)}}}function it(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var t=0;t<r.length;t+=1)_r(r[t])}}function st(e,r=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var n=t.next;se(t,r),t=n}}function en(e){for(var r=e.first;r!==null;){var t=r.next;r.f&$||se(r),r=t}}function se(e,r=!0){var t=!1;if((r||e.f&Ot)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var s=n===i?null:vr(n);n.remove(),n=s}t=!0}st(e,r&&!t),it(e),Te(e,0),q(e,de);var l=e.transitions;if(l!==null)for(const u of l)u.stop();nt(e);var f=e.parent;f!==null&&f.first!==null&&lt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function lt(e){var r=e.parent,t=e.prev,n=e.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),r!==null&&(r.first===e&&(r.first=n),r.last===e&&(r.last=t))}function rr(e,r){var t=[];gr(e,t,!0),ot(t,()=>{se(e),r&&r()})}function ot(e,r){var t=e.length;if(t>0){var n=()=>--t||r();for(var i of e)i.out(n)}else r()}function gr(e,r,t){if(!(e.f&W)){if(e.f^=W,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&r.push(l);for(var n=e.first;n!==null;){var i=n.next,s=(n.f&ur)!==0||(n.f&$)!==0;gr(n,r,s?t:!1),n=i}}}function De(e){at(e,!0)}function at(e,r){if(e.f&W){pe(e)&&Oe(e),e.f^=W;for(var t=e.first;t!==null;){var n=t.next,i=(t.f&ur)!==0||(t.f&$)!==0;at(t,i?r:!1),t=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&s.in()}}let tr=!1,nr=[];function rn(){tr=!1;const e=nr.slice();nr=[],Je(e)}function tn(e){tr||(tr=!0,queueMicrotask(rn)),nr.push(e)}function ut(e){throw new Error("lifecycle_outside_component")}let Ie=!1,Ce=!1,Le=null,ce=!1,yr=!1;function kr(e){ce=e}function xr(e){yr=e}let ir=[],Ee=0;let b=null;function Q(e){b=e}let m=null;function V(e){m=e}let G=null;function nn(e){G=e}let F=null,A=0,Z=null;function sn(e){Z=e}let ft=0,ae=!1,E=null;function ct(){return++ft}function Ke(){return!_e||E!==null&&E.l===null}function pe(e){var l,f;var r=e.f;if(r&J)return!0;if(r&ve){var t=e.deps,n=(r&ie)!==0;if(t!==null){var i;if(r&Ae){for(i=0;i<t.length;i++)((l=t[i]).reactions??(l.reactions=[])).push(e);e.f^=Ae}for(i=0;i<t.length;i++){var s=t[i];if(pe(s)&&Xr(s),n&&m!==null&&!ae&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}n||q(e,I)}return!1}function ln(e,r){for(var t=r;t!==null;){if(t.f&Qe)try{t.fn(e);return}catch{t.f^=Qe}t=t.parent}throw Ie=!1,e}function on(e){return(e.f&de)===0&&(e.parent===null||(e.parent.f&Qe)===0)}function ze(e,r,t,n){if(Ie){if(t===null&&(Ie=!1),on(r))throw e;return}t!==null&&(Ie=!0);{ln(e,r);return}}function vt(e){var d;var r=F,t=A,n=Z,i=b,s=ae,l=G,f=E,u=e.f;F=null,A=0,Z=null,b=u&($|Me)?null:e,ae=!ce&&(u&ie)!==0,G=null,E=e.ctx;try{var a=(0,e.fn)(),o=e.deps;if(F!==null){var v;if(Te(e,A),o!==null&&A>0)for(o.length=A+F.length,v=0;v<F.length;v++)o[A+v]=F[v];else e.deps=o=F;if(!ae)for(v=A;v<o.length;v++)((d=o[v]).reactions??(d.reactions=[])).push(e)}else o!==null&&A<o.length&&(Te(e,A),o.length=A);return a}finally{F=r,A=t,Z=n,b=i,ae=s,G=l,E=f}}function an(e,r){let t=r.reactions;if(t!==null){var n=t.indexOf(e);if(n!==-1){var i=t.length-1;i===0?t=r.reactions=null:(t[n]=t[i],t.pop())}}t===null&&r.f&L&&(F===null||!F.includes(r))&&(q(r,ve),r.f&(ie|Ae)||(r.f^=Ae),Te(r,0))}function Te(e,r){var t=e.deps;if(t!==null)for(var n=r;n<t.length;n++)an(e,t[n])}function Oe(e){var r=e.f;if(!(r&de)){q(e,I);var t=m,n=E;m=e;try{r&ar?en(e):st(e),it(e),nt(e);var i=vt(e);e.teardown=typeof i=="function"?i:null,e.version=ft}catch(s){ze(s,e,t,n||e.ctx)}finally{m=t}}}function un(){if(Ee>1e3){Ee=0;try{Nt()}catch(e){if(Le!==null)ze(e,Le,null);else throw e}}Ee++}function fn(e){var r=e.length;if(r!==0){un();var t=ce;ce=!0;try{for(var n=0;n<r;n++){var i=e[n];i.f&I||(i.f^=I);var s=[];dt(i,s),cn(s)}}finally{ce=t}}}function cn(e){var r=e.length;if(r!==0)for(var t=0;t<r;t++){var n=e[t];if(!(n.f&(de|W)))try{pe(n)&&(Oe(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?lt(n):n.fn=null))}catch(i){ze(i,n,null,n.ctx)}}}function vn(){if(Ce=!1,Ee>1001)return;const e=ir;ir=[],fn(e),Ce||(Ee=0,Le=null)}function Ue(e){Ce||(Ce=!0,queueMicrotask(vn)),Le=e;for(var r=e;r.parent!==null;){r=r.parent;var t=r.f;if(t&(Me|$)){if(!(t&I))return;r.f^=I}}ir.push(r)}function dt(e,r){var t=e.first,n=[];e:for(;t!==null;){var i=t.f,s=(i&$)!==0,l=s&&(i&I)!==0,f=t.next;if(!l&&!(i&W))if(i&xe){if(s)t.f^=I;else try{pe(t)&&Oe(t)}catch(v){ze(v,t,null,t.ctx)}var u=t.first;if(u!==null){t=u;continue}}else i&Kr&&n.push(t);if(f===null){let v=t.parent;for(;v!==null;){if(e===v)break e;var a=v.next;if(a!==null){t=a;continue e}v=v.parent}}t=f}for(var o=0;o<n.length;o++)u=n[o],r.push(u),dt(u,r)}function c(e){var o;var r=e.f,t=(r&L)!==0;if(t&&r&de){var n=Qr(e);return _r(e),n}if(b!==null){G!==null&&G.includes(e)&&Ct();var i=b.deps;F===null&&i!==null&&i[A]===e?A++:F===null?F=[e]:F.push(e),Z!==null&&m!==null&&m.f&I&&!(m.f&$)&&Z.includes(e)&&(q(m,J),Ue(m))}else if(t&&e.deps===null)for(var s=e,l=s.parent,f=s;l!==null;)if(l.f&L){var u=l;f=u,l=u.parent}else{var a=l;(o=a.deriveds)!=null&&o.includes(f)||(a.deriveds??(a.deriveds=[])).push(f);break}return t&&(s=e,pe(s)&&Xr(s)),e.v}function C(e){const r=b;try{return b=null,e()}finally{b=r}}const dn=~(J|ve|I);function q(e,r){e.f=e.f&dn|r}function Be(e,r=!1,t){E={p:E,c:null,e:null,m:!1,s:e,x:null,l:null},_e&&!r&&(E.l={s:null,u:null,r1:[],r2:Ne(!1)})}function We(e){const r=E;if(r!==null){const l=r.e;if(l!==null){var t=m,n=b;r.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];V(s.effect),Q(s.reaction),tt(s.fn)}}finally{V(t),Q(n)}}E=r.p,r.m=!0}return{}}function sr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Xe in e)lr(e);else if(!Array.isArray(e))for(let r in e){const t=e[r];typeof t=="object"&&t&&Xe in t&&lr(t)}}}function lr(e,r=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!r.has(e)){r.add(e),e instanceof Date&&e.getTime();for(let n in e)try{lr(e[n],r)}catch{}const t=Ze(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=qr(t);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}let Mr=!1;function _n(){Mr||(Mr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function _t(e){var r=b,t=m;Q(null),V(null);try{return e()}finally{Q(r),V(t)}}function hn(e,r,t,n=t){e.addEventListener(r,()=>_t(t));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),_n()}const pn=new Set,Or=new Set;function gn(e,r,t,n){function i(s){if(n.capture||we.call(r,s),!s.cancelBubble)return _t(()=>t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?tn(()=>{r.addEventListener(e,i,n)}):r.addEventListener(e,i,n),i}function D(e,r,t,n,i){var s={capture:n,passive:i},l=gn(e,r,t,s);(r===document.body||r===window||r===document)&&rt(()=>{r.removeEventListener(e,l,s)})}function we(e){var x;var r=this,t=r.ownerDocument,n=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var u=i.indexOf(f);if(u!==-1&&(r===document||r===window)){e.__root=r;return}var a=i.indexOf(r);if(a===-1)return;u<=a&&(l=u)}if(s=i[l]||e.target,s!==r){Tt(e,"currentTarget",{configurable:!0,get(){return s||t}});var o=b,v=m;Q(null),V(null);try{for(var d,_=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var h=s["__"+n];if(h!==void 0&&!s.disabled)if($r(h)){var[O,...p]=h;O.apply(s,[e,...p])}else h.call(s,e)}catch(K){d?_.push(K):d=K}if(e.cancelBubble||g===r||g===null)break;s=g}if(d){for(let K of _)queueMicrotask(()=>{throw K});throw d}}finally{e.__root=r,delete e.currentTarget,Q(o),V(v)}}}function yn(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function ht(e,r){var t=m;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function N(e,r){var t=(r&Vt)!==0,n,i=!e.startsWith("<!>");return()=>{n===void 0&&(n=yn(i?e:"<!>"+e),n=Yr(n));var s=t?document.importNode(n,!0):n.cloneNode(!0);return ht(s,s),s}}function Pr(e=""){{var r=cr(e+"");return ht(r,r),r}}function R(e,r){e!==null&&e.before(r)}const mn=["touchstart","touchmove"];function wn(e){return mn.includes(e)}function $e(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function bn(e,r){return En(e,r)}const le=new Map;function En(e,{target:r,anchor:t,props:n={},events:i,context:s,intro:l=!0}){Ht();var f=new Set,u=v=>{for(var d=0;d<v.length;d++){var _=v[d];if(!f.has(_)){f.add(_);var g=wn(_);r.addEventListener(_,we,{passive:g});var h=le.get(_);h===void 0?(document.addEventListener(_,we,{passive:g}),le.set(_,1)):le.set(_,h+1)}}};u(or(pn)),Or.add(u);var a=void 0,o=Xt(()=>{var v=t??r.appendChild(cr());return Se(()=>{if(s){Be({});var d=E;d.c=s}i&&(n.$$events=i),a=e(v,n)||{},s&&We()}),()=>{var g;for(var d of f){r.removeEventListener(d,we);var _=le.get(d);--_===0?(document.removeEventListener(d,we),le.delete(d)):le.set(d,_)}Or.delete(u),Fr.delete(a),v!==t&&((g=v.parentNode)==null||g.removeChild(v))}});return Fr.set(a,o),a}let Fr=new WeakMap;function X(e,r,t=!1){var n=e,i=null,s=null,l=null,f=t?ur:0,u=!1;const a=(v,d=!0)=>{u=!0,o(d,v)},o=(v,d)=>{l!==(l=v)&&(l?(i?De(i):d&&(i=Se(()=>d(n))),s&&rr(s,()=>{s=null})):(s?De(s):d&&(s=Se(()=>d(n))),i&&rr(i,()=>{i=null})))};pr(()=>{u=!1,r(a),u||o(null,null)},f)}function Rr(e,r){return r}function Sn(e,r,t,n){for(var i=[],s=r.length,l=0;l<s;l++)gr(r[l].e,i,!0);var f=s>0&&i.length===0&&t!==null;if(f){var u=t.parentNode;Yt(u),u.append(t),n.clear(),Y(e,r[0].prev,r[s-1].next)}ot(i,()=>{for(var a=0;a<s;a++){var o=r[a];f||(n.delete(o.k),Y(e,o.prev,o.next)),se(o.e,!f)}})}function Ir(e,r,t,n,i,s=null){var l=e,f={flags:r,items:new Map,first:null};{var u=e;l=u.appendChild(cr())}var a=null,o=!1;pr(()=>{var v=t(),d=$r(v)?v:v==null?[]:or(v),_=d.length;if(!(o&&_===0)){o=_===0;{var g=b;Tn(d,f,l,i,r,(g.f&W)!==0,n)}s!==null&&(_===0?a?De(a):a=Se(()=>s(l)):a!==null&&rr(a,()=>{a=null})),t()}})}function Tn(e,r,t,n,i,s,l){var f=e.length,u=r.items,a=r.first,o=a,v,d=null,_=[],g=[],h,O,p,x;for(x=0;x<f;x+=1){if(h=e[x],O=l(h,x),p=u.get(O),p===void 0){var K=o?o.e.nodes_start:t;d=xn(K,r,d,d===null?r.first:d.next,h,O,x,n,i),u.set(O,d),_=[],g=[],o=d.next;continue}if(kn(p,h,x),p.e.f&W&&De(p.e),p!==o){if(v!==void 0&&v.has(p)){if(_.length<g.length){var j=g[0],S;d=j.prev;var z=_[0],ge=_[_.length-1];for(S=0;S<_.length;S+=1)Ar(_[S],j,t);for(S=0;S<g.length;S+=1)v.delete(g[S]);Y(r,z.prev,ge.next),Y(r,d,z),Y(r,ge,j),o=j,d=ge,x-=1,_=[],g=[]}else v.delete(p),Ar(p,o,t),Y(r,p.prev,p.next),Y(r,p,d===null?r.first:d.next),Y(r,d,p),d=p;continue}for(_=[],g=[];o!==null&&o.k!==O;)(s||!(o.e.f&W))&&(v??(v=new Set)).add(o),g.push(o),o=o.next;if(o===null)continue;p=o}_.push(p),d=p,o=p.next}if(o!==null||v!==void 0){for(var ye=v===void 0?[]:or(v);o!==null;)(s||!(o.e.f&W))&&ye.push(o),o=o.next;var Pe=ye.length;if(Pe>0){var Ve=f===0?t:null;Sn(r,ye,Ve,u)}}m.first=r.first&&r.first.e,m.last=d&&d.e}function kn(e,r,t,n){Gr(e.v,r),e.i=t}function xn(e,r,t,n,i,s,l,f,u){var a=(u&Kt)!==0,o=(u&Ut)===0,v=a?o?fr(i):Ne(i):i,d=u&zt?Ne(l):l,_={i:d,v,k:s,a:null,e:null,prev:t,next:n};try{return _.e=Se(()=>f(e,v,d),jt),_.e.prev=t&&t.e,_.e.next=n&&n.e,t===null?r.first=_:(t.next=_,t.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function Ar(e,r,t){for(var n=e.next?e.next.e.nodes_start:t,i=r?r.e.nodes_start:t,s=e.e.nodes_start;s!==n;){var l=vr(s);i.before(s),s=l}}function Y(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function ke(e,r,t,n){var i=e.__attributes??(e.__attributes={});i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ft]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Mn(e).includes(r)?e[r]=t:e.setAttribute(r,t))}var Nr=new Map;function Mn(e){var r=Nr.get(e.nodeName);if(r)return r;Nr.set(e.nodeName,r=[]);for(var t,n=Ze(e),i=Element.prototype;i!==n;){t=qr(n);for(var s in t)t[s].set&&r.push(s);n=Ze(n)}return r}function ue(e,r,t=r){var n=Ke();hn(e,"input",i=>{var s=i?e.defaultValue:e.value;s=je(e)?He(s):s,t(s),n&&s!==(s=r())&&(e.value=s??"")}),C(r)==null&&e.value&&t(je(e)?He(e.value):e.value),qe(()=>{var i=r();je(e)&&i===He(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function je(e){var r=e.type;return r==="number"||r==="range"}function He(e){return e===""?null:+e}function mr(e=!1){const r=E,t=r.l.u;if(!t)return;let n=()=>sr(r.s);if(e){let i=0,s={};const l=dr(()=>{let f=!1;const u=r.s;for(const a in u)u[a]!==s[a]&&(s[a]=u[a],f=!0);return f&&i++,i});n=()=>c(l)}t.b.length&&Qt(()=>{Dr(r,n),Je(t.b)}),er(()=>{const i=C(()=>t.m.map(kt));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&er(()=>{Dr(r,n),Je(t.a)})}function Dr(e,r){if(e.l.s)for(const t of e.l.s)c(t);r()}function On(e,r,t){if(e==null)return r(void 0),fe;const n=C(()=>e.subscribe(r,t));return n.unsubscribe?()=>n.unsubscribe():n}let Fe=!1;function te(e,r,t){const n=t[r]??(t[r]={store:null,source:fr(void 0),unsubscribe:fe});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=fe;else{var i=!0;n.unsubscribe=On(e,s=>{i?n.source.v=s:T(n.source,s)}),i=!1}return c(n.source)}function me(e,r){return e.set(r),r}function Ge(){const e={};return rt(()=>{for(var r in e)e[r].unsubscribe()}),e}function Cr(e,r,t){return e.set(t),r}function Pn(e){var r=Fe;try{return Fe=!1,[e(),Fe]}finally{Fe=r}}function Fn(e){for(var r=m,t=m;r!==null&&!(r.f&($|Me));)r=r.parent;try{return V(r),e()}finally{V(t)}}function Lr(e,r,t,n){var O;var i=(t&Bt)!==0,s=!_e||(t&Wt)!==0,l=(t&Gt)!==0,f=!1,u;[u,f]=Pn(()=>e[r]);var a=Xe in e||Pt in e,o=((O=Ye(e,r))==null?void 0:O.set)??(a&&l&&r in e?p=>e[r]=p:void 0),v=n,d=!0,_=()=>(d&&(d=!1,v=n),v);u===void 0&&n!==void 0&&(o&&s&&Dt(),u=_(),o&&o(u));var g;if(s)g=()=>{var p=e[r];return p===void 0?_():(d=!0,p)};else{var h=Fn(()=>(i?dr:Zr)(()=>e[r]));h.f|=Mt,g=()=>{var p=c(h);return p!==void 0&&(v=void 0),p===void 0?v:p}}return g}function pt(e){E===null&&ut(),_e&&E.l!==null?In(E).m.push(e):er(()=>{const r=C(e);if(typeof r=="function")return r})}function Rn(e){E===null&&ut(),pt(()=>()=>C(e))}function In(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}const An="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(An);$t();const oe=[];function wr(e,r=fe){let t=null;const n=new Set;function i(f){if(Br(e,f)&&(e=f,t)){const u=!oe.length;for(const a of n)a[1](),oe.push(a,e);if(u){for(let a=0;a<oe.length;a+=2)oe[a][0](oe[a+1]);oe.length=0}}}function s(f){i(f(e))}function l(f,u=fe){const a=[f,u];return n.add(a),n.size===1&&(t=r(i,s)||fe),f(e),()=>{n.delete(a),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:l}}const w={EMPTY:0,FOREST:1,FIRE:2,WEAK_SMOKE:3,MEDIUM_SMOKE:4,STRONG_SMOKE:5,CITY:6};class Nn{constructor(r,t){this.x=r,this.y=t,this.tileType=w.EMPTY,this.smokeProgress=0,this.fireProgress=0}isFire(){return this.tileType==w.FIRE}isSmoke(){return this.tileType==w.WEAK_SMOKE||this.tileType==w.MEDIUM_SMOKE||this.tileType==w.STRONG_SMOKE||this.smokeProgress>100}isWeakSmoke(){return this.tileType==w.WEAK_SMOKE}isMediumSmoke(){return this.tileType==w.MEDIUM_SMOKE}isStrongSmoke(){return this.tileType==w.STRONG_SMOKE}isCity(){return this.tileType==w.CITY}isForest(){return this.tileType==w.FOREST}isEmpty(){return this.tileType==w.EMPTY}}const ee=25,re=25;class Dn{constructor(){this.grid=Array.from({length:re},()=>new Array(ee));for(let r=0;r<re;r++)for(let t=0;t<ee;t++)this.grid[r][t]=new Nn(t,r);this.timeStep=1e3,this.fireSpreadRate=5,this.smokeSpreadRate=10}changeTimeStep(r){this.timeStep=r}checkNeighboursFire(r,t){let n=0;return t-1>=0&&this.grid[t-1][r]&&this.grid[t-1][r].isFire()&&(n+=this.fireSpreadRate),t+1<re&&this.grid[t+1][r]&&this.grid[t+1][r].isFire()&&(n+=this.fireSpreadRate),r-1>=0&&this.grid[t][r-1]&&this.grid[t][r-1].isFire()&&(n+=this.fireSpreadRate),r+1<ee&&this.grid[t][r+1]&&this.grid[t][r+1].isFire()&&(n+=this.fireSpreadRate),n}checkNeighboursSmoke(r,t){let n=0;return t-1>=0&&this.grid[t-1][r]&&(this.grid[t-1][r].isFire()||this.grid[t-1][r].isSmoke())?n+=this.smokeSpreadRate:t+1<re&&this.grid[t+1][r]&&(this.grid[t+1][r].isFire()||this.grid[t+1][r].isSmoke())?n+=this.smokeSpreadRate:r-1>=0&&this.grid[t][r-1]&&(this.grid[t][r-1].isFire()||this.grid[t][r-1].isSmoke())?n+=this.smokeSpreadRate:r+1<ee&&this.grid[t][r+1]&&(this.grid[t][r+1].isFire()||this.grid[t][r+1].isSmoke())&&(n+=this.smokeSpreadRate),n}updateGrid(){let r=this.grid;for(let t=0;t<re;t++)for(let n=0;n<ee;n++){let i=r[t][n];i.isForest()&&(i.fireProgress+=this.checkNeighboursFire(n,t),i.fireProgress>=100&&(i.tileType=w.FIRE)),i.isEmpty&&(i.smokeProgress<300&&(i.smokeProgress+=this.checkNeighboursSmoke(n,t)),i.isEmpty()&&i.smokeProgress>=100&&(i.tileType=w.WEAK_SMOKE),i.isWeakSmoke()&&!i.isCity()&&i.smokeProgress>=200&&(i.tileType=w.MEDIUM_SMOKE),i.isMediumSmoke()&&i.smokeProgress>=300&&(i.tileType=w.STRONG_SMOKE))}this.grid=r}}const ne=wr(new Dn),gt=wr(w.EMPTY),be=wr(0);var Cn=N('<div class="tile svelte-1fxbn58"><!> <!></div>');function Ln(e,r){Be(r,!1);const t=Ge(),n=()=>te(ne,"$gridMap",t),i=()=>te(gt,"$selectedTileType",t),s=()=>te(be,"$display",t),l=P(),f=P(),u=P();let a=Lr(r,"coordsX",8),o=Lr(r,"coordsY",8);function v(S){switch(S){case w.EMPTY:return"white";case w.FOREST:return"green";case w.FIRE:return"orange";case w.WEAK_SMOKE:return"lightgrey";case w.MEDIUM_SMOKE:return"darkgrey";case w.STRONG_SMOKE:return"grey";case w.CITY:return"blue"}}let d=P(!1);const _=S=>{S.button===0&&T(d,!0)},g=S=>{S.button===0&&T(d,!1)};pt(()=>{window.addEventListener("mousedown",_),window.addEventListener("mouseup",g)}),Rn(()=>{window.removeEventListener("mousedown",_),window.removeEventListener("mouseup",g)}),console.log(c(u)),B(()=>n(),()=>{T(l,n().grid)}),B(()=>(n(),sr(o()),sr(a())),()=>{T(f,n().grid[o()][a()])}),B(()=>c(f),()=>{T(u,c(f).tileType)}),hr(),mr();var h=Cn();const O=Zr(()=>`background-color: ${v(c(u))??""};`);var p=M(h);{var x=S=>{var z=Pr();Re(()=>$e(z,Math.floor(c(f).fireProgress/10))),R(S,z)};X(p,S=>{s()==1&&S(x)})}var K=y(p,2);{var j=S=>{var z=Pr();Re(()=>$e(z,Math.floor(c(f).smokeProgress/10))),R(S,z)};X(K,S=>{s()==2&&S(j)})}Re(()=>ke(h,"style",c(O))),D("mousedown",h,()=>{T(u,i()),U(l,c(l)[o()][a()].tileType=c(u)),c(u)==w.FIRE&&(U(l,c(l)[o()][a()].fireProgress=100),U(l,c(l)[o()][a()].smokeProgress=300)),c(u)==w.EMPTY&&(U(l,c(l)[o()][a()].fireProgress=0),U(l,c(l)[o()][a()].smokeProgress=0)),Cr(ne,C(n).grid=c(l),C(n))}),D("mouseenter",h,()=>{c(d)&&(T(u,i()),U(l,c(l)[o()][a()].tileType=c(u)),c(u)==w.FIRE&&(U(l,c(l)[o()][a()].fireProgress=100),U(l,c(l)[o()][a()].smokeProgress=300)),c(u)==w.EMPTY&&(U(l,c(l)[o()][a()].fireProgress=0),U(l,c(l)[o()][a()].smokeProgress=0)),Cr(ne,C(n).grid=c(l),C(n)))}),D("drag",h,()=>!1),R(e,h),We()}var $n=N('<div class="row svelte-r65ubh"></div>'),qn=N('<div class="grid-container svelte-r65ubh"></div>');function Kn(e){const r=Ge();let i=te(ne,"$gridMap",r).grid;var s=qn();Ir(s,5,()=>i,Rr,(l,f)=>{var u=$n();Ir(u,5,()=>c(f),Rr,(a,o)=>{Ln(a,{get coordsX(){return c(o).x},get coordsY(){return c(o).y}})}),D("drag",u,()=>!1),R(l,u)}),D("drag",s,()=>!1),R(e,s)}var zn=N('<div class="none svelte-yuzi7o">There are no immediate wildfire alerts.</div>'),Un=N(`<div class="medium svelte-yuzi7o">There is fire in a neighboring area. Strongly consider
                evacuating!</div>`),Bn=N(`<div class="low svelte-yuzi7o">There is smoke in a neighboring area. Strongly consider staying
                indoors or evacuating! Keep an eye out for fire spreading to a
                neighboring area!</div>`),Wn=N('<div class="high svelte-yuzi7o">There is fire in the area. EVACUATE NOW!</div>'),Gn=N(`<div class="medium svelte-yuzi7o">There is smoke in the area. Strongly consider staying indoors or
                evacuating! Keep an eye out for fire spreading to a neighboring
                area or your current area!</div>`),Vn=N(`<div class="info-container svelte-yuzi7o"><div class="description-container svelte-yuzi7o"><h1 class="svelte-yuzi7o">Wildfire Tracker</h1> <p class="description svelte-yuzi7o">This is a tracker used to inform users about approaching wildfires.
            It uses a Simulated Wildfire Map to show how wildfires and wildfire
            smoke can spread. It displays relevant information for your location
            in regard to any nearby fire or smoke. Select a tile type to draw on
            the map. The start button will begin the simulation. Fire spreads to
            trees. Smoke spreads to every tile. The display button toggles
            between none, fire, and smoke levels.</p></div> <div class="address-container svelte-yuzi7o"><div id="address-entry"><h2 class="svelte-yuzi7o">Enter Your Address</h2> <div class="address-input"><label for="x-addr">X:</label> <input id="x-addr" type="number" min="0"></div> <div class="address-input"><label for="y-addr">Y:</label> <input id="y-addr" type="number" min="0"></div></div> <div id="address-stats"><h2 class="svelte-yuzi7o">Address Statistics</h2> <p class="svelte-yuzi7o"> </p> <p class="svelte-yuzi7o"> </p></div></div> <div class="alerts-container svelte-yuzi7o"><h2 class="svelte-yuzi7o">Safety Alerts</h2> <!> <!> <!> <!> <!></div></div>`);function jn(e,r){Be(r,!1);const t=Ge(),n=()=>te(ne,"$gridMap",t),i=P(),s=P(),l=P(),f=P(),u=P(),a=P();let o=P(0),v=P(0);B(()=>(n(),c(v),c(o)),()=>{T(i,n().grid[c(v)][c(o)])}),B(()=>(n(),c(o),c(v)),()=>{T(s,n().checkNeighboursFire(c(o),c(v))>0)}),B(()=>(n(),c(o),c(v)),()=>{T(l,n().checkNeighboursSmoke(c(o),c(v))>0)}),B(()=>c(i),()=>{T(f,c(i).isFire())}),B(()=>c(i),()=>{T(u,c(i).isSmoke())}),B(()=>(c(f),c(u),c(s),c(l)),()=>{T(a,!c(f)&&!c(u)&&!c(s)&&!c(l))}),hr(),mr();var d=Vn(),_=y(M(d),2),g=M(_),h=y(M(g),2),O=y(M(h),2);ke(O,"max",ee-1);var p=y(h,2),x=y(M(p),2);ke(x,"max",re-1);var K=y(g,2),j=y(M(K),2),S=M(j),z=y(j,2),ge=M(z),ye=y(_,2),Pe=y(M(ye),2);{var Ve=k=>{var H=zn();R(k,H)};X(Pe,k=>{c(a)&&k(Ve)})}var br=y(Pe,2);{var yt=k=>{var H=Un();R(k,H)};X(br,k=>{c(s)&&k(yt)})}var Er=y(br,2);{var mt=k=>{var H=Bn();R(k,H)};X(Er,k=>{c(l)&&k(mt)})}var Sr=y(Er,2);{var wt=k=>{var H=Wn();R(k,H)};X(Sr,k=>{c(f)&&k(wt)})}var bt=y(Sr,2);{var Et=k=>{var H=Gn();R(k,H)};X(bt,k=>{c(u)&&k(Et)})}Re(()=>{$e(S,`Fire Level: ${c(i).fireProgress??""}`),$e(ge,`Smoke Level: ${c(i).smokeProgress??""}`)}),ue(O,()=>c(o),k=>T(o,k)),ue(x,()=>c(v),k=>T(v,k)),R(e,d),We()}var Hn=N('<div class="legend-container svelte-gnrhem"><div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="white"></rect></svg> <div>Empty</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="orange"></rect></svg> <div>Fire</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="green"></rect></svg> <div>Forest</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="lightgrey"></rect></svg> <div>Weak Smoke</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="darkgrey"></rect></svg> <div>Medium Smoke</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="grey"></rect></svg> <div>Heavy Smoke</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="blue"></rect></svg> <div>City</div></div></div>');function Yn(e){var r=Hn();R(e,r)}var Zn=N(`<div class="signup-container svelte-nr8y1s"><div class="left"><h1 class="svelte-nr8y1s">Sign Up For Email and Text Notifications</h1> <p class="svelte-nr8y1s">Want emergency alerts? Enter your area, phone number and email to
            stay up to date!</p></div> <div class="right svelte-nr8y1s"><div class="signup-input svelte-nr8y1s"><label for="x-addr" class="svelte-nr8y1s">X:</label> <input id="x-addr" type="number" min="0" class="svelte-nr8y1s"></div> <div class="signup-input svelte-nr8y1s"><label for="y-addr" class="svelte-nr8y1s">Y:</label> <input id="y-addr" type="number" min="0" class="svelte-nr8y1s"></div> <div class="signup-input svelte-nr8y1s"><label for="email" class="svelte-nr8y1s">Email:</label> <input id="email" type="text" class="svelte-nr8y1s"></div> <div class="signup-input svelte-nr8y1s"><label for="phone" class="svelte-nr8y1s">SMS:</label> <input id="phone" type="text" class="svelte-nr8y1s"></div> <button class="svelte-nr8y1s">Submit</button></div></div>`);function Jn(e){let r=P(0),t=P(0),n=P(""),i=P("");var s=Zn(),l=y(M(s),2),f=M(l),u=y(M(f),2);ke(u,"max",ee-1);var a=y(f,2),o=y(M(a),2);ke(o,"max",re-1);var v=y(a,2),d=y(M(v),2),_=y(v,2),g=y(M(_),2);ue(u,()=>c(r),h=>T(r,h)),ue(o,()=>c(t),h=>T(t,h)),ue(d,()=>c(n),h=>T(n,h)),ue(g,()=>c(i),h=>T(i,h)),R(e,s)}var Qn=N('<div class="selector-container svelte-15p2xdj"><button class="svelte-15p2xdj">Start</button> <button class="svelte-15p2xdj">Stop</button> <div style="border-left:1px solid #000;height:40px"></div> <button class="svelte-15p2xdj">Empty</button> <button class="svelte-15p2xdj">Forest</button> <button class="svelte-15p2xdj">Fire</button> <button class="svelte-15p2xdj">City</button> <div style="border-left:1px solid #000;height:40px"></div> <button class="svelte-15p2xdj">Display</button></div>');function Xn(e,r){Be(r,!1);const t=Ge(),n=()=>te(ne,"$gridMap",t),i=()=>te(be,"$display",t),s=P(),l=x=>{me(gt,x)};let f=n();f.grid;let u=()=>{f.updateGrid(),me(ne,f),console.log(f)},a=P();B(()=>n(),()=>{T(s,n().grid[0][0].smokeProgress)}),hr(),mr();var o=Qn(),v=M(o),d=y(v,2),_=y(d,4),g=y(_,2),h=y(g,2),O=y(h,2),p=y(O,4);D("click",v,()=>T(a,setInterval(u,n().timeStep))),D("click",d,()=>clearInterval(c(a))),D("click",_,()=>l(w.EMPTY)),D("click",g,()=>l(w.FOREST)),D("click",h,()=>l(w.FIRE)),D("click",O,()=>l(w.CITY)),D("click",p,()=>{console.log(i());let x=i();x==0&&me(be,1),x==1&&me(be,2),x==2&&me(be,0)}),R(e,o),We()}var ei=N('<main class="svelte-pety94"><div class="top svelte-pety94"><div class="left svelte-pety94"><!></div> <div class="right svelte-pety94"><h1 id="map-title" class="svelte-pety94">Map</h1> <!> <!> <!> <div>One square represents one square mile of land</div></div> <div class="bottom svelte-pety94"><!></div></div></main>');function ri(e){var r=ei(),t=M(r),n=M(t),i=M(n);jn(i,{});var s=y(n,2),l=y(M(s),2);Kn(l);var f=y(l,2);Xn(f,{});var u=y(f,2);Yn(u);var a=y(s,2),o=M(a);Jn(o),R(e,r)}bn(ri,{target:document.getElementById("app")});
