(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,l,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(2648).Z,o=l(7273).Z,n=r(l(7294)),a=l(3297),u=l(4634),i=l(4611),s=l(3794),d=l(2725),f=l(3462),c=l(1018),p=l(7190),h=l(1210),y=l(8684);let _=new Set;function b(e,t,l,r,o){if(o||u.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,n=t+"%"+l+"%"+o;if(_.has(n))return;_.add(n)}Promise.resolve(e.prefetch(t,l,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let v=n.default.forwardRef(function(e,t){let l,r;let{href:i,as:_,children:v,prefetch:g,passHref:C,replace:k,shallow:M,scroll:O,locale:j,onClick:E,onMouseEnter:P,onTouchStart:w,legacyBehavior:x=!1}=e,T=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);l=v,x&&("string"==typeof l||"number"==typeof l)&&(l=n.default.createElement("a",null,l));let L=!1!==g,R=n.default.useContext(f.RouterContext),S=n.default.useContext(c.AppRouterContext),D=null!=R?R:S,A=!R,{href:I,as:Z}=n.default.useMemo(()=>{if(!R){let e=m(i);return{href:e,as:_?m(_):e}}let[e,t]=a.resolveHref(R,i,!0);return{href:e,as:_?a.resolveHref(R,_):t||e}},[R,i,_]),N=n.default.useRef(I),U=n.default.useRef(Z);x&&(r=n.default.Children.only(l));let V=x?r&&"object"==typeof r&&r.ref:t,[H,K,G]=p.useIntersection({rootMargin:"200px"}),B=n.default.useCallback(e=>{(U.current!==Z||N.current!==I)&&(G(),U.current=Z,N.current=I),H(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[Z,V,I,G,H]);n.default.useEffect(()=>{D&&K&&L&&b(D,I,Z,{locale:j},A)},[Z,I,K,j,L,null==R?void 0:R.locale,D,A]);let F={ref:B,onClick(e){x||"function"!=typeof E||E(e),x&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,l,r,o,a,i,s,d,f){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(function(e){let t=e.currentTarget,l=t.getAttribute("target");return l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!u.isLocalURL(l)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](l,r,{shallow:a,locale:s,scroll:i}):t[o?"replace":"push"](r||l,{forceOptimisticNavigation:!f})};d?n.default.startTransition(h):h()}(e,D,I,Z,k,M,O,j,A,L)},onMouseEnter(e){x||"function"!=typeof P||P(e),x&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),D&&(L||!A)&&b(D,I,Z,{locale:j,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){x||"function"!=typeof w||w(e),x&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),D&&(L||!A)&&b(D,I,Z,{locale:j,priority:!0,bypassPrefetchedCheck:!0},A)}};if(s.isAbsoluteUrl(Z))F.href=Z;else if(!x||C||"a"===r.type&&!("href"in r.props)){let e=void 0!==j?j:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(Z,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);F.href=t||y.addBasePath(d.addLocale(Z,e,null==R?void 0:R.defaultLocale))}return x?n.default.cloneElement(r,F):n.default.createElement("a",Object.assign({},T,F),l)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:l,disabled:i}=e,s=i||!n,[d,f]=r.useState(!1),c=r.useRef(null),p=r.useCallback(e=>{c.current=e},[]);r.useEffect(()=>{if(n){if(s||d)return;let e=c.current;if(e&&e.tagName){let r=function(e,t,l){let{id:r,observer:o,elements:n}=function(e){let t;let l={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===l.root&&e.margin===l.margin);if(r&&(t=a.get(r)))return t;let o=new Map,n=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;t&&l&&t(l)})},e);return t={id:l,observer:n,elements:o},u.push(l),a.set(l,t),t}(l);return n.set(e,t),o.observe(e),function(){if(n.delete(e),o.unobserve(e),0===n.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:l});return r}}else if(!d){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[s,l,t,d,c.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,d,h]};var r=l(7294),o=l(9311);let n="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},638:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let l=n.default,o={loading:e=>{let{error:t,isLoading:l,pastDelay:r}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),o=r({},o,t);let i=o.loader,s=()=>null!=i?i().then(a):Promise.resolve(a(()=>null));return(o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?l(r({},o,{loader:s})):(delete o.webpack,delete o.modules,u(l,o))},t.noSSR=u;var r=l(6495).Z,o=l(2648).Z,n=(o(l(7294)),o(l(4302)));function a(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,l(2648).Z)(l(7294));let o=r.default.createContext(null);t.LoadableContext=o},4302:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(6495).Z,o=(0,l(2648).Z)(l(7294)),n=l(6319);let a=[],u=[],i=!1;function s(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function a(){if(!r){let t=new d(e,l);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!i){let e=l.webpack?l.webpack():l.modules;e&&u.push(t=>{for(let l of e)if(-1!==t.indexOf(l))return a()})}function s(e,t){!function(){a();let e=o.default.useContext(n.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let u=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>{var t;return u.loading||u.error?o.default.createElement(l.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?o.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return s.preload=()=>a(),s.displayName="LoadableComponent",o.default.forwardRef(s)}(s,e)}function c(e,t){let l=[];for(;e.length;){let r=e.pop();l.push(r(t))}return Promise.all(l).then(()=>{if(e.length)return c(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let l=()=>(i=!0,t());c(u,e).then(l,l)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},5152:function(e,t,l){e.exports=l(638)},9008:function(e,t,l){e.exports=l(5443)},1664:function(e,t,l){e.exports=l(8418)}}]);