import { Component, OnInit } from '@angular/core';
import {UserRequestService} from '../request/user-request.service'
import{Owner} from '../user'
import{OwnerRepos} from '../repository'
import {RepoRequestService} from '../request/repo-request.service'



@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.css']
})
export class CodersComponent implements OnInit {

  repository:OwnerRepos;
  Repos:OwnerRepos[]=[];
  ownerinfo:Owner;

  constructor(private userService:UserRequestService,private repoService:RepoRequestService) { }
  toggle(){
    this.ownerinfo.displayRepos = ! this.ownerinfo.displayRepos
  }

  ngOnInit(){

    //this.userService.personalRequest()
    this.ownerinfo = this.userService.owner 
    this.userService.personalRequest()

     //this.repoService.ownerReposRequest()
     this.repoService.ownerReposRequest()
     this.Repos = this.repoService.Repos
  }

}
