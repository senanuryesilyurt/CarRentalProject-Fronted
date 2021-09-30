import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44389/api/customers/getall'
  constructor(private httpClient:HttpClient,private ts:ToastrService) { }

  getCustomers():Observable<listResponseModel<Customer>>{
    return this.httpClient.get<listResponseModel<Customer>>(this.apiUrl);

  }
  }
