import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataShareService } from '../services/data-share.service';
import { SelectedTeslaCar } from '../models/SelectedTeslaCar';

export function step2ConfigsGuard(): CanActivateFn {
  return () => {
  let router = inject(Router);
  let commonService = inject(DataShareService);
  var isActive:boolean =false;
  commonService.SelectedCarObservable.subscribe((selectedTeslaCar : SelectedTeslaCar)=> isActive= !selectedTeslaCar.isSelectedModelAndColor());
  // console.log(isActive);
  if (!isActive){
    router.navigateByUrl('/Step1');
  }
  return isActive;
  };
}
