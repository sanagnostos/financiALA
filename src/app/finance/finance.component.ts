import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  Score: any = ['300-500', '501-600', '601-660', '661-780', '781-850']
  Month: any = ['24', '36', '48']
  /*State: any = ['AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY']*/

  profileForm = new FormGroup({
    //Monthly: new FormControl(''),
    //Interest: new FormControl(''),
    //Amount: new FormControl(''),
    //TotalI: new FormControl(''),
    scoreSelected: new FormControl(''),
    yearSelected: new FormControl(''),
    stateSelected: new FormControl(''),
    SliderN: new FormControl(''),
    ST: new FormControl('')

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
  constructor() { }

  ngOnInit() {


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
    var M = this.profileForm.get('yearSelected').value;
    //var IR = this.profileForm.get('Interest').value;
  //console.log(M)
    // Formulas
    var PBT = this.profileForm.get('SliderN').value
    var creditScore = this.profileForm.get('scoreSelected').value
    var Mon = this.profileForm.get('yearSelected').value
    var SalesTax = 0
    var apr = 0
    var len = 0


    console.log(this.profileForm.value)
    //conditional statment for calculations
    if(creditScore == '300-500'){
      apr = 14.40
      console.log(apr)
    } else if(creditScore == '501-600'){
      apr = 11.85
      console.log(apr)
    } else if(creditScore == '601-660'){
      apr = 7.50
      console.log(apr)
    } else if (creditScore == '661-780'){
      apr = 4.55
      console.log(apr)
    } else {
      apr = 3.65
      console.log(apr)
    }

    if(Mon == '24') {
      len =  24
      console.log(len)
    } else if(Mon == '36') {
      len = 36
      console.log(len)
    } else {
      len = 48
      console.log(len)
    }
    console.log(Mon)

    //************  */Calculation for Calculator ************
    
    
    
    }

    //selecteditem: string = '';

    /*selectChangeHandler (event: any){
      console.log(this.selecteditem = event.target.value)

  }*/

}
