function el(e){return document.getElementById(e)}var requirejs,require,define;!function(e){function i(e,i){return w.call(e,i)}function t(e,i){var t,o,n,s,r,a,d,c,l,u,p=i&&i.split("/"),m=h.map,f=m&&m["*"]||{};if(e&&"."===e.charAt(0))if(i){for(p=p.slice(0,p.length-1),e=p.concat(e.split("/")),c=0;c<e.length;c+=1)if(u=e[c],"."===u)e.splice(c,1),c-=1;else if(".."===u){if(1===c&&(".."===e[2]||".."===e[0]))break;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||f)&&m){for(t=e.split("/"),c=t.length;c>0;c-=1){if(o=t.slice(0,c).join("/"),p)for(l=p.length;l>0;l-=1)if(n=m[p.slice(0,l).join("/")],n&&(n=n[o])){s=n,r=c;break}if(s)break;!a&&f&&f[o]&&(a=f[o],d=c)}!s&&a&&(s=a,r=d),s&&(t.splice(0,r,s),e=t.join("/"))}return e}function o(i,t){return function(){return l.apply(e,v.call(arguments,0).concat([i,t]))}}function n(e){return function(i){return t(i,e)}}function s(e){return function(i){m[e]=i}}function r(t){if(i(f,t)){var o=f[t];delete f[t],g[t]=!0,c.apply(e,o)}if(!i(m,t)&&!i(g,t))throw new Error("No "+t);return m[t]}function a(e){var i,t=e?e.indexOf("!"):-1;return t>-1&&(i=e.substring(0,t),e=e.substring(t+1,e.length)),[i,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var c,l,u,p,m={},f={},h={},g={},w=Object.prototype.hasOwnProperty,v=[].slice;u=function(e,i){var o,s=a(e),d=s[0];return e=s[1],d&&(d=t(d,i),o=r(d)),d?e=o&&o.normalize?o.normalize(e,n(i)):t(e,i):(e=t(e,i),s=a(e),d=s[0],e=s[1],d&&(o=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},p={require:function(e){return o(e)},exports:function(e){var i=m[e];return"undefined"!=typeof i?i:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:d(e)}}},c=function(t,n,a,d){var c,l,h,w,v,y,b=[];if(d=d||t,"function"==typeof a){for(n=!n.length&&a.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=u(n[v],d),l=w.f,"require"===l)b[v]=p.require(t);else if("exports"===l)b[v]=p.exports(t),y=!0;else if("module"===l)c=b[v]=p.module(t);else if(i(m,l)||i(f,l)||i(g,l))b[v]=r(l);else{if(!w.p)throw new Error(t+" missing "+l);w.p.load(w.n,o(d,!0),s(l),{}),b[v]=m[l]}h=a.apply(m[t],b),t&&(c&&c.exports!==e&&c.exports!==m[t]?m[t]=c.exports:h===e&&y||(m[t]=h))}else t&&(m[t]=a)},requirejs=require=l=function(i,t,o,n,s){return"string"==typeof i?p[i]?p[i](t):r(u(i,t).f):(i.splice||(h=i,t.splice?(i=t,t=o,o=null):i=e),t=t||function(){},"function"==typeof o&&(o=n,n=s),n?c(e,i,t,o):setTimeout(function(){c(e,i,t,o)},4),l)},l.config=function(e){return h=e,h.deps&&l(h.deps,h.callback),l},define=function(e,t,o){t.splice||(o=t,t=[]),i(m,e)||i(f,e)||(f[e]=[e,t,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("util",[],function(){function e(e){var i="";if("object"==typeof e){var t=[];for(key in e)t[t.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);i=t.join("&").replace(/%20/g,"+")}else i=e;return i}var i={};return i.XHR=function(i){function t(){c>l?o():log("XHR Failed to retry - reached max retry limit")}function o(){var i=new XMLHttpRequest;if(i.onreadystatechange=function(){4===i.readyState&&(200===!i.status&&(i.retry=t),r(i))},u&&p?i.open(s.toUpperCase(),n,!0,u,p):i.open(s.toUpperCase(),n,!0),d)for(var o in d)i.setRequestHeader(o,d[o]);if(a){i.setRequestHeader("Accept","*/*"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var c=e(a);i.send(c)}else i.send()}var n=i.url,s=i.type,r=i.cb,a=i.data,d=i.headers,c=i.retries||3,l=0,u=i.username,p=i.password;o()},i}),define("auth",["util"],function(e){function i(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return i.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),i=JSON.parse(e),t=i.activeUser;return t}catch(o){log("Error getting app user: ",o)}return void 0},requestAuthorization:function(){var e=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident")?this.sendToApp():this.authenticate(!1,function(e){e?this.getEmailAddr(function(e){var i=this.getCurrentAppUser();i===e.email?this.sendToApp():this.sendToApp(e.email)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp()},sendToApp:function(e){window.location.href=e?window.location.protocol+"//"+window.location.host+"/app/#user="+encodeURIComponent(e):window.location.protocol+"//"+window.location.host+"/app/#login=true"},authenticate:function(e,i){var t={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},o=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=o||this.isMobro();n&&!e&&(t.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(t,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),i&&i(this.isLoggedIn)}.bind(this))},getEmailAddr:function(i){var t=gapi.auth.getToken();if(t){var o="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+t.access_token;e.XHR({type:"GET",url:o,retries:2,cb:function(e){if(200===e.status){var t={};try{t=JSON.parse(e.responseText)}catch(o){log("Error: ",o)}i(t)}else e.retry?e.retry():i()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(i){errorName=i.name}try{e=!!new ActiveXObject("htmlfile")}catch(i){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new i}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.videoLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return e.prototype={config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){function e(){var e=!1;if(function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),!e){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(e=!0)}return e}return void 0===this._isMobile&&(this._isMobile=e()),this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,i=1e3,t=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1)),26>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1),t=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1)),16>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1),t=parseFloat(RegExp.$2)),6>i&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var i=0;i<e.length;++i)this.registerDemo(e[i])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadDemo();var e=this.demos[this.demoIndex],i=document.getElementById(e.id),t=!1;if(i)if(!this._preferImages&&e.src||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if((this._preferImages||this._forceVideo)&&void 0!==e.video){t=!1;var o=document.createElement("video");o.id="v"+i.id,o.className="demoimg",o.preload="auto",o.autoplay="autoplay",o.controls="controls",o.poster="/video/moodo.png";for(var n=0;n<e.video.length;++n){var s=document.createElement("source");s.src=e.video[n].path,s.type=e.video[n].type,o.appendChild(s)}i.id="",i.style.overflow="hidden",i.appendChild(o),this.videoLoaded=!0,window.postMessage("video_started","*")}else if(e.src){t=!0;var r=document.createElement("iframe");r.id=i.id,r.className=i.className+" demo",r.setAttribute("seamless","seamless"),r.scrolling="no",r.src=e.src,i.parentElement.replaceChild(r,i)}}else{var a=document.createElement("img");a.id=i.id,a.className="demoimg",a.src=this.getImgSrc(e.img),i.id="",i.style.overflowY="hidden",i.style.overflowX="auto",i.appendChild(a)}this.demoIndex++,(this._noLoadDelay||!t)&&this._loadDemo()}}},new e});var rqConfig={paths:{util:"/landing/js/util",auth:"/landing/js/auth",DemoManager:"/landing/js/DemoManager"},waitSeconds:0};require.config(rqConfig),requirejs(["util","auth","DemoManager"],function(e,i,t){function o(e){var i="",t=["ms","webkit","moz","o"],o=document.body.style;if("string"==typeof o[e])i="";else for(var n=0;n<t.length;n++)if("string"==typeof o["-"+t[n]+"-"+e]){i=t[n];break}var s=i.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return i?i+s:s}function n(e){return document.getElementById(e)}function s(){var e=40;if(t.isMobile())n("topBar").classList.add("pinned"),a=!0;else{var i=document.body.scrollTop||document.documentElement.scrollTop;i>e&&!a?(n("topBar").classList.add("pinned"),a=!0):e>i&&a&&(n("topBar").classList.remove("pinned"),a=!1)}}var r=o("transition");window.__demos&&(window.__config?t.config(window.__config):t.isLegacyBrowser()&&t.config({preferImages:!0,noDelayLoad:!0}),t.registerDemos(window.__demos),t.beginLoading());var a=!1;t.isMobile()&&document.body.classList.add("mobile"),window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,requestAnimationFrame(function(){n("topBar").style[r]="opacity 200ms",n("topBar").style.opacity=1,requestAnimationFrame(function(){n("logoWrapper").style[r]="all 400ms",n("logoSubtitle").style[r]="all 300ms"})}),document.onscroll=s,s(),window.requestAuthorization=function(){i.requestAuthorization()}}),define("blog",function(){});