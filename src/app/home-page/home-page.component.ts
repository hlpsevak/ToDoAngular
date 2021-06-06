import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user = new User();
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.user = this.service.user;
    this.user = JSON.parse(localStorage.getItem("user") || '{}');
  }

}
