import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingPerson } from 'src/app/_domain/employee/onboarding/onboarding-person.module';
import { OnboardingService } from 'src/app/_service/employee/onboarding.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css', '../onboarding.module.css']
})
export class PersonComponent implements OnInit {

  onboardingPerson: OnboardingPerson = new OnboardingPerson();

  ifFirstNameEnter: boolean = true;
  ifLastNameEnter: boolean = true;
  ifPhoneEnter: boolean = true;
  ifGenderSelect: boolean = true;
  ifDobSelect: boolean = true;
  ifSSNEnter: boolean = true;

  ifUnclockNext: boolean = false;

  genderOptions = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "I don't want to answer", value: "na" }
  ]

  constructor(
    private onboardingService : OnboardingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onboardingService.getOnboardingPersonService(this.onboardingPerson).subscribe(
      (res) => {
        this.onboardingPerson.firstName = res.onboardingPerson.firstName;
        this.onboardingPerson.middleName = res.onboardingPerson.middleName;
        this.onboardingPerson.lastName = res.onboardingPerson.lastName;
        this.onboardingPerson.email = res.onboardingPerson.email;
        this.onboardingPerson.cellPhone = res.onboardingPerson.cellPhone;
        this.onboardingPerson.alternatePhone = res.onboardingPerson.alternatePhone;
        this.onboardingPerson.gender = res.onboardingPerson.gender;
        this.onboardingPerson.dob = res.onboardingPerson.dob;
        this.onboardingPerson.ssn = res.onboardingPerson.ssn;

        if(this.nextCheck()) {
          this.ifUnclockNext = true;
        }
      }
    );
  }

  onSaveClick(): void { 

    this.inputCheck();

    if(this.nextCheck()) {
      this.ifUnclockNext = true;

      this.onboardingService.postOnboardingPersonService(this.onboardingPerson).subscribe(
        (res) => {
          // console.log(res);
        }
      )
    }
  }

  onNextClick(): void {
    this.router.navigate(['/employee/onboarding/avatar']);
  }

  nextCheck() : boolean {
    const test = (field : string) => field && field !== '';

    return [
      this.onboardingPerson.firstName,
      this.onboardingPerson.lastName,
      this.onboardingPerson.cellPhone,
      this.onboardingPerson.gender,
      this.onboardingPerson.dob,
      this.onboardingPerson.ssn
    ].every(test);
  }

  inputCheck() : void {

    if(!this.onboardingPerson.firstName || this.onboardingPerson.firstName === '') this.ifFirstNameEnter = false;
    if(!this.onboardingPerson.lastName || this.onboardingPerson.lastName === '') this.ifLastNameEnter = false;
    if(!this.onboardingPerson.cellPhone || this.onboardingPerson.cellPhone === '') this.ifPhoneEnter = false;
    if(!this.onboardingPerson.gender || this.onboardingPerson.gender === '') this.ifGenderSelect = false;
    if(!this.onboardingPerson.dob|| this.onboardingPerson.dob === '') this.ifDobSelect = false;
    if(!this.onboardingPerson.ssn || this.onboardingPerson.ssn === '') this.ifSSNEnter = false;
  }

  onFirstNameEdit(event: any): void {
    if (!this.onboardingPerson.firstName || this.onboardingPerson.firstName === '') {
      this.ifFirstNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifFirstNameEnter = true;
    }
  }

  onLastNameEdit(event: any): void {
    if (!this.onboardingPerson.lastName || this.onboardingPerson.lastName === '') {
      this.ifLastNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifLastNameEnter = true;
    }
  }

  onCellPhoneEdit(event: any): void {
    if (!this.onboardingPerson.cellPhone || this.onboardingPerson.cellPhone === '') {
      this.ifPhoneEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifPhoneEnter = true;
    }
  }

  onGenderSelect(event: any): void {
    if (!this.onboardingPerson.gender || this.onboardingPerson.gender === '') {
      this.ifGenderSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifGenderSelect = true;
    }
  }

  onDOBSelect(event: any): void {
    if (!this.onboardingPerson.dob|| this.onboardingPerson.dob === '') {
      this.ifDobSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifDobSelect = true;
    }
  }

  onSSNEdit(event: any): void {
    if (!this.onboardingPerson.ssn || this.onboardingPerson.ssn === '') {
      this.ifSSNEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifSSNEnter = true;
    }
  }
}
