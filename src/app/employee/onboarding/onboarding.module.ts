import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  imports: [
    OnboardingRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    OnboardingComponent,
    PersonComponent
  ],
})
export class OnboardingModule { }
