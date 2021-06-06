import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  constructor(private userService:UserService, private router:Router,
      private toastr:ToastrService) { }

  storeUser(){
    //this.user.role = "user";
    this.userService.storeUser(this.user).subscribe();
    this.toastr.success("User added Successfully !");
    this.toastr.toastrConfig.positionClass = "toast-bottom-right";
    //this.toastr.show();
    this.router.navigate(["/login"]);
  }

  reset(){
    this.user = new User();
  }

  ngOnInit(): void {
  }

}
