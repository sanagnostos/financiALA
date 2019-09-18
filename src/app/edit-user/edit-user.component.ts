import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DealerService } from '../dealer.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  dealers: DealerService[];

  user: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private us: UserService, private fb: FormBuilder, private ds: DealerService) { 
    this.createForm()
  }
  createForm() {
    this.angForm = this.fb.group({
      first_name: [ ],
      last_name: [ ],
      email: [],
      password: [ ],
      rank: [],
      location: []
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.us.editUser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
    this.ds
      .getDealer()
      .subscribe((data: DealerService[]) => {
        this.dealers = data;
        console.log(this.dealers)
      })
  }
  updateUser(first_name, last_name, email, password, rank, location) {

    this.route.params.subscribe(params => {
      this.us.updateUser(first_name, last_name, email, password, rank, location, params['id']);
      this.router.navigate(['UserInfo']);
    })
  }

}
