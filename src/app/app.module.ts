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
import { SettingsLocationPage } from '../pages/settings-location/settings-location';
import { SettingsNumberPage } from '../pages/settings-number/settings-number';
import { SettingsRoutePage } from '../pages/settings-route/settings-route';

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
    SettingsLocationPage,
    SettingsNumberPage,
    SettingsRoutePage
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
    SettingsLocationPage,
    SettingsNumberPage,
    SettingsRoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
