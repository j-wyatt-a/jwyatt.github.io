function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init(function(){require(["util"],function(e){e.setSegment(Segment.ExistingUser)})})})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function i(e,i){return w.call(e,i)}function t(e,i){var t,o,n,a,r,s,d,c,l,m,u,p=i&&i.split("/"),g=h.map,f=g&&g["*"]||{};if(e&&"."===e.charAt(0))if(i){for(p=p.slice(0,p.length-1),e=e.split("/"),r=e.length-1,h.nodeIdCompat&&y.test(e[r])&&(e[r]=e[r].replace(y,"")),e=p.concat(e),l=0;l<e.length;l+=1)if(u=e[l],"."===u)e.splice(l,1),l-=1;else if(".."===u){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||f)&&g){for(t=e.split("/"),l=t.length;l>0;l-=1){if(o=t.slice(0,l).join("/"),p)for(m=p.length;m>0;m-=1)if(n=g[p.slice(0,m).join("/")],n&&(n=n[o])){a=n,s=l;break}if(a)break;!d&&f&&f[o]&&(d=f[o],c=l)}!a&&d&&(a=d,s=c),a&&(t.splice(0,s,a),e=t.join("/"))}return e}function o(i,t){return function(){var o=v.call(arguments,0);return"string"!=typeof o[0]&&1===o.length&&o.push(null),l.apply(e,o.concat([i,t]))}}function n(e){return function(i){return t(i,e)}}function a(e){return function(i){p[e]=i}}function r(t){if(i(g,t)){var o=g[t];delete g[t],f[t]=!0,c.apply(e,o)}if(!i(p,t)&&!i(f,t))throw new Error("No "+t);return p[t]}function s(e){var i,t=e?e.indexOf("!"):-1;return t>-1&&(i=e.substring(0,t),e=e.substring(t+1,e.length)),[i,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var c,l,m,u,p={},g={},h={},f={},w=Object.prototype.hasOwnProperty,v=[].slice,y=/\.js$/;m=function(e,i){var o,a=s(e),d=a[0];return e=a[1],d&&(d=t(d,i),o=r(d)),d?e=o&&o.normalize?o.normalize(e,n(i)):t(e,i):(e=t(e,i),a=s(e),d=a[0],e=a[1],d&&(o=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:o}},u={require:function(e){return o(e)},exports:function(e){var i=p[e];return"undefined"!=typeof i?i:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:d(e)}}},c=function(t,n,s,d){var c,l,h,w,v,y,b=[],S=typeof s;if(d=d||t,"undefined"===S||"function"===S){for(n=!n.length&&s.length?["require","exports","module"]:n,v=0;v<n.length;v+=1)if(w=m(n[v],d),l=w.f,"require"===l)b[v]=u.require(t);else if("exports"===l)b[v]=u.exports(t),y=!0;else if("module"===l)c=b[v]=u.module(t);else if(i(p,l)||i(g,l)||i(f,l))b[v]=r(l);else{if(!w.p)throw new Error(t+" missing "+l);w.p.load(w.n,o(d,!0),a(l),{}),b[v]=p[l]}h=s?s.apply(p[t],b):void 0,t&&(c&&c.exports!==e&&c.exports!==p[t]?p[t]=c.exports:h===e&&y||(p[t]=h))}else t&&(p[t]=s)},requirejs=require=l=function(i,t,o,n,a){if("string"==typeof i)return u[i]?u[i](t):r(m(i,t).f);if(i&&!i.splice){if(h=i,h.deps&&l(h.deps,h.callback),!t)return;t.splice?(i=t,t=o,o=null):i=e}return t=t||function(){},"function"==typeof o&&(o=n,n=a),n?c(e,i,t,o):setTimeout(function(){c(e,i,t,o)},0),l},l.config=function(e){return l(e)},requirejs._defined=p,define=function(e,t,o){if("string"!=typeof e)throw new Error("Incorrect module build - no module name");t&&t.splice||(o=t,t=[]),i(p,e)||i(g,e)||(g[e]=[e,t,o])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){return document.documentElement.scrollTop||document.body.scrollTop}function i(){this.init(),this._preferImages=this.isMobile(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this._onDemoLoaded=function(){},this._onDemoDone=function(){},this._onDemoInteracted=function(){},this.configLoaded=!1,this.videoLoaded=!1,this._videoLibLoaded=!1,this._videoQueue=[],this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows",OSX:"OSX"},i.prototype={init:function(){this.checkPageScroll=this.checkPageScroll.bind(this);var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)?(this.OS=OSNames.Windows,this._isMobile=!0):-1!==e.indexOf("Win")?this.OS=OSNames.Windows:-1!==e.indexOf("Mac")&&(this.OS=OSNames.OSX),!this._isMobile){var i=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),!i){var t="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(t).matches&&(i=!0)}this._isMobile=i}},registerListeners:function(e,i,t){e&&(this._onDemoLoaded=e),i&&(this._onDemoDone=i),t&&(this._onDemoInteracted=t)},config:function(e){this._preferImages=e.preferImages,this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,this._onlyOne=e.onlyOne,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,i=1e3,t=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var o=new RegExp("Chrome/([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1)),26>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var o=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1),t=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var o=new RegExp("Firefox/([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1)),16>i&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var o=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=o.exec(e)&&(i=parseFloat(RegExp.$1),t=parseFloat(RegExp.$2)),6>i&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},requireInteractivity:function(){return-1!==navigator.userAgent.indexOf("Edge")},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var i=0;i<e.length;++i)this.registerDemo(e[i])},checkPageScroll:function(){for(var e=100,i=window.innerHeight,t=0;t<this.demos.length;t++){var o=this.demos[t],n=document.getElementById(o.id),a=n.getBoundingClientRect();if(a.bottom>-e&&a.top<i+e&&(o.isLoaded||o.isLoading||this.loadDemo(o)),o.isLoaded){var r=Math.max(0,Math.min(i,a.bottom)-Math.max(0,a.top)),s=r/a.height;s>=.5&&!o.isPlaying?(this.sendFrameMessage(o.id,"resume"),o.isPlaying=!0):.5>s&&o.isPlaying&&(this.sendFrameMessage(o.id,"pause"),o.isPlaying=!1)}}},beginLoading:function(){if(this.isMobile()||this.isLegacyBrowser())this.loadDemos();else{var i=e(),t=function(){requestAnimationFrame(this.checkPageScroll),e()-i>500&&require(["util"],function(e){e.sendEvent(PageEvents.PageScroll),e.setSegment(Segment.Browsed)})}.bind(this);this.checkPageScroll(),document.addEventListener("scroll",t),window.addEventListener("resize",onresize)}},receiveFrameMessage:function(e){switch(e.data){case"demoReady":this.notifyOfLoad(e),this.checkPageScroll();break;case"done":this.notifyOfDone(e);break;case"userInteracted":this.notifyOnInteracted(e)}},_getDemoForMessage:function(e){for(var i,t=0;t<this.demos.length;t++){var o=this.demos[t],n=document.getElementById(o.id);if(n.contentWindow===e.source){i=o;break}}return i},notifyOfLoad:function(e){var i=this._getDemoForMessage(e);i.isLoaded=!0;var t=document.getElementById(i.id),o=t.parentElement;o.classList.remove("icon-spinner"),this._onDemoLoaded(i.id)},notifyOfDone:function(e){var i=this._getDemoForMessage(e);this._onDemoDone(i.id)},notifyOnInteracted:function(e){var i=this._getDemoForMessage(e);this._onDemoInteracted(i.id)},loadVideoPlayer:function(){window.onYouTubeIframeAPIReady=function(){for(var e=0;e<this._videoQueue.length;++e)this.createVideo(this._videoQueue[e]);this._videoQueue=[]}.bind(this);var e=document.createElement("script");e.src="//www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)},requestVideoLoad:function(e,i,t){this._videoLibLoaded?this.createVideo({elementID:e,videoID:i,cb:t}):this._videoQueue.push({elementID:e,videoID:i,cb:t})},createVideo:function(e){function i(){r=new YT.Player(e.elementID,{videoId:e.videoID,playerVars:{enablejsapi:1,autoplay:1,autohide:1,controls:1,rel:0,showinfo:0,vq:"hd720",origin:window.location.protocol+"//"+window.location.host},events:{onReady:o,onStateChange:n,onError:a}})}function t(){1===r.getPlayerState()&&r.getCurrentTime()>=s-1.5&&(r.pauseVideo(),d&&r.unMute())}function o(i){s=r.getDuration(),setInterval(t,1e3),d=i.target.isMuted(),i.target.mute(),setTimeout(function(){var e=document.getElementById("videoBlocker");e.style.display="none"},3500),e.cb&&e.cb(),require(["DemoManager"],function(i){if(i.isMobile()){var t=document.getElementById(e.elementID);t.style.opacity=1}})}function n(i){switch(i.data){case YT.PlayerState.PLAYING:var t=document.getElementById(e.elementID);t.style.opacity=1,require(["DemoManager"],function(i){i._onDemoLoaded(e.elementID)});break;case YT.PlayerState.PAUSED:case YT.PlayerState.BUFFERING:case YT.PlayerState.CUED:case YT.PlayerState.UNSTARTED:}}function a(e){console.log("Player Error: ",e)}var r,s,d=!1;i()},_loadNextDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadNextDemo();var e=this._loadDemo(this.demoIndex);this.demoIndex++,(this._noLoadDelay||!e)&&this._loadNextDemo()}},loadDemos:function(){for(var e=0;e<this.demos.length;e++)this._loadDemo(e)},_loadDemo:function(e){var i=this.demos[e];this.loadDemo(i)},loadDemo:function(e){e.isLoading=!0;var i=document.getElementById(e.id),t=!1;if(i)if(!this._preferImages&&e.src||!this.isMobile()&&e.forceDesktopIFrame||void 0===e.imgs){if((this._preferImages||this._forceVideo)&&void 0!==e.video&&e.video.indexOf("/")>=0){t=!1;var o=document.createElement("video");o.id="v"+i.id,o.className="demoimg",o.preload="auto",o.autoplay="autoplay",o.controls="controls";for(var n=0;n<e.video.length;++n){var a=document.createElement("source");a.src=e.video[n].path,a.type=e.video[n].type,o.appendChild(a)}i.id="",i.style.overflow="hidden",i.appendChild(o),this.videoLoaded=!0,window.postMessage("video_started","*")}else if((this._preferImages||this._forceVideo)&&void 0!==e.video&&e.video.indexOf("/")<0)t=!1,this.requestVideoLoad(e.videoEle,e.video,e.videoCB);else if(e.src){t=!0;var r=document.createElement("iframe");r.id=i.id,r.className=i.className+" demo noInteractive",r.setAttribute("seamless","seamless"),r.setAttribute("data-recording-ignore","html"),r.scrolling="no",r.src=e.src;var s=i.parentElement;s.replaceChild(r,i),s.classList.add("icon-spinner")}}else for(var n=0;n<e.imgs.length;n++){var d=e.imgs[n],c=document.createElement("img");if(c.id=i.id,c.className="demoimg"+(d.cls?" "+d.cls:""),c.src=d.src,i.appendChild(c),d.caption){var l=document.createElement("div");l.className="caption",l.textContent=d.caption,i.appendChild(l)}}return t},sendFrameMessage:function(e,i){var t=document.getElementById(e);if(t){var o=t.contentWindow;o&&o.postMessage(i,"*")}}},new i}),define("util",["DemoManager"],function(e){function i(e){var i="";if("object"==typeof e){var t=[];for(key in e)t[t.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);i=t.join("&").replace(/%20/g,"+")}else i=e;return i}window.PageEvents={LoadedPage:"LoadedPage",PageScroll:"PageScroll",IntroWatched:"IntroWatched",IntroClicked:"IntroClicked",LoginClicked:"LoginClicked",GetStartedClicked:"GetStartedClicked",DemoClicked:"DemoClicked",AppClicked:"AppClicked",SocialClicked:"SocialClicked"},window.Segment={DriveBy:0,Watched:1,Browsed:2,Interacted:3,SocialClicked:4,AppClicked:5,SignedUp:6,ExistingUser:7};var t={};"function"!=typeof String.prototype.startsWith&&(Object.defineProperty?Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,i){return i=i||0,this.lastIndexOf(e,i)===i}}):String.prototype.startsWith=function(e){return 0===this.lastIndexOf(e,0)}),t._segment=Segment.DriveBy,t.setSegment=function(e){e>t._segment&&(t._segment=e)};var o=["DriveBy","Watched","Browsed","Interacted","SocialClicked","AppClicked","SignedUp","ExistingUser"];t.getSegment=function(){return o[t._segment]},t.getURLHashParam=function(e){for(var i,t=window.location.hash.substring(1),o=/([^&=]+)=([^&]*)/g;i=o.exec(t);)if(decodeURIComponent(i[1])===e)return decodeURIComponent(i[2]);return void 0};var n=[0,5,15,35,80,170],a=[408,500,502,503,504];t.XHR=function(e){function t(){u>p?(p++,setTimeout(o,1e3*n[p])):log("XHR Failed to retry - reached max retry limit")}function o(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&u>p?(e.retry=t,m&&a.indexOf(e.status)>=0?e.retry():d(e)):d(e))},g&&h?e.open(s.toUpperCase(),r,!0,g,h):e.open(s.toUpperCase(),r,!0),l)for(var o in l)e.setRequestHeader(o,l[o]);if(c){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var n=i(c);e.send(n)}else e.send()}var r=e.url,s=e.type,d=e.cb,c=e.data,l=e.headers,m=e.autoRetry,u=e.maxRetries||2,p=0,g=e.username,h=e.password;o()},t.XHR_PrivateAPI=function(e){var i="https:",o="/private/v1",n={type:e.type,url:i+"//api.moo.do"+o+e.path,data:e.data,cb:e.cb,headers:e.headers,autoRetry:e.autoRetry,maxRetries:e.maxRetries};t.XHR(n)},t.XHR_PublicAPI=function(){},t.sendEvent=function(e,i,o){if(window.ga)try{ga("send","event","LandingPage",e,i,void 0,o)}catch(n){t.reportError(n)}},t.tagSession=function(e,i){if(window.smartlook)try{smartlook("tag",e,i)}catch(o){t.reportError(o)}},window.ga&&ga(function(e){var i=e.get("clientId");t.tagSession("name",i)}),window.__BEFORE_UNLOAD=function(){t.tagSession("segment",t.getSegment())},t.reportError=function(e){window.Rollbar&&Rollbar.error(e)},window.sendToAppStore=function(i,o){if(e.isMobile()&&e.OS){i=e.OS;var n;switch(i){case OSNames.Android:n="https://play.google.com/store/apps/details?id=moo.do";break;case OSNames.Chrome:n="https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk";break;case OSNames.iOS:n="https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8";break;case OSNames.Windows:utl="https://www.moo.do/app/"}window.open(n)}i&&o&&(t.sendEvent(PageEvents.AppClicked,o),t.setSegment(Segment.AppClicked))};var r={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,i){e===r.Email&&window.open("mailto:contact@moo.do","_blank"),t.sendEvent(PageEvents.SocialClicked,i),t.setSegment(Segment.SocialClicked)},t}),define("auth",["util"],function(e){function i(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install","https://www.googleapis.com/auth/drive.appdata"],this.isLoggedIn=!1}return i.prototype={init:function(e){gapi.auth.init(),this.authenticate(!0,e)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),i=JSON.parse(e);if(i){var t=i.values.Default.activeUser;return t}}catch(o){log("Error getting app user: ",o)}return void 0},requestAuthorization:function(e){var i=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==i.indexOf("MSIE")||-1!==i.indexOf("Trident")?this.sendToApp(!1,e):this.authenticate(!1,function(i){i?this.getEmailAddr(function(i){var t=this.getCurrentAppUser();t===i.email?this.sendToApp(!1,e):this.sendToApp(i.email,e)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp(!1,e)},sendToApp:function(i,t){var o,n=window.location.host,a=e.getURLHashParam("invite");o=i?window.location.protocol+"//"+n+"/app/#user="+encodeURIComponent(i):window.location.protocol+"//"+n+"/app/#login=true",a&&(o+="&invite="+a),t&&(o+="&premium=true"),window.location.href=o},authenticate:function(e,i){var t={client_id:this.clientId,scope:this.scopes,immediate:e,authuser:-1},o=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,n=o||this.isMobro();n&&!e&&(t.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(t,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),i&&i(this.isLoggedIn)}.bind(this))},getEmailAddr:function(i){var t=gapi.auth.getToken();if(t){var o="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+t.access_token;e.XHR({type:"GET",url:o,autoRetry:!0,cb:function(e){if(200===e.status){var t={};try{t=JSON.parse(e.responseText)}catch(o){log("Error: ",o)}i(t)}else i()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(i){errorName=i.name}try{e=!!new ActiveXObject("htmlfile")}catch(i){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new i});var numRetries=2,loadYTVideo=!1;("/about/"===window.location.pathname||"/"===window.location.pathname)&&window.location.hash.indexOf("app%22:true")<0&&window.location.hash.indexOf('"app":true')<0&&(loadYTVideo=!0),loadYTVideo&&require(["DemoManager"],function(e){(e.isMobile()||e.isLegacyBrowser())&&e.loadVideoPlayer()}),requirejs(["util","auth","DemoManager"],function(e,i,t){function o(e){var i="",t=["ms","webkit","moz","o"],o=document.body.style,n=e.charAt(0).toUpperCase()+e.slice(1);if("string"==typeof o[e])i="";else for(var a=0;a<t.length;a++)if("string"==typeof o[t[a]+n]){i=t[a];break}var r=i.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return i?i+r:r}function n(){l=o("transform"),m=o("transition"),u=o("animation"),p=o("animationDelay"),d=window.innerWidth,t.isMobile()&&(document.documentElement.classList.add("mobile"),document.documentElement.classList.add(t.OS)),t.isLegacyBrowser()&&document.documentElement.classList.add("prefImages"),t.OS===OSNames.Windows&&document.documentElement.classList.add("windows");var i=navigator.userAgent;(-1!==i.indexOf("MSIE")||-1!==i.indexOf("Trident"))&&document.documentElement.classList.add("ie"),window.openGetStarted=function(i){e.sendEvent(PageEvents.GetStartedClicked,i),e.setSegment(Segment.SignedUp),t.isMobile()?sendToAppStore(t.OS):window.location.pathname="/app/"},window.hideGetStarted=function(){document.documentElement.classList.remove("blurred"),document.documentElement.classList.remove("gettingStarted")},window.pageLoaded=!0,document.documentElement.style.opacity=1}function a(){var i=e.getURLHashParam("email");e.XHR_PrivateAPI({type:"POST",path:"/feedback/unsubscribe",data:{email:i},cb:function(e){var i;i=200===e.status?"You have been successfully unsubscribed from future emails.":"There was an error unsubscribing. Please reply to the email to unsubscribe.",document.getElementById("unsubMessage").innerText=i}})}function r(){function o(e,i){var t=4225;t=16|t,t=4|t;var o=m[i];return o.id=e,o.src="/app/#demo=true&touch=false&dmode="+t+"&data="+o.data+"&panes="+o.panes+"&script="+(o.script?o.script:"none"),o}t.OS===OSNames.iOS&&(document.getElementById("sectionTop").style.height=window.innerHeight-44+"px");if(e.sendEvent(PageEvents.LoadedPage,void 0,!0),loadYTVideo){var n;n=document.getElementById(t.isMobile()||t.isLegacyBrowser()?"intro":"videoFrameWrapper"),n&&(n.style.display="none")}var a=i.getCurrentAppUser(),r=1,s=localStorage.getItem("landingVersionSeen");if(s&&+s>=r&&a)try{var d=new URL(document.referrer),c=d.hostname;if("www.moo.do"!==c&&"dev.moo.do"!==c&&"beta.moo.do"!==c&&"localhost"!==c)return void i.sendToApp()}catch(l){}localStorage.setItem("landingVersionSeen",r);var m={top:{data:"intro-top.0",panes:"PaneGmail:1:2",script:"top",video:"m0_zFZ21j9o",videoEle:"videoFrame",videoCB:function(){}},intro:{data:"intro.intro",panes:"PaneGmail:1:2",script:"intro",video:"m0_zFZ21j9o",videoEle:"videoFrame",videoCB:function(){}},email:{data:"intro.email",panes:"PaneGmail:PaneGmail:PaneGmail",script:"introEmail",imgs:[{src:"/img/ss/email-drag.png",caption:"View multiple Labels side by side and easily manage labels by dragging and dropping"},{src:"/img/ss/email-preview.png",caption:"Handle your emails, tasks, and calendar in one app"}]},style:{data:"intro.style",panes:"1:1,,progress:2,#Android",script:"introStyle",imgs:[{src:"/img/ss/intro-desktop.png",caption:"Organize everything in one app with Moo.do's deep integration with Google services"},{src:"/img/ss/intro-mobile.png",caption:"Moo.do is available everywhere: iOS, Android, and any web browser",cls:"imgPhone"}]}};t.registerDemo(o("demoTop","top")),t.registerDemo(o("demoStyle","style")),t.registerDemo(o("demoEmail","email")),document.documentElement.classList.remove("hidden");var u=t.isMobile()||t.isLegacyBrowser(),p=!1,g=function(){},h=function(i){if("demoTop"===i)e.sendEvent(PageEvents.IntroWatched,void 0,!0),e.setSegment(Segment.Watched),document.getElementById("scrollDown").classList.remove("faded");else{var t=document.getElementById(i);t.classList.remove("noInteractive")}},f=function(i){"demoTop"===i?e.sendEvent(PageEvents.IntroClicked):e.sendEvent(PageEvents.DemoClicked,i),e.setSegment(Segment.Interacted)};t.registerListeners(g,h,f),t.config({preferImages:u,forceVideo:p,noLoadDelay:t.isMobile()}),t.beginLoading()}function s(){n();var e=window.location.pathname;"/about/"===e||"/"===e?r():"/unsubscribe/"===e&&a()}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame,window.console||(window.console={log:function(){},error:function(){}}),window.log=window.console.log.bind(window.console);var d,c,l="transform",m="transition",u="animation",p="animationDelay";window.requestAuthorization=function(t){i.requestAuthorization(c&&c.indexOf("premium")>=0),e.sendEvent(PageEvents.LoginClicked,t),e.setSegment(Segment.SignedUp)},window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0?window.location.pathname="/app/":"interactive"===document.readyState||"complete"===document.readyState?s():document.addEventListener("DOMContentLoaded",s,!1)}),define("landing",function(){});