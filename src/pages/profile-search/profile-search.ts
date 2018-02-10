import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service';

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  username:string;
  constructor(
    private userService:GithubServiceProvider ,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }
  
  // This function handled the search icon which push to the profile search result page and pass the 
  // username as an object and paramatize to the second page. 
  getUserProfile() 
  {
    this.navCtrl.push('ProfileSearchResultPage',{
      username : this.username
    })
  }

}
