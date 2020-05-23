import { Pipe, PipeTransform } from '@angular/core';
import { format as dateFnsFormat } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | number, format: string = 'yyyy/MM/dd'): string {
    return dateFnsFormat(value, format);
  }

}
