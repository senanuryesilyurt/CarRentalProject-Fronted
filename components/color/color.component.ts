import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { colour } from 'src/app/models/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colours:colour[]=[];
  currentColor:colour;
  selectColorControl:FormGroup;

  constructor(private colourService:ColourService) { }

  ngOnInit(): void {
    this.getColors();

  }

  getColors() {
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data;
    })
  }
  setCurrentColor(color:colour){
    this.currentColor=color;
  }
  getCurrentColorClass(color:colour){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
