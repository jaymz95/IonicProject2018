import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the KpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kpop',
  templateUrl: 'kpop.html',
})
export class KpopPage {

  kpop: any[] = [
    {
      title: '2NE1',
      video: 'https://www.youtube.com/embed/j7_lSP8Vc3o',
    },
    {
      title: 'PSY',
      video: 'https://www.youtube.com/embed/9bZkp7q19f0',
    },
    {
      title: 'BTS',
      video: 'https://www.youtube.com/embed/MBdVXkSdhwU',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KpopPage');
  }

}
