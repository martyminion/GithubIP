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
  newdata:any
  repoNAme:SearchFormComponent;
  constructor(private http:HttpClient) {
    this.repository = new Repository("","","",new Date(),"","")
    this.Repo = new OwnerRepos("","","",new Date(),"","")
   }
//+ "?access_token=" + environment.token
   repoRequest(repo){
     let promise = new Promise((resolve,reject)=>{
       let reporequesturl = this.apiUrl + repo 
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
// + "?access_token=" + environment.token
   ownerReposRequest(){
    let promise = new Promise((resolve,reject)=>{
      let OwnerRepoRequest = this.ownerRepos
      this.http.get(OwnerRepoRequest).toPromise().then(response=>{
        this.newdata = response

        //console.log(this.data)
       for(let i = 0; i<20;i++){
        this.Repo.name = this.newdata[i].name
        this.Repo.description = this.newdata[i].description
        this.Repo.deployedSite = this.newdata[i].homepage
        this.Repo.createdAt = this.newdata[i].created_at
        this.Repo.urlLink = this.newdata[i].html_url
        this.Repo.language = this.newdata[i].language

        this.Repos.push(new OwnerRepos(this.Repo.name,this.Repo.description,this.Repo.deployedSite,new Date(this.Repo.createdAt),
        this.Repo.urlLink,this.Repo.language))
       }
       console.log(this.Repo.name)

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
