import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { DealerService } from '../dealer.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  dealers: DealerService[];

  car: any = {};
  angForm: FormGroup;
  /*dealerships = [
    {name: 'Dealership1'},
    {name: 'Dealership2'},
    {name: 'Dealership3'},
    {name: 'Dealership4'},
    {name: 'Dealership5'},
  ];*/

  constructor(private route: ActivatedRoute, private router: Router, private cs: CarService, private fb: FormBuilder, private ds: DealerService) {
      this.createForm();
     }
  createForm() {
    this.angForm = this.fb.group({
      make: ['', Validators.required ],
      model: ['', Validators.required ],
      year: ['', Validators.required],
      price: ['', Validators.required ],
      dealer: ['', Validators.required ]
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cs.editCar(params['id']).subscribe(res => {
        this.car = res;
      });
    });
    this.ds
      .getDealer()
      .subscribe((data: DealerService[]) => {
        this.dealers = data;
        console.log(this.dealers)
      })
  }
  updateCar(make, model, year, price, dealer) {

    this.route.params.subscribe(params => {
      this.cs.updateCar(make, model, year, price, dealer, params['id']);
      this.router.navigate(['crudi']);
    })
  }

}
