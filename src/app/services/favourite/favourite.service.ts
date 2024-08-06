import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  accountNumber: string | null = localStorage.getItem('accNum');

  private baseUrl =
    'https://money-transfer-430a47bbe633.herokuapp.com/api/v1/favorites';

  constructor(private http: HttpClient) {}

  createFavorite(favoriteData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, favoriteData);
  }

  getFavorites(accountNumber: string): Observable<any> {
    return this.http.get(this.baseUrl, {
      params: { 'account-number': accountNumber },
    });
  }

  deleteFavorite(
    accountNumber: string,
    recipientAccNumber: string
  ): Observable<any> {
    return this.http.delete(this.baseUrl, {
      params: {
        'account-number': accountNumber,
        'recipient-account-number': recipientAccNumber,
      },
    });
  }
}
