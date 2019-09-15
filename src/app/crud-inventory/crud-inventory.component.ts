import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { DealerService } from '../dealer.service';
import { HttpClient } from '@angular/common/http';






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

  selectedFile: File
  cars: CarService[];
  dealers: DealerService[];
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private cs: CarService, private router: Router, private ds: DealerService, private http: HttpClient) {
    this.createForm();
  }

// IMAGE UPLOAD BOI
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:4000/file-upload', 
    uploadData,
    {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      console.log(event);
    });
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
    this.cs.addCar(make, model, year, dealer, price)
    this.createForm();
    alert(make + " added successfully");
    this.ngOnInit();
  }


  ngOnInit() {
    this.cs
      .getCar()
      .subscribe((data: CarService[]) => {
        this.cars = data;
        console.log(this.cars)
     //   console.log(ELEMENT_DATA)
      })
      this.ds
      .getDealer()
      .subscribe((data: DealerService[]) => {
        this.dealers = data;
        console.log(this.dealers)
      })

  }
  deleteCar(id, model) {
    this.cs.deleteCar(id).subscribe(res => {
      console.log('Deleted ' + model);
      this.ngOnInit();

   //   window.location.reload();

    })
  }
  displayedColumns: string[] = ['position', 'Make', 'Model', 'Year', 'Price'];
  //console.log(this.cars)
 // console.log(ELEMENT_DATA)
  dataSource = this.cars;

}
export class MyFileUploadComponent {
  selectedFile: File
  uri = 'http://localhost:4000/user';

  
}


export interface PeriodicElement {
  position: number;
  Make: string;
  Model: string;
  Year: string;
  Price: number;
  
}