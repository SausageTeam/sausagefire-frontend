import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseDetail } from 'src/app/_common/_domain/employee/housing/house-detail.module';
import { HousingService } from 'src/app/_common/_service/employee/housing.service';
import { Resident } from 'src/app/_common/_domain/employee/housing/resident.module';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {

  displayAddressLineOne : string = "-";
  displayAddressLineTwo : string = "-";
  displayAddressCity : string = "-";
  displayAddressState : string = "-";
  displayAddressZipcode : string = "-";

  houseDetail : HouseDetail = new HouseDetail();

  constructor(
    private housingService : HousingService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.housingService.getHousingDetailService().subscribe(
      (res) => {
        // console.log(res);
        this.houseDetail = res.houseDetail;
        if(this.houseDetail) {
          this.displayAddressLineOne = res.houseDetail.addressDomain.addressLineOne ? res.houseDetail.addressDomain.addressLineOne : "-";
          this.displayAddressLineTwo = res.houseDetail.addressDomain.addressLineTwo ? res.houseDetail.addressDomain.addressLineTwo : "-";
          this.displayAddressCity = res.houseDetail.addressDomain.city ? res.houseDetail.addressDomain.city : "-";
          this.displayAddressState = res.houseDetail.addressDomain.stateAbbr ? res.houseDetail.addressDomain.stateAbbr : "-";
          this.displayAddressZipcode = res.houseDetail.addressDomain.zipCode ? res.houseDetail.addressDomain.zipCode : "-";
        }
      }
    )
  }

  onReportClick(): void { 
    this.router.navigate(['/employee/housing/report']);
  }

  onListClick(): void { 
    this.router.navigate(['/employee/housing/report-list']);
  }

}
