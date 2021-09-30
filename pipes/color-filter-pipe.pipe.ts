import { Pipe, PipeTransform } from '@angular/core';
import { colour } from '../models/colour';

@Pipe({
  name: 'colorFilterPipe'
})
export class ColorFilterPipePipe implements PipeTransform {

  transform(value: colour[], filterText:string): colour[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter(c=>c.colourName.toLocaleLowerCase().indexOf(filterText)!=-1):value;
  }

}
