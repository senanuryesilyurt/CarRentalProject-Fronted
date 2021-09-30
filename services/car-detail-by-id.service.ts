import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailByIdService {

  apiUrl='https://localhost:44389/api/'
  constructor(private httpClient:HttpClient) { }

  getCarDetailById(carId:number):Observable<listResponseModel<Car>>{
    let path=this.apiUrl+'cars/getcardetailsbyid?id='+carId;
    return this.httpClient.get<listResponseModel<Car>>(path);
  }
}
