function el(e){return document.getElementById(e)}var requirejs,require,define;!function(e){function i(e,i){return w.call(e,i)}function o(e,i){var o,t,n,s,r,a,d,l,c,m,f=i&&i.split("/"),p=g.map,u=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(i){for(f=f.slice(0,f.length-1),e=f.concat(e.split("/")),l=0;l<e.length;l+=1)if(m=e[l],"."===m)e.splice(l,1),l-=1;else if(".."===m){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((f||u)&&p){for(o=e.split("/"),l=o.length;l>0;l-=1){if(t=o.slice(0,l).join("/"),f)for(c=f.length;c>0;c-=1)if(n=p[f.slice(0,c).join("/")],n&&(n=n[t])){s=n,r=l;break}if(s)break;!a&&u&&u[t]&&(a=u[t],d=l)}!s&&a&&(s=a,r=d),s&&(o.splice(0,r,s),e=o.join("/"))}return e}function t(i,o){return function(){return c.apply(e,v.call(arguments,0).concat([i,o]))}}function n(e){return function(i){return o(i,e)}}function s(e){return function(i){p[e]=i}}function r(o){if(i(u,o)){var t=u[o];delete u[o],h[o]=!0,l.apply(e,t)}if(!i(p,o)&&!i(h,o))throw new Error("No "+o);return p[o]}function a(e){var i,o=e?e.indexOf("!"):-1;return o>-1&&(i=e.substring(0,o),e=e.substring(o+1,e.length)),[i,e]}function d(e){return function(){return g&&g.config&&g.config[e]||{}}}var l,c,m,f,p={},u={},g={},h={},w=Object.prototype.hasOwnProperty,v=[].slice;m=function(e,i){var t,s=a(e),d=s[0];return e=s[1],d&&(d=o(d,i),t=r(d)),d?e=t&&t.normalize?t.normalize(e,n(i)):o(e,i):(e=o(e,i),s=a(e),d=s[0],e=s[1],d&&(t=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:t}},f={require:function(e){return t(e)},exports:function(e){var i=p[e];return"undefined"!=typeof i?i:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:d(e)}}},l=function(o,n,a,d){var l,c,g,w,v,b,y=[];if(d=d||o,"function"==typeof a){for(n=!n.length&&a.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=m(n[v],d),c=w.f,"require"===c)y[v]=f.require(o);else if("exports"===c)y[v]=f.exports(o),b=!0;else if("module"===c)l=y[v]=f.module(o);else if(i(p,c)||i(u,c)||i(h,c))y[v]=r(c);else{if(!w.p)throw new Error(o+" missing "+c);w.p.load(w.n,t(d,!0),s(c),{}),y[v]=p[c]}g=a.apply(p[o],y),o&&(l&&l.exports!==e&&l.exports!==p[o]?p[o]=l.exports:g===e&&b||(p[o]=g))}else o&&(p[o]=a)},requirejs=require=c=function(i,o,t,n,s){return"string"==typeof i?f[i]?f[i](o):r(m(i,o).f):(i.splice||(g=i,o.splice?(i=o,o=t,t=null):i=e),o=o||function(){},"function"==typeof t&&(t=n,n=s),n?l(e,i,o,t):setTimeout(function(){l(e,i,o,t)},4),c)},c.config=function(e){return g=e,g.deps&&c(g.deps,g.callback),c},define=function(e,o,t){o.splice||(t=o,o=[]),i(p,e)||i(u,e)||(u[e]=[e,o,t])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.videoLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return e.prototype={config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){function e(){var e=!1;if(function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),!e){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(e=!0)}return e}return void 0===this._isMobile&&(this._isMobile=e()),this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,i=1e3,o=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var t=new RegExp("Chrome/([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1)),26>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var t=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1),o=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var t=new RegExp("Firefox/([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1)),16>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var t=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=t.exec(e)&&(i=parseFloat(RegExp.$1),o=parseFloat(RegExp.$2)),6>i&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var i=0;i<e.length;++i)this.registerDemo(e[i])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadDemo();var e=this.demos[this.demoIndex],i=document.getElementById(e.id),o=!1;if(i)if(!this._preferImages&&e.src||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if((this._preferImages||this._forceVideo)&&void 0!==e.video){o=!1;var t=document.createElement("video");t.id="v"+i.id,t.className="demoimg",t.preload="auto",t.autoplay="autoplay",t.controls="controls",t.poster="/video/moodo.png";for(var n=0;n<e.video.length;++n){var s=document.createElement("source");s.src=e.video[n].path,s.type=e.video[n].type,t.appendChild(s)}i.id="",i.style.overflow="hidden",i.appendChild(t),this.videoLoaded=!0,window.postMessage("video_started","*")}else if(e.src){o=!0;var r=document.createElement("iframe");r.id=i.id,r.className=i.className+" demo",r.setAttribute("seamless","seamless"),r.scrolling="no",r.src=e.src,i.parentElement.replaceChild(r,i)}}else{var a=document.createElement("img");a.id=i.id,a.className="demoimg",a.src=this.getImgSrc(e.img),i.id="",i.style.overflowY="hidden",i.style.overflowX="auto",i.appendChild(a)}this.demoIndex++,(this._noLoadDelay||!o)&&this._loadDemo()}}},new e});var rqConfig={paths:{DemoManager:"/landing/js/DemoManager"},waitSeconds:0};require.config(rqConfig),requirejs(["DemoManager"],function(e){function i(e){var i="",o=["ms","webkit","moz","o"],t=document.body.style;if("string"==typeof t[e])i="";else for(var n=0;n<o.length;n++)if("string"==typeof t["-"+o[n]+"-"+e]){i=o[n];break}var s=i.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return i?i+s:s}function o(e){return document.getElementById(e)}function t(){var i=40;if(e.isMobile())o("topBar").classList.add("pinned"),s=!0;else{var t=document.body.scrollTop||document.documentElement.scrollTop;t>i&&!s?(o("topBar").classList.add("pinned"),s=!0):i>t&&s&&(o("topBar").classList.remove("pinned"),s=!1)}}var n=i("transition");window.__demos&&(window.__config?e.config(window.__config):e.isLegacyBrowser()&&e.config({preferImages:!0,noDelayLoad:!0}),e.registerDemos(window.__demos),e.beginLoading());var s=!1;e.isMobile()&&document.body.classList.add("mobile"),window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,requestAnimationFrame(function(){o("topBar").style[n]="opacity 200ms",o("topBar").style.opacity=1,requestAnimationFrame(function(){o("logoWrapper").style[n]="all 400ms",o("logoSubtitle").style[n]="all 300ms"})}),document.onscroll=t,t()}),define("blog",function(){});