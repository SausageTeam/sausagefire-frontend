import { Component, OnInit } from '@angular/core';
import { OnboardingEmergency } from 'src/app/domain/onboarding/onboarding-emergency.module';
import { Router } from '@angular/router';
import { AddressState } from 'src/app/shared/constant/addressState.module';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css', '../onboarding.module.css']
})
export class EmergencyComponent implements OnInit {


  onboardingEmergency: OnboardingEmergency = new OnboardingEmergency();

  state = this.addressState.state;

  ifFirstNameEnter: boolean = true;
  ifLastNameEnter: boolean = true;
  ifPhoneEnter: boolean = true;
  ifEmailEnter: boolean = true;

  ifAddressLine1Enter : boolean = true;
  ifAddressLine2Enter : boolean = true;
  ifAddressCityEnter : boolean = true;
  ifAddessStateSelect : boolean = true;
  ifAddressZipcodeEnter : boolean = true;

  ifRelationshipEnter: boolean = true;

  ifUnclockNext: boolean = false;

  constructor(
    private router: Router,
    private addressState: AddressState
  ) { }

  ngOnInit(): void {
    // this.onboardingService.getOnboardingService(this.onboardingPerson).subscribe(
    //   (res) => {
    //     this.onboardingPerson.firstName = res.onboardingPerson.firstName;
    //     this.onboardingPerson.middleName = res.onboardingPerson.middleName;
    //     this.onboardingPerson.lastName = res.onboardingPerson.lastName;
    //     this.onboardingPerson.email = res.onboardingPerson.email;
    //     this.onboardingPerson.cellPhone = res.onboardingPerson.cellPhone;
    //     this.onboardingPerson.alternatePhone = res.onboardingPerson.alternatePhone;
    //     this.onboardingPerson.gender = res.onboardingPerson.gender;
    //     this.onboardingPerson.dob = res.onboardingPerson.dob;
    //     this.onboardingPerson.ssn = res.onboardingPerson.ssn;

    //     if(this.nextCheck()) {
    //       this.ifUnclockNext = true;
    //     }
    //   }
    // )
  }

  onSaveClick(): void { 

    this.inputCheck();

    if(this.nextCheck()) {
      this.ifUnclockNext = true;

      // search the state full name (stateName)
      var stateAbbr : string = this.onboardingEmergency.address.stateAbbr;
      var stateName : string = "";
      this.state.forEach(function(entry){
        if(entry.name === stateAbbr)
          stateName = entry.value;
      });
      this.onboardingEmergency.address.stateName = stateName;

      console.log(this.onboardingEmergency);

      // this.onboardingService.postOnboardingService(this.onboardingPerson).subscribe(
      //   (res) => {
      //     // console.log(res);
      //   }
      // )
    }
  }

  onPrevClick() : void {
    this.router.navigate(['/employee/onboarding/reference']);
  }

  onNextClick(): void {
    this.router.navigate(['/employee/onboarding/documentation']);
  }

  nextCheck() : boolean {
    const test = (field : string) => field && field !== '';

    return [
      this.onboardingEmergency.firstName,
      this.onboardingEmergency.lastName,
      this.onboardingEmergency.cellPhone,
      this.onboardingEmergency.email,

      this.onboardingEmergency.address.addressLine1,
      this.onboardingEmergency.address.city,
      this.onboardingEmergency.address.stateAbbr,
      this.onboardingEmergency.address.zipcode,

      this.onboardingEmergency.relationship
    ].every(test);
  }

  inputCheck() : void {

    if(!this.onboardingEmergency.firstName || this.onboardingEmergency.firstName === '') this.ifFirstNameEnter = false;
    if(!this.onboardingEmergency.lastName || this.onboardingEmergency.lastName === '') this.ifLastNameEnter = false;
    if(!this.onboardingEmergency.cellPhone || this.onboardingEmergency.cellPhone === '') this.ifPhoneEnter = false;
    if(!this.onboardingEmergency.email || this.onboardingEmergency.email === '') this.ifEmailEnter = false;

    if(!this.onboardingEmergency.address.addressLine1 || this.onboardingEmergency.address.addressLine1 === '') this.ifAddressLine1Enter = false;
    if(!this.onboardingEmergency.address.city || this.onboardingEmergency.address.city === '') this.ifAddressCityEnter = false;
    if(!this.onboardingEmergency.address.stateAbbr || this.onboardingEmergency.address.stateAbbr === '') this.ifAddessStateSelect = false;
    if(!this.onboardingEmergency.address.zipcode || this.onboardingEmergency.address.zipcode === '') this.ifAddressZipcodeEnter = false;
    
    if(!this.onboardingEmergency.relationship || this.onboardingEmergency.relationship === '') this.ifRelationshipEnter = false;
  }

  onFirstNameEdit(event: any): void {
    if (!this.onboardingEmergency.firstName || this.onboardingEmergency.firstName === '') {
      this.ifFirstNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifFirstNameEnter = true;
    }
  }

  onLastNameEdit(event: any): void {
    if (!this.onboardingEmergency.lastName || this.onboardingEmergency.lastName === '') {
      this.ifLastNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifLastNameEnter = true;
    }
  }

  onCellPhoneEdit(event: any): void {
    if (!this.onboardingEmergency.cellPhone || this.onboardingEmergency.cellPhone === '') {
      this.ifPhoneEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifPhoneEnter = true;
    }
  }

  onEmailEdit(event: any): void {
    if (!this.onboardingEmergency.email || this.onboardingEmergency.email === '') {
      this.ifEmailEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifEmailEnter = true;
    }
  }

  onAddressLine1Edit(event: any): void {
    if (!this.onboardingEmergency.address.addressLine1 || this.onboardingEmergency.address.addressLine1 === '') {
      this.ifAddressLine1Enter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressLine1Enter = true;
    }
  }

  onCityEdit(event: any): void {
    if (!this.onboardingEmergency.address.city || this.onboardingEmergency.address.city === '') {
      this.ifAddressCityEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressCityEnter = true;
    }
  }

  onStateSelect(event: any): void {
    if (!this.onboardingEmergency.address.stateAbbr || this.onboardingEmergency.address.stateAbbr === '') {
      this.ifAddessStateSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddessStateSelect = true;
    }
  }

  onZipcodeEdit(event: any): void {
    if (!this.onboardingEmergency.address.zipcode || this.onboardingEmergency.address.zipcode === '') {
      this.ifAddressZipcodeEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressZipcodeEnter = true;
    }
  }

  onRelationshipEdit(event: any): void {
    if (!this.onboardingEmergency.email || this.onboardingEmergency.email === '') {
      this.ifRelationshipEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifRelationshipEnter = true;
    }
  }

}
