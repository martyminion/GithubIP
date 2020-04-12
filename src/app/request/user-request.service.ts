import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Owner} from '../user';
import {SearchFormComponent} from '../search-form/search-form.component';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  usersapiUrl = "https://api.github.com/search/users?q=";
  userUrl = "https://api.github.com/users/martyminion"
  user:User;
  users:User[]=[];
  owner:Owner;
  data:any
  userName:SearchFormComponent;
  constructor(private http:HttpClient) {
    this.user = new User("","","")
    this.owner = new Owner("","","",0,new Date())
   }
// + "?access_token=" + environment.token
   userRequest(name){
     let promise = new Promise((resolve,reject)=>{
       let userrequesturl = this.usersapiUrl + name
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
//+ "?access_token=" + environment.token
   personalRequest(){
    let promise = new Promise((resolve,reject)=>{
      let personalRequestUrl = this.userUrl
      this.http.get(personalRequestUrl).toPromise().then(response=>{
        this.data = response
        console.log(this.data)
       
        this.owner.username = this.data.login
        this.owner.userImage = this.data.avatar_url
        this.owner.url = this.data.html_url
        this.owner.repoNumber = this.data.public_repos
        this.owner.created = this.data.created_at
        this.owner = new Owner(this.owner.username,this.owner.url,this.owner.userImage,this.owner.repoNumber,new Date(this.owner.created))
       
        resolve()
      },
      error=>{
        this.owner.Perror = "Could not find owner"
        reject(error)
      })
    })
    return promise

  }

   
}
