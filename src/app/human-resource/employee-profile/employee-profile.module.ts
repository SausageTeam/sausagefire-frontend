import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  imports: [
    EmployeeProfileRoutingModule,
    CommonModule,
    DataTablesModule
  ],
  declarations: [EmployeeProfileComponent],
  providers: [],
  bootstrap: [EmployeeProfileComponent]
})
export class EmployeeProfileModule { }
