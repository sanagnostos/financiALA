import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  uri = 'http://localhost:4000/car';

  constructor(private http: HttpClient) { }

  addCar(make, model, year, dealer, price) {
    const obj = {
      make: make,
      mdoel: model,
      year: year,
      dealer: dealer,
      price: price
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'))
  }
}
