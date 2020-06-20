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
