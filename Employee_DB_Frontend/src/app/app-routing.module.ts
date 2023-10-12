import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'table', component: EmployeeTableComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'edit', component: EditEmployeeComponent },
  { path: 'update/:id', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
