import { Routes } from '@angular/router';
import { UserRegistration } from './user-registration/user-registration';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { EmployeeList } from './employee-list/employee-list';
import { ProjectList } from './project-list/project-list';
import { ViewAssignedProjects } from './view-assigned-projects/view-assigned-projects';
import { ViewEmployee } from './view-employee/view-employee';
import { AssignEmployeeProject } from './assign-employee-project/assign-employee-project';
import { ViewProject } from './view-project/view-project';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'register',
    component: UserRegistration
  },

  {
    path: 'login',
    component: Login
  },
   {
    path: 'dashboard',
    component: Dashboard
  },
  {
  path: 'employees',
  component: EmployeeList
},
{
  path: 'projects',
  component: ProjectList
},
{ path: 'view-projects', component: ViewProject },
{
  path: 'view-assigned-projects',
  component: ViewAssignedProjects
},
{
  path: 'viewEmployee',
  component: ViewEmployee
},
{ path: 'assign-project', 
  component: AssignEmployeeProject
},
// { path: '',
//   redirectTo: 'assign-project',
//   pathMatch: 'full' 
// }
];
