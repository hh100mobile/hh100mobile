import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SchedulePage } from '../pages/schedule/schedule';
import { MapPage } from '../pages/map/map';
import { AttractionsPage } from '../pages/attractions/attractions';
import { SettingsPage } from '../pages/settings/settings';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth';
import { FollowriderPage } from '../pages/followrider/followrider';
<<<<<<< HEAD
import { ShoppingPage } from '../pages/shopping/shopping';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { VendorsPage } from '../pages/vendors/vendors';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
=======
import { SettingsLocationPage } from '../pages/settings-location/settings-location';
import { SettingsNumberPage } from '../pages/settings-number/settings-number';
import { SettingsRoutePage } from '../pages/settings-route/settings-route';
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    MapPage,
    AttractionsPage,
    SettingsPage,
    SigninPage,
    SignupPage,
    FollowriderPage,
<<<<<<< HEAD
	ShoppingPage,
	EntertainmentPage,
	VendorsPage,
	RestaurantsPage
=======
    SettingsLocationPage,
    SettingsNumberPage,
    SettingsRoutePage
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    MapPage,
    AttractionsPage,
    SettingsPage,
    SigninPage,
    SignupPage,
    FollowriderPage,
<<<<<<< HEAD
	ShoppingPage,
	EntertainmentPage,
	VendorsPage,
	RestaurantsPage
=======
    SettingsLocationPage,
    SettingsNumberPage,
    SettingsRoutePage
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
