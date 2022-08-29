import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/jwt-auth-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  auth: any = {};
  boo:boolean;
  accessToken: any = {};
  msg:string="false information";
  constructor( private authservice: AuthService, private tokenStorage:TokenStorageService,private route:Router, private toast: NgToastService) {}
  // passwordptn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$';

  ngOnInit(): void {

  }

  login() {
    // alert('Login is clicked');
    let p:any;
    this.authservice.login(this.auth).subscribe(data => {
       p=data
    
      console.log('the result after login is', (Object.values(data)[5]).toString());
      // const myJSON = JSON.stringify(data);
      // console.log(myJSON)
      
      // console.log(myJSON[accessToken])
      this.tokenStorage.saveToken((Object.values(data)[5]).toString());
      this.tokenStorage.saveUser(data);
      this.toast.success({detail:"Identification faite avec succée",summary:"Vous étes authentifié(e)",duration:5000})
      // this.loginForm.reset();
      this.route.navigate(["login/admin"]);
    },err=>{
      this.toast.error({detail:"Message d'Erreur",summary:"Identification échouée,Ressayer!",duration:5000})
       }
    )
    } 

    }
  
   
    


