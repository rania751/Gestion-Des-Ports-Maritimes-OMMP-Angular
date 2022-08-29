import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title:string="Espace Administrateur"

  // portname:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  retour()
  {
    this.route.navigate([""])
  }
    ajoutemp()
  {
    this.route.navigate(["admin/signup"])
  }
  ajoutport()
  {
    this.route.navigate(["admin/addport"])
  }

}
