import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {AppRoutingModule} from '../app-routing.module'


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  currentUser: any

  constructor(private loginservice: LoginService, private router: Router) { 
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

}
