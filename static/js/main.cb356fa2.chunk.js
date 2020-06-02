(this["webpackJsonpreact-redux-store"]=this["webpackJsonpreact-redux-store"]||[]).push([[0],{27:function(e,t,n){e.exports=n(44)},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(15),l=n.n(c),i=n(12),u=n(9),s=n(2),m=(n(36),function(e){var t=e.numItem,n=e.total;return o.a.createElement("header",{className:"shop-header row"},o.a.createElement(u.b,{to:"/react-redux-store/"},o.a.createElement("div",{className:"logo text-dark"},"BookStore")),o.a.createElement(u.b,{to:"/cart"},o.a.createElement("div",{className:"shopping-cart d-flex align-items-center h-100"},o.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," item ($",n,")")))}),d=n(10),f=n(11),E=n(18),p=n(17),h=(n(38),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,r=t.author,c=t.price,l=t.coverImage;return o.a.createElement("div",{className:"book-list-item bg-light rounded shadow p-3"},o.a.createElement("div",{className:"book-cover"},o.a.createElement("img",{src:l,alt:"cover"})),o.a.createElement("div",{className:"book-details"},o.a.createElement("span",{className:"book-title"},a),o.a.createElement("div",{className:"book-author"},r),o.a.createElement("div",{className:"book-price"},"$",c.toFixed(2)),o.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart shadow-none"},"Add to cart")))}),b=(n(39),function(){return o.a.createElement("div",null,"Loading...")}),g=(n(40),function(){return o.a.createElement("div",null,"Error!")}),v=n(7),O=o.a.createContext(),k=O.Provider,_=O.Consumer,y=function(){return function(e){return function(t){return o.a.createElement(_,null,(function(n){return o.a.createElement(e,Object.assign({},t,{bookstoreService:n}))}))}}},C=function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}},T=function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}},S=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},j=function(e){return function(){return function(t){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){return t(C(e))})).catch((function(e){return t(T(e))}))}}},B=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},N=(n(41),function(e){var t=e.books,n=e.onAddedToCart;return o.a.createElement("ul",{className:"book-list d-flex flex-wrap justify-content-start p-0"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(h,{book:e,onAddedToCart:function(){return n(e.id)}}))})))}),A=function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,r=e.onAddedToCart;return n?o.a.createElement(b,null):a?o.a.createElement(g,null):o.a.createElement(N,{books:t,onAddedToCart:r})}}]),n}(r.Component),I=B(y(),Object(i.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var n=t.bookstoreService;return Object(v.b)({fetchBooks:j(n),onAddedToCart:S},e)})))(A),R=(n(42),{onIncrease:S,onDecrease:function(e){return{type:"BOOK_REMOVE_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_BOOKS_REMOVE_FROM_CART",payload:e}}}),w=Object(i.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),R)((function(e){var t=e.items,n=e.total,a=e.onIncrease,r=e.onDecrease,c=e.onDelete;return o.a.createElement("div",{className:"shopping-cart-table"},o.a.createElement("h2",null,"Your Order"),o.a.createElement("table",{className:"table table-bordered m-0"},o.a.createElement("thead",{className:"table-primary"},o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Item"),o.a.createElement("th",null,"Count"),o.a.createElement("th",null,"Price"),o.a.createElement("th",{className:"text-center"},"Action"))),o.a.createElement("tbody",null,t.map((function(e,t){var n=e.id,l=e.title,i=e.count,u=e.total;return o.a.createElement("tr",{key:n},o.a.createElement("td",null,t+1),o.a.createElement("td",null,l),o.a.createElement("td",null,i),o.a.createElement("td",null,"$",u.toFixed(2)),o.a.createElement("td",{className:"text-center"},o.a.createElement("button",{onClick:function(){return r(n)},className:"btn btn-outline-warning btn-sm shadow-none"},o.a.createElement("i",{className:"fa fa-minus-circle"})),o.a.createElement("button",{onClick:function(){return a(n)},className:"btn btn-outline-success btn-sm shadow-none"},o.a.createElement("i",{className:"fa fa-plus-circle"})),o.a.createElement("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger btn-sm shadow-none"},o.a.createElement("i",{className:"fa fa-trash-o"}))))})))),o.a.createElement("div",{className:"total"},"Total: $",n))})),x=function(){return o.a.createElement("div",null,o.a.createElement(I,null),o.a.createElement(w,null))},D=function(){return o.a.createElement("div",null,"Cart Page")},F=(n(43),function(){return o.a.createElement("main",{role:"main",className:"container"},o.a.createElement(m,{numItem:5,total:210}),o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/react-redux-store/",component:x}),o.a.createElement(s.a,{path:"/cart",component:D})))}),L=function(e){Object(E.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(f.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(g,null):this.props.children}}]),n}(r.Component),K=function(){function e(){Object(d.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:31.49,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:29.4,coverImage:"https://images-na.ssl-images-amazon.com/images/I/81c+o9-DetL.jpg"},{id:3,title:"The Ultimate Book of Vehicles",author:"Anne-Sophie Baumann, Didier Balicevic",price:15.69,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51JXljxwF5L._SX379_BO1,204,203,200_.jpg"},{id:4,title:"The Ultimate Book of Planet Earth",author:"Anne-Sophie Baumann, Didier Balicevic",price:18.69,coverImage:"https://images-na.ssl-images-amazon.com/images/I/51yOh1rE3bL._SX380_BO1,204,203,200_.jpg"}]}return Object(f.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){Math.random()>.75?n(new Error(console.log("Something bad happened"))):t(e.data)}),700)}))}}]),e}(),M=n(26),U=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},H=n(13),P=function(e,t,n){return 0===t.count?[].concat(Object(H.a)(e.slice(0,n)),Object(H.a)(e.slice(n+1))):-1===n?[].concat(Object(H.a)(e),[t]):[].concat(Object(H.a)(e.slice(0,n)),[t],Object(H.a)(e.slice(n+1)))},V=function(e,t,n){var a=e.bookList.books,r=e.shoppingCart.cartItems,o=a.find((function(e){return e.id===t})),c=r.findIndex((function(e){return e.id===t})),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.count,c=void 0===o?0:o,l=t.title,i=void 0===l?e.title:l,u=t.total,s=void 0===u?0:u;return{id:r,title:i,count:c+n,total:s+n*e.price}}(o,r[c],n);return console.log(),{orderTotal:0,cartItems:P(r,l,c)}},X=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return V(e,t.payload,1);case"BOOK_REMOVE_FROM_CART":return V(e,t.payload,-1);case"ALL_BOOKS_REMOVE_FROM_CART":var n=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return V(e,t.payload,-n.count);default:return e.shoppingCart}},z=function(e,t){return{bookList:U(e,t),shoppingCart:X(e,t)}},J=Object(v.c)(z,Object(v.a)(M.a,(function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}}),(function(e){var t=e.getState;return function(e){return function(n){return console.log(n.type,t()),e(n)}}})));J.dispatch((a=3e3,function(e){setTimeout((function(){return e({type:"DELAY_ACTION"})}),a)}));var $=J,Q=new K;l.a.render(o.a.createElement(i.a,{store:$},o.a.createElement(L,null,o.a.createElement(k,{value:Q},o.a.createElement(u.a,null,o.a.createElement(F,null))))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.cb356fa2.chunk.js.map