function GoogleApiLoaded(){window.isGoogleApiLoaded||(window.gapi&&window.gapi.auth?(window.isGoogleApiLoaded=!0,require(["auth"],function(e){e.init(function(){require(["util"],function(e){e.setSegment(Segment.ExistingUser)})})})):numRetries>0&&(numRetries--,setTimeout(GoogleApiLoaded,1e3)))}var requirejs,require,define;!function(e){function t(e,t){return w.call(e,t)}function i(e,t){var i,n,o,a,r,s,d,c,l,u,m,p=t&&t.split("/"),g=h.map,f=g&&g["*"]||{};if(e&&"."===e.charAt(0))if(t){for(p=p.slice(0,p.length-1),e=e.split("/"),r=e.length-1,h.nodeIdCompat&&y.test(e[r])&&(e[r]=e[r].replace(y,"")),e=p.concat(e),l=0;l<e.length;l+=1)if(m=e[l],"."===m)e.splice(l,1),l-=1;else if(".."===m){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((p||f)&&g){for(i=e.split("/"),l=i.length;l>0;l-=1){if(n=i.slice(0,l).join("/"),p)for(u=p.length;u>0;u-=1)if(o=g[p.slice(0,u).join("/")],o&&(o=o[n])){a=o,s=l;break}if(a)break;!d&&f&&f[n]&&(d=f[n],c=l)}!a&&d&&(a=d,s=c),a&&(i.splice(0,s,a),e=i.join("/"))}return e}function n(t,i){return function(){var n=v.call(arguments,0);return"string"!=typeof n[0]&&1===n.length&&n.push(null),l.apply(e,n.concat([t,i]))}}function o(e){return function(t){return i(t,e)}}function a(e){return function(t){p[e]=t}}function r(i){if(t(g,i)){var n=g[i];delete g[i],f[i]=!0,c.apply(e,n)}if(!t(p,i)&&!t(f,i))throw new Error("No "+i);return p[i]}function s(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function d(e){return function(){return h&&h.config&&h.config[e]||{}}}var c,l,u,m,p={},g={},h={},f={},w=Object.prototype.hasOwnProperty,v=[].slice,y=/\.js$/;u=function(e,t){var n,a=s(e),d=a[0];return e=a[1],d&&(d=i(d,t),n=r(d)),d?e=n&&n.normalize?n.normalize(e,o(t)):i(e,t):(e=i(e,t),a=s(e),d=a[0],e=a[1],d&&(n=r(d))),{f:d?d+"!"+e:e,n:e,pr:d,p:n}},m={require:function(e){return n(e)},exports:function(e){var t=p[e];return"undefined"!=typeof t?t:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:d(e)}}},c=function(i,o,s,d){var c,l,h,w,v,y,b=[],_=typeof s;if(d=d||i,"undefined"===_||"function"===_){for(o=!o.length&&s.length?["require","exports","module"]:o,v=0;v<o.length;v+=1)if(w=u(o[v],d),l=w.f,"require"===l)b[v]=m.require(i);else if("exports"===l)b[v]=m.exports(i),y=!0;else if("module"===l)c=b[v]=m.module(i);else if(t(p,l)||t(g,l)||t(f,l))b[v]=r(l);else{if(!w.p)throw new Error(i+" missing "+l);w.p.load(w.n,n(d,!0),a(l),{}),b[v]=p[l]}h=s?s.apply(p[i],b):void 0,i&&(c&&c.exports!==e&&c.exports!==p[i]?p[i]=c.exports:h===e&&y||(p[i]=h))}else i&&(p[i]=s)},requirejs=require=l=function(t,i,n,o,a){if("string"==typeof t)return m[t]?m[t](i):r(u(t,i).f);if(t&&!t.splice){if(h=t,h.deps&&l(h.deps,h.callback),!i)return;i.splice?(t=i,i=n,n=null):t=e}return i=i||function(){},"function"==typeof n&&(n=o,o=a),o?c(e,t,i,n):setTimeout(function(){c(e,t,i,n)},0),l},l.config=function(e){return l(e)},requirejs._defined=p,define=function(e,i,n){if("string"!=typeof e)throw new Error("Incorrect module build - no module name");i&&i.splice||(n=i,i=[]),t(p,e)||t(g,e)||(g[e]=[e,i,n])},define.amd={jQuery:!0}}(),define("../../js/lib/almond",function(){}),define("DemoManager",[],function(){function e(){this.init(),this._preferImages=this.isMobile()||this.isLegacyBrowser(),this._forceVideo=this.isMobile()||this.isLegacyBrowser(),this._noLoadDelay=this.isMobile(),this._isRetina=this.isRetina(),this._isLegacy=this.isLegacyBrowser(),this._onDemoLoaded=function(){},this._onDemoDone=function(){},this._onDemoInteracted=function(){},this.configLoaded=!1,this.videoLoaded=!1,this._loadingVideoPlayer=!1,this._videoLibLoaded=!1,this._videoQueue=[],this.demos=[],this.demoIndex=0,this.loadingDemo=void 0,window.addEventListener("message",this.receiveFrameMessage.bind(this),!1)}return window.OSNames={Android:"Android",Chrome:"Chrome",iOS:"iOS",Windows:"Windows",OSX:"OSX"},e.prototype={init:function(){this.checkPageScroll=this.checkPageScroll.bind(this);var e=navigator.userAgent;if(-1!==e.indexOf("iPad")||-1!==e.indexOf("iPhone")||-1!==e.indexOf("iPod")?(this.OS=OSNames.iOS,this._isMobile=!0):-1!==e.indexOf("Android")?(this.OS=OSNames.Android,this._isMobile=!0):e.match(/IEMobile/i)?(this.OS=OSNames.Windows,this._isMobile=!0):-1!==e.indexOf("Win")?this.OS=OSNames.Windows:-1!==e.indexOf("Mac")&&(this.OS=OSNames.OSX),!this._isMobile){var t=!1;if(function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),!t){var i="(max-device-width: 620px)";window.matchMedia&&window.matchMedia(i).matches&&(t=!0)}this._isMobile=t}},registerListeners:function(e,t,i,n){e&&(this._onDemoLoaded=e),t&&(this._onDemoDone=t),i&&(this._onDemoInteracted=i),n&&(this._onDemoScroll=n)},config:function(e){this._forceVideo=e.forceVideo,this._noLoadDelay=e.noLoadDelay,this._onlyOne=e.onlyOne,void 0!==e.isMobile&&(this._isMobile=e.isMobile),this.configLoaded=!0},isMobile:function(){return this._isMobile},isLegacyBrowser:function(){if(void 0===this._isLegacy){this._isLegacy=!1;var e=navigator.userAgent,t=1e3,i=1e3;if(-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident"))this._isLegacy=!0;else if(-1!==e.indexOf("Chrome")||-1!==e.indexOf("CriOS")){var n=new RegExp("Chrome/([0-9]{1,}).");null!=n.exec(e)&&(t=parseFloat(RegExp.$1)),26>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Android")){var n=new RegExp("Linux; Android ([0-9]{1,}).([0-9]{1,}).");null!=n.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),this.majorVersion<4&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Firefox")){var n=new RegExp("Firefox/([0-9]{1,}).");null!=n.exec(e)&&(t=parseFloat(RegExp.$1)),16>t&&(this._isLegacy=!0)}else if(-1!==e.indexOf("Safari")){var n=new RegExp("Version/([0-9]{1,}).([0-9]{1,}).");null!=n.exec(e)&&(t=parseFloat(RegExp.$1),i=parseFloat(RegExp.$2)),6>t&&(this._isLegacy=!0)}}return this._isLegacy},isRetina:function(){if(void 0===this._isRetina){var e="(-webkit-min-device-pixel-ratio: 1.5), (-moz-min-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";this._isRetina=window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(e).matches?!0:!1}return this._isRetina},requireInteractivity:function(){return-1!==navigator.userAgent.indexOf("Edge")},getPageScrollOffset:function(){return document.documentElement.scrollTop||document.body.scrollTop},registerDemo:function(e){console.assert(e.img||e.src,"Must supply either an image or an iframe src"),this.demos.push(e)},registerDemos:function(e){for(var t=0;t<e.length;++t)this.registerDemo(e[t])},checkPageScroll:function(){for(var e=100,t=window.innerHeight,i=0;i<this.demos.length;i++){var n=this.demos[i],o=document.getElementById(n.id),a=o.getBoundingClientRect();if(a.bottom>-e&&a.top<t+e&&(n.isLoaded||n.isLoading||this.loadDemo(n)),n.isLoaded){var r=Math.max(0,Math.min(t,a.bottom)-Math.max(0,a.top)),s=r/a.height;s>=.5&&!n.isPlaying?(this.sendFrameMessage(n.id,"resume"),n.isPlaying=!0):.5>s&&n.isPlaying&&(this.sendFrameMessage(n.id,"pause"),n.isPlaying=!1)}}},beginLoading:function(){if(this.isMobile()||this.isLegacyBrowser())this.loadDemos();else{var e=this.getPageScrollOffset(),t=!1,i=function(i){requestAnimationFrame(this.checkPageScroll),this.getPageScrollOffset()-e>500&&!t&&(t=!0,require(["util"],function(e){e.sendEvent(PageEvents.PageScroll),e.setSegment(Segment.Browsed)})),this._onDemoScroll&&this._onDemoScroll(i)}.bind(this);this.checkPageScroll(),document.addEventListener("scroll",i),window.addEventListener("resize",onresize)}},receiveFrameMessage:function(e){switch(e.data){case"demoReady":this.notifyOfLoad(e),this.checkPageScroll();break;case"done":this.notifyOfDone(e);break;case"userInteracted":this.notifyOnInteracted(e)}},_getDemoForMessage:function(e){for(var t,i=0;i<this.demos.length;i++){var n=this.demos[i],o=document.getElementById(n.id);if(o.contentWindow===e.source){t=n;break}}return t},notifyOfLoad:function(e){var t=this._getDemoForMessage(e);if(t){t.isLoaded=!0;var i=document.getElementById(t.id),n=i.parentElement;n.classList.remove("icon-spinner"),this._onDemoLoaded(t.id)}},notifyOfDone:function(e){var t=this._getDemoForMessage(e);this._onDemoDone(t.id)},notifyOnInteracted:function(e){var t=this._getDemoForMessage(e);this._onDemoInteracted(t.id)},loadVideoPlayer:function(){if(!this._loadingVideoPlayer){this._loadingVideoPlayer=!0,window.onYouTubeIframeAPIReady=function(){this._videoLibLoaded=!0;for(var e=0;e<this._videoQueue.length;++e)this.createVideo(this._videoQueue[e]);this._videoQueue=[]}.bind(this);var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},requestVideoLoad:function(e,t,i){var n=document.getElementById(e);n&&n.parentElement.parentElement.classList.add("icon-spinner"),this._videoLibLoaded?this.createVideo({elementID:e,videoID:t,cb:i}):(this._videoQueue.push({elementID:e,videoID:t,cb:i}),this.loadVideoPlayer())},createVideo:function(e){function t(){r=new YT.Player(e.elementID,{videoId:e.videoID,playerVars:{enablejsapi:1,autoplay:c.isMobile()?0:1,autohide:1,controls:1,rel:0,showinfo:0,vq:"hd720",origin:"//"+window.location.host},events:{onReady:n,onStateChange:o,onError:a}})}function i(){1===r.getPlayerState()&&r.getCurrentTime()>=s-1.5&&(r.pauseVideo(),c.notifyOfDone({}),d&&r.unMute())}function n(t){s=r.getDuration(),setInterval(i,1e3),c.isMobile()||(d=t.target.isMuted(),t.target.mute()),setTimeout(function(){var e=document.getElementById("videoBlocker");e.style.display="none"},4500),c.notifyOfLoad({});var n=document.getElementById(e.elementID);if(n.parentElement.parentElement.classList.remove("icon-spinner"),e.cb&&e.cb(),c.isMobile()){var o=document.getElementById(e.elementID);o.style.opacity=1}}function o(t){switch(t.data){case YT.PlayerState.PLAYING:var i=document.getElementById(e.elementID);i.style.opacity=1,c._onDemoLoaded(e.elementID);break;case YT.PlayerState.PAUSED:case YT.PlayerState.BUFFERING:case YT.PlayerState.CUED:case YT.PlayerState.UNSTARTED:}}function a(e){console.log("Player Error: ",e)}var r,s,d=!1,c=this;t()},_loadNextDemo:function(){if(this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].noMobile;)this.demoIndex++;else if(!this.isMobile())for(;this.demoIndex<this.demos.length&&this.demos[this.demoIndex].mobileOnly;)this.demoIndex++;if(this.demoIndex<this.demos.length){if(this.videoLoaded&&this.demos[this.demoIndex].noVideo)return this.demoIndex++,void this._loadNextDemo();var e=this._loadDemo(this.demoIndex);this.demoIndex++,(this._noLoadDelay||!e)&&this._loadNextDemo()}},loadDemos:function(){for(var e=0;e<this.demos.length;e++)this._loadDemo(e)},_loadDemo:function(e){var t=this.demos[e];this.loadDemo(t)},loadDemo:function(e){e.isLoading=!0;var t=document.getElementById(e.id),i=!1;if(t)if(!this._preferImages&&e.src||void 0===e.imgs){if((this._preferImages||this._forceVideo)&&void 0!==e.video&&e.video.indexOf("/")>=0){i=!1;var n=document.createElement("video");n.id="v"+t.id,n.className="demoimg",n.preload="auto",n.autoplay=this.isMobile()?"":"autoplay",n.controls="controls";for(var o=0;o<e.video.length;++o){var a=document.createElement("source");a.src=e.video[o].path,a.type=e.video[o].type,n.appendChild(a)}t.id="",t.style.overflow="hidden",t.appendChild(n),this.videoLoaded=!0,window.postMessage("video_started","*")}else if((this._preferImages||this._forceVideo)&&void 0!==e.video&&e.video.indexOf("/")<0)i=!1,this.requestVideoLoad(e.videoEle,e.video,e.videoCB);else if(e.src&&(!this.isMobile()||e.forceDesktopIFrame)){i=!0;var r=document.createElement("iframe");r.id=t.id,r.className=t.className+" demo",r.setAttribute("seamless","seamless"),r.setAttribute("data-recording-ignore","html"),r.scrolling="no",r.src=e.src;var s=t.parentElement;s.replaceChild(r,t),s.classList.add("icon-spinner")}}else for(var o=0;o<e.imgs.length;o++){var d=e.imgs[o],c=document.createElement("img");if(c.id=t.id,c.className="demoimg"+(d.cls?" "+d.cls:""),c.src=d.src,t.appendChild(c),d.caption){var l=document.createElement("div");l.className="caption",l.textContent=d.caption,t.appendChild(l)}}return i},sendFrameMessage:function(e,t){var i=document.getElementById(e);if(i){var n=i.contentWindow;n&&n.postMessage(t,"*")}}},new e}),define("util",["DemoManager"],function(e){function t(e){var t="";if("object"==typeof e){var i=[];for(key in e)i[i.length]=encodeURIComponent(key)+"="+encodeURIComponent(e[key]);t=i.join("&").replace(/%20/g,"+")}else t=e;return t}function i(){}window.PageEvents={LoadedPage:"LoadedPage",PageScroll:"PageScroll",IntroWatched:"IntroWatched",IntroClicked:"IntroClicked",LoginClicked:"LoginClicked",GetStartedClicked:"GetStartedClicked",DemoClicked:"DemoClicked",AppClicked:"AppClicked",SocialClicked:"SocialClicked"},window.Segment={DriveBy:0,Watched:1,Browsed:2,Interacted:3,SocialClicked:4,AppClicked:5,SignedUp:6,ExistingUser:7};var n={};"function"!=typeof String.prototype.startsWith&&(Object.defineProperty?Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}}):String.prototype.startsWith=function(e){return 0===this.lastIndexOf(e,0)}),n.decodeRedirect=function(e){var t;return e&&(t=n.b64_to_utf8(e.substr(1))),t},n.encodeRedirect=function(e){return n.utf8_to_b64(e)},n.utf8_to_b64=function(e){var t;try{t=window.btoa(unescape(encodeURIComponent(e))).replace(/\+/g,"-").replace(/\//g,"_")}catch(i){n.reportError(i,e)}return t},n.b64_to_utf8=function(e){var t;try{t=decodeURIComponent(escape(window.atob(e.replace(/-/g,"+").replace(/_/g,"/"))))}catch(i){n.reportError(i,e)}return t},n._segment=Segment.DriveBy,n.setSegment=function(e){e>n._segment&&(n._segment=e)};var o=["DriveBy","Watched","Browsed","Interacted","SocialClicked","AppClicked","SignedUp","ExistingUser"];n.getSegment=function(){return o[n._segment]},n.getURLHashParam=function(e){for(var t,i=window.location.hash.substring(1),n=/([^&=]+)=([^&]*)/g;t=n.exec(i);)if(decodeURIComponent(t[1])===e)return decodeURIComponent(t[2]);return void 0};var a=[0,5,15,35,80,170],r=[408,500,502,503,504];n.XHR=function(e){function i(){m>p?(p++,setTimeout(n,1e3*a[p])):log("XHR Failed to retry - reached max retry limit")}function n(){var e=new XMLHttpRequest;if(e.onreadystatechange=function(){4===e.readyState&&(200!==e.status&&m>p?(e.retry=i,u&&r.indexOf(e.status)>=0?e.retry():d(e)):d(e))},g&&h?e.open(s.toUpperCase(),o,!0,g,h):e.open(s.toUpperCase(),o,!0),l)for(var n in l)e.setRequestHeader(n,l[n]);if(c){e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var a=t(c);e.send(a)}else e.send()}var o=e.url,s=e.type,d=e.cb,c=e.data,l=e.headers,u=e.autoRetry,m=e.maxRetries||2,p=0,g=e.username,h=e.password;n()},n.XHR_PrivateAPI=function(e){var t="https:",i="/private/v1",o={type:e.type,url:t+"//api.moo.do"+i+e.path,data:e.data,cb:e.cb,headers:e.headers,autoRetry:e.autoRetry,maxRetries:e.maxRetries};n.XHR(o)},n.XHR_PublicAPI=function(){},n.sendEvent=function(e,t,i){if(window.ga)try{ga("send","event","LandingPage",e,t,void 0,i)}catch(o){n.reportError(o)}},n.tagSession=function(e,t){if(window.smartlook)try{smartlook("tag",e,t)}catch(i){n.reportError(i)}},window.ga&&ga(function(e){var t=e.get("clientId");n.tagSession("name",t)}),window.__BEFORE_UNLOAD=function(){n.tagSession("segment",n.getSegment())},n.reportError=function(e){window.Rollbar&&Rollbar.error(e)};var s={getItem:function(){},setItem:function(){},removeItem:function(){},clear:function(){}};try{n.__storage=window.localStorage||s}catch(d){n.__storage=s}n.storage={getItem:(n.__storage.getItem||function(e,t){return this.get(e,t||i)}).bind(n.__storage),setItem:(n.__storage.setItem||function(e,t){var i={};i[e]=t,this.set(i)}).bind(n.__storage),removeItem:(n.__storage.removeItem||function(e,t){this.remove(e,t)}).bind(n.__storage),clear:(n.__storage.clear||function(e){this.clear(e)}).bind(n.__storage)},window.sendToAppStore=function(t,i){if(e.isMobile()&&e.OS){t=e.OS;var o;switch(t){case OSNames.Android:o="https://play.google.com/store/apps/details?id=moo.do";break;case OSNames.Chrome:o="https://chrome.google.com/webstore/detail/moodo/iffimmolghilclfndeiebgppddmagofk";break;case OSNames.iOS:o="https://itunes.apple.com/us/app/moo.do-organize-your-way/id889830074?ls=1&mt=8"}if(o)return window.open(o),!1}t&&i&&(n.sendEvent(PageEvents.AppClicked,i),n.setSegment(Segment.AppClicked))};var c="https://github.com/MooDoApp/MooDoApp.github.io/releases/latest",l="https://www.moo.do/lnk/mac",u="https://www.moo.do/lnk/windows";n.updateDownloadUrl=function(){var e=new XMLHttpRequest,t="https://api.github.com/repos/MooDoApp/MooDoApp.github.io/releases/latest";e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var t=JSON.parse(e.responseText);if(t&&t.assets)for(var i=0;i<t.assets.length;++i){var n=t.assets[i];n.name.indexOf(".zip")>0?l=n.browser_download_url:n.name.indexOf(".exe")>0&&(u=n.browser_download_url)}}},e.open("GET",t),e.send()},window.downloadNativeApp=function(t,i){if(e.isMobile())url=c;else switch(i||(i=e.OS),i){case OSNames.Windows:url=u;break;case OSNames.OSX:url=l;break;default:url=c}return url?(window.open(url),!1):void 0};var m={Facebook:"Facebook",Twitter:"Twitter",Google:"Google",Email:"Email"};return window.sendToSocialMedia=function(e,t){e===m.Email&&window.open("mailto:contact@moo.do","_blank"),n.sendEvent(PageEvents.SocialClicked,t),n.setSegment(Segment.SocialClicked)},n}),define("auth",["util"],function(e){function t(){this.clientId="597847337936.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.install","https://www.googleapis.com/auth/drive.appdata"],this.isLoggedIn=!1}return t.prototype={init:function(e){gapi.auth.init(),this.authenticate(!0,e)},getCurrentAppUser:function(){try{var e=window.localStorage.getItem("localSettings"),t=JSON.parse(e);if(t){var i=t.values.Default.activeUser;return i}}catch(n){log("Error getting app user: ",n)}return void 0},requestAuthorization:function(e){var t=navigator.userAgent;window.gapi&&window.gapi.auth?-1!==t.indexOf("MSIE")||-1!==t.indexOf("Trident")?this.sendToApp(!1,e):this.authenticate(!1,function(t){t?this.getEmailAddr(function(t){var i=this.getCurrentAppUser();i===t.email?this.sendToApp(!1,e):this.sendToApp(t.email,e)}.bind(this)):this.sendToApp()}.bind(this)):this.sendToApp(!1,e)},sendToApp:function(t,i,n){var o,a=window.location.host,r=e.getURLHashParam("invite"),s="";t?(s="user="+encodeURIComponent(t),o=window.location.protocol+"//"+a+"/app/"):(n||(s+="login=true"),o=window.location.protocol+"//"+a+"/app/"),r&&(s+=(s?"&":"")+"invite="+r),i&&(s+=(s?"&":"")+"premium=true"),window.location.href=o+(s?"#"+s:"")},authenticate:function(e,t){var i={client_id:this.clientId,scope:this.scopes,immediate:e,response_type:"token id_token",authuser:-1},n=!!window.navigator.standalone||window.navigator.userAgent.indexOf("FluidApp")>=0,o=n||this.isMobro();o&&!e&&(i.redirect_uri=window.location.protocol+"//"+window.location.host+"/app/"),gapi.auth.authorize(i,function(e){e&&!e.error?(this.isLoggedIn=!0,console.log("Landing Page Auth Logged In")):console.log("Landing Page Auth Logged Out"),t&&t(this.isLoggedIn)}.bind(this))},decodeIDToken:function(t){var i;if(t){var n=t.split(".");try{i=JSON.parse(e.b64_to_utf8(n[1]))}catch(o){log("Decode Error: ",o)}}return i},getEmailAddr:function(t){var i=gapi.auth.getToken();if(i){var n="https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token="+i.access_token;e.XHR({type:"GET",url:n,autoRetry:!0,cb:function(e){if(200===e.status){var i={};try{i=JSON.parse(e.responseText)}catch(n){log("Error: ",n)}t(i)}else t()}})}},isMobro:function(){var e=null;try{new ActiveXObject("")}catch(t){errorName=t.name}try{e=!!new ActiveXObject("htmlfile")}catch(t){e=!1}return e="ReferenceError"!=errorName&&0==e?!1:!0,!e}},new t}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),i=this,n=function(){},o=function(){return i.apply(this instanceof n?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o});var numRetries=2,loadYTVideo=!1;("/about/"===window.location.pathname||"/"===window.location.pathname)&&window.location.hash.indexOf("app%22:true")<0&&window.location.hash.indexOf('"app":true')<0&&(loadYTVideo=!0),loadYTVideo&&require(["DemoManager"],function(e){(e.isMobile()||e.isLegacyBrowser())&&e.loadVideoPlayer()}),requirejs(["util","auth","DemoManager"],function(e,t,i){function n(e){return"string"==typeof e?h[e]||(h[e]=document.getElementById(e)):e}function o(e){var t="",i=["ms","webkit","moz","o"],n=document.body.style,o=e.charAt(0).toUpperCase()+e.slice(1);if("string"==typeof n[e])t="";else for(var a=0;a<i.length;a++)if("string"==typeof n[i[a]+o]){t=i[a];break}var r=t.length>0?e.charAt(0).toUpperCase()+e.slice(1):e;return t?t+r:r}function a(){v=o("transform"),y=o("transition"),b=o("animation"),_=o("animationDelay"),f=window.innerWidth,i.isMobile()&&(document.documentElement.classList.add("mobile"),document.documentElement.classList.add(i.OS)),i.isLegacyBrowser()&&document.documentElement.classList.add("prefImages"),i.OS===OSNames.Windows&&document.documentElement.classList.add("windows");var n=navigator.userAgent;(-1!==n.indexOf("MSIE")||-1!==n.indexOf("Trident"))&&document.documentElement.classList.add("ie"),window.openApp=function(n){e.sendEvent(PageEvents.GetStartedClicked,n),e.setSegment(Segment.SignedUp),i.isMobile()?sendToAppStore(i.OS):t.sendToApp(!1,!1,!0)},document.documentElement.style.opacity=1}function r(e){var t,i=document.getElementById("errorMessage");switch(e){case I.None:t="";break;case I.AlreadyPremium:t="You're already a premium user! Please visit the app to manage your account.",document.getElementById("pricingArea").classList.add("hidden"),document.getElementById("purchaseArea").classList.add("hidden"),document.getElementById("codeArea").classList.add("hidden");break;case I.ServerConnect:t="Failed to connect to our billing database. Please contact support@moo.do.";break;case I.MissingNonce:case I.BraintreeConnect:t="Failed to connect to our billing provider. Please try again later or contact support@moo.do.";break;case I.FailedAuth:t="Failed to authorize your account.";break;case I.InvalidCode:t="You entered an invalid code.";break;default:t="There was an error processing your information. Please contact support@moo.do or try again later."}i.innerText=t,document.getElementById("errorArea").classList.remove("hidden")}function s(){var e=document.getElementById("successArea"),t=document.getElementById("loginArea"),i=document.getElementById("codeArea"),n=document.getElementById("purchaseArea"),o=document.getElementById("pricingArea");e.classList.remove("hidden"),t.classList.add("hidden"),i.classList.add("hidden"),n.classList.add("hidden"),o.classList.add("hidden")}function d(e,t){var i=new Image(1,1),n="//www.googleadservices.com/pagead/conversion/"+x+"/?label="+e+"&guid=ON";t&&(n+="&value="+t+"&currency_code=USD"),i.src=n}function c(i,o,a){function d(){e.XHR_PrivateAPI({type:"POST",path:"/billing/getToken",data:{email:o,gid:i},headers:{id_token:a,gid:i},cb:function(t){if(200===t.status)try{var n=JSON.parse(t.responseText).data;n&&n.token?(c=n.token,window.braintree?(l=new window.braintree.api.Client({clientToken:c}),window.braintree.setup(c,"dropin",{container:"braintreeDropin",onPaymentMethodReceived:function(e){O(e,o,i,a)},onError:function(t){e.reportError(t),r(I.BraintreeConnect)},onReady:function(e){u=e,document.getElementById("braintreeDropinLoader").classList.add("hidden"),document.getElementById("braintreeSubmitWrapper").classList.remove("hidden")}.bind(this)})):r(I.BraintreeConnect)):r(I.ServerConnect)}catch(s){e.reportError(s),r(I.ServerConnect)}else r(I.ServerConnect)}})}window.runPurchaseSendToApp=function(){t.sendToApp(o,!1)},n("emailDisplay").innerText="Account: "+o,window.define.amd={jQuery:!0};var c,l,u;e.XHR_PrivateAPI({type:"POST",path:"/billing/getStatus",data:{email:o,gid:i},headers:{id_token:a,gid:i},cb:function(t){if(200===t.status)try{var i=JSON.parse(t.response).data;i?4!==i.premiumStatus?d():r(I.AlreadyPremium):r(I.ServerConnect)}catch(n){r(I.ServerConnect),e.reportError(n)}else r(I.ServerConnect)}}),window.submitCode=function(){var t=n("codeValue"),o=t.value;t.value="",o&&o.length>10?(r(I.None),e.XHR_PrivateAPI({type:"POST",path:"/billing/useCode",data:{code:o},headers:{id_token:a,gid:i},cb:function(e){200===e.status?s():r(400===e.status?I.InvalidCode:I.ServerConnect)}})):r(I.InvalidCode)}}function l(){var i={None:-1,EarlyMonthly:0,EarlyYearly:1,RegMonthly:2,RegYearly:3};w=S[i.RegMonthly];var o=e.getURLHashParam("id_token"),a=e.getURLHashParam("email"),s=e.getURLHashParam("gid"),d=n("loginArea"),l=n("codeArea"),u=n("purchaseArea"),m=n("pricingArea");window.selectPlan=function(e,t){l.classList.add("hidden"),u.classList.remove("hidden"),n("pricing_"+t).classList.add("hidden"),n("pricing_"+e).classList.add("pricingSelected"),n("enterCodeButton").classList.add("hidden"),w=S[e]},window.enterCode=function(){l.classList.remove("hidden"),u.classList.add("hidden"),n("enterCodeButton").classList.add("pricingSelected"),n("codeValue").focus()},o&&a&&s?c(s,a,o):(l.classList.add("hidden"),u.classList.add("hidden"),m.classList.add("hidden"),d.classList.remove("hidden"),window.runPurchaseAuthenticate=function(){t.authenticate(!1,function(e){if(e){m.classList.remove("hidden"),l.classList.add("hidden"),d.classList.add("hidden");var i=gapi.auth.getToken(),n=t.decodeIDToken(i.id_token);c(n.sub,n.email,i.id_token)}else r(I.FailedAuth)})})}function u(){var t=e.getURLHashParam("email"),i=e.getURLHashParam("gid");e.XHR_PrivateAPI({type:"POST",path:"/feedback/unsubscribe",data:{email:t,gid:i},cb:function(e){var t;t=200===e.status?"You have been successfully unsubscribed from future emails.":"There was an error unsubscribing. Please reply to the email to unsubscribe.",document.getElementById("unsubMessage").innerText=t}})}function m(){i.registerListeners(void 0,void 0,void 0,void 0),i.config({forceVideo:!1,noLoadDelay:i.isMobile()}),i.beginLoading()}function p(){function t(){var e=d,t=c;d=window.innerWidth,c=window.innerHeight,(!i.isMobile()||e!==d&&t!==c)&&(topDemo.style["max-width"]=Math.max(Math.min(2*(c-240),900),700)+"px",topDemoFeatures.style["max-width"]=Math.max(Math.min(2*(c-240),940),700)+"px")}function o(e){u.style[v]="translateX("+100*-e+"%)";for(var t=0;l>t;t++){var i=m.children[t],n=u.children[2*t+1];t===e?(n.classList.add("selected"),i.classList.add("selected")):t===h&&(n.classList.remove("selected"),i.classList.remove("selected"))}h=e,p.style.opacity=e>0?.7:0,g.style.opacity=l-1>e?.7:0}function a(){h>0&&o(h-1)}function r(){l-1>h&&o(h+1)}function s(e){var t=u.getBoundingClientRect();t.top<window.innerHeight-50&&t.bottom>50&&(37===e.keyCode&&h>0?o(h-1):39===e.keyCode&&l-1>h&&o(h+1))}var d,c,l=5;t(),window.addEventListener("resize",t);var u=n("workflowsDemos"),m=n("demoButtons"),p=n("play-left"),g=n("play-right"),h=0;p.onclick=a,g.onclick=r;for(var f=0;l>f;f++)m.children[f].onclick=o.bind(this,f);o(0),document.addEventListener("keydown",s);for(var w=i.OS,y=document.getElementsByClassName("buttonDownload"),b=w===OSNames.OSX&&"Mac"||w===OSNames.Windows&&"Windows",f=0;f<y.length;f++)b?y[f].textContent="Download "+b+" App":y[f].style.display="none";e.updateDownloadUrl()}function g(){a();var e=window.location.pathname.toLowerCase();"/about/"===e||"/"===e?p():"/unsubscribe/"===e?u():"/press/"===e?m():"/purchase/"===e&&l()}var h={};window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},window.console||(window.console={log:function(){},error:function(){}}),window.log=window.console.log.bind(window.console);var f,w,v="transform",y="transition",b="animation",_="animationDelay",S=["2m4b","gjgm","pmjw","5pm2"],L=["4.95","49.95","5","49"],I={None:0,AlreadyPremium:1,MissingNonce:2,ServerConnect:3,BraintreeConnect:4,FailedAuth:5,InvalidCode:6},E=!1,x=976910954,k="ha4uCMXduXUQ6vTp0QM",O=function(t,i,n,o){document.getElementById("errorArea").classList.add("hidden"),t&&t.nonce?E||(E=!0,e.XHR_PrivateAPI({type:"POST",path:"/billing/signup",data:{email:i,gid:n,nonce:t.nonce,planID:w},headers:{id_token:o,gid:n},cb:function(e){E=!1,200===e.status?(s(),d(k,parseInt(L[S.indexOf(w)]))):r(I.AlreadyPremium)}})):r(I.MissingNonce)};window.requestAuthorization=function(i,n){t.requestAuthorization(!!n),e.sendEvent(PageEvents.LoginClicked,i),e.setSegment(Segment.SignedUp)},window.location.hash.indexOf("app%22:true")>=0||window.location.hash.indexOf('"app":true')>=0?window.location.pathname="/app/":"interactive"===document.readyState||"complete"===document.readyState?g():document.addEventListener("DOMContentLoaded",g,!1)}),define("landing",function(){});
//# sourceMappingURL=landing-min.js.map