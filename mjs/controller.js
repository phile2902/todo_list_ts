"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskRepository_1 = require("./task/repository/TaskRepository");
function showTasksListInHTML(tasks) {
    let result = "";
    for (let task of tasks) {
        result += `
        <div class="form-row">
            <input type="checkbox" id="task-${task.id}" class="task_item" value="${task.id}" ${task.isCompleted == true ? "checked" : ""}>
            <label for="task-${task.id}">${task.name}</label>
		</div>
        `;
    }
    if (result.length == 0) {
        return `<p>No tasks</p>`;
    }
    return result;
}
function appendTasksInHtml(taskRepository) {
    $("#preceding_tasks").html(showTasksListInHTML(taskRepository.getTasks(TaskRepository_1.TIME_RANGE_PRECEDING)));
    $("#today_tasks").html(showTasksListInHTML(taskRepository.getTasks(TaskRepository_1.TIME_RANGE_TODAY)));
    $("#upcoming_tasks").html(showTasksListInHTML(taskRepository.getTasks(TaskRepository_1.TIME_RANGE_UPCOMING)));
}
$(document).ready(function () {
    let taskRepository = new TaskRepository_1.TaskRepository();
    appendTasksInHtml(taskRepository);
    $(".submit_task").on('click', function () {
        let taskValue = $("#task_input").val();
        taskRepository.addTask(taskValue);
        appendTasksInHtml(taskRepository);
    });
});
