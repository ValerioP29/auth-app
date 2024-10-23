import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAutenthicated = false;
  private user: any = null;

  constructor(private router: Router ) { }

  login(email: string, password: string){
    if(email === "test@test.com" && password=== "password"){
     this.isAutenthicated= true;
     this.user= {email: 'test@test.com', name:'Test User'};
     return true;
  }
     return false;
  }

  register(email: string, password: string, name: string){
    this.isAutenthicated= true;
    this.user={email, name}
    return true;
  }

  logout(){
    this.isAutenthicated= false;
    this.user= null;
    this.router.navigate(["/login"])
  }
autoLogout(timeout: number){
  setTimeout(()=> this.logout(), timeout);
}
isLoggedIn(){
return this.isAutenthicated}


getUser(){
  return this.user;
}
}
