import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import {rental} from '../models/rental';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rental:rental;
  apiUrl='https://localhost:44389/api/rentals/'
  constructor(private httpClient:HttpClient ) { }

  addRental(rental:rental){
    let path=this.apiUrl+'add';
    return this.httpClient.post(path,rental);
  }

  getRentalCars(){
    let path=this.apiUrl+'getall';
    return this.httpClient.get<listResponseModel<rental>>(path);
  }

  getRentals():Observable<listResponseModel<rental>>
  {
    let newPath=this.apiUrl+"/rentals/getrentaldetails";
    return this.httpClient.get<listResponseModel<rental>>(newPath);
  }

  getRental(){
    return this.rental;
  }
}
