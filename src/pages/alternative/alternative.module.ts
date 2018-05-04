import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlternativePage } from './alternative';

@NgModule({
  declarations: [
    AlternativePage,
  ],
  imports: [
    IonicPageModule.forChild(AlternativePage),
  ],
})
export class AlternativePageModule {}
