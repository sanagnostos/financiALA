import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  uri = 'http://localhost:4000/dealer';

  constructor(private http: HttpClient) { }

  addDealer(name, location, manager) {
    const obj = {
      name: name,
      location: location,
      manager: manager,
      
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'))
  }
  getDealer() {
    return this
      .http
      .get(`${this.uri}`);
  }
}
