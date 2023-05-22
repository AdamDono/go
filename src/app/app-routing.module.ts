import { OtpComponent } from './otp/otp.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {path: '', component: SignInComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'Otp', component: OtpComponent},
{path:'nav', component: NavComponent},
{path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

