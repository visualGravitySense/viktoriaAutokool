(window.webpackJsonp=window.webpackJsonp||[]).push([[60,20,28,29],{335:function(t,e,o){var content=o(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("d3bcaa0c",content,!0,{sourceMap:!1})},350:function(t,e,o){"use strict";o(335)},351:function(t,e,o){var r=o(50)((function(i){return i[1]}));r.push([t.i,".container{display:flex;flex-wrap:wrap;gap:10px}.in-li{border:2px dashed #fee8d8;border-radius:5px;display:flex;flex:1 1 calc(33.333% - 20px);flex-direction:column;max-width:calc(33.333% - 20px);padding:10px;transition:background-color .3s ease,transform .3s ease}.in-li:hover{background-color:#f3f9ff;transform:scale(1.02)}.instructor-image{aspect-ratio:1/1;border-radius:50%;height:auto;margin-bottom:15px;-o-object-fit:cover;object-fit:cover;width:100%}.in-title{font-size:1.5rem;font-weight:700;margin-bottom:10px}.in-p{color:#666;font-size:1.2rem}",""]),r.locals={},t.exports=r},352:function(t,e,o){t.exports=o.p+"img/automat_pic.1eb2470.png"},353:function(t,e,o){t.exports=o.p+"img/category_aa.794147f.png"},356:function(t,e,o){"use strict";o.r(e);o(40);var r={props:{instructor:{type:Object,required:!0},admin:{type:Boolean,default:!1}},computed:{getLink:function(){return this.admin?"/admin/".concat(this.instructor.id):"/instructors/".concat(this.instructor.id)}},name:"InstructorPreview"},n=(o(350),o(7)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"in-li bg-white overflow-hidden shadow p-4"},[e("img",{staticClass:"instructor-image",attrs:{src:t.instructor.image,alt:"Instructor Image"}}),t._v(" "),e("h3",{staticClass:"in-title leading-7 font-semibold"},[t._v("\n    "+t._s(t.instructor.name)+"\n  ")]),t._v(" "),e("p",{staticClass:"in-p text-gray-600"},[t._v("\n    "+t._s(t.instructor.bio)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,o){t.exports=o.p+"img/category_a.cc8ba55.png"},367:function(t,e,o){t.exports=o.p+"img/instructor_1.2004401.jpg"},374:function(t,e,o){"use strict";o.r(e);var r={components:{instructorPreview:o(356).default},props:{instructors:{type:Array,required:!0},admin:{type:Boolean,default:!1}},name:"InstructorsLists",data:function(){return{}}},n=o(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 cards"},t._l(t.instructors,(function(o){return e("instructorPreview",{key:o.id,attrs:{admin:t.admin,instructor:o}})})),1)}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("7c0f04ba",content,!0,{sourceMap:!1})},387:function(t,e,o){var content=o(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("dc80590e",content,!0,{sourceMap:!1})},420:function(t,e,o){"use strict";o(381)},421:function(t,e,o){var r=o(50),n=o(225),c=o(226),l=r((function(i){return i[1]}));l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]),l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap);"]);var d=n(c);l.push([t.i,".relativeBg[data-v-eaa719e2]{background-image:url("+d+');background-position:50%;background-size:cover}.hero-section[data-v-eaa719e2]{padding:3rem 2rem;text-align:left}.welcome-text[data-v-eaa719e2]{color:#d32f2f;font-family:"Permanent Marker",cursive;font-size:1.5rem;margin-bottom:1rem}.welcome-text code[data-v-eaa719e2]{background-color:#ffeb3b;border:1px solid gold;border-radius:5px;color:#000;font-size:1.5rem;padding:.5rem}.hero-title[data-v-eaa719e2]{color:#1976d2;font-family:"Lobster",cursive;font-size:3rem;font-weight:700;line-height:1.2;margin-top:1.5rem}.hero-title .confidence[data-v-eaa719e2]{color:#d32f2f;-webkit-text-decoration:underline;text-decoration:underline}.description[data-v-eaa719e2]{color:#4caf50;font-size:1.25rem;margin-top:2rem}.description[data-v-eaa719e2],.register-link[data-v-eaa719e2]{font-family:"Lobster",cursive}.register-link[data-v-eaa719e2]{color:#ff5722;font-weight:700;-webkit-text-decoration:none;text-decoration:none;transition:color .3s ease}.register-link[data-v-eaa719e2]:hover{color:#e64a19;-webkit-text-decoration:underline;text-decoration:underline}',""]),l.locals={},t.exports=l},422:function(t,e,o){t.exports=o.p+"img/instructor_2.3865420.jpg"},423:function(t,e,o){t.exports=o.p+"img/instructor_3.210996a.jpg"},424:function(t,e,o){t.exports=o.p+"img/instructor_4.fbd3068.jpg"},425:function(t,e,o){"use strict";o(387)},426:function(t,e,o){var r=o(50)((function(i){return i[1]}));r.push([t.i,".register{text-align:center}form{display:flex;flex-direction:column;margin:auto;max-width:400px}label{color:#333;font-weight:700;margin-bottom:.5em}input{border:1px solid #ccc;border-radius:4px;padding:.5em}button,input{font-size:1em}button{background-color:#007bff;border:none;border-radius:4px;color:#fff;cursor:pointer;padding:.7em}button:hover{background-color:#0056b3}.contact-form{background-color:#f9f9f9;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.1);margin:0 auto;max-width:800px;padding:20px}.form-row{display:flex;gap:20px;justify-content:space-between;margin-bottom:20px}.form-group{flex:1;min-width:45%}.form-group label{color:#333;display:block;font-weight:700;margin-bottom:8px}.form-group input{border:1px solid #ccc;border-radius:15px;padding:10px;width:100%}.controls{display:flex;gap:20px;justify-content:center}.controls AppButton,.message{margin-top:10px}.message{color:#28a745;text-align:center}",""]),r.locals={},t.exports=r},472:function(t,e,o){"use strict";var r={name:"Viktoria",data:function(){return{welcomeMessage:"Добро пожаловать в нашу автошколу!",mainTitle:"Научитесь водить с уверенностью",subtitle:"Профессиональные инструктора и гибкий график занятий",ctaText:"Зарегистрируйтесь сегодня и начните свой путь к безопасному вождению",ctaButtonText:"Зарегистрироваться",cards:[{id:1,title:"Категория A",description:"Описание категории A...",image:o(358)},{id:2,title:"Категория B",description:"Описание категории B...",image:o(352)},{id:3,title:"Категория C",description:"Описание категории C...",image:o(353)}]}}},n=(o(420),o(7)),component=Object(n.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relativeBg flex items-center justify-center min-h-80vh bg-cover bg-center"},[e("div",{staticClass:"max-w-4xl mx-auto sm:px-6 lg:px-8"},[e("div",{staticClass:"hero-section"},[e("p",{staticClass:"welcome-text"},[e("code",[t._v("Добро пожаловать в автошколу Виктория")])]),t._v(" "),e("h1",{staticClass:"hero-title"},[t._v("\n        Научитесь водить с\n        "),e("span",{staticClass:"confidence"},[t._v("уверенностью")])]),t._v(" "),e("p",{staticClass:"description"},[t._v("\n        Профессиональные инструктора и гибкий график занятий.\n        "),e("a",{staticClass:"register-link",attrs:{href:"",target:"_blank"}},[t._v("Зарегистрируйтесь")]),t._v(" сегодня и начните свой путь к безопасному вождению."),e("br")])])])])}],!1,null,"eaa719e2",null);e.a=component.exports},478:function(t,e,o){var content=o(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("ab7dae12",content,!0,{sourceMap:!1})},495:function(t,e,o){"use strict";o.r(e);o(40);var r={data:function(){return{message:null,user:{name:"",email:"",phone:"",dob:""}}},components:{},methods:{onSubmit:function(){console.log(this.user),this.message="Submitted!"}}},n=(o(425),o(7)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{},[e("br"),t._v(" "),e("h3",{staticClass:"register mt-3 text-2xl leading-7 font-semibold"},[t._v("\n      Регистрация в школу\n")]),e("br"),t._v(" "),e("p",{staticClass:"register"},[t._v("Оставьте заявку заполнив форму")]),t._v(" "),e("br"),t._v(" "),e("form",{staticClass:"contact-form",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[t._v("Имя:")]),t._v(" "),e("AppInput",{attrs:{type:"text",id:"name",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Электронная почта:")]),t._v(" "),e("AppInput",{attrs:{type:"email",id:"email",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),t._v(" "),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Ваше сообщение:")]),t._v(" "),e("AppInput",{attrs:{type:"email",id:"email",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),t._v(" "),e("div",{staticClass:"controls"},[e("AppButton",{on:{click:t.onSubmit}},[t._v(" Отправить  ")]),t._v(" "),t.message?e("Message",{attrs:{message:t.message}}):t._e()],1)]),e("br")])}),[],!1,null,null,null);e.default=component.exports},522:function(t,e,o){t.exports=o.p+"img/promo_1.8fb4372.png"},523:function(t,e,o){"use strict";o(478)},524:function(t,e,o){var r=o(50),n=o(225),c=o(525),l=r((function(i){return i[1]}));l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Rochester&family=Roboto+Slab:wght@400;700&display=swap);"]);var d=n(c);l.push([t.i,'.success-stories-container[data-v-35e5bb21]{display:flex;flex-direction:column;gap:20px;padding:20px}.success-story-item[data-v-35e5bb21]{background:#f4f9ff;border:1px solid #d6c8b6;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);padding:20px;transition:background-color .3s ease,transform .3s ease}.success-story-item[data-v-35e5bb21]:hover{background-color:#f2e9e0;transform:scale(1.02)}.success-story-item h3[data-v-35e5bb21]{color:#5a4a41;font-family:"Georgia",serif;font-size:1.5rem;font-weight:700;margin-bottom:10px}.success-story-item p[data-v-35e5bb21]{color:#6f5e4e;font-family:"Times New Roman",serif;font-size:1rem;line-height:1.5}.success-story-item[data-v-35e5bb21]:before{color:#c79c6b;content:"✦";display:block;font-size:2rem;margin-bottom:10px;text-align:center}.reviews-container[data-v-35e5bb21]{display:flex;flex-direction:column;gap:20px;padding:20px}.review-item[data-v-35e5bb21]{align-items:center;background:#ecf2f2;border:1px solid #e0c8a0;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);display:flex;padding:15px;transition:background-color .3s ease,transform .3s ease}.review-item[data-v-35e5bb21]:hover{background-color:#f2e4d7;transform:scale(1.02)}.review-image[data-v-35e5bb21]{border-radius:50%;height:60px;margin-right:15px;-o-object-fit:cover;object-fit:cover;width:60px}.review-content[data-v-35e5bb21]{display:flex;flex-direction:column}.review-name[data-v-35e5bb21]{color:#4a3f2e;font-family:"Georgia",serif;font-size:1.1rem;font-weight:700;margin-bottom:5px}.review-text[data-v-35e5bb21]{color:#6f5e4e;font-family:"Times New Roman",serif;font-size:.95rem}.hero-section[data-v-35e5bb21]{align-items:center;background-color:#f8f9fa;display:flex;gap:20px;justify-content:space-between;padding:40px}.hero-text[data-v-35e5bb21]{flex:1;max-width:75%;text-align:left}.hero-image[data-v-35e5bb21]{flex:1;max-width:25%}.hero-image img[data-v-35e5bb21]{border-radius:12px;box-shadow:0 4px 8px rgba(0,0,0,.2);height:auto;width:100%}.welcome-text[data-v-35e5bb21]{color:#333;font-size:1.2rem;margin-bottom:16px}.hero-title[data-v-35e5bb21]{color:#eee;font-size:2.5rem;font-weight:700;margin-bottom:16px}.description[data-v-35e5bb21]{color:#555;font-size:1.1rem}.register-link[data-v-35e5bb21]{color:#007bff;font-weight:600;-webkit-text-decoration:none;text-decoration:none}.register-link[data-v-35e5bb21]:hover{-webkit-text-decoration:underline;text-decoration:underline}.about-page[data-v-35e5bb21]{border-radius:10px;font-family:"Roboto Slab",serif;margin:0 auto;max-width:1200px;padding:2rem}section[data-v-35e5bb21]{background-color:#fff;border:2px solid #e0ddda;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.2);margin-bottom:40px;padding:20px;transition:transform .3s ease,box-shadow .3s ease}section[data-v-35e5bb21]:hover{box-shadow:0 8px 16px rgba(0,0,0,.3);transform:scale(1.02)}h2[data-v-35e5bb21],h3[data-v-35e5bb21]{color:#007bff;font-family:"Rochester",cursive;margin-bottom:20px;text-shadow:1px 1px 2px rgba(0,0,0,.2)}li[data-v-35e5bb21],p[data-v-35e5bb21]{color:#333;font-size:1.2rem}.social-media a[data-v-35e5bb21]{color:#3182ce;display:inline-block;font-weight:700;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;text-shadow:1px 1px 0 #fff;transition:color .3s ease,transform .3s ease}.social-media a[data-v-35e5bb21]:hover{color:#007bff;transform:scale(1.1)}#map[data-v-35e5bb21]{background:#ccc;border:2px solid #000;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.2);height:300px}.certificates[data-v-35e5bb21],.instructors[data-v-35e5bb21],.interviews[data-v-35e5bb21],.partners[data-v-35e5bb21],.reviews[data-v-35e5bb21],.social-media[data-v-35e5bb21],.success-stories[data-v-35e5bb21]{display:flex;flex-wrap:wrap}.certificates>div[data-v-35e5bb21],.instructors>div[data-v-35e5bb21],.interviews>div[data-v-35e5bb21],.partners>div[data-v-35e5bb21],.reviews>div[data-v-35e5bb21],.social-media>a[data-v-35e5bb21],.success-stories>div[data-v-35e5bb21]{flex:1 1 45%;margin:10px}.about-section[data-v-35e5bb21]{align-items:center;display:flex;justify-content:space-between;padding:40px}.about-image[data-v-35e5bb21]{flex:1;max-width:50%;padding-right:20px}.about-image img[data-v-35e5bb21]{border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,.1);height:auto;width:100%}.about-content[data-v-35e5bb21]{flex:1;max-width:50%;text-align:left}.about-title[data-v-35e5bb21]{color:#333;font-size:2rem;font-weight:600;margin-bottom:16px}.about-paragraph[data-v-35e5bb21]{color:#333;font-size:1rem;font-weight:100}.confidence[data-v-35e5bb21]{color:#007bff}.pt-4[data-v-35e5bb21]{padding-top:1rem}.text-gray-800[data-v-35e5bb21]{color:#333}.border-t[data-v-35e5bb21]{border-top-width:1px}.border-dashed[data-v-35e5bb21]{border-style:dashed}.bg-yellow-100[data-v-35e5bb21]{background-color:#faf089}.text-xl[data-v-35e5bb21]{font-size:1.25rem}.p-1[data-v-35e5bb21]{padding:.25rem}.rounded[data-v-35e5bb21]{border-radius:.375rem}.border[data-v-35e5bb21]{border-width:1px}.mt-3[data-v-35e5bb21]{margin-top:.75rem}.text-gray-600[data-v-35e5bb21]{color:#4a5568}.header[data-v-35e5bb21]{border-bottom:2px solid #8f8f8f;padding:9rem 2rem;text-align:center}.header h1[data-v-35e5bb21]{font-size:3em;margin:0}.header p[data-v-35e5bb21]{margin:10px 0}.header button[data-v-35e5bb21]{background:#4165de;border:none;color:#fff;cursor:pointer;padding:10px 20px}.header a[data-v-35e5bb21]{color:#000}.hero-title-black[data-v-35e5bb21]{color:#222;font-size:2.5rem;font-weight:700;margin-bottom:16px}.contactBg[data-v-35e5bb21]{background-image:url('+d+');background-position:50%;background-size:cover;position:relative}.contactBg[data-v-35e5bb21]:before{background-color:rgba(0,0,0,.6);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.contactBg>*[data-v-35e5bb21]{position:relative;z-index:2}.partner-logo[data-v-35e5bb21]{margin-top:10px}.logos-container[data-v-35e5bb21]{align-items:center;display:flex;gap:20px;justify-content:flex-start;margin-top:10px}.logos-container[data-v-35e5bb21]:has(.partner-logo+.partner-logo){justify-content:center}.partner-logo[data-v-35e5bb21]{height:auto;width:200px}.contact-banner[data-v-35e5bb21]{background-color:#86c0ff;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.1);max-width:600px;padding:30px;text-align:left}.contact-banner h2[data-v-35e5bb21]{color:#070708;font-size:1.8em;margin-bottom:20px}.contact-banner p[data-v-35e5bb21]{color:#333;font-size:1.2em;line-height:1.5}.containerContact[data-v-35e5bb21]{align-items:flex-start;display:flex;flex-wrap:wrap;gap:20px;justify-content:space-between;margin:20px}.contact-details[data-v-35e5bb21]{background-color:#fff;border:1px solid #e0e0e0;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.1);max-width:400px;padding:20px}.contact-item[data-v-35e5bb21]{color:#333;font-family:"Arial",sans-serif;margin-bottom:15px}.contact-item a[data-v-35e5bb21]{color:#007bff;font-weight:700;-webkit-text-decoration:none;text-decoration:none}.contact-item a[data-v-35e5bb21]:hover{-webkit-text-decoration:underline;text-decoration:underline}.title[data-v-35e5bb21]{color:#004080;font-size:1.5em;margin-bottom:10px}.address[data-v-35e5bb21]{color:#555;font-size:1.1em}.email[data-v-35e5bb21],.phone[data-v-35e5bb21]{font-size:1.2em}.contact-item strong[data-v-35e5bb21]{color:#333;font-weight:600}.map-container[data-v-35e5bb21]{margin-top:20px}.map-container iframe[data-v-35e5bb21]{background:#ccc;border:2px solid #000;border-radius:10px;box-shadow:0 4px 8px rgba(0,0,0,.2);height:300px}',""]),l.locals={},t.exports=l},525:function(t,e,o){t.exports=o.p+"img/retro_contact.858e4a5.jpg"},564:function(t,e,o){"use strict";o.r(e);var r=o(374),n=o(472),c=o(493),l={components:{register:o(336).default,instructorsList:r.default,aboutHero:n.a,aboutUs:c.default},data:function(){return{instructors:[{id:1,name:"Igor Nagorskii",bio:"Биография инструктора 1",image:o(367)},{id:2,name:"Maksim Fedorenko",bio:"Биография инструктора 2",image:o(422)},{id:1,name:"Ivan Skorobogatov",bio:"Биография инструктора 1",image:o(424)},{id:2,name:"Stanislav Zigadlo",bio:"Биография инструктора 2",image:o(423)},{id:1,name:"Andrei Naan",bio:"Биография инструктора 1",image:o(522)}],title:"О нашей автошколе",topic:"Ведущая автошкола в Таллине с 18-летним опытом работы",paragraph:"Автошкола Виктория предлагает и электронное обучение! Цена курса категории B в электронном формате на сайте liikluslab.ee составляет 840 €. Зарегистрироваться можно на нашем сайте www.viktorijaautokool.ee, а также на www.liikluslab.ee или www.teooria.ee.",history:"Краткая история автошколы...",mission:"Миссия и ценности...",program:"Описание программы обучения...",advantages:["Преимущество 1","Преимущество 2"],examProcedure:"Процедура сдачи экзаменов...",achievements:"Наши достижения...",successStories:[{id:1,title:"История успеха 1 История успеха 1 История успеха 1",content:"Текст истории... Текст истории... Текст истории... Текст истории... Текст истории... Текст истории... Текст истории... Текст истории..."},{id:2,title:"История успеха 2 История успеха 2 История успеха 2",content:"Текст истории... Текст истории... Текст истории... Текст истории... Текст истории... Текст истории... Текст истории..."}],reviews:[{id:1,name:"Alice Johnson",text:"This is an amazing product! I would definitely recommend it to my friends.",image:"https://via.placeholder.com/60"},{id:2,name:"Bob Smith",text:"Not what I expected, but still decent. The quality is acceptable.",image:"https://via.placeholder.com/60"}],certificates:["Сертификат 1","Сертификат 2"],partners:["Партнер 1","Партнер 2"],contactInfo:"Контактная информация...",socialMedia:[{platform:"Facebook",link:"https://facebook.com"},{platform:"Instagram",link:"https://instagram.com"}]}}},d=(o(523),o(7)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-page"},[t._m(0),t._v(" "),e("section",[e("div",{staticClass:"hero-section"},[e("div",{staticClass:"about-image"},[e("contact")],1),t._v(" "),e("div",{staticClass:"about-content"},[e("h2",{staticClass:"hero-title text-gray-600 mt-10 text-2xl leading-7 font-semibold"},[t._v("\n          "+t._s(t.title)+" "),e("span",{staticClass:"confidence"},[t._v("Viktorija")])]),t._v(" "),e("p",{staticClass:"about-paragraph mt-3 text-gray-600"},[t._v("\n          "+t._s(t.paragraph)+"\n        ")]),e("br"),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"header contactBg"},[e("p",{staticClass:"welcome-text"},[e("code",[t._v("Добро пожаловать в автошколу Viktorija")])]),t._v(" "),e("h1",{staticClass:"hero-title"},[t._v("\n            Ваш путь к"),e("br"),t._v(" "),e("span",{staticClass:"confidence"},[t._v("безопасному")]),t._v(" вождению!\n          ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"certificates-licenses-section"},[e("h2",{staticClass:"text-gray-600"},[t._v("Наши партнеры")]),t._v(" "),e("div",{staticClass:"logos-container"},[e("img",{staticClass:"transform transition hover:scale-105 hover:shadow-xl partner-logo",attrs:{src:"/liikluslab_logo.webp",alt:"Liikluslab Logo"}}),t._v(" "),e("img",{staticClass:"transform transition hover:scale-105 hover:shadow-xl partner-logo",attrs:{src:"/teooria_logo.png",alt:"Teooria Logo"}})]),t._v(" "),e("div",{staticClass:"logos-container"},[e("img",{staticClass:"transform transition hover:scale-105 hover:shadow-xl partner-logo",attrs:{src:"/maanteeamet-logo.png",alt:"Maanteamet Logo"}}),t._v(" "),e("img",{staticClass:"transform transition hover:scale-105 hover:shadow-xl partner-logo",attrs:{src:"/creditinfo_logo.png",alt:"Credit Info Logo"}})])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"contact-section"},[e("h2",{staticClass:"about-title mt-10 text-2xl leading-7 font-semibold"},[t._v("Контактная информация")]),t._v(" "),e("div",{staticClass:"contact-info"},[e("div",{staticClass:"containerContact"},[e("div",{staticClass:"contact-details"},[e("p",{staticClass:"contact-item"},[e("strong",{staticClass:"title"},[t._v("Viktorija Autokool OÜ")])]),t._v(" "),e("p",{staticClass:"contact-item address"},[t._v("\n            Jaama 1a (2 этаж)"),e("br"),t._v("\n            Nõmme (центр)"),e("br"),t._v("\n            Tallinn, 11615\n          ")]),t._v(" "),e("p",{staticClass:"contact-item phone"},[e("strong",[t._v("Телефон:")]),t._v(" "),e("a",{attrs:{href:"tel:+37253464508"}},[t._v("+372 53464508")])]),t._v(" "),e("p",{staticClass:"contact-item email"},[e("strong",[t._v("Email:")]),t._v(" "),e("a",{attrs:{href:"mailto:info@viktorijaautokool.ee"}},[t._v("info@viktorijaautokool.ee")])])]),t._v(" "),e("div",{staticClass:"contact-banner"},[e("h2",{staticClass:"text-gray-600"},[t._v("Начни свой успешный путь Автошколе"),e("br"),t._v(" Viktorija в Нымме!")]),t._v(" "),e("p",[t._v("\n          Присоединяйтесь к автошколе Viktorija и получите профессиональное обучение вождению на современных автомобилях под руководством опытных инструкторов. Станьте уверенным лидером благодаря индивидуальному подходу и поддержке. Зарегистрируйтесь сейчас и начните увлекательное путешествие к мастерству и безопасности!\n        ")])])])]),t._v(" "),e("h2",{staticClass:"text-gray-600"},[t._v("Карта проезда")]),t._v(" "),e("div",{staticClass:"map-container"},[e("iframe",{staticStyle:{border:"0","border-radius":"10px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.079174631084!2d24.65821631507086!3d59.40751918192897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4693b0b2e3c8053b%3A0x4fae3e3837f8de64!2sJaama%201a%2C%20N%C3%B5mme%2C%20Tallinn%2C%2011615!5e0!3m2!1sen!2see!4v1618076923441!5m2!1sen!2see",width:"100%",height:"300",allowfullscreen:"",loading:"lazy"}})])])}],!1,null,"35e5bb21",null);e.default=component.exports;installComponents(component,{Contact:o(495).default})}}]);