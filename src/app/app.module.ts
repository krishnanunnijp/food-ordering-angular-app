import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ROUTES } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodOrderingAppComponent } from './food-ordering-app/food-ordering-app.component';
import { IndianFoodComponent } from './indian-food/indian-food.component';

const myRoute : Routes =[
  {
    path: "",
    component: FoodOrderingAppComponent
  },
  {
    path: "indian",
    component: IndianFoodComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FoodOrderingAppComponent,
    IndianFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
