import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnboardingVisa } from 'src/app/_common/_domain/employee/onboarding/onboarding-visa.module';
import { OnboardingService } from 'src/app/_common/_service/employee/onboarding.service';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.css', '../onboarding.module.css']
})
export class VisaComponent implements OnInit {

  onboardingVisa: OnboardingVisa = new OnboardingVisa();

  ifUnclockNext: boolean = false;

  citizenOptionsIndex: number = 0;
  citizenOptions = [
    "Yes",
    "No"
  ];

  localOptionsIndex: number = 0;
  localOptions = [
    "Citizen",
    "Green Card"
  ];

  ifInternationalSelect: boolean = true;
  internationalSelect: string = "";
  internationalOptions = [
    { name: "H1-B", value: "H1-B" },
    { name: "L2", value: "L2" },
    { name: "F1(CPT/OPT)", value: "F1(CPT/OPT)" },
    { name: "H4", value: "H4" },
    { name: "Other", value: "Other" }
  ];

  startDate: string = "";
  endDate: string = "";
  customVisa: string = "";

  ifStartDate: boolean = true;
  ifEndDate: boolean = true;
  ifCustomVisa: boolean = true;

  constructor(
    private onboardingService: OnboardingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onboardingService.getOnboardingVisaService().subscribe(
      (res) => {
        this.onboardingVisa.visaType = res.onboardingVisa.visaType;
        this.onboardingVisa.visaStartDate = res.onboardingVisa.visaStartDate;
        this.onboardingVisa.visaEndDate = res.onboardingVisa.visaEndDate;

        this.readVisaData();

        if (this.nextCheck()) {
          this.ifUnclockNext = true;
        }
      }
    )
  }

  selectCitizenOptions(i: number) {
    this.citizenOptionsIndex = i;
  }

  selectLocalOptions(i: number) {
    this.localOptionsIndex = i;
  }

  readVisaData() {

    if(this.onboardingVisa.visaType === "Citizen") {

      this.citizenOptionsIndex = 0;
      this.localOptionsIndex = 0;

    } else if(this.onboardingVisa.visaType === "Green Card") {

      this.citizenOptionsIndex = 0;
      this.localOptionsIndex = 1;

    } else {

      this.citizenOptionsIndex = 1;

      this.internationalSelect = this.onboardingVisa.visaType;

      if(this.onboardingVisa.visaType === "Others") {
        this.customVisa = this.onboardingVisa.customType;
      }

      this.startDate = this.onboardingVisa.visaStartDate;
      this.endDate = this.onboardingVisa.visaEndDate;
    }
  }

  saveVisaData() {
    if (this.citizenOptionsIndex === 0) {
      this.onboardingVisa.visaType = this.localOptions[this.localOptionsIndex];
      this.onboardingVisa.visaStartDate = "";
      this.onboardingVisa.visaEndDate = "";
    } else {
      this.onboardingVisa.visaType = this.internationalSelect;
      if (this.internationalSelect === "Other") {
        this.onboardingVisa.customType = this.customVisa;
      }
      this.onboardingVisa.visaStartDate = this.startDate;
      this.onboardingVisa.visaEndDate = this.endDate;
    }
  }

  inputCheck(): void {

    if (this.citizenOptionsIndex === 0) {
      return;
    }

    if (!this.internationalSelect || this.internationalSelect === '') this.ifInternationalSelect = false;

    if (this.internationalSelect) {

      if (this.internationalSelect === "Other") {
        if (!this.customVisa || this.customVisa === '') this.ifCustomVisa = false;
      } else {
        this.ifCustomVisa = true;
      }

      if (!this.startDate || this.startDate === '') this.ifStartDate = false;
      if (!this.endDate || this.endDate === '') this.ifEndDate = false;
    }

  }

  nextCheck(): boolean {
    const test = (field: string) => field && field !== '';

    if (this.citizenOptionsIndex === 0) {
      return true;
    }

    if (!this.internationalSelect || this.internationalSelect === '') {
      return false;
    }

    if (this.internationalSelect === "Other") {
      return [this.startDate, this.endDate, this.customVisa].every(test);
    }

    return [this.startDate, this.endDate,].every(test);
  }

  onSaveClick(): void {

    this.inputCheck();

    if (this.nextCheck()) {
      this.ifUnclockNext = true;

      this.saveVisaData();

      this.onboardingService.postOnboardingVisaService(this.onboardingVisa).subscribe(
        (res) => {
          console.log(res);
        }
      )
      console.log(this.onboardingVisa);
    }
  }

  onPrevClick(): void {
    this.router.navigate(['/onboarding/avatar']);
  }

  onNextClick(): void {
    this.router.navigate(['/onboarding/driving']);
  }

  selectInternationalOptions(event: any) {
    if (!this.internationalSelect || this.internationalSelect === '') {
      this.ifInternationalSelect = false;
      this.ifUnclockNext = false;
    } else {
      this.ifInternationalSelect = true;
    }
  }

  onOtherVisaEdit(event: any) {
    if (!this.customVisa || this.customVisa === '') {
      this.ifCustomVisa = false;
      this.ifUnclockNext = false;
    } else {
      this.ifCustomVisa = true;
    }
  }

  onStartDateSelect(event: any) {
    if (!this.startDate || this.startDate === '') {
      this.ifStartDate = false;
      this.ifUnclockNext = false;
    } else {
      this.ifStartDate = true;
    }
  }

  onEndDateSelect(event: any) {
    if (!this.endDate || this.endDate === '') {
      this.ifEndDate = false;
      this.ifUnclockNext = false;
    } else {
      this.ifEndDate = true;
    }
  }
}
