"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{146:function(t,n,e){e.d(n,{Z:function(){return v}});var r,i,o,a,s=e(87),c=e(243),p=e(686),l=e.n(p),u=e(168),d=e(444),h=d.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=d.ZP.li(i||(i=(0,u.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=d.ZP.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 480px;\n  object-fit: cover;\n  background-size: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),m=d.ZP.h2(a||(a=(0,u.Z)(["\n  font-family: 'Arial';\n  font-style: normal;\n  font-weight: 700;\n  text-decoration: none;\n  color: #000000;\n"]))),f=e(184),v=function(t){var n=t.isLoading,e=t.isError,r=t.movies;return(0,f.jsxs)(h,{children:[n&&(0,f.jsx)(c.p2,{height:"80",width:"80",color:"blue",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),e&&l().Notify.warning("Something went wrong! "),r.map((function(t){var n=t.id,e=t.poster_path,r=t.title;return(0,f.jsx)(x,{children:(0,f.jsxs)(s.rU,{style:{textDecoration:"none",textAlign:"center"},to:"/movies/".concat(n),children:[(0,f.jsx)("div",{children:(0,f.jsx)(g,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://st2.depositphotos.com/4323461/9818/v/450/depositphotos_98187808-stock-illustration-oops-problem-man-business-concept.jpg}",alt:r})}),(0,f.jsx)(m,{children:r})]})},n)}))]})}},544:function(t,n,e){e.r(n);var r=e(861),i=e(439),o=e(757),a=e.n(o),s=e(791),c=e(924),p=e(146),l=e(184);n.default=function(){var t=(0,s.useState)([]),n=(0,i.Z)(t,2),e=n[0],o=n[1],u=(0,s.useState)(!1),d=(0,i.Z)(u,2),h=d[0],x=d[1],g=(0,s.useState)(!1),m=(0,i.Z)(g,2),f=m[0],v=m[1];return(0,s.useEffect)((function(){x(!0);var t=function(){var t=(0,r.Z)(a().mark((function t(){var n,e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=ac5224eaea5eecab8d1620632b5b6c95");case 3:n=t.sent,e=n.data.results,r=e.map((function(t){return{id:t.id,poster_path:t.poster_path,title:t.title}})),o(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),v(!0);case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Z,{isLoading:h,isError:f,movies:e})})}}}]);
//# sourceMappingURL=544.640573e0.chunk.js.map