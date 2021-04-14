/*! For license information please see c7de8c91e42ef8bece2eb2e739e37408b09bdb00-2cdf23ddb219962723a6.js.LICENSE.txt */
(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[787],{9931:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},523:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,u,c,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(u=s;0!=u--;)if(!i(e[u],o[u]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],o.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(u=s;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!i(e[c[u]],o[c[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},6124:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),d.canUseDOM?t(u):r&&(u=r(u))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){c.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},1496:function(e,t,r){"use strict";var n=r(5318);t.Z=void 0;var a,i=n(r(1506)),o=n(r(5354)),s=n(r(7316)),u=n(r(7154)),c=n(r(7294)),l=n(r(5697)),d=function(e){var t=(0,u.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,n=h(t||r||[]);return n&&n.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=d(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,T=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),r&&c.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function S(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})}))}function C(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(T.has(e.target)){var t=T.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),T.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),T.set(e,t)),function(){r.unobserve(e),T.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",u=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+s+r+n+t+i+a+u+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=c.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(j,(0,u.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,a(n),s):s})),j=c.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,u.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var I=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=c.default.createRef(),r.placeholderRef=t.placeholderRef||c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),(r=p(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,T=e.itemProp,S=e.loading,C=e.draggable,A=m||g;if(!A)return null;var I=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,u.default)({opacity:I?1:0,transition:k?"opacity "+b+"ms":"none"},s),R="boolean"==typeof y?"lightgray":y,N={transitionDelay:b+"ms"},H=(0,u.default)({opacity:this.state.imgLoaded?0:1},k&&N,s,f),M={title:t,alt:this.state.isVisible?"":r,style:H,className:p,itemProp:T},z=this.state.isHydrated?h(A):A[0];if(m)return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&N)}),z.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:A,generateSources:O}),z.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:A,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(A),c.default.createElement(j,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:T,loading:S,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,u.default)({alt:r,title:t,loading:S},z,{imageVariants:A}))}}));if(g){var V=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete V.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},R&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,u.default)({backgroundColor:R,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},k&&N)}),z.base64&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:A,generateSources:O}),z.tracedSVG&&c.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:A,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,w(A),c.default.createElement(j,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:T,loading:S,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,u.default)({alt:r,title:t,loading:S},z,{imageVariants:A}))}}))}return null},t}(c.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),P=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});function R(e){return function(t,r,n){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");l.default.checkPropTypes(((a={})[r]=e,a),t,"prop",n)}}I.propTypes={resolutions:k,sizes:P,fixed:R(l.default.oneOfType([k,l.default.arrayOf(k)])),fluid:R(l.default.oneOfType([P,l.default.arrayOf(P)])),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=I;t.Z=N},6830:function(e,t,r){"use strict";r.d(t,{zx:function(){return u},Zb:function(){return Le},h4:function(){return i},Ar:function(){return Ce},rU:function(){return f}});var n=r(7294);var a={"/about":"ABOUT","/works":"WORKS","/blog":"BLOG"},i=function(){return n.createElement("header",{className:"flex flex-nowrap justify-between w-11/12 mx-auto mb-4"},n.createElement(f,{to:"/",appearance:"default"},n.createElement("h1",{className:"header-module--logo--3HOnh"},"CT")),n.createElement("nav",{className:"header-module--nav--1QBg8"},Object.keys(a).map((function(e){return n.createElement(f,{key:e,to:e},a[e])}))))};var o=r(9931),s=r.n(o);function u(e){e.appearance;var t=e.children,r=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["appearance","children"]);return n.createElement("button",Object.assign({className:s()("button-module--base--2U1T2")},r),t)}var c=r(5444);const l="link-module--base--1VFqf",d="link-module--black--3xy0w";function f(e){var t=e.appearance,r=e.to,a=e.children;return e.external?n.createElement("a",{target:"_blank",className:s()(l,"default"===t?d:void 0),href:r},a):n.createElement(c.rU,{to:r,className:s()(l,"default"===t?d:void 0)},a)}f.defaultProps={external:!1};var p,h,m,g,y=r(5697),b=r.n(y),v=r(6124),T=r.n(v),w=r(523),S=r.n(w),E=r(4756),O=r.n(E),C="bodyAttributes",A="htmlAttributes",L="titleAttributes",x={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(x).map((function(e){return x[e]})),"charset"),I="cssText",k="href",P="http-equiv",R="innerHTML",N="itemprop",H="name",M="property",z="rel",V="src",_="target",q={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",F="defer",U="encodeSpecialCharacters",W="onChangeClientState",D="titleTemplate",Y=Object.keys(q).reduce((function(e,t){return e[q[t]]=t,e}),{}),G=[x.NOSCRIPT,x.SCRIPT,x.STYLE],K="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},$=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},ee=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},te=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},re=function(e){var t=se(e,x.TITLE),r=se(e,D);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=se(e,B);return t||n||void 0},ne=function(e){return se(e,W)||function(){}},ae=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Q({},e,t)}),{})},ie=function(e,t){return t.filter((function(e){return void 0!==e[x.BASE]})).map((function(e){return e[x.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},oe=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&fe("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],u=s.toLowerCase();-1===t.indexOf(u)||r===z&&"canonical"===e[r].toLowerCase()||u===z&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(s)||s!==R&&s!==I&&s!==N||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][c]&&(a[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],u=O()({},n[s],a[s]);n[s]=u}return e}),[]).reverse()},se=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ue=(p=Date.now(),function(e){var t=Date.now();t-p>16?(p=t,e(t)):setTimeout((function(){ue(e)}),0)}),ce=function(e){return clearTimeout(e)},le="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ue:r.g.requestAnimationFrame||ue,de="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:r.g.cancelAnimationFrame||ce,fe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},pe=null,he=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ye(x.BODY,n),ye(x.HTML,a),ge(d,f);var p={baseTag:be(x.BASE,r),linkTags:be(x.LINK,i),metaTags:be(x.META,o),noscriptTags:be(x.NOSCRIPT,s),scriptTags:be(x.SCRIPT,c),styleTags:be(x.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},me=function(e){return Array.isArray(e)?e.join(""):e},ge=function(e,t){void 0!==e&&document.title!==e&&(document.title=me(e)),ye(x.TITLE,t)},ye=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(K),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var u=o[s],c=t[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),-1===a.indexOf(u)&&a.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute(K):r.getAttribute(K)!==o.join(",")&&r.setAttribute(K,o.join(","))}},be=function(e,t){var r=document.head||document.querySelector(x.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===R)r.innerHTML=t.innerHTML;else if(n===I)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(K,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ve=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)},we=function(e,t,r){switch(e){case x.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(a={key:e})[K]=!0,i=Te(r,a),[n.createElement(x.TITLE,i,e)];var e,r,a,i},toString:function(){return function(e,t,r,n){var a=ve(r),i=me(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+te(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+te(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case C:case A:return{toComponent:function(){return Te(t)},toString:function(){return ve(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var a,i=((a={key:r})[K]=!0,a);return Object.keys(t).forEach((function(e){var r=q[e]||e;if(r===R||r===I){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),n.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===R||e===I)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+te(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},Se=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:we(x.BASE,t,n),bodyAttributes:we(C,r,n),htmlAttributes:we(A,a,n),link:we(x.LINK,i,n),meta:we(x.META,o,n),noscript:we(x.NOSCRIPT,s,n),script:we(x.SCRIPT,u,n),style:we(x.STYLE,c,n),title:we(x.TITLE,{title:d,titleAttributes:f},n)}},Ee=T()((function(e){return{baseTag:ie([k,_],e),bodyAttributes:ae(C,e),defer:se(e,F),encode:se(e,U),htmlAttributes:ae(A,e),linkTags:oe(x.LINK,[z,k],e),metaTags:oe(x.META,[H,j,P,M,N],e),noscriptTags:oe(x.NOSCRIPT,[R],e),onChangeClientState:ne(e),scriptTags:oe(x.SCRIPT,[V,R],e),styleTags:oe(x.STYLE,[I],e),title:re(e),titleAttributes:ae(L,e)}}),(function(e){pe&&de(pe),e.defer?pe=le((function(){he(e,(function(){pe=null}))})):(he(e),pe=null)}),Se)((function(){return null})),Oe=(h=Ee,g=m=function(e){function t(){return J(this,t),ee(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!S()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case x.SCRIPT:case x.NOSCRIPT:return{innerHTML:t};case x.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Q({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Q({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case x.TITLE:return Q({},a,((t={})[n.type]=o,t.titleAttributes=Q({},i),t));case x.BODY:return Q({},a,{bodyAttributes:Q({},i)});case x.HTML:return Q({},a,{htmlAttributes:Q({},i)})}return Q({},a,((r={})[n.type]=Q({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Q({},t);return Object.keys(e).forEach((function(t){var n;r=Q({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,a={};return n.Children.forEach(e,(function(e){if(e&&e.props){var n=e.props,i=n.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)}(X(n,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case x.LINK:case x.META:case x.NOSCRIPT:case x.SCRIPT:case x.STYLE:a=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=X(e,["children"]),a=Q({},r);return t&&(a=this.mapChildrenToProps(t,a)),n.createElement(h,a)},$(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(n.Component),m.propTypes={base:b().object,bodyAttributes:b().object,children:b().oneOfType([b().arrayOf(b().node),b().node]),defaultTitle:b().string,defer:b().bool,encodeSpecialCharacters:b().bool,htmlAttributes:b().object,link:b().arrayOf(b().object),meta:b().arrayOf(b().object),noscript:b().arrayOf(b().object),onChangeClientState:b().func,script:b().arrayOf(b().object),style:b().arrayOf(b().object),title:b().string,titleAttributes:b().object,titleTemplate:b().string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=h.peek,m.rewind=function(){var e=h.rewind();return e||(e=Se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);Oe.renderStatic=Oe.rewind;function Ce(e){var t=e.children;e.path;return n.createElement(n.Fragment,null,n.createElement(Oe,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,"Caner Tuzunar")),n.createElement("div",{className:"h-screen"},n.createElement(i,null),n.createElement("main",{className:"w-11/12 mx-auto h-full"},t)))}var Ae=r(1496);function Le(e){var t=e.image,r=e.title,a=e.description,i=e.url;return n.createElement("section",{className:s()("card-module--cardContainer--1dy48")},n.createElement(f,{external:!0,to:i},n.createElement("picture",null,n.createElement(Ae.Z,{fluid:t,className:s()("card-module--cardImage--1XHTN")})),n.createElement("h4",{className:"card-module--cardTitle--26ie9"},r),n.createElement("p",{className:"card-module--cardDescription--15ST8"},a)))}Le.defaultProps={url:"/"}}}]);
//# sourceMappingURL=c7de8c91e42ef8bece2eb2e739e37408b09bdb00-2cdf23ddb219962723a6.js.map