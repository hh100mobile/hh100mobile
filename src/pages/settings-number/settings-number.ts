import { Component } from '@angular/core';
import { ViewController, LoadingController, AlertController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-settings-number',
  templateUrl: 'settings-number.html',
})
export class SettingsNumberPage {
  num: number;

  constructor(private viewCtrl: ViewController, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private settingsService: SettingsService, private authService: AuthService) {
  }

  ionViewWillEnter() {
    this.num = this.settingsService.getNumber();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Saving'
    });
    loading.present();
    this.num = form.value.riderNumber;
    this.settingsService.setNumber(this.num);
    this.authService.getActiveUser().getIdToken()
      .then(
        (token: string) => {
          this.settingsService.storeSettings(token)
            .subscribe(
              () => {
                loading.dismiss();
                this.dismiss();
              },
              error => {
                loading.dismiss();
                this.handleError(error.json().error);
              }
            )
        }
      );
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
