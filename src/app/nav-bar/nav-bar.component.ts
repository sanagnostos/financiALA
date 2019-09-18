import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {AppRoutingModule} from '../app-routing.module'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser: any
  //router: any;
  constructor(private loginservice: LoginService, private router: Router) { 
    this.loginservice.currentUser.subscribe(x => this.currentUser = x);
  }
  get isManager() {
    return this.currentUser && this.currentUser.rank == 3;
}
get isSalesMan() {
  return this.currentUser && this.currentUser.rank == 2;
}
get isUser() {
  return this.currentUser && this.currentUser.rank == 1;
}
get isBothUM(){
  return this.currentUser && this.currentUser.rank > 1;
}
get isAll(){
  return this.currentUser && this.currentUser.rank > 0;
}
logout(){
  this.loginservice.logout();
  //this.router.navigateByUrl('/loggedF')
  this.router.navigate(['/']);
    
}
  ngOnInit() {
  }

}
