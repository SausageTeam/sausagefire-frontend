import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HousingComponent } from './housing/housing.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile/personal-profile.component';
import { VisaStatusComponent } from './visa-status/visa-status.component';

const employeeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard', 
        component: DashboardComponent
      },
      {
        path: 'housing',
        component: HousingComponent
      },
      {
        path: 'profile',
        component: PersonalProfileComponent
      },
      {
        path: 'visa-status-management',
        component: VisaStatusComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeeRoutingModule { }