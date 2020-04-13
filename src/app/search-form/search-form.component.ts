import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {UserRequestService} from '../request/user-request.service'
import {RepoRequestService} from '../request/repo-request.service'



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchUser = new EventEmitter();
  @Output() searchRepo = new EventEmitter()

  searchByUsername:string
  searchByRepository:string
  constructor(private userService:UserRequestService, private repoService:RepoRequestService) { }

  userName(){
    this.userService.getUser(this.searchByUsername)
    this.userService.userRequest()
    //console.log(this.userService.users)

  }

  repository(){
    this.repoService.getrepoName(this.searchByRepository)
    this.repoService.repoRequest()

    
  }

  ngOnInit(){
    
    
  }

}
