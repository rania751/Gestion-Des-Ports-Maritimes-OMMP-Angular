import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/jwt-auth-token';

@Component({
  selector: 'app-homefirst',
  templateUrl: './homefirst.component.html',
  styleUrls: ['./homefirst.component.css']
})
export class HomefirstComponent implements OnInit {


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
    this.tokenStorage.signOut();
    this.route.navigate([''])
  }
  getLoggedInUser(){
    this.loggedInUser = this.tokenStorage.getUser()
    console.log( this.loggedInUser)

  }
}
