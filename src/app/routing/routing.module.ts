import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {CodersComponent} from '../coders/coders.component'
import {SearchFormComponent} from '../search-form/search-form.component'
import {ShowReposComponent} from '../show-repos/show-repos.component'
import {ShowUserComponent} from '../show-user/show-user.component'

//Defining the routes

const routes:Routes =[
  {path:"home",component:CodersComponent},
  {path:"search",component:SearchFormComponent},
  {path:"repos",component:ShowReposComponent},
  {path:"users",component:ShowUserComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class RoutingModule { }
