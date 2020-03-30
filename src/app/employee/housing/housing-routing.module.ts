import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingComponent } from './housing/housing.component';
import { FacilityReportComponent } from './facility-report/facility-report.component';
import { FacilityReportListComponent } from './facility-report-list/facility-report-list.component';

const housingRoutes: Routes = [
  {
    path: '',
    children : [
      {
        path: '',
        component: HousingComponent,
      },
      {
        path: 'report',
        component: FacilityReportComponent
      },
      {
        path: 'report-list',
        component: FacilityReportListComponent
      }
    ]
  },
  


];

@NgModule({
  imports: [
    RouterModule.forChild(housingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HousingRoutingModule { }