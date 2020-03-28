import { Component, OnInit, Input } from '@angular/core';
import { VisaStatusRecord } from 'src/app/domain/hr/visa-status/visa-status-record.module';

@Component({
  selector: 'app-visa-management-record',
  templateUrl: './visa-management-record.component.html',
  styleUrls: ['./visa-management-record.component.css']
})
export class VisaManagementRecordComponent implements OnInit {

  @Input() visaStatusRecord: VisaStatusRecord;

  ifExpand : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getFullName() : string {
    let fullName : string = "";

    fullName += this.visaStatusRecord.firstName;

    if(this.visaStatusRecord.middleName && this.visaStatusRecord.middleName !== "")
      fullName += " " + this.visaStatusRecord.middleName;

    fullName += " " + this.visaStatusRecord.lastName;

    return fullName;
  }

  onExpandClick() : void {
    this.ifExpand = !this.ifExpand;
  }
}
