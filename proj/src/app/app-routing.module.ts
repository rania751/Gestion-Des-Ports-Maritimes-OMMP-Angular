import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { EdituserComponent } from './component/edituser/edituser.component';
import { FormportComponent } from './component/formport/formport.component';
import { HomefirstComponent } from './component/homefirst/homefirst.component';
import { ListemplComponent } from './component/listempl/listempl.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { PortinfoComponent } from './component/portinfo/portinfo.component';
import { PortsComponent } from './component/ports/ports.component';
import { ServicesComponent } from './component/services/services.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserinfoComponent } from './component/userinfo/userinfo.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component:  HomefirstComponent}, 
  { path: 'admin', component: AdminComponent},
  { path: 'login/admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin/signup', component: SignupComponent },
  { path: 'login/admin/signup', component: SignupComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'admin/addport', component: FormportComponent},
  { path: 'login/admin/addport', component: FormportComponent},
  { path: 'editport/:id', component: FormportComponent},
  { path: 'admin/ports', component: PortsComponent },
  { path: 'admin/users', component: UsersComponent},
  { path: 'login/admin/ports', component: PortsComponent },
  { path: 'login/admin/users', component: UsersComponent},
  { path: 'portinfo/:id', component:  PortinfoComponent },
  { path: 'userinfo/:id', component:  UserinfoComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'services', component: ServicesComponent  ,canActivate: [AuthGuard]},
  { path: 'login/services', component: ServicesComponent  ,canActivate: [AuthGuard]},
  { path: 'listempl/:id', component: ListemplComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
