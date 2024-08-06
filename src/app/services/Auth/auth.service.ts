// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/auth/register';
  private authenticateUrl =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/auth/authenticate';

  private isLoggedIn = false;
  private showModalSubject = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  authenticate(credentials: any): Observable<any> {
    return this.http.post(this.authenticateUrl, credentials);
  }

  login(email: string, password: string): Observable<any> {
    // Mock login implementation
    this.isLoggedIn = true;
    return of({ success: true });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  showLoginModal(): void {
    this.showModalSubject.next(true);
  }

  closeLoginModal(): void {
    this.showModalSubject.next(false);
  }

  shouldShowModal(): boolean {
    return this.showModalSubject.getValue();
  }
}
