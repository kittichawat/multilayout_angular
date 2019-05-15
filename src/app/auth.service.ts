import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string,password:string)
  {
    if(username =="admin" && password =="admin")
    {
      console.log("Login Success")
    }
  }
}
