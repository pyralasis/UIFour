(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const bt=!1;var Lr=Array.isArray,or=Array.from,Et=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,$r=Object.getOwnPropertyDescriptors,Ze=Object.getPrototypeOf;const ce=()=>{};function St(e){return e()}function Je(e){for(var r=0;r<e.length;r++)e[r]()}const L=2,qr=4,xe=8,ar=16,$=32,Me=64,Qe=128,ie=256,Ae=512,I=1024,J=2048,de=4096,G=8192,_e=16384,Tt=32768,ur=65536,kt=1<<17,xt=1<<19,Kr=1<<20,Xe=Symbol("$state"),Mt=Symbol("legacy props"),Ot=Symbol("");function Ur(e){return e===this.v}function Br(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function Wr(e){return!Br(e,this.v)}function Pt(e){throw new Error("effect_in_teardown")}function Ft(){throw new Error("effect_in_unowned_derived")}function Rt(e){throw new Error("effect_orphan")}function It(){throw new Error("effect_update_depth_exceeded")}function At(e){throw new Error("props_invalid_value")}function Nt(){throw new Error("state_unsafe_local_read")}function Dt(){throw new Error("state_unsafe_mutation")}let he=!1;function Ct(){he=!0}function Ne(e){return{f:0,v:e,reactions:null,equals:Ur,version:0}}function fr(e,r=!1){var n;const t=Ne(e);return r||(t.equals=Wr),he&&E!==null&&E.l!==null&&((n=E.l).s??(n.s=[])).push(t),t}function P(e,r=!1){return Lt(fr(e,r))}function Lt(e){return b!==null&&b.f&L&&(V===null?rn([e]):V.push(e)),e}function B(e,r){return T(e,C(()=>c(e))),r}function T(e,r){return b!==null&&Ke()&&b.f&(L|ar)&&(V===null||!V.includes(e))&&Dt(),Gr(e,r)}function Gr(e,r){return e.equals(r)||(e.v=r,e.version=ft(),Vr(e,J),Ke()&&m!==null&&m.f&I&&!(m.f&$)&&(F!==null&&F.includes(e)?(q(m,J),Be(m)):Z===null?tn([e]):Z.push(e))),r}function Vr(e,r){var t=e.reactions;if(t!==null)for(var n=Ke(),i=t.length,s=0;s<i;s++){var l=t[s],f=l.f;f&J||!n&&l===m||(q(l,r),f&(I|ie)&&(f&L?Vr(l,de):Be(l)))}}const $t=1,qt=2,Kt=16,Ut=1,Bt=2,Wt=8,Gt=2;let Vt=!1;var Sr,jr,Hr;function jt(){if(Sr===void 0){Sr=window;var e=Element.prototype,r=Node.prototype;jr=ze(r,"firstChild").get,Hr=ze(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function cr(e=""){return document.createTextNode(e)}function Yr(e){return jr.call(e)}function vr(e){return Hr.call(e)}function M(e,r){return Yr(e)}function g(e,r=1,t=!1){let n=e;for(;r--;)n=vr(n);return n}function Ht(e){e.textContent=""}function dr(e){var r=L|J;m===null?r|=ie:m.f|=Kr;var t=b!==null&&b.f&L?b:null;const n={children:null,ctx:E,deps:null,equals:Ur,f:r,fn:e,reactions:null,v:null,version:0,parent:t??m};return t!==null&&(t.children??(t.children=[])).push(n),n}function zr(e){const r=dr(e);return r.equals=Wr,r}function Zr(e){var r=e.children;if(r!==null){e.children=null;for(var t=0;t<r.length;t+=1){var n=r[t];n.f&L?_r(n):se(n)}}}function Yt(e){for(var r=e.parent;r!==null;){if(!(r.f&L))return r;r=r.parent}return null}function Jr(e){var r,t=m;j(Yt(e));try{Zr(e),r=ct(e)}finally{j(t)}return r}function Qr(e){var r=Jr(e),t=(ue||e.f&ie)&&e.deps!==null?de:I;q(e,t),e.equals(r)||(e.v=r,e.version=ft())}function _r(e){Zr(e),Te(e,0),q(e,_e),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Xr(e){m===null&&b===null&&Rt(),b!==null&&b.f&ie&&Ft(),mr&&Pt()}function zt(e,r){var t=r.last;t===null?r.last=r.first=e:(t.next=e,e.prev=t,r.last=e)}function pe(e,r,t,n=!0){var i=(e&Me)!==0,s=m,l={ctx:E,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|J,first:null,fn:r,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var f=ve;try{Tr(!0),Oe(l),l.f|=Tt}catch(o){throw se(l),o}finally{Tr(f)}}else r!==null&&Be(l);var u=t&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Kr)===0;if(!u&&!i&&n&&(s!==null&&zt(l,s),b!==null&&b.f&L)){var a=b;(a.children??(a.children=[])).push(l)}return l}function et(e){const r=pe(xe,null,!1);return q(r,I),r.teardown=e,r}function er(e){Xr();var r=m!==null&&(m.f&$)!==0&&E!==null&&!E.m;if(r){var t=E;(t.e??(t.e=[])).push({fn:e,effect:m,reaction:b})}else{var n=rt(e);return n}}function Zt(e){return Xr(),qe(e)}function Jt(e){const r=pe(Me,e,!0);return()=>{se(r)}}function rt(e){return pe(qr,e,!1)}function W(e,r,t,n){var i=E,s={effect:null,ran:!1};i.l.r1.push(s),s.effect=qe(()=>{e(),!s.ran&&(s.ran=!0,T(i.l.r2,!0),C(r))})}function hr(){var e=E;qe(()=>{if(c(e.l.r2)){for(var r of e.l.r1){var t=r.effect;t.f&I&&q(t,de),ge(t)&&Oe(t),r.ran=!1}e.l.r2.v=!1}})}function qe(e){return pe(xe,e,!0)}function Re(e){return pr(e)}function pr(e,r=0){return pe(xe|ar|r,e,!0)}function Se(e,r=!0){return pe(xe|$,e,!0,r)}function tt(e){var r=e.teardown;if(r!==null){const t=mr,n=b;kr(!0),Q(null);try{r.call(null)}finally{kr(t),Q(n)}}}function nt(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var t=0;t<r.length;t+=1)_r(r[t])}}function it(e,r=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var n=t.next;se(t,r),t=n}}function Qt(e){for(var r=e.first;r!==null;){var t=r.next;r.f&$||se(r),r=t}}function se(e,r=!0){var t=!1;if((r||e.f&xt)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var s=n===i?null:vr(n);n.remove(),n=s}t=!0}it(e,r&&!t),nt(e),Te(e,0),q(e,_e);var l=e.transitions;if(l!==null)for(const u of l)u.stop();tt(e);var f=e.parent;f!==null&&f.first!==null&&st(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function st(e){var r=e.parent,t=e.prev,n=e.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),r!==null&&(r.first===e&&(r.first=n),r.last===e&&(r.last=t))}function rr(e,r){var t=[];gr(e,t,!0),lt(t,()=>{se(e),r&&r()})}function lt(e,r){var t=e.length;if(t>0){var n=()=>--t||r();for(var i of e)i.out(n)}else r()}function gr(e,r,t){if(!(e.f&G)){if(e.f^=G,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&r.push(l);for(var n=e.first;n!==null;){var i=n.next,s=(n.f&ur)!==0||(n.f&$)!==0;gr(n,r,s?t:!1),n=i}}}function De(e){ot(e,!0)}function ot(e,r){if(e.f&G){ge(e)&&Oe(e),e.f^=G;for(var t=e.first;t!==null;){var n=t.next,i=(t.f&ur)!==0||(t.f&$)!==0;ot(t,i?r:!1),t=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&s.in()}}let tr=!1,nr=[];function Xt(){tr=!1;const e=nr.slice();nr=[],Je(e)}function en(e){tr||(tr=!0,queueMicrotask(Xt)),nr.push(e)}function at(e){throw new Error("lifecycle_outside_component")}let Ie=!1,Ce=!1,Le=null,ve=!1,mr=!1;function Tr(e){ve=e}function kr(e){mr=e}let ir=[],Ee=0;let b=null;function Q(e){b=e}let m=null;function j(e){m=e}let V=null;function rn(e){V=e}let F=null,A=0,Z=null;function tn(e){Z=e}let ut=0,ue=!1,E=null;function ft(){return++ut}function Ke(){return!he||E!==null&&E.l===null}function ge(e){var l,f;var r=e.f;if(r&J)return!0;if(r&de){var t=e.deps,n=(r&ie)!==0;if(t!==null){var i;if(r&Ae){for(i=0;i<t.length;i++)((l=t[i]).reactions??(l.reactions=[])).push(e);e.f^=Ae}for(i=0;i<t.length;i++){var s=t[i];if(ge(s)&&Qr(s),n&&m!==null&&!ue&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}n||q(e,I)}return!1}function nn(e,r){for(var t=r;t!==null;){if(t.f&Qe)try{t.fn(e);return}catch{t.f^=Qe}t=t.parent}throw Ie=!1,e}function sn(e){return(e.f&_e)===0&&(e.parent===null||(e.parent.f&Qe)===0)}function Ue(e,r,t,n){if(Ie){if(t===null&&(Ie=!1),sn(r))throw e;return}t!==null&&(Ie=!0);{nn(e,r);return}}function ct(e){var d;var r=F,t=A,n=Z,i=b,s=ue,l=V,f=E,u=e.f;F=null,A=0,Z=null,b=u&($|Me)?null:e,ue=!ve&&(u&ie)!==0,V=null,E=e.ctx;try{var a=(0,e.fn)(),o=e.deps;if(F!==null){var v;if(Te(e,A),o!==null&&A>0)for(o.length=A+F.length,v=0;v<F.length;v++)o[A+v]=F[v];else e.deps=o=F;if(!ue)for(v=A;v<o.length;v++)((d=o[v]).reactions??(d.reactions=[])).push(e)}else o!==null&&A<o.length&&(Te(e,A),o.length=A);return a}finally{F=r,A=t,Z=n,b=i,ue=s,V=l,E=f}}function ln(e,r){let t=r.reactions;if(t!==null){var n=t.indexOf(e);if(n!==-1){var i=t.length-1;i===0?t=r.reactions=null:(t[n]=t[i],t.pop())}}t===null&&r.f&L&&(F===null||!F.includes(r))&&(q(r,de),r.f&(ie|Ae)||(r.f^=Ae),Te(r,0))}function Te(e,r){var t=e.deps;if(t!==null)for(var n=r;n<t.length;n++)ln(e,t[n])}function Oe(e){var r=e.f;if(!(r&_e)){q(e,I);var t=m,n=E;m=e;try{r&ar?Qt(e):it(e),nt(e),tt(e);var i=ct(e);e.teardown=typeof i=="function"?i:null,e.version=ut}catch(s){Ue(s,e,t,n||e.ctx)}finally{m=t}}}function on(){if(Ee>1e3){Ee=0;try{It()}catch(e){if(Le!==null)Ue(e,Le,null);else throw e}}Ee++}function an(e){var r=e.length;if(r!==0){on();var t=ve;ve=!0;try{for(var n=0;n<r;n++){var i=e[n];i.f&I||(i.f^=I);var s=[];vt(i,s),un(s)}}finally{ve=t}}}function un(e){var r=e.length;if(r!==0)for(var t=0;t<r;t++){var n=e[t];if(!(n.f&(_e|G)))try{ge(n)&&(Oe(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?st(n):n.fn=null))}catch(i){Ue(i,n,null,n.ctx)}}}function fn(){if(Ce=!1,Ee>1001)return;const e=ir;ir=[],an(e),Ce||(Ee=0,Le=null)}function Be(e){Ce||(Ce=!0,queueMicrotask(fn)),Le=e;for(var r=e;r.parent!==null;){r=r.parent;var t=r.f;if(t&(Me|$)){if(!(t&I))return;r.f^=I}}ir.push(r)}function vt(e,r){var t=e.first,n=[];e:for(;t!==null;){var i=t.f,s=(i&$)!==0,l=s&&(i&I)!==0,f=t.next;if(!l&&!(i&G))if(i&xe){if(s)t.f^=I;else try{ge(t)&&Oe(t)}catch(v){Ue(v,t,null,t.ctx)}var u=t.first;if(u!==null){t=u;continue}}else i&qr&&n.push(t);if(f===null){let v=t.parent;for(;v!==null;){if(e===v)break e;var a=v.next;if(a!==null){t=a;continue e}v=v.parent}}t=f}for(var o=0;o<n.length;o++)u=n[o],r.push(u),vt(u,r)}function c(e){var o;var r=e.f,t=(r&L)!==0;if(t&&r&_e){var n=Jr(e);return _r(e),n}if(b!==null){V!==null&&V.includes(e)&&Nt();var i=b.deps;F===null&&i!==null&&i[A]===e?A++:F===null?F=[e]:F.push(e),Z!==null&&m!==null&&m.f&I&&!(m.f&$)&&Z.includes(e)&&(q(m,J),Be(m))}else if(t&&e.deps===null)for(var s=e,l=s.parent,f=s;l!==null;)if(l.f&L){var u=l;f=u,l=u.parent}else{var a=l;(o=a.deriveds)!=null&&o.includes(f)||(a.deriveds??(a.deriveds=[])).push(f);break}return t&&(s=e,ge(s)&&Qr(s)),e.v}function C(e){const r=b;try{return b=null,e()}finally{b=r}}const cn=~(J|de|I);function q(e,r){e.f=e.f&cn|r}function We(e,r=!1,t){E={p:E,c:null,e:null,m:!1,s:e,x:null,l:null},he&&!r&&(E.l={s:null,u:null,r1:[],r2:Ne(!1)})}function Ge(e){const r=E;if(r!==null){const l=r.e;if(l!==null){var t=m,n=b;r.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];j(s.effect),Q(s.reaction),rt(s.fn)}}finally{j(t),Q(n)}}E=r.p,r.m=!0}return{}}function sr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Xe in e)lr(e);else if(!Array.isArray(e))for(let r in e){const t=e[r];typeof t=="object"&&t&&Xe in t&&lr(t)}}}function lr(e,r=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!r.has(e)){r.add(e),e instanceof Date&&e.getTime();for(let n in e)try{lr(e[n],r)}catch{}const t=Ze(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=$r(t);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}let xr=!1;function vn(){xr||(xr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function dt(e){var r=b,t=m;Q(null),j(null);try{return e()}finally{Q(r),j(t)}}function dn(e,r,t,n=t){e.addEventListener(r,()=>dt(t));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),vn()}const _n=new Set,Mr=new Set;function hn(e,r,t,n){function i(s){if(n.capture||we.call(r,s),!s.cancelBubble)return dt(()=>t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?en(()=>{r.addEventListener(e,i,n)}):r.addEventListener(e,i,n),i}function D(e,r,t,n,i){var s={capture:n,passive:i},l=hn(e,r,t,s);(r===document.body||r===window||r===document)&&et(()=>{r.removeEventListener(e,l,s)})}function we(e){var x;var r=this,t=r.ownerDocument,n=e.type,i=((x=e.composedPath)==null?void 0:x.call(e))||[],s=i[0]||e.target,l=0,f=e.__root;if(f){var u=i.indexOf(f);if(u!==-1&&(r===document||r===window)){e.__root=r;return}var a=i.indexOf(r);if(a===-1)return;u<=a&&(l=u)}if(s=i[l]||e.target,s!==r){Et(e,"currentTarget",{configurable:!0,get(){return s||t}});var o=b,v=m;Q(null),j(null);try{for(var d,_=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var w=s["__"+n];if(w!==void 0&&!s.disabled)if(Lr(w)){var[O,...p]=w;O.apply(s,[e,...p])}else w.call(s,e)}catch(K){d?_.push(K):d=K}if(e.cancelBubble||h===r||h===null)break;s=h}if(d){for(let K of _)queueMicrotask(()=>{throw K});throw d}}finally{e.__root=r,delete e.currentTarget,Q(o),j(v)}}}function pn(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function _t(e,r){var t=m;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function N(e,r){var t=(r&Gt)!==0,n,i=!e.startsWith("<!>");return()=>{n===void 0&&(n=pn(i?e:"<!>"+e),n=Yr(n));var s=t?document.importNode(n,!0):n.cloneNode(!0);return _t(s,s),s}}function Or(e=""){{var r=cr(e+"");return _t(r,r),r}}function R(e,r){e!==null&&e.before(r)}const gn=["touchstart","touchmove"];function mn(e){return gn.includes(e)}function $e(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function yn(e,r){return wn(e,r)}const oe=new Map;function wn(e,{target:r,anchor:t,props:n={},events:i,context:s,intro:l=!0}){jt();var f=new Set,u=v=>{for(var d=0;d<v.length;d++){var _=v[d];if(!f.has(_)){f.add(_);var h=mn(_);r.addEventListener(_,we,{passive:h});var w=oe.get(_);w===void 0?(document.addEventListener(_,we,{passive:h}),oe.set(_,1)):oe.set(_,w+1)}}};u(or(_n)),Mr.add(u);var a=void 0,o=Jt(()=>{var v=t??r.appendChild(cr());return Se(()=>{if(s){We({});var d=E;d.c=s}i&&(n.$$events=i),a=e(v,n)||{},s&&Ge()}),()=>{var h;for(var d of f){r.removeEventListener(d,we);var _=oe.get(d);--_===0?(document.removeEventListener(d,we),oe.delete(d)):oe.set(d,_)}Mr.delete(u),Pr.delete(a),v!==t&&((h=v.parentNode)==null||h.removeChild(v))}});return Pr.set(a,o),a}let Pr=new WeakMap;function X(e,r,t=!1){var n=e,i=null,s=null,l=null,f=t?ur:0,u=!1;const a=(v,d=!0)=>{u=!0,o(d,v)},o=(v,d)=>{l!==(l=v)&&(l?(i?De(i):d&&(i=Se(()=>d(n))),s&&rr(s,()=>{s=null})):(s?De(s):d&&(s=Se(()=>d(n))),i&&rr(i,()=>{i=null})))};pr(()=>{u=!1,r(a),u||o(null,null)},f)}function Fr(e,r){return r}function bn(e,r,t,n){for(var i=[],s=r.length,l=0;l<s;l++)gr(r[l].e,i,!0);var f=s>0&&i.length===0&&t!==null;if(f){var u=t.parentNode;Ht(u),u.append(t),n.clear(),z(e,r[0].prev,r[s-1].next)}lt(i,()=>{for(var a=0;a<s;a++){var o=r[a];f||(n.delete(o.k),z(e,o.prev,o.next)),se(o.e,!f)}})}function Rr(e,r,t,n,i,s=null){var l=e,f={flags:r,items:new Map,first:null};{var u=e;l=u.appendChild(cr())}var a=null,o=!1;pr(()=>{var v=t(),d=Lr(v)?v:v==null?[]:or(v),_=d.length;if(!(o&&_===0)){o=_===0;{var h=b;En(d,f,l,i,r,(h.f&G)!==0,n)}s!==null&&(_===0?a?De(a):a=Se(()=>s(l)):a!==null&&rr(a,()=>{a=null})),t()}})}function En(e,r,t,n,i,s,l){var f=e.length,u=r.items,a=r.first,o=a,v,d=null,_=[],h=[],w,O,p,x;for(x=0;x<f;x+=1){if(w=e[x],O=l(w,x),p=u.get(O),p===void 0){var K=o?o.e.nodes_start:t;d=Tn(K,r,d,d===null?r.first:d.next,w,O,x,n,i),u.set(O,d),_=[],h=[],o=d.next;continue}if(Sn(p,w,x),p.e.f&G&&De(p.e),p!==o){if(v!==void 0&&v.has(p)){if(_.length<h.length){var Y=h[0],S;d=Y.prev;var U=_[0],le=_[_.length-1];for(S=0;S<_.length;S+=1)Ir(_[S],Y,t);for(S=0;S<h.length;S+=1)v.delete(h[S]);z(r,U.prev,le.next),z(r,d,U),z(r,le,Y),o=Y,d=le,x-=1,_=[],h=[]}else v.delete(p),Ir(p,o,t),z(r,p.prev,p.next),z(r,p,d===null?r.first:d.next),z(r,d,p),d=p;continue}for(_=[],h=[];o!==null&&o.k!==O;)(s||!(o.e.f&G))&&(v??(v=new Set)).add(o),h.push(o),o=o.next;if(o===null)continue;p=o}_.push(p),d=p,o=p.next}if(o!==null||v!==void 0){for(var me=v===void 0?[]:or(v);o!==null;)(s||!(o.e.f&G))&&me.push(o),o=o.next;var Pe=me.length;if(Pe>0){var je=f===0?t:null;bn(r,me,je,u)}}m.first=r.first&&r.first.e,m.last=d&&d.e}function Sn(e,r,t,n){Gr(e.v,r),e.i=t}function Tn(e,r,t,n,i,s,l,f,u){var a=(u&$t)!==0,o=(u&Kt)===0,v=a?o?fr(i):Ne(i):i,d=u&qt?Ne(l):l,_={i:d,v,k:s,a:null,e:null,prev:t,next:n};try{return _.e=Se(()=>f(e,v,d),Vt),_.e.prev=t&&t.e,_.e.next=n&&n.e,t===null?r.first=_:(t.next=_,t.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function Ir(e,r,t){for(var n=e.next?e.next.e.nodes_start:t,i=r?r.e.nodes_start:t,s=e.e.nodes_start;s!==n;){var l=vr(s);i.before(s),s=l}}function z(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function ke(e,r,t,n){var i=e.__attributes??(e.__attributes={});i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Ot]=t),t==null?e.removeAttribute(r):typeof t!="string"&&kn(e).includes(r)?e[r]=t:e.setAttribute(r,t))}var Ar=new Map;function kn(e){var r=Ar.get(e.nodeName);if(r)return r;Ar.set(e.nodeName,r=[]);for(var t,n=Ze(e),i=Element.prototype;i!==n;){t=$r(n);for(var s in t)t[s].set&&r.push(s);n=Ze(n)}return r}function fe(e,r,t=r){var n=Ke();dn(e,"input",i=>{var s=i?e.defaultValue:e.value;s=He(e)?Ye(s):s,t(s),n&&s!==(s=r())&&(e.value=s??"")}),C(r)==null&&e.value&&t(He(e)?Ye(e.value):e.value),qe(()=>{var i=r();He(e)&&i===Ye(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function He(e){var r=e.type;return r==="number"||r==="range"}function Ye(e){return e===""?null:+e}function yr(e=!1){const r=E,t=r.l.u;if(!t)return;let n=()=>sr(r.s);if(e){let i=0,s={};const l=dr(()=>{let f=!1;const u=r.s;for(const a in u)u[a]!==s[a]&&(s[a]=u[a],f=!0);return f&&i++,i});n=()=>c(l)}t.b.length&&Zt(()=>{Nr(r,n),Je(t.b)}),er(()=>{const i=C(()=>t.m.map(St));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&er(()=>{Nr(r,n),Je(t.a)})}function Nr(e,r){if(e.l.s)for(const t of e.l.s)c(t);r()}function xn(e,r,t){if(e==null)return r(void 0),ce;const n=C(()=>e.subscribe(r,t));return n.unsubscribe?()=>n.unsubscribe():n}let Fe=!1;function te(e,r,t){const n=t[r]??(t[r]={store:null,source:fr(void 0),unsubscribe:ce});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=ce;else{var i=!0;n.unsubscribe=xn(e,s=>{i?n.source.v=s:T(n.source,s)}),i=!1}return c(n.source)}function ye(e,r){return e.set(r),r}function Ve(){const e={};return et(()=>{for(var r in e)e[r].unsubscribe()}),e}function Dr(e,r,t){return e.set(t),r}function Mn(e){var r=Fe;try{return Fe=!1,[e(),Fe]}finally{Fe=r}}function On(e){for(var r=m,t=m;r!==null&&!(r.f&($|Me));)r=r.parent;try{return j(r),e()}finally{j(t)}}function Cr(e,r,t,n){var O;var i=(t&Ut)!==0,s=!he||(t&Bt)!==0,l=(t&Wt)!==0,f=!1,u;[u,f]=Mn(()=>e[r]);var a=Xe in e||Mt in e,o=((O=ze(e,r))==null?void 0:O.set)??(a&&l&&r in e?p=>e[r]=p:void 0),v=n,d=!0,_=()=>(d&&(d=!1,v=n),v);u===void 0&&n!==void 0&&(o&&s&&At(),u=_(),o&&o(u));var h;if(s)h=()=>{var p=e[r];return p===void 0?_():(d=!0,p)};else{var w=On(()=>(i?dr:zr)(()=>e[r]));w.f|=kt,h=()=>{var p=c(w);return p!==void 0&&(v=void 0),p===void 0?v:p}}return h}function ht(e){E===null&&at(),he&&E.l!==null?Fn(E).m.push(e):er(()=>{const r=C(e);if(typeof r=="function")return r})}function Pn(e){E===null&&at(),ht(()=>()=>C(e))}function Fn(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}const Rn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Rn);Ct();const ae=[];function wr(e,r=ce){let t=null;const n=new Set;function i(f){if(Br(e,f)&&(e=f,t)){const u=!ae.length;for(const a of n)a[1](),ae.push(a,e);if(u){for(let a=0;a<ae.length;a+=2)ae[a][0](ae[a+1]);ae.length=0}}}function s(f){i(f(e))}function l(f,u=ce){const a=[f,u];return n.add(a),n.size===1&&(t=r(i,s)||ce),f(e),()=>{n.delete(a),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:l}}const y={EMPTY:0,FOREST:1,FIRE:2,WEAK_SMOKE:3,MEDIUM_SMOKE:4,STRONG_SMOKE:5,CITY:6};class In{constructor(r,t){this.x=r,this.y=t,this.tileType=y.EMPTY,this.smokeProgress=0,this.fireProgress=0}isFire(){return this.tileType==y.FIRE}isSmoke(){return this.tileType==y.WEAK_SMOKE||this.tileType==y.MEDIUM_SMOKE||this.tileType==y.STRONG_SMOKE||this.smokeProgress>100}isWeakSmoke(){return this.tileType==y.WEAK_SMOKE}isMediumSmoke(){return this.tileType==y.MEDIUM_SMOKE}isStrongSmoke(){return this.tileType==y.STRONG_SMOKE}isCity(){return this.tileType==y.CITY}isForest(){return this.tileType==y.FOREST}isEmpty(){return this.tileType==y.EMPTY}}const ee=25,re=25;class An{constructor(){this.grid=Array.from({length:re},()=>new Array(ee));for(let r=0;r<re;r++)for(let t=0;t<ee;t++)this.grid[r][t]=new In(t,r);this.timeStep=1e3,this.fireSpreadRate=5,this.smokeSpreadRate=10}changeTimeStep(r){this.timeStep=r}checkNeighboursFire(r,t){let n=0;return t-1>=0&&this.grid[t-1][r]&&this.grid[t-1][r].isFire()&&(n+=this.fireSpreadRate),t+1<re&&this.grid[t+1][r]&&this.grid[t+1][r].isFire()&&(n+=this.fireSpreadRate),r-1>=0&&this.grid[t][r-1]&&this.grid[t][r-1].isFire()&&(n+=this.fireSpreadRate),r+1<ee&&this.grid[t][r+1]&&this.grid[t][r+1].isFire()&&(n+=this.fireSpreadRate),n}checkNeighboursSmoke(r,t){let n=0;return t-1>=0&&this.grid[t-1][r]&&(this.grid[t-1][r].isFire()||this.grid[t-1][r].isSmoke())?n+=this.smokeSpreadRate:t+1<re&&this.grid[t+1][r]&&(this.grid[t+1][r].isFire()||this.grid[t+1][r].isSmoke())?n+=this.smokeSpreadRate:r-1>=0&&this.grid[t][r-1]&&(this.grid[t][r-1].isFire()||this.grid[t][r-1].isSmoke())?n+=this.smokeSpreadRate:r+1<ee&&this.grid[t][r+1]&&(this.grid[t][r+1].isFire()||this.grid[t][r+1].isSmoke())&&(n+=this.smokeSpreadRate),n}updateGrid(){let r=this.grid;for(let t=0;t<re;t++)for(let n=0;n<ee;n++){let i=r[t][n];i.isForest()&&(i.fireProgress+=this.checkNeighboursFire(n,t),i.fireProgress>=100&&(i.tileType=y.FIRE)),i.isEmpty&&(i.smokeProgress<300&&(i.smokeProgress+=this.checkNeighboursSmoke(n,t)),i.isEmpty()&&i.smokeProgress>=100&&(i.tileType=y.WEAK_SMOKE),i.isWeakSmoke()&&!i.isCity()&&i.smokeProgress>=200&&(i.tileType=y.MEDIUM_SMOKE),i.isMediumSmoke()&&i.smokeProgress>=300&&(i.tileType=y.STRONG_SMOKE))}this.grid=r}}const ne=wr(new An),pt=wr(y.EMPTY),be=wr(0);var Nn=N('<div class="tile svelte-1fxbn58"><!> <!></div>');function Dn(e,r){We(r,!1);const t=Ve(),n=()=>te(ne,"$gridMap",t),i=()=>te(pt,"$selectedTileType",t),s=()=>te(be,"$display",t),l=P(),f=P(),u=P();let a=Cr(r,"coordsX",8),o=Cr(r,"coordsY",8);function v(S){switch(S){case y.EMPTY:return"white";case y.FOREST:return"green";case y.FIRE:return"orange";case y.WEAK_SMOKE:return"lightgrey";case y.MEDIUM_SMOKE:return"darkgrey";case y.STRONG_SMOKE:return"grey";case y.CITY:return"blue"}}let d=P(!1);const _=S=>{S.button===0&&T(d,!0)},h=S=>{S.button===0&&T(d,!1)};ht(()=>{window.addEventListener("mousedown",_),window.addEventListener("mouseup",h)}),Pn(()=>{window.removeEventListener("mousedown",_),window.removeEventListener("mouseup",h)}),console.log(c(u)),W(()=>n(),()=>{T(l,n().grid)}),W(()=>(n(),sr(o()),sr(a())),()=>{T(f,n().grid[o()][a()])}),W(()=>c(f),()=>{T(u,c(f).tileType)}),hr(),yr();var w=Nn();const O=zr(()=>`background-color: ${v(c(u))??""};`);var p=M(w);{var x=S=>{var U=Or();Re(()=>$e(U,Math.floor(c(f).fireProgress/10))),R(S,U)};X(p,S=>{s()==1&&S(x)})}var K=g(p,2);{var Y=S=>{var U=Or();Re(()=>$e(U,Math.floor(c(f).smokeProgress/10))),R(S,U)};X(K,S=>{s()==2&&S(Y)})}Re(()=>ke(w,"style",c(O))),D("mousedown",w,()=>{T(u,i()),B(l,c(l)[o()][a()].tileType=c(u)),c(u)==y.FIRE&&(B(l,c(l)[o()][a()].fireProgress=100),B(l,c(l)[o()][a()].smokeProgress=300)),c(u)==y.EMPTY&&(B(l,c(l)[o()][a()].fireProgress=0),B(l,c(l)[o()][a()].smokeProgress=0)),Dr(ne,C(n).grid=c(l),C(n))}),D("mouseenter",w,()=>{c(d)&&(T(u,i()),B(l,c(l)[o()][a()].tileType=c(u)),c(u)==y.FIRE&&(B(l,c(l)[o()][a()].fireProgress=100),B(l,c(l)[o()][a()].smokeProgress=300)),c(u)==y.EMPTY&&(B(l,c(l)[o()][a()].fireProgress=0),B(l,c(l)[o()][a()].smokeProgress=0)),Dr(ne,C(n).grid=c(l),C(n)))}),D("drag",w,()=>!1),R(e,w),Ge()}var Cn=N('<div class="row svelte-r65ubh"></div>'),Ln=N('<div class="grid-container svelte-r65ubh"></div>');function $n(e){const r=Ve();let i=te(ne,"$gridMap",r).grid;var s=Ln();Rr(s,5,()=>i,Fr,(l,f)=>{var u=Cn();Rr(u,5,()=>c(f),Fr,(a,o)=>{Dn(a,{get coordsX(){return c(o).x},get coordsY(){return c(o).y}})}),D("drag",u,()=>!1),R(l,u)}),D("drag",s,()=>!1),R(e,s)}var qn=N('<div class="none svelte-1vc5lhe">There are no immediate wildfire alerts.</div>'),Kn=N(`<div class="medium svelte-1vc5lhe">There is fire in a neighboring area. Strongly consider
                evacuating!</div>`),Un=N(`<div class="low svelte-1vc5lhe">There is smoke in a neighboring area. Strongly consider staying
                indoors or evacuating! Keep an eye out for fire spreading to a
                neighboring area!</div>`),Bn=N('<div class="high svelte-1vc5lhe">There is fire in the area. EVACUATE NOW!</div>'),Wn=N(`<div class="medium svelte-1vc5lhe">There is smoke in the area. Strongly consider staying indoors or
                evacuating! Keep an eye out for fire spreading to a neighboring
                area or your current area!</div>`),Gn=N(`<div class="info-container svelte-1vc5lhe"><div class="description-container svelte-1vc5lhe"><h1 class="svelte-1vc5lhe">Wildfire Tracker</h1> <p class="svelte-1vc5lhe">This is a tracker used to inform users about approaching wildfires.
            It uses a Simulated Wildfire Map to show how wildfires and wildfire
            smoke can spread. It displays relevant information for your location
            in regard to any nearby fire or smoke. Select a tile type to draw on
            the map. The start button will begin the simulation. Fire spreads to
            trees. Smoke spreads to every tile. Smoke spreads from smoke and
            fire tiles. The display button toggles between none, fire, and smoke
            levels.</p></div> <div class="address-container svelte-1vc5lhe"><h2 class="svelte-1vc5lhe">Enter Your Address</h2> <div class="address-input"><label for="x-addr">X:</label> <input id="x-addr" type="number" min="0"></div> <div class="address-input"><label for="y-addr">Y:</label> <input id="y-addr" type="number" min="0"></div> <h2 class="svelte-1vc5lhe">Address Statistics</h2> <p class="svelte-1vc5lhe"> </p> <p class="svelte-1vc5lhe"> </p></div> <div class="alerts-container svelte-1vc5lhe"><h2 class="svelte-1vc5lhe">Safety Alerts</h2> <!> <!> <!> <!> <!></div></div>`);function Vn(e,r){We(r,!1);const t=Ve(),n=()=>te(ne,"$gridMap",t),i=P(),s=P(),l=P(),f=P(),u=P(),a=P();let o=P(0),v=P(0);W(()=>(n(),c(v),c(o)),()=>{T(i,n().grid[c(v)][c(o)])}),W(()=>(n(),c(o),c(v)),()=>{T(s,n().checkNeighboursFire(c(o),c(v))>0)}),W(()=>(n(),c(o),c(v)),()=>{T(l,n().checkNeighboursSmoke(c(o),c(v))>0)}),W(()=>c(i),()=>{T(f,c(i).isFire())}),W(()=>c(i),()=>{T(u,c(i).isSmoke())}),W(()=>(c(f),c(u),c(s),c(l)),()=>{T(a,!c(f)&&!c(u)&&!c(s)&&!c(l))}),hr(),yr();var d=Gn(),_=g(M(d),2),h=g(M(_),2),w=g(M(h),2);ke(w,"max",ee-1);var O=g(h,2),p=g(M(O),2);ke(p,"max",re-1);var x=g(O,4),K=M(x),Y=g(x,2),S=M(Y),U=g(_,2),le=g(M(U),2);{var me=k=>{var H=qn();R(k,H)};X(le,k=>{c(a)&&k(me)})}var Pe=g(le,2);{var je=k=>{var H=Kn();R(k,H)};X(Pe,k=>{c(s)&&k(je)})}var br=g(Pe,2);{var gt=k=>{var H=Un();R(k,H)};X(br,k=>{c(l)&&k(gt)})}var Er=g(br,2);{var mt=k=>{var H=Bn();R(k,H)};X(Er,k=>{c(f)&&k(mt)})}var yt=g(Er,2);{var wt=k=>{var H=Wn();R(k,H)};X(yt,k=>{c(u)&&k(wt)})}Re(()=>{$e(K,`Fire Level: ${c(i).fireProgress??""}`),$e(S,`Smoke Level: ${c(i).smokeProgress??""}`)}),fe(w,()=>c(o),k=>T(o,k)),fe(p,()=>c(v),k=>T(v,k)),R(e,d),Ge()}var jn=N('<div class="legend-container svelte-gnrhem"><div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="white"></rect></svg> <div>Empty</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="orange"></rect></svg> <div>Fire</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="green"></rect></svg> <div>Forest</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="lightgrey"></rect></svg> <div>Weak Smoke</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="darkgrey"></rect></svg> <div>Medium Smoke</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="grey"></rect></svg> <div>Heavy Smoke</div></div> <div class="legend-item svelte-gnrhem"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="svelte-gnrhem"><rect width="10" height="10" x="0" y="0" fill="blue"></rect></svg> <div>City</div></div></div>');function Hn(e){var r=jn();R(e,r)}var Yn=N(`<div class="signup-container"><h1>Sign Up For Email and Text Notifications</h1> <p>Want emergency alerts? Enter your area, phone number and email to stay
        up to date!</p> <div class="signup-input"><label for="x-addr">X:</label> <input id="x-addr" type="number" min="0"></div> <div class="signup-input"><label for="y-addr">Y:</label> <input id="y-addr" type="number" min="0"></div> <div class="signup-input"><label for="email">Email</label> <input id="email" type="text"></div> <div class="signup-input"><label for="phone">SMS</label> <input id="phone" type="text"></div> <button class="svelte-1tzsh1n">Submit</button></div>`);function zn(e){let r=P(0),t=P(0),n=P(""),i=P("");var s=Yn(),l=g(M(s),4),f=g(M(l),2);ke(f,"max",ee-1);var u=g(l,2),a=g(M(u),2);ke(a,"max",re-1);var o=g(u,2),v=g(M(o),2),d=g(o,2),_=g(M(d),2);fe(f,()=>c(r),h=>T(r,h)),fe(a,()=>c(t),h=>T(t,h)),fe(v,()=>c(n),h=>T(n,h)),fe(_,()=>c(i),h=>T(i,h)),R(e,s)}var Zn=N('<div class="selector-container svelte-15p2xdj"><button class="svelte-15p2xdj">Start</button> <button class="svelte-15p2xdj">Stop</button> <div style="border-left:1px solid #000;height:40px"></div> <button class="svelte-15p2xdj">Empty</button> <button class="svelte-15p2xdj">Forest</button> <button class="svelte-15p2xdj">Fire</button> <button class="svelte-15p2xdj">City</button> <div style="border-left:1px solid #000;height:40px"></div> <button class="svelte-15p2xdj">Display</button></div>');function Jn(e,r){We(r,!1);const t=Ve(),n=()=>te(ne,"$gridMap",t),i=()=>te(be,"$display",t),s=P(),l=x=>{ye(pt,x)};let f=n();f.grid;let u=()=>{f.updateGrid(),ye(ne,f),console.log(f)},a=P();W(()=>n(),()=>{T(s,n().grid[0][0].smokeProgress)}),hr(),yr();var o=Zn(),v=M(o),d=g(v,2),_=g(d,4),h=g(_,2),w=g(h,2),O=g(w,2),p=g(O,4);D("click",v,()=>T(a,setInterval(u,n().timeStep))),D("click",d,()=>clearInterval(c(a))),D("click",_,()=>l(y.EMPTY)),D("click",h,()=>l(y.FOREST)),D("click",w,()=>l(y.FIRE)),D("click",O,()=>l(y.CITY)),D("click",p,()=>{console.log(i());let x=i();x==0&&ye(be,1),x==1&&ye(be,2),x==2&&ye(be,0)}),R(e,o),Ge()}var Qn=N('<main class="svelte-1l93cy9"><div class="top svelte-1l93cy9"><div class="left svelte-1l93cy9"><!></div> <div class="right svelte-1l93cy9"><h1 id="map-title" class="svelte-1l93cy9">Map</h1> <!> <!> <!> <div>One square represents one square mile of land</div></div></div> <div class="bottom svelte-1l93cy9"><!></div></main>');function Xn(e){var r=Qn(),t=M(r),n=M(t),i=M(n);Vn(i,{});var s=g(n,2),l=g(M(s),2);$n(l);var f=g(l,2);Jn(f,{});var u=g(f,2);Hn(u);var a=g(t,2),o=M(a);zn(o),R(e,r)}yn(Xn,{target:document.getElementById("app")});