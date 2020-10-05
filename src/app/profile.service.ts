import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  username: string;
  repoName: string;

  constructor() { }
}
