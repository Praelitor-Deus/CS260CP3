(function(t){function a(a){for(var r,s,o=a[0],c=a[1],u=a[2],m=0,g=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&g.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(a);while(g.length)g.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(r=!1)}r&&(n.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},n=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var l=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"09ce":function(t,a,e){t.exports=e.p+"img/logo.25e2a827.png"},"0c9e":function(t,a,e){"use strict";e("f4fd")},"0d89":function(t,a,e){"use strict";e("13cf")},"0f02":function(t,a,e){},"13cf":function(t,a,e){},2784:function(t,a){t.exports="data:image/png;base64,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"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"menu"}},[r("div",{staticClass:"flexitem",attrs:{id:"brand"}},[r("router-link",{attrs:{to:"/"}},[r("img",{attrs:{id:"logo",src:e("09ce")}})])],1),r("div",{staticClass:"flexitem",attrs:{id:"side"}},[r("router-link",{attrs:{to:"/browse"}},[r("div",{staticClass:"menu-item browse"},[r("img",{attrs:{src:"/images/browseicon.png"}})])]),r("router-link",{attrs:{to:"/cart"}},[r("div",{staticClass:"menu-item"},[r("img",{attrs:{src:e("2784")}})])])],1)]),r("router-view"),r("div",{staticClass:"footer"},[r("div",{staticClass:"part-one"},[r("h3",[t._v(" Website Links")]),r("ul",{attrs:{id:"menu2"}},[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),r("li",[r("router-link",{attrs:{to:"/browse"}},[t._v("Browse")])],1),r("li",[r("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),r("li",[r("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),t._m(0)])])])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"https://github.com/Praelitor-Deus/CS260CP3"}},[t._v("GitHub Repository ")])])}],s={computed:{numberOfItems:function(){return this.$root.$data.cart.length}}},o=s,c=(e("034f"),e("2877")),u=Object(c["a"])(o,i,n,!1,null,null,null),l=u.exports,m=e("8c4f"),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Welcome to Board Game Bonanza")]),e("img",{staticClass:"home",attrs:{src:"\\images\\home.jpg"}}),t._m(0),e("section",{staticClass:"services-grid"},[e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/browse"}},[e("img",{staticClass:"image",attrs:{src:"/images/browse.jpg",alt:"Browse"}}),e("h6",[t._v("Browse")])])],1),e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/cart"}},[e("img",{staticClass:"image",attrs:{src:"/images/cart.jpg",alt:"Cart"}}),e("h6",[t._v("View Cart")])])],1),e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/contact"}},[e("img",{staticClass:"image",attrs:{src:"/images/contact.jpg",alt:"Contact Us"}}),e("h6",[t._v("Contact Us")])])],1)]),e("img",{staticClass:"home",attrs:{id:"bottompic",src:"\\images\\home2.jpg"}})])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"description"},[e("p",[t._v("Board Game Bonanza is a world-renowned board game vendor. We offer a wide variety of board games from classics , to fantasy games, to card games and much much more! Browse our inventory, read board games reviews, and contact us using the links below."),e("br"),e("br"),t._v(" Thank you for choosing "),e("strong",[t._v("Board Game Bonanza")])])])}],p=(e("cccb"),{}),v=Object(c["a"])(p,g,d,!1,null,null,null),h=v.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"search"},[e("form",{staticClass:"pure-form"},[e("i",{staticClass:"fas fa-search"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],domProps:{value:t.searchText},on:{input:function(a){a.target.composing||(t.searchText=a.target.value)}}})])])]),e("div",{staticClass:"pure-menu pure-menu-horizontal"},[e("ul",{staticClass:"pure-menu-list"},[e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("All")}}},[t._v("All")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Fantasy")}}},[t._v("Fantasy")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Classic")}}},[t._v("Classic")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Adventure")}}},[t._v("Adventure")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Cards")}}},[t._v("Cards")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Strategy")}}},[t._v("Strategy")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Party")}}},[t._v("Party")])]),e("li",{staticClass:"pure-menu-item"},[e("a",{staticClass:"pure-menu-link",attrs:{href:"#"},on:{click:function(a){return t.select("Drawing")}}},[t._v("Drawing")])])])]),e("ProductList",{attrs:{products:t.products}})],1)},f=[],C=(e("4de4"),e("b0c0"),e("ac1f"),e("841c"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"products"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"product"},[e("router-link",{attrs:{to:"/details"}},[e("div",{staticClass:"image",on:{click:function(e){return t.updateDetails(a)}}},[e("img",{attrs:{src:"/images/"+a.image}})]),e("div",{staticClass:"info",on:{click:function(e){return t.updateDetails(a)}}},[e("h2",[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.category))])])]),e("div",{staticClass:"price"},[e("h3",[t._v(t._s(a.price))]),e("form",{staticClass:"thing"},[e("label",[t._v("Quantity: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"product.quantity"}],attrs:{type:"number",min:"1",max:"100000"},domProps:{value:a.quantity},on:{input:function(e){e.target.composing||t.$set(a,"quantity",e.target.value)}}})]),e("button",{staticClass:"auto",on:{click:function(e){return t.addItem(a)}}},[t._v("Add to Cart")])])],1)})),0)])}),b=[],$={name:"ProductList",props:{products:Array},data:function(){return{quantity:""}},methods:{addItem:function(t){for(var a=t.id,e=0;e<this.$root.$data.cart.length;e++)if(this.$root.$data.cart[e].id===a)return this.$root.$data.cart[e].quantity+=this.quantity,void(this.quantity="");""===this.quantity?this.$root.$data.cart.push(t):(t.quantity=this.quantity,this.$root.$data.cart.push(t),this.quantity="")},updateDetails:function(t){this.$root.$data.current=t}}},j=$,q=(e("0c9e"),Object(c["a"])(j,C,b,!1,null,"6d2e9e8e",null)),w=q.exports,x={name:"Browse",components:{ProductList:w},data:function(){return{searchText:"",category:""}},computed:{products:function(){var t=this;return""!=this.searchText||"All"===this.category||""===this.category?this.$root.$data.products.filter((function(a){return a.name.toLowerCase().search(t.searchText.toLowerCase())>=0})):this.$root.$data.products.filter((function(a){return a.category===t.category}))}},methods:{select:function(t){this.category=t}}},_=x,k=(e("0d89"),Object(c["a"])(_,y,f,!1,null,"278ad970",null)),S=k.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"body"},[null!=this.$root.$data.current?e("h1",[t._v(" "+t._s(this.$root.$data.current.name)+" ")]):t._e(),e("div",{staticClass:"all"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"columnitem pic"},[e("div",{staticClass:"makewide"},[null!=this.$root.$data.current?e("img",{attrs:{src:"/images/"+this.$root.$data.current.image}}):t._e()])]),null!=this.$root.$data.current?e("div",{staticClass:"columnitem"},[e("div",{staticClass:"makewide"},[e("h2",[t._v("Current Ranking: "+t._s(t.ranked())+" of 50 ")]),e("h2",[t._v("Average Rating: "+t._s(this.$root.$data.current.rating)+" of 10 ")]),e("h2",[t._v("Num of Current Votes: "+t._s(this.$root.$data.current.numvoters)+" ")]),e("div",{staticClass:"bottom"},[e("h2",[t._v("Give a Rating: ")]),e("star-rating",{attrs:{increment:.5,"max-rating":10,"text-class":"stars"},on:{"rating-selected":t.setRating}})],1)])]):t._e()])])])},T=[],O=(e("c740"),e("b680"),e("2909")),P=e("5b3d"),W=e.n(P),G={name:"Details",components:{StarRating:W.a},methods:{ranked:function(){var t=this,a=Object(O["a"])(this.$root.$data.products);return a.sort((function(t,a){return parseFloat(a.rating)-parseFloat(t.rating)})),a.findIndex((function(a){return a==t.$root.$data.current}))+1},setRating:function(t){if(null==this.$root.$data.current.votes){this.$root.$data.current.votes=[];for(var a=0;a<parseInt(this.$root.$data.current.numvoters);++a)this.$root.$data.current.votes.push(this.$root.$data.current.rating)}this.$root.$data.current.votes.push(t);var e=0;for(a=0;a<this.$root.$data.current.votes.length;++a)e+=this.$root.$data.current.votes[a];this.$root.$data.current.rating=(e/this.$root.$data.current.votes.length).toFixed(2),this.$root.$data.current.numvoters+=1}}},D=G,B=(e("c7b3"),Object(c["a"])(D,A,T,!1,null,"4cdd7df8",null)),L=B.exports,V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"wrapper"}),e("CartList",{attrs:{products:t.cartProducts}})],1)},N=[],E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[t.empty()?e("div",[e("h1",[t._v("Your Cart is Empty")])]):e("div",[e("h1",[t._v("Your Shopping Cart:")]),e("div",{staticClass:"products"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"product"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:"/images/"+a.image}})]),e("div",{staticClass:"info"},[e("h2",[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.category))])]),e("div",{staticClass:"price"},[e("h3",[t._v(t._s(a.price))])]),e("h4",[t._v(" Quantity: "+t._s(a.quantity))]),e("div",{staticClass:"boxes"},[e("button",{staticClass:"quantity2",on:{click:function(e){return t.subtractOne(a)}}},[e("strong",[t._v("-")])]),e("button",{staticClass:"quantity1",on:{click:function(e){return t.addOne(a)}}},[e("strong",[t._v("+")])])]),e("button",{staticClass:"auto",on:{click:function(e){return t.removeItem(a)}}},[e("strong",[t._v("Remove Item From Cart")])])])})),0),e("div",{staticClass:"total"},[e("h2",[t._v("Subtotal: $"+t._s(t.subtotal))]),e("h2",[t._v("Tax (8.3%): $"+t._s(t.tax))]),e("h1",[t._v("Total: $"+t._s(t.total))])]),e("button",{staticClass:"auto2",on:{click:function(a){return t.submit()}}},[t._v("Click Here to Confirm Purchase")]),t.show()?e("div",[t._m(0)]):t._e()])])},F=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[t._v("Thank You for your purchase!!!!"),e("br"),t._v(" We will contact you shortly.")])}],H=(e("c975"),e("a434"),{name:"CartList",props:{products:Array},data:function(){return{submitted:!1}},computed:{subtotal:function(){for(var t=0,a="",e=0,r=0;r<this.$root.$data.cart.length;r++)a=this.$root.$data.cart[r].price,e=this.$root.$data.cart[r].quantity,a=a.substring(1),t+=parseFloat(a)*e;return t.toFixed(2)},tax:function(){for(var t=0,a=0,e="",r=0,i=0;i<this.$root.$data.cart.length;i++)e=this.$root.$data.cart[i].price,r=this.$root.$data.cart[i].quantity,e=e.substring(1),a+=parseFloat(e)*r;return t=.083*a,t.toFixed(2)},total:function(){for(var t=0,a=0,e="",r=0,i=0;i<this.$root.$data.cart.length;i++)e=this.$root.$data.cart[i].price,r=this.$root.$data.cart[i].quantity,e=e.substring(1),a+=parseFloat(e)*r;return t=.083*a,a+=t,a.toFixed(2)}},methods:{empty:function(){return 0===this.$root.$data.cart.length},removeItem:function(t){this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(t),1),t.quantity=0},addOne:function(t){t.quantity=parseInt(t.quantity)+1},subtractOne:function(t){t.quantity=parseInt(t.quantity)-1,0==t.quantity&&(this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(t),1),t.quantity=0)},submit:function(){this.submitted=!0},show:function(){return!0===this.submitted}}}),J=H,Z=(e("a26e"),Object(c["a"])(J,E,F,!1,null,"1d04928b",null)),I=Z.exports,Q={name:"Cart",components:{CartList:I},computed:{cartProducts:function(){return this.$root.$data.cart}}},R=Q,z=(e("778c"),Object(c["a"])(R,V,N,!1,null,"133f3b9c",null)),M=z.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",[t._v("Contact Us!")]),e("img",{staticClass:"home",attrs:{src:"\\images\\footer.jpg"}}),t._m(0),e("section",{staticClass:"services-grid"},[e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"image",attrs:{src:"/images/home2.jpg",alt:"Home"}}),e("h6",[t._v("Home")])])],1),e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/cart"}},[e("img",{staticClass:"image",attrs:{src:"/images/cart.jpg",alt:"Cart"}}),e("h6",[t._v("View Cart")])])],1),e("div",{staticClass:"box"},[e("router-link",{attrs:{to:"/browse"}},[e("img",{staticClass:"image",attrs:{src:"/images/browse.jpg",alt:"Browse"}}),e("h6",[t._v("Browse")])])],1)]),e("img",{staticClass:"home",attrs:{src:"\\images\\heading.jpg"}})])},U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"description"},[e("h2",[t._v(" Have a Question about a product? Need a refund? "),e("br"),e("br"),t._v("Let us Know!")]),e("p",[t._v("Board Game Bonanza is renowned for offering high quality products and low prices. If you would like to talk to a representative, ask a question, schedule a delivery, or just want to chat call us at "),e("strong",[t._v(" 602-791-GAME ")]),t._v(" or email us at "),e("strong",[t._v(" boardgamesbonanza@gmail.com ")])])])}],X=(e("fe4d"),{}),K=Object(c["a"])(X,Y,U,!1,null,null,null),tt=K.exports;r["a"].use(m["a"]);var at=[{path:"/",name:"Home",component:h},{path:"/browse",name:"Browse",component:S},{path:"/details",name:"Details",component:L},{path:"/cart",name:"Cart",component:M},{path:"/contact",name:"Contact",component:tt}],et=new m["a"]({mode:"history",base:"/",routes:at}),rt=et,it=[{id:1,name:"Gloomhaven",price:"$106.99",category:"Fantasy",image:"gloomhaven.jpg",quantity:1,rating:8.81,numvoters:38970},{id:2,name:"Chess",price:"$19.99",category:"Classic",image:"chess.jpg",quantity:1,rating:7.11,numvoters:27578},{id:3,name:"Scythe",price:"$51.99",category:"Fantasy",image:"scythe.jpg",quantity:1,rating:8.25,numvoters:54538},{id:4,name:"Brass: Birmingham",price:"$69.99",category:"Strategy",image:"brass.jpg",quantity:1,rating:8.65,numvoters:16446},{id:5,name:"Scrabble",price:"$25.99",category:"Classic",image:"scrabble.jpg",quantity:1,rating:6.28,numvoters:25881},{id:6,name:"Monopoly",price:"$29.99",category:"Classic",image:"monopoly.jpg",quantity:1,rating:4.36,numvoters:27208},{id:7,name:"The Settlers of Catan",price:"$32.99",category:"Strategy",image:"catan.jpg",quantity:1,rating:7.16,numvoters:97942},{id:8,name:"Clue",price:"$21.99",category:"Strategy",image:"clue.jpg",quantity:1,rating:5.67,numvoters:17012},{id:9,name:"Codenames",price:"$19.99",category:"Cards",image:"codenames.jpg",quantity:1,rating:7.63,numvoters:64329},{id:10,name:"Risk",price:"$23.99",category:"Strategy",image:"risk.jpg",quantity:1,rating:5.59,numvoters:29392},{id:11,name:"Pandemic",price:"$59.99",category:"Strategy",image:"pandemic.jpg",quantity:1,rating:7.61,numvoters:98226},{id:12,name:"Connect Four",price:"$10.99",category:"Classic",image:"connectfour.jpg",quantity:1,rating:4.87,numvoters:6599},{id:13,name:"Trivial Pursuit",price:"$34.99",category:"Trivia",image:"trivial.jpg",quantity:1,rating:5.23,numvoters:7334},{id:14,name:"Candy Land",price:"$24.99",category:"Adventure",image:"candyland.jpg",quantity:1,rating:3.18,numvoters:3840},{id:15,name:"Battleship",price:"$24.99",category:"Strategy",image:"battleship.jpg",quantity:1,rating:4.63,numvoters:8209},{id:16,name:"Pictionary",price:"$19.99",category:"Drawing",image:"pictionary.jpg",quantity:1,rating:5.82,numvoters:6722},{id:17,name:"The Game of Life",price:"$30.99",category:"Classic",image:"life.jpeg",quantity:1,rating:4.3,numvoters:10244},{id:18,name:"Jenga",price:"$9.99",category:"Classic",image:"jenga.jpg",quantity:1,rating:5.6,numvoters:11177},{id:19,name:"Betrayal",price:"$49.99",category:"Adventure",image:"betrayal.jpg",quantity:1,rating:7.06,numvoters:35803},{id:20,name:"Chutes and Ladders",price:"$19.99",category:"Classic",image:"chutes.jpg",quantity:1,rating:2.85,numvoters:3609},{id:21,name:"Guess Who?",price:"$24.99",category:"Classic",image:"guess.jpg",quantity:1,rating:4.79,numvoters:4433},{id:22,name:"Apples to Apples",price:"$9.99",category:"Cards",image:"apples.jpg",quantity:1,rating:5.82,numvoters:17302},{id:23,name:"Exploding Kittens",price:"$10.99",category:"Cards",image:"kitten.jpg",quantity:1,rating:6.02,numvoters:19849},{id:24,name:"Terraforming Mars",price:"$100.99",category:"Adventure",image:"mars.jpg",quantity:1,rating:8.43,numvoters:60106},{id:25,name:"Twister",price:"$24.99",category:"Classic",image:"twister.jpg",quantity:1,rating:4.54,numvoters:3758},{id:26,name:"Stratego",price:"$24.99",category:"Strategy",image:"stratego.jpg",quantity:1,rating:6.09,numvoters:13456},{id:27,name:"Sorry!",price:"$24.99",category:"Classic",image:"sorry.jpeg",quantity:1,rating:4.51,numvoters:5650},{id:28,name:"Scattergories",price:"$20.99",category:"Trivia",image:"scatter.jpg",quantity:1,rating:6.19,numvoters:8224},{id:29,name:"Yahtzee",price:"$14.99",category:"Classic",image:"yahtzee.jpg",quantity:1,rating:5.38,numvoters:11346},{id:30,name:"Blokus",price:"$29.99",category:"Strategy",image:"blockus.jpg",quantity:1,rating:6.89,numvoters:22248},{id:31,name:"Cranium",price:"$34.99",category:"Trivia",image:"cranium.jpg",quantity:1,rating:5.68,numvoters:8402},{id:32,name:"Mansions of Madness",price:"$99.99",category:"Fantasy",image:"mansion.png",quantity:1,rating:7.3,numvoters:12603},{id:33,name:"Dungeons & Dragons",price:"$34.99",category:"Fantasy",image:"dragon.jpg",quantity:1,rating:6.54,numvoters:1710},{id:34,name:"Telestrations",price:"$19.99",category:"Drawing",image:"tele.jpg",quantity:1,rating:7.4,numvoters:12219},{id:35,name:"Operation",price:"$29.99",category:"Classic",image:"operation.jpg",quantity:1,rating:4.09,numvoters:3455},{id:36,name:"Lord of The Rings",price:"$99.99",category:"Fantasy",image:"lord.png",quantity:1,rating:6.75,numvoters:14032},{id:37,name:"Uno",price:"$19.99",category:"Cards",image:"uno.jpg",quantity:1,rating:5.39,numvoters:20224},{id:38,name:"Scrawl",price:"$19.99",category:"Drawing",image:"scrawl.jpg",quantity:1,rating:7.13,numvoters:382},{id:39,name:"Mysterium",price:"$89.99",category:"Adventure",image:"mysteryium.jpg",quantity:1,rating:7.32,numvoters:30390},{id:40,name:"Checkers",price:"$19.99",category:"Classic",image:"checkers.jpg",quantity:1,rating:4.88,numvoters:6938},{id:41,name:"Civilization",price:"$74.99",category:"Strategy",image:"civilization.jpg",quantity:1,rating:7.5,numvoters:7050},{id:42,name:"Ticket To Ride",price:"$49.99",category:"Strategy",image:"ticket.jpg",quantity:1,rating:7.43,numvoters:69190},{id:43,name:"7 Wonders",price:"$54.99",category:"Adventure",image:"wonders.jpg",quantity:1,rating:7.76,numvoters:81566},{id:44,name:"Quelf",price:"$49.99",category:"Party",image:"quelf.jpg",quantity:1,rating:5.28,numvoters:2484},{id:45,name:"Secret Hitler",price:"$34.99",category:"Party",image:"hitler.jpg",quantity:1,rating:7.57,numvoters:17025},{id:46,name:"Forbidden Island",price:"$34.99",category:"Adventure",image:"island.jpg",quantity:1,rating:6.8,numvoters:40601},{id:47,name:"Backgammon",price:"$24.99",category:"Classic",image:"back.jpg",quantity:1,rating:6.53,numvoters:11358},{id:48,name:"Mouse Trap",price:"$24.99",category:"Classic",image:"mouse.jpg",quantity:1,rating:4.11,numvoters:2580},{id:49,name:"Gloomhaven DLC",price:"$89.99",category:"Fantasy",image:"lion.jpg",quantity:1,rating:9.02,numvoters:4262},{id:50,name:"Scene It",price:"$29.99",category:"Trivia",image:"scene.jpg",quantity:1,rating:5.51,numvoters:1420}],nt=it;r["a"].config.productionTip=!1;var st={products:nt,cart:[],current:null};new r["a"]({router:rt,data:st,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,a,e){},"778c":function(t,a,e){"use strict";e("e442")},8453:function(t,a,e){},"85ec":function(t,a,e){},a26e:function(t,a,e){"use strict";e("0f02")},c7b3:function(t,a,e){"use strict";e("da03")},cccb:function(t,a,e){"use strict";e("5ced")},da03:function(t,a,e){},e442:function(t,a,e){},f4fd:function(t,a,e){},fe4d:function(t,a,e){"use strict";e("8453")}});
//# sourceMappingURL=app.628e0a71.js.map