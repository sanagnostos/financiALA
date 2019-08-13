import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormGroup, FormControl } from '@angular/forms';
>>>>>>> a2db6cba6106eb96741c6c699610b7f011e7207f

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
<<<<<<< HEAD
=======

  profileForm = new FormGroup({
    Monthly: new FormControl(''),
    Interest: new FormControl(''),
    Amount: new FormControl(''),
    TotalI: new FormControl(''),
  });
>>>>>>> a2db6cba6106eb96741c6c699610b7f011e7207f
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
<<<<<<< HEAD

    return value;
=======
    
    return value;
    
>>>>>>> a2db6cba6106eb96741c6c699610b7f011e7207f
  }
  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
=======
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
>>>>>>> a2db6cba6106eb96741c6c699610b7f011e7207f

}
