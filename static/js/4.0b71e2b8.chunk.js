(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{38:function(e,t,r){"use strict";var n=r(40),a=r.n(n),s=r(41),c=r(42),u=r.n(c),o=r(16);function i(){return(i=Object(s.a)(a.a.mark((function e(t){var r,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,u()(r,t);case 4:return n=e.sent,s=n.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=Object(s.a)(a.a.mark((function e(t){var r,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,u()(r,t);case 4:return n=e.sent,s=n.data,e.abrupt("return",s.cast);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=Object(s.a)(a.a.mark((function e(t){var r,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,u()(r,t);case 4:return n=e.sent,s=n.data,e.abrupt("return",s.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=Object(s.a)(a.a.mark((function e(t){var r,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"search/movie",params:{query:t}},e.next=4,u()(r);case 4:if(n=e.sent,0!==(s=n.data).results.length){e.next=9;break}return o.b.warn("No results were found for your search."),e.abrupt("return");case 9:return e.abrupt("return",s.results);case 12:e.prev=12,e.t0=e.catch(0),new Error("No response from server");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}u.a.defaults.baseURL="https://api.themoviedb.org/3/",u.a.defaults.params={api_key:"f2c48f8e3f2e8ceb9b5f5ca977db990f",language:"en-US"};var h={fetchPopularMovies:function(){var e=Object(s.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/week"},e.next=4,u()(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("No response from server");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),fetchMovieInfo:function(e){return i.apply(this,arguments)},fetchMoviesCast:function(e){return p.apply(this,arguments)},fetchMovieReviews:function(e){return l.apply(this,arguments)},fetchMoviesByQuery:function(e){return f.apply(this,arguments)}};t.a=h},70:function(e,t,r){e.exports={title:"HomePage_title__1hrQY",list:"HomePage_list__2PJ80",list_item:"HomePage_list_item__29NQc",poster:"HomePage_poster__3y-r5",subtitle:"HomePage_subtitle__2OvFU"}},77:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));var n=r(39),a=r(0),s=r(2),c=r(8),u=r(38),o=r(70),i=r.n(o),p=r(1),l=function(){var e=Object(a.useState)([]),t=Object(n.a)(e,2),r=t[0],o=t[1],l=Object(s.h)();return Object(a.useEffect)((function(){u.a.fetchPopularMovies().then((function(e){return o(e)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:i.a.title,children:"Popular today"}),Object(p.jsx)("ul",{className:i.a.list,children:r.map((function(e){var t=e.poster_path,r=e.title,n=e.id;return Object(p.jsx)("li",{className:i.a.list_item,children:Object(p.jsxs)(c.b,{to:{pathname:"/movies/".concat(n),state:{from:l.pathname}},children:[Object(p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t),alt:"Movie poster",className:i.a.poster}),Object(p.jsx)("h3",{className:i.a.subtitle,children:r})]})},n)}))})]})}}}]);
//# sourceMappingURL=4.0b71e2b8.chunk.js.map