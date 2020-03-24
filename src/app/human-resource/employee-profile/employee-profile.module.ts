import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    EmployeeProfileRoutingModule,
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [EmployeeProfileComponent],
  providers: [],
  bootstrap: [EmployeeProfileComponent]
})
export class EmployeeProfileModule { }
