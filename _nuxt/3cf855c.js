(window.webpackJsonp=window.webpackJsonp||[]).push([[62,18,19,27],{334:function(t,e,n){t.exports=n.p+"img/about-1.bd3a8a7.jpg"},343:function(t,e,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("ec39cffc",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("c239511e",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";n.r(e);n(40);var o={props:{comments:{type:Array,default:null}}},r=(n(363),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.comments?e("section",{staticClass:"comments max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("div",{},[e("h2",{staticClass:"mt-3 text-4xl leading-7 font-bold"},[t._v("\n      Комментарии\n    ")]),t._v(" "),0==t.comments.length?e("p",[t._v(" Comments: 0 ")]):t._e(),t._v(" "),t._l(t.comments,(function(n){return e("div",{key:n.name,staticClass:"comment mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[e("p",{staticClass:"name"},[t._v(t._s(n.name))]),t._v(" "),e("p",{staticClass:"name"},[t._v(t._s(n.content))]),t._v(" "),e("img",{attrs:{src:n.image,alt:n.image}})])}))],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,n){"use strict";n(343)},362:function(t,e,n){var o=n(50),r=n(225),c=n(334),l=o((function(i){return i[1]})),m=r(c);l.push([t.i,"form{display:flex;flex-direction:column;margin:auto;max-width:400px}label{color:#333;font-weight:700;margin-bottom:.5em}input{margin-bottom:10px}input,textarea{border:1px solid #ccc;border-radius:4px;font-size:1em;padding:.5em}textarea{margin-bottom:20px}.signin-button{background-color:#4165de;border-radius:.25rem;color:#fff;margin-left:1rem;padding:.5rem 1rem;-webkit-text-decoration:none;text-decoration:none;transition:background-color .3s}.commentHolder{align-items:center;background-image:url("+m+");background-position:50%;background-repeat:no-repeat;background-size:cover;border-radius:10px;box-shadow:0 2px 5px rgba(0,0,0,.1);color:#fff;display:flex;justify-content:center;overflow:hidden;padding:1.5rem}.commentHolder .container{background:rgba(0,0,0,.5);border-radius:5px;padding:1rem}.commentHolder h3{color:#fff;margin-top:0;text-align:center}",""]),l.locals={},t.exports=l},363:function(t,e,n){"use strict";n(344)},364:function(t,e,n){var o=n(50)((function(i){return i[1]}));o.push([t.i,".comment{margin-bottom:20px}",""]),o.locals={},t.exports=o},365:function(t,e,n){"use strict";n.r(e);n(40),n(31),n(41),n(66),n(67),n(42),n(21),n(35);var o=n(25);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}var c={data:function(){return{message:null,comment:{name:"",content:""}}},methods:{onSubmit:function(){var t=this;this.$store.dispatch("addComment",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({postId:this.postId,publish:!1},this.comment)).then((function(){t.message="Submited!",t.comment.name="",t.comment.content=""})).catch((function(t){console.log(t)}))}}},l=c,m=(n(361),n(7)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex items-top justify-center sm:items-center sm:pt-0"},[e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("div",{staticClass:"flex flex-wrap md:flex-nowrap justify-between gap-6"},[t._m(0),t._v(" "),e("div",{staticClass:"bg-white overflow-hidden shadow sm:rounded-lg p-6 w-full md:w-1/2"},[e("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",{staticClass:"container"},[e("h3",{staticClass:"mt-3 text-2xl leading-7 font-semibold"},[t._v("\n              Комментарий\n            ")]),t._v(" "),e("AppInput",{attrs:{type:"text",id:"name",required:""},model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}},[t._v(" Имя"),e("br")])],1),t._v(" "),e("div",{staticClass:"container"},[e("AppInput",{attrs:{id:"content",required:""},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}},[t._v(" Комментарий"),e("br")])],1),t._v(" "),e("div",{staticClass:"container"},[t.message?e("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),e("AppButton",{attrs:{type:"submit"}},[t._v("Отправить")])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"commentHolder bg-white overflow-hidden shadow sm:rounded-lg p-6 w-full md:w-1/2"},[t("div",{staticClass:"container"},[t("h3",{staticClass:"mt-3 text-2xl leading-7 font-semibold"},[this._v("\n          Нам важно ваше мнение. Поделитесь своими впечатлениями и помогите нам стать лучше!\n          ")])])])}],!1,null,null,null);e.default=component.exports},367:function(t,e,n){t.exports=n.p+"img/instructor_1.2004401.jpg"},408:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("703262e2",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(408)},465:function(t,e,n){var o=n(50),r=n(225),c=n(367),l=o((function(i){return i[1]})),m=r(c);l.push([t.i,".header[data-v-136aa016]{background:#f1f1f1;border-bottom:2px solid #000;margin-bottom:36px;padding:9rem 2rem;text-align:center}.header h1[data-v-136aa016]{font-size:3em;margin:0}.header p[data-v-136aa016]{margin:10px 0}.button[data-v-136aa016]{background:#4165de;border:none;color:#fff;cursor:pointer;padding:10px 20px}.header a[data-v-136aa016]{color:#41de73}.headre a[data-v-136aa016]:hover{color:#ff5200;-webkit-text-decoration:underline;text-decoration:underline}.reviewsBg[data-v-136aa016]{background-image:url("+m+");background-position:50%;background-size:cover}",""]),l.locals={},t.exports=l},502:function(t,e,n){"use strict";n.r(e);var o={props:{instructor:{type:Object,required:!0}}},r=(n(464),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("header",{staticClass:"header reviewsBg"}),t._v(" "),e("div",{staticClass:"mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[e("h2",{staticClass:"text-2xl leading-7 font-semibold"},[t._v("\n      "+t._s(t.instructor.title)+"\n    ")]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-600"},[t._v("\n      "+t._s(t.instructor.descr)+" "),e("br")]),e("br"),t._v(" "),e("p",{staticClass:"mt-3 text-gray-600"},[t._v("\n      "+t._s(t.instructor.content)+" "),e("br")]),e("br"),t._v(" "),e("img",{attrs:{src:t.instructor.img,alt:t.instructor.title}}),t._v(" "),e("p",{staticClass:"mt-4 pt-4 text-gray-800 border-t border-dashed"},[t._v("\n      Copyright link "),e("code",{staticClass:"bg-gray-100 text-sm p-1 rounded border"},[t._v(" "+t._s())]),t._v(" Reeglid ja tingimused link "),e("code",{staticClass:"bg-gray-100 text-sm p-1 rounded border"},[t._v("Reeglid ja tingimused")]),t._v(". Have fun!\n    ")])])])])}),[],!1,null,"136aa016",null);e.default=component.exports},584:function(t,e,n){"use strict";n.r(e);var o=n(365),r=n(348),c=n(502),l={data:function(){return{instructor:{id:1,title:"Instuctor Title 1",descr:"Instructor Description small tekst Instructor Description small tekst, Instructor Description small tekst, Instructor Description small tekst Instructor Description small tekst, Instructor Description small tekst. Instructor Description small tekst Instructor Description small tekst, Instructor Description small tekst, Instructor Description small tekst Instructor Description small tekst, Instructor Description small tekst.",content:"Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML. Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML. Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML.",img:n(367)},comments:[{name:"Commentor Name 1",content:"Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML",img:"https://play.google.com/store/apps/details?id=com.SGS.DrivingSchoolGames.RealCarParkingSimulator&hl=en_US"},{name:"Commentor Name 2",content:"Instructor CONTENT, need chande to Markdown or HTML. Promotion CONTENT, need chande to Markdown or HTML",img:"https://play.google.com/store/apps/details?id=com.SGS.DrivingSchoolGames.RealCarParkingSimulator&hl=en_US"}]}},components:{newComment:o.default,comments:r.default,instructor:c.default},name:"LandingPage"},m=n(7),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("instructor",{attrs:{instructor:t.instructor}}),t._v(" "),e("newComment"),t._v(" "),e("comments",{attrs:{comments:t.comments}})],1),t._v(" "),e("div",{staticClass:"justify-center pt-4 space-x-2"})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Comments:n(348).default})}}]);