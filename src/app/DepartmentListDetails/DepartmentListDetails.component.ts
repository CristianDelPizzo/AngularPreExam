import { Component, OnInit } from '@angular/core';
import { Department } from '../DepartmentList/Department';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../DepartmentList/Department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-DepartmentListDetails',
  templateUrl: './DepartmentListDetails.component.html',
  styleUrls: ['./DepartmentListDetails.component.css']
})
export class DepartmentListDetailsComponent implements OnInit {

  department: Department

  constructor(private service: DepartmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.service.GetDepartment(id).subscribe(d => this.department = d)
  }

}
