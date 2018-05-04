import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RapPage } from './rap';

@NgModule({
  declarations: [
    RapPage,
  ],
  imports: [
    IonicPageModule.forChild(RapPage),
  ],
})
export class RapPageModule {}
