webpackJsonp([20],{kCIi:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("mtWM"),i=t.n(a),n={name:"",data:function(){return{score:0,courseName:"",knowPointName:"",singleQuestions:[],manyQuestions:[],judgeQuestions:[]}},mounted:function(){var s=this;i.a.get("http://www.gk0101.com/exam/rest/v1/knowPoint/getChaperName?courseId="+this.$route.query.courseId+"&userId="+this.$route.query.userId+"&institutionId=10103").then(function(e){var t=e.data.data;s.courseName=t.courseName}),i.a.get("http://www.gk0101.com/exam/rest/v1/exam/stuPaper?examType="+this.$route.query.examType+"&courseId="+this.$route.query.courseId+"&institutionId=10103&userId="+this.$route.query.userId+"&chapterId="+this.$route.query.chapterId+"&id="+this.$route.query.examSheetId).then(function(e){var t=e.data.data;t.examPaperDto.score>=80?(s.score=t.examPaperDto.score+"分",s.$refs.btn.style.display="none"):t.examPaperDto.score>0?(s.score=t.examPaperDto.score+"分（不通过）",s.$refs.btn.style.display=""):(s.score="0分（不通过）",s.$refs.btn.style.display=""),s.knowPointName=t.examPaperDto.examName,t.examPaperDto.judgeSelectsQuestions&&(s.judgeQuestions=t.examPaperDto.judgeSelectsQuestions),t.examPaperDto.singleSelectsQuestions&&(s.singleQuestions=t.examPaperDto.singleSelectsQuestions),t.examPaperDto.mulSelectsQuestions&&(s.manyQuestions=t.examPaperDto.mulSelectsQuestions)})},methods:{back:function(){this.$router.go(-1)},goReExamination:function(){this.$router.replace({name:"DoExam",query:{examType:this.$route.query.examType,courseId:this.$route.query.courseId,chapterId:this.$route.query.chapterId,id:""}})},lookMore:function(s){"analysis_content active"===s.target.previousElementSibling.className?(s.target.previousElementSibling.className="analysis_content",s.target.innerHTML="点击收起"):(s.target.innerHTML="查看更多",s.target.previousElementSibling.className="analysis_content active")}}},o={render:function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"examread clearMargin_top"},[a("div",{staticClass:"header"},[a("a",{attrs:{href:"javascript:;"},on:{click:s.back}},[a("img",{attrs:{src:t("H5bj")}})]),a("span",[s._v(s._s(s.score))])]),s._v(" "),a("div",{staticClass:"task_explain"},[a("p",{staticClass:"title"},[s._v("考试说明：")]),s._v(" "),a("p",{staticClass:"chapter"},[s._v(s._s(s.courseName))]),s._v(" "),s.knowPointName?a("p",{staticClass:"section"},[s._v(s._s(s.knowPointName))]):s._e()]),s._v(" "),a("div",{staticClass:"task_content clearMargin_top"},[s._l(s.singleQuestions,function(e){return a("div",{key:e.questionId,staticClass:"task_questions"},[a("span",{staticClass:"type"},[s._v("单选")]),s._v(" "),a("p",{staticClass:"question_title"},[a("span",[s._v(s._s(e.questionNo)+".")]),s._v(s._s(e.questionTitle))]),s._v(" "),a("ul",{staticClass:"question_options"},s._l(e.questItems,function(e,i){return a("li",{key:i},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.selectItem,expression:"item2.selectItem"}],attrs:{src:t("5hax")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:null===e.selectItem,expression:"item2.selectItem === null"}],staticClass:"option_word"},[s._v(s._s(e.itemsNo))]),a("span",{staticClass:"option_content"},[s._v(s._s(e.subject))])])}),0),s._v(" "),a("div",{staticClass:"analysis"},[a("p",{staticClass:"analysis_answer"},[a("span",[s._v("答案：")]),e.result?a("img",{attrs:{src:t("5hax")}}):a("img",{attrs:{src:t("7rtp")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.result,expression:"!item.result"}]},[s._v("正确答案："+s._s(e.questionAnswer))])]),s._v(" "),a("p",{staticClass:"analysis_content",class:{active:e.questionAnalysis.length>44}},[s._v("解析："+s._s(e.questionAnalysis))]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.questionAnalysis.length>44,expression:"item.questionAnalysis.length > 44"}],staticClass:"more",on:{click:function(e){return s.lookMore(e)}}},[s._v("查看更多")])])])}),s._v(" "),s._l(s.manyQuestions,function(e){return a("div",{key:e.questionId,staticClass:"task_questions"},[a("span",{staticClass:"type"},[s._v("多选")]),s._v(" "),a("p",{staticClass:"question_title"},[a("span",[s._v(s._s(e.questionNo)+".")]),s._v(s._s(e.questionTitle))]),s._v(" "),a("ul",{staticClass:"question_options"},s._l(e.questItems,function(e,i){return a("li",{key:i},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.selectItem,expression:"item2.selectItem"}],attrs:{src:t("5hax")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:null===e.selectItem,expression:"item2.selectItem === null"}],staticClass:"option_word"},[s._v(s._s(e.itemsNo))]),a("span",{staticClass:"option_content"},[s._v(s._s(e.subject))])])}),0),s._v(" "),a("div",{staticClass:"analysis"},[a("p",{staticClass:"analysis_answer"},[a("span",[s._v("答案：")]),e.result?a("img",{attrs:{src:t("5hax")}}):a("img",{attrs:{src:t("7rtp")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.result,expression:"!item.result"}]},[s._v("正确答案："+s._s(e.questionAnswer))])]),s._v(" "),a("p",{staticClass:"analysis_content",class:{active:e.questionAnalysis.length>44}},[s._v("解析："+s._s(e.questionAnalysis))]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.questionAnalysis.length>44,expression:"item.questionAnalysis.length > 44"}],staticClass:"more",on:{click:function(e){return s.lookMore(e)}}},[s._v("查看更多")])])])}),s._v(" "),s._l(s.judgeQuestions,function(e){return a("div",{key:e.questionId,staticClass:"task_questions"},[a("span",{staticClass:"type"},[s._v("判断题")]),s._v(" "),a("p",{staticClass:"question_title"},[a("span",[s._v(s._s(e.questionNo)+".")]),s._v(s._s(e.questionTitle))]),s._v(" "),a("ul",{staticClass:"question_options"},[a("li",[a("img",{directives:[{name:"show",rawName:"v-show",value:"right"===e.selAnswer,expression:"item.selAnswer === 'right'"}],attrs:{src:t("5hax")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:null===e.selAnswer||"error"===e.selAnswer,expression:"item.selAnswer === null || item.selAnswer === 'error'"}],staticClass:"option_word"}),a("span",{staticClass:"option_content"},[s._v("正确")])]),s._v(" "),a("li",[a("img",{directives:[{name:"show",rawName:"v-show",value:"error"===e.selAnswer,expression:"item.selAnswer === 'error'"}],attrs:{src:t("5hax")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:"right"===e.selAnswer||null===e.selAnswer,expression:"item.selAnswer === 'right' || item.selAnswer === null"}],staticClass:"option_word"}),a("span",{staticClass:"option_content"},[s._v("错误")])])]),s._v(" "),a("div",{staticClass:"analysis"},[a("p",{staticClass:"analysis_answer"},[a("span",[s._v("答案：")]),e.result?a("img",{attrs:{src:t("5hax")}}):a("img",{attrs:{src:t("7rtp")}}),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.result,expression:"!item.result"}]},[s._v("正确答案："+s._s("0"===e.questionAnswer?"错误":"正确"))])]),s._v(" "),a("p",{staticClass:"analysis_content",class:{active:e.questionAnalysis.length>44}},[s._v("解析："+s._s(e.questionAnalysis))]),s._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.questionAnalysis.length>44,expression:"item.questionAnalysis.length > 44"}],staticClass:"more",on:{click:function(e){return s.lookMore(e)}}},[s._v("查看更多")])])])})],2),s._v(" "),a("div",{ref:"btn",staticClass:"btn",on:{click:s.goReExamination}},[s._v("立即补考")])])},staticRenderFns:[]};var r=t("VU/8")(n,o,!1,function(s){t("v9gx")},"data-v-4fe821dc",null);e.default=r.exports},v9gx:function(s,e){}});