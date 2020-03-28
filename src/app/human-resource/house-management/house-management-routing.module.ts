import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseManagementComponent } from './house-management/house-management.component';

const houseManagementRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: HouseManagementComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(houseManagementRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HouseManagementRoutingModule { }