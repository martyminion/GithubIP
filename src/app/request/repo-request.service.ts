import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Repository} from '../repository'
import {SearchFormComponent} from '../search-form/search-form.component'
import {environment} from '../../environments/environment'
import {OwnerRepos} from '../repository'
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  apiUrl = "https://api.github.com/search/repositories?q=";
  ownerRepos = "https://api.github.com/users/martyminion/repos";
  Repo:OwnerRepos;
  Repos:OwnerRepos[]=[];
  repository:Repository;
  repositories:Repository[]=[];
  data:any
  repoNAme:SearchFormComponent;
  constructor(private http:HttpClient) {
    this.repository = new Repository("","","",new Date(),"","")
    this.Repo = new OwnerRepos("","","",new Date(),"","")
   }

   repoRequest(repo){
     let promise = new Promise((resolve,reject)=>{
       let reporequesturl = this.apiUrl + repo + "?access_token=" + environment.token
       this.http.get(reporequesturl).toPromise().then(response=>{
         this.data = response
         console.log(this.data)
        for(let i = 0; i<20;i++){
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

   ownerReposRequest(){
    let promise = new Promise((resolve,reject)=>{
      let OwnerRepoRequest = this.ownerRepos + "?access_token=" + environment.token
      this.http.get(OwnerRepoRequest).toPromise().then(response=>{
        this.data = response
       for(let i = 0; i<this.data.lenght;i++){
        this.Repo.name = this.data[i].name
        this.Repo.description = this.data[i].description
        this.Repo.deployedSite = this.data[i].homepage
        this.Repo.createdAt = this.data[i].created_at
        this.Repo.urlLink = this.data[i].html_url
        this.Repo.language = this.data[i].language

        this.Repos.push(new OwnerRepos(this.Repo.name,this.Repo.description,this.Repo.deployedSite,new Date(this.Repo.createdAt),
        this.Repo.urlLink,this.Repo.language))
       }
        resolve()
      },
      error=>{
        this.Repo.error = "Please Check for Errors"
        reject(error)
      })
    })
    return promise

  }
}
