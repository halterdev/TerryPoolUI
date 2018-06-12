import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginRegisterComponent } from './components/loginRegister/loginRegister.component';

const routes: Routes = [
  { path: 'login', component: LoginRegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
