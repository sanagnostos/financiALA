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
        console.log(res['status'])
        console.log(obj.email + " is logged in")
        alert("Log in " + res['status'])
        this.router.navigateByUrl('/loggedF')
      } if(res['status'] == false) {
        console.log("Log in fail");
        console.log(res)
        alert("log in fail: " + res['status'])
      }
    })
  }
}
