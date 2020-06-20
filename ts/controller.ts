console.log('Hello world');

$(document).ready(function() {
    let taskRepository = new Task.TaskRepository();

    console.log(taskRepository.getTasks(Task.TIME_RANGE_TODAY));
});