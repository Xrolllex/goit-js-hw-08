!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,p=Math.max,g=Math.min,m=function(){return v.Date.now()};function y(e,t,n){var o,i,a,u,l,f,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(h,t),d?y(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=a}function h(){var e=m();if(O(e))return T(e);l=setTimeout(h,function(e){var n=t-(e-f);return v?g(n,a-(e-c)):n}(e))}function T(e){return l=void 0,s&&o?y(e):(o=i=void 0,u)}function w(){var e=m(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return j(f);if(v)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(v="maxWait"in n)?p(S(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},w.flush=function(){return void 0===l?u:T(m())},w}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector("form"),O=document.querySelector("input"),h=document.querySelector("textarea"),T=document.querySelector("button"),w=e(t)((function(e){"INPUT"===e.target.nodeName?O.value=e.target.value:h.value=e.target.value;var t={email:O.value,message:h.value};localStorage.setItem("feedback",JSON.stringify(t))}),500,{leading:!1});void 0===localStorage.feedback?(O.value="",h.value=""):(O.value=JSON.parse(localStorage.feedback).email,h.value=JSON.parse(localStorage.feedback).message);j.addEventListener("input",w),T.addEventListener("click",(function(e){var t;e.preventDefault(),O.value&&h.value?(t={email:O.value,message:h.value},console.log(t),localStorage.clear(),O.value="",h.value=""):alert("Please, complete the application fields")}))}();
//# sourceMappingURL=03-feedback.a6dfa25a.js.map