import { Component, OnInit, Input } from '@angular/core';
//import { request } from 'http';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})

export class CustomerHomeComponent implements OnInit {

  user: any;
  @Input('obj.email') email: String;

  

  constructor() { 
    this.user = {
      email: this.email
    }
  }

  ngOnInit() {
  }


}
