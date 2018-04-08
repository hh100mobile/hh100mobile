import { Component } from '@angular/core';
import { ViewController, NavController, LoadingController, AlertController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';
import {FormGroup, NgForm} from '@angular/forms';
import { AuthService } from '../../services/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-settings-route',
  templateUrl: 'settings-route.html',
})
export class SettingsRoutePage {
  form = {};
  routes = [];


  constructor(private viewCtrl: ViewController, private navCtrl: NavController, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController, private settingsService: SettingsService,
              private authService: AuthService){
    this.getRoutes();
  }

  ionViewWillEnter() {
    this.form.route = this.settingsService.getRoute();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit(form) {
    console.log(form);
    // const loading = this.loadingCtrl.create({
    //   content: 'Saving'
    // });
    // loading.present();
    // this.route = form.value.route;
    // this.settingsService.setRoute(this.route);
    // this.authService.getActiveUser().getIdToken()
    //   .then(
    //     (token: string) => {
    //       this.settingsService.storeSettings(token)
    //         .subscribe(
    //           () => {
    //             loading.dismiss();
    //             this.dismiss();
    //           },
    //           error => {
    //             loading.dismiss();
    //             this.handleError(error.json().error);
    //           }
    //         )
    //     }
    //   );
  }

  //create a list of routes to display
  private getRoutes() {
    const routeRef: firebase.database.Reference = firebase.database().ref(`/settings/routes/`);
    routeRef.on('value', routeSnapshot => {
      routeSnapshot.forEach( itemSnap => {
        this.routes.push(itemSnap.val());
      });
      this.routes.sort().reverse();
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
