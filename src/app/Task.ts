import { User } from "./User";

export class Task{
    taskId: number | undefined;
    taskName: string | undefined
    taskDesc: string | undefined;
    status: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    user: User | undefined;
}