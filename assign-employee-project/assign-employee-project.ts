import { ChangeDetectorRef, Component } from '@angular/core';
import { EmployeeProject } from '../services/employee-project';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project-service';
import { EmployeeService } from '../services/employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-employee-project',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './assign-employee-project.html',
  styleUrl: './assign-employee-project.css',
})
export class AssignEmployeeProject {

  //  assignment = {
  //   employeeId: null,
  //   projectId: null,
  //   assignedDate: ''
  // };

  assignment = {
  employeeId: null as number | null,
  projectId: null as number | null,
  assignedDate: ''
  };

  employees: any[] = [];
  projects: any[] = [];

  message: string = '';

  constructor(private service: EmployeeProject,
    private employeeService: EmployeeService,
    private projectService: ProjectService,private router: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.assignment.assignedDate = new Date()
      .toISOString()
      .split('T')[0];

    this.loadEmployees();
    this.loadProjects();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe({
      next: (res:any) => {
        this.employees = res.object;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (res:any) => {
        this.projects = res.object;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  assign(assignForm: NgForm) {
    this.assignment.assignedDate = new Date()
    .toISOString()
    .split('T')[0];

    this.service.assignEmployeeToProject(this.assignment)
      .subscribe({
        next: (res) => {

          alert(res.message);
  
          assignForm.resetForm({
            employeeId: null,
            projectId: null,
            assignedDate: ''
          });

        },
        error: (err) => {
          alert(err.error?.message ||
            'Failed To Assign Employee');
        }
      });
  }

  goToDashboard() {
  this.router.navigate(['/dashboard']);
}

}
