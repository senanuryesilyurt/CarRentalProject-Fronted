import { Pipe, PipeTransform } from '@angular/core';
import { brand } from '../models/brand';

@Pipe({
  name: 'brandFilterPipe'
})
export class BrandFilterPipePipe implements PipeTransform {

  transform(value: brand[], filterText:string): brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter(b=>b.brandName.toLocaleLowerCase().indexOf(filterText)!=-1):value;
  }

}
