import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReggaePage } from './reggae';

@NgModule({
  declarations: [
    ReggaePage,
  ],
  imports: [
    IonicPageModule.forChild(ReggaePage),
  ],
})
export class ReggaePageModule {}
