import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoitems: any[];
  repoName:string;
  

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

}
