(this.webpackJsonpmoenimelist=this.webpackJsonpmoenimelist||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(22),i=a.n(c),r=(a(30),a(31),a(2)),o=a(3),l=a(5),h=a(4),j=a(0),d=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"quote",children:[Object(j.jsxs)("h4",{className:"quoteText",children:[Object(j.jsx)("i",{className:"fa fa-quote-left leftQuote"})," ",this.props.quoteObj.quote]}),Object(j.jsxs)("em",{className:"quoteAuthor",children:["- ",this.props.quoteObj.character]})]})}}]),a}(s.Component),u=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={quoteObj:{}},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()})).then((function(t){e.setState({quoteObj:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)(d,{quoteObj:this.state.quoteObj})})}}]),a}(s.Component),b=a(11),p=a(42),O=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.aniInfos.map((function(t){return!t.r18&&Object(j.jsx)(b.b,{to:{pathname:"/details",state:{data:t,history:"".concat(e.props.history)}},children:Object(j.jsxs)(p.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9},animate:{width:"220px",height:"220px"},initial:"false",className:"card",children:[e.props.loading&&Object(j.jsx)("div",{children:"Loading..."}),Object(j.jsx)("img",{className:"card-image",src:t.image_url,alt:t.title},t.image_url),Object(j.jsx)("div",{className:"card-div",children:t.title.length>30?t.title.slice(0,31)+"...":t.title},t.title)]},t.toString())})}));return Object(j.jsx)(n.a.Fragment,{children:t})}}]),a}(s.Component),m=a(14),g=a(24),f=a.n(g),v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handlePageClick=s.handlePageClick.bind(Object(m.a)(s)),s}return Object(o.a)(a,[{key:"handlePageClick",value:function(e){var t=e.selected;this.props.paginate(t)}},{key:"render",value:function(){var e=0;return this.props.aniInfos&&(e=Math.floor(this.props.aniInfos.length/this.props.cardPerPage)),Object(j.jsx)("div",{children:Object(j.jsx)(f.a,{previousLabel:Object(j.jsx)("i",{className:"fas fa-arrow-left"}),nextLabel:Object(j.jsx)("i",{className:"fas fa-arrow-right"}),breakLabel:"...",breakClassName:"break-me",pageCount:e,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})}}]),a}(s.Component),x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={aniInfos:[],cardPerPage:20,currentPage:1,loading:!1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jikan.moe/v3/season/2021/summer").then((function(t){return e.setState({loading:!0}),200===t.status?t.json():null})).then((function(e){return e.anime})).then((function(t){e.setState({aniInfos:t}),e.setState({loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))}},{key:"render",value:function(){var e,t=this,a=this.state.currentPage*this.state.cardPerPage,s=a-this.state.cardPerPage,n=this.state.aniInfos.slice(s,a);e=this.state.loading?Object(j.jsx)("div",{className:"upperLoadingDiv",children:Object(j.jsx)("div",{className:"loader"})}):Object(j.jsx)("div",{className:"cardBody",children:Object(j.jsx)(O,{aniInfos:n,history:"/",loading:this.state.loading})});return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"body",children:[Object(j.jsx)(v,{aniInfos:this.state.aniInfos,cardPerPage:this.state.cardPerPage,paginate:function(e){t.setState({currentPage:e+1})}}),e]})})}}]),a}(s.Component),N=[];["wp/wp5501354.jpg"].forEach((function(e){N.push("https://wallpapercave.com/".concat(e))}));var y=Math.floor(Math.random()*N.length),S=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsx)("nav",{style:{zIndex:4},children:Object(j.jsxs)("ul",{className:"ulList",children:[Object(j.jsx)("li",{className:"liList",children:Object(j.jsx)(b.c,{exact:!0,activeClassName:"aListWithShadow",className:"aList",to:"/",children:"Airing"})}),Object(j.jsx)("li",{className:"liList",children:Object(j.jsx)(b.c,{exact:!0,activeClassName:"aListWithShadow",className:"aList",to:"/upcoming anime",children:"Upcoming"})}),Object(j.jsx)("li",{className:"liList",children:Object(j.jsx)(b.c,{activeClassName:"aListWithShadow",className:"aList",to:"/top anime",children:"Top"})}),Object(j.jsx)("li",{className:"liList",children:Object(j.jsx)(b.c,{activeClassName:"aListWithShadow",className:"aList",to:"/search",children:"Search"})})]})})}}]),a}(s.Component),P=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(S,{}),Object(j.jsx)(u,{}),Object(j.jsx)(x,{}),Object(j.jsx)("img",{className:"headImage",src:N[y],alt:"Background pic"})]})}}]),a}(s.Component),k=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={aniInfos:[],cardPerPage:50,currentPage:1,loading:!1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({aniInfos:[]});for(var t=1;t<3;t++)fetch("https://api.jikan.moe/v3/top/anime/".concat(t)).then((function(t){return e.setState({loading:!0}),t.json()})).then((function(e){return e.top})).then((function(t){e.setState((function(e){return{aniInfos:e.aniInfos.concat(t)}})),e.setState({loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))}},{key:"render",value:function(){var e,t=this,a=this.state.currentPage*this.state.cardPerPage,s=a-this.state.cardPerPage,n=[];this.state.aniInfos&&(n=this.state.aniInfos.slice(s,a),e=this.state.loading?Object(j.jsx)("div",{className:"upperLoadingDiv",children:Object(j.jsx)("div",{className:"loader"})}):Object(j.jsx)("div",{className:"cardBody",children:Object(j.jsx)(O,{aniInfos:n,history:"/top anime",loading:this.state.loading})}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"body",children:[Object(j.jsx)(v,{aniInfos:this.state.aniInfos,cardPerPage:this.state.cardPerPage,paginate:function(e){t.setState({currentPage:e+1})}}),e]})})}}]),a}(s.Component),C=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(S,{}),Object(j.jsx)(u,{}),Object(j.jsx)("img",{className:"headImage",src:N[y],alt:"Background pic"}),Object(j.jsx)(k,{})]})}}]),a}(s.Component),I=a(6),w=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"animeImageColumn",children:[Object(j.jsx)("img",{className:"card-temp-image",src:this.props.data.image_url,alt:this.props.data.title}),Object(j.jsx)(b.b,{className:"backDiv",exact:!0,to:{pathname:this.props.history},children:"Back"})]})}}]),a}(s.Component),D=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e;if(this.props.data){var t,a,s="",n="";this.props.data.genres&&this.props.data.genres.forEach((function(e){s+=e.name+", "})),s=s.slice(0,s.length-2),this.props.data.studios&&this.props.data.studios.forEach((function(e){n+=e.name+", "})),n=n.slice(0,n.length-2);var c=this.props.data.rank?"#"+this.props.data.rank:"Not Fixed",i=this.props.data.popularity?"#"+this.props.data.popularity:"Not Fixed",r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=null===(t=this.props.data.aired)||void 0===t?void 0:t.from,l=null===(a=this.props.data.aired)||void 0===a?void 0:a.to,h=r[new Date(o).getMonth()],d=new Date(o).getDate(),u=r[new Date(l).getMonth()],b=new Date(l).getDate(),p=o?"".concat(h," ").concat(d," "):"?",O=l?"".concat(u," ").concat(b):"?";e=Object(j.jsxs)("div",{className:"animeImageDetailsColumn",children:[Object(j.jsx)("h4",{className:"style1",children:"Title"}),Object(j.jsx)("h4",{className:"style2",children:this.props.data.title}),Object(j.jsx)("h4",{className:"h4Style",children:"Episodes"}),Object(j.jsx)("h4",{className:"h4Style",children:this.props.data.episodes?this.props.data.episodes:"Not Fixed"}),Object(j.jsx)("h4",{className:"h4Style",children:"Score"}),Object(j.jsx)("h4",{className:"h4Style",children:this.props.data.score?this.props.data.score:"Not Fixed"}),Object(j.jsx)("h4",{className:"h4Style",children:"Ranked"}),Object(j.jsx)("h4",{className:"h4Style",children:c}),Object(j.jsx)("h4",{className:"h4Style",children:"Popularity"}),Object(j.jsx)("h4",{className:"h4Style",children:i}),Object(j.jsx)("h4",{className:"h4Style",children:"Status"}),Object(j.jsx)("h4",{className:"h4Style",children:this.props.data.status}),Object(j.jsx)("h4",{className:"h4Style",children:"Aired"}),Object(j.jsxs)("h4",{className:"h4Style",children:["from ",p," to ",O]}),Object(j.jsx)("h4",{className:"h4Style",children:"Type"}),Object(j.jsx)("h4",{className:"h4Style",children:this.props.data.type}),Object(j.jsx)("h4",{className:"h4Style",children:"Source"}),Object(j.jsx)("h4",{className:"h4Style",children:this.props.data.source}),Object(j.jsx)("h4",{className:"h4Style",children:"Rating"}),Object(j.jsx)("h4",{className:"h4Style",children:this.props.data.rating}),Object(j.jsx)("h4",{className:"h4Style",children:"Genre"}),Object(j.jsx)("h4",{className:"h4Style",children:s}),Object(j.jsx)("h4",{className:"h4Style",children:"Studios"}),Object(j.jsx)("h4",{className:"h4Style",children:n||"Not Fixed"})]})}return Object(j.jsx)(j.Fragment,{children:e})}}]),a}(s.Component),L=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={animeDetails:{}},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jikan.moe/v3/anime/".concat(this.props.data.mal_id)).then((function(e){return e.json()})).then((function(t){e.setState({animeDetails:t})}))}},{key:"render",value:function(){var e=this.state.animeDetails,t=this.props.history;return Object(j.jsxs)(p.a.div,{animate:{width:"90vw",height:"95vh",opacity:1},className:"animeDetails",children:[Object(j.jsx)(w,{data:e,history:t}),Object(j.jsx)(D,{data:e})]})}}]),a}(s.Component),q=function(){var e,t,a,s,n=Object(I.f)();return n.state?(e=n.state.data,t=n.state.history,window.sessionStorage.setItem("data",JSON.stringify(e)),window.sessionStorage.setItem("history",JSON.stringify(t)),a=e,s=t):(a=JSON.parse(window.sessionStorage.getItem("data")),s=JSON.parse(window.sessionStorage.getItem("history"))),Object(j.jsx)("div",{className:"details",children:Object(j.jsx)(L,{data:a,history:s})})},M=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={quoteObj:{},title:"",aniResults:[]},s.handleChange=s.handleChange.bind(Object(m.a)(s)),s.inputChange=s.inputChange.bind(Object(m.a)(s)),s}return Object(o.a)(a,[{key:"inputChange",value:function(e){var t=this;this.setState({title:e.target.value}),fetch("https://api.jikan.moe/v3/search/anime?q=".concat(e.target.value,"&page=1")).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){t.setState({aniResults:e})})).catch((function(e){return console.log(e)}))}},{key:"handleChange",value:function(){this.props.fillSearch(this.state.aniResults)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{className:"inputStyle",type:"text",placeholder:"Search here...",value:this.state.title,onChange:this.inputChange}),Object(j.jsx)("button",{className:"btnStyle",onClick:this.handleChange,children:Object(j.jsx)("i",{className:"fa fa-search"})})]})})}}]),a}(s.Component),F=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={cardPerPage:20,currentPage:1,loading:!1},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.currentPage*this.state.cardPerPage,a=t-this.state.cardPerPage,s=[];this.props.data&&(s=this.props.data.slice(a,t));var n;return n=this.state.loading?Object(j.jsx)("div",{className:"upperLoadingDiv",children:Object(j.jsx)("div",{className:"loader"})}):this.props.data?Object(j.jsx)("div",{className:"cardBody",children:Object(j.jsx)(O,{aniInfos:s,history:"/search",loading:this.state.loading})}):Object(j.jsx)("div",{className:"notValid",children:"There is no valid search results..."}),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"body",children:[this.props.data&&Object(j.jsx)(v,{aniInfos:this.props.data,cardPerPage:this.state.cardPerPage,paginate:function(t){e.setState({currentPage:t+1})}}),n]})})}}]),a}(s.Component),B=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={data:[]},s.changeState=s.changeState.bind(Object(m.a)(s)),s.fillSearch=s.fillSearch.bind(Object(m.a)(s)),s}return Object(o.a)(a,[{key:"changeState",value:function(e){this.setState({data:e})}},{key:"fillSearch",value:function(e){this.changeState(e)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(S,{}),Object(j.jsx)(M,{fillSearch:this.fillSearch}),Object(j.jsx)(F,{data:this.state.data}),Object(j.jsx)("img",{className:"headImage",src:N[y],alt:"Background pic"})]})}}]),a}(s.Component),J=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={aniInfos:[],cardPerPage:20,currentPage:1,loading:!1},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jikan.moe/v3/season/later").then((function(t){return e.setState({loading:!0}),200===t.status?t.json():null})).then((function(e){return e.anime})).then((function(t){e.setState({aniInfos:t}),e.setState({loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log(t)}))}},{key:"render",value:function(){var e,t=this,a=this.state.currentPage*this.state.cardPerPage,s=a-this.state.cardPerPage,n=this.state.aniInfos.slice(s,a);e=this.state.loading?Object(j.jsx)("div",{className:"upperLoadingDiv",children:Object(j.jsx)("div",{className:"loader"})}):Object(j.jsx)("div",{className:"cardBody",children:Object(j.jsx)(O,{aniInfos:n,history:"/upcoming anime",loading:this.state.loading})});return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"body",children:[Object(j.jsx)(v,{aniInfos:this.state.aniInfos,cardPerPage:this.state.cardPerPage,paginate:function(e){t.setState({currentPage:e+1})}}),e]})})}}]),a}(s.Component),R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(S,{}),Object(j.jsx)(u,{}),Object(j.jsx)("img",{className:"headImage",src:N[y],alt:"Background pic"}),Object(j.jsx)(J,{})]})}}]),a}(s.Component),T=function(){return Object(j.jsx)(b.a,{children:Object(j.jsxs)(I.c,{children:[Object(j.jsx)(I.a,{exact:!0,path:"/",component:P}),Object(j.jsx)(I.a,{path:"/upcoming anime",component:R}),Object(j.jsx)(I.a,{path:"/top anime",component:C}),Object(j.jsx)(I.a,{path:"/details",component:q}),Object(j.jsx)(I.a,{path:"/search",component:B})]})})};i.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.990092c3.chunk.js.map