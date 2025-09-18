import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8080/api/accounts';

  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAccountById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(this.apiUrl, account);
  }

  updateAccount(id: number, account: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, account);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}