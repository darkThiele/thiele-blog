(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{43:function(e,t,n){e.exports=n(74)},52:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),s=n(16),l=n(10),o=n(33),u=n(12),m=n(9),d=n(34),p=n(35),h=n(41),v=n(36),f=n(42),E=(n(52),n(19)),b=n.n(E),g=n(37),y=(n(54),n(38)),O=n.n(y).a.create({baseURL:"https://thiele.work/api/v1"}),w=n(20),N=n.n(w),j=n(39),k=n.n(j),x=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),N.a.setOptions({highlight:function(e,t){return k.a.highlightAuto(e,[t]).value}})}},{key:"renderList",value:function(){return this.props.posts.map(function(e){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description"},r.a.createElement("h1",{className:"ui dividing header"},e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:N()(e.body)}})))))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(r.a.Component),S=Object(s.b)(function(e){return{posts:e.posts}},{fetchPosts:function(){return function(){var e=Object(g.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/articles/");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(x),T=function(){return r.a.createElement("div",null,"ArticleCreate")},A=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(u.b,{to:"/",className:"item"},"Thiele's blog"),r.a.createElement("div",{className:"right menu"},r.a.createElement(u.b,{to:"/",className:"item"},"All Articles")))},C=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(m.a,{path:"/",exact:!0,component:S}),r.a.createElement(m.a,{path:"/articles/new",exact:!0,component:T}))))},L=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}}}),P=Object(l.d)(L,Object(l.a)(o.a));i.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(C,null)),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1c701eec.chunk.js.map