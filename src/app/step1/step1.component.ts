import { Component, OnInit } from '@angular/core';
import { Step1ModelSettings } from '../models/Step1ModelSettings';
import { Step1Color } from '../models/Step1Color';
import { SelectedTeslaCar } from '../models/SelectedTeslaCar';
import { FormsModule } from '@angular/forms';
import { TeslaDetailsService } from '../services/tesla-details.service';
import { DataShareService } from '../services/data-share.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit {
  
  carModels: Array<Step1ModelSettings> =[];

  step1ModelSettings?:Step1ModelSettings;
  step1Color?:Step1Color;

  selectedTeslaCar:SelectedTeslaCar=new SelectedTeslaCar();

  constructor(private teslaDetailsService:TeslaDetailsService, private dataShareService:DataShareService){}
 
  ngOnInit(){
    this.dataShareService.SelectedCarObservable.subscribe(
      (selectedTeslaCar:SelectedTeslaCar) =>
      { 
        this.selectedTeslaCar=selectedTeslaCar;
        this.teslaDetailsService.getCarModels().subscribe(
          data =>
          {
            this.carModels=data;
            this.step1ModelSettings=this.carModels.find(x=> x.code == this.selectedTeslaCar.model?.code);
            this.step1Color=this.step1ModelSettings?.colors.find(x=>x.code == this.selectedTeslaCar.color?.code); 
          }
        );
      }
    );
  }

  onSelectColorChange(){
    this.selectedTeslaCar.color=this.step1Color;
    this.dataShareService.SelectedCar(this.selectedTeslaCar);
  }

  onSelectModelChange(){
    this.step1Color=undefined;
    this.selectedTeslaCar=new SelectedTeslaCar();
    this.selectedTeslaCar.model=this.step1ModelSettings;
    this.dataShareService.SelectedCar(this.selectedTeslaCar);
  }
}