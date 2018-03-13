import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { MapPage } from '../map/map';
import { AttractionsPage } from '../attractions/attractions';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  onGoToMap() {
    this.navCtrl.push(MapPage);
  }

  onGoToSchedule() {
    this.navCtrl.push(SchedulePage);
  }

  onGoToAttractions() {
    this.navCtrl.push(AttractionsPage);
  }

}
