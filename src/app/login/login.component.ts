import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';  // Import the Router service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  login = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  constructor(private userService: UserService, private router: Router) {
  }

  loginUser(){
    if (this.login.valid) {
      this.userService.LoginUser(this.login.value).subscribe(response => {
        alert('Login Success');
        this.login.reset();
        this.router.navigate(['/orders']);
      }, error => {
        alert('Error Login');
      });
    }
  }  
}
