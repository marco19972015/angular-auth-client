import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForgotService } from 'src/app/services/forgot.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  // Notifications to let user know the email was sent
  cls = '';  // Class name in boostrap
  message = '';

  // Bang opperator to initialize later
  form!: FormGroup; 

  constructor(private formBuilder: FormBuilder, 
              private forgotService: ForgotService){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
    });
  }

  submit(){
    this.forgotService.forgot(this.form.getRawValue()).subscribe({
      next: () => {
        this.cls = 'success';
        this.message = 'Email was sent';
      },
      error: () => {
        this.cls = 'danger';
        this.message = 'Error occorred';
      }
    })
  }

}
