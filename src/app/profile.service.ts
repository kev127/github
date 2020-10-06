import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user'
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: User;
  repo: Repo;
  clientId: string = "b837f0ae5b2da830be07";
  clientSecret: string = "88414eeecfc89f3e2c1149c9fabe61331678f9db";
  apikey:string='bb74c565705f92dc6e86ddbf2be0c283546fa6b1';
  
  constructor(private http: HttpClient) { 
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.user + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.user + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders(access_token=' + environment.apiKey')
    }))
  }
  UpdateUser(user:string) {
    this.user = user;
  }
  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}