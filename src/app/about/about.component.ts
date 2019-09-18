import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: UserService[];
  currentUser: any

  public show:boolean = false;

  constructor(private us: UserService, private router: Router, private http: HttpClient, private loginservice: LoginService) { 
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }

  get isManager() {
    return this.currentUser && this.currentUser.rank == 3;
}


toggle() {
  this.show = !this.show;
}
  ngOnInit() {
    this.us.getUser().subscribe((data: UserService[])=> {
      this.users = data;
      console.log(this.users)
    })

  }

}
