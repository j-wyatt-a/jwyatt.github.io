function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init()})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function i(e,i){return v.call(e,i)}function t(e,i){var t,o,n,s,a,r,c,l,d,m,u=i&&i.split("/"),p=g.map,f=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(i){for(u=u.slice(0,u.length-1),e=u.concat(e.split("/")),l=0;l<e.length;l+=1)if(m=e[l],"."===m)e.splice(l,1),l-=1;else if(".."===m){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((u||f)&&p){for(t=e.split("/"),l=t.length;l>0;l-=1){if(o=t.slice(0,l).join("/"),u)for(d=u.length;d>0;d-=1)if(n=p[u.slice(0,d).join("/")],n&&(n=n[o])){s=n,a=l;break}if(s)break;!r&&f&&f[o]&&(r=f[o],c=l)}!s&&r&&(s=r,a=c),s&&(t.splice(0,a,s),e=t.join("/"))}return e}function o(i,t){return function(){return d.apply(e,w.call(arguments,0).concat([i,t]))}}function n(e){return function(i){return t(i,e)}}function s(e){return function(i){p[e]=i}}function a(t){if(i(f,t)){var o=f[t];delete f[t],h[t]=!0,l.apply(e,o)}if(!i(p,t)&&!i(h,t))throw new Error("No "+t);return p[t]}function r(e){var i,t=e?e.indexOf("!"):-1;return t>-1&&(i=e.substring(0,t),e=e.substring(t+1,e.length)),[i,e]}function c(e){return function(){return g&&g.config&&g.config[e]||{}}}var l,d,m,u,p={},f={},g={},h={},v=Object.prototype.hasOwnProperty,w=[].slice;m=function(e,i){var o,s=r(e),c=s[0];return e=s[1],c&&(c=t(c,i),o=a(c)),c?e=o&&o.normalize?o.normalize(e,n(i)):t(e,i):(e=t(e,i),s=r(e),c=s[0],e=s[1],c&&(o=a(c))),{f:c?c+"!"+e:e,n:e,pr:c,p:o}},u={require:function(e){return o(e)},exports:function(e){var i=p[e];return"undefined"!=typeof i?i:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:c(e)}}},l=function(t,n,r,c){var l,d,g,v,w,y,b=[];if(c=c||t,"function"==typeof r){for(n=!n.length&&r.length?["require","exports","module"]:n,w=0;w<n.length;w+=1)if(v=m(n[w],c),d=v.f,"require"===d)b[w]=u.require(t);else if("exports"===d)b[w]=u.exports(t),y=!0;else if("module"===d)l=b[w]=u.module(t);else if(i(p,d)||i(f,d)||i(h,d))b[w]=a(d);else{if(!v.p)throw new Error(t+" missing "+d);v.p.load(v.n,o(c,!0),s(d),{}),b[w]=p[d]}g=r.apply(p[t],b),t&&(l&&l.exports!==e&&l.exports!==p[t]?p[t]=l.exports:g===e&&y||(p[t]=g))}else t&&(p[t]=r)},requirejs=require=d=function(i,t,o,n,s){return"string"==typeof i?u[i]?u[i](t):a(m(i,t).f):(i.splice||(g=i,t.splice?(i=t,t=o,o=null):i=e),t=t||function(){},"function"==typeof o&&(o=n,n=s),n?l(e,i,t,o):setTimeout(function(){l(e,i,t,o)},4),d)},d.config=function(e){return g=e,g.deps&&d(g.deps,g.callback),d},define=function(e,t,o){t.splice||(o=t,t=[]),i(p,e)||i(f,e)||(f[e]=[e,t,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("auth",[],function(){function e(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install"],this.isLoggedIn=!1}return e.prototype={init:function(){gapi.auth.init(),this.authenticate(!0)},authenticate:function(e,i){var t={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:e?0:-1},o="chrome-extension:"===window.location.protocol,n=!!window.navigator.standalone||o||window.navigator.userAgent.indexOf("FluidApp")>=0,s=n||this.isMobro();s&&!e&&(t.redirect_uri=window.location.protocol+"//"+window.location.host),gapi.auth.authorize(t,function(e){console.log("Landing Page Auth Token: ",e),e&&!e.error&&(this.isLoggedIn=!0),i&&i(this.isLoggedIn)}.bind(this))},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(i){errorName=i.name}try{e=!!new ActiveXObject("htmlfile")}catch(i){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new e}),define("DemoManager",[],function(){function e(){this._preferImages=this.isMobile(),this._noLoadDelay=this.isMobile(),this._isMobile=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this.configLoaded=!1,this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return e.prototype={config:function(e){this._preferImages=e.preferImages,this._noLoadDelay=e.noLoadDelay,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){function e(){var e=!1;return function(i){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}return void 0===this._isMobile&&(this._isMobile=e()),this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,i=1e3,t=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1)),26>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1),t=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1)),16>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1),t=parseFloat(RegExp.$2)),6>i&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var i=0;i<e.length;++i)this.registerDemo(e[i])},beginLoading:function(){this.demos.length>0&&this._loadDemo()},receiveFrameMessage:function(e){switch(e.data){case"loaded":this.notifyOfLoad()}},notifyOfLoad:function(){this._loadDemo()},getImgSrc:function(e){return this.isRetina()?e.split(".")[0]+"@2x."+e.split(".")[1]:e},_loadDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){var e=this.demos[this.demoIndex],i=document.getElementById(e.id),t=!1;if(i)if(!this._preferImages||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.img){if(e.src){t=!0;var o=document.createElement("iframe");o.id=i.id,o.className=i.className+" demo",o.setAttribute("seamless","seamless"),o.scrolling="no",o.src=e.src,i.parentElement.replaceChild(o,i)}}else{var n=document.createElement("img");n.id=i.id,n.className="demoimg",n.src=this.getImgSrc(e.img),i.id="",i.style.overflowY="hidden",i.style.overflowX="auto",i.appendChild(n)}this.demoIndex++,(this._noLoadDelay||!t)&&this._loadDemo()}}},new e});var numRetries=2;requirejs(["auth","DemoManager"],function(e,i){function t(e){return document.getElementById(e)}function o(e){var i="",t=["ms","webkit","moz","o"],o=document.body.style;if("string"==typeof o[e])i="";else for(var n=0;n<t.length;n++)if("string"==typeof o["-"+t[n]+"-"+e]){i=t[n];break}var s=i.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return i?i+s:s}function n(){f=o("transform"),g=o("transition"),h=o("animation"),document.onscroll=d,window.onresize=d,d()}function s(){n();var e=document.body.scrollTop||document.documentElement.scrollTop;e+=window.innerHeight;for(var o=0;o<v.length;o++)w[o]=v[o].offsetTop,w[o]>e&&(y[o]=!1,v[o].style.opacity=0);try{localStorage.getItem("localSettings")||(localStorage.setItem("localSettings","{}"),hasLocalSettings=!1)}catch(s){}var r=document.getElementById("exampleHeaders");r&&(k=r.children[1]);var l=[{id:"videoFrame",src:"/#demo=true&touch=false&data=demo.0&panes=1:2&dmode=0x59&script=video"},{id:"demoTopMobile",src:"/#demo=true&data=demo.0&script=videoPhone&dmode=0xe9&phone=true&touch=true",noMobile:!0},{id:"demoDesktop",src:"/#demo=true&touch=false&data=demo.6&script=none&dmode=0x35",noMobile:!0}],d=!1;d||(d=i.isMobile()),d&&document.documentElement.classList.add("mobile");var m=i.isLegacyBrowser();m&&document.documentElement.classList.add("prefImages");var u=navigator.userAgent;(-1!==u.indexOf("MSIE")||-1!==u.indexOf("Trident"))&&document.documentElement.classList.add("ie"),window.addEventListener("message",c,!1),document.documentElement.classList.remove("hidden"),i.config({preferImages:d||m,noLoadDelay:d}),i.registerDemos(l),i.beginLoading(),document.onclick=function(){a()},t("platformwindows").onclick=function(e){a(),x=t("popupWindows"),x.style.opacity=1,e.stopPropagation()}}function a(){x&&(x.style.opacity=0,x=void 0)}function r(e,i,o){var n=t(e);n.style[g]=o?"all "+o+"ms":"",n.style[f]=i}function c(e){switch(e.data){case"video_connected":setTimeout(function(){m("demoTopMobile","start")},800);break;case"video_synchronized":r("topDemoPhone","scale(1.6)",1200);break;case"video_started":t("videoFrame").style.opacity=1;break;case"video_phone":t("callingFrame").style.visibility="visible",r("topDemoFrame","scale(0)",400),setTimeout(function(){t("callingWrapper").style[g]="all 800ms",t("callingWrapper").style.opacity=1},300);break;case"video_zoom":r("topDemoPhone","translate(-230px, 40px) scale(2.2)",2e3);break;case"video_conclusion":t("callingFrame").style.opacity=0,r("topDemoPhone","translate(-230px, 40px) scale(5)",2e3),t("videoFrame").style.opacity=0,setTimeout(function(){t("topDemoPhone").style.visibility="hidden",t("videoButtons").style.opacity=1,setTimeout(function(){for(var e=t("platformsTop").children,i=0;i<e.length;i++)e[i].style[h]="growBounce 350ms linear "+(600+120*i)+"ms"},400)},1200)}}function l(e){var i=document.getElementById("exampleHeaders").children[e];i!==k&&(k&&k.classList.remove("selected"),i.classList.add("selected"),k=i)}function d(){var e=40;if(i.isMobile())t("topBar").classList.add("pinned"),b=!0;else{var o=document.body.scrollTop||document.documentElement.scrollTop;o>e&&!b?(t("topBar").classList.add("pinned"),b=!0):e>o&&b&&(t("topBar").classList.remove("pinned"),b=!1),o+=window.innerHeight;for(var n=0;n<v.length;n++)!y[n]&&o>w[n]&&(v[n].style[g]="opacity 500ms ease-in",v[n].style.opacity=1,y[n]=!0)}}function m(e,i){var t=document.getElementById(e);if(t){var o=t.contentWindow;o.postMessage(i,"*")}}function u(e){var i="";if("object"==typeof e){var t=[];for(key in e)t[t.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);i=t.join("&").replace(/%20/g,"+")}else self.Assert("string"==typeof e,"Only Objects or Strings are currently supported"),i=e;return i}function p(e){var i=e.url,t=e.type,o=e.cb,n=e.data,s=e.headers,a=new XMLHttpRequest;if(a.onreadystatechange=function(){4===a.readyState&&o(a)},a.open(t.toUpperCase(),i,!0),s)for(var r in s)a.setRequestHeader(r,s[r]);if(n){a.setRequestHeader("Accept","*/*"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var c=u(n);a.send(c)}else a.send()}window.log=console.log.bind(console);var f="transform",g="transition",h="animation",v=[t("sectionFeat"),t("sectionMade"),t("platformsBottom"),t("footer")],w=[],y=[],b=!1,x=void 0;window.restartVideo=function(){log("restart video"),r("topDemoPhone","",0),r("topDemoFrame","",0),r("callingWrapper","",0),t("videoButtons").style.opacity="",t("videoFrame").style.visibility="",t("callingWrapper").style.opacity="",t("topDemoPhone").style.visibility="",t("callingFrame").style.opacity="",t("callingFrame").style.visibility="",setTimeout(function(){m("videoFrame","restart")},800)};var k;window.exampleClick=function(e){l(e);var i="data:demo."+(e+5);m("demoDesktop",i)},window.requestNotification=function(e){var i=document.forms["requestNotification"+e],o=document.getElementById("result"+e),n=i.email.value;return void 0===n||null===n||n.length<5?o.innerText="Please enter a valid email address.":p({type:"POST",url:window.location.protocol+"//api.moo.do/requestNotification",data:{email:n,platform:e},cb:function(e){200===e.status?(i.email.value="",o.innerText="Thanks for your interest!",t("signupboxTop").style.display="none"):o.innerText="There was an error processing your request, please try again in a few minutes."}}),!1};window.requestAuthorization=function(){!e.isLoggedIn&&window.gapi&&window.gapi.auth?e.authenticate(!1,sendToApp):sendToApp()},window.sendToApp=function(){location.href=window.location.protocol+"//"+window.location.host+"/#login=true"},"interactive"===document.readyState||"complete"===document.readyState?location.pathname.indexOf("about")?s():n():document.addEventListener("DOMContentLoaded",runPage,!1)}),define("landing",function(){});