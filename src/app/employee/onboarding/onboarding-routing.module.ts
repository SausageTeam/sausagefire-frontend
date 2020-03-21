import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PersonComponent } from './person/person.component';
import { AvatarComponent } from './avatar/avatar.component';

const onboardingRoutes: Routes = [
  { 
    path: '',
    component: OnboardingComponent,

    children: [
      {
        path: '',
        children: [
          {
            path: 'person', 
            component: PersonComponent
          },
          {
            path: 'avatar',
            component: AvatarComponent
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