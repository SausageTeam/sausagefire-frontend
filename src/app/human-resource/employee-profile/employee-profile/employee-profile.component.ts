import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeRecord } from 'src/app/_common/_domain/hr/employee-profile/employee-record.module';
import { DataTableDirective } from 'angular-datatables';
import { EmployeeProfileService } from 'src/app/_service/hr/employee-profile-service';

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

  constructor(
    private employeeProfileService : EmployeeProfileService
  ) { }

  ngOnInit(): void {

    this.employeeProfileService.getEmployeeProfileService().subscribe(
      (res) => {
        console.log(res);
        this.employeesProfile = res.employeeProfile.employeeRecordList;
      }
    );

    // custom filter
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {

      const test = (field : string) => field.includes(this.search);

      console.log(data);

      return data.some(test);
    });

    this.dtOptions = {
      pageLength: 10,
      lengthChange: false,
      // searching: false,
      scrollY: "50vh"
    }
  }

  onSearchEdit(event: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

}