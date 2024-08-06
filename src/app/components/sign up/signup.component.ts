// src/app/components/sign-up/sign-up.component.ts
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthModalService } from '../../services/auth-modal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [AuthService],
})
export class SignupComponent {
  username = '';
  email = '';
  country = '';
  branch = 'MAIN';
  day = '';
  month = '';
  year = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    public authModalService: AuthModalService
  ) {}

  passwordMatchValidator() {
    return this.password === this.confirmPassword;
  }

  onSubmit() {
    if (this.passwordMatchValidator()) {
      const formattedMonth = this.month.padStart(2, '0');
      const formattedDay = this.day.padStart(2, '0');

      const user = {
        userName: this.username,
        email: this.email,
        country: this.country,
        branch: this.branch,
        dateOfBirth: `${this.year}-${formattedMonth}-${formattedDay}`,
        password: this.password,
      };

      this.authService.register(user).subscribe(
        (response) => {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('accNum', response.accountNumber);
          console.log('Account created successfully:', response);
          this.authModalService.closeSignup();
        },
        (error) => {
          console.error('Error creating account:', error);
        }
      );
    } else {
      console.error('Passwords do not match');
    }
  }

  closeModal() {
    this.authModalService.closeSignup();
  }
}
