import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorsPage } from './vendors';

@NgModule({
  declarations: [
    VendorsPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorsPage),
  ],
})
export class VendorsPageModule {}
