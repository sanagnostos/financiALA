import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatSliderChange } from '@angular/material';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-logged-finance',
  templateUrl: './logged-finance.component.html',
  styleUrls: ['./logged-finance.component.css']
})
export class LoggedFinanceComponent implements OnInit {
  car: any = {};
  Score: any = ['300-500', '501-600', '601-660', '661-780', '781-850']
  Month: any = ['24', '36', '48']
  A : number = 0
  apr : number = 0
  len : number= 0
  p : number = 0
  p1 : number = 0
  i : number = 0
  ti : number = 0

  profileForm = new FormGroup({
    Monthly: new FormControl(''),
    //Interest: new FormControl(''),
    //Amount: new FormControl(''),
    //TotalI: new FormControl(''),
    scoreSelected: new FormControl(''),
    yearSelected: new FormControl(''),
    SliderN: new FormControl(''),
    ST: new FormControl(''),
    dpti: new FormControl('')

  });
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    
    return value;
    
  }
  constructor(private cs: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cs.editCar(params['id']).subscribe(res => {
        this.car = res;
       // this.car.model = "/assets/images/" + this.car.model + ".jpg"
            });
    });

  }
  
  changeCity(e){
    console.log(e.value)
    this.scoreSelected.setValue(e.target.value, {
      onlySelf: true
    })
  }
  changeYear(e){
    console.log(e.value)
    this.yearSelected.setValue(e.target.value, {
      onlySelf: true
    })
  }
  changeState(e){
    console.log(e.value)
    this.stateSelected.setValue(e.target.value, {
      onlyself: true
    })
  }

  get scoreSelected() {
    return this.profileForm.get('scoreSelected');
  }

  get yearSelected() {
    return this.profileForm.get('yearSelected');
  }
  get stateSelected() {
    return this.profileForm.get('stateSelected');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //var M = this.profileForm.get('yearSelected').value;
    //var IR = this.profileForm.get('Interest').value;
 
    // Formulas
    var PBT = this.profileForm.get('SliderN').value
    var creditScore = this.profileForm.get('scoreSelected').value
    var Mon = this.profileForm.get('yearSelected').value
    var SalesTax = this.profileForm.get('ST').value
    //var apr = 0
    //var len = 0
    //var p = 0
    //var p1 = 0
    var p2 = this.profileForm.get('dpti').value
    
    //var i = 0
    //var A = 0
    //var ti = 0



    console.log(this.profileForm.value)
    //conditional statment for calculations
    if(creditScore == '300-500'){
      this.apr = 14.40
      console.log(this.apr)
    } else if(creditScore == '501-600'){
      this.apr = 11.85
      console.log(this.apr)
    } else if(creditScore == '601-660'){
      this.apr = 7.50
      console.log(this.apr)
    } else if (creditScore == '661-780'){
      this.apr = 4.55
      console.log(this.apr)
    } else if('781-850') {
      this.apr = 3.65
      console.log(this.apr)
    } else {
      console.log("pls choose something")
    }

    if(Mon == '24') {
      this.len =  24
      console.log(this.len)
    } else if(Mon == '36') {
      this.len = 36
      console.log(this.len)
    } else if('48') {
      this.len = 48
      console.log(this.len)
    } else {
      console.log("pls choose something")
    }
    //console.log(Mon)

    //************  */Calculation for Calculator ************
      this.p = PBT * (SalesTax / 100 )
      this.p1 = PBT + this.p
      p2 = this.p1 - p2
      this.i = ((this.apr / 100) / 12)
      this.A = p2 * (this.i * (Math.pow((1 + this.i), this.len)) / (Math.pow((1 + this.i), this.len) - 1))
      this.ti = PBT - (Mon * this.A)

      /*this.profileForm.setValue({
        Monthly: A
      });*/
  
    console.log("Monthly Payments: " + this.A)
    console.log("Total Interest Rate: " + this.ti)
    console.log("Total Amount: ")
    console.log("Interest Rate: " + this.apr)
    
   
    
    }


}
