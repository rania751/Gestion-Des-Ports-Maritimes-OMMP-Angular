import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PortsService } from 'src/app/services/ports.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listempl',
  templateUrl: './listempl.component.html',
  styleUrls: ['./listempl.component.css'],
})
export class ListemplComponent implements OnInit {
  portid: any;
  users: any = {};

  constructor(private portservice: PortsService, private ar: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.portid = this.ar.snapshot.paramMap.get('id');
    this.portservice.getEmplByPort(this.portid).subscribe((data) => {
      console.log(data)
      this.users = data;
    })


  }
  retour()
  {
    this.router.navigate(["admin"])
  }

}
