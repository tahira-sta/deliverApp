import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLoadsPage } from './my-loads.page';

const routes: Routes = [
  {
    path: '',
    component: MyLoadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLoadsPageRoutingModule {}
