(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);a(73);var n=a(7),r=a.n(n),o=a(0),c=a.n(o),l=a(4),s=a.n(l),i=a(145),p=a(147),u=a(148),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("iframe",{className:"tab-content iframe",frameBorder:"0",width:"100%",height:"800",src:this.props.src})},t}(c.a.Component);m.propTypes={src:s.a.string};var h=m,d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("pre",{className:"codeblock tui-language-javascript"},c.a.createElement("code",{dangerouslySetInnerHTML:{__html:this.props.code}}))},t}(c.a.Component);d.propTypes={code:s.a.string};var f=d;a(144);a.d(t,"query",function(){return g});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=e.pathname,a=e.hash,n=this.props.data,r=n.examplePageJson,o=n.file,l=r.title,s=r.codeJs,m=r.codeHtml,d=""+t.split("/").pop()+a;return c.a.createElement(i.a,{tabIndex:1,selectedNavItemId:d},c.a.createElement("header",null,c.a.createElement("h2",{className:"title"},l)),c.a.createElement("article",null,c.a.createElement(p.a,null,c.a.createElement(u.a,{name:"Result",hasIframe:!0},c.a.createElement(h,{src:"/tui.virtual-scrolling/latest/"+o.relativePath})),s?c.a.createElement(u.a,{name:"JavaScript"},c.a.createElement(f,{code:s})):null,m?c.a.createElement(u.a,{name:"HTML"},c.a.createElement(f,{code:m})):null)))},t}(c.a.Component);E.propTypes={data:s.a.shape({examplePageJson:s.a.object.isRequired,file:s.a.object.isRequired}),location:s.a.shape({pathname:s.a.string,hash:s.a.string})};t.default=E;var g="4788605"}}]);
//# sourceMappingURL=component---src-templates-example-page-js-3f223632f9ca9e524aa2.js.map