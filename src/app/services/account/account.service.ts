import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/accounts';
  private accountBalance =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/accounts/current-balance';
  private AccountUrl =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/accounts/details';
  private Gettransactions =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/transactions/transaction';
  private transferUrl =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/accounts/transfer';
  constructor(private http: HttpClient) {}

  // createAccount(accountData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}`, accountData);
  // }

  transferMoney(transferData: any): Observable<any> {
    return this.http.post(`${this.transferUrl}`, transferData);
  }

  updateAccount(accountId: string, updateData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${accountId}`, updateData);
  }
  updatePassword(
    accountNumber: string,
    updateData: { currentPassword: string; newPassword: string }
  ): Observable<any> {
    const url = `${this.baseUrl}?account-number=${accountNumber}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, updateData, { headers });
  }

  getAccountBalance(accountNumber: string): Observable<any> {
    const params = new HttpParams().set('account-number', accountNumber);
    return this.http.get(this.accountBalance, { params });
  }
  getAccountDetails(accountNumber: string): Observable<any> {
    const params = new HttpParams().set('account-number', accountNumber);
    return this.http.get(this.AccountUrl, { params });
  }
  getAccountTransactions(accountNumber: string): Observable<any> {
    const params = new HttpParams().set('account-number', accountNumber);
    return this.http.get(this.Gettransactions, { params });
  }
}
