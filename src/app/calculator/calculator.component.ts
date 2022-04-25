import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstOperand = 0;
  secondOperand = 0;
  result = 0;
  operator = 'ADD';

  caculator() {
    switch (this.operator) {
      case 'ADD': {
        this.result = this.firstOperand + this.secondOperand;
        break;
      }
      case 'SUBTRACT': {
        this.result = this.firstOperand - this.secondOperand;
        break;
      }
      case 'MULTIPLY': {
        this.result = this.firstOperand * this.secondOperand;
        break;
      }
      case 'DIVIDE': {
        this.result = this.firstOperand / this.secondOperand;
        break;
      }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
