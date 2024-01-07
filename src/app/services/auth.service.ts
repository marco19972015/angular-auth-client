import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // In this service we can have a prefix for all the endpoints 

  constructor(private http: HttpClient) { }

  register(body: any){
    // Send a request to the register endpoint and send the body
    return this.http.post(`${environment.api}/register`, body)
  }
}
