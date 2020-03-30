import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HousingRoutingModule } from './housing-routing.module';
import { HousingComponent } from './housing/housing.component';
import { CommonModule } from '@angular/common';
import { FacilityReportComponent } from './facility-report/facility-report.component';


@NgModule({
  imports: [
    HousingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    HousingComponent,
    FacilityReportComponent
  ],
})
export class HousingModule { }
