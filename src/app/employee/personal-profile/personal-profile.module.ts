import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { PersonalProfileRoutingModule } from './personal-profile-routing.module';



@NgModule({
  declarations: [PersonalProfileComponent],
  imports: [
    PersonalProfileRoutingModule,
    CommonModule
  ]
})
export class PersonalProfileModule { }
