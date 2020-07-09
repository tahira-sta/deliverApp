import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLoadsPageRoutingModule } from './my-loads-routing.module';

import { MyLoadsPage } from './my-loads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLoadsPageRoutingModule
  ],
  declarations: [MyLoadsPage]
})
export class MyLoadsPageModule {}
