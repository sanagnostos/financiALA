import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {AppRoutingModule} from '../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { CarService } from '../car.service';
import { DealerService } from '../dealer.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  currentUser: any;
  currentCar: any;
  cars: any = {};
  carGood: any = {};
  dealerame: any = {};

  constructor(private cs: CarService, private loginservice: LoginService, private route: ActivatedRoute, private router: Router, private us: UserService, private ds: DealerService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
    this.cs.currentCar.subscribe(x => this.currentCar = x)
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ds.getName(this.currentUser.location).subscribe(res => {
        this.dealerame = res;
        console.log(this.dealerame.name)
      })
    })/*
    this.route.params.subscribe(params => {
      this.cs.getCarDealer(this.dealerame.name).subscribe(res => {
        this.cars = res;
        console.log(this.cars)
      })
    })*/
    this.cs
    .getCar()
    .subscribe((data: CarService[]) => {
      this.cars = data;
      if(this.cars.dealer == this.dealerame) {
        this.carGood = this.cars
      }
      console.log(this.cars)
   //   console.log(ELEMENT_DATA)
    })


  }
  get isManager() {
    return this.currentUser && this.currentUser.rank == 3;
}
get isSalesMan() {
  return this.currentUser && this.currentUser.rank == 2;
}
get isUser() {
  return this.currentUser && this.currentUser.rank == 1;
}
get isBothUM(){
  return this.currentUser && this.currentUser.rank > 1;
}
get isDealer() {
  console.log(this.currentCar.dealer);
  return this.dealerame == this.currentCar.dealer;
}
}
