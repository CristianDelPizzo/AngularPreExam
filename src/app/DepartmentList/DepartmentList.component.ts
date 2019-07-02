import { Component, OnInit } from '@angular/core';
import { Department } from './Department';
import { DepartmentService } from './Department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DepartmentList',
  templateUrl: './DepartmentList.component.html',
  styleUrls: ['./DepartmentList.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[]

  constructor(private service: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.service.GetAllDepartments().subscribe(
      data => this.departments = data
    )
  }

  ShowDetails(id: Department) {
    this.router.navigate(["/details", id])
  }
}
