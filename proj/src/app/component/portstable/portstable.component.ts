import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortsService } from 'src/app/services/ports.service';

@Component({
  selector: 'app-portstable',
  templateUrl: './portstable.component.html',
  styleUrls: ['./portstable.component.css']
})
export class PortstableComponent implements OnInit {

  
  ports:any=[];
  searchText:string="";
  constructor(private router:Router , private portservice:PortsService ) { }
   //s'execute auto lorsque on appele le selecteur du composant
  ngOnInit(): void {
  
    this.portservice.getAllPortes().subscribe((data)=>{this.ports=data})
    
  }
  
 

  goToDisplay(X:number)
  {
    this.router.navigate([`portinfo/${X}`])
  }
  
  goToEdit(X:number){
    this.router.navigate([`editport/${X}`])
  }
  DeletePort(id:any){
    this.portservice.deletePort(id).subscribe((data)=>{
      this.portservice.getAllPortes().subscribe((data)=>{this.ports=data}
    )
  })
  }
  onSearchTextEntered(searchValue:string)
  {
this.searchText=searchValue;
  }

}
