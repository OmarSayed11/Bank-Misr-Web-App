import { Component } from '@angular/core';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { AccountService } from '../../../services/account/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MobileSectionComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [AccountService], // Provide AccountService
})
export class SettingsComponent {
  accountNumber: string | null = localStorage.getItem('accNum');
  userName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';

  constructor(private accountService: AccountService) {}

  updateProfile(): void {
    if (this.accountNumber) {
      const updateData = {
        userName: this.userName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
      };

      this.accountService
        .updateAccount(this.accountNumber, updateData)
        .subscribe(
          (response) => {
            console.log('Profile updated successfully:', response);
          },
          (error) => {
            console.error('Error updating profile:', error);
          }
        );
    } else {
      console.error('Account number is not found in local storage.');
    }
  }
}
