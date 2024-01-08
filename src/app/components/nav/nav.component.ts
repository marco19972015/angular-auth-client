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
    this.authService.user().subscribe({
      next: (res: any) => {
        this.authenticated = true;
      },
    error: err => {
      this.authenticated = false;
    }
    });
  }

  logout(){
    this.authService.logout().subscribe(() =>{
      // reset the access token in the observer
      this.authService.accessToken = '';
    })
  }

}
