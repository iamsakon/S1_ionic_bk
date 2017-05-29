import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-package-list',
  templateUrl: 'package-list.html'
})
export class PackageListPage {

  selectedModuleItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.selectedModuleItem = navParams.get('moduleItem');
  }

}
