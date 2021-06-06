import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import { User } from '../User';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task = new Task();
  user = new User();
  constructor(private taskService: TaskService, private router: Router,
    private toastr: ToastrService) { }

  addTask(){
    //alert("Add task");
    this.task.user = this.user;
    //this.task.user.tasks = null;
    this.taskService.storeTask(this.task).subscribe(
      
      () =>
      {
        this.toastr.success("Task added successfully !");
        this.router.navigate(["./tasks"]);
      }
    );
  }

  ngOnInit(): void {
     
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
    if(!this.user.userid){
      alert("You need to log in to access this page !");
      this.router.navigate(["/login"]);
    }
  }

}
