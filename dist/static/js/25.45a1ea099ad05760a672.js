webpackJsonp([25],{"6KO2":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("BO1k"),a=s.n(i),r=s("mtWM"),o=s.n(r),n={name:"",data:function(){return{publicCourse:[],publicSituation:[],majorSituation:[],majorCourse:[],studyRatio:[],swiperOption:{on:{slideChangeTransitionEnd:function(){for(var t=document.getElementById("myCourseClass").getElementsByTagName("li"),e=0;e<t.length;e++)e===this.activeIndex?t[e].setAttribute("class","activeSelect"):t[e].setAttribute("class","")}}}}},created:function(){var t=this,e=localStorage.getItem("userID"),s="http://www.gk0101.com/teach/rest/v1/course/myCourseInfoList?pageNo=1&pageSize=10&courseClassify=1&userId="+e,i="http://www.gk0101.com/teach/rest/v1/course/myCourseInfoList?pageNo=1&pageSize=10&courseClassify=3&userId="+e+"&institutionId=10103";o.a.get(s).then(function(e){var s=e.data.data.result;t.publicCourse=s;for(var a=0;a<s.length;a++)t.studyRatio.push(parseInt(s[a].learnedMic/s[a].totalMic*100)),0===s[a].learnedMic?t.publicSituation[a]="未学习":s[a].learnedMic<s[a].totalMic?t.publicSituation[a]="学习中":s[a].learnedMic===s[a].totalMic&&(t.publicSituation[a]="已完成");o.a.get(i).then(function(e){var s=e.data.data.result;t.majorCourse=s;for(var i=0;i<s.length;i++)t.studyRatio.push(parseInt(s[i].learnedMic/s[i].totalMic*100)),0===s[i].learnedMic?t.majorSituation[i]="未学习":s[i].learnedMic<s[i].totalMic?t.majorSituation[i]="学习中":s[i].learnedMic===s[i].totalMic&&(t.majorSituation[i]="已完成")})})},methods:{selectMenu:function(t){var e=document.getElementById("myCourseClass").getElementsByTagName("li");0===t?(e[0].setAttribute("class","activeSelect"),e[1].setAttribute("class",""),this.$refs.myswiper.swiper.slideTo(0,300,!1)):1===t&&(e[1].setAttribute("class","activeSelect"),e[0].setAttribute("class",""),this.$refs.myswiper.swiper.slideTo(1,300,!1))},goCourseVideo:function(t){this.$router.push({name:"CourseDetail",query:{courseId:t}})}},mounted:function(){var t=this;setTimeout(function(){var e=document.getElementsByTagName("canvas"),s=document.getElementsByClassName("courseInfoDetail")[0],i=!0,r=!1,o=void 0;try{for(var n,c=a()(e);!(i=(n=c.next()).done);i=!0){var u=n.value;u.width=.096*s.getBoundingClientRect().width,u.height=.353*s.getBoundingClientRect().height}}catch(t){r=!0,o=t}finally{try{!i&&c.return&&c.return()}finally{if(r)throw o}}for(var l=.028*e[0].width,d=.083*e[0].width,v=.33*e[0].width,f=.18*e[0].width,h=.139*e[0].width,m=e[0].width/2,p=e[0].height/2,g=e[0].height/2,_=0;_<e.length;_++){var C=e[_].getContext("2d");C.save(),C.strokeStyle="#999999",C.lineWidth=l,C.beginPath(),C.arc(m,p,g-2,0,2*Math.PI,!0),C.stroke(),C.closePath(),C.restore(),C.save(),C.fillStyle="#3246D8",C.font=v+"px PingFangSC-Regular",C.fillText(t.studyRatio[_]+"%",m-f,p+h),C.restore(),C.save(),C.strokeStyle="#3246D8",C.lineWidth=d,C.beginPath(),C.arc(m,p,g-2,-Math.PI/2,-Math.PI/2+t.studyRatio[_]*(2*Math.PI/100),!1),C.stroke(),C.closePath(),C.restore()}},600)}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mycourse"},[t._m(0),t._v(" "),s("ul",{staticClass:"myCourseClass",attrs:{id:"myCourseClass"}},[s("li",{staticClass:"activeSelect",on:{click:function(e){return t.selectMenu(0)}}},[t._v("公共课程")]),t._v(" "),s("li",{on:{click:function(e){return t.selectMenu(1)}}},[t._v("专业课程")])]),t._v(" "),s("swiper",{ref:"myswiper",attrs:{options:t.swiperOption}},[s("swiper-slide",t._l(t.publicCourse,function(e,i){return s("div",{key:i,staticClass:"courseInfoDetail",on:{click:function(s){return t.goCourseVideo(e.id)}}},[s("img",{attrs:{src:"http://www.gk0101.com"+e.coverImg}}),t._v(" "),s("span",{staticClass:"courseInfo_coursetitle"},[t._v(t._s(e.courseName))]),t._v(" "),s("span",{staticClass:"courseInfo_courseTotal"},[t._v(t._s(e.totalMic)+"节微课")]),t._v(" "),s("span",{staticClass:"courseInfo_coursePrice"},[t._v(t._s(e.price))]),t._v(" "),s("span",{staticClass:"studyInfo"},[t._v(t._s(t.publicSituation[i]))]),t._v(" "),s("canvas")])}),0),t._v(" "),s("swiper-slide",t._l(t.majorCourse,function(e,i){return s("div",{key:i,staticClass:"courseInfoDetail",on:{click:function(s){return t.goCourseVideo(e.id)}}},[s("img",{attrs:{src:"http://www.gk0101.com"+e.coverImg}}),t._v(" "),s("span",{staticClass:"courseInfo_coursetitle"},[t._v(t._s(e.courseName))]),t._v(" "),s("span",{staticClass:"courseInfo_courseTotal"},[t._v(t._s(e.totalMic)+"节微课")]),t._v(" "),s("span",{staticClass:"courseInfo_coursePrice"},[t._v(t._s(e.price))]),t._v(" "),s("span",{staticClass:"studyInfo"},[t._v(t._s(t.majorSituation[i]))]),t._v(" "),s("canvas")])}),0)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("a",{attrs:{href:"#/myinfo"}},[e("img",{attrs:{src:s("oa8A")}})]),e("span",[this._v("我的课程")])])}]};var u=s("VU/8")(n,c,!1,function(t){s("xfN2")},"data-v-3af04c23",null);e.default=u.exports},xfN2:function(t,e){}});