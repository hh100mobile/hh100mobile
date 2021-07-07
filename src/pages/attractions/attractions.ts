import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendorsPage } from '../vendors/vendors';
import { ShoppingPage } from '../shopping/shopping';
import { RestaurantsPage } from '../restaurants/restaurants';
import { EntertainmentPage } from '../entertainment/entertainment';
import { HotelsPage } from '../hotels/hotels';

@IonicPage()
@Component({
  selector: 'page-attractions',
  templateUrl: 'attractions.html',
})
export class AttractionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToVendors() {
    this.navCtrl.push(VendorsPage);
  }
  
  onGoToHotels() {
	  this.navCtrl.push(HotelsPage);
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
