import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseManagementComponent } from './house-management/house-management.component';
import { HouseManagementRoutingModule } from './house-management-routing.module';



@NgModule({
  declarations: [HouseManagementComponent],
  imports: [
    HouseManagementRoutingModule,
    CommonModule
  ]
})
export class HouseManagementModule { }
