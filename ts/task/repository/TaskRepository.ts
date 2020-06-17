namespace Task {
    export const TIME_RANGE_PRECEDING: string = 'preceding';
    export const TIME_RANGE_TODAY: string = 'today';
    export const TIME_RANGE_UPCOMING: string = 'upcoming';

    export class TaskRepository implements TaskFinderInterface{
        private tasks: Task[];

        constructor () {

        }

        public getTasks(timeRange: string): Task[] {
            return this.tasks;
        }

        public getTaskById(id: number): Task {
            this.tasks.forEach(task => {
                if (task.id == id) {
                    return task;
                }
            });

            return null;
        }

        public addTask(id: number, name: string, isCompleted: boolean) {
            this.tasks.push(new Task(id, name, isCompleted));
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

            this.tasks = this.tasks.splice(taskPosition, 1);
        }

        private getTaskPosition(id: number): number {
            let position: number; 
            let result = this.tasks.some(function(task, index) {
                return task.id == id ? (position = index, true) : false;
            });

            return result ? position : null;
        }
    }
}