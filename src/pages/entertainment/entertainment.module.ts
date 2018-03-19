import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntertainmentPage } from './entertainment';

@NgModule({
  declarations: [
    EntertainmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EntertainmentPage),
  ],
})
export class EntertainmentPageModule {}
