import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4000/login';

  constructor(private http: HttpClient) { }

  LogIn(email, password) {
    const obj = {
      email: email,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/LogIn`, obj)
    .subscribe(res => console.log('Done'))
  }
}
