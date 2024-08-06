import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { HeaderComponent } from '../../header/header.component';
import { FavouritePopUpComponent } from '../favourite-pop-up/favourite-pop-up.component';
import { NgIf } from '@angular/common';
import { AccountService } from '../../../services/account/account.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    MobileSectionComponent,
    HeaderComponent,
    FavouritePopUpComponent,
    NgIf,
  ],
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css'],
  providers: [AccountService],
})
export class MoneyTransferComponent {
  accountNumber: string | null = localStorage.getItem('accNum');
  accountNum: string | null = null;
  amount: number | null = null;
  sendCurrency: string = 'USD';
  recipientAmount: number | null = null;
  recipientCurrency: string = 'USD';
  recipientName: string | null = null;
  recipientEmail: string | null = null;
  isFavouritePopupVisible = false;

  constructor(private accountService: AccountService) {}

  transferMoney() {
    const transferData = {
      fromId: 6,
      toAccountNumber: this.accountNum,
      amount: this.amount,
    };

    this.accountService.transferMoney(transferData).subscribe(
      (response) => {
        console.log('Transfer successful:', response);
      },
      (error) => {
        console.error('Transfer failed:', error);
      }
    );
  }

  openFavouritePopup() {
    this.isFavouritePopupVisible = true;
  }

  closeFavouritePopup() {
    this.isFavouritePopupVisible = false;
  }
}
