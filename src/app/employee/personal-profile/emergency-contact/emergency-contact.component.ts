import { Component, OnInit } from '@angular/core';
import { AddressDomain } from 'src/app/domain/common/address-domain.module';
import { ProfileEmergencyContact } from 'src/app/domain/employee/profile/profile-emergency-contact.module';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css', '../personal-profile.module.css']
})
export class EmergencyContactComponent implements OnInit {

  profileEmergencyContact : ProfileEmergencyContact = new ProfileEmergencyContact();

  fullName : string = "";
  displayAddress : string = "";

  constructor() { }

  ngOnInit(): void {
    this.profileEmergencyContact.firstName = "Zack";
    this.profileEmergencyContact.lastName = "Yu";
    this.profileEmergencyContact.cellPhone = "9291231234";
    this.profileEmergencyContact.addressDomain.addressLineOne = "81 Sheelly Cir";
    this.profileEmergencyContact.addressDomain.addressLineTwo = "Apt 1";
    this.profileEmergencyContact.addressDomain.city = "East Windsor";
    this.profileEmergencyContact.addressDomain.stateAbbr = "NJ";
    this.profileEmergencyContact.addressDomain.zipcode = "08520";

    this.fullName = this.profileEmergencyContact.firstName + this.profileEmergencyContact.lastName;
    this.displayAddress = this.getFullAddress(this.profileEmergencyContact.addressDomain);
  }

  getFullAddress(addressDomain : AddressDomain) : string {
    let fullAddress = "";

    fullAddress += addressDomain.addressLineOne;

    if(addressDomain.addressLineTwo && addressDomain.addressLineTwo !== "") {
      fullAddress += " " + addressDomain.addressLineTwo;
    }

    fullAddress += ", " + addressDomain.city;
    fullAddress += ", " + addressDomain.stateAbbr;
    fullAddress += ", " + addressDomain.zipcode;

    return fullAddress;
  }

}
