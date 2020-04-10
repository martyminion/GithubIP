import { Component, OnInit, Output,EventEmitter } from '@angular/core';

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
  userName(searchByUsername:HTMLInputElement){
    this.searchUser.emit(searchByUsername.value)

    this.user = searchByUsername.value

  }
  repository(searchByRepository:HTMLInputElement){
    this.searchRepo.emit(searchByRepository.value)
    this.repo = searchByRepository.value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
