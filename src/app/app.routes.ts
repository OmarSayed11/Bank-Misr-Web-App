import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/sign up/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { MobileSectionComponent } from './components/mobile-section/mobile-section.component';

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
