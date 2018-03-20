import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
   onGoToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
  }

}
