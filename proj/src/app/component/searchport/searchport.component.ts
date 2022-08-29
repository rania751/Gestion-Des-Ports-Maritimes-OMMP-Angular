import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searchport',
  templateUrl: './searchport.component.html',
  styleUrls: ['./searchport.component.css']
})
export class SearchportComponent implements OnInit {

  portname:string="";
  constructor() { }


  @Output()
  searchChanged:EventEmitter<string>=new EventEmitter<string>();

  onSearchChanged()
  {
    this.searchChanged.emit(this.portname);
  }

  ngOnInit(): void {
  }
}
