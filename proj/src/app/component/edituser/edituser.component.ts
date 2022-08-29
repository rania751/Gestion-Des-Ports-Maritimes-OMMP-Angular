import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PortsService } from 'src/app/services/ports.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  title: string = 'Modifier ';
  User: any = {};

  UserForm: FormGroup;
  id: any;
  name:any;
  port:any;
  ports:any=[];
  constructor(
    private ar: ActivatedRoute,
    private Userservice: UserService,
    private router: Router,
    private portsservice:PortsService
  ) {}

  ngOnInit(): void {
    
    this.portsservice.getAllPortes().subscribe((data)=>{this.ports=data})
    this.id = this.ar.snapshot.paramMap.get('id');

    this.User = this.Userservice.getUserById(this.id).subscribe((data) => {
      this.User = data;
    });

    };

  
  EditUser() {
    this.Userservice.editUser(this.User, this.id).subscribe((data) => {
      this.User = data;
      this.Userservice.editUserPortName(this.port,this.id).subscribe(data=>console.log(data)) 
    });
    this.router.navigate(['admin']);
  }
  retour(){
    this.router.navigate(["admin"])
  }

}
