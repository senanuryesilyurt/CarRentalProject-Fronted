import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  apiUrl = 'https://localhost:44389/api/cars/';

  constructor(private httpClient: HttpClient,private ts:ToastrService) {}

  getCars(): Observable<listResponseModel<Car>> {
    let path = this.apiUrl + 'getall';
    return this.httpClient.get<listResponseModel<Car>>(path);
  }

  getCarsByBrand(id: number) {
    let path = this.apiUrl + 'getbybrandid?id=' + id;
    return this.httpClient.get<listResponseModel<Car>>(path) ;
  }

  getCarsByColor(id: number) {
    let path = this.apiUrl + 'getbycolourid?id=' + id;
    return this.httpClient.get<listResponseModel<Car>>(path);
  }

  getCarsByFilter(bname: string, cname: string) {
    let path = this.apiUrl + 'getbyfilter?brandName='+bname+'&colorName='+cname;
    return this.httpClient.get<listResponseModel<Car>>(path);
  }
}
