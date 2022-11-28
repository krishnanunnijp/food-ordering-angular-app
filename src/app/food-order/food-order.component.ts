import { Component } from '@angular/core';

@Component({
  selector: 'app-food-order',
  templateUrl: './food-order.component.html',
  styleUrls: ['./food-order.component.css']
})
export class FoodOrderComponent {
  phone=""
  email=""

  order=()=>
  {
    let data:any ={

      "phone":this.phone,
      "email":this.email
    
    }
    console.log(data)
  }
}
