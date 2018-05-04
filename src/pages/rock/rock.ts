import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rock',
  templateUrl: 'rock.html',
})
export class RockPage {

  rock: any[] = [
    {
      title: 'Twenty One Pilots',
      video: 'https://www.youtube.com/embed/UprcpdwuwCg',
    },
    {
      title: 'The Cranberries',
      video: 'https://www.youtube.com/embed/6Ejga4kJUts',
    },
    {
      title: 'Imagine Dragons',
      video: 'https://www.youtube.com/embed/mWRsgZuwf_8',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RockPage');
  }

}
