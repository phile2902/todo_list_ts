"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskRepository_1 = require("./task/repository/TaskRepository");
console.log('Hello world');
$(document).ready(function () {
    let taskRepository = new TaskRepository_1.TaskRepository();
    console.log(taskRepository.getTasks(TaskRepository_1.TIME_RANGE_TODAY));
});
