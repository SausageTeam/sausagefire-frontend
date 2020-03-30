import { Component, OnInit } from '@angular/core';
// import { AllHousesDetailsService } from 'src/app/shared/_service/AllHousesDetails.service';
import { Router } from '@angular/router';
// import { AllHousesDetails } from 'src/app/domain/allHousesDetails.module';
// import { EmployeeInfo } from 'src/app/domain/employeeInfo.module';

@Component({
  selector: 'app-house-management',
  templateUrl: './house-management.component.html',
  styleUrls: ['./house-management.component.css']
})
export class HouseManagementComponent implements OnInit {

  // allHousesDetailsList : Array<AllHousesDetails>;
  // employeeInfoList : Array<EmployeeInfo>;

  constructor(
    // private allHousesDetailsService : AllHousesDetailsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    // this.allHousesDetailsService.getAllHousesDetailsService(this.allHousesDetailsList).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.allHousesDetailsList = res.allHousesDetailsList;
    //     this.employeeInfoList = res.employeeInfoList;
    //   }
    // )
  }

  // onClick(id): void { 
  //   this.router.navigate(['/hr/houses/house=' + id]);
  // }

  // goToPage(pageName:string) {
  //   this.router.navigate([`${pageName}`])
  // }

}
