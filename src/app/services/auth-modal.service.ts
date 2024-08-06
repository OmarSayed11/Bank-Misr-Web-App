// src/app/services/auth-modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthModalService {
  private loginVisibleSubject = new BehaviorSubject<boolean>(false);
  loginVisible$ = this.loginVisibleSubject.asObservable();

  private signupVisibleSubject = new BehaviorSubject<boolean>(false);
  signupVisible$ = this.signupVisibleSubject.asObservable();

  openLogin() {
    this.loginVisibleSubject.next(true);
    this.signupVisibleSubject.next(false);
  }

  closeLogin() {
    this.loginVisibleSubject.next(false);
  }

  openSignup() {
    this.signupVisibleSubject.next(true);
    this.loginVisibleSubject.next(false);
  }

  closeSignup() {
    this.signupVisibleSubject.next(false);
  }
}
