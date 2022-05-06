import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://mario-dio-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }

  findByIdAccount(idAccount: any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idAccount}`);
  }

  // adicionando o método de inclusão (POST) via API
  create(movement: any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`, movement);
  }
}
