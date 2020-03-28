import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const employeeRoutes: Routes = [

  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule)
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'housing',
    loadChildren: () => import('./housing/housing.module').then(m => m.HousingModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./personal-profile/personal-profile.module').then(m => m.PersonalProfileModule)
  },
  {
    path: 'visa-status-management',
    loadChildren: () => import('./visa-status/visa-status.module').then(m => m.VisaStatusModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
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