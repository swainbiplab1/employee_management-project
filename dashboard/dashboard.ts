import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  role: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role') || '';
    console.log(this.role)
  }

  employeeList() {
    this.router.navigate(['/employees']);
  }

  viewEmployeeList() {
    this.router.navigate(['/viewEmployee']);
  }

  projectList() {
    this.router.navigate(['/projects']);
  }

  viewProjectList() {
    this.router.navigate(['/view-projects']);
  }
  

  assignProject() {
    this.router.navigate(['/assign-project']);
  }

  viewAssignedProjects() {
    this.router.navigate(['/view-assigned-projects']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
