import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectedTeslaCar } from '../models/SelectedTeslaCar';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private SelectedCarBehavior = new BehaviorSubject<SelectedTeslaCar>(new SelectedTeslaCar());
  SelectedCarObservable:Observable<SelectedTeslaCar> = this.SelectedCarBehavior.asObservable();

  SelectedCar(SelectedCar: SelectedTeslaCar){
    this.SelectedCarBehavior.next(SelectedCar);
  }
}
