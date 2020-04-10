import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coders',
  templateUrl: './coders.component.html',
  styleUrls: ['./coders.component.css']
})
export class CodersComponent implements OnInit {
  searchByUser(user){
    alert(user)
  }
  searchByRepo(repo){
    alert(repo)
  }

  constructor() { }

  ngOnInit(){


  }

}
