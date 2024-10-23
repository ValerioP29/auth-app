import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email = '';
  password = '';
  name = '';
  constructor (private authService: AuthService, private router: Router){}

  register(){
    if (this.authService.register(this.email, this.password, this.name)){
      this.router.navigate(["/profile"]);
    }
  }
}
