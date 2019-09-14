import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: CarService[];

  constructor(private cs: CarService, private router: Router) { }

  ngOnInit() {
    this.cs
      .getCar()
      .subscribe((data: CarService[]) => {
        this.cars = data;
        console.log(this.cars)
     //   console.log(ELEMENT_DATA)
      })

  }

}
