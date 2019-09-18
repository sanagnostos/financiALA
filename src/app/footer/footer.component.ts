import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mail: string
  currentUser: any


  constructor(private email: EmailService, private loginservice: LoginService, private router: Router) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
  }
  sendEmail(){
    this.email.sendEmail(this.mail)
  }
  get isNotLogged(){
    return this.currentUser && this.currentUser.rank == 0;
  }
  get isAll(){
    return this.currentUser && this.currentUser.rank > 0;
  }
}
