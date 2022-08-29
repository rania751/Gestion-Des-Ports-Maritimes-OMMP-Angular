import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortsService } from 'src/app/services/ports.service';

@Component({
  selector: 'app-portinfo',
  templateUrl: './portinfo.component.html',
  styleUrls: ['./portinfo.component.css']
})
export class PortinfoComponent implements OnInit {

  
  foundedport: any={};
  id: any;
 ports: any;
  constructor(
    private ar: ActivatedRoute,
    private portservice: PortsService,

  ) {}

  ngOnInit(): void {
  
    this.id = this.ar.snapshot.paramMap.get('id');

    this.foundedport = this.portservice.getPortById(this.id).subscribe((data)=>{
      this.foundedport=data});

    //  for (let i=0;i<this.players.length;i++){
    //   if (this.players[i].id==this.id)
    //   {
    //     this.foundedplayer=this.players[i]
    //     break
    //   }
    //  }
  }
 

}
