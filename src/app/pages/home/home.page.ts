import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopupOnroutePage } from '../popup-onroute/popup-onroute.page';
import { ApiPopperService } from 'src/app/service/api-popper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api: ApiPopperService, private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showPopper() {
    const popover = await this.popoverController.create({
      component: PopupOnroutePage,
      componentProps: {},
      cssClass: "subhome popover",
      mode: "md"
    });
    popover.present();
  }
}
