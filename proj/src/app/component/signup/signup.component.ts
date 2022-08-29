import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortsService } from 'src/app/services/ports.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ports:any=[];
  p:any={};
  signupForm:FormGroup;

  constructor(private fb:FormBuilder ,private authservice:AuthService, private portsservice:PortsService ,private route: Router,private toast:NgToastService) { }
  passwordptn='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  // mobileptn='[0-9]*'

  ngOnInit(): void {
  
    this.portsservice.getAllPortes().subscribe((data)=>{this.ports=data})
   
    this.signupForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(12),Validators.pattern(this. passwordptn),Validators.minLength(8)]],
      port:[{} ,[Validators.required]]
    });
  }
  

   signup(){
    let p:any;
    console.log('added',this.signupForm.value)
    this.authservice.signup(this.signupForm.value).subscribe(
    data => {
      console.log("the result after signup is",data)
      p=data
      this.portsservice.getAllPortes().subscribe((data)=>{this.ports=data})
      this.route.navigate(["admin"])
      this.toast.success({detail:"Opération terminée",summary:"Employé ajouté avec succée",duration:3000})
    //  this.route.navigate(["login/admin"]);
   },err=>{
     this.toast.error({detail:"Message d'Erreur",summary:"Cette addresse mail est utilisée",duration:3000})
     this.route.navigate(["signup"]);
      }
   )};

  retour()
  {
    this.route.navigate(["admin"])
  }

}


