import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators  } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {delay} from 'rxjs/operators';
import { timer } from 'rxjs';
import { interval } from 'rxjs';

import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

secondsPerSolution = '';

mathForm = new FormGroup({
  a: new FormControl(this.randomNumber()),
  b: new FormControl(this.randomNumber()),
  answer : new FormControl('')
}, [
  MathValidators.addition,
  
]);

  constructor() { }

  get a(){
    return this.mathForm.value.a
  }

  get b(){
    return this.mathForm.value.b
  }

  ngOnInit() {
   
    timer(0, 1000).subscribe(n => console.log('timer', n));
    interval(1000).subscribe(n => console.log('interval', n));

    this.mathForm.statusChanges
    .pipe(
      delay(100))
    .subscribe(value => {
      
        if (value === 'INVALID'){
        return;
      }

     
      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer:''
      })
    });
  }

  refreshPage() {
    window.location.reload();
 }

refreshComponent(){
  
}

  randomNumber(){
    return Math.floor(Math.random() * 10)
  }

}
