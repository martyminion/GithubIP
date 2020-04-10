import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {UserRequestService} from '../request/user-request.service'

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
  constructor(private userService:UserRequestService) { }

  userName(searchByUsername:HTMLInputElement){
    this.searchUser.emit(searchByUsername.value)
    this.user = searchByUsername.value
    
    this.userService.userRequest(this.user)
  }
  repository(searchByRepository:HTMLInputElement){
    this.searchRepo.emit(searchByRepository.value)
    this.repo = searchByRepository.value
  }

 

  ngOnInit(): void {
  }

}
