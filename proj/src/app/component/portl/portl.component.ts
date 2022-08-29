import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portl',
  templateUrl: './portl.component.html',
  styleUrls: ['./portl.component.css']
})
export class PortlComponent implements OnInit {

  @Input() X:any;
  id:any;
  constructor(private router:Router,   private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
  }
  listEmployee(X:number)
  {
    this.router.navigate([`listempl/${X}`])
  }
  retour()
  {
    this.router.navigate(["admin"])
  }

}
