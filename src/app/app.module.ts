import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { S1 } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import { ModuleListPage } from '../pages/module-list/module-list';
import { PackageListPage } from '../pages/package-list/package-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    S1,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    ModuleListPage,
    PackageListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(S1),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    S1,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    ModuleListPage,
    PackageListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
