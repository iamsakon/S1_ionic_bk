import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  openSignUpPage() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(SignUpPage);
  }
}
