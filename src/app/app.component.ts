import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectedTeslaCar } from './models/SelectedTeslaCar';
import { DataShareService } from './services/data-share.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
    
})
export class AppComponent implements OnInit{

  isStep2Disabled: boolean =true;
  isStep3Disabled: boolean =true;

  imgUrl?:string;

  selectedTeslaCar:SelectedTeslaCar=new SelectedTeslaCar();

  constructor(private dataShareService:DataShareService){}

  ngOnInit() {
    this.dataShareService.SelectedCarObservable.subscribe(
      (selectedTeslaCar:SelectedTeslaCar) => 
      { 
        this.selectedTeslaCar=selectedTeslaCar;
        this.isStep2Disabled = this.selectedTeslaCar.isSelectedModelAndColor();
        this.isStep3Disabled = this.selectedTeslaCar.isSelectedConfiguration();
        this.imgUrl="assets/images/"+this.selectedTeslaCar.model?.code+"/"+this.selectedTeslaCar.color?.code+".jpg";
      }
    ); 
  }
  
}