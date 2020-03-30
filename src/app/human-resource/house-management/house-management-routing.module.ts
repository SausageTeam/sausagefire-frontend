import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseManagementComponent } from './house-managment/house-management.component';
// import { HouseDetailsComponent } from './house-details/house-details.component';

const houseManagementRoutes: Routes = [

  {
    path: '', 
    component: HouseManagementComponent
  },
  // {path: 'house/:id', component: HouseDetailsComponent}

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