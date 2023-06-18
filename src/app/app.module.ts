import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { HttpClient, HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ************************************************************************ngx bootstrap ************************************************************************
import { PaginationModule } from 'ngx-bootstrap/pagination';
// *******************************************************Chart Module*******************************************************
import { NgChartsModule } from 'ng2-charts';

// ************************************************************************Tools************************************************************************

import { NgOtpInputModule } from 'ng-otp-input';
// ************************************************************************Guards************************************************************************

import { authGuard } from './guards/auth.guard';

// ************************************************************************Components************************************************************************
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSignUpComponent } from './reusable/login-sign-up/login-sign-up.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { ParentComponent } from './components/parent/parent.component';
import { DashboardComponent } from './components/parent/dashboard/dashboard.component';
import { MedicalHistoryComponent } from './components/parent/medical-history/medical-history.component';
import { ProfileComponent } from './components/parent/profile/profile.component';
import { MyPatientsComponent } from './components/parent/my-patients/my-patients.component';
import { HeaderComponent } from './reusable/header/header.component';
import { SideNavComponent } from './reusable/side-nav/side-nav.component';
import { PatientDetailsComponent } from './components/parent/my-patients/patient-details/patient-details.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    path: "verification-code",
    component: VerificationCodeComponent
  },
  {
    path: "",
    component: ParentComponent,
    canActivate: [authGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "medical-history", component: MedicalHistoryComponent },
      { path: "my-patients", component: MyPatientsComponent },
      { path: "my-patients/patient-details/:id", component: PatientDetailsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: "profile", component: ProfileComponent, canActivate: [authGuard] },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginSignUpComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerificationCodeComponent,
    ParentComponent,
    DashboardComponent,
    MedicalHistoryComponent,
    MyPatientsComponent,
    ProfileComponent,
    HeaderComponent,
    SideNavComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    PaginationModule.forRoot(),
    NgOtpInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule

  ],
  providers: [authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
