import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {

  cars:Car[]=[];
  brands: brand[] = [];
  currentBrand: brand;
  selectBrandForm: FormGroup;
  selectedbrand:string;

  constructor(
    private brandService: BrandService,
    private formsBuilder: FormBuilder,
    private carService:CarService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getSelectedBrand();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getSelectedBrand(){
    this.selectBrandForm=this.formsBuilder.group({
        brandId:['',Validators.required],
        brandName:['',Validators.required]
    });
  }

  setCurrentBrand(brand: brand) {
    this.currentBrand = brand;
  }
  getCurrentBrandClass(brand: brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

}
