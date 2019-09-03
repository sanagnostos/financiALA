import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user';

  constructor(private http: HttpClient) { }

  addUser(first_name, last_name, email, password, rank, location) {
    
    const obj = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      rank: rank,
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
}
