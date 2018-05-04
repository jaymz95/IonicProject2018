import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CountryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {

  country: any[] = [
    {
      title: 'Kacey Musgraves',
      video: 'https://www.youtube.com/embed/BM5Xa1FvNQQ',
    },
    {
      title: 'Carrie Underwood',
      video: 'https://www.youtube.com/embed/WaSy8yy-mr8',
    },
    {
      title: 'Taylor Swift',
      video: 'https://www.youtube.com/embed/8xg3vE8Ie_E',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryPage');
  }

}
