(window.webpackJsonp=window.webpackJsonp||[]).push([[1,23,36,38,39,43],{332:function(t,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("3c7991c7",content,!0,{sourceMap:!1})},333:function(t,e,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("22c2c008",content,!0,{sourceMap:!1})},336:function(t,e,o){"use strict";o.r(e);o(40);var r={data:function(){return{message:null,user:{name:"",email:"",phone:"",dob:""}}},components:{},methods:{onSubmit:function(){console.log(this.user),this.message="Submitted!"}}},n=(o(339),o(7)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{},[e("br"),t._v(" "),e("h3",{staticClass:"register mt-3 text-2xl leading-7 font-semibold"},[t._v("\n      Регистрация в школу\n")]),e("br"),t._v(" "),e("p",{staticClass:"register"},[t._v("Оставьте заявку заполнив форму")]),t._v(" "),e("br"),t._v(" "),e("form",{staticClass:"contact-form",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Имя:")]),t._v(" "),e("AppInput",{attrs:{type:"text",id:"name",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Электронная почта:")]),t._v(" "),e("AppInput",{attrs:{type:"email",id:"email",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),t._v(" "),e("div",{staticClass:"controls"},[e("AppButton",{on:{click:t.onSubmit}},[t._v(" Регистрация ")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e()],1)]),e("br")])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,o){"use strict";o.r(e);o(31),o(52);var r={props:{promotion:{type:Object,required:!0},admin:{type:Boolean,default:!1}},name:"PromotionPreview"},n=o(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"bg-white-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-xl",attrs:{to:"/promotions/"+t.promotion.id}},[e("img",{staticClass:"w-full h-48 object-cover",attrs:{src:t.promotion.image,alt:"Promotion Image"}}),t._v(" "),e("div",{staticClass:"p-4"},[e("h3",{staticClass:"text-lg font-semibold text-black"},[t._v(t._s(t.promotion.title))]),t._v(" "),e("p",{staticClass:"text-gray-400 mt-2"},[t._v(t._s(t.promotion.description))])])])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,o){"use strict";o.r(e);var r=o(25),n=(o(21),o(53),{components:{AppButton2:o(147).default},data:function(){return Object(r.a)({message:null,certificate:{amount:null,friendName:"",yourName:""}},"certificate",null)},methods:{onSubmit:function(t){console.log(t),this.$store.dispatch("addGift",t);var e=Math.random().toString(36).substr(2,9).toUpperCase();this.certificate={amount:this.amount,yourName:this.yourName,friendName:this.friendName,code:e},this.message="Submitted!"}}}),c=(o(345),o(7)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"gift-card"},[e("div",{staticClass:"gift-info"},[e("p",{staticClass:"mt-4 pt-4 text-gray-800"},[t._v("Подарите свободу на дороге!")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"mt-4 pt-4 text-gray-800"},[t._v("Идеальный подарок для тех, кто мечтает стать уверенным водителем. Этот сертификат предоставляет возможность пройти курс обучения у лучших инструкторов, на современных автомобилях и по доступной цене. Сделайте особенный подарок, который откроет новые горизонты и подарит уверенность за рулём!")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"custom-component"},[e("div",{staticClass:"image-block"},[e("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",fill:"#4CAF50"}},[e("circle",{attrs:{cx:"32",cy:"32",r:"28",stroke:"#4CAF50","stroke-width":"4",fill:"none"}}),t._v(" "),e("circle",{attrs:{cx:"32",cy:"32",r:"14",stroke:"#4CAF50","stroke-width":"4",fill:"none"}}),t._v(" "),e("line",{attrs:{x1:"32",y1:"4",x2:"32",y2:"60",stroke:"#4CAF50","stroke-width":"4"}}),t._v(" "),e("line",{attrs:{x1:"4",y1:"32",x2:"60",y2:"32",stroke:"#4CAF50","stroke-width":"4"}}),t._v(" "),e("text",{attrs:{x:"32",y:"36","font-family":"Arial","font-size":"8","text-anchor":"middle",fill:"#4CAF50"}},[t._v("ЛОГО")])])]),t._v(" "),t._m(1)]),e("br"),t._v(" "),e("div",{staticClass:"custom-component"},[e("div",{staticClass:"image-block"},[e("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",fill:"#4CAF50"}},[e("path",{attrs:{d:"M52 18H12c-3.31 0-6 2.69-6 6v26c0 3.31 2.69 6 6 6h40c3.31 0 6-2.69 6-6V24c0-3.31-2.69-6-6-6zM12 22h40c1.1 0 2 .9 2 2v6H10v-6c0-1.1.9-2 2-2zm40 28H12c-1.1 0-2-.9-2-2V32h44v16c0 1.1-.9 2-2 2z"}})])]),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"gift-certificate"},[t._m(3),e("br"),t._v(" "),e("h2",{staticClass:"certificate-heading"},[t._v("🎁 Купить подарочную карточку 🎁")]),t._v(" "),e("form",{staticClass:"form-group",on:{submit:function(t){t.preventDefault()}}},[e("AppInput",{staticClass:"form-input",attrs:{id:"amount",type:"number",required:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v(" Сумма: ")]),t._v(" "),e("AppInput",{staticClass:"form-input",attrs:{type:"email",id:"email",required:""},model:{value:t.friendEmail,callback:function(e){t.friendEmail=e},expression:"friendEmail"}},[t._v(" Email друга: ")]),t._v(" "),e("AppInput",{staticClass:"form-input",attrs:{type:"email",id:"yourEmail",required:""},model:{value:t.yourEmail,callback:function(e){t.yourEmail=e},expression:"yourEmail"}},[t._v(" Ваш email: ")]),t._v(" "),e("AppButton",{staticClass:"submit-btn",on:{click:t.onSubmit}},[t._v("Купить сертификат")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),t.certificate?e("div",{staticClass:"certificate"},[e("h3",[t._v("Cертификат")]),t._v(" "),e("div",{staticClass:"certificate-content"},[e("p",{staticClass:"certificate-amount"},[t._v("Сумма: "+t._s(t.certificate.amount)+" euro")]),t._v(" "),e("p",{staticClass:"certificate-name"},[t._v("Для: "+t._s(t.certificate.friendName))]),t._v(" "),e("p",{staticClass:"certificate-code"},[t._v("Код: "+t._s(t.certificate.code))])])]):t._e()],1)])])}),[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"certificate-heading"},[t._v("Подарочный сертификат автошколы "),e("b",[t._v("Viktorija")])])},function(){var t=this,e=t._self._c;return e("data",{staticClass:"text-block"},[e("p",{staticClass:"green-text"},[e("b",[t._v("Профессиональные инструктора: ")]),t._v("Обучение у лучших специалистов с индивидуальным подходом на современных автомобилях.")])])},function(){var t=this,e=t._self._c;return e("data",{staticClass:"text-block"},[e("p",{staticClass:"green-text"},[e("b",[t._v("Доступные цены: ")]),t._v("Выгодные пакетные предложения и скидки, подтверждённые положительными отзывами выпускников.")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mt-4 pt-4 text-gray-800"},[t._v("Подарочный сертификат на обучение в автошколе "),e("b",[t._v("Viktorija.")])])}],!1,null,null,null);e.default=component.exports},339:function(t,e,o){"use strict";o(332)},340:function(t,e,o){var r=o(50)((function(i){return i[1]}));r.push([t.i,".register{text-align:center}form{display:flex;flex-direction:column;margin:auto;max-width:400px}label{color:#333;font-weight:700;margin-bottom:.5em}input{border:1px solid #ccc;border-radius:4px;padding:.5em}button,input{font-size:1em}button{background-color:#007bff;border:none;border-radius:4px;color:#fff;cursor:pointer;padding:.7em}button:hover{background-color:#0056b3}.contact-form{background-color:#f9f9f9;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin:0 auto;max-width:800px;padding:20px}.form-row{display:flex;gap:20px;justify-content:space-between;margin-bottom:20px}.form-group{flex:1;min-width:45%}.form-group label{color:#333;display:block;font-weight:700;margin-bottom:8px}.form-group input{border:1px solid #ccc;border-radius:15px;padding:10px;width:100%}.controls{display:flex;gap:20px;justify-content:center}.controls AppButton,.message{margin-top:10px}.message{color:#28a745;text-align:center}",""]),r.locals={},t.exports=r},345:function(t,e,o){"use strict";o(333)},346:function(t,e,o){var r=o(50),n=o(225),c=o(347),l=r((function(i){return i[1]})),d=n(c);l.push([t.i,".gift-card{display:flex;gap:20px;padding:20px}.gift-info{text-align:left}.gift-certificate,.gift-info{background-color:#f9f9f9;border:1px solid #ddd;border-radius:8px;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.1);flex:1;padding:20px}.gift-certificate{text-align:center}.certificate-heading{color:#333;font-size:24px;margin-bottom:20px}.form-group{margin-bottom:0}label{color:#333;display:block;font-weight:700;margin-bottom:5px}.form-input{font-size:16px;width:100%}.submit-btn{background-color:#11b445;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;padding:10px 20px;transition:background-color .3s}.submit-btn:hover{background-color:#0e9e38}.certificate,.message{margin-top:20px}.certificate{background:#fff;background-image:url("+d+');background-position:50%;background-repeat:no-repeat;background-size:cover;border:2px solid #3182ce;border-radius:10px;box-shadow:0 0 15px rgba(0,0,0,.2);font-family:"Times New Roman",Times,serif;max-width:400px;padding:20px;position:relative;text-align:center}.certificate-content{border-bottom:1px solid #ddd;border-top:1px solid #ddd;margin:20px 0;padding:10px 0}.certificate-amount,.certificate-code{font-size:18px;margin:10px 0}.certificate-name{font-size:16px;margin:10px 0}.certificate-amount{font-weight:700}.certificate-code{background:#f9f9f9;border:1px dashed #4caf50;border-radius:5px;display:inline-block;padding:5px}.custom-component{align-items:center;display:flex;gap:8px}.text-block{display:flex;flex-direction:row;gap:3px}.green-text,.orange-text{color:#333}',""]),l.locals={},t.exports=l},347:function(t,e,o){t.exports=o.p+"img/certificate_1.e1ee8a0.jpg"},349:function(t,e,o){"use strict";o.r(e);var r={components:{promotionPreview:o(337).default},props:{promotions:{type:Array,required:!0},admin:{type:Boolean,default:!1}},name:"PromotionsLists",data:function(){return{}}},n=o(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 px-4 sm:px-6 lg:px-8"},[e("h1",{staticClass:"text-3xl font-bold text-gray-900 mb-6"},[t._v("Boonused ja Kampaaniad")]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},[t._l(t.promotions,(function(t){return e("promotion-preview",{key:t.id,attrs:{promotion:t}})})),e("br")],2)])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,o){var content=o(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("7e344c2d",content,!0,{sourceMap:!1})},382:function(t,e,o){"use strict";o(366)},383:function(t,e,o){var r=o(50)((function(i){return i[1]}));r.push([t.i,".about-title{font-size:2.5rem;font-weight:700;line-height:1.2;margin-top:1.5rem}.about-title .confidence{color:#3182ce;-webkit-text-decoration:underline;text-decoration:underline}",""]),r.locals={},t.exports=r},411:function(t,e,o){"use strict";o.r(e);var r={name:"Intro",props:{title:{type:String,required:!0},topic:{type:String,required:!0},paragraph:{type:String,required:!0}}},n=(o(382),o(7)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"about-title mt-10 text-2xl leading-7 font-semibold"},[t._v("\n    "+t._s(t.title)+" "),e("span",{staticClass:"confidence"},[t._v("Виктория")])]),t._v(" "),e("p",{staticClass:"pt-4 text-gray-800 border-t border-dashed"},[e("code",{staticClass:"bg-yellow-100 text-xl p-1 rounded border"},[t._v(t._s(t.topic))])]),t._v(" "),e("p",{staticClass:"mt-3 text-gray-600"},[t._v("\n    "+t._s(t.paragraph)+"\n  ")]),e("br")])}),[],!1,null,null,null);e.default=component.exports},474:function(t,e,o){var content=o(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("7ca669dc",content,!0,{sourceMap:!1})},493:function(t,e,o){"use strict";o.r(e);var r=o(338),n=o(336),c=o(411),l=o(349),d={data:function(){return{instructors:[{id:1,name:"Инструктор 1",bio:"Краткая биография..."},{id:2,name:"Инструктор 2",bio:"Краткая биография..."}],interviews:[{id:1,title:"Интервью с Инструктором 1",content:"Текст интервью..."},{id:2,title:"Интервью с Инструктором 2",content:"Текст интервью..."}]}},components:{Gift:r.default,aboutIntro:c.default,register:n.default,promotionsList:l.default},methods:{onSubmit:function(t){console.log("User added!")}},computed:{postsLoaded:function(){return this.$store.getters.getPostsLoaded}},name:"About"},f=(o(508),o(7)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("div",{staticClass:"mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[e("aboutIntro",{attrs:{title:"О нашей автошколе",topic:"Ведущая автошкола в Таллине с 18-летним опытом работы",paragraph:"Мы гордимся высоким уровнем обучения, который обеспечивается опытными и квалифицированными инструкторами. Наша автошкола предлагает современные методы обучения, включая теоретические занятия и практическое вождение, чтобы подготовить студентов к безопасному и уверенному управлению автомобилем. Присоединяйтесь к нам и получите водительские права!"}}),e("br")],1),t._v(" "),e("h2",[t._v("Наша команда")]),t._v(" "),e("div",{staticClass:"instructors"},[e("instructorsList",{attrs:{instructors:t.instructors}}),e("br")],1),t._v(" "),e("div",{staticClass:"interviews"},[e("h2",[t._v("Интервью с инструкторами")]),t._v(" "),t._l(t.interviews,(function(o){return e("div",{key:o.id},[e("h3",[t._v(t._s(o.title))]),t._v(" "),e("p",[t._v(t._s(o.content))])])}))],2)])])}),[],!1,null,null,null);e.default=component.exports},508:function(t,e,o){"use strict";o(474)},509:function(t,e,o){var r=o(50)((function(i){return i[1]}));r.push([t.i,"hstack{display:flex;flex-direction:row;gap:1rem}",""]),r.locals={},t.exports=r}}]);