import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './jwt-auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userUrl: string = 'http://localhost:8085/api/auth';

  constructor(private httpClientauth: HttpClient, private sessionStorage:TokenStorageService) {}

  signup(user: any) {
    return this.httpClientauth.post(this.userUrl + '/signup', user);
  }
  login(user: any) {
    return this.httpClientauth.post(this.userUrl + '/login', user);
  }
  loggedIn(){
    return !!this.sessionStorage.getToken();
  }

  isAdmin(){

    if((this.sessionStorage.getUser().roles)=="ROLE_ADMIN")
    return true
    else 
    return false
  }
}
