import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //user = new User();

  constructor(private service: UserService, private router: Router){};

  title = 'quicktodo';

  /*logout(){
    localStorage.removeItem("user");
    localStorage.clear();
    this.router.navigate(["/home"]);
  }*/

  ngOnInit(): void {
    //this.user = this.service.user;
    //this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }
}
