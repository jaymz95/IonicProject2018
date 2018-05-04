import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { MusicPage } from '../music/music';
import { ReggaePage } from '../reggae/reggae';
import { RockPage } from '../rock/rock';
import { CountryPage } from '../country/country';
import { EdmPage } from '../edm/edm';
import { AlternativePage } from '../alternative/alternative';
import { SoulPage } from '../soul/soul';
import { RapPage } from '../rap/rap';
import { KpopPage } from '../kpop/kpop';

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
    var radioPop = <HTMLInputElement> document.getElementById("Pop");
    if(radioPop.checked){
      //this.navCtrl.pop();

      this.storage.set("myPop", "true");

      /*this.storage.get("myPop").then((data) => {
        if(data == "true"){
          console.log("YASS!!");
        }
        
        console.log(data);
      });*/
      
      this.navCtrl.push(MusicPage);
    }

    var radioReggae = <HTMLInputElement> document.getElementById("Reggae");
    if(radioReggae.checked){
      this.storage.set("myReggae", "true");
      this.navCtrl.push(ReggaePage);
    }

    var radioRock = <HTMLInputElement> document.getElementById("Rock");
    if(radioRock.checked){
      this.storage.set("myRock", "true");
      this.navCtrl.push(RockPage);
    }

    var radioCountry = <HTMLInputElement> document.getElementById("Country");
    if(radioCountry.checked){
      this.storage.set("myCountry", "true");
      this.navCtrl.push(CountryPage);
    }

    var radioEdm = <HTMLInputElement> document.getElementById("Edm");
    if(radioEdm.checked){
      this.storage.set("myEdm", "true");
      this.navCtrl.push(EdmPage);
    }

    var radioAlternative = <HTMLInputElement> document.getElementById("Alternative");
    if(radioAlternative.checked){
      this.storage.set("myAlternative", "true");
      this.navCtrl.push(AlternativePage);
    }

    var radioSoul = <HTMLInputElement> document.getElementById("Soul");
    if(radioSoul.checked){
      this.storage.set("mySoul", "true");
      this.navCtrl.push(SoulPage);
    }

    var radioRap = <HTMLInputElement> document.getElementById("Rap");
    if(radioRap.checked){
      this.storage.set("myRap", "true");
      this.navCtrl.push(RapPage);
    }

    var radioKpop = <HTMLInputElement> document.getElementById("Kpop");
    if(radioKpop.checked){
      this.storage.set("myKpop", "true");
      this.navCtrl.push(KpopPage);
    }

    
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
