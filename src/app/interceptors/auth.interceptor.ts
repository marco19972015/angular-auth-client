// The functionality we want to implement is we need to add a bearer token for every request
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

  // An interceptor is a service that can be used to intercept HTTP request and responses.
  // Interceptors provide a way to pre-process and post-process HTTP request and responses globally within an Angular application.
  // They are commonly used for tasks such as adding headers, logging, error handling, or modifying the request/response before it reaches 
  // the server or after it comes back

  // The purpose of the interceptor file is to centralize and encapsulate the logic related to intercepting 
  // HTTP requests and responses, making it easier to manage and maintain this functionality across the Angular application
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // 1. This class contains the access token, which we need to add it to every header
  constructor(private authService: AuthService) {}

  // HttpInterceptor interface requires us to implement 'intercept' method, where we can define the logic for 
  // intercepting and modyfing HTTP requests and responses
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // 2. To provide it to every header we have to clone the request
      // We need to clone it becuase the request value is immutable, thefore we can't change it
    const req = request.clone({  // The only way to change the header is by creating a new request variable
      setHeaders: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
    // 3. When we handle the next request we pass in the variable on top
    return next.handle(req);
  }
}
