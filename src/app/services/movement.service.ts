import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacao`);
  }

  // adicionando o método de inclusão (POST) via API
  create(movement: any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacao`, movement);
  }
}
