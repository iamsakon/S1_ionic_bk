import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-owner-list',
  templateUrl: 'owner-list.html'
})
export class OwnerListPage {

  selectedModuleItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.selectedModuleItem = navParams.get('moduleItem');
  }

}
