import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[];
  mailuser:string="";
  foundeduser: any={};
  existe : boolean;
  constructor( private route:Router,private toast :NgToastService,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUseres().subscribe((data)=>{this.users=data})
  }
  retour()
  {
    this.route.navigate(["admin"])
  }

  search()
  { 
    console.log(this.mailuser)
  this.userservice.searchByMail(this.mailuser).subscribe(
    data => {if(data){
      this.existe=true;
      this.foundeduser = data;
      console.log(this.foundeduser)}
      else{
        this.toast.error({detail:"Message d'Erreur",summary:"Cette addresse mail n'existe pas",duration:3000})
         }
    }
    );
}
}
