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

  user:string
  repo:string
  constructor(private userService:UserRequestService, private repoService:RepoRequestService) { }

  userName(searchByUsername:HTMLInputElement){
    this.searchUser.emit(searchByUsername.value)
    this.user = searchByUsername.value
    
    this.userService.userRequest(this.user)
  }
  repository(searchByRepository:HTMLInputElement){
    this.searchRepo.emit(searchByRepository.value)
    this.repo = searchByRepository.value

    this.repoService.repoRequest(this.repo)
  }

 

  ngOnInit(): void {
  }

}
