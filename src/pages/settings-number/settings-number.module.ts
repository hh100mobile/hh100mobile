import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsNumberPage } from './settings-number';

@NgModule({
  declarations: [
    SettingsNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsNumberPage),
  ],
})
export class SettingsNumberPageModule {}
