import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { brand } from '../models/brand';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl='https://localhost:44389/api/';
  constructor(private httpClient:HttpClient,private ts:ToastrService) { }

  getBrands():Observable<listResponseModel<brand>>{
    let path=this.apiUrl+'brands/getall'
    return this.httpClient.get<listResponseModel<brand>>(path);
  }

}
