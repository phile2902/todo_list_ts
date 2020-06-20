"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../model/Task");
exports.TIME_RANGE_PRECEDING = 'preceding';
exports.TIME_RANGE_TODAY = 'today';
exports.TIME_RANGE_UPCOMING = 'upcoming';
class TaskRepository {
    constructor() {
        this.tasks = [];
    }
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
}
exports.TaskRepository = TaskRepository;
