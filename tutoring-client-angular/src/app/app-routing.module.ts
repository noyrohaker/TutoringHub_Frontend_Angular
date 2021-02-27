import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from  './compenents/authentication/login/login.component';
import { RegisterComponent } from  './compenents/authentication/register/register.component';
import { ForgotPasswordComponent } from  './compenents/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './compenents/authentication/verify-email/verify-email.component';
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from './compenents/dashboard/dashboard.component';
import { AboutComponent } from './compenents/about/about.component';
import { MyProfileComponent } from './compenents/user-personal-space/my-profile/my-profile.component';



const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }