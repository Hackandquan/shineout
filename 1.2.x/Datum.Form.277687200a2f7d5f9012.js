(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[16],{1027:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(192),c=n(198),s=n(272),o=n(11),u=n(1028),l=n.n(u),h=n(1029),f=n.n(h),d=Object(o.b)(l.a,f.a),v=[];s.a.start(),s.a.setType("example"),n(1030);var m=s.a.end(),b={example:{text:n(1031),log:m.example}};t.default=Object(r.a)(function(e){return i.a.createElement(c.b,Object.assign({},e,{codes:b,source:d,examples:v}))})},1028:function(e,t){e.exports='# Datum.Form 表单数据处理\n\nForm 表单数据处理辅助类，用来收集和分发数据到输入组件。\n\n## 示例\n\n<code name="example" />\n\n实际使用见 [Form](#/components/Form)\n\n## 初始化参数\n\n### removeUndefined *boolean*\n\n是否移除值为 undefined 的数据，默认值为 true。\n\n### onChange *function(data)*\n\n值变化时回调函数。\n\n### value *object*\n\n初始值\n\n## 函数\n\n### getValue *function():object*\n获取当前表单所有对象值。\n\n### setValue *function(object)*\n设置值。新的值会替代当前值。\n\n### set *fuction(name, value)*\n设置数据。\n\n### get *fuction(name)*\n获取单个字段值。\n\n### validateFields *function(names)*\n校验指定字段。names为字段名称数组。\n\n### validateClear *function()*\n清除校验结果。'},1029:function(e,t){e.exports='# Datum.Form\n\nThe auxiliary class of Form that process data for collecting and distributing data to input components.\n\n## Example\n\n<code name="example" />\n\n<br />\n\nSee the example use in [Form](#/components/Form)\n\n## Arguments\n\n### removeUndefined *boolean*\n\nWhether to remove the data whose value is undefined. The default value is true.\n\n### onChange *function(data)*\n\nThe callback function when the value is changing.\n\n### value *object*\n\nThe initial value.\n\n## Methods\n\n### getValue *function():object*\nGet all values of the current form.\n\n### setValue *function(object)*\nSet new value, will replace the current value。\n\n### set *fuction(name, value)*\nSet the value specified by name.\n\n### get *fuction(name)*\nGet a single field value.\n\n### validateFields *function(names)*\nVerify specified fields.\n\n### validateClear *function()*\nClear the validate result.'},1030:function(e,t,n){"use strict";n.r(t);var a=new(n(202).a.Form);a.setValue({email:"test@123.com",name:{lastName:"Potter"},favors:["red","yellow"]}),a.set("age",20),a.set("name.firstName","Harry"),console.log(a.get("age")),console.log(a.get("name")),console.log(a.get("name.firstName")),console.log(a.get("name.lastName")),console.log(a.get("favors[1]")),a.set("favors[2]","blue"),console.log(a.get("favors")),console.log(a.getValue())},1031:function(e,t){e.exports="import { Datum } from 'shineout'\n\nconst datum = new Datum.Form()\n\ndatum.setValue({ email: 'test@123.com', name: { lastName: 'Potter' }, favors: ['red', 'yellow'] })\ndatum.set('age', 20)\ndatum.set('name.firstName', 'Harry')\nconsole.log(datum.get('age'))\nconsole.log(datum.get('name'))\nconsole.log(datum.get('name.firstName'))\nconsole.log(datum.get('name.lastName'))\nconsole.log(datum.get('favors[1]'))\ndatum.set('favors[2]', 'blue')\nconsole.log(datum.get('favors'))\nconsole.log(datum.getValue())\n"},191:function(e,t,n){"use strict";n.d(t,"h",function(){return a}),n.d(t,"i",function(){return i}),n.d(t,"j",function(){return r}),n.d(t,"a",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"b",function(){return h}),n.d(t,"g",function(){return f});var a=function(e){return"__CHANGE_SUBSCRIBE_".concat(e,"__")},i=function(e){return"__ERROR_SUBSCRIBE_".concat(e,"__")},r=function(e){return"__UPDATE_SUBSCRIBE_".concat(e,"__")},c="__CHANGE_TOPIC__",s="__VALIDATE_TOPIC__",o="__RESET_TOPIC__",u="__VALIDATE_FORCE_PASS__",l="__IGNORE_VALIDATE__",h="__UPDATE_ERROR_TYPE__",f="__WITH_OUT_DISPATCH__"},192:function(e,t,n){"use strict";var l=n(19),h=n(0),f=n.n(h),d=n(229),v=n(53),m=n(14);t.a=function(u){return function(e){var t=Object(h.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(h.useState)([]),c=Object(l.a)(r,1)[0],s=e.location.hash,o=Object(h.useCallback)(function(e){e.forEach(function(e){c.push(e)})},[]);Object(h.useEffect)(function(){!function(e){if(e){var t=document.querySelector(e);t&&setTimeout(function(){t.scrollIntoView()},50)}}(s);var e=function(){var n=document.documentElement.scrollTop,e=c.filter(function(e){return 3===e.level&&e.children[0]});if(0!==e.length){var a=e[0].id;e.forEach(function(e){var t=document.querySelector("#".concat(e.id));t&&t.offsetTop<=n&&(a=e.id)}),i(a)}};return document.addEventListener("scroll",e),e(),function(){document.removeEventListener("scroll",e)}},[]);return f.a.createElement("div",{className:Object(m.f)("_")},f.a.createElement(u,{onHeadingSetted:o}),f.a.createElement(d.a,{className:Object(m.f)("sticky"),top:50},f.a.createElement("div",{className:Object(m.f)("nav")},c.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return f.a.createElement("a",{key:t,className:Object(m.f)("level-".concat(e.level),a===e.id&&"active"),onClick:function(e){if(0===v.a.location.search.indexOf("?example="))v.a.push("".concat(v.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}}.bind(null,e.id)},n)}))))}}},193:function(e,t,n){"use strict";var a=n(221),u=n.n(a),l=Object.prototype.hasOwnProperty;function h(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function f(e,t){if(!e[t])return[];var n=e[t];return Array.isArray(n)?n:[n]}t.a=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(h(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=Object.keys(e),i=Object.keys(t),r=f(n,"skip"),c=f(n,"deep");if(a.length!==i.length)return!1;a.sort(function(e,t){return c.indexOf(e)-c.indexOf(t)});for(var s=0;s<a.length;s++){var o=a[s];if(!r.includes(o)&&(!l.call(t,o)||!h(e[o],t[o]))){if(e[o]instanceof Error&&t[o]instanceof Error){if(e[o].message!==t[o].message)return!1;continue}if(!c.includes(o))return!1;if(!u()(e[o],t[o]))return!1}}return!0}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return h});var r=n(7),c=n(10),s=n(2),a=n(9),i=n(249),o=function(e){function i(e,t,n){var a;return Object(r.a)(this,i),(a=Object(c.a)(this,Object(s.a)(i).call(this))).message=e,a.name=t,a.value=n,a}return Object(a.a)(i,e),i}(Object(i.a)(Error)),u=function e(t){return t instanceof Error?new o(t.message):Array.isArray(t)?t.map(e):t},l=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];return new Promise(function(n,a){Promise.all(e).then(function(e){var t=e.find(function(e){return!0!==e});t?a(t):n(!0)}).catch(function(e){a(t?u(e):e)})})},h=function(e,t){return e===t||(e instanceof Error&&t instanceof Error?e.message===t.message:e===t)}},198:function(e,t,n){"use strict";var x=n(0),w=n.n(x),l=n(30),C=n(19),a=n(232),h=n.n(a),f=n(49),S=n(14),d=n(11),i=n(12),c=n.n(i),r=n(233),s=n.n(r),A=(n(234),function(e){var t=e.language,n=void 0===t?"lang-jsx":t,a=e.onHighLight,i=e.value,r=Object(x.useRef)(null);return Object(x.useEffect)(function(){var e=r.current;s.a.highlightElement(e,!1,function(){a&&a(e.offsetHeight)})},[]),w.a.createElement("pre",{ref:r,className:c()(n||"lang-jsx",Object(S.a)("pre"))},w.a.createElement("code",null,i))}),N=n(217),o=n(43),u=n(7),v=n(8),m=n(10),b=n(2),p=n(9),g=n(33),O=n(205),T=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(m.a)(this,Object(b.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(p.a)(n,e),Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(O.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(O.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:w.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(g.b),P=n(60),D=n(53),F=w.a.createElement("div",{className:Object(S.a)("placeholder")},w.a.createElement(o.a,null));function y(e){var t=e.component,n=e.id,a=e.name,i=e.rawText,r=e.title,c=Object(x.useRef)(null),s=Object(x.useState)(!1),o=Object(C.a)(s,2),u=o[0],l=o[1],h=Object(x.useState)(),f=Object(C.a)(h,2),d=f[0],v=f[1],m=Object(x.useState)(),b=Object(C.a)(m,1)[0],p=function e(t,n,a){c.current.style.height="".concat(t*(n-1),"px"),1<n&&setTimeout(function(){e(t,n-1,a)},16),a&&(document.documentElement.scrollTop-=t)};Object(x.useEffect)(function(){if(c.current)if(u)c.current.style.height="".concat(d,"px");else{var e=d%15;0<e&&p(e,1,b),p((d-e)/15,15,b)}},[u]);var g=function(e){l(!u),b=e},O=function(e){return w.a.createElement("a",{href:"javascript:;",className:Object(S.a)("toggle"),onClick:g.bind(null,e)},w.a.createElement(P.a,{name:u?"code-close":"code"}))},y=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),j=D.a.location.search,E="?example=";if(0===j.indexOf(E)&&(j=j.replace(E,""),a.indexOf(j)<0))return null;var k=r.split("\n"),$=Object(N.a)(k),_=$[0],V=$.slice(1);return _&&(_=_.trim()),w.a.createElement(x.Fragment,null,_&&w.a.createElement("h3",{key:"0",id:n},_),w.a.createElement(T,{placeholder:F},w.a.createElement("div",{className:Object(S.a)("_",u&&"showcode")},w.a.createElement("div",{className:Object(S.a)("body")},Object(x.createElement)(t)),0<r.length&&w.a.createElement("div",{className:Object(S.a)("desc")},V.map(function(e,t){return w.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),O(!1)),w.a.createElement("div",{ref:c,className:Object(S.a)("code")},w.a.createElement(A,{onHighLight:function(e){v(e)},onClose:g,value:y}),O(!0)))))}y.defaultProps={rawText:""};var j=function(e){var t=e.children,n=Object(x.useState)(!1),a=Object(C.a)(n,2),i=a[0],r=a[1],c=t.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),s=i?"pre":"div";return w.a.createElement("div",{onClick:function(){r(!i)},className:Object(S.e)("console")},w.a.createElement(s,null,c))};j.defaultProps={children:[]};var E=j;function k(e){var t=e.children;return w.a.createElement("table",{className:"doc-api-table"},t)}k.defaultProps={};var $=k,_=/^<code name="([\w|-]+)" /,V=/^<example name="([\w|-]+)"/;function I(e){var t=e.onHeadingSetted,r=e.codes,c=e.examples,n=e.source,a=Object(x.useState)([]),i=Object(C.a)(a,1)[0],s=Object(x.useState)({}),o=Object(C.a)(s,1)[0];Object(x.useEffect)(function(){t&&t(i)},[]);var u=function(e){i.push(e)};return i=[],w.a.createElement(h.a,{className:Object(S.e)("_"),source:n,renderers:{code:A,heading:function(e){var t,n,a=e.level,i=e.children,r="".concat(a,"-").concat(i[0]),c="h".concat(a);if("object"==typeof i[0])return w.a.createElement(c,null,i);if(!o[r]){var s="heading-".concat((t=a,n=i[0],4===t?Object(f.b)():"".concat(t,"-").concat((n||"").replace(/[\W|-]/g,"-"))));2!==a&&3!==a||u({id:s,level:a,children:i}),o[r]=w.a.createElement(c,{id:s},i)}return o[r]},html:function(e){if("<example />"===e.value)return function(){if(o.examples)return o.examples;if(!c)return w.a.createElement("div",null);var e=Object(d.b)("示例","Example"),t="heading-example-h";return u({id:t,level:2,children:[e]}),o.examples=[w.a.createElement("h2",{key:"h",id:t},e)].concat(Object(l.a)(c.map(function(e,t){if(/\d+-/.test(e.name)){var n="heading-".concat(e.name),a=e.title.split("\n"),i=Object(C.a)(a,1)[0];return u({id:n,level:3,children:[i]}),w.a.createElement(y,Object.assign({key:t,id:n},e,{lazy:2<t}))}}))),o.examples}();var t=e.value.match(V);if(t)return function(t){var e="example-".concat(t);if(!o[e]){var n=(c||[]).find(function(e){return e.name===t});o[e]=n?w.a.createElement(y,n):null}return o[e]}(t[1],e.value.indexOf("noExpand"));if("<br>"===e.value||"<br />"===e.value)return w.a.createElement("br",null);var n,a,i=e.value.match(_);return i?(n=i[1],(a=r[n])?[w.a.createElement(A,{key:"cb",value:a.text})].concat(Object(l.a)(a.log.map(function(e,t){return w.a.createElement(E,{key:t},e)}))):(console.error("Code ".concat(n," not existed")),null)):null},table:$,link:function(e){var t=e.href.indexOf(!1)?"_blank":void 0;return w.a.createElement("a",{href:e.href,target:t},e.children)}}})}I.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var R=n(59),H=n(192);n.d(t,"a",function(){return L});var U,B=((U=function(e){var t=Object(x.useState)(e.source),n=Object(C.a)(t,2),a=n[0],i=n[1];return Object(x.useEffect)(function(){e.loader&&e.loader().then(function(e){i(e.default)})},[]),a?w.a.createElement(I,Object.assign({},e,{source:a})):w.a.createElement(R.a,{style:{minHeight:200}})}).defaultProps={loader:void 0,source:void 0},Object(x.memo)(U));t.b=B;function L(t){return Object(H.a)(function(e){return w.a.createElement(B,Object.assign({},e,{loader:t}))})}},202:function(e,t,n){"use strict";var a=n(206),m=n(7),b=n(8),p=n(193),g=n(191),i=function(){function u(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(m.a)(this,u);var t=e.format,n=e.onChange,a=e.separator,i=e.value,r=e.prediction,c=e.distinct,s=e.disabled,o=e.limit;this.distinct=c,this.limit=o,this.separator=a,this.initFormat(t),this.$events={},this.$cachedDisabled={},this.setDisabled(s),r&&(this.prediction=r),this.setValue(i,g.g),this.onChange=n}return Object(b.a)(u,[{key:"setDisabled",value:function(e){this.$cachedDisabled!==e&&(this.$cachedDisabled=e,this.disabled=function(){switch(typeof e){case"boolean":return e;case"function":return e.apply(void 0,arguments);default:return!1}})}},{key:"handleChange",value:function(e){if(this.$values=e,this.dispatch(g.a),this.onChange){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.onChange.apply(this,[this.getValue()].concat(n))}}},{key:"add",value:function(e){var t=this;if(null!=e){1===this.limit&&(this.$values=[]);var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)&&(!t.distinct||!t.check(e))});var a=[],i=!0,r=!1,c=void 0;try{for(var s,o=n[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var u=s.value,l=this.format(u);void 0!==l&&a.push(l)}}catch(e){r=!0,c=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw c}}this.handleChange(this.values.concat(a),e,!0)}}},{key:"set",value:function(e){this.$values=[],this.add(e)}},{key:"check",value:function(e){if(this.prediction){for(var t=0,n=this.values.length;t<n;t++)if(this.prediction(this.values[t],e))return!0;return!1}return 0<=this.values.indexOf(this.format(e))}},{key:"clear",value:function(){this.values=[]}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=this.$events[e];i&&i.forEach(function(e){return e.apply(void 0,n)})}},{key:"initFormat",value:function(t){switch(typeof t){case"string":this.format=function(e){return e[t]};break;case"function":this.format=function(e){return t(e)};break;default:this.format=function(e){return e}}}},{key:"defaultPrediction",value:function(e,t){return e===this.format(t)}},{key:"remove",value:function(e){var t=this;if(e){var n=Array.isArray(e)?e:[e];n=n.filter(function(e){return!t.disabled(e)});var a=[],i=this.prediction||this.defaultPrediction.bind(this),r=!0,c=!1,s=void 0;try{e:for(var o,u=this.values[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){for(var l=o.value,h=0;h<n.length;h++)if(n[h].IS_NOT_MATCHED_VALUE||i(l,n[h])){n.splice(h,1);continue e}a.push(l)}}catch(e){c=!0,s=e}finally{try{r||null==u.return||u.return()}finally{if(c)throw s}}this.handleChange(a,e,!1)}}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(this.$events[e]=this.$events[e].filter(function(e){return e!==t}))}},{key:"getValue",value:function(){var e=this.values;return 1===this.limit?e=this.values[0]:this.separator&&(e=this.values.join(this.separator)),this.$cachedValue=e}},{key:"resetValue",value:function(e){this.$values=e,this.onChange&&this.onChange(this.getValue()),this.dispatch(g.a),this.dispatch("set-value")}},{key:"formatValue",value:function(e){return 1!==this.limit||Array.isArray(e)?e?Array.isArray(e)?e:"string"==typeof e?this.separator?e.split(this.separator).map(function(e){return e.trim()}):(console.warn("Select separator parameter is empty."),[e]):(console.error(new Error("Select values is not valid.")),[]):[]:[e]}},{key:"setValue",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0;Object(p.a)(this.$cachedValue,e)||(t===g.g?this.$values=this.formatValue(e):this.resetValue(this.formatValue(e)))}},{key:"length",get:function(){return this.$values.length}},{key:"values",get:function(){return this.$values},set:function(e){this.$values=e,this.dispatch(g.a),this.onChange&&this.onChange(this.getValue())}}]),u}(),O=n(25),y=n(10),j=n(2),E=n(9),k=n(0),$=n.n(k),r=n(48),_={form:a.a,list:i},c=Object(r.b)(function(e,a){var t,n,i=e||{},r=i.type,c=void 0===r?"list":r,s=i.key,o=void 0===s?"value":s,u=i.limit,l=void 0===u?0:u,h=i.bindProps,f=void 0===h?[]:h,d=i.ignoreUndefined,v=_[c];return n=t=function(e){function s(n){var e;Object(m.a)(this,s),e=Object(y.a)(this,Object(j.a)(s).call(this,n));var t=n.datum,a=n.onChange,i=n.initValidate,r=n[o];if(t instanceof v)e.datum=t;else{var c=f.reduce(function(e,t){return e[t]=n[t],e},{value:r,limit:l,initValidate:i});e.datum=new v(Object.assign(c,t))}return a&&(e.datum.onChange=a),e}return Object(E.a)(s,e),Object(b.a)(s,[{key:"componentDidMount",value:function(){this.prevValues=this.props[o]}},{key:"componentDidUpdate",value:function(){var e=this.props[o];Object(p.a)(e,this.prevValues)||(this.setValue(this.props.initValidate?void 0:g.d),this.prevValues=e)}},{key:"setValue",value:function(e){var t=this.props[o];d&&void 0===t||this.datum.setValue(t,e)}},{key:"render",value:function(){var e=this.props,t=e.onDatumBind,n=Object(O.a)(e,["onDatumBind"]);return t&&t(this.datum),f.includes("disabled")&&void 0!==n.disabled&&this.datum.setDisabled(n.disabled),"list"===c&&this.setValue(g.g),$.a.createElement(a,Object.assign({},n,{datum:this.datum}))}}]),s}(k.PureComponent),t.defaultProps={initValidate:!1},n});t.a={Form:a.a,List:i,hoc:c}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return h});var a=n(216),i=n(49),r=n(42),c={},s=null,o=!1,u=r.b.height;function l(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>u){var n=Object(i.b)();return c[n]=e,n}return e.render(),null}function h(e){e&&delete c[e]}document.addEventListener("scroll",function(){s&&clearTimeout(s),s=setTimeout(function(){o||(o=!0,Object.keys(c).forEach(function(e){var t=c[e],n=t.element,a=t.render,i=n.getBoundingClientRect();i.bottom<0||i.top>u||(delete c[e],a())}),o=!1),s=null},80)},a.a)},206:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var c=n(30),u=n(7),a=n(8),i=n(221),r=n.n(i),s=n(58),l=n(61),h=n(41),f=n(4),d=n(196),v=n(191),o=function(){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(u.a)(this,o);var t=e.removeUndefined,n=void 0===t||t,a=e.rules,i=e.onChange,r=e.value,c=e.error,s=e.initValidate;this.rules=a,this.onChange=i,this.removeUndefined=n,this.$inputNames={},this.$values={},this.$defaultValues={},this.$validator={},this.$events={},this.$errors={},this.deepSetOptions={removeUndefined:n,forceSet:!0},r&&this.setValue(r,s?void 0:v.d),c&&this.setError("",c)}return Object(a.a)(o,[{key:"handleChange",value:function(){this.onChange&&this.onChange(this.getValue())}},{key:"reset",value:function(){this.$errors={},this.setValue(Object(s.f)(Object(l.b)(this.$defaultValues)),v.c,!0),this.handleChange(),this.dispatch(v.e)}},{key:"get",value:function(e){var t=this;return Array.isArray(e)?e.map(function(e){return t.get(e)}):Object(h.a)(this.$values,e)}},{key:"set",value:function(e,t,n){Object(f.i)(e)&&(t=Object(h.f)(e),e=Object.keys(e)),Object(f.a)(e)?this.setArrayValue(e,t):t!==this.get(e)&&(Object(h.d)(this.$values,e,t,this.deepSetOptions),this.$inputNames[e]&&(this.dispatch(Object(v.j)(e),t,e),this.dispatch(Object(v.h)(e))),n&&this.publishValue(e,v.c),this.dispatch(v.a),this.handleChange())}},{key:"setArrayValue",value:function(e,n){var a=this;e.forEach(function(e,t){Object(h.d)(a.$values,e,n[t],a.deepSetOptions)}),e.forEach(function(e,t){a.$inputNames[e]&&(a.dispatch(Object(v.j)(e),n[t],e),a.dispatch(Object(v.h)(e)))}),this.dispatch(v.a),this.handleChange()}},{key:"insert",value:function(e,t,n){this.insertError(e,t,void 0),this.get(e).splice(t,0,n),this.publishValue(e,v.d),this.publishError(e)}},{key:"splice",value:function(e,t){this.spliceError(e,t),this.get(e).splice(t,1),this.publishValue(e,v.d),this.publishError(e)}},{key:"remove",value:function(e){Object(h.c)(this.$values,e)}},{key:"publishValue",value:function(e,t){var n=this,a="".concat(e,"["),i="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(a)||0===e.indexOf(i)}).forEach(function(e){n.dispatch(Object(v.j)(e),n.get(e),e,t)})}},{key:"getError",value:function(e,t){return t?this.$errors[e]:Object(s.b)(e,this.$errors)}},{key:"setError",value:function(e,t,n){void 0===t?delete this.$errors[e]:this.$errors[e]=t,this.dispatch(Object(v.i)(e),this.getError(e),e,v.b),n&&this.publishError(e)}},{key:"insertError",value:function(e,t,n){Object(s.d)(this.$errors,e,t,n)}},{key:"spliceError",value:function(e,t){Object(s.e)(this.$errors,e,t)}},{key:"publishError",value:function(e){var t=this,n="".concat(e,"["),a="".concat(e,".");Object.keys(this.$inputNames).filter(function(e){return 0===e.indexOf(n)||0===e.indexOf(a)}).forEach(function(e){t.dispatch(Object(v.i)(e),t.getError(e),e,v.b)})}},{key:"getRule",value:function(e){return this.rules&&Object(h.a)(this.rules,e)||[]}},{key:"getValue",value:function(){return Object(l.b)(this.$values)}},{key:"setValue",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;!(2<arguments.length?arguments[2]:void 0)&&r()(e,this.$values)||(this.$values=Object(h.b)({},e,{clone:!0}),setTimeout(function(){Object.keys(t.$inputNames).sort(function(e,t){return e.length-t.length}).forEach(function(e){t.dispatch(Object(v.j)(e),t.get(e),e,n),t.dispatch(Object(v.h)(e))}),t.dispatch(v.a)}))}},{key:"bind",value:function(e,t,n,a){this.$inputNames[e]&&console.warn('There is already an item with name "'.concat(e,'" exists. The name props must be unique.')),void 0===n||this.get(e)||(this.set(e,n,!0),this.dispatch(Object(v.h)(e)),this.dispatch(v.a)),n&&(this.$defaultValues[e]=Object(l.b)(n)),this.$validator[e]=a,this.$inputNames[e]=!0,this.subscribe(Object(v.j)(e),t),this.subscribe(Object(v.i)(e),t)}},{key:"unbind",value:function(e){var t=this;Array.isArray(e)?e.forEach(function(e){return t.unbind(e)}):(this.unsubscribe(Object(v.j)(e)),this.unsubscribe(Object(v.i)(e)),delete this.$inputNames[e],delete this.$validator[e],delete this.$errors[e],delete this.$defaultValues[e],Object(h.c)(this.$values,e))}},{key:"dispatch",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var i=this.$events[e];i&&i.forEach(function(e){return e.apply(void 0,n)})}},{key:"subscribe",value:function(e,t){this.$events[e]||(this.$events[e]=[]);var n=this.$events[e];t in n||n.push(t)}},{key:"unsubscribe",value:function(e,t){this.$events[e]&&(t?this.$events[e]=this.$events[e].filter(function(e){return e!==t}):delete this.$events[e])}},{key:"validate",value:function(){var r=this;return new Promise(function(n,a){var e=Object.keys(r.$validator),t=r.getValue(),i=[].concat(Object(c.a)(e.map(function(e){return r.$validator[e](r.get(e),t)})),Object(c.a)((r.$events[v.f]||[]).map(function(e){return e()})));Promise.all(i).then(function(e){var t=e.find(function(e){return!0!==e});void 0===t?n(!0):a(t)}).catch(function(e){a(new d.a(e))})})}},{key:"validateFieldsByName",value:function(t,n){var a=this;if(!t||"string"!=typeof t)return Promise.reject(new Error('Name expect a string, get "'.concat(t,'"')));var i=[],r=this.getValue();return Object.keys(this.$validator).forEach(function(e){e!==t&&0!==e.indexOf(t)||i.push(a.$validator[e](a.get(e),r,n))}),Object(d.c)(i)}},{key:"validateFields",value:function(e,t){var n=this;Array.isArray(e)||(e=[e]);var a=e.map(function(e){return n.validateFieldsByName(e,t)});return Object(d.c)(a)}},{key:"validateClear",value:function(){var t=this,e=Object.keys(this.$validator);this.$errors={};var n=e.map(function(e){return t.$validator[e](v.c)});Promise.all(n)}}]),o}()},272:function(e,t,n){"use strict";var a=n(7),i=n(8),r=window.console,c=function(){function e(){Object(a.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(i.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.map(function(e){return"".concat((t=e,JSON.stringify(t,function(e,t){return"function"==typeof t?"fn#fn".concat(t.toString(),"fn#fn"):t},2)));var t});this.current.push(a)}}]),e}();t.a={start:function(){window.console=new c},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=r,e}}}}]);