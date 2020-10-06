import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user: string;
  repoName: string;
  clientId: string = "b837f0ae5b2da830be07";
  clientSecret: string = "88414eeecfc89f3e2c1149c9fabe61331678f9db";
  
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.user + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.user + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

UpdateUser(user:string) {
  this.user = user;
}
}