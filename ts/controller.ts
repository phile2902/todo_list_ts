import { TaskRepository, TIME_RANGE_TODAY } from "./task/repository/TaskRepository";

console.log('Hello world');

$(document).ready(function() {
    let taskRepository = new TaskRepository();

    console.log(taskRepository.getTasks(TIME_RANGE_TODAY));
});