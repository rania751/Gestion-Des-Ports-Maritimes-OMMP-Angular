import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private route:Router,private authService:AuthService){}
  canActivate()
  {
    if (this.authService.isAdmin()) {
      return true      
    }
    else  return false 
  }
  
}
