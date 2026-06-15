import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { form } from '@angular/forms/signals';
import { EmployeeService } from '../services/employee-service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.css',
})
export class UserRegistration {

  user = {
    username: '',
    password: '',
    role: 'EMPLOYEE',
    // departmentId: null,
    // email: ''
  };

  role: string = '';
  departments: any[] = [];
  constructor(private http: HttpClient,private router: Router,private authService: Auth,private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
    console.log(this.role)

    this.loadDepartments();
  }
  register(form: any) {
    this.authService.register(this.user).subscribe({
      next: (res) => {
        alert(res.message);

        form.resetForm({
        username: '',
        password: '',
        role: 'EMPLOYEE'
      });
      },
      error: (err) => {
        alert(err.error.message || 'Registration Failed');
      }
    });
  }

  goToLogin() {
  this.router.navigate(['/login']);
}

loadDepartments() {
    this.employeeService.getDepartments().subscribe({
      next: (response) => {
        this.departments = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
