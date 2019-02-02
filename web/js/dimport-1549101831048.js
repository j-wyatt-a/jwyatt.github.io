(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{631:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r(1),s=r(18),i=r(25),n=r(6),l=r(91),d=r(3),c=r(579),u=r.n(c),f=r(37),p=r(63);function h(){this.workflowy={login:this.workflowyLogin.bind(this),import:this.workflowyImport.bind(this),save:this.workflowySave.bind(this)},this.wunderlist={login:this.wunderlistLogin.bind(this),import:this.wunderlistImport.bind(this),save:this.wunderlistSave.bind(this)},this.opml={login:this.opmlLogin.bind(this),import:this.opmlImport.bind(this),save:this.opmlSave.bind(this)},this.json={login:this.jsonLogin.bind(this),import:this.jsonImport.bind(this),save:this.jsonSave.bind(this)},this.gtasks={login:this.gtasksLogin.bind(this),import:this.gtasksImport.bind(this),save:this.gtasksSave.bind(this)},this.trello={preload:this.trelloPreload.bind(this),login:this.trelloLogin.bind(this),import:this.trelloImport.bind(this),save:this.trelloSave.bind(this)},this.todoist={login:this.todoistLogin.bind(this),import:this.todoistImport.bind(this),save:this.todoistSave.bind(this)}}function m(e){return e.toString(d.default.International.getFormat(o.a.DFormat.MonthDay))}h.prototype={workflowyLogin:function(e,t,r,s){try{a.default.PAssert(1210,r,"Workflowy requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(1211,s,"Workflowy requires an error callback")}catch(i){a.default.reportError(i)}return e?t?void a.default.XHR_PrivateAPI({type:"POST",path:"/oauth/workflowy",data:{username:e,password:t},cb:function(e){if(a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Workflowy Login Response: ",e),200===e.status){try{var t=JSON.parse(e.response);this.workflowy.data=JSON.parse(t.data)}catch(l){return a.default.reportError(l),s("Error parsing successful response from server. The developers have been notified with details of the error.")}return!this.workflowy.data||this.workflowy.data.error?s("Invalid username or password."):r()}var i;a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+e.status);try{var n=JSON.parse(e.response);switch(n.code){case o.a.PrivateAPIErrorCodes.InvalidParameter:i="Must specify a username and password.";break;case o.a.PrivateAPIErrorCodes.UnauthorizedUser:i="Invalid username or password.";break;case o.a.PrivateAPIErrorCodes.ErrorContactingRemote:i=n.data;break;default:i="Error contacting server. The developers have been notified with details of the error."}}catch(l){i="Error parsing error response from server. The developers have been notified with details of the error.",a.default.reportError(l)}return s(i)}.bind(this)}):s("Must provide a password."):s("Must provide a valid username.")},workflowyImport:function(e,t){try{a.default.PAssert(1212,e,"Workflowy requires a success callback")}catch(r){a.default.reportError(r)}try{a.default.PAssert(1213,t,"Workflowy requires an error callback")}catch(r){a.default.reportError(r)}return e(this.workflowy.data)},workflowyReplaceFormatting:function(e){return e.replace(/<b>|<\/b>/g,"**").replace(/<i>|<\/i>/g,"*").replace(/<u>|<\/u>/g,"__")},workflowyIterateItem:function(e,t){try{a.default.PAssert(1214,e&&void 0!==e.nm,"All items must exist and have stars and text, children and notes are optional",e)}catch(p){a.default.reportError(p)}try{a.default.PAssert(1216,t,"A valid parent must always be defined")}catch(p){a.default.reportError(p)}if(e&&t)try{var r=!!e.cp;if(!r){var i=o.a.Prefix.Bullet+" "+a.default.unescape(this.workflowyReplaceFormatting(e.nm)),n=s.a.createVMLI({text:i,isComplete:r},{parent:t,changeType:o.a.ChangeType.AllLocal});if(t.insertItem(n),e.no){var l=a.default.unescape(e.no),d=s.a.createVMLI({text:l,isNote:!0},{parent:n,changeType:o.a.ChangeType.AllLocal});n.setNote(d,o.a.ChangeType.Local)}if(e.ch)for(var c=0,u=0;u<e.ch.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=e.ch[u];this.workflowyIterateItem(f,n)}}}catch(h){throw a.default.reportError(h),h}},workflowySave:function(e,t,r){try{a.default.PAssert(1217,e,"Workflowy requires having valid data")}catch(p){a.default.reportError(p)}try{a.default.PAssert(1218,t,"Workflowy requires a success callback")}catch(p){a.default.reportError(p)}try{a.default.PAssert(1219,r,"Workflowy requires an error callback")}catch(p){a.default.reportError(p)}try{try{a.default.PAssert(1220,e.projectTreeData,"Missing Workflowy projectTreeData")}catch(p){a.default.reportError(p)}try{a.default.PAssert(1221,e.projectTreeData.mainProjectTreeInfo,"Missing Workflowy mainProjectTreeInfo")}catch(p){a.default.reportError(p)}var i=e.projectTreeData.mainProjectTreeInfo;try{a.default.PAssert(1222,i.rootProjectChildren,"Missing Workflowy rootProjectChildren")}catch(p){a.default.reportError(p)}n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var l=s.a.createEmptyDocument("Workflowy import").getRootItem();try{a.default.PAssert(1223,l,"Root item must exist in order to import")}catch(p){a.default.reportError(p)}try{for(var c=0,u=0;u<i.rootProjectChildren.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=i.rootProjectChildren[u];this.workflowyIterateItem(f,l)}a.default.vmMain.parseSubtree(l,o.a.ChangeType.Local|o.a.ChangeType.All)}catch(h){return a.default.reportError(h),r("There was an error iterating your Workflowy items. The developers have been notified with daetails of the error.",h)}return d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),t()}catch(m){return a.default.reportError(m),r("There was an error parsing your Workflowy data. The developers have been notified with details of the error.",m)}},wunderlistLogin:function(e,t,r,s){try{a.default.PAssert(1224,r,"Wunderlist requires a success callback")}catch(u){a.default.reportError(u)}try{a.default.PAssert(1225,s,"Wunderlist requires an error callback")}catch(u){a.default.reportError(u)}var i="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",n=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=i;var l="Dchs"+(new Date).getTime(),d="https://www.wunderlist.com/oauth/authorize?client_id="+i+"&redirect_uri="+n+"&state="+l;window.open(d,"modal-wunderlist","height=600,width=550");var c=function(e){var t=a.default.getLocationOrigin(),i=!1;try{i=e.data.state===l}catch(d){a.default.reportError(d)}if(t&&i)if(window.removeEventListener("message",c),e.data.error)s("Error authenticating with Wunderlist");else{var n=e.data.code;n&&a.default.XHR_PrivateAPI({type:"POST",path:"/oauth/wunderlist",data:{code:n},requireAuth:!0,cb:function(e){if(a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Wunderlist Login Reponse: ",e),200===e.status){try{var t=JSON.parse(e.response).data;this.wunderlist.token=t.access_token}catch(d){s("Error parsing response from remote server.",d)}this.wunderlist.token?r():s("Invalid username or password.")}else s("Error contacting remote server.")}.bind(this)})}}.bind(this);window.addEventListener("message",c)},wunderlistImport:function(e,t){var r=this;try{a.default.PAssert(1226,e,"Wunderlist requires a success callback")}catch(n){a.default.reportError(n)}try{a.default.PAssert(1227,t,"Wunderlist requires an error callback")}catch(n){a.default.reportError(n)}var s={inbox:{title:"inbox",items:{},p:0}},i=0;this.wunderlistGetLists(function(n){var l=0;a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Get ListData Response: ",n);for(var d=function(){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;var d=n[c];s[d.id]={title:d.title,items:{},p:d.position},r.wunderlistGetTasks(d.id,function(l){var c=0;a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Get TaskData Response: ",l);for(var u=0;u<l.length;++u){if(c++>5e3&&__infLoop&&__infLoop(c))throw new RangeError;var f=l[u];if(f.parent_id){var p=s[f.list_id].items[f.parent_id];p?(p.items||(p.items=[]),p.items.push(f)):s[f.list_id].items[f.parent_id]={items:[f]}}else{var h=s[f.list_id].items[f.id];s[f.list_id].items[f.id]=f,h&&(s[f.list_id].items[f.id].items=h.items)}}r.wunderlistGetSubtasks(d.id,function(t){for(var r=0,a=0;a<t.length;++a){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var o=t[a],l=s[o.list_id];if(l)if(o.parent_id){var d=l.items[o.parent_id];d?(d.items||(d.items=[]),d.items.push(o)):l.items[o.parent_id]={items:[o]}}else{var c=l.items[o.id];l.items[o.id]=o,c&&(l.items[o.id].items=c.items)}}++i===n.length&&e(s)},t)},t)},c=0;c<n.length;++c)d()},t)},wunderlistGetLists:function(e,t){try{a.default.PAssert(1228,e,"Wunderlist requires a success callback")}catch(r){a.default.reportError(r)}try{a.default.PAssert(1229,t,"Wunderlist requires an error callback")}catch(r){a.default.reportError(r)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(r){if(200===r.status){var s;try{s=JSON.parse(r.response)}catch(i){t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",i)}e(s)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+r.status),t("Error contacting remote server.")}.bind(this)})},wunderlistGetTasks:function(e,t,r){try{a.default.PAssert(1230,t,"Wunderlist requires a success callback")}catch(s){a.default.reportError(s)}try{a.default.PAssert(1231,r,"Wunderlist requires an error callback")}catch(s){a.default.reportError(s)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var s=JSON.parse(e.response);t(s)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}.bind(this)})},wunderlistGetSubtasks:function(e,t,r){try{a.default.PAssert(1232,t,"Wunderlist requires a success callback")}catch(s){a.default.reportError(s)}try{a.default.PAssert(1233,r,"Wunderlist requires an error callback")}catch(s){a.default.reportError(s)}a.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var s=JSON.parse(e.response);t(s)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}.bind(this)})},wunderlistSave:function(e,t,r){try{a.default.PAssert(1234,t,"Wunderlist requires a success callback")}catch(l){a.default.reportError(l)}try{a.default.PAssert(1235,r,"Wunderlist requires an error callback")}catch(l){a.default.reportError(l)}try{n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var i=s.a.createEmptyDocument("Wunderlist import").getRootItem();try{a.default.PAssert(1236,i,"Root item must exist in order to import")}catch(l){a.default.reportError(l)}Object.keys(e).forEach(function(t){var r=e[t];a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("List: ",r);var n=r.title,l=s.a.createVMLI({text:n},{parent:i,changeType:o.a.ChangeType.AllLocal});i.insertItem(l,0),Object.keys(r.items).forEach(function(e){var t=r.items[e];a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("  Task: ",t);var i=s.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:l,changeType:o.a.ChangeType.AllLocal});if(l.insertItem(i),t.note){var n=s.a.createVMLI({text:t.note},{parent:i,changeType:o.a.ChangeType.AllLocal});i.insertItem(n)}if(t.items)for(var d=0,c=0;c<t.items.length;++c){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var u=t.items[c];a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("    SubTask: ",u);var f=s.a.createVMLI({text:u.title,isComplete:!!u.completed_at,dateCompleted:u.completed_at,isStarred:u.starred},{parent:i,changeType:o.a.ChangeType.AllLocal});i.insertItem(f)}})}),a.default.vmMain.parseSubtree(i,o.a.ChangeType.Local|o.a.ChangeType.All),d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),t()}catch(c){r(void 0,c)}},opmlLogin:function(e,t,r,o){try{a.default.PAssert(1237,r,"OPML requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(1238,o,"OPML requires an error callback")}catch(i){a.default.reportError(i)}var s=document.getElementById("importFileUploadButton");s.onchange=r,s.click()},opmlImport:function(e,t){try{a.default.PAssert(1239,e,"OPML requires a success callback")}catch(i){a.default.reportError(i)}try{a.default.PAssert(1240,t,"OPML requires an error callback")}catch(i){a.default.reportError(i)}try{var r=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(r.onload=function(r){var o,c=r.target.result;if((c.startsWith("<?xml ")||c.startsWith("<?opml ")||c.startsWith("<opml "))&&(o=a.default.loadXML(c)),o){n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var u=s.a.createEmptyDocument("OPML import").getRootItem();try{a.default.PAssert(1241,u,"Root item must exist in order to import")}catch(i){a.default.reportError(i)}var f=l.a.parseOPML(o,u);d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),f?e():t("Error parsing OPML. Please validate your data.")}else t("Unable to load XML lib. Please update or try another browser.")},r.onerror=t,r.readAsText(o)):t("You must select a file before importing.")}catch(c){t(void 0,c)}},opmlSave:function(e,t,r){try{a.default.PAssert(1242,t,"OPML requires a success callback")}catch(s){a.default.reportError(s)}try{a.default.PAssert(1243,r,"OPML requires an error callback")}catch(s){a.default.reportError(s)}a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("OPML Save: ",e),t()},jsonLogin:function(e,t,r,o){try{a.default.PAssert(1244,r,"JSON requires a success callback")}catch(n){a.default.reportError(n)}try{a.default.PAssert(1245,o,"JSON requires an error callback")}catch(n){a.default.reportError(n)}var s=document.getElementById("importFileUploadButton"),i=!1;s.onchange=function(e){i=!0,r(e)},s.click();document.body.onfocus=function(){setTimeout(function(){i||o(!1),document.body.onfocus=void 0},1e3)}},jsonImport:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{var o=JSON.parse(a)}catch(c){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{l.a.parseJSON(o,!0).then(function(r){if(r){r.text=r.text||"Imported document",n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach(function(e){i.a.cacheItem(e)});var a=p.a.create(r);s.a.addDocument(a),d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")})}catch(u){return t("The JSON file has errors. The developers have been notified with details of the error.",u)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}},jsonSave:function(e,t,r){try{a.default.PAssert(1246,t,"JSON requires a success callback")}catch(o){a.default.reportError(o)}try{a.default.PAssert(1247,r,"JSON requires an error callback")}catch(o){a.default.reportError(o)}t()},gtasksLogin:function(e,t,r,s){var i=this;try{a.default.PAssert(1252,r,"GTasks requires a success callback")}catch(n){a.default.reportError(n)}try{a.default.PAssert(1253,s,"GTasks requires an error callback")}catch(n){a.default.reportError(n)}f.a.authAccountTemp([o.a.GScope.TasksRO],function(e){e&&!e.error?(i.gtasks.token=e,r(e)):(a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("Error getting Google TaskRO permission: ",e),s("Unable to authenticate with Google. Please try again.",e))})},gtasksImport:function(e,t){try{a.default.PAssert(1254,e,"GTasks requires a success callback")}catch(o){a.default.reportError(o)}try{a.default.PAssert(1255,t,"GTasks requires an error callback")}catch(o){a.default.reportError(o)}var r={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists(function(s){var i=0;try{a.default.PAssert(1256,a.default.isArray(s),"List data must be an array")}catch(o){a.default.reportError(o)}for(var n=s.length,l=0,d=0;d<s.length;++d){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var c=s[d];r.remoteItems[c.id]={id:c.id,text:c.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},r.roots.push(c.id),this.gtasksGetTasks(c,function(s,i){if(s){try{a.default.PAssert(1257,a.default.isArray(s),"List data must be an array")}catch(o){a.default.reportError(o)}if(a.default.isArray(s)){for(var d=0,c=0;c<s.length;++c){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var u=s[c];if(u&&"completed"!==u.status){r.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||i.id,items:[]};var f=r.remoteItems[u.parent||i.id];f?f.items.push(u.id):r.unassigned.push(u.id)}}++l===n&&e(r)}else t("Invalid task list returned.")}else l++}.bind(this),t)}}.bind(this),t)},gtasksGetLists:function(e,t){try{a.default.PAssert(1258,e,"GTasks requires a success callback")}catch(r){a.default.reportError(r)}try{a.default.PAssert(1259,t,"GTasks requires an error callback")}catch(r){a.default.reportError(r)}a.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=2000&key="+o.a.APIKey+"&access_token="+this.gtasks.token,cb:function(s){if(200===s.status)try{var i=JSON.parse(s.response);try{a.default.PAssert(1260,i&&i.items,"Must have a valid set of data to get tasks from")}catch(r){a.default.reportError(r)}i&&i.items?e(i.items):t("Error getting data from remote server.")}catch(n){t(n)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+s.status),t("Error contacting remote server.")}})},gtasksGetTasks:function(e,t,r){try{a.default.PAssert(1261,e,"GTasks requires a valid list to get tasks from")}catch(s){a.default.reportError(s)}try{a.default.PAssert(1262,t,"GTasks requires a success callback")}catch(s){a.default.reportError(s)}try{a.default.PAssert(1263,r,"GTasks requires an error callback")}catch(s){a.default.reportError(s)}a.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/"+e.id+"/tasks?maxResults=2500&key="+o.a.APIKey+"&access_token="+this.gtasks.token,cb:function(i){if(200===i.status)try{var n=JSON.parse(i.response);try{a.default.PAssert(1264,n,"Must have a valid array of tasks")}catch(s){a.default.reportError(s)}n&&n.items?t(n.items,e):t([],e)}catch(l){r(l)}else a.default.shouldLog(o.a.LogLevels.Import)&&a.default.log("XHR Status: "+i.status),r("Error contacting remote server.")}})},gtasksSave:function(e,t,r){try{a.default.PAssert(1265,t,"GTasks requires a success callback")}catch(f){a.default.reportError(f)}try{a.default.PAssert(1266,r,"GTasks requires an error callback")}catch(f){a.default.reportError(f)}try{var i=0,l=function t(r,a){var i=0,n=r.text;r.due&&(n+=" @"+m(r.due));var l=s.a.createVMLI({text:n,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:o.a.ChangeType.AllLocal});if(a.insertItem(l),r.notes){var d=s.a.createVMLI({text:r.notes,isNote:!0},{parent:l,changeType:o.a.ChangeType.AllLocal});l.setNote(d,o.a.ChangeType.Local)}for(var c=0;c<r.items.length;++c){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;t(e.remoteItems[r.items[c]],l)}};try{a.default.PAssert(1267,0===e.unassigned.length,"We should never have unassigned tasks")}catch(f){a.default.reportError(f)}n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var c=s.a.createEmptyDocument("Google Tasks import").getRootItem();try{a.default.PAssert(1268,c,"Root item must exist in order to import")}catch(f){a.default.reportError(f)}for(var u=0;u<e.roots.length;++u){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;l(e.remoteItems[e.roots[u]],c)}a.default.vmMain.parseSubtree(c,o.a.ChangeType.Local|o.a.ChangeType.All),d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction(),t()}catch(p){r(void 0,p)}},trelloPreload:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,a.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",function(){a.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",function(){r.trello.isLoading=!1;try{a.default.PAssert(1269,window.Trello,"The Trello client lib must have been loaded correctly")}catch(o){a.default.reportError(o)}window.Trello?e():t("Error loading Trello. Please try again.")},function(e){r.trello.isLoading=!1,t(e)})},function(e){r.trello.isLoading=!1,t(e)}))},trelloLogin:function(e,t,r,o){try{a.default.PAssert(1270,window.Trello,"The Trello client lib was not properly loaded")}catch(s){a.default.reportError(s)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:o}):o("Error loading Trello. Please try again.")},trelloImport:function(e,t){var r=this,o=[];window.Trello.get("members/me/boards",a.default.wrapFn(function(a){var s=0,i=(a=a||[]).length,n=0;function l(){i===n&&e(o)}function d(e){n++,l()}for(var c=0;c<a.length;++c){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=a[c];if(u.closed)i--;else{var f={text:u.name,items:[]};o.push(f),r._handleBoard(f,u.id,t,d)}}l()},t),t)},_handleBoard:function(e,t,r,o){var s=this;window.Trello.get("boards/"+t+"/lists",a.default.wrapFn(function(t){var a=0,i=0,n=t.length;function l(){i===n&&o()}function d(){i++,l()}for(var c=0;c<t.length;++c){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=t[c];if(u.closed)n--;else{var f={text:u.name,items:[]};e.items.push(f),s._handleList(f,u.id,r,d)}}l()},r),r)},_handleList:function(e,t,r,s){var i=this;window.Trello.get("lists/"+t+"/cards",a.default.wrapFn(function(t){var a=0,n=0,l=t.length;function d(){n===l&&s()}function c(){n++,d()}for(var u=0;u<t.length;++u){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var f=t[u];if(f.closed)l--;else{var p={text:f.name};if(f.labels&&f.labels.length>0){for(var h=0,m="",g=0;g<f.labels.length;++g){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var v=f.labels[g];m+=o.a.TagPrefix+(v.name.length>0?v.name:v.color)+" "}p.text=m+p.text}if(f.due&&(f.date=new Date(f.due)),f.desc&&f.desc.length>0){var w=0;p.items=[];var y=f.desc.split("\n");for(g=0;g<y.length;++g){if(w++>5e3&&__infLoop&&__infLoop(w))throw new RangeError;var L=y[g];L&&L.length>0&&p.items.push({text:L})}}if(f.idChecklists&&f.idChecklists.length>0){var _=0;p.items||(p.items=[]);for(g=0;g<f.idChecklists.length;++g){if(_++>5e3&&__infLoop&&__infLoop(_))throw new RangeError;i._handleChecklist(p,f.idChecklists[g],r,c)}}else n++;e.items.push(p)}}d()},r),r)},_handleChecklist:function(e,t,r,o){window.Trello.get("checklists/"+t+"/",a.default.wrapFn(function(t){for(var r=0,a={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t.checkItems[s],n="complete"===i.state;if(!n){var l={text:i.name,isComplete:n};a.items.push(l)}}e.items.push(a),o()},r),r)},trelloSave:function(e,t,r){function i(e,t){var r=s.a.createVMLI({text:e.text,isComplete:e.isComplete,isCollapsed:e.isCollapsed},{parent:t,changeType:o.a.ChangeType.AllLocal});if(t.insertItem(r),e.items)for(var a=0,n=0;n<e.items.length;++n){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;i(e.items[n],r)}return r}try{var l=0;n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var c=s.a.createEmptyDocument("Trello import").getRootItem();try{a.default.PAssert(1271,c,"Root item must exist in order to import")}catch(f){a.default.reportError(f)}for(var u=0;u<e.length;++u){if(l++>5e3&&__infLoop&&__infLoop(l))throw new RangeError;i(e[u],c)}d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction()}catch(p){return r(p)}t()},todoistLogin:function(e,t,r,o){var s=this;try{a.default.PAssert(1272,r,"Todoist requires a success callback")}catch(d){a.default.reportError(d)}try{a.default.PAssert(1273,o,"Todoist requires an error callback")}catch(d){a.default.reportError(d)}var i="localhost"===window.location.hostname?"5d361221eddb4bcdb018457c7c74e698":"b701ac04f4df419ca4144ab208a9fb06",n="Dchs"+(new Date).getTime(),l="https://todoist.com/oauth/authorize?client_id="+i+"&scope=data:read&state="+n;window.open(l,"modal-todoist","height=600,width=550");window.addEventListener("message",function e(t){var i=a.default.getLocationOrigin(),l=!1;try{l=t.data.state===n}catch(c){a.default.reportError(c)}if(i&&l)if(window.removeEventListener("message",e),t.data.error)o("Error authenticating with Todoist");else{var d=t.data.code;d&&a.default.XHR_PrivateAPI({type:"POST",path:"/oauth/todoist",data:{code:d},requireAuth:!0,cb:function(e){if(200===e.status){try{var t=JSON.parse(e.response).data;s.todoist.data=t}catch(c){o("Error parsing response from remote server.",c)}s.todoist.data?r():o("Invalid username or password")}else o("Error contacting remote server.")}})}})},todoistImport:function(e,t){var r=0,o=0;try{a.default.PAssert(1274,e,"Todoist requires a success callback")}catch(f){a.default.reportError(f)}try{a.default.PAssert(1275,t,"Todoist requires an error callback")}catch(f){a.default.reportError(f)}for(var s=this.todoist.data,i={},n=0;n<s.projects.length;++n){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var l=s.projects[n];l.is_archived||l.is_deleted||(i[l.id]={id:l.id,name:l.name,items:[],itemMap:{},parent_id:l.parent_id,item_order:l.item_order})}for(var d=[],c=0;c<s.items.length;++c){if(o++>5e3&&__infLoop&&__infLoop(o))throw new RangeError;var u=s.items[c];!i[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&c>0&&!isNaN(u.indent)&&u.indent>1&&d[u.indent-1]&&(u.parent_id=d[u.indent-1].id),i[u.project_id].items.push(u),i[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(d[u.indent]=u))}e(i)},todoistSave:function(e,t,r){var i=[o.a.VMLIFlag.None,o.a.VMLIFlag.None,o.a.VMLIFlag.P2,o.a.VMLIFlag.P1,o.a.VMLIFlag.P0];try{n.e.beginAction(),d.default.PaneUpdateBatcher.beginUpdateItems();var l=s.a.createEmptyDocument("Todoist import").getRootItem();try{a.default.PAssert(1276,l,"Root item must exist in order to import")}catch(_){a.default.reportError(_)}var c={},u={},f=function(e,t){var r=u[e.id],a=u[t.id];return r.item_order-a.item_order},p=function e(t,r){if(!c[r.id]){var n=r.parent_id;r.parent_id&&!c[r.id]&&e(t,t.itemMap[r.parent_id]);var l=c[n||r.project_id];try{a.default.PAssert(1277,l,"parent item did not exist",n,r.project_id)}catch(_){a.default.reportError(_)}l&&function(e,t,r){t.priority&&(t.priority=i[t.priority]),t.due_date_utc&&(t.content+=" @"+m(new Date(t.due_date_utc)));var a=s.a.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority},{parent:r,changeType:o.a.ChangeType.AllLocal});c[t.id]=a,u[a.id]=t,r.insertSorted(a,f)}(0,r,l)}},h=function t(r){if(!c[r.id]){var a,i=r.parent_id,n=r.id;i?(c[i]||t(e[i]),a=c[i]):a=l;var d=s.a.createVMLI({text:r.name},{parent:a,changeType:o.a.ChangeType.AllLocal});c[n]=d,u[d.id]=r,a.insertSorted(d,f)}};for(var g in e)if(e.hasOwnProperty(g)){var v=0,w=e[g],y=w.items;h(w);for(var L=0;L<y.length;L++){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;p(w,y[L])}}d.default.PaneUpdateBatcher.commitUpdateItems(),n.e.endAction()}catch(k){return r(k)}t()},_createCSVEntry:function(e,t){for(var r=0,a={},o=0;o<e.length;++o){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;a[e[o]]=t[o]}return a},parseCSV:function(e){for(var t=0,r=u.a.parse(e),a=["Area","Client","Contacts","Category","Context","Created By","Date Created","Date Updated","Delegated To","Start Date","Due Date","Links","Notes","Originating Entry","Parent Entries","Priority","Short Description","Title","Star","Status","Website References"],o=[],s=r.data[0],i=0;i<s.length;++i){if(t++>5e3&&__infLoop&&__infLoop(t))throw new RangeError;a.indexOf(s[i])<0?console.log("Unknown CSV Headers: ",s[i]):o.indexOf(s[i])>=0&&o.remove(s[i])}if(0===o.length){var n=0,l=[];for(i=1;i<r.data.length;++i){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;l.push(this._createCSVEntry(s,r.data[i]))}}else var d="Missing required export fields: "+o.join(", ");if(s.indexOf("Short Descrption")<0&&s.indexOf("Title")<0)d="Missing required export fields: Short Descrption OR Title.";return l||d}},t.default=h}}]);
