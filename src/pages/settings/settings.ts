import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../services/auth';
import firebase from 'firebase';
import { ModalController } from 'ionic-angular';
import { SettingsNumberPage } from '../settings-number/settings-number';
import { SettingsRoutePage } from '../settings-route/settings-route';
import { SettingsLocationPage } from '../settings-location/settings-location';
import { Settings } from '../../models/settings';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  isAuthenticated = false;
  settings = new Settings(null, null, null);

  constructor(public navCtrl: NavController, private authService: AuthService, private modalCtrl: ModalController, private settingsService: SettingsService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewCanEnter() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    if (this.isAuthenticated == true) {
      this.getNumber();
      this.getRoute();
      this.getAllowLocation();
    }
  }

  changeRiderNumber() {
    let modal = this.modalCtrl.create(SettingsNumberPage);
    modal.present();
  }

  changeRoute() {
    let modal = this.modalCtrl.create(SettingsRoutePage);
    modal.present();
  }

  changeLocation() {
    let modal = this.modalCtrl.create(SettingsLocationPage);
    modal.present();
  }

  onGoToSignUp() {
    this.navCtrl.push(SignupPage)
  }

  onGoToSignIn() {
    this.navCtrl.push(SigninPage)
  }

  onSignOut() {
    this.authService.signOut();
    this.navCtrl.popToRoot();
  }

  private getNumber() {
    const numberRef: firebase.database.Reference = firebase.database().ref(`/users/` + this.authService.getActiveUser().uid + `/settings/num/`);
    numberRef.on('value', numberSnapshot => {
      this.settings.num = numberSnapshot.val();
      this.settingsService.setNumber(this.settings.num);
    });
  }

  private getRoute() {
    const routeRef: firebase.database.Reference = firebase.database().ref(`/users/` + this.authService.getActiveUser().uid + `/settings/route/`);
    routeRef.on('value', routeSnapshot => {
      this.settings.route = routeSnapshot.val();
      this.settingsService.setRoute(this.settings.route);
    });
  }

  private getAllowLocation() {
    const locationRef: firebase.database.Reference = firebase.database().ref(`/users/` + this.authService.getActiveUser().uid + `/settings/location/`);
    locationRef.on('value', locationSnapshot => {
      this.settings.location = locationSnapshot.val();
      this.settingsService.setAllowLocation(this.settings.location);
    });
  }

}
