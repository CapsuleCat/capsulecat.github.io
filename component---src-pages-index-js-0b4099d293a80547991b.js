(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+FUj":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("q1tI"),a=r.n(n),o=r("24R3"),l=r("Wbzz"),c=r("7vrA"),i=r("3Z9Z"),s=r("JI6e"),u=r("cWnB"),p=r("9eSz"),d=r.n(p),f=r("6xyR"),m=r("RIRc"),x=function(e){var t=e.post,r=t.node.fields.slug,n=t.node.excerpt,o=t.node.frontmatter,l=o.title,c=o.description,i=o.image;return a.a.createElement(m.a,{to:r},i&&a.a.createElement(d.a,{fluid:i.childImageSharp.fluid}),a.a.createElement(f.a.Body,null,a.a.createElement(f.a.Title,null,l),a.a.createElement(f.a.Text,null,c||n)))},E=r("sp1T"),b=r("6X4h"),h=function(e){var t=e.children,r=e.hideReadMore,n=e.posts,p=e.titleId,d=void 0===p?"site.section.updates.title":p;return a.a.createElement(E.a,{className:"bg-light py-5"},a.a.createElement(c.a,null,a.a.createElement(i.a,null,a.a.createElement(E.a,{className:"text-center pb-3"},a.a.createElement("h2",null,a.a.createElement(o.a,{id:d,description:"Updates Title"})))),a.a.createElement(i.a,null,a.a.createElement(s.a,null,a.a.createElement(b.a,{maxColumns:2},n.map((function(e,t){return a.a.createElement(b.b,{key:t},a.a.createElement(x,{post:e}))}))))),!r&&a.a.createElement(i.a,null,a.a.createElement(s.a,{className:"text-center"},a.a.createElement(u.a,{as:l.Link,className:"mx-auto",variant:"outline-dark",to:"/blog"},a.a.createElement(o.a,{id:"site.section.updates.readmore",description:"See All Updates"})))),t))}},"2NvQ":function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r("zLVn"),a=r("q1tI"),o=r.n(a),l=r("xXt2"),c=r("7vrA"),i=r("3Z9Z"),s=r("JI6e"),u=r("1eu9"),p=r.n(u),d=r("TSYQ"),f=r.n(d),m=r("sp1T"),x=r("JHnC"),E=r.n(x),b=["image","backgroundColor","color","position","center","height","children"],h=o.a.forwardRef((function(e,t){return o.a.createElement(l.a,Object.assign({ref:t},e))})),y=function(e){var t=e.image,r=e.backgroundColor,a=e.color,u=e.position,d=e.center,x=e.height,y=void 0===x?"40vh":x,g=e.children,v=Object(n.a)(e,b),I={display:"flex",minHeight:y},O=null,j=null;switch(u){case"left":j=o.a.createElement(s.a,{xs:0});break;case"center":j=o.a.createElement(s.a,{xs:0}),O=o.a.createElement(s.a,{xs:0});break;case"right":O=o.a.createElement(s.a,{xs:0})}var w=o.a.createElement(c.a,{as:"header",className:E.a.heroInner,style:{color:a}},o.a.createElement(i.a,{style:{width:"100%"}},O,o.a.createElement(s.a,{className:E.a.heroInner},o.a.createElement(m.a,{className:f()({"text-center":d}),verticalCenter:!0},g)),j));return t?o.a.createElement(p.a,Object.assign({Tag:h,fluid:t.childImageSharp.fluid,backgroundColor:r,style:I},v),w):o.a.createElement(l.a,{backgroundColor:r},w)}},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},JHnC:function(e,t,r){e.exports={heroInner:"Hero-module--heroInner--1b1BM"}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),l=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=(r("8CqA"),r("Zttt")),l=r("wtQ5"),c=r("A2+M"),i=r("2NvQ"),s=function(e){var t=e.announcement.node,r=t.body,n=t.frontmatter,o=n.image,l=n.color,s=n.backgroundColor;return a.a.createElement(i.a,{image:o,backgroundColor:s,color:l,position:"right",center:!0,height:"60vh"},a.a.createElement(c.MDXRenderer,null,r))},u=r("iFIH"),p=r("+FUj");t.default=function(e){var t=e.data,r=e.location,n=t.announcement.edges[0],c=t.featured.edges,i=t.blog.edges,d={location:"home"};return a.a.createElement(o.a,{location:r},a.a.createElement(l.a,{title:"Home"}),a.a.createElement(s,Object.assign({},d,{announcement:n})),a.a.createElement(u.a,Object.assign({},d,{featured:c})),a.a.createElement(p.a,Object.assign({},d,{posts:i})))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,r){var n=r("RIqP"),a=r("sXyB"),o=r("lSNA"),l=r("8OQS"),c=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r("q1tI"),p=r("7ljp").mdx,d=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=l(e,c),i=d(t),f=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:p},i),t=Object.keys(e),o=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(o)))}),[r,t]);return u.createElement(f,s({},o))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},iFIH:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r("q1tI"),a=r.n(n),o=r("9eSz"),l=r.n(o),c=r("24R3"),i=r("7vrA"),s=r("3Z9Z"),u=r("JI6e"),p=r("6xyR"),d=r("RIRc"),f=r("sp1T"),m=r("6X4h"),x=function(e){var t=e.featured,r=e.titleId,n=void 0===r?"site.section.featured.title":r;return a.a.createElement(i.a,{className:"my-5"},a.a.createElement(s.a,null,a.a.createElement(f.a,{className:"text-center"},a.a.createElement("h2",null,a.a.createElement(c.a,{id:n,description:"Featured title"})))),a.a.createElement(s.a,null,a.a.createElement(u.a,null,a.a.createElement(m.a,{maxColumns:3},t.map((function(e,t){var r=e.node.fields.slug,n=e.node.frontmatter,o=n.title,c=n.description,i=n.image;return a.a.createElement(m.b,{key:t},a.a.createElement(d.a,{to:r},a.a.createElement(l.a,{fluid:i.childImageSharp.fluid}),a.a.createElement(p.a.Body,null,a.a.createElement(p.a.Title,null,o),a.a.createElement(p.a.Text,null,c))))}))))))}},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function o(t,r,l){return a()?(e.exports=o=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-0b4099d293a80547991b.js.map