import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForgotService } from 'src/app/services/forgot.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{

  // Bang opperator to initialize later
  form!: FormGroup; 
  
  constructor(private formBuilder: FormBuilder, 
              private forgotService: ForgotService){}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: '',
      password_confirm: '',
    });
  }
  
  submit(){
    this.forgotService.forgot(this.form.getRawValue()).subscribe( () => {
      
    })
  }

}
