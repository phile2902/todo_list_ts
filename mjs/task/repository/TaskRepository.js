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
        let foundTasks = [];
        for (let task of this.tasks) {
            this.compareDateInRange(task.createdAt, timeRange) ? foundTasks.push(task) : '';
        }
        return foundTasks;
    }
    compareDateInRange(date, range) {
        let startDay = new Date();
        startDay.setHours(0, 0, 0);
        let endDate = new Date();
        endDate.setHours(23, 59, 59);
        return (range == exports.TIME_RANGE_PRECEDING && date.getTime < startDay.getTime) ||
            (range == exports.TIME_RANGE_UPCOMING && date.getTime > endDate.getTime) ||
            range == exports.TIME_RANGE_TODAY;
    }
    getTaskById(id) {
        this.tasks.forEach(task => {
            if (task.id == id) {
                return task;
            }
        });
        return null;
    }
    addTask(name, isCompleted = false) {
        this.tasks.push(new Task_1.Task(this.generateTaskId(), name, isCompleted));
    }
    generateTaskId() {
        if (this.tasks.length == 0) {
            return 1;
        }
        this.tasks.sort(function (task1, task2) {
            return task1.id > task2.id ? 1 : -1;
        });
        let lastId = this.tasks[this.tasks.length - 1].id;
        return lastId + 1;
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
        this.tasks.splice(taskPosition, 1);
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
