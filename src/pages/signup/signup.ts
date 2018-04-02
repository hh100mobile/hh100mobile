import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { SettingsService } from '../../services/settings';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, private authService: AuthService, private settingsService: SettingsService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  onSignUp(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up'
    });
    loading.present();
    this.authService.signUp(form.value.email, form.value.password)
      .then(data => {
        this.settingsService.setNewSettings();
        loading.dismiss();
        this.navCtrl.popToRoot();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Sign Up Failed',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
      });
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
