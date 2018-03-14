import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { MapPage } from '../map/map';
import { AttractionsPage } from '../attractions/attractions';
import { SettingsPage } from '../settings/settings';
import { AuthService } from '../../services/auth';
import { FollowriderPage } from '../followrider/followrider';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAuthenticated = false;

  constructor(public navCtrl: NavController, private authService: AuthService) {}

  ionViewWillEnter() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  onGoToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  onGoToMap() {
    this.navCtrl.push(MapPage);
  }

  onGoToFollowRider() {
    this.navCtrl.push(FollowriderPage)
  }

  onGoToSchedule() {
    this.navCtrl.push(SchedulePage);
  }

  onGoToAttractions() {
    this.navCtrl.push(AttractionsPage);
  }

}
