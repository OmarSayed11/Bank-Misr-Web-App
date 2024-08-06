import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MobileSectionComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [AccountService],
})
export class ChangePasswordComponent {
  accountId: string | null = localStorage.getItem('accNum');
  currentPassword: string = '';
  newPassword: string = '';

  constructor(private accountService: AccountService) {}

  updatePassword(): void {
    if (this.accountId) {
      const updateData = {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
      };

      this.accountService.updatePassword(this.accountId, updateData).subscribe(
        (response) => {
          console.log('Password updated successfully:', response);
        },
        (error) => {
          console.error('Error updating password:', error);
        }
      );
    } else {
      console.error('Account ID is not found in local storage.');
    }
  }
}
