console.log('Hello world');
$(document).ready(function () {
    let taskRepository = new Task.TaskRepository();
    console.log(taskRepository.getTasks(Task.TIME_RANGE_TODAY));
});
var Task;
(function (Task_1) {
    class Task {
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
    }
    Task_1.Task = Task;
})(Task || (Task = {}));
var Task;
(function (Task) {
    Task.TIME_RANGE_PRECEDING = 'preceding';
    Task.TIME_RANGE_TODAY = 'today';
    Task.TIME_RANGE_UPCOMING = 'upcoming';
    class TaskRepository {
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
            this.tasks.push(new Task.Task(id, name, isCompleted));
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
    }
    Task.TaskRepository = TaskRepository;
})(Task || (Task = {}));
