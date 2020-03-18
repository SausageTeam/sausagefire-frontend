import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const humanResourceRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: 'dashboard', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('./employee-profile/employee-profile.module').then(m => m.EmployeeProfileModule)
      },
      {
        path: 'hire',
        loadChildren: () => import('./hire/hire.module').then(m => m.HireModule)
      },
      {
        path: 'visas',
        loadChildren: () => import('./visa-management/visa-management.module').then(m => m.VisaManagementModule)
      },
      {
        path: 'houses',
        loadChildren: () => import('./house-management/house-management.module').then(m => m.HouseManagementModule)
      },
      {
        path: '',
        redirectTo: '/hr/dashboard'
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
    RouterModule.forChild(humanResourceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HumanResourceRoutingModule { }