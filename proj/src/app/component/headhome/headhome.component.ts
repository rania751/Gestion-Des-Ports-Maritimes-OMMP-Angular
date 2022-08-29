import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/jwt-auth-token';

@Component({
  selector: 'app-headhome',
  templateUrl: './headhome.component.html',
  styleUrls: ['./headhome.component.css']
})
export class HeadhomeComponent implements OnInit {
 
  isLoggedIn$: boolean;  
  isadmin: boolean;  
  loggedInUser: any = [];  

  constructor(private authService: AuthService,private tokenStorage:TokenStorageService, private route:Router,private toast:NgToastService) { }

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


  login()
  {
    if(this.isLoggedIn$)
    
    {      
      this.toast.error({detail:"Pas Autorisé !!",summary:"vous étes déja connecté(e)",duration:3000})
      this.route.navigate(['admin'])
    }
    else{
      this.route.navigate(['login'])
    }
  }
  
}
