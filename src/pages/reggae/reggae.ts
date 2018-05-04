import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReggaePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reggae',
  templateUrl: 'reggae.html',
})
export class ReggaePage {

  reggae: any[] = [
    {
      title: 'Rihanna',
      video: 'https://www.youtube.com/embed/sEhy-RXkNo0',
    },
    {
      title: 'Bob Marley',
      video: 'https://www.youtube.com/embed/Mm7muPjevik',
    },
    {
      title: 'Konshens',
      video: 'https://www.youtube.com/embed/EqDwdT0_DrA',
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReggaePage');
  }

}
