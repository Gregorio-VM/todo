(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(8),s=a.n(r),i=a(3),l=a(2),d=a(9),o=a(5),j=a(0);var b=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"TODO"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})})})]})})};var u=function(e){var t=e.setter,a=e.editing,c=e.setEdit,r=Object(n.useState)({title:"",description:""}),s=Object(o.a)(r,2),d=s[0],b=s[1],u=function(e){return a?c(e.target):b((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h4",{className:"my-3 mx-4 text-muted",children:"A\xf1adir nota"}),Object(j.jsx)("form",{onSubmit:function(e){return e.preventDefault(),b({title:"",description:""}),t(a!=={}?a:d)},children:Object(j.jsxs)("div",{className:"form-group m-3",children:[Object(j.jsx)("input",{type:"text",name:"title",className:"form-control my-3",placeholder:"Titulo",onChange:u,value:(null===a||void 0===a?void 0:a.title)||d.title}),Object(j.jsx)("textarea",{name:"description",className:"form-control my-3",placeholder:"Descripci\xf3n",onChange:u,value:(null===a||void 0===a?void 0:a.description)||d.description,cols:"30",rows:"10"}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary btn-block",value:void 0===a.index?"Guardar":"Guardar cambios"})]})})]})};var m=function(e){var t=e.title,a=e.description,n=e.delete,c=e.edit,r=e.index;return Object(j.jsx)("div",{className:"card bg-light text-center mb-3",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(j.jsx)("h5",{children:t}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("i",{className:"fas fa-edit p-2",onClick:function(){return c({title:t,description:a,index:r})}}),Object(j.jsx)("i",{className:"fas fa-times p-2",onClick:function(){return n(r)}})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:a})]})})};var O=function(e){var t=e.notes,a=e.delete,n=e.edit;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"col-12 col-md-6",children:[Object(j.jsx)("h4",{className:"my-3 mx-4 text-muted",children:"Notas"}),Object(j.jsx)("div",{className:"row",children:t.map((function(e,t){return t<4?Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(m,Object(l.a)({edit:n,delete:a,index:t},e),t)}):null}))})]}),t.map((function(e,t){return t>=4?Object(j.jsx)("div",{className:"col-md-3 mt-3",children:Object(j.jsx)(m,Object(l.a)({edit:n,delete:a,index:t},e),t)}):null}))]})};a(15),a(16);var x=function(){var e=localStorage.getItem("notes"),t=Object(n.useState)(null!==e?JSON.parse(e):[]),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)({}),m=Object(o.a)(s,2),x=m[0],v=m[1];return Object(n.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(c))}),[c]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"row m-0",children:[Object(j.jsx)("div",{className:"col-12 col-md-6",children:Object(j.jsx)(u,{setter:function(e){v({}),void 0!==e.index?r((function(t){return t.map((function(t,a){return a===e.index?e:t}))})):r((function(t){return[].concat(Object(d.a)(t),[e])}))},editing:x,setEdit:function(e){var t=e.name,a=e.value;return v((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},t,a))}))}})}),Object(j.jsx)(O,{notes:c,delete:function(e){return r((function(t){return t.filter((function(t,a){return e!==a}))}))},edit:function(e){return v(e)}})]})]})};a(17);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.21c2e366.chunk.js.map