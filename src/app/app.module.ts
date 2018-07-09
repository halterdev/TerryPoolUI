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
import { AdminMenuComponent } from './components/admin/adminMenu/adminMenu.component';
import { GameAdderComponent } from './components/admin/weeksAdmin/gameAdder/gameAdder.component';
import { GamePickerComponent } from './components/gamePicker/gamePicker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginRegisterComponent } from './components/loginRegister/loginRegister.component';
import { NavComponent } from './components/nav/nav.component';
import { ResultsComponent } from './components/admin/results/results.component';
import { TeamDropdownComponent } from './components/teamDropdown/teamDropdown.component';
import { WeeksAdminComponent } from './components/admin/weeksAdmin/weeksAdmin.component';
import { WeekDropdownComponent } from './components/weekDropdown/weekDropdown.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    AdminMenuComponent,
    GameAdderComponent,
    GamePickerComponent,
    DashboardComponent,
    LoginRegisterComponent,
    NavComponent,
    ResultsComponent,
    TeamDropdownComponent,
    WeeksAdminComponent,
    WeekDropdownComponent
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
