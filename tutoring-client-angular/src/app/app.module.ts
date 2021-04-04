import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './compenents/dashboard/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './compenents/authentication/login/login.component';
import { RegisterComponent } from './compenents/authentication/register/register.component';
import { ForgotPasswordComponent } from './compenents/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './compenents/authentication/verify-email/verify-email.component';
import { AuthService } from './services/auth/auth.service';
import { DashboardComponent } from './compenents/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './compenents/toolbar/toolbar.component';
import { AboutComponent } from './compenents/about/about.component';
import { MyProfileComponent } from './compenents/user-personal-space/my-profile/my-profile.component';
import { UserClassesComponent } from './compenents/user-personal-space/user-classes/user-classes.component';
import { UserDetailsComponent } from './compenents/user-personal-space/user-details/user-details.component';

var firebaseConfig = {
  apiKey: 'AIzaSyDDlRk5x870JNEz7KQzVk3xPfan-MlK64I',
  authDomain: 'tutoringhub-e7362.firebaseapp.com',
  projectId: 'tutoringhub-e7362',
  storageBucket: 'tutoringhub-e7362.appspot.com',
  messagingSenderId: '180245525929',
  appId: '1:180245525929:web:e85c5035cb68cca7d500b8',
  measurementId: 'G-7D6ZGTFVTY',
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterPipe,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    ToolbarComponent,
    AboutComponent,
    MyProfileComponent,
    UserDetailsComponent,
    UserClassesComponent,
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
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
