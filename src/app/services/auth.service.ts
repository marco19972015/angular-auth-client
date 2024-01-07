import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken = '';


  // In this service we can have a prefix for all the endpoints 

  constructor(private http: HttpClient) { }

  register(body: any){
    // Send a request to the register endpoint and send the body
    return this.http.post(`${environment.api}/register`, body)
  }

  // From login we can an access and a refresh token
  // The access token comes from the response
  // The refresh token needs an option withCredentials: true,
  // The withCredentials option in an HTTP request in Angular determines whether to include credentials
  // such as cookies or HTTP authentication in the request. 
  // When set to true, it indicates that the browser should inclde credentials with the request

  login(body: any){
    // Send a request to the register endpoint and send the body
    return this.http.post(`${environment.api}/login`, body, {withCredentials: true})
  }
}
