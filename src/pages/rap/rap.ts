import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rap',
  templateUrl: 'rap.html',
})
export class RapPage {

  rap: any[] = [
    {
      title: 'Nicki Minaj',
      video: 'https://www.youtube.com/embed/Wpm07-BGJnE',
    },
    {
      title: 'Cardi B',
      video: 'https://www.youtube.com/embed/PEGccV-NOm8',
    },
    {
      title: 'Kendrick Lamar',
      video: 'https://www.youtube.com/embed/tvTRZJ-4EyI',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RapPage');
  }

}
