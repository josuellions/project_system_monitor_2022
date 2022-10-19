import{r as o}from"./index.9ef2f20a.js";import{a as F,b as L}from"./index.module.a2d5e8c2.js";import{r as V}from"./index.6a90dfd7.js";import{j as p,F as C}from"./jsx-runtime.3d67387a.js";import{I as q,r as K}from"./IconBase.esm.db5976a0.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function H(e,t){const n=o.exports.createContext(t);function r(c){const{children:i,...a}=c,u=o.exports.useMemo(()=>a,Object.values(a));return o.exports.createElement(n.Provider,{value:u},i)}function s(c){const i=o.exports.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return r.displayName=e+"Provider",[r,s]}function X(e,t=[]){let n=[];function r(c,i){const a=o.exports.createContext(i),u=n.length;n=[...n,i];function d(l){const{scope:f,children:x,...b}=l,N=(f==null?void 0:f[e][u])||a,S=o.exports.useMemo(()=>b,Object.values(b));return o.exports.createElement(N.Provider,{value:S},x)}function h(l,f){const x=(f==null?void 0:f[e][u])||a,b=o.exports.useContext(x);if(b)return b;if(i!==void 0)return i;throw new Error(`\`${l}\` must be used within \`${c}\``)}return d.displayName=c+"Provider",[d,h]}const s=()=>{const c=n.map(i=>o.exports.createContext(i));return function(a){const u=(a==null?void 0:a[e])||c;return o.exports.useMemo(()=>({[`__scope${e}`]:{...a,[e]:u}}),[a,u])}};return s.scopeName=e,[r,Y(s,...t)]}function Y(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(c){const i=r.reduce((a,{useScope:u,scopeName:d})=>{const l=u(c)[`__scope${d}`];return{...a,...l}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function M(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function I(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Z({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,s]=G({defaultProp:t,onChange:n}),c=e!==void 0,i=c?e:r,a=I(n),u=o.exports.useCallback(d=>{if(c){const l=typeof d=="function"?d(e):d;l!==e&&a(l)}else s(d)},[c,e,s,a]);return[i,u]}function G({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,s=o.exports.useRef(r),c=I(t);return o.exports.useEffect(()=>{s.current!==r&&(c(r),s.current=r)},[r,s,c]),n}function J(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const _=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function Q(e){const[t,n]=o.exports.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let i,a;if("borderBoxSize"in c){const u=c.borderBoxSize,d=Array.isArray(u)?u[0]:u;i=d.inlineSize,a=d.blockSize}else i=e.offsetWidth,a=e.offsetHeight;n({width:i,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const T=o.exports.forwardRef((e,t)=>{const{children:n,...r}=e,s=o.exports.Children.toArray(n),c=s.find(te);if(c){const i=c.props.children,a=s.map(u=>u===c?o.exports.Children.count(i)>1?o.exports.Children.only(null):o.exports.isValidElement(i)?i.props.children:null:u);return o.exports.createElement(O,g({},r,{ref:t}),o.exports.isValidElement(i)?o.exports.cloneElement(i,void 0,a):null)}return o.exports.createElement(O,g({},r,{ref:t}),n)});T.displayName="Slot";const O=o.exports.forwardRef((e,t)=>{const{children:n,...r}=e;return o.exports.isValidElement(n)?o.exports.cloneElement(n,{...ne(r,n.props),ref:F(t,n.ref)}):o.exports.Children.count(n)>1?o.exports.Children.only(null):null});O.displayName="SlotClone";const ee=({children:e})=>o.exports.createElement(o.exports.Fragment,null,e);function te(e){return o.exports.isValidElement(e)&&e.type===ee}function ne(e,t){const n={...t};for(const r in t){const s=e[r],c=t[r];/^on[A-Z]/.test(r)?n[r]=(...a)=>{c==null||c(...a),s==null||s(...a)}:r==="style"?n[r]={...s,...c}:r==="className"&&(n[r]=[s,c].filter(Boolean).join(" "))}return{...e,...n}}const re=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],j=re.reduce((e,t)=>{const n=o.exports.forwardRef((r,s)=>{const{asChild:c,...i}=r,a=c?T:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(a,g({},i,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),oe="Label",[Ne,se]=H(oe,{id:void 0,controlRef:{current:null}}),ce=e=>{const t=se("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id};function ie(e,t){return o.exports.useReducer((n,r)=>{const s=t[n][r];return s!=null?s:n},e)}const B=e=>{const{present:t,children:n}=e,r=ae(t),s=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),c=L(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(s,{ref:c}):null};B.displayName="Presence";function ae(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),s=o.exports.useRef(e),c=o.exports.useRef("none"),i=e?"mounted":"unmounted",[a,u]=ie(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const d=E(r.current);c.current=a==="mounted"?d:"none"},[a]),_(()=>{const d=r.current,h=s.current;if(h!==e){const f=c.current,x=E(d);e?u("MOUNT"):x==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(h&&f!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,u]),_(()=>{if(t){const d=l=>{const x=E(r.current).includes(l.animationName);l.target===t&&x&&V.exports.flushSync(()=>u("ANIMATION_END"))},h=l=>{l.target===t&&(c.current=E(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:o.exports.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}function E(e){return(e==null?void 0:e.animationName)||"none"}const U="Checkbox",[ue,Se]=X(U),[de,le]=ue(U),fe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:s,checked:c,defaultChecked:i,required:a,disabled:u,value:d="on",onCheckedChange:h,...l}=e,[f,x]=o.exports.useState(null),b=L(t,$=>x($)),N=ce(f),S=r||N,P=o.exports.useRef(!1),w=f?Boolean(f.closest("form")):!0,[k=!1,W]=Z({prop:c,defaultProp:i,onChange:h});return o.exports.createElement(de,{scope:n,state:k,disabled:u},o.exports.createElement(j.button,y({type:"button",role:"checkbox","aria-checked":m(k)?"mixed":k,"aria-labelledby":S,"aria-required":a,"data-state":z(k),"data-disabled":u?"":void 0,disabled:u,value:d},l,{ref:b,onKeyDown:M(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:M(e.onClick,$=>{W(R=>m(R)?!0:!R),w&&(P.current=$.isPropagationStopped(),P.current||$.stopPropagation())})})),w&&o.exports.createElement(xe,{control:f,bubbles:!P.current,name:s,value:d,checked:k,required:a,disabled:u,style:{transform:"translateX(-100%)"}}))}),pe="CheckboxIndicator",he=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=le(pe,n);return o.exports.createElement(B,{present:r||m(c.state)||c.state===!0},o.exports.createElement(j.span,y({"data-state":z(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),xe=e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=o.exports.useRef(null),i=J(n),a=Q(t);return o.exports.useEffect(()=>{const u=c.current,d=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(d,"checked").set;if(i!==n&&l){const f=new Event("click",{bubbles:r});u.indeterminate=m(n),l.call(u,m(n)?!1:n),u.dispatchEvent(f)}},[i,n,r]),o.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:m(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function m(e){return e==="indeterminate"}function z(e){return m(e)?"indeterminate":e?"checked":"unchecked"}const be=fe,$e=he;var v=new Map;v.set("bold",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});v.set("duotone",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});v.set("fill",function(){return p(C,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});v.set("light",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});v.set("thin",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});v.set("regular",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var me=function(t,n){return K(t,n,v)},D=o.exports.forwardRef(function(e,t){return p(q,{...Object.assign({ref:t},e,{renderPath:me})})});D.displayName="Check";const ve=D;function A(e){return p(be,{className:"w-6 h-6 p-[2px] bg-white rounded",...e,children:p($e,{asChild:!0,children:p(ve,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}try{A.displayName="Checkbox",A.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:A.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch{}export{A as C};
//# sourceMappingURL=index.bd2931b7.js.map