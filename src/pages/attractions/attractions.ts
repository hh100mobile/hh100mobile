import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { VendorsPage } from '../vendors/vendors';
import { ShoppingPage } from '../shopping/shopping';
import { RestaurantsPage } from '../restaurants/restaurants';
import { EntertainmentPage } from '../entertainment/entertainment';

@IonicPage()
@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html',
})
export class AttractionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
    onGoToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  onGoToVendors() {
    this.navCtrl.push(VendorsPage);
  }

  onGoToShopping() {
    this.navCtrl.push(ShoppingPage);
  }

  onGoToRestaurants() {
    this.navCtrl.push(RestaurantsPage);
  }
  
  onGoToEntertainment(){
	  this.navCtrl.push(EntertainmentPage);
  }


}
