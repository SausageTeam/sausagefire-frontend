import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityReportsIssue } from 'src/app/_common/_domain/employee/housing/facility-reports-issue.module';
import { HousingService } from 'src/app/_common/_service/employee/housing.service';

@Component({
  selector: 'app-facility-report',
  templateUrl: './facility-report.component.html',
  styleUrls: ['./facility-report.component.css']
})
export class FacilityReportComponent implements OnInit {

  facilityReport : FacilityReportsIssue = new FacilityReportsIssue();

  ifTitleEnter : boolean = true;
  ifDescriptionEnter : boolean = true;

  constructor(
    private housingService : HousingService,
    public router : Router
  ) { }

  ngOnInit(): void {
  }

  inputCheck() : void {
    if(!this.facilityReport.title || this.facilityReport.title === '') {
      this.ifTitleEnter = false;
    }
    if(!this.facilityReport.description || this.facilityReport.description === '') {
      this.ifDescriptionEnter = false;
    }
  }

  SubmitCheck() : boolean {
    const test = (field : string) => field && field !== '';

    return [
      this.facilityReport.title,
      this.facilityReport.description
    ].every(test);
  }
  
  onSubmitClick(): void { 
    this.inputCheck();
    
    if(this.SubmitCheck()) {
      console.log("true");
    }
    this.housingService.postFacilityReportService(this.facilityReport).subscribe(
      (res) => {
        // console.log(res);
        alert("Submit Successfully!");
        this.router.navigate(['employee/housing']);
      }
    );
    
  }

  onCancelClick() : void {
    this.router.navigate(['employee/housing']);
  }

  onTitleEdit(event: any): void {
    if (!this.facilityReport.title || this.facilityReport.title === '') {
      this.ifTitleEnter = false;
    } else {
      this.ifTitleEnter = true;
    }
  }

  onDescriptionEdit(event: any): void {
    if (!this.facilityReport.description || this.facilityReport.description === '') {
      this.ifDescriptionEnter = false;
    } else {
      this.ifDescriptionEnter = true;
    }
  }
  
}
