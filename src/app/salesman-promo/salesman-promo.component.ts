import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { DealerService } from '../dealer.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-salesman-promo',
  templateUrl: './salesman-promo.component.html',
  styleUrls: ['./salesman-promo.component.css']
})
export class SalesmanPromoComponent implements OnInit {
  dealers: DealerService[];

  angForm: FormGroup;
  constructor(private us: UserService, private router: Router, private http: HttpClient, private ds: DealerService, private fb: FormBuilder) {
    this.createForm()
  }
  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      rank: [''],
      saved: [''],
      location: ['']


    });
  }
  addUser(first_name, last_name, email, password, rank, location) {
    var saved = []
    this.us.addUser(first_name, last_name, email, password, rank, saved, location)
    this.createForm()
    this.ngOnInit()
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
    this.ds
      .getDealer()
      .subscribe((data: DealerService[]) => {
        this.dealers = data;
        console.log(this.dealers)
      })
  }

}
