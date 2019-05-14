<<<<<<< HEAD
import { AlertifyService } from './_services/alertify.service';
=======
import { ErrorInterceptorProvider } from './_services/error.interceptor';
>>>>>>> 8a1890bb1c79a041f52652976bdcd13f37270c28
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './_services/auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
<<<<<<< HEAD
      AlertifyService
=======
      ErrorInterceptorProvider
>>>>>>> 8a1890bb1c79a041f52652976bdcd13f37270c28
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
