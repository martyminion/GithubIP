import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user'
import {SearchFormComponent} from '../search-form/search-form.component'
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  apiUrl = "https://api.github.com/users/";
  user:User;
  userName:SearchFormComponent;
  constructor(private http:HttpClient) {
    this.user = new User("",0,"")
   }

   userRequest(){
     let promise = new Promise((resolve,reject)=>{
       let userrequesturl = this.apiUrl + this.userName.user
       this.http.get(userrequesturl).toPromise().then(response=>{
         //this.user.username = response.name
         //this.user.userImage = response.avatar_url
         //this.user.reposNumber = response.public_repos
         console.log(response)

         resolve()
       },
       error=>{
         this.user.error = "Please Enter a Valid Username"
         reject(error)
       })
     })
     return promise

   }
}
