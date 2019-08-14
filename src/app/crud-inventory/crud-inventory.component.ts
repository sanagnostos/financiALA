import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  Make: string;
  Model: string;
  Year: string;
  Cost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Make: 'Hydrogen', Model: 'A', Year: 'H',Cost: 1.00},
  {position: 2, Make: 'Helium', Model: 'A', Year: 'He', Cost: 1.00},
  {position: 3, Make: 'Lithium', Model: 'A', Year: 'Li', Cost: 1.00},
  {position: 4, Make: 'Beryllium', Model: 'A', Year: 'Be', Cost: 1.00},
  {position: 5, Make: 'Boron', Model: 'A', Year: 'B', Cost: 1.00},
  {position: 6, Make: 'Carbon', Model: 'A', Year: 'C', Cost: 1.00},
  {position: 7, Make: 'Nitrogen', Model: 'A', Year: 'N', Cost: 1.00},
  {position: 8, Make: 'Oxygen', Model: 'A', Year: 'O', Cost: 1.00},
  {position: 9, Make: 'Fluorine', Model: 'A', Year: 'F', Cost: 1.00},
  {position: 10, Make: 'Neon', Model: 'A', Year: 'Ne', Cost: 1.00},
];

@Component({
  selector: 'app-crud-inventory',
  templateUrl: './crud-inventory.component.html',
  styleUrls: ['./crud-inventory.component.css']
})
export class CrudInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['position', 'Make', 'Model', 'Year', 'Cost'];
  dataSource = ELEMENT_DATA;
}
