import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from  './compenents/student/login/login.component';
import { RegisterComponent } from  './compenents/student/register/register.component';
import { ForgotPasswordComponent } from  './compenents/student/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './compenents/student/verify-email/verify-email.component';
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from './compenents/dashboard/dashboard.component';
import { AboutComponent } from './compenents/about/about.component';



const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }