import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaManagementComponent } from './visa-management/visa-management.component';

const visaManagementRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: VisaManagementComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(visaManagementRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VisaManagementRoutingModule { }