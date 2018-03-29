import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { MapPage } from '../map/map';
import { AttractionsPage } from '../attractions/attractions';
import { SettingsPage } from '../settings/settings';
import { AuthService } from '../../services/auth';
import { FollowriderPage } from '../followrider/followrider';
import firebase from 'firebase';
import {database} from 'firebase/database';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAuthenticated = false;
  temperature: string;
  wind_dir: string;
  wind_speed:string;

  constructor(public navCtrl: NavController, private authService: AuthService) {

    this.getTemperature();
    this.getWind_Dir();
    this.getWind_Speed();

  }

  ionViewWillEnter() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  onIsAuthenticated() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return this.isAuthenticated;
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


  private getTemperature() {
    const weatherRef: firebase.database.Reference = firebase.database().ref(`/weather/temperature/`);
    weatherRef.on('value', weatherSnapshot => {
      this.temperature= weatherSnapshot.val();
    });
  }
  private getWind_Dir() {
    const weatherRef: firebase.database.Reference = firebase.database().ref(`/weather/wind-direction/`);
    weatherRef.on('value', weatherSnapshot => {
      this.wind_dir= weatherSnapshot.val();
    });
  }
  private getWind_Speed() {
    const weatherRef: firebase.database.Reference = firebase.database().ref(`/weather/wind-speed/`);
    weatherRef.on('value', weatherSnapshot => {
      this.wind_speed= weatherSnapshot.val();
    });
  }
}

