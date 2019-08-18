import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  uri = 'http://localhost:4000/car';

  constructor(private http: HttpClient, private router: Router) { }

  addCar(make, model, year, dealer, price) {
    const obj = {
      make: make,
      model: model,
      year: year,
      dealer: dealer,
      price: price
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'))
    window.location.reload();
  //  this.router.navigateByUrl('/crudi')
  }
  getCar() {
    return this
      .http
      .get(`${this.uri}`);
  }
}
