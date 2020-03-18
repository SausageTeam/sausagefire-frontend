import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaStatusComponent } from './visa-status/visa-status.component';

const visaStatusRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: VisaStatusComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(visaStatusRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VisaStatusRoutingModule { }