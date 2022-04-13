import { Pipe, PipeTransform } from '@angular/core';
import { ListTODO } from '../models/list.model';

@Pipe({
  name: 'filterComplete',
  pure: false
})
export class FilterCompletePipe implements PipeTransform {

  transform(listGlobal: ListTODO [], completed: boolean = true): ListTODO [] {
    
    return listGlobal.filter( list => list.complete === completed);
  }

}
