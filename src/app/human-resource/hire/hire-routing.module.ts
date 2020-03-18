import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireComponent } from './hire/hire.component';

const hireRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: HireComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(hireRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HireRoutingModule { }