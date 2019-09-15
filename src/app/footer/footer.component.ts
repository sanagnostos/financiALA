import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mail: string


  constructor(private email: EmailService) { }

  ngOnInit() {
  }
  sendEmail(){
    this.email.sendEmail(this.mail)
  }

}
