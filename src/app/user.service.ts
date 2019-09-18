import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from './car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user';
  uri1 = 'http://localhost:4000/car';
  car: any = {};


  constructor(private http: HttpClient, private cs: CarService, private route: ActivatedRoute, private router: Router ) { }

  addUser(first_name, last_name, email, password, rank, saved, location) {
    
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      rank: rank,
      saved: saved,
      location: location
    };
    console.log(obj);
    console.log(obj.rank);
    alert(first_name + " added Succesfully")
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'))
  }
  getUser() {
    return this
      .http
      .get(`${this.uri}`);
  }
  promote(id) {
    const obj = {
      id: id
    };
    this.http.post(`${this.uri}/promote/${obj.id}`, obj)
    .subscribe(res => console.log('Done'));
  }
  demote(id) {
    const obj = {
      id: id
    };
    this.http.post(`${this.uri}/demote/${obj.id}`, obj)
    .subscribe(res => console.log('Done'));
  }
  save_car(userid, carid) {
    this.route.params.subscribe(params => {
      this.cs.editCar(params['carid']).subscribe(res => {
        this.car = res;
      });
    });


    const obj = {
      user_id: userid,
      car_id: carid
    };
    this.http.post(`${this.uri}/savecar/${obj.user_id}&${this.car}`, obj)
    .subscribe(res => console.log('Done'));
  }
  editUser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
  updateUser(first_name, last_name, email, password, rank, location, id) {
    const obj = {
      first_name: first_name,
      last_name: last_name, 
      email: email,
      password: password,
      rank: rank,
      location: location
    };
    this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  } 

}
