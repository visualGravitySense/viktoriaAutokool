(window.webpackJsonp=window.webpackJsonp||[]).push([[2,23,39],{332:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("3c7991c7",content,!0,{sourceMap:!1})},333:function(t,e,r){var content=r(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("22c2c008",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);r(40);var o={data:function(){return{message:null,user:{name:"",email:"",phone:"",dob:""}}},components:{},methods:{onSubmit:function(){console.log(this.user),this.message="Submitted!"}}},n=(r(339),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{},[e("br"),t._v(" "),e("h3",{staticClass:"register mt-3 text-2xl leading-7 font-semibold"},[t._v("\n      Регистрация в школу\n")]),e("br"),t._v(" "),e("p",{staticClass:"register"},[t._v("Оставьте заявку заполнив форму")]),t._v(" "),e("br"),t._v(" "),e("form",{staticClass:"contact-form",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Имя:")]),t._v(" "),e("AppInput",{attrs:{type:"text",id:"name",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Электронная почта:")]),t._v(" "),e("AppInput",{attrs:{type:"email",id:"email",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),t._v(" "),e("div",{staticClass:"controls"},[e("AppButton",{on:{click:t.onSubmit}},[t._v(" Регистрация ")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e()],1)]),e("br")])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var o=r(25),n=(r(21),r(53),{components:{AppButton2:r(147).default},data:function(){return Object(o.a)({message:null,certificate:{amount:null,friendName:"",yourName:""}},"certificate",null)},methods:{onSubmit:function(t){console.log(t),this.$store.dispatch("addGift",t);var e=Math.random().toString(36).substr(2,9).toUpperCase();this.certificate={amount:this.amount,yourName:this.yourName,friendName:this.friendName,code:e},this.message="Submitted!"}}}),c=(r(345),r(7)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"gift-card"},[e("div",{staticClass:"gift-info"},[e("p",{staticClass:"mt-4 pt-4 text-gray-800"},[t._v("Подарите свободу на дороге!")]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"mt-4 pt-4 text-gray-800"},[t._v("Идеальный подарок для тех, кто мечтает стать уверенным водителем. Этот сертификат предоставляет возможность пройти курс обучения у лучших инструкторов, на современных автомобилях и по доступной цене. Сделайте особенный подарок, который откроет новые горизонты и подарит уверенность за рулём!")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"custom-component"},[e("div",{staticClass:"image-block"},[e("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",fill:"#4CAF50"}},[e("circle",{attrs:{cx:"32",cy:"32",r:"28",stroke:"#4CAF50","stroke-width":"4",fill:"none"}}),t._v(" "),e("circle",{attrs:{cx:"32",cy:"32",r:"14",stroke:"#4CAF50","stroke-width":"4",fill:"none"}}),t._v(" "),e("line",{attrs:{x1:"32",y1:"4",x2:"32",y2:"60",stroke:"#4CAF50","stroke-width":"4"}}),t._v(" "),e("line",{attrs:{x1:"4",y1:"32",x2:"60",y2:"32",stroke:"#4CAF50","stroke-width":"4"}}),t._v(" "),e("text",{attrs:{x:"32",y:"36","font-family":"Arial","font-size":"8","text-anchor":"middle",fill:"#4CAF50"}},[t._v("ЛОГО")])])]),t._v(" "),t._m(1)]),e("br"),t._v(" "),e("div",{staticClass:"custom-component"},[e("div",{staticClass:"image-block"},[e("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",fill:"#4CAF50"}},[e("path",{attrs:{d:"M52 18H12c-3.31 0-6 2.69-6 6v26c0 3.31 2.69 6 6 6h40c3.31 0 6-2.69 6-6V24c0-3.31-2.69-6-6-6zM12 22h40c1.1 0 2 .9 2 2v6H10v-6c0-1.1.9-2 2-2zm40 28H12c-1.1 0-2-.9-2-2V32h44v16c0 1.1-.9 2-2 2z"}})])]),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"gift-certificate"},[t._m(3),e("br"),t._v(" "),e("h2",{staticClass:"certificate-heading"},[t._v("🎁 Купить подарочную карточку 🎁")]),t._v(" "),e("form",{staticClass:"form-group",on:{submit:function(t){t.preventDefault()}}},[e("AppInput",{staticClass:"form-input",attrs:{id:"amount",type:"number",required:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}},[t._v(" Сумма: ")]),t._v(" "),e("AppInput",{staticClass:"form-input",attrs:{type:"email",id:"email",required:""},model:{value:t.friendEmail,callback:function(e){t.friendEmail=e},expression:"friendEmail"}},[t._v(" Email друга: ")]),t._v(" "),e("AppInput",{staticClass:"form-input",attrs:{type:"email",id:"yourEmail",required:""},model:{value:t.yourEmail,callback:function(e){t.yourEmail=e},expression:"yourEmail"}},[t._v(" Ваш email: ")]),t._v(" "),e("AppButton",{staticClass:"submit-btn",on:{click:t.onSubmit}},[t._v("Купить сертификат")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),t.certificate?e("div",{staticClass:"certificate"},[e("h3",[t._v("Cертификат")]),t._v(" "),e("div",{staticClass:"certificate-content"},[e("p",{staticClass:"certificate-amount"},[t._v("Сумма: "+t._s(t.certificate.amount)+" euro")]),t._v(" "),e("p",{staticClass:"certificate-name"},[t._v("Для: "+t._s(t.certificate.friendName))]),t._v(" "),e("p",{staticClass:"certificate-code"},[t._v("Код: "+t._s(t.certificate.code))])])]):t._e()],1)])])}),[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"certificate-heading"},[t._v("Подарочный сертификат автошколы "),e("b",[t._v("Viktorija")])])},function(){var t=this,e=t._self._c;return e("data",{staticClass:"text-block"},[e("p",{staticClass:"green-text"},[e("b",[t._v("Профессиональные инструктора: ")]),t._v("Обучение у лучших специалистов с индивидуальным подходом на современных автомобилях.")])])},function(){var t=this,e=t._self._c;return e("data",{staticClass:"text-block"},[e("p",{staticClass:"green-text"},[e("b",[t._v("Доступные цены: ")]),t._v("Выгодные пакетные предложения и скидки, подтверждённые положительными отзывами выпускников.")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mt-4 pt-4 text-gray-800"},[t._v("Подарочный сертификат на обучение в автошколе "),e("b",[t._v("Viktorija.")])])}],!1,null,null,null);e.default=component.exports},339:function(t,e,r){"use strict";r(332)},340:function(t,e,r){var o=r(50)((function(i){return i[1]}));o.push([t.i,".register{text-align:center}form{display:flex;flex-direction:column;margin:auto;max-width:400px}label{color:#333;font-weight:700;margin-bottom:.5em}input{border:1px solid #ccc;border-radius:4px;padding:.5em}button,input{font-size:1em}button{background-color:#007bff;border:none;border-radius:4px;color:#fff;cursor:pointer;padding:.7em}button:hover{background-color:#0056b3}.contact-form{background-color:#f9f9f9;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin:0 auto;max-width:800px;padding:20px}.form-row{display:flex;gap:20px;justify-content:space-between;margin-bottom:20px}.form-group{flex:1;min-width:45%}.form-group label{color:#333;display:block;font-weight:700;margin-bottom:8px}.form-group input{border:1px solid #ccc;border-radius:15px;padding:10px;width:100%}.controls{display:flex;gap:20px;justify-content:center}.controls AppButton,.message{margin-top:10px}.message{color:#28a745;text-align:center}",""]),o.locals={},t.exports=o},345:function(t,e,r){"use strict";r(333)},346:function(t,e,r){var o=r(50),n=r(225),c=r(347),l=o((function(i){return i[1]})),d=n(c);l.push([t.i,".gift-card{display:flex;gap:20px;padding:20px}.gift-info{text-align:left}.gift-certificate,.gift-info{background-color:#f9f9f9;border:1px solid #ddd;border-radius:8px;border-radius:5px;box-shadow:0 0 10px rgba(0,0,0,.1);flex:1;padding:20px}.gift-certificate{text-align:center}.certificate-heading{color:#333;font-size:24px;margin-bottom:20px}.form-group{margin-bottom:0}label{color:#333;display:block;font-weight:700;margin-bottom:5px}.form-input{font-size:16px;width:100%}.submit-btn{background-color:#11b445;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;padding:10px 20px;transition:background-color .3s}.submit-btn:hover{background-color:#0e9e38}.certificate,.message{margin-top:20px}.certificate{background:#fff;background-image:url("+d+');background-position:50%;background-repeat:no-repeat;background-size:cover;border:2px solid #3182ce;border-radius:10px;box-shadow:0 0 15px rgba(0,0,0,.2);font-family:"Times New Roman",Times,serif;max-width:400px;padding:20px;position:relative;text-align:center}.certificate-content{border-bottom:1px solid #ddd;border-top:1px solid #ddd;margin:20px 0;padding:10px 0}.certificate-amount,.certificate-code{font-size:18px;margin:10px 0}.certificate-name{font-size:16px;margin:10px 0}.certificate-amount{font-weight:700}.certificate-code{background:#f9f9f9;border:1px dashed #4caf50;border-radius:5px;display:inline-block;padding:5px}.custom-component{align-items:center;display:flex;gap:8px}.text-block{display:flex;flex-direction:row;gap:3px}.green-text,.orange-text{color:#333}',""]),l.locals={},t.exports=l},347:function(t,e,r){t.exports=r.p+"img/certificate_1.e1ee8a0.jpg"},481:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("48e80383",content,!0,{sourceMap:!1})},497:function(t,e,r){"use strict";r.r(e);r(31),r(52);var o={name:"CategoryList",data:function(){return{categories:[{id:"A",title:"Категория A",description:"Описание категории A...",advantages:["Преимущество 1","Преимущество 2"],program:"Программа обучения для категории A...",requirements:"Требования для категории A..."},{id:"A1",title:"Категория A1",description:"Описание категории A1...",advantages:["Преимущество 1","Преимущество 2"],program:"Программа обучения для категории A1...",requirements:"Требования для категории A1..."},{id:"A2",title:"Категория A2",description:"Описание категории A2...",advantages:["Преимущество 1","Преимущество 2"],program:"Программа обучения для категории A2...",requirements:"Требования для категории A2..."},{id:"AM",title:"Категория AM",description:"Описание категории AM...",advantages:["Преимущество 1","Преимущество 2"],program:"Программа обучения для категории AM...",requirements:"Требования для категории AM..."},{id:"B",title:"Категория B",description:"Описание категории B...",advantages:["Преимущество 1","Преимущество 2"],program:"Программа обучения для категории B...",requirements:"Требования для категории B..."}]}}},n=(r(530),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",t._l(t.categories,(function(r){return e("section",{key:r.id},[e("div",{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[e("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css",rel:"stylesheet"}}),t._v(" "),e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("a",{staticClass:"flex justify-center pt-8 sm:pt-0",attrs:{href:"https://nuxtjs.org",target:"_blank"}},[e("svg",{attrs:{width:"218",height:"45",viewBox:"0 0 159 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M55.5017 6.81866H60.1727L70.0719 22.9912V6.81866H74.3837V29.7345H69.7446L59.8135 13.5955V29.7345H55.5017V6.81866Z",fill:"#003543"}}),t._v(" "),e("path",{attrs:{d:"M93.657 29.7344H89.6389V27.1747C88.7241 28.9761 86.8628 29.9904 84.5113 29.9904C80.7869 29.9904 78.3684 27.3059 78.3684 23.4423V13.2339H82.3865V22.5976C82.3865 24.8566 83.7594 26.4276 85.8171 26.4276C88.0712 26.4276 89.6389 24.6598 89.6389 22.2377V13.2339H93.657V29.7344Z",fill:"#003543"}}),t._v(" "),e("path",{attrs:{d:"M107.64 29.7344L103.784 24.2342L99.9291 29.7344H95.6492L101.596 21.1242L96.1074 13.2339H100.485L103.784 17.9821L107.051 13.2339H111.461L105.94 21.1242L111.886 29.7344H107.64Z",fill:"#003543"}}),t._v(" "),e("path",{attrs:{d:"M120.053 8.25848V13.2339H124.627V16.6063H120.053V24.7974C120.053 25.0725 120.162 25.3363 120.356 25.531C120.55 25.7257 120.813 25.8353 121.087 25.8357H124.627V29.728H121.98C118.386 29.728 116.035 27.6323 116.035 23.9687V16.6095H112.801V13.2339H114.83C115.776 13.2339 116.327 12.6692 116.327 11.7349V8.25848H120.053Z",fill:"#003543"}}),t._v(" "),e("path",{attrs:{d:"M134.756 24.5446V6.81866H139.066V23.1864C139.066 27.6067 136.943 29.7345 133.349 29.7345H128.332V25.8421H133.461C133.804 25.8421 134.134 25.7054 134.377 25.4621C134.619 25.2188 134.756 24.8888 134.756 24.5446Z",fill:"#003543"}}),t._v(" "),e("path",{attrs:{d:"M141.649 22.0409H145.799C146.029 24.6006 147.728 26.2308 150.472 26.2308C152.923 26.2308 154.623 25.2501 154.623 23.2199C154.623 18.3085 142.331 21.7129 142.331 12.9395C142.334 9.17515 145.568 6.55945 150.215 6.55945C155.05 6.55945 158.317 9.34153 158.516 13.6306H154.388C154.193 11.6341 152.632 10.2918 150.207 10.2918C147.953 10.2918 146.548 11.3397 146.548 12.9427C146.548 18.0173 159 14.2226 159 23.1576C159 27.4131 155.504 30 150.474 30C145.279 30 141.882 26.8563 141.654 22.0441",fill:"#003543"}}),t._v(" "),e("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])]),t._v(" "),e("div",{staticClass:"mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[e("h2",{staticClass:"text-2xl leading-7 font-semibold"},[t._v("\n          Welcome to your Nuxt Application\n        ")]),t._v("\n        Register form\n        "),e("Register"),t._v(" "),t._m(0,!0),e("br"),t._v(" "),e("Gift"),e("br"),t._v(" "),t._m(1,!0)],1),t._v(" "),e("div",{staticClass:"flex justify-center pt-4 space-x-2"},[e("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[e("svg",{staticClass:"w-6 h-6 text-gray-600 hover:text-gray-800 button--github",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z",fill:"currentColor"}})])]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/nuxt_js",target:"_blank"}},[e("svg",{staticClass:"w-6 h-6 text-gray-600 hover:text-gray-800",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z",fill:"currentColor"}})])])])])]),t._v(" "),e("div",{staticClass:"w-full lg:w-1/2 mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6"},[e("h2",[t._v(t._s(r.title))]),t._v(" "),e("p",[t._v(t._s(r.description))]),t._v(" "),e("h3",[t._v("Преимущества")]),t._v(" "),e("ul",t._l(r.advantages,(function(r){return e("li",{key:r},[t._v(t._s(r))])})),0),t._v(" "),e("h3",[t._v("Программа обучения")]),t._v(" "),e("p",[t._v(t._s(r.program))]),t._v(" "),e("h3",[t._v("Требования")]),t._v(" "),e("p",[t._v(t._s(r.requirements))])])])})),0)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"mt-3 text-gray-600"},[t._v("\n          We recommend you take a look at the "),e("a",{staticClass:"button--doc text-green-500 hover:underline",attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("Nuxt Documentation")]),t._v(", whether you are new or have previous experience with the framework."),e("br")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mt-4 pt-4 text-gray-800 border-t border-dashed"},[t._v("\n          To get started, remove "),e("code",{staticClass:"bg-gray-100 text-sm p-1 rounded border"},[t._v("components/Tutorial.vue")]),t._v(" and start coding in "),e("code",{staticClass:"bg-gray-100 text-sm p-1 rounded border"},[t._v("pages/index.vue")]),t._v(". Have fun!\n        ")])}],!1,null,"3dd72205",null);e.default=component.exports;installComponents(component,{Register:r(336).default,Gift:r(338).default})},530:function(t,e,r){"use strict";r(481)},531:function(t,e,r){var o=r(50)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o}}]);