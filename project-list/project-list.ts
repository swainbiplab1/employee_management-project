import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../services/project-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList implements OnInit {

  project = {
    projectName: '',
    startDate: '',
    endDate: ''
  };

  projects: any[] = [];

  constructor(private http: HttpClient,private projectService: ProjectService,private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  createProject(form: any) {
    this.projectService.createProject(this.project).subscribe({
      next: (response) => {

        alert(response.message);

        form.resetForm({
        projectName: '',
        startDate: '',
        endDate: ''
      });
        this.getProjects();
      },
      error: (error) => {
        alert(error.error?.message || 'Failed To Create Project');
      }
    });
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (res:any) => {
        this.projects = res.object;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToViewProjects() {
    this.router.navigate(['/view-projects']);
  }
  
  goToDashboard() {
  this.router.navigate(['/dashboard']);
}
}
