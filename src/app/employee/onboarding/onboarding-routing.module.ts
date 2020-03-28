import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PersonComponent } from './person/person.component';
import { AvatarComponent } from './avatar/avatar.component';
import { VisaComponent } from './visa/visa.component';
import { DrivingComponent } from './driving/driving.component';
import { ReferenceComponent } from './reference/reference.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FinalComponent } from './final/final.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const onboardingRoutes: Routes = [

  {
    path: 'person', 
    component: PersonComponent
  },
  {
    path: 'avatar',
    component: AvatarComponent
  },
  {
    path: 'visa',
    component: VisaComponent
  },
  {
    path: 'driving',
    component: DrivingComponent
  },
  {
    path: 'reference',
    component: ReferenceComponent
  },
  {
    path: 'emergency',
    component: EmergencyComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  {
    path: '',
    redirectTo: '/employee/onboarding/person'
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