import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';



@NgModule({
  imports: [
    EmployeeProfileRoutingModule,
    CommonModule,
  ],
  declarations: [EmployeeProfileComponent]

})
export class EmployeeProfileModule { }
