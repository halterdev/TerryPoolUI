import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

import { AdminComponent } from './components/admin/admin.component';
import { LoginRegisterComponent } from './components/loginRegister/loginRegister.component';

const routes: Routes = [
  { path: 'login', component: LoginRegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
