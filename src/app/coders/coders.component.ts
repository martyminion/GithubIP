import { Component, OnInit } from '@angular/core';
import {RepoRequestService} from '../request/repo-request.service'
import {UserRequestService} from '../request/user-request.service'
import{Owner} from '../user'
import{OwnerRepos} from '../repository'



@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.css']
})
export class CodersComponent implements OnInit {

  constructor(private userService:UserRequestService, private repoService:RepoRequestService) { }

  Repos:OwnerRepos[]=[];
  ownerinfo:Owner

  ngOnInit(){

     //this.repoService.ownerReposRequest()
      this.Repos = this.repoService.Repos
      this.repoService.ownerReposRequest()

    //this.userService.personalRequest()
    this.ownerinfo = this.userService.owner 
    this.userService.personalRequest()

  }

}
