(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/~a71372/LAB11/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0695":function(t,e,r){t.exports=r.p+"img/cbr500r.cc3be6c8.png"},"0f53":function(t,e,r){"use strict";r("6150")},2401:function(t,e,r){t.exports=r.p+"img/cb125r.cfc38cbd.jpg"},"2e93":function(t,e){},"34fe":function(t,e,r){var a={"./RC8.jpg":"388b","./ZH2.jpg":"a04a","./cb125r.jpg":"2401","./cbr500r.png":"0695","./duke790.jpg":"482c","./ftrcarbon.jpg":"9bfc","./mt07.jpg":"7895","./yamahar1.jpg":"4ec3"};function s(t){var e=n(t);return r(e)}function n(t){if(!r.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="34fe"},"388b":function(t,e,r){t.exports=r.p+"img/RC8.0967a9b6.jpg"},"482c":function(t,e,r){t.exports=r.p+"img/duke790.52798bea.jpg"},"4ec3":function(t,e,r){t.exports=r.p+"img/yamahar1.50eafd7b.jpg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a,s,n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],c=r("2877"),u={},l=Object(c["a"])(u,o,i,!1,null,null,null),d=l.exports,p=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._m(0),r("Footer")],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleCaptions","data-bs-ride":"false"}},[a("div",{staticClass:"carousel-indicators"},[a("button",{staticClass:"active",attrs:{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0","aria-current":"true","aria-label":"Slide 1"}}),a("button",{attrs:{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}})]),a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100 h-100",attrs:{src:r("e244"),alt:"..."}})]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100 h-100",attrs:{src:r("57f8"),alt:"..."}})])]),a("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Previous")])]),a("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Next")])])])}],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm ",staticStyle:{"background-color":"rgba(0, 0, 0, 1)"}},[a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavbar"}},[a("router-link",{staticClass:"navbar-brand",staticStyle:{"margin-left":"10px"},attrs:{to:"/"}},[a("img",{attrs:{src:r("9d64"),alt:"...",height:"45"}})]),a("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"nav-link text-white",attrs:{to:"/products"}},[t._v("Products")])],1),a("span",{staticClass:"badge badge-warning",staticStyle:{"margin-right":"-20px","font-size":"medium"},attrs:{id:"lblCartCount"}},[t._v(t._s(t.getTotalItems()))]),a("router-link",{staticClass:"nav-link navbar-right text-white",staticStyle:{"margin-right":"0px"},attrs:{to:"/basket"}},[a("svg",{staticClass:"bi bi-cart3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 1 16 16"}},[a("path",{attrs:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}})])]),t.userLoggedIn?t._e():a("router-link",{staticClass:"nav-link navbar-right text-white",staticStyle:{"background-color":"rgba(204, 0, 0, 1)",border:"1px solid black","margin-right":"10px"},attrs:{to:"/register"}},[t._v("Register ")]),t.userLoggedIn?t._e():a("router-link",{staticClass:"btn-dark nav-link navbar-right text-white",staticStyle:{"background-color":"rgba(204, 0, 0, 1)",border:"1px solid black","margin-right":"10px"},attrs:{to:"/login"}},[t._v("Log In ")]),t.userLoggedIn?a("router-link",{staticClass:"nav-link text-white",staticStyle:{"margin-right":"0px"},attrs:{to:"/orders"}},[a("svg",{staticClass:"bi bi-list-check",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"}})])]):t._e(),t.userLoggedIn?a("router-link",{staticClass:"btn-dark nav-link navbar-right text-white",staticStyle:{"background-color":"rgba(204, 0, 0, 1)",border:"1px solid black","margin-right":"10px"},attrs:{to:"/logout"}},[t._v("Log Out ")]):t._e()],1)},h=[],v=(r("b0c0"),{data:function(){var t=this.$store.getters["user/getUser"],e=void 0!=t.id;return{userLoggedIn:e,user:{id:t.id,name:t.name,email:t.email}}},methods:{getTotalItems:function(){if(this.totalItems=0,this.basket=this.$store.getters["basket/getProducts"],void 0!=this.basket[0])for(var t=0;t<this.basket.length;t++)this.totalItems=this.totalItems+this.basket[t].quantity;return this.totalItems}},computed:{}}),b=v,w=Object(c["a"])(b,f,h,!1,null,null,null),x=w.exports,_=r("fd2d"),C={components:{Header:x,Footer:_["default"]}},y=C,k=(r("fb79"),Object(c["a"])(y,m,g,!1,null,"aa5c52ea",null)),$=k.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"container d-flex justify-content-center mt-50 mb-50"},[a("div",{staticClass:"row"},t._l(t.products,(function(e){return a("li",{key:e.id,staticClass:"col-md-4 mt-2",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-img-actions",attrs:{height:"100"}},[a("td",[a("img",{staticClass:"card-img img-fluid",attrs:{src:r("34fe")("./"+e.image)}})])])]),a("div",{staticClass:"card-body bg-light text-center"},[a("div",{staticClass:"mb-2"},[a("h6",{staticClass:"font-weight-semibold mb-2"},[a("a",[t._v(t._s(e.name))])]),a("a",[t._v(t._s(e.description))])]),a("h3",{staticClass:"mb-0 font-weight-semibold"},[t._v(t._s(e.price)+".00€")]),a("p"),a("button",{staticClass:"btn bg-cart btn-danger",staticStyle:{"background-color":"rgba(204, 0, 0, 1)",color:"white"},attrs:{type:"button"},on:{click:function(r){return t.addToBasket(e)}}},[a("i",{staticClass:"fa fa-cart-plus mr-2"}),t._v(" Add to cart ")])])])])})),0)]),a("div",{staticStyle:{"margin-bottom":"90px"}}),a("Footer")],1)},P=[],E=r("1da1"),O=(r("96cf"),{showModal:!0,components:{Footer:_["default"],Header:x},data:function(){return{products:[]}},created:function(){this.getProducts()},mounted:function(){},methods:{getProducts:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("products/getProductsFromDB");case 2:t.products=t.$store.getters["products/getProducts"];case 3:case"end":return e.stop()}}),e)})))()},addToBasket:function(t){this.$store.commit("basket/incrementProduct",t.id)}},computed:{}}),S=O,R=Object(c["a"])(S,j,P,!1,null,null,null),L=R.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),t.isEmpty?a("div",{staticClass:"container pt-4 pb-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1"},[t._m(2),a("router-link",{staticClass:"btn btn-block btn-lg btn-danger",staticStyle:{"background-color":"rgba(204, 0, 0, 1)",color:"white"},attrs:{to:"/products",type:"button"}},[t._v("Select products ")])],1)])]):a("section",{staticClass:"h-100"},[a("div",{staticClass:"container h-100 py-5"},[a("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[t.isEmpty?t._e():a("div",{staticClass:"col-10"},[t._m(0),t._l(t.basket,(function(e){return a("li",{key:e.id,staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"card rounded-3 mb-4"},[a("div",{staticClass:"card-body p-4"},[a("div",{staticClass:"row d-flex justify-content-between align-items-center"},[a("div",{staticClass:"col-md-2 col-lg-2 col-xl-2"},[a("img",{staticClass:"img-fluid rounded-3",attrs:{src:r("34fe")("./"+t.getProduct(e.id).image),alt:"Cotton T-shirt"}})]),a("div",{staticClass:"col-md-3 col-lg-3 col-xl-3"},[a("p",{staticClass:"lead fw-normal mb-2"},[t._v(t._s(t.getProduct(e.id).name))]),a("p",[a("span",{staticClass:"text-muted"},[t._v(t._s(t.getProduct(e.id).description))])])]),a("div",{staticClass:"col-md-3 col-lg-3 col-xl-2 d-flex"},[a("button",{staticClass:"btn btn-link px-2",on:{click:function(r){return t.removeProduct(e)}}},[a("svg",{staticClass:"bi bi-dash-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),a("path",{attrs:{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"}})])]),a("h1",{staticStyle:{"font-size":"1em"}},[t._v(t._s(e.quantity))]),a("button",{staticClass:"btn btn-link px-2",on:{click:function(r){return t.addProduct(e)}}},[a("svg",{staticClass:"bi bi-plus-circle",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),a("path",{attrs:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}})])])]),a("div",{staticClass:"col-md-3 col-lg-2 col-xl-2 offset-lg-1"},[a("h5",{staticClass:"mb-0"},[t._v("Price: "+t._s(t.getPrice(e))+"€")])]),t._m(1,!0)])])])])})),a("div",[a("h4",{staticStyle:{color:"white"},attrs:{align:"right"}},[t._v("Total: "+t._s(t.getTotal())+"€")])]),a("div",{staticStyle:{"margin-top":"20px"}},[a("router-link",{staticClass:"btn btn-block btn-lg btn-danger",staticStyle:{"background-color":"rgba(204, 0, 0, 1)",color:"white"},attrs:{to:"/products",type:"button"}},[t._v("Select more ")]),t.userLoggedIn?a("button",{staticClass:"btn btn-block btn-lg btn-danger",staticStyle:{float:"right","background-color":"rgba(204, 0, 0, 1)",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.addOrder()}}},[t._v("Order now ")]):t._e(),t.userLoggedIn?t._e():a("router-link",{staticClass:"btn btn-block btn-lg btn-danger",staticStyle:{float:"right","background-color":"rgba(204, 0, 0, 1)",color:"white"},attrs:{to:"/login",type:"button"}},[t._v("Login to order ")])],1)],2)])])]),a("div",{staticStyle:{"margin-bottom":"90px"}}),a("Footer")],1)},U=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-between align-items-center mb-4"},[r("h3",{staticClass:"fw-normal mb-0 text-black",staticStyle:{color:"white"}},[t._v("Shopping Cart")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-1 col-lg-1 col-xl-1 text-end"},[r("a",{staticClass:"text-danger",attrs:{href:"#!"}},[r("i",{staticClass:"fas fa-trash fa-lg"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3 cms-e-section"},[r("div",{staticClass:"card-header border-bottom-0",staticStyle:{"background-color":"black"}},[r("div",{staticClass:"h6 mb-0 pt-2 pb-2",staticStyle:{"text-align":"center",color:"white"}},[t._v("Your cart is Empty ")])])])}],A={components:{Footer:_["default"],Header:x},data:function(){var t=this.$store.getters["user/getUser"],e=void 0!=t.id;return{userLoggedIn:e,basket:[],totalPrice:0,isEmpty:!0}},created:function(){this.getBasket()},mounted:function(){},methods:{getBasket:function(){this.basket=this.$store.getters["basket/getProducts"],this.isEmpty=void 0==this.basket[0]},getProduct:function(t){return this.$store.getters["products/getProduct"](t)},getPrice:function(t){return this.getProduct(t.id).price*t.quantity},addProduct:function(t){this.$store.commit("basket/incrementProduct",t.id)},removeProduct:function(t){this.$store.commit("basket/decrementProduct",t.id),this.isEmpty=void 0==this.basket[0]},getTotal:function(){this.totalPrice=0;for(var t=0;t<this.basket.length;t++)this.totalPrice=this.totalPrice+this.getPrice(this.basket[t]);return this.totalPrice},addOrder:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={user_id:t.$store.getters["user/getUser"].id,totalAmount:t.totalPrice,status_id:1,items:t.basket},e.next=3,t.$store.dispatch("orders/addOrder",r);case 3:t.$store.commit("basket/clearBasket"),t.$router.push({path:"/message/4"});case 5:case"end":return e.stop()}}),e)})))()}},computed:{}},F=A,z=Object(c["a"])(F,B,U,!1,null,"74305929",null),M=z.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("Footer"),r("h1",{staticClass:"text-center text-white"},[t._v(" Register")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[r("div",{staticClass:"card mx-auto shadow-lg p-3 mb-5",staticStyle:{width:"25%"}},[r("div",{staticClass:"form-group m-2"},[t._m(0),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Enter Name",name:"name",id:"name",required:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),r("hr")]),r("div",{staticClass:"form-group m-2"},[t._m(1),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"Enter Email",name:"email",id:"email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),r("hr")]),r("div",{staticClass:"form-group m-2"},[t._m(2),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",id:"psw",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),r("hr")]),r("div",{staticClass:"form-group m-2"},[t._m(3),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],attrs:{type:"password",placeholder:"Repeat Password",name:"psw-repeat",id:"psw-repeat",required:""},domProps:{value:t.passwordConfirmation},on:{input:function(e){e.target.composing||(t.passwordConfirmation=e.target.value)}}}),r("hr")]),t._m(4),r("div",{staticClass:"container signin"},[r("br"),t._v(" Already have an account? "),r("router-link",{attrs:{to:"/login"}},[t._v("Log In")])],1)])])],1)},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"name"}},[r("b",[t._v("Name")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"email"}},[r("b",[t._v("Email")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"psw"}},[r("b",[t._v("Password")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"psw-repeat"}},[r("b",[t._v("Repeat Password")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative",left:"8px"}},[r("button",{staticClass:"registerbtn",attrs:{type:"submit"}},[t._v("Register")])])}],T=(r("ac1f"),r("466d"),{components:{Footer:_["default"],Header:x},data:function(){return{user:{name:"",email:"",password:""},passwordConfirmation:"",submitting:!0,error:!0}},methods:{validateForm:function(){var t=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return console.log(this.user.name),this.user.email.match(t)?this.user.password!==this.passwordConfirmation?(this.error=!0,this.errorMsg="Passwords dont match!",!1):this.user.password.length<6?(this.error=!0,this.errorMsg="Passwords must be at least 6 characters long",!1):(this.error=!1,this.errorMsg="",!0):(this.error=!0,this.errorMsg="Invalid email format",!1)},register:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.validateForm()){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$store.dispatch("user/userExists",t.user);case 4:if(r=e.sent,!r){e.next=9;break}console.log("existe na BD"),e.next=14;break;case 9:return e.next=11,t.$store.dispatch("user/addUser");case 11:a=e.sent,console.log(a),t.$router.push({path:"/message/1"});case 14:case"end":return e.stop()}}),e)})))()}},computed:{},directives:{},created:function(){}}),N=T,q=Object(c["a"])(N,H,I,!1,null,null,null),D=q.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("Footer"),r("h1",{staticClass:"text-center text-white"},[t._v(" Log In")]),r("br"),r("form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[r("div",{staticClass:"card mx-auto shadow-lg p-3 mb-5",staticStyle:{width:"25%"}},[r("div",{staticClass:"form-group m-2"},[t._m(0),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"Enter Email",name:"email",id:"email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),r("hr")]),r("div",{staticClass:"form-group m-2"},[t._m(1),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Enter Password",name:"psw",id:"psw",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),r("hr")]),t._m(2),r("div",{staticClass:"container signin"},[r("br"),r("p",[t._v("Don't have an account? "),r("router-link",{attrs:{to:"/register"}},[t._v("Register")]),t._v(".")],1)])])])],1)},G=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"email"}},[r("b",[t._v("Email")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"psw"}},[r("b",[t._v("Password")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative",left:"8px"}},[r("button",{staticClass:"loginbtn",attrs:{type:"submit"}},[t._v("Log In")])])}],J={components:{Footer:_["default"],Header:x},data:function(){return{user:{email:"",password:""},submitting:!1,error:!1}},methods:{login:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.user),e.next=3,t.$store.dispatch("user/loginUser",t.user);case 3:r=e.sent,r?(t.error=!1,console.log(t.$store.getters["user/getUser"]),t.$router.push({path:"/message/2"})):t.error=!0;case 5:case"end":return e.stop()}}),e)})))()}},computed:{},directives:{},created:function(){}},W=J,Y=Object(c["a"])(W,Z,G,!1,null,null,null),K=Y.exports,Q={data:function(){return{success:!1,user:{}}},methods:{},created:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$store.getters["user/getUser"].session_id,t.next=3,this.$store.dispatch("user/logoutUser",e);case 3:r=t.sent,this.$store.commit("basket/clearBasket"),r&&this.$router.push({path:"/message/3"});case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),computed:{}},V=Q,X=Object(c["a"])(V,a,s,!1,null,"59213df7",null),tt=X.exports,et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("div",{staticClass:"container pt-4 pb-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1"},[r("div",{staticClass:"card mb-3 cms-e-section"},[t.isEmpty?r("div",{staticClass:"card-header border-bottom-0",staticStyle:{"background-color":"black"}},[r("div",{staticClass:"h6 mb-0 pt-2 pb-2",staticStyle:{"text-align":"center",color:"white"}},[t._v("You have no completed orders ")])]):r("div",{staticClass:"card-header border-bottom-0",staticStyle:{"background-color":"black"}},[t._m(0)]),t.isEmpty?t._e():r("ul",{staticClass:"card-list list-group-flush"},t._l(t.orders,(function(e){return r("li",{key:e.id,staticClass:"list-group-item"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-4"},[r("h4",{staticClass:"h6 mb-0"},[t._v(t._s(e.created_at))])]),r("div",{staticClass:"col-md-2",staticStyle:{"text-align":"center","margin-left":"auto"}},[r("span",{staticClass:"wc-editable",attrs:{"data-pk":"ws_per_day","data-type":"text"}},[t._v(t._s(e.total)+".00€")])])])])})),0)])])])]),r("Footer")],1)},rt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-4"},[r("span",{staticClass:"h6 mb-0 pt-2 pb-2",staticStyle:{color:"white"}},[t._v("Ordered at")])]),r("div",{staticClass:"col-md-2  text-end",staticStyle:{"margin-left":"auto"}},[r("span",{staticClass:"h6 mb-0 pt-2 pb-2",staticStyle:{color:"white"}},[t._v("Price")])])])}],at={components:{Footer:_["default"],Header:x},data:function(){return{isHidden:!1,id:0,orders:[],isEmpty:!0}},mounted:function(){},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("orders/getMyOrdersFromDB");case 2:t.orders=t.$store.getters["orders/getOrders"],t.isEmpty=void 0==t.orders[0];case 4:case"end":return e.stop()}}),e)})))()}},computed:{}},st=at,nt=Object(c["a"])(st,et,rt,!1,null,"1e2034f8",null),ot=nt.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("Footer"),r("h1",{staticClass:"success-message text-white",staticStyle:{"text-align":"center"}},[t._v(t._s(t.message))])],1)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm ",staticStyle:{"background-color":"rgba(0, 0, 0, 1)"}},[a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"collapsibleNavbar"}},[a("div",{staticClass:"navbar-brand",staticStyle:{"margin-left":"10px"},attrs:{to:"/"}},[a("img",{attrs:{src:r("9d64"),alt:"...",height:"45"}})])])])}],ut={components:{Footer:_["default"]},data:function(){return{message:""}},mounted:function(){this.setMessage()},methods:{setMessage:function(){var t=this;1==this.$route.params.id&&(this.message="Welcome! You can now login"),2==this.$route.params.id&&(this.message="Welcome back "+this.$store.getters["user/getUser"].name+"!"),3==this.$route.params.id&&(this.message="Logged out, see you soon!"),4==this.$route.params.id&&(this.message="Thank you for your order");var e=2,r=setInterval((function(){e<=0&&(clearInterval(r),t.$router.push("/")),e-=1}),1e3)}}},lt=ut,dt=(r("0f53"),Object(c["a"])(lt,it,ct,!1,null,"6d706a0f",null)),pt=dt.exports;n["a"].use(p["a"]);var mt=[{path:"/",component:$},{path:"/products",component:L},{path:"/basket",component:M},{path:"/register",component:D},{path:"/login",component:K},{path:"/logout",component:tt},{path:"/orders",component:ot},{path:"/message/:id",component:pt}],gt=new p["a"]({mode:"history",base:"/~a71372/LAB11/dist/",routes:mt}),ft=gt,ht=r("2f62"),vt=(r("c740"),r("d3b7"),{namespaced:!0,state:{products:[]},getters:{getProducts:function(t){return t.products},getProduct:function(t){return function(e){var r=t.products.findIndex((function(t){return t.id==e}));return t.products[r]}}},mutations:{addProducts:function(t,e){t.products=e}},actions:{getProductsFromDB:function(t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/products.php");case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,r("addProducts",s),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](1),console.log("error: ",e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},modules:{}}),bt=vt,wt={namespaced:!0,state:{categories:[]},getters:{getCategories:function(t){return t.categories}},mutations:{addCategories:function(t,e){t.categories=e}},actions:{getCategoriesFromDB:function(t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a12345/LAB11/api/categories.php");case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,console.log("received data:",s),r("addCategories",s),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e["catch"](1),console.log("error: ",e.t0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},modules:{}},xt=wt,_t=(r("e9c4"),r("99af"),{namespaced:!0,state:{user:{},tmp_user:{}},getters:{getUser:function(t){return t.user}},mutations:{loginUser:function(t,e){t.user=e},logoutUser:function(t){t.user={}},tmpUser:function(t,e){t.tmp_user=e}},actions:{userExists:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/users.php?email=".concat(e.email),{method:"GET"});case 4:return s=r.sent,r.next=7,s.json();case 7:if(n=r.sent,console.log("userExists",n),null===n){r.next=14;break}return alert("Email already exists"),r.abrupt("return",!0);case 14:return a("tmpUser",e),r.abrupt("return",!1);case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r["catch"](1),console.error(r.t0),alert("Error: Database connection failed in phase 1"),r.abrupt("return",!1);case 23:case"end":return r.stop()}}),r,null,[[1,18]])})))()},addUser:function(t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/users.php",{method:"POST",body:JSON.stringify(r.tmp_user),headers:{"Content-type":"text/html; charset=UTF-8"}});case 4:return a=e.sent,e.next=7,a.json();case 7:return s=e.sent,console.log("received data:",s),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](1),console.error(e.t0),alert("Error: Database connection failed in phase 2"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})))()},loginUser:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/users.php?email=".concat(e.email,"&password=").concat(e.password));case 4:return s=r.sent,r.next=7,s.json();case 7:if(n=r.sent,null!=n){r.next=13;break}return alert("Error: Wrong credentials"),r.abrupt("return",!1);case 13:return console.log("received data:",n),a("loginUser",n),r.abrupt("return",!0);case 16:r.next=23;break;case 18:return r.prev=18,r.t0=r["catch"](1),console.error(r.t0),alert("Error: Database connection failed"),r.abrupt("return",!1);case 23:case"end":return r.stop()}}),r,null,[[1,18]])})))()},logoutUser:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/users.php?session_id=".concat(e));case 4:return s=r.sent,r.next=7,s.json();case 7:return n=r.sent,console.log("received data:",n),a("logoutUser"),r.abrupt("return",!0);case 13:return r.prev=13,r.t0=r["catch"](1),console.error(r.t0),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()}}}),Ct=_t,yt=r("2909"),kt={namespaced:!0,state:{orders:[]},getters:{getOrders:function(t){return t.orders}},mutations:{addOrders:function(t,e){t.orders=e},addOrder:function(t,e){t.orders=[].concat(Object(yt["a"])(t.orders),[e])}},actions:{getMyOrdersFromDB:function(t){return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=t.rootGetters,e.prev=1,e.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/orders.php?session_id=".concat(a["user/getUser"].session_id));case 4:return s=e.sent,e.next=7,s.json();case 7:n=e.sent,r("addOrders",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log("error: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},addOrder:function(t,e){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,s,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.commit,s=t.rootGetters,r.prev=1,r.next=4,fetch("http://daw.deei.fct.ualg.pt/~a71372/LAB11/api/orders.php?session_id=".concat(s["user/getUser"].session_id),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return n=r.sent,r.next=7,n.json();case 7:return o=r.sent,console.log("received data:",o),a("addOrder",o),r.abrupt("return",!0);case 13:return r.prev=13,r.t0=r["catch"](1),console.error(r.t0),r.abrupt("return",!1);case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()}},modules:{}},$t=kt,jt=(r("159b"),r("a434"),{namespaced:!0,state:{products:[]},getters:{getProducts:function(t){return t.products}},mutations:{clearBasket:function(t){t.products=[]},incrementProduct:function(t,e){var r=t.products.some((function(t){return t.id==e}));r||t.products.push({id:e,quantity:0}),t.products.forEach((function(t){t.id==e&&t.quantity++}))},decrementProduct:function(t,e){t.products.forEach((function(r,a){r.id==e&&r.quantity>=1&&r.quantity--,0==r.quantity&&t.products.splice(a,1)}))}},actions:{},modules:{}}),Pt=jt;n["a"].use(ht["a"]);var Et=new ht["a"].Store({modules:{products:bt,user:Ct,orders:$t,basket:Pt,categories:xt}});n["a"].config.productionTip=!1,new n["a"]({router:ft,store:Et,render:function(t){return t(d)}}).$mount("#app")},"57f8":function(t,e,r){t.exports=r.p+"img/imagem2.679aaa41.png"},6150:function(t,e,r){},"77c1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"text-center text-lg-start fixed-bottom"},[r("div",{staticClass:"text-center p-3 text-white",staticStyle:{"background-color":"rgba(204, 0, 0, 1)"}},[t._v(" © 2022: Alexandre Guerreiro ")])])}]},7895:function(t,e,r){t.exports=r.p+"img/mt07.c1c0b4e2.jpg"},"94d4":function(t,e,r){"use strict";var a=r("2e93"),s=r.n(a);e["default"]=s.a},"9bfc":function(t,e,r){t.exports=r.p+"img/ftrcarbon.47848181.jpg"},"9d64":function(t,e,r){t.exports=r.p+"img/logo.9ddb7a66.png"},a04a:function(t,e,r){t.exports=r.p+"img/ZH2.0ad2e6ec.jpg"},e244:function(t,e,r){t.exports=r.p+"img/imagem1.23690723.jpg"},f158:function(t,e,r){},fb79:function(t,e,r){"use strict";r("f158")},fd2d:function(t,e,r){"use strict";var a=r("77c1"),s=r("94d4"),n=r("2877"),o=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports}});
//# sourceMappingURL=app.834f5be4.js.map