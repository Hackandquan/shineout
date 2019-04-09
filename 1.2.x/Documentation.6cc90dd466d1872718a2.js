(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[18],{1361:function(e,t,n){"use strict";n.r(t);var a=n(30),c=n(198),r=n(295),o=["API",{name:"Props",cn:"约定",level:2,component:Object(c.a)(function(){return n.e(49).then(n.t.bind(null,1352,7))})},{name:"Classname",level:2,component:Object(c.a)(function(){return n.e(48).then(n.t.bind(null,1353,7))})},"CHANGELOG"].concat(Object(a.a)(["1.x.x"].map(function(e){return{name:e,level:2,component:Object(c.a)(function(){return n(458)("./".concat(e,".md"))})}})));t.default=Object(r.a)(o)},192:function(e,t,n){"use strict";var u=n(19),d=n(0),m=n.n(d),f=n(229),h=n(53),b=n(14);t.a=function(s){return function(e){var t=Object(d.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(d.useState)([]),o=Object(u.a)(r,1)[0],l=e.location.hash,i=Object(d.useCallback)(function(e){e.forEach(function(e){o.push(e)})},[]);Object(d.useEffect)(function(){!function(e){if(e){var t=document.querySelector(e);t&&setTimeout(function(){t.scrollIntoView()},50)}}(l);var e=function(){var n=document.documentElement.scrollTop,e=o.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),c(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return m.a.createElement("div",{className:Object(b.f)("_")},m.a.createElement(s,{onHeadingSetted:i}),m.a.createElement(f.a,{className:Object(b.f)("sticky"),top:50},m.a.createElement("div",{className:Object(b.f)("nav")},o.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:t,className:Object(b.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},198:function(e,t,n){"use strict";var P=n(0),N=n.n(P),u=n(30),C=n(19),a=n(232),d=n.n(a),m=n(49),T=n(14),f=n(11),c=n(12),o=n.n(c),r=n(233),l=n.n(r),L=(n(234),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,c=e.value,r=Object(P.useRef)(null);return Object(P.useEffect)(function(){var e=r.current;l.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),N.a.createElement("pre",{ref:r,className:o()(n||"lang-jsx",Object(T.a)("pre"))},N.a.createElement("code",null,c))}),H=n(217),i=n(43),s=n(7),h=n(8),b=n(10),p=n(2),v=n(9),O=n(33),E=n(205),I=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(b.a)(this,Object(p.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(v.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(E.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(E.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:N.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(O.b),R=n(60),W=n(53),z=N.a.createElement("div",{className:Object(T.a)("placeholder")},N.a.createElement(i.a,null));function j(e){var t=e.component,n=e.id,a=e.name,c=e.rawText,r=e.title,o=Object(P.useRef)(null),l=Object(P.useState)(!1),i=Object(C.a)(l,2),s=i[0],u=i[1],d=Object(P.useState)(),m=Object(C.a)(d,2),f=m[0],h=m[1],b=Object(P.useState)(),p=Object(C.a)(b,1)[0],v=function e(t,n,a){o.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(P.useEffect)(function(){if(o.current)if(s)o.current.style.height="".concat(f,"px");else{var e=f%15;0<e&&v(e,1,p),v((f-e)/15,15,p)}},[s]);var O=function(e){u(!s),p=e},E=function(e){return N.a.createElement("a",{href:"javascript:;",className:Object(T.a)("toggle"),onClick:O.bind(null,e)},N.a.createElement(R.a,{name:s?"code-close":"code"}))},j=c.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),g=W.a.location.search,y="?example=";if(0===g.indexOf(y)&&(g=g.replace(y,""),a.indexOf(g)<0))return null;var x=r.split("\n"),k=Object(H.a)(x),w=k[0],S=k.slice(1);return w&&(w=w.trim()),N.a.createElement(P.Fragment,null,w&&N.a.createElement("h3",{key:"0",id:n},w),N.a.createElement(I,{placeholder:z},N.a.createElement("div",{className:Object(T.a)("_",s&&"showcode")},N.a.createElement("div",{className:Object(T.a)("body")},Object(P.createElement)(t)),0<r.length&&N.a.createElement("div",{className:Object(T.a)("desc")},S.map(function(e,t){return N.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),E(!1)),N.a.createElement("div",{ref:o,className:Object(T.a)("code")},N.a.createElement(L,{onHighLight:function(e){h(e)},onClose:O,value:j}),E(!0)))))}j.defaultProps={rawText:""};var g=function(e){var t=e.children,n=Object(P.useState)(!1),a=Object(C.a)(n,2),c=a[0],r=a[1],o=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),l=c?"pre":"div";return N.a.createElement("div",{onClick:function(){r(!c)},className:Object(T.e)("console")},N.a.createElement(l,null,o))};g.defaultProps={children:[]};var y=g;function x(e){var t=e.children;return N.a.createElement("table",{className:"doc-api-table"},t)}x.defaultProps={};var k=x,w=/^<code name="([\w|-]+)" /,S=/^<example name="([\w|-]+)"/;function _(e){var t=e.onHeadingSetted,r=e.codes,o=e.examples,n=e.source,a=Object(P.useState)([]),c=Object(C.a)(a,1)[0],l=Object(P.useState)({}),i=Object(C.a)(l,1)[0];Object(P.useEffect)(function(){t&&t(c)},[]);var s=function(e){c.push(e)};return c=[],N.a.createElement(d.a,{className:Object(T.e)("_"),source:n,renderers:{code:L,heading:function(e){var t,n,a=e.level,c=e.children,r="".concat(a,"-").concat(c[0]),o="h".concat(a);if("object"==typeof c[0])return N.a.createElement(o,null,c);if(!i[r]){var l="heading-".concat((t=a,n=c[0],4===t?Object(m.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||s({id:l,level:a,children:c}),i[r]=N.a.createElement(o,{id:l},c)}return i[r]},html:function(e){if("<example />"===e.value)return function(){if(i.examples)return i.examples;if(!o)return N.a.createElement("div",null);var e=Object(f.b)("示例","Example"),t="heading-example-h";return s({id:t,level:2,children:[e]}),i.examples=[N.a.createElement("h2",{key:"h",id:t},e)].concat(Object(u.a)(o.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),c=Object(C.a)(a,1)[0];return s({id:n,level:3,children:[c]}),N.a.createElement(j,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),i.examples}();var t=e.value.match(S);if(t)return function(t){var e="example-".concat(t);if(!i[e]){var n=(o||[]).find(function(e){return e.name===t});i[e]=n?N.a.createElement(j,n):null}return i[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return N.a.createElement("br",null);var n,a,c=e.value.match(w);return c?(n=c[1],(a=r[n])?[N.a.createElement(L,{key:"cb",value:a.text})].concat(Object(u.a)(a.log.map(function(e,t){return N.a.createElement(y,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:k,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return N.a.createElement("a",{href:e.href,target:t},e.children)}}})}_.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var B=n(59),D=n(192);n.d(t,"a",function(){return F});var M,U=((M=function(e){var t=Object(P.useState)(e.source),n=Object(C.a)(t,2),a=n[0],c=n[1];return Object(P.useEffect)(function(){e.loader&&e.loader().then(function(e){c(e.default)})},[]),a?N.a.createElement(_,Object.assign({},e,{source:a})):N.a.createElement(B.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(P.memo)(M));t.b=U;function F(t){return Object(D.a)(function(e){return N.a.createElement(U,Object.assign({},e,{loader:t}))})}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d});var a=n(216),c=n(49),r=n(42),o={},l=null,i=!1,s=r.b.height;function u(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>s){var n=Object(c.b)();return o[n]=e,n}return e.render(),null}function d(e){e&&delete o[e]}document.addEventListener("scroll",function(){l&&clearTimeout(l),l=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,c=n.getBoundingClientRect();c.bottom<0||c.top>s||(delete o[e],a())}),i=!1),l=null},80)},a.a)},216:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return s});var a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"},c="transform";function r(){return c}function o(){if(!window.getComputedStyle)return!1;var t,n=document.createElement("p");return document.body.insertBefore(n,null),Object.keys(a).forEach(function(e){void 0!==n.style[e]&&(n.style[e]="translate3d(1px,1px,1px)",c=e,t=window.getComputedStyle(n).getPropertyValue(a[e]))}),document.body.removeChild(n),void 0!==t&&0<t.length&&"none"!==t}var l=!1;try{var i=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,i)}catch(e){}var s=!!l&&{passive:!0}},229:function(e,t,n){"use strict";var a=n(15),i=n(34),c=n(7),r=n(8),o=n(10),l=n(2),s=n(21),u=n(9),d=n(3),m=n(0),f=n.n(m),h=n(33),b=n(52),p=n(216),v=n(17),O=n(42),E=["scroll","resize","pageshow","load"],j=Object(b.a)("position","sticky"),g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).state={},t.bindElement=t.bindElement.bind(Object(d.a)(Object(d.a)(t))),t.bindPlaceholder=t.bindPlaceholder.bind(Object(d.a)(Object(d.a)(t))),t.handlePosition=t.handlePosition.bind(Object(d.a)(Object(d.a)(t))),t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){Object(s.a)(Object(l.a)(n.prototype),"componentDidMount",this).call(this);var e=this.props.target;this.targetElement=Object(b.d)(this.element,e),this.handlePosition(),this.bindScroll()}},{key:"componentWillUnmount",value:function(){Object(s.a)(Object(l.a)(n.prototype),"componentWillUnmount",this).call(this),this.unbindScroll(),this.scrollTimer&&clearTimeout(this.scrollTimer)}},{key:"getStyle",value:function(e,t,n,a){var c,r=this.props.style.zIndex,o=void 0===r?900:r,l=(c={position:"fixed",left:n,width:a},Object(i.a)(c,e,t),Object(i.a)(c,"zIndex",o),c);return this.targetElement&&(j?l.position="sticky":(l.position="absolute",l.transform="translateY(".concat(t).concat(this.targetElement.scrollTop,"px)"),delete l.left)),l}},{key:"setPosition",value:function(){var e,t,n=this.props,a=n.bottom,c=n.top,r=n.target,o=this.state,l=o.mode,i=o.scrollWidth,s=this.element.getBoundingClientRect(),u=(this.targetElement||document.body).getBoundingClientRect(),d=this.placeholder?this.placeholder.getBoundingClientRect():null,m=O.b.height,f={width:s.width,height:r&&j?0:s.height},h=c,b=m-a;this.targetElement&&(h+=u.top,b=u.bottom-a),void 0!==c&&"bottom"!==l&&(s.top<h?(this.setState({scrollWidth:u.width,mode:"top"}),e=this.getStyle("top",c,s.left,s.width),t=f):d&&s.top<d.top?r&&s.top===h||(this.setState({mode:""}),e={},t=null):this.targetElement&&d?(e=this.getStyle("top",c,s.left,s.width),t=f):i&&d&&i!==u.width&&(this.setState({scrollWidth:u.width,mode:"top"}),e=this.getStyle("top",c,d.left,d.width),t=f)),void 0!==a&&"top"!==l&&(s.bottom>b?(this.setState({scrollWidth:u.width,mode:"bottom"}),e=this.getStyle("bottom",a,s.left,s.width),t=f):d&&(this.targetElement?u.bottom:s.bottom)>d.bottom?(this.setState({mode:""}),e={},t=null):this.targetElement&&d?(e=this.getStyle("bottom",a,s.left,s.width),t=f):i&&d&&i!==u.width&&(this.setState({scrollWidth:u.width,mode:"bottom"}),e=this.getStyle("bottom",a,d.left,d.width),t=f)),void 0!==t&&this.setState({placeholder:t}),e&&this.setState({style:e})}},{key:"handlePosition",value:function(){var e=this;this.locked?this.scrollCount+=1:(this.locked=!0,this.scrollCount=0,this.setPosition(),this.scrollTimer=setTimeout(function(){e.locked=!1,0<e.scrollCount&&e.handlePosition()},48))}},{key:"bindElement",value:function(e){this.element=e}},{key:"bindPlaceholder",value:function(e){this.placeholder=e}},{key:"bindScroll",value:function(){var t=this;this.targetElement?this.targetElement.addEventListener("scroll",this.handlePosition,p.a):E.forEach(function(e){window.addEventListener(e,t.handlePosition)})}},{key:"unbindScroll",value:function(){var t=this;this.targetElement?this.targetElement.removeEventListener("scroll",this.handlePosition):E.forEach(function(e){window.removeEventListener(e,t.handlePosition)})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.target,c=this.state.placeholder,r=this.props.style,o=this.state.style;return a&&j&&(r=Object.assign({},r,o),o={}),f.a.createElement("div",{style:r,className:n},f.a.createElement("div",{ref:this.bindElement,style:o},t),c&&f.a.createElement("div",{ref:this.bindPlaceholder,style:c}))}}]),n}(h.b);g.defaultProps=Object(a.a)({},v.a),g.displayName="ShineoutSticky",t.a=g},295:function(e,t,n){"use strict";var r=n(0),o=n.n(r),l=n(44),i=n(24),s=n(229),u=n(11),d=n(59),m=n(14);function f(e,t){return""===t.path?e:"".concat(e,"/").concat(t.path||t.name)}t.a=function(c){return function(e){var n=e.match.url,t=c.find(function(e){return"string"!=typeof e}),a=(e.history.location||{search:""}).search;return 0===a.indexOf("?example=")&&a.replace("?example=",""),o.a.createElement(r.Fragment,null,o.a.createElement(s.a,{top:0},o.a.createElement("div",{className:Object(m.d)("menu")},c.map(function(e,t){return"string"==typeof e?o.a.createElement("label",{key:t},e):o.a.createElement(l.a,{className:Object(m.d)(2===e.level&&"sub"),activeClassName:Object(m.d)("active"),key:e.name,to:f(n,e)},o.a.createElement("p",null,e.name," ",o.a.createElement("span",null,Object(u.b)(e.cn))))}))),o.a.createElement("div",{className:Object(m.d)("page")},o.a.createElement(r.Suspense,{fallback:o.a.createElement(d.a,null)},o.a.createElement(i.d,null,o.a.createElement(i.a,{from:n,exact:!0,to:f(n,t)}),c.filter(function(e){return"object"==typeof e}).map(function(e){return o.a.createElement(i.b,{key:e.name+a,path:f(n,e),component:e.component})})))))}}},458:function(e,t,a){var c={"./0.x.x.md":[1354,51],"./1.x.x.md":[1355,52]};function n(t){var n=c[t];return n?a.e(n[1]).then(function(){var e=n[0];return a.t(e,7)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(c)},n.id=458,e.exports=n}}]);