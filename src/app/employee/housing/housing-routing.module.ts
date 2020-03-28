import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousingComponent } from './housing/housing.component';

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