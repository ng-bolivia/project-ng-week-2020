import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | number | string, format: string = 'YYYY/MM/DD'): string {
    return moment(value).format(format);
  }

}
