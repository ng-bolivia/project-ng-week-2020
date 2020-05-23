import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateMembers'
})
export class CalculateMembersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('calc');
    if (value < 5) {
      return 'low';
    } else if (value >= 5 && value <= 7) {
      return 'medium';
    } else if (value > 7) {
      return 'hight';
    }
  }
}
