import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AlternativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alternative',
  templateUrl: 'alternative.html',
})
export class AlternativePage {

  alternative: any[] = [
    {
      title: 'Britney Spears',
      video: 'https://www.youtube.com/embed/QuFTCirwmoM?start=55',
    },
    {
      title: 'Katy Perry',
      video: 'https://www.youtube.com/embed/EUo4pe5eMbY',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlternativePage');
  }

}
