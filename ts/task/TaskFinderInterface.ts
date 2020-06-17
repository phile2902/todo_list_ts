namespace Task {
    export interface TaskFinderInterface {
        getTasks(timeRange: string): Task[];
        getTaskById(id: number): Task;
    }
}