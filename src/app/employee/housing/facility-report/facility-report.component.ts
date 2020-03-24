import { Component, OnInit } from '@angular/core';
import { FacilityReportService } from 'src/app/shared/_service/FacilityReport.service';
import { Router } from '@angular/router';
import { FacilityReport } from 'src/app/domain/facilityReport.module';
import { MaintenanceHistory } from 'src/app/domain/MaintenanceHistory.module';

@Component({
  selector: 'app-facility-report',
  templateUrl: './facility-report.component.html',
  styleUrls: ['./facility-report.component.css']
})
export class FacilityReportComponent implements OnInit {

  facilityReport : FacilityReport = new FacilityReport();

  ifTitleEnter : boolean = true;
  ifDescriptionEnter : boolean = true;

  constructor(
    private facilityReportService : FacilityReportService,
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

  disableSubmit() : boolean {
    return this.ifTitleEnter && this.ifDescriptionEnter;
  }
  
  onSubmitClick(): void { 
    this.inputCheck();
    this.facilityReportService.postFacilityReportService(this.facilityReport).subscribe(
      (res) => {
        console.log(res);
      }
    );
    alert("Submit Successfully!");
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
