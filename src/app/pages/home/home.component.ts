import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  message = 'Hello ';


  constructor(
    private authService: AuthService
  ){}

  ngOnInit(){
    this.authService.user().subscribe({
      next: (res: any) => {
        this.message = `Hi ${res.first_name} ${res.last_name}`;
        // When we are athenticated we call 
        AuthService.authEmitter.emit(true);  // This means we are authenticated
      },
      error: err => {
        this.message = `You are not authenticated`;
        AuthService.authEmitter.emit(false);  // This means we are not authenticated
      }
    });
  }

}
