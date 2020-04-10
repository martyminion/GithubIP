export class User {
  repos:Array<string>;
  error:string;

  constructor(public username:string, public reposNumber:number, public userImage:string){

  }
}
