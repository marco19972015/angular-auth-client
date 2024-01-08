import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  // We need the HttpClient 
  constructor(private http: HttpClient) { }

  // We need the environment (we can have the body or email)
  forgot(body: any) {
    return this.http.post(`${environment.api}/forgot`, body)
  }
}
