import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class EmailService {

    constructor(private http: HttpClient) { }

    uri = 'http://localhost:4000/email/send';

    sendEmail(email: string){
        this.http.post(this.uri, {email}).subscribe(e=>console.log(e))
        console.log(email)
    }

  }