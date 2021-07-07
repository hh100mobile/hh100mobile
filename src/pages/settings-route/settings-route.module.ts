import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsRoutePage } from './settings-route';

@NgModule({
  declarations: [
    SettingsRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsRoutePage),
  ],
})
export class SettingsRoutePageModule {}
