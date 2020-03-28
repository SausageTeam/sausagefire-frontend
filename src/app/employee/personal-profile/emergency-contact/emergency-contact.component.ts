import { Component, OnInit } from '@angular/core';
import { AddressDomain } from 'src/app/_common/_domain/common/address-domain.module';
import { ProfileEmergencyContact } from 'src/app/_common/_domain/employee/profile/profile-emergency-contact.module';
import { PersonalProfileService } from 'src/app/_common/_service/employee/personal-profile.service';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css', '../personal-profile.module.css']
})
export class EmergencyContactComponent implements OnInit {

  profileEmergencyContact : ProfileEmergencyContact = new ProfileEmergencyContact();

  fullName : string = "";
  displayAddressLineTwo : string = "";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {

    this.personalProfileService.getEmergencyContactService().subscribe(
      (res) => {
        
        // console.log(res);

        this.profileEmergencyContact = res.profileEmergencyContact;

        this.fullName = this.profileEmergencyContact.firstName + " " + this.profileEmergencyContact.lastName;
      

        this.displayAddressLineTwo = !this.profileEmergencyContact.addressDomain.addressLineTwo || this.profileEmergencyContact.addressDomain.addressLineTwo === "" ? "-" : this.profileEmergencyContact.addressDomain.addressLineTwo;
      }
    );

  }

}
