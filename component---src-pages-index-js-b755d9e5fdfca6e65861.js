(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return g});n(48);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),u=n(162),l=n.n(u),s=n(160),d=n.n(s),p=n(157),m=n(159),f=n(145),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=l()(this,"props.data.site.siteMetadata.title"),e=l()(this,"props.data.site.siteMetadata.description"),n=l()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(m.a,{location:this.props.location},i.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e}],title:t}),i.a.createElement(p.a,null),n.map(function(t){var e=t.node,n=l()(e,"frontmatter.title")||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},i.a.createElement(c.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(i.a.Component);e.default=h;var g="3352422197"},145:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l});var a=n(168),r=n.n(a),o=n(169),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var u=c.rhythm,l=c.scale},146:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(144),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var l=n(147),s=n.n(l);n.d(e,"PageRenderer",function(){return s.a});var d=n(35);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},152:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(52),u=n(2),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},157:function(t,e,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=(n(166),n(167),n(158)),u=n.n(c),l=n(145),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement("img",{src:u.a,alt:"Matt Conde",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2)}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Matt Conde")," who lives and works in London."," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/mattconde"},"Follow me on Twitter")))},e}(i.a.Component);e.a=s},158:function(t,e,n){t.exports=n.p+"static/profile-pic-4cba77c608ac07ea9157aadd80ba8e66.png"},159:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),u=n(145),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.children;return t="/blog/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.1),{marginBottom:Object(u.a)(.8),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"mattconde.github.io")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"mattconde.github.io")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},t,a)},e}(i.a.Component);e.a=l}}]);
//# sourceMappingURL=component---src-pages-index-js-b755d9e5fdfca6e65861.js.map