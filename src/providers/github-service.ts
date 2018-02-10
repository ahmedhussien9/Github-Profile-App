import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


import {User} from '../app/models/user.interface';
import { Observable } from 'rxjs/Observable';
import { Repository} from '../app/models/repository.interface';

@Injectable()
export class GithubServiceProvider {
  private reposUrl : string = "repos"
  constructor(private http: HttpClient) { 
  }
    /* This function for getting the information for each user you will passed has name in the search bar 
     and will display the result in the search result component.. 
  */ 
  getUserInformation(username:string):Observable<User>{
   return  this.http.get<User>('https://api.github.com/users/'+ username) 
}

  /* This function for getting the Repository for each user you will passed has name in the search bar 
     and will display the result in the repository component.. 
  */ 
  getUserRepository(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>('https://api.github.com/users/'+ username + "/" + this.reposUrl)
  }

}
