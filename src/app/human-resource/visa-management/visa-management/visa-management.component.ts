import { Component, OnInit } from '@angular/core';
import { VisaStatusManagement } from 'src/app/domain/hr/visa-status/visa-status-management.module';

@Component({
  selector: 'app-visa-management',
  templateUrl: './visa-management.component.html',
  styleUrls: ['./visa-management.component.css']
})
export class VisaManagementComponent implements OnInit {

  visaStatusManagement : VisaStatusManagement = new VisaStatusManagement();

  constructor() { }

  ngOnInit(): void {

    this.visaStatusManagement = visaStatusManagementMosk();

    console.log(this.visaStatusManagement);
  }

}


import { VisaStatusRecord } from 'src/app/domain/hr/visa-status/visa-status-record.module';

function visaStatusManagementMosk() {
  let visaStatusManagement : VisaStatusManagement = new VisaStatusManagement();

  let records = new Array<VisaStatusRecord>();
  let record = new VisaStatusRecord();

  record.employeeId = 1;

  record.firstName = "Zack";
  record.lastName = "Yu";

  record.workAuthorization = "F1";

  record.dayLeft = 10;

  record.visaStatus = "F1";

  record.visaStartDate = "2019-03-24";
  record.visaEndDate = "2009-03-25";

  record.nextStep = "OPT STEM EAD";

  records.push(record);

  record = new VisaStatusRecord();

  record.employeeId = 2;

  record.firstName = "Zock";
  record.lastName = "Yo";

  record.workAuthorization = "F2";

  record.dayLeft = 11;

  record.visaStatus = "F1";

  record.visaStartDate = "2019-03-24";
  record.visaEndDate = "2019-03-25";

  record.nextStep = "OPT STEM EAD";

  records.push(record);

  visaStatusManagement.visaStatusRecordList = records;

  return visaStatusManagement;
}