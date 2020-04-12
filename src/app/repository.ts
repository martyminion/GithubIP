export class Repository {
  error:string
  constructor(public name:string, public description:string, public deployedSite:string, public createdAt:Date, public urlLink:string, public owner:string){
    
  }
}
