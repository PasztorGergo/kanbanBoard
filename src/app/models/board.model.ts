import { Task } from "./task.model";

export interface Board {
    id?:string,
    boardName:string,
    taskArray:Array<Task>,
    priority:number;
}
