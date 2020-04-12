import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Repository} from '../repository'
import {SearchFormComponent} from '../search-form/search-form.component'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  apiUrl = "https://api.github.com/search/repositories?q=";
  ownerRepos = "https://api.github.com/users/martyminion/repos";
  repository:Repository;
  repositories:Repository[]=[];
  data:any
  repoNAme:SearchFormComponent;
  constructor(private http:HttpClient) {
    this.repository = new Repository("","","",new Date(),"","")
   }

   repoRequest(repo){
     let promise = new Promise((resolve,reject)=>{
       let reporequesturl = this.apiUrl + repo + "?access_token=" + environment.token
       this.http.get(reporequesturl).toPromise().then(response=>{
         this.data = response
         console.log(this.data)
        for(let i = 0; i<15;i++){
         this.repository.name = this.data.items[i].name
         this.repository.description = this.data.items[i].description
         this.repository.deployedSite = this.data.items[i].homepage
         this.repository.createdAt = this.data.items[i].created_at
         this.repository.urlLink = this.data.items[i].html_url
         this.repository.owner = this.data.items[i].owner.login

         this.repositories.push(new Repository(this.repository.name,this.repository.description,this.repository.deployedSite,new Date(this.repository.createdAt),this.repository.urlLink,this.repository.owner))
        }
         resolve()
       },
       error=>{
         this.repository.error = "Please Enter a Valid Repository Name"
         reject(error)
       })
     })
     return promise

   }
}
