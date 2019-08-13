import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      repassword: ['', Validators.required ],
      rank: [''],
      location: ['']


    });
  }
  addUser(first_name, last_name, email, password, rank, location) {
    this.us.addUser(first_name, last_name, email, password, rank, location)
  }

  
  ngOnInit() {
  }

}
