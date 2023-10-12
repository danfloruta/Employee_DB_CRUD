import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  id: any = '';
  initialData: any = {};
  formUpdate: FormGroup = new FormGroup({
    name: new FormControl(
      this.initialData?.name?.value || null,
      Validators.required
    ),
    age: new FormControl(null, Validators.required),
    job: new FormControl(null, Validators.required),
    location: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
  });

  constructor(
    private employees: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.employees.getSingleEmployee(this.id).subscribe((data) => {
      this.initialData = data;
      this.formUpdate.patchValue(this.initialData);
    });
  }

  onSubmit() {
    // if by submit they are not filled with new data, make them be filled with old data from get single employee
    this.employees
      .updateEmployee(
        this.id,
        this.formUpdate.get('name')?.value,
        this.formUpdate.get('age')?.value,
        this.formUpdate.get('job')?.value,
        this.formUpdate.get('location')?.value,
        this.formUpdate.get('email')?.value
      )
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/table']);
  }
}
