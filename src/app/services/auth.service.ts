import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // BE URL

  constructor(private http: HttpClient) {}

  // Login
  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  // Signup
  signup(username: string, password: string, email: string, phone: string): Observable<any> {
    const body = { username, password, email, phone };
    return this.http.post<any>(`${this.apiUrl}/signup`, body);
  }
}


