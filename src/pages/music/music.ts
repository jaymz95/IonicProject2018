import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  //outputs the viseos by bypassing the restriction on embedding videos
    pop: any[] = [
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
    console.log('ionViewDidLoad MusicPage');
    this.storage.get("myPop").then((data) => {
    if(data == "true"){

    }
    
    console.log(data);
  });
  }

}
