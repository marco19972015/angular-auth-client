import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Router is responsible for managing navigation in the application, allowing us to define the navigation paths,
// handle route parameters, and load components based on the request routes. It also enables creation of SPAs by updating the 
// content of the application dynamically without a full page reload
import { Router } from '@angular/router';

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
              private http: HttpClient, 
              private router: Router
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
    // Send the post request to the backend port num
    this.http.post('http://localhost:8002/api/register', this.form.getRawValue()).subscribe(
      () => this.router.navigate(['/login'])
    )
  }

}
