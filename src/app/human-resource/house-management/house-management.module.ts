import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseManagementComponent } from './house-management/house-management.component';
import { HouseManagementRoutingModule } from './house-management-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HouseManagementComponent],
  imports: [
    HouseManagementRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class HouseManagementModule { }
