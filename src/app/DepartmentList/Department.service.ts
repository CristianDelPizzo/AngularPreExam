import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Department } from './Department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url="https://localhost:44303/api/departments";

constructor(private http : HttpClient) { }

  GetAllDepartments(): Observable<Department[]>
  {
    return this.http.get<Department[]>(this.url)
  }

  GetDepartment(id: number) : Observable<Department> 
  {
    return this.GetAllDepartments().pipe(map((
      departments: Department[]) => departments.find(d => d.id == id)))
  }

}


