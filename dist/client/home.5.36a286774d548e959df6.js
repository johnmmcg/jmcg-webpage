(window.webpackJsonp=window.webpackJsonp||[]).push([[5],Array(135).concat([function(e,t,n){"use strict";n.r(t);var i=n(10),a=n(29),s=function(){function e(e,t,n,i,s,o){this.context=e,this.radius=t,this.speed=n,this.width=i,this.xPos=s,this.yPos=o,this.opacity=Object(a.b)(.05,.9),this.counter=0,this.direction=0,this.direction=1===Object(a.c)(0,1)?-1:1}return e.prototype.update=function(){this.counter+=this.direction*this.speed;var e=1===Object(a.c)(0,1)?-1:1;this.opacity+=e*(Object(a.c)(0,999)/5e4),this.context.beginPath(),this.context.arc(this.xPos+Math.cos(this.counter/100)*this.radius,this.yPos+Math.sin(this.counter/100)*this.radius,this.width,0,2*Math.PI,!1),this.context.closePath(),this.context.fillStyle="rgba(80, 27, 29,"+this.opacity+")",this.context.fill(),this.opacity<=0&&(this.counter=0,this.opacity=Object(a.b)(.1,.6),this.width=Object(a.c)(2,10),this.speed=Object(a.b)(.1,1))},e}(),o=function(e,t,n){t.clearRect(0,0,e.width,e.height),n.forEach(function(e){e.update()}),window.requestAnimationFrame(function(){o(e,t,n)})},r=function(e){var t=e.getContext("2d"),n=function(e,t,n){for(var i=[],o=0;o<e;o++)i.push(new s(n,Object(a.c)(50,350),Object(a.b)(.1,1),Object(a.b)(2,10),Object(a.c)(0,t.width),Object(a.c)(0,t.height)));return i}(25,e,t);return t&&o(e,t,n),{draw:o,circles:n}},l=n(9),c=n(13),u=n(8),d={name:"VueIconGithub"},p=n(207),v=n(0);var f=Object(v.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"}})])])},[],!1,function(e){this.$style=p.default.locals||p.default},null,null);f.options.__file="VueIconGithub.vue";var m=f.exports,h=n(57),g={name:"SlideUpAnimation"},b=n(209);var _=Object(v.a)(g,function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{"enter-class":this.$style.enter,"enter-active-class":this.$style.enterActive,"enter-to-class":this.$style.enterTo,"leave-class":this.$style.leave,"leave-active-class":this.$style.leaveActive,"leave-to-class":this.$style.leaveTo}},[this._t("default")],2)},[],!1,function(e){this.$style=b.default.locals||b.default},null,null);_.options.__file="SlideUpAnimation.vue";var y=_.exports,w={components:{VueIconGithub:m,VueGridItem:u.a,VueGridRow:c.a,VueGrid:l.a,FadeAnimation:h.a,SlideUpAnimation:y},props:{disableParticles:{type:Boolean,required:!0}},data:function(){return{active:!1,mainTitleLoaded:!1,linkOneLoaded:!1,linkTwoLoaded:!1,linkThreeLoaded:!1,moreMessageLoaded:!1}},computed:{mainTitle:function(){var e=[this.$style.mainTitle];return this.mainTitleLoaded&&e.push(this.$style.mainTitleLoaded),e}},methods:{handleResize:function(){var e=this.$refs.canvas,t=this.$refs.stage,n=t.getClientRects().length>0?t.getClientRects().item(0):{width:0,height:0};e.width=n.width,e.height=n.height}},beforeMount:function(){window.addEventListener("resize",this.handleResize)},mounted:function(){this.handleResize(),this.disableParticles||r(this.$refs.canvas);var e=this;setTimeout(function(t){e.active=!0},500),setTimeout(function(t){e.linkOneLoaded=!0,e.mainTitleLoaded=!0},1e3),setTimeout(function(t){e.linkTwoLoaded=!0},1250),setTimeout(function(t){e.linkThreeLoaded=!0},1500),setTimeout(function(t){e.moreMessageLoaded=!0},2e3)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},k=n(211);var x=Object(v.a)(w,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"stage",class:e.$style.stage},[n("canvas",{ref:"canvas",class:e.$style.canvas}),e._v(" "),n("fade-animation",[e.active?n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",{staticClass:"vueGridItem"},[n("div",{class:e.$style.textBlock},[n("div",{class:e.$style.topLeftBorder}),e._v(" "),n("div",{class:e.$style.BottomRightBorder}),e._v(" "),n("h1",{staticClass:"animated fade",class:e.mainTitle},[e._v("John McGuinness")]),e._v(" "),n("h2",{class:e.$style.title},[e._v("Front End Web Developer")]),e._v(" "),n("h3",{class:e.$style.subTitle},[e._v("Philadelphia, Pennsylvania")])])])],1)],1):e._e()],1),e._v(" "),n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",[n("slide-up-animation",[e.linkOneLoaded?n("div",[n("div",{class:e.$style.linkContainer},[n("a",{attrs:{href:"https://www.linkedin.com/in/johnmmcg/",target:"_blank",title:"Click to visit my LinkedIn Profile"}},[n("span",{class:e.$style.icon},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),e._v(" "),n("p",{class:e.$style.linkTitle},[e._v("LinkedIn")])])])]):e._e()])],1),e._v(" "),n("vue-grid-item",[n("slide-up-animation",[e.linkTwoLoaded?n("div",[n("div",{class:e.$style.linkContainer},[n("a",{attrs:{href:"https://codepen.io/johnmmcg/",target:"_blank",title:"Click to visit my CodePen Profile"}},[n("span",{class:e.$style.icon},[n("font-awesome-icon",{attrs:{icon:["fab","codepen"]}})],1),e._v(" "),n("p",{class:e.$style.linkTitle},[e._v("CodePen")])])])]):e._e()])],1),e._v(" "),n("vue-grid-item",[n("slide-up-animation",[e.linkThreeLoaded?n("div",[n("div",{class:e.$style.linkContainer},[n("a",{attrs:{href:"https://github.com/johnmmcg",target:"_blank",title:"Click to visit my GitHub Profile"}},[n("span",{class:e.$style.icon},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),e._v(" "),n("p",{class:e.$style.linkTitle},[e._v("GitHub")])])])]):e._e()])],1)],1)],1),e._v(" "),n("div",{class:e.$style.bottomMessageContainer},[n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",[n("fade-animation",[e.moreMessageLoaded?n("div",{class:e.$style.message},[n("p",[e._v("[more comming soon]")])]):e._e()])],1)],1)],1)],1)],1)},[],!1,function(e){this.$style=k.default.locals||k.default},null,null);x.options.__file="Stage.vue";var q=x.exports,P=n(142),z=n(143),T={name:"VueIconCode"},C=n(213);var $=Object(v.a)(T,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 2048 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M681 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"}})])])},[],!1,function(e){this.$style=C.default.locals||C.default},null,null);$.options.__file="VueIconCode.vue";var I=$.exports,G={name:"VueIconBullhorn"},V=n(215);var L=Object(v.a)(G,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1664 640q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5v384q0 52-38 90t-90 38q-417-347-812-380-58 19-91 66t-31 100.5 40 92.5q-20 33-23 65.5t6 58 33.5 55 48 50 61.5 50.5q-29 58-111.5 83t-168.5 11.5-132-55.5q-7-23-29.5-87.5t-32-94.5-23-89-15-101 3.5-98.5 22-110.5h-122q-66 0-113-47t-47-113v-192q0-66 47-113t113-47h480q435 0 896-384 52 0 90 38t38 90v384zm-128 604v-954q-394 302-768 343v270q377 42 768 341z"}})])])},[],!1,function(e){this.$style=V.default.locals||V.default},null,null);L.options.__file="VueIconBullhorn.vue";var E={components:{VueIconBullhorn:L.exports,VueIconCode:I,VueGrid:l.a,VueGridItem:u.a,VuePanel:P.a,VuePanelBody:z.a,VueGridRow:c.a}},j=n(217);var O=Object(v.a)(E,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$style.devEx,"featureSection"]},[n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",{staticClass:"vueGridItem",attrs:{fill:""}},[n("h2",[e._v("Development Experience")])])],1),e._v(" "),n("vue-grid-row",[n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-code"),e._v(" "),n("h3",[e._v("Quick scaffolding")]),e._v(" "),n("p",[e._v("Create components, connected components, modules - and their tests - right from the CLI!")])],1)],1)],1),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-bullhorn"),e._v(" "),n("h3",[e._v("Instant feedback")]),e._v(" "),n("p",[e._v("Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes\n               to\n               the CSS and TypeScript are reflected instantaneously\n               without\n               refreshing the page. Preserve application state even when you update something in the underlying\n               code!")])],1)],1)],1)],1)],1)],1)},[],!1,function(e){this.$style=j.default.locals||j.default},null,null);O.options.__file="DevEx.vue";var S=O.exports,R={name:"VueIconChartLine"},X=n(219);var A=Object(v.a)(R,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 2048 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M2048 1536v128h-2048v-1536h128v1408h1920zm-128-1248v435q0 21-19.5 29.5t-35.5-7.5l-121-121-633 633q-10 10-23 10t-23-10l-233-233-416 416-192-192 585-585q10-10 23-10t23 10l233 233 464-464-121-121q-16-16-7.5-35.5t29.5-19.5h435q14 0 23 9t9 23z"}})])])},[],!1,function(e){this.$style=X.default.locals||X.default},null,null);A.options.__file="VueIconChartLine.vue";var M=A.exports,B={name:"VueIconCertificate"},K=n(221);var W=Object(v.a)(B,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1504 896l138 135q30 28 20 70-12 41-52 51l-188 48 53 186q12 41-19 70-29 31-70 19l-186-53-48 188q-10 40-51 52-12 2-19 2-31 0-51-22l-135-138-135 138q-28 30-70 20-41-11-51-52l-48-188-186 53q-41 12-70-19-31-29-19-70l53-186-188-48q-40-10-52-51-10-42 20-70l138-135-138-135q-30-28-20-70 12-41 52-51l188-48-53-186q-12-41 19-70 29-31 70-19l186 53 48-188q10-41 51-51 41-12 70 19l135 139 135-139q29-30 70-19 41 10 51 51l48 188 186-53q41-12 70 19 31 29 19 70l-53 186 188 48q40 10 52 51 10 42-20 70z"}})])])},[],!1,function(e){this.$style=K.default.locals||K.default},null,null);W.options.__file="VueIconCertificate.vue";var F=W.exports,D={components:{VueIconFlag:n(69).a,VueIconCertificate:F,VueIconChartLine:M,VueGrid:l.a,VueGridItem:u.a,VuePanel:P.a,VuePanelBody:z.a,VueGridRow:c.a}},J=n(223);var U=Object(v.a)(D,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$style.enterpriseReady,"featureSection"]},[n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",{staticClass:"vueGridItem",attrs:{fill:""}},[n("h2",[e._v("Enterprise ready")])]),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-chart-line"),e._v(" "),n("h3",[e._v("SEO")]),e._v(" "),n("p",[e._v("We support SEO (document head tags management) and server-side-rendering for search engines that\n               support\n               indexing of JavaScript content. (eg. Google)")])],1)],1)],1),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-certificate"),e._v(" "),n("h3",[e._v("Best practices")]),e._v(" "),n("p",[e._v("A Common style guide, TypeScript, and the best test setup: Automatically guarantee code quality and\n               non-breaking changes.")])],1)],1)],1),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-flag"),e._v(" "),n("h3",[e._v("i18n")]),e._v(" "),n("p",[e._v("Scalable apps need to support multiple languages, easily add and support multiple languages with\n               vue-i18n.")])],1)],1)],1)],1)],1)],1)},[],!1,function(e){this.$style=J.default.locals||J.default},null,null);U.options.__file="EnterpriseReady.vue";var Q=U.exports,H={name:"VueIconSpinner"},Y=n(225);var N=Object(v.a)(H,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"}})])])},[],!1,function(e){this.$style=Y.default.locals||Y.default},null,null);N.options.__file="VueIconSpinner.vue";var Z=N.exports,ee={name:"VueIconMobile"},te=n(227);var ne=Object(v.a)(ee,function(){var e=this.$createElement,t=this._self._c||e;return t("i",[t("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"}})])])},[],!1,function(e){this.$style=te.default.locals||te.default},null,null);ne.options.__file="VueIconMobile.vue";var ie=ne.exports,ae={components:{VueIconPuzzlePiece:n(68).a,VueIconMobile:ie,VueIconSpinner:Z,VueGrid:l.a,VueGridItem:u.a,VuePanel:P.a,VuePanelBody:z.a,VueGridRow:c.a}},se=n(229);var oe=Object(v.a)(ae,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$style.userExperience,"featureSection"]},[n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",{staticClass:"vueGridItem",attrs:{fill:""}},[n("h2",[e._v("User experience")])]),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-spinner"),e._v(" "),n("h3",[e._v("Animations")]),e._v(" "),n("p",[e._v("A stable animations set up already included ("),n("a",{attrs:{href:"http://animejs.com/",target:"_blank",rel:"noopener"}},[e._v("anime.js")]),e._v(").")])],1)],1)],1),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-mobile"),e._v(" "),n("h3",[e._v("Progressive-Web-App")]),e._v(" "),n("p",[e._v("Offline-first support with service-workers and a lighthouse score as high as possible (90+).")])],1)],1)],1),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",[n("vue-icon-puzzle-piece"),e._v(" "),n("h3",[e._v("Components")]),e._v(" "),n("p",[e._v("\n              A flexible component library that'll be extended over time.\n            ")]),e._v(" "),n("p",[e._v("\n              Visit the\n              "),n("router-link",{attrs:{to:"/components"}},[e._v("Component's page")]),e._v("\n              to see a preview of the available components.\n            ")],1)],1)],1)],1)],1)],1)],1)},[],!1,function(e){this.$style=se.default.locals||se.default},null,null);oe.options.__file="UserExperience.vue";var re=oe.exports,le={components:{VueGrid:l.a,VueGridItem:u.a,VuePanel:P.a,VuePanelBody:z.a,VueGridRow:c.a}},ce=n(231);var ue=Object(v.a)(le,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$style.quickStart,"featureSection"]},[n("vue-grid",[n("vue-grid-row",[n("vue-grid-item",{staticClass:"vueGridItem",attrs:{fill:""}},[n("h2",[e._v("Quick start")])]),e._v(" "),n("vue-grid-item",{staticClass:"vueGridItem"},[n("vue-panel",{staticClass:"vuePanel"},[n("vue-panel-body",{staticClass:"vuePanelBody"},[n("ol",[n("li",[e._v("Install node 8 or higher")]),e._v(" "),n("li",[e._v("Install npm 5 or higher")]),e._v(" "),n("li",[e._v("clone repository "),n("code",[e._v("git clone https://github.com/devCrossNet/vue-starter")])]),e._v(" "),n("li",[e._v("change directory "),n("code",[e._v("cd vue-starter")])]),e._v(" "),n("li",[e._v("Install dependencies: "),n("code",[e._v("npm install")])]),e._v(" "),n("li",[e._v("Run "),n("code",[e._v("npm run dev")])])])])],1)],1)],1)],1)],1)},[],!1,function(e){this.$style=ce.default.locals||ce.default},null,null);ue.options.__file="QuickStart.vue";var de=function(){return(de=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},pe={metaInfo:{title:"John McGuinness: Developer",meta:[{name:"description",content:"vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices"},{name:"robots",content:"INDEX,FOLLOW"},{name:"keywords",content:"vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app"},{name:"og:url",content:"https://vue-starter.herokuapp.com/"},{name:"og:site_name",content:"vue-starter"},{name:"og:type",content:"website"},{name:"og:locale",content:"en"},{name:"og:title",content:"vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices"},{name:"og:description",content:"vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices"},{name:"og:image:url",content:"https://vue-starter.herokuapp.com/logo.png"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@_jwerner_"},{name:"twitter:creator",content:"@_jwerner_"},{name:"twitter:title",content:"vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices"},{name:"twitter:url",content:"https://vue-starter.herokuapp.com/"},{name:"twitter:image",content:"https://vue-starter.herokuapp.com/logo.png"},{name:"twitter:description",content:"vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices"}]},components:{Stage:q,DevEx:S,EnterpriseReady:Q,UserExperience:re,QuickStart:ue.exports},computed:de({},Object(i.d)({disableParticles:function(e){return e.app.config&&e.app.config.features.disableParticles}}))},ve=n(233);var fe=Object(v.a)(pe,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.$style.home},[t("stage",{attrs:{"disable-particles":this.disableParticles}})],1)},[],!1,function(e){this.$style=ve.default.locals||ve.default},null,null);fe.options.__file="Home.vue";t.default=fe.exports},,,function(e,t,n){var i=n(152);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("68ecbe29",i,!0,{})},function(e,t,n){var i=n(154);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("04cc051e",i,!0,{})},,,function(e,t,n){"use strict";var i={name:"VuePanel"},a=n(151),s=n(0);var o=Object(s.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.$style.vuePanel},[this._t("default")],2)},[],!1,function(e){this.$style=a.default.locals||a.default},null,null);o.options.__file="VuePanel.vue";t.a=o.exports},function(e,t,n){"use strict";var i={name:"VuePanelBody"},a=n(153),s=n(0);var o=Object(s.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.$style.vuePanelBody},[this._t("default")],2)},[],!1,function(e){this.$style=a.default.locals||a.default},null,null);o.options.__file="VuePanelBody.vue";t.a=o.exports},,,,,function(e,t,n){var i=n(208);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("06263b7e",i,!0,{})},function(e,t,n){var i=n(210);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("705eac9c",i,!0,{})},function(e,t,n){var i=n(212);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("65d2d361",i,!0,{})},function(e,t,n){"use strict";var i=n(138),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.vuePanel_2tdxHYqq{background-color:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);border-radius:0;margin:0\n}",""]),t.locals={vuePanel:"vuePanel_2tdxHYqq"}},function(e,t,n){"use strict";var i=n(139),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.vuePanelBody_dGiASL6R{display:block;padding:1.6rem\n}",""]),t.locals={vuePanelBody:"vuePanelBody_dGiASL6R"}},function(e,t,n){var i=n(214);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("1f9e86c2",i,!0,{})},function(e,t,n){var i=n(216);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("667b181a",i,!0,{})},function(e,t,n){var i=n(218);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("75be78cb",i,!0,{})},function(e,t,n){var i=n(220);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("04f6678a",i,!0,{})},function(e,t,n){var i=n(222);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("d423d362",i,!0,{})},function(e,t,n){var i=n(224);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("06400fb6",i,!0,{})},function(e,t,n){var i=n(226);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("0bfc00de",i,!0,{})},function(e,t,n){var i=n(228);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("2ce5f63e",i,!0,{})},function(e,t,n){var i=n(230);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("b2e727e4",i,!0,{})},function(e,t,n){var i=n(232);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("1134a4a4",i,!0,{})},function(e,t,n){var i=n(234);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(2).default)("69d38004",i,!0,{})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var i=n(148),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(149),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.enterActive_3hyClc2M,.leaveActive_2FWs_r3I{-webkit-transition:2s;transition:2s\n}\n.enterTo_114JDjun,.leave_2itz4GPM{opacity:1;-webkit-transform:translate(0);transform:translate(0)\n}\n.enter_3NDgi3US,.leaveTo_2RLolX5e{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)\n}",""]),t.locals={enterActive:"enterActive_3hyClc2M",leaveActive:"leaveActive_2FWs_r3I",enterTo:"enterTo_114JDjun",leave:"leave_2itz4GPM",enter:"enter_3NDgi3US",leaveTo:"leaveTo_2RLolX5e"}},function(e,t,n){"use strict";var i=n(150),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,'\n.stage_VwXaF1J8{min-height:100vh;background:#fff;overflow:hidden;position:relative;text-align:center\n}\n.accent_3oDdYLdP{-webkit-transform:skewX(-30deg) translateX(95%);transform:skewX(-30deg) translateX(95%);background:#501b1d;background:linear-gradient(-171deg,#501b1d,#2e1114)\n}\n.accent_3oDdYLdP,.accentTwo_3vg5sOKa{width:75%;min-height:100vh;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);position:absolute;-webkit-transition:-webkit-transform .25s linear;transition:-webkit-transform .25s linear;transition:transform .25s linear;transition:transform .25s linear,-webkit-transform .25s linear\n}\n.accentTwo_3vg5sOKa{-webkit-transform:skewX(30deg) translateX(-62%);transform:skewX(30deg) translateX(-62%);background:#2e1114;background:linear-gradient(-171deg,#2e1114,#501b1d)\n}\n.canvas_yMNpSrIi{min-height:100vh;width:100%;position:absolute;background-color:transparent;left:0;top:0\n}\n.textBlock_2IyyWXip{width:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;vertical-align:middle;margin-top:10%;text-align:center;padding:.25rem\n}\n.mainTitle_4pkMJyX4{font-family:Playfair Display,Times,sans-serif;font-weight:700;width:auto;display:inline-block;color:#fff;background-repeat:no-repeat;background-size:100% .1em;background-position:50% 88%;-webkit-animation:mainTitleEntry_2GTUtfot 10s ease-in-out;animation:mainTitleEntry_2GTUtfot 10s ease-in-out\n}\n.mainTitle_4pkMJyX4,.mainTitleLoaded_uKpE6lGF{font-size:8rem;letter-spacing:.5rem;padding:.5rem 1rem;margin-top:.25rem;background-image:linear-gradient(120deg,#501b1d,#65585c 70%);-webkit-transition:all .25s ease-in;transition:all .25s ease-in\n}\n.mainTitleLoaded_uKpE6lGF{background-position:100% 88%;background-size:100% 95%\n}\n.title_kb1uTXtH{font-family:Montserrat,Helvetica,sans-serif;margin:.75rem;-webkit-transition:.2s linear;transition:.2s linear\n}\n.subTitle_2kcK4ktK{font-family:Parisiene,Snell Roundhand,"cursive";margin:1rem\n}\n.linkContainer_1LkJcCKQ{background:transparent;display:inline-block;width:auto;padding:0;margin-top:1rem;cursor:pointer;-webkit-transition:.25s ease-in-out;transition:.25s ease-in-out\n}\n.linkContainer_1LkJcCKQ a{text-decoration:none\n}\n.linkContainer_1LkJcCKQ a span{width:100%;height:100%;min-width:100px;min-height:100px;vertical-align:middle;display:inline-block;background:#501b1d;color:#fff;font-size:5.5rem;padding:.25rem;border:4px solid transparent;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out\n}\n.linkContainer_1LkJcCKQ:hover{border-radius:100%\n}\n.linkContainer_1LkJcCKQ:hover a span{background:#fff;border-radius:100%;border:4px solid #65585c;color:#501b1d\n}\n@-webkit-keyframes spinner_32grVZ65{\n0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n@keyframes spinner_32grVZ65{\n0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n.bottomMessageContainer_3XLzQGz8{position:absolute;bottom:10px;left:0;right:0;margin:auto\n}\n.message_hpX9AnJl{font-family:Montserrat,Helvetica,sans-serif;-webkit-transition:.2s linear;transition:.2s linear\n}\n.github_3GWxXUP5{font-size:4.6rem;top:13.6rem;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);box-shadow:0 1px 3px rgba(0,0,0,.3);display:inline-block;background:-webkit-gradient(linear,left top,left bottom,from(#fff),color-stop(50%,#fff),to(#fff));background:linear-gradient(180deg,#fff 0,#fff 50%,#fff);-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1);-webkit-transition-property:background-color,-webkit-box-shadow;transition-property:background-color,-webkit-box-shadow;transition-property:box-shadow,background-color;transition-property:box-shadow,background-color,-webkit-box-shadow;color:#000;padding:.8rem 1.6rem\n}\n.github_3GWxXUP5:hover{-webkit-box-shadow:0 12px 20px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.18);box-shadow:0 12px 20px rgba(0,0,0,.2),0 10px 10px rgba(0,0,0,.18)\n}\n.github_3GWxXUP5 i{height:4.6rem;width:4.6rem\n}\n@-webkit-keyframes mainTitleEntry_2GTUtfot{\n0%{font-family:Playfair Display,Times,sans-serif;font-weight:700;padding:.5rem 1rem;width:auto;display:inline-block;background-repeat:no-repeat;background-size:0 .1em;background-position:50% 88%;-webkit-transition:all .25s ease-out;transition:all .25s ease-out\n}\n5%{background-size:100% .1em;background-position:0 88%\n}\n8%{background-position:100% 88%;background-size:100% 95%\n}\nto{background-position:100% 88%;background-size:100% 95%\n}\n}\n@keyframes mainTitleEntry_2GTUtfot{\n0%{font-family:Playfair Display,Times,sans-serif;font-weight:700;padding:.5rem 1rem;width:auto;display:inline-block;background-repeat:no-repeat;background-size:0 .1em;background-position:50% 88%;-webkit-transition:all .25s ease-out;transition:all .25s ease-out\n}\n5%{background-size:100% .1em;background-position:0 88%\n}\n8%{background-position:100% 88%;background-size:100% 95%\n}\nto{background-position:100% 88%;background-size:100% 95%\n}\n}\n@-webkit-keyframes pulse_2xy0Q2-1{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)\n}\nto{-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes pulse_2xy0Q2-1{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n50%{-webkit-transform:scale(1.05);transform:scale(1.05)\n}\nto{-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes fadeIn_1xs79670{\n50%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes fadeIn_1xs79670{\n50%{opacity:0\n}\nto{opacity:1\n}\n}\n@media screen and (max-width:319px){\n.mainTitle_4pkMJyX4{font-size:4rem\n}\n}\n@media (max-width:320px){\n.mainTitleLoaded_uKpE6lGF{font-size:2.5rem\n}\n.title_kb1uTXtH{font-size:2rem;margin:auto .5rem\n}\n.subTitle_2kcK4ktK{font-size:2rem;margin:auto 1rem\n}\n.message_hpX9AnJl{font-size:1.5rem;margin:auto 2rem\n}\n}\n@media (min-width:768px){\n.github_3GWxXUP5{top:24rem\n}\n}\n@media (min-width:1024px){\n.github_3GWxXUP5{top:33.6rem\n}\n}',""]),t.locals={stage:"stage_VwXaF1J8",accent:"accent_3oDdYLdP",accentTwo:"accentTwo_3vg5sOKa",canvas:"canvas_yMNpSrIi",textBlock:"textBlock_2IyyWXip",mainTitle:"mainTitle_4pkMJyX4",mainTitleEntry:"mainTitleEntry_2GTUtfot",mainTitleLoaded:"mainTitleLoaded_uKpE6lGF",title:"title_kb1uTXtH",subTitle:"subTitle_2kcK4ktK",linkContainer:"linkContainer_1LkJcCKQ",bottomMessageContainer:"bottomMessageContainer_3XLzQGz8",message:"message_hpX9AnJl",github:"github_3GWxXUP5",spinner:"spinner_32grVZ65",pulse:"pulse_2xy0Q2-1",fadeIn:"fadeIn_1xs79670"}},function(e,t,n){"use strict";var i=n(155),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(156),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(157),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.devEx_2wzf_Fd6{display:block;text-align:center\n}\n.devEx_2wzf_Fd6 i{height:4.6rem;width:4.6rem;margin-top:.8rem\n}",""]),t.locals={devEx:"devEx_2wzf_Fd6"}},function(e,t,n){"use strict";var i=n(158),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(159),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(160),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.enterpriseReady_2RR-ZXLr{display:block;text-align:center;background:#65585c;background:linear-gradient(-135deg,#65585c,#adadad)\n}\n.enterpriseReady_2RR-ZXLr i{display:inline-block;height:4.6rem;width:4.6rem;margin-top:.8rem\n}",""]),t.locals={enterpriseReady:"enterpriseReady_2RR-ZXLr"}},function(e,t,n){"use strict";var i=n(161),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(162),a=n.n(i);t.default=a.a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},function(e,t,n){"use strict";var i=n(163),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.userExperience_LIiuaQDw{display:block;text-align:center\n}\n.userExperience_LIiuaQDw i{display:inline-block;height:4.6rem;width:4.6rem;margin-top:.8rem\n}",""]),t.locals={userExperience:"userExperience_LIiuaQDw"}},function(e,t,n){"use strict";var i=n(164),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.quickStart_2mK-hFzR{display:block;text-align:center;background:#2e1114;background:linear-gradient(-31deg,#2e1114,#501b1d)\n}\n.quickStart_2mK-hFzR .vuePanelBody{text-align:left;overflow:hidden\n}\n.quickStart_2mK-hFzR .vuePanelBody ol{margin-top:4rem;padding:0 0 0 1.6rem\n}\n.quickStart_2mK-hFzR .vuePanelBody ol li{margin-bottom:1.6rem\n}\n@media (min-width:768px){\n.quickStart_2mK-hFzR .vuePanel{width:50%;margin-left:25%\n}\n}\n@media (min-width:1024px){\n.quickStart_2mK-hFzR .vuePanel{width:33.3333333%;margin-left:33.3333333%\n}\n}",""]),t.locals={quickStart:"quickStart_2mK-hFzR"}},function(e,t,n){"use strict";var i=n(165),a=n.n(i);t.default=a.a},function(e,t,n){(t=e.exports=n(1)(!1)).push([e.i,"\n.home_1kar3jTW .vuePanel{height:100%\n}\n.home_1kar3jTW .vueGridItem{margin-bottom:1.6rem\n}\n.home_1kar3jTW .featureSection{padding:0\n}\n@media (min-width:1024px){\n.home_1kar3jTW .featureSection{padding:12rem 0\n}\n}",""]),t.locals={home:"home_1kar3jTW"}}])]);