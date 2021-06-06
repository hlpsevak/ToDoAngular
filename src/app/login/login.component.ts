import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  u = new User();
  constructor(private service: UserService, private toastr:ToastrService) { 
  }

  login(){
    this.service.getByUsername(this.user);
  }

  reset(){
    this.user = new User();
  }

  ngOnInit(): void {
  }

}
