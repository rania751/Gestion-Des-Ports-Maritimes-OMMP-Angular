import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  mailuser:string="";
  constructor() { }


  @Output()
  searchChanged:EventEmitter<string>=new EventEmitter<string>();

  onSearchChanged()
  {
    this.searchChanged.emit(this.mailuser);
  }

  ngOnInit(): void {
  }

}
