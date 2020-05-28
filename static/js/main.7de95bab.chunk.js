(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{16:function(e,t,n){e.exports=n(31)},21:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),i=n.n(o),c=(n(21),n(1)),s=n(2),l=n(4),u=n(3),d=n(7),h=n(11),p=n.n(h),f=n(14);var m=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))};function b(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))}var v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(r.Component),g=function(e){var t=e.onSearchChange;return a.a.createElement("input",{"aria-label":"Search Robot",className:"pa3 ba b--green bg-lightest-blue",style:{width:"400px",height:"30px",maxWidth:"400px"},type:"search",placeholder:"Search Robot...",onChange:t})},E=function(e){var t={Scroll:{overflowX:"hide",overflowY:e.isPending?"hide":"scroll",border:"5px solid rgb(0, 88, 88)",height:"720px",maxWidth:"1200px",margin:"20px auto"}};return a.a.createElement("div",{style:t.Scroll},e.children)};var y={loading:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}},w=function(){return a.a.createElement("div",{className:"w-100 tc",style:y.loading},a.a.createElement("div",null,a.a.createElement("h4",{style:{color:"red"}},"LOADING"),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"32",height:"32",fill:"red"},a.a.createElement("path",{transform:"translate(0 0)",d:"M0 12 V20 H4 V12z"},a.a.createElement("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 28 0; 0 0; 0 0",dur:"1.5s",begin:"0",repeatCount:"indefinite",keyTimes:"0;0.3;0.6;1",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),a.a.createElement("path",{opacity:"0.5",transform:"translate(0 0)",d:"M0 12 V20 H4 V12z"},a.a.createElement("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 28 0; 0 0; 0 0",dur:"1.5s",begin:"0.1s",repeatCount:"indefinite",keyTimes:"0;0.3;0.6;1",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})),a.a.createElement("path",{opacity:"0.25",transform:"translate(0 0)",d:"M0 12 V20 H4 V12z"},a.a.createElement("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 28 0; 0 0; 0 0",dur:"1.5s",begin:"0.2s",repeatCount:"indefinite",keyTimes:"0;0.3;0.6;1",keySplines:"0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",calcMode:"spline"})))))},O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).shouldComponentUpdate=function(e,t){return r.state.count!==t.count},r.state={count:0},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("button",{id:"counter",color:this.props.color,onClick:function(){return e.setState((function(e){return{count:e.count+1}}))}},"Count: ",this.state.count)}}]),n}(r.Component);function S(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"Robo Friends"),a.a.createElement("div",null,a.a.createElement(O,{color:"red"})))}n(29);var R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).filteredRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.isPending;return a.a.createElement("div",{className:"tc"},a.a.createElement("div",null,a.a.createElement(S,null),a.a.createElement(g,{onSearchChange:t}),a.a.createElement(E,{isPending:n},n?a.a.createElement(w,null):a.a.createElement(v,null,a.a.createElement(b,{robots:this.filteredRobots()})))))}}]),n}(r.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(R,this.props)}}]),n}(r.Component),j=Object(d.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_ROBOTS_PENDING"}),e.next=3,(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(e){return setTimeout(t({type:"REQUEST_ROBOTS_SUCCESS",payload:e}),5e3)})).catch((function(e){return t({type:"REQUEST_ROBOTS_FAILED",payload:e})}));case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(C),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var x=n(5),N=n(15),A=(n(30),{searchField:""}),_={robots:[],isPending:!0},P=Object(x.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(x.d)(P,Object(x.a)(N.a));i.a.render(a.a.createElement(d.a,{store:F},a.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/myFirst-ReactApp1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/myFirst-ReactApp1","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.7de95bab.chunk.js.map