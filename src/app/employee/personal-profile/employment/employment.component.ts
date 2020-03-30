import { Component, OnInit } from '@angular/core';
import { ProfileEmployment } from 'src/app/_common/_domain/employee/profile/profile-employment.module';
import { PersonalProfileService } from 'src/app/_common/_service/employee/personal-profile.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css', '../personal-profile.module.css']
})
export class EmploymentComponent implements OnInit {

  profileEmployment : ProfileEmployment = new ProfileEmployment();

  displayVisaType : string = "-";
  displayVisaStartDate : string = "-";
  displayVisaEndDate : string = "-";

  constructor(
    private personalProfileService : PersonalProfileService
  ) { }

  ngOnInit(): void {

    this.personalProfileService.getEmploymentService().subscribe(
      (res) => {
        this.profileEmployment = res.profileEmployment;

        if((this.profileEmployment.visaType && this.profileEmployment.visaType === "Green Card") ||
          (this.profileEmployment.visaType && this.profileEmployment.visaType === "Citizen")) {
          this.displayVisaType = "-";
          this.displayVisaStartDate = "-";
          this.displayVisaEndDate = "-";
        }
      }
    );
    
  }

}
