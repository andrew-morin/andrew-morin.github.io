"use strict";(self.webpackChunkandrews_chess_engine_web=self.webpackChunkandrews_chess_engine_web||[]).push([[641],{431:(e,n,t)=>{t.r(n);var r=t(204),o=t(207);(0,o.oT)(r);const u=t.p+"be5d44ca5ee868885d21.svg",c=t.p+"629fc0578d37e611ff7c.svg",i=t.p+"d714eeb4f02e04545177.svg",s=t.p+"fd4e01f573d1bc3eaab3.svg",l=t.p+"cf388bf415c0d33ec16f.svg",f=t.p+"6c8cc8fabe5215cc854d.svg",a={White:{Pawn:t.p+"50273cc6d86861932d0a.svg",Bishop:t.p+"8333f40f6a469e7e5802.svg",Knight:t.p+"145b8796b11b8d78677d.svg",Rook:t.p+"ba9ac487118f903a9b31.svg",Queen:t.p+"7a1aecff0f22ff68c43f.svg",King:t.p+"3f959aab36df6290a8e0.svg"},Black:{Pawn:u,Bishop:c,Knight:i,Rook:s,Queen:l,King:f}};let d=o.G5(),_=o.ZY(d);o.CR(d).forEach((([e,n],t)=>{const r=Math.floor(t/8),u=document.querySelector(`#rankIndex${r}`),c="Empty"===e?document.createElement("td"):v(e,n);c.dataset.index=t,c.addEventListener("click",function(e){return n=>{p&&x();const[t]=o.JS(d,e),r=h,u=g;let c;if(d.turn==m&&null!=g&&h.includes(e)){const n=_.filter((n=>{const{move_list:t}=n,r=t[t.length-1];return r.from===g&&r.to===e}));if(n.length>1)!function(e){const n=document.querySelector("#promotionPieces");e.forEach((e=>{const{move_list:t}=e,r=t[t.length-1],o=v(d.turn,r.promotion_piece);o.addEventListener("click",function(e){return n=>{const t=h,r=g;q(e),x(),C(r,t,!0),k(),n.stopPropagation()}}(r)),n.appendChild(o)})),p=!0}(n);else{const{move_list:e}=n[0];c=e[e.length-1]}}else"EMPTY"===t||g===e?(g=null,h=null):function(e){g=e,h=[],_.forEach((n=>{const t=n.move_list[n.move_list.length-1];t.from===e&&h.push(t.to)}))}(e);q(c),C(u,r,!0),n.stopPropagation()}}(t)),u.appendChild(c)}));let g=null,h=null,p=!1,m="White",b=!1;function w(e){const n=document.querySelector(`[data-index="${e.to}"]`);n.firstChild&&n.removeChild(n.firstChild);const t=document.querySelector(`[data-index="${e.from}"]`);if(e.promotion_piece){t.removeChild(t?.firstChild);const r=y(d.turn,e.promotion_piece);n.appendChild(r)}else n.appendChild(t.firstChild);if(e.castle){let n,t;2===e.to?(n=0,t=3):6===e.to?(n=7,t=5):58===e.to?(n=56,t=59):62===e.to&&(n=63,t=61);const r=document.querySelector(`[data-index="${n}"]`);document.querySelector(`[data-index="${t}"]`).appendChild(r.firstChild)}}function y(e,n){const t=document.createElement("img");return t.src=a[e][n],t}function v(e,n){const t=document.createElement("td");return t.appendChild(y(e,n)),t}function q(e){e&&d.turn===m&&(w(e),d=o.UP(d,e),_=o.ZY(d),g=null,h=null,k(),b||d.turn===m||(d=o.NN(d),_=o.ZY(d),w(d.move_list.at(-1))))}function k(){d.halfmove_counter>=100?(b=!0,alert("No capture or pawn move in 50 moves. It's a draw! :/")):0===_.length&&(b=!0,o.DN(d)[0]?"White"===d.turn?alert("You lose :("):alert("You win! :D"):alert("It's a draw! :/"))}function x(){document.querySelector("#promotionPieces").replaceChildren(),p=!1}function C(e,n,t=!1){if(null!=n&&n.forEach((e=>{document.querySelector(`[data-index="${e}"]`).classList.remove("target_square")})),m==d.turn&&null!=h&&h.forEach((e=>{document.querySelector(`[data-index="${e}"]`).classList.add("target_square")})),null!=e&&document.querySelector(`[data-index="${e}"]`).classList.remove("source_square"),null!=g&&document.querySelector(`[data-index="${g}"]`).classList.add("source_square"),t){const e=document.querySelector(".king_check"),n=o.DN(d),t=n[0],r=n[1];e?e.classList.remove("king_check"):t&&document.querySelector(`[data-index="${r}"]`).classList.add("king_check")}}document.addEventListener("click",(()=>{const e=g,n=h;g=null,h=null,C(e,n)}))},207:(e,n,t)=>{let r;function o(e){r=e}t.d(n,{BO:()=>z,CR:()=>y,D2:()=>j,DN:()=>x,De:()=>ue,Dn:()=>ne,Fy:()=>M,G5:()=>w,Gl:()=>W,Iu:()=>U,JS:()=>v,NN:()=>C,OL:()=>Q,OQ:()=>F,Or:()=>ce,Ss:()=>Z,UP:()=>k,Wl:()=>N,XP:()=>T,ZY:()=>q,dF:()=>X,dm:()=>oe,eF:()=>H,eY:()=>O,eo:()=>P,gg:()=>J,h4:()=>R,hc:()=>A,iX:()=>ie,m_:()=>te,o$:()=>G,oH:()=>B,oT:()=>o,q4:()=>$,qe:()=>ee,qt:()=>re,qx:()=>I,sG:()=>V,u9:()=>K,uY:()=>Y,ug:()=>L});const u=new Array(128).fill(void 0);function c(e){return u[e]}u.push(void 0,null,!0,!1);let i=u.length;function s(e){const n=c(e);return function(e){e<132||(u[e]=i,i=e)}(e),n}let l=new("undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();let f=null;function a(){return null!==f&&0!==f.byteLength||(f=new Uint8Array(r.memory.buffer)),f}function d(e,n){return e>>>=0,l.decode(a().subarray(e,e+n))}function _(e){i===u.length&&u.push(u.length+1);const n=i;return i=u[n],u[n]=e,n}let g=0,h=new("undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof h.encodeInto?function(e,n){return h.encodeInto(e,n)}:function(e,n){const t=h.encode(e);return n.set(t),{read:e.length,written:t.length}};let m=null;function b(){return(null===m||!0===m.buffer.detached||void 0===m.buffer.detached&&m.buffer!==r.memory.buffer)&&(m=new DataView(r.memory.buffer)),m}function w(){return s(r.get_initial_game_state())}function y(e){return s(r.convert_game_state_to_squares(_(e)))}function v(e,n){return s(r.get_square_at_index(_(e),n))}function q(e){return s(r.get_next_legal_game_states(_(e)))}function k(e,n){return s(r.perform_move(_(e),_(n)))}function x(e){const n=r.in_check(_(e));return D.__wrap(n)}function C(e){return s(r.perform_best_engine_move(_(e)))}function S(e,n){try{return e.apply(this,n)}catch(e){r.__wbindgen_exn_store(_(e))}}const E="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>r.__wbg_incheckreturn_free(e>>>0,1)));class D{static __wrap(e){e>>>=0;const n=Object.create(D.prototype);return n.__wbg_ptr=e,E.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,E.unregister(this),e}free(){const e=this.__destroy_into_raw();r.__wbg_incheckreturn_free(e,0)}get 0(){return 0!==r.__wbg_get_incheckreturn_0(this.__wbg_ptr)}set 0(e){r.__wbg_set_incheckreturn_0(this.__wbg_ptr,e)}get 1(){return r.__wbg_get_incheckreturn_1(this.__wbg_ptr)>>>0}set 1(e){r.__wbg_set_incheckreturn_1(this.__wbg_ptr,e)}}function L(e){s(e)}function T(e){return void 0===c(e)}function $(e){return _(c(e).crypto)}function N(e){const n=c(e);return"object"==typeof n&&null!==n}function P(e){return _(c(e).process)}function Y(e){return _(c(e).versions)}function I(e){return _(c(e).node)}function O(e){return"string"==typeof c(e)}function F(){return S((function(){return _(module.require)}),arguments)}function R(e,n){return _(d(e,n))}function A(e){return _(c(e).msCrypto)}function U(){return S((function(e,n){c(e).getRandomValues(c(n))}),arguments)}function B(){return S((function(e,n){c(e).randomFillSync(s(n))}),arguments)}function G(e){return"function"==typeof c(e)}function J(e,n){return _(new Function(d(e,n)))}function K(){return S((function(e,n){return _(c(e).call(c(n)))}),arguments)}function W(){return S((function(){return _(self.self)}),arguments)}function Z(){return S((function(){return _(window.window)}),arguments)}function M(){return S((function(){return _(globalThis.globalThis)}),arguments)}function Q(){return S((function(){return _(global.global)}),arguments)}function j(){return S((function(e,n,t){return _(c(e).call(c(n),c(t)))}),arguments)}function z(e){return _(c(e).buffer)}function V(e,n,t){return _(new Uint8Array(c(e),n>>>0,t>>>0))}function X(e){return _(new Uint8Array(c(e)))}function H(e,n,t){c(e).set(c(n),t>>>0)}function ee(e){return _(new Uint8Array(e>>>0))}function ne(e,n,t){return _(c(e).subarray(n>>>0,t>>>0))}function te(e){return _(c(e))}function re(e,n){const t=c(n),o="string"==typeof t?t:void 0;var u=null==o?0:function(e,n,t){if(void 0===t){const t=h.encode(e),r=n(t.length,1)>>>0;return a().subarray(r,r+t.length).set(t),g=t.length,r}let r=e.length,o=n(r,1)>>>0;const u=a();let c=0;for(;c<r;c++){const n=e.charCodeAt(c);if(n>127)break;u[o+c]=n}if(c!==r){0!==c&&(e=e.slice(c)),o=t(o,r,r=c+3*e.length,1)>>>0;const n=a().subarray(o+c,o+r);c+=p(e,n).written,o=t(o,r,c,1)>>>0}return g=c,o}(o,r.__wbindgen_malloc,r.__wbindgen_realloc),i=g;b().setInt32(e+4,i,!0),b().setInt32(e+0,u,!0)}function oe(){return S((function(e,n){return _(JSON.parse(d(e,n)))}),arguments)}function ue(){return S((function(e){return _(JSON.stringify(c(e)))}),arguments)}function ce(e,n){throw new Error(d(e,n))}function ie(){return _(r.memory)}},204:(e,n,t)=>{var r=t.w[e.id];for(var o in t.r(n),r)o&&(n[o]=r[o]);t(207),r[""]()}}]);