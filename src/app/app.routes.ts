import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileSectionComponent } from './components/homeScreen/mobile-section/mobile-section.component';
import { MyAccountComponent } from './components/profile/my-account/my-account.component';
import { PaymentHistoryComponent } from './components/profile/payment-history/payment-history.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';
import { NoProfileComponent } from './components/profile/no-profile/no-profile.component';
import { MoneyTransferComponent } from './components/transfer/money-transfer/money-transfer.component';
import { Step2Component } from './components/transfer/step2/step2.component';
import { Step3Component } from './components/transfer/step3/step3.component';
import { SignupComponent } from './components/sign up/signup.component';
import { AccountComponent } from './components/profile/account/account.component';
import { Step1Component } from './components/transfer/step1/step1.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'profile', component: MyAccountComponent },
      { path: 'paymenthistory', component: PaymentHistoryComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'changepassword', component: ChangePasswordComponent },
      { path: 'noprofile', component: NoProfileComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default child route
    ],
  },
  {
    path: 'moneytransfer',
    component: Step1Component,
    children: [
      { path: 'step1', component: MoneyTransferComponent },
      { path: 'step2', component: Step2Component },
      { path: 'step3', component: Step3Component },
      { path: '', redirectTo: 'step1', pathMatch: 'full' }, // Default child route
    ],
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
