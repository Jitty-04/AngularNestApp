import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent {
  id=""
  password=""
  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"id":this.id,"password":this.password}
    console.log(data)
    if(this.id=="1122" && this.password=="12345"){
      
      
      this.route.navigate(["adminhome"])
    }
    else{
      this.id=""
      this.password=""
      alert("Invalid Credentials")
    }
  }

}
