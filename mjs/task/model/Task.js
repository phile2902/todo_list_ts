"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Task = Task;
