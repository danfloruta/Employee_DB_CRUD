import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Employee_DB';
  employeesData: any = [];

  constructor(private employees: EmployeesService) {}

  ngOnInit(): void {
    this.employees.getEmployees().subscribe((data) => {
      this.employeesData = data;
    });
  }
}
