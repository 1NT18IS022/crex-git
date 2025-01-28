import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor() { }

  private loggedInKey="false";

  login()
  {
    if(typeof window !== 'undefined')
    localStorage.setItem(this.loggedInKey, "true");
  }

  logout(){
    if(typeof window !== 'undefined')
    localStorage.setItem(this.loggedInKey, "false");
  }

  isloggedIn()
  {
    if(typeof window !== 'undefined')
    return localStorage.getItem(this.loggedInKey) === "true";

    return false;
  }
  
}
