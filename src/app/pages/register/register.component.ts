import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Bang opperator to initialize later
  form!: FormGroup; 

  constructor(private formBuilder: FormBuilder, 
              // Used for making HTTP request to a server or interacting with a RESTful API
              private router: Router, 
              private authService: AuthService
              ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
    });
  }

  submit(){
    this.authService.register(this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/login'])
    );
  }

}
