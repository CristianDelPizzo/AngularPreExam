import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "https://localhost:44303/api/employees"

constructor(private http : HttpClient) { }

GetAllEmployees(): Observable<Employee[]>
{
  return this.http.get<Employee[]>(this.url)
}

}
