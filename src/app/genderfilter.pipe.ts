import { Pipe, PipeTransform } from '@angular/core';
import { Names } from './cric.model';

@Pipe({
  name: 'genderfilter'
})
export class GenderfilterPipe implements PipeTransform {
  names: Names[] = []
  transform(names: any[], value: string) {
     return value ?names.filter(item => item.gender === value): names;
  }

}
