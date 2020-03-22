import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { PersonComponent } from './person/person.component';
import { AvatarComponent } from './avatar/avatar.component';
import { VisaComponent } from './visa/visa.component';
import { DrivingComponent } from './driving/driving.component';
import { ReferenceComponent } from './reference/reference.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
  imports: [
    OnboardingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    OnboardingComponent,
    PersonComponent,
    AvatarComponent,
    VisaComponent,
    DrivingComponent,
    ReferenceComponent,
    EmergencyComponent,
    DocumentationComponent
  ],
})
export class OnboardingModule { }
