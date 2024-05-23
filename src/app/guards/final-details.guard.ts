import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataShareService } from '../services/data-share.service';
import { SelectedTeslaCar } from '../models/SelectedTeslaCar';

export function finalDetailsGuard(): CanActivateFn {
  return () => {
  let router = inject(Router);
  let dataShareService = inject(DataShareService);
  var isActive:boolean =false;
  dataShareService.SelectedCarObservable.subscribe((selectedTeslaCar : SelectedTeslaCar)=> isActive= !selectedTeslaCar.isSelectedConfiguration());
//   console.log(isActive);
  if (!isActive){
    router.navigateByUrl('/Step2');
  }
  return isActive;
  };
}
