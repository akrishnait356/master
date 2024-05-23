import { Component, OnInit } from '@angular/core';
import { Step2OptionSettings } from '../models/Step2OptionSettings';
import { Step2Config } from '../models/Step2Config';
import { SelectedTeslaCar } from '../models/SelectedTeslaCar';
import { TeslaDetailsService } from '../services/tesla-details.service';
import { DataShareService } from '../services/data-share.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit{

  step2OptionSettings?: Step2OptionSettings;

  step2Config?:Step2Config;
  towHitchChecked:boolean=false;
  yokeChecked:boolean=false;

  selectedTeslaCar:SelectedTeslaCar=new SelectedTeslaCar();

  constructor(private teslaDetailsService:TeslaDetailsService,private dataShareService: DataShareService){}

  ngOnInit()
  {
    this.dataShareService.SelectedCarObservable.subscribe(
      (selectedTeslaCar:SelectedTeslaCar) =>
      {
        this.selectedTeslaCar=selectedTeslaCar;
        this.teslaDetailsService.getCarOptions(this.selectedTeslaCar.model?.code!).subscribe(
          (step2OptionSettings:Step2OptionSettings) => 
          {
            this.step2OptionSettings=step2OptionSettings;
            this.step2Config=this.step2OptionSettings?.configs.find(x=> x.id==this.selectedTeslaCar.config?.id);
            this.yokeChecked=this.selectedTeslaCar.yoke;
            this.towHitchChecked=this.selectedTeslaCar.tow;
          }
        );
      } 
    );
  }

  onSelectConfigChange(){
     this.selectedTeslaCar.config=this.step2Config;
     this.dataShareService.SelectedCar(this.selectedTeslaCar);
  }

  onTowHitchChange(){
    this.selectedTeslaCar.tow=this.towHitchChecked;
    this.dataShareService.SelectedCar(this.selectedTeslaCar);
  }

  onYokeChange(){
    this.selectedTeslaCar.yoke=this.yokeChecked;
    this.dataShareService.SelectedCar(this.selectedTeslaCar);
  }
  
}
