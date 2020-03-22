import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { PersonalProfileRoutingModule } from './personal-profile-routing.module';
import { NameComponent } from './name/name.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { DocumentComponent } from './document/document.component';



@NgModule({
  declarations: [PersonalProfileComponent, NameComponent, AddressComponent, ContactComponent, EmploymentComponent, EmergencyContactComponent, DocumentComponent],
  imports: [
    PersonalProfileRoutingModule,
    CommonModule
  ]
})
export class PersonalProfileModule { }
