(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),c=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||c(t)||i()}},STfU:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return l}));var r=n("q1tI"),o=n.n(r),c=n("A2+M"),i=n("7vrA"),u=n("3Z9Z"),a=n("JI6e"),p=n("Zttt"),f=n("wtQ5");e.default=function(t){var e=t.data,n=t.location,r=e.mdx,l=r.frontmatter,s=r.body,y=r.excerpt,b=l.title,m=l.description;return o.a.createElement(p.a,{location:n,title:b},o.a.createElement(f.a,{title:b,description:m||y}),o.a.createElement(i.a,{className:"my-5"},o.a.createElement(u.a,null,o.a.createElement(a.a,null,o.a.createElement(c.MDXRenderer,null,s)))))};var l="566389834"},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){var r=n("sXyB"),o=n("RIqP"),c=n("lSNA"),i=n("8OQS");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=n("q1tI"),f=n("7ljp"),l=f.useMDXComponents,s=f.mdx,y=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,u=i(t,["scope","components","children"]),f=l(n),b=y(e),m=p.useMemo((function(){if(!c)return null;var t=a({React:p,mdx:s},b),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,e]);return p.createElement(m,a({components:f},u))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},sXyB:function(t,e,n){var r=n("SksO"),o=n("b48C");function c(e,n,i){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c}}]);
//# sourceMappingURL=component---src-templates-markdown-page-js-faab745841b00e89b4c3.js.map