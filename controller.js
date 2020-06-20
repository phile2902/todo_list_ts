System.register("task/model/Task", [], function (exports_1, context_1) {
    "use strict";
    var Task;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Task = class Task {
                constructor(id, name, isCompleted) {
                    this._createdAt = new Date();
                    this.id = id;
                    this.name = name;
                    this.isCompleted = isCompleted;
                }
                get id() {
                    return this.id;
                }
                set id(id) {
                    this.id = id;
                }
                get name() {
                    return this.name;
                }
                set name(name) {
                    this.name = name;
                }
                get isCompleted() {
                    return this.isCompleted;
                }
                set isCompleted(isCompleted) {
                    this.isCompleted = isCompleted;
                }
                get createdAt() {
                    return this.createdAt;
                }
            };
            exports_1("Task", Task);
        }
    };
});
System.register("task/TaskFinderInterface", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("task/repository/TaskRepository", ["task/model/Task"], function (exports_3, context_3) {
    "use strict";
    var Task_1, TIME_RANGE_PRECEDING, TIME_RANGE_TODAY, TIME_RANGE_UPCOMING, TaskRepository;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (Task_1_1) {
                Task_1 = Task_1_1;
            }
        ],
        execute: function () {
            exports_3("TIME_RANGE_PRECEDING", TIME_RANGE_PRECEDING = 'preceding');
            exports_3("TIME_RANGE_TODAY", TIME_RANGE_TODAY = 'today');
            exports_3("TIME_RANGE_UPCOMING", TIME_RANGE_UPCOMING = 'upcoming');
            TaskRepository = class TaskRepository {
                getTasks(timeRange) {
                    return this.tasks;
                }
                getTaskById(id) {
                    this.tasks.forEach(task => {
                        if (task.id == id) {
                            return task;
                        }
                    });
                    return null;
                }
                addTask(id, name, isCompleted) {
                    this.tasks.push(new Task_1.Task(id, name, isCompleted));
                }
                updateTask(id, isCompleted) {
                    this.tasks.forEach(task => {
                        if (task.id == id) {
                            task.isCompleted = isCompleted;
                        }
                    });
                }
                removeTask(id) {
                    let taskPosition = this.getTaskPosition(id);
                    if (null == taskPosition) {
                        throw new Error("Task not found");
                    }
                    this.tasks = this.tasks.splice(taskPosition, 1);
                }
                getTaskPosition(id) {
                    let position;
                    let result = this.tasks.some(function (task, index) {
                        return task.id == id ? (position = index, true) : false;
                    });
                    return result ? position : null;
                }
            };
            exports_3("TaskRepository", TaskRepository);
        }
    };
});
System.register("controller", ["task/repository/TaskRepository"], function (exports_4, context_4) {
    "use strict";
    var TaskRepository_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (TaskRepository_1_1) {
                TaskRepository_1 = TaskRepository_1_1;
            }
        ],
        execute: function () {
            console.log('Hello world');
            $(document).ready(function () {
                let taskRepository = new TaskRepository_1.TaskRepository();
                console.log(taskRepository.getTasks(TaskRepository_1.TIME_RANGE_TODAY));
            });
        }
    };
});
