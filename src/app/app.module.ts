import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { AdminComponent } from './components/admin/admin.component';
import { LoginRegisterComponent } from './components/loginRegister/loginRegister.component';
import { NavComponent } from './components/nav/nav.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    LoginRegisterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [AuthService, AuthGuard, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
