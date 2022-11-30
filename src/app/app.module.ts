import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { GalaryComponent } from './galary/galary.component';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { FriendsViewComponent } from './friends-view/friends-view.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"galary",
    component:GalaryComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:"viewFriend",
    component:FriendsViewComponent
  },
  {
    path:"viewCourse",
    component:ViewCourseComponent
  },
  {
    path:"emplogin",
    component:EmployeeloginComponent
  },
  {
    path:"empreg",
    component:EmpRegisterComponent
  }
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    GalaryComponent,
    AboutComponent,
    AdminLoginComponent,
    AdminhomeComponent,
    NavadminComponent,
    FriendsViewComponent,
    ViewCourseComponent,
    EmployeeloginComponent,
    EmpRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
