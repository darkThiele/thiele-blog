(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{42:function(e,t,a){},51:function(e,t,a){e.exports=a(84)},79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),s=a(18),o=a(21),l=a(45),u=a(16),m=a(19),d=a(3),h=a(4),p=a(6),f=a(5),v=a(7),b=a(9),E=a.n(b),g=a(14),y=a(46),O=a.n(y).a.create({baseURL:"http://127.0.0.1:8000/api/v1"}),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).helperUrl=function(e){return"/articles/".concat(e)},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTitles()}},{key:"renderList",value:function(){return this.props.titles.map(function(e){return r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"large angle double right icon"}),r.a.createElement("div",{className:"content"},r.a.createElement(u.b,{to:"/articles/".concat(e.id),className:"header"},e.title),r.a.createElement("div",{className:"description"},e.created_at)))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(r.a.Component),w=Object(s.b)(function(e){return{titles:e.titles}},{fetchTitles:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/titles/");case 2:a=e.sent,t({type:"FETCH_TITLES",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(N),j=(a(42),a(17)),S=a.n(j),k=a(22),C=a.n(k),x=a(48),T=(a(79),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",body:"",errors:{name:"\u5fc5\u9808\u9805\u76ee\u3067\u3059",body:"\u5fc5\u9808\u9805\u76ee\u3067\u3059"}},a.handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,c=a.state.errors;switch(n){case"name":c.name=r.length<1?"\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01":"";break;case"body":c.body=r.length>=1&&r.length<=200?"":"\u30b3\u30e1\u30f3\u30c8\u306f1\u6587\u5b57\u4ee5\u4e0a200\u6587\u5b57\u4ee5\u5185\u3068\u3057\u3066\u304f\u3060\u3055\u3044\uff01"}a.setState(Object(x.a)({errors:c},n,r),function(){console.log(c)})},a.onFormSubmit=function(e){O.post("/comments/",{article:a.props.articleId,name:a.state.name,body:a.state.body}),a.setState({name:"",body:""}),window.location.reload()},a.buttonPressSubmit=function(e){e.preventDefault();var t=a.state.errors;t.name.length>0||t.body.length>0||a.onFormSubmit()},a.checkSubmit=function(){var e=a.state.errors;if(e.name.length>0||e.body.length>0)return{opacity:.3}},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("form",{className:"ui reply form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",type:"text",value:this.state.name,onChange:this.handleChange}),e.name.length>0&&r.a.createElement("span",{className:"error"},e.name)),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Body"),r.a.createElement("textarea",{name:"body",value:this.state.body,onChange:this.handleChange}),e.body.length>0&&r.a.createElement("span",{className:"error"},e.body),r.a.createElement("div",{className:"count"},this.state.body.length,"/200")),r.a.createElement("div",{className:"ui primary submit labeled icon button",onClick:this.buttonPressSubmit,style:this.checkSubmit()},r.a.createElement("i",{className:"icon edit"})," Add Comment"))}}]),t}(r.a.Component)),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[]},a.getComments=function(){var e=Object(g.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/comments/?article_id=".concat(t));case 2:n=e.sent,a.setState({comments:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getComments(this.props.articleId)}},{key:"renderList",value:function(){return this.state.comments.map(function(e){return r.a.createElement("div",{className:"comment",key:e.id},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"author"},e.name),r.a.createElement("div",{className:"text"},e.body)))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui small comments"},r.a.createElement("h3",{className:"ui dividing header"},"Comments"),this.renderList(),r.a.createElement(T,{articleId:this.props.articleId}))}}]),t}(r.a.Component),P=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),S.a.setOptions({highlight:function(e,t){return C.a.highlightAuto(e,[t]).value}})}},{key:"renderList",value:function(){return this.props.posts.map(function(e){return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description"},r.a.createElement("h1",{className:"ui dividing header"},e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:S()(e.body)}}),r.a.createElement(L,{articleId:e.id})))))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(r.a.Component),F=Object(s.b)(function(e){return{posts:e.posts}},{fetchPosts:function(){return function(){var e=Object(g.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/articles/");case 2:a=e.sent,t({type:"FETCH_POSTS",payload:a.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(P),I=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPost(this.props.match.params.id),S.a.setOptions({highlight:function(e,t){return C.a.highlightAuto(e,[t]).value}})}},{key:"renderList",value:function(){var e=this.props.post;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"item",key:e.id},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"description"},r.a.createElement("h1",{className:"ui dividing header"},e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:S()(e.body||"")}}),r.a.createElement(L,{articleId:e.id})))))}},{key:"render",value:function(){return"new"===this.props.match.params.id?null:(console.log(this.props),r.a.createElement("div",{className:"ui relaxed divided list"},this.renderList()))}}]),t}(r.a.Component),_=Object(s.b)(function(e){return{post:e.post}},{fetchPost:function(e){return function(){var t=Object(g.a)(E.a.mark(function t(a){var n;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("/articles/".concat(e,"/"));case 2:n=t.sent,a({type:"FETCH_POST",payload:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(I),A=a(32),D=a.n(A),H=a(23),M=(a(81),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={func:function(){H.b.info("Login required to create an article")}},a.loginCheck=function(){var e=localStorage.getItem("access");e?Object(g.a)(E.a.mark(function t(){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.post("/auth/jwt/verify/",{token:e});case 2:200!==t.sent.status?a.setState({func:function(){H.b.warn("Your token has expired")}}):a.setState({func:function(){H.b.success("You are logged in")}});case 4:case"end":return t.stop()}},t)}))():a.setState({func:function(){H.b.error("You are not logged in")}})},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=D.a.isEqual(e,this.props),n=D.a.isEqual(t,this.state);return!(a&&n)}},{key:"componentDidMount",value:function(){this.loginCheck()}},{key:"render",value:function(){return this.addNotification=this.state.func,r.a.createElement("div",null,this.addNotification(),r.a.createElement(H.a,null))}}]),t}(r.a.Component)),q=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",markdown:""},a.onFormSubmit=function(e){var t=localStorage.getItem("access");O.post("/articles/",{title:a.state.title,body:a.state.markdown},{headers:{Authorization:"JWT ".concat(t)}}),a.setState({title:"",markdown:""}),window.location.assign("../")},a.buttonPressSubmit=function(e){e.preventDefault(),a.onFormSubmit()},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){S.a.setOptions({highlight:function(e,t){return C.a.highlightAuto(e,[t]).value}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement("div",{className:"ui two column stackable grid"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui form"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Body"),r.a.createElement("textarea",{value:this.state.markdown,onChange:function(t){return e.setState({markdown:t.target.value})}})),r.a.createElement("button",{className:"fluid ui button",onClick:this.buttonPressSubmit},"Submit"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:S()(this.state.markdown)}})))))}}]),t}(r.a.Component),U=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(u.b,{to:"/",className:"active item"},"Thiele's blog"),r.a.createElement(u.b,{to:"/articles/new",className:"item"},"New Post"),r.a.createElement("div",{className:"right menu"},r.a.createElement(u.b,{to:"/titles",className:"item"},"Title List"),r.a.createElement(u.b,{to:"/login",className:"item"},"Login")))},J=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",password:""},a.onFormSubmit=function(){var e=Object(g.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/auth/jwt/create/",{username:a.state.id,password:a.state.password});case 2:n=e.sent,localStorage.setItem("access",n.data.access),a.setState({id:"",password:""}),window.location.assign("../");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.buttonPressSubmit=function(e){e.preventDefault(),a.onFormSubmit()},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui form"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"UserId"),r.a.createElement("input",{type:"text",value:this.state.userid,onChange:function(t){return e.setState({id:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("button",{className:"fluid ui button",onClick:this.buttonPressSubmit},"Submit"))))}}]),t}(r.a.Component),Y=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement(m.a,{path:"/",exact:!0,component:F}),r.a.createElement(m.a,{path:"/titles",exact:!0,component:w}),r.a.createElement(m.a,{path:"/login",exact:!0,component:J}),r.a.createElement(m.a,{path:"/articles/new",exact:!0,component:q}),r.a.createElement(m.a,{path:"/articles/:id",exact:!0,component:_}))))},B=Object(o.c)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POST":return t.payload;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},titles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TITLES":return t.payload;default:return e}}}),z=Object(o.d)(B,Object(o.a)(l.a));i.a.render(r.a.createElement(s.a,{store:z},r.a.createElement(Y,null)),document.querySelector("#root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.04cbdb99.chunk.js.map