webpackJsonp([19],{"6gYu":function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("mtWM"),r=t.n(i),n={name:"",data:function(){return{phoneNumber:"",timer:0,time:60,psd:"",psd2:"",confirmNumber:"",oldPhone:!1,psdImgFlag:!0,psd2ImgFlag:!0,psd2ImgFlag0:!1,psdImgFlag0:!1,confirmImgFlag:!0,confirmImgFlag0:!1,phoneImgFlag:!0,phoneImgFlag0:!1,TipsMsg:["手机号还未注册","密码为6位且不超过20位的数字或字母或下划线组成","前后两次密码不一致","验证码错误"],errorTipsMsg:""}},watch:{phoneNumber:function(){this.checkNumber()}},beforeDestroy:function(){clearInterval(this.timer)},methods:{backToMine:function(){this.$router.go(-1)},getConfirm:function(){var s=this;if(!this.phoneImgFlag&&this.oldPhone){if(60!==this.time)return;this.timer=setInterval(function(){s.$refs.getConfirm.innerHTML=s.time+"s",s.time--,-1===s.time&&(clearInterval(s.timer),s.time=60,s.$refs.getConfirm.innerHTML="获取验证码")},1e3);var e=new URLSearchParams,t=this.phoneNumber.toString();e.append("mobile",t),r.a.post("http://www.gk0101.com/cms/sendAliMsg",e).then(function(s){var e=s.data.code;console.log(e)})}},checkConfirm:function(){this.confirmNumber.trim()?this.confirmImgFlag=!1:this.confirmImgFlag=!0},checkPsd:function(){this.psd&&this.errorTipsMsg!==this.TipsMsg[1]?this.psdImgFlag=!1:this.psdImgFlag=!0},checkPsd2:function(){this.psd2&&this.errorTipsMsg!==this.TipsMsg[2]?this.psd2ImgFlag=!1:this.psd2ImgFlag=!0},checkCommonPsd:function(){/^[\w]{6,20}$/.test(this.psd2)&&this.psd2===this.psd?this.errorTipsMsg="":this.errorTipsMsg=this.TipsMsg[2]},checkEffectivePsd:function(){/^[\w]{6,20}$/.test(this.psd)?this.psd!==this.psd2&&/^[\w]{6,20}$/.test(this.psd)?this.errorTipsMsg=this.TipsMsg[2]:this.errorTipsMsg="":this.errorTipsMsg=this.TipsMsg[1]},checkNumber:function(){/^\d+/.test(this.phoneNumber)?this.phoneNumber=this.phoneNumber.replace(/\D/g,""):this.phoneNumber=""},checkOldphone:function(){var s=this;if(/^1[34578]\d{9}$/.test(this.phoneNumber)){var e=new URLSearchParams,t=this.phoneNumber.toString();e.append("mobile",t),r.a.post("http://www.gk0101.com/cms/isNoMobile",e).then(function(e){e.data.mess?(s.oldPhone=!0,s.errorTipsMsg=""):(s.errorTipsMsg=s.TipsMsg[0],s.oldPhone=!1)})}},changeFlag0:function(s){"phone"===s?this.phoneImgFlag0=!0:"psd"===s?this.psdImgFlag0=!0:"psd2"===s?this.psd2ImgFlag0=!0:this.confirmImgFlag0=!0},checkPhone:function(){/^1[34578]\d{9}$/.test(this.phoneNumber)&&this.oldPhone?this.phoneImgFlag=!1:this.phoneImgFlag=!0},forgetPsd:function(){var s=this;if((!this.errorTipsMsg||this.errorTipsMsg===this.TipsMsg[3])&&!this.phoneImgFlag&&!this.psd2ImgFlag&&!this.psdImgFlag&&this.oldPhone&&!this.confirmImgFlag){var e=new URLSearchParams;e.append("mobile",this.phoneNumber),e.append("code",this.confirmNumber),e.append("userPassword",this.psd),r.a.post("http://www.gk0101.com/cms/setNewPassword",e).then(function(e){0===e.data.code?(s.$router.replace("/mine"),s.errorTipsMsg=""):(s.errorTipsMsg=s.TipsMsg[3],s.confirmImgFlag=!0)})}}}},o={render:function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"forgetpsd clearMargin_top"},[i("a",{staticClass:"backArrow",attrs:{href:"javascript:;"}},[i("img",{attrs:{src:t("H5bj")},on:{click:s.backToMine}})]),s._v(" "),i("span",{staticClass:"title"},[s._v("忘记密码")]),s._v(" "),i("div",{staticClass:"inputPhone"},[i("span",[s._v("+86")]),s._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:s.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:s.phoneNumber},on:{keyup:s.checkOldphone,focus:function(e){return s.changeFlag0("phone")},blur:s.checkPhone,input:function(e){e.target.composing||(s.phoneNumber=e.target.value)}}}),s._v(" "),s.phoneImgFlag?i("img",{directives:[{name:"show",rawName:"v-show",value:s.phoneImgFlag0,expression:"phoneImgFlag0"}],attrs:{src:t("7rtp")}}):i("img",{attrs:{src:t("5hax")}})]),s._v(" "),i("div",{staticClass:"inputConfirm"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.confirmNumber,expression:"confirmNumber"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:s.confirmNumber},on:{focus:function(e){return s.changeFlag0("confirm")},blur:s.checkConfirm,input:function(e){e.target.composing||(s.confirmNumber=e.target.value)}}}),s._v(" "),i("span",{ref:"getConfirm",on:{click:s.getConfirm}},[s._v("获取验证码")]),s._v(" "),s.confirmImgFlag?i("img",{directives:[{name:"show",rawName:"v-show",value:s.confirmImgFlag0,expression:"confirmImgFlag0"}],attrs:{src:t("7rtp")}}):i("img",{attrs:{src:t("5hax")}})]),s._v(" "),i("div",{staticClass:"inputNewPsd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.psd,expression:"psd"}],attrs:{type:"password",placeholder:"请输入新密码"},domProps:{value:s.psd},on:{focus:function(e){return s.changeFlag0("psd")},blur:s.checkPsd,keyup:s.checkEffectivePsd,input:function(e){e.target.composing||(s.psd=e.target.value)}}}),s._v(" "),s.psdImgFlag?i("img",{directives:[{name:"show",rawName:"v-show",value:s.psdImgFlag0,expression:"psdImgFlag0"}],attrs:{src:t("7rtp")}}):i("img",{attrs:{src:t("5hax")}})]),s._v(" "),i("div",{staticClass:"inputNewPsd2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.psd2,expression:"psd2"}],attrs:{type:"password",placeholder:"请再次确认新密码"},domProps:{value:s.psd2},on:{focus:function(e){return s.changeFlag0("psd2")},keyup:s.checkCommonPsd,blur:s.checkPsd2,input:function(e){e.target.composing||(s.psd2=e.target.value)}}}),s.psd2ImgFlag?i("img",{directives:[{name:"show",rawName:"v-show",value:s.psd2ImgFlag0,expression:"psd2ImgFlag0"}],attrs:{src:t("7rtp")}}):i("img",{attrs:{src:t("5hax")}})]),s._v(" "),i("button",{staticClass:"forgetPsd_btn",on:{click:s.forgetPsd}},[s._v("确定")]),s._v(" "),i("span",{staticClass:"errorTipsMsg",domProps:{textContent:s._s(s.errorTipsMsg)}})])},staticRenderFns:[]};var a=t("VU/8")(n,o,!1,function(s){t("kKpz")},"data-v-7088824d",null);e.default=a.exports},kKpz:function(s,e){}});