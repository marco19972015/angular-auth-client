// The functionality we want to implement is we need to add a bearer token for every request
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

  // The purpose of the interceptor file is to centralize and encapsulate the logic related to intercepting 
  // HTTP requests and responses, making it easier to manage and maintain this functionality across the Angular application
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({  
      setHeaders: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });

    // We want to pass all the errors down the pipe
    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      // If the err is a 401 error then
      if(err.status === 401){
        // retry to send the request to the refresh token
        return this.authService.refresh().pipe(
          // if successful, res will contain the access token 
          switchMap((res: any) => {
            // Set the access token
            this.authService.accessToken = res.token;

            // Re-du the same next handle request as the return 
            return next.handle(request.clone({  // We need to clone because the token might be expired
              setHeaders: {
                Authorization: `Bearer ${this.authService.accessToken}`
              }
            }));
          })
        );
      }
      // If fails, throwError 
      return throwError(() => console.error(err))
    }));
  }
}
