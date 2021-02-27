import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './compenents/student/login/login.component';
import { RegisterComponent } from './compenents/student/register/register.component';
import { ForgotPasswordComponent } from './compenents/student/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './compenents/student/verify-email/verify-email.component';
import { AuthService } from './compenents/auth/auth.service';
import { DashboardComponent } from './compenents/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './compenents/about/about.component';


var firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDDlRk5x870JNEz7KQzVk3xPfan-MlK64I",
  authDomain: "tutoringhub-e7362.firebaseapp.com",
  projectId: "tutoringhub-e7362",
  storageBucket: "tutoringhub-e7362.appspot.com",
  messagingSenderId: "180245525929",
  appId: "1:180245525929:web:e85c5035cb68cca7d500b8",
  measurementId: "G-7D6ZGTFVTY"

};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ToolbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
