/*! For license information please see 568181e8e03a3d46648570f26a7ea5ff6a3abeb0-80d11570cb66728d90d3.js.LICENSE.txt */
(self.webpackChunkaagnes=self.webpackChunkaagnes||[]).push([[910],{9591:function(t,e,n){var r=n(8).default;function i(){"use strict";t.exports=i=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function M(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{M({},"")}catch(S){M=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof N?e:N,a=Object.create(i.prototype),s=new x(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var o=p(s,n);if(o){if(o===w)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=L(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===w)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,s),a}function L(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var w={};function N(){}function y(){}function d(){}var D={};M(D,o,(function(){return this}));var j=Object.getPrototypeOf,g=j&&j(j(C([])));g&&g!==n&&a.call(g,o)&&(D=g);var f=d.prototype=N.prototype=Object.create(D);function m(t){["next","throw","return"].forEach((function(e){M(t,e,(function(t){return this._invoke(e,t)}))}))}function h(t,e){function n(i,s,o,u){var c=L(t[i],t,s);if("throw"!==c.type){var M=c.arg,l=M.value;return l&&"object"==r(l)&&a.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,o,u)}),(function(t){n("throw",t,o,u)})):e.resolve(l).then((function(t){M.value=t,o(M)}),(function(t){return n("throw",t,o,u)}))}u(c.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function p(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,p(t,e),"throw"===e.method))return w;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return w}var r=L(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,w;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,w):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,w)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:void 0,done:!0}}return y.prototype=d,M(f,"constructor",d),M(d,"constructor",y),y.displayName=M(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,M(t,c,"GeneratorFunction")),t.prototype=Object.create(f),t},e.awrap=function(t){return{__await:t}},m(h.prototype),M(h.prototype,u,(function(){return this})),e.AsyncIterator=h,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var s=new h(l(t,n,r,i),a);return e.isGeneratorFunction(n)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},m(f),M(f,c,"Generator"),M(f,o,(function(){return this})),M(f,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var o=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(o&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=e,i?(this.method="next",this.next=i.finallyLoc,w):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),w}},e}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},8:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7757:function(t,e,n){var r=n(9591)();t.exports=r;try{regeneratorRuntime=r}catch(i){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},4811:function(t){"use strict";var e=function(t,e){if("string"!=typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");e=Object.assign({pascalCase:!1},e);var n;return t=Array.isArray(t)?t.map((function(t){return t.trim()})).filter((function(t){return t.length})).join("-"):t.trim(),0===t.length?"":1===t.length?e.pascalCase?t.toUpperCase():t.toLowerCase():(t!==t.toLowerCase()&&(t=function(t){for(var e=!1,n=!1,r=!1,i=0;i<t.length;i++){var a=t[i];e&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(t=t.slice(0,i)+"-"+t.slice(i),e=!1,r=n,n=!0,i++):n&&r&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(t=t.slice(0,i-1)+"-"+t.slice(i-1),r=n,n=!1,e=!0):(e=a.toLowerCase()===a&&a.toUpperCase()!==a,r=n,n=a.toUpperCase()===a&&a.toLowerCase()!==a)}return t}(t)),t=t.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(t,e){return e.toUpperCase()})).replace(/\d+(\w|$)/g,(function(t){return t.toUpperCase()})),n=t,e.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};t.exports=e,t.exports.default=e},9230:function(t,e,n){"use strict";n.d(e,{G:function(){return I},L:function(){return y},M:function(){return h},P:function(){return m},S:function(){return U},_:function(){return o},a:function(){return s},b:function(){return M},c:function(){return c},g:function(){return l},h:function(){return u}});var r=n(7294),i=(n(4811),n(5697)),a=n.n(i);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(i[n]=t[n]);return i}var u=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(t){var e;return function(t){var e,n;return Boolean(null==t||null==(e=t.images)||null==(n=e.fallback)?void 0:n.src)}(t)?t:function(t){return Boolean(null==t?void 0:t.gatsbyImageData)}(t)?t.gatsbyImageData:function(t){return Boolean(null==t?void 0:t.gatsbyImage)}(t)?t.gatsbyImage:null==t||null==(e=t.childImageSharp)?void 0:e.gatsbyImageData};function M(t,e,n,r,i){return void 0===i&&(i={}),s({},n,{loading:r,shouldLoad:t,"data-main-image":"",style:s({},i,{opacity:e?1:0})})}function l(t,e,n,r,i,a,o,u){var c={};a&&(c.backgroundColor=a,"fixed"===n?(c.width=r,c.height=i,c.backgroundColor=a,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),u&&(c.objectPosition=u);var M=s({},t,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:e?0:1,transition:"opacity 500ms linear"},c)});return M}var L,w=["children"],N=function(t){var e=t.layout,n=t.width,i=t.height;return"fullWidth"===e?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===e?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(t){var e=t.children,n=o(t,w);return r.createElement(r.Fragment,null,r.createElement(N,s({},n)),e,null)},d=["src","srcSet","loading","alt","shouldLoad"],D=["fallback","sources","shouldLoad"],j=function(t){var e=t.src,n=t.srcSet,i=t.loading,a=t.alt,u=void 0===a?"":a,c=t.shouldLoad,M=o(t,d);return r.createElement("img",s({},M,{decoding:"async",loading:i,src:c?e:void 0,"data-src":c?void 0:e,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:u}))},g=function(t){var e=t.fallback,n=t.sources,i=void 0===n?[]:n,a=t.shouldLoad,u=void 0===a||a,c=o(t,D),M=c.sizes||(null==e?void 0:e.sizes),l=r.createElement(j,s({},c,e,{sizes:M,shouldLoad:u}));return i.length?r.createElement("picture",null,i.map((function(t){var e=t.media,n=t.srcSet,i=t.type;return r.createElement("source",{key:e+"-"+i+"-"+n,type:i,media:e,srcSet:u?n:void 0,"data-srcset":u?void 0:n,sizes:M})})),l):l};j.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},g.displayName="Picture",g.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var f=["fallback"],m=function(t){var e=t.fallback,n=o(t,f);return e?r.createElement(g,s({},n,{fallback:{src:e},"aria-hidden":!0,alt:""})):r.createElement("div",s({},n))};m.displayName="Placeholder",m.propTypes={fallback:i.string,sources:null==(L=g.propTypes)?void 0:L.sources,alt:function(t,e,n){return t[e]?new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Validation failed."):null}};var h=function(t){return r.createElement(r.Fragment,null,r.createElement(g,s({},t)),r.createElement("noscript",null,r.createElement(g,s({},t,{shouldLoad:!0}))))};h.displayName="MainImage",h.propTypes=g.propTypes;var p,T,E=function(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return t.alt||""===t.alt?a().string.apply(a(),[t,e,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:a().object.isRequired,alt:E},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],v=["style","className"],S=new Set,z=function(t){var e=t.as,i=void 0===e?"div":e,a=t.image,c=t.style,M=t.backgroundColor,l=t.className,L=t.class,w=t.onStartLoad,N=t.onLoad,y=t.onError,d=o(t,C),D=a.width,j=a.height,g=a.layout,f=function(t,e,n){var r={},i="gatsby-image-wrapper";return"fixed"===n?(r.width=t,r.height=e):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(D,j,g),m=f.style,h=f.className,E=o(f,v),x=(0,r.useRef)(),z=(0,r.useMemo)((function(){return JSON.stringify(a.images)}),[a.images]);L&&(l=L);var I=function(t,e,n){var r="";return"fullWidth"===t&&(r='<div aria-hidden="true" style="padding-top: '+n/e*100+'%;"></div>'),"constrained"===t&&(r='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+e+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(g,D,j);return(0,r.useEffect)((function(){p||(p=Promise.all([n.e(774),n.e(597)]).then(n.bind(n,3597)).then((function(t){var e=t.renderImageToString,n=t.swapPlaceholderImage;return T=e,{renderImageToString:e,swapPlaceholderImage:n}})));var t,e,r=x.current.querySelector("[data-gatsby-image-ssr]");return r&&u()?(r.complete?(null==w||w({wasCached:!0}),null==N||N({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function t(){document.removeEventListener("load",t),null==w||w({wasCached:!0}),null==N||N({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(z)):T&&S.has(z)?void 0:(p.then((function(n){var r=n.renderImageToString,i=n.swapPlaceholderImage;x.current.innerHTML=r(s({isLoading:!0,isLoaded:S.has(z),image:a},d)),S.has(z)||(t=requestAnimationFrame((function(){x.current&&(e=i(x.current,z,S,c,w,N,y))})))})),function(){t&&cancelAnimationFrame(t),e&&e()})}),[a]),(0,r.useLayoutEffect)((function(){S.has(z)&&T&&(x.current.innerHTML=T(s({isLoading:S.has(z),isLoaded:S.has(z),image:a},d)),null==w||w({wasCached:!0}),null==N||N({wasCached:!0}))}),[a]),(0,r.createElement)(i,s({},E,{style:s({},m,c,{backgroundColor:M}),className:h+(l?" "+l:""),ref:x,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(t){return t.image?(0,r.createElement)(z,t):null}));I.propTypes=x,I.displayName="GatsbyImage";var A,b=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],O=function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return"fullWidth"!==t.layout||"width"!==e&&"height"!==e||!t[e]?a().number.apply(a(),[t,e].concat(r)):new Error('"'+e+'" '+t[e]+" may not be passed when layout is fullWidth.")},Y=new Set(["fixed","fullWidth","constrained"]),k={src:a().string.isRequired,alt:E,width:O,height:O,sizes:a().string,layout:function(t){if(void 0!==t.layout&&!Y.has(t.layout))return new Error("Invalid value "+t.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},U=(A=I,function(t){var e=t.src,n=t.__imageData,i=t.__error,a=o(t,b);return i&&console.warn(i),n?r.createElement(A,s({image:n},a)):(console.warn("Image not loaded",e),null)});U.displayName="StaticImage",U.propTypes=k},3605:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(1597),i=n(7294),a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzEuOCA4Ny40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJDYXBhXzEiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMTEuNTYsMzEuNzNxMC05LTYuMzUtMTIuMkEzMS41NywzMS41NywwLDAsMCw5MC42NywxNi4zcS0xMi41NywwLTE3Ljc0LDYuNTVhMTkuMDYsMTkuMDYsMCwwLDAtMy42NiwxMC43SDgxLjc5QTkuMzQsOS4zNCwwLDAsMSw4My42NCwyOXExLjk0LTIuMjgsNi42LTIuMjhhMTMuNiwxMy42LDAsMCwxLDYuMjksMS4xNiw0LjM3LDQuMzcsMCwwLDEsMi4xNSw0LjIxcTAsMi41LTIuOCwzLjY5YTIwLjA4LDIwLjA4LDAsMCwxLTUuMTgsMS4xNGwtNC40NS41NWMtNSwuNjMtOC44NiwxLjctMTEuNDYsMy4xOGExNi44NCwxNi44NCwwLDAsMC0xLjY1LDEuMDlINTQuNTlMMzkuODIsMEgyNEwwLDY3LjFIMTQuNjdsNC41NS0xMy43OWgyMXYwaDMuNzNMNDguMzUsNjcuMUg2My41Nkw1OC42OSw1My4zNWg5YzAsLjE4LDAsLjM2LDAsLjU1cTAsNy4wNSw0LjQyLDEwLjlhMTYuMzgsMTYuMzgsMCwwLDAsMTEuMTksMy44NSwxOC44MywxOC44MywwLDAsMCw5LjUzLTIuNDEsMjYuNjgsMjYuNjgsMCwwLDAsNi4yMi01VjY3LjFoMTIuNTJWNTMuMzVoOFY0MS43NGgtOFpNMjMsNDEuNzRsOC43MS0yNi40LDguNDcsMjYuNFptNzEuODgsMTVhMTMuNTUsMTMuNTUsMCwwLDEtNy44MywyLjQ2LDcuMTcsNy4xNywwLDAsMS00LjU2LTEuNDgsNS42Miw1LjYyLDAsMCwxLTEuODQtNC40SDk3LjYxQTcuNjEsNy42MSwwLDAsMSw5NC45MSw1Ni43N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDYuMjIsODcuNDFxMTUuNzUsMCwyMS4zLTguMzgsMy4yNC00Ljg3LDMuMjMtMTQuNDhWMTcuNDhIMTU4LjF2Ny4xNWExNS41NiwxNS41NiwwLDAsMC03LjY0LTcuMTlBMTcsMTcsMCwwLDAsMTQ0LDE2LjNxLTEwLjEsMC0xNS42LDcuNTN0LTUuNSwxOC42cTAsMTEuNDgsNS43MiwxOC4xOXQxNS4yNyw2LjcxYTE2LjEyLDE2LjEyLDAsMCwwLDEwLjA2LTMsMTUuNzYsMTUuNzYsMCwwLDAsNC00Ljc4djMuMTlxMCw3LjA5LTEuNTUsMTAuMWMtMS41OCwzLjEzLTUuNDgsNC42OS0xMC4xNSw0LjY5Wk0xNTQuODgsNTNhMTAsMTAsMCwwLDEtNy42NiwzLjQ0LDkuNDQsOS40NCwwLDAsMS05LjQzLTYuMjgsMTkuMjYsMTkuMjYsMCwwLDEtMS40NS03LjcsMjIuNzgsMjIuNzgsMCwwLDEsMS4zNi04LjQycTIuNTgtNi40Miw5LjM4LTYuNDJhOS42OSw5LjY5LDAsMCwxLDgsMy42OXEzLDMuNjksMywxMC43NFExNTgsNDkuNTgsMTU0Ljg4LDUzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyMC43MSwyMC4zM3EtNC44Ni00LTEyLjUzLTRhMTYuMzYsMTYuMzYsMCwwLDAtMTAuMTEsMywyMS45MiwyMS45MiwwLDAsMC00LjcxLDUuNTFWMTcuNTdIMTgwLjc5VjY3LjFoMTNWNDAuMjRBMTkuNCwxOS40LDAsMCwxLDE5NSwzMi42OXEyLjQ0LTUuNjEsOS01LjYsNS4zNCwwLDcuMjQsMy44MmExMy45NCwxMy45NCwwLDAsMSwxLDZWNjcuMWgxMy4zVjMzLjY5UTIyNS41OSwyNC4zNiwyMjAuNzEsMjAuMzNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjc2LjQsMjUuODNhMjAuMSwyMC4xLDAsMCwwLTguNTctNy4zNCwyOC4zMSwyOC4zMSwwLDAsMC0xMS42Ny0yLjMzcS0xMC45MiwwLTE3Ljc1LDYuODh0LTYuODMsMTkuNzhxMCwxMy43Niw3LjU3LDE5Ljg2YTI3LDI3LDAsMCwwLDE3LjQ4LDYuMTFxMTIsMCwxOC42Ni03LjI0YTE5LjUzLDE5LjUzLDAsMCwwLDUtMTAuMTNsLTEzLjQxLDEuMTZBMTAuNzgsMTAuNzgsMCwwLDEsMjY0LjE5LDU2LDExLDExLDAsMCwxLDI1Nyw1OC4yN2ExMy4xMywxMy4xMywwLDAsMS03LjE1LTEuODcsMTAuNTcsMTAuNTcsMCwwLDEtNC43NS03bDM1LjctMy40N2E2Mi40NCw2Mi40NCwwLDAsMC0uNDMtOS44NEEyNC4yOSwyNC4yOSwwLDAsMCwyNzYuNCwyNS44M1pNMjQ1LDM5LjZjMC00LjU0Ljg2LTcuMzIsMy40Ni05LjkxYTEwLjQ3LDEwLjQ3LDAsMCwxLDcuNzQtMi44MywxMS40LDExLjQsMCwwLDEsNy43LDIuNjdjMi4wNiwxLjc5LDMuMjIsNC40LDMuNDUsNy44NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMjgsNDIuNzVxLTMuODctMy42OS0xMS42Mi01LjUxLTExLjYyLTIuNTUtMTMuNTUtMy42YTMuMzcsMy4zNywwLDAsMS0xLjkyLTMuMjMsMy44MiwzLjgyLDAsMCwxLDEuODEtMy4xcTEuOC0xLjMyLDYuMDUtMS4zMmMzLjQzLDAsNS44Ny44OCw3LjMsMi42NGE3LjgsNy44LDAsMCwxLDEuNDIsNGgxM3EtLjg3LTkuMDktNi43My0xMi44MXQtMTUuMTctMy43MXEtOS44MSwwLTE1LjIxLDQuOTRhMTUuNDQsMTUuNDQsMCwwLDAtNS40MSwxMS44MXEwLDUuODQsMy40Niw4LjkyVDMwMy4yOSw0N1EzMTUsNDkuNzYsMzE2Ljg2LDUwLjlhMy44MSwzLjgxLDAsMCwxLS40NCw2LjczLDEzLjcsMTMuNywwLDAsMS02LjExLDEuMTRxLTYuNTQsMC05LTIuNTlhNy4zNiw3LjM2LDAsMCwxLTEuNTctMy42SDI4Ni40N0ExNS45MiwxNS45MiwwLDAsMCwyOTIsNjMuODVxNS41OCw0LjkzLDE3LjMxLDQuOTQsMTEuNDksMCwxNy00LjY3YTE1LjA4LDE1LjA4LDAsMCwwLDUuNS0xMkExMi41MSwxMi41MSwwLDAsMCwzMjgsNDIuNzVaIi8+PC9nPjwvZz48L3N2Zz4=",s=n(5055),o=n(5861),u=n(7757),c=n.n(u),M=n(9230),l=function(t){var e=t.images,n=(t.paused,(0,i.useState)(-1)),r=n[0],a=n[1],u=(0,i.useState)(),l=u[0],L=u[1],w=(0,i.useState)(),N=w[0],y=w[1],d=(0,i.useState)(!1),D=d[0],j=d[1],g=(0,i.useState)(!1),f=g[0],m=g[1],h=function(){var t=(0,o.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a((function(t){return t>=e.length-1?0:t+1})),setInterval((function(){return a((function(t){return t>=e.length-1?0:t+1}))}),6e3);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){h()}),[]),(0,i.useEffect)((function(){var t=function(){var t=(0,o.Z)(c().mark((function t(){var n,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L((0,M.c)(null===(n=e[r])||void 0===n?void 0:n.node.childImageSharp)),t.next=3,(0,s.X_)(1500);case 3:return j(!0),t.next=6,(0,s.X_)(2e3);case 6:y((0,M.c)(null===(i=e[r])||void 0===i?void 0:i.node.childImageSharp));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,i.useEffect)((function(){j(!1)}),[N]),(0,i.useEffect)((function(){f&&setTimeout((function(){m(!1)}),1e3)}),[f]),i.createElement("div",{className:"relative h-screen bg-black overflow-hidden"},i.createElement("div",{className:"absolute h-full w-full"},i.createElement("div",{className:"absolute h-full"},i.createElement(M.G,{image:N,loading:"eager",imgStyle:{objectFit:"cover",objectPosition:"50% 100%"},className:"h-full",alt:""})),i.createElement("div",{className:"absolute h-full transform "+(D?"transition-opacity":"transition-none")+" duration-2000 "+(D?"opacity-100":"opacity-0")},i.createElement(M.G,{image:l,loading:"eager",imgStyle:{objectFit:"cover",objectPosition:"50% 100%"},className:"h-full",alt:""}))))},L=n(3744),w=function(t){var e=t.initialState,n=t.isIndex,o=(0,i.useState)(!1),u=o[0],c=o[1],M=(0,i.useState)(!1),l=M[0],w=M[1],N=(0,i.useState)(!1),y=N[0],d=N[1],D=(0,i.useState)(n),j=D[0],g=D[1];(0,i.useEffect)((function(){(0,s.X_)(1e3),d(!0)}));return(0,i.useEffect)((function(){u&&setTimeout((function(){c(!1)}),1500)}),[u]),i.createElement("div",{className:"flex flex-col relative"},i.createElement("button",{onClick:function(){return g((function(t){return!t}))},className:"absolute z-50 top-8 left-2 w-8 h-8 "+(e||n?"opacity-0":"opacity-100")+" md:hidden"},i.createElement("img",{src:j?"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYgNkwxOCAxOCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTJIMjEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDZIMjEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zIDE4SDIxIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",className:"h-full w-full"})),i.createElement("section",{className:"absolute md:static z-40 inline-flex flex-col h-full pt-24 pl-2 pr-0 lg:pl-10 lg:pr-10 pb-10 snap-start transition-all duration-1000 bg-white "+(j?"pointer-events-auto":"pointer-events-none")+" "+(j&&!n?"bg-opacity-80":"bg-opacity-0")+" md:pointer-events-auto md:bg-opacity-0"},i.createElement("a",{href:"/"},i.createElement("div",{className:"hidden lg:flex h-12 lg:w-48 2xl:w-72 transition-opacity duration-1000 "+(y?"opacity-100":"opacity-0")},i.createElement("img",{src:a,alt:"Aagnes",className:"w-20 lg:w-48 transform transition-opacity duration-1000 "+(e?"opacity-100":"opacity-0")+" absolute"}),i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzEuOCA4Ny40MSI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkNhcGFfMSIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGQ9Ik0xMTEuNTYsMzEuNzNxMC05LTYuMzUtMTIuMkEzMS41NywzMS41NywwLDAsMCw5MC42NywxNi4zcS0xMi41NywwLTE3Ljc0LDYuNTVhMTkuMDYsMTkuMDYsMCwwLDAtMy42NiwxMC43SDgxLjc5QTkuMzQsOS4zNCwwLDAsMSw4My42NCwyOXExLjk0LTIuMjgsNi42LTIuMjhhMTMuNiwxMy42LDAsMCwxLDYuMjksMS4xNiw0LjM3LDQuMzcsMCwwLDEsMi4xNSw0LjIxcTAsMi41LTIuOCwzLjY5YTIwLjA4LDIwLjA4LDAsMCwxLTUuMTgsMS4xNGwtNC40NS41NWMtNSwuNjMtOC44NiwxLjctMTEuNDYsMy4xOGExNi44NCwxNi44NCwwLDAsMC0xLjY1LDEuMDlINTQuNTlMMzkuODIsMEgyNEwwLDY3LjFIMTQuNjdsNC41NS0xMy43OWgyMXYwaDMuNzNMNDguMzUsNjcuMUg2My41Nkw1OC42OSw1My4zNWg5YzAsLjE4LDAsLjM2LDAsLjU1cTAsNy4wNSw0LjQyLDEwLjlhMTYuMzgsMTYuMzgsMCwwLDAsMTEuMTksMy44NSwxOC44MywxOC44MywwLDAsMCw5LjUzLTIuNDEsMjYuNjgsMjYuNjgsMCwwLDAsNi4yMi01VjY3LjFoMTIuNTJWNTMuMzVoOFY0MS43NGgtOFpNMjMsNDEuNzRsOC43MS0yNi40LDguNDcsMjYuNFptNzEuODgsMTVhMTMuNTUsMTMuNTUsMCwwLDEtNy44MywyLjQ2LDcuMTcsNy4xNywwLDAsMS00LjU2LTEuNDgsNS42Miw1LjYyLDAsMCwxLTEuODQtNC40SDk3LjYxQTcuNjEsNy42MSwwLDAsMSw5NC45MSw1Ni43N1oiLz48cGF0aCBkPSJNMTQ2LjIyLDg3LjQxcTE1Ljc1LDAsMjEuMy04LjM4LDMuMjQtNC44NywzLjIzLTE0LjQ4VjE3LjQ4SDE1OC4xdjcuMTVhMTUuNTYsMTUuNTYsMCwwLDAtNy42NC03LjE5QTE3LDE3LDAsMCwwLDE0NCwxNi4zcS0xMC4xLDAtMTUuNiw3LjUzdC01LjUsMTguNnEwLDExLjQ4LDUuNzIsMTguMTl0MTUuMjcsNi43MWExNi4xMiwxNi4xMiwwLDAsMCwxMC4wNi0zLDE1Ljc2LDE1Ljc2LDAsMCwwLDQtNC43OHYzLjE5cTAsNy4wOS0xLjU1LDEwLjFjLTEuNTgsMy4xMy01LjQ4LDQuNjktMTAuMTUsNC42OVpNMTU0Ljg4LDUzYTEwLDEwLDAsMCwxLTcuNjYsMy40NCw5LjQ0LDkuNDQsMCwwLDEtOS40My02LjI4LDE5LjI2LDE5LjI2LDAsMCwxLTEuNDUtNy43LDIyLjc4LDIyLjc4LDAsMCwxLDEuMzYtOC40MnEyLjU4LTYuNDIsOS4zOC02LjQyYTkuNjksOS42OSwwLDAsMSw4LDMuNjlxMywzLjY5LDMsMTAuNzRRMTU4LDQ5LjU4LDE1NC44OCw1M1oiLz48cGF0aCBkPSJNMjIwLjcxLDIwLjMzcS00Ljg2LTQtMTIuNTMtNGExNi4zNiwxNi4zNiwwLDAsMC0xMC4xMSwzLDIxLjkyLDIxLjkyLDAsMCwwLTQuNzEsNS41MVYxNy41N0gxODAuNzlWNjcuMWgxM1Y0MC4yNEExOS40LDE5LjQsMCwwLDEsMTk1LDMyLjY5cTIuNDQtNS42MSw5LTUuNiw1LjM0LDAsNy4yNCwzLjgyYTEzLjk0LDEzLjk0LDAsMCwxLDEsNlY2Ny4xaDEzLjNWMzMuNjlRMjI1LjU5LDI0LjM2LDIyMC43MSwyMC4zM1oiLz48cGF0aCBkPSJNMjc2LjQsMjUuODNhMjAuMSwyMC4xLDAsMCwwLTguNTctNy4zNCwyOC4zMSwyOC4zMSwwLDAsMC0xMS42Ny0yLjMzcS0xMC45MiwwLTE3Ljc1LDYuODh0LTYuODMsMTkuNzhxMCwxMy43Niw3LjU3LDE5Ljg2YTI3LDI3LDAsMCwwLDE3LjQ4LDYuMTFxMTIsMCwxOC42Ni03LjI0YTE5LjUzLDE5LjUzLDAsMCwwLDUtMTAuMTNsLTEzLjQxLDEuMTZBMTAuNzgsMTAuNzgsMCwwLDEsMjY0LjE5LDU2LDExLDExLDAsMCwxLDI1Nyw1OC4yN2ExMy4xMywxMy4xMywwLDAsMS03LjE1LTEuODcsMTAuNTcsMTAuNTcsMCwwLDEtNC43NS03bDM1LjctMy40N2E2Mi40NCw2Mi40NCwwLDAsMC0uNDMtOS44NEEyNC4yOSwyNC4yOSwwLDAsMCwyNzYuNCwyNS44M1pNMjQ1LDM5LjZjMC00LjU0Ljg2LTcuMzIsMy40Ni05LjkxYTEwLjQ3LDEwLjQ3LDAsMCwxLDcuNzQtMi44MywxMS40LDExLjQsMCwwLDEsNy43LDIuNjdjMi4wNiwxLjc5LDMuMjIsNC40LDMuNDUsNy44NFoiLz48cGF0aCBkPSJNMzI4LDQyLjc1cS0zLjg3LTMuNjktMTEuNjItNS41MS0xMS42Mi0yLjU1LTEzLjU1LTMuNmEzLjM3LDMuMzcsMCwwLDEtMS45Mi0zLjIzLDMuODIsMy44MiwwLDAsMSwxLjgxLTMuMXExLjgtMS4zMiw2LjA1LTEuMzJjMy40MywwLDUuODcuODgsNy4zLDIuNjRhNy44LDcuOCwwLDAsMSwxLjQyLDRoMTNxLS44Ny05LjA5LTYuNzMtMTIuODF0LTE1LjE3LTMuNzFxLTkuODEsMC0xNS4yMSw0Ljk0YTE1LjQ0LDE1LjQ0LDAsMCwwLTUuNDEsMTEuODFxMCw1Ljg0LDMuNDYsOC45MlQzMDMuMjksNDdRMzE1LDQ5Ljc2LDMxNi44Niw1MC45YTMuODEsMy44MSwwLDAsMS0uNDQsNi43MywxMy43LDEzLjcsMCwwLDEtNi4xMSwxLjE0cS02LjU0LDAtOS0yLjU5YTcuMzYsNy4zNiwwLDAsMS0xLjU3LTMuNkgyODYuNDdBMTUuOTIsMTUuOTIsMCwwLDAsMjkyLDYzLjg1cTUuNTgsNC45MywxNy4zMSw0Ljk0LDExLjQ5LDAsMTctNC42N2ExNS4wOCwxNS4wOCwwLDAsMCw1LjUtMTJBMTIuNTEsMTIuNTEsMCwwLDAsMzI4LDQyLjc1WiIvPjwvZz48L2c+PC9zdmc+",alt:"Aagnes",className:"w-20 lg:w-48 transform transition-opacity duration-1000 "+(e?"opacity-0":"opacity-100")+" absolute"})),i.createElement("div",{className:"lg:hidden w-48 h-12 lg:w-48 2xl:w-72 transition-opacity duration-1000 "+(y?"opacity-100":"opacity-0")},i.createElement("img",{src:a,alt:"Aagnes",className:"w-48 transform transition-opacity duration-1000 "+(e?"opacity-100":"opacity-0")+" absolute"}),i.createElement("button",{onClick:function(){return g((function(t){return!t}))}},i.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTkuNTUgNjguNjUiPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJDYXBhXzEiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNMTExLjU2LDMxLjczcTAtOS02LjM1LTEyLjJBMzEuNTcsMzEuNTcsMCwwLDAsOTAuNjcsMTYuM3EtMTIuNTcsMC0xNy43NCw2LjU1YTE5LjA2LDE5LjA2LDAsMCwwLTMuNjYsMTAuN0g4MS43OUE5LjM0LDkuMzQsMCwwLDEsODMuNjQsMjlxMS45NC0yLjI4LDYuNi0yLjI4YTEzLjYsMTMuNiwwLDAsMSw2LjI5LDEuMTYsNC4zNyw0LjM3LDAsMCwxLDIuMTUsNC4yMXEwLDIuNS0yLjgsMy42OWEyMC4wOCwyMC4wOCwwLDAsMS01LjE4LDEuMTRsLTQuNDUuNTVjLTUsLjYzLTguODYsMS43LTExLjQ2LDMuMThhMTYuODQsMTYuODQsMCwwLDAtMS42NSwxLjA5SDU0LjU5TDM5LjgyLDBIMjRMMCw2Ny4xSDE0LjY3bDQuNTUtMTMuNzloMjF2MGgzLjczTDQ4LjM1LDY3LjFINjMuNTZMNTguNjksNTMuMzVoOWMwLC4xOCwwLC4zNiwwLC41NXEwLDcuMDUsNC40MiwxMC45YTE2LjM4LDE2LjM4LDAsMCwwLDExLjE5LDMuODUsMTguODMsMTguODMsMCwwLDAsOS41My0yLjQxLDI2LjY4LDI2LjY4LDAsMCwwLDYuMjItNVY2Ny4xaDEyLjUyVjUzLjM1aDhWNDEuNzRoLThaTTIzLDQxLjc0bDguNzEtMjYuNCw4LjQ3LDI2LjRabTcxLjg4LDE1YTEzLjU1LDEzLjU1LDAsMCwxLTcuODMsMi40Niw3LjE3LDcuMTcsMCwwLDEtNC41Ni0xLjQ4LDUuNjIsNS42MiwwLDAsMS0xLjg0LTQuNEg5Ny42MUE3LjYxLDcuNjEsMCwwLDEsOTQuOTEsNTYuNzdaIi8+PC9nPjwvZz48L3N2Zz4=",alt:"Aagnes",className:"w-16 transform transition-opacity duration-1000 "+(e?"opacity-0":"opacity-100")+" absolute -mt-4"})))),i.createElement("div",{className:"flex flex-col h-full justify-between transform transition-transform duration-1000 "+(j?"translate-x-0":"-translate-x-full")+" md:translate-x-0"},i.createElement("ul",{className:"flex flex-col child:inline-flex transition-opacity duration-1000 "+(e?"opacity-0":"opacity-100")},i.createElement("li",{className:"mt-3 py-2"},i.createElement(r.Link,{to:"/espacio",onClick:function(){return g(!1)}},i.createElement(L.c2,null,"Espacio")))),i.createElement("ul",{className:"flex flex-col child:inline-flex transition-opacity duration-1000 "+(e?"opacity-0":"opacity-100")+" pb-36 md:pb-12"},i.createElement("li",{className:"mt-1"},i.createElement(r.Link,{to:"/about"},i.createElement(L._p,null,"About Us"))),i.createElement("li",{className:"mt-1 flex flex-col"},i.createElement("button",{onClick:function(){return w(!l)},className:"inline-flex"},i.createElement(L._p,null,"Contact")),i.createElement("ul",{className:"ml-3 flex flex-col child:inline-flex transition-[max-height] duration-700 "+(l?"max-h-14":"max-h-0")+" overflow-hidden"},i.createElement("li",{className:"mt-1"},i.createElement("a",{href:"https://www.instagram.com/____aagnes/",target:"_blank"},i.createElement(L._p,{selected:!0},"Instagram"))),i.createElement("li",{className:"mt-1"},i.createElement("button",{onClick:function(){navigator.clipboard.writeText("hola@aagnes.mx"),c(!0)},className:"text-left"},i.createElement(L._p,{selected:!0},"E-mail",i.createElement("br",{className:"md:hidden"})," ",i.createElement("span",{className:"pl-1 transition-opacity duration-1000 "+(u?"opacity-100":"opacity-0")},"(Copied to clipboard!)"))))))))))},N="3318800379",y=function(t){var e=t.children,n=t.location,a=(0,i.useState)(0),s=a[0],o=a[1],u=(0,i.useState)(!0),c=u[0],M=u[1],L="/"===(null==n?void 0:n.pathname),y=(0,i.useRef)(),d=function(){o(y.current.scrollTop)};return(0,i.useEffect)((function(){y.current.scrollTop=0}),[]),(0,i.useEffect)((function(){M(L&&s<150)}),[L,s]),i.createElement("main",{className:"h-screen w-screen overflow-hidden"},i.createElement(r.StaticQuery,{query:N,render:function(t){return i.createElement("div",{className:"h-screen w-screen snap-y snap-mandatory "+(L?"overflow-scroll":"overflow-hidden"),ref:y,onScroll:d},L&&i.createElement("section",{className:"absolute -z-10 w-full pointer-events-none"},i.createElement(l,{images:t.homeHeroPhotos.edges,paused:s>250})),L&&i.createElement("div",{className:"h-1/3 snap-start opacity-0"}),i.createElement("section",{className:"flex h-screen w-screen transform ease-in transition-all duration-500 "+(c?"bg-transparent":"bg-white")+" bg-opacity-90"},i.createElement(w,{initialState:c,isIndex:L}),i.createElement("div",{className:"pl-20 md:pl-0"},e)))}}))}},3744:function(t,e,n){"use strict";n.d(e,{Fy:function(){return u},QE:function(){return s},_p:function(){return a},c2:function(){return i},nv:function(){return o}});var r=n(7294),i=function(t){var e=t.children,n=t.selected;return r.createElement("h1",{className:"font-semibold italic hover:line-through hover:cursor-pointer "+(n?"line-through":"no-underline")},e)},a=function(t){var e=t.children,n=t.selected;return r.createElement("h2",{className:"text-xs hover:text-highlight hover:cursor-pointer "+(n?"text-highlight":"text-black")},e)},s=function(t){var e=t.children,n=t.customStyle;return r.createElement("h2",{className:"text-xs md:text-base font-serif italic uppercase "+n},e)},o=function(t){var e=t.children,n=t.customStyle;return r.createElement("p",{className:"text-xs "+n},e)},u=function(t){var e=t.children,n=t.customStyle;return r.createElement("h3",{className:"text-xs "+n},e)}},5055:function(t,e,n){"use strict";n.d(e,{ME:function(){return o},RO:function(){return s},X_:function(){return a}});var r=n(5785),i=n(7294),a=function(t){return new Promise((function(e){setTimeout((function(){e(!0)}),t)}))},s=function(t,e){void 0===e&&(e="0px");var n=(0,i.useState)([]),a=n[0],s=n[1];return(0,i.useEffect)((function(){var n=new IntersectionObserver((function(t){var e=t[0];e.isIntersecting?s((function(t){return(0,r.Z)(new Set([].concat((0,r.Z)(t),[e.target.id])))})):s((function(t){return t.filter((function(t){return t!==e.target.id}))}))}),{rootMargin:e});t.current&&t.current.forEach((function(t){n.observe(t.current)}))}),[]),a},o=function(t){return void 0===t&&(t="0"),+t.match(/\d/g)}},5861:function(t,e,n){"use strict";function r(t,e,n,r,i,a,s){try{var o=t[a](s),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var s=t.apply(e,n);function o(t){r(s,i,a,o,u,"next",t)}function u(t){r(s,i,a,o,u,"throw",t)}o(void 0)}))}}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=568181e8e03a3d46648570f26a7ea5ff6a3abeb0-80d11570cb66728d90d3.js.map