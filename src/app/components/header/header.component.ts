import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalService } from '../../services/auth-modal.service';
import { AccountService } from '../../services/account/account.service';
import { Router } from '@angular/router'; // Import Router
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule], // Import any necessary Angular modules
})
export class HeaderComponent implements OnInit {
  username: string | null = null;
  email: string | null = null;
  isLoggedIn: boolean = false;
  accountNumber: string | null = null;
  showDropdown: boolean = false;
  ngOnInit() {
    const token = localStorage.getItem('authToken');
    this.accountNumber = localStorage.getItem('accNum'); // Assuming username is stored in local storage
    if (this.accountNumber) {
      this.getAccountDetails(this.accountNumber);

      console.log(this.accountNumber);
    }
    if (token || localStorage.getItem('accNum')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  constructor(
    private authModalService: AuthModalService,
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient
  ) {}
  getAccountDetails(accountNumber: string): void {
    this.accountService.getAccountDetails(accountNumber).subscribe(
      (response) => {
        this.email = response.email;
        this.username = response.userName;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching account balance:', error);
      }
    );
  }
  openLoginModal() {
    this.authModalService.openLogin();
  }

  openSignupModal() {
    this.authModalService.openSignup();
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  navigateToProfile() {
    this.router.navigate(['/account/profile']);
  }
  navigateToAccount() {
    this.router.navigate(['/account']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToMoneytransfer() {
    this.router.navigate(['/moneytransfer']);
  }
  navigateToPaymenthistory() {
    this.router.navigate(['/account/paymenthistory']);
  }
  navigateToChangepassword() {
    this.router.navigate(['/account/changepassword']);
  }

  navigateToSettings() {
    this.router.navigate(['/account/settings']);
  }
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('accNum');
    this.isLoggedIn = false;
    this.username = null;
    this.http
      .post(
        'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/auth/logout',
        {}
      )
      .subscribe({
        next: () => {},
        error: (err) => {
          console.error('Logout error:', err);
        },
      });
    this.router.navigate(['/home']);
  }
}
