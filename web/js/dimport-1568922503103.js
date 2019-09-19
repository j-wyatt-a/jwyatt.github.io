(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1019:function(e,t,r){"use strict";r.r(t);var a=r(14),o=r.n(a),s=r(23),n=r.n(s),i=r(5),l=r.n(i),c=r(6),d=r.n(c),u=r(0),f=r(1),p=r(19),h=r(26),m=r(8),v=r(104),g=r(3),w=r(41),y=r(64),k=r(58),L=r(65);function _(e){return e.toString(g.default.International.getFormat(f.a.DFormat.MonthDay))}var b=function(){function e(){var t=this;l()(this,e);["wunderlist","opml","json","gtasks","trello","todoist"].forEach((function(e){return t.register(e)}))}return d()(e,[{key:"register",value:function(e){var t={login:this[e+"Login"].bind(this),import:this[e+"Import"].bind(this),save:this[e+"Save"].bind(this)};this[e+"Preload"]&&(t.preload=this[e+"Preload"].bind(this)),this[e]=t}},{key:"wunderlistLogin",value:function(e,t,r,a){var o=this;try{u.default.PAssert(819,r,"Wunderlist requires a success callback")}catch(c){u.default.reportError(c)}try{u.default.PAssert(820,a,"Wunderlist requires an error callback")}catch(c){u.default.reportError(c)}var s="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",n=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=s;var i="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+s+"&redirect_uri="+n+"&state="+i;window.open(l,"modal-wunderlist","height=600,width=550");window.addEventListener("message",(function e(t){var s=u.default.getLocationOrigin(),n=!1;try{n=t.data.state===i}catch(c){u.default.reportError(c)}if(s&&n)if(window.removeEventListener("message",e),t.data.error)a("Error authenticating with Wunderlist");else{var l=t.data.code;l&&u.default.XHR_PrivateAPI({type:"POST",path:"/private/v1/oauth/wunderlist",data:{code:l},requireAuth:!0,cb:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("Wunderlist Login Reponse: ",e),200===e.status){try{var t=JSON.parse(e.response).data;o.wunderlist.token=t.access_token}catch(c){a("Error parsing response from remote server.",c)}o.wunderlist.token?r():a("Invalid username or password.")}else a("Error contacting remote server.")}))})}}))}},{key:"wunderlistImport",value:function(e,t){var r=this;try{u.default.PAssert(821,e,"Wunderlist requires a success callback")}catch(s){u.default.reportError(s)}try{u.default.PAssert(822,t,"Wunderlist requires an error callback")}catch(s){u.default.reportError(s)}var a={inbox:{title:"inbox",items:{},p:0}},o=0;this.wunderlistGetLists((function(s){var n=0;u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("Get ListData Response: ",s);for(var i=function(){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var i=s[l];a[i.id]={title:i.title,items:{},p:i.position},r.wunderlistGetTasks(i.id,(function(n){var l=0;u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("Get TaskData Response: ",n);for(var c=0;c<n.length;++c){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;var d=n[c];if(d.parent_id){var p=a[d.list_id].items[d.parent_id];p?(p.items||(p.items=[]),p.items.push(d)):a[d.list_id].items[d.parent_id]={items:[d]}}else{var h=a[d.list_id].items[d.id];a[d.list_id].items[d.id]=d,h&&(a[d.list_id].items[d.id].items=h.items)}}r.wunderlistGetSubtasks(i.id,(function(t){for(var r=0,n=0;n<t.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t[n],l=a[i.list_id];if(l)if(i.parent_id){var c=l.items[i.parent_id];c?(c.items||(c.items=[]),c.items.push(i)):l.items[i.parent_id]={items:[i]}}else{var d=l.items[i.id];l.items[i.id]=i,d&&(l.items[i.id].items=d.items)}}++o===s.length&&e(a)}),t)}),t)},l=0;l<s.length;++l)i()}),t)}},{key:"wunderlistGetLists",value:function(e,t){try{u.default.PAssert(823,e,"Wunderlist requires a success callback")}catch(r){u.default.reportError(r)}try{u.default.PAssert(824,t,"Wunderlist requires an error callback")}catch(r){u.default.reportError(r)}u.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var r=n()(o.a.mark((function r(a){var s;return o.a.wrap((function(r){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(r.prev=r.next){case 0:if(200!==a.status){r.next=13;break}return r.prev=1,r.next=4,a.json();case 4:s=r.sent,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",r.t0);case 10:e(s),r.next=15;break;case 13:u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("XHR Status: "+a.status),t("Error contacting remote server.");case 15:case"end":return r.stop()}}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}())}},{key:"wunderlistGetTasks",value:function(e,t,r){try{u.default.PAssert(825,t,"Wunderlist requires a success callback")}catch(a){u.default.reportError(a)}try{u.default.PAssert(826,r,"Wunderlist requires an error callback")}catch(a){u.default.reportError(a)}u.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var e=n()(o.a.mark((function e(a){var s;return o.a.wrap((function(e){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(e.prev=e.next){case 0:if(200!==a.status){e.next=7;break}return e.next=3,a.json();case 3:s=e.sent,t(s),e.next=9;break;case 7:u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("XHR Status: "+a.status),r("Error contacting remote server.");case 9:case"end":return e.stop()}}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"wunderlistGetSubtasks",value:function(e,t,r){try{u.default.PAssert(827,t,"Wunderlist requires a success callback")}catch(a){u.default.reportError(a)}try{u.default.PAssert(828,r,"Wunderlist requires an error callback")}catch(a){u.default.reportError(a)}u.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId}}).then(function(){var e=n()(o.a.mark((function e(a){var s;return o.a.wrap((function(e){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(e.prev=e.next){case 0:if(200!==a.status){e.next=7;break}return e.next=3,a.json();case 3:s=e.sent,t(s),e.next=9;break;case 7:u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("XHR Status: "+a.status),r("Error contacting remote server.");case 9:case"end":return e.stop()}}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"wunderlistSave",value:function(e,t,r){try{u.default.PAssert(829,t,"Wunderlist requires a success callback")}catch(s){u.default.reportError(s)}try{u.default.PAssert(830,r,"Wunderlist requires an error callback")}catch(s){u.default.reportError(s)}try{m.d.beginAction(),g.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Wunderlist import"),o=a.getRootItem();try{u.default.PAssert(831,o,"Root item must exist in order to import")}catch(s){u.default.reportError(s)}Object.keys(e).forEach((function(t){var r=e[t];u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("List: ",r);var s=r.title,n=p.a.createVMLI({text:s},{parent:o,changeType:f.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(n,0),Object.keys(r.items).forEach((function(e){var t=r.items[e];u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("  Task: ",t);var o=p.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:n,changeType:f.a.ChangeType.AllLocal,documentOwner:a});if(n.insertItem(o),t.note){var s=p.a.createVMLI({text:t.note},{parent:o,changeType:f.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(s)}if(t.items)for(var i=0,l=0;l<t.items.length;++l){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var c=t.items[l];u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("    SubTask: ",c);var d=p.a.createVMLI({text:c.title,isComplete:!!c.completed_at,dateCompleted:c.completed_at,isStarred:c.starred},{parent:o,changeType:f.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(d)}}))})),a.parseAll(f.a.ChangeType.Local|f.a.ChangeType.All),this.saveDocument(a),g.default.PaneUpdateBatcher.commitUpdateItems(),m.d.endAction(),t()}catch(n){r(void 0,n)}}},{key:"opmlLogin",value:function(e,t,r,a){try{u.default.PAssert(832,r,"OPML requires a success callback")}catch(s){u.default.reportError(s)}try{u.default.PAssert(833,a,"OPML requires an error callback")}catch(s){u.default.reportError(s)}var o=document.getElementById("importFileUploadButton");o.onchange=r,o.click()}},{key:"opmlImport",value:function(e,t){var r=this;try{u.default.PAssert(834,e,"OPML requires a success callback")}catch(s){u.default.reportError(s)}try{u.default.PAssert(835,t,"OPML requires an error callback")}catch(s){u.default.reportError(s)}try{var a=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(a.onload=function(a){var o=a.target.result,s=r.opmlToDocument(o,"OPML Import");!0===s?e():t(s)},a.onerror=t,a.readAsText(o)):t("You must select a file before importing.")}catch(n){t(void 0,n)}}},{key:"opmlSave",value:function(e,t,r){try{u.default.PAssert(836,t,"OPML requires a success callback")}catch(a){u.default.reportError(a)}try{u.default.PAssert(837,r,"OPML requires an error callback")}catch(a){u.default.reportError(a)}u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("OPML Save: ",e),t()}},{key:"opmlToDocument",value:function(e,t){if(!e)return"Please enter your OPML in the box above.";var r;if((e.startsWith("<?xml ")||e.startsWith("<?opml ")||e.startsWith("<opml "))&&(r=u.default.loadXML(e)),r){m.d.beginAction(),g.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument(t),o=a.getRootItem();try{u.default.PAssert(838,o,"Root item must exist in order to import")}catch(n){u.default.reportError(n)}var s=v.a.parseOPML(r,o);return this.saveDocument(a),g.default.PaneUpdateBatcher.commitUpdateItems(),m.d.endAction(),!!s||"Error parsing OPML. Please validate your data."}return"Unable to load XML lib. Please update or try another browser."}},{key:"jsonLogin",value:function(e,t,r,a){try{u.default.PAssert(839,r,"JSON requires a success callback")}catch(n){u.default.reportError(n)}try{u.default.PAssert(840,a,"JSON requires an error callback")}catch(n){u.default.reportError(n)}var o=document.getElementById("importFileUploadButton"),s=!1;o.onchange=function(e){s=!0,r(e)},o.click();document.body.onfocus=function(){setTimeout((function(){s||a(!1),document.body.onfocus=void 0}),1e3)}}},{key:"jsonImport",value:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{var o=JSON.parse(a)}catch(s){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{v.a.parseJSON(o,!0).then((function(r){if(r){r.text=r.text||"Imported document",m.d.beginAction(),g.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach((function(e){h.a.cacheItem(e)}));var a=y.a.create(r);p.a.addDocument(a),g.default.PaneUpdateBatcher.commitUpdateItems(),m.d.endAction()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")}))}catch(n){return t("The JSON file has errors. The developers have been notified with details of the error.",n)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}}},{key:"jsonSave",value:function(e,t,r){try{u.default.PAssert(841,t,"JSON requires a success callback")}catch(a){u.default.reportError(a)}try{u.default.PAssert(842,r,"JSON requires an error callback")}catch(a){u.default.reportError(a)}t()}},{key:"gtasksLogin",value:function(e,t,r,a){var o=this;try{u.default.PAssert(847,r,"GTasks requires a success callback")}catch(s){u.default.reportError(s)}try{u.default.PAssert(848,a,"GTasks requires an error callback")}catch(s){u.default.reportError(s)}w.a.authAccountTemp([f.a.GScope.TasksRO],(function(e){e&&!e.error?(o.gtasks.token=e.access_token,r(e)):(u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("Error getting Google TaskRO permission: ",e),a("Unable to authenticate with Google. Please try again.",e))}))}},{key:"gtasksImport",value:function(e,t){var r=this;try{u.default.PAssert(849,e,"GTasks requires a success callback")}catch(o){u.default.reportError(o)}try{u.default.PAssert(850,t,"GTasks requires an error callback")}catch(o){u.default.reportError(o)}var a={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists((function(s){var n=0;try{u.default.PAssert(851,u.default.isArray(s),"List data must be an array")}catch(o){u.default.reportError(o)}for(var i=s.length,l=0,c=0;c<s.length;++c){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var d=s[c];a.remoteItems[d.id]={id:d.id,text:d.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},a.roots.push(d.id),r.gtasksGetTasks(d,(function(r,s){if(r){try{u.default.PAssert(852,u.default.isArray(r),"List data must be an array")}catch(o){u.default.reportError(o)}if(u.default.isArray(r)){for(var n=0,c=0;c<r.length;++c){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;var d=r[c];if(d&&"completed"!==d.status){a.remoteItems[d.id]={id:d.id,text:d.title,isComplete:"completed"===d.status,dateCompleted:d.completed?new Date(d.completed):void 0,isArchived:d.hidden,due:d.due?new Date(d.due):void 0,notes:d.notes,parent:d.parent||s.id,items:[]};var f=a.remoteItems[d.parent||s.id];f?f.items.push(d.id):a.unassigned.push(d.id)}}++l===i&&e(a)}else t("Invalid task list returned.")}else l++}),t)}}),t)}},{key:"gtasksGetLists",value:function(e,t){try{u.default.PAssert(853,e,"GTasks requires a success callback")}catch(r){u.default.reportError(r)}try{u.default.PAssert(854,t,"GTasks requires an error callback")}catch(r){u.default.reportError(r)}u.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=".concat(2e3,"&key=").concat(f.a.APIKey,"&access_token=").concat(this.gtasks.token)}).then(function(){var a=n()(o.a.mark((function a(s){var n;return o.a.wrap((function(a){for(var o=0;;){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;switch(a.prev=a.next){case 0:if(200!==s.status){a.next=14;break}return a.prev=1,a.next=4,s.json();case 4:n=a.sent;try{u.default.PAssert(855,n&&n.items,"Must have a valid set of data to get tasks from")}catch(r){u.default.reportError(r)}n&&n.items?e(n.items):t("Error getting data from remote server."),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),t(a.t0);case 12:a.next=16;break;case 14:u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("XHR Status: "+s.status),t("Error contacting remote server.");case 16:case"end":return a.stop()}}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}())}},{key:"gtasksGetTasks",value:function(e,t,r){try{u.default.PAssert(856,e,"GTasks requires a valid list to get tasks from")}catch(a){u.default.reportError(a)}try{u.default.PAssert(857,t,"GTasks requires a success callback")}catch(a){u.default.reportError(a)}try{u.default.PAssert(858,r,"GTasks requires an error callback")}catch(a){u.default.reportError(a)}u.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/".concat(e.id,"/tasks?maxResults=").concat(2500,"&key=").concat(f.a.APIKey,"&access_token=").concat(this.gtasks.token)}).then(function(){var s=n()(o.a.mark((function s(n){var i;return o.a.wrap((function(o){for(var s=0;;){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;switch(o.prev=o.next){case 0:if(200!==n.status){o.next=14;break}return o.prev=1,o.next=4,n.json();case 4:i=o.sent;try{u.default.PAssert(859,i,"Must have a valid array of tasks")}catch(a){u.default.reportError(a)}i&&i.items?t(i.items,e):t([],e),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(1),r(o.t0);case 12:o.next=16;break;case 14:u.default.shouldLog(f.a.LogLevels.Import)&&u.default.log("XHR Status: "+n.status),r("Error contacting remote server.");case 16:case"end":return o.stop()}}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}())}},{key:"gtasksSave",value:function(e,t,r){try{u.default.PAssert(860,t,"GTasks requires a success callback")}catch(l){u.default.reportError(l)}try{u.default.PAssert(861,r,"GTasks requires an error callback")}catch(l){u.default.reportError(l)}try{var a=0;try{u.default.PAssert(862,0===e.unassigned.length,"We should never have unassigned tasks")}catch(l){u.default.reportError(l)}m.d.beginAction(),g.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Google Tasks import"),s=o.getRootItem();try{u.default.PAssert(863,s,"Root item must exist in order to import")}catch(l){u.default.reportError(l)}for(var n=function t(r,a){var s=0,n=r.text;r.due&&(n+=" @"+_(r.due));var i=p.a.createVMLI({text:n,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:f.a.ChangeType.AllLocal,documentOwner:o});if(a.insertItem(i),r.notes){var l=p.a.createVMLI({text:r.notes,isNote:!0},{parent:i,changeType:f.a.ChangeType.AllLocal,documentOwner:o});i.setNote(l,f.a.ChangeType.Local)}for(var c=0;c<r.items.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;t(e.remoteItems[r.items[c]],i)}},i=0;i<e.roots.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;n(e.remoteItems[e.roots[i]],s)}o.parseAll(f.a.ChangeType.Local|f.a.ChangeType.All),this.saveDocument(o),g.default.PaneUpdateBatcher.commitUpdateItems(),m.d.endAction(),t()}catch(c){r(void 0,c)}}},{key:"trelloPreload",value:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,u.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",(function(){u.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",(function(){r.trello.isLoading=!1;try{u.default.PAssert(864,window.Trello,"The Trello client lib must have been loaded correctly")}catch(a){u.default.reportError(a)}window.Trello?e():t("Error loading Trello. Please try again.")}),(function(e){r.trello.isLoading=!1,t(e)}))}),(function(e){r.trello.isLoading=!1,t(e)})))}},{key:"trelloLogin",value:function(e,t,r,a){try{u.default.PAssert(865,window.Trello,"The Trello client lib was not properly loaded")}catch(o){u.default.reportError(o)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:a}):a("Error loading Trello. Please try again.")}},{key:"trelloImport",value:function(e,t){var r=this,a=[];window.Trello.get("members/me/boards",u.default.wrapFn((function(o){var s=0,n=(o=o||[]).length,i=0;function l(){n===i&&e(a)}function c(e){i++,l()}for(var d=0;d<o.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=o[d];if(u.closed)n--;else{var f={text:u.name,items:[]};a.push(f),r._handleBoard(f,u.id,t,c)}}l()}),t),t)}},{key:"_handleBoard",value:function(e,t,r,a){var o=this;window.Trello.get("boards/"+t+"/lists",u.default.wrapFn((function(t){var s=0,n=0,i=t.length;function l(){n===i&&a()}function c(){n++,l()}for(var d=0;d<t.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=t[d];if(u.closed)i--;else{var f={text:u.name,items:[]};e.items.push(f),o._handleList(f,u.id,r,c)}}l()}),r),r)}},{key:"_handleList",value:function(e,t,r,a){var o=this;window.Trello.get("lists/"+t+"/cards",u.default.wrapFn((function(t){var s=0,n=0,i=t.length;function l(){n===i&&a()}function c(){n++,l()}for(var d=0;d<t.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=t[d];if(u.closed)i--;else{var p={text:u.name};if(u.labels&&u.labels.length>0){for(var h=0,m="",v=0;v<u.labels.length;++v){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var g=u.labels[v];m+=f.a.TagPrefix+(g.name.length>0?g.name:g.color)+" "}p.text=m+p.text}if(u.due&&(u.date=new Date(u.due)),u.desc&&u.desc.length>0){var w=0;p.items=[];var y=u.desc.split("\n");for(v=0;v<y.length;++v){if(w++>5e3&&__infLoop&&__infLoop(w))throw new RangeError;var k=y[v];k&&k.length>0&&p.items.push({text:k})}}if(u.idChecklists&&u.idChecklists.length>0){var L=0;p.items||(p.items=[]);for(v=0;v<u.idChecklists.length;++v){if(L++>5e3&&__infLoop&&__infLoop(L))throw new RangeError;o._handleChecklist(p,u.idChecklists[v],r,c)}}else n++;e.items.push(p)}}l()}),r),r)}},{key:"_handleChecklist",value:function(e,t,r,a){window.Trello.get("checklists/"+t+"/",u.default.wrapFn((function(t){for(var r=0,o={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var n=t.checkItems[s],i="complete"===n.state;if(!i){var l={text:n.name,isComplete:i};o.items.push(l)}}e.items.push(o),a()}),r),r)}},{key:"trelloSave",value:function(e,t,r){try{var a=0;m.d.beginAction(),g.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Trello import"),s=function e(t,r){var a=p.a.createVMLI({text:t.text,isComplete:t.isComplete,isCollapsed:t.isCollapsed},{parent:r,changeType:f.a.ChangeType.AllLocal,documentOwner:o});if(r.insertItem(a),t.items)for(var s=0,n=0;n<t.items.length;++n){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;e(t.items[n],a)}return a},n=o.getRootItem();try{u.default.PAssert(866,n,"Root item must exist in order to import")}catch(l){u.default.reportError(l)}for(var i=0;i<e.length;++i){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;s(e[i],n)}this.saveDocument(o),g.default.PaneUpdateBatcher.commitUpdateItems(),m.d.endAction()}catch(c){return r(c)}t()}},{key:"todoistLogin",value:function(e,t,r,a){var o=this;try{u.default.PAssert(867,r,"Todoist requires a success callback")}catch(i){u.default.reportError(i)}try{u.default.PAssert(868,a,"Todoist requires an error callback")}catch(i){u.default.reportError(i)}var s="Dchs"+(new Date).getTime(),n="https://todoist.com/oauth/authorize?client_id=de93a2f2c51d4e2fa0412a79f88c7960&scope=data:read&state="+s;window.open(n,"modal-todoist","height=600,width=550");window.addEventListener("message",(function e(t){var n=u.default.getLocationOrigin(),i=!1;try{i=t.data.state===s}catch(c){u.default.reportError(c)}if(n&&i)if(window.removeEventListener("message",e),t.data.error)a("Error authenticating with Todoist");else{var l=t.data.code;l&&L.a.todoistImport(l).then((function(e){e.error?a("Error parsing response from remote server.",e.error):(console.log(e.value),o.todoist.data=e.value,r())}))}}))}},{key:"todoistImport",value:function(e,t){var r=0,a=0;try{u.default.PAssert(869,e,"Todoist requires a success callback")}catch(f){u.default.reportError(f)}try{u.default.PAssert(870,t,"Todoist requires an error callback")}catch(f){u.default.reportError(f)}for(var o=this.todoist.data,s={},n=0;n<o.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=o.projects[n];i.is_archived||i.is_deleted||(s[i.id]={id:i.id,name:i.name,items:[],itemMap:{},parent_id:i.parent_id,item_order:i.item_order})}for(var l=[],c=0;c<o.items.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var d=o.items[c];!s[d.project_id]||d.is_deleted||d.is_archived||d.checked||(!d.parent_id&&c>0&&!isNaN(d.indent)&&d.indent>1&&l[d.indent-1]&&(d.parent_id=l[d.indent-1].id),s[d.project_id].items.push(d),s[d.project_id].itemMap[d.id]=d,isNaN(d.indent)||(l[d.indent]=d))}e(s)}},{key:"todoistSave",value:function(e,t,r){var a=[f.a.VMLIFlag.None,f.a.VMLIFlag.None,f.a.VMLIFlag.P2,f.a.VMLIFlag.P1,f.a.VMLIFlag.P0];try{m.d.beginAction(),g.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Todoist import"),s=o.getRootItem();try{u.default.PAssert(871,s,"Root item must exist in order to import")}catch(b){u.default.reportError(b)}var n={},i={},l=function(e,t){var r=i[e.id],a=i[t.id];return r.item_order-a.item_order},c=function e(t,r){if(!n[r.id]){var s=r.parent_id;r.parent_id&&!n[r.id]&&e(t,t.itemMap[r.parent_id]);var c=n[s||r.project_id];try{u.default.PAssert(872,c,"parent item did not exist",s,r.project_id)}catch(b){u.default.reportError(b)}c&&function(e,t,r){if(t.priority&&(t.priority=a[t.priority]),t.due_date_utc){var s=k.a.parseText(_(new Date(t.due_date_utc)));s&&(t.date=s.toData(),t.content+=" "+f.a.CharDate)}var c=p.a.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority,date:t.date},{parent:r,changeType:f.a.ChangeType.AllLocal,documentOwner:o});n[t.id]=c,i[c.id]=t,r.insertSorted(c,l)}(0,r,c)}},d=function t(r){if(!n[r.id]){var a,c=r.parent_id,d=r.id;c?(n[c]||t(e[c]),a=n[c]):a=s;var u=p.a.createVMLI({text:r.name},{parent:a,changeType:f.a.ChangeType.AllLocal,documentOwner:o});n[d]=u,i[u.id]=r,a.insertSorted(u,l)}};for(var h in e)if(e.hasOwnProperty(h)){var v=0,w=e[h],y=w.items;d(w);for(var L=0;L<y.length;L++){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;c(w,y[L])}}this.saveDocument(o),g.default.PaneUpdateBatcher.commitUpdateItems(),m.d.endAction()}catch(E){return r(E)}t()}},{key:"createDocument",value:function(e){return p.a.createEmptyDocument(e,p.a.getDefaultBacking())}},{key:"saveDocument",value:function(e){p.a.addDocument(e)}},{key:"runImport",value:function(e,t,r,a,o){e.login(t,r,(function(){e.import((function(t){e.save(t,(function(){a()}),o)}),o)}),o)}}]),e}();t.default=b}}]);
