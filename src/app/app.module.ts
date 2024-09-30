import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component'; // Import HttpClientModule
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


const routes:Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'orders', component:OrdersComponent
  },
  {
    path:'orders/:id', component:OrdersComponent
  },
  {
    path:"**", component:NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  // add RouterModule.forRoot to import and use the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
