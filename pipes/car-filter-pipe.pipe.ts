import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilterPipe'
})
export class CarFilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    if(filterText==" "){return value;}
   // filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Car)=>c.carName.toLocaleLowerCase().indexOf(filterText)!=-1):value;
  }

}
