webpackJsonp([10],{djVU:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("mvHQ"),a=s.n(n),i=s("mtWM"),o=s.n(i),r={name:"",data:function(){return{phoneNumber:"",psdImgFlag:!0,phoneImgFlag:!0,phoneImgFlag0:!1,psdImgFlag0:!1,psd:"",Tips:!1}},watch:{phoneNumber:function(){this.checkNumber()}},methods:{goBack:function(){this.$router.go(-1)},goForgetPsd:function(){this.$router.push("/forgetpsd")},goRegister:function(){this.$router.replace("/register")},goLogin:function(){var e=this;if(!this.psdImgFlag&&!this.phoneImgFlag&&!this.Tips){var t=new URLSearchParams,s={userAccount:this.phoneNumber,userPassword:this.psd,equipmentType:3,institutionId:"10103",publicIp:"183.56.162.88"};t.append("params",a()(s)),o.a.post("http://www.gk0101.com/cms/rest/v1/login/doLogin",t).then(function(t){var s=t.data.code,n=t.data.data.id;0===s?(e.$router.replace("/home"),localStorage.setItem("userID",n),window.JSIAppData?window.JSIAppData.saveUserId(n):window.webkit&&window.webkit.messageHandlers.saveUserId.postMessage(n)):e.Tips=!0}).catch(function(e){alert("登录失败了~~~"+e)})}},checkNumber:function(){/^\d+/.test(this.phoneNumber)?this.phoneNumber=this.phoneNumber.replace(/\D/g,""):this.phoneNumber=""},changeFlag0:function(e){"phone"===e?(this.phoneImgFlag0=!0,this.Tips=!1):"psd"===e&&(this.psdImgFlag0=!0,this.Tips=!1)},checkPhone:function(){/^1[34578]\d{9}$/.test(this.phoneNumber)?this.phoneImgFlag=!1:this.phoneImgFlag=!0},checkPsd:function(){this.psd?this.psdImgFlag=!1:this.psdImgFlag=!0},FingerPrintLoginSuccess:function(e){this.$router.replace("/home"),localStorage.setItem("userID",e),window.JSIAppData?window.JSIAppData.saveUserId(e):window.webkit&&window.webkit.messageHandlers.saveUserId.postMessage(e)}},mounted:function(){this.$app.FingerPrintLoginSuccess=this.FingerPrintLoginSuccess,window.JSIAppData?window.JSIAppData.currentPage("login"):window.webkit&&window.webkit.messageHandlers.currentPage.postMessage("login")}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mine"},[n("a",{staticClass:"backArrow",attrs:{href:"javascript:;"},on:{click:e.goBack}},[n("img",{attrs:{src:s("H5bj")}})]),e._v(" "),n("p",{staticClass:"banner"},[e._v("登录国凯鲁班学院")]),e._v(" "),n("div",{staticClass:"inputPhone"},[n("span",[e._v("+86")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.phoneNumber},on:{blur:e.checkPhone,focus:function(t){return e.changeFlag0("phone")},input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),e.phoneImgFlag?n("img",{directives:[{name:"show",rawName:"v-show",value:e.phoneImgFlag0,expression:"phoneImgFlag0"}],attrs:{src:s("7rtp")}}):n("img",{attrs:{src:s("5hax")}})]),e._v(" "),n("div",{staticClass:"inputPsd"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.psd,expression:"psd"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.psd},on:{focus:function(t){return e.changeFlag0("psd")},blur:e.checkPsd,input:function(t){t.target.composing||(e.psd=t.target.value)}}}),e.psdImgFlag?n("img",{directives:[{name:"show",rawName:"v-show",value:e.psdImgFlag0,expression:"psdImgFlag0"}],attrs:{src:s("7rtp")}}):n("img",{attrs:{src:s("5hax")}})]),e._v(" "),n("div",{staticClass:"forgetPsd"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.Tips,expression:"Tips"}]},[e._v("请确认手机号和密码有效性")]),n("span",{on:{click:e.goForgetPsd}},[e._v("忘记密码")])]),e._v(" "),n("div",{staticClass:"btn"},[n("button",{staticClass:"register_btn",on:{click:e.goRegister}},[e._v("注册")]),n("button",{staticClass:"login_btn",on:{click:e.goLogin}},[e._v("登录")])])])},staticRenderFns:[]};var c=s("VU/8")(r,p,!1,function(e){s("zojx")},"data-v-1b4b4dea",null);t.default=c.exports},mvHQ:function(e,t,s){e.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(e,t,s){var n=s("FeBl"),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},zojx:function(e,t){}});