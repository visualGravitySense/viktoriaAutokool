(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{341:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("4ce19681",content,!0,{sourceMap:!1})},368:function(t,e,n){"use strict";n(341)},369:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,".cancel-button{background-color:#000;border-radius:.25rem;color:#fff;margin-left:1rem;padding:.5rem 1rem;-webkit-text-decoration:none;text-decoration:none;transition:background-color .3s}",""]),r.locals={},t.exports=r},380:function(t,e,n){"use strict";n.r(e);n(31),n(50),n(41),n(66),n(67),n(42),n(21),n(35);var r=n(25);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={props:{instructorEdit:{type:Object,required:!1}},data:function(){return{message:null,instructor:this.instructorEdit?c({},this.instructorEdit):{title:"",description:"",image:"",content:""}}},methods:{onSubmit:function(){this.message="Submitted!",this.$emit("submit",this.instructor)},cancel:function(){this.$router.push("/admin/")}}},d=(n(368),n(8)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("div",{staticClass:"mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[e("h1",[t._v("Instructor adding and editing")]),t._v(" "),e("form",{staticClass:"contact-form",on:{submit:function(t){t.preventDefault()}}},[e("AppInput",{model:{value:t.instructor.title,callback:function(e){t.$set(t.instructor,"title",e)},expression:"instructor.title"}},[t._v(" Title ")]),t._v(" "),e("AppInput",{model:{value:t.instructor.description,callback:function(e){t.$set(t.instructor,"description",e)},expression:"instructor.description"}},[t._v(" Descr ")]),t._v(" "),e("AppInput",{model:{value:t.instructor.image,callback:function(e){t.$set(t.instructor,"image",e)},expression:"instructor.image"}},[t._v(" Img link ")]),t._v(" "),e("AppTextArea",{model:{value:t.instructor.content,callback:function(e){t.$set(t.instructor,"content",e)},expression:"instructor.content"}},[t._v(" Content ")]),t._v(" "),e("div",{staticClass:"controls"},[e("AppButton",{staticClass:"cancel-button",on:{click:t.cancel}},[t._v(" Cancel ")]),t._v(" "),e("AppButton",{on:{click:t.onSubmit}},[t._v(" Save ")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e()],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);