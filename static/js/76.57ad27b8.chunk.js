"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,r,e){e.r(r),e.d(r,{default:function(){return i}});var n=e(439),a=e(689),c=e(791),s=e(818),u={castContainer:"Cast_castContainer__NIXqj",actorImg:"Cast_actorImg__T6qL2",actorItem:"Cast_actorItem__fXEWx",ActorInfo:"Cast_ActorInfo__hn1gA",actorName:"Cast_actorName__XabVA",actorChar:"Cast_actorChar__VY6Sx"},o=e(184),i=function(){var t=(0,c.useState)(null),r=(0,n.Z)(t,2),e=r[0],i=r[1],f=(0,a.UO)().id;return(0,c.useEffect)((function(){f&&(0,s.Ku)(f).then((function(t){i(t.cast)}))}),[f]),e?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:u.castContainer,children:e.map((function(t){var r=t.id,e=t.profile_path,n=t.original_name,a=t.character;return(0,o.jsxs)("li",{className:u.actorItem,children:[(0,o.jsx)("div",{className:u.actorImg,children:(0,o.jsx)("img",{className:u.image,src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:n})}),(0,o.jsxs)("div",{className:u.ActorInfo,children:[(0,o.jsx)("p",{className:u.actorName,children:n}),(0,o.jsx)("p",{className:u.actorChar,children:a})]})]},r)}))})}):null}},818:function(t,r,e){e.d(r,{JN:function(){return u},Ku:function(){return p},Pg:function(){return i},Ph:function(){return o},fI:function(){return f}});var n=e(861),a=e(757),c=e.n(a),s=e(263);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"f9c0bb738fb5ed39704a871786e56353"};var u=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day",{params:{page:1}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.57ad27b8.chunk.js.map