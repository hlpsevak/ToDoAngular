import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './Task';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private service: HttpClient) { }

  getTasks(u:User){
    return this.service.get<User>("http://localhost:8080/user/name/"+u.username);
  }

  storeTask(t:Task){
    return this.service.post<void>("http://localhost:8080/tasks/add/",t);
  }

  updateTask(t:Task | undefined){
    //alert("update task: "+t?.taskId+" : "+t?.user?.userid);
    return this.service.put<void>("http://localhost:8080/tasks/update/",t);
  }

  deleteTask(tskid: number | undefined){
    return this.service.delete<void>("http://localhost:8080/tasks/delete/"+tskid);
  }
}
