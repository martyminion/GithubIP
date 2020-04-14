import { Component, OnInit, Input } from '@angular/core';
import{OwnerRepos} from '../repository'
import{CodersComponent} from '../coders/coders.component'

@Component({
  selector: 'app-userrepo',
  templateUrl: './userrepo.component.html',
  styleUrls: ['./userrepo.component.css']
})
export class UserrepoComponent implements OnInit {

  @Input() Repos:OwnerRepos[]

  constructor() { }


  ngOnInit(){
  }

}
