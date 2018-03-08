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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    MapPage,
    AttractionsPage,
    SettingsPage

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
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
