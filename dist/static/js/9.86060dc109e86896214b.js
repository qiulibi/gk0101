webpackJsonp([9],{"3ln3":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("BO1k"),a=r.n(s),n=r("mtWM"),o=r.n(n),i={name:"",data:function(){return{recordCourse:[],studyRatio:[],API_ROOT:"http://gjzxedu.gtafe.com/"}},mounted:function(){var t=this;o.a.get("http://gjzxedu.gtafe.com//exam/rest/v1/studySheet/getMyStudySheet?userId="+localStorage.getItem("userID")).then(function(e){var r=e.data.data;t.recordCourse=r;var s=!0,n=!1,o=void 0;try{for(var i,u=a()(r);!(s=(i=u.next()).done);s=!0){var c=i.value;t.studyRatio.push(parseInt(c.learnedMic/c.totalMic*100))}}catch(t){n=!0,o=t}finally{try{!s&&u.return&&u.return()}finally{if(n)throw o}}t.$nextTick(function(){0!==t.recordCourse.length&&t.getCanvas()})})},methods:{goCourseVideo:function(t){this.$router.push({name:"CourseDetail",query:{courseId:t}})},getCanvas:function(){var t=document.getElementsByTagName("canvas"),e=document.getElementsByClassName("record-course")[0],r=!0,s=!1,n=void 0;try{for(var o,i=a()(t);!(r=(o=i.next()).done);r=!0){var u=o.value;u.width=.096*e.getBoundingClientRect().width,u.height=.353*e.getBoundingClientRect().height}}catch(t){s=!0,n=t}finally{try{!r&&i.return&&i.return()}finally{if(s)throw n}}for(var c=.028*t[0].width,d=.083*t[0].width,l=.33*t[0].width,h=.18*t[0].width,v=.139*t[0].width,f=t[0].width/2,g=t[0].height/2,y=t[0].height/2,m=0;m<t.length;m++){var _=t[m].getContext("2d");_.save(),_.strokeStyle="#999999",_.lineWidth=c,_.beginPath(),_.arc(f,g,y-2,0,2*Math.PI,!0),_.stroke(),_.closePath(),_.restore(),_.save(),_.fillStyle="#3246D8",_.font=l+"px PingFangSC-Regular",_.fillText(this.studyRatio[m]+"%",f-h,g+v),_.restore(),_.save(),_.strokeStyle="#3246D8",_.lineWidth=d,_.beginPath(),_.arc(f,g,y-2,-Math.PI/2,-Math.PI/2+this.studyRatio[m]*(2*Math.PI/100),!1),_.stroke(),_.closePath(),_.restore()}}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myrecord"},[t._m(0),t._v(" "),t._l(t.recordCourse,function(e,r){return s("div",{key:r,staticClass:"record-course",on:{click:function(r){return t.goCourseVideo(e.courseId)}}},[s("img",{attrs:{src:t.API_ROOT+e.coverImg}}),t._v(" "),s("span",{staticClass:"coursetitle"},[t._v(t._s(e.courseName))]),t._v(" "),s("span",{staticClass:"courseTime"},[t._v("上次学习"+t._s(e.studyTime.slice(0,10)))]),t._v(" "),s("canvas"),t._v(" "),s("span",{staticClass:"studyStatus"},[t._v(t._s(1===e.studyStatus?"学习中":9===e.studyStatus?"已完成":"未学习"))])])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.recordCourse.length,expression:"recordCourse.length === 0"}],staticClass:"notFound"},[s("img",{staticClass:"notFound_img",attrs:{src:r("kcR/")}}),t._v(" "),s("span",[t._v("暂无记录")])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("a",{attrs:{href:"#/myinfo"}},[e("img",{attrs:{src:r("oa8A")}})]),e("span",[this._v("记录")])])}]};var c=r("VU/8")(i,u,!1,function(t){r("7HZA")},"data-v-7de542bd",null);e.default=c.exports},"7HZA":function(t,e){},BO1k:function(t,e,r){t.exports={default:r("fxRn"),__esModule:!0}},fxRn:function(t,e,r){r("+tPU"),r("zQR9"),t.exports=r("g8Ux")},g8Ux:function(t,e,r){var s=r("77Pl"),a=r("3fs2");t.exports=r("FeBl").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}}});