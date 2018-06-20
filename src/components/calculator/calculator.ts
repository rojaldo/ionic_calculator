import { Component } from '@angular/core';
import { ResolveProvider } from '../../providers/resolve/resolve';

/**
 * Generated class for the CalculatorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorComponent {

  display = '';
  operator = '';
  result: number;

  blank = true;
  firstFigureState = false;
  secondFigureState = false;
  resolvedState = false;

  firstFigure = 0;
  secondFigure = 0;

  constructor(public service: ResolveProvider) {
    console.log('Hello CalculatorComponent Component');
  }

  numberPressed(input: number) {
    if (this.resolvedState) {
      this.display = '';
      this.resolvedState = false;
      this.blank = true;
    }
    if (this.blank) {
      this.firstFigure = this.firstFigure + input;
      this.blank = false;
      this.firstFigureState = true;
    } else if (this.firstFigureState) {
      this.firstFigure = 10 * this.firstFigure + input;
    } else if (this.secondFigureState) {
      this.secondFigure = 10 * this.secondFigure + input;
    }
    this.display = this.display + input;
  }

  symbolPressed(symbol: string) {
    if (this.firstFigureState) {
      if ((symbol !== '=') && (symbol !== '.')) {
        this.operator = symbol;
        this.display = this.display + symbol;
        this.secondFigureState = true;
        this.firstFigureState = false;
      }
    } else if (this.secondFigureState) {
      if (symbol === '=' && this.secondFigure !== undefined) {
        this.display = this.display + symbol;
        this.result = this.service.resolveOperation(this.firstFigure, this.secondFigure, this.operator);
        this.display = this.display + this.result;
        this.firstFigure = 0;
        this.secondFigure = 0;
        this.resolvedState = true;
        this.secondFigureState = false;
      }
    }
}

}
