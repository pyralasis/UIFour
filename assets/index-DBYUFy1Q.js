(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const dt=!1;var Rr=Array.isArray,sr=Array.from,_t=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyDescriptors,He=Object.getPrototypeOf;const oe=()=>{};function ht(e){return e()}function ze(e){for(var r=0;r<e.length;r++)e[r]()}const C=2,Ar=4,be=8,lr=16,L=32,Se=64,Ye=128,Q=256,Re=512,R=1024,H=2048,ae=4096,U=8192,fe=16384,pt=32768,or=65536,gt=1<<17,yt=1<<19,Ir=1<<20,Ze=Symbol("$state"),mt=Symbol("legacy props"),wt=Symbol("");function Nr(e){return e===this.v}function Dr(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function Cr(e){return!Dr(e,this.v)}function Et(e){throw new Error("effect_in_teardown")}function bt(){throw new Error("effect_in_unowned_derived")}function St(e){throw new Error("effect_orphan")}function Tt(){throw new Error("effect_update_depth_exceeded")}function kt(e){throw new Error("props_invalid_value")}function xt(){throw new Error("state_unsafe_local_read")}function Mt(){throw new Error("state_unsafe_mutation")}let ce=!1;function Ot(){ce=!0}function Pe(e){return{f:0,v:e,reactions:null,equals:Nr,version:0}}function ur(e,r=!1){var n;const t=Pe(e);return r||(t.equals=Cr),ce&&E!==null&&E.l!==null&&((n=E.l).s??(n.s=[])).push(t),t}function M(e,r=!1){return Ft(ur(e,r))}function Ft(e){return m!==null&&m.f&C&&(B===null?Ht([e]):B.push(e)),e}function hr(e,r){return b(e,D(()=>_(e))),r}function b(e,r){return m!==null&&Le()&&m.f&(C|lr)&&(B===null||!B.includes(e))&&Mt(),Lr(e,r)}function Lr(e,r){return e.equals(r)||(e.v=r,e.version=st(),qr(e,H),Le()&&g!==null&&g.f&R&&!(g.f&L)&&(F!==null&&F.includes(e)?(q(g,H),$e(g)):j===null?zt([e]):j.push(e))),r}function qr(e,r){var t=e.reactions;if(t!==null)for(var n=Le(),i=t.length,s=0;s<i;s++){var l=t[s],a=l.f;a&H||!n&&l===g||(q(l,r),a&(R|Q)&&(a&C?qr(l,ae):$e(l)))}}const Rt=1,Pt=2,At=16,It=1,Nt=2,Dt=8,Ct=2;let Lt=!1;var pr,$r,Kr;function qt(){if(pr===void 0){pr=window;var e=Element.prototype,r=Node.prototype;$r=je(r,"firstChild").get,Kr=je(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ur(e=""){return document.createTextNode(e)}function Br(e){return $r.call(e)}function ar(e){return Kr.call(e)}function T(e,r){return Br(e)}function y(e,r=1,t=!1){let n=e;for(;r--;)n=ar(n);return n}function $t(e){e.textContent=""}function fr(e){var r=C|H;g===null?r|=Q:g.f|=Ir;var t=m!==null&&m.f&C?m:null;const n={children:null,ctx:E,deps:null,equals:Nr,f:r,fn:e,reactions:null,v:null,version:0,parent:t??g};return t!==null&&(t.children??(t.children=[])).push(n),n}function Gr(e){const r=fr(e);return r.equals=Cr,r}function Wr(e){var r=e.children;if(r!==null){e.children=null;for(var t=0;t<r.length;t+=1){var n=r[t];n.f&C?cr(n):X(n)}}}function Kt(e){for(var r=e.parent;r!==null;){if(!(r.f&C))return r;r=r.parent}return null}function Vr(e){var r,t=g;G(Kt(e));try{Wr(e),r=lt(e)}finally{G(t)}return r}function jr(e){var r=Vr(e),t=(ne||e.f&Q)&&e.deps!==null?ae:R;q(e,t),e.equals(r)||(e.v=r,e.version=st())}function cr(e){Wr(e),me(e,0),q(e,fe),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Hr(e){g===null&&m===null&&St(),m!==null&&m.f&Q&&bt(),_r&&Et()}function Ut(e,r){var t=r.last;t===null?r.last=r.first=e:(t.next=e,e.prev=t,r.last=e)}function ve(e,r,t,n=!0){var i=(e&Se)!==0,s=g,l={ctx:E,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|H,first:null,fn:r,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var a=ue;try{gr(!0),Te(l),l.f|=pt}catch(o){throw X(l),o}finally{gr(a)}}else r!==null&&$e(l);var f=t&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Ir)===0;if(!f&&!i&&n&&(s!==null&&Ut(l,s),m!==null&&m.f&C)){var u=m;(u.children??(u.children=[])).push(l)}return l}function zr(e){const r=ve(be,null,!1);return q(r,R),r.teardown=e,r}function Je(e){Hr();var r=g!==null&&(g.f&L)!==0&&E!==null&&!E.m;if(r){var t=E;(t.e??(t.e=[])).push({fn:e,effect:g,reaction:m})}else{var n=Yr(e);return n}}function Bt(e){return Hr(),Ce(e)}function Gt(e){const r=ve(Se,e,!0);return()=>{X(r)}}function Yr(e){return ve(Ar,e,!1)}function K(e,r,t,n){var i=E,s={effect:null,ran:!1};i.l.r1.push(s),s.effect=Ce(()=>{e(),!s.ran&&(s.ran=!0,b(i.l.r2,!0),D(r))})}function De(){var e=E;Ce(()=>{if(_(e.l.r2)){for(var r of e.l.r1){var t=r.effect;t.f&R&&q(t,ae),de(t)&&Te(t),r.ran=!1}e.l.r2.v=!1}})}function Ce(e){return ve(be,e,!0)}function Zr(e){return vr(e)}function vr(e,r=0){return ve(be|lr|r,e,!0)}function ye(e,r=!0){return ve(be|L,e,!0,r)}function Jr(e){var r=e.teardown;if(r!==null){const t=_r,n=m;yr(!0),z(null);try{r.call(null)}finally{yr(t),z(n)}}}function Qr(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var t=0;t<r.length;t+=1)cr(r[t])}}function Xr(e,r=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var n=t.next;X(t,r),t=n}}function Wt(e){for(var r=e.first;r!==null;){var t=r.next;r.f&L||X(r),r=t}}function X(e,r=!0){var t=!1;if((r||e.f&yt)&&e.nodes_start!==null){for(var n=e.nodes_start,i=e.nodes_end;n!==null;){var s=n===i?null:ar(n);n.remove(),n=s}t=!0}Xr(e,r&&!t),Qr(e),me(e,0),q(e,fe);var l=e.transitions;if(l!==null)for(const f of l)f.stop();Jr(e);var a=e.parent;a!==null&&a.first!==null&&et(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function et(e){var r=e.parent,t=e.prev,n=e.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),r!==null&&(r.first===e&&(r.first=n),r.last===e&&(r.last=t))}function Qe(e,r){var t=[];dr(e,t,!0),rt(t,()=>{X(e),r&&r()})}function rt(e,r){var t=e.length;if(t>0){var n=()=>--t||r();for(var i of e)i.out(n)}else r()}function dr(e,r,t){if(!(e.f&U)){if(e.f^=U,e.transitions!==null)for(const l of e.transitions)(l.is_global||t)&&r.push(l);for(var n=e.first;n!==null;){var i=n.next,s=(n.f&or)!==0||(n.f&L)!==0;dr(n,r,s?t:!1),n=i}}}function Ae(e){tt(e,!0)}function tt(e,r){if(e.f&U){de(e)&&Te(e),e.f^=U;for(var t=e.first;t!==null;){var n=t.next,i=(t.f&or)!==0||(t.f&L)!==0;tt(t,i?r:!1),t=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&s.in()}}let Xe=!1,er=[];function Vt(){Xe=!1;const e=er.slice();er=[],ze(e)}function jt(e){Xe||(Xe=!0,queueMicrotask(Vt)),er.push(e)}function nt(e){throw new Error("lifecycle_outside_component")}let Fe=!1,Ie=!1,Ne=null,ue=!1,_r=!1;function gr(e){ue=e}function yr(e){_r=e}let rr=[],ge=0;let m=null;function z(e){m=e}let g=null;function G(e){g=e}let B=null;function Ht(e){B=e}let F=null,P=0,j=null;function zt(e){j=e}let it=0,ne=!1,E=null;function st(){return++it}function Le(){return!ce||E!==null&&E.l===null}function de(e){var l,a;var r=e.f;if(r&H)return!0;if(r&ae){var t=e.deps,n=(r&Q)!==0;if(t!==null){var i;if(r&Re){for(i=0;i<t.length;i++)((l=t[i]).reactions??(l.reactions=[])).push(e);e.f^=Re}for(i=0;i<t.length;i++){var s=t[i];if(de(s)&&jr(s),n&&g!==null&&!ne&&!((a=s==null?void 0:s.reactions)!=null&&a.includes(e))&&(s.reactions??(s.reactions=[])).push(e),s.version>e.version)return!0}}n||q(e,R)}return!1}function Yt(e,r){for(var t=r;t!==null;){if(t.f&Ye)try{t.fn(e);return}catch{t.f^=Ye}t=t.parent}throw Fe=!1,e}function Zt(e){return(e.f&fe)===0&&(e.parent===null||(e.parent.f&Ye)===0)}function qe(e,r,t,n){if(Fe){if(t===null&&(Fe=!1),Zt(r))throw e;return}t!==null&&(Fe=!0);{Yt(e,r);return}}function lt(e){var v;var r=F,t=P,n=j,i=m,s=ne,l=B,a=E,f=e.f;F=null,P=0,j=null,m=f&(L|Se)?null:e,ne=!ue&&(f&Q)!==0,B=null,E=e.ctx;try{var u=(0,e.fn)(),o=e.deps;if(F!==null){var c;if(me(e,P),o!==null&&P>0)for(o.length=P+F.length,c=0;c<F.length;c++)o[P+c]=F[c];else e.deps=o=F;if(!ne)for(c=P;c<o.length;c++)((v=o[c]).reactions??(v.reactions=[])).push(e)}else o!==null&&P<o.length&&(me(e,P),o.length=P);return u}finally{F=r,P=t,j=n,m=i,ne=s,B=l,E=a}}function Jt(e,r){let t=r.reactions;if(t!==null){var n=t.indexOf(e);if(n!==-1){var i=t.length-1;i===0?t=r.reactions=null:(t[n]=t[i],t.pop())}}t===null&&r.f&C&&(F===null||!F.includes(r))&&(q(r,ae),r.f&(Q|Re)||(r.f^=Re),me(r,0))}function me(e,r){var t=e.deps;if(t!==null)for(var n=r;n<t.length;n++)Jt(e,t[n])}function Te(e){var r=e.f;if(!(r&fe)){q(e,R);var t=g,n=E;g=e;try{r&lr?Wt(e):Xr(e),Qr(e),Jr(e);var i=lt(e);e.teardown=typeof i=="function"?i:null,e.version=it}catch(s){qe(s,e,t,n||e.ctx)}finally{g=t}}}function Qt(){if(ge>1e3){ge=0;try{Tt()}catch(e){if(Ne!==null)qe(e,Ne,null);else throw e}}ge++}function Xt(e){var r=e.length;if(r!==0){Qt();var t=ue;ue=!0;try{for(var n=0;n<r;n++){var i=e[n];i.f&R||(i.f^=R);var s=[];ot(i,s),en(s)}}finally{ue=t}}}function en(e){var r=e.length;if(r!==0)for(var t=0;t<r;t++){var n=e[t];if(!(n.f&(fe|U)))try{de(n)&&(Te(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?et(n):n.fn=null))}catch(i){qe(i,n,null,n.ctx)}}}function rn(){if(Ie=!1,ge>1001)return;const e=rr;rr=[],Xt(e),Ie||(ge=0,Ne=null)}function $e(e){Ie||(Ie=!0,queueMicrotask(rn)),Ne=e;for(var r=e;r.parent!==null;){r=r.parent;var t=r.f;if(t&(Se|L)){if(!(t&R))return;r.f^=R}}rr.push(r)}function ot(e,r){var t=e.first,n=[];e:for(;t!==null;){var i=t.f,s=(i&L)!==0,l=s&&(i&R)!==0,a=t.next;if(!l&&!(i&U))if(i&be){if(s)t.f^=R;else try{de(t)&&Te(t)}catch(c){qe(c,t,null,t.ctx)}var f=t.first;if(f!==null){t=f;continue}}else i&Ar&&n.push(t);if(a===null){let c=t.parent;for(;c!==null;){if(e===c)break e;var u=c.next;if(u!==null){t=u;continue e}c=c.parent}}t=a}for(var o=0;o<n.length;o++)f=n[o],r.push(f),ot(f,r)}function _(e){var o;var r=e.f,t=(r&C)!==0;if(t&&r&fe){var n=Vr(e);return cr(e),n}if(m!==null){B!==null&&B.includes(e)&&xt();var i=m.deps;F===null&&i!==null&&i[P]===e?P++:F===null?F=[e]:F.push(e),j!==null&&g!==null&&g.f&R&&!(g.f&L)&&j.includes(e)&&(q(g,H),$e(g))}else if(t&&e.deps===null)for(var s=e,l=s.parent,a=s;l!==null;)if(l.f&C){var f=l;a=f,l=f.parent}else{var u=l;(o=u.deriveds)!=null&&o.includes(a)||(u.deriveds??(u.deriveds=[])).push(a);break}return t&&(s=e,de(s)&&jr(s)),e.v}function D(e){const r=m;try{return m=null,e()}finally{m=r}}const tn=~(H|ae|R);function q(e,r){e.f=e.f&tn|r}function ke(e,r=!1,t){E={p:E,c:null,e:null,m:!1,s:e,x:null,l:null},ce&&!r&&(E.l={s:null,u:null,r1:[],r2:Pe(!1)})}function xe(e){const r=E;if(r!==null){const l=r.e;if(l!==null){var t=g,n=m;r.e=null;try{for(var i=0;i<l.length;i++){var s=l[i];G(s.effect),z(s.reaction),Yr(s.fn)}}finally{G(t),z(n)}}E=r.p,r.m=!0}return{}}function tr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ze in e)nr(e);else if(!Array.isArray(e))for(let r in e){const t=e[r];typeof t=="object"&&t&&Ze in t&&nr(t)}}}function nr(e,r=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!r.has(e)){r.add(e),e instanceof Date&&e.getTime();for(let n in e)try{nr(e[n],r)}catch{}const t=He(e);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=Pr(t);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}let mr=!1;function nn(){mr||(mr=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function ut(e){var r=m,t=g;z(null),G(null);try{return e()}finally{z(r),G(t)}}function sn(e,r,t,n=t){e.addEventListener(r,()=>ut(t));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),nn()}const ln=new Set,wr=new Set;function on(e,r,t,n){function i(s){if(n.capture||pe.call(r,s),!s.cancelBubble)return ut(()=>t.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?jt(()=>{r.addEventListener(e,i,n)}):r.addEventListener(e,i,n),i}function N(e,r,t,n,i){var s={capture:n,passive:i},l=on(e,r,t,s);(r===document.body||r===window||r===document)&&zr(()=>{r.removeEventListener(e,l,s)})}function pe(e){var O;var r=this,t=r.ownerDocument,n=e.type,i=((O=e.composedPath)==null?void 0:O.call(e))||[],s=i[0]||e.target,l=0,a=e.__root;if(a){var f=i.indexOf(a);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var u=i.indexOf(r);if(u===-1)return;f<=u&&(l=f)}if(s=i[l]||e.target,s!==r){_t(e,"currentTarget",{configurable:!0,get(){return s||t}});var o=m,c=g;z(null),G(null);try{for(var v,d=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+n];if(S!==void 0&&!s.disabled)if(Rr(S)){var[x,...p]=S;x.apply(s,[e,...p])}else S.call(s,e)}catch(W){v?d.push(W):v=W}if(e.cancelBubble||h===r||h===null)break;s=h}if(v){for(let W of d)queueMicrotask(()=>{throw W});throw v}}finally{e.__root=r,delete e.currentTarget,z(o),G(c)}}}function un(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function an(e,r){var t=g;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function I(e,r){var t=(r&Ct)!==0,n,i=!e.startsWith("<!>");return()=>{n===void 0&&(n=un(i?e:"<!>"+e),n=Br(n));var s=t?document.importNode(n,!0):n.cloneNode(!0);return an(s,s),s}}function A(e,r){e!==null&&e.before(r)}const fn=["touchstart","touchmove"];function cn(e){return fn.includes(e)}function ir(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function vn(e,r){return dn(e,r)}const re=new Map;function dn(e,{target:r,anchor:t,props:n={},events:i,context:s,intro:l=!0}){qt();var a=new Set,f=c=>{for(var v=0;v<c.length;v++){var d=c[v];if(!a.has(d)){a.add(d);var h=cn(d);r.addEventListener(d,pe,{passive:h});var S=re.get(d);S===void 0?(document.addEventListener(d,pe,{passive:h}),re.set(d,1)):re.set(d,S+1)}}};f(sr(ln)),wr.add(f);var u=void 0,o=Gt(()=>{var c=t??r.appendChild(Ur());return ye(()=>{if(s){ke({});var v=E;v.c=s}i&&(n.$$events=i),u=e(c,n)||{},s&&xe()}),()=>{var h;for(var v of a){r.removeEventListener(v,pe);var d=re.get(v);--d===0?(document.removeEventListener(v,pe),re.delete(v)):re.set(v,d)}wr.delete(f),Er.delete(u),c!==t&&((h=c.parentNode)==null||h.removeChild(c))}});return Er.set(u,o),u}let Er=new WeakMap;function Me(e,r,t=!1){var n=e,i=null,s=null,l=null,a=t?or:0,f=!1;const u=(c,v=!0)=>{f=!0,o(v,c)},o=(c,v)=>{l!==(l=c)&&(l?(i?Ae(i):v&&(i=ye(()=>v(n))),s&&Qe(s,()=>{s=null})):(s?Ae(s):v&&(s=ye(()=>v(n))),i&&Qe(i,()=>{i=null})))};vr(()=>{f=!1,r(u),f||o(null,null)},a)}function br(e,r){return r}function _n(e,r,t,n){for(var i=[],s=r.length,l=0;l<s;l++)dr(r[l].e,i,!0);var a=s>0&&i.length===0&&t!==null;if(a){var f=t.parentNode;$t(f),f.append(t),n.clear(),V(e,r[0].prev,r[s-1].next)}rt(i,()=>{for(var u=0;u<s;u++){var o=r[u];a||(n.delete(o.k),V(e,o.prev,o.next)),X(o.e,!a)}})}function Sr(e,r,t,n,i,s=null){var l=e,a={flags:r,items:new Map,first:null};{var f=e;l=f.appendChild(Ur())}var u=null,o=!1;vr(()=>{var c=t(),v=Rr(c)?c:c==null?[]:sr(c),d=v.length;if(!(o&&d===0)){o=d===0;{var h=m;hn(v,a,l,i,r,(h.f&U)!==0,n)}s!==null&&(d===0?u?Ae(u):u=ye(()=>s(l)):u!==null&&Qe(u,()=>{u=null})),t()}})}function hn(e,r,t,n,i,s,l){var a=e.length,f=r.items,u=r.first,o=u,c,v=null,d=[],h=[],S,x,p,O;for(O=0;O<a;O+=1){if(S=e[O],x=l(S,O),p=f.get(x),p===void 0){var W=o?o.e.nodes_start:t;v=gn(W,r,v,v===null?r.first:v.next,S,x,O,n,i),f.set(x,v),d=[],h=[],o=v.next;continue}if(pn(p,S,O),p.e.f&U&&Ae(p.e),p!==o){if(c!==void 0&&c.has(p)){if(d.length<h.length){var Y=h[0],$;v=Y.prev;var _e=d[0],he=d[d.length-1];for($=0;$<d.length;$+=1)Tr(d[$],Y,t);for($=0;$<h.length;$+=1)c.delete(h[$]);V(r,_e.prev,he.next),V(r,v,_e),V(r,he,Y),o=Y,v=he,O-=1,d=[],h=[]}else c.delete(p),Tr(p,o,t),V(r,p.prev,p.next),V(r,p,v===null?r.first:v.next),V(r,v,p),v=p;continue}for(d=[],h=[];o!==null&&o.k!==x;)(s||!(o.e.f&U))&&(c??(c=new Set)).add(o),h.push(o),o=o.next;if(o===null)continue;p=o}d.push(p),v=p,o=p.next}if(o!==null||c!==void 0){for(var ee=c===void 0?[]:sr(c);o!==null;)(s||!(o.e.f&U))&&ee.push(o),o=o.next;var Be=ee.length;if(Be>0){var Ge=a===0?t:null;_n(r,ee,Ge,f)}}g.first=r.first&&r.first.e,g.last=v&&v.e}function pn(e,r,t,n){Lr(e.v,r),e.i=t}function gn(e,r,t,n,i,s,l,a,f){var u=(f&Rt)!==0,o=(f&At)===0,c=u?o?ur(i):Pe(i):i,v=f&Pt?Pe(l):l,d={i:v,v:c,k:s,a:null,e:null,prev:t,next:n};try{return d.e=ye(()=>a(e,c,v),Lt),d.e.prev=t&&t.e,d.e.next=n&&n.e,t===null?r.first=d:(t.next=d,t.e.next=d.e),n!==null&&(n.prev=d,n.e.prev=d.e),d}finally{}}function Tr(e,r,t){for(var n=e.next?e.next.e.nodes_start:t,i=r?r.e.nodes_start:t,s=e.e.nodes_start;s!==n;){var l=ar(s);i.before(s),s=l}}function V(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function we(e,r,t,n){var i=e.__attributes??(e.__attributes={});i[r]!==(i[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[wt]=t),t==null?e.removeAttribute(r):typeof t!="string"&&yn(e).includes(r)?e[r]=t:e.setAttribute(r,t))}var kr=new Map;function yn(e){var r=kr.get(e.nodeName);if(r)return r;kr.set(e.nodeName,r=[]);for(var t,n=He(e),i=Element.prototype;i!==n;){t=Pr(n);for(var s in t)t[s].set&&r.push(s);n=He(n)}return r}function ie(e,r,t=r){var n=Le();sn(e,"input",i=>{var s=i?e.defaultValue:e.value;s=We(e)?Ve(s):s,t(s),n&&s!==(s=r())&&(e.value=s??"")}),D(r)==null&&e.value&&t(We(e)?Ve(e.value):e.value),Ce(()=>{var i=r();We(e)&&i===Ve(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function We(e){var r=e.type;return r==="number"||r==="range"}function Ve(e){return e===""?null:+e}function Ke(e=!1){const r=E,t=r.l.u;if(!t)return;let n=()=>tr(r.s);if(e){let i=0,s={};const l=fr(()=>{let a=!1;const f=r.s;for(const u in f)f[u]!==s[u]&&(s[u]=f[u],a=!0);return a&&i++,i});n=()=>_(l)}t.b.length&&Bt(()=>{xr(r,n),ze(t.b)}),Je(()=>{const i=D(()=>t.m.map(ht));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&Je(()=>{xr(r,n),ze(t.a)})}function xr(e,r){if(e.l.s)for(const t of e.l.s)_(t);r()}function mn(e,r,t){if(e==null)return r(void 0),oe;const n=D(()=>e.subscribe(r,t));return n.unsubscribe?()=>n.unsubscribe():n}let Oe=!1;function Ee(e,r,t){const n=t[r]??(t[r]={store:null,source:ur(void 0),unsubscribe:oe});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=oe;else{var i=!0;n.unsubscribe=mn(e,s=>{i?n.source.v=s:b(n.source,s)}),i=!1}return _(n.source)}function Mr(e,r){return e.set(r),r}function Ue(){const e={};return zr(()=>{for(var r in e)e[r].unsubscribe()}),e}function Or(e,r,t){return e.set(t),r}function wn(e){var r=Oe;try{return Oe=!1,[e(),Oe]}finally{Oe=r}}function En(e){for(var r=g,t=g;r!==null&&!(r.f&(L|Se));)r=r.parent;try{return G(r),e()}finally{G(t)}}function Fr(e,r,t,n){var x;var i=(t&It)!==0,s=!ce||(t&Nt)!==0,l=(t&Dt)!==0,a=!1,f;[f,a]=wn(()=>e[r]);var u=Ze in e||mt in e,o=((x=je(e,r))==null?void 0:x.set)??(u&&l&&r in e?p=>e[r]=p:void 0),c=n,v=!0,d=()=>(v&&(v=!1,c=n),c);f===void 0&&n!==void 0&&(o&&s&&kt(),f=d(),o&&o(f));var h;if(s)h=()=>{var p=e[r];return p===void 0?d():(v=!0,p)};else{var S=En(()=>(i?fr:Gr)(()=>e[r]));S.f|=gt,h=()=>{var p=_(S);return p!==void 0&&(c=void 0),p===void 0?c:p}}return h}function at(e){E===null&&nt(),ce&&E.l!==null?Sn(E).m.push(e):Je(()=>{const r=D(e);if(typeof r=="function")return r})}function bn(e){E===null&&nt(),at(()=>()=>D(e))}function Sn(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}const Tn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Tn);Ot();const te=[];function ft(e,r=oe){let t=null;const n=new Set;function i(a){if(Dr(e,a)&&(e=a,t)){const f=!te.length;for(const u of n)u[1](),te.push(u,e);if(f){for(let u=0;u<te.length;u+=2)te[u][0](te[u+1]);te.length=0}}}function s(a){i(a(e))}function l(a,f=oe){const u=[a,f];return n.add(u),n.size===1&&(t=r(i,s)||oe),a(e),()=>{n.delete(u),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:l}}const w={EMPTY:0,FOREST:1,FIRE:2,WEAK_SMOKE:3,MEDIUM_SMOKE:4,STRONG_SMOKE:5,CITY:6};class kn{constructor(r,t){this.x=r,this.y=t,this.tileType=w.EMPTY,this.smokeProgress=0,this.fireProgress=0}isFire(){return this.tileType==w.FIRE}isSmoke(){return this.tileType==w.WEAK_SMOKE||this.tileType==w.MEDIUM_SMOKE||this.tileType==w.STRONG_SMOKE}isWeakSmoke(){return this.tileType==w.WEAK_SMOKE}isMediumSmoke(){return this.tileType==w.MEDIUM_SMOKE}isStrongSmoke(){return this.tileType==w.STRONG_SMOKE}isCity(){return this.tileType==w.CITY}isForest(){return this.tileType==w.FOREST}isEmpty(){return this.tileType==w.EMPTY}}const se=50,le=50;class xn{constructor(){this.grid=Array.from({length:50},()=>new Array(50));for(let r=0;r<le;r++)for(let t=0;t<se;t++)this.grid[r][t]=new kn(t,r);this.timeStep=1e3,this.fireSpreadRate=5,this.smokeSpreadRate=10}changeTimeStep(r){this.timeStep=r}checkNeighboursFire(r,t){let n=0;return t-1>=0&&this.grid[t-1][r]&&this.grid[t-1][r].isFire()&&(n+=this.fireSpreadRate),t+1<le&&this.grid[t+1][r]&&this.grid[t+1][r].isFire()&&(n+=this.fireSpreadRate),r-1>=0&&this.grid[t][r-1]&&this.grid[t][r-1].isFire()&&(n+=this.fireSpreadRate),r+1<se&&this.grid[t][r+1]&&this.grid[t][r+1].isFire()&&(n+=this.fireSpreadRate),n}checkNeighboursSmoke(r,t){let n=0;return t-1>=0&&this.grid[t-1][r]&&(this.grid[t-1][r].isFire()||this.grid[t-1][r].isSmoke())?n+=this.smokeSpreadRate:t+1<le&&this.grid[t+1][r]&&(this.grid[t+1][r].isFire()||this.grid[t+1][r].isSmoke())?n+=this.smokeSpreadRate:r-1>=0&&this.grid[t][r-1]&&(this.grid[t][r-1].isFire()||this.grid[t][r-1].isSmoke())?n+=this.smokeSpreadRate:r+1<se&&this.grid[t][r+1]&&(this.grid[t][r+1].isFire()||this.grid[t][r+1].isSmoke())&&(n+=this.smokeSpreadRate),n}updateGrid(){let r=this.grid;for(let t=0;t<le;t++)for(let n=0;n<se;n++){let i=r[t][n];i.isForest()&&(i.fireProgress+=this.checkNeighboursFire(n,t),i.fireProgress>=100&&(i.tileType=w.FIRE)),i.isEmpty&&(i.smokeProgress+=this.checkNeighboursSmoke(n,t),i.isEmpty()&&i.smokeProgress>=100&&(i.tileType=w.WEAK_SMOKE),i.isWeakSmoke()&&!i.isCity()&&i.smokeProgress>=200&&(i.tileType=w.MEDIUM_SMOKE),i.isMediumSmoke()&&i.smokeProgress>=300&&(i.tileType=w.STRONG_SMOKE))}this.grid=r}}const J=ft(new xn),ct=ft(w.EMPTY);var Mn=I('<div class="tile svelte-1yw8w9x"> </div>');function On(e,r){ke(r,!1);const t=Ue(),n=()=>Ee(J,"$gridMap",t),i=()=>Ee(ct,"$selectedTileType",t),s=M(),l=M(),a=M();let f=Fr(r,"coordsX",8),u=Fr(r,"coordsY",8);function o(p){switch(p){case w.EMPTY:return"white";case w.FOREST:return"green";case w.FIRE:return"orange";case w.WEAK_SMOKE:return"lightgrey";case w.MEDIUM_SMOKE:return"darkgrey";case w.STRONG_SMOKE:return"grey";case w.CITY:return"blue"}}let c=M(!1);const v=p=>{p.button===0&&b(c,!0)},d=p=>{p.button===0&&b(c,!1)};at(()=>{window.addEventListener("mousedown",v),window.addEventListener("mouseup",d)}),bn(()=>{window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",d)}),console.log(_(a)),K(()=>n(),()=>{b(s,n().grid)}),K(()=>(n(),tr(u()),tr(f())),()=>{b(l,n().grid[u()][f()])}),K(()=>_(l),()=>{b(a,_(l).tileType)}),De(),Ke();var h=Mn();const S=Gr(()=>`background-color: ${o(_(a))??""};`);var x=T(h);Zr(()=>{we(h,"style",_(S)),ir(x,_(l).smokeProgress)}),N("mousedown",h,()=>{b(a,i()),hr(s,_(s)[u()][f()].tileType=_(a)),Or(J,D(n).grid=_(s),D(n))}),N("mouseenter",h,()=>{_(c)&&(b(a,i()),hr(s,_(s)[u()][f()].tileType=_(a)),Or(J,D(n).grid=_(s),D(n)))}),N("drag",h,()=>!1),A(e,h),xe()}var Fn=I('<div class="row svelte-r65ubh"></div>'),Rn=I('<div class="grid-container svelte-r65ubh"></div>');function Pn(e,r){ke(r,!1);const t=Ue(),n=()=>Ee(J,"$gridMap",t),i=M();let l=n().grid;K(()=>n(),()=>{b(i,n().grid[0][0].smokeProgress)}),De(),Ke();var a=Rn();Sr(a,5,()=>l,br,(f,u)=>{var o=Fn();Sr(o,5,()=>_(u),br,(c,v)=>{On(c,{get coordsX(){return _(v).x},get coordsY(){return _(v).y}})}),N("drag",o,()=>!1),A(f,o)}),N("drag",a,()=>!1),A(e,a),xe()}var An=I("<p>There is fire in a neighboring area. Strongly consider evacuating!</p>"),In=I(`<p>There is smoke in a neighboring area. Strongly consider staying
            indoors or evacuating! Keep an eye out for fire spreading to a
            neighboring area!</p>`),Nn=I("<h2>There is fire in the area. EVACUATE NOW!</h2>"),Dn=I(`<p>There is smoke in the area. Strongly consider staying indoors or
            evacuating! Keep an eye out for fire spreading to a neighboring area
            or your current area!</p>`),Cn=I('<div class="info-container"><h1>Wild Fire Tracker</h1> <p>This is a tracker used to inform users about approaching wildfires.</p> <p>Enter Your Address</p> <div class="address-input"><label for="x-addr">X:</label> <input id="x-addr" type="number" min="0"></div> <div class="address-input"><label for="y-addr">Y:</label> <input id="y-addr" type="number" min="0"></div> <h2>Address Statistics</h2> <p> </p> <p> </p> <h2>Safety Suggestions</h2> <!> <!> <!> <!></div>');function Ln(e,r){ke(r,!1);const t=Ue(),n=()=>Ee(J,"$gridMap",t),i=M(),s=M(),l=M(),a=M(),f=M();let u=M(0),o=M(0);K(()=>(n(),_(o),_(u)),()=>{b(i,n().grid[_(o)][_(u)])}),K(()=>(n(),_(u),_(o)),()=>{b(s,n().checkNeighboursFire(_(u),_(o)))}),K(()=>(n(),_(u),_(o)),()=>{b(l,n().checkNeighboursSmoke(_(u),_(o)))}),K(()=>_(i),()=>{b(a,_(i).isFire())}),K(()=>_(i),()=>{b(f,_(i).isSmoke())}),De(),Ke();var c=Cn(),v=y(T(c),6),d=y(T(v),2);we(d,"max",se-1);var h=y(v,2),S=y(T(h),2);we(S,"max",le-1);var x=y(h,4),p=T(x),O=y(x,2),W=T(O),Y=y(O,4);{var $=k=>{var Z=An();A(k,Z)};Me(Y,k=>{_(s)>0&&k($)})}var _e=y(Y,2);{var he=k=>{var Z=In();A(k,Z)};Me(_e,k=>{_(l)>0&&k(he)})}var ee=y(_e,2);{var Be=k=>{var Z=Nn();A(k,Z)};Me(ee,k=>{_(a)&&k(Be)})}var Ge=y(ee,2);{var vt=k=>{var Z=Dn();A(k,Z)};Me(Ge,k=>{_(f)&&k(vt)})}Zr(()=>{ir(p,`Fire Level: ${_(i).fireProgress??""}`),ir(W,`Smoke Level: ${_(i).smokeProgress??""}`)}),ie(d,()=>_(u),k=>b(u,k)),ie(S,()=>_(o),k=>b(o,k)),A(e,c),xe()}var qn=I('<div class="legend-container"><div class="legend-container-inner svelte-k7xcsq"><div class="left"><div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="white"></rect></svg> <div>Empty</div></div> <div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="orange"></rect></svg> <div>Fire</div></div> <div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="green"></rect></svg> <div>Forest</div></div></div> <div class="right"><div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="lightgrey"></rect></svg> <div>Weak Smoke</div></div> <div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="darkgrey"></rect></svg> <div>Medium Smoke</div></div> <div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="grey"></rect></svg> <div>Heavy Smoke</div></div> <div class="legend-item svelte-k7xcsq"><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" x="0" y="0" fill="blue"></rect></svg> <div>City</div></div></div></div> <p>One square represents one square mile of land</p></div>');function $n(e){var r=qn();A(e,r)}var Kn=I(`<div class="signup-container"><h1>Sign Up For Email and Text Notifications</h1> <p>Want emergency alerts? Enter your area, phone number and email to stay
        up to date!</p> <div class="signup-input"><label for="x-addr">X:</label> <input id="x-addr" type="number" min="0"></div> <div class="signup-input"><label for="y-addr">Y:</label> <input id="y-addr" type="number" min="0"></div> <div class="signup-input"><label for="email">Email</label> <input id="email" type="text"></div> <div class="signup-input"><label for="phone">SMS</label> <input id="phone" type="text"></div> <button>Submit</button></div>`);function Un(e){let r=M(0),t=M(0),n=M(""),i=M("");var s=Kn(),l=y(T(s),4),a=y(T(l),2);we(a,"max",se-1);var f=y(l,2),u=y(T(f),2);we(u,"max",le-1);var o=y(f,2),c=y(T(o),2),v=y(o,2),d=y(T(v),2);ie(a,()=>_(r),h=>b(r,h)),ie(u,()=>_(t),h=>b(t,h)),ie(c,()=>_(n),h=>b(n,h)),ie(d,()=>_(i),h=>b(i,h)),A(e,s)}var Bn=I('<div class="selector-container svelte-z58rl9"><div class="upper svelte-z58rl9"><button>Start</button> <button>Stop</button></div> <div class="lower svelte-z58rl9"><button>Empty</button> <button>Forest</button> <button>Fire</button> <button>City</button></div></div>');function Gn(e,r){ke(r,!1);const t=Ue(),n=()=>Ee(J,"$gridMap",t),i=M(),s=O=>{Mr(ct,O)};let l=n();l.grid;let a=()=>{l.updateGrid(),Mr(J,l),console.log(l)},f=M();K(()=>n(),()=>{b(i,n().grid[0][0].smokeProgress)}),De(),Ke();var u=Bn(),o=T(u),c=T(o),v=y(c,2),d=y(o,2),h=T(d),S=y(h,2),x=y(S,2),p=y(x,2);N("click",c,()=>b(f,setInterval(a,n().timeStep))),N("click",v,()=>clearInterval(_(f))),N("click",h,()=>s(w.EMPTY)),N("click",S,()=>s(w.FOREST)),N("click",x,()=>s(w.FIRE)),N("click",p,()=>s(w.CITY)),A(e,u),xe()}var Wn=I('<main class="svelte-l2ulj7"><div class="left svelte-l2ulj7"><!> <!></div> <div class="right svelte-l2ulj7"><h1 id="map-title" class="svelte-l2ulj7">Map</h1> <div><div class="right-left svelte-l2ulj7"><!> <!></div> <div class="right-right svelte-l2ulj7"><!></div></div></div></main>');function Vn(e){var r=Wn(),t=T(r),n=T(t);Ln(n,{});var i=y(n,2);Un(i);var s=y(t,2),l=y(T(s),2),a=T(l),f=T(a);Pn(f,{});var u=y(f,2);Gn(u,{});var o=y(a,2),c=T(o);$n(c),A(e,r)}vn(Vn,{target:document.getElementById("app")});
