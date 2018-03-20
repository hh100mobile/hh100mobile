import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../services/auth';
import firebase from 'firebase';
import { ModalController } from 'ionic-angular';
import { SettingsNumberPage } from '../settings-number/settings-number';
import { SettingsRoutePage } from '../settings-route/settings-route';
import { SettingsLocationPage } from '../settings-location/settings-location';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  isAuthenticated = false;

  constructor(public navCtrl: NavController, private authService: AuthService, private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
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

}
