import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dealership-info',
  templateUrl: './dealership-info.component.html',
  styleUrls: ['./dealership-info.component.css']
})
export class DealershipInfoComponent implements OnInit {
  car: any = {};
  currentUser: any
  
  constructor(private cs: CarService, private loginservice: LoginService, private route: ActivatedRoute, private router: Router, private us: UserService) {
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {

      
    this.route.params.subscribe(params => {
      this.cs.getCarDealer(this.currentUser.location).subscribe(res => {
        this.car = res;
      })
    })

      /*
   this.route.params.subscribe(params => {
      this.cs.editCar(params['id']).subscribe(res => {
        this.car = res;
      });
    });

      */
  }

}
