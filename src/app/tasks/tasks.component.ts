import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] | undefined;
  task = new Task();
  editTask= new Task() ;
  searchString: string = "";
  user = new User();
  index: number = -1;
  

  constructor(private taskService: TaskService, private toastr: ToastrService
    ,private router: Router, private userService: UserService) { }

  selectedTask(editTask: Task , i: number){
    this.editTask = editTask;
    this.index = i;
  }

  updateStatus(task: Task){

    task.status = "completed"
    task.user = this.user;
    task.user.tasks = null;
    this.taskService.updateTask(task).subscribe(
      
      () =>
      {
        this.toastr.success("Task updated successfully!");
        //this.toastr.show();
        this.getTasks();
        this.editTask = new Task();
      }
      
    );
  }

  getTasks(){
    
    this.taskService.getTasks(this.user).subscribe(usr => this.user = usr);

    //this.userService.getByUsername(this.user);
    //alert(this.tasks);
  }

  storeTask(){
    this.task.user = this.user;
    this.task.user.tasks = null;
    this.taskService.storeTask(this.task).subscribe();
    this.toastr.success("Task added successfully!");
    //this.toastr.show();
    this.getTasks();
  }

  updateTask(){
    
    
    this.user.tasks[this.index] = this.editTask;
    this.editTask.user = this.user;
    this.editTask.user.tasks = null;
    //alert("update task: "+this.editTask.user.userid);
    this.taskService.updateTask(this.editTask).subscribe(
      
      () =>
      {
        this.toastr.success("Task updated successfully!");
        //this.toastr.show();
        this.getTasks();
        this.editTask = new Task();
      }
      
    );
    
  }

  deleteTask(tid: number |undefined){

    this.taskService.deleteTask(tid).subscribe(
      () =>
      {
        this.toastr.success("Task deleted successfully!");
        this.toastr.show();
        this.getTasks();
      }
    );
    
  }

  ngOnInit(): void {
    //let user: User ; 
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
    if(this.user.userid){
      this.getTasks();
    }
    else{
      alert("You need to log in to access this page !");
      this.router.navigate(["/login"]);
    }
  }

}
