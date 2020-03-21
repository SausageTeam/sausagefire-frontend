import { Component, OnInit } from '@angular/core';
import { OnboardingPerson } from 'src/app/domain/onboardingPerson.module';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  onboardingPerson : OnboardingPerson = new OnboardingPerson();

  ifFirstNameEnter : boolean = true;
  ifLastNameEnter : boolean = true;
  ifPhoneEnter: boolean = true;
  ifGenderSelect : boolean = true;
  ifDobSelect: boolean = true;
  ifSSNEnter : boolean = true;
  
  ifUnclockNext : boolean = false;

  genderOptions = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "I don't want to answer", value: "na"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.onboardingPerson.email = "martin@sausage.com";
  }

  onFirstNameEdit(event: any) : void {
    if(this.onboardingPerson.firstName === '') {
      this.ifFirstNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifFirstNameEnter = true;
    }
  }

  onLastNameEdit(event: any) : void {
    if(this.onboardingPerson.lastName === '') {
      this.ifLastNameEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifLastNameEnter = true;
    }
  }

  onCellPhoneEdit(event: any) : void {
    if(this.onboardingPerson.cellPhone === '') {
      this.ifPhoneEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifLastNameEnter = true;
    }
  }

  onGenderSelect(event: any) : void {
    if(this.onboardingPerson.gender === '') {
      this.ifGenderSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifGenderSelect = true;
    }
  }

  onDOBSelect(event: any) : void {
    if(this.onboardingPerson.DOB === '') {
      this.ifDobSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifDobSelect = true;
    }
  }

  onSSNEdit(event: any) : void {
    if(this.onboardingPerson.SSN === '') {
      this.ifSSNEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifSSNEnter = true;
    }
  }

  onSaveClick(): void { 
    console.log("on save click");
    if(this.inputCheck()) {
      this.ifUnclockNext = true;
    }
  }

  onNextClick(): void {
    
  }

  inputCheck() : boolean {
    const test = (flag : boolean) => flag === true;

    if(this.onboardingPerson.firstName === '') this.ifFirstNameEnter = false;
    if(this.onboardingPerson.lastName === '') this.ifLastNameEnter = false;
    if(this.onboardingPerson.cellPhone === '') this.ifPhoneEnter = false;
    if(this.onboardingPerson.gender === '') this.ifGenderSelect = false;
    if(this.onboardingPerson.DOB === '') this.ifDobSelect = false;
    if(this.onboardingPerson.SSN === '') this.ifSSNEnter = false;

    return [
      this.ifFirstNameEnter, 
      this.ifLastNameEnter, 
      this.ifPhoneEnter,
      this.ifGenderSelect,
      this.ifDobSelect,
      this.ifSSNEnter
    ].every(test);
  }

}
