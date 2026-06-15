import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeProject } from '../services/employee-project';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-assigned-projects',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-assigned-projects.html',
  styleUrl: './view-assigned-projects.css',
})
export class ViewAssignedProjects implements OnInit{

  assignments: any[] = [];

  constructor(private service: EmployeeProject,private cdr: ChangeDetectorRef,private router: Router) {}

  ngOnInit() {
    this.loadAssignments();
  }

  loadAssignments() {
    this.service.getAssignedProjects().subscribe({
      next: (res) => {
        this.assignments = res.object || [];

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  goToDashboard() {
  this.router.navigate(['/dashboard']);
}
}
