import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  name=""
  gender=""
  dob=""
  phoneNumber=""
  email=""
  password=""
  confirmpassword=""

  signup=()=>
  {
    let data:any ={

      "name":this.name,
      "gender":this.gender,
      "dob":this.dob,
      "phoneNumber":this.phoneNumber,
      "email":this.email,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    
    }
    console.log(data)
  }

}
