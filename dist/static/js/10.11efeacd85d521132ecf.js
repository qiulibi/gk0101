webpackJsonp([10],{EN4Z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mtWM"),r=a.n(s),n={name:"",data:function(){return{credits:0}},mounted:function(){var t=this,e=localStorage.getItem("userID"),a=new URLSearchParams;a.append("userId",e),a.append("institutionId","10103"),r.a.post("http://www.gk0101.com/exam/rest/v1/exam/getInformationByUserId",a).then(function(e){if(0===e.data.code){var a=e.data.data;t.credits=a.credits}})}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mycredit"},[t._m(0),t._v(" "),s("div",{staticClass:"credit_content"},[s("img",{attrs:{src:a("HMSp")}}),t._v(" "),s("span",{staticClass:"credits"},[t._v(t._s(t.credits))]),t._v(" "),s("span",{staticClass:"credit_tags"},[t._v("已获学分")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("a",{attrs:{href:"#/myinfo"}},[e("img",{attrs:{src:a("oa8A")}})]),e("span",[this._v("学分")])])}]};var c=a("VU/8")(n,i,!1,function(t){a("riDN")},"data-v-9e9f4770",null);e.default=c.exports},HMSp:function(t,e,a){t.exports=a.p+"static/img/credit@2x.ca908b2.png"},riDN:function(t,e){}});