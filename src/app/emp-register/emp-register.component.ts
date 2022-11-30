import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrls: ['./emp-register.component.css']
})
export class EmpRegisterComponent {

  id=""
  firstname=""
  lastname=""
  houseno=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parent=""
  gender=""
  degree=""
  exp=""
  join=""
  user=""
  password=""
  confirm=""

  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"id":this.id,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"strretname":this.streetname,"pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parent":this.parent,"gender":this.gender,"degree":this.degree,"exp":this.exp,"join":this.join,"user":this.user,"password":this.password,"confirm":this.confirm}
    if(this.password==this.confirm){
      
      
      alert("Registered successfully")
      this.id=""
  this.firstname=""
  this.lastname=""
  this.houseno=""
  this.streetname=""
  this.pincode=""
  this.district=""
  this.state=""
  this.country=""
  this.mobile=""
  this.email=""
  this.parent=""
  this.gender=""
  this.degree=""
  this.exp=""
  this.join=""
  this.user=""
  this.password=""
  this.confirm=""
      console.log(data)
    }
    else{
      alert("Password and ConfirmPassword doesn't match")
    }
  }
}
