import { Injectable } from '@angular/core';

/*
  Generated class for the ResolveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResolveProvider {

  constructor() {
    console.log('Hello ResolveProvider Provider');
  }

  resolveOperation(firstFigure: number, secondFigure: number, operator: string): number {
    let result: number;
    if (operator === '+') {
      result = firstFigure + secondFigure;
    } else if (operator === '-') {
      result = firstFigure - secondFigure;
    } else if (operator === '*') {
      result = firstFigure * secondFigure;
    } else if (operator === '/') {
      result = firstFigure / secondFigure;
    }
    return result;

  }

}
