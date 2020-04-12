export class User {
  repos:Array<string>;
  error:string;

  constructor(public username:string, public url:string, public userImage:string){

  }
}

export class Owner {
  repos:Array<string>;
  Perror:string;
  constructor(
    public username:string, 
    public url:string, 
    public userImage:string,
    public repoNumber:number,
    public created:Date){
  }
}
