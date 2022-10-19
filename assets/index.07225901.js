import{w as b,r as Z,j as tt,F,q as et,s as nt,I as rt,c as it}from"./iframe.88b23f6d.js";function ot(r,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in r)){const s=Object.getOwnPropertyDescriptor(n,o);s&&Object.defineProperty(r,o,s.get?s:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var O;(function(r){r.DONE="done",r.ERROR="error",r.ACTIVE="active",r.WAITING="waiting"})(O||(O={}));var T;function E(r){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(r)}function st(r,t){if(r==null)return{};var e=at(r,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(e[n]=r[n]))}return e}function at(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}function ut(r){var t=ct(r,"string");return E(t)==="symbol"?t:String(t)}function ct(r,t){if(E(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(E(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function M(r){return dt(r)||ft(r)||Y(r)||lt()}function lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function dt(r){if(Array.isArray(r))return N(r)}function P(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function pt(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function U(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gt(r,t,e){return t&&U(r.prototype,t),e&&U(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function V(r,t){return _t(r)||yt(r,t)||Y(r,t)||ht()}function ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(r,t){if(!!r){if(typeof r=="string")return N(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N(r,t)}}function N(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function yt(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,s=!1,a,i;try{for(e=e.call(r);!(o=(a=e.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(u){s=!0,i=u}finally{try{!o&&e.return!=null&&e.return()}finally{if(s)throw i}}return n}}function _t(r){if(Array.isArray(r))return r}var S={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},K=((T=b.FEATURES)===null||T===void 0?void 0:T.interactionsDebugger)!==!0,G={debugger:!K,start:!1,back:!1,goto:!1,next:!1,end:!1},B=new Error("This function ran after the play function completed. Did you forget to `await` it?"),W=function(t){return Object.prototype.toString.call(t)==="[object Object]"},mt=function(t){return Object.prototype.toString.call(t)==="[object Module]"},vt=function(t){if(!W(t)&&!mt(t))return!1;if(t.constructor===void 0)return!0;var e=t.constructor.prototype;return!(!W(e)||Object.prototype.hasOwnProperty.call(e,"isPrototypeOf")===!1)},Ot=function(t){try{return new t.constructor}catch{return{}}},A=function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},L=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(e?t.shadowCalls:t.calls).filter(function(s){return s.retain});if(!!n.length){var o=new Map(Array.from(t.callRefsByResult.entries()).filter(function(s){var a=V(s,2),i=a[1];return i.retain}));return{cursor:n.length,calls:n,callRefsByResult:o}}},bt=function(){function r(){var t=this;pt(this,r),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=tt.getChannel(),this.state=b.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var e=function(l){var c=l.storyId,d=l.isPlaying,h=d===void 0?!0:d,g=l.isDebugging,f=g===void 0?!1:g,p=t.getState(c);t.setState(c,Object.assign({},A(),L(p,f),{shadowCalls:f?p.shadowCalls:[],chainedCallIds:f?p.chainedCallIds:new Set,playUntil:f?p.playUntil:void 0,isPlaying:h,isDebugging:f})),f||t.sync(c)};this.channel.on(F,e),this.channel.on(et,function(u){var l=u.storyId,c=u.newPhase,d=t.getState(l),h=d.isDebugging,g=d.forwardedException;if(t.setState(l,{renderPhase:c}),c==="playing"&&e({storyId:l,isDebugging:h}),c==="played"&&(t.setState(l,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),g))throw g}),this.channel.on(nt,function(){t.initialized?t.cleanup():t.initialized=!0});var n=function(l){var c=l.storyId,d=l.playUntil;t.getState(c).isDebugging||t.setState(c,function(g){var f=g.calls;return{calls:[],shadowCalls:f.map(function(p){return Object.assign({},p,{status:O.WAITING})}),isDebugging:!0}});var h=t.getLog(c);t.setState(c,function(g){var f,p=g.shadowCalls,_=p.findIndex(function(y){return y.id===h[0].callId});return{playUntil:d||((f=p.slice(0,_).filter(function(y){return y.interceptable}).slice(-1)[0])===null||f===void 0?void 0:f.id)}}),t.channel.emit(F,{storyId:c,isDebugging:!0})},o=function(l){var c,d=l.storyId,h=t.getState(d),g=h.isDebugging,f=t.getLog(d),p=g?f.findIndex(function(_){var y=_.status;return y===O.WAITING}):f.length;n({storyId:d,playUntil:(c=f[p-2])===null||c===void 0?void 0:c.callId})},s=function(l){var c=l.storyId,d=l.callId,h=t.getState(c),g=h.calls,f=h.shadowCalls,p=h.resolvers,_=g.find(function(v){var w=v.id;return w===d}),y=f.find(function(v){var w=v.id;return w===d});if(!_&&y&&Object.values(p).length>0){var m,k=(m=t.getLog(c).find(function(v){return v.status===O.WAITING}))===null||m===void 0?void 0:m.callId;y.id!==k&&t.setState(c,{playUntil:y.id}),Object.values(p).forEach(function(v){return v()})}else n({storyId:c,playUntil:d})},a=function(l){var c=l.storyId,d=t.getState(c),h=d.resolvers;if(Object.values(h).length>0)Object.values(h).forEach(function(p){return p()});else{var g,f=(g=t.getLog(c).find(function(p){return p.status===O.WAITING}))===null||g===void 0?void 0:g.callId;f?n({storyId:c,playUntil:f}):i({storyId:c})}},i=function(l){var c=l.storyId;t.setState(c,{playUntil:void 0,isDebugging:!1}),Object.values(t.getState(c).resolvers).forEach(function(d){return d()})};this.channel.on(S.START,n),this.channel.on(S.BACK,o),this.channel.on(S.GOTO,s),this.channel.on(S.NEXT,a),this.channel.on(S.END,i)}return gt(r,[{key:"getState",value:function(e){return this.state[e]||A()}},{key:"setState",value:function(e,n){var o=this.getState(e),s=typeof n=="function"?n(o):n;this.state=Object.assign({},this.state,P({},e,Object.assign({},o,s))),b.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"cleanup",value:function(){this.state=Object.entries(this.state).reduce(function(e,n){var o=V(n,2),s=o[0],a=o[1],i=L(a);return i&&(e[s]=Object.assign(A(),i)),e},{}),this.channel.emit(S.SYNC,{controlStates:G,logItems:[]}),b.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"getLog",value:function(e){var n=this.getState(e),o=n.calls,s=n.shadowCalls,a=M(s);o.forEach(function(u,l){a[l]=u});var i=new Set;return a.reduceRight(function(u,l){return l.args.forEach(function(c){c!=null&&c.__callId__&&i.add(c.__callId__)}),l.path.forEach(function(c){c.__callId__&&i.add(c.__callId__)}),l.interceptable&&!i.has(l.id)&&(u.unshift({callId:l.id,status:l.status}),i.add(l.id)),u},[])}},{key:"instrument",value:function(e,n){var o=this;if(!vt(e))return e;var s=n.mutate,a=s===void 0?!1:s,i=n.path,u=i===void 0?[]:i;return Object.keys(e).reduce(function(l,c){var d=e[c];return typeof d!="function"?(l[c]=o.instrument(d,Object.assign({},n,{path:u.concat(c)})),l):typeof d.__originalFn__=="function"?(l[c]=d,l):(l[c]=function(){for(var h=arguments.length,g=new Array(h),f=0;f<h;f++)g[f]=arguments[f];return o.track(c,d,g,n)},l[c].__originalFn__=d,Object.defineProperty(l[c],"name",{value:c,writable:!1}),Object.keys(d).length>0&&Object.assign(l[c],o.instrument(Object.assign({},d),Object.assign({},n,{path:u.concat(c)}))),l)},a?e:Ot(e))}},{key:"track",value:function(e,n,o,s){var a,i,u,l,c=(o==null||(a=o[0])===null||a===void 0?void 0:a.__storyId__)||((i=b.window.__STORYBOOK_PREVIEW__)===null||i===void 0||(u=i.urlStore)===null||u===void 0||(l=u.selection)===null||l===void 0?void 0:l.storyId),d=this.getState(c),h=d.cursor,g=d.parentId;this.setState(c,{cursor:h+1});var f="".concat(g||c," [").concat(h,"] ").concat(e),p=s.path,_=p===void 0?[]:p,y=s.intercept,m=y===void 0?!1:y,k=s.retain,v=k===void 0?!1:k,w=typeof m=="function"?m(e,_):m,x={id:f,parentId:g,storyId:c,cursor:h,path:_,method:e,args:o,interceptable:w,retain:v},Q=(w?this.intercept:this.invoke).call(this,n,x,s);return this.instrument(Q,Object.assign({},s,{mutate:!0,path:[{__callId__:x.id}]}))}},{key:"intercept",value:function(e,n,o){var s=this,a=this.getState(n.storyId),i=a.chainedCallIds,u=a.isDebugging,l=a.playUntil,c=i.has(n.id);return!u||c||l?(l===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(e,n,o)):new Promise(function(d){s.setState(n.storyId,function(h){var g=h.resolvers;return{isLocked:!1,resolvers:Object.assign({},g,P({},n.id,d))}})}).then(function(){return s.setState(n.storyId,function(d){var h=d.resolvers,g=n.id;h[g];var f=st(h,[g].map(ut));return{isLocked:!0,resolvers:f}}),s.invoke(e,n,o)})}},{key:"invoke",value:function(e,n,o){var s=this,a=this.getState(n.storyId),i=a.callRefsByResult,u=a.forwardedException,l=a.renderPhase,c=Object.assign({},n,{args:n.args.map(function(f){if(i.has(f))return i.get(f);if(f instanceof b.window.HTMLElement){var p=f.prefix,_=f.localName,y=f.id,m=f.classList,k=f.innerText,v=Array.from(m);return{__element__:{prefix:p,localName:_,id:y,classNames:v,innerText:k}}}return f})});n.path.forEach(function(f){f!=null&&f.__callId__&&s.setState(n.storyId,function(p){var _=p.chainedCallIds;return{chainedCallIds:new Set(Array.from(_).concat(f.__callId__))}})});var d=function(p){if(p instanceof Error){var _=p.name,y=p.message,m=p.stack,k={name:_,message:y,stack:m};if(s.update(Object.assign({},c,{status:O.ERROR,exception:k})),s.setState(n.storyId,function(v){return{callRefsByResult:new Map([].concat(M(Array.from(v.callRefsByResult.entries())),[[p,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&p!==B)throw rt;return s.setState(n.storyId,{forwardedException:p}),p}throw p};try{if(u)throw this.setState(n.storyId,{forwardedException:void 0}),u;if(l==="played"&&!n.retain)throw B;var h=o.getArgs?o.getArgs(n,this.getState(n.storyId)):n.args,g=e.apply(void 0,M(h.map(function(f){return typeof f!="function"||Object.keys(f).length?f:function(){var p=s.getState(n.storyId),_=p.cursor,y=p.parentId;s.setState(n.storyId,{cursor:0,parentId:n.id});var m=function(){return s.setState(n.storyId,{cursor:_,parentId:y})},k=f.apply(void 0,arguments);return k instanceof Promise?k.then(m,m):m(),k}})));return g&&["object","function","symbol"].includes(E(g))&&this.setState(n.storyId,function(f){return{callRefsByResult:new Map([].concat(M(Array.from(f.callRefsByResult.entries())),[[g,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},c,{status:g instanceof Promise?O.ACTIVE:O.DONE})),g instanceof Promise?g.then(function(f){return s.update(Object.assign({},c,{status:O.DONE})),f},d):g}catch(f){return d(f)}}},{key:"update",value:function(e){var n=this;clearTimeout(this.getState(e.storyId).syncTimeout),this.channel.emit(S.CALL,e),this.setState(e.storyId,function(o){var s=o.calls,a=s.concat(e).reduce(function(i,u){return Object.assign(i,P({},u.id,u))},{});return{calls:Object.values(a).sort(function(i,u){return i.id.localeCompare(u.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(e.storyId)},0)}})}},{key:"sync",value:function(e){var n=this.getState(e),o=n.isLocked,s=n.isPlaying,a=this.getLog(e),i=a.some(function(c){return c.status===O.ACTIVE});if(K||o||i||a.length===0){this.channel.emit(S.SYNC,{controlStates:G,logItems:a});return}var u=a.some(function(c){return[O.DONE,O.ERROR].includes(c.status)}),l={debugger:!0,start:u,back:u,goto:!0,next:s,end:s};this.channel.emit(S.SYNC,{controlStates:l,logItems:a})}}]),r}();function Pt(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var e,n,o,s,a=!1,i=!1;if(((e=b.window.location)===null||e===void 0||(n=e.search)===null||n===void 0?void 0:n.indexOf("instrument=true"))!==-1?a=!0:((o=b.window.location)===null||o===void 0||(s=o.search)===null||s===void 0?void 0:s.indexOf("instrument=false"))!==-1&&(i=!0),b.window.parent===b.window&&!a||i)return r;b.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(b.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new bt);var u=b.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return u.instrument(r,t)}catch(l){return Z.warn(l),r}}var I={};Object.defineProperty(I,"__esModule",{value:!0});var $=I.spyOn=J=I.mocked=q=I.fn=X=I.ModuleMocker=void 0;function C(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}const D="mockConstructor",z=/[\s!-\/:-@\[-`{-~]/,kt=new RegExp(z.source,"g"),It=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function St(r,t){let e;switch(t){case 1:e=function(n){return r.apply(this,arguments)};break;case 2:e=function(n,o){return r.apply(this,arguments)};break;case 3:e=function(n,o,s){return r.apply(this,arguments)};break;case 4:e=function(n,o,s,a){return r.apply(this,arguments)};break;case 5:e=function(n,o,s,a,i){return r.apply(this,arguments)};break;case 6:e=function(n,o,s,a,i,u){return r.apply(this,arguments)};break;case 7:e=function(n,o,s,a,i,u,l){return r.apply(this,arguments)};break;case 8:e=function(n,o,s,a,i,u,l,c){return r.apply(this,arguments)};break;case 9:e=function(n,o,s,a,i,u,l,c,d){return r.apply(this,arguments)};break;default:e=function(){return r.apply(this,arguments)};break}return e}function j(r){return Object.prototype.toString.apply(r).slice(8,-1)}function wt(r){const t=j(r);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"?"function":Array.isArray(r)?"array":t==="Object"?"object":t==="Number"||t==="String"||t==="Boolean"||t==="Symbol"?"constant":t==="Map"||t==="WeakMap"||t==="Set"?"collection":t==="RegExp"?"regexp":r===void 0?"undefined":r===null?"null":null}function Et(r,t){if(t==="arguments"||t==="caller"||t==="callee"||t==="name"||t==="length"){const e=j(r);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"}return t==="source"||t==="global"||t==="ignoreCase"||t==="multiline"?j(r)==="RegExp":!1}class H{constructor(t){C(this,"_environmentGlobal",void 0),C(this,"_mockState",void 0),C(this,"_mockConfigRegistry",void 0),C(this,"_spyState",void 0),C(this,"_invocationCallCounter",void 0),this._environmentGlobal=t,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(t){if(!t)return[];const e=new Set,n=this._environmentGlobal.Object.prototype,o=this._environmentGlobal.Function.prototype,s=this._environmentGlobal.RegExp.prototype,a=Object.prototype,i=Function.prototype,u=RegExp.prototype;for(;t!=null&&t!==n&&t!==o&&t!==s&&t!==a&&t!==i&&t!==u;){const l=Object.getOwnPropertyNames(t);for(let c=0;c<l.length;c++){const d=l[c];if(!Et(t,d)){const h=Object.getOwnPropertyDescriptor(t,d);(h!==void 0&&!h.get||t.__esModule)&&e.add(d)}}t=Object.getPrototypeOf(t)}return Array.from(e)}_ensureMockConfig(t){let e=this._mockConfigRegistry.get(t);return e||(e=this._defaultMockConfig(),this._mockConfigRegistry.set(t,e)),e}_ensureMockState(t){let e=this._mockState.get(t);return e||(e=this._defaultMockState(),this._mockState.set(t,e)),e.calls.length>0&&(e.lastCall=e.calls[e.calls.length-1]),e}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(t,e){if(t.type==="object")return new this._environmentGlobal.Object;if(t.type==="array")return new this._environmentGlobal.Array;if(t.type==="regexp")return new this._environmentGlobal.RegExp("");if(t.type==="constant"||t.type==="collection"||t.type==="null"||t.type==="undefined")return t.value;if(t.type==="function"){const n=t.members&&t.members.prototype&&t.members.prototype.members||{},o=this._getSlots(n),s=this,a=St(function(...u){const l=s._ensureMockState(i),c=s._ensureMockConfig(i);l.instances.push(this),l.calls.push(u);const d={type:"incomplete",value:void 0};l.results.push(d),l.invocationCallOrder.push(s._invocationCallCounter++);let h,g,f=!1;try{h=(()=>{if(this instanceof i){o.forEach(y=>{if(n[y].type==="function"){const m=this[y];this[y]=s.generateFromMetadata(n[y]),this[y]._protoImpl=m}});const _=c.specificMockImpls.length?c.specificMockImpls.shift():c.mockImpl;return _&&_.apply(this,arguments)}let p=c.specificMockImpls.shift();if(p===void 0&&(p=c.mockImpl),p)return p.apply(this,arguments);if(i._protoImpl)return i._protoImpl.apply(this,arguments)})()}catch(p){throw g=p,f=!0,p}finally{d.type=f?"throw":"return",d.value=f?g:h}return h},t.length||0),i=this._createMockFunction(t,a);return i._isMockFunction=!0,i.getMockImplementation=()=>this._ensureMockConfig(i).mockImpl,typeof e=="function"&&this._spyState.add(e),this._mockState.set(i,this._defaultMockState()),this._mockConfigRegistry.set(i,this._defaultMockConfig()),Object.defineProperty(i,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(i),set:u=>this._mockState.set(i,u)}),i.mockClear=()=>(this._mockState.delete(i),i),i.mockReset=()=>(i.mockClear(),this._mockConfigRegistry.delete(i),i),i.mockRestore=()=>(i.mockReset(),e?e():void 0),i.mockReturnValueOnce=u=>i.mockImplementationOnce(()=>u),i.mockResolvedValueOnce=u=>i.mockImplementationOnce(()=>Promise.resolve(u)),i.mockRejectedValueOnce=u=>i.mockImplementationOnce(()=>Promise.reject(u)),i.mockReturnValue=u=>i.mockImplementation(()=>u),i.mockResolvedValue=u=>i.mockImplementation(()=>Promise.resolve(u)),i.mockRejectedValue=u=>i.mockImplementation(()=>Promise.reject(u)),i.mockImplementationOnce=u=>(this._ensureMockConfig(i).specificMockImpls.push(u),i),i.mockImplementation=u=>{const l=this._ensureMockConfig(i);return l.mockImpl=u,i},i.mockReturnThis=()=>i.mockImplementation(function(){return this}),i.mockName=u=>{if(u){const l=this._ensureMockConfig(i);l.mockName=u}return i},i.getMockName=()=>this._ensureMockConfig(i).mockName||"jest.fn()",t.mockImpl&&i.mockImplementation(t.mockImpl),i}else{const n=t.type||"undefined type";throw new Error("Unrecognized type "+n)}}_createMockFunction(t,e){let n=t.name;if(!n)return e;const o="bound ";let s="";if(n&&n.startsWith(o))do n=n.substring(o.length),s=".bind(null)";while(n&&n.startsWith(o));if(n===D)return e;(It.has(n)||/^\d/.test(n))&&(n="$"+n),z.test(n)&&(n=n.replace(kt,"$"));const a="return function "+n+"() {return "+D+".apply(this,arguments);}"+s;return new this._environmentGlobal.Function(D,a)(e)}_generateMock(t,e,n){const o=this._makeComponent(t);return t.refID!=null&&(n[t.refID]=o),this._getSlots(t.members).forEach(s=>{const a=t.members&&t.members[s]||{};a.ref!=null?e.push(function(i){return()=>o[s]=n[i]}(a.ref)):o[s]=this._generateMock(a,e,n)}),t.type!=="undefined"&&t.type!=="null"&&o.prototype&&typeof o.prototype=="object"&&(o.prototype.constructor=o),o}generateFromMetadata(t){const e=[],n={},o=this._generateMock(t,e,n);return e.forEach(s=>s()),o}getMetadata(t,e){const n=e||new Map,o=n.get(t);if(o!=null)return{ref:o};const s=wt(t);if(!s)return null;const a={type:s};if(s==="constant"||s==="collection"||s==="undefined"||s==="null")return a.value=t,a;s==="function"&&(a.name=t.name,t._isMockFunction===!0&&(a.mockImpl=t.getMockImplementation())),a.refID=n.size,n.set(t,a.refID);let i=null;return s!=="array"&&this._getSlots(t).forEach(u=>{if(s==="function"&&t._isMockFunction===!0&&u.match(/^mock/))return;const l=this.getMetadata(t[u],n);l&&(i||(i={}),i[u]=l)}),i&&(a.members=i),a}isMockFunction(t){return!!t&&t._isMockFunction===!0}fn(t){const e=t?t.length:0,n=this._makeComponent({length:e,type:"function"});return t&&n.mockImplementation(t),n}spyOn(t,e,n){if(n)return this._spyOnProperty(t,e,n);if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");const o=t[e];if(!this.isMockFunction(o)){if(typeof o!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(o)+" given instead");const s=Object.prototype.hasOwnProperty.call(t,e);let a=Object.getOwnPropertyDescriptor(t,e),i=Object.getPrototypeOf(t);for(;!a&&i!==null;)a=Object.getOwnPropertyDescriptor(i,e),i=Object.getPrototypeOf(i);let u;if(a&&a.get){const l=a.get;u=this._makeComponent({type:"function"},()=>{a.get=l,Object.defineProperty(t,e,a)}),a.get=()=>u,Object.defineProperty(t,e,a)}else u=this._makeComponent({type:"function"},()=>{s?t[e]=o:delete t[e]}),t[e]=u;u.mockImplementation(function(){return o.apply(this,arguments)})}return t[e]}_spyOnProperty(t,e,n="get"){if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");if(!t)throw new Error("spyOn could not find an object to spy upon for "+e);if(!e)throw new Error("No property name supplied");let o=Object.getOwnPropertyDescriptor(t,e),s=Object.getPrototypeOf(t);for(;!o&&s!==null;)o=Object.getOwnPropertyDescriptor(s,e),s=Object.getPrototypeOf(s);if(!o)throw new Error(e+" property does not exist");if(!o.configurable)throw new Error(e+" is not declared configurable");if(!o[n])throw new Error("Property "+e+" does not have access type "+n);const a=o[n];if(!this.isMockFunction(a)){if(typeof a!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(a)+" given instead");o[n]=this._makeComponent({type:"function"},()=>{o[n]=a,Object.defineProperty(t,e,o)}),o[n].mockImplementation(function(){return a.apply(this,arguments)})}return Object.defineProperty(t,e,o),o[n]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(t=>t()),this._spyState=new Set}_typeOf(t){return t==null?""+t:typeof t}mocked(t,e=!1){return t}}var X=I.ModuleMocker=H;const R=new H(it),Rt=R.fn.bind(R);var q=I.fn=Rt;const Ct=R.spyOn.bind(R);$=I.spyOn=Ct;const Mt=R.mocked.bind(R);var J=I.mocked=Mt;const At=ot({__proto__:null,get spyOn(){return $},get mocked(){return J},get fn(){return q},get ModuleMocker(){return X},default:I},[I]);export{X as M,Pt as i,At as m};
//# sourceMappingURL=index.07225901.js.map
