import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  accountNumber: string | null = localStorage.getItem('accNum');

  private baseUrl = 'http://localhost:8080/api/v1/favorites';
  private GetbaseUrl = 'http://localhost:8080/api/v1/favorites';

  constructor(private http: HttpClient) {}

  createFavorite(favoriteData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, favoriteData);
  }

  getFavorites(accountNumber: string): Observable<any> {
    return this.http.get(this.GetbaseUrl, {
      params: { 'account-number': accountNumber },
    });
  }

  deleteFavorite(accountId: string, recipientName: string): Observable<any> {
    return this.http.delete(this.baseUrl, {
      params: { 'account-id': accountId, 'recipient-name': recipientName },
    });
  }
}
