// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/Auth/auth.service';
import { NgIf } from '@angular/common';
import { SignupComponent } from './components/sign up/signup.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, SignupComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'speedo-transfer';

  constructor(public authService: AuthService) {}

  ngOnInit() {}
}
