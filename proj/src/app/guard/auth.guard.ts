import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/jwt-auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private authService:AuthService,private toast:NgToastService){}
  canActivate()
  {
    if (this.authService.loggedIn()) {
      return true      
    }
    else{

      this.route.navigate(['login'])
      this.toast.error({detail:"Message d'Erreur",summary:"Vous n'êtes pas connecté",duration:3000})
      return false
    }
  }
  
}
