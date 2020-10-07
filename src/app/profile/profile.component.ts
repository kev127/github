import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos:any;

  constructor(private profileService: ProfileService) { 

  }

  findUser () {
    this.profileService.UpdateUser(this.user);

    this.profileService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
    this.findUser()
  }

}