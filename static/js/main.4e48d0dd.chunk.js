(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(0),r=s.n(a),i=s(24),c=s.n(i),o=s(10),l=s(2);s(37);var d=function(e){return console.log(e),Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(n.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},j=s(13),m=s.n(j),u=s(25),b=s(26),v=s(27),h=s(31),p=s(30),O=s(28),x=s.n(O),g=s(5),f=s.n(g);s(59);function _(e){var t=e.year,s=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:r,alt:s,title:s}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:s}),Object(n.jsx)("h5",{className:"movie__year",children:t}),Object(n.jsx)("ul",{className:"movie__geres",children:i.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsx)("p",{className:"movie__summary",children:a.slice(0,180)})]})]})}_.prototype={id:f.a.string.isRequired,year:f.a.string.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var y=_,N=(s(60),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMoives=Object(u.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMoives()}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(r.a.Component));s(61);var w=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})};s(68);var k=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(w,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(n.jsx)(l.a,{path:"/about",component:d})]})};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4e48d0dd.chunk.js.map