import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeRecord } from 'src/app/domain/hr/employee-profile/employee-record.module';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;

  search: string = "";

  dtOptions: DataTables.Settings = {};

  employeesProfile : Array<EmployeeRecord> = null;

  constructor() { }

  ngOnInit(): void {

    // custom filter
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {

      const test = (field : string) => field.includes(this.search);

      return data.some(test);
    });

    this.dtOptions = {
      pageLength: 10,
      lengthChange: false,
      // searching: false,
      scrollY: "50vh"
    }

    this.employeesProfile = makeEmployeesProfileMork();
  }


  onSearchEdit(event: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

}

function makeEmployeesProfileMork() : Array<EmployeeRecord> {
  let employeesProfileMork = new Array<EmployeeRecord>();

  for(let i = 0; i < 10; i++) {
    let e = new EmployeeRecord();
    e.name = "bob" + i;
    e.ssn = "123123123" + i;
    e.startDate = "1990-01-1" + i;
    e.visaStatus = "F1";
    employeesProfileMork.push(e);
  }

  for(let i = 0; i < 10; i++) {
    let e = new EmployeeRecord();
    e.name = "jack" + i;
    e.ssn = "444555666" + i;
    e.startDate = "1993-02-1" + i;
    e.visaStatus = "H1";
    employeesProfileMork.push(e);
  }

  return employeesProfileMork;
}