import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/sign up/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileSectionComponent } from './components/homeScreen/mobile-section/mobile-section.component';
import { MyAccountComponent } from './components/profile/my-account/my-account.component';
import { PaymentHistoryComponent } from './components/profile/payment-history/payment-history.component';
import { SettingsComponent } from './components/profile/settings/settings.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';
import { NoProfileComponent } from './components/profile/no-profile/no-profile.component';

// import { RegisterComponent } from './auth/register/register.component';
// import { AccountComponent } from './dashboard/account/account.component';
// import { TransactionHistoryComponent } from './dashboard/transaction-history/transaction-history.component';
// import { TransferComponent } from './transfer/transfer/transfer.component';
// import { FavoriteRecipientsComponent } from './transfer/favorite-recipients/favorite-recipients.component';
// import { AuthGuard } from './auth/auth.guard';

// Exporting routes for use in other parts of the app
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'mobile', component: MobileSectionComponent },
  { path: 'profile', component: MyAccountComponent },
  { path: 'profile/paymenthistory', component: PaymentHistoryComponent },
  { path: 'profile/settings', component: SettingsComponent },
  { path: 'profile/changepassword', component: ChangePasswordComponent },
  { path: 'profile/noprofile', component: NoProfileComponent },
  //   { path: 'dashboard', component: AccountComponent, canActivate: [AuthGuard] },
  //   {
  //     path: 'transaction-history',
  //     component: TransactionHistoryComponent,
  //     canActivate: [AuthGuard],
  //   },
  //   { path: 'transfer', component: TransferComponent, canActivate: [AuthGuard] },
  //   {
  //     path: 'favorites',
  //     component: FavoriteRecipientsComponent,
  //     canActivate: [AuthGuard],
  //   },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
