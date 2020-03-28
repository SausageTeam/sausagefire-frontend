import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { HireComponent } from './hire/hire.component';
import { HouseManagementComponent } from './house-management/house-management.component';
import { VisaManagementComponent } from './visa-management/visa-management/visa-management.component';
import { VisaManagementRecordComponent } from './visa-management/visa-management-record/visa-management-record.component';


@NgModule({
  imports: [
    HumanResourceRoutingModule,
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    DashboardComponent, 
    EmployeeProfileComponent, 
    HireComponent, 
    HouseManagementComponent,
    VisaManagementComponent, 
    VisaManagementRecordComponent
  ],
  bootstrap: [
    EmployeeProfileComponent, 
    VisaManagementComponent
  ]
})
export class HumanResourceModule { }
