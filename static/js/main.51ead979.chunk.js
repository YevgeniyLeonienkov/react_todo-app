(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(19)},17:function(e,t,o){},18:function(e,t,o){},19:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(10),r=o.n(l),c=(o(17),o(18),o(1)),i=o(6),d=o(3),s=o(4),u=o(7),m=o(5),f=o(8),p=o(2),h=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={valuesMap:{title:""}},o.handleFormSubmit=function(e){e.preventDefault(),o.state.valuesMap.title&&(o.props.onSubmit(Object(c.a)({},o.state.valuesMap,{completed:!1,id:new Date})),o.setState({valuesMap:{title:""}}))},o.handleFieldChange=function(e){var t=e.target,n=t.name,a=t.value;o.setState(function(e){return{valuesMap:Object(c.a)({},e.valuesMap,Object(p.a)({},n,a))}})},o}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.valuesMap;return a.a.createElement("form",{onSubmit:this.handleFormSubmit},a.a.createElement("input",{onChange:this.handleFieldChange,value:e.title,name:"title",autoComplete:"off",className:"new-todo",placeholder:"What needs to be done?"}))}}]),t}(a.a.Component);h.defaultProps={onSubmit:function(){}};var g=h,T=function(e){var t=e.addTodo,o=e.todos;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(g,{onSubmit:t,todos:o}))};T.defaultProps={addTodo:function(){}};var b=T,v=function(e){var t=e.todo,o=e.handleTodoToggle,n=e.handleDestroyTodo;return a.a.createElement("li",{className:""},a.a.createElement("div",{className:"view"},a.a.createElement("input",{checked:t.completed,type:"checkbox",className:"toggle",id:t.id,onChange:function(){return o(t.id)}}),a.a.createElement("label",{className:t.completed?"todo--completed":null,htmlFor:t.id},t.title),a.a.createElement("button",{onClick:function(){return n(t.id)},type:"button",className:"destroy"})))};v.defaultProps={handleTodoToggle:function(){},handleDestroyTodo:function(){}};var y=v,E=function(e){var t=e.todos,o=e.filteredTodos,n=e.filterDescription,l=e.handleTodoToggle,r=e.handleAllToggle,c=e.handleDestroyTodo,d=Object(i.a)(t);return"active"!==n&&"completed"!==n||(d=o),a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:r}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},d.map(function(e){return a.a.createElement(y,{key:e.id,todo:e,handleTodoToggle:l,handleDestroyTodo:c})})))};E.defaultProps={handleTodoToggle:function(){},handleAllToggle:function(){},handleDestroyTodo:function(){},filterDescription:"",filteredTodos:[]};var D=E,C=function(e){var t=e.todos,o=e.handleDestroyCompleted,n=e.handleFilter;return a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.completed}).length)," items left"),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"selected",onClick:function(){return n("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:"selected",onClick:function(){return n("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:"selected",onClick:function(){return n("completed")}},"Completed"))),t.some(function(e){return e.completed})&&a.a.createElement("button",{type:"button",className:"clear-completed",onClick:o,style:{display:"block"}},"Clear completed"))};C.defaultProps={handleDestroyCompleted:function(){},handleFilter:function(){}};var j=C,N=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],filteredTodos:[],footerVisibility:!1,allToggle:!1,filterDescription:""},o.addTodo=function(e){o.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[e]),footerVisibility:!0}})},o.handleTodoToggle=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id!==e?t:Object(c.a)({},t,{completed:!t.completed})})}})},o.handleAllToggle=function(){o.setState(function(e){return{todos:e.todos.map(function(t){return!1===e.allToggle?Object(c.a)({},t,{completed:!0}):Object(c.a)({},t,{completed:!1})}),allToggle:!e.allToggle}})},o.handleDestroyTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.handleDestroyCompleted=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},o.handleFilter=function(e){o.setState(function(t){switch(e){case"all":return{filteredTodos:t.todos,filterDescription:e};case"active":return{filteredTodos:t.todos.filter(function(e){return!e.completed}),filterDescription:e};case"completed":return{filteredTodos:t.todos.filter(function(e){return e.completed}),filterDescription:e};default:return{}}})},o}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,o=e.footerVisibility,n=e.filteredTodos,l=e.filterDescription;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(b,{todos:t,addTodo:this.addTodo}),a.a.createElement(D,{todos:t,filteredTodos:n,filterDescription:l,handleTodoToggle:this.handleTodoToggle,handleAllToggle:this.handleAllToggle,handleDestroyTodo:this.handleDestroyTodo}),o&&a.a.createElement(j,{todos:t,handleDestroyCompleted:this.handleDestroyCompleted,handleFilter:this.handleFilter}))}}]),t}(a.a.Component);r.a.render(a.a.createElement(N,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.51ead979.chunk.js.map