import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get('http://localhost:3000/api/employees');
  }
  createEmployees(
    name: string,
    age: number,
    job: string,
    location: string,
    email: string
  ) {
    return this.http.post('http://localhost:3000/api/employees', {
      name: name,
      age: age,
      job: job,
      location: location,
      email: email,
    });
  }

  removeEmployee(id: string) {
    return this.http.delete(`http://localhost:3000/api/employees/${id}`);
  }

  updateEmployee(
    id: string,
    name: string,
    age: number,
    job: string,
    location: string,
    email: string
  ) {
    return this.http.put(`http://localhost:3000/api/employees/${id}`, {
      name: name,
      age: age,
      job: job,
      location: location,
      email: email,
    });
  }

  getSingleEmployee(id: string) {
    return this.http.get(`http://localhost:3000/api/employees/${id}`);
  }
}
