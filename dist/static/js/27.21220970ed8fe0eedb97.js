webpackJsonp([27],{"4Ifj":function(e,s){},cSvg:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"",data:function(){return{swiperOption:{on:{slideChangeTransitionEnd:function(){for(var e=document.getElementById("exam_progress").getElementsByTagName("li"),s=0;s<e.length;s++)s===this.activeIndex?e[this.activeIndex].className="activeSelect":e[s].className=""}}}}},methods:{selectMenu:function(e){var s=document.getElementById("exam_progress").getElementsByTagName("li");switch(e){case 0:this.$refs.myswiper.swiper.slideTo(0,300,!1),s[0].className="activeSelect",s[1].className=s[2].className=s[3].className="";break;case 1:this.$refs.myswiper.swiper.slideTo(1,300,!1),s[1].className="activeSelect",s[0].className=s[2].className=s[3].className="";break;case 2:this.$refs.myswiper.swiper.slideTo(2,300,!1),s[2].className="activeSelect",s[0].className=s[1].className=s[3].className="";break;case 3:this.$refs.myswiper.swiper.slideTo(3,300,!1),s[3].className="activeSelect",s[0].className=s[1].className=s[2].className=""}}}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"examinationRegistration"},[e._m(0),e._v(" "),t("ul",{staticClass:"exam_progress",attrs:{id:"exam_progress"}},[t("li",{staticClass:"activeSelect",on:{click:function(s){return e.selectMenu(0)}}},[e._v("全部")]),e._v(" "),t("li",{on:{click:function(s){return e.selectMenu(1)}}},[e._v("未预约")]),e._v(" "),t("li",{on:{click:function(s){return e.selectMenu(2)}}},[e._v("待审核")]),e._v(" "),t("li",{on:{click:function(s){return e.selectMenu(3)}}},[e._v("审核通过")])]),e._v(" "),t("swiper",{ref:"myswiper",attrs:{options:e.swiperOption}},[t("swiper-slide",[e._v("暂时没有相关数据")]),e._v(" "),t("swiper-slide",[e._v("暂时没有相关数据")]),e._v(" "),t("swiper-slide",[e._v("暂时没有相关数据")]),e._v(" "),t("swiper-slide",[e._v("暂时没有相关数据")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"header"},[s("a",{attrs:{href:"#/myinfo"}},[s("img",{attrs:{src:t("oa8A")}})]),s("span",[this._v("考试报名")])])}]};var c=t("VU/8")(a,i,!1,function(e){t("4Ifj")},"data-v-092d599f",null);s.default=c.exports}});