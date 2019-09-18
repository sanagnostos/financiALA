import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private currentCarSubject: BehaviorSubject<any>;
  public currentCar: Observable<any>;
  uri = 'http://localhost:4000/car';

  constructor(private http: HttpClient, private router: Router) { 
    this.currentCarSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentCar')));
    this.currentCar = this.currentCarSubject.asObservable();
  }
//    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
//        this.currentUser = this.currentUserSubject.asObservable();

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
  //  window.location.reload();
  //  this.router.navigateByUrl('/crudi')
  }
  getCar() {
    return this
      .http
      .get(`${this.uri}`);
  }
  getCarDealer(dealerid) {
    return this
      .http
      .get(`${this.uri}/get/${dealerid}`);
  }
  deleteCar(id) {
    return this
                .http
                .get(`${this.uri}/delete/${id}`);

  }
  editCar(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateCar(make, model, year, price, dealer, id) {
    const obj = {
      make: make,
      model: model, 
      year: year,
      price: price,
      dealer: dealer
    };
    this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  } 
}
