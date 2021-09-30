import { Component, OnInit } from '@angular/core';
import { colour } from 'src/app/models/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  colours:colour[]=[];
  constructor(private colourService:ColourService) { }

  ngOnInit(): void {
    this.getColors();
  }


  getColors() {
    this.colourService.getColours().subscribe(response=>{
      this.colours=response.data;
    })
  }

}
