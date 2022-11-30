import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name=""
  designation=""
  companyname=""
  email=""
  mobile=""
  subject=""
  readValues=()=>
  {
    let data:any={"name":this.name,"designation":this.designation,"companyname":this.companyname,"email":this.email,"mobile":this.mobile,"subject":this.subject}
    console.log(data)
  }


}
