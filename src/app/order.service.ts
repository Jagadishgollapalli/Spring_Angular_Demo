import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/total-orders");
  }

  getOrderById(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order/${id}`);
  }

  deleteOrderById(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/orders/${id}`);
  }

}
