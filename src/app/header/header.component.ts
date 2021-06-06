import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = new User();

  constructor(private service: UserService, private router: Router){};

  //title = 'quicktodo';

  logout(){
    localStorage.removeItem("user");
    localStorage.clear();
    this.router.navigate(["/home"]);
  }

  upgradeToPremium(){
    location.href="http://localhost:8080/user/upgradeToPremium";
    //this.service.upgradeToPremium(this.user);
  }

  ngOnInit(): void {
    //this.user = this.service.user;
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }

}
