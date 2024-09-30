import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  saveUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/users", user);
  }

  LoginUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login", user);
  }

}
