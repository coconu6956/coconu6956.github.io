(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7290:function(e,t,n){"use strict";n.d(t,{H:function(){return k},b:function(){return ee},c:function(){return q},g:function(){return _},h:function(){return w},p:function(){return i},r:function(){return le}});let l,s,r=!1;const $="undefined"!=typeof window?window:{},a=$.document||{head:{}},o={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=(e,t,n,l)=>{n&&n.map((([n,l,s])=>{const r=d(e,n),$=m(t,s),a=f(n);o.ael(r,l,$,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>o.rel(r,l,$,a)))}))},m=(e,t)=>n=>{try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(l){$e(l)}},d=(e,t)=>4&t?a:8&t?$:e,f=e=>0!=(2&e),h="http://www.w3.org/1999/xlink",g=new WeakMap,p=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,l=t.$flags$,s=(t.$tagName$,()=>{}),r=((e,t,n,l)=>{let s=y(t),r=ie.get(s);if(e=11===e.nodeType?e:a,r)if("string"==typeof r){e=e.head||e;let t,n=g.get(e);n||g.set(e,n=new Set),n.has(s)||(t=a.createElement("style"),t.innerHTML=r,e.insertBefore(t,e.querySelector("link")),n&&n.add(s))}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return s})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=r,n.classList.add(r+"-h")),s()},y=(e,t)=>"sc-"+e.$tagName$,v={},b=e=>"object"===(e=typeof e)||"function"===e,w=(e,t,...n)=>{let l=null,s=null,r=!1,$=!1,a=[];const o=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?o(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!b(l))&&(l=String(l)),r&&$?a[a.length-1].$text$+=l:a.push(r?E(null,l):l),$=r)};if(o(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,a,L);const i=E(e,null);return i.$attrs$=t,a.length>0&&(i.$children$=a),i.$key$=s,i},E=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},k={},L={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(S)},R=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),w(e.vtag,t,...e.vchildren||[])}const t=E(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},M=(e,t,n,l,s,r)=>{if(n!==l){let i=re(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=P(n),r=P(l);t.remove(...s.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const $=b(l);if((i||$&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(a){}let o=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,o=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(o?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!i||4&r||s)&&!$&&(l=!0===l?"":l,o?e.setAttributeNS(h,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):re($,c)?c.slice(2):c[2]+t.slice(3),n&&o.rel(e,t,n,!1),l&&o.ael(e,t,l,!1)}},N=/\s/,P=e=>e?e.split(N):[],x=(e,t,n,l)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||v,$=t.$attrs$||v;for(l in r)l in $||M(s,l,r[l],void 0,n,t.$flags$);for(l in $)M(s,l,r[l],$[l],n,t.$flags$)},C=(e,t,n,s)=>{let r,$,o=t.$children$[n],i=0;if(null!==o.$text$)r=o.$elm$=a.createTextNode(o.$text$);else if(r=o.$elm$=a.createElement(o.$tag$),x(null,o,false),null!=l&&r["s-si"]!==l&&r.classList.add(r["s-si"]=l),o.$children$)for(i=0;i<o.$children$.length;++i)$=C(e,o,i),$&&r.appendChild($);return r},T=(e,t,n,l,r,$)=>{let a,o=e;for(o.shadowRoot&&o.tagName===s&&(o=o.shadowRoot);r<=$;++r)l[r]&&(a=C(null,n,r),a&&(l[r].$elm$=a,o.insertBefore(a,t)))},j=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.$elm$,H(l),s.remove())},O=(e,t)=>e.$tag$===t.$tag$&&e.$key$===t.$key$,A=(e,t)=>{const n=t.$elm$=e.$elm$,l=e.$children$,s=t.$children$,r=t.$tag$,$=t.$text$;null===$?("slot"===r||x(e,t,false),null!==l&&null!==s?((e,t,n,l)=>{let s,r,$=0,a=0,o=0,i=0,c=t.length-1,u=t[0],m=t[c],d=l.length-1,f=l[0],h=l[d];for(;$<=c&&a<=d;)if(null==u)u=t[++$];else if(null==m)m=t[--c];else if(null==f)f=l[++a];else if(null==h)h=l[--d];else if(O(u,f))A(u,f),u=t[++$],f=l[++a];else if(O(m,h))A(m,h),m=t[--c],h=l[--d];else if(O(u,h))A(u,h),e.insertBefore(u.$elm$,m.$elm$.nextSibling),u=t[++$],h=l[--d];else if(O(m,f))A(m,f),e.insertBefore(m.$elm$,u.$elm$),m=t[--c],f=l[++a];else{for(o=-1,i=$;i<=c;++i)if(t[i]&&null!==t[i].$key$&&t[i].$key$===f.$key$){o=i;break}o>=0?(r=t[o],r.$tag$!==f.$tag$?s=C(t&&t[a],n,o):(A(r,f),t[o]=void 0,s=r.$elm$),f=l[++a]):(s=C(t&&t[a],n,a),f=l[++a]),s&&u.$elm$.parentNode.insertBefore(s,u.$elm$)}$>c?T(e,null==l[d+1]?null:l[d+1].$elm$,n,l,a,d):a>d&&j(t,$,c)})(n,l,t,s):null!==s?(null!==e.$text$&&(n.textContent=""),T(n,null,t,s,0,s.length-1)):null!==l&&j(l,0,l.length-1)):e.$text$!==$&&(n.data=$)},H=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(H)},I=(e,t)=>{const n=e.$hostElement$,r=e.$cmpMeta$,$=e.$vnode$||E(null,null),a=(o=t)&&o.$tag$===k?t:w(null,null,t);var o;s=n.tagName,r.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},r.$attrsToReflect$.map((([e,t])=>a.$attrs$[t]=n[e]))),a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=$.$elm$=n.shadowRoot||n,l=n["s-sc"],A($,a)},_=e=>ne(e).$hostElement$,q=(e,t,n)=>{const l=_(e);return{emit:e=>z(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},z=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},B=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},U=(e,t)=>{if(e.$flags$|=16,4&e.$flags$)return void(e.$flags$|=512);B(e,e.$ancestorComponent$);return ge((()=>Z(e,t)))},Z=(e,t)=>{const n=(e.$cmpMeta$.$tagName$,()=>{}),l=e.$lazyInstance$;let s;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>G(l,e,t))),e.$queuedListeners$=null),s=G(l,"componentWillLoad")),n(),J(s,(()=>D(e,l,t)))},D=async(e,t,n)=>{const l=e.$hostElement$,s=(e.$cmpMeta$.$tagName$,()=>{}),r=l["s-rc"];n&&p(e);const $=(e.$cmpMeta$.$tagName$,()=>{});V(e,t),r&&(r.map((e=>e())),l["s-rc"]=void 0),$(),s();{const t=l["s-p"],n=()=>W(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}},V=(e,t,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,I(e,t)}catch(l){$e(l,e.$hostElement$)}return null},W=e=>{e.$cmpMeta$.$tagName$;const t=e.$hostElement$,n=()=>{},l=e.$lazyInstance$,s=e.$ancestorComponent$;64&e.$flags$?(G(l,"componentDidUpdate"),n()):(e.$flags$|=64,K(t),G(l,"componentDidLoad"),n(),e.$onReadyResolve$(t),s||F()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&he((()=>U(e,!1))),e.$flags$&=-517},F=e=>{K(a.documentElement),he((()=>z($,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})))},G=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){$e(l)}},J=(e,t)=>e&&e.then?e.then(t):t(),K=e=>e.classList.add("hydrated"),Q=(e,t,n,l)=>{const s=ne(e),r=s.$hostElement$,$=s.$instanceValues$.get(t),a=s.$flags$,o=s.$lazyInstance$;var i,c;if(i=n,c=l.$members$[t][0],n=null==i||b(i)?i:4&c?"false"!==i&&(""===i||!!i):1&c?String(i):i,!(8&a&&void 0!==$||n===$)&&(s.$instanceValues$.set(t,n),o)){if(l.$watchers$&&128&a){const e=l.$watchers$[t];e&&e.map((e=>{try{o[e](n,$,t)}catch(l){$e(l,r)}}))}2==(18&a)&&U(s,!1)}},X=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const l=Object.entries(t.$members$),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return t=e,ne(this).$instanceValues$.get(t);var t},set(n){Q(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ne(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.$attrsToReflect$.push([e,s]),s}))}}return e},Y=async(e,t,n,l,s)=>{if(0==(32&t.$flags$)){{if(t.$flags$|=32,(s=oe(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.$watchers$=s.watchers,X(s,n,2),s.isProxied=!0);const e=(n.$tagName$,()=>{});t.$flags$|=8;try{new s(t)}catch(a){$e(a)}t.$flags$&=-9,t.$flags$|=128,e()}if(s.style){let e=s.style;const t=y(n);if(!ie.has(t)){const l=(n.$tagName$,()=>{});((e,t,n)=>{let l=ie.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ie.set(e,l)})(t,e,!!(1&n.$flags$)),l()}}}const r=t.$ancestorComponent$,$=()=>U(t,!0);r&&r["s-rc"]?r["s-rc"].push($):$()},ee=(e,t={})=>{const n=()=>{},l=[],s=t.exclude||[],r=$.customElements,i=a.head,c=i.querySelector("meta[charset]"),m=a.createElement("style"),d=[];let f,h=!0;Object.assign(o,t),o.$resourcesUrl$=new URL(t.resourcesUrl||"./",a.baseURI).href,e.map((e=>{e[1].map((t=>{const n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};n.$members$=t[2],n.$listeners$=t[3],n.$attrsToReflect$=[],n.$watchers$={};const $=n.$tagName$,a=class extends HTMLElement{constructor(e){super(e),se(e=this,n),1&n.$flags$&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),h?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.$flags$)){const t=ne(e),n=t.$cmpMeta$,l=(n.$tagName$,()=>{});if(1&t.$flags$)u(e,t,n.$listeners$);else{t.$flags$|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){B(t,t.$ancestorComponent$=n);break}}n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),Y(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(e=>{if(0==(1&o.$flags$)){const t=ne(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this)))}componentOnReady(){return ne(this).$onReadyPromise$}};n.$lazyBundleId$=e[0],s.includes($)||r.get($)||(l.push($),r.define($,X(a,n,1)))}))})),m.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),i.insertBefore(m,c?c.nextSibling:i.firstChild),h=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>f=setTimeout(F,30))),n()},te=new WeakMap,ne=e=>te.get(e),le=(e,t)=>te.set(t.$lazyInstance$=e,t),se=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e)),n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[],u(e,n,t.$listeners$),te.set(e,n)},re=(e,t)=>t in e,$e=(e,t)=>(0,console.error)(e,t),ae=new Map,oe=(e,t,l)=>{const s=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$,$=ae.get(r);return $?$[s]:n(9047)(`./${r}.entry.js`).then((e=>(ae.set(r,e),e[s])),$e)},ie=new Map,ce=[],ue=[],me=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&o.$flags$?he(fe):o.raf(fe))},de=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){$e(t)}e.length=0},fe=()=>{de(ce),de(ue),(r=ce.length>0)&&o.raf(fe)},he=e=>i().then(e),ge=me(ue,!0)},9047:function(e,t,n){var l={"./deckgo-highlight-code.entry.js":[5533,533]};function s(e){if(!n.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],s=t[0];return n.e(t[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(l)},s.id=9047,e.exports=s},9669:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return u},default:function(){return c}});var l=n(7294),s=n(1883),r=n(8771),$=n(8678),a=n(9357),o=n(7290);var i;!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,o.p)().then((()=>(0,o.b)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"],[8,"copy","onCopyCleanZeroWidthSpaces"]]]]]],i)));var c=e=>{var t;let{data:n,location:a}=e;const o=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",i=n.allMarkdownRemark.nodes;return 0===i.length?l.createElement($.Z,{location:a,title:o},l.createElement(r.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement($.Z,{location:a,title:o},l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},i.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(s.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const u=()=>l.createElement(a.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-474a24d6ac18aced5d39.js.map