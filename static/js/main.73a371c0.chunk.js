(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),r=n.n(a),i=n(28),c=n.n(i),o=n(9),l=n(2);n(37);var u=function(e){return console.log(e),Object(s.jsxs)("div",{className:"about__container",children:[Object(s.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(s.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},j=n(11),d=n(12),m=n(14),p=n(13),b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsx)("span",{children:e.state.title}):null}}]),n}(r.a.Component),h=n(17),v=n.n(h),O=n(29),x=n(30),g=n.n(x),f=n(5),y=n.n(f);n(59);function _(e){var t=e.id,n=e.year,a=e.title,r=e.summary,i=e.poster,c=e.genres;return Object(s.jsx)("div",{className:"movie",children:Object(s.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:r,poster:i,genres:c}},children:[Object(s.jsx)("img",{src:i,alt:a,title:a}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:a}),Object(s.jsx)("h5",{className:"movie__year",children:n}),Object(s.jsx)("ul",{className:"movie__geres",children:c.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsx)("p",{className:"movie__summary",children:r.slice(0,180)})]})]})})}_.prototype={id:y.a.string.isRequired,year:y.a.string.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var N=_,w=(n(66),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMoives=Object(O.a)(v.a.mark((function t(){var n,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMoives()}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(N,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(r.a.Component));n(67);var k=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};n(68);var q=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(k,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:w}),Object(s.jsx)(l.a,{path:"/about",component:u}),Object(s.jsx)(l.a,{path:"/movie/:id",component:b})]})};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.73a371c0.chunk.js.map