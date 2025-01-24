import{A as X,Ba as Ee,Ca as Ae,E as Q,Ha as De,I as ge,Q as be,T as ve,X as c,Ya as x,Zb as P,_ as y,_a as O,a as f,ab as S,ba as r,cc as Me,g as pe,ga as ye,gb as Te,hc as g,j as C,k as fe,n as _e,oa as E,r as Z,sa as A,ta as _,vc as we,wa as D,za as Ie}from"./chunk-VF77OBZC.js";function At(t){return t!=null&&`${t}`!="false"}function ke(t,n=0){return Ke(t)?Number(t):arguments.length===2?n:0}function Ke(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function m(t){return t instanceof D?t.nativeElement:t}var J;try{J=typeof Intl<"u"&&Intl.v8BreakIterator}catch{J=!1}var M=(()=>{class t{_platformId=r(Ee);isBrowser=this._platformId?we(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||J)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var T,Ce=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ct(){if(T)return T;if(typeof document!="object"||!document)return T=new Set(Ce),T;let t=document.createElement("input");return T=new Set(Ce.filter(n=>(t.setAttribute("type",n),t.type===n))),T}var F;function We(){if(F==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>F=!0}))}finally{F=F||!1}return F}function w(t){return We()?t:!!t.capture}var N=function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t}(N||{}),B,I;function xt(){if(I==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return I=!1,I;if("scrollBehavior"in document.documentElement.style)I=!0;else{let t=Element.prototype.scrollTo;t?I=!/\{\s*\[native code\]\s*\}/.test(t.toString()):I=!1}}return I}function Ot(){if(typeof document!="object"||!document)return N.NORMAL;if(B==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),B=N.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,B=t.scrollLeft===0?N.NEGATED:N.INVERTED),t.remove()}return B}var q;function ze(){if(q==null){let t=typeof document<"u"?document.head:null;q=!!(t&&(t.createShadowRoot||t.attachShadow))}return q}function xe(t){if(ze()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function p(t){return t.composedPath?t.composedPath()[0]:t.target}var V=new WeakMap,H=(()=>{class t{_appRef;_injector=r(E);_environmentInjector=r(ye);load(e){let i=this._appRef=this._appRef||this._injector.get(Te),s=V.get(i);s||(s={loaders:new Set,refs:[]},V.set(i,s),i.onDestroy(()=>{V.get(i)?.refs.forEach(o=>o.destroy()),V.delete(i)})),s.loaders.has(e)||(s.loaders.add(e),s.refs.push(Me(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ee=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,s){},styles:[".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}"],encapsulation:2,changeDetection:0})}return t})();function Ut(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}function Ge(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var $e=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ye=(()=>{class t{_mutationObserverFactory=r($e);_observedElements=new Map;_ngZone=r(_);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=m(e);return new pe(s=>{let a=this._observeElement(i).pipe(Z(l=>l.filter(h=>!Ge(h))),X(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{s.next(l)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new C,s=this._mutationObserverFactory.create(o=>i.next(o));s&&s.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:s,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:s}=this._observedElements.get(e);i&&i.disconnect(),s.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xt=(()=>{class t{_contentObserver=r(Ye);_elementRef=r(D);event=new A;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ke(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Q(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=O({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",P],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],features:[S]})}return t})();var Xe=(()=>{class t{_platform=r(M);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return qe(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=Qe(rt(e));if(i&&(Oe(i)===-1||!this.isVisible(i)))return!1;let s=e.nodeName.toLowerCase(),o=Oe(e);return e.hasAttribute("contenteditable")?o!==-1:s==="iframe"||s==="object"||this._platform.WEBKIT&&this._platform.IOS&&!st(e)?!1:s==="audio"?e.hasAttribute("controls")?o!==-1:!1:s==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return ot(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qe(t){try{return t.frameElement}catch{return null}}function qe(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Je(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function et(t){return it(t)&&t.type=="hidden"}function tt(t){return nt(t)&&t.hasAttribute("href")}function it(t){return t.nodeName.toLowerCase()=="input"}function nt(t){return t.nodeName.toLowerCase()=="a"}function Fe(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Oe(t){if(!Fe(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function st(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function ot(t){return et(t)?!1:Je(t)||tt(t)||t.hasAttribute("contenteditable")||Fe(t)}function rt(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ie=class{_element;_checker;_ngZone;_document;_injector;_startAnchor;_endAnchor;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,s,o=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=s,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(s)return s}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(s)return s}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?De(n,{injector:this._injector}):setTimeout(n)}},Di=(()=>{class t{_checker=r(Xe);_ngZone=r(_);_document=r(g);_injector=r(E);constructor(){r(H).load(ee)}create(e,i=!1){return new ie(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ne(t){return t.buttons===0||t.detail===0}function se(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var at=new y("cdk-input-modality-detector-options"),ct={ignoreKeys:[18,17,224,91,16]},Ne=650,k=w({passive:!0,capture:!0}),dt=(()=>{class t{_platform=r(M);modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new fe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=p(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ne||(this._modality.next(ne(e)?"keyboard":"mouse"),this._mostRecentTarget=p(e))};_onTouchstart=e=>{if(se(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=p(e)};constructor(){let e=r(_),i=r(g),s=r(at,{optional:!0});this._options=f(f({},ct),s),this.modalityDetected=this._modality.pipe(be(1)),this.modalityChanged=this.modalityDetected.pipe(ge()),this._platform.isBrowser&&e.runOutsideAngular(()=>{i.addEventListener("keydown",this._onKeydown,k),i.addEventListener("mousedown",this._onMousedown,k),i.addEventListener("touchstart",this._onTouchstart,k)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,k),document.removeEventListener("mousedown",this._onMousedown,k),document.removeEventListener("touchstart",this._onTouchstart,k))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var W=function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t}(W||{}),lt=new y("cdk-focus-monitor-default-options"),K=w({passive:!0,capture:!0}),Ti=(()=>{class t{_ngZone=r(_);_platform=r(M);_inputModalityDetector=r(dt);_origin=null;_lastFocusOrigin;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=r(g,{optional:!0});_stopInputModalityDetector=new C;constructor(){let e=r(lt,{optional:!0});this._detectionMode=e?.detectionMode||W.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=p(e);for(let s=i;s;s=s.parentElement)e.type==="focus"?this._onFocus(e,s):this._onBlur(e,s)};monitor(e,i=!1){let s=m(e);if(!this._platform.isBrowser||s.nodeType!==1)return _e();let o=xe(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return i&&(a.checkChildren=!0),a.subject;let l={checkChildren:i,subject:new C,rootNode:o};return this._elementInfo.set(s,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let i=m(e),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(e,i,s){let o=m(e),a=this._getDocument().activeElement;o===a?this._getClosestElementsInfo(o).forEach(([l,h])=>this._originChanged(l,i,h)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===W.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===W.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Ne:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(e,i){let s=this._elementInfo.get(i),o=p(e);!s||!s.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),s)}_onBlur(e,i){let s=this._elementInfo.get(i);!s||s.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(s,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,K),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,K)}),this._rootNodeFocusListenerCount.set(i,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ve(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,K),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,K),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,s){this._setClasses(e,i),this._emitOrigin(s,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((s,o)=>{(o===e||s.checkChildren&&o.contains(e))&&i.push([o,s])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var te={},ut=(()=>{class t{_appId=r(Ie);getId(e){return this._appId!=="ng"&&(e+=this._appId),te.hasOwnProperty(e)||(te[e]=0),`${e}${te[e]++}`}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pt=new y("cdk-dir-doc",{providedIn:"root",factory:ft});function ft(){return r(g)}var _t=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function gt(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?_t.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Li=(()=>{class t{value="ltr";change=new A;constructor(){let e=r(pt,{optional:!0});if(e){let i=e.body?e.body.dir:null,s=e.documentElement?e.documentElement.dir:null;this.value=gt(i||s||"ltr")}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Re=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,s,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=s,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,s=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(s,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var En=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),An=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,s){},styles:['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}'],encapsulation:2,changeDetection:0})}return t})();var u=function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t}(u||{}),ae=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=u.HIDDEN;constructor(n,e,i,s=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=s}fadeOut(){this._renderer.fadeOutRipple(this)}},Le=w({passive:!0,capture:!0}),ce=class{_events=new Map;addHandler(n,e,i,s){let o=this._events.get(e);if(o){let a=o.get(i);a?a.add(s):o.set(i,new Set([s]))}else this._events.set(e,new Map([[i,new Set([s])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Le)})}removeHandler(n,e,i){let s=this._events.get(n);if(!s)return;let o=s.get(e);o&&(o.delete(i),o.size===0&&s.delete(e),s.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Le)))}_delegateEventHandler=n=>{let e=p(n);e&&this._events.get(n.type)?.forEach((i,s)=>{(s===e||s.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},G={enterDuration:225,exitDuration:150},bt=800,Se=w({passive:!0,capture:!0}),Pe=["mousedown","touchstart"],Be=["mouseup","mouseleave","touchend","touchcancel"],vt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,s){},styles:[".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}"],encapsulation:2,changeDetection:0})}return t})(),de=class t{_target;_ngZone;_platform;_containerElement;_triggerElement;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect;static _eventManager=new ce;constructor(n,e,i,s,o){this._target=n,this._ngZone=e,this._platform=s,s.isBrowser&&(this._containerElement=m(i)),o&&o.get(H).load(vt)}fadeInRipple(n,e,i={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=f(f({},G),i.animation);i.centered&&(n=s.left+s.width/2,e=s.top+s.height/2);let a=i.radius||yt(n,e,s),l=n-s.left,h=e-s.top,b=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${l-a}px`,d.style.top=`${h-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${b}ms`,this._containerElement.appendChild(d);let le=window.getComputedStyle(d),He=le.transitionProperty,ue=le.transitionDuration,$=He==="none"||ue==="0s"||ue==="0s, 0s"||s.width===0&&s.height===0,v=new ae(this,d,i,$);d.style.transform="scale3d(1, 1, 1)",v.state=u.FADING_IN,i.persistent||(this._mostRecentTransientRipple=v);let L=null;return!$&&(b||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let he=()=>{L&&(L.fallbackTimer=null),clearTimeout(me),this._finishRippleTransition(v)},Y=()=>this._destroyRipple(v),me=setTimeout(Y,b+100);d.addEventListener("transitionend",he),d.addEventListener("transitioncancel",Y),L={onTransitionEnd:he,onTransitionCancel:Y,fallbackTimer:me}}),this._activeRipples.set(v,L),($||!b)&&this._finishRippleTransition(v),v}fadeOutRipple(n){if(n.state===u.FADING_OUT||n.state===u.HIDDEN)return;let e=n.element,i=f(f({},G),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=u.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=m(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Pe.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Be.forEach(e=>{this._triggerElement.addEventListener(e,this,Se)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===u.FADING_IN?this._startFadeOutTransition(n):n.state===u.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=u.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=u.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ne(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+bt;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!se(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===u.VISIBLE||n.config.terminateOnPointerUp&&n.state===u.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Pe.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Be.forEach(e=>n.removeEventListener(e,this,Se)),this._pointerUpEventsRegistered=!1))}};function yt(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),s=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+s*s)}var It=new y("mat-ripple-global-options");var Ue={capture:!0},je=["focus","mousedown","mouseenter","touchstart"],oe="mat-ripple-loader-uninitialized",re="mat-ripple-loader-class-name",Ve="mat-ripple-loader-centered",z="mat-ripple-loader-disabled",Dn=(()=>{class t{_document=r(g,{optional:!0});_animationMode=r(Ae,{optional:!0});_globalRippleOptions=r(It,{optional:!0});_platform=r(M);_ngZone=r(_);_injector=r(E);_hosts=new Map;constructor(){this._ngZone.runOutsideAngular(()=>{for(let e of je)this._document?.addEventListener(e,this._onInteraction,Ue)})}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);for(let i of je)this._document?.removeEventListener(i,this._onInteraction,Ue)}configureRipple(e,i){e.setAttribute(oe,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(re))&&e.setAttribute(re,i.className||""),i.centered&&e.setAttribute(Ve,""),i.disabled&&e.setAttribute(z,"")}setDisabled(e,i){let s=this._hosts.get(e);s?(s.target.rippleDisabled=i,!i&&!s.hasSetUpEvents&&(s.hasSetUpEvents=!0,s.renderer.setupTriggerEvents(e))):i?e.setAttribute(z,""):e.removeAttribute(z)}_onInteraction=e=>{let i=p(e);if(i instanceof HTMLElement){let s=i.closest(`[${oe}="${this._globalRippleOptions?.namespace??""}"]`);s&&this._createRipple(s)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(re)),e.append(i);let s=this._animationMode==="NoopAnimations",o=this._globalRippleOptions,a=s?0:o?.animation?.enterDuration??G.enterDuration,l=s?0:o?.animation?.exitDuration??G.exitDuration,h={rippleDisabled:s||o?.disabled||e.hasAttribute(z),rippleConfig:{centered:e.hasAttribute(Ve),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:l}}},b=new de(h,this._ngZone,i,this._platform,this._injector),d=!h.rippleDisabled;d&&b.setupTriggerEvents(e),this._hosts.set(e,{target:h,renderer:b,hasSetUpEvents:d}),e.removeAttribute(oe)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{At as a,ke as b,m as c,M as d,Ct as e,w as f,N as g,xt as h,Ot as i,H as j,Ut as k,Xt as l,Xe as m,Di as n,Ti as o,ut as p,Li as q,Re as r,En as s,An as t,de as u,It as v,Dn as w};
