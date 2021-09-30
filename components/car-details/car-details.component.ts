import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailByIdService } from 'src/app/services/car-detail-by-id.service';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {

  show=false;
  hideButton=true;
  carDetails:Car[]=[];
  rentalStatus:boolean=false;

  constructor(
    private carDetailById: CarDetailByIdService,
    private activatedRoute: ActivatedRoute,
    private ts:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarsById(params["id"])
    })

  }

  getCarsById(id:number){
    this.carDetailById.getCarDetailById(id).subscribe(response=>{
      this.carDetails=response.data;
    })
  }

  getShow(){
    this.hideButton=false;
    this.rentalStatus=true;

  }

}
