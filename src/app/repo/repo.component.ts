import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repo } from '../repo'
import { User } from '../user';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:Repo;
  user:User;

  constructor(private profileService: ProfileService) { }

  searchRepo () {
    this.profileService.searchRepo().then((success)=>{
      this.user=this.profileService.user;
    });

    this.profileService.searchRepo().then((success)=>{
      this.repo=this.profileService.repo;
    });

  }

  ngOnInit(): void {

  }
}