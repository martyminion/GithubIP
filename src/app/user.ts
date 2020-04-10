export class User {
  repos:Array<string>;
  error:string;

  constructor(public username:string, public url:string, public userImage:string){

  }
}
