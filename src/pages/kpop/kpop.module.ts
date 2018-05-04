import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KpopPage } from './kpop';

@NgModule({
  declarations: [
    KpopPage,
  ],
  imports: [
    IonicPageModule.forChild(KpopPage),
  ],
})
export class KpopPageModule {}
