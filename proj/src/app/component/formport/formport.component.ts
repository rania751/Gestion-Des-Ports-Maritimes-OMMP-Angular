import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PortsService } from 'src/app/services/ports.service';

@Component({
  selector: 'app-formport',
  templateUrl: './formport.component.html',
  styleUrls: ['./formport.component.css']
})
export class FormportComponent implements OnInit {

  title: string = 'Ajouter Un Port ';
  Port: any = {};
  Ports: any=[];
  PortForm: FormGroup;
  id: any;
  constructor(
    private ar: ActivatedRoute,
    private Portservice: PortsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.Portservice.getAllPortes().subscribe((data) => {
      this.Ports = data;
    });

    this.id = this.ar.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'Modifier ce port';
      // serch obj by id
      //   for(let i=0;i<this.Ports.length;i++)
      //   {
      //     if (this.Ports[i].id==this.id){
      //       this.Port=this.Ports[i];
      //       break
      //     }
      // }
      this.Port = this.Portservice.getPortById(this.id).subscribe((data)=>{this.Port=data
      // this.router.navigate(["admin"])
    });
    }
  }
  addOrEditPort() {
    if (this.id) {
      this.Portservice.editPort(this.Port,this.id).subscribe((data) => {this.Port=data });

      this.router.navigate(["admin"])
    } else {
      this.Portservice.addPort(this.Port).subscribe((data) => {this.Port=data });
      this.Portservice.getAllPortes().subscribe((data) => {
        this.Ports = data;
      });
      this.router.navigate(["admin"])
  }
}
retour(){
  this.router.navigate(["admin"])
}

}

