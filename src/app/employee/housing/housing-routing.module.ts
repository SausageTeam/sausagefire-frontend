import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingComponent } from './housing/housing.component';
import { FacilityReportComponent } from './facility-report/facility-report.component';
import { MaintenanceHistoryComponent } from './maintenance-history/maintenance-history.component';

const housingRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: HousingComponent
          },
          {
            path: 'report',
            component: FacilityReportComponent
          },
          {
            path: 'detail',
            component: MaintenanceHistoryComponent
          }
        ]
      }
    ]
    
  }
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