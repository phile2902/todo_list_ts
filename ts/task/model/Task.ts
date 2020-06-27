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
        return this._id;
    }

    public set id(id: number)
    {
        this._id = id;
    }

    public get name(): string
    {
        return this._name;
    }

    public set name(name: string)
    {
        this._name = name;
    }

    public get isCompleted(): boolean
    {
        return this._isCompleted;
    }

    public set isCompleted(isCompleted: boolean)
    {
        this._isCompleted = isCompleted;
    }

    public get createdAt(): Date
    {
        return this._createdAt;
    }
}