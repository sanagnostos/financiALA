import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CarService } from '../car.service';




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Make: 'Hydrogen', Model: 'A', Year: 'H',Price: 1.00},
  {position: 2, Make: 'Helium', Model: 'A', Year: 'He', Price: 1.00},
  {position: 3, Make: 'Lithium', Model: 'A', Year: 'Li', Price: 1.00},
  {position: 4, Make: 'Beryllium', Model: 'A', Year: 'Be', Price: 1.00},
  {position: 5, Make: 'Boron', Model: 'A', Year: 'B', Price: 1.00},
  {position: 6, Make: 'Carbon', Model: 'A', Year: 'C', Price: 1.00},
  {position: 7, Make: 'Nitrogen', Model: 'A', Year: 'N', Price: 1.00},
  {position: 8, Make: 'Oxygen', Model: 'A', Year: 'O', Price: 1.00},
  {position: 9, Make: 'Fluorine', Model: 'A', Year: 'F', Price: 1.00},
  {position: 10, Make: 'Neon', Model: 'A', Year: 'Ne', Price: 1.00},
];

@Component({
  selector: 'app-crud-inventory',
  templateUrl: './crud-inventory.component.html',
  styleUrls: ['./crud-inventory.component.css']
})
export class CrudInventoryComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CarService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      make: [''],
      model: [''],
      year: [''],
      price: [''],
      dealer: ['']
    });
  }
  addCar(make, model, year, price, dealer, ) {
 /*   console.log("DATA CHECK!");
    console.log("make: " + make)
    console.log("model: " + model)
    console.log("year: " + year)
    console.log("dealer: " + dealer)
    console.log("price: " + price)*/

    this.cs.addCar(make, model, year, dealer, price)
  }


  ngOnInit() {
  }
  displayedColumns: string[] = ['position', 'Make', 'Model', 'Year', 'Price'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  position: number;
  Make: string;
  Model: string;
  Year: string;
  Price: number;
  
}