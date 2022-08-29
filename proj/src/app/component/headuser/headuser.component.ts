import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/jwt-auth-token';

@Component({
  selector: 'app-headuser',
  templateUrl: './headuser.component.html',
  styleUrls: ['./headuser.component.css']
})
export class HeaduserComponent implements OnInit {

  isLoggedIn$: boolean;  
  isadmin: boolean;  
  loggedInUser: any = [];  

  constructor(private authService: AuthService,private tokenStorage:TokenStorageService, private route:Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.loggedIn();
    this.isadmin=this.authService.isAdmin();
    this.getLoggedInUser();
  }
  onLogout(){
    this.route.navigate(['']);
    this.tokenStorage.signOut();
   
  }
  getLoggedInUser(){
    this.loggedInUser = this.tokenStorage.getUser()
    console.log( this.loggedInUser)

  }

}
