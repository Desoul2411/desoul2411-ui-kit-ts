/*! For license information please see Icon-docs-Icon-stories.ac0a4b30.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[607],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./packages/Icon/docs/Icon.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BigGreen:()=>BigGreen,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Icon_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),__read=function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},styleToObject=function(input){return input.split(/ ?; ?/).reduce((function(acc,d){var _a=__read(d.split(/ ?: ?/),2),key=_a[0],value=_a[1];return key&&value&&(acc[key.replace(/-(\w)/g,(function(_$0,$1){return $1.toUpperCase()}))]=Number.isNaN(Number(value))?value:Number(value)),acc}),{})};var noTextChildNodes=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],possibleStandardNames={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},esm_read=function(o,n){var m="function"==typeof Symbol&&o[Symbol.iterator];if(!m)return o;var r,e,i=m.call(o),ar=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)ar.push(r.value)}catch(error){e={error}}finally{try{r&&!r.done&&(m=i.return)&&m.call(i)}finally{if(e)throw e.error}}return ar},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};function convertFromNode(input,options){var _a;if(void 0===options&&(options={}),!(input&&input instanceof Node))return null;var _b=options.actions,actions=void 0===_b?[]:_b,_c=options.index,index=void 0===_c?0:_c,_d=options.level,level=void 0===_d?0:_d,randomKey=options.randomKey,node=input,key="".concat(level,"-").concat(index),result=[];if(randomKey&&0===level&&(key="".concat(function randomString(length){void 0===length&&(length=6);for(var characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",result="",index=length;index>0;--index)result+=characters[Math.round(61*Math.random())];return result}(),"-").concat(key)),Array.isArray(actions)&&actions.forEach((function(action){action.condition(node,key,level)&&("function"==typeof action.pre&&((node=action.pre(node,key,level))instanceof Node||(node=input)),"function"==typeof action.post&&result.push(action.post(node,key,level)))})),result.length)return result;switch(node.nodeType){case 1:return react.createElement(function parseName(nodeName){return/[a-z]+[A-Z]+[a-z]+/.test(nodeName)?nodeName:nodeName.toLowerCase()}(node.nodeName),function parseAttributes(node,reactKey){var attributes={key:reactKey};if(node instanceof Element){var nodeClassNames=node.getAttribute("class");nodeClassNames&&(attributes.className=nodeClassNames),__spreadArray([],esm_read(node.attributes),!1).forEach((function(d){switch(d.name){case"class":break;case"style":attributes[d.name]=styleToObject(d.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":attributes[possibleStandardNames[d.name]||d.name]=!0;break;default:attributes[possibleStandardNames[d.name]||d.name]=d.value}}))}return attributes}(node,key),function parseChildren(childNodeList,level,options){var children=__spreadArray([],esm_read(childNodeList),!1).map((function(node,index){return convertFromNode(node,__assign(__assign({},options),{index,level:level+1}))})).filter(Boolean);return children.length?children:null}(node.childNodes,level,options));case 3:var nodeText=(null===(_a=node.nodeValue)||void 0===_a?void 0:_a.toString())||"";if(/^\s+$/.test(nodeText)&&!/[\u00A0\u202F]/.test(nodeText))return null;if(!node.parentNode)return nodeText;var parentNodeName=node.parentNode.nodeName.toLowerCase();return noTextChildNodes.includes(parentNodeName)?(/\S/.test(nodeText)&&console.warn("A textNode is not allowed inside '".concat(parentNodeName,"'. Your text \"").concat(nodeText,'" will be ignored')),null):nodeText;default:return null}}function convert(input,options){return void 0===options&&(options={}),"string"==typeof input?function convertFromString(input,options){if(void 0===options&&(options={}),!input||"string"!=typeof input)return null;var _a=options.nodeOnly,nodeOnly=void 0!==_a&&_a,_b=options.selector,selector=void 0===_b?"body > *":_b,_c=options.type,type=void 0===_c?"text/html":_c;try{var node=(new DOMParser).parseFromString(input,type).querySelector(selector);if(!(node instanceof Node))throw new TypeError("Error parsing input");return nodeOnly?node:convertFromNode(node,options)}catch(error){}return null}(input,options):input instanceof Node?convertFromNode(input,options):null}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),__defProp=Object.defineProperty,__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),STATUS={IDLE:"idle",LOADING:"loading",LOADED:"loaded",FAILED:"failed",READY:"ready",UNSUPPORTED:"unsupported"};function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function isSupportedEnvironment(){return function supportsInlineSVG(){if(!document)return!1;const div=document.createElement("div");div.innerHTML="<svg />";const svg=div.firstChild;return!!svg&&"http://www.w3.org/2000/svg"===svg.namespaceURI}()&&"undefined"!=typeof window&&null!==window}async function request(url,options){const response=await fetch(url,options),contentType=response.headers.get("content-type"),[fileType]=(contentType??"").split(/ ?; ?/);if(response.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some((d=>fileType.includes(d))))throw new Error(`Content type isn't valid: ${fileType}`);return response.text()}function sleep(seconds=1){return new Promise((resolve=>{setTimeout(resolve,1e3*seconds)}))}var cacheStore,ReactInlineSVG=class extends react.PureComponent{constructor(props){super(props),__publicField(this,"hash"),__publicField(this,"isActive",!1),__publicField(this,"isInitialized",!1),__publicField(this,"fetchContent",(async()=>{const{fetchOptions,src}=this.props,content=await request(src,fetchOptions);this.handleLoad(content)})),__publicField(this,"handleError",(error=>{const{onError}=this.props,status="Browser does not support SVG"===error.message?STATUS.UNSUPPORTED:STATUS.FAILED;this.isActive&&this.setState({status},(()=>{"function"==typeof onError&&onError(error)}))})),__publicField(this,"handleLoad",((content,hasCache=!1)=>{this.isActive&&this.setState({content,isCached:hasCache,status:STATUS.LOADED},this.getElement)})),this.state={content:"",element:null,isCached:!!props.cacheRequests&&cacheStore.isCached(props.src),status:STATUS.IDLE},this.hash=props.uniqueHash??function dist_randomString(length){const letters="abcdefghijklmnopqrstuvwxyz",charset=`${letters}${letters.toUpperCase()}1234567890`;let R="";for(let index=0;index<length;index++)R+=(character=charset)[Math.floor(Math.random()*character.length)];var character;return R}(8)}componentDidMount(){if(this.isActive=!0,!canUseDOM()||this.isInitialized)return;const{status}=this.state,{src}=this.props;try{if(status===STATUS.IDLE){if(!isSupportedEnvironment())throw new Error("Browser does not support SVG");if(!src)throw new Error("Missing src");this.load()}}catch(error){this.handleError(error)}this.isInitialized=!0}componentDidUpdate(previousProps,previousState){if(!canUseDOM())return;const{isCached,status}=this.state,{description,onLoad,src,title}=this.props;if(previousState.status!==STATUS.READY&&status===STATUS.READY&&onLoad&&onLoad(src,isCached),previousProps.src!==src){if(!src)return void this.handleError(new Error("Missing src"));this.load()}previousProps.title===title&&previousProps.description===description||this.getElement()}componentWillUnmount(){this.isActive=!1}getElement(){try{const element=convert(this.getNode());if(!element||!react.isValidElement(element))throw new Error("Could not convert the src to a React element");this.setState({element,status:STATUS.READY})}catch(error){this.handleError(new Error(error.message))}}getNode(){const{description,title}=this.props;try{const node=convert(this.processSVG(),{nodeOnly:!0});if(!(node&&node instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");const svg=this.updateSVGAttributes(node);if(description){const originalDesc=svg.querySelector("desc");originalDesc?.parentNode&&originalDesc.parentNode.removeChild(originalDesc);const descElement=document.createElementNS("http://www.w3.org/2000/svg","desc");descElement.innerHTML=description,svg.prepend(descElement)}if(void 0!==title){const originalTitle=svg.querySelector("title");if(originalTitle?.parentNode&&originalTitle.parentNode.removeChild(originalTitle),title){const titleElement=document.createElementNS("http://www.w3.org/2000/svg","title");titleElement.innerHTML=title,svg.prepend(titleElement)}}return svg}catch(error){return this.handleError(error)}}load(){this.isActive&&this.setState({content:"",element:null,isCached:!1,status:STATUS.LOADING},(async()=>{const{cacheRequests,fetchOptions,src}=this.props,dataURI=/^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(src);let inlineSrc;if(dataURI?inlineSrc=dataURI[1]?window.atob(dataURI[2]):decodeURIComponent(dataURI[2]):src.includes("<svg")&&(inlineSrc=src),inlineSrc)this.handleLoad(inlineSrc);else try{if(cacheRequests){const content=await cacheStore.get(src,fetchOptions);this.handleLoad(content,!0)}else await this.fetchContent()}catch(error){this.handleError(error)}}))}processSVG(){const{content}=this.state,{preProcessor}=this.props;return preProcessor?preProcessor(content):content}updateSVGAttributes(node){const{baseURL="",uniquifyIDs}=this.props,replaceableAttributes=["id","href","xlink:href","xlink:role","xlink:arcrole"],linkAttributes=["href","xlink:href"];return uniquifyIDs?([...node.children].forEach((d=>{if(d.attributes?.length){const attributes=Object.values(d.attributes).map((a=>{const attribute=a,match=/url\((.*?)\)/.exec(a.value);return match?.[1]&&(attribute.value=a.value.replace(match[0],`url(${baseURL}${match[1]}__${this.hash})`)),attribute}));replaceableAttributes.forEach((r=>{const attribute=attributes.find((a=>a.name===r));var name,value;attribute&&(name=r,value=attribute.value,!linkAttributes.includes(name)||!value||value.includes("#"))&&(attribute.value=`${attribute.value}__${this.hash}`)}))}return d.children.length?this.updateSVGAttributes(d):d})),node):node}render(){const{element,status}=this.state,{children=null,innerRef,loader=null}=this.props,elementProps=function omit(input,...filter){const output={};for(const key in input)({}).hasOwnProperty.call(input,key)&&(filter.includes(key)||(output[key]=input[key]));return output}(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return canUseDOM()?element?react.cloneElement(element,{ref:innerRef,...elementProps}):[STATUS.UNSUPPORTED,STATUS.FAILED].includes(status)?children:loader:loader}};function InlineSVG(props){cacheStore||(cacheStore=new class{constructor(){__publicField(this,"cacheApi"),__publicField(this,"cacheStore"),__publicField(this,"subscribers",[]),__publicField(this,"isReady",!1),this.cacheStore=new Map;let cacheName="react-inlinesvg",usePersistentCache=!1;canUseDOM()&&(cacheName=window.REACT_INLINESVG_CACHE_NAME??"react-inlinesvg",usePersistentCache=!!window.REACT_INLINESVG_PERSISTENT_CACHE),usePersistentCache?caches.open(cacheName).then((cache=>{this.cacheApi=cache,this.isReady=!0,this.subscribers.forEach((callback=>callback()))})):this.isReady=!0}onReady(callback){this.isReady?callback():this.subscribers.push(callback)}async get(url,fetchOptions){return await(this.cacheApi?this.fetchAndAddToPersistentCache(url,fetchOptions):this.fetchAndAddToInternalCache(url,fetchOptions)),this.cacheStore.get(url)?.content??""}set(url,data){this.cacheStore.set(url,data)}isCached(url){return this.cacheStore.get(url)?.status===STATUS.LOADED}async fetchAndAddToInternalCache(url,fetchOptions){const cache=this.cacheStore.get(url);if(cache?.status!==STATUS.LOADING){if(!cache?.content){this.cacheStore.set(url,{content:"",status:STATUS.LOADING});try{const content=await request(url,fetchOptions);this.cacheStore.set(url,{content,status:STATUS.LOADED})}catch(error){throw this.cacheStore.set(url,{content:"",status:STATUS.FAILED}),error}}}else await this.handleLoading(url,(async()=>{this.cacheStore.set(url,{content:"",status:STATUS.IDLE}),await this.fetchAndAddToInternalCache(url,fetchOptions)}))}async fetchAndAddToPersistentCache(url,fetchOptions){const cache=this.cacheStore.get(url);if(cache?.status===STATUS.LOADED)return;if(cache?.status===STATUS.LOADING)return void await this.handleLoading(url,(async()=>{this.cacheStore.set(url,{content:"",status:STATUS.IDLE}),await this.fetchAndAddToPersistentCache(url,fetchOptions)}));this.cacheStore.set(url,{content:"",status:STATUS.LOADING});const data=await(this.cacheApi?.match(url));if(data){const content=await data.text();this.cacheStore.set(url,{content,status:STATUS.LOADED})}else try{await(this.cacheApi?.add(new Request(url,fetchOptions)));const response=await(this.cacheApi?.match(url)),content=await(response?.text())??"";this.cacheStore.set(url,{content,status:STATUS.LOADED})}catch(error){throw this.cacheStore.set(url,{content:"",status:STATUS.FAILED}),error}}async handleLoading(url,callback){let retryCount=0;for(;this.cacheStore.get(url)?.status===STATUS.LOADING&&retryCount<10;)await sleep(.1),retryCount+=1;retryCount>=10&&await callback()}keys(){return[...this.cacheStore.keys()]}data(){return[...this.cacheStore.entries()].map((([key,value])=>({[key]:value})))}async delete(url){this.cacheApi&&await this.cacheApi.delete(url),this.cacheStore.delete(url)}async clear(){if(this.cacheApi){const keys=await this.cacheApi.keys();for(const key of keys)await this.cacheApi.delete(key)}this.cacheStore.clear()}});const{loader}=props,hasCallback=react.useRef(!1),[isReady,setReady]=react.useState(cacheStore.isReady);return react.useEffect((()=>{hasCallback.current||(cacheStore.onReady((()=>{setReady(!0)})),hasCallback.current=!0)}),[]),isReady?(0,jsx_runtime.jsx)(ReactInlineSVG,{...props}):loader}__publicField(ReactInlineSVG,"defaultProps",{cacheRequests:!0,uniquifyIDs:!1});var Icon=function Icon(_ref){var path=_ref.path,size=_ref.size,color=_ref.color;return size=size||24,color=color||"black",(0,jsx_runtime.jsx)(InlineSVG,{src:path,preProcessor:function preProcessor(code){return code.replace(/fill=".?"/g,'fill="'.concat(color,'"')).replace(/width=".?"/g,'width = "'.concat(size,'"')).replace(/height=".*?"/g,'height = "'.concat(size,'"'))},style:{width:size,height:size,fill:color}})};Icon.displayName="Icon";const src_Icon=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{path:{defaultValue:null,description:"",name:"path",required:!0,type:{name:"any"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/Icon/src/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/Icon/src/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}const settings_namespaceObject=__webpack_require__.p+"static/media/settings.a10fd1de.svg";var _Primary$parameters,_Primary$parameters2,_BigGreen$parameters,_BigGreen$parameters2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Icon_stories={title:"Example/Icon",component:src_Icon,parameters:{layout:"centered"},tags:["autodocs"]};var Primary={args:{path:"../src/icons/settings.svg"}},BigGreen={args:{path:settings_namespaceObject,size:30,color:"blue"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    path: "../src/icons/settings.svg"\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),BigGreen.parameters=_objectSpread(_objectSpread({},BigGreen.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BigGreen$parameters=BigGreen.parameters)||void 0===_BigGreen$parameters?void 0:_BigGreen$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    path: settings,\n    size: 30,\n    color: "blue"\n  }\n}'},null===(_BigGreen$parameters2=BigGreen.parameters)||void 0===_BigGreen$parameters2||null===(_BigGreen$parameters2=_BigGreen$parameters2.docs)||void 0===_BigGreen$parameters2?void 0:_BigGreen$parameters2.source)})});var __namedExportsOrder=["Primary","BigGreen"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);