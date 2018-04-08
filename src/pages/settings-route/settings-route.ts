import { Component } from '@angular/core';
import { ViewController, LoadingController, AlertController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';
import { AuthService } from '../../services/auth';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-settings-route',
  templateUrl: 'settings-route.html',
})
export class SettingsRoutePage {
  route: string;
  routes;
  routesForm;

  constructor(private viewCtrl: ViewController, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private settingsService: SettingsService, private authService: AuthService){
    this.routesForm = new FormGroup({
      "routes": new FormControl()
    });
  }

  ionViewWillEnter() {
    this.route = this.settingsService.getRoute();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    console.log(this.routesForm.value.routes);
    this.route = this.routesForm.value.routes;
    const loading = this.loadingCtrl.create({
      content: 'Saving'
    });
    loading.present();
    this.settingsService.setRoute(this.route);
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