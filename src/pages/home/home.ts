import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { MusicPage } from '../music/music';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  lat: any;
  lng: any;
  watch:any;

  constructor(public navCtrl: NavController, public geo: Geolocation, public storage: Storage) {

  }

  saveGenre(){
    var element = <HTMLInputElement> document.getElementById("Rap");
    if(element.checked){
      //this.navCtrl.pop();

      this.storage.set("myRap", "true");

      this.storage.get("myRap").then((data) => {
        if(data == "true"){
          console.log("YASS!!");
        }
        
        console.log(data);
      });
      
      
    }
    
    this.navCtrl.push(MusicPage);
    
  }

  ionViewDidLoad(){
    
    this.geo.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch( err => console.log(err));
  }


  /*
  watch = this.geo.watchPosition();

  watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
  });*/

}
