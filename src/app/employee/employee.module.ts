import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { HousingComponent } from './housing/housing.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile/personal-profile.component';
import { NameComponent } from './personal-profile/name/name.component';
import { AddressComponent } from './personal-profile/address/address.component';
import { ContactComponent } from './personal-profile/contact/contact.component';
import { PersonalProfilePanelComponent } from './personal-profile/personal-profile-panel/personal-profile-panel.component';
import { EmploymentComponent } from './personal-profile/employment/employment.component';
import { EmergencyContactComponent } from './personal-profile/emergency-contact/emergency-contact.component';
import { DocumentComponent } from './personal-profile/document/document.component';
import { VisaStatusComponent } from './visa-status/visa-status.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HousingComponent,
    PersonalProfileComponent, 
    PersonalProfilePanelComponent,
    NameComponent, 
    AddressComponent, 
    ContactComponent, 
    EmploymentComponent, 
    EmergencyContactComponent, 
    DocumentComponent,
    VisaStatusComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  ],
  providers: [],
})
export class EmployeeModule { }
