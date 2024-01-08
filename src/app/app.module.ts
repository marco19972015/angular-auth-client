import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';

// Using Reactive form in this section
import { ReactiveFormsModule } from '@angular/forms';

// Provides a way to make HTTP requests using HttpCLient service. 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ResetComponent } from './pages/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    ForgotComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,  // Provide the class
      multi: true  // Allows us to provide multiple interceptors if needed
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
