import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  authenticated = false;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(){
    // The authenticated comes from the home component which lets us know if we are or not authenticated
    AuthService.authEmitter.subscribe( (authenticated) => {
      this.authenticated = authenticated;
    })
  }

  logout(){
    this.authService.logout().subscribe(() =>{
      // reset the access token in the observer
      this.authService.accessToken = '';
      // become unauthenticated
      AuthService.authEmitter.emit(false);
    })
  }

}
