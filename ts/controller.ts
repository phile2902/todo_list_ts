import { TaskRepository, TIME_RANGE_TODAY, TIME_RANGE_PRECEDING, TIME_RANGE_UPCOMING } from "./task/repository/TaskRepository";
import { Task } from "./task/model/Task";

function showTasksListInHTML(tasks: Task[])
{
    let result: string = "";

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

function appendTasksInHtml(taskRepository: TaskRepository) {
    $("#preceding_tasks").html(showTasksListInHTML(taskRepository.getTasks(TIME_RANGE_PRECEDING)));
    $("#today_tasks").html(showTasksListInHTML(taskRepository.getTasks(TIME_RANGE_TODAY)));
    $("#upcoming_tasks").html(showTasksListInHTML(taskRepository.getTasks(TIME_RANGE_UPCOMING)));
}

$(document).ready(function() {
    let taskRepository = new TaskRepository();
    appendTasksInHtml(taskRepository);

    $(".submit_task").on('click', function() {
        let taskValue = $("#task_input").val();
        taskRepository.addTask(taskValue);

        appendTasksInHtml(taskRepository);
    });

    $(".task-list").on('click', '.task_item', function() {
        let checkedTaskId = $("input:checked").val();

        if (checkedTaskId != undefined) {
            taskRepository.removeTask(checkedTaskId);
        }

        appendTasksInHtml(taskRepository);
    });
});