import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { colour } from 'src/app/models/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  filterText = "";
  colors: colour[];
  brands: brand[];
  currentBrandName: string;
  currentColorName: string;

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColourService,
    private ts: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colourId']) {
        this.getCarsByColor(params['colourId']);
      }
      else {
        this.getCars();
      }
    });
    this.getBrands();
    this.getColors();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColor(colourId: number) {
    this.carService.getCarsByColor(colourId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColours().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentBrand(brandId: string) {
    return brandId === this.currentBrandName ? this.currentBrandName : false;
  }
  setCurrentColor(colorId: string) {
    return colorId === this.currentColorName ? this.currentColorName : false;
  }

  getFilter(currentBrandId,currentColorName){
    this.carService.getCarsByFilter(currentBrandId,currentColorName).subscribe((response)=>{
      this.cars=response.data;
      this.ts.success(response.message);
    })
  }
  ClearFilter(){
    this.currentBrandName="";
    this.currentColorName="";
    this.getCars();
  }

}
