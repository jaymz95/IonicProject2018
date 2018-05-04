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
      title: 'MARINA AND THE DIAMONDS',
      video: 'https://www.youtube.com/embed/oiRjvejL5D4',
    },
    {
      title: 'Lana Del Rey',
      video: 'https://www.youtube.com/embed/Bag1gUxuU0g',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlternativePage');
  }

}
