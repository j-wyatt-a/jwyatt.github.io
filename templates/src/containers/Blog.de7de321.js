webpackJsonp([3],{146:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),c=a(s),u=n(14),d=n(147),f=(a(d),n(23)),m=a(f),p=n(12),g=a(p),h=["January","February","March","April","May","June","July","August","September","October","November","December"],y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.post;n.contents;if("undefined"!=typeof window&&(window.__addDemo=function(n){t.excerpt||e.loadDemos([n])},window.__addDemos=function(n){t.excerpt||e.loadDemos(n)}),!t.excerpt&&"undefined"!=typeof window)if(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://apis.google.com/js/platform.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),window.FB?FB.XFBML.parse(document):function(e,t,n){var a,r=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=312316478922816&version=v2.0",r.parentNode.insertBefore(a,r))}(document,"script","facebook-jssdk"),window.twttr?twttr.widgets.load():function(e,t,n){var a,r=e.getElementsByTagName(t)[0],o=/^http:/.test(e.location)?"http":"https";e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src=o+"://platform.twitter.com/widgets.js",r.parentNode.insertBefore(a,r))}(document,"script","twitter-wjs"),window.disqus_identifier=n.title,window.disqus_shortname="moodo",window.disqus_url="https://www.moo.do/blog/"+n.slug,window.DISQUS)DISQUS.reset({reload:!0,config:function(){this.page.identifier=window.disqus_identifier,this.page.url=window.disqus_url}});else{var a=document.createElement("script");a.id="script_disqus",a.type="text/javascript",a.async=!0,a.src="//"+window.disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)}if("undefined"!=typeof window){var n=t.post;if(n.script){var r=document.createElement("script");r.id="script_"+n.slug,r.innerHTML=n.script,m.default.removeExistingScript(r),document.head.appendChild(r)}}}},{key:"loadDemos",value:function(e){g.default.registerDemos(e),g.default.isMobile()||g.default.isLegacyBrowser()?g.default.config({preferImages:!0,noDelayLoad:!0}):g.default.config({onlyOne:!0}),g.default.beginLoading()}},{key:"render",value:function(){var e=this.props,t=e.post,n=new Date(t.date),a=h[n.getMonth()]+" "+n.getDate()+", "+n.getFullYear(),r=t.category,o=t.contents,l=o.indexOf("<p>##EXCERPT##</p>");return l>=0&&(o=e.excerpt?o.substr(0,l):o.replace("<p>##EXCERPT##</p>","")),c.default.createElement("div",{className:"post padded",id:t.uid?"post_"+t.uid:void 0},c.default.createElement("div",{className:"postHeader"+(t.image?" withImage":"")},c.default.createElement("header",null,c.default.createElement(u.Link,{to:"/blog/"+t.slug,prefetch:!1},t.title)),c.default.createElement("div",{className:"postMetadata"},c.default.createElement("span",{className:"postDate"},a),c.default.createElement("span",{className:"postCategories"},c.default.createElement("span",null," | "),c.default.createElement("span",null,c.default.createElement(u.Link,{to:"/blog/"+r,prefetch:!1},r))))),c.default.createElement("div",{className:"postContent"},t.image&&c.default.createElement("img",{className:"postImg postImgFull postImgHero",src:t.image}),c.default.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),e.excerpt&&c.default.createElement("div",{className:"postFooter"},c.default.createElement("div",{className:"readMore"},c.default.createElement(u.Link,{to:"/blog/"+t.slug,prefetch:!1},l>=0?"Continue Reading...":"Continue to comments...")))),!e.excerpt&&c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{id:"social"},c.default.createElement("span",{id:"shareFB",className:"fb-share-button","data-href":"https://www.moo.do/blog/"+t.slug,"data-type":"button"}),c.default.createElement("a",{id:"shareTwitter",href:"https://twitter.com/share",className:"twitter-share-button","data-text":"#MooDo blog post: https://www.moo.do/blog/"+t.slug,"data-count":"none"},"Tweet"),c.default.createElement("span",{id:"shareGoogle",className:"g-plus","data-action":"share","data-annotation":"none"}),c.default.createElement("div",{id:"fb-root"})),c.default.createElement("div",{id:"disqus_thread",className:"padded"})))}}]),t}(c.default.Component);t.default=(0,u.withRouteData)(function(e){return c.default.createElement(y,{post:e.post,excerpt:e.excerpt})})},147:function(e,t,n){!function(t,a){e.exports=a(n(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var a,r=e.split(":");if(r.length>1){var o=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(r[0].trim()),l=(a=r.slice(1).join(":").trim(),/^\d+$/.test(a)?Number(a):a.replace(/'/g,'"'));n[o]=l}}),n}function a(s,c,u){var d,f=u.transform._;if(s.nodeType===o.COMMENT)return null;if(s.nodeType===o.TEXT){var m=(d=s.textContent,i.innerHTML=d,i.textContent);return f?f(m):m}for(var p=s.tagName.toLowerCase(),g=u.transform[p],h={},y=0;y<s.attributes.length;y++){var v=s.attributes[y].name,w=s.attributes[y].value;h[v]=w}h.key=c.toString();for(var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments[1];return Object.keys(e).reduce(function(o,l){if(/^on.*/.test(l))return o;var i=l;/^(data|aria)-/.test(l)||0===a.filter(function(e){return e instanceof RegExp?e.test(l):e===l}).length&&(i=t(l));var s=r[i]||i;return o[s]="style"===s?n(e.style):e[l],o},{})}(h,u.preserveAttributes),b=[],N=0;N<s.childNodes.length;N++){var T=s.childNodes[N],_=c+"."+N;if(!(l.indexOf(p)>-1&&T.nodeType===o.TEXT&&(T.textContent=T.textContent.trim(),""===T.textContent))){var x=a(T,_,u);null!==x&&b.push(x)}}return"style"!==p||g||f?(0===b.length&&(b=null),g?e.createElement(g,E,b):f?f(p,E,b):e.createElement(p,E,b)):(E.dangerouslySetInnerHTML={__html:b[0]},e.createElement(p,E,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var r={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},o={ELEMENT:1,TEXT:3,COMMENT:8},l=["table","tbody","thead","tfoot","tr"],i=document.createElement("div");return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError("Expected HTML string");var n={transform:t.transform||{},preserveAttributes:t.preserveAttributes||[]},r=document.createElement("div");r.innerHTML=e.trim();for(var o=[],l=0;l<r.childNodes.length;l++)o.push(r.childNodes[l]);var i=o.map(function(e,t){return a(e,t,n)}).filter(function(e){return null!==e});return 1===i.length?i[0]:i}})},63:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=a(r),l=n(14),i=n(48),s=n(146),c=a(s),u=n(47),d=a(u);t.default=(0,i.hot)(e)((0,l.withRouteData)(function(e){var t=e.posts,n=e.numPages,a=e.path,r=e.isSinglePost,i=e.showChangelog;return o.default.createElement("div",{className:"blog"},o.default.createElement(d.default,{top:!0,title:r?t[0].title:"Blog"}),i&&o.default.createElement("div",{className:"linkChangelog padded center"},o.default.createElement(l.Link,{to:"/changelog"},o.default.createElement("div",{className:"button white"},"Open Change Log"))),o.default.createElement("div",{className:"posts"},t.map(function(e,t){var a=o.default.createElement(c.default,{key:e.title,post:e,excerpt:n>1});return o.default.createElement(o.default.Fragment,{key:e.title+"frag"},a,o.default.createElement("hr",null))})),n>1&&o.default.createElement("div",{className:"pagination padded"},Array(n).fill().map(function(e,t){return o.default.createElement(l.Link,{activeClassName:"selected",exact:!0,key:t,to:a+(t>0?"/"+(t+1):""),prefetch:!1},t+1)})))}))}).call(t,n(11)(e))}});
//# sourceMappingURL=Blog.de7de321.js.map