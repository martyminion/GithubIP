import { Component, OnInit } from '@angular/core';
import {UserRequestService} from '../request/user-request.service'



@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  searchedUsers = []

  constructor(private userService:UserRequestService) {

   }

  ngOnInit(){
     this.searchedUsers = this.userService.users
  }

}
