import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingRoutingModule } from './housing-routing.module';
import { MaintenanceHistoryComponent } from './maintenance-history/maintenance-history.component';
// import { FacilityReportComponent } from './facility-report/facility-report.component';
import { FormsModule } from '@angular/forms';
import { HousingComponent } from './housing/housing.component';


@NgModule({
  declarations: [HousingComponent, MaintenanceHistoryComponent],
  imports: [
    HousingRoutingModule,
    CommonModule,
    FormsModule
    
  ]
})
export class HousingModule { }
