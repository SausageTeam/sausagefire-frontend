import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Dashboard } from 'src/app/_common/_domain/hr/dashboard/dashboard.module';
import { DashboardService } from 'src/app/_common/_service/hr/dashboard-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChildren(DataTableDirective)
  dtElements: QueryList<DataTableDirective>;

  dashboard : Dashboard = new Dashboard();

  ifWaitingListShow : boolean = false;
  ifNotifyListShow : boolean = false;

  dtHeight : string = "";
  dtOptions: DataTables.Settings = {};

  constructor(
    private dashboardService : DashboardService
  ) { }

  ngOnInit(): void {

    this.dashboardService.getDashboardnService().subscribe(
      (res) => {
        this.dashboard = res.dashboard;

        this.ifWaitingListShow = this.dashboard.waitingList && this.dashboard.waitingList.length !== 0;
        this.ifNotifyListShow = this.dashboard.notifyList && this.dashboard.notifyList.length !== 0;
      }
    );
    
    // this.dashboard = makeEmployeesProfileMork();

    this.dtHeight = this.ifNotifyListShow && this.ifWaitingListShow ? "17vh" : "60vh";

    this.dtOptions = {
      lengthChange: false,
      searching: false,
      scrollY: this.dtHeight,
      paging: false,
      info: false
    }
  }

  onSendClick(employeeId : number) : void {
    console.log(employeeId);
  }

  getFullName(firstName : string, middleName : string, lastName : string) : string {
    return !middleName || middleName === "" ? firstName + " " + lastName : firstName + " " + middleName  + " " + lastName;
  }

}

// import { Trouble } from 'src/app/_common/_domain/hr/dashboard/trouble.module';

// function makeEmployeesProfileMork() {

//   let dashboard = new Dashboard();

//   let waitingList = [];

//   let t = new Trouble();
//   t.firstName = "kevin";
//   t.lastName = "Hu";
//   t.employeeId = 1;
//   t.dayLeft = 1;
//   t.visaEndDate = "2020-03-23";
//   t.workAuthorization  = "F1";
//   t.fileName = "one_piece.pdf";

//   waitingList.push(t);
//   dashboard.waitingList = waitingList;

//   let notifyList = [];

//   let t2 = new Trouble();

//   t2.firstName = "Cara";
//   t2.lastName = "Jiang";
//   t2.employeeId = 2;
//   t2.dayLeft = 10;
//   t2.visaEndDate = "2020-03-33";
//   t2.workAuthorization  = "H4";

//   notifyList.push(t2);

//   t2 = new Trouble();

//   t2.firstName = "Cara2";
//   t2.lastName = "Jiang2";
//   t2.employeeId = 3;
//   t2.dayLeft = 3;
//   t2.visaEndDate = "2020-03-44";
//   t2.workAuthorization  = "H3";

//   notifyList.push(t2);
//   dashboard.notifyList = notifyList;

//   return dashboard;
// }