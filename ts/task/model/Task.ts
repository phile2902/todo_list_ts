export class Task {
    private _id: number;
    private _name: string;
    private _isCompleted: boolean;
    private _createdAt: Date = new Date();

    constructor(id: number, name: string, isCompleted: boolean) {
        this.id = id;
        this.name = name;
        this.isCompleted = isCompleted;
    }

    public get id(): number
    {
        return this.id;
    }

    public set id(id: number)
    {
        this.id = id;
    }

    public get name(): string
    {
        return this.name;
    }

    public set name(name: string)
    {
        this.name = name;
    }

    public get isCompleted(): boolean
    {
        return this.isCompleted;
    }

    public set isCompleted(isCompleted: boolean)
    {
        this.isCompleted = isCompleted;
    }

    public get createdAt(): Date
    {
        return this.createdAt;
    }
}