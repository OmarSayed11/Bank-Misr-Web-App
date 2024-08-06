import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseUrl = 'http://localhost:8080/api/v1/transactions';

  constructor(private http: HttpClient) {}

  getTransactionHistory(
    accountId: string,
    pageNo: number,
    pageSize: number,
    sortBy: string
  ): Observable<any> {
    return this.http.get(`${this.baseUrl}/${accountId}`, {
      params: {
        pageNo: pageNo.toString(),
        pageSize: pageSize.toString(),
        sortBy,
      },
    });
  }
}
