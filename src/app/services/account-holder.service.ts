import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://mario-dio-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/correntistas`);
  }

  create(accountHolder: any): Observable<any> {
    return this.http.post(`${baseUrl}/correntistas`, accountHolder);
  }
}