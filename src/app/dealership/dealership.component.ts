import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DealerService } from '../dealer.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dealership',
  templateUrl: './dealership.component.html',
  styleUrls: ['./dealership.component.css']
})
export class DealershipComponent implements OnInit {
  dealers: DealerService[];
  users: UserService[];

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ds: DealerService, private us: UserService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      location: ['', Validators.required ],
      manager: ['', Validators.required ]
    });
  }
  addDealer(name, location, manager) {
    this.ds.addDealer(name, location, manager)
    alert(name + " added successfully")
    this.createForm();
  }
  ngOnInit() {
    this.us
      .getUser()
      .subscribe((data: UserService[]) => {
        this.users = data;
        console.log(this.users)
      })

  }

}
