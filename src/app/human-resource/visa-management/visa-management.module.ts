import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaManagementComponent } from './visa-management/visa-management.component';
import { VisaManagementRoutingModule } from './visa-management-routing.module';


@NgModule({
  declarations: [VisaManagementComponent],
  imports: [
    VisaManagementRoutingModule,
    CommonModule
  ]
})
export class VisaManagementModule { }
