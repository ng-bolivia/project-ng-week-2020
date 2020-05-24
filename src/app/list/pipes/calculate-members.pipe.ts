import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash';

@Pipe({
  name: 'calculateMembers'
})
export class CalculateMembersPipe implements PipeTransform {

  transform(value: number): string {
    const result = calcMembersMemoize(value);
    return result;
  }
}

const calcMembersMemoize = (value: number): string => {
  if (value < 5) {
    return 'low';
  } else if (value >= 5 && value <= 7) {
    return 'medium';
  } else if (value > 7) {
    return 'high';
  }
};
