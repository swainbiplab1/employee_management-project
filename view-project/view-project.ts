import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project-service';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-project.html',
  styleUrl: './view-project.css',
})
export class ViewProject implements OnInit{

  showModal = false;

  selectedProject: any = {
    projectId: null,
    projectName: '',
    startDate: '',
    endDate: '',
    createdBy: null
  };
  projects: any[] = [];

  constructor(private projectService: ProjectService,private cdr: ChangeDetectorRef,private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (res:any) => {
        this.projects = res.object || [];

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteProject(id: number) {

  if (!confirm('Are you sure you want to delete this project?')) {
    return;
  }

  this.projectService.deleteProject(id).subscribe({
    next: (res:any) => {

      alert(res.message);

      this.loadProjects();

    },
    error: (err) => {

      console.log(err);

      alert(
        err.error?.message ||
        'Failed to delete Project'
      );

    }
  });
}

goToDashboard() {
  this.router.navigate(['/dashboard']);
}

openUpdateModal(project: any) {

  this.selectedProject = {
    projectId: project.projectId,
    projectName: project.projectName,
    startDate: project.startDate,
    endDate: project.endDate,
    createdBy: project.createdBy
  };

  this.showModal = true;
}
closeModal() {
  this.showModal = false;
}

updateProject() {

  this.projectService
      .updateProject(
        this.selectedProject.projectId,
        this.selectedProject
      )
      .subscribe({
        next: (res: any) => {
          alert(res.message || 'Project Updated Successfully');
          this.closeModal();
          this.loadProjects();
        },
        error: (err) => {
          alert(err.error?.message ||
            'Failed To Update Project');
        }
      });
}
}
