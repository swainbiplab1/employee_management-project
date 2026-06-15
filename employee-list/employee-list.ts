import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee-service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{

   employee = {
    name: '',
    email: '',
    departmentId: null
  };
 departments: any[] = [];

  constructor(private http: HttpClient,private employeeService: EmployeeService,private router: Router) {}

  ngOnInit(): void {
    this.loadDepartments();
    
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

  createEmployee(form: any) {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {

        alert(response.message);

        form.resetForm({
        name: '',
        email: '',
        departmentId: null
      });
      },
      error: (error) => {
        alert(error.error?.message ||
            'Failed To Create Employee');
      }
    });
  }

  goToViewEmployees() {
  this.router.navigate(['/viewEmployee']);
  }

  goToDashboard() {
  this.router.navigate(['/dashboard']);
}
}
