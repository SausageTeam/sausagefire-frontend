import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';

const onboardingRoutes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '', 
        children: [
          {
            path: '',
            component: OnboardingComponent
          }
        ]
      }
    ]
    
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(onboardingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OnboardingRoutingModule { }