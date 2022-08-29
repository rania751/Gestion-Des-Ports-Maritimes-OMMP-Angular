import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { VideoComponent } from './component/video/video.component';
import { MenuComponent } from './component/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerstartComponent } from './component/bannerstart/bannerstart.component';
import { PortComponent } from './component/port/port.component';
import { PortstableComponent } from './component/portstable/portstable.component';
import { FormportComponent } from './component/formport/formport.component';
import { UserstableComponent } from './component/userstable/userstable.component';
import { PortsComponent } from './component/ports/ports.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { PortinfoComponent } from './component/portinfo/portinfo.component';
import { UserinfoComponent } from './component/userinfo/userinfo.component';
import { EdituserComponent } from './component/edituser/edituser.component';
import { AuthGuard } from './guard/auth.guard';
import { ServicesComponent } from './component/services/services.component';
import { HeadhomeComponent } from './component/headhome/headhome.component';
import { HeaduserComponent } from './component/headuser/headuser.component'
import { AdminGuard } from './guard/admin.guard';
import {  AuthInterceptorService } from './services/auth-interceptor.service';
import { ListemplComponent } from './component/listempl/listempl.component';
import { HomefirstComponent } from './component/homefirst/homefirst.component';
import { PortlComponent } from './component/portl/portl.component';
import { NgToastModule } from 'ng-angular-popup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchuserComponent } from './component/searchuser/searchuser.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { SearchportComponent } from './component/searchport/searchport.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    VideoComponent,
    MenuComponent,
    BannerstartComponent,
    PortComponent,
    PortstableComponent,
    FormportComponent,
    UserstableComponent,
    PortsComponent,
    UserComponent,
    UsersComponent,
    PortinfoComponent,
    UserinfoComponent,
    EdituserComponent,
    ServicesComponent,
    HeadhomeComponent,
    HeaduserComponent,
    ListemplComponent,
    HomefirstComponent,
    PortlComponent,
    SearchuserComponent,
    CarouselComponent,
    SearchportComponent,
  

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgToastModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthGuard,AdminGuard,{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
