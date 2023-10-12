import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  displayedColumns: string[] = [
    'number',
    'name',
    'age',
    'job',
    'location',
    'email',
    'edit',
    'delete',
  ];
  employeesData: any = [];

  constructor(
    private employeesServ: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeesServ.getEmployees().subscribe((data) => {
      this.employeesData = data;
    });
  }

  editItem(id: any) {
    this.router.navigate([`/update/${id}`]);
  }

  deleteItem(id: any) {
    this.employeesServ.removeEmployee(id).subscribe((data) => {
      console.log(data);
    });
    this.employeesServ.getEmployees().subscribe((data) => {
      this.employeesData = data;
    });
  }
}
