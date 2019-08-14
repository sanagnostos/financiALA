import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4000/login';

  constructor(private http: HttpClient, private router: Router) { }

  LogIn(email, password) {
    const obj = {
      email: email,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/login`, obj)
    .subscribe(res => {
      if(res['status']) {
        this.router.navigateByUrl('/loggedF')
      } else {

      }
    })
  }
}
