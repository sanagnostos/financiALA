import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost4200/user';

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
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'))
  }
}
