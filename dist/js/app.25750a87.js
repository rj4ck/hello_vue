(function(t){function s(s){for(var a,c,r=s[0],o=s[1],n=s[2],u=0,m=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(s);while(m.length)m.shift()();return l.push.apply(l,n||[]),e()}function e(){for(var t,s=0;s<l.length;s++){for(var e=l[s],a=!0,r=1;r<e.length;r++){var o=e[r];0!==i[o]&&(a=!1)}a&&(l.splice(s--,1),t=c(c.s=e[0]))}return t}var a={},i={app:0},l=[];function c(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)c.d(e,a,function(s){return t[s]}.bind(null,a));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/hello_vue/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var n=0;n<r.length;n++)s(r[n]);var d=o;l.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"022c":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("0cdd");var a=e("2b0e"),i=e("5f5b"),l=e("0025");e("ab8b"),e("2dd8");a["default"].use(i["a"]),a["default"].use(l["a"]);var c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("b-navbar",{staticClass:"navbar fixed-top navbar-custom sticky sticky-dark",attrs:{toggleable:"lg",fixed:"top"}},[e("b-container",{attrs:{fluid:""}},[e("b-navbar-brand",{attrs:{href:"#"}},[t._v("TEST")]),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}],staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"#home"}},[t._v("Inicio")]),e("b-nav-item",{staticClass:"active",attrs:{href:"#products"}},[t._v("Productos")]),e("b-nav-item",{attrs:{href:"#aboutUs"}},[t._v("Empresas")]),e("b-nav-item",{attrs:{href:"#testimonials"}},[t._v("Clientes")])],1)],1)],1)],1),e("router-view")],1)},r=[],o={created:function(){this.$root.$on("bv::scrollspy::activate",this.onActivate),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(t){var s=window.scrollY>50;s?document.getElementsByClassName("sticky")[0].classList.add("nav-sticky"):document.getElementsByClassName("sticky")[0].classList.remove("nav-sticky")},onActivate:function(t){console.log('Received event: "bv::scrollspy::activate" for target ',t)},scrollIntoView:function(t){t.preventDefault();var s=t.target.getAttribute("href"),e=s?document.querySelector(s):null;e&&(this.$refs.content.scrollTop=e.offsetTop)}}},n=o,d=(e("5c0b"),e("2877")),u=Object(d["a"])(n,c,r,!1,null,null,null),m=u.exports,p=(e("d3b7"),e("8c4f")),v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"home"}},[e("Header"),e("Products"),e("About"),e("Testimonial"),e("div",{staticClass:"fb-customerchat",attrs:{attribution:"setup_tool",page_id:"485319678157760",theme_color:"#e68585"}}),e("Footer"),t._m(0)],1)},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"back-to-top",attrs:{href:"#",id:"back-to-top"}},[e("i",{staticClass:"mdi mdi-chevron-up"})])}],h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},[e("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),e("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[e("h1",[t._v("Hello world!")])]),e("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),e("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[e("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)},b=[],C={name:"Header"},g=C,_=Object(d["a"])(g,h,b,!1,null,"b65477fe",null),x=_.exports,w=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"bg-dark footer"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"footer-list"},[e("p",{staticClass:"text-white mb-2 footer-list-title"},[t._v("Contactanos")]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"mdi mdi-email mr-2"}),t._v("hello@vue.com")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"mdi mdi-facebook mr-2"}),t._v("hello vue")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"mdi mdi-instagram mr-2"}),t._v("@helloVue")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"mdi mdi-whatsapp mr-2"}),t._v("(504) 9876-5432")])])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"float-left pull-none"},[e("p",{staticClass:"text-white-50"},[t._v("2020 © Hello Vue.")])])])])])])}],k={name:"Footer"},j=k,E=Object(d["a"])(j,w,y,!1,null,"55080add",null),S=E.exports,P=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section product bg-light",attrs:{id:"products"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"title text-center mb-3"},[e("h2",{staticClass:"font-"},[t._v("Productos")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"demo-box bg-white mt-4 p-2"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/demo/index_1.jpg",alt:""}}),e("div",{staticClass:"p-3 text-center"},[e("h5",{staticClass:"mb-0"},[t._v("light Layouts")])])])])]),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"demo-box bg-white mt-4 p-2"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/demo/index_2.jpg",alt:""}}),e("div",{staticClass:"p-3 text-center"},[e("h5",{staticClass:"mb-0"},[t._v("Dark Layouts")])])])])]),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"demo-box bg-white mt-4 p-2"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/demo/index_3.jpg",alt:""}}),e("div",{staticClass:"p-3 text-center"},[e("h5",{staticClass:"mb-0"},[t._v("Material Design ")])])])])]),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"demo-box bg-white mt-4 p-2"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/demo/index_4.jpg",alt:""}}),e("div",{staticClass:"p-3 text-center"},[e("h5",{staticClass:"mb-0"},[t._v("Purple Layouts")])])])])]),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"demo-box bg-white mt-4 p-2"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/demo/index_5.jpg",alt:""}}),e("div",{staticClass:"p-3 text-center"},[e("h5",{staticClass:"mb-0"},[t._v("Boxed Layouts")])])])])]),e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"demo-box bg-white mt-4 p-2"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/demo/index_6.jpg",alt:""}}),e("div",{staticClass:"p-3 text-center"},[e("h5",{staticClass:"mb-0"},[t._v("Horizontal ")])])])])])])])])}],O={name:"Products"},L=O,N=Object(d["a"])(L,P,$,!1,null,"7170cb72",null),T=N.exports,B=e("f820"),F=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section bg-light",attrs:{id:"testimonials"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"text-center mb-4"},[e("h3",[t._v("¿Qué dicen nuestros clientes?")])])])]),e("div",{staticClass:"fb-comments",attrs:{"data-href":"https://developers.facebook.com/docs/plugins/comments#configurator","data-numposts":"5","data-width":""}}),e("div",{staticClass:"fb-post",attrs:{"data-href":"https://www.facebook.com/20531316728/posts/10154009990506729/","data-width":"500"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"testi-box mt-4"},[e("div",{staticClass:"testi-desc bg-white p-4"},[e("p",{staticClass:"text-muted mb-0"},[t._v('" Excellent support for a tricky issue related to our customization of the template. Author kept us updated as he made progress on the issue and emailed us a patch when he was done. "')])]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"testi-img float-left mr-2"},[e("img",{staticClass:"rounded-circle",attrs:{src:"images/testi/img-2.png",alt:""}})]),e("div",[e("h5",{staticClass:"mb-0"},[t._v("Michael Morrell")])])])])]),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"testi-box mt-4"},[e("div",{staticClass:"testi-desc bg-white p-4"},[e("p",{staticClass:"text-muted mb-0"},[t._v('" Flexible, Everything is in, Suuuuuper light, even for the code is much easier to cut and make it a theme for a productive app. "')])]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"testi-img float-left mr-2"},[e("img",{staticClass:"rounded-circle",attrs:{src:"images/testi/img-1.png",alt:""}})]),e("div",[e("h5",{staticClass:"mb-0"},[t._v("John Seidel")])])])])]),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"testi-box mt-4"},[e("div",{staticClass:"testi-desc bg-white p-4"},[e("p",{staticClass:"text-muted mb-0"},[t._v('" Not only the code, design and support are awesome, but they also update it constantly the template with new content, new plugins. I will buy surely another coderthemes template! "')])]),e("div",{staticClass:"p-4"},[e("div",{staticClass:"testi-img float-left mr-2"},[e("img",{staticClass:"rounded-circle",attrs:{src:"images/testi/img-3.png",alt:""}})]),e("div",[e("h5",{staticClass:"mb-0"},[t._v("Robert Taylor")])])])])])])])])}],A={name:"Testimonial"},H=A,D=Object(d["a"])(H,F,M,!1,null,"92748636",null),I=D.exports,U={name:"Home",components:{About:B["default"],Header:x,Products:T,Testimonial:I,Footer:S},mounted:function(){window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v7.0"})}},created:function(){}},J=U,V=Object(d["a"])(J,v,f,!1,null,null,null),q=V.exports;a["default"].use(p["a"]);var z=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return Promise.resolve().then(e.bind(null,"f820"))}}],R=new p["a"]({mode:"history",base:"/hello_vue/dist/",routes:z}),Q=R,X=e("2f62");a["default"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{FB_Parse:function(){setTimeout((function(){window.FB.XFBML.parse()}),0)}},modules:{}});e("b62c"),e("022c");a["default"].config.productionTip=!1,new a["default"]({router:Q,store:Y,render:function(t){return t(m)},created:function(){(function(t,s,e){var a,i=t.getElementsByTagName(s)[0];t.getElementById(e)||(a=t.createElement(s),a.id=e,a.src="https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js",i.parentNode.insertBefore(a,i))})(document,"script","facebook-jssdk")}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";var a=e("9c0c"),i=e.n(a);i.a},"9c0c":function(t,s,e){},b62c:function(t,s,e){},f820:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section pb-0 bg-gradient",attrs:{id:"aboutUs"}},[e("div",{staticClass:"bg-shape"},[e("img",{staticClass:"img-fluid mx-auto d-block",attrs:{src:"images/bg-shape.png",alt:""}})]),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"text-center mb-4"},[e("h3",{staticClass:"text-white"},[t._v("Nuestra empresa")])])])]),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-xl-10"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"pricing-plan bg-white p-4 mt-4"},[e("div",{staticClass:"pricing-header text-center"},[e("h5",{staticClass:"plan-title text-uppercase mb-4"},[t._v("Single Application")]),e("h1",[e("sup",[e("small",[t._v("$")])]),t._v("49")]),e("div",{staticClass:"plan-duration text-muted"},[t._v("Per License")])]),e("ul",{staticClass:"list-unstyled pricing-list mt-4"},[e("li",[e("i",{staticClass:"mdi mdi-album"}),e("p",[t._v("Number of end products "),e("b",[t._v("1")])])]),e("li",[e("i",{staticClass:"mdi mdi-lifebuoy"}),e("p",[t._v("Customer support")])]),e("li",[e("i",{staticClass:"mdi mdi-update"}),e("p",[t._v("Free Updates")])]),e("li",[e("i",{staticClass:"mdi mdi-earth"}),e("p",[t._v(" 1 Domain")])]),e("li",[e("i",{staticClass:"mdi mdi-history"}),e("p",[t._v("Monthly updates")])]),e("li",[e("i",{staticClass:"mdi mdi-alarm-check"}),e("p",[t._v("24x7 Support")])])]),e("div",{staticClass:"text-center mt-5"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Purchase Now")])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"pricing-plan active p-4 mt-4"},[e("span",{staticClass:"lable"},[t._v("Popular")]),e("div",{staticClass:"pricing-header text-white text-center"},[e("h5",{staticClass:"plan-title text-white text-uppercase mb-4"},[t._v("Multiple Application")]),e("h1",{staticClass:" text-white"},[e("sup",[e("small",[t._v("$")])]),t._v("149")]),e("div",{staticClass:"plan-duration"},[t._v("Per License")])]),e("ul",{staticClass:"list-unstyled text-white pricing-list mt-4"},[e("li",[e("i",{staticClass:"mdi mdi-album"}),e("p",[t._v("Number of end products "),e("b",[t._v("5")])])]),e("li",[e("i",{staticClass:"mdi mdi-lifebuoy"}),e("p",[t._v("Customer support")])]),e("li",[e("i",{staticClass:"mdi mdi-update"}),e("p",[t._v("Free Updates")])]),e("li",[e("i",{staticClass:"mdi mdi-earth"}),e("p",[t._v(" 1 Domain")])]),e("li",[e("i",{staticClass:"mdi mdi-history"}),e("p",[t._v("Monthly updates")])]),e("li",[e("i",{staticClass:"mdi mdi-alarm-check"}),e("p",[t._v("24x7 Support")])])]),e("div",{staticClass:"text-center mt-5"},[e("a",{staticClass:"btn shadow btn-light",attrs:{href:"#"}},[t._v("Purchase Now")])])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"pricing-plan bg-white p-4 mt-4"},[e("div",{staticClass:"pricing-header text-center"},[e("h5",{staticClass:"plan-title text-uppercase mb-4"},[t._v("Extended")]),e("h1",[e("sup",[e("small",[t._v("$")])]),t._v("999")]),e("div",{staticClass:"plan-duration text-muted"},[t._v("Per License")])]),e("ul",{staticClass:"list-unstyled pricing-list mt-4"},[e("li",[e("i",{staticClass:"mdi mdi-album"}),e("p",[t._v("Number of end products "),e("b",[t._v("1")])])]),e("li",[e("i",{staticClass:"mdi mdi-lifebuoy"}),e("p",[t._v("Customer support")])]),e("li",[e("i",{staticClass:"mdi mdi-update"}),e("p",[t._v("Free Updates")])]),e("li",[e("i",{staticClass:"mdi mdi-earth"}),e("p",[t._v(" 1 Domain")])]),e("li",[e("i",{staticClass:"mdi mdi-history"}),e("p",[t._v("Monthly updates")])]),e("li",[e("i",{staticClass:"mdi mdi-alarm-check"}),e("p",[t._v("24x7 Support")])])]),e("div",{staticClass:"text-center mt-5"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Purchase Now")])])])])])])])])])}],l=e("2877"),c={},r=Object(l["a"])(c,a,i,!1,null,null,null);s["default"]=r.exports}});
//# sourceMappingURL=app.25750a87.js.map