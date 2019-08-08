import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onLogIn() {
    alert("Log in button activated!")
  }
  onRegister() {
    
  }

  ngOnInit() {
  }

}
