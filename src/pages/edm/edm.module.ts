import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdmPage } from './edm';

@NgModule({
  declarations: [
    EdmPage,
  ],
  imports: [
    IonicPageModule.forChild(EdmPage),
  ],
})
export class EdmPageModule {}
