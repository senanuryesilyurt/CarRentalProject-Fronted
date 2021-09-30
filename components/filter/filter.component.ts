import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { colour } from 'src/app/models/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  colors: colour[];
  brands: brand[];
  cars:Car[];
  currentBrandId: string;
  currentColorId: string;

  constructor(
    private brandService: BrandService,
    private colorService: ColourService,
    private ts: ToastrService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
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



}
