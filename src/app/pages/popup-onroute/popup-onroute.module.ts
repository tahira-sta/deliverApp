import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupOnroutePageRoutingModule } from './popup-onroute-routing.module';

import { PopupOnroutePage } from './popup-onroute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupOnroutePageRoutingModule
  ],
  declarations: [PopupOnroutePage]
})
export class PopupOnroutePageModule {}
