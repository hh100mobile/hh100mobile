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

  constructor(public navCtrl: NavController, private authService: AuthService, private modalCtrl: ModalController, private settingsService: SettingsService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  ionViewCanEnter() {
    if (this.authService.getActiveUser()) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    if (this.isAuthenticated == true) {
      const loading = this.loadingCtrl.create({
        content: 'Loading'
      });
      loading.present();
      this.authService.getActiveUser().getIdToken()
          .then(
            (token: string) => {
              this.settingsService.fetchSettings(token)
                .subscribe(
                  (s: Settings) => {
                    this.settings = s;
                    console.log(this.settings);
                    loading.dismiss();
                  },
                  error => {
                    loading.dismiss();
                    this.handleError(error.json().error);
                  }
                )
            }
          );
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

  private handleError(errorMessage: string) {
    const alert = this.alertCtrl.create({
      title: 'An error occured!',
      message: errorMessage,
      buttons: ['Ok']
    });
    alert.present();
  }

}
