import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ROUTES } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodOrderingAppComponent } from './food-ordering-app/food-ordering-app.component';
import { IndianFoodComponent } from './indian-food/indian-food.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ArabianFoodComponent } from './arabian-food/arabian-food.component';
import { ChikkinsComponent } from './chikkins/chikkins.component';
import { FoodAppNavbarComponent } from './food-app-navbar/food-app-navbar.component';
import { FoodOrderComponent } from './food-order/food-order.component';
import { FormsModule } from '@angular/forms';

const myRoute : Routes =[
  {
    path: "",
    component: FoodOrderingAppComponent
  },
  {
    path: "indian",
    component: IndianFoodComponent
  },
  {
    path: "signup",
    component: SignUpPageComponent
  },
  {
    path: "arabian",
    component: ArabianFoodComponent
  },
  {
    path: "chikkins",
    component: ChikkinsComponent
  },
  {
    path: "order",
    component: FoodOrderComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FoodOrderingAppComponent,
    IndianFoodComponent,
    SignUpPageComponent,
    ArabianFoodComponent,
    ChikkinsComponent,
    FoodAppNavbarComponent,
    FoodOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
