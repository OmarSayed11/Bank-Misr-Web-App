import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private router: Router) {}
  navigateToPaymenthistory() {
    this.router.navigate(['/account/paymenthistory']);
  }
  navigateToChangepassword() {
    this.router.navigate(['/account/changepassword']);
  }
  navigateToSettings() {
    this.router.navigate(['/account/settings']);
  }
}
