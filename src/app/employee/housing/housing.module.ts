import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingComponent } from './housing/housing.component';
import { HousingRoutingModule } from './housing-routing.module';
import { MaintenanceHistoryComponent } from './maintenance-history/maintenance-history.component';
import { FacilityReportComponent } from './facility-report/facility-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HousingComponent, MaintenanceHistoryComponent, FacilityReportComponent],
  imports: [
    HousingRoutingModule,
    CommonModule,
    FormsModule
    
  ]
})
export class HousingModule { }
