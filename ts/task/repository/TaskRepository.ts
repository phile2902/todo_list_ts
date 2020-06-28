import { TaskFinderInterface } from "../TaskFinderInterface";
import { Task } from "../model/Task";
import { now, isEmptyObject } from "jquery";

export const TIME_RANGE_PRECEDING: string = 'preceding';
export const TIME_RANGE_TODAY: string = 'today';
export const TIME_RANGE_UPCOMING: string = 'upcoming';

export class TaskRepository implements TaskFinderInterface{
    private tasks: Task[] = [];

    public getTasks(timeRange: string): Task[] {
        let foundTasks: Task[] = [];

        for (let task of this.tasks) {
            this.compareDateInRange(task.createdAt, timeRange) ? foundTasks.push(task) : '';
        }

        return foundTasks;
    }

    private compareDateInRange(date: Date, range: string): boolean
    {
        let startDay = new Date();
        startDay.setHours(0,0,0);
        let endDate = new Date();
        endDate.setHours(23,59,59);

        return (range == TIME_RANGE_PRECEDING && date.getTime < startDay.getTime) || 
            (range == TIME_RANGE_UPCOMING && date.getTime > endDate.getTime) || 
            range == TIME_RANGE_TODAY;
    }

    public getTaskById(id: number): Task {
        this.tasks.forEach(task => {
            if (task.id == id) {
                return task;
            }
        });

        return null;
    }

    public addTask(name: string, isCompleted: boolean = false) {
        this.tasks.push(new Task(this.generateTaskId(), name, isCompleted));
    }

    private generateTaskId()
    {
        if (this.tasks.length == 0) {
            return 1;
        }

        this.tasks.sort(function(task1, task2) {
            return task1.id > task2.id ? 1 : -1;
        });

        let lastId = this.tasks[this.tasks.length - 1].id;

        return lastId + 1;
    }

    public updateTask(id: number, isCompleted: boolean) {
        this.tasks.forEach(task => {
            if (task.id == id) {
                task.isCompleted = isCompleted;
            }
        });
    }

    public removeTask(id: number) {
        let taskPosition = this.getTaskPosition(id);

        if (null == taskPosition) {
            throw new Error("Task not found");
        }

        this.tasks.splice(taskPosition, 1);
    }

    private getTaskPosition(id: number): number {
        let position: number; 
        let result = this.tasks.some(function(task, index) {
            return task.id == id ? (position = index, true) : false;
        });

        return result ? position : null;
    }
}