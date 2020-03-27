import { Component, OnInit } from '@angular/core';
import { AddressDomain } from 'src/app/_common/_domain/common/address-domain.module';
import { ProfileEmergencyContact } from 'src/app/_common/_domain/employee/profile/profile-emergency-contact.module';
import { PersonalProfileService } from 'src/app/_service/employee/personal-profile.service';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css', '../personal-profile.module.css']
})
export class EmergencyContactComponent implements OnInit {

  profileEmergencyContact : ProfileEmergencyContact = new ProfileEmergencyContact();

  fullName : string = "";
  displayAddress : string = "";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {

    this.personalProfileService.getEmergencyContactService().subscribe(
      (res) => {
        this.profileEmergencyContact = res.profileEmergencyContact;

        this.fullName = this.profileEmergencyContact.firstName + " " + this.profileEmergencyContact.lastName;
        this.displayAddress = this.getFullAddress(this.profileEmergencyContact.addressDomain);
      }
    );

  }

  getFullAddress(addressDomain : AddressDomain) : string {
    let fullAddress = "";

    fullAddress += addressDomain.addressLineOne;

    if(addressDomain.addressLineTwo && addressDomain.addressLineTwo !== "") {
      fullAddress += " " + addressDomain.addressLineTwo;
    }

    fullAddress += ", " + addressDomain.city;
    fullAddress += ", " + addressDomain.stateAbbr;
    fullAddress += ", " + addressDomain.zipCode;

    return fullAddress;
  }

}
