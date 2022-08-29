import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortsService } from 'src/app/services/ports.service';

@Component({
  selector: 'app-ports',
  templateUrl: './ports.component.html',
  styleUrls: ['./ports.component.css']
})
export class PortsComponent implements OnInit {

  constructor(private portservice:PortsService, private route:Router) { }
  ports:any=[];

  ngOnInit(): void {
     
    this.portservice.getAllPortes().subscribe((data)=>{this.ports=data})
  }
  retour()
  {
    this.route.navigate(["admin"])
  }


}
