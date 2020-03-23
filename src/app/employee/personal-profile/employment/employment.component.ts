import { Component, OnInit } from '@angular/core';
import { ProfileEmployment } from 'src/app/domain/employee/profile/profile-employment.module';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css', '../personal-profile.module.css']
})
export class EmploymentComponent implements OnInit {

  profileEmployment : ProfileEmployment = new ProfileEmployment();

  displayVisaType : string = "";
  displayVisaStartDate : string = "";
  displayVisaEndDate : string = "";

  constructor() { }

  ngOnInit(): void {
    this.profileEmployment.title = "Software Engineer";
    this.profileEmployment.startDate = "2000-01-01";
    this.profileEmployment.endDate = "2020-03-22";
    this.profileEmployment.visaType = "F1";
    this.profileEmployment.visaStartDate = "2000-01-02";
    this.profileEmployment.visaEndDate = "2020-03-23";

    if((this.profileEmployment.visaType && this.profileEmployment.visaType === "Green Card") ||
       (this.profileEmployment.visaType && this.profileEmployment.visaType === "Citizen")) {
      this.displayVisaType = "-";
      this.displayVisaStartDate = "-";
      this.displayVisaEndDate = "-";
    }
  }

}
