import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {
  @Input() X:any;
  id:any;
  constructor(private router:Router,   private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get('id');
  }


}
