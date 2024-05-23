import { Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { step2ConfigsGuard } from './guards/step2-configs.guard';
import { finalDetailsGuard } from './guards/final-details.guard';

export const routes: Routes = [
    {path: 'Step1' , component: Step1Component},
    {path: 'Step2' , component: Step2Component, canActivate : [step2ConfigsGuard()]},
    {path: 'Step3' , component: Step3Component, canActivate : [finalDetailsGuard()]},
    {path: '' , component: Step1Component},
    {path: '**', component: Step1Component}
];
