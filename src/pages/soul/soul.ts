import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SoulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soul',
  templateUrl: 'soul.html',
})
export class SoulPage {

  soul: any[] = [
    {
      title: 'The Weeknd',
      video: 'https://www.youtube.com/embed/M4ZoCHID9GI',
    },
    {
      title: 'H.E.R.',
      video: 'https://www.youtube.com/embed/WtCREZoiSQQ',
    },
    {
      title: 'SZA',
      video: 'https://www.youtube.com/embed/0Exxu8lsGYE',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoulPage');
  }

}
