(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1009:function(e,t,r){"use strict";r.r(t);var a=r(14),o=r.n(a),s=r(5),n=r.n(s),i=r(6),l=r.n(i),c=r(0),d=r(1),u=r(16),f=r(25),p=r(8),h=r(103),m=r(3),v=r(41),g=r(64),w=r(60),y=r(65);function k(e){return e.toString(m.default.International.getFormat(d.a.DFormat.MonthDay))}var L=function(){function e(){var t=this;n()(this,e);["wunderlist","opml","json","gtasks","trello","todoist"].forEach((function(e){return t.register(e)}))}return l()(e,[{key:"register",value:function(e){var t={login:this[e+"Login"].bind(this),import:this[e+"Import"].bind(this),save:this[e+"Save"].bind(this)};this[e+"Preload"]&&(t.preload=this[e+"Preload"].bind(this)),this[e]=t}},{key:"wunderlistLogin",value:function(e,t,r,a){var o=this;try{c.default.PAssert(701,r,"Wunderlist requires a success callback")}catch(u){c.default.reportError(u)}try{c.default.PAssert(702,a,"Wunderlist requires an error callback")}catch(u){c.default.reportError(u)}var s="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",n=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=s;var i="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+s+"&redirect_uri="+n+"&state="+i;window.open(l,"modal-wunderlist","height=600,width=550");window.addEventListener("message",(function e(t){var s=c.default.getLocationOrigin(),n=!1;try{n=t.data.state===i}catch(u){c.default.reportError(u)}if(s&&n)if(window.removeEventListener("message",e),t.data.error)a("Error authenticating with Wunderlist");else{var l=t.data.code;l&&c.default.XHR_PrivateAPI({type:"POST",path:"/private/v1/oauth/wunderlist",data:{code:l},requireAuth:!0,cb:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("Wunderlist Login Reponse: ",e),200===e.status){try{var t=JSON.parse(e.response).data;o.wunderlist.token=t.access_token}catch(u){a("Error parsing response from remote server.",u)}o.wunderlist.token?r():a("Invalid username or password.")}else a("Error contacting remote server.")}))})}}))}},{key:"wunderlistImport",value:function(e,t){var r=this;try{c.default.PAssert(703,e,"Wunderlist requires a success callback")}catch(s){c.default.reportError(s)}try{c.default.PAssert(704,t,"Wunderlist requires an error callback")}catch(s){c.default.reportError(s)}var a={inbox:{title:"inbox",items:{},p:0}},o=0;this.wunderlistGetLists((function(s){var n=0;c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("Get ListData Response: ",s);for(var i=function(){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var i=s[l];a[i.id]={title:i.title,items:{},p:i.position},r.wunderlistGetTasks(i.id,(function(n){var l=0;c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("Get TaskData Response: ",n);for(var u=0;u<n.length;++u){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;var f=n[u];if(f.parent_id){var p=a[f.list_id].items[f.parent_id];p?(p.items||(p.items=[]),p.items.push(f)):a[f.list_id].items[f.parent_id]={items:[f]}}else{var h=a[f.list_id].items[f.id];a[f.list_id].items[f.id]=f,h&&(a[f.list_id].items[f.id].items=h.items)}}r.wunderlistGetSubtasks(i.id,(function(t){for(var r=0,n=0;n<t.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t[n],l=a[i.list_id];if(l)if(i.parent_id){var c=l.items[i.parent_id];c?(c.items||(c.items=[]),c.items.push(i)):l.items[i.parent_id]={items:[i]}}else{var d=l.items[i.id];l.items[i.id]=i,d&&(l.items[i.id].items=d.items)}}++o===s.length&&e(a)}),t)}),t)},l=0;l<s.length;++l)i()}),t)}},{key:"wunderlistGetLists",value:function(e,t){try{c.default.PAssert(705,e,"Wunderlist requires a success callback")}catch(r){c.default.reportError(r)}try{c.default.PAssert(706,t,"Wunderlist requires an error callback")}catch(r){c.default.reportError(r)}c.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then((function(r){var a;return o.a.async((function(s){for(var n=0;;){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;switch(s.prev=s.next){case 0:if(200!==r.status){s.next=13;break}return s.prev=1,s.next=4,o.a.awrap(r.json());case 4:a=s.sent,s.next=10;break;case 7:s.prev=7,s.t0=s.catch(1),t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",s.t0);case 10:e(a),s.next=15;break;case 13:c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("XHR Status: "+r.status),t("Error contacting remote server.");case 15:case"end":return s.stop()}}}),null,null,[[1,7]])}))}},{key:"wunderlistGetTasks",value:function(e,t,r){try{c.default.PAssert(707,t,"Wunderlist requires a success callback")}catch(a){c.default.reportError(a)}try{c.default.PAssert(708,r,"Wunderlist requires an error callback")}catch(a){c.default.reportError(a)}c.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then((function(e){var a;return o.a.async((function(s){for(var n=0;;){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;switch(s.prev=s.next){case 0:if(200!==e.status){s.next=7;break}return s.next=3,o.a.awrap(e.json());case 3:a=s.sent,t(a),s.next=9;break;case 7:c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("XHR Status: "+e.status),r("Error contacting remote server.");case 9:case"end":return s.stop()}}}))}))}},{key:"wunderlistGetSubtasks",value:function(e,t,r){try{c.default.PAssert(709,t,"Wunderlist requires a success callback")}catch(a){c.default.reportError(a)}try{c.default.PAssert(710,r,"Wunderlist requires an error callback")}catch(a){c.default.reportError(a)}c.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then((function(e){var a;return o.a.async((function(s){for(var n=0;;){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;switch(s.prev=s.next){case 0:if(200!==e.status){s.next=7;break}return s.next=3,o.a.awrap(e.json());case 3:a=s.sent,t(a),s.next=9;break;case 7:c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("XHR Status: "+e.status),r("Error contacting remote server.");case 9:case"end":return s.stop()}}}))}))}},{key:"wunderlistSave",value:function(e,t,r){try{c.default.PAssert(711,t,"Wunderlist requires a success callback")}catch(s){c.default.reportError(s)}try{c.default.PAssert(712,r,"Wunderlist requires an error callback")}catch(s){c.default.reportError(s)}try{p.d.beginAction(),m.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Wunderlist import"),o=a.getRootItem();try{c.default.PAssert(713,o,"Root item must exist in order to import")}catch(s){c.default.reportError(s)}Object.keys(e).forEach((function(t){var r=e[t];c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("List: ",r);var s=r.title,n=u.a.createVMLI({text:s},{parent:o,changeType:d.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(n,0),Object.keys(r.items).forEach((function(e){var t=r.items[e];c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("  Task: ",t);var o=u.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:n,changeType:d.a.ChangeType.AllLocal,documentOwner:a});if(n.insertItem(o),t.note){var s=u.a.createVMLI({text:t.note},{parent:o,changeType:d.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(s)}if(t.items)for(var i=0,l=0;l<t.items.length;++l){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var f=t.items[l];c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("    SubTask: ",f);var p=u.a.createVMLI({text:f.title,isComplete:!!f.completed_at,dateCompleted:f.completed_at,isStarred:f.starred},{parent:o,changeType:d.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(p)}}))})),a.parseAll(d.a.ChangeType.Local|d.a.ChangeType.All),this.saveDocument(a),m.default.PaneUpdateBatcher.commitUpdateItems(),p.d.endAction(),t()}catch(n){r(void 0,n)}}},{key:"opmlLogin",value:function(e,t,r,a){try{c.default.PAssert(714,r,"OPML requires a success callback")}catch(s){c.default.reportError(s)}try{c.default.PAssert(715,a,"OPML requires an error callback")}catch(s){c.default.reportError(s)}var o=document.getElementById("importFileUploadButton");o.onchange=r,o.click()}},{key:"opmlImport",value:function(e,t){var r=this;try{c.default.PAssert(716,e,"OPML requires a success callback")}catch(s){c.default.reportError(s)}try{c.default.PAssert(717,t,"OPML requires an error callback")}catch(s){c.default.reportError(s)}try{var a=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(a.onload=function(a){var o=a.target.result,s=r.opmlToDocument(o,"OPML Import");!0===s?e():t(s)},a.onerror=t,a.readAsText(o)):t("You must select a file before importing.")}catch(n){t(void 0,n)}}},{key:"opmlSave",value:function(e,t,r){try{c.default.PAssert(718,t,"OPML requires a success callback")}catch(a){c.default.reportError(a)}try{c.default.PAssert(719,r,"OPML requires an error callback")}catch(a){c.default.reportError(a)}c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("OPML Save: ",e),t()}},{key:"opmlToDocument",value:function(e,t){if(!e)return"Please enter your OPML in the box above.";var r;if((e.startsWith("<?xml ")||e.startsWith("<?opml ")||e.startsWith("<opml "))&&(r=c.default.loadXML(e)),r){p.d.beginAction(),m.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument(t),o=a.getRootItem();try{c.default.PAssert(720,o,"Root item must exist in order to import")}catch(n){c.default.reportError(n)}var s=h.a.parseOPML(r,o);return this.saveDocument(a),m.default.PaneUpdateBatcher.commitUpdateItems(),p.d.endAction(),!!s||"Error parsing OPML. Please validate your data."}return"Unable to load XML lib. Please update or try another browser."}},{key:"jsonLogin",value:function(e,t,r,a){try{c.default.PAssert(721,r,"JSON requires a success callback")}catch(n){c.default.reportError(n)}try{c.default.PAssert(722,a,"JSON requires an error callback")}catch(n){c.default.reportError(n)}var o=document.getElementById("importFileUploadButton"),s=!1;o.onchange=function(e){s=!0,r(e)},o.click();document.body.onfocus=function(){setTimeout((function(){s||a(!1),document.body.onfocus=void 0}),1e3)}}},{key:"jsonImport",value:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{a=a.replace(/\n/g,"");var o=JSON.parse(a)}catch(s){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{h.a.parseJSON(o,!0).then((function(r){if(r){r.text=r.text||"Imported document",p.d.beginAction(),m.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach((function(e){f.a.cacheItem(e)}));var a=g.a.create(r);u.a.addDocument(a),m.default.PaneUpdateBatcher.commitUpdateItems(),p.d.endAction()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")}))}catch(n){return t("The JSON file has errors. The developers have been notified with details of the error.",n)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}}},{key:"jsonSave",value:function(e,t,r){try{c.default.PAssert(723,t,"JSON requires a success callback")}catch(a){c.default.reportError(a)}try{c.default.PAssert(724,r,"JSON requires an error callback")}catch(a){c.default.reportError(a)}t()}},{key:"gtasksLogin",value:function(e,t,r,a){var o=this;try{c.default.PAssert(729,r,"GTasks requires a success callback")}catch(s){c.default.reportError(s)}try{c.default.PAssert(730,a,"GTasks requires an error callback")}catch(s){c.default.reportError(s)}v.a.authAccountTemp([d.a.GScope.TasksRO],(function(e){e&&!e.error?(o.gtasks.token=e.access_token,r(e)):(c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("Error getting Google TaskRO permission: ",e),a("Unable to authenticate with Google. Please try again.",e))}))}},{key:"gtasksImport",value:function(e,t){var r=this;try{c.default.PAssert(731,e,"GTasks requires a success callback")}catch(o){c.default.reportError(o)}try{c.default.PAssert(732,t,"GTasks requires an error callback")}catch(o){c.default.reportError(o)}var a={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists((function(s){var n=0;try{c.default.PAssert(733,c.default.isArray(s),"List data must be an array")}catch(o){c.default.reportError(o)}for(var i=s.length,l=0,d=0;d<s.length;++d){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var u=s[d];a.remoteItems[u.id]={id:u.id,text:u.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},a.roots.push(u.id),r.gtasksGetTasks(u,(function(r,s){if(r){try{c.default.PAssert(734,c.default.isArray(r),"List data must be an array")}catch(o){c.default.reportError(o)}if(c.default.isArray(r)){for(var n=0,d=0;d<r.length;++d){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var u=r[d];if(u&&"completed"!==u.status){a.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||s.id,items:[]};var f=a.remoteItems[u.parent||s.id];f?f.items.push(u.id):a.unassigned.push(u.id)}}++l===i&&e(a)}else t("Invalid task list returned.")}else l++}),t)}}),t)}},{key:"gtasksGetLists",value:function(e,t){try{c.default.PAssert(735,e,"GTasks requires a success callback")}catch(r){c.default.reportError(r)}try{c.default.PAssert(736,t,"GTasks requires an error callback")}catch(r){c.default.reportError(r)}c.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=".concat(2e3,"&key=").concat(d.a.APIKey,"&access_token=").concat(this.gtasks.token)}).then((function(a){var s;return o.a.async((function(n){for(var i=0;;){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;switch(n.prev=n.next){case 0:if(200!==a.status){n.next=14;break}return n.prev=1,n.next=4,o.a.awrap(a.json());case 4:s=n.sent;try{c.default.PAssert(737,s&&s.items,"Must have a valid set of data to get tasks from")}catch(r){c.default.reportError(r)}s&&s.items?e(s.items):t("Error getting data from remote server."),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),t(n.t0);case 12:n.next=16;break;case 14:c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("XHR Status: "+a.status),t("Error contacting remote server.");case 16:case"end":return n.stop()}}}),null,null,[[1,9]])}))}},{key:"gtasksGetTasks",value:function(e,t,r){try{c.default.PAssert(738,e,"GTasks requires a valid list to get tasks from")}catch(a){c.default.reportError(a)}try{c.default.PAssert(739,t,"GTasks requires a success callback")}catch(a){c.default.reportError(a)}try{c.default.PAssert(740,r,"GTasks requires an error callback")}catch(a){c.default.reportError(a)}c.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/".concat(e.id,"/tasks?maxResults=").concat(2500,"&key=").concat(d.a.APIKey,"&access_token=").concat(this.gtasks.token)}).then((function(s){var n;return o.a.async((function(i){for(var l=0;;){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;switch(i.prev=i.next){case 0:if(200!==s.status){i.next=14;break}return i.prev=1,i.next=4,o.a.awrap(s.json());case 4:n=i.sent;try{c.default.PAssert(741,n,"Must have a valid array of tasks")}catch(a){c.default.reportError(a)}n&&n.items?t(n.items,e):t([],e),i.next=12;break;case 9:i.prev=9,i.t0=i.catch(1),r(i.t0);case 12:i.next=16;break;case 14:c.default.shouldLog(d.a.LogLevels.Import)&&c.default.log("XHR Status: "+s.status),r("Error contacting remote server.");case 16:case"end":return i.stop()}}}),null,null,[[1,9]])}))}},{key:"gtasksSave",value:function(e,t,r){try{c.default.PAssert(742,t,"GTasks requires a success callback")}catch(l){c.default.reportError(l)}try{c.default.PAssert(743,r,"GTasks requires an error callback")}catch(l){c.default.reportError(l)}try{var a=0;try{c.default.PAssert(744,0===e.unassigned.length,"We should never have unassigned tasks")}catch(l){c.default.reportError(l)}p.d.beginAction(),m.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Google Tasks import"),s=o.getRootItem();try{c.default.PAssert(745,s,"Root item must exist in order to import")}catch(l){c.default.reportError(l)}for(var n=function t(r,a){var s=0,n=r.text;r.due&&(n+=" @"+k(r.due));var i=u.a.createVMLI({text:n,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:d.a.ChangeType.AllLocal,documentOwner:o});if(a.insertItem(i),r.notes){var l=u.a.createVMLI({text:r.notes,isNote:!0},{parent:i,changeType:d.a.ChangeType.AllLocal,documentOwner:o});i.setNote(l,d.a.ChangeType.Local)}for(var c=0;c<r.items.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;t(e.remoteItems[r.items[c]],i)}},i=0;i<e.roots.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;n(e.remoteItems[e.roots[i]],s)}o.parseAll(d.a.ChangeType.Local|d.a.ChangeType.All),this.saveDocument(o),m.default.PaneUpdateBatcher.commitUpdateItems(),p.d.endAction(),t()}catch(f){r(void 0,f)}}},{key:"trelloPreload",value:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,c.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",(function(){c.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",(function(){r.trello.isLoading=!1;try{c.default.PAssert(746,window.Trello,"The Trello client lib must have been loaded correctly")}catch(a){c.default.reportError(a)}window.Trello?e():t("Error loading Trello. Please try again.")}),(function(e){r.trello.isLoading=!1,t(e)}))}),(function(e){r.trello.isLoading=!1,t(e)})))}},{key:"trelloLogin",value:function(e,t,r,a){try{c.default.PAssert(747,window.Trello,"The Trello client lib was not properly loaded")}catch(o){c.default.reportError(o)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:a}):a("Error loading Trello. Please try again.")}},{key:"trelloImport",value:function(e,t){var r=this,a=[];window.Trello.get("members/me/boards",c.default.wrapFn((function(o){var s=0,n=(o=o||[]).length,i=0;function l(){n===i&&e(a)}function c(e){i++,l()}for(var d=0;d<o.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=o[d];if(u.closed)n--;else{var f={text:u.name,items:[]};a.push(f),r._handleBoard(f,u.id,t,c)}}l()}),t),t)}},{key:"_handleBoard",value:function(e,t,r,a){var o=this;window.Trello.get("boards/"+t+"/lists",c.default.wrapFn((function(t){var s=0,n=0,i=t.length;function l(){n===i&&a()}function c(){n++,l()}for(var d=0;d<t.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=t[d];if(u.closed)i--;else{var f={text:u.name,items:[]};e.items.push(f),o._handleList(f,u.id,r,c)}}l()}),r),r)}},{key:"_handleList",value:function(e,t,r,a){var o=this;window.Trello.get("lists/"+t+"/cards",c.default.wrapFn((function(t){var s=0,n=0,i=t.length;function l(){n===i&&a()}function c(){n++,l()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var f=t[u];if(f.closed)i--;else{var p={text:f.name};if(f.labels&&f.labels.length>0){for(var h=0,m="",v=0;v<f.labels.length;++v){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var g=f.labels[v];m+=d.a.TagPrefix+(g.name.length>0?g.name:g.color)+" "}p.text=m+p.text}if(f.due&&(f.date=new Date(f.due)),f.desc&&f.desc.length>0){var w=0;p.items=[];var y=f.desc.split("\n");for(v=0;v<y.length;++v){if(w++>5e3&&__infLoop&&__infLoop(w))throw new RangeError;var k=y[v];k&&k.length>0&&p.items.push({text:k})}}if(f.idChecklists&&f.idChecklists.length>0){var L=0;p.items||(p.items=[]);for(v=0;v<f.idChecklists.length;++v){if(L++>5e3&&__infLoop&&__infLoop(L))throw new RangeError;o._handleChecklist(p,f.idChecklists[v],r,c)}}else n++;e.items.push(p)}}l()}),r),r)}},{key:"_handleChecklist",value:function(e,t,r,a){window.Trello.get("checklists/"+t+"/",c.default.wrapFn((function(t){for(var r=0,o={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var n=t.checkItems[s],i="complete"===n.state;if(!i){var l={text:n.name,isComplete:i};o.items.push(l)}}e.items.push(o),a()}),r),r)}},{key:"trelloSave",value:function(e,t,r){try{var a=0;p.d.beginAction(),m.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Trello import"),s=function e(t,r){var a=u.a.createVMLI({text:t.text,isComplete:t.isComplete,isCollapsed:t.isCollapsed},{parent:r,changeType:d.a.ChangeType.AllLocal,documentOwner:o});if(r.insertItem(a),t.items)for(var s=0,n=0;n<t.items.length;++n){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;e(t.items[n],a)}return a},n=o.getRootItem();try{c.default.PAssert(748,n,"Root item must exist in order to import")}catch(l){c.default.reportError(l)}for(var i=0;i<e.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;s(e[i],n)}this.saveDocument(o),m.default.PaneUpdateBatcher.commitUpdateItems(),p.d.endAction()}catch(f){return r(f)}t()}},{key:"todoistLogin",value:function(e,t,r,a){var o=this;try{c.default.PAssert(749,r,"Todoist requires a success callback")}catch(i){c.default.reportError(i)}try{c.default.PAssert(750,a,"Todoist requires an error callback")}catch(i){c.default.reportError(i)}var s="Dchs"+(new Date).getTime(),n="https://todoist.com/oauth/authorize?client_id=de93a2f2c51d4e2fa0412a79f88c7960&scope=data:read&state="+s;window.open(n,"modal-todoist","height=600,width=550");window.addEventListener("message",(function e(t){var n=c.default.getLocationOrigin(),i=!1;try{i=t.data.state===s}catch(d){c.default.reportError(d)}if(n&&i)if(window.removeEventListener("message",e),t.data.error)a("Error authenticating with Todoist");else{var l=t.data.code;l&&y.a.todoistImport(l).then((function(e){e.error?a("Error parsing response from remote server.",e.error):(console.log(e.value),o.todoist.data=e.value,r())}))}}))}},{key:"todoistImport",value:function(e,t){var r=0,a=0;try{c.default.PAssert(751,e,"Todoist requires a success callback")}catch(f){c.default.reportError(f)}try{c.default.PAssert(752,t,"Todoist requires an error callback")}catch(f){c.default.reportError(f)}for(var o=this.todoist.data,s={},n=0;n<o.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=o.projects[n];i.is_archived||i.is_deleted||(s[i.id]={id:i.id,name:i.name,items:[],itemMap:{},parent_id:i.parent_id,item_order:i.item_order})}for(var l=[],d=0;d<o.items.length;++d){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=o.items[d];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&d>0&&!isNaN(u.indent)&&u.indent>1&&l[u.indent-1]&&(u.parent_id=l[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(l[u.indent]=u))}e(s)}},{key:"todoistSave",value:function(e,t,r){var a=[d.a.VMLIFlag.None,d.a.VMLIFlag.None,d.a.VMLIFlag.P2,d.a.VMLIFlag.P1,d.a.VMLIFlag.P0];try{p.d.beginAction(),m.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Todoist import"),s=o.getRootItem();try{c.default.PAssert(753,s,"Root item must exist in order to import")}catch(b){c.default.reportError(b)}var n={},i={},l=function(e,t){var r=i[e.id],a=i[t.id];return r.item_order-a.item_order},f=function e(t,r){if(!n[r.id]){var s=r.parent_id;r.parent_id&&!n[r.id]&&e(t,t.itemMap[r.parent_id]);var f=n[s||r.project_id];try{c.default.PAssert(754,f,"parent item did not exist",s,r.project_id)}catch(b){c.default.reportError(b)}f&&function(e,t,r){if(t.priority&&(t.priority=a[t.priority]),t.due_date_utc){var s=w.a.parseText(k(new Date(t.due_date_utc)));s&&(t.date=s.toData(),t.content+=" "+d.a.CharDate)}var c=u.a.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority,date:t.date},{parent:r,changeType:d.a.ChangeType.AllLocal,documentOwner:o});n[t.id]=c,i[c.id]=t,r.insertSorted(c,l)}(0,r,f)}},h=function t(r){if(!n[r.id]){var a,c=r.parent_id,f=r.id;c?(n[c]||t(e[c]),a=n[c]):a=s;var p=u.a.createVMLI({text:r.name},{parent:a,changeType:d.a.ChangeType.AllLocal,documentOwner:o});n[f]=p,i[p.id]=r,a.insertSorted(p,l)}};for(var v in e)if(e.hasOwnProperty(v)){var g=0,y=e[v],L=y.items;h(y);for(var _=0;_<L.length;_++){if(g++>5e3&&__infLoop&&__infLoop(g))throw new RangeError;f(y,L[_])}}this.saveDocument(o),m.default.PaneUpdateBatcher.commitUpdateItems(),p.d.endAction()}catch(E){return r(E)}t()}},{key:"createDocument",value:function(e){return u.a.createEmptyDocument(e,u.a.getDefaultBacking())}},{key:"saveDocument",value:function(e){u.a.addDocument(e)}},{key:"runImport",value:function(e,t,r,a,o){e.login(t,r,(function(){e.import((function(t){e.save(t,(function(){a()}),o)}),o)}),o)}}]),e}();t.default=L}}]);
