(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4Og5":function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=(a("8CqA"),a("Zttt")),s=a("wtQ5"),d=a("iFIH"),l=a("TSYQ"),o=a.n(l),c=a("1eu9"),u=a.n(c),f=a("xXt2"),g=a("7vrA"),m=a("f0VJ"),p=a.n(m),h=i.a.forwardRef((function(e,t){return i.a.createElement(f.a,Object.assign({ref:t},e))})),b=function(e){var t=e.className,a=e.gameHero.node.frontmatter,r=a.image,n=a.backgroundColor;return i.a.createElement(u.a,{Tag:h,className:o()(t,p.a.fullHeight),fluid:r.childImageSharp.fluid,backgroundColor:n},i.a.createElement(g.a,{className:p.a.fullHeight}))};a.d(t,"pageQuery",(function(){return y}));t.default=function(e){var t=e.data,a=e.location,r=t.gameHero.edges[0],l=t.games.edges,o={location:"games"};return i.a.createElement(n.a,{location:a},i.a.createElement(s.a,{title:"Games"}),i.a.createElement(b,Object.assign({},o,{gameHero:r})),i.a.createElement(d.a,Object.assign({},o,{titleId:"site.page.games.title",featured:l})))};var y="670102571"},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),d=a("q1tI"),l=a.n(d),o=a("vUet"),c=a("YdCC"),u=function(e){return l.a.forwardRef((function(t,a){return l.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))},f=a("Wzyw"),g=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,d=e.variant,c=e.as,u=void 0===c?"img":c,f=Object(i.a)(e,["bsPrefix","className","variant","as"]),g=Object(o.a)(a,"card-img");return l.a.createElement(u,Object(r.a)({ref:t,className:s()(d?g+"-"+d:g,n)},f))}));g.displayName="CardImg",g.defaultProps={variant:null};var m=g,p=u("h5"),h=u("h6"),b=Object(c.a)("card-body"),y=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,u=e.text,g=e.border,m=e.body,p=e.children,h=e.as,y=void 0===h?"div":h,v=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),S=Object(o.a)(a,"card"),E=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:S+"-header"}}),[S]);return l.a.createElement(f.a.Provider,{value:E},l.a.createElement(y,Object(r.a)({ref:t},v,{className:s()(n,S,c&&"bg-"+c,u&&"text-"+u,g&&"border-"+g)}),m?l.a.createElement(b,null,p):p))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=m,y.Title=Object(c.a)("card-title",{Component:p}),y.Subtitle=Object(c.a)("card-subtitle",{Component:h}),y.Body=b,y.Link=Object(c.a)("card-link",{Component:"a"}),y.Text=Object(c.a)("card-text",{Component:"p"}),y.Header=Object(c.a)("card-header"),y.Footer=Object(c.a)("card-footer"),y.ImgOverlay=Object(c.a)("card-img-overlay");t.a=y},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),l=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+o+s+d+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=o.default.createElement(x,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?o.default.createElement("picture",null,r(a),s):s},x=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,l.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,O=e.loading,L=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:R?1:0,transition:C?"opacity "+y+"ms":"none"},d),V="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&T,{},d,{},f),H={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:S};if(p){var k=p,q=m(p);return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&T)}),q.base64&&o.default.createElement(N,{ariaHidden:!0,src:q.base64,spreadProps:H,imageVariants:k,generateSources:I}),q.tracedSVG&&o.default.createElement(N,{ariaHidden:!0,src:q.tracedSVG,spreadProps:H,imageVariants:k,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,E(k),o.default.createElement(x,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:O},q,{imageVariants:k}))}}))}if(h){var G=h,W=m(h),M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete M.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},V&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:V,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&T)}),W.base64&&o.default.createElement(N,{ariaHidden:!0,src:W.base64,spreadProps:H,imageVariants:G,generateSources:I}),W.tracedSVG&&o.default.createElement(N,{ariaHidden:!0,src:W.tracedSVG,spreadProps:H,imageVariants:G,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,E(G),o.default.createElement(x,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:O},W,{imageVariants:G}))}}))}return null},t}(o.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:z,sizes:V,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=C;t.default=T},RIRc:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var r=a("q1tI"),i=a.n(r),n=a("TSYQ"),s=a.n(n),d=a("Wbzz"),l=a("6xyR"),o=a("RjgI"),c=a.n(o);var u=function(e){var t=e.children,a=e.className,r=e.to,n=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","className","to"]),o=s()(a,c.a.calloutCard);return i.a.createElement(l.a,Object.assign({as:d.Link,to:r,className:o},n),t)};a.d(t,"a",(function(){return u}))},iFIH:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("9eSz"),s=a.n(n),d=a("24R3"),l=a("7vrA"),o=a("3Z9Z"),c=a("JI6e"),u=a("6xyR"),f=a("RIRc"),g=a("sp1T"),m=a("6X4h"),p=function(e){var t=e.featured,a=e.titleId,r=void 0===a?"site.section.featured.title":a;return i.a.createElement(l.a,{className:"my-5"},i.a.createElement(o.a,null,i.a.createElement(g.a,{className:"text-center"},i.a.createElement("h2",null,i.a.createElement(d.a,{id:r,description:"Featured title"})))),i.a.createElement(o.a,null,i.a.createElement(c.a,null,i.a.createElement(m.a,{maxColumns:3},t.map((function(e,t){var a=e.node.fields.slug,r=e.node.frontmatter,n=r.title,d=r.description,l=r.image;return i.a.createElement(m.b,{key:t},i.a.createElement(f.a,{to:a},i.a.createElement(s.a,{fluid:l.childImageSharp.fluid}),i.a.createElement(u.a.Body,null,i.a.createElement(u.a.Title,null,n),i.a.createElement(u.a.Text,null,d))))}))))))};a.d(t,"a",(function(){return p}))}}]);
//# sourceMappingURL=component---src-pages-games-js-7b1906f78710558ae6c4.js.map