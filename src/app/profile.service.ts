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
  apikey:string='bb74c565705f92dc6e86ddbf2be0c283546fa6b1';
  
  constructor(private http: HttpClient) { 
  }

  getUser() {
    interface Response {
      login: string,
      avatar_url: string,
      url: string,
      name: string,
      email: string,
      followers: number,
      following: number,
    }
    return new Promise((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/' + '?access_token=' + environment.apikey).toPromise()
        .then((result) => {
          
          this.user = result
          resolve();
        }, (error) => {
          console.log(error);
          reject();
        })
    })
  }
  searchRepo() {
    interface Response {
      name: string,
      description: string,
      repos: string,
      language: string,
      html_url: string,
      created_at: string,
    }
    return new Promise((resolve, reject) => {
      this.http.get<Response>( 'https://api.github.com/users/' + '/repos?access_token=' + environment.apikey).toPromise()
      .then((result) => {
          this.repo = result
          resolve();
        }, (error) => {
          console.log(error);
          reject();
        })
    })

  }
}