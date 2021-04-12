(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[42],{1430:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(547),c=t(548),o=t(35),l=t(1431),s=t.n(l),u=t(1432),m=t.n(u),d=Object(o.b)(s.a,m.a),p=[{name:"01-default",title:Object(o.b)('default \n name="default"','default \n name="default"'),component:t(1433).default,rawText:t(1434)},{name:"01-wrapper",title:Object(o.b)("包裹容器 \n 直接把内容内嵌到 Spin 中，将现有容器变为加载状态。","Container \n children in Spin"),component:t(1435).default,rawText:t(1436)},{name:"02-chasing-dots",title:Object(o.b)('chasing-dots \n name="chasing-dots"','chasing-dots \n name="chasing-dots"'),component:t(1437).default,rawText:t(1438)},{name:"03-cube-grid",title:Object(o.b)('cube-grid \n name="cube-grid"','cube-grid \n name="cube-grid"'),component:t(1439).default,rawText:t(1440)},{name:"04-double-bounce",title:Object(o.b)('double-bounce \n name="double-bounce"','double-bounce \n name="double-bounce"'),component:t(1441).default,rawText:t(1442)},{name:"05-fading-circle",title:Object(o.b)('fading-circle \n name="fading-circle"','fading-circle \n name="fading-circle"'),component:t(1443).default,rawText:t(1444)},{name:"06-four-dots",title:Object(o.b)('four-dots \n name="four-dots"','four-dots \n name="four-dots"'),component:t(1445).default,rawText:t(1446)},{name:"07-plane",title:Object(o.b)('plane \n name="plane"','plane \n name="plane"'),component:t(1447).default,rawText:t(1448)},{name:"08-pulse",title:Object(o.b)('pulse \n name="pulse"','pulse \n name="pulse"'),component:t(1449).default,rawText:t(1450)},{name:"09-ring",title:Object(o.b)('ring \n name="ring"','ring \n name="ring"'),component:t(1451).default,rawText:t(1452)},{name:"10-scale-circle",title:Object(o.b)('scale-circle \n name="scale-circle"','scale-circle \n name="scale-circle"'),component:t(1453).default,rawText:t(1454)},{name:"11-three-bounce",title:Object(o.b)('three-bounce \n name="three-bounce"','three-bounce \n name="three-bounce"'),component:t(1455).default,rawText:t(1456)},{name:"12-wave",title:Object(o.b)('wave \n name="wave"','wave \n name="wave"'),component:t(1457).default,rawText:t(1458)}];n.default=Object(i.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},1431:function(e,n){e.exports="# Spin *加载中*\n\n部分样式来源于[SpinKit](https://github.com/tobiasahlin/SpinKit)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| color | string | #6c757d | 颜色 |\n| size | number \\| string | 40 | 尺寸 |\n| name | string | 'fading-circle' | 类型，可选值见示例 |"},1432:function(e,n){e.exports="# Spin\n\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| color | string | #6c757d | color |\n| size | number \\| string | 40 | size |\n| name | string | 'fading-circle' | type. See the example for optional values. |"},1433:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"default",color:"green"}),r.a.createElement(i.a,{name:"default"}),r.a.createElement(i.a,{size:"54px",name:"default",color:"#dc3545"}))}},1434:function(e,n){e.exports='/**\n* cn - default\n     -- name="default"\n* en - default\n     -- name="default"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="default" color="green" />\n      <Spin name="default" />\n      <Spin size="54px" name="default" color="#dc3545" />\n    </div>\n  )\n}\n'},1435:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var c=t(5),a=t(6),o=t(7),l=t(4),r=t(8),i=t(0),s=t.n(i),u=t(303),m=t(42),d=t(105),p=function(e){function i(){var e,n;Object(c.a)(this,i);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(l.a)(i)).call.apply(e,[this].concat(a)))).state={loading:!0},n.handleChange=function(e){n.setState({loading:e})},n}return Object(r.a)(i,e),Object(a.a)(i,[{key:"render",value:function(){var e=this.state.loading;return s.a.createElement("div",null,s.a.createElement(u.a,{value:e,onChange:this.handleChange,style:{marginBottom:20}}),s.a.createElement(m.a,{loading:e,size:20},s.a.createElement(d.a,{style:{marginBottom:0}},s.a.createElement("h3",null,"This is Title"),"Some Content Here...")))}}]),i}(s.a.Component)},1436:function(e,n){e.exports="/**\n* cn - 包裹容器\n     -- 直接把内容内嵌到 Spin 中，将现有容器变为加载状态。\n* en - Container\n     -- children in Spin\n*/\nimport React from 'react'\nimport { Spin, Alert, Switch } from 'shineout'\n\nexport default class extends React.Component {\n  state = {\n    loading: true,\n  }\n\n  handleChange = v => {\n    this.setState({\n      loading: v,\n    })\n  }\n\n  render() {\n    const { loading } = this.state\n    return (\n      <div>\n        <Switch value={loading} onChange={this.handleChange} style={{ marginBottom: 20 }} />\n        <Spin loading={loading} size={20}>\n          <Alert style={{ marginBottom: 0 }}>\n            <h3>This is Title</h3>\n            Some Content Here...\n          </Alert>\n        </Spin>\n      </div>\n    )\n  }\n}\n"},1437:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"chasing-dots",color:"green"}),r.a.createElement(i.a,{name:"chasing-dots"}),r.a.createElement(i.a,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},1438:function(e,n){e.exports='/**\n* cn - chasing-dots\n     -- name="chasing-dots"\n* en - chasing-dots\n     -- name="chasing-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="chasing-dots" color="green" />\n      <Spin name="chasing-dots" />\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1439:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"cube-grid",color:"green"}),r.a.createElement(i.a,{name:"cube-grid"}),r.a.createElement(i.a,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},1440:function(e,n){e.exports='/**\n* cn - cube-grid\n     -- name="cube-grid"\n* en - cube-grid\n     -- name="cube-grid"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="cube-grid" color="green" />\n      <Spin name="cube-grid" />\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\n    </div>\n  )\n}\n'},1441:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"double-bounce",color:"green"}),r.a.createElement(i.a,{name:"double-bounce"}),r.a.createElement(i.a,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},1442:function(e,n){e.exports='/**\n* cn - double-bounce\n     -- name="double-bounce"\n* en - double-bounce\n     -- name="double-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="double-bounce" color="green" />\n      <Spin name="double-bounce" />\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1443:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"fading-circle",color:"green"}),r.a.createElement(i.a,{name:"fading-circle"}),r.a.createElement(i.a,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},1444:function(e,n){e.exports='/**\n* cn - fading-circle\n     -- name="fading-circle"\n* en - fading-circle\n     -- name="fading-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="fading-circle" color="green" />\n      <Spin name="fading-circle" />\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1445:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"four-dots",color:"green"}),r.a.createElement(i.a,{name:"four-dots"}),r.a.createElement(i.a,{size:"54px",name:"four-dots",color:"#dc3545"}))}},1446:function(e,n){e.exports='/**\n* cn - four-dots\n     -- name="four-dots"\n* en - four-dots\n     -- name="four-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="four-dots" color="green" />\n      <Spin name="four-dots" />\n      <Spin size="54px" name="four-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1447:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"plane",color:"green"}),r.a.createElement(i.a,{name:"plane"}),r.a.createElement(i.a,{size:"54px",name:"plane",color:"#dc3545"}))}},1448:function(e,n){e.exports='/**\n* cn - plane\n     -- name="plane"\n* en - plane\n     -- name="plane"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="plane" color="green" />\n      <Spin name="plane" />\n      <Spin size="54px" name="plane" color="#dc3545" />\n    </div>\n  )\n}\n'},1449:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"pulse",color:"green"}),r.a.createElement(i.a,{name:"pulse"}),r.a.createElement(i.a,{size:"54px",name:"pulse",color:"#dc3545"}))}},1450:function(e,n){e.exports='/**\n* cn - pulse\n     -- name="pulse"\n* en - pulse\n     -- name="pulse"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="pulse" color="green" />\n      <Spin name="pulse" />\n      <Spin size="54px" name="pulse" color="#dc3545" />\n    </div>\n  )\n}\n'},1451:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"ring",color:"green"}),r.a.createElement(i.a,{name:"ring"}),r.a.createElement(i.a,{size:"54px",name:"ring",color:"#dc3545"}))}},1452:function(e,n){e.exports='/**\n* cn - ring\n     -- name="ring"\n* en - ring\n     -- name="ring"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="ring" color="green" />\n      <Spin name="ring" />\n      <Spin size="54px" name="ring" color="#dc3545" />\n    </div>\n  )\n}\n'},1453:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"scale-circle",color:"green"}),r.a.createElement(i.a,{name:"scale-circle"}),r.a.createElement(i.a,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},1454:function(e,n){e.exports='/**\n* cn - scale-circle\n     -- name="scale-circle"\n* en - scale-circle\n     -- name="scale-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="scale-circle" color="green" />\n      <Spin name="scale-circle" />\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1455:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"three-bounce",color:"green"}),r.a.createElement(i.a,{name:"three-bounce"}),r.a.createElement(i.a,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},1456:function(e,n){e.exports='/**\n* cn - three-bounce\n     -- name="three-bounce"\n* en - three-bounce\n     -- name="three-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="three-bounce" color="green" />\n      <Spin name="three-bounce" />\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1457:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(42);n.default=function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,{size:18,name:"wave",color:"green"}),r.a.createElement(i.a,{name:"wave"}),r.a.createElement(i.a,{size:"54px",name:"wave",color:"#dc3545"}))}},1458:function(e,n){e.exports='/**\n* cn - wave\n     -- name="wave"\n* en - wave\n     -- name="wave"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="wave" color="green" />\n      <Spin name="wave" />\n      <Spin size="54px" name="wave" color="#dc3545" />\n    </div>\n  )\n}\n'},303:function(e,n,t){"use strict";var a=t(50),r=t(19),i=t(125),c=Object(i.a)("switch"),o=t(550),l=Object(r.compose)(a.a,o.b)(c);l.displayName="ShineoutSwitch",l.Switch=c;n.a=l},550:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return l});var a=t(0),r=t.n(a),i=t(29),c=t.n(i)()(),o=c.Provider,l=function(t){return function(n){return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(t,Object.assign({},n,e))})}}}}]);