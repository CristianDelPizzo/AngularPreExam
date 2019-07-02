import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './DepartmentList/DepartmentList.component';
import { EmployeeListComponent } from './EmployeeList/EmployeeList.component';
import { DepartmentService } from './DepartmentList/Department.service';
import { EmployeeService } from './EmployeeList/Employee.service';
import { DepartmentListDetailsComponent } from './DepartmentListDetails/DepartmentListDetails.component';

@NgModule({
   declarations: [
      AppComponent,
      DepartmentListComponent,
      EmployeeListComponent,
      DepartmentListDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      DepartmentService,
      EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
