import { Component, OnInit } from '@angular/core';
import {UserRequestService} from '../request/user-request.service'
import {User} from '../user'

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  user:User;

  constructor( private userService:UserRequestService) { }

  ngOnInit(){
    this.userService.userRequest()

    this.user = this.userService.user

  }

}
