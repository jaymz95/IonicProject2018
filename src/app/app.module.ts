import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MusicPage } from '../pages/music/music';
import { ReggaePage } from '../pages/reggae/reggae';
import { RockPage } from '../pages/rock/rock';
import { CountryPage } from '../pages/country/country';
import { EdmPage } from '../pages/edm/edm';
import { AlternativePage } from '../pages/alternative/alternative';
import { SoulPage } from '../pages/soul/soul';
import { RapPage } from '../pages/rap/rap';
import { KpopPage } from '../pages/kpop/kpop';
import { YoutubePipe } from '../pipes/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MusicPage,
    ReggaePage,
    RockPage,
    CountryPage,
    EdmPage,
    AlternativePage,
    SoulPage,
    RapPage,
    KpopPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MusicPage,
    ReggaePage,
    RockPage,
    CountryPage,
    EdmPage,
    AlternativePage,
    SoulPage,
    RapPage,
    KpopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
