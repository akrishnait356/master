import { Component, OnInit } from '@angular/core';
import { SelectedTeslaCar } from '../models/SelectedTeslaCar';
import { DataShareService } from '../services/data-share.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component implements OnInit{

  selectedTeslaCar:SelectedTeslaCar=new SelectedTeslaCar();

  constructor(private dataShareService: DataShareService){}

  ngOnInit()
  {
    this.dataShareService.SelectedCarObservable.subscribe(selectedTeslaCar => this.selectedTeslaCar=selectedTeslaCar); 
  }
}
