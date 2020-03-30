import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseManagementRoutingModule } from './house-management-routing.module';
import { FormsModule } from '@angular/forms';
import { HouseManagementComponent } from './house-managment/house-management.component';


@NgModule({
  declarations: [HouseManagementComponent],
  imports: [
    HouseManagementRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class HouseManagementModule { }
