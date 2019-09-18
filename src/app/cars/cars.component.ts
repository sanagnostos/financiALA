import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { UserService } from '../user.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: CarService[];
  currentUser: any

  constructor(private cs: CarService, private router: Router, private us: UserService, private loginservice: LoginService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);


   }

  ngOnInit() {
    this.cs
      .getCar()
      .subscribe((data: CarService[]) => {
        this.cars = data;
        console.log(this.cars)
     //   console.log(ELEMENT_DATA)
      })

  }
  save_car(carid) {

    console.log("user id" + this.currentUser._id + " car id: " + carid)
    this.us.save_car(this.currentUser._id, carid)
    console.log('Saved car' + carid)
  }
}
