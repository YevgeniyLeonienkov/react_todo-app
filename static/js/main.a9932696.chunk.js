(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,o){e.exports=o(20)},18:function(e,t,o){},19:function(e,t,o){},20:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(10),r=o.n(l),d=(o(18),o(19),o(1)),i=o(8),c=o(3),s=o(4),u=o(6),f=o(5),m=o(7),h=o(2),g=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={valuesMap:{title:""}},o.handleFormSubmit=function(e){e.preventDefault(),o.state.valuesMap.title&&(o.props.onSubmit(Object(d.a)({},o.state.valuesMap,{completed:!1,id:new Date})),o.setState({valuesMap:{title:""}}))},o.handleFieldChange=function(e){var t=e.target,n=t.name,a=t.value;o.setState(function(e){return{valuesMap:Object(d.a)({},e.valuesMap,Object(h.a)({},n,a))}})},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.valuesMap;return a.a.createElement("form",{onSubmit:this.handleFormSubmit},a.a.createElement("input",{onChange:this.handleFieldChange,value:e.title,name:"title",autoComplete:"off",className:"new-todo",placeholder:"What needs to be done?"}))}}]),t}(a.a.Component);g.defaultProps={onSubmit:function(){}};var p=g,T=function(e){var t=e.addTodo,o=e.todos;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(p,{onSubmit:t,todos:o}))};T.defaultProps={addTodo:function(){}};var b=T,v=o(11),E=o.n(v),C=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={isEditing:!1,currentTitle:"",currentId:null},o.handleStartEditing=function(){o.setState({isEditing:!0,currentTitle:o.props.todo.title,currentId:o.props.todo.id})},o.handleFormSubmit=function(e){e.preventDefault();var t=o.state,n=t.currentTitle,a=t.currentId;o.state.currentTitle&&(o.props.onChangeSubmit(n,a),o.setState({currentTitle:"",isEditing:!1}))},o.handleFieldChange=function(e){var t=e.target,n=t.name,a=t.value;o.setState(function(e){return Object(d.a)({},e,Object(h.a)({},n,a))})},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,o=e.handleTodoToggle,n=e.handleDestroyTodo,l=this.state,r=l.isEditing,d=l.currentTitle;return a.a.createElement("li",null,a.a.createElement("div",{className:"view"},a.a.createElement("input",{checked:t.completed,type:"checkbox",className:"toggle",id:t.id,onChange:function(){return o(t.id)}}),r?a.a.createElement("form",{onSubmit:this.handleFormSubmit},a.a.createElement("input",{onChange:this.handleFieldChange,value:d,name:"currentTitle",autoComplete:"off",className:"new-todo",placeholder:"What needs to be done?"})):a.a.createElement("label",{className:t.completed?"todo--completed":null,htmlFor:t.id,onDoubleClick:this.handleStartEditing},t.title),a.a.createElement("button",{onClick:function(){return n(t.id)},type:"button",className:"destroy"})))}}]),t}(a.a.Component);C.defaultProps={handleTodoToggle:function(){},handleDestroyTodo:function(){},onChangeSubmit:function(){}};var y=C,S=function(e){var t=e.allToggle,o=e.filteredTodos,n=e.handleTodoToggle,l=e.handleAllToggle,r=e.handleDestroyTodo,d=e.onChangeSubmit,i=E()({"toggle-all":!0,"toggle-all--active":t});return a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:i,onChange:l}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("ul",{className:"todo-list"},o.map(function(e){return a.a.createElement(y,{key:e.id,todo:e,handleTodoToggle:n,handleDestroyTodo:r,onChangeSubmit:d})})))};S.defaultProps={handleTodoToggle:function(){},handleAllToggle:function(){},handleDestroyTodo:function(){},onChangeSubmit:function(){},allToggle:!1};var j=S,O=function(e){var t=e.todos,o=e.handleDestroyCompleted,n=e.handleFilter;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!e.completed}).length)," items left"),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"selected",onClick:function(){return n("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:"selected",onClick:function(){return n("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:"selected",onClick:function(){return n("completed")}},"Completed"))),t.some(function(e){return e.completed})&&a.a.createElement("button",{type:"button",className:"clear-completed",onClick:o,style:{display:"block"}},"Clear completed"))};O.defaultProps={handleDestroyCompleted:function(){},handleFilter:function(){}};var D=O,N=function(e,t){return e.map(function(e){return e.id!==t?e:Object(d.a)({},e,{completed:!e.completed})})},k=function(e,t){return e.map(function(e){return!1===t?Object(d.a)({},e,{completed:!0}):Object(d.a)({},e,{completed:!1})})},F=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],filteredTodos:[],allToggle:!1,filterDescription:""},o.addTodo=function(e){o.setState(function(t){return{filteredTodos:[].concat(Object(i.a)(t.filteredTodos),[e]),todos:[].concat(Object(i.a)(t.todos),[e])}})},o.handleTodoToggle=function(e){o.setState(function(t){return{filteredTodos:N(t.filteredTodos,e),todos:N(t.todos,e)}})},o.handleAllToggle=function(){o.setState(function(e){return{filteredTodos:k(e.filteredTodos,e.allToggle),allToggle:!e.allToggle,todos:k(e.todos,e.allToggle)}})},o.handleDestroyTodo=function(e){o.setState(function(t){return{filteredTodos:t.filteredTodos.filter(function(t){return t.id!==e}),allToggle:0===!t.todos.length,todos:t.todos.filter(function(t){return t.id!==e})}})},o.handleDestroyCompleted=function(){o.setState(function(e){return{filteredTodos:e.filteredTodos.filter(function(e){return!e.completed}),allToggle:0===!e.todos.length,todos:e.todos.filter(function(e){return!e.completed})}})},o.handleFilter=function(e){o.setState(function(t){switch(e){case"active":return{filteredTodos:t.todos.filter(function(e){return!e.completed})};case"completed":return{filteredTodos:t.todos.filter(function(e){return e.completed})};default:return{filteredTodos:t.todos}}})},o.handleChangeTodo=function(e,t){o.setState(function(o){return{filteredTodos:o.filteredTodos.map(function(o){return o.id!==t?o:Object(d.a)({},o,{title:e})}),todos:o.todos.map(function(o){return o.id!==t?o:Object(d.a)({},o,{title:e})})}})},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,o=e.filteredTodos,n=e.allToggle,l=e.filterDescription;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(b,{todos:o,addTodo:this.addTodo}),a.a.createElement(j,{todos:o,allToggle:n,filteredTodos:o,filterDescription:l,handleTodoToggle:this.handleTodoToggle,handleAllToggle:this.handleAllToggle,handleDestroyTodo:this.handleDestroyTodo,onChangeSubmit:this.handleChangeTodo}),t.length>0&&a.a.createElement(D,{todos:o,handleDestroyCompleted:this.handleDestroyCompleted,handleFilter:this.handleFilter}))}}]),t}(a.a.Component);r.a.render(a.a.createElement(F,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a9932696.chunk.js.map