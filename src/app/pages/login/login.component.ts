import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   // Bang opperator to initialize later
   form!: FormGroup; 

   constructor(private formBuilder: FormBuilder, 
               // Used for making HTTP request to a server or interacting with a RESTful API
               private router: Router, 
               private authService: AuthService
               ){}
 
   ngOnInit(): void {
     this.form = this.formBuilder.group({
       email: '',
       password: '',
     });
   }
 
   submit(){
     this.authService.login(this.form.getRawValue()).subscribe(
       (res: any) => {
        this.authService.accessToken = res.token;
        // when we login we need to send the event that we are authenticated
        AuthService.authEmitter.emit(true);
        this.router.navigate(['/'])
      }
     );
   }
 
}
