webpackJsonp([26],{"3ln3":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("BO1k"),a=r.n(s),n=r("mtWM"),o=r.n(n),i={name:"",data:function(){return{recordCourse:[],studyRatio:[]}},mounted:function(){var t=this;o.a.get("http://www.gk0101.com/exam/rest/v1/studySheet/getMyStudySheet?userId="+localStorage.getItem("userID")).then(function(e){var r=e.data.data;t.recordCourse=r;var s=!0,n=!1,o=void 0;try{for(var i,c=a()(r);!(s=(i=c.next()).done);s=!0){var u=i.value;t.studyRatio.push(parseInt(u.learnedMic/u.totalMic*100))}}catch(t){n=!0,o=t}finally{try{!s&&c.return&&c.return()}finally{if(n)throw o}}t.$nextTick(function(){0!==t.recordCourse.length&&t.getCanvas()})})},methods:{goCourseVideo:function(t){this.$router.push({name:"CourseDetail",query:{courseId:t}})},getCanvas:function(){var t=document.getElementsByTagName("canvas"),e=document.getElementsByClassName("record-course")[0],r=!0,s=!1,n=void 0;try{for(var o,i=a()(t);!(r=(o=i.next()).done);r=!0){var c=o.value;c.width=.096*e.getBoundingClientRect().width,c.height=.353*e.getBoundingClientRect().height}}catch(t){s=!0,n=t}finally{try{!r&&i.return&&i.return()}finally{if(s)throw n}}for(var u=.028*t[0].width,d=.083*t[0].width,l=.33*t[0].width,h=.18*t[0].width,v=.139*t[0].width,g=t[0].width/2,f=t[0].height/2,m=t[0].height/2,y=0;y<t.length;y++){var C=t[y].getContext("2d");C.save(),C.strokeStyle="#999999",C.lineWidth=u,C.beginPath(),C.arc(g,f,m-2,0,2*Math.PI,!0),C.stroke(),C.closePath(),C.restore(),C.save(),C.fillStyle="#3246D8",C.font=l+"px PingFangSC-Regular",C.fillText(this.studyRatio[y]+"%",g-h,f+v),C.restore(),C.save(),C.strokeStyle="#3246D8",C.lineWidth=d,C.beginPath(),C.arc(g,f,m-2,-Math.PI/2,-Math.PI/2+this.studyRatio[y]*(2*Math.PI/100),!1),C.stroke(),C.closePath(),C.restore()}}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myrecord"},[t._m(0),t._v(" "),t._l(t.recordCourse,function(e,r){return s("div",{key:r,staticClass:"record-course",on:{click:function(r){return t.goCourseVideo(e.courseId)}}},[s("img",{attrs:{src:"http://www.gk0101.com"+e.coverImg}}),t._v(" "),s("span",{staticClass:"coursetitle"},[t._v(t._s(e.courseName))]),t._v(" "),s("span",{staticClass:"courseTime"},[t._v("上次学习"+t._s(e.studyTime.slice(0,10)))]),t._v(" "),s("canvas"),t._v(" "),s("span",{staticClass:"studyStatus"},[t._v(t._s(1===e.studyStatus?"学习中":9===e.studyStatus?"已完成":"未学习"))])])}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.recordCourse.length,expression:"recordCourse.length === 0"}],staticClass:"notFound"},[s("img",{staticClass:"notFound_img",attrs:{src:r("kcR/")}}),t._v(" "),s("span",[t._v("暂无记录")])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("a",{attrs:{href:"#/myinfo"}},[e("img",{attrs:{src:r("oa8A")}})]),e("span",[this._v("记录")])])}]};var u=r("VU/8")(i,c,!1,function(t){r("B+Kd")},"data-v-0a9a1393",null);e.default=u.exports},"B+Kd":function(t,e){}});