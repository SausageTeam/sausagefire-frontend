import { Component, OnInit } from '@angular/core';
import { MaintenanceHistory } from 'src/app/domain/MaintenanceHistory.module';
import { MaintenanceHistoryService } from 'src/app/shared/_service/MaintenanceHistory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-history',
  templateUrl: './maintenance-history.component.html',
  styleUrls: ['./maintenance-history.component.css']
})
export class MaintenanceHistoryComponent implements OnInit {

  maintenanceHistoryList : MaintenanceHistory[];

  constructor(
    private maintenanceHistoryService : MaintenanceHistoryService,
    private router : Router

  ) { }
  


  ngOnInit(): void {
    this.maintenanceHistoryService.getMaintenanceHistoryService(this.maintenanceHistoryList).subscribe(
      (res) => {
        console.log(res);
        this.maintenanceHistoryList = res.maintenanceHistoryList;
      }
    )
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
