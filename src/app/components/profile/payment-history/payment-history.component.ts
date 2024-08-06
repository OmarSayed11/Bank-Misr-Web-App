import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [
    HttpClientModule,
    FooterComponent,
    MobileSectionComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css',
  providers: [AccountService],
})
export class PaymentHistoryComponent implements OnInit {
  accountNumber: string | null = localStorage.getItem('accNum');

  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    if (this.accountNumber) {
      this.getAccountTransactions(this.accountNumber);

      console.log(this.accountNumber);
    }
  }
  getAccountTransactions(accountNumber: string): void {
    this.accountService.getAccountTransactions(accountNumber).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error fetching account balance:', error);
      }
    );
  }
}
