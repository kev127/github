import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  username: string;
  reponame: string;
  clientId: string = "b837f0ae5b2da830be07";
  clientSecret: string = "97e14b79d45329e048c708e859aad1f777a51c2d";
  apikey:string='fca692b65b80011dd0bf4302451e79601868dd8d';
  
  constructor(private http: HttpClient) { 
    console.log("service is now ready!");
    this.username = "kev127";
  }

  getUser() {
    return this.http.get('https://api.github.com/users/kev127' + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getUserRepos() {
    return this.http.get('https://api.github.com/users/kev127' + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  searchrepo() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.reponame, ({
      headers: new HttpHeaders(this.apikey=' + environment.apiKey')
    }))
  }
  UpdateUser(username:string) {
    this.username = username;
  }
  UpdateRepo(repo:string) {
    this.reponame = repo;
  }

}