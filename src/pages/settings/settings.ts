import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../services/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  isAuthenticated = false;

  constructor(public navCtrl: NavController, private authService: AuthService) {}

  ionViewWillEnter() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
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
