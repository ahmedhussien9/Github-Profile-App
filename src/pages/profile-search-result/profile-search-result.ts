import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service';
import { User } from '../../app/models/user.interface';
import { Repository } from '../../app/models/repository.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  username:string;
  user:User;
  repository:Repository[];
  constructor(private GithubService: GithubServiceProvider,private navCtrl: NavController, private navParams: NavParams) {
  }
  // get user information as well user repository from the provider service 
  getUserInformation(): void {
    this.GithubService.getUserInformation(this.username).subscribe((data:User) => this.user = data);
    this.GithubService.getUserRepository(this.username).subscribe((data:Repository[])=> this.repository = data); 
  }

  ionViewWillLoad() {
  this.username = this.navParams.get('username');

  if(this.username){
    this.getUserInformation();
  }
  }

}
