import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/_common/_service/employee/housing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facility-report-list',
  templateUrl: './facility-report-list.component.html',
  styleUrls: ['./facility-report-list.component.css']
})
export class FacilityReportListComponent implements OnInit {

  constructor(
    private housingService : HousingService,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.housingService.getFacilityRecordService().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  onBackClick(): void {
    this.router.navigate(['/employee/housing']);
  }
}