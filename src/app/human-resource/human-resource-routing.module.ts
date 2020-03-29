import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { HireComponent } from './hire/hire.component';
import { HouseManagementComponent } from './house-management/house-management.component';
import { VisaManagementComponent } from './visa-management/visa-management/visa-management.component';

const humanResourceRoutes: Routes = [

  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'employees',
    component: EmployeeProfileComponent
  },
  {
    path: 'hire',
    component: HireComponent
  },
  {
    path: 'visa-status-mangement',
    component: VisaManagementComponent
  },
  {
    path: 'houses',
    component: HouseManagementComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/hr/dashboard'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(humanResourceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HumanResourceRoutingModule { }