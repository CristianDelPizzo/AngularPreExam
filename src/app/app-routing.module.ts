import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './DepartmentList/DepartmentList.component';
import { EmployeeListComponent } from './EmployeeList/EmployeeList.component';
import { DepartmentListDetailsComponent } from './DepartmentListDetails/DepartmentListDetails.component';

const routes: Routes = [
  {
  path: "Department",
  component: DepartmentListComponent
  },
  {
    path: "Employee",
    component: EmployeeListComponent
  },
  {
    path: "details/:id",
    component: DepartmentListDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
