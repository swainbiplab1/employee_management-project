import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class EmployeeProject {

  private baseUrl = 'http://localhost:9099/api/employee-projects';

  constructor(private http: HttpClient,private authService: Auth) {}

  private getHeaders() {
    //const token = localStorage.getItem('token');
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        Authorization: token ? `Bearer ${token}` : ''
      })
    };
  }

  assignEmployeeToProject(data: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/assign`,
      data,
      this.getHeaders()
    );
  }

  getAssignedProjects(): Observable<any> {
  return this.http.get(
    `${this.baseUrl}/view`,
    this.getHeaders()
  );
}
}
