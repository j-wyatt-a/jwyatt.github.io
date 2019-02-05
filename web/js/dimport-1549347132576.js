(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{632:function(e,t,r){"use strict";r.r(t);var a=r(6),o=r.n(a),s=r(7),i=r.n(s),n=r(0),l=r(1),c=r(18),d=r(25),u=r(8),f=r(91),p=r(3),h=r(580),m=r.n(h),g=r(36),v=r(64);function y(e){return e.toString(p.default.International.getFormat(l.a.DFormat.MonthDay))}var w=function(){function e(){var t=this;o()(this,e);["workflowy","wunderlist","opml","json","gtasks","trello","todoist"].forEach(function(e){return t.register(e)})}return i()(e,[{key:"register",value:function(e){var t={login:this[e+"Login"].bind(this),import:this[e+"Import"].bind(this),save:this[e+"Save"].bind(this)};this[e+"Preload"]&&(t.preload=this[e+"Preload"].bind(this)),this[e]=t}},{key:"workflowyLogin",value:function(e,t,r,a){try{n.default.PAssert(1581,r,"Workflowy requires a success callback")}catch(o){n.default.reportError(o)}try{n.default.PAssert(1582,a,"Workflowy requires an error callback")}catch(o){n.default.reportError(o)}return e?t?void 0:a("Must provide a password."):a("Must provide a valid username.")}},{key:"workflowyImport",value:function(e,t){try{n.default.PAssert(1583,e,"Workflowy requires a success callback")}catch(r){n.default.reportError(r)}try{n.default.PAssert(1584,t,"Workflowy requires an error callback")}catch(r){n.default.reportError(r)}return e(this.workflowy.data)}},{key:"workflowyReplaceFormatting",value:function(e){return e.replace(/<b>|<\/b>/g,"**").replace(/<i>|<\/i>/g,"*").replace(/<u>|<\/u>/g,"__")}},{key:"workflowyIterateItem",value:function(e,t){try{n.default.PAssert(1585,e&&void 0!==e.nm,"All items must exist and have stars and text, children and notes are optional",e)}catch(p){n.default.reportError(p)}try{n.default.PAssert(1587,t,"A valid parent must always be defined")}catch(p){n.default.reportError(p)}if(e&&t)try{var r=!!e.cp;if(!r){var a=l.a.Prefix.Bullet+" "+n.default.unescape(this.workflowyReplaceFormatting(e.nm)),o=c.a.createVMLI({text:a,isComplete:r},{parent:t,changeType:l.a.ChangeType.AllLocal,documentOwner:t.getDocumentOwner()});if(t.insertItem(o),e.no){var s=n.default.unescape(e.no),i=c.a.createVMLI({text:s,isNote:!0},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:t.getDocumentOwner()});o.setNote(i,l.a.ChangeType.Local)}if(e.ch)for(var d=0,u=0;u<e.ch.length;++u){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var f=e.ch[u];this.workflowyIterateItem(f,o)}}}catch(h){throw n.default.reportError(h),h}}},{key:"workflowySave",value:function(e,t,r){try{n.default.PAssert(1588,e,"Workflowy requires having valid data")}catch(f){n.default.reportError(f)}try{n.default.PAssert(1589,t,"Workflowy requires a success callback")}catch(f){n.default.reportError(f)}try{n.default.PAssert(1590,r,"Workflowy requires an error callback")}catch(f){n.default.reportError(f)}try{try{n.default.PAssert(1591,e.projectTreeData,"Missing Workflowy projectTreeData")}catch(f){n.default.reportError(f)}try{n.default.PAssert(1592,e.projectTreeData.mainProjectTreeInfo,"Missing Workflowy mainProjectTreeInfo")}catch(f){n.default.reportError(f)}var a=e.projectTreeData.mainProjectTreeInfo;try{n.default.PAssert(1593,a.rootProjectChildren,"Missing Workflowy rootProjectChildren")}catch(f){n.default.reportError(f)}u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Workflowy import"),s=o.getRootItem();try{n.default.PAssert(1594,s,"Root item must exist in order to import")}catch(f){n.default.reportError(f)}try{for(var i=0,c=0;c<a.rootProjectChildren.length;++c){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var d=a.rootProjectChildren[c];this.workflowyIterateItem(d,s)}o.parseAll(l.a.ChangeType.Local|l.a.ChangeType.All)}catch(h){return n.default.reportError(h),r("There was an error iterating your Workflowy items. The developers have been notified with daetails of the error.",h)}return this.saveDocument(o),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),t()}catch(m){return n.default.reportError(m),r("There was an error parsing your Workflowy data. The developers have been notified with details of the error.",m)}}},{key:"wunderlistLogin",value:function(e,t,r,a){try{n.default.PAssert(1595,r,"Wunderlist requires a success callback")}catch(c){n.default.reportError(c)}try{n.default.PAssert(1596,a,"Wunderlist requires an error callback")}catch(c){n.default.reportError(c)}var o="localhost"===window.location.hostname?"f06a1334e250a9bb0b03":"ad988eeb954e9aabc288",s=window.location.protocol+"//"+window.location.host+"/oauthRelay.html";this.wunderlist.clientId=o;var i="Dchs"+(new Date).getTime(),l="https://www.wunderlist.com/oauth/authorize?client_id="+o+"&redirect_uri="+s+"&state="+i;window.open(l,"modal-wunderlist","height=600,width=550");window.addEventListener("message",function e(t){var r=n.default.getLocationOrigin(),o=!1;try{o=t.data.state===i}catch(s){n.default.reportError(s)}r&&o&&(window.removeEventListener("message",e),t.data.error?a("Error authenticating with Wunderlist"):t.data.code)})}},{key:"wunderlistImport",value:function(e,t){var r=this;try{n.default.PAssert(1597,e,"Wunderlist requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(1598,t,"Wunderlist requires an error callback")}catch(s){n.default.reportError(s)}var a={inbox:{title:"inbox",items:{},p:0}},o=0;this.wunderlistGetLists(function(s){var i=0;n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("Get ListData Response: ",s);for(var c=function(){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var c=s[d];a[c.id]={title:c.title,items:{},p:c.position},r.wunderlistGetTasks(c.id,function(i){var d=0;n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("Get TaskData Response: ",i);for(var u=0;u<i.length;++u){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var f=i[u];if(f.parent_id){var p=a[f.list_id].items[f.parent_id];p?(p.items||(p.items=[]),p.items.push(f)):a[f.list_id].items[f.parent_id]={items:[f]}}else{var h=a[f.list_id].items[f.id];a[f.list_id].items[f.id]=f,h&&(a[f.list_id].items[f.id].items=h.items)}}r.wunderlistGetSubtasks(c.id,function(t){for(var r=0,i=0;i<t.length;++i){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var n=t[i],l=a[n.list_id];if(l)if(n.parent_id){var c=l.items[n.parent_id];c?(c.items||(c.items=[]),c.items.push(n)):l.items[n.parent_id]={items:[n]}}else{var d=l.items[n.id];l.items[n.id]=n,d&&(l.items[n.id].items=d.items)}}++o===s.length&&e(a)},t)},t)},d=0;d<s.length;++d)c()},t)}},{key:"wunderlistGetLists",value:function(e,t){try{n.default.PAssert(1599,e,"Wunderlist requires a success callback")}catch(r){n.default.reportError(r)}try{n.default.PAssert(1600,t,"Wunderlist requires an error callback")}catch(r){n.default.reportError(r)}n.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/lists",headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(r){if(200===r.status){var a;try{a=JSON.parse(r.response)}catch(o){t("There was an error parsing your Wunderlist data. The developers have been notified with details of the error.",o)}e(a)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+r.status),t("Error contacting remote server.")}})}},{key:"wunderlistGetTasks",value:function(e,t,r){try{n.default.PAssert(1601,t,"Wunderlist requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(1602,r,"Wunderlist requires an error callback")}catch(a){n.default.reportError(a)}n.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/tasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var a=JSON.parse(e.response);t(a)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}})}},{key:"wunderlistGetSubtasks",value:function(e,t,r){try{n.default.PAssert(1603,t,"Wunderlist requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(1604,r,"Wunderlist requires an error callback")}catch(a){n.default.reportError(a)}n.default.XHR({type:"GET",url:"https://a.wunderlist.com/api/v1/subtasks?list_id="+e,headers:{"X-Access-Token":this.wunderlist.token,"X-Client-ID":this.wunderlist.clientId},cb:function(e){if(200===e.status){var a=JSON.parse(e.response);t(a)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+e.status),r("Error contacting remote server.")}})}},{key:"wunderlistSave",value:function(e,t,r){try{n.default.PAssert(1605,t,"Wunderlist requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(1606,r,"Wunderlist requires an error callback")}catch(s){n.default.reportError(s)}try{u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var a=this.createDocument("Wunderlist import"),o=a.getRootItem();try{n.default.PAssert(1607,o,"Root item must exist in order to import")}catch(s){n.default.reportError(s)}Object.keys(e).forEach(function(t){var r=e[t];n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("List: ",r);var s=r.title,i=c.a.createVMLI({text:s},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(i,0),Object.keys(r.items).forEach(function(e){var t=r.items[e];n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("  Task: ",t);var o=c.a.createVMLI({text:t.title,isComplete:!!t.completed_at,dateCompleted:t.completed_at,isStarred:t.starred},{parent:i,changeType:l.a.ChangeType.AllLocal,documentOwner:a});if(i.insertItem(o),t.note){var s=c.a.createVMLI({text:t.note},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(s)}if(t.items)for(var d=0,u=0;u<t.items.length;++u){if(d++>5e3&&__infLoop&&__infLoop(d))throw new RangeError;var f=t.items[u];n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("    SubTask: ",f);var p=c.a.createVMLI({text:f.title,isComplete:!!f.completed_at,dateCompleted:f.completed_at,isStarred:f.starred},{parent:o,changeType:l.a.ChangeType.AllLocal,documentOwner:a});o.insertItem(p)}})}),a.parseAll(l.a.ChangeType.Local|l.a.ChangeType.All),this.saveDocument(a),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),t()}catch(i){r(void 0,i)}}},{key:"opmlLogin",value:function(e,t,r,a){try{n.default.PAssert(1608,r,"OPML requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(1609,a,"OPML requires an error callback")}catch(s){n.default.reportError(s)}var o=document.getElementById("importFileUploadButton");o.onchange=r,o.click()}},{key:"opmlImport",value:function(e,t){var r=this;try{n.default.PAssert(1610,e,"OPML requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(1611,t,"OPML requires an error callback")}catch(s){n.default.reportError(s)}try{var a=new FileReader,o=document.forms.importFileUpload.importFile.files[0];o?(a.onload=function(a){var o,i=a.target.result;if((i.startsWith("<?xml ")||i.startsWith("<?opml ")||i.startsWith("<opml "))&&(o=n.default.loadXML(i)),o){u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var l=r.createDocument("OPML import"),c=l.getRootItem();try{n.default.PAssert(1612,c,"Root item must exist in order to import")}catch(s){n.default.reportError(s)}var d=f.a.parseOPML(o,c);r.saveDocument(l),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),d?e():t("Error parsing OPML. Please validate your data.")}else t("Unable to load XML lib. Please update or try another browser.")},a.onerror=t,a.readAsText(o)):t("You must select a file before importing.")}catch(i){t(void 0,i)}}},{key:"opmlSave",value:function(e,t,r){try{n.default.PAssert(1613,t,"OPML requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(1614,r,"OPML requires an error callback")}catch(a){n.default.reportError(a)}n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("OPML Save: ",e),t()}},{key:"jsonLogin",value:function(e,t,r,a){try{n.default.PAssert(1615,r,"JSON requires a success callback")}catch(i){n.default.reportError(i)}try{n.default.PAssert(1616,a,"JSON requires an error callback")}catch(i){n.default.reportError(i)}var o=document.getElementById("importFileUploadButton"),s=!1;o.onchange=function(e){s=!0,r(e)},o.click();document.body.onfocus=function(){setTimeout(function(){s||a(!1),document.body.onfocus=void 0},1e3)}}},{key:"jsonImport",value:function(e,t){try{var r=new FileReader,a=document.forms.importFileUpload.importFile.files[0];a?(r.onload=function(r){var a=r.target.result;if(!a)return t("Unable to import your requested file. Please try a different file.");try{var o=JSON.parse(a)}catch(s){return t("The JSON is not properly formatted. Please re-validate or send the file to support@moo.do.")}try{f.a.parseJSON(o,!0).then(function(r){if(r){r.text=r.text||"Imported document",u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems(),r.items&&r.items.forEach(function(e){d.a.cacheItem(e)});var a=v.a.create(r);c.a.addDocument(a),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction()}return r?e():t("Invalid JSON format. The developers have been notified with details of the error.")})}catch(i){return t("The JSON file has errors. The developers have been notified with details of the error.",i)}},r.onerror=t,r.readAsText(a)):t("You must select a file before importing.")}catch(o){t(void 0,o)}}},{key:"jsonSave",value:function(e,t,r){try{n.default.PAssert(1617,t,"JSON requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(1618,r,"JSON requires an error callback")}catch(a){n.default.reportError(a)}t()}},{key:"gtasksLogin",value:function(e,t,r,a){var o=this;try{n.default.PAssert(1623,r,"GTasks requires a success callback")}catch(s){n.default.reportError(s)}try{n.default.PAssert(1624,a,"GTasks requires an error callback")}catch(s){n.default.reportError(s)}g.a.authAccountTemp([l.a.GScope.TasksRO],function(e){e&&!e.error?(o.gtasks.token=e.access_token,r(e)):(n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("Error getting Google TaskRO permission: ",e),a("Unable to authenticate with Google. Please try again.",e))})}},{key:"gtasksImport",value:function(e,t){var r=this;try{n.default.PAssert(1625,e,"GTasks requires a success callback")}catch(o){n.default.reportError(o)}try{n.default.PAssert(1626,t,"GTasks requires an error callback")}catch(o){n.default.reportError(o)}var a={roots:[],remoteItems:{},unassigned:[]};this.gtasksGetLists(function(s){var i=0;try{n.default.PAssert(1627,n.default.isArray(s),"List data must be an array")}catch(o){n.default.reportError(o)}for(var l=s.length,c=0,d=0;d<s.length;++d){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var u=s[d];a.remoteItems[u.id]={id:u.id,text:u.title,isComplete:!1,dateCompleted:void 0,isArchived:!1,due:void 0,notes:void 0,parent:void 0,items:[]},a.roots.push(u.id),r.gtasksGetTasks(u,function(r,s){if(r){try{n.default.PAssert(1628,n.default.isArray(r),"List data must be an array")}catch(o){n.default.reportError(o)}if(n.default.isArray(r)){for(var i=0,d=0;d<r.length;++d){if(i++>5e3&&__infLoop&&__infLoop(i))throw new RangeError;var u=r[d];if(u&&"completed"!==u.status){a.remoteItems[u.id]={id:u.id,text:u.title,isComplete:"completed"===u.status,dateCompleted:u.completed?new Date(u.completed):void 0,isArchived:u.hidden,due:u.due?new Date(u.due):void 0,notes:u.notes,parent:u.parent||s.id,items:[]};var f=a.remoteItems[u.parent||s.id];f?f.items.push(u.id):a.unassigned.push(u.id)}}++c===l&&e(a)}else t("Invalid task list returned.")}else c++},t)}},t)}},{key:"gtasksGetLists",value:function(e,t){try{n.default.PAssert(1629,e,"GTasks requires a success callback")}catch(r){n.default.reportError(r)}try{n.default.PAssert(1630,t,"GTasks requires an error callback")}catch(r){n.default.reportError(r)}n.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/users/@me/lists?maxResults=".concat(2e3,"&key=").concat(l.a.APIKey,"&access_token=").concat(this.gtasks.token),cb:function(a){if(200===a.status)try{var o=JSON.parse(a.response);try{n.default.PAssert(1631,o&&o.items,"Must have a valid set of data to get tasks from")}catch(r){n.default.reportError(r)}o&&o.items?e(o.items):t("Error getting data from remote server.")}catch(s){t(s)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+a.status),t("Error contacting remote server.")}})}},{key:"gtasksGetTasks",value:function(e,t,r){try{n.default.PAssert(1632,e,"GTasks requires a valid list to get tasks from")}catch(a){n.default.reportError(a)}try{n.default.PAssert(1633,t,"GTasks requires a success callback")}catch(a){n.default.reportError(a)}try{n.default.PAssert(1634,r,"GTasks requires an error callback")}catch(a){n.default.reportError(a)}n.default.XHR({type:"GET",url:"https://www.googleapis.com/tasks/v1/lists/".concat(e.id,"/tasks?maxResults=").concat(2500,"&key=").concat(l.a.APIKey,"&access_token=").concat(this.gtasks.token),cb:function(o){if(200===o.status)try{var s=JSON.parse(o.response);try{n.default.PAssert(1635,s,"Must have a valid array of tasks")}catch(a){n.default.reportError(a)}s&&s.items?t(s.items,e):t([],e)}catch(i){r(i)}else n.default.shouldLog(l.a.LogLevels.Import)&&n.default.log("XHR Status: "+o.status),r("Error contacting remote server.")}})}},{key:"gtasksSave",value:function(e,t,r){try{n.default.PAssert(1636,t,"GTasks requires a success callback")}catch(f){n.default.reportError(f)}try{n.default.PAssert(1637,r,"GTasks requires an error callback")}catch(f){n.default.reportError(f)}try{var a=0;try{n.default.PAssert(1638,0===e.unassigned.length,"We should never have unassigned tasks")}catch(f){n.default.reportError(f)}u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Google Tasks import"),s=o.getRootItem();try{n.default.PAssert(1639,s,"Root item must exist in order to import")}catch(f){n.default.reportError(f)}for(var i=function t(r,a){var s=0,i=r.text;r.due&&(i+=" @"+y(r.due));var n=c.a.createVMLI({text:i,isComplete:r.isComplete,dateCompleted:r.dateCompleted?r.dateCompleted.getTime():r.dateCompleted,isArchived:r.isArchived},{parent:a,changeType:l.a.ChangeType.AllLocal,documentOwner:o});if(a.insertItem(n),r.notes){var d=c.a.createVMLI({text:r.notes,isNote:!0},{parent:n,changeType:l.a.ChangeType.AllLocal,documentOwner:o});n.setNote(d,l.a.ChangeType.Local)}for(var u=0;u<r.items.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;t(e.remoteItems[r.items[u]],n)}},d=0;d<e.roots.length;++d){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;i(e.remoteItems[e.roots[d]],s)}o.parseAll(l.a.ChangeType.Local|l.a.ChangeType.All),this.saveDocument(o),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction(),t()}catch(h){r(void 0,h)}}},{key:"trelloPreload",value:function(e,t){var r=this;window.Trello||this.trello.isLoading?e():(this.trello.isLoading=!0,n.default.addScript("https://code.jquery.com/jquery-1.7.1.min.js","jqueryScript",function(){n.default.addScript("https://api.trello.com/1/client.js?key=667ecf0c3d3e029c51d205b7173f6c38","trelloScript",function(){r.trello.isLoading=!1;try{n.default.PAssert(1640,window.Trello,"The Trello client lib must have been loaded correctly")}catch(a){n.default.reportError(a)}window.Trello?e():t("Error loading Trello. Please try again.")},function(e){r.trello.isLoading=!1,t(e)})},function(e){r.trello.isLoading=!1,t(e)}))}},{key:"trelloLogin",value:function(e,t,r,a){try{n.default.PAssert(1641,window.Trello,"The Trello client lib was not properly loaded")}catch(o){n.default.reportError(o)}window.Trello?window.Trello.authorize({type:"popup",name:"Moo.do",persist:!1,expiration:"1hour",success:r,error:a}):a("Error loading Trello. Please try again.")}},{key:"trelloImport",value:function(e,t){var r=this,a=[];window.Trello.get("members/me/boards",n.default.wrapFn(function(o){var s=0,i=(o=o||[]).length,n=0;function l(){i===n&&e(a)}function c(e){n++,l()}for(var d=0;d<o.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=o[d];if(u.closed)i--;else{var f={text:u.name,items:[]};a.push(f),r._handleBoard(f,u.id,t,c)}}l()},t),t)}},{key:"_handleBoard",value:function(e,t,r,a){var o=this;window.Trello.get("boards/"+t+"/lists",n.default.wrapFn(function(t){var s=0,i=0,n=t.length;function l(){i===n&&a()}function c(){i++,l()}for(var d=0;d<t.length;++d){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var u=t[d];if(u.closed)n--;else{var f={text:u.name,items:[]};e.items.push(f),o._handleList(f,u.id,r,c)}}l()},r),r)}},{key:"_handleList",value:function(e,t,r,a){var o=this;window.Trello.get("lists/"+t+"/cards",n.default.wrapFn(function(t){var s=0,i=0,n=t.length;function c(){i===n&&a()}function d(){i++,c()}for(var u=0;u<t.length;++u){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;var f=t[u];if(f.closed)n--;else{var p={text:f.name};if(f.labels&&f.labels.length>0){for(var h=0,m="",g=0;g<f.labels.length;++g){if(h++>5e3&&__infLoop&&__infLoop(h))throw new RangeError;var v=f.labels[g];m+=l.a.TagPrefix+(v.name.length>0?v.name:v.color)+" "}p.text=m+p.text}if(f.due&&(f.date=new Date(f.due)),f.desc&&f.desc.length>0){var y=0;p.items=[];var w=f.desc.split("\n");for(g=0;g<w.length;++g){if(y++>5e3&&__infLoop&&__infLoop(y))throw new RangeError;var k=w[g];k&&k.length>0&&p.items.push({text:k})}}if(f.idChecklists&&f.idChecklists.length>0){var L=0;p.items||(p.items=[]);for(g=0;g<f.idChecklists.length;++g){if(L++>5e3&&__infLoop&&__infLoop(L))throw new RangeError;o._handleChecklist(p,f.idChecklists[g],r,d)}}else i++;e.items.push(p)}}c()},r),r)}},{key:"_handleChecklist",value:function(e,t,r,a){window.Trello.get("checklists/"+t+"/",n.default.wrapFn(function(t){for(var r=0,o={text:t.name,isCollapsed:!0,items:[]},s=0;s<t.checkItems.length;++s){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var i=t.checkItems[s],n="complete"===i.state;if(!n){var l={text:i.name,isComplete:n};o.items.push(l)}}e.items.push(o),a()},r),r)}},{key:"trelloSave",value:function(e,t,r){try{var a=0;u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Trello import"),s=function e(t,r){var a=c.a.createVMLI({text:t.text,isComplete:t.isComplete,isCollapsed:t.isCollapsed},{parent:r,changeType:l.a.ChangeType.AllLocal,documentOwner:o});if(r.insertItem(a),t.items)for(var s=0,i=0;i<t.items.length;++i){if(s++>5e3&&__infLoop&&__infLoop(s))throw new RangeError;e(t.items[i],a)}return a},i=o.getRootItem();try{n.default.PAssert(1642,i,"Root item must exist in order to import")}catch(f){n.default.reportError(f)}for(var d=0;d<e.length;++d){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;s(e[d],i)}this.saveDocument(o),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction()}catch(h){return r(h)}t()}},{key:"todoistLogin",value:function(e,t,r,a){try{n.default.PAssert(1643,r,"Todoist requires a success callback")}catch(l){n.default.reportError(l)}try{n.default.PAssert(1644,a,"Todoist requires an error callback")}catch(l){n.default.reportError(l)}var o="localhost"===window.location.hostname?"5d361221eddb4bcdb018457c7c74e698":"b701ac04f4df419ca4144ab208a9fb06",s="Dchs"+(new Date).getTime(),i="https://todoist.com/oauth/authorize?client_id="+o+"&scope=data:read&state="+s;window.open(i,"modal-todoist","height=600,width=550");window.addEventListener("message",function e(t){var r=n.default.getLocationOrigin(),o=!1;try{o=t.data.state===s}catch(i){n.default.reportError(i)}r&&o&&(window.removeEventListener("message",e),t.data.error?a("Error authenticating with Todoist"):t.data.code)})}},{key:"todoistImport",value:function(e,t){var r=0,a=0;try{n.default.PAssert(1645,e,"Todoist requires a success callback")}catch(f){n.default.reportError(f)}try{n.default.PAssert(1646,t,"Todoist requires an error callback")}catch(f){n.default.reportError(f)}for(var o=this.todoist.data,s={},i=0;i<o.projects.length;++i){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;var l=o.projects[i];l.is_archived||l.is_deleted||(s[l.id]={id:l.id,name:l.name,items:[],itemMap:{},parent_id:l.parent_id,item_order:l.item_order})}for(var c=[],d=0;d<o.items.length;++d){if(a++>5e3&&__infLoop&&__infLoop(a))throw new RangeError;var u=o.items[d];!s[u.project_id]||u.is_deleted||u.is_archived||u.checked||(!u.parent_id&&d>0&&!isNaN(u.indent)&&u.indent>1&&c[u.indent-1]&&(u.parent_id=c[u.indent-1].id),s[u.project_id].items.push(u),s[u.project_id].itemMap[u.id]=u,isNaN(u.indent)||(c[u.indent]=u))}e(s)}},{key:"todoistSave",value:function(e,t,r){var a=[l.a.VMLIFlag.None,l.a.VMLIFlag.None,l.a.VMLIFlag.P2,l.a.VMLIFlag.P1,l.a.VMLIFlag.P0];try{u.e.beginAction(),p.default.PaneUpdateBatcher.beginUpdateItems();var o=this.createDocument("Todoist import"),s=o.getRootItem();try{n.default.PAssert(1647,s,"Root item must exist in order to import")}catch(_){n.default.reportError(_)}var i={},d={},f=function(e,t){var r=d[e.id],a=d[t.id];return r.item_order-a.item_order},h=function e(t,r){if(!i[r.id]){var s=r.parent_id;r.parent_id&&!i[r.id]&&e(t,t.itemMap[r.parent_id]);var u=i[s||r.project_id];try{n.default.PAssert(1648,u,"parent item did not exist",s,r.project_id)}catch(_){n.default.reportError(_)}u&&function(e,t,r){t.priority&&(t.priority=a[t.priority]),t.due_date_utc&&(t.content+=" @"+y(new Date(t.due_date_utc)));var s=c.a.createVMLI({text:t.content||"",isCollapsed:!!t.collapsed,priority:t.priority},{parent:r,changeType:l.a.ChangeType.AllLocal,documentOwner:o});i[t.id]=s,d[s.id]=t,r.insertSorted(s,f)}(0,r,u)}},m=function t(r){if(!i[r.id]){var a,n=r.parent_id,u=r.id;n?(i[n]||t(e[n]),a=i[n]):a=s;var p=c.a.createVMLI({text:r.name},{parent:a,changeType:l.a.ChangeType.AllLocal,documentOwner:o});i[u]=p,d[p.id]=r,a.insertSorted(p,f)}};for(var g in e)if(e.hasOwnProperty(g)){var v=0,w=e[g],k=w.items;m(w);for(var L=0;L<k.length;L++){if(v++>5e3&&__infLoop&&__infLoop(v))throw new RangeError;h(w,k[L])}}this.saveDocument(o),p.default.PaneUpdateBatcher.commitUpdateItems(),u.e.endAction()}catch(E){return r(E)}t()}},{key:"_createCSVEntry",value:function(e,t){for(var r=0,a={},o=0;o<e.length;++o){if(r++>5e3&&__infLoop&&__infLoop(r))throw new RangeError;a[e[o]]=t[o]}return a}},{key:"parseCSV",value:function(e){for(var t=0,r=m.a.parse(e),a=["Area","Client","Contacts","Category","Context","Created By","Date Created","Date Updated","Delegated To","Start Date","Due Date","Links","Notes","Originating Entry","Parent Entries","Priority","Short Description","Title","Star","Status","Website References"],o=[],s=r.data[0],i=0;i<s.length;++i){if(t++>5e3&&__infLoop&&__infLoop(t))throw new RangeError;a.indexOf(s[i])<0?console.log("Unknown CSV Headers: ",s[i]):o.indexOf(s[i])>=0&&o.remove(s[i])}if(0===o.length){var n=0,l=[];for(i=1;i<r.data.length;++i){if(n++>5e3&&__infLoop&&__infLoop(n))throw new RangeError;l.push(this._createCSVEntry(s,r.data[i]))}}else var c="Missing required export fields: "+o.join(", ");if(s.indexOf("Short Descrption")<0&&s.indexOf("Title")<0)c="Missing required export fields: Short Descrption OR Title.";return l||c}},{key:"createDocument",value:function(e){return c.a.createEmptyDocument(e,c.a.getDefaultBacking())}},{key:"saveDocument",value:function(e){c.a.addDocument(e)}},{key:"runImport",value:function(e,t,r,a,o){e.login(t,r,function(){e.import(function(t){e.save(t,function(){a()},o)},o)},o)}}]),e}();t.default=w}}]);
