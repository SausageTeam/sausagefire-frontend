import { Component, OnInit } from '@angular/core';
import { OnboardingEmergency } from 'src/app/domain/employee/onboarding/onboarding-emergency.module';
import { Router } from '@angular/router';
import { AddressState } from 'src/app/common/constant/addressState.module';
import { OnboardingService } from 'src/app/service/onboarding.service';

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

  ifAddressLineOneEnter : boolean = true;
  ifAddressLineTwoEnter : boolean = true;
  ifAddressCityEnter : boolean = true;
  ifAddessStateSelect : boolean = true;
  ifAddressZipcodeEnter : boolean = true;

  ifRelationshipEnter: boolean = true;

  ifUnclockNext: boolean = false;

  constructor(
    private onboardingService : OnboardingService,
    private router: Router,
    private addressState: AddressState
  ) { }

  ngOnInit(): void {
    this.onboardingService.getOnboardingEmergencyService(this.onboardingEmergency).subscribe(
      (res) => {
        this.onboardingEmergency = res.onboardingEmergency;

        // this.state

        if(this.nextCheck()) {
          this.ifUnclockNext = true;
        }
      }
    )
  }

  onSaveClick(): void { 

    this.inputCheck();

    if(this.nextCheck()) {
      this.ifUnclockNext = true;

      // search the state full name (stateName)
      var stateAbbr : string = this.onboardingEmergency.addressDomain.stateAbbr;
      var stateName : string = "";
      this.state.forEach(function(entry){
        if(entry.name === stateAbbr)
          stateName = entry.value;
      });
      this.onboardingEmergency.addressDomain.stateName = stateName;

      // console.log(this.onboardingEmergency);

      this.onboardingService.postOnboardingEmergencyService(this.onboardingEmergency).subscribe(
        (res) => {
          // console.log(res);
        }
      )
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

      this.onboardingEmergency.addressDomain.addressLineOne,
      this.onboardingEmergency.addressDomain.city,
      this.onboardingEmergency.addressDomain.stateAbbr,
      this.onboardingEmergency.addressDomain.zipcode,

      this.onboardingEmergency.relationship
    ].every(test);
  }

  inputCheck() : void {

    if(!this.onboardingEmergency.firstName || this.onboardingEmergency.firstName === '') this.ifFirstNameEnter = false;
    if(!this.onboardingEmergency.lastName || this.onboardingEmergency.lastName === '') this.ifLastNameEnter = false;
    if(!this.onboardingEmergency.cellPhone || this.onboardingEmergency.cellPhone === '') this.ifPhoneEnter = false;
    if(!this.onboardingEmergency.email || this.onboardingEmergency.email === '') this.ifEmailEnter = false;

    if(!this.onboardingEmergency.addressDomain.addressLineOne || this.onboardingEmergency.addressDomain.addressLineOne === '') this.ifAddressLineOneEnter = false;
    if(!this.onboardingEmergency.addressDomain.city || this.onboardingEmergency.addressDomain.city === '') this.ifAddressCityEnter = false;
    if(!this.onboardingEmergency.addressDomain.stateAbbr || this.onboardingEmergency.addressDomain.stateAbbr === '') this.ifAddessStateSelect = false;
    if(!this.onboardingEmergency.addressDomain.zipcode || this.onboardingEmergency.addressDomain.zipcode === '') this.ifAddressZipcodeEnter = false;
    
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

  onAddressLineOneEdit(event: any): void {
    if (!this.onboardingEmergency.addressDomain.addressLineOne || this.onboardingEmergency.addressDomain.addressLineOne === '') {
      this.ifAddressLineOneEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressLineOneEnter = true;
    }
  }

  onCityEdit(event: any): void {
    if (!this.onboardingEmergency.addressDomain.city || this.onboardingEmergency.addressDomain.city === '') {
      this.ifAddressCityEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressCityEnter = true;
    }
  }

  onStateSelect(event: any): void {
    if (!this.onboardingEmergency.addressDomain.stateAbbr || this.onboardingEmergency.addressDomain.stateAbbr === '') {
      this.ifAddessStateSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddessStateSelect = true;
    }
  }

  onZipcodeEdit(event: any): void {
    if (!this.onboardingEmergency.addressDomain.zipcode || this.onboardingEmergency.addressDomain.zipcode === '') {
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
