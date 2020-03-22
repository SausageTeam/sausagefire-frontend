import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingDriving } from 'src/app/domain/onboarding-driving.module';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrls: ['./driving.component.css', '../onboarding.module.css']
})
export class DrivingComponent implements OnInit {

  onboardingDriving : OnboardingDriving = new OnboardingDriving();

  ifUnclockNext : boolean = false;

  driverLisenseOptionsIndex : number = 1;
  driverLisenseOptions = [
    "Yes",
    "No"
  ];

  carOptionsIndex : number = 1;
  carOptions = [
    "Yes",
    "No"
  ];

  driverLicense : string = "";
  driverLicenseExpirationDate : string = "";
  driverLicenseDoc : any = null;

  ifDriverLicense : boolean = true;
  ifDriverLicenseExpirationDate : boolean = true;
  ifDriverLienseDoc : boolean = true;

  maker : string = "";
  model : string = "";
  color : string = "";

  ifMakerEnter : boolean = true;
  ifModelEnter : boolean = true;
  ifColorEnter : boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selectDriverLisenseOption(i : number) {
    if(this.driverLisenseOptionsIndex !== i && this.driverLisenseOptionsIndex === 1) {
      this.ifUnclockNext = false;
    }
    this.driverLisenseOptionsIndex = i;
  }

  selectCarOption(i : number) {
    if(this.carOptionsIndex !== i && this.carOptionsIndex === 1) {
      this.ifUnclockNext = false;
    }
    this.carOptionsIndex = i;
  }

  inputCheck() : void {
    if(this.driverLisenseOptionsIndex === 0) {
      if(!this.driverLicense || this.driverLicense === '') this.ifDriverLicense = false;
      if(!this.driverLicenseExpirationDate || this.driverLicenseExpirationDate === '') this.ifDriverLicenseExpirationDate = false;
    } 
    if(this.carOptionsIndex === 0) {
      if(!this.maker || this.maker === '') this.ifMakerEnter = false;
      if(!this.model || this.model === '') this.ifModelEnter = false;
      if(!this.color || this.color === '') this.ifColorEnter = false;
    }
  }

  nextCheck() : boolean {
    const test = (field : string) => field && field !== '';

    if(this.driverLisenseOptionsIndex == 1 && this.carOptionsIndex === 1) {
      return true;
    }

    if(this.driverLisenseOptionsIndex == 0) {
      return [this.driverLicense, this.driverLicenseExpirationDate].every(test);
    }

    return [this.maker, this.model, this.color].every(test);
  }

  onSaveClick() : void {

    this.inputCheck();

    if(this.nextCheck()) {
      this.ifUnclockNext = true;
    }
  }

  onPrevClick() : void {
    this.router.navigate(['/employee/onboarding/visa']);
  }

  onNextClick() : void {
    this.router.navigate(['/employee/onboarding/reference']);
  }

  onMakerEdit(event : any) {
    if (!this.maker || this.maker === '') {
      this.ifMakerEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifMakerEnter = true;
    }
  }

  onModelEdit(event: any) {
    if (!this.model || this.model === '') {
      this.ifModelEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifModelEnter = true;
    }
  }

  onColorEdit(event: any) {
    if (!this.color || this.color === '') {
      this.ifColorEnter = false;
      this.ifUnclockNext = false;
    } else {
      this.ifColorEnter = true;
    }
  }

  onDriverLiceseEdit(evnet: any) {
    if (!this.driverLicense || this.driverLicense === '') {
      this.ifDriverLicense = false;
      this.ifUnclockNext = false;
    } else {
      this.ifDriverLicense = true;
    }
  }

  onDriverLicenseExpirationDateEdit(event: any) {
    if (!this.driverLicenseExpirationDate || this.driverLicenseExpirationDate === '') {
      this.ifDriverLicenseExpirationDate = false;
      this.ifUnclockNext = false;
    } else {
      this.ifDriverLicenseExpirationDate = true;
    }
  }

  onDriverLicenseDocSelect(event: any) {

  }
}
