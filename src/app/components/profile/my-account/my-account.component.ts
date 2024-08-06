import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AccountService } from '../../../services/account/account.service';
import { TransferComComponent } from '../transferComp/transfer-Comp.component';
import { MoneyTransferComponent } from '../../transfer/money-transfer/money-transfer.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    HttpClientModule,
    FooterComponent,
    MobileSectionComponent,
    HeaderComponent,
    SidebarComponent,
    RouterModule,
    MoneyTransferComponent,
    TransferComComponent,
  ],
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css'],
  providers: [AccountService], // Provide AccountService
})
export class MyAccountComponent implements OnInit {
  accountNumber: string | null = localStorage.getItem('accNum');
  balance: number | null = null;
  username: string | null = null;
  email: string | null = null;
  phone: string | null = '01099338262';
  gender: string | null = 'male';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    if (this.accountNumber) {
      this.getAccountDetails(this.accountNumber);
      this.getAccountBalance(this.accountNumber);
      console.log(this.accountNumber);
    }
  }

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
  getAccountBalance(accountNumber: string): void {
    this.accountService.getAccountBalance(accountNumber).subscribe(
      (response) => {
        this.balance = response;
        console.log('balance->', this.balance);
      },
      (error) => {
        console.error('Error fetching account balance:', error);
      }
    );
  }
}
