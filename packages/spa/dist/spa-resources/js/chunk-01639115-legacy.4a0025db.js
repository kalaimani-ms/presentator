(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01639115"],{"11b2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},a=[],n={name:"relocator",props:{container:{default:"body"}},computed:{containerElem:function(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted:function(){var t=this;if(this.containerElem){var e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",(function(){e&&(e.parentNode.removeChild(e),t.$el.appendChild(e))}))}}},r=n,o=s("2877"),c=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},3905:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},a=[],n={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data:function(){return{isActive:!1,isClosing:!1}},methods:{open:function(){var t=this;this.isActive=!0,this.isClosing=!1,this.$nextTick((function(){t.$refs.popupContainer.focus()})),document.body.classList.add("popup-active"),this.$nextTick((function(){var e=t.$el.querySelector("form input");e&&e.focus()}))},close:function(){var t=this;this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout((function(){t.isActive=!1,t.isClosing=!1}),300))}}},r=n,o=s("2877"),c=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},"438c":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"info"},[s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_RELEASES_URL"),target:"_blank",rel:"noopener"}},[s("span",{staticClass:"txt"},[t._v("Presentator v2.4.0")])]),s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-github"}),s("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id?s("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[s("i",{staticClass:"fe fe-life-buoy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),s("div",{staticClass:"info-item"},[s("languages-select")],1)]),!(t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0)?t._e():s("div",{staticClass:"credits"},[s("i18n",{attrs:{path:"Crafted by {author}"}},[s("a",{attrs:{slot:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"},slot:"author"},[t._v("Gani")])])],1),s("relocator",[s("feedback-popup",{ref:"feedbackPopup"})],1)],1)},a=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62"),o=s("11b2"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[s("p",[t._v("\n                    "+t._s(t.$t("Found a bug or have a feature request?"))+" "),s("br"),s("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[s("a",{attrs:{slot:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"},slot:"issuesLink"},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),s("form-field",{staticClass:"required",attrs:{name:"message"}},[s("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},l=[],u=s("f744"),p=s("3905"),d={name:"feedback-popup",components:{popup:p["a"]},data:function(){return{isProcessing:!1,message:""}},methods:{open:function(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close:function(){this.$refs.popup.close(),this.$emit("close")},resetForm:function(){this.message=""},submitForm:function(){var t=this;this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then((function(e){t.$toast(t.$t("Thank you for the feedback!")),t.close(),t.resetForm()})).catch((function(e){t.$errResponseHandler(e)})).finally((function(){t.isProcessing=!1})))}}},f=d,v=s("2877"),m=Object(v["a"])(f,c,l,!1,null,null,null),g=m.exports,h=s("f7ef");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"app-footer",components:{relocator:o["a"],"feedback-popup":g,"languages-select":h["a"]},computed:C({},Object(r["d"])({loggedUser:function(t){return t.user.user}})),methods:{openFeedbackPopup:function(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=_,j=Object(v["a"])(y,i,a,!1,null,null,null);e["a"]=j.exports},"4eee":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"app-sidebar"},[i("div",{staticClass:"app-sidebar-section app-sidebar-header"},[i("router-link",{staticClass:"logo",attrs:{to:{name:"home"},title:"Presentator"}},[i("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"41",height:"53"}})])],1),i("div",{staticClass:"app-sidebar-section app-sidebar-content"},[i("nav",{staticClass:"main-menu"},[t._t("default")],2)]),i("div",{staticClass:"app-sidebar-section app-sidebar-footer"},[i("nav",{staticClass:"meta-menu m-b-small"},[i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Notifications"),expression:"$t('Notifications')",modifiers:{right:!0}}],staticClass:"menu-item",class:{active:t.$refs.notificationsPanel&&t.$refs.notificationsPanel.isActive},on:{click:function(e){e.preventDefault(),t.$refs.notificationsPanel&&t.$refs.notificationsPanel.toggle()}}},[t.unreadComments.length?i("span",{staticClass:"beacon beacon-danger"}):t._e(),i("i",{staticClass:"fe fe-bell"})]),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Recent activity"),expression:"$t('Recent activity')",modifiers:{right:!0}}],staticClass:"menu-item",class:{active:t.$refs.activityPanel&&t.$refs.activityPanel.isActive},on:{click:function(e){e.preventDefault(),t.$refs.activityPanel&&t.$refs.activityPanel.toggle()}}},[i("i",{staticClass:"fe fe-activity"})])]),t.loggedUser&&t.loggedUser.id?i("div",{staticClass:"user-profile"},[i("figure",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.loggedUser.identifier,expression:"loggedUser.identifier",modifiers:{right:!0}}],staticClass:"avatar"},[t.loggedUser.getAvatar("small")?i("img",{attrs:{src:t.loggedUser.getAvatar("small"),alt:"User avatar"}}):i("i",{staticClass:"fe fe-user"})]),i("toggler",{staticClass:"dropdown dropdown-sm"},[i("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"user",params:{userId:t.loggedUser.id}}}},[i("i",{staticClass:"fe fe-settings"}),i("span",{staticClass:"txt"},[t._v(t._s(t.$t("Settings")))])]),i("hr"),i("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.logout()}}},[i("i",{staticClass:"fe fe-log-out"}),i("span",{staticClass:"txt"},[t._v(t._s(t.$t("Sign out")))])])],1)],1):t._e()]),i("activity-panel",{ref:"activityPanel"}),i("notifications-panel",{ref:"notificationsPanel"})],1)},a=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"sidebarPanel"}},[t.isActive?s("div",{directives:[{name:"shortcut",rawName:"v-shortcut.27",value:t.hide,expression:"hide",modifiers:{27:!0}},{name:"outside-click",rawName:"v-outside-click",value:{handler:t.hide,status:t.isActive},expression:"{\n            'handler': hide,\n            'status':  isActive,\n        }"}],staticClass:"app-sidebar-panel"},[s("div",{staticClass:"app-sidebar-section app-sidebar-header"},[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Recent activity")))]),s("div",{staticClass:"list-ctrls"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Close panel"),expression:"$t('Close panel')",modifiers:{right:!0}}],staticClass:"list-ctrl-item",on:{click:function(e){return e.preventDefault(),t.hide(e)}}},[s("i",{staticClass:"fe fe-x"})])]),s("div",{staticClass:"clearfix m-b-small"}),s("div",{staticClass:"form-group form-group-sm"},[s("select",[s("option",{domProps:{value:null}},[t._v(t._s(t.$t("Viewed project links")))])])])]),s("div",{staticClass:"app-sidebar-section app-sidebar-content"},[s("div",{staticClass:"block txt-center txt-hint"},[t.isLoading?s("span",{staticClass:"loader"}):t._e(),t.isLoading||t.projectLinks.length?t._e():s("p",[t._v(t._s(t.$t("You haven't accessed any projects links yet.")))])]),!t.isLoading&&t.projectLinks.length?s("div",{staticClass:"cards-list"},t._l(t.projectLinks,(function(e){return s("a",{staticClass:"card",attrs:{target:"_blank",href:e.fullUrl}},[s("figure",{staticClass:"icon"},[s("i",{staticClass:"fe fe-link-2"})]),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v(t._s(e.project?e.project.title:e.slug))]),s("div",{staticClass:"meta"},[s("div",{staticClass:"meta-item"},[t._v(t._s(e.fullUrl))])])])])})),0):t._e()])]):t._e()])},c=[],l=s("f744"),u=s("ba5d"),p={name:"activity-panel",data:function(){return{isActive:!1,isLoading:!1,projectLinks:[]}},methods:{hide:function(){this.isActive=!1},show:function(){this.isActive=!0,this.getAccessedProjectLinks()},toggle:function(){this.isActive?this.hide():this.show()},getAccessedProjectLinks:function(){var t=this;this.isLoading=!0,l["a"].ProjectLinks.getAccessed(1,30).then((function(e){t.projectLinks=u["a"].createInstances(e.data)})).catch((function(e){t.$errResponseHandler(e)})).finally((function(){t.isLoading=!1}))}}},d=p,f=s("2877"),v=Object(f["a"])(d,o,c,!1,null,null,null),m=v.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"sidebarPanel"}},[t.isActive?s("div",{directives:[{name:"shortcut",rawName:"v-shortcut.27",value:t.hide,expression:"hide",modifiers:{27:!0}},{name:"outside-click",rawName:"v-outside-click",value:{handler:t.hide,status:t.isActive},expression:"{\n            'handler': hide,\n            'status':  isActive,\n        }"}],staticClass:"app-sidebar-panel"},[s("div",{staticClass:"app-sidebar-section app-sidebar-header"},[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Notifications")))]),s("div",{staticClass:"list-ctrls"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Close panel"),expression:"$t('Close panel')",modifiers:{right:!0}}],staticClass:"list-ctrl-item",on:{click:function(e){return e.preventDefault(),t.hide(e)}}},[s("i",{staticClass:"fe fe-x"})])]),s("div",{staticClass:"clearfix m-b-small"}),s("div",{staticClass:"form-group form-group-sm"},[Object.keys(t.projectsList).length?s("select",{directives:[{name:"model",rawName:"v-model",value:t.activeProjectId,expression:"activeProjectId"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.activeProjectId=e.target.multiple?s:s[0]}}},[s("option",{domProps:{value:null}},[t._v(t._s(t.$t("All projects")))]),t._l(t.projectsList,(function(e,i){return s("option",{key:"filter_"+i,domProps:{value:i}},[t._v("\n                        "+t._s(e)+"\n                    ")])}))],2):t._e()]),t.activeUnreadComments.length?s("div",{staticClass:"block txt-right m-t-5"},[s("small",{staticClass:"link-primary",on:{click:function(e){return e.preventDefault(),t.markAllActiveAsRead(e)}}},[t._v(t._s(t.$t("Mark all as read")))])]):t._e()]),s("div",{staticClass:"app-sidebar-section app-sidebar-content"},[s("div",{staticClass:"block txt-center txt-hint"},[t.isLoading?s("span",{staticClass:"loader"}):t._e(),t.isLoading||t.activeUnreadComments.length?t._e():s("p",[t._v(t._s(t.$t("No unread comments.")))])]),!t.isLoading&&t.activeUnreadComments.length?s("div",{staticClass:"comments-list"},t._l(t.activeUnreadComments,(function(e){return s("div",{key:"notification_"+e.id,staticClass:"comment-list-item"},[s("figure",{staticClass:"avatar"},[e.user&&e.user.getAvatar("small")?s("img",{attrs:{src:e.user.getAvatar("small"),alt:t.$t("User avatar")}}):s("i",{staticClass:"fe fe-user"})]),s("div",{staticClass:"content"},[s("small",[s("span",{staticClass:"name"},[t._v(t._s(e.user?e.user.identifier:e.from))]),s("span",{staticClass:"date txt-hint m-l-5"},[t._v(t._s(e.createdAtFromNow))])]),s("div",{staticClass:"message"},[t._v(t._s(e.message))]),e.metaData?s("div",{staticClass:"meta"},[e.metaData.screenTitle?s("div",{staticClass:"meta-item",attrs:{title:e.metaData.screenTitle}},[s("span",{staticClass:"txt screen-title"},[t._v(t._s(e.metaData.screenTitle))])]):t._e(),s("router-link",{staticClass:"meta-item link-primary",attrs:{to:{name:"screen",params:{projectId:e.metaData.projectId,prototypeId:e.metaData.prototypeId,screenId:e.metaData.screenId},query:{mode:"comments",commentId:e.replyTo||e.id}}}},[s("span",{staticClass:"txt"},[t._v("Details")])])],1):t._e()]),s("div",{staticClass:"list-ctrls"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Mark as read"),expression:"$t('Mark as read')",modifiers:{top:!0}}],staticClass:"list-ctrl-item ctrl-success",on:{click:function(s){return s.preventDefault(),t.markAsRead(e.id)}}},[s("i",{staticClass:"fe fe-check"})])])])})),0):t._e()])]):t._e()])},h=[];s("dd93"),s("46a0");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"notifications-panel",data:function(){return{isActive:!1,isLoading:!1,activeProjectId:null}},computed:C({},Object(r["d"])({unreadComments:function(t){return t.notifications.unreadComments}}),{},Object(r["c"])({getUnreadCommentsForProject:"notifications/getUnreadCommentsForProject"}),{projectsList:function(){var t={};for(var e in this.unreadComments)this.unreadComments[e].metaData&&(t[this.unreadComments[e].metaData.projectId]=this.unreadComments[e].metaData.projectTitle||"N/A");return this.activeProjectId&&!t[this.activeProjectId]&&(this.activeProjectId=null),t},activeUnreadComments:function(){return this.activeProjectId?this.getUnreadCommentsForProject(this.activeProjectId):this.unreadComments}}),methods:C({},Object(r["b"])({loadUserUnreadComments:"notifications/loadUserUnreadComments",markAsRead:"notifications/markAsRead"}),{hide:function(){this.isActive=!1},show:function(){var t=this;this.isActive=!0,this.activeProjectId=null,this.isLoading=!0,this.loadUserUnreadComments().finally((function(){t.isLoading=!1})).catch((function(t){}))},toggle:function(){this.isActive?this.hide():this.show()},markAllActiveAsRead:function(){for(var t=this.activeUnreadComments.slice(),e=t.length-1;e>=0;e--)this.markAsRead(t[e].id)}})},y=_,j=(s("802c"),Object(f["a"])(y,g,h,!1,null,"74a7dd87",null)),k=j.exports;function O(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?O(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):O(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var $={name:"app-sidebar",components:{"activity-panel":m,"notifications-panel":k},computed:P({},Object(r["d"])({loggedUser:function(t){return t.user.user},unreadComments:function(t){return t.notifications.unreadComments}})),methods:{logout:function(){this.$logout(),this.$toast(this.$t("You have been signed out successfully."))}}},w=$,x=Object(f["a"])(w,i,a,!1,null,null,null);e["a"]=x.exports},"54b5":function(t,e,s){},"802c":function(t,e,s){"use strict";var i=s("54b5"),a=s.n(i);a.a},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},"9c86":function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var i=s("d225"),a=s("b0b4"),n=s("308d"),r=s("6bb5"),o=s("2a88"),c=s("4e2b"),l=s("9242"),u=s("dd93"),p=function(t){function e(){return Object(i["a"])(this,e),Object(n["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(o["a"])(Object(r["a"])(e.prototype),"load",this).call(this,t),this.title=u["a"].isEmpty(t.title)?"":t.title,this.archived=u["a"].isEmpty(t.archived)?0:t.archived<<0,this.featuredScreen=u["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}},{key:"getFeaturedScreen",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}},{key:"isArchived",get:function(){return!!this.archived}}]),e}(l["a"])},aef6:function(t,e,s){"use strict";var i=s("5ca1"),a=s("9def"),n=s("d2c8"),r="endsWith",o=""[r];i(i.P+i.F*s("5147")(r),"String",{endsWith:function(t){var e=n(this,t,r),s=arguments.length>1?arguments[1]:void 0,i=a(e.length),c=void 0===s?i:Math.min(a(s),i),l=String(t);return o?o.call(e,l,c):e.slice(c-l.length,c)===l}})},ba5d:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));s("aef6");var i=s("d225"),a=s("b0b4"),n=s("308d"),r=s("6bb5"),o=s("2a88"),c=s("4e2b"),l=s("9242"),u=s("72a1"),p=s("9c86"),d=s("dd93"),f=function(t){function e(){return Object(i["a"])(this,e),Object(n["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(o["a"])(Object(r["a"])(e.prototype),"load",this).call(this,t),this.projectId=d["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=d["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,d["a"].isArray(t.prototypes)?this.prototypes=u["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[],this.project=null,d["a"].isEmpty(t.projectInfo)?t.project&&t.project instanceof p["a"]&&(this.project=t.project):this.project=new p["a"](t.projectInfo)}},{key:"baseUrl",get:function(){var t=d["a"].getNestedVal(window,"location.origin","");return d["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}},{key:"relativeUrl",get:function(){return"/"+this.slug}},{key:"fullUrl",get:function(){return this.baseUrl+this.relativeUrl}},{key:"prototypeIds",get:function(){var t=[];for(var e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}]),e}(l["a"])},f7ef:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v("\n        ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,(function(e,i){return s("div",{key:"language_"+i,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==i},on:{click:function(e){return e.preventDefault(),t.changeLanguage(i)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==i?"label-transp-primary":"label-light-border"},[t._v(t._s(i))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])})),0)],1)},a=[],n=s("9225"),r={name:"languages-select",data:function(){return{isChanging:!1,languages:Object.assign({},n["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode:function(){return this.$i18n.locale},activeLanguageTitle:function(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage:function(t){var e=this;this.isChanging=!0,Object(n["a"])(t).finally((function(){e.isChanging=!1}))}}},o=r,c=s("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports}}]);