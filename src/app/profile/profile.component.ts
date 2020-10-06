import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from '../user'
import { Repo } from '../repo'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  repo:Repo;

  constructor(private profileService: ProfileService) { 

  }

  findUser () {
    this.profileService.getUser().then((success)=>{
      this.user=this.profileService.user;
    });

    this.profileService.searchRepo().then((success)=>{
      this.repo=this.profileService.repo;
    });

  }

  ngOnInit(): void {

  }
}