webpackJsonp([4],{"0TJG":function(e,t,n){"use strict";t.__esModule=!0,t.switchProps=void 0;var i={value:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,activeValue:{type:null,default:!0},inactiveValue:{type:null,default:!1},size:{type:String,default:"30px"}};t.switchProps=i},"4VIR":function(e,t,n){"use strict";t.__esModule=!0,t.createNamespace=function(e){return e="van-"+e,[(0,r.createComponent)(e),(0,i.createBEM)(e),(0,a.createI18N)(e)]};var i=n("qLEY"),r=n("7FN3"),a=n("Rd3s")},"7FN3":function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.unifySlots=o,t.createComponent=function(e){return function(t){var n;return"function"==typeof t&&(t={functional:!0,props:(n=t).props,model:n.model,render:function(e,t){return n(e,t.props,o(t),t)}}),t.functional||(t.mixins=t.mixins||[],t.mixins.push(a.SlotsMixin)),t.name=e,t.install=s,t}},n("cc63");var r=n("tNtU"),a=n("Uh1x");i(n("7+uW"));function s(e){var t=this.name;e.component(t,this),e.component((0,r.camelize)("-"+t),this)}function o(e){var t=e.scopedSlots||e.data.scopedSlots||{},n=e.slots();return Object.keys(n).forEach(function(e){t[e]||(t[e]=function(){return n[e]})}),t}},"7NUI":function(e,t,n){"use strict";t.__esModule=!0,t.addUnit=function(e){if(!(0,i.isDef)(e))return;return e=String(e),(0,r.isNumber)(e)?e+"px":e};var i=n("VxeN"),r=n("IH+J")},AA6R:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)}var r=["attrs","props","domProps"],a=["class","style","directives"],s=["on","nativeOn"],o=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce(function(e,t){for(var n in t)if(e[n])if(-1!==r.indexOf(n))e[n]=i({},e[n],t[n]);else if(-1!==a.indexOf(n)){var c=e[n]instanceof Array?e[n]:[e[n]],u=t[n]instanceof Array?t[n]:[t[n]];e[n]=c.concat(u)}else if(-1!==s.indexOf(n))for(var l in t[n])if(e[n][l]){var d=e[n][l]instanceof Array?e[n][l]:[e[n][l]],f=t[n][l]instanceof Array?t[n][l]:[t[n][l]];e[n][l]=d.concat(f)}else e[n][l]=t[n][l];else if("hook"==n)for(var v in t[n])e[n][v]=e[n][v]?o(e[n][v],t[n][v]):t[n][v];else e[n]=t[n];else e[n]=t[n];return e},{})}},"IH+J":function(e,t,n){"use strict";t.__esModule=!0,t.isNumber=function(e){return/^\d+(\.\d+)?$/.test(e)},t.isNaN=function(e){if(Number.isNaN)return Number.isNaN(e);return e!=e}},Jq84:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.default=void 0;var r=i(n("AA6R")),a=n("VxeN"),s=n("xi9C"),o=n("qOQ7"),c=(0,a.createNamespace)("loading"),u=c[0],l=c[1];function d(e,t,n,i){var s=t.color,c=t.size,u=t.type,d={color:s};if(c){var f=(0,a.addUnit)(c);d.width=f,d.height=f}return e("div",(0,r.default)([{class:l([u,{vertical:t.vertical}])},(0,o.inherit)(i,!0)]),[e("span",{class:l("spinner",u),style:d},[function(e,t){if("spinner"===t.type){for(var n=[],i=0;i<12;i++)n.push(e("i"));return n}return e("svg",{class:l("circular"),attrs:{viewBox:"25 25 50 50"}},[e("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}(e,t)]),function(e,t,n){if(n.default){var i=t.textSize&&{fontSize:(0,a.addUnit)(t.textSize)};return e("span",{class:l("text"),style:i},[n.default()])}}(e,t,n)])}d.props={size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"},color:{type:String,default:s.GRAY}};var f=u(d);t.default=f},KzJ3:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;t.default={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{valid:"有效期",unlimited:"无使用门槛",discount:function(e){return e+"折"},condition:function(e){return"满"+e+"元可用"}},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(e){return e+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}}},R6lU:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},Rd3s:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.createI18N=function(e){var t=(0,a.camelize)(e)+".";return function(e){for(var n=(0,r.get)(s.default.messages(),t+e)||(0,r.get)(s.default.messages(),e),i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return"function"==typeof n?n.apply(void 0,a):n}};var r=n("VxeN"),a=n("tNtU"),s=i(n("cc63"))},TaBH:function(e,t){},Uh1x:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.SlotsMixin=void 0;var r=i(n("7+uW")).default.extend({methods:{slots:function(e,t){void 0===e&&(e="default");var n=this.$slots,i=this.$scopedSlots[e];return i?i(t):n[e]}}});t.SlotsMixin=r},VcVR:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.default=void 0;var r=i(n("AA6R")),a=n("VxeN"),s=n("xi9C"),o=n("0TJG"),c=n("qOQ7"),u=i(n("Jq84")),l=(0,a.createNamespace)("switch"),d=l[0],f=l[1];function v(e,t,n,i){var a=t.size,o=t.value,l=t.loading,d=t.disabled,v=t.activeColor,p=t.activeValue,h=t.inactiveColor,g=t.inactiveValue,m=o===p,_={fontSize:a,backgroundColor:m?v:h},y=m?v||s.BLUE:h||s.GRAY_DARK;return e("div",(0,r.default)([{class:f({on:m,disabled:d}),attrs:{role:"switch","aria-checked":String(m)},style:_,on:{click:function(){if(!d&&!l){var e=m?g:p;(0,c.emit)(i,"input",e),(0,c.emit)(i,"change",e)}}}},(0,c.inherit)(i)]),[e("div",{class:f("node")},[l&&e(u.default,{class:f("loading"),attrs:{color:y}})])])}v.props=o.switchProps;var p=d(v);t.default=p},VxeN:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.noop=function(){},t.isDef=c,t.isObj=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)},t.get=function(e,t){var n=t.split("."),i=e;return n.forEach(function(e){i=c(i[e])?i[e]:""}),i},t.isServer=t.addUnit=t.createNamespace=void 0;var r=i(n("7+uW")),a=n("4VIR");t.createNamespace=a.createNamespace;var s=n("7NUI");t.addUnit=s.addUnit;var o=r.default.prototype.$isServer;function c(e){return void 0!==e&&null!==e}t.isServer=o},XqYu:function(e,t){},bhS9:function(e,t,n){"use strict";t.__esModule=!0,t.deepAssign=a;var i=n("VxeN"),r=Object.prototype.hasOwnProperty;function a(e,t){return Object.keys(t).forEach(function(n){!function(e,t,n){var s=t[n];(0,i.isDef)(s)&&(r.call(e,n)&&(0,i.isObj)(s)&&"function"!=typeof s?e[n]=a(Object(e[n]),t[n]):e[n]=s)}(e,t,n)}),e}},cbWt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("VcVR"),r=n.n(i),a=(n("eNeO"),{name:"",data:function(){return{checked:!1,NOFingerPrint:!1}},components:{vanSwitch:r.a},methods:{signOut:function(){this.$router.replace("/home"),localStorage.clear()},goAboutUs:function(){this.$router.push("/aboutus")},goChangePsd:function(){this.$router.push("/changepsd")},changeFingerPrint:function(e){switch(e){case 0:this.checked=!1;break;case 1:this.checked=!0;break;case-1:this.NOFingerPrint=!0}},handleClick:function(){this.checked=!this.checked,window.JSIAppData?window.JSIAppData.clickText(this.checked):window.webkit.messageHandlers.JSObject.postMessage(this.checked)}},mounted:function(){this.$app.changeFingerPrint=this.changeFingerPrint,window.JSIAppData?window.JSIAppData.currentPage("setting"):window.webkit.messageHandlers.currentPage.postMessage("setting")}}),s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"setting"},[e._m(0),e._v(" "),i("div",{staticClass:"aboutUs position_class",on:{click:e.goAboutUs}},[i("span",[e._v("关于我们")]),i("img",{attrs:{src:n("hg0P")}})]),e._v(" "),e._m(1),e._v(" "),e.NOFingerPrint?e._e():i("div",{staticClass:"fingerPrint position_class",on:{click:e.handleClick}},[i("span",[e._v("开启指纹验证")]),i("van-switch",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1),e._v(" "),i("div",{staticClass:"changePsd position_class",on:{click:e.goChangePsd}},[i("span",[e._v("修改密码")]),i("img",{attrs:{src:n("hg0P")}})]),e._v(" "),i("div",{staticClass:"Sign_out"},[i("span",{on:{click:e.signOut}},[e._v("退出登录")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header_title"},[t("a",{attrs:{href:"#/myinfo"}},[t("img",{attrs:{src:n("H5bj")}})]),this._v(" "),t("span",[this._v("设置")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"evaluate position_class"},[t("span",[this._v("评价")]),t("img",{attrs:{src:n("hg0P")}})])}]};var o=n("VU/8")(a,s,!1,function(e){n("TaBH")},"data-v-be201ab8",null);t.default=o.exports},cc63:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.default=void 0;var r=i(n("7+uW")),a=n("bhS9"),s=i(n("KzJ3")),o=r.default.prototype,c=r.default.util.defineReactive;c(o,"$vantLang","zh-CN"),c(o,"$vantMessages",{"zh-CN":s.default});var u={messages:function(){return o.$vantMessages[o.$vantLang]},use:function(e,t){var n;o.$vantLang=e,this.add(((n={})[e]=t,n))},add:function(e){void 0===e&&(e={}),(0,a.deepAssign)(o.$vantMessages,e)}};t.default=u},eNeO:function(e,t,n){n("XqYu"),n("gMie")},gMie:function(e,t){},lt8z:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},qLEY:function(e,t,n){"use strict";t.__esModule=!0,t.createBEM=function(e){return function(t,n){return t&&"string"!=typeof t&&(n=t,t=""),t=a(e,t,i),n?[t,function e(t,n){if("string"==typeof n)return a(t,n,r);if(Array.isArray(n))return n.map(function(n){return e(t,n)});var i={};n&&Object.keys(n).forEach(function(e){i[t+r+e]=n[e]});return i}(t,n)]:t}};var i="__",r="--";function a(e,t,n){return t?e+n+t:e}},qOQ7:function(e,t,n){"use strict";var i=n("R6lU");t.__esModule=!0,t.inherit=function(e,t){var n=s.reduce(function(t,n){return e.data[n]&&(t[o[n]||n]=e.data[n]),t},{});t&&(n.on=n.on||{},(0,r.default)(n.on,e.data.on));return n},t.emit=function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=e.listeners[t];a&&(Array.isArray(a)?a.forEach(function(e){e.apply(void 0,i)}):a.apply(void 0,i))},t.mount=function(e,t){var n=new a.default({el:document.createElement("div"),props:e.props,render:function(n){return n(e,(0,r.default)({props:this.$props},t))}});return document.body.appendChild(n.$el),n};var r=i(n("lt8z")),a=i(n("7+uW")),s=["ref","style","class","attrs","nativeOn","directives","staticClass","staticStyle"],o={nativeOn:"on"}},tNtU:function(e,t,n){"use strict";t.__esModule=!0,t.camelize=function(e){return e.replace(i,function(e,t){return t.toUpperCase()})},t.padZero=function(e,t){void 0===t&&(t=2);var n=e+"";for(;n.length<t;)n="0"+n;return n};var i=/-(\w)/g},xi9C:function(e,t,n){"use strict";t.__esModule=!0,t.GRAY_DARK=t.GRAY=t.WHITE=t.GREEN=t.BLUE=t.RED=void 0;t.RED="#f44";t.BLUE="#1989fa";t.GREEN="#07c160";t.WHITE="#fff";t.GRAY="#c9c9c9";t.GRAY_DARK="#969799"}});