import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortsService } from 'src/app/services/ports.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
  id:any;
  users:any=[];
  searchText:string="";

  constructor(private router:Router , private userservice:UserService,private portService:PortsService) { }
   //s'execute auto lorsque on appele le selecteur du composant



  ngOnInit(): void {
   
    this.userservice.getAllUseres().subscribe((data)=>{this.users=data})
  
  }

  goToDisplay(X:number){
    this.router.navigate([`userinfo/${X}`])
  }
  goToEdit(X:number){
    this.router.navigate([`edituser/${X}`])
  }
  Deleteuser(id:any){
    this.userservice.deleteUser(id).subscribe((data)=>{
      this.userservice.getAllUseres().subscribe((data)=>{this.users=data}
    )
  })
  }
  onSearchTextEntered(searchValue:string)
  {
this.searchText=searchValue;
  }

}

