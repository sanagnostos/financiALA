import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  uri = 'http://localhost:4000/dealer';
  uri2 = 'http://localhost:4000/user';

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
    this.updateUser(obj.manager)
    
  }
  updateUser(id) {
    const obj = {
      id: id
    };
    console.log("updating user too :)" + obj.id)

    this.http.post(`${this.uri2}/updateRank3/${obj.id}`, obj)
    .subscribe(res => console.log('Done'));
  } 
  getDealer() {
    return this.http.get(`${this.uri}`);
  }
  getName(id) {
    return this.http.get(`${this.uri}/edit/${id}`)
  }
}
