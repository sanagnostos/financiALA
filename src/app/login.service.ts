import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

  uri = 'http://localhost:4000/login';

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }

  LogIn(email, password) {
    const obj = {
      email: email,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/login`, obj)
    .subscribe(res => {
      if(res['status'] == true) {
        console.log(res)
        console.log(obj.email + " is logged in")
        alert("Successfully logged in!")
        this.router.navigateByUrl('/')
        this.currentUserSubject.next(res['user'])
       //this.router.navigate(['/home', obj.email])
      } 

      else {
        alert("Username or password is incorrect")

    //    document.getElementById("error").innerText = "Log In Fail";
        console.log("Log in fail");
        console.log(res)
      }
    })
  }
  logout(){
    localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
  }
}
