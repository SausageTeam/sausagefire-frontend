import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaManagementComponent } from './visa-management/visa-management.component';
import { VisaManagementRoutingModule } from './visa-management-routing.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { VisaManagementRecordComponent } from './visa-management-record/visa-management-record.component';


@NgModule({
  declarations: [VisaManagementComponent, VisaManagementRecordComponent],
  imports: [
    VisaManagementRoutingModule,
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [VisaManagementComponent]
})
export class VisaManagementModule { }
