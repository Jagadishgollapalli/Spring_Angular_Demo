import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signup = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(10)])
  });

  constructor(private userService: UserService) { }

  show(){
    if (this.signup.valid) {
      this.userService.saveUser(this.signup.value).subscribe(response => {
        alert('User created successfully');
        this.signup.reset();
      }, error => {
        alert('Error creating user');
      });
    }
  }  
}
