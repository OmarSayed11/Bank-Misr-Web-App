// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthModalService } from '../../services/auth-modal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [AuthService],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    public authModalService: AuthModalService,
    private router: Router
  ) {}

  onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.authenticate(credentials).subscribe(
      (response) => {
        const token = response.token;
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('accNum', response.accountNumber);
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
        this.authModalService.closeLogin();
      },
      (error) => {
        console.error('Error logging in:', error);
      }
    );
  }

  closeModal() {
    this.authModalService.closeLogin();
  }
}
