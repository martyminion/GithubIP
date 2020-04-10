import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user'
import {SearchFormComponent} from '../search-form/search-form.component'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  apiUrl = "https://api.github.com/search/users?q=";
  user:User;
  users:User[]=[];
  data:any
  userName:SearchFormComponent;
  constructor(private http:HttpClient) {
    this.user = new User("","","")
   }

   userRequest(name){
     let promise = new Promise((resolve,reject)=>{
       let userrequesturl = this.apiUrl + name
       this.http.get(userrequesturl).toPromise().then(response=>{
         this.data = response
         console.log(this.data)
        for(let i = 0; i<15;i++){
         this.user.username = this.data.items[i].login
         this.user.userImage = this.data.items[i].avatar_url
         this.user.url = this.data.items[i].html_url
         this.users.push(new User(this.user.username,this.user.url,this.user.userImage))
        }
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
