import { Component, OnInit } from '@angular/core';
import { OnboardingPerson } from 'src/app/domain/onboardingPerson.module';
import { OnboardingService } from 'src/app/shared/_service/onboarding.service';

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

  genderOptions = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "I don't want to answer", value: "na"}
  ]

  constructor(private onBoardingService : OnboardingService) { }

  ngOnInit(): void {
    //do the service and get the data
    // console.log(this.onboardingPerson);
    this.onBoardingService.onboarding(this.onboardingPerson).subscribe(
      (res) => {
        console.log(res);
        this.onboardingPerson.email = res.onboardingPerson.email;
      }
    )
    
  }

  onFirstNameEdit(event: any) : void {
    this.ifFirstNameEnter = this.onboardingPerson.firstName === '' ? false : true;
  }

  onLastNameEdit(event: any) : void {
    this.ifLastNameEnter = this.onboardingPerson.lastName === '' ? false : true;
  }

  onCellPhoneEdit(event: any) : void {
    this.ifPhoneEnter = this.onboardingPerson.cellPhone === '' ? false : true;
  }

  onGenderSelect(event: any) : void {
    this.ifGenderSelect = this.onboardingPerson.gender === '' ? false : true;
  }

  onDOBSelect(event: any) : void {
    this.ifDobSelect = this.onboardingPerson.DOB === '' ? false : true;
  }

  onSSNEdit(event: any) : void {
    this.ifSSNEnter = this.onboardingPerson.SSN === '' ? false : true;
  }

  onSubmit() { 
    // console.log("on submit is called");

    if(this.onboardingPerson.firstName === '') this.ifFirstNameEnter = false;
    if(this.onboardingPerson.lastName === '') this.ifLastNameEnter = false;
    if(this.onboardingPerson.cellPhone === '') this.ifPhoneEnter = false;
    if(this.onboardingPerson.gender === '') this.ifGenderSelect = false;
    if(this.onboardingPerson.DOB === '') this.ifDobSelect = false;
    if(this.onboardingPerson.SSN === '') this.ifSSNEnter = false;

    // console.log(this.onboardingPerson);
    // this.onBoardingService.onboarding(this.onboardingPerson).subscribe(
    //   (res) => {
    //     console.log(res);
    //   }
    // )
  }

}
