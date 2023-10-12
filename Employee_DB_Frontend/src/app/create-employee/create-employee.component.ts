import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    job: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
  });

  constructor(private employees: EmployeesService, private router: Router) {}

  onSubmit() {
    // console.log(this.form.get('name')?.value);
    this.employees
      .createEmployees(
        this.form?.get('name')?.value,
        this.form?.get('age')?.value,
        this.form?.get('job')?.value,
        this.form?.get('location')?.value,
        this.form?.get('email')?.value
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/table']);
    this.form.reset();
  }
}
