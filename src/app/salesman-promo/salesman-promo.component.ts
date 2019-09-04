import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salesman-promo',
  templateUrl: './salesman-promo.component.html',
  styleUrls: ['./salesman-promo.component.css']
})
export class SalesmanPromoComponent implements OnInit {

  constructor(private us: UserService, private router: Router, private http: HttpClient) {
  }

  users: UserService[];

  promote(id, name) {
    this.us.promote(id)
      console.log('Promoted ' + name);
      this.ngOnInit();
    
  }
  demote(id, name) {
    this.us.demote(id)
      console.log('Demoted ' + name);
      this.ngOnInit();
    
  }
  ngOnInit() {
    this.us.getUser().subscribe((data: UserService[])=> {
      this.users = data;
      console.log(this.users)
    })
  }

}
