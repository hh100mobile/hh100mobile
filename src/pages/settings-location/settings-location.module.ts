import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsLocationPage } from './settings-location';

@NgModule({
  declarations: [
    SettingsLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsLocationPage),
  ],
})
export class SettingsLocationPageModule {}
