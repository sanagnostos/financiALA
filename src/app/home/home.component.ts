import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  //images = [1, 2, 3].map(() => `~/src/assets/images/audi.jpg`);
  constructor() { }

  ngOnInit() {
  }

}
