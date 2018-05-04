import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edm',
  templateUrl: 'edm.html',
})
export class EdmPage {

  edm: any[] = [
    {
      title: 'Avicii',
      video: 'https://www.youtube.com/embed/6Cp6mKbRTQY',
    },
    {
      title: 'Swedish House Mafia',
      video: 'https://www.youtube.com/embed/1y6smkh6c-0',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdmPage');
  }

}
