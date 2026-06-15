import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginRequest = {
    username: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: Auth
  ) {}

  login() {

    this.authService.login(this.loginRequest).subscribe({

      next: (response) => {

        console.log(response);

        const token = response.object[0].token;
        this.authService.saveToken(token);
        localStorage.setItem('role', response.object[0].role);
        alert(response.message);

        this.router.navigate(['/dashboard']);
      },

      error: (error) => {
        alert(error.error?.message || 'Invalid Username or Password');
      }
    });
  }
  
goToRegister() {
  this.router.navigate(['/register']);
}

}
