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
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get isCompleted() {
        return this._isCompleted;
    }
    set isCompleted(isCompleted) {
        this._isCompleted = isCompleted;
    }
    get createdAt() {
        return this._createdAt;
    }
}
exports.Task = Task;
