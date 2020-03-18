import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';



@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    OnboardingRoutingModule,
    CommonModule
  ]
})
export class OnboardingModule { }
