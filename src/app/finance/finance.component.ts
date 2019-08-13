import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  profileForm = new FormGroup({
    Monthly: new FormControl(''),
    Interest: new FormControl(''),
    Amount: new FormControl(''),
    TotalI: new FormControl(''),
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
  onSubmit() {
    // TODO: Use EventEmitter with form value
    var M = this.profileForm.get('Monthly').value;
    var IR = this.profileForm.get('Interest').value;
console.log(M)
    // Formulas
    var P = ''
    var Mon = ''
    var i = ''

    //credit score determine APR
    // used car and new car have different APR
    // if statment for determining APR

    
    }
    selecteditem: string = '';

    selectChangeHandler (event: any){
      console.log(this.selecteditem = event.target.value)

  }

}
