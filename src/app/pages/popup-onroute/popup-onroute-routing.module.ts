import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupOnroutePage } from './popup-onroute.page';

const routes: Routes = [
  {
    path: '',
    component: PopupOnroutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupOnroutePageRoutingModule {}
