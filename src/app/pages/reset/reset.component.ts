import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotService } from 'src/app/services/forgot.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{
  // ActivatedRoute is a service provided by the Angular Router module. It represents the route that 
  // is currently active and contains information about the route, its parameters, data, and the route's
  // associated component. The `ActivateRoute` service allows us to access information about the currently active 
  // route in our angular applciaton

  // snapshot - provides a snapshot of the route information at the moment the component was created. We can access
  // parameters, data, and other infromation directly from the snapshot

  // params - this property in an observable that allows us to subscribe to changes in the route parameter.
  // This is useful when dealing with dynamic route parameters

  // data - This property provides access to the static data associated with the route. We can define data in 
  // in the route configuration. 

  // Bang opperator to initialize later
  form!: FormGroup; 
  
  constructor(private formBuilder: FormBuilder, 
              private forgotService: ForgotService,
              // route used to get token from the URL
              private route: ActivatedRoute,
              private router: Router
              ){}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: '',
      password_confirm: '',
    });
  }
  
  submit(){
    const formData = this.form.getRawValue()
    const data = {
      // Below I have password and password confirm
      // I spread the properties of formData and 
      ...formData,
      // add the new property token
      token: this.route.snapshot.params['token']  // matches name to the token in Routes 
    }


    this.forgotService.reset(data).subscribe( () => {
      // after the data is sent we want to re-direct
      this.router.navigate(['/login'])
    })
  }

}
