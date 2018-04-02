import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-settings-number',
  templateUrl: 'settings-number.html',
})
export class SettingsNumberPage {
  num: number;

  constructor(private viewCtrl: ViewController, private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.num = this.settingsService.getNumber();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
