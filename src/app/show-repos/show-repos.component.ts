import { Component, OnInit } from '@angular/core';
import {RepoRequestService} from '../request/repo-request.service'

@Component({
  selector: 'app-show-repos',
  templateUrl: './show-repos.component.html',
  styleUrls: ['./show-repos.component.css']
})
export class ShowReposComponent implements OnInit {

  searchedRepos = []

  constructor( private repoService:RepoRequestService) { }

  ngOnInit(): void {
    this.searchedRepos = this.repoService.repositories
  }

}
