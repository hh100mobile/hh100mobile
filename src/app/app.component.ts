import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      //nash firebase
      //apiKey: "AIzaSyDmoyHBk0bekmSUqW4qL9G7x2Gh9CvlA6w",
      //authDomain: "hh100mobile-21dce.firebaseapp.com",

      //coty firebase
      // apiKey: "AIzaSyDhQk9JWDz-RiT45tlKkzCTbkN5H8YU-FM",
      // authDomain: "hh100-a8856.firebaseapp.com",

      //hh100 firebase
      apiKey: "AIzaSyB5fBejTe-iUZkGAQTkpjS3tG0d1N9-QSs",
      authDomain: "hh100-98a6c.firebaseapp.com",


    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

