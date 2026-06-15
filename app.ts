import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { UserRegistration } from './user-registration/user-registration';

@Component({
  selector: 'app-root',
  standalone: true,
  ///imports: [RouterOutlet,EmployeeList,UserRegistration],
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('form-page');
}
