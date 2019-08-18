import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
       this.router.navigate(['/home', obj.email])
      } else {
        document.getElementById("error").innerText = "Log In Fail";
        console.log("Log in fail");
        console.log(res)
        alert("log in fail: " + res['status'])
      }
    })
  }
}
