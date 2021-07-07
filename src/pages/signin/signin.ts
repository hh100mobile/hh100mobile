import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  onSignIn(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in',
    });
    loading.present();
    this.authService.signIn(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        this.navCtrl.popToRoot();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Sign in failed',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
      });
  }
}
