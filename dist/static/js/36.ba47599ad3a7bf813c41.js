webpackJsonp([36],{EXDq:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"Photograph",data:function(){return{video:null,isShowImg:!1,dataURL:null,track:null}},mounted:function(){this.initPhoto()},methods:{initPhoto:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!1,video:{width:300,height:400}}).then(function(s){var e=t.$refs.video;e.src=window.URL.createObjectURL(s),e.onloadedmetadata=function(t){e.play()},t.video=e,t.track=s.getTracks()[0]}).catch(function(t){console.log("err.message"+t.name)})},photo:function(){var t,s=this,e=s.$refs.img,o=s.$refs.canvas,a=o.getContext("2d");o.width=300,o.height=400,e.height=400,a.drawImage(s.video,0,0,300,400),t=o.toDataURL("image/png"),e.src=t,s.dataURL=t,s.isShowImg=!0},resetPhoto:function(){this.isShowImg=!1},surePhoto:function(){console.log(this.dataURL),this.$Message.success("已保持了图片的:dataURL")},stopPhoto:function(){this.track.stop()}},destroyed:function(){this.stopPhoto()}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"photograph_page"},[e("h1",{staticClass:"pageTitle"},[t._v("请对着镜头拍照")]),t._v(" "),e("div",[e("div",{staticClass:"video_box"},[t.isShowImg?t._e():e("div",{staticClass:"border"},[e("span",{staticClass:"top_left"}),t._v(" "),e("span",{staticClass:"top_right"}),t._v(" "),e("span",{staticClass:"bottom_left"}),t._v(" "),e("span",{staticClass:"bottom_right"})]),t._v(" "),e("video",{ref:"video"}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.isShowImg,expression:"isShowImg"}],ref:"img",staticClass:"img"})]),t._v(" "),e("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",staticClass:"canvas"})]),t._v(" "),e("div",{staticClass:"button_group"},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.isShowImg,expression:"isShowImg"}],attrs:{title:""},on:{click:t.resetPhoto}},[t._v("重新拍照")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isShowImg,expression:"isShowImg"}],attrs:{title:""},on:{click:t.surePhoto}},[t._v("确定")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.isShowImg,expression:"!isShowImg"}],attrs:{title:""},on:{click:t.photo}},[t._v("拍照")])])])},staticRenderFns:[]},i=e("VU/8")(o,a,!1,null,null,null);s.default=i.exports}});