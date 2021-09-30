import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/Customer';
import { rental } from 'src/app/models/rental';
import { CarDetailByIdService } from 'src/app/services/car-detail-by-id.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {

  kiralamaTarihi: Date;
  teslimTarihi: Date;
  selectedCustomerId: number;
  customers: Customer[] = [];
  carDetails: Car[] = [];
  rentDate:Date;
  returnDate:Date;



  constructor(
    private customerService: CustomerService,
    private carDetailById: CarDetailByIdService,
    private activatedRoute: ActivatedRoute,
    private rentalService:RentalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getRentalById(params['id']);
    });
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getRentalById(id: number) {
    this.carDetailById.getCarDetailById(id).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  rentalCar(rentalcar:rental){
    this.rentalService.addRental(rentalcar);
  }



}
