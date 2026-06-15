import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private baseUrl = 'http://localhost:9099/projects';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  createProject(project: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, project);
  }

  updateProject(id: number, project: any) {
    return this.http.put(
      `${this.baseUrl}/${id}`,
      project
    );
  }
  // deleteProject(id: number) {
  // return this.http.delete(`${this.baseUrl}/${id}`);
  // }
  deleteProject(id: number) {
  return this.http.delete(`http://localhost:9099/projects/${id}`);
  }
}
