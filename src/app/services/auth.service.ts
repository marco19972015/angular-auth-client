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

  login(body: any){
    // Send a request to the register endpoint and send the body
    return this.http.post(`${environment.api}/login`, body, {withCredentials: true})
  }

  user(){
    // Send a get request to get user
    return this.http.get(`${environment.api}/user`);
  }

  refresh(){
    // Send a request to the refresh endpoint (with credidentials is needed because we need the new access token)
    return this.http.post(`${environment.api}/refresh`, {}, {withCredentials: true})
  }

  logout(){
    // Send a post request to the logout endpoint (with credidentials is needed because we need to remove the refresh access token cookie)
    return this.http.post(`${environment.api}/logout`, {}, {withCredentials: true})
  }

}
 