export class User {
  error:string;
  constructor(public username:string, public url:string, public userImage:string){
  }
}

export class Owner {
  repos:Array<string>;
  Perror:string;
  public displayRepos:boolean
  constructor(
    public username:string, 
    public url:string, 
    public userImage:string,
    public repoNumber:number,
    public created:Date){
      this.displayRepos = false
  }
}
