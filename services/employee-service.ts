import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9099/employees';
  private deptBaseUrl = 'http://localhost:9099';

  constructor(private http: HttpClient) { }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, employee);
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.deptBaseUrl}/departments`);
  }

  // getAll(): Observable<any> {
  // return this.http.get<any>(`${this.baseUrl}/all`),;
  // }

  getAll(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/all`,
      this.getAuthHeaders()
    );
  }

  // updateEmployee(id: number, employee: any) {
  // return this.http.put(
  //   `http://localhost:8080/employees/${id}`,
  //   employee
  // );
  // }

  updateEmployee(id: number, emp: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, emp, this.getAuthHeaders());
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.getAuthHeaders());
  }
}
