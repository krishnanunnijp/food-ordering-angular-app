import { Component } from '@angular/core';

@Component({
  selector: 'app-food-ordering-app',
  templateUrl: './food-ordering-app.component.html',
  styleUrls: ['./food-ordering-app.component.css']
})
export class FoodOrderingAppComponent {
  username=""
  password=""

  loginu=()=>
  {
    let data:any=
    {

      "username":this.username,
      "password":this.password
    
    }

    console.log(data)
  }

}
