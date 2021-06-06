import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './User';
import { ThrowStmt } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User();
  constructor(private http:HttpClient, private toastr:ToastrService,
      private router:Router) { }

  getUsers(){
    return this.http.get("http://localhost:8080/user/");
  }

  getByUsername(u:User){
    this.http.get<User>("http://localhost:8080/user/name/"+u.username).subscribe(u=> this.user=u,
    error => alert("Error: "+error),
    () =>
    {
      if(this.user!=undefined && this.user!=null){

        this.toastr.toastrConfig.positionClass = "toast-bottom-right";
        if(this.user.username == u.username && this.user.password == u.password){
          this.toastr.success("Log in successful !");
          //this.toastr.show();
          localStorage.setItem("user", JSON.stringify(this.user));
          this.router.navigate(["/tasks"]);
        }
        else{
          this.toastr.error("Invalid credentials!");
          this.toastr.show();
        }
      }
    }
    
    );
  }
  getByEmail(email:string){
    return this.http.get("http://localhost:8080/user/email/"+email);
  }

  getByMobile(mobile:string){
    return this.http.get("http://localhost:8080/user/mobile/"+mobile);
  }

  storeUser(user:User){
    return this.http.post<void>("http://localhost:8080/user/add",user);
  }

  upgradeToPremium(user: User){
    this.http.post<void>("http://localhost:8080/user/upgradeToPremium", user);
  }
}
