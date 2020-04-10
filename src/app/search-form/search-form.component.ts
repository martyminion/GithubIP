import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchUser = new EventEmitter();
  @Output() searchRepo = new EventEmitter()

  userName(searchByUsername:HTMLInputElement){
    this.searchUser.emit(searchByUsername)

  }
  repository(searchByRepository:HTMLInputElement){
    this.searchRepo.emit(searchByRepository)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
