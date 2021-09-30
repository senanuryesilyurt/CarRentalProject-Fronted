import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colour } from '../models/colour';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl='https://localhost:44389/api/';
  constructor(private httpClient:HttpClient) { }

  getColours():Observable<listResponseModel<colour>>{
    let path=this.apiUrl+"colours/getall";
    return this.httpClient.get<listResponseModel<colour>>(path);
  }

  getCarsByColorId(id:number):Observable<listResponseModel<colour>>{
    let path=this.apiUrl+'cars/getbycolourid?id='+id;
    return this.httpClient.get<listResponseModel<colour>>(path);
  }


}
