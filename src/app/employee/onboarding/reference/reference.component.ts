import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingReference } from 'src/app/domain/employee/onboarding/onboarding-reference.module';
import { AddressState } from 'src/app/common/constant/addressState.module';
import { OnboardingService } from 'src/app/service/onboarding.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css', '../onboarding.module.css']
})
export class ReferenceComponent implements OnInit {

  onboardingReference: OnboardingReference = new OnboardingReference();

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
    this.onboardingService.getOnboardingReferenceService(this.onboardingReference).subscribe(
      (res) => {
        this.onboardingReference = res.onboardingReference;

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
      var stateAbbr : string = this.onboardingReference.addressDomain.stateAbbr;
      var stateName : string = "";
      this.state.forEach(function(entry){
        if(entry.name === stateAbbr)
          stateName = entry.value;
      });
      this.onboardingReference.addressDomain.stateName = stateName;

      console.log(this.onboardingReference);

      this.onboardingService.postOnboardingReferenceService(this.onboardingReference).subscribe(
        (res) => {
           console.log(res);
        }
      )
    }
  }

  onPrevClick() : void {
    this.router.navigate(['/employee/onboarding/driving']);
  }

  onNextClick(): void {
    this.router.navigate(['/employee/onboarding/emergency']);
  }

  nextCheck() : boolean {
    const test = (field : string) => field && field !== '';

    return [
      this.onboardingReference.firstName,
      this.onboardingReference.lastName,
      this.onboardingReference.cellPhone,
      this.onboardingReference.email,

      this.onboardingReference.addressDomain.addressLineOne,
      this.onboardingReference.addressDomain.city,
      this.onboardingReference.addressDomain.stateAbbr,
      this.onboardingReference.addressDomain.zipCode,

      this.onboardingReference.relationship
    ].every(test);
  }

  inputCheck() : void {

    if(!this.onboardingReference.firstName || this.onboardingReference.firstName === '') this.ifFirstNameEnter = false;
    if(!this.onboardingReference.lastName || this.onboardingReference.lastName === '') this.ifLastNameEnter = false;
    if(!this.onboardingReference.cellPhone || this.onboardingReference.cellPhone === '') this.ifPhoneEnter = false;
    if(!this.onboardingReference.email || this.onboardingReference.email === '') this.ifEmailEnter = false;

    if(!this.onboardingReference.addressDomain.addressLineOne || this.onboardingReference.addressDomain.addressLineOne === '') this.ifAddressLineOneEnter = false;
    if(!this.onboardingReference.addressDomain.city || this.onboardingReference.addressDomain.city === '') this.ifAddressCityEnter = false;
    if(!this.onboardingReference.addressDomain.stateAbbr || this.onboardingReference.addressDomain.stateAbbr === '') this.ifAddessStateSelect = false;
    if(!this.onboardingReference.addressDomain.zipCode || this.onboardingReference.addressDomain.zipCode === '') this.ifAddressZipcodeEnter = false;
    
    if(!this.onboardingReference.relationship || this.onboardingReference.relationship === '') this.ifRelationshipEnter = false;
  }

  onFirstNameEdit(event: any): void {
    if (!this.onboardingReference.firstName || this.onboardingReference.firstName === '') {
      this.ifFirstNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifFirstNameEnter = true;
    }
  }

  onLastNameEdit(event: any): void {
    if (!this.onboardingReference.lastName || this.onboardingReference.lastName === '') {
      this.ifLastNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifLastNameEnter = true;
    }
  }

  onCellPhoneEdit(event: any): void {
    if (!this.onboardingReference.cellPhone || this.onboardingReference.cellPhone === '') {
      this.ifPhoneEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifPhoneEnter = true;
    }
  }

  onEmailEdit(event: any): void {
    if (!this.onboardingReference.email || this.onboardingReference.email === '') {
      this.ifEmailEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifEmailEnter = true;
    }
  }

  onAddressLineOneEdit(event: any): void {
    if (!this.onboardingReference.addressDomain.addressLineOne || this.onboardingReference.addressDomain.addressLineOne === '') {
      this.ifAddressLineOneEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressLineOneEnter = true;
    }
  }

  onCityEdit(event: any): void {
    if (!this.onboardingReference.addressDomain.city || this.onboardingReference.addressDomain.city === '') {
      this.ifAddressCityEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressCityEnter = true;
    }
  }

  onStateSelect(event: any): void {
    if (!this.onboardingReference.addressDomain.stateAbbr || this.onboardingReference.addressDomain.stateAbbr === '') {
      this.ifAddessStateSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddessStateSelect = true;
    }
  }

  onZipcodeEdit(event: any): void {
    if (!this.onboardingReference.addressDomain.zipCode || this.onboardingReference.addressDomain.zipCode === '') {
      this.ifAddressZipcodeEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifAddressZipcodeEnter = true;
    }
  }

  onRelationshipEdit(event: any): void {
    if (!this.onboardingReference.email || this.onboardingReference.email === '') {
      this.ifRelationshipEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifRelationshipEnter = true;
    }
  }

}
