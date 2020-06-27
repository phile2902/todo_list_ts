!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=s(1);function r(t){let e="";for(let s of t)e+=`\n        <div class="form-row">\n            <input type="checkbox" id="task-${s.id}" class="task_item" value="${s.id}" ${1==s.isCompleted?"checked":""}>\n            <label for="task-${s.id}">${s.name}</label>\n\t\t</div>\n        `;return 0==e.length?"<p>No tasks</p>":e}function i(t){$("#preceding_tasks").html(r(t.getTasks(n.TIME_RANGE_PRECEDING))),$("#today_tasks").html(r(t.getTasks(n.TIME_RANGE_TODAY))),$("#upcoming_tasks").html(r(t.getTasks(n.TIME_RANGE_UPCOMING)))}$(document).ready((function(){let t=new n.TaskRepository;i(t),$(".submit_task").on("click",(function(){let e=$("#task_input").val();t.addTask(e),i(t)}))}))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=s(2);e.TIME_RANGE_PRECEDING="preceding",e.TIME_RANGE_TODAY="today",e.TIME_RANGE_UPCOMING="upcoming";e.TaskRepository=class{constructor(){this.tasks=[]}getTasks(t){let e=[];for(let s of this.tasks)this.compareDateInRange(s.createdAt,t)&&e.push(s);return e}compareDateInRange(t,s){let n=new Date;n.setHours(0,0,0);let r=new Date;return r.setHours(23,59,59),s==e.TIME_RANGE_PRECEDING&&t.getTime<n.getTime||s==e.TIME_RANGE_UPCOMING&&t.getTime>r.getTime||s==e.TIME_RANGE_TODAY}getTaskById(t){return this.tasks.forEach(e=>{if(e.id==t)return e}),null}addTask(t,e=!1){this.tasks.push(new n.Task(this.generateTaskId(),t,e))}generateTaskId(){if(0==this.tasks.length)return 1;return this.tasks.sort((function(t,e){return t.id>e.id?1:-1})),this.tasks[0].id+1}updateTask(t,e){this.tasks.forEach(s=>{s.id==t&&(s.isCompleted=e)})}removeTask(t){let e=this.getTaskPosition(t);if(null==e)throw new Error("Task not found");this.tasks=this.tasks.splice(e,1)}getTaskPosition(t){let e;return this.tasks.some((function(s,n){return s.id==t&&(e=n,!0)}))?e:null}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Task=class{constructor(t,e,s){this._createdAt=new Date,this.id=t,this.name=e,this.isCompleted=s}get id(){return this._id}set id(t){this._id=t}get name(){return this._name}set name(t){this._name=t}get isCompleted(){return this._isCompleted}set isCompleted(t){this._isCompleted=t}get createdAt(){return this._createdAt}}}]);