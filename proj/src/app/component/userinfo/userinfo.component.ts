import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  
  foundeduser: any={};
  id: any;
 ports: any;
  constructor(
    private ar: ActivatedRoute,
    private userservice: UserService,
    private route :Router
  ) {}

  ngOnInit(): void {
  
    this.id = this.ar.snapshot.paramMap.get('id');

    this.foundeduser = this.userservice.getUserById(this.id).subscribe((data)=>{
      this.foundeduser=data});

    //  for (let i=0;i<this.players.length;i++){
    //   if (this.players[i].id==this.id)
    //   {
    //     this.foundedplayer=this.players[i]
    //     break
    //   }
    //  }
  }
  retour()
  {
    this.route.navigate(["admin"])
  }


}
