import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-my-loads',
  templateUrl: './my-loads.page.html',
  styleUrls: ['./my-loads.page.scss'],
})
export class MyLoadsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  home() {
    this.navCtrl.navigateForward(['tabs'])
  }

}
