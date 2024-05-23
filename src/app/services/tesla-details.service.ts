import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Step1ModelSettings } from '../models/Step1ModelSettings';
import { Observable } from 'rxjs';
import { Step2OptionSettings } from '../models/Step2OptionSettings';

@Injectable({
  providedIn: 'root'
})
export class TeslaDetailsService {

  constructor(private http:HttpClient) { }

  getCarModels():Observable<Array<Step1ModelSettings>>
  {
    return this.http.get<Array<Step1ModelSettings>>('/models');
  }
  
  getCarOptions(id: string):Observable<Step2OptionSettings>
  {
    return this.http.get<Step2OptionSettings>(`/options/${id}`);
  }
}
