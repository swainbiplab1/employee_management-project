import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-employee.html',
  styleUrl: './view-employee.css',
})
export class ViewEmployee implements OnInit {

  departments: any[] = [];

  showModal = false;

  selectedEmployee: any = {
    employeeId: null,
    name: '',
    email: '',
    departmentId: null
  };

  employees: any[] = [];

  constructor(private empService: EmployeeService, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit() {
    this.loadEmployees();
    this.loadDepartments();
  }

  loadDepartments() {
  this.empService.getDepartments().subscribe({
    next: (res: any) => {
      this.departments = res;
    },
    error: (err) => {
      console.log(err);
    }
  });
}

  loadEmployees() {
    this.empService.getAll().subscribe({
      next: (res) => {
        console.log("API RESPONSE:", res);
        if (res.code === 'FAILED') {
          this.employees = [];
          return;
        }
        this.employees = res.object || [];

        this.cdr.detectChanges();

        console.log("EMPLOYEES:", this.employees);
      },
      error: (err) => {
        console.error("API ERROR:", err);
      }
    });
  }


  deleteEmployee(id: number) {

    if (!confirm('Are you sure you want to delete this Employee?')) {
      return;
    }

    console.log(id+"id");
    

    this.empService.delete(id).subscribe({
      next: (res) => {

        alert('Employee Deleted Successfully');

        this.loadEmployees();

      },
      error: (err) => {

        console.log(err);

        alert(
          err.error?.message ||
          'Failed to delete Employee'
        );

      }
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openUpdateModal(emp: any) {

    this.selectedEmployee = {
      employeeId: emp.employeeId,
      name: emp.name,
      email: emp.email,
      departmentId: emp.departmentId
    };

    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

  updateEmployee() {

    this.empService
      .updateEmployee(
        this.selectedEmployee.employeeId,
        this.selectedEmployee
      )
      .subscribe({

        next: (res) => {

          alert('Employee Updated Successfully');

          this.closeModal();

          this.loadEmployees();
        },

        error: (err) => {
          alert(err.error?.message ||
            'Failed To Update Employee');
        }
      });
  }
}
